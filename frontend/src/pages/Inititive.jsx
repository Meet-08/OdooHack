import React from 'react'
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Mstyle from '../style/main.module.css';

import RightBar from '../components/RightBar';


function initiative() {
    return (
        <div>
            <div className={`${Mstyle.maindiv}`}>
                <div className={Mstyle.left}>
                    <Sidebar>
                        <Card />
                        <RightBar />
                    </Sidebar>
                </div>
            </div>

        </div>
    )
}

export default initiative
