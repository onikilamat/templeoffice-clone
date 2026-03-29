# Homepage Specification

## Overview
- **Target file:** `src/app/page.tsx`
- **Interaction model:** time-driven (CSS keyframe animation slideshow, no user interaction)

## Site Summary
Temple Office — French fashion/culture platform. Single-page, single-viewport homepage. No scrolling. Built on Cargo CMS.

## DOM Structure
```
body.home (overflow: hidden)
  .bg-slideshow          (position: fixed; 100vw×100vh; z-index: 0)
    .bg-item × 16        (position: absolute; inset: 0; CSS animation homeSlide)
      img                (100%×100%; object-fit: cover)
  .home-overlay          (position: fixed; top: 0; left: 0; z-index: 9999; mix-blend-mode: difference)
    .home-logo           (position: fixed; top: -1rem; left: 50%; transform: translateX(-50%); z-index: 20)
      img[alt="Temple"]  (height: 140px; width: auto)
    .menu-homepage       (Citizen Grotesk 900; font-size: 51.84px; line-height: 0.9)
      a × 7              (display: inline-block; white-space: nowrap)
```

## Computed CSS

### .bg-slideshow
- position: fixed; inset: 0; width: 100vw; height: 100vh; overflow: hidden; z-index: 0

### .bg-item
- position: absolute; inset: 0; opacity: 0; animation: homeSlide 16s linear infinite; will-change: opacity

### .bg-item img
- width: 100%; height: 100%; object-fit: cover; display: block; background: #000

### @keyframes homeSlide
- 0% { opacity: 1 }  6.2% { opacity: 1 }  6.3% { opacity: 0 }  100% { opacity: 0 }
- Each image visible ~1s, then instant cut to black

### Animation delays (nth-child stagger, 1s each)
- 1→0s, 2→1s, 3→2s, ... 16→15s

### .home-overlay
- position: fixed; top: 0; left: 0; width: 100vw; z-index: 9999; padding: 1rem
- mix-blend-mode: difference; color: #fff
- ALL children also: mix-blend-mode: difference; color: #fff; background: transparent

### .home-overlay a
- display: inline-block; white-space: nowrap; text-decoration: none; color: inherit

### Hover (desktop only: @media (hover: hover) and (pointer: fine))
- color: #6CFF4F (lime green) — instant, no transition

### .home-logo
- position: fixed; top: -1rem; left: 50%; transform: translateX(-50%); z-index: 20
- mix-blend-mode: difference; pointer-events: none

### .home-logo img
- width: auto; height: 140px; display: block

### .menu-homepage
- font-family: "Citizen Grotesk"; font-weight: 900
- font-size: 51.84px (= 4rem × base 12.96px); line-height: 0.9
- display: block; color: #fff

## Fonts
- "Citizen Grotesk" weight 900 → `src/fonts/CitizenGrotesk-Poster.woff`
- "A U T H E N T I C Sans" weight 400 → `src/fonts/AUTHENTICSans-90.woff`
- Used via CSS variables: `--font-citizen-grotesk`, `--font-authentic-sans`

## Assets
- Logo: `public/images/temple-logo.png` (1064×615 — Temple in bubbly/wavy lettering)
- Slideshow images: `public/images/bg-01.jpg` through `bg-16.jpg` (+ bg-03.png)

## Nav Links (verbatim)
- Fashion → /fashion
- Institution → /institution
- Design → /design
- Tech → /tech
- Music → /music
- Temple Magazine → /temple-magazine
- Contact → /contact

## Responsive
- Mobile: font-size ~2.5rem for menu, logo height 90px
- Always full-viewport, no scroll

## mix-blend-mode: difference effect
Critical — inverts overlay colors relative to background. White text on dark images = white; white text on light images = appears dark/inverted. Creates readable navigation at all times without a semi-transparent overlay.
