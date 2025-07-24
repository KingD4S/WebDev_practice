import React from 'react'
import Card from './Card'

const Cards = ({ users, handleRemove }) => {
    return (
        <div className='w-full max-h-96 overflow-y-auto flex justify-center flex-wrap gap-4 p-4'>
            {users.map((item, index) => {
                return (
                    <Card handleRemove={handleRemove} id={index} key={index} image={item.image} name={item.name} email={item.email} />
                )
            })}

        </div>
    )
}

export default Cards