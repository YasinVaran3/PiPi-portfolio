import { chapterById, media, visibleWorks } from '../data/works'
import './FilmStrip.css'

/* A reel of film frames drifting across the page — a ribbon between acts. */
export default function FilmStrip({ onWatch, reverse = false }) {
  const loop = [...visibleWorks, ...visibleWorks]
  return (
    <div className={`filmstrip ${reverse ? 'is-reverse' : ''}`}>
      <div className="filmstrip-track">
        {loop.map((w, i) => {
          const ch = chapterById[w.chapter]
          const hiddenCopy = i >= visibleWorks.length
          return (
            <button
              key={`${w.slug}-${i}`}
              className="filmstrip-frame"
              style={{ '--accent': ch.accent }}
              onClick={() => onWatch(w.slug)}
              aria-hidden={hiddenCopy}
              tabIndex={hiddenCopy ? -1 : 0}
              aria-label={`Open ${w.title}`}
            >
              <img src={media(w.slug).poster} alt="" loading="lazy" />
              <span className="filmstrip-label">
                <b>{ch.numeral}</b> {w.title}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
