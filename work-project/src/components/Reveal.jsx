import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

/** Scroll reveal: content rises out of a mask as it enters the viewport. Plays once, then stays still. */
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24, clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
