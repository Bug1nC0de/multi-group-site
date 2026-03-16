# Deployment

## Vercel

This project is configured for Vercel static deployment.

### Required Settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### SPA Routing

This is a React SPA using client-side routing. Direct links such as:

- `/solutions/it`
- `/solutions/security`
- `/products/access-control`

must resolve to `index.html`.

That behavior is configured in:

- [vercel.json](/Users/eagle/Dev/Multi-Group/vercel.json)

Current rewrite:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deployment Flow

1. Push changes to the deployment repo.
2. Vercel detects the new commit on `main`.
3. Vercel runs `npm run build`.
4. Vercel publishes the `dist/` output.

### Current Deployment Repo

- `https://github.com/Bug1nC0de/multi-group-site`

### Current Production Domain

- `https://multi-group-site.vercel.app`

## Troubleshooting

### Route works in dev but 404s in production

Check that `vercel.json` exists and is committed.

### Vercel deployment is ready but browser says NXDOMAIN

That is usually a DNS propagation or cached browser DNS issue, not a broken app build.

Try:

- opening the stable production domain from the Vercel dashboard
- hard refresh
- opening in an incognito window
- waiting a few minutes after first deployment

### Build fails on Vercel

Run locally first:

```bash
npm run build
```

Fix any build errors before pushing.
