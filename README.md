# Ramesh Sirimalla — Portfolio Website

A static, single-page portfolio site for a Data & AI Leader, built with plain
HTML5, CSS3, and vanilla JavaScript. Designed to be hosted for free on GitHub
Pages.

**Live site:** https://sirijallu.github.io/ramesh_sirimalla_profile/

## Folder structure

```
ramesh_sirimalla_profile/
├── index.html          Homepage — hero, about, skills, projects, experience,
│                        certifications, achievements, articles, contact
├── resume.html          Printable resume page (also downloadable as PDF)
├── css/
│   ├── style.css        Site-wide styles (light + dark theme)
│   └── resume.css        Styles for the resume page
├── js/
│   └── main.js           Nav toggle, dark-mode toggle, scroll-spy, footer year
├── images/                Profile photo, favicon, and project thumbnails (SVG)
├── assets/                 Reserved for future static assets
├── resume/
│   └── Ramesh_Sirimalla_Resume.pdf   Downloadable resume
├── docs/
│   └── deployment.md      GitHub Pages deployment notes
└── temp/                    Scratch folder (not part of the deployed site)
```

## Before you publish

A few placeholders only you can fill in:

- **Photo** — `images/profile.svg` is a placeholder initials avatar. Replace it
  with a real photo (e.g. `images/profile.jpg`) and update the `src` on the
  `<img class="hero-photo">` element in `index.html`.
- **Employer names** — work history in `index.html` and `resume.html` marked
  `(name confidential)` — swap in real company names if you want them public.
- **University names** — the Education section currently lists degree types
  only; add institution names in `index.html`.
- **Phone number** — not currently listed; add to the Contact section if desired.
- **Social links** — LinkedIn/GitHub links in the Contact section and footer
  currently point to placeholder URLs; confirm they match your real profiles.
- **Contact form** — uses a `mailto:` action, which opens the visitor's email
  client (works without a backend, but isn't as reliable as a hosted form
  service). Consider swapping in [Formspree](https://formspree.io) or a
  similar static-form provider if you want a smoother experience.

## Regenerating the resume PDF

`resume/Ramesh_Sirimalla_Resume.pdf` is generated from `resume.html` via headless
Chrome. After editing `resume.html`, regenerate it with:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --print-to-pdf="resume/Ramesh_Sirimalla_Resume.pdf" --no-pdf-header-footer \
  "file://$(pwd)/resume.html"
```

## Deployment

See [docs/deployment.md](docs/deployment.md) for GitHub Pages setup steps.

## Tech stack

HTML5, CSS3, vanilla JavaScript — no frameworks, no build step. Fonts are
loaded from Google Fonts (Inter).
