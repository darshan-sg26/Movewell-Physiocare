# Chinmay Physiotherapy — Home Visit Website (v1.0)

A fast, accessible, mobile-first marketing and enquiry website built for **Chinmay**, an independent physiotherapist who travels to patients' homes in Bengaluru.

## Architecture & Technology Stack

- **Framework**: Next.js 14+ (App Router, Server Components by default)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with custom design system token extensions)
- **Typography**: Self-hosted `Plus_Jakarta_Sans` via `next/font/google`
- **Iconography**: `lucide-react`
- **SEO & Social**: Next.js Metadata API, Schema.org JSON-LD (Service Area Business), OpenGraph dynamic image generator, `sitemap.ts`, `robots.ts`
- **Forms**: Native React state + Serverless API Route (`/api/enquiry`) with Honeypot spam protection & ARIA live announcements
- **Analytics**: Lightweight no-op tracking stub (`src/lib/track.ts`)

---

## Getting Started Locally

### 1. Prerequisites
- Node.js 18.x or 20+
- npm 9+

### 2. Installation
```bash
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to test locally.

### 4. Build & Lint Validation
```bash
npm run build
npm run lint
```

---

## Configuration & Environment Variables

Copy `.env.example` to `.env.local` to configure optional serverless form submission endpoints:

```bash
cp .env.example .env.local
```

### Environment Variables List
- `ENQUIRY_WEBHOOK_URL`: Optional webhook URL (e.g., Slack, Zapier, Web3Forms, Make.com) to receive enquiry submissions.
- `ENQUIRY_API_KEY`: Transactional email service API key (e.g., Resend, SendGrid) if wiring direct email delivery.

---

## How to Update Site Data & Imagery

### 1. Business Info & Phone Numbers (`/src/data/site.ts`)
To update Chinmay's registration number, locality list, pricing, or availability when confirmed, edit `src/data/site.ts`. All site references pull from this single source of truth.

### 2. Services List (`/src/data/services.ts`)
Add, modify, or remove service categories. Once confirmed with Chinmay, set `isPlaceholder: false` on items to remove the UI placeholder badges.

### 3. Conditions List (`/src/data/conditions.ts`)
Update condition reference categories and descriptions in `src/data/conditions.ts`.

### 4. Image Replacement (`/public/images/README.md`)
Drop optimized WebP or JPEG photos into `/public/images/` following the filename guidelines in `public/images/README.md`, then update component image sources.

---

## Deployment to Vercel

This repository is ready to deploy directly on Vercel with zero extra configuration:
1. Push repository to GitHub/GitLab.
2. Import project into Vercel.
3. (Optional) Set `ENQUIRY_WEBHOOK_URL` in Vercel Environment Variables.
4. Deploy!
