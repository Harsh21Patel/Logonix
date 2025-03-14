"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';

function Header() {

    const {user} = useUser();

    return (
        <div className='px-10 p-4 flex justify-between items-center shadow-lg'>
                  <Link href='/'>
            <Image src={'./logo.svg'} alt='logo' width={220} height={100}/>
            </Link>
            <div className='flex gap-3 items-center'>
            {user?
        <Link href='/dashboard'>
            <Button className="cursor-pointer">Dashboard</Button>
            </Link>:
            <Link href='/create'>
            <Button className="cursor-pointer">Get Started</Button>
            </Link>
            }
            <UserButton/>
            </div>

        </div>
    )
}

export default Header
