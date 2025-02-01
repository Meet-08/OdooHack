import React from 'react'
import { Hash } from 'lucide-react'

const TopNav = () => {
    return (
        <div className='space-y-1'>
            <div className='mx-5 mt-3 flex justify-start items-center space-x-14'>
                <button className='flex space-x-3 px-8 py-2 text-3xl bg-slate-400 rounded-full'>
                    <Hash className='size-9' />
                    <p>
                        For you
                    </p>
                </button>
                <button className='flex space-x-3 px-8 py-2 text-3xl bg-slate-400 rounded-full'>
                    <Hash className='size-9' />
                    <p>
                        Explore
                    </p>
                </button>
            </div>
            <hr className='text-slate-300' />
        </div>
    )
}

export default TopNav
