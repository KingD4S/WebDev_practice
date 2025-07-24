import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleFormSubmit}) => {
    const {register, handleSubmit,reset} = useForm()
    const handleFormSubmitLocal = (data) => {
        handleFormSubmit(data)
        reset();
    }
    return (
        <div className='mt-10 flex justify-center items-center flex-col gap-10'>
            <h1>Radhe</h1>
            <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmitLocal)}>
                <input {...register('name')} className='rounded-md px-2 py-1 bg-zinc-100 text-base font-semibold outline-none' type="text" placeholder='name' />
                <input {...register('email')} className='rounded-md px-2 py-1 bg-zinc-100 text-base font-semibold outline-none' type="email" placeholder='email' />
                <input {...register('image')} className='rounded-md px-2 py-1 bg-zinc-100 text-base font-semibold outline-none' type="text" placeholder='image url' />
                <input className='rounded-md px-5 py-1 bg-blue-400 text-white font-semibold' type="submit" />
            </form>
        </div>
    )
}

export default Form