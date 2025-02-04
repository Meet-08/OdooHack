import React, { useState } from 'react'
import initiatives from '../utils/InitiveData'

const RightBar = () => {

    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current - 1 + initiatives.length) % initiatives.length);
    }

    const next = () => {
        setCurrent((current + 1) % initiatives.length);
    }

    return (
        <div className='flex flex-col space-y-3'>
            <div>
                <h1 className='text-2xl font-bold'>Featured In Initiatives</h1>
                <div className='relative flex flex-col items-center'>
                    <button className='absolute text-black text-3xl top-[30%] left-0' onClick={next}>←</button>
                    <img src={initiatives[current].image} alt="" className='object-contain' />
                    <h2 className='place-content-center'>{initiatives[current].title}</h2>
                    <p>{initiatives[current].description}</p>
                    <button className='absolute text-black top-[30%] text-3xl right-0' onClick={prev}>→</button>
                </div>
                <div className='border-[1px] border-solid border-gray-300 w-full' /><div className='border-[1px] border-solid border-gray-300 w-full' />
            </div>

            <div>
                <h1 className='text-2xl font-bold'>Survey</h1>
                <div className='relative flex flex-col items-center'>
                    <button className='absolute text-black text-3xl top-[30%] left-0' onClick={next}>←</button>
                    <img src={initiatives[current].image} alt="" className='object-contain' />
                    <h2 className='place-content-center'>{initiatives[current].title}</h2>
                    <p>{initiatives[current].description}</p>
                    <button className='absolute text-black top-[30%] text-3xl right-0' onClick={prev}>→</button>
                </div>
                <div className='border-[1px] border-solid border-gray-300 w-full' />
            </div>

            <div>
                <h1 className='text-2xl font-bold'>Announcement</h1>
                <div className='relative flex flex-col items-center'>
                    <button className='absolute text-black text-3xl top-[30%] left-0' onClick={next}>←</button>
                    <img src={initiatives[current].image} alt="" className='object-contain' />
                    <h2 className='place-content-center'>{initiatives[current].title}</h2>
                    <p>{initiatives[current].description}</p>
                    <button className='absolute text-black top-[30%] text-3xl right-0' onClick={prev}>→</button>
                </div>
                <div className='border-[1px] border-solid border-gray-300 w-full' />
            </div>
        </div>
    )
}

export default RightBar
