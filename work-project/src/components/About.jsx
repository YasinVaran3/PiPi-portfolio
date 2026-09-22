import { profile } from '../data/profile'
import { chapters } from '../data/works'
import Reveal from './Reveal'
import './About.css'

const PIPELINE = [
  { name: 'Storyboard', jp: '絵コンテ', mine: false },
  { name: 'Layout', jp: 'レイアウト', mine: false },
  { name: 'First Key', jp: '一原', mine: true },
  { name: 'Second Key', jp: '第二原画', mine: true },
  { name: 'Effects', jp: 'エフェクト', mine: true },
  { name: 'Colour & Comp', jp: '仕上げ・撮影', mine: true },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="display about-title">
              Craft, discipline <em>and detail.</em>
            </h2>
          </Reveal>
          <Reveal as="p" delay={0.08} className="about-tagline">
            {profile.tagline}
          </Reveal>
          {profile.bio.map((p, i) => (
            <Reveal as="p" key={i} delay={0.12 + i * 0.05} className="about-bio">
              {p}
            </Reveal>
          ))}
        </div>

        <div className="about-side">
          <Reveal className="about-block">
            <h3>Disciplines</h3>
            <ul className="about-list">
              {chapters.map((c) => (
                <li key={c.id}>
                  <span style={{ background: c.accent }} />
                  <strong>{c.title}</strong>
                  <em>{c.craft}</em>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about-block" delay={0.08}>
            <h3>Tools</h3>
            <ul className="about-tools">
              {profile.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about-block" delay={0.12}>
            <h3>
              Production pipeline <small>— highlighted: my role</small>
            </h3>
            <ol className="about-pipeline">
              {PIPELINE.map((s, i) => (
                <li key={s.name} className={s.mine ? 'is-mine' : ''}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <strong>{s.name}</strong>
                  <em>{s.jp}</em>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
