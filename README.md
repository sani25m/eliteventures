# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy to Netlify

1. Push your repo to GitHub (or GitLab/Bitbucket).

2. In [Netlify](https://www.netlify.com/): **Add new site → Import an existing project**, connect your Git provider, and select this repo.

3. Netlify will use the built-in settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Redirects:** `/*` → `/index.html` (200) for SPA routing

4. Click **Deploy**. Your site will be live at a `*.netlify.app` URL. You can add a custom domain in **Domain settings**.

## Admin & API (backend)

The app includes an **admin area** (dashboard and submissions) and an **Express API** that stores form data. Optionally use **Supabase** for the database.

### Run the API server

1. From the project root:
   ```bash
   cd server
   npm install
   cp .env.example .env
   ```
2. Edit `server/.env`: set `ADMIN_PASSWORD` and `ADMIN_TOKEN` for production.
3. (Optional) To use **Supabase**: add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `server/.env`, then run `server/supabase/schema.sql` in the Supabase SQL Editor. If not set, submissions are stored in `server/data/submissions.json`.
4. Start the server:
   ```bash
   npm run dev
   ```
   The API runs at **http://localhost:3001** by default.

### Run the front-end with the API

- The front-end uses **http://localhost:3001** when `VITE_API_URL` is not set.
- For production, set `VITE_API_URL` to your deployed API URL before building.
- Optional: set `VITE_WHATSAPP_NUMBER` (e.g. `971501234567`) so the admin **WhatsApp** button uses your business number.

### Admin area

1. With the API running, open **http://localhost:5173/admin** and log in with `ADMIN_PASSWORD`.
2. **Dashboard**: submission counts by source and recent entries.
3. **Submissions**: search by name, email, source; view each submission; **Email** (mailto) and **WhatsApp** links to contact the lead; **Edit** (source and form fields) and **Delete** (with confirm).

Form data from the public site (Contact, Digital Marketing, Banking, Company Formation, Project Management, Tax & Compliance) is sent to the API and appears under **Admin → Submissions**.
