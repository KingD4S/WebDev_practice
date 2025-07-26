import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const d = useParams();
    const navigate = useNavigate();
    const goBackHandler = () => {
        // navigate('/User');
        navigate(-1); // This will take the user back to the previous page

    }
    return (
        <div className='  mt-10'>
            <h1 className='text-red-200 text-5xl mb-3' >User Detail</h1>
            <h1 className='text-2xl mt-3 '>Hi! {d.name}</h1>
            <button onClick={goBackHandler}
            className='text-white mt-5 px-3 py-1 bg-red-300'>
                Go Back</button>
        </div>
    )
}

export default UserDetail