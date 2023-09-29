import AddReservation from '../../components/add-reservation'

export default function Reservations() {
  return (
    <>
      <div className='flex justify-between items-center pb-4'>
        <h1 className='text-xl font-bold'>Reservations</h1>
        <AddReservation />
      </div>
      <div></div>
    </>
  )
}
