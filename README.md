# Shrimad Bhagavad Gita – Modern Web Project

A modern, premium, SEO-ready website for the Shrimad Bhagavad Gita, built with Next.js (App Router, TypeScript, Tailwind CSS). Features a beautiful responsive design, glassmorphism, and multi-language support.

## Features
- Modern, premium UI inspired by shrimadbhagvadgita.org
- Beautiful animated loader (3 seconds, Dharma image, progress bar, premium design)
- Responsive header, language cards, and content sections (Dharma, Karma, Moksha, Krishna)
- SEO meta tags, Open Graph, Twitter Card
- Static export for cPanel, Vercel, or any static host
- Ready for deployment to Oracle Linux (Node.js), Vercel, or cPanel

## Getting Started (Development)

```bash
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

## Static Export (for cPanel, Vercel drag-and-drop, or static hosting)

1. **Build and export the static site:**
   ```bash
   npm run build
   ```
   This will generate an `out/` folder with your static site.

2. **Deploy:**
   - **Vercel:**
     - Recommended: Connect your GitHub repo to Vercel for automatic builds.
     - For static hosting: Drag and drop the contents of the `out/` folder in the Vercel dashboard.
   - **cPanel or Shared Hosting:**
     - Upload the contents of the `out/` folder to your public_html or web root directory.
   - **Oracle Linux (Node.js):**
     - You can run as a Node.js app (`npm run build && npm start`) or serve the static `out/` folder with any static server.

## Project Structure
- `src/app/page.tsx` – Main homepage and all sections
- `public/` – Static assets and images
- `next.config.js` – Next.js config (uses `output: 'export'` for static export)
- `out/` – Generated static site after build (do not edit manually)

## Customization
- Edit `src/app/page.tsx` to change content, images, loader, or layout.
- Update SEO/meta tags in the `<Head>` section of `page.tsx`.

## License
This project is for educational and personal use. For commercial use, please contact the author.

---

---

## Loader Details

- Displays a Dharma image in a circle above the title
- Shows "Shrimad Bhagavad Gita" and a premium rectangle with "Loading your journey…"
- Animated progress bar (0–100%) synced to 3 seconds
- All main content loads after the loader completes

*Built with ❤️ using Next.js, Tailwind CSS, and inspiration from shrimadbhagvadgita.org.*
