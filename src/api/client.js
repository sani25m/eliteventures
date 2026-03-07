/**
 * API client for Elite Ventures backend.
 */
const BASE =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace(/\/$/, "")
    : "http://localhost:3001";

function authHeaders(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(path, options = {}) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = [data.error, data.detail].filter(Boolean).join(": ") || res.statusText;
    throw new Error(msg);
  }
  return data;
}

/** Public: submit form from front-end (optional userId when user is logged in) */
export async function submitForm(source, data, userId = null) {
  const body = { source, data };
  if (userId) body.user_id = userId;
  return request("/api/submissions", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/** Client: get my submissions (requires Supabase access token) */
export async function getMySubmissions(accessToken) {
  return request("/api/my-submissions", {
    headers: authHeaders(accessToken),
  });
}

/** Admin: login */
export async function adminLogin(password) {
  return request("/api/admin/login", {
    method: "POST",
    body: JSON.stringify({ password }),
  });
}

/** Admin: list submissions, optional search and source (form type) filter */
export async function getSubmissions(token, search = "", source = "") {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (source) params.set("source", source);
  const q = params.toString() ? `?${params.toString()}` : "";
  return request(`/api/submissions${q}`, {
    headers: authHeaders(token),
  });
}

/** Admin: get one submission */
export async function getSubmission(token, id) {
  return request(`/api/submissions/${id}`, {
    headers: authHeaders(token),
  });
}

/** Admin: update submission */
export async function updateSubmission(token, id, body) {
  return request(`/api/submissions/${id}`, {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify(body),
  });
}

/** Admin: delete submission */
export async function deleteSubmission(token, id) {
  const url = `${BASE}/api/submissions/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: authHeaders(token),
  });
  if (res.status === 204) return;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = [data.error, data.detail].filter(Boolean).join(": ") || res.statusText;
    throw new Error(msg);
  }
}

/** Public: subscribe to newsletter / news alerts */
export async function subscribeNewsletter(email) {
  return request("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({ email: email.trim() }),
  });
}

/** Public: record a site visit (call once per session from frontend) */
export async function recordVisit() {
  const url = `${BASE}/api/visit`;
  const res = await fetch(url, { method: "POST" });
  if (!res.ok && res.status !== 204) {
    const data = await res.json().catch(() => ({}));
    const msg = [data.error, data.detail].filter(Boolean).join(": ") || res.statusText;
    throw new Error(msg);
  }
}

/** Admin: dashboard stats (visitor count, etc.) */
export async function getAdminStats(token) {
  return request("/api/admin/stats", { headers: authHeaders(token) });
}
