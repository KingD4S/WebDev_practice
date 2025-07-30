import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Show = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const api = 'https://fakestoreapi.com/products'; // ✅ Working API

        axios.get(api)
            .then((res) => {
                // console.log(res.data);
                setProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };
    const addProduct = () => {
        const api = 'https://fakestoreapi.com/products';

        axios.post(api, {
            title: "Apple Vision Pro",
            price: 3500,
            description: "Apple vision pro First Gen",
            image: "https://via.placeholder.com/150",
            category: "electronics"
        })
            .then((res) => {
                console.log("Product Added:", res.data);
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };
    return (
        <>
            <button onClick={getProducts} className='px-5 py-2 bg-blue-500 m-5 text-white rounded'>
                Get Products
            </button>
            <button onClick={addProduct} className='px-5 py-2 bg-blue-500 text-white rounded'>
                Add Product
            </button>
            <br /><br />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {products.length > 0 ? (
                    products.map(p => (
                        <div key={p.id} className='p-4 bg-white shadow rounded'>
                            <img src={p.image} alt={p.title} className='h-40 object-contain mb-2 mx-auto' />
                            <h3 className='font-semibold text-lg'>{p.title}</h3>
                            <p className='text-gray-600 text-sm'>{p.category}</p>
                            <p className='text-blue-700 font-bold'>₹{p.price}</p>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-500'>Click "Get Products" to load items.</p>
                )}
            </div >

        </>
    )
}

export default Show