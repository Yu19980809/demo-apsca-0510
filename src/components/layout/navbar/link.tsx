import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { cn } from '@/lib/utils'

type Props = {
  index: number
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
  item: {
    label: string
    href: string
    content: ({
      label: string
      href: string
    })[]
  }
}

const Link = ({ item, index, activeIndex, setActiveIndex }: Props) => {
  const navigate = useNavigate()
  const isActive = index === activeIndex

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClick = () => {
    if (!item.content || item.content.length === 0) {
      navigate(item.href)
      setActiveIndex(index)
      return
    }

    setIsOpen(prev => !prev)
  }

  const onSelectPractice = (href: string) => {
    setIsOpen(false)
    setActiveIndex(index)
    navigate(href)
  }

  return (
    <div className="relative">
      <div
        onClick={onClick}
        className={cn(
          'flex justify-center items-center gap-x-1 text-lg cursor-pointer hover:text-muted-foreground',
          isActive && 'text-muted-foreground '
        )}
      >
        <span>{item.label}</span>
        
        {!!item.content && item.content.length !== 0 && (
          <ChevronRight className={cn(
            'w-4 h-4 text-muted-foreground transition-all',
            isOpen && 'rotate-90'
          )} />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-8 left-0 flex flex-col gap-y-2 w-20 px-4 py-2 rounded-md border bg-secondary z-10">
          {item.content.map(content => (
            <span
              key={content.label}
              onClick={() => onSelectPractice(content.href)}
              className="cursor-pointer hover:underline hover:text-muted-foreground"
            >
              {content.label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Link
