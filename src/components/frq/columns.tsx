'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Frq } from '@/lib/types'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { Link } from 'react-router-dom'

export const columns: ColumnDef<Frq>[] = [
  {
    accessorKey: 'questionId',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <Link
        to={`/practice/frq/question/${row.original.questionId}`}
        className="hover:underline hover:text-muted-foreground"
      >
        {row.original.name}
      </Link>
    )
  },
  {
    accessorKey: 'topicName',
    header: 'Topic',
  },
  {
    accessorKey: 'subTopic',
    header: 'Sub Topic',
  },
  {
    accessorKey: 'difficulty',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Difficulty" />
    )
  }
]