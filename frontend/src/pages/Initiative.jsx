import React from 'react'
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Mstyle from '../style/main.module.css';
import Topbar from '../components/Topbar'
import RightBar from '../components/RightBar';


function initiative() {
    return (
        <div className='container mx-6'>
            <Topbar />
            <div className={`${Mstyle.maindiv}`}>
                <div className={Mstyle.left}>
                    <Sidebar>
                        <Card />
                        <div className="h-full w-2.5 bg-gray-300" />
                        <RightBar />
                    </Sidebar>
                </div>
            </div>

        </div>
    )
}

export default initiative
