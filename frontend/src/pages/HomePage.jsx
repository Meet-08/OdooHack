import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Latest from '../components/Latest';

const HomePage = () => {

    const initiatives = [
        {
            id: 1,
            title: 'Initiative 1',
            description: 'Description of Initiative 1',
        },
        {
            id: 2,
            title: 'Initiative 2',
            description: 'Description of Initiative 2',
        },
        {
            id: 3,
            title: 'Initiative 3',
            description: 'Description of Initiative 3',
        },
        {
            id: 4,
            title: 'Initiative 4',
            description: 'Description of Initiative 4',
        }
    ]

    return (
        <>
            <Navbar />
            <ImageSlider />

            <div className='mt-4'>
                <h3 className='text-2xl font-bold'>
                    Initiatives
                </h3>
                <Latest data={initiatives} />
            </div>

            <div className='mt-4'>
                <h3>
                    Scheme
                </h3>
                <Latest data={initiatives} />
            </div>

            <div className='mt-4'>
                <h3>
                    Issues
                </h3>
                <Latest data={initiatives} />
            </div>
        </>
    );
};

export default HomePage;
