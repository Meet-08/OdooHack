import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { BiSolidUserCircle } from "react-icons/bi";
import NavbarLinks from '../utils/NavbarLinks';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-white text-indigo-400 mx-2'>
            <div className='place-content-center object-center h-16 text-purple-500'>
                <img src={logo} alt="Logo of gram connect"
                    className='object-contain' />
            </div>

            <div className='w-max space-x-4'>
                <ul className='flex items-center justify-center object-center space-x-6'>
                    {
                        NavbarLinks.map((link, index) => {
                            return (
                                <li key={index} className='group'>
                                    <Link to={link.url}
                                        className='text-2xl font-semibold group'>
                                        {link.name}
                                    </Link>
                                    {
                                        link.isSub && (
                                            <ul className='absolute bg-black text-indigo-400 hidden group-hover:block'>
                                                {
                                                    link.sub.map((sublink, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link to={sublink.path}
                                                                    className='text-2xl font-semibold'>
                                                                    {sublink.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                    )
                                                }
                                            </ul>
                                        )
                                    }
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>

            <div className='flex items-center justify-center object-center space-x-4'>
                <Link to='/search' className='text-2xl font-semibold'>
                    <IoSearch className='size-9' />
                </Link>
                <div className='group'>
                    <BiSolidUserCircle className='size-9' />
                    <div className='absolute right-2 bg-black text-indigo-400 hidden group-hover:flex flex-col space-y-1' >
                        <Link to='/login' className='text-2xl font-semibold p-1'>
                            Log in
                        </Link>
                        <Link to='/register' className='text-2xl font-semibold p-1'>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
