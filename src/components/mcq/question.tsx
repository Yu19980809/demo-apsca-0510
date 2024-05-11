import { useState } from 'react'

import { Choice, ChoiceLabel, PracticeFrqQuestion } from '@/lib/types'
import RadioGroup from '@/components/global/radio-group'

type Props = {
  data: PracticeFrqQuestion
  userAnswer: ChoiceLabel | null
  activeQuestionIndex: number
  setUserAnswer: React.Dispatch<ChoiceLabel | null>
}

const Question = ({
  data,
  userAnswer,
  activeQuestionIndex,
  setUserAnswer
}: Props) => {
  return (
    <>
      <h2 className="font-semibold text-lg">
        Q{activeQuestionIndex + 1}. {data.description}
      </h2>

      <RadioGroup
        choices={data.choices}
        selected={userAnswer}
        onSelect={(choice: Choice) => setUserAnswer(choice.label)}
      />
    </>
  )
}

export default Question
