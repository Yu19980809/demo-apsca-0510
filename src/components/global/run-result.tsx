import { forwardRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AppWindowMac, ChevronDown, ChevronUp, TestTubes } from 'lucide-react'
import { Hint } from '../ui/hint'

type Props = {
  showExplain?: boolean
  isCollapsed?: boolean
  setIsCollapsed: React.Dispatch<boolean>
}

const RunResult = forwardRef(({
  showExplain = false,
  isCollapsed = false,
  setIsCollapsed
}: Props, ref: any) => {
  const tests = [
    {
      label: 'Test Cases',
      icon: TestTubes
    },
    {
      label: 'Test Result',
      icon: AppWindowMac
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const onExplain = () => {}

  return (
    <>
      {isCollapsed && (
        <div className="flex justify-between items-center h-[50px] p-2 rounded-md bg-white">
          <div className="flex items-center">
            {tests.map((item, index) => (
              <Button
                key={item.label}
                asChild
                variant="ghost"
                onClick={() => setActiveIndex(index)}
              >
                <div className={cn(
                  'flex items-center gap-x-1 cursor-pointer',
                  index === activeIndex && 'bg-accent text-accent-foreground'
                )}>
                  <item.icon className="w-4 h-4 text-green-500" />
                  <span>{item.label}</span>
                </div>
              </Button>
            ))}
          </div>

          <Hint label="Expand" side="left" align="center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(true)}
            >
              <ChevronUp className="w-5 h-5" />
            </Button>
          </Hint>
        </div>
      )}

      {!isCollapsed && (
        <div ref={ref} className="flex-1 flex flex-col">
          <div className="flex justify-between items-center p-1 bg-white/50">
            <div className="flex items-center">
              {tests.map((item, index) => (
                <Button
                  key={item.label}
                  asChild
                  variant="ghost"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={cn(
                    'flex items-center gap-x-1 cursor-pointer',
                    index === activeIndex && 'bg-accent text-accent-foreground'
                  )}>
                    <item.icon className="w-4 h-4 text-green-500" />
                    <span>{item.label}</span>
                  </div>
                </Button>
              ))}
            </div>

            <Hint label="Collapse" side="left" align="center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCollapsed(true)}
              >
                <ChevronDown className="w-5 h-5" />
              </Button>
            </Hint>
          </div>

          <div className="relative flex-1 flex justify-center items-center bg-white">
            {tests[activeIndex].label}

            {activeIndex === 1 && showExplain && (
              <Button
                onClick={onExplain}
                className="absolute right-4 bottom-4 z-10"
              >
                Explain
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  )
})

export default RunResult
