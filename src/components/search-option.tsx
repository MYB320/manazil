import { SearchIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

export default function SearchOption() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle> More Options</SheetTitle>
      </SheetHeader>
      <SheetDescription className='flex flex-col gap-4 pt-4'>
        <div className='flex w-full max-w-sm items-center space-x-2 border-b py-4'>
          <Input placeholder='Search...' />
          <Button className='text-white' size={'icon'}>
            <SearchIcon className='h-5 w-5' />
            <span className='sr-only'>Search</span>
          </Button>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Prices' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1500'>From 0 to 1500 DZD</SelectItem>
            <SelectItem value='1500-4500'>From 1500 to 4500 DZD</SelectItem>
            <SelectItem value='4500-7500'>From 4500 to 7500 DZD</SelectItem>
            <SelectItem value='7500-11500'>From 7500 to 11500 DZD</SelectItem>
          </SelectContent>
        </Select>
      </SheetDescription>
    </SheetContent>
  )
}
