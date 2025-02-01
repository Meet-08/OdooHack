import React from 'react';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import ShowInitiative from '../components/ShowInitiative';
import RightBar from '../components/RightBar';

const HomePage = () => {
    return (
        <div className='ml-6'>
            <Topbar />
            <Sidebar>
                <ShowInitiative />
                <RightBar />
            </Sidebar>
            <Footer />
        </div>
    );
};

export default HomePage;
