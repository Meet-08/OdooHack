import React from 'react';
import Latest from '../components/Latest';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

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
        <div className='mx-6'>
            {/* Start */}
            <button className='fixed bottom-3 text-xl space-x-1 left-1.5 w-fit flex justify-center items-center bg-blue-400 p-2 rounded-full px-2 border-2 border-black border-solid'>
                <span className='font-semibold px-1.5 rounded-full bg-black text-white'>+</span>
                <span className='font-bold'>New Initiative</span>
            </button>
            {/* End */}
            <Topbar />
            <Sidebar>
                <FAQ />
            </Sidebar>
            <Footer />
        </div>
    );
};

export default HomePage;
