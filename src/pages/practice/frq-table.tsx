import { frqList } from '@/lib/constants'
import Navbar from '@/components/layout/navbar'
import { columns } from '@/components/frq/columns'
import { DataTable } from '@/components/frq/data-table'
import Container from '@/components/global/container'

const FrqTable = () => {
  return (
    <div className="h-full">
      <Navbar />

      <Container className="h-[calc(100vh-80px)]">
        <div className="py-10">
          <DataTable columns={columns} data={frqList} />
        </div>
      </Container>
    </div>
  )
}

export default FrqTable
