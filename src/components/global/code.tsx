import RunResult from './run-result'
import CodeEditor from './code-editor'
import HorizontalResizeBar from './horizontal-resize-bar'

const Code = () => {
  return (
    <div className="flex-1 flex flex-col h-full transition-all rounded-md border overflow-hidden">
      <CodeEditor />
      <HorizontalResizeBar />
      <RunResult />
    </div>
  )
}

export default Code
