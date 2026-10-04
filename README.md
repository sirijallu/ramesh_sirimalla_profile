# Ramesh Sirimalla — Portfolio Website

A static, single-page portfolio site for a Forward Deployed Engineer, built with plain
HTML5, CSS3, and vanilla JavaScript. Designed to be hosted for free on GitHub
Pages.

**Live site:** https://sirijallu.github.io/ramesh_sirimalla_profile/

## Folder structure

```
ramesh_sirimalla_profile/
├── index.html          Homepage — sidebar nav, hero, and switchable sections:
│                        about (leadership style, experience, certifications
│                        & education tabs), thought leadership, tech strategy,
│                        projects, skills, gallery, contact
│                        (content sourced from LinkedIn + resume)
├── resume.html          Printable resume page (also downloadable as PDF)
├── css/
│   ├── style.css        Site-wide styles (light + dark theme)
│   └── resume.css        Styles for the resume page
├── js/
│   └── main.js           Section switching, tabs, mobile sidebar, dark mode
├── images/                Profile photo (profile.jpg), favicon, and project thumbnails (SVG)
├── assets/                 Reserved for future static assets
├── resume/
│   └── Ramesh_Sirimalla_Resume.pdf   Downloadable resume
├── docs/
│   └── deployment.md      GitHub Pages deployment notes
└── temp/                    Scratch folder (not part of the deployed site)
```

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
