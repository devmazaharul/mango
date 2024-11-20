import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBagAdd } from "react-icons/io5";

export default function Nav() {
  return (
        
    <div>
      <div className="flex items-center  justify-between px-8 py-3  text-gray-800 ">
        <div>
        <Link className="text-xl font-semibold" href={'/'}>Mangoose</Link>
        </div>
        <div>
        <div className="hidden md:block ">
        <ul className="md:flex items-center gap-3">
            <li><Link href={'/'}>হোম</Link></li>
            <li><Link href={'/catagory'}>ক্যাটাগরি</Link></li>
            <li><Link href={'/session'}>সিজন </Link></li>
            <li><Link href={'/customer'}>কাস্টমার  </Link></li>
          </ul>
        </div>
        </div>
        <div className="flex items-center gap-8">
          <IoBagAdd className="text-3xl"/>
          <Image className="rounded-full" src={'/mangoose.png'} alt="site_image" width={60} height={50}/>
        </div>
      </div>
    
    </div>
  );
}
