import "dotenv/config";
import express from "express";
import cors from "cors";
import {
  getSubmissions,
  getSubmissionById,
  addSubmission,
  updateSubmission,
  deleteSubmission,
  getSubmissionsByUserId,
  addVisit,
  getVisitCount,
  addSubscription,
} from "./store.js";

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || "admin").trim();
const ADMIN_TOKEN = (process.env.ADMIN_TOKEN || "dev-admin-token").trim();
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: [FRONTEND_ORIGIN, "http://localhost:5173", "https://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

function authAdmin(req, res, next) {
  const token =
    req.headers.authorization?.replace(/^Bearer\s+/i, "") || req.query.token;
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

// Public: submit form data from any front-end form
app.post("/api/submissions", async (req, res) => {
  try {
    const body = req.body || {};
    const source = typeof body.source === "string" ? body.source.trim() : "";
    const data = body.data && typeof body.data === "object" ? body.data : null;
    if (!source || data === null) {
      return res
        .status(400)
        .json({ error: "Missing source and data in body" });
    }
    const userId = typeof body.user_id === "string" ? body.user_id : null;
    const submission = await addSubmission({ source, data, userId });
    console.log("Submission saved:", source, submission.id);
    res.status(201).json({ id: submission.id, ok: true });
  } catch (err) {
    console.error("POST /api/submissions error:", err);
    res.status(500).json({
      error: "Failed to save submission",
      detail: err.message || String(err),
    });
  }
});

// Admin: list submissions (optional ?search= and ?source= for one form type)
app.get("/api/submissions", authAdmin, async (req, res) => {
  try {
    const search = req.query.search || "";
    const source = req.query.source || "";
    const list = await getSubmissions(search, source);
    res.json(list);
  } catch (err) {
    console.error("GET /api/submissions error:", err);
    res.status(500).json({
      error: "Failed to load submissions",
      detail: err.message || String(err),
    });
  }
});

// Admin: get one submission
app.get("/api/submissions/:id", authAdmin, async (req, res) => {
  try {
    const submission = await getSubmissionById(req.params.id);
    if (!submission) return res.status(404).json({ error: "Not found" });
    res.json(submission);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load submission" });
  }
});

// Admin: update submission
app.put("/api/submissions/:id", authAdmin, async (req, res) => {
  try {
    const { source, data } = req.body || {};
    const updated = await updateSubmission(req.params.id, { source, data });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update submission" });
  }
});

// Admin: delete submission
app.delete("/api/submissions/:id", authAdmin, async (req, res) => {
  try {
    const ok = await deleteSubmission(req.params.id);
    if (!ok) return res.status(404).json({ error: "Not found" });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete submission" });
  }
});

// Public: newsletter / news alert subscription
app.post("/api/subscribe", async (req, res) => {
  try {
    const email = typeof req.body?.email === "string" ? req.body.email.trim() : "";
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }
    await addSubscription(email);
    res.status(201).json({ subscribed: true });
  } catch (err) {
    console.error("POST /api/subscribe error:", err);
    res.status(500).json({ error: "Failed to subscribe", detail: err.message || String(err) });
  }
});

// Public: record a site visit (no auth; call once per session from frontend)
app.post("/api/visit", async (req, res) => {
  try {
    await addVisit();
    res.status(204).send();
  } catch (err) {
    console.error("POST /api/visit error:", err);
    res.status(500).json({ error: "Failed to record visit", detail: err.message || String(err) });
  }
});

// Admin: dashboard stats (visitor count, etc.)
app.get("/api/admin/stats", authAdmin, async (req, res) => {
  try {
    const visitorCount = await getVisitCount();
    res.json({ visitorCount });
  } catch (err) {
    console.error("GET /api/admin/stats error:", err);
    res.status(500).json({ error: "Failed to load stats", detail: err.message || String(err) });
  }
});

// Admin: login
app.post("/api/admin/login", (req, res) => {
  const raw = req.body?.password;
  const password = typeof raw === "string" ? raw.trim() : "";
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Invalid password" });
  }
  res.json({ token: ADMIN_TOKEN });
});

// Client: get my submissions (requires Supabase JWT)
async function authUser(req, res, next) {
  const token =
    req.headers.authorization?.replace(/^Bearer\s+/i, "") || req.query.token;
  if (!token) {
    return res.status(401).json({ error: "Authorization required" });
  }
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnon = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnon) {
    return res.status(503).json({ error: "Client auth not configured" });
  }
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseAnon, {
      auth: { persistSession: false },
    });
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error("authUser error:", err);
    res.status(500).json({ error: "Auth verification failed" });
  }
}

app.get("/api/my-submissions", authUser, async (req, res) => {
  try {
    const list = await getSubmissionsByUserId(req.user.id);
    res.json(list);
  } catch (err) {
    console.error("GET /api/my-submissions error:", err);
    res.status(500).json({
      error: "Failed to load submissions",
      detail: err.message || String(err),
    });
  }
});

app.listen(PORT, () => {
  console.log(`Elite Ventures API running at http://localhost:${PORT}`);
});
