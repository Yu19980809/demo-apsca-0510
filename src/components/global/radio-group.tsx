import { cn } from '@/lib/utils'
import { Choice, ChoiceLabel } from '@/lib/types'

type Props = {
  choices: Choice[]
  selected: ChoiceLabel | null
  onSelect: (choice: Choice) => void
}

const RadioGroup = ({ choices, selected, onSelect }: Props) => {
  return (
    <div className="flex flex-col gap-y-4 px-6 py-10">
      {choices.map(item => (
        <div
          onClick={() => onSelect(item)}
          className={cn(
            'group flex items-center gap-x-2 p-2 pl-4 rounded-md cursor-pointer hover:bg-secondary',
            selected === item.label && 'bg-secondary'
          )}
        >
          <span className={cn(
            'flex justify-center items-center w-7 h-7 rounded-full border group-hover:bg-emerald-500 group-hover:text-white',
            selected === item.label && 'bg-emerald-500 text-white'
          )}>
            {item.label}
          </span>

          <span>{item.content}</span>
        </div>
      ))}
    </div>
  )
}

export default RadioGroup
