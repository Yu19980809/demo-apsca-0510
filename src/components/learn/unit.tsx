import {Database } from 'lucide-react'

import { Unit } from '@/lib/types'
import TopicItem from './topic'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const UnitItem = ({ data }: { data: Unit }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem key={data.unitNumber} value={data.unitNumber}>
        <AccordionTrigger>
          <div className="flex items-center gap-x-2">
            <Database className="w-6 h-6 text-muted-foreground" />
            <span>Unit {data.unitNumber}</span>
            <span>{data.unitName}</span>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-6">
          {data.topics.map(item => (
            <TopicItem key={item.topicNumber} data={item} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default UnitItem
