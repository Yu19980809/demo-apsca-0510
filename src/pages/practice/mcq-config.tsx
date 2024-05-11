import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { McqConfigSchema } from '@/lib/schemas'
import { McqMode, McqQuestionNumber } from '@/lib/types'
import Container from '@/components/global/container'
import Navbar from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { syllabus } from '@/lib/constants'
import { Textarea } from '@/components/ui/textarea'
import { useNavigate } from 'react-router-dom'


const McqConfig = () => {
  const navigate = useNavigate()

  const units = syllabus.map(item => item.unitName)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof McqConfigSchema>>({
    resolver: zodResolver(McqConfigSchema),
    defaultValues: {
      questionNumber: McqQuestionNumber.TEN,
      mode: McqMode.DEFAULT,
      units,
      specificNeeds: ''
    }
  })

  const onSubmit = (values: z.infer<typeof McqConfigSchema>) => {
    setIsLoading(true)
    console.log('submit', values)
    form.reset()
    navigate('/practice/mcq/questions')
  }

  return (
    <div className="h-full">
      <Navbar />

      <Container className="h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center gap-y-10 w-full h-full py-10">
          <h1 className="w-full font-semibold text-xl text-center">
            Customize your specific practice
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="space-y-8">
                <FormField
                  name="questionNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-y-2">
                      <FormLabel className="text-lg">1. Question number</FormLabel>

                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center gap-x-4 px-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={McqQuestionNumber.TEN} id="10" />
                            <Label htmlFor="10">{McqQuestionNumber.TEN}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={McqQuestionNumber.TWENTY} id="20" />
                            <Label htmlFor="20">{McqQuestionNumber.TWENTY}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={McqQuestionNumber.THIRTY} id="30" />
                            <Label htmlFor="30">{McqQuestionNumber.THIRTY}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={McqQuestionNumber.FORTY} id="40" />
                            <Label htmlFor="40">{McqQuestionNumber.FORTY}</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="mode"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-y-2">
                      <FormLabel className="text-lg">2. Mode</FormLabel>

                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col gap-y-2 px-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={McqMode.DEFAULT} id="default" />
                            <Label htmlFor="default">{McqMode.DEFAULT}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={McqMode.CUSTOM} id="custom" />
                            <Label htmlFor="custom">{McqMode.CUSTOM}</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="units"
                  control={form.control}
                  render={() => (
                    <FormItem className="flex flex-col gap-y-2">
                      <FormLabel className="text-lg">3. Units</FormLabel>

                      <FormControl>
                        <div className="flex flex-col gap-y-2 px-4">
                          {syllabus.map(item => (
                            <div
                              key={item.unitNumber}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={item.unitNumber}
                                disabled={form.getValues('mode') === McqMode.DEFAULT}
                                checked={form.getValues('mode') === McqMode.DEFAULT}
                                onCheckedChange={() => form.setValue('units', form.getValues('units')?.concat([item.unitName]))}
                              />

                              <Label htmlFor={item.unitNumber}>
                                Unit {item.unitNumber}
                                &nbsp;&nbsp;
                                {item.unitName}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.getValues('mode') === McqMode.CUSTOM && (
                  <FormField
                    name="specificNeeds"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-y-2">
                        <FormLabel className="text-lg">4. Specific needs</FormLabel>

                        <FormControl>
                          <Textarea
                            disabled={isLoading}
                            placeholder="Tell us what you want to practice, such as 'data type, private method, etc...'"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Start'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default McqConfig
