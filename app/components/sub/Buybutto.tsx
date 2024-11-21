"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Buybutto({id,children}:{id:number,children:string}) {
    const handleClick=()=>{
        console.log(id)
    }
  return (
    <div>
        <Button onClick={handleClick} variant="secondary" className='bg-gray-700 hover:text-gray-600 border text-gray-100 my-2'>{children || "Buy"}</Button>
    </div>
  )
}
