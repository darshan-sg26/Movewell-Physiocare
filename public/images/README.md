# Image Asset Placement Guide

When real photography of Chinmay and home physiotherapy sessions become available, drop the optimized image files into this directory (`/public/images/`) and update the component source files.

## Required Image Specifications

| Target Component / Use Case | File Name | Recommended Dimensions | Aspect Ratio | Format |
|---|---|---|---|---|
| **Chinmay Professional Portrait** | `chinmay-portrait.jpg` | 800 x 1000 px | 4:5 (Portrait) | WebP / JPEG (Max 200KB) |
| **Home Session Demonstration** | `home-session-hero.jpg` | 1200 x 900 px | 4:3 (Standard) | WebP / JPEG (Max 350KB) |
| **Manual Therapy Service** | `service-manual-therapy.jpg` | 800 x 600 px | 4:3 | WebP / JPEG (Max 150KB) |
| **Exercise Therapy Service** | `service-exercise-therapy.jpg` | 800 x 600 px | 4:3 | WebP / JPEG (Max 150KB) |
| **Sports Rehabilitation Service** | `service-sports-rehab.jpg` | 800 x 600 px | 4:3 | WebP / JPEG (Max 150KB) |
| **Post-Surgery Care** | `service-post-op.jpg` | 800 x 600 px | 4:3 | WebP / JPEG (Max 150KB) |
| **Open Graph (Social Share)** | `og-image.png` | 1200 x 630 px | 1.91:1 | PNG / WebP (Max 300KB) |

## Quality & Optimization Rules
1. Always optimize raster images using tools like `squoosh.app` or `tinypng.com` prior to replacing.
2. WebP or AVIF formats are strongly recommended.
3. Ensure every `<Image />` component invocation retains mandatory `alt` text describing the image content.
