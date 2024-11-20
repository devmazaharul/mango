
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";


type productType={
    url:string
    catagory:string

    price:number
}


export default function Mangocard(prop:productType) {
    const {url,catagory,price}=prop
  return (
    <>
         <div  className=' hover:scale-105 ease-in duration-150  px-3 py-4 rounded-md  shadow-gray-200 text-center'>
          <Image src={url} className='mx-auto' width={160} height={120} alt='cimg'/>
          <p className='text-xl'>{catagory}</p>
          <div className='flex py-2 w-fit mx-auto items-center gap-1'>
          <p>টাকা .</p>
          <p className='text-emerald-600 bg-emerald-100 px-4 rounded-md'>{price}</p>
          </div>
          <div className='flex  items-center  w-fit mx-auto pb-2'>
            <FaStar className='text-lx text-yellow-500'/>
            <FaStar className='text-lx text-yellow-500'/>
            <FaStar className='text-lx text-yellow-500'/>
            <FaStar className='text-lx text-yellow-500'/>
          </div>
       <div>
        <Button variant="secondary" className='bg-gray-700 hover:text-gray-600 border text-gray-100 my-2'>Add to card</Button>
       </div>
        </div>
    </>
  )
}
