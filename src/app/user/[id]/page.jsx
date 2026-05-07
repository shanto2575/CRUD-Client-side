import { getUserById } from '@/app/lib/api/data';
import React from 'react'

const UserDetailsPage = async({params}) => {
    const {id}=await params;
    const user=await getUserById(id)
    console.log(user)
    return (
        <div>UserDetails:{user.name} </div>
    )
}

export default UserDetailsPage