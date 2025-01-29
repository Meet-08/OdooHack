import React, { useEffect, useState } from 'react';
import DiscoverImg from '../assets/Slider/DiscoverImg.webp';
import oneStepPlatform from '../assets/Slider/oneStepPlatform.webp';

const ImageSlider = () => {

    const images = [
        DiscoverImg,
        oneStepPlatform
    ]
    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % images.length);
        }, 5000)

        return () => clearInterval(interval);
    }, [images.length]);

    const prev = () => {
        setCurrent((current - 1 + images.length) % images.length);
    }

    const next = () => {
        setCurrent((current + 1) % images.length);
    }

    return (
        <div className='flex justify-between items-center h-[50%] w-full'>
            <button className='text-8xl absolute z-20 text-white' onClick={prev}>←</button>
            <img src={images[current]} alt="Image"
                className='h-fit w-fit object-contain' />
            <button className='text-8xl absolute right-5 z-20 text-white' onClick={next}>→</button>
        </div>
    )
}

export default ImageSlider
