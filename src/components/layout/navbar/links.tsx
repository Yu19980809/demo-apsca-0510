import { useState } from 'react'

import { navLinks } from '@/lib/constants'
import Link from './link'

const Links = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex items-center md:gap-x-12 gap-x-4">
      {navLinks.map((item, index) => (
        <Link
          key={item.label}
          item={item}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  )
}

export default Links
