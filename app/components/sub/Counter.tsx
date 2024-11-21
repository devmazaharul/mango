'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function Counter({price,stock=10}:{price:number; stock:number}) {
    const [count,setCount]=useState(1)
    const handleInc=()=>{
            setCount(count+1)
    }
    const handleDec=()=>{
        setCount(count-1)
    }
  



  return (
  <div>
      <div className='flex  w-fit mx-auto gap-4  items-center justify-around'>
    <Button disabled={count==1?true:false} onClick={handleDec} variant='destructive'>-</Button>
    <p className='font-semibold'>{count}</p>
    <Button disabled={count==stock?true:false} onClick={handleInc}>+</Button> {stock==count ? <p className='text-red-400'>stock out</p>:""}
    </div>
      <div className='w-fit mx-auto py-4'>
      <div className='flex items-center gap-2'>Total price: <p className='text-green-500'>{price * count}</p> ({price} X {count})</div>
      </div>
  </div>
  )
}
