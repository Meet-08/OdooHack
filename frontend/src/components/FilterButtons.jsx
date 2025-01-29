import React, { useState } from 'react'

const FilterButtons = () => {
    const [active, setActive] = useState('categories');
    return (
        <div className='mx-6 space-x-2.5 mt-4'>
            <button className={`${active === 'categories' ? "bg-indigo-700" : "bg-blue-300"} px-2 py-3 rounded-2xl ${active === 'categories' ? "text-white" : "text-black"} hover:bg-blue-700`} onClick={() => setActive('categories')}>
                Categories
            </button>
            <button className={`${active === 'state' ? "bg-indigo-700" : "bg-blue-300"} px-2 py-3 rounded-2xl ${active === 'state' ? "text-white" : "text-black"} hover:bg-blue-700`} onClick={() => setActive('state')}>
                State/UTs
            </button>
            <button className={`${active === 'ministry' ? "bg-indigo-700" : "bg-blue-300"} px-2 py-3 rounded-2xl ${active === 'ministry' ? "text-white" : "text-black"} hover:bg-blue-700`} onClick={() => setActive('ministry')}>
                Central Ministries
            </button>
        </div>
    )
}

export default FilterButtons
