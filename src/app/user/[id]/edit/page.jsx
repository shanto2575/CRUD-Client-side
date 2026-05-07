import { UpdateUser } from '@/app/lib/action';
import { getUserById } from '@/app/lib/api/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react'

const UserEditPage = async ({ params }) => {
    const { id } = await params;
    // console.log('id',id)
    const user = await getUserById(id)
    // console.log(user)
    const UpdateUserWrapper=async(formData)=>{
        'use server'
        return UpdateUser(id,formData)
    }
    return (
        <div>
            <h2>Editing User:{user?.name}</h2>
            <div className='w-1/2 mx-auto my-12'>
                <form  action={UpdateUserWrapper} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text" defaultValue={user?.name}>
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" type="email" defaultValue={user?.email}>
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" type="text" defaultValue={user?.role}>
                        <Label>Role</Label>
                        <Input placeholder="Enter your role" />
                    </TextField>

                    <div className='flex gap-8'>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" slot="close">Add User</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default UserEditPage