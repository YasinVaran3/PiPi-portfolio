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
