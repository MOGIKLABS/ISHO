# Ishō (衣装) Deployment Architecture

Deployment strategy and coding architecture for the Ishō cosplay ideation platform on Vercel.

---

## 1. Tech Stack

| Layer              | Choice                          | Why                                                        |
| ------------------ | ------------------------------- | ---------------------------------------------------------- |
| Framework          | Next.js (App Router)            | File-based routing, server components, Vercel-native       |
| Styling            | Tailwind CSS                    | Matches existing utility patterns; design token mapping    |
| Server State       | TanStack Query (React Query)    | Caching, refetching, and loading states for API calls      |
| Local/Editor State | Zustand                         | Lightweight store for doll configuration and editor state  |
| Deployment         | Vercel                          | CI/CD via GitHub, preview deploys on every PR              |

---

## 2. Project Structure

```text
isho-lab/
├── public/                  # Static assets, logos, favicon
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── dashboard/       # Home overview and saved projects
│   │   ├── editor/          # Doll prototyping and outfit builder
│   │   ├── mash-up/         # AI-assisted style remixing studio
│   │   └── inventory/       # Saved outfits and component library
│   ├── components/          # Shared UI (TopNav, BottomBar, Cards)
│   ├── hooks/               # Custom hooks (useGeminiAnalysis, useWhiskGenerate)
│   ├── store/               # Zustand stores (editorStore, inventoryStore)
│   ├── styles/              # Global CSS, Tailwind config overrides
│   └── lib/                 # API clients and utilities
│       ├── gemini.ts        # Gemini API wrapper
│       ├── whisk.ts         # Whisk image generation client
│       └── constants.ts     # Shared config values
├── tailwind.config.js       # Design system token mapping (Y2K Laboratory aesthetic)
├── next.config.js           # Next.js configuration
├── .env.local               # Local environment variables (not committed)
└── .env.example             # Template showing required env vars
```

---

## 3. Environment Variables

Create a `.env.example` at the root so anyone cloning the repo knows what to set up:

```env
# Required
GEMINI_API_KEY=           # Google Gemini API key for AI outfit analysis and refinement
WHISK_API_ENDPOINT=       # Endpoint for Whisk image generation service

# Optional
NEXT_PUBLIC_APP_URL=      # Base URL (auto-set by Vercel in production)
```

Add these same variables in the Vercel dashboard under **Project Settings > Environment Variables**. Set separate values for Production, Preview, and Development if needed.

---

## 4. Deployment Flow

### First-time setup

1. Push the repo to GitHub.
2. Import the project into Vercel (it auto-detects Next.js).
3. Add environment variables in the Vercel dashboard.
4. Deploy. Vercel handles the build command (`next build`) automatically.

### Ongoing workflow

- **Every push to `main`** triggers a production deployment.
- **Every pull request** gets its own preview URL, useful for testing features before merging.
- **Rollbacks** are one click in the Vercel dashboard if a deployment causes problems.

---

## 5. Edge Functions

Use Vercel Edge Functions for any route that needs low latency, particularly:

- **Mash-up Studio streaming**: The real-time feel of AI-assisted remixing depends on fast response times. Edge Functions keep the connection close to the user.
- **Gemini API proxying**: Route AI requests through an Edge Function so the API key stays server-side and responses stream back quickly.

Place Edge Functions in `src/app/api/` using the App Router convention:

```text
src/app/api/
├── gemini/
│   └── route.ts        # Gemini analysis endpoint (Edge runtime)
├── whisk/
│   └── route.ts        # Whisk generation endpoint (Edge runtime)
└── health/
    └── route.ts        # Simple health check
```

To opt a route into Edge runtime, add this export at the top of the file:

```ts
export const runtime = 'edge';
```

---

## 6. Key Implementation Notes

### Design system mapping

Map the Y2K Laboratory design tokens directly into `tailwind.config.js` as custom theme values (colours, fonts, spacing). This keeps the aesthetic consistent without scattering magic values across components.

### Image upload (Dropbox area)

Use `react-dropzone` for the drag-and-drop upload zone. Back it with an API route that handles `multipart/form-data`, validates the file type and size, then passes the image to Gemini for analysis.

### Editor (doll prototyping)

Use an SVG layering approach for the modular outfit builder. Each body zone (hair, torso, legs, accessories) is a separate SVG layer that can be swapped independently. This is simpler to build and maintain than a full canvas solution, and scales well for the modular swap interactions described in the brief.

### Error and loading states

Every page that calls an external API (Gemini, Whisk) should handle three states clearly: loading, success, and error. TanStack Query gives you `isLoading`, `isError`, and `data` out of the box, so wire those into the UI from the start rather than retrofitting later.

---

## 7. Pre-deployment Checklist

- [ ] All environment variables added to Vercel dashboard
- [ ] `.env.example` committed (`.env.local` in `.gitignore`)
- [ ] Build runs cleanly with `next build` locally
- [ ] API routes return proper error responses (not unhandled exceptions)
- [ ] Images and static assets in `public/` are optimised (compressed, correct format)
- [ ] Preview deployment tested on at least one PR before going to production
