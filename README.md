# 衣装 Ishō

AI-powered cosplay ideation platform. Remix reference images, prototype outfits on a modular doll editor, and build your look before you build the costume.

## Quick start

```bash
# 1. Clone the repo
git clone https://github.com/mogiklabs/isho-lab.git
cd isho-lab

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Then open .env.local and add your API keys

# 4. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add your environment variables (`GEMINI_API_KEY`, `WHISK_API_ENDPOINT`) in the Vercel dashboard.
4. Deploy. Vercel auto-detects Next.js and handles everything else.

Every push to `main` triggers a production deploy. Every pull request gets a preview URL.

## Project structure

```
isho-lab/
├── docs/                # Architecture and deployment docs
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages and API routes
│   ├── components/      # Shared UI components
│   ├── hooks/           # Custom React hooks (Gemini, Whisk)
│   ├── store/           # Zustand state stores
│   ├── styles/          # Global CSS and Tailwind overrides
│   └── lib/             # API clients and shared utilities
├── tailwind.config.js   # Design tokens (Y2K Laboratory aesthetic)
└── next.config.js
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full deployment architecture.

## Tech stack

- **Next.js** (App Router) on **Vercel**
- **Tailwind CSS** with custom Y2K Laboratory design tokens
- **TanStack Query** for server state
- **Zustand** for local editor state
- **Google Gemini** for AI outfit analysis
- **Whisk** for AI image generation
- **Edge Functions** for low-latency API proxying

## Licence

Private. All rights reserved.
