# Deployment Guide

This Next.js application is configured with Vercel Speed Insights.

## Prerequisites

Before deploying to Vercel, ensure you have:
- A Vercel account
- The Vercel CLI installed (optional, for CLI deployments)

## Enabling Speed Insights

1. Deploy your application to Vercel
2. Go to your [Vercel dashboard](https://vercel.com/dashboard)
3. Select your project
4. Click on the **Speed Insights** tab
5. Click **Enable** to activate Speed Insights

## Deployment Options

### Option 1: Deploy via Git Integration

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in Vercel
3. Vercel will automatically deploy on every push to your main branch

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel deploy

# Deploy to production
vercel --prod
```

## Verifying Speed Insights Integration

After deployment, you can verify that Speed Insights is working:

1. Visit your deployed site
2. Open browser developer tools
3. Check the Network tab for a request to `/_vercel/speed-insights/script.js`
4. This script should be loaded in the `<body>` tag of your page

## Viewing Speed Insights Data

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click on the **Speed Insights** tab
4. After a few days of visitors, you'll see metrics including:
   - Time to First Byte (TTFB)
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)
   - First Input Delay (FID)

## Environment Variables

Configure these environment variables in your Vercel project settings:

- `BOT_TOKEN` - Your bot token
- `CHAT_ID` - Your chat ID
- `SHEET_URL` - Your Google Sheets Web App URL

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`.

## Speed Insights Implementation

The Speed Insights component is integrated in the root layout (`app/layout.tsx`):

```tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

This implementation follows the official Vercel Speed Insights documentation for Next.js App Router applications.
