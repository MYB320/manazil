import { ChevronRightCircle } from 'lucide-react'
import { Button } from './ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
export default function RentCard({
  type,
  size,
  city,
  region,
  price,
}: {
  type: string
  size: string
  city: string
  region: string
  price: number
}) {
  return (
    <Card className='hover:scale-105 focus:scale-105 transition-all'>
      <img
        src='/images/house-1.jpg'
        className='rounded-t-lg border-b w-fit h-fit'
      />
      <CardHeader>
        <CardTitle>
          {type}&nbsp;
          <span className='uppercase'>{size}</span>
        </CardTitle>
        <CardDescription>
          {city}, {region}
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between items-center'>
        <div>
          <p className='text-xs font-semibold'>Rent per night</p>
          <p className='text-center text-xl'>{price} DZD</p>
        </div>
        <Button variant='ghost' size='icon' className='text-primary'>
          <ChevronRightCircle />
          <span className='sr-only'>Show more</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
