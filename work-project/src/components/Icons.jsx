const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const Icon = {
  Play: (p) => (
    <svg {...base} {...p}>
      <path d="M7 4.8v14.4a1 1 0 0 0 1.5.86l12-7.2a1 1 0 0 0 0-1.72l-12-7.2A1 1 0 0 0 7 4.8z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Pause: (p) => (
    <svg {...base} {...p}>
      <rect x="6" y="4.5" width="4" height="15" rx="1.4" fill="currentColor" stroke="none" />
      <rect x="14" y="4.5" width="4" height="15" rx="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  FrameBack: (p) => (
    <svg {...base} {...p}>
      <path d="M6 5v14" />
      <path d="M18 6.5v11a.8.8 0 0 1-1.2.7L9 12.7a.8.8 0 0 1 0-1.4l7.8-5.5a.8.8 0 0 1 1.2.7z" fill="currentColor" stroke="none" />
    </svg>
  ),
  FrameFwd: (p) => (
    <svg {...base} {...p}>
      <path d="M18 5v14" />
      <path d="M6 6.5v11a.8.8 0 0 0 1.2.7l7.8-5.5a.8.8 0 0 0 0-1.4L7.2 5.8A.8.8 0 0 0 6 6.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Sound: (p) => (
    <svg {...base} {...p}>
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" stroke="none" />
      <path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" />
    </svg>
  ),
  Mute: (p) => (
    <svg {...base} {...p}>
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" stroke="none" />
      <path d="M16 9.5l5 5M21 9.5l-5 5" />
    </svg>
  ),
  Loop: (p) => (
    <svg {...base} {...p}>
      <path d="M17 2.5l3 3-3 3" />
      <path d="M4 11.5v-1a5 5 0 0 1 5-5h11" />
      <path d="M7 21.5l-3-3 3-3" />
      <path d="M20 12.5v1a5 5 0 0 1-5 5H4" />
    </svg>
  ),
  Close: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  ChevronLeft: (p) => (
    <svg {...base} {...p}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  ),
  ChevronRight: (p) => (
    <svg {...base} {...p}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  ),
  Expand: (p) => (
    <svg {...base} {...p}>
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
    </svg>
  ),
  Book: (p) => (
    <svg {...base} {...p}>
      <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z" />
      <path d="M12 6.5v13" />
    </svg>
  ),
  Mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
  Copy: (p) => (
    <svg {...base} {...p}>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2.5" />
      <path d="M15.5 5.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h.5" />
    </svg>
  ),
  Check: (p) => (
    <svg {...base} {...p}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  ),
  Arrow: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ZoomIn: (p) => (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20.5 20.5L16 16M11 8v6M8 11h6" />
    </svg>
  ),
  Image: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10" r="2" />
      <path d="M21 16l-5-5-9 9" />
    </svg>
  ),
  Sparkle: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path d="M12 1.5c.6 5.2 2.9 8.6 10.5 10.5-7.6 1.9-9.9 5.3-10.5 10.5C11.4 17.3 9.1 13.9 1.5 12 9.1 10.1 11.4 6.7 12 1.5z" fill="currentColor" />
    </svg>
  ),
}

/* Chapter emblems — small illustrated medallion glyphs */
export function Emblem({ name, ...props }) {
  const common = { viewBox: '0 0 64 64', 'aria-hidden': true, ...props }
  switch (name) {
    case 'quill':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 8C30 10 18 26 15 48c9-3 16-8 21-15l-8 1c7-3 12-7 15-12l-7 1c6-4 11-9 14-15z" fill="currentColor" fillOpacity=".18" />
          <path d="M44 16L12 54" />
          <path d="M9 57c3-1 5-.5 7 1" opacity=".6" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 53S9 40 9 24.5C9 17 14.5 12 21 12c5 0 8.8 3 11 7 2.2-4 6-7 11-7 6.5 0 12 5 12 12.5C55 40 32 53 32 53z" fill="currentColor" fillOpacity=".18" />
          <path d="M18 24c.5-3 2.5-5 5.5-5.5" opacity=".7" />
          <path d="M50 6l1.2 3 3 1.2-3 1.2L50 14.5l-1.2-3.1-3-1.2 3-1.2z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M36 5L14 36h15l-4 23 25-34H34z" fill="currentColor" fillOpacity=".18" />
          <path d="M6 20c6-2 10-2 14 0M44 48c6-2 10-2 14 0" opacity=".6" />
        </svg>
      )
    case 'flower':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} cx="32" cy="18" rx="8" ry="12" transform={`rotate(${r} 32 32)`} fill="currentColor" fillOpacity=".16" />
          ))}
          <circle cx="32" cy="32" r="5.5" fill="currentColor" />
        </svg>
      )
    case 'film':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="44" height="48" rx="6" fill="currentColor" fillOpacity=".16" />
          <path d="M20 8v48M44 8v48" />
          <path d="M10 18h10M10 28h10M10 38h10M10 48h10M44 18h10M44 28h10M44 38h10M44 48h10" opacity=".7" />
          <path d="M28 25v14l11-7z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'palette':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 7C17 7 6 18 6 31c0 13 10 24 22 24 5 0 7-3 5-7-2-4 0-8 5-8h6c7 0 14-5 14-13C58 16 46 7 32 7z" fill="currentColor" fillOpacity=".16" />
          <circle cx="20" cy="26" r="3.6" fill="currentColor" stroke="none" />
          <circle cx="30" cy="17" r="3.6" fill="currentColor" stroke="none" />
          <circle cx="43" cy="20" r="3.6" fill="currentColor" stroke="none" />
          <circle cx="47" cy="31" r="3.6" fill="currentColor" stroke="none" opacity=".6" />
        </svg>
      )
    case 'book':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 16c-6-5-14-6-24-5v38c10-1 18 0 24 5 6-5 14-6 24-5V11c-10-1-18 0-24 5z" fill="currentColor" fillOpacity=".16" />
          <path d="M32 16v38" />
          <path d="M14 20h11M14 27h11M39 20h11M39 27h7" opacity=".7" />
          <rect x="14" y="33" width="11" height="9" rx="1.5" opacity=".7" />
          <rect x="39" y="33" width="11" height="9" rx="1.5" opacity=".7" />
        </svg>
      )
    case 'reel':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="30" cy="30" r="22" fill="currentColor" fillOpacity=".16" />
          <circle cx="30" cy="30" r="4" />
          <circle cx="30" cy="17" r="5" />
          <circle cx="30" cy="43" r="5" />
          <circle cx="17" cy="30" r="5" />
          <circle cx="43" cy="30" r="5" />
          <path d="M44 48c6 4 10 6 16 6" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 8a24 24 0 1 0 16 36A19 19 0 0 1 40 8z" fill="currentColor" fillOpacity=".18" />
          <path d="M28 44c2 1.5 5 1.5 7 0" />
          <path d="M24 34h.01M36 34h.01" strokeWidth="4" />
          <path d="M52 12l1 2.5 2.5 1-2.5 1L52 19l-1-2.5-2.5-1 2.5-1z" fill="currentColor" stroke="none" />
        </svg>
      )
    default:
      return null
  }
}
