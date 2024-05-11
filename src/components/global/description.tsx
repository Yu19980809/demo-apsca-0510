import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import { cn } from '@/lib/utils'
import { QuestionTab } from '@/lib/types'
import { descriptionTabs } from '@/lib/constants'
import { Hint } from '@/components/ui/hint'
import { Button } from '@/components/ui/button'

type Props = {
  type?: 'learn' | 'question'
  isCollapsed?: boolean
  hasResult?: boolean
  hasExplanation?: boolean
  setIsCollapsed: React.Dispatch<boolean>
}

const Description = ({
  type = 'question',
  isCollapsed = false,
  hasResult = false,
  hasExplanation = false,
  setIsCollapsed
}: Props) => {
  const [activeTab, setActiveTab] = useState<QuestionTab>(QuestionTab.DESCRIPTION)

  return (
    <div className={cn(
      'h-full transition-all',
      isCollapsed ? 'w-[50px]' : 'flex-1'
    )}>
      {isCollapsed && (
        <div className="flex flex-col justify-between items-center w-[50px] h-full p-2 rounded-md bg-background">
          <div className="relative -left-1/2 -top-10 flex items-center h-9 transform translate-x-1/2 rotate-90 origin-bottom-left">
            {descriptionTabs.map(item => (
              <Button
                asChild
                variant="ghost"
                onClick={() => setActiveTab(item.value)}
              >
                <div className={cn(
                  'flex items-center gap-x-1 cursor-pointer',
                  item.label === 'Result' && !hasResult && 'hidden',
                  item.label === 'Explanation' && !hasExplanation && 'hidden',
                  item.value === activeTab && 'bg-accent text-accent-foreground'
                )}>
                  <item.icon className="w-4 h-4 text-sky-500" />
                  <span>{item.label}</span>
                </div>
              </Button>
            ))}
          </div>

          <Hint label="Expand" side="right" align="center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(false)}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Hint>
        </div>
      )}

      {!isCollapsed && (
        <div className="flex flex-col h-full rounded-md border overflow-hidden">
          <div className="flex justify-between items-center p-1 bg-white/50">
            <div className="flex items-center">
              {descriptionTabs.map(item => (
                <Button
                  asChild
                  variant="ghost"
                  onClick={() => setActiveTab(item.value)}
                >
                  <div className={cn(
                    'flex items-center gap-x-1 cursor-pointer',
                    item.label === 'Result' && !hasResult && 'hidden',
                    item.label === 'Explanation' && !hasExplanation && 'hidden',
                    item.value === activeTab && 'bg-accent text-accent-foreground'
                  )}>
                    <item.icon className="w-4 h-4 text-sky-500" />
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
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Hint>
          </div>

          <div className="flex-1 flex justify-center items-center bg-white">
            {activeTab}
          </div>
        </div>
      )}
    </div>
  )
}

export default Description
