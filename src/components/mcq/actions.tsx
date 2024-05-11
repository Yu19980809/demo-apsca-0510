import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons'

import { ChoiceLabel, PracticeFrqQuestion } from '@/lib/types'
import ConfirmModal from '@/components/modals/comfirm-modal'
import { Button } from '@/components/ui/button'
import { Hint } from '@/components/ui/hint'

// type Props = {
//   data: PracticeFrqQuestion[]
//   starList: string[]
//   activeQuestionIndex: number
//   setActiveQuestionIndex: React.Dispatch<number>
//   setQuestions: React.Dispatch<PracticeFrqQuestion[]>
//   setStarList: React.Dispatch<string[]>
// }

type Props = {
  data: PracticeFrqQuestion[]
  userAnswer: ChoiceLabel | null
  isMarked: boolean
  isStared: boolean
  activeQuestionIndex: number
  setActiveQuestionIndex: React.Dispatch<number>
  setIsMarked: React.Dispatch<boolean>
  setIsStared: React.Dispatch<boolean>
  setIsFinished: React.Dispatch<boolean>
}

const Actions = ({
  data,
  userAnswer,
  isMarked,
  isStared,
  activeQuestionIndex,
  setActiveQuestionIndex,
  setIsMarked,
  setIsStared,
  setIsFinished
}: Props) => {
  const len = data.length
  // const currentQuestion = data[activeQuestionIndex]

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onPrev = () => {
    setActiveQuestionIndex(activeQuestionIndex - 1)
    if (!userAnswer) return
    setIsFinished(true)
  }

  const onNext = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1)
    if (!userAnswer) return
    setIsFinished(true)
    
  }

  const onMark = () => {
    isMarked ? setIsMarked(false) : setIsFinished(true)

    // if (!isMarked) {
    //   setIsMarked(true)
    //   currentQuestion.isMarked = true
    //   data[activeQuestionIndex] = currentQuestion
    //   setQuestions(data)
    // } else {
    //   setIsMarked(false)
    //   currentQuestion.isMarked = false
    //   data[activeQuestionIndex] = currentQuestion
    //   setQuestions(data)
    // }

    // setQuestions(data)
  }

  const onStar = () => {
    isStared ? setIsStared(false) : setIsStared(true)

    // if (isStarred) {
    //   const temp = starList.filter(item => item !== currentQuestion.name)
    //   setStarList(temp)
    //   setIsStarred(false)
    // } else {
    //   starList.push(currentQuestion.name)
    //   setStarList(starList)
    //   setIsStarred(true)
    // }
  }

  const onSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        disabled={activeQuestionIndex === 0}
        onClick={onPrev}
      >
        <div className="flex items-center gap-x-1">
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </div>
      </Button>

      <div className="flex items-center gap-x-4">
        <Hint
          asChild
          label={isStared ? 'Cancel star' : 'Star current question'}
          side="bottom"
          align="center"
        >
          <Button
            onClick={onStar}
            variant="outline"
            size="icon"
          >
            <>
              {!isStared && <StarIcon className="w-5 h-5" />}
              {!!isStared && <StarFilledIcon className="w-5 h-5 text-yellow-500" />}
            </>
          </Button>
        </Hint>

        <Hint
          asChild
          side="top"
          align="center"
          label="If you don't sure the answer, you can mark this question, and review it later."
        >
          <Button variant="outline" onClick={onMark}>
            {isMarked ? 'Cancel mark' : 'Mark'}
          </Button>
        </Hint>

        {activeQuestionIndex === (len - 1) && (
          <ConfirmModal
            title="Are you absolutely sure?"
            description="This action cannot be undone. We suggest you review questions first, and then submit."
            open={modalOpen}
            disabled={isSubmitting}
            setOpen={setModalOpen}
            onSubmit={onSubmit}
          >
            <Button variant="outline">Submit</Button>
          </ConfirmModal>
        )}

        <Button
          variant="outline"
          disabled={activeQuestionIndex === len -1}
          onClick={onNext}
        >
          <div className="flex items-center gap-x-1">
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Actions
