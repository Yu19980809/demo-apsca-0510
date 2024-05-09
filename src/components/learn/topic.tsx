import { Link } from 'react-router-dom'
import { BookOpenText, Mic } from 'lucide-react'

import { Topic } from '@/lib/types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const TopicItem = ({ data }: { data: Topic }) => {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem key={data.topicNumber} value={data.topicNumber}>
        <AccordionTrigger>
          <div className="flex items-center gap-x-2">
            <Mic className="w-5 h-5 text-muted-foreground" />
            <span>Topic {data.topicNumber}</span>
            <span>{data.topicName}</span>
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-y-2 px-6">
          {data.knowledges.map(item => (
            <Link
              key={item.id}
              to={`/learn/knowledge/${item.id}`}
              className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-muted-foreground"
            >
              <BookOpenText className="w-4 h-4 text-muted-foreground" />
              <span>{item.number}</span>
              <span>{item.description}</span>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default TopicItem
