## Davide La Marca – Portfolio & Freelance Web Development

Modern, performant, accessible multi‑language portfolio built with Astro 5 and Tailwind CSS 4. Focused on fast TTFB, minimal JS by default, and progressive enhancement (e.g. haptics, FAQ toggles, testimonial interactions).

### Tech Stack

- Astro 5 (islands / partial hydration only where needed)
- Tailwind CSS 4 (class-based dark mode)
- Type-safe i18n via Astro's built-in `i18n` routing
- Sitemap generation (`@astrojs/sitemap`)
- Lightweight progressive enhancement scripts (`/src/scripts/*`)

### Project Goals

- Keep initial HTML lean; only hydrate components that truly need interactivity
- Maintain excellent Core Web Vitals (CLS, LCP, INP)
- Respect user preferences (reduced motion, dark mode toggle)
- Provide a clear multilingual structure without duplicating logic

### Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Internationalization (i18n)

Default locale: `it` (Italian)
Secondary locale: `en`

Structure:

- Root-level pages serve Italian (e.g. `/privacy`)
- English lives under `/en/*` (e.g. `/en/privacy`)

Add new translations in:

- `src/i18n/it.ts`
- `src/i18n/en.ts`

Then create matching page under `src/pages/<locale>/` when locale-specific content diverges.

### Styling & Conventions

Tailwind CSS v4 with a minimal config. Additional utilities or theme extensions can be added in `tailwind.config.js` (`theme.extend`). Dark mode is controlled manually via a `.dark` class on `<html>`.

Global styles live in `src/styles/global.css`. Universal transitions are intentionally constrained; respect reduced-motion is enforced.

### Accessibility

- Focus outlines preserved & enhanced for clarity
- Reduced motion support via `prefers-reduced-motion`
- Semantic HTML for FAQs (`<details>/<summary>`) and navigation

### Performance Notes

- Avoids unnecessary client JavaScript
- Animations are GPU-friendly (opacity / transform only)
- Images served as modern formats (`.webp`)

### Prettier & Formatting

`printWidth` is intentionally large to avoid noisy wrapping in Astro templates; rely on semantic grouping instead of forced line breaks. Tailwind plugin auto-sorts utility classes.

### Deployment

Output is static (`astro build`) and suitable for any static host (Vercel, Netlify, Cloudflare Pages). Add platform-specific configuration files if deploying advanced features.

### Future Ideas

- Add open graph image generation
- Add visitor-friendly light/dark preference persistence
- Add basic analytics (privacy respecting)
- Consider a micro CMS or content collection for blog/articles

### License

MIT © Davide La Marca
