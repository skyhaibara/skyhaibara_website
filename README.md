# skyhaibara — Personal Website

Personal portfolio built with React 19, TypeScript, and Mantine UI. Features a Rose Three math-curve loading screen, scroll-triggered animations, and full EN/ZH i18n.

## Tech Stack

- **React 19** + **TypeScript** — component logic
- **Vite 6** — dev server and build
- **Mantine UI 8** — component primitives
- **React Router 7** — client-side routing
- **CSS Modules** — scoped styles

## Project Structure

```
src/
  components/
    LoadingScreen.tsx     # Rose Three rAF animation + phase state machine
    Navbar.tsx            # Borderless text-link nav with lang toggle
    FadeIn.tsx            # Scroll-triggered fade-up wrapper
    Layout.tsx            # Page shell with slide-in navbar
  pages/
    Home.tsx              # Editorial hero + projects + CTA
    About.tsx             # Values, skills, timeline, personal card
    Contact.tsx           # Mailto form + social links
  contexts/
    LanguageContext.tsx   # EN/ZH lang state
  i18n/
    translations.ts       # All copy in one file — edit here to customize
  hooks/
    useInView.ts          # IntersectionObserver for scroll animations
```

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Customizing Content

All page copy lives in [`src/i18n/translations.ts`](src/i18n/translations.ts). Edit the `zh` and `en` objects to change any text — no component changes needed.
