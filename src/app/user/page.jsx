import { GetUser } from '@/app/lib/api/data'
import React from 'react'
import UserTable from '../Components/UserTable';
import { createUser, deleteUser } from '../lib/action';
import AddUser from '../Components/AddUser';

const UserMangementPage = async () => {
    const User = await GetUser();
    return (
        <div>
            <div className='flex justify-between m-5'>
                <h2>User Management : {User.length}</h2>
                <AddUser createUserAction={createUser}></AddUser>
            </div>
            <UserTable user={User} deleteUserAction={deleteUser}></UserTable>
        </div>
    )
}

export default UserMangementPage