import { useCallback, useState } from 'react'
import { useSectionTints } from './hooks'
import { SparkleCursor, Starfield } from './components/Atmosphere'
import FloatingWorld from './components/FloatingWorld'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import FilmStrip from './components/FilmStrip'
import Chapters from './components/Chapters'
import Mirror from './components/Mirror'
import Atelier from './components/Atelier'
import Letters from './components/Letters'
import Theater from './components/Theater'

export default function App() {
  const [ready, setReady] = useState(false)
  const [watching, setWatching] = useState(null)
  const watch = useCallback((slug) => setWatching(slug), [])
  const close = useCallback(() => setWatching(null), [])

  useSectionTints()

  return (
    <>
      <div className="aurora" aria-hidden />
      <Starfield />
      <FloatingWorld />
      <div className="grain" aria-hidden />

      <Loader onDone={() => setReady(true)} />
      <Nav />

      <main className="page">
        <Hero ready={ready} onWatch={watch} />
        <FilmStrip onWatch={watch} />
        <Chapters onWatch={watch} />
        <FilmStrip onWatch={watch} reverse />
        <Mirror onWatch={watch} />
        <Atelier />
        <Letters />
      </main>

      <Theater slug={watching} onClose={close} onNavigate={watch} />
      <SparkleCursor />
    </>
  )
}
