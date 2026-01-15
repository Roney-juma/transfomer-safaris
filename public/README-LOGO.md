Place the new LionTrack logo image in this `public/` folder so the site can load it at `/<filename>`.

Recommended filenames (update imports if you choose a different name):
- `liontrack-logo.png` (preferred)
- `liontrack-logo.jpg` or `liontrack-logo.jpeg`

If the logo already exists in `src/images/` (for example `src/images/liontrack logo.jpeg`) the React components in this project can import it directly (they currently import from `src/images`).

How to install the provided image (local):
1. If you want the app to reference the image via imports (bundled by Vite) put it in `src/images/` and keep the current imports.
2. If you want the image to be served from the root (for favicon or other static uses), copy the file from `src/images/` into this `public/` folder and rename to `liontrack-logo.png` (or choose another name and update `index.html` and any `src` references accordingly).

Notes:
- Files placed in `public/` are served at the project root (for example `/liontrack-logo.png`).
- Importing from `src/images/` is preferred for component assets (the bundler will include them). For favicon and other static references in `index.html`, place the file in `public/`.
