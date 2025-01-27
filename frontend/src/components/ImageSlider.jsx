import React, { useState } from 'react';
import Asus from '../assets/Slider/71Yp3z87X4L.webp';
import iphone from '../assets/Slider/7379643.jpg';

const ImageSlider = () => {

    const images = [
        Asus,
        iphone
    ]
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current - 1 + images.length) % images.length);
    }

    const next = () => {
        setCurrent((current + 1) % images.length);
    }

    return (
        <div className='flex justify-between items-center'>
            <button className='text-9xl' onClick={prev}>←</button>
            <img src={images[current]} alt="Image"
                className='h-[350px] w-[350px] object-contain' />
            <button className='text-9xl' onClick={next}>→</button>
        </div>
    )
}

export default ImageSlider
