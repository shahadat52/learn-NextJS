"use client"

import React, { useState } from 'react';
import style from '@/app/styles/blog.modules.css'

const Blog = () => {
    const [count, setCount] = useState(0)

    const handleIncrese = (sign) => {
        if (sign === '+') {

            setCount(count + 1)
        } else {

            setCount(count - 1)
        }
    }

    return (
        <div>
            <h1 className='nil'>This is blog page</h1>
            <button
                onClick={() => handleIncrese('+')}
                className='btn btn-primary'>Incress</button>
            <button
                onClick={() => handleIncrese('-')}
                className='btn btn-primary'
            >Decress</button>

            <p>{count}</p>

        </div>
    );
};

export default Blog;