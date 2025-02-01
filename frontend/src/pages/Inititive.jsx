import React from 'react'
import Card from '../components/Card';
import Sidebar from '@/components/slidebar';
import Mstyle from '@/styles/main.module.css';
import Addinit from '@/components/addinit';

function initiative() {
    return (
        <div>
            <div className={Mstyle.maindiv}>
                <div className={Mstyle.left}>
                    <Sidebar />
                </div>
                <div className={Mstyle.right}>

                    <Addinit />

                    <Card />
                </div>
            </div>

        </div>
    )
}

export default initiative
