import React from 'react'

const Latest = ({ data }) => {
    return (
        <div className='grid grid-cols-4 gap-2 space-x-5'>
            {
                data.map(({ id, title, description }) => {
                    return (
                        <div key={id} className='bg-white text-black p-4 shadow-md rounded-md'>
                            <h3 className='text-xl font-bold'>{title}</h3>
                            <p className='text-gray-500'>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Latest
