import { FrqTab } from '@/lib/types'

export const frqTabs = [
  {
    label: 'Description',
    value: FrqTab.DESCRIPTION
  },
  {
    label: 'Solution',
    value: FrqTab.SOLUTION
  },
  {
    label: 'Result',
    value: FrqTab.RESULT
  }
]

export const frqList = [
  {
    id: '1',
    questionId: '202204',
    name: 'Number Grid (Repopulate + Count Increasing)',
    topicId: '4',
    topicName: '2D Array',
    subTopic: '2D Array (Primitive)',
    difficulty: 'Medium',
    keynotes: ['Mod', 'Random', '2D Array Traversal', 'Meeting Criteria  Count']
  },
  {
    id: '2',
    questionId: '202202',
    name: 'GameSpinner',
    topicId: '2',
    topicName: '2D Array',
    subTopic: 'Writting Classes',
    difficulty: 'Easy',
    keynotes: ['Random']
  }
]

export const navLinks = [
  {
    label: 'Learn',
    href: '/learn',
    content: []
  },
  {
    label: 'Practice',
    href: '/practice',
    content: [
      {
        label: 'MCQ',
        href: '/practice/mcq/config'
      },
      {
        label: 'FRQ',
        href: '/practice/frq/table'
      }
    ]
  },
  {
    label: 'Exam',
    href: '/exam',
    content: []
  }
]

export const homeCards = [
  {
    label: 'Unfinished Exam',
    description: '',
    href: '/exam/unfinish',
    image: ''
  },
  {
    label: 'Stars',
    description: '',
    href: '/stars',
    image: ''
  },
  {
    label: 'Learning Plan',
    description: '',
    href: '/learning',
    image: ''
  },
  {
    label: 'History',
    description: '',
    href: '/history',
    image: ''
  }
]

export const syllabus = [
  {
    unitNumber: '1',
    unitName: 'Primitive Types',
    topics: [
      {
        topicNumber: '1.1',
        topicName: 'Why Programming? Why Java?',
        knowledges: [
          {
            id: 'MOD-1.A.1',
            number: '1.1.1',
            description: 'System.out.print and System.print.ln display information on the computer monitor.'
          },
          {
            id: 'MOD-1.A.2',
            number: '1.1.2',
            description: 'System.out.print moves the cursor to a new line after the information has been displayed, while System.out.print does not.'
          }
        ]
      },
      {
        topicNumber: '1.2',
        topicName: 'Variables and Data Types',
        knowledges: [
          {
            id: 'VAR-1.A.1',
            number: '1.2.1',
            description: 'A string literal is enclosed in double quotes.'
          },
          {
            id: 'VAR-1.B.1',
            number: '1.2.2',
            description: 'A type is a set of values(a domain) and a set of operations on them.'
          }
        ]
      }
    ]
  },
  {
    unitNumber: '2',
    unitName: 'Using Objects',
    topics: [
      {
        topicNumber: '2.1',
        topicName: 'Objects: Instances of Classes',
        knowledges: [
          {
            id: 'MOD-1.B',
            number: '2.1.1',
            description: 'Explain the relationship between a class and an object.'
          }
        ]
      },
      {
        topicNumber: '2.2',
        topicName: 'Creating and Storing Objects (Instantiation)',
        knowledges: [
          {
            id: 'MOD-1.C',
            number: '2.2.1',
            description: 'Identify, using its signature, the correct constructor being called.'
          }
        ]
      }
    ]
  }
]
