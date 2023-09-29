import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function ItemCard({
  title,
  amount,
  percent,
}: {
  title: string
  amount: string
  percent: string
}) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <p className='opacity-40'>DZD</p>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-semibold'>{amount}</div>
        <p className='text-xs text-muted-foreground'>
          {percent}% from last month
        </p>
      </CardContent>
    </Card>
  )
}
