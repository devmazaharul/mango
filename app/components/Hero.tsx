import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='md:flex items-center justify-between  my-7 p-3'>
        <div className='md:w-[50%]'>
            <h1 className='text-3xl py-4 font-semibold leading-9'>এই সেকশনে মৌসুমী আমের প্রাপ্যতা এবং কোন সময়গুলোতে।</h1>
            <p className='text-gray-500 leading-8'>এই সেকশনে মৌসুমী আমের প্রাপ্যতা এবং কোন সময়গুলোতে কোন প্রকারের আম পাওয়া যাবে তা বিস্তারিতভাবে বর্ণনা করা হতে পারে।</p>
        </div>
     <div>
     <Image src={'/mangot.png'} width={400} height={300} alt='heroimg'/>
     </div>
    </div>
  )
}
