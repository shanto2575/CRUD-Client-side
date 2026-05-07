import { revalidatePath } from "next/cache"

export const deleteUser = async (id) => {
    'use server'
    const res = await fetch(`http://localhost:8000/users/${id}`, {
        method:'DELETE'
    })
    const data=await res.json()
    console.log('affer delete',data)
    if(data.deletedCount>0){
        revalidatePath('/users')
    }
    return data;
}