import { motion } from 'framer-motion'
import { chapters, worksIn } from '../data/works'
import { Emblem } from './Icons'
import WorkCard from './WorkCard'
import ImageCard from './ImageCard'
import ComicBook from './ComicBook'
import './Chapters.css'

function ChapterWorks({ chapter, items, onWatch }) {
  switch (chapter.layout) {
    case 'gallery':
      return (
        <div className="chapter-works chapter-works--gallery">
          {items.map((w, i) => (
            <ImageCard key={w.slug} work={w} chapter={chapter} index={i} onWatch={onWatch} />
          ))}
        </div>
      )
    case 'book':
      return <ComicBook pages={items} chapter={chapter} onWatch={onWatch} />
    case 'mixed': {
      const portrait = items.filter((w) => w.height > w.width)
      const rest = items.filter((w) => w.height <= w.width)
      return (
        <div className="chapter-works chapter-works--mixed">
          {rest.map((w, i) => (
            <WorkCard key={w.slug} work={w} chapter={chapter} variant="small" index={i} onWatch={onWatch} />
          ))}
          {portrait.map((w, i) => (
            <WorkCard key={w.slug} work={w} chapter={chapter} variant="portrait" index={i} onWatch={onWatch} />
          ))}
        </div>
      )
    }
    default:
      return (
        <div className="chapter-works">
          {items.map((w, i) => (
            <WorkCard key={w.slug} work={w} chapter={chapter} variant={i === 0 ? 'large' : 'small'} index={i % 2} onWatch={onWatch} />
          ))}
        </div>
      )
  }
}

const ease = [0.16, 1, 0.3, 1]

function Contents() {
  return (
    <div className="contents">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
      >
        <span className="kicker">Table of Contents</span>
        <h2 className="display">
          Five <em className="shimmer">enchanted</em> chapters
        </h2>
        <p>Animation, character design, comics, OpenToonz scenes and little experiments — each chapter is its own world with its own colour. Pick a page, or keep scrolling and let the story unfold.</p>
      </motion.div>

      <ol className="contents-list">
        {chapters.map((c, i) => {
          const count = worksIn(c.id).length
          return (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
            >
              <a href={`#chapter-${c.id}`} className="contents-tile" style={{ '--accent': c.accent, '--accent2': c.accent2 }}>
                <span className="contents-numeral">{c.numeral}</span>
                <span className="contents-emblem">
                  <Emblem name={c.emblem} />
                </span>
                <span className="contents-title">{c.title}</span>
                <span className="contents-craft">{c.craft}</span>
                <span className="contents-count hand">
                  {count} {count === 1 ? 'piece' : 'pieces'} →
                </span>
              </a>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}

function Chapter({ chapter, index, onWatch }) {
  const items = worksIn(chapter.id)
  const flip = index % 2 === 1

  return (
    <section
      id={`chapter-${chapter.id}`}
      className={`chapter chapter--${chapter.layout} ${flip ? 'is-flipped' : ''}`}
      style={{ '--accent': chapter.accent, '--accent2': chapter.accent2 }}
      data-tint-a={chapter.accent}
      data-tint-b={chapter.accent2}
    >
      <div className="chapter-backdrop" aria-hidden>
        <span className="chapter-orb chapter-orb-1" />
        <span className="chapter-orb chapter-orb-2" />
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className="chapter-motif" style={{ '--i': i, top: `${12 + ((i * 37) % 76)}%` }}>
            <Emblem name={chapter.emblem} />
          </span>
        ))}
      </div>

      <div className="wrap">
        <header className="chapter-head">
          <span className="chapter-bignum" aria-hidden>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, x: flip ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            >
              {chapter.numeral}
            </motion.span>
          </span>

          <motion.div
            className="chapter-medallion"
            initial={{ scale: 0, rotate: -120 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          >
            <Emblem name={chapter.emblem} />
          </motion.div>

          <motion.div
            className="chapter-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            <span className="kicker">Chapter {chapter.numeral}</span>
            <h2 className="display chapter-title">{chapter.title}</h2>
            <p className="hand chapter-craft">
              {chapter.craft}
              <svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden>
                <motion.path
                  d="M3 11C60 3 140 2 200 7s80 5 97-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.5, ease: 'easeInOut' }}
                />
              </svg>
            </p>
            <p className="chapter-lede">{chapter.lede}</p>
          </motion.div>
        </header>

        <ChapterWorks chapter={chapter} items={items} onWatch={onWatch} />
      </div>
    </section>
  )
}

export default function Chapters({ onWatch }) {
  return (
    <div id="chapters" className="chapters" data-tint-a="#b9a4ff" data-tint-b="#ff7eb6">
      <div className="wrap section">
        <Contents />
      </div>
      {chapters.map((c, i) => (
        <Chapter key={c.id} chapter={c} index={i} onWatch={onWatch} />
      ))}
    </div>
  )
}
