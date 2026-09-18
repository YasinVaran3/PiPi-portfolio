import { Balloon, Butterfly, FoxPuppet, Lantern, Marionette, PaperCrane, SkyWhale, StarSprite } from './Characters'
import './FloatingWorld.css'

/* A fixed layer of creatures drifting in from every edge of the screen.
   Back layer sits behind the content; the front layer floats over it (never catching the pointer). */
export default function FloatingWorld() {
  return (
    <>
      <div className="fw fw-back" aria-hidden>
        <div className="fw-path fw-whale">
          <SkyWhale />
        </div>
        <div className="fw-path fw-balloon">
          <Balloon />
        </div>
        <div className="fw-path fw-lantern fw-lantern-1">
          <Lantern hue="#ffc86b" />
        </div>
        <div className="fw-path fw-lantern fw-lantern-2">
          <Lantern hue="#ff7eb6" />
        </div>
        <div className="fw-path fw-lantern fw-lantern-3">
          <Lantern hue="#6ef0c8" />
        </div>
        <div className="fw-path fw-sprite">
          <StarSprite />
        </div>
      </div>

      <div className="fw fw-front" aria-hidden>
        <div className="fw-path fw-crane-ltr">
          <PaperCrane hue="rose" />
        </div>
        <div className="fw-path fw-crane-rtl">
          <PaperCrane hue="sky" />
        </div>
        <div className="fw-path fw-crane-high">
          <PaperCrane hue="gold" />
        </div>
        <div className="fw-path fw-bfly fw-bfly-1">
          <Butterfly a="#ff7eb6" b="#ffc86b" />
        </div>
        <div className="fw-path fw-bfly fw-bfly-2">
          <Butterfly a="#7cc8ff" b="#6ef0c8" />
        </div>
        <div className="fw-path fw-bfly fw-bfly-3">
          <Butterfly a="#b9a4ff" b="#ff9fc8" />
        </div>
        <div className="fw-path fw-marionette">
          <Marionette />
        </div>
        <div className="fw-path fw-fox">
          <FoxPuppet />
        </div>
      </div>
    </>
  )
}
