"use client"
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import Image from 'next/image'

function Hero() {
    const [logoTitle,setLogoTitle] = useState();
    return (
        <div className='flex items-center mt-24 flex-col gap-5'>
            <h2 className='text-primary text-center text-5xl font-bold'>{Lookup.HeroHeading}</h2>
            <h2 className='text-center text-4xl font-bold'>{Lookup.HeroSubheading}</h2>
            <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

            <div className="flex items-center justify-center w-full mt-10 max-w-2xl">
  <Link href={'/create'}>
    <Button className="w-full p-6 ">Create My Logo</Button>
  </Link>
</div>

<div className="flex items-center justify-center w-full mt-10">
 <Image src={'./logos.svg'} alt='logo' width={1000} height={1000}/>
</div>

            
        </div>
    )
}

export default Hero
