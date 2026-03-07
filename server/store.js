import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const SUBMISSIONS_FILE = join(DATA_DIR, "submissions.json");
const VISITS_FILE = join(DATA_DIR, "visits.json");
const SUBSCRIPTIONS_FILE = join(DATA_DIR, "subscriptions.json");

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

function readJson(path, defaultValue) {
  ensureDir();
  if (!existsSync(path)) return defaultValue;
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return defaultValue;
  }
}

function writeJson(path, data) {
  ensureDir();
  writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
}

const useSupabase =
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY;

async function getStore() {
  if (useSupabase) return await import("./store-supabase.js");
  return null;
}

function normalizeEntry(entry) {
  return {
    id: entry.id,
    userId: entry.userId ?? entry.user_id,
    source: entry.source,
    data: entry.data || {},
    createdAt: entry.createdAt || entry.created_at,
  };
}

export async function getSubmissions(search = "", source = "") {
  const store = await getStore();
  if (store) return store.getSubmissions(search, source);
  const data = readJson(SUBMISSIONS_FILE, []);
  let list = Array.isArray(data) ? data.map(normalizeEntry) : [];
  if (source && source.trim()) {
    const src = source.trim();
    list = list.filter((s) => s.source === src);
  }
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
  const store = await getStore();
  if (store) return store.getSubmissionById(id);
  const list = await getSubmissions();
  const entry = list.find((s) => s.id === id);
  return entry ? normalizeEntry(entry) : null;
}

export async function addSubmission(submission) {
  const source = typeof submission?.source === "string" ? submission.source.trim() : "";
  const data = submission?.data && typeof submission.data === "object" ? submission.data : {};
  const userId = submission?.userId ?? null;
  if (!source) throw new Error("Submission source is required");
  const store = await getStore();
  if (store) return store.addSubmission({ source, data, userId });
  const list = await getSubmissions();
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    userId: userId || undefined,
    source,
    data,
    createdAt: new Date().toISOString(),
  };
  list.unshift(entry);
  writeJson(SUBMISSIONS_FILE, list);
  return normalizeEntry(entry);
}

export async function updateSubmission(id, payload) {
  const store = await getStore();
  if (store) return store.updateSubmission(id, payload);
  const list = await getSubmissions();
  const idx = list.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  if (payload.source !== undefined) list[idx].source = payload.source;
  if (payload.data !== undefined) list[idx].data = payload.data;
  writeJson(SUBMISSIONS_FILE, list);
  return normalizeEntry(list[idx]);
}

export async function deleteSubmission(id) {
  const store = await getStore();
  if (store) return store.deleteSubmission(id);
  const list = await getSubmissions();
  const next = list.filter((s) => s.id !== id);
  if (next.length === list.length) return false;
  writeJson(SUBMISSIONS_FILE, next);
  return true;
}

export async function getSubmissionsByUserId(userId) {
  const store = await getStore();
  if (store) return store.getSubmissionsByUserId(userId);
  const list = await getSubmissions();
  const uid = String(userId);
  return list.filter((s) => (s.userId ?? s.user_id) === uid);
}

export async function addVisit() {
  const store = await getStore();
  if (store && store.addVisit) return store.addVisit();
  const data = readJson(VISITS_FILE, []);
  const list = Array.isArray(data) ? data : [];
  list.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2), createdAt: new Date().toISOString() });
  writeJson(VISITS_FILE, list);
}

export async function getVisitCount() {
  const store = await getStore();
  if (store && store.getVisitCount) return store.getVisitCount();
  const data = readJson(VISITS_FILE, []);
  const list = Array.isArray(data) ? data : [];
  return list.length;
}

export async function addSubscription(email) {
  const store = await getStore();
  if (store && store.addSubscription) return store.addSubscription(email);
  const raw = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!raw || !raw.includes("@")) throw new Error("Valid email is required");
  const data = readJson(SUBSCRIPTIONS_FILE, []);
  const list = Array.isArray(data) ? data : [];
  if (list.some((e) => (e.email || e).toLowerCase() === raw)) return { subscribed: true };
  list.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2), email: raw, createdAt: new Date().toISOString() });
  writeJson(SUBSCRIPTIONS_FILE, list);
  return { subscribed: true };
}
