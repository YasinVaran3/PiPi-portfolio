import { useCallback, useState } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Theater from './components/Theater'

export default function App() {
  const [watching, setWatching] = useState(null)
  const watch = useCallback((slug) => setWatching(slug), [])
  const close = useCallback(() => setWatching(null), [])

  return (
    <>
      <div className="backdrop" aria-hidden />
      <div className="grain" aria-hidden />

      <Nav />

      <main className="page">
        <Hero onWatch={watch} />
        <Work onWatch={watch} />
        <Process onWatch={watch} />
        <About />
        <Contact onWatch={watch} />
      </main>

      <Theater slug={watching} onClose={close} onNavigate={watch} />
      <Cursor />
    </>
  )
}
