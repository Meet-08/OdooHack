import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import axios from 'axios'
import ShowSchemes from '../components/ShowSchemes'
import Filter from '../components/Filter'

const Scheme = () => {

    return (
        <div className='ml-6'>
            <Topbar />
            <Sidebar>
                <ShowSchemes />
                <Filter />
            </Sidebar>
        </div>
    )
}

export default Scheme
