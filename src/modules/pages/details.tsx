import ItemCard from '@/components/item-card'

const data = [
  {
    title: 'Total Revenue',
    amount: '8500,00',
    percent: '+21',
  },
  {
    title: 'Owners Revenue',
    amount: '6000,00',
    percent: '+10',
  },
  {
    title: 'My Revenue',
    amount: '2500,00',
    percent: '+65',
  },
  {
    title: 'Pay Cut',
    amount: '500,00',
    percent: '0',
  },
]

export default function Details() {
  return (
    <>
      <div className='flex justify-between items-center pb-4'>
        <h1 className='text-xl font-bold'>Details</h1>
      </div>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {data.map((item) => (
          <ItemCard
            title={item.title}
            amount={item.amount}
            percent={item.percent}
          />
        ))}
      </div>
    </>
  )
}
