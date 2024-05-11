import { useState } from 'react'
import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons'
import {
  AlarmClockCheck,
  ChevronLeft,
  CirclePause,
  CirclePlay,
  RotateCcw,
} from 'lucide-react'

import { Frq, PracticeFrqQuestion, TopbarType } from '@/lib/types'
import { ModeToggle } from './mode-toggle'
import { Hint } from '@/components/ui/hint'
import { Button } from '@/components/ui/button'
import UserButton from '@/components/layout/navbar/user-button'

type Props = {
  type: TopbarType
  mcqData?: PracticeFrqQuestion
  frqData?: Frq
}

const Topbar = ({
  type,
  mcqData,
  frqData
}: Props) => {
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
        <span>
          {type === TopbarType.FRQ ? frqData?.name : mcqData?.name}
        </span>

        <div className="flex items-center md:gap-x-4 gap-x-2">
          {!isTimerShow && (
            <Hint
              asChild
              label={isTimerHide ? 'Show the clock' : 'Start the clock'}
              side="bottom"
              align="center"
            >
              <Button variant="outline" size="icon" onClick={onTimerStart}>
                <AlarmClockCheck className="w-5 h-5" />
              </Button>
            </Hint>
          )}

          {isTimerShow && (
            <div className="flex items-center gap-x-1">
              <Hint asChild label="Hide" side="bottom" align="center">
                <Button
                  onClick={onTimerHide}
                  variant="outline"
                  size="icon"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Button>
              </Hint>

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

              <Hint asChild label="Reset" side="bottom" align="center">
                <Button
                  onClick={onTimerReset}
                  variant="outline"
                  size="icon"
                >
                    <RotateCcw className="w-5 h-5" />
                </Button>
              </Hint>
            </div>
          )}

          {type === TopbarType.FRQ && (
            <Hint
              asChild
              label={isStarred ? 'Cancel star' : 'Star current question'}
              side="bottom"
              align="center"
            >
              <Button
                onClick={onStar}
                variant="outline"
                size="icon"
              >
                <>
                  {!isStarred && <StarIcon className="w-5 h-5" />}
                  {!!isStarred && <StarFilledIcon className="w-5 h-5 text-yellow-500" />}
                </>
              </Button>
            </Hint>
          )}
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
