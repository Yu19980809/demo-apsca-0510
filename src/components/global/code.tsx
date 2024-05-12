import { ElementRef, useEffect, useRef, useState } from 'react'

import RunResult from './run-result'
import CodeEditor from './code-editor'
import HorizontalResizeBar from './horizontal-resize-bar'

const Code = () => {
  const [isEditorCollapsed, setIsEditorCollapased] = useState<boolean>(false)
  const [isResultCollapsed, setIsResultCollapased] = useState<boolean>(false)
  const editorRef = useRef<ElementRef<'div'>>(null)
  const resultRef = useRef<ElementRef<'div'>>(null)
  const resizeRef = useRef(false)

  useEffect(() => {
    if (isEditorCollapsed) setIsResultCollapased(false)
    if (isResultCollapsed) setIsEditorCollapased(false)
  }, [isEditorCollapsed, isResultCollapsed])

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    resizeRef.current = true
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!resizeRef.current) return

    let newEditorHeight = e.clientY
    console.log('newEditorHeight', newEditorHeight)
    const pageHeight = document.body.clientHeight

    const minEditorHeight = 80 + 16 + 50  // TopBar: 80, py-4: 16, min-w: 50
    const maxEditorHeight = pageHeight - 16 -12 - 50  // py-4: 16, resizebar: 12 max-w of result: 50
    if (newEditorHeight <= minEditorHeight) newEditorHeight = minEditorHeight
    if (newEditorHeight >= maxEditorHeight) newEditorHeight = maxEditorHeight

    console.log('editor ref', editorRef.current)
    console.log('resize ref', resultRef.current)
    if (editorRef.current && resultRef.current) {
      console.log('before', editorRef.current.style.height)
      editorRef.current.style.height = `${newEditorHeight}px`
      console.log('after', editorRef.current.style.height)
    }
  }

  const onMouseUp = () => {
    resizeRef.current = false
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  return (
    <div className="flex-1 flex flex-col h-full transition-all rounded-md border overflow-hidden">
      <CodeEditor
        showRun
        ref={editorRef}
        isCollapsed={isEditorCollapsed}
        setIsCollapsed={setIsEditorCollapased}
      />

      {
        (isEditorCollapsed || isResultCollapsed)
          ? <div className="w-full h-3 bg-transparent" />
          : <HorizontalResizeBar onMouseDown={onMouseDown} />
      }

      <RunResult
        showExplain
        ref={resultRef}
        isCollapsed={isResultCollapsed}
        setIsCollapsed={setIsResultCollapased}
      />
    </div>
  )
}

export default Code
