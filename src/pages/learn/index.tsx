import { syllabus } from '@/lib/constants'
import UnitItem from '@/components/learn/unit'
import Navbar from '@/components/layout/navbar'
import Container from '@/components/global/container'

const Learn = () => {
  return (
    <div className="h-full">
      <Navbar />

      <Container className="h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-y-10 w-full h-full py-10">
          <h1 className="w-full font-semibold text-xl text-center">Syllabus</h1>

          <div className="flex flex-col gap-y-4">
            {syllabus.map(item => (
              <UnitItem key={item.unitNumber} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Learn
