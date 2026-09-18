# PIPIK · Once Upon a Frame

A storybook-style portfolio for PIPIK, a 2D animator and illustrator. There's a velvet theater curtain, a moonlit kingdom, puppets and creatures floating in from every edge, and five chapters of work, each with its own color.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the build
```

Works with Node 18+ (Vite 5, React 18, Framer Motion 11).

## Make it yours

| What | Where |
| --- | --- |
| Name, monogram, bio, email, socials, tools | `src/data/profile.js` |
| Chapters (title, craft, color, emblem, layout) | `src/data/works.js` → `chapters` |
| Works (title, role, notes, fps, frames, canvas) | `src/data/works.js` → `works` |
| Before/after pair in the Mirror | `src/data/works.js` → `mirrorPair` |
| Videos and posters | `public/media/<slug>.mp4` + `<slug>.jpg` |
| Pictures | `public/media/<slug>.jpg` (full size) + `<slug>-sm.jpg` (thumbnail) |

The original files are sorted into category folders in `../public/videos/`. The site uses web-ready copies of them in `public/media/`.

### Adding a video

1. Export an H.264 MP4 and a JPG poster frame. Name both after a slug, such as `moonlit-dance.mp4` and `moonlit-dance.jpg`, and put them in `public/media/`.
2. Add an entry to `works` with `type: 'video'`, `slug`, `chapter`, `title`, `role`, `note`, `fps`, `frames`, `width`, `height` and `audio`.
3. Optional: add `keys: ['slug-a', 'slug-b']` to show key-pose pictures under the video.

### Adding a picture

1. Save a full-size JPG (about 1800px on the longest side) as `<slug>.jpg` and a thumbnail (about 900px) as `<slug>-sm.jpg` in `public/media/`.
2. Add an entry to `works` with `type: 'image'`, `slug`, `chapter`, `title`, `role`, `note`, `width` and `height`.
3. Optional: add `compareWith: 'line-art-slug'` to get a line-art-to-color slider. Mark supporting pictures (line art, key poses) with `hidden: true` so they don't appear as separate cards.

### Chapter layouts

Each chapter's `layout` sets how its work is shown: `grid` (one wide card, then two columns), `gallery` (an illustration wall), `book` (two comic pages as an open book) or `mixed` (landscape cards side by side, vertical pieces below).

Recommended ffmpeg settings:

```bash
ffmpeg -i input.mov -vf "scale='min(1920,iw)':-2" -c:v libx264 -crf 21 -preset slow \
  -movflags +faststart -c:a aac -b:a 128k public/media/my-slug.mp4
ffmpeg -ss 0.5 -i input.mov -frames:v 1 -q:v 3 public/media/my-slug.jpg
```

## The chapters

| # | Chapter | Source folder | Contents | Layout | Color |
| --- | --- | --- | --- | --- | --- |
| I | Animation | `animation` | 9 key / second-key clips | grid | lilac / sky |
| II | Character Design | `charactor desgine` | 5 illustrations + a line-art slider | gallery | rose / peach |
| III | Comic Book | `comic book` | 2 pages | book | gold / coral |
| IV | OpenToonz | `opentoonz` | 3 full-color scenes with sound | grid | cyan / violet |
| V | Other Works | `other` | 2 chibi animations with key poses + a vertical piece | mixed | mint / sky |

## Features

- **Loader:** a bouncing ball with squash and stretch, plus a frame counter.
- **Hero:** theater curtains open onto a moonlit castle. The full-color reel plays in an arched storybook window, with a marionette dancing beside it.
- **Floating world:** hand-drawn SVG characters (a marionette, a fox stick-puppet, a sky whale, a hot-air balloon, paper cranes, butterflies, lanterns and a star sprite) drift in from every edge. A twinkling starfield sits behind them, and sparkles trail the cursor.
- **Chapter cards:** videos autoplay while on screen. Each card has a live frame counter and timeline, a 3D tilt, and an "onion skin" ghost effect on hover.
- **Theater:** step frame by frame, play at ¼× or ½× speed, scrub, loop, toggle sound, and move between pieces. Keyboard: Space, ← →, ↑ ↓, Esc.
- **Metamorphosis Mirror:** drag a wand across the glass to compare the first key and second key drawings, played in sync.
- **Atelier:** an animation disc with a peg bar, counters (frame totals are calculated from the data) and the "journey of a cut" timeline.
- **Letters:** an envelope that opens on hover, a copy-email button, and a "The End" footer.
- The page's background glow follows the current section's colors, so each part looks distinct but the page stays consistent.
- When the visitor has reduced motion turned on, the floating layer is hidden and animations are disabled.
