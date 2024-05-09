import { useState } from 'react'
import {
  ChevronLeft,
  CirclePause,
  CirclePlay,
  RotateCcw,
  Star,
  Timer
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Frq } from '@/lib/types'
import { ModeToggle } from './mode-toggle'
import { Hint } from '@/components/ui/hint'
import { Button } from '@/components/ui/button'
import UserButton from '@/components/layout/navbar/user-button'

const Topbar = ({ data }: { data: Frq }) => {
  let timer: any

  const [timerSeconds, setTimerSeconds] = useState<number>(0)
  const [isTimerShow, setIsTimerShow] = useState<boolean>(false)
  const [isTimerHide, setIsTimerHide] = useState<boolean>(false)
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false)
  const [isStarred, setIsStarred] = useState<boolean>(false)

  const onTimerStart = () => {
    setIsTimerShow(true)
    setIsTimerPaused(false)
    timer = setInterval(() => setTimerSeconds(prev => prev + 1), 1000)
  }

  const onTimerReset = () => {
    setIsTimerPaused(false)
    setTimerSeconds(0)
  }

  const onTimerPause = () => {
    if (!isTimerPaused) {
      setIsTimerPaused(true)
      clearInterval(timer)
      timer = null
    } else {
      if (timer) clearInterval(timer)
      setIsTimerPaused(false)
      timer = setInterval(() => setTimerSeconds(prev => prev + 1), 1000)
    }
  }

  const onTimerHide = () => {
    setIsTimerHide(true)
    setIsTimerShow(false)
  }

  const onStar = () => {
    if (isStarred) {
      // TODO: delete star history in database
      setIsStarred(false)
    } else {
      // TODO: create star history in database
      setIsStarred(true)
    }
  }

  return (
    <nav className="flex justify-center items-center w-full h-20 border-b">
      <div className="flex justify-between items-center w-full md:px-20 px-4">
        <span>{data.name}</span>

        <div className="flex items-center md:gap-x-4 gap-x-2">
          {!isTimerShow && (
            <Button variant="outline" size="icon" onClick={onTimerStart}>
              <Hint
                asChild
                label={isTimerHide ? 'Show the clock' : 'Start the clock'}
                side="bottom"
                align="center"
              >
                <Timer className="w-5 h-5" />
              </Hint>
            </Button>
          )}

          {isTimerShow && (
            <div className="flex items-center gap-x-1">
              <Button
                onClick={onTimerHide}
                variant="outline"
                size="icon"
              >
                <Hint asChild label="Hide" side="bottom" align="center">
                  <ChevronLeft className="w-5 h-5" />
                </Hint>
              </Button>

              <Button
                onClick={onTimerPause}
                variant="outline"
                className="h-10 px-4"
              >
                <div className="flex items-center gap-x-2">
                  {isTimerPaused ? (
                    <CirclePlay className="w-5 h-5" />
                  ) : (
                    <CirclePause className="w-5 h-5" />
                  )}

                  <span>{new Date(timerSeconds * 1000).toISOString().substring(11, 19)}</span>
                </div>
              </Button>

              <Button
                onClick={onTimerReset}
                variant="outline"
                size="icon"
              >
                <Hint asChild label="Reset" side="bottom" align="center">
                  <RotateCcw className="w-5 h-5" />
                </Hint>
              </Button>
            </div>
          )}

          <Button
            onClick={onStar}
            variant="outline"
            size="icon"
          >
            <Hint
              asChild
              label={isStarred ? 'Cancel star' : 'Star current FRQ'}
              side="bottom"
              align="center"
            >
              <Star className={cn('w-5 h-5', isStarred && 'text-yellow-500')} />
            </Hint>
          </Button>
        </div>

        <div className="flex items-center md:gap-x-4 gap-x-2">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  )
}

export default Topbar
