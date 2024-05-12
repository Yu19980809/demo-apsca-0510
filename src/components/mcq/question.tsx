import { Choice, ChoiceLabel, PracticeMcqQuestion } from '@/lib/types'
import RadioGroup from '@/components/global/radio-group'

type Props = {
  data: PracticeMcqQuestion[]
  // userAnswer: ChoiceLabel | null
  activeQuestionIndex: number
  // setUserAnswer: React.Dispatch<ChoiceLabel | null>
  setQuestions: React.Dispatch<PracticeMcqQuestion[]>
}

const Question = ({
  data,
  // userAnswer,
  activeQuestionIndex,
  setQuestions
  // setUserAnswer
}: Props) => {
  const currentQuestion = data[activeQuestionIndex]

  const onSelect = (choice: Choice) => {
    data[activeQuestionIndex].userAnswer = choice.label
    setQuestions(data)
  }

  return (
    <>
      <h2 className="font-semibold text-lg">
        Q{activeQuestionIndex + 1}. {currentQuestion.description}
      </h2>

      <RadioGroup
        choices={currentQuestion.choices}
        // selected={userAnswer}
        // onSelect={(choice: Choice) => setUserAnswer(choice.label)}
        selected={currentQuestion.userAnswer}
        onSelect={onSelect}
      />
    </>
  )
}

export default Question
