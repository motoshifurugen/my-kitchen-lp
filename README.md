# My Kitchen Encyclopedia Landing Page

Astro + Tailwind CSS landing page for the pre-release experience.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Image Conversion

Place PNG files under `tmp/image` and run:

```bash
npm run images:build
```

Outputs:
- `tmp/image/page1/*.png` → `public/images/page1/*.webp`
- `tmp/image/page2/*.png` → `public/images/page2/*.webp`
- `tmp/image/room/*.png` → `public/images/home/*.webp`
- `tmp/image/*.png` → `public/assets/*@1x.webp` and `public/assets/*@2x.webp`

## Notes

- Copy lives in `src/constants/content.ts`.
- Minimal JS is used only for scroll reveal, with reduced-motion support.
- Placeholder images live in `public/images` and `public/illustrations`.
