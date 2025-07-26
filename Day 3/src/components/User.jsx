import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
    return (
        <div className=' w-1/2 m-auto mt-10'>
            <h1 className='text-red-200 text-5xl mb-3' >User</h1>
            <div className='flex flex-col gap-2 w-1/2 mt-5'>
                <Link
                    className='p-3 bg-red-200 mb-3 text-2xl hover:bg-red-300'
                    to='/user/akash'>Akash
                </Link>
                <Link 
                className='p-3 bg-red-200 mb-3 text-2xl hover:bg-red-300'
                to='/user/amit'>Amit
                </Link>
                <Link 
                className='p-3 bg-red-200 mb-3 text-2xl hover:bg-red-300'
                to='/user/bulbul'>Bulbul
                </Link>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default User