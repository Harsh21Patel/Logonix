"use client"
import { UserDetailContex } from '@/app/_context/UserDetailContext'
import React, { useContext } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

function Info() {

    const {userDetail,setUserDetail} = useContext(UserDetailContex);

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-3xl text-primary'>Hello, {userDetail?.name}</h2>
                <div className='flex items-center gap-2'>
                    <Image src={'/coin.png'} alt='coin' width={35} height={35} />
                    <h2 className='font-bold text-xl'>{userDetail?.credits} Credits</h2>
                    <Link href='/buy-credits'>
                        <Button className="cursor-pointer"><Plus /></Button>
                    </Link>
                </div>

            </div>

            <div className='flex justify-between items-center mt-6'>
                <h2 className='font-bold text-xl'>Dashboard</h2>
                <Link href='/create'>
                <Button className="cursor-pointer">Create New Logo</Button>
                </Link>
            </div>
        </div>
    )
}

export default Info
