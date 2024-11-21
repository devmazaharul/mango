import { Button } from '@/components/ui/button'
import { MangoItems } from '@/data/Mangodata'
import Mangocard from './sub/Mangocard'
import Link from 'next/link'
import Buybutto from './sub/Buybutto'

export default function Typesmango() {
  return (
   <div>
     <div className='flex items-center py-6 justify-between'>
      <div>
      <h1 className='text-2xl'>আমের প্রকারভেদ</h1>
      </div>
      
    <div>
      <Button variant="secondary" className='border'>See All</Button>
    </div>
    </div>

    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {MangoItems.map((info)=>(
       <div  key={info.id} >
         <Link   href={`/details/${info.id}`}>
        <Mangocard  catagory={info.catagory} url={info.url} price={info.price}/>
        </Link>
     <div className='w-fit mx-auto'>
     <Buybutto id={55}>Buy now</Buybutto>
      </div>
       </div>
      ))}
    </div>
   </div>
  )     
}
