import { getUserById } from '@/app/lib/api/data';
import { ArrowRight } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react'

const UserDetailsPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserById(id)
    console.log(user)
    return (
        <div className='flex flex-col bg-gray-300 text-black font-bold text-2xl items-center justify-center  h-screen space-y-5'>
            <h2 className='text-red-600'>User Details</h2>
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email}</p>
            <p>Role : {user.role}</p>
            <Link href={'/user'}><Button>Go Back <ArrowRight/></Button></Link>
        </div>
    )
}

export default UserDetailsPage