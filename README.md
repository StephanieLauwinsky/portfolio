# Stephanie Lauwinsky — Portfolio

Next.js (App Router) + Tailwind CSS v4. Hand-drawn / sketchbook style.

## Edit content

Everything you'd want to change lives in **`src/content/site.ts`**:

- `site`: name, role, tagline, bio, email, social links, section headings
- `projects`: case studies (shown on the home page and at `/works/<slug>`)
- `photos`: images for the camera section

To use real images, put files in `public/` (e.g. `public/works/ops.png`) and set
`image: "/works/ops.png"` on the project/photo, or `portrait: "/me.jpg"` on `site`.
Anything without an image shows a labelled placeholder.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub and import the repo on Vercel (zero config).
