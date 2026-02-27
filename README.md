# Portfolio – John Angelo Santos (Clone)

A Next.js clone of [john-angelo-santos.vercel.app](https://john-angelo-santos.vercel.app/).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1: Deploy with Git (recommended)

1. **Push your code to GitHub** (or GitLab / Bitbucket):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Import the project on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in (use “Continue with GitHub” if your repo is on GitHub).
   - Click **Add New…** → **Project**.
   - Import your repository. Vercel will detect Next.js and set **Framework Preset: Next.js** and **Build Command: `next build`**.
   - Click **Deploy**. Vercel will build and deploy and give you a URL like `your-project.vercel.app`.

3. **Later updates:** Push to `main` (or your production branch); Vercel will automatically redeploy.

### Option 2: Deploy with Vercel CLI

1. **Install the CLI and log in:**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Deploy from your project folder:**
   ```bash
   cd d:\Portfolio\Portfolio
   vercel
   ```
   - First run: follow the prompts (link to existing project or create new one, no override of build settings needed).
   - Your site will be built and you’ll get a preview URL. Use `vercel --prod` when you want to deploy to production.

**Notes:**

- No extra config is required; Vercel uses your `package.json` scripts (`next build`).
- If you use **environment variables** (e.g. in `.env.local`), add them in the Vercel project: **Settings → Environment Variables**.
- Custom domain: **Project → Settings → Domains** to add your own domain.

## Structure

- **Home** (`/`) – Hero, Quick & Fun Facts, Tech Skills, Work preview, Recent Projects preview
- **Work** (`/work`) – Full work experience list
- **Projects** (`/projects`) – Project grid with links to project detail pages
- **Project detail** (`/projects/[slug]`) – Single project page

Content is centralized in `src/data/content.ts` for easy edits.
