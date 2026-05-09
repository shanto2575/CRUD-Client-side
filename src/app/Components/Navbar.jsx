import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold text-2xl bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">CRUD</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/user" className='text-xl text-red-500 underline'>Users</Link></li>
                    </ul>
                    <Link href={'/login'}><Button>Login</Button></Link>
                </header>
            </nav>
        </div>
    )
}

export default Navbar