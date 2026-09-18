import { motion } from 'framer-motion'
import { media } from '../data/works'
import { Icon } from './Icons'
import './ComicBook.css'

const ease = [0.16, 1, 0.3, 1]

/* An open storybook: two comic pages laid side by side on a hardcover. */
export default function ComicBook({ pages, chapter, onWatch }) {
  const [left, right] = pages

  return (
    <div className="comic" style={{ '--accent': chapter.accent, '--accent2': chapter.accent2 }}>
      <motion.div
        className="comic-book"
        initial={{ opacity: 0, rotateX: 28, y: 80 }}
        whileInView={{ opacity: 1, rotateX: 10, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.4, ease }}
      >
        <span className="comic-ribbon" aria-hidden />
        <div className="comic-cover" aria-hidden />
        <div className="comic-spread">
          {[left, right].filter(Boolean).map((page, i) => (
            <button
              key={page.slug}
              className={`comic-page comic-page--${i === 0 ? 'left' : 'right'}`}
              onClick={() => onWatch(page.slug)}
              aria-label={`Read ${page.title}`}
            >
              <motion.span
                className="comic-page-paper"
                initial={{ rotateY: i === 0 ? 70 : -70, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 1.3, delay: 0.3 + i * 0.25, ease }}
              >
                <img src={media(page.slug).src} alt={page.title} loading="lazy" />
                <span className="comic-page-shade" aria-hidden />
                <span className="comic-page-num">{i + 1}</span>
                <span className="comic-zoom">
                  <Icon.ZoomIn /> Read
                </span>
              </motion.span>
            </button>
          ))}
        </div>
      </motion.div>

      <div className="comic-captions">
        {[left, right].filter(Boolean).map((page, i) => (
          <motion.div
            key={page.slug}
            className="comic-caption"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease }}
          >
            <span className="comic-caption-num">Page {i + 1}</span>
            <p className="hand card-role">{page.role}</p>
            <h3 className="card-title">{page.title}</h3>
            <p className="card-note">{page.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
