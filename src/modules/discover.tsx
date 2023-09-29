import { Button } from '../components/ui/button'
import { Sheet, SheetTrigger } from '../components/ui/sheet'
import SearchOption from '../components/search-option'
import { AlignLeft } from 'lucide-react'
import RentCard from '../components/rent-card'
import { supabase } from '../lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function Discover() {
  const [houses, setHouses] = useState<any[] | null>([])
  const fetchData = async () => {
    let { data: Houses, error } = await supabase
      .from('Houses')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) console.log('error', error)
    else setHouses(Houses)
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  return (
    <section>
      <Sheet>
        <div className='flex justify-between items-center pb-4 pt-8'>
          <h1 className='text-4xl font-bold'>Discover</h1>
          <SheetTrigger asChild>
            <Button variant='link' className='hover:no-underline'>
              <AlignLeft className='h-5 w-5 mr-1' />
              More Options
            </Button>
          </SheetTrigger>
        </div>
        <SearchOption />
      </Sheet>

      {houses?.length ? (
        houses?.map((house) => {
          return (
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4'>
              <RentCard
                key={house.id}
                type={house.type}
                size={house.size}
                city={house.city}
                region={house.region}
                price={house.price}
              />
            </div>
          )
        })
      ) : (
        <div className='flex justify-center pt-8'>
          <p className=''>No Rentable houses available</p>
        </div>
      )}
    </section>
  )
}
