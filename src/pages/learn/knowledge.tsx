import { ElementRef, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import Container from '@/components/global/container'
import CodeArea from '@/components/global/code-area'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Knowledge = () => {
  const { id } = useParams()
  console.log('Knowledge id', id)

  const textRef = useRef<ElementRef<'div'>>(null)
  const codeRef = useRef<ElementRef<'div'>>(null)
  const resizeRef = useRef(false)

  const [open, setOpen] = useState<boolean>(false)

  const knowledge = {
    id,
    number: '1.1.1',
    description: 'Call System class methods to generate output to the console.',
    text: `
      This is test text. This is test text. This is test text. This is test text. This is test text.
      This is test text. This is test text. This is test text. This is test text. This is test text.
      This is test text. This is test text. This is test text. This is test text. This is test text.
    `
  }

  const onCodeClick = () => {
    if (!open) return setOpen(true)

    onWidthReset()
    setOpen(false)
  }

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

  const onWidthReset = () => {
    if (!textRef.current) return

    textRef.current.style.width = '100%'
  }

  return (
    <div className="h-screen bg-accent">
      <Container className="flex gap-x-1">
        <div
          ref={textRef}
          className={cn(
            'relative flex flex-col gap-y-10 h-screen px-4 py-10',
            open && 'w-1/2'
          )}
        >
          <h1 className="w-full font-semibold text-xl text-center">
            {knowledge.description.replace(/\.$/, '')}
          </h1>

          <p>{knowledge.text}</p>

          <Button
            onClick={onCodeClick}
            className="absolute right-6 bottom-16 z-10"
          >
            {open ? 'Close code editor' : 'Try to code'}
          </Button>
        </div>

        {!!open && (
          <>
            <div
              onMouseDown={onMouseDown}
              className="w-1 h-screen bg-primary/10 transition cursor-ew-resize"
            />

            <div
              ref={codeRef}
              className={cn(
                'px-4 py-10 flex-grow',
                open && 'w-1/2'
              )}
            >
              <CodeArea />
            </div>
          </>
        )}
      </Container>
    </div>
  )
}

export default Knowledge
