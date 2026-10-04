# Deployment — GitHub Pages

This site is deployed to: **https://sirijallu.github.io/ramesh_sirimalla_profile/**

## How it's hosted

The repository [`sirijallu/ramesh_sirimalla_profile`](https://github.com/sirijallu/ramesh_sirimalla_profile)
serves `index.html` directly from the root of the `main` branch via GitHub
Pages. There is no build step — GitHub Pages serves the static files as-is.

## One-time setup (already done)

1. Repository created at `github.com/sirijallu/ramesh_sirimalla_profile`.
2. Local project pushed to `main`.
3. GitHub Pages enabled: **Settings → Pages → Source: Deploy from a branch →
   Branch: `main` / root**.

It can take 1-2 minutes after the first push for the site to become live, and
another minute or two after each subsequent push for changes to appear.

## Publishing future changes

```bash
git add .
git commit -m "Update <section>"
git push
```

GitHub Pages automatically redeploys on every push to `main`.

## Custom domain (optional)

To use a custom domain instead of `sirijallu.github.io`:

1. Add a `CNAME` file to the repo root containing the domain, e.g. `www.example.com`.
2. Point the domain's DNS at GitHub Pages (A records or a `CNAME` record —
   see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Re-enable "Enforce HTTPS" in **Settings → Pages** once DNS propagates.
