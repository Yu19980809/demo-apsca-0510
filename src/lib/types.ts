export enum McqQuestionNumber {
  TEN = '10',
  TWENTY = '20',
  THIRTY = '30',
  FORTY = '40'
}

export enum FrqTab {
  DESCRIPTION = 'Description',
  SOLUTION = 'Solution',
  RESULT = 'Result'
}

export enum McqMode {
  DEFAULT = 'Default (Random questions according to syllabus units showed below)',
  CUSTOM = 'Custom (Select the units you want to practice)'
}

export type Knowledge = {
  id: string
  number: string
  description: string
}

export type Topic = {
  topicNumber: string
  topicName: string
  knowledges: Knowledge[]
}

export type Unit = {
  unitNumber: string
  unitName: string
  topics: Topic[]
}

export type Frq = {
  id: string
  questionId: string
  name: string
  topicId: string
  topicName: string
  subTopic: string
  difficulty: string
  keynotes: string[]
}
