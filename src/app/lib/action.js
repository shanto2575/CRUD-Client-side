import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const deleteUser = async (id) => {
    'use server'
    const res = await fetch(`http://localhost:8000/users/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json()
    console.log('affer delete', data)
    if (data.deletedCount > 0) {
        revalidatePath('/users')
    }
    return data;
}

export const createUser = async (formData) => {
    'use server'
    const newUser = Object.fromEntries(formData.entries())

    console.log('before new User', newUser)

    const res = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()
    console.log('affer user data', data)
    if (data.insertedId) {
        revalidatePath('/users')
    }
    return data;
}

export const UpdateUser=async(id,formData)=>{
    const updateUser=Object.fromEntries(formData.entries())
    const res=await fetch(`http://localhost:8000/users/${id}`,{
        method:'PATCH',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(updateUser)
    })
    const data=await res.json()
    console.log('affer update',data)
    
    if(data.modifiedCount>0){
        revalidatePath('/users')
        redirect('/user')
    }
}