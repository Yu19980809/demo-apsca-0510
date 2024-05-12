import { useEffect, useState } from 'react'

import { ChoiceLabel, PracticeMcqQuestion, TopbarType } from '@/lib/types'
import { mcqQuestions } from '@/lib/constants'
import Topbar from '@/components/global/top-bar'
import Container from '@/components/global/container'
import StatusBar from '@/components/mcq/status-bar'
import Actions from '@/components/mcq/actions'
import Question from '@/components/mcq/question'

const McqQuestion = () => {
  // let questions = mcqQuestions

  const [questions, setQuestions] = useState<PracticeMcqQuestion[]>(mcqQuestions)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0)
  // const [userAnswer, setUserAnswer] = useState<ChoiceLabel | null>(questions[activeQuestionIndex].userAnswer)
  // const [isMarked, setIsMarked] = useState<boolean>(questions[activeQuestionIndex].isMarked)
  // const [isFinished, setIsFinished] = useState<boolean>(questions[activeQuestionIndex].isFinished)
  // const [isStared, setIsStared] = useState<boolean>(questions[activeQuestionIndex].isStared)

  console.log('test', questions)

  // useEffect(() => {
  //   console.log('effect isFinished', isFinished)
  //   console.log('effect isMarked', isMarked)
  //   console.log('effect isStared', isStared)

  //   const currentQuestion = questions[activeQuestionIndex]
  //   questions[activeQuestionIndex] = {
  //     ...currentQuestion,
  //     // @ts-ignore
  //     userAnswer,
  //     isMarked,
  //     isFinished,
  //     isStared
  //   }
  //   console.log('effect', questions)
  //   setQuestions(questions)
  // }, [questions, activeQuestionIndex, userAnswer, isMarked, isFinished, isStared])


  return (
    <div className="h-full">
      <Topbar
        type={TopbarType.MCQ}
        label={questions[activeQuestionIndex].name}
      />

      <Container className="h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-y-8 h-full px-4 py-10">
          <StatusBar
            data={questions}
            setActiveQuestionIndex={setActiveQuestionIndex}
          />
          
          <div className="flex-1">
            <Question
              // data={questions[activeQuestionIndex]}
              data={questions}
              // userAnswer={userAnswer}
              activeQuestionIndex={activeQuestionIndex}
              setQuestions={setQuestions}
              // setUserAnswer={setUserAnswer}
            />
          </div>

          <Actions
            data={questions}
            // userAnswer={userAnswer}
            // isMarked={isMarked}
            // isStared={isStared}
            activeQuestionIndex={activeQuestionIndex}
            setActiveQuestionIndex={setActiveQuestionIndex}
            setQuestions={setQuestions}
            // setIsMarked={setIsMarked}
            // setIsStared={setIsStared}
            // setIsFinished={setIsFinished}
          />
        </div>
      </Container>
    </div>
  )
}

export default McqQuestion
