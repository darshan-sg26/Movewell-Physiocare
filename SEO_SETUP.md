# Google Search Console & Local SEO Setup Guide

This document outlines the step-by-step procedure for deploying **MoveWell Physiocare** (`https://movewellphysiocare.com`) to production, setting up Google Search Console, submitting the sitemap, and monitoring local search visibility in Bengaluru.

---

## 1. Deploy the Production Website

1. Deploy the Next.js project to your production hosting environment (e.g. Vercel, Netlify, or custom VPS).
2. Connect your custom domain: `movewellphysiocare.com`.
3. Verify that HTTPS is active and SSL certificates are valid.
4. Test that `https://movewellphysiocare.com/sitemap.xml` and `https://movewellphysiocare.com/robots.txt` are publicly accessible and load with `200 OK`.

---

## 2. Add Domain Property in Google Search Console

1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Choose **Domain** property type (recommended for root domain coverage):
   - Enter: `movewellphysiocare.com`
   - *Alternatively, if using URL-prefix property:* enter `https://movewellphysiocare.com`.

---

## 3. Verify Domain Ownership

Choose one of Google's official verification methods:

- **DNS TXT Record (Recommended for Domain property)**:
  - Copy the TXT record provided by Google.
  - Log in to your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare).
  - Add a TXT record for `@` with the Google verification code.
  - Wait for DNS propagation and click **Verify** in Search Console.
- **HTML Tag (For URL-prefix property)**:
  - If using an HTML verification meta tag, add the exact tag provided by Google to the `verification.google` property in `src/app/layout.tsx`.
  - *Note: Do not use placeholder or fake verification tokens.*

---

## 4. Submit the XML Sitemap

1. In Google Search Console, select the `movewellphysiocare.com` property.
2. In the left navigation menu, click **Sitemaps** (under Indexing).
3. Under **Add a new sitemap**, enter:
   ```text
   sitemap.xml
   ```
4. Click **Submit**.
5. Verify the status changes to **Success**.

The sitemap lists all 7 canonical production pages:
- `https://movewellphysiocare.com/`
- `https://movewellphysiocare.com/about`
- `https://movewellphysiocare.com/services`
- `https://movewellphysiocare.com/home-physiotherapy`
- `https://movewellphysiocare.com/areas-we-serve`
- `https://movewellphysiocare.com/faq`
- `https://movewellphysiocare.com/contact`

---

## 5. Inspect Important URLs & Request Indexing

1. Use the **URL Inspection** tool at the top of Google Search Console.
2. Inspect the core target pages:
   - `https://movewellphysiocare.com/` (Home Physiotherapy in Bengaluru)
   - `https://movewellphysiocare.com/home-physiotherapy` (Home Visit Model)
   - `https://movewellphysiocare.com/areas-we-serve` (Hegganahalli Cross Service Area)
   - `https://movewellphysiocare.com/services` (Services & Conditions)
3. Click **Test Live URL** to verify:
   - HTTP status is `200`
   - Canonical URL matches the requested URL
   - Robots meta tag is set to `index, follow`
4. Click **Request Indexing** to submit the page to Google's crawl queue.

---

## 6. Local Search Visibility & Google Business Profile Strategy

MoveWell Physiocare operates **exclusively as a home-visit service with no physical clinic**.

When preparing or managing a Google Business Profile (GBP):
- Select **Service-Area Business (SAB)** — do **NOT** enter a public physical address or clinic location.
- Specify the service area as **Hegganahalli Cross, Bengaluru** (with approximate 5–10 km coverage).
- Keep business name consistent: `MoveWell Physiocare`.
- Primary Category: `Physical therapy clinic` or `Physiotherapist`.
- Primary Phone: `+91 91132 85572`.
- Website URL: `https://movewellphysiocare.com`.

---

## 7. Monitor Indexing & Search Performance

1. **Pages Report**: Check weekly for any crawl anomalies, 404s, or canonical mismatches.
2. **Performance Report**: Review search queries driving impressions for:
   - "home physiotherapy Bengaluru"
   - "home visit physiotherapist Hegganahalli Cross"
   - "physiotherapy at home Bengaluru"
3. **Core Web Vitals & Page Experience**: Ensure mobile page load speeds and Cumulative Layout Shift (CLS) remain in the green threshold.

> **Important Note:** Google Search Console tools help Google discover and evaluate pages, but search indexing and rankings are determined by Google's search algorithms based on relevance, quality, and user search intent.
