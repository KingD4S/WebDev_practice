import React from 'react'

const Card = ({ image, name, email, handleRemove, id }) => {
    return (
        <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
            <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden '>
                <img className='w-full h-full object-cover' src={image} />
            </div>
            <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{name}</h1>
            <h4 className='opacity-50 text-xs font-semibold '>{email}</h4>
            <p className='mt-1 text-center text-xs font-semibold leading-4 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maxime!</p>
            <button onClick={() => handleRemove(id)}  className='px-3 py-1 bg-red-500 text-xs rounded-md font-semibold text-white mt-4'>Remove it</button>
        </div>

    )
}

export default Card