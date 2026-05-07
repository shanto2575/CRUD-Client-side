import { GetUser } from '@/app/lib/api/data'
import React from 'react'
import UserTable from '../Components/UserTable';
import { deleteUser } from '../lib/action';

const UserMangementPage = async() => {
    const User=await GetUser();
    return (
        <div>
            <h2>User Management : {User.length}</h2>
            <UserTable user={User} deleteUserAction={deleteUser}></UserTable>
        </div>
    )
}

export default UserMangementPage