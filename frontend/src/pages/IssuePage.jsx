import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import RightBar from '../components/RightBar';
import IssueCard from '../components/IssueCard';

const IssuePage = () => {
    return (
        <div className='ml-6'>
            <Topbar />
            <Sidebar >
                <IssueCard />
                <div className="h-full w-2.5 bg-gray-300" />
                <RightBar />
            </Sidebar>
            <Footer />
        </div>
    )
}

export default IssuePage
