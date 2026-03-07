import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

function rowToSubmission(row) {
  return {
    id: row.id,
    userId: row.user_id,
    source: row.source,
    data: row.data || {},
    createdAt: row.created_at,
  };
}

export async function getSubmissions(search = "", source = "") {
  let query = supabase
    .from("submissions")
    .select("id, user_id, source, data, created_at")
    .order("created_at", { ascending: false });
  if (source && source.trim()) {
    query = query.eq("source", source.trim());
  }
  const { data, error } = await query;
  if (error) throw error;
  let list = (data || []).map(rowToSubmission);
  if (search && search.trim()) {
    const term = search.trim().toLowerCase();
    list = list.filter(
      (s) =>
        (s.source && s.source.toLowerCase().includes(term)) ||
        (s.data && JSON.stringify(s.data).toLowerCase().includes(term))
    );
  }
  return list;
}

export async function getSubmissionById(id) {
  const { data, error } = await supabase
    .from("submissions")
    .select("id, user_id, source, data, created_at")
    .eq("id", id)
    .single();
  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }
  return data ? rowToSubmission(data) : null;
}

export async function addSubmission(payload) {
  const source = typeof payload?.source === "string" ? payload.source.trim() : "";
  const data = payload?.data && typeof payload.data === "object" ? payload.data : {};
  const userId = payload?.userId ?? null;
  if (!source) throw new Error("Submission source is required");
  const insert = { source, data };
  if (userId) insert.user_id = userId;
  const { data: row, error } = await supabase
    .from("submissions")
    .insert(insert)
    .select("id, user_id, source, data, created_at")
    .single();
  if (error) throw error;
  return rowToSubmission(row);
}

export async function updateSubmission(id, { source, data }) {
  const payload = {};
  if (source !== undefined) payload.source = source;
  if (data !== undefined) payload.data = data;
  if (Object.keys(payload).length === 0) return getSubmissionById(id);
  const { data: row, error } = await supabase
    .from("submissions")
    .update(payload)
    .eq("id", id)
    .select("id, user_id, source, data, created_at")
    .single();
  if (error) throw error;
  return rowToSubmission(row);
}

export async function deleteSubmission(id) {
  const { error } = await supabase.from("submissions").delete().eq("id", id);
  if (error) throw error;
  return true;
}

export async function getSubmissionsByUserId(userId) {
  const { data, error } = await supabase
    .from("submissions")
    .select("id, user_id, source, data, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(rowToSubmission);
}

export async function addVisit() {
  const { error } = await supabase.from("visits").insert({});
  if (error) throw error;
}

export async function getVisitCount() {
  const { count, error } = await supabase.from("visits").select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
}

export async function addSubscription(email) {
  const raw = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!raw || !raw.includes("@")) throw new Error("Valid email is required");
  const { error } = await supabase.from("newsletter_subscriptions").insert({ email: raw });
  if (error) {
    if (error.code === "23505") return { subscribed: true };
    throw error;
  }
  return { subscribed: true };
}
