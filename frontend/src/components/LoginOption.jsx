import React from 'react';
import { Link } from 'react-router-dom';
import { platforms } from '../utils/SocialMedia';
import parichay from '../assets/parichay.png';
import meripehchan from '../assets/jan-parichay.png';

const LoginOption = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-center items-center space-x-4'>
                <a href="#">
                    <img src={parichay} alt="Click here to login With Parichay" />
                </a>
                <a href="#">
                    <img src={meripehchan} alt="Click here to login With Jan Parichay" />
                </a>
            </div>

            <ol className='grid grid-cols-5 mt-2'>
                {
                    platforms.map(({ name, Icon }, index) => {
                        return (
                            <li className='p-2' key={name}>
                                <Link to='#' className='size-14 rounded-lg flex flex-col justify-between items-center'>
                                    {
                                        <Icon className='text-3xl' />
                                    }
                                    <span className='text-sm'>{name}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default LoginOption
