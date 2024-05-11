import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Hint } from '@/components/ui/hint'
import { Button } from '@/components/ui/button'

const CodeEditor = () => {
  const methods = [
    {
      label: 'Method 1'
    },
    {
      label: 'Method 2'
    },
    {
      label: 'Method 3'
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center p-1 bg-white/50">
        <div className="flex items-center">
          {methods.map((item, index) => (
            <Button
              asChild
              variant="ghost"
              onClick={() => setActiveIndex(index)}
            >
              <div className={cn(
                'flex items-center gap-x-1 cursor-pointer',
                index === activeIndex && 'bg-accent text-accent-foreground'
              )}>
                <span>{item.label}</span>
              </div>
            </Button>
          ))}
        </div>

        <Hint label="Collapse" side="left" align="center">
          <Button
            variant="ghost"
            size="sm"
            // onClick={() => setIsCollapsed(true)}
          >
            <ChevronUp className="w-5 h-5" />
          </Button>
        </Hint>
      </div>

      <div className="flex-1 flex justify-center items-center bg-white">
        {methods[activeIndex].label}
      </div>
    </div>
  )
}

export default CodeEditor
