// Portfolio categories. Accents are shades of the site's blue palette.
// Files live in /public/media:
//   video → <slug>.mp4 + <slug>.jpg (poster)
//   image → <slug>.jpg (full) + <slug>-sm.jpg (thumbnail)

export const chapters = [
  {
    id: 'animation',
    numeral: 'I',
    title: 'Animation',
    craft: 'Key Animation · Second Key · Effects',
    lede: 'Rough keys, clean second keys ready for inbetweening, and effects-driven action with smears and impact frames.',
    accent: '#8fb4ec',
    accent2: '#5f8fd6',
    emblem: 'film',
    layout: 'grid',
  },
  {
    id: 'character-design',
    numeral: 'II',
    title: 'Character Design',
    craft: 'Illustration · Line Art · Colour',
    lede: 'Character illustration from clean line art to finished colour, lighting and effects.',
    accent: '#a9bdf2',
    accent2: '#7c93dc',
    emblem: 'palette',
    layout: 'gallery',
  },
  {
    id: 'comic-book',
    numeral: 'III',
    title: 'Comic Book',
    craft: 'Paneling · Expressions · Storytelling',
    lede: 'Paneling, pacing and expression — stories told one page at a time.',
    accent: '#9fd0f0',
    accent2: '#5e9fcf',
    emblem: 'book',
    layout: 'book',
  },
  {
    id: 'opentoonz',
    numeral: 'IV',
    title: 'OpenToonz',
    craft: 'Full Colour Animation · Acting · Sound',
    lede: 'Finished full-colour scenes in OpenToonz: action, character acting and sound.',
    accent: '#7fc4e6',
    accent2: '#4f86c6',
    emblem: 'reel',
    layout: 'grid',
  },
  {
    id: 'other',
    numeral: 'V',
    title: 'Other Works',
    craft: 'Chibi Animation · Motion Illustration',
    lede: 'Chibi animation with key poses, and motion illustration for vertical formats.',
    accent: '#b7cdf0',
    accent2: '#6f8fd0',
    emblem: 'moon',
    layout: 'mixed',
  },
]

export const works = [
  /* ── I · Animation ── */
  {
    slug: 'wind-cleaving-blade',
    chapter: 'animation',
    type: 'video',
    title: 'Wind-Cleaving Blade',
    role: 'Action Key · Smear FX',
    note: 'A spinning sword draw tears the screen with shadow smears, then the camera pulls away as the hero leaps into the sky.',
    fps: 30, frames: 29, width: 2560, height: 1440, audio: false,
  },
  {
    slug: 'starlit-resolve',
    chapter: 'animation',
    type: 'video',
    title: 'Starlit Resolve',
    role: 'Key Clean-up · Colour-coded Lines',
    note: 'A magical heroine points through a storm of floating light. Red, blue and green trace lines map every shadow and highlight.',
    fps: 30, frames: 30, width: 2560, height: 1440, audio: false,
  },
  {
    slug: 'laughter-in-the-wind',
    chapter: 'animation',
    type: 'video',
    title: 'Laughter in the Wind',
    role: 'Key Animation · Hair Follow-through',
    note: 'A hand-hidden giggle bursts into a full smile while wind lifts her hair in soft, overlapping waves.',
    fps: 30, frames: 32, width: 1920, height: 1080, audio: false,
  },
  {
    slug: 'peekaboo-prince',
    chapter: 'animation',
    type: 'video',
    title: 'Peekaboo Prince',
    role: 'First Key · 一原',
    code: '2+2 · 一原',
    note: 'Hidden behind folded arms, then a sudden reveal and a playful double wave. Timing built on anticipation and overlap.',
    fps: 30, frames: 61, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'emerald-ribbon',
    chapter: 'animation',
    type: 'video',
    title: 'The Emerald Ribbon',
    role: 'Rough Key Animation',
    note: 'A spinning gesture unfurls a ribbon of light — loose pencil, sparkle dust and a follow-through that snaps back into a fierce pose.',
    fps: 30, frames: 29, width: 1080, height: 1080, audio: false,
  },
  {
    slug: 'hello-across-the-street',
    chapter: 'animation',
    type: 'video',
    title: 'A Hello Across the Street',
    role: 'Second Key · 第二原画',
    code: 'KJH #19 · C045',
    note: 'Two characters, one glance back and a shy little wave. Colour-traced shadows and clean lines ready for inbetweening.',
    fps: 30, frames: 158, width: 1760, height: 1250, audio: false,
  },
  {
    slug: 'the-reaching-hand',
    chapter: 'animation',
    type: 'video',
    title: 'The Reaching Hand',
    role: 'Second Key · 第二原画',
    code: 'KJH #19 · C061',
    note: 'A hand drifts down through a sky of hearts and stars to take another. Anatomy, weight and tenderness in two and a half seconds.',
    fps: 30, frames: 75, width: 1762, height: 1256, audio: false,
  },
  {
    slug: 'nightbloom-first-key',
    chapter: 'animation',
    type: 'video',
    title: 'Nightbloom Curse · First Key',
    role: 'Key Animation · 原画',
    code: 'LXM #17 · C175',
    note: 'Raw key drawings of a dark-magic sequence: petals of force, a cage of skulls and smoke that devours the frame.',
    fps: 24, frames: 147, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'nightbloom-second-key',
    chapter: 'animation',
    type: 'video',
    title: 'Nightbloom Curse · Second Key',
    role: 'Second Key · 第二原画',
    code: 'LXM #17 · C175',
    note: 'The same cursed bloom, refined: tone fills, crisp effect shapes and colour lines that turn chaos into choreography.',
    fps: 30, frames: 184, width: 1920, height: 1080, audio: false,
  },

  /* ── II · Character Design ── */
  {
    slug: 'crimson-invitation',
    chapter: 'character-design',
    type: 'image',
    title: 'Crimson Invitation',
    role: 'Character Illustration · Line to Colour',
    note: 'A red-haired rogue reaches straight out of the frame. Drag across the drawing to see the clean line art become the finished colour piece.',
    compareWith: 'crimson-invitation-lines',
    width: 2817, height: 4180,
  },
  {
    slug: 'crimson-invitation-lines',
    chapter: 'character-design',
    type: 'image',
    hidden: true,
    title: 'Crimson Invitation · Line Art',
    role: 'Clean Line Art',
    note: 'The finished line art beneath Crimson Invitation — confident weight, foreshortened hand and loose, lively hair.',
    width: 2817, height: 4180,
  },
  {
    slug: 'starlight-gaze',
    chapter: 'character-design',
    type: 'image',
    title: 'Starlight Gaze',
    role: 'Eye Study',
    note: 'A close-up study of luminous, faceted blue eyes under violet bangs — layered highlights, lashes and reflected light.',
    width: 1254, height: 1254,
  },
  {
    slug: 'pastel-peace',
    chapter: 'character-design',
    type: 'image',
    title: 'Pastel Peace',
    role: 'Character Illustration',
    note: 'A cheerful peace sign in a glossy pink-and-blue jacket, with hair that melts from sky blue into violet.',
    width: 1775, height: 1889,
  },
  {
    slug: 'electric-resolve',
    chapter: 'character-design',
    type: 'image',
    title: 'Electric Resolve',
    role: 'Fan Illustration · Effects',
    note: 'A determined heroine charges a blinding orb of electricity as lightning tears across a starlit dark.',
    width: 1472, height: 832,
  },
  {
    slug: 'midnight-blue',
    chapter: 'character-design',
    type: 'image',
    title: 'Midnight Blue',
    role: 'Original Character · Full Body',
    note: 'A full-body design in shades of blue — flowing two-tone hair, a cropped blouse and striped boots.',
    width: 1080, height: 1500,
  },

  /* ── III · Comic Book ── */
  {
    slug: 'movie-night-lines',
    chapter: 'comic-book',
    type: 'image',
    title: 'Movie Night · The Trainers',
    role: 'Comic Page · Line Art',
    note: 'Five panels of three friends at the movies, from quiet popcorn to helpless laughter — a rhythm built entirely on expressions.',
    width: 612, height: 792,
  },
  {
    slug: 'movie-night-colour',
    chapter: 'comic-book',
    type: 'image',
    title: 'Movie Night · The Audience',
    role: 'Comic Page · Colour',
    note: 'The whole theatre joins in: rows of creatures on red velvet seats, each laughing in their own way.',
    width: 612, height: 792,
  },

  /* ── IV · OpenToonz ── */
  {
    slug: 'titans-of-the-park',
    chapter: 'opentoonz',
    type: 'video',
    title: 'Titans of the Park',
    role: 'Animation · Final Colour · Sound',
    note: 'A caped hero charges a grinning beast; a war-machine drops from the sky and the battle spills across the city riverside.',
    fps: 30, frames: 392, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'tears-of-the-tide-princess',
    chapter: 'opentoonz',
    type: 'video',
    title: 'Tears of the Tide Princess',
    role: 'Character Acting · Sound',
    code: 'SC-022A',
    note: 'Before the court, a sea princess trembles, closes her eyes and turns away — small, fragile acting beats in full colour.',
    fps: 8, frames: 46, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'the-princess-turns-away',
    chapter: 'opentoonz',
    type: 'video',
    title: 'The Princess Turns Away',
    role: 'Character Acting · Hair Animation · Sound',
    code: 'SC-030',
    note: 'Tears harden into anger: a clenched grimace, then a sharp turn as her long pearl-braided hair swings through the frame.',
    fps: 8, frames: 33, width: 1920, height: 1080, audio: true,
  },

  /* ── V · Other Works ── */
  {
    slug: 'a-rose-for-you',
    chapter: 'other',
    type: 'video',
    title: 'A Rose for You',
    role: 'Chibi Animation',
    note: 'On one knee with a single red rose — a blink, a nervous sweat drop and a hopeful little offering.',
    keys: ['a-rose-for-you-key-1', 'a-rose-for-you-key-2', 'a-rose-for-you-key-3'],
    fps: 30, frames: 49, width: 1224, height: 806, audio: false,
  },
  {
    slug: 'lucky-find',
    chapter: 'other',
    type: 'video',
    title: 'Lucky Find',
    role: 'Chibi Animation',
    note: 'A delighted grin at a bundle of cash on the floor… followed by a very guilty blush.',
    keys: ['lucky-find-key-1'],
    fps: 30, frames: 35, width: 520, height: 448, audio: false,
  },
  {
    slug: 'shadow-oath',
    chapter: 'other',
    type: 'video',
    title: 'Shadow Oath',
    role: 'Motion Illustration · Vertical',
    note: 'From a few searching lines to a blade-bearer carved out of darkness — flickering light, chromatic split and embers drifting through the ink.',
    fps: 30, frames: 238, width: 1080, height: 1870, audio: true,
  },
  { slug: 'a-rose-for-you-key-1', chapter: 'other', type: 'image', hidden: true, title: 'A Rose for You · Key 1', role: 'Key Pose', note: 'The offer: wide eyes and the rose held out.', width: 1224, height: 807 },
  { slug: 'a-rose-for-you-key-2', chapter: 'other', type: 'image', hidden: true, title: 'A Rose for You · Key 2', role: 'Key Pose', note: 'The blink: both characters close their eyes as the rose tilts.', width: 1224, height: 807 },
  { slug: 'a-rose-for-you-key-3', chapter: 'other', type: 'image', hidden: true, title: 'A Rose for You · Key 3', role: 'Key Pose', note: 'The settle: eyes open again, rose lifted a little higher.', width: 1224, height: 807 },
  { slug: 'lucky-find-key-1', chapter: 'other', type: 'image', hidden: true, title: 'Lucky Find · Key Pose', role: 'Key Pose', note: 'The guilty moment — sweat drop, blush and a hand frozen over the cash.', width: 520, height: 448 },
]

// A before / after pair for the Process comparison.
export const mirrorPair = {
  before: 'nightbloom-first-key',
  after: 'nightbloom-second-key',
  title: 'Nightbloom Curse',
  code: 'LXM #17 · C175',
}

export const media = (slug) => {
  const w = workBySlug[slug]
  if (w && w.type === 'image') {
    return { src: `/media/${slug}.jpg`, poster: `/media/${slug}-sm.jpg` }
  }
  return { src: `/media/${slug}.mp4`, poster: `/media/${slug}.jpg` }
}

export const workBySlug = Object.fromEntries(works.map((w) => [w.slug, w]))
export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]))
export const visibleWorks = works.filter((w) => !w.hidden)
export const worksIn = (chapterId) => visibleWorks.filter((w) => w.chapter === chapterId)
export const totalFrames = works.reduce((sum, w) => sum + (w.frames || 0), 0)
export const imageCount = visibleWorks.filter((w) => w.type === 'image').length + works.filter((w) => w.compareWith).length
export const videoCount = visibleWorks.filter((w) => w.type === 'video').length

// Characters from the work, shown together in the footer. fx / fy is the face, z the zoom.
export const cast = [
  { slug: 'crimson-invitation', fx: 46, fy: 12, z: 2.6 },
  { slug: 'pastel-peace', fx: 44, fy: 24, z: 2.2 },
  { slug: 'tears-of-the-tide-princess', fx: 22, fy: 40, z: 2.2 },
  { slug: 'starlight-gaze', fx: 58, fy: 52, z: 1.4 },
  { slug: 'electric-resolve', fx: 38, fy: 26, z: 2.6 },
  { slug: 'midnight-blue', fx: 46, fy: 11, z: 3.2 },
  { slug: 'peekaboo-prince', fx: 62, fy: 24, z: 2.6 },
  { slug: 'the-princess-turns-away', fx: 50, fy: 44, z: 1.5 },
  { slug: 'a-rose-for-you', fx: 66, fy: 42, z: 2.8 },
  { slug: 'lucky-find', fx: 60, fy: 36, z: 2.2 },
  { slug: 'movie-night-colour', fx: 51, fy: 37, z: 3.2 },
  { slug: 'shadow-oath', fx: 50, fy: 20, z: 2.2 },
]
