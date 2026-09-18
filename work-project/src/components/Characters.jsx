/* Hand-built SVG puppets & creatures that inhabit the storybook.
   Parts carry class names so CSS can animate limbs, wings and fins. */

export function Marionette({ className = '', ...props }) {
  return (
    <svg className={`marionette ${className}`} viewBox="0 0 160 340" aria-hidden {...props}>
      <defs>
        <linearGradient id="mar-tunic" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff9fc8" />
          <stop offset="1" stopColor="#c74b8f" />
        </linearGradient>
        <linearGradient id="mar-hat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8e7bff" />
          <stop offset="1" stopColor="#4a36b8" />
        </linearGradient>
        <radialGradient id="mar-face" cx=".4" cy=".35" r=".8">
          <stop offset="0" stopColor="#fff4ea" />
          <stop offset="1" stopColor="#f6cdb8" />
        </radialGradient>
        <linearGradient id="mar-wood" x1="0" x2="1">
          <stop offset="0" stopColor="#b77a45" />
          <stop offset="1" stopColor="#e9b27a" />
        </linearGradient>
      </defs>

      {/* control bar */}
      <g className="mar-control">
        <rect x="30" y="6" width="100" height="9" rx="4.5" fill="url(#mar-wood)" />
        <rect x="74" y="0" width="12" height="40" rx="6" fill="url(#mar-wood)" />
        <circle cx="30" cy="10.5" r="5" fill="#ffc86b" />
        <circle cx="130" cy="10.5" r="5" fill="#ffc86b" />
      </g>

      {/* strings */}
      <g stroke="rgba(255,244,220,.55)" strokeWidth="1" className="mar-strings">
        <line x1="30" y1="12" x2="36" y2="212" />
        <line x1="130" y1="12" x2="124" y2="212" />
        <line x1="80" y1="36" x2="80" y2="92" />
        <line x1="56" y1="10" x2="62" y2="292" />
        <line x1="104" y1="10" x2="98" y2="292" />
      </g>

      <g className="mar-body">
        {/* legs */}
        <g className="mar-leg mar-leg-l">
          <path d="M68 232c-2 20-6 40-8 58" stroke="#3a2a7a" strokeWidth="10" strokeLinecap="round" fill="none" />
          <ellipse cx="58" cy="294" rx="11" ry="6" fill="#ff7eb6" />
        </g>
        <g className="mar-leg mar-leg-r">
          <path d="M92 232c2 20 6 40 8 58" stroke="#3a2a7a" strokeWidth="10" strokeLinecap="round" fill="none" />
          <ellipse cx="102" cy="294" rx="11" ry="6" fill="#ff7eb6" />
        </g>

        {/* arms */}
        <g className="mar-arm mar-arm-l">
          <path d="M60 158c-12 18-20 36-24 54" stroke="#ffb3d3" strokeWidth="10" strokeLinecap="round" fill="none" />
          <circle cx="36" cy="214" r="7" fill="#fbd9c4" />
        </g>
        <g className="mar-arm mar-arm-r">
          <path d="M100 158c12 18 20 36 24 54" stroke="#ffb3d3" strokeWidth="10" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="214" r="7" fill="#fbd9c4" />
        </g>

        {/* tunic with diamond pattern */}
        <path d="M58 150h44l12 86H46z" fill="url(#mar-tunic)" />
        <path d="M80 150l10 22-10 22-10-22zM80 194l10 22-10 20-10-20z" fill="#ffc86b" opacity=".85" />
        <path d="M52 150c9 12 47 12 56 0l-6-8H58z" fill="#fff4ea" />
        <path d="M52 150c6 10 14 10 18 0M70 150c6 10 14 10 20 0M90 150c6 10 14 10 18 0" fill="none" stroke="#e9a23b" strokeWidth="2" />
        <path d="M46 236h68" stroke="#e9a23b" strokeWidth="3" />

        {/* head */}
        <g className="mar-head">
          <circle cx="80" cy="118" r="27" fill="url(#mar-face)" />
          <circle cx="66" cy="126" r="6" fill="#ff9fc8" opacity=".55" />
          <circle cx="94" cy="126" r="6" fill="#ff9fc8" opacity=".55" />
          <path d="M68 115c2-3 6-3 8 0M84 115c2-3 6-3 8 0" stroke="#3a2a7a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M73 130c4 4 10 4 14 0" stroke="#c74b8f" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* jester hat */}
          <path d="M52 104c4-18 18-24 28-22-6-10-18-14-30-8 2-10 14-16 26-10 4-8 10-12 18-10-4 6-4 14 0 20 10-6 22-2 26 8-12-4-22 2-24 14 4 0 8 3 8 8z" fill="url(#mar-hat)" />
          <circle cx="50" cy="74" r="5.5" fill="#ffc86b" />
          <circle cx="112" cy="54" r="5.5" fill="#ffc86b" />
          <circle cx="132" cy="84" r="5.5" fill="#ffc86b" />
          <path d="M52 102c18-6 38-6 56 0" stroke="#ffc86b" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>
      </g>
    </svg>
  )
}

export function PaperCrane({ className = '', hue = 'rose', ...props }) {
  const palette = {
    rose: ['#ffd1e6', '#ff7eb6', '#c74b8f'],
    sky: ['#d7eeff', '#7cc8ff', '#4a7fd6'],
    gold: ['#fff0c9', '#ffc86b', '#d98c2b'],
  }[hue]
  return (
    <svg className={`crane ${className}`} viewBox="0 0 120 80" aria-hidden {...props}>
      <g className="crane-wing crane-wing-back">
        <path d="M58 40L96 4 70 42z" fill={palette[2]} />
      </g>
      <path d="M20 44l38-4 34 6-26 10z" fill={palette[1]} />
      <path d="M20 44L4 30l20 10z" fill={palette[2]} />
      <path d="M92 46l20-22-8 26z" fill={palette[1]} />
      <path d="M112 24l6 2-6 3z" fill={palette[2]} />
      <path d="M58 40l8 16 26-10z" fill={palette[0]} opacity=".85" />
      <g className="crane-wing crane-wing-front">
        <path d="M54 42L30 2l34 38z" fill={palette[0]} />
        <path d="M54 42L30 2l12 40z" fill={palette[1]} opacity=".35" />
      </g>
    </svg>
  )
}

export function Balloon({ className = '', ...props }) {
  return (
    <svg className={`balloon ${className}`} viewBox="0 0 140 220" aria-hidden {...props}>
      <defs>
        <radialGradient id="bal-shade" cx=".35" cy=".3" r=".75">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#1d1247" stopOpacity=".35" />
        </radialGradient>
        <clipPath id="bal-clip">
          <path d="M70 6C32 6 8 34 8 66c0 36 36 62 50 88h24c14-26 50-52 50-88C132 34 108 6 70 6z" />
        </clipPath>
      </defs>
      <g clipPath="url(#bal-clip)">
        <rect x="0" y="0" width="140" height="160" fill="#ff7eb6" />
        <path d="M70 0C52 30 46 110 58 160h24C94 110 88 30 70 0z" fill="#ffc86b" />
        <path d="M20 0C4 40 20 110 40 160h-6C0 110-8 40 20 0z" fill="#b9a4ff" />
        <path d="M120 0c16 40 0 110-20 160h6C140 110 148 40 120 0z" fill="#b9a4ff" />
        <path d="M0 90h140v10H0z" fill="#fff4ea" opacity=".35" />
        <rect x="0" y="0" width="140" height="160" fill="url(#bal-shade)" />
      </g>
      <path d="M58 154l-4 30M82 154l4 30M66 156l-2 28M74 156l2 28" stroke="#f3d9b0" strokeWidth="1.4" />
      <path d="M50 184h40l-5 26H55z" fill="#b77a45" />
      <path d="M50 184h40v5H50z" fill="#e9b27a" />
      <path d="M55 196h30M56 203h28" stroke="#8c5a2e" strokeWidth="1.2" />
      {/* tiny passenger waving */}
      <circle cx="70" cy="176" r="6" fill="#fbd9c4" />
      <path d="M64 172c2-6 10-6 12 0" fill="#3d1f6e" />
      <path className="balloon-wave" d="M76 182l8-10" stroke="#fbd9c4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function SkyWhale({ className = '', ...props }) {
  return (
    <svg className={`whale ${className}`} viewBox="0 0 320 170" aria-hidden {...props}>
      <defs>
        <linearGradient id="wh-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a996ff" />
          <stop offset="1" stopColor="#5d49c7" />
        </linearGradient>
        <linearGradient id="wh-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe3f1" />
          <stop offset="1" stopColor="#ffb3d3" />
        </linearGradient>
      </defs>
      <g className="whale-tail">
        <path d="M258 78c18-4 30-22 52-26-6 18-18 28-30 32 12 4 24 14 30 32-22-4-34-22-52-26z" fill="url(#wh-body)" />
      </g>
      <path d="M20 92C20 50 70 26 140 30c70 4 110 30 124 54-10 30-60 56-130 56C64 140 20 124 20 92z" fill="url(#wh-body)" />
      <path d="M34 110c30 24 150 30 220-18-20 36-70 48-126 48-46 0-84-10-94-30z" fill="url(#wh-belly)" />
      <path d="M60 118l2 12M84 124l2 12M110 127l1 12M136 128v12M162 126l-1 12M188 121l-2 11" stroke="#ff9fc8" strokeWidth="2" strokeLinecap="round" />
      <g className="whale-fin">
        <path d="M120 112c-8 18-4 34 10 42 0-16 6-28 18-36z" fill="#7a66e0" />
      </g>
      <circle cx="66" cy="82" r="5" fill="#1d1247" />
      <circle cx="68" cy="80" r="1.6" fill="#fff" />
      <circle cx="56" cy="96" r="7" fill="#ff9fc8" opacity=".5" />
      <path d="M36 100c8 4 14 4 20 0" stroke="#1d1247" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* star spout */}
      <g className="whale-spout">
        <path d="M110 30c-4-10-2-18 4-24M110 30c4-12 12-18 22-18" stroke="#b9e6ff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M134 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ffc86b" />
        <path d="M100 0l1.4 3.4 3.4 1.4-3.4 1.4L100 9.6l-1.4-3.4-3.4-1.4 3.4-1.4z" fill="#fff" />
      </g>
      {/* spots of stardust */}
      <circle cx="150" cy="60" r="3" fill="#fff" opacity=".45" />
      <circle cx="176" cy="52" r="2" fill="#fff" opacity=".45" />
      <circle cx="198" cy="66" r="2.5" fill="#fff" opacity=".45" />
    </svg>
  )
}

export function Lantern({ className = '', hue = '#ffc86b', ...props }) {
  return (
    <svg className={`lantern ${className}`} viewBox="0 0 60 90" aria-hidden {...props}>
      <defs>
        <radialGradient id={`lan-${hue.slice(1)}`} cx=".5" cy=".6" r=".6">
          <stop offset="0" stopColor="#fff8e0" />
          <stop offset=".45" stopColor={hue} />
          <stop offset="1" stopColor={hue} stopOpacity=".55" />
        </radialGradient>
      </defs>
      <ellipse cx="30" cy="48" rx="28" ry="34" fill={hue} opacity=".18" className="lantern-halo" />
      <path d="M14 18h32l6 44c-2 8-12 12-22 12S10 70 8 62z" fill={`url(#lan-${hue.slice(1)})`} />
      <path d="M22 18l-4 52M38 18l4 52M30 18v56" stroke="#fff" strokeOpacity=".25" strokeWidth="1" />
      <rect x="16" y="12" width="28" height="7" rx="3" fill="#7a3d6b" />
      <rect x="18" y="72" width="24" height="5" rx="2.5" fill="#7a3d6b" />
    </svg>
  )
}

export function Butterfly({ className = '', a = '#ff7eb6', b = '#ffc86b', ...props }) {
  return (
    <svg className={`butterfly ${className}`} viewBox="0 0 60 50" aria-hidden {...props}>
      <g className="bf-wing bf-wing-l">
        <path d="M29 24C22 6 4 2 3 12c-1 8 10 12 24 14C12 28 6 38 12 44c6 5 14-6 17-18z" fill={a} />
        <circle cx="13" cy="14" r="3" fill={b} />
        <circle cx="15" cy="36" r="2.2" fill={b} />
      </g>
      <g className="bf-wing bf-wing-r">
        <path d="M31 24C38 6 56 2 57 12c1 8-10 12-24 14 15 2 21 12 15 18-6 5-14-6-17-18z" fill={a} />
        <circle cx="47" cy="14" r="3" fill={b} />
        <circle cx="45" cy="36" r="2.2" fill={b} />
      </g>
      <rect x="28.6" y="14" width="2.8" height="22" rx="1.4" fill="#2b1656" />
      <path d="M30 15c-2-6-5-9-8-10M30 15c2-6 5-9 8-10" stroke="#2b1656" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function StarSprite({ className = '', ...props }) {
  return (
    <svg className={`sprite ${className}`} viewBox="0 0 100 100" aria-hidden {...props}>
      <defs>
        <radialGradient id="sprite-g" cx=".45" cy=".4" r=".7">
          <stop offset="0" stopColor="#fffbe6" />
          <stop offset=".6" stopColor="#ffd98a" />
          <stop offset="1" stopColor="#ffb44d" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="52" r="46" fill="#ffc86b" opacity=".16" />
      <path
        d="M50 8c4 0 6 3 8 8l7 17 18 2c9 1 11 7 5 13L74 60l4 18c2 9-4 13-12 8L50 77l-16 9c-8 5-14 1-12-8l4-18-14-12c-6-6-4-12 5-13l18-2 7-17c2-5 4-8 8-8z"
        fill="url(#sprite-g)"
      />
      <circle cx="40" cy="50" r="3.4" fill="#3d1f6e" />
      <circle cx="60" cy="50" r="3.4" fill="#3d1f6e" />
      <circle cx="41" cy="49" r="1.1" fill="#fff" />
      <circle cx="61" cy="49" r="1.1" fill="#fff" />
      <circle cx="34" cy="58" r="4.5" fill="#ff7eb6" opacity=".45" />
      <circle cx="66" cy="58" r="4.5" fill="#ff7eb6" opacity=".45" />
      <path d="M44 60c3 3.5 9 3.5 12 0" stroke="#3d1f6e" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function FoxPuppet({ className = '', ...props }) {
  return (
    <svg className={`fox ${className}`} viewBox="0 0 140 220" aria-hidden {...props}>
      <defs>
        <linearGradient id="fox-fur" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffb38a" />
          <stop offset="1" stopColor="#ff6f5e" />
        </linearGradient>
      </defs>
      <rect x="64" y="110" width="12" height="110" rx="6" fill="#b77a45" />
      <g className="fox-head">
        <path d="M22 30l22 30M118 30L96 60" stroke="none" />
        <path d="M18 14l34 36-30 14z" fill="url(#fox-fur)" />
        <path d="M122 14L88 50l30 14z" fill="url(#fox-fur)" />
        <path d="M26 28l18 20-14 8z" fill="#3d1f6e" opacity=".55" />
        <path d="M114 28L96 48l14 8z" fill="#3d1f6e" opacity=".55" />
        <path d="M70 40c30 0 50 20 50 42 0 20-22 40-50 54-28-14-50-34-50-54 0-22 20-42 50-42z" fill="url(#fox-fur)" />
        <path d="M70 136c-18-8-34-22-40-38 12 6 26 8 40 8s28-2 40-8c-6 16-22 30-40 38z" fill="#fff4ea" />
        <path d="M46 82c4-4 10-4 14 0M80 82c4-4 10-4 14 0" stroke="#3d1f6e" strokeWidth="3" strokeLinecap="round" fill="none" className="fox-eyes" />
        <ellipse cx="70" cy="112" rx="6" ry="4.5" fill="#3d1f6e" />
        <circle cx="40" cy="96" r="6" fill="#ff7eb6" opacity=".45" />
        <circle cx="100" cy="96" r="6" fill="#ff7eb6" opacity=".45" />
        <path d="M58 44c4 6 20 6 24 0" stroke="#ffc86b" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
      <path d="M52 150c6 8 30 8 36 0l-4 10c-8 4-20 4-28 0z" fill="#b9a4ff" />
      <circle cx="70" cy="158" r="4" fill="#ffc86b" />
    </svg>
  )
}

export function Moon({ className = '', ...props }) {
  return (
    <svg className={`moon ${className}`} viewBox="0 0 200 200" aria-hidden {...props}>
      <defs>
        <radialGradient id="moon-g" cx=".4" cy=".38" r=".7">
          <stop offset="0" stopColor="#fffdf2" />
          <stop offset=".6" stopColor="#ffe7b0" />
          <stop offset="1" stopColor="#ffc86b" />
        </radialGradient>
        <mask id="moon-cut">
          <rect width="200" height="200" fill="#fff" />
          <circle cx="132" cy="78" r="72" fill="#000" />
        </mask>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#moon-g)" mask="url(#moon-cut)" />
      <path d="M52 118c6 6 14 6 20 0" stroke="#b86b3a" strokeWidth="3.2" strokeLinecap="round" fill="none" opacity=".7" />
      <path d="M40 100c3-3 8-3 11 0" stroke="#b86b3a" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".7" />
      <circle cx="44" cy="120" r="6" fill="#ff9fc8" opacity=".45" />
      <circle cx="48" cy="152" r="4" fill="#e9b27a" opacity=".45" />
      <circle cx="80" cy="162" r="6" fill="#e9b27a" opacity=".35" />
    </svg>
  )
}
