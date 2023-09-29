import { Button } from '../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Sheet, SheetTrigger } from '../components/ui/sheet'

import Houses from './pages/houses'
import Reservations from './pages/reservations'
import Details from './pages/details'

import SearchOption from '../components/search-option'
import { Home, FileClock, AlignLeft, List } from 'lucide-react'

export default function Dashboard({ name }: { name: string | null }) {
  return (
    <section>
      <div className='flex justify-between items-center pt-8 px-4'>
        <h1 className='text-4xl font-bold'>Dashboard</h1>
        <p className='opacity-60'>
          welcome <span className='text-primary'>{name}</span>
        </p>
      </div>
      <Tabs defaultValue='houses' className='p-4'>
        <Sheet>
          <div className='flex justify-between items-center pb-4'>
            <TabsList>
              <TabsTrigger className='items-center' value='details'>
                <List className='h-5 w-5 mr-1' />
                <p className='sr-only'>Details</p>
              </TabsTrigger>
              <TabsTrigger value='houses'>
                <Home className='h-5 w-5 mr-1' />
                <p className='sr-only'>Houses</p>
              </TabsTrigger>
              <TabsTrigger className='items-center' value='reservations'>
                <FileClock className='h-5 w-5 mr-1' />
                <p className='sr-only'>Reservations</p>
              </TabsTrigger>
            </TabsList>
            <SheetTrigger asChild>
              <Button variant='link' className='hover:no-underline'>
                <AlignLeft className='h-5 w-5 mr-1' />
                More Options
              </Button>
            </SheetTrigger>
          </div>
          <SearchOption />
        </Sheet>
        <TabsContent value='details'>
          <Details />
        </TabsContent>
        <TabsContent value='houses'>
          <Houses />
        </TabsContent>
        <TabsContent value='reservations'>
          <Reservations />
        </TabsContent>
      </Tabs>
    </section>
  )
}
