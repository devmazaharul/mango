import Buybutto from '@/app/components/sub/Buybutto'
import Counter from '@/app/components/sub/Counter'
import Mangocard from '@/app/components/sub/Mangocard'
import Typesmango from '@/app/components/Typesmango'
import { Button } from '@/components/ui/button'
import { MangoItems } from '@/data/Mangodata'
import React from 'react'

export default async function page({params}:{params:Promise<{productid:number}>}) {
    const {productid}=await params

 

    return (
    <div>
        <div className='py-6'>
            <p className='text-2xl text-center font-semibold'>বিস্তারিত </p>
            <div className='md:w-[40%] mx-auto  p-4'>
                {MangoItems.map((item,index)=>{
                    if(item.id==productid){
                        return (
                            <div key={index} className=' p-4 rounded-md'>
                                 <Mangocard  url={item.url}  catagory={item.catagory} price={item.price}/>
                                 <div>
                                    <Counter stock={item.stock} price={item.price} />
                                  
                                   <div className='flex items-center gap-2 my-4 w-fit mx-auto'>
                                   <Button variant={'secondary'}>Add to cart</Button>
                                  <Buybutto id={343}>Buy now</Buybutto>
                                   </div>
                                    <p>{item.catagory} বাংলাদেশের একটি জনপ্রিয় আমের জাত, যা বিশেষত মিষ্টি এবং রসালো হওয়ার জন্য পরিচিত। এটি সাধারণত গ্রীষ্মকালীন ফল, এবং এর সুগন্ধি, মিষ্টি স্বাদ অনেককে আকর্ষণ করে।</p>
                                 </div>
                            </div>
                           
                        )
                    }
                })}
            </div>
            <Typesmango/>
        </div>
   
    </div>
  )
}
