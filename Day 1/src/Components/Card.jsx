import React from 'react';

function Card({ image, name, artist, added, handleClick,index }) {
    return (
        <div className='w-60 p4 bg-zinc-100 rounded-md p-4 flex gap-4 pb-8 relative mt-10'>
            <div className='w-20 h-20 bg-orange-500 rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className=''>
                <h3 className='text-xl leading-none font-semibold'>{name}</h3>
                <h6 className='text-sm'>{artist}</h6>
            </div>
            <button onClick={()=>{handleClick(index)}}
            className={`px-4 py-3 ${added ? 'bg-blue-300' : 'bg-orange-500'} whitespace-nowrap absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}>
            {added ? "Remove" : "Add to favourites"}</button>   
        </div>
    )
}
export default Card;