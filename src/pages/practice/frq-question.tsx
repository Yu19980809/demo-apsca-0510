import { ElementRef, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { frqList } from '@/lib/constants'
import Topbar from '@/components/global/top-bar'
import CodeArea from '@/components/global/code-area'
import QuestionArea from '@/components/frq/question-area'

const FrqQuestion = () => {
  const { id } = useParams()
  const frq = frqList.filter(item => item.questionId === id)[0]

  const textRef = useRef<ElementRef<'div'>>(null)
  const codeRef = useRef<ElementRef<'div'>>(null)
  const resizeRef = useRef(false)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    resizeRef.current = true
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!resizeRef.current) return

    let newWidth = e.clientX

    if (newWidth < 400) newWidth = 400

    if (textRef.current && codeRef.current) {
      textRef.current.style.width = `${newWidth}px`
    }
  }

  const onMouseUp = () => {
    resizeRef.current = false
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  // const onWidthReset = () => {
  //   if (!textRef.current) return

  //   textRef.current.style.width = '100%'
  // }

  return (
    <div className="h-full">
      <Topbar data={frq} />

      <div className="flex gap-x-4 w-full h-[calc(100vh-80px)] md:px-20 px-4 py-10">
        <div
          ref={textRef}
          className="flex flex-col h-full"
        >
          <QuestionArea data={frq} />
        </div>

        <div
          onMouseDown={onMouseDown}
          className="w-1 h-full bg-primary/10 transition cursor-ew-resize"
        />

        <div ref={codeRef} className="flex-grow"
        >
          <CodeArea showExplain showSubmit methods={3} />
        </div>
      </div>
    </div>
  )
}

export default FrqQuestion
