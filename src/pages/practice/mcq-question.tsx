import { useEffect, useState } from 'react'

import { ChoiceLabel, PracticeFrqQuestion, TopbarType } from '@/lib/types'
import { frqList, mcqQuestions } from '@/lib/constants'
import Topbar from '@/components/global/top-bar'
import Container from '@/components/global/container'
import StatusBar from '@/components/mcq/status-bar'
import Actions from '@/components/mcq/actions'
import Question from '@/components/mcq/question'

const McqQuestion = () => {
  let questions = mcqQuestions

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0)
  const [userAnswer, setUserAnswer] = useState<ChoiceLabel | null>(questions[activeQuestionIndex].userAnswer)
  const [isMarked, setIsMarked] = useState<boolean>(questions[activeQuestionIndex].isMarked)
  const [isFinished, setIsFinished] = useState<boolean>(questions[activeQuestionIndex].isFinished)
  const [isStared, setIsStared] = useState<boolean>(questions[activeQuestionIndex].isStared)

  useEffect(() => {
    const currentQuestion = questions[activeQuestionIndex]
    questions[activeQuestionIndex] = {
      ...currentQuestion,
      // @ts-ignore
      userAnswer,
      isMarked,
      isFinished,
      isStared
    }
    console.log('effect')
  }, [userAnswer, isMarked, isFinished, isStared])


  return (
    <div className="h-full">
      <Topbar
        type={TopbarType.MCQ}
        mcqData={questions[activeQuestionIndex]}
      />

      <Container className="h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-y-8 h-full px-4 py-10">
          <StatusBar
            data={questions}
            setActiveQuestionIndex={setActiveQuestionIndex}
          />
          
          <div className="flex-1">
            {/* <Question
              data={currentQuestion}
              activeQuestionIndex={activeQuestionIndex}
              setCurrentQuestion={setCurrentQuestion}
            /> */}

            <Question
              data={questions[activeQuestionIndex]}
              userAnswer={userAnswer}
              activeQuestionIndex={activeQuestionIndex}
              setUserAnswer={setUserAnswer}
            />
          </div>

          {/* <Actions
            data={mcqQuestions}
            starList={starList}
            activeQuestionIndex={activeQuestionIndex}
            setActiveQuestionIndex={setActiveQuestionIndex}
            setQuestions={setQuestions}
            setStarList={setStarList}
          /> */}

          <Actions
            data={questions}
            userAnswer={userAnswer}
            isMarked={isMarked}
            isStared={isStared}
            activeQuestionIndex={activeQuestionIndex}
            setActiveQuestionIndex={setActiveQuestionIndex}
            setIsMarked={setIsMarked}
            setIsStared={setIsStared}
            setIsFinished={setIsFinished}
          />
        </div>
      </Container>
    </div>
  )
}

export default McqQuestion
