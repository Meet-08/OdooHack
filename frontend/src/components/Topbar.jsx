import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { HiUserPlus } from "react-icons/hi2";
import logo from '../assets/logo.svg'

const Topbar = () => {

    const [keyword, setKeyword] = useState('');

    return (
        <>
            <div className='flex justify-between items-center mx-6'>
                <div className=''>
                    <img src={logo} alt="Website logo" />
                </div>

                <div className='w-1/2 bg-slate-300 rounded-4xl p-2 flex items-center space-x-1.5'>
                    <IoSearchOutline className='text-2xl' />
                    <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}
                        placeholder='Search Scheme or initiative or policy'
                        className='w-full focus:outline-none focus:ring-0 focus:border-transparent' />
                </div>

                <div className='flex justify-end space-x-3.5 w-[20%] text-3xl'>
                    <FaBookmark />
                    <MdOutlineNotificationsNone />
                    <div className='flex items-center justify-center object-center space-x-4'>
                        <div className='group flex items-center'>
                            <HiUserPlus className='size-9' />
                            <div className="relative w-0 h-0 before:content-[''] before:absolute before:border-x-8 before:border-x-transparent before:border-t-8 before:border-t-black" />
                            <div className='absolute right-2 top-12 bg-black text-indigo-400 hidden group-hover:flex flex-col space-y-1' >
                                <Link to='/login' className='text-2xl font-semibold p-1'>
                                    Log in
                                </Link>
                                <Link to='/register' className='text-2xl font-semibold p-1'>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-2 bg-gray-300 w-full' />
        </>
    )
}

export default Topbar
