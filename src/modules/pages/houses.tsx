import AddHouse from '@/components/add-house'
import RentCard from '@/components/rent-card'

export default function Houses() {
  const handleOnClick = () => {
    console.log('HI')
  }

  return (
    <div>
      <div className='flex justify-between items-center pb-4'>
        <h1 className='text-xl font-bold'>Houses</h1>
        <AddHouse />
      </div>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2'>
        <RentCard handleOnClick={handleOnClick} />
        <RentCard handleOnClick={handleOnClick} />
        <RentCard handleOnClick={handleOnClick} />
        <RentCard handleOnClick={handleOnClick} />
        <RentCard handleOnClick={handleOnClick} />
        <RentCard handleOnClick={handleOnClick} />
        <RentCard handleOnClick={handleOnClick} />
        <RentCard handleOnClick={handleOnClick} />
      </div>
    </div>
  )
}
