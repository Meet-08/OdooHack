import React from 'react'
import Navbar from '../components/Navbar'
import TrendingSchemes from '../components/TrendingSchemes'
import FilterButtons from '../components/FilterButtons'
import SchemeShow from '../components/SchemeShow'

const SchemePage = () => {
    return (
        <>
            <Navbar />
            <div className='flex w-screen items-center flex-col mt-10'>
                <h1 className='text-4xl font-bold mb-4'>
                    Scheme on GramConnect
                </h1>
                <p className='max-w-[50%] text-center'>
                    Explore seamless access to many government services and schemes at one place, ensuring hassle-free and transparent experience for citizens.
                </p>
            </div>
            <div className='mx-6'>
                <h2 className='text-2xl font-bold mt-6'>
                    Recommended Scheme
                </h2>
                <div className='flex flex-col justify-center border-2 border-slate-500 px-6 py-12 h-12' >
                    Kindly enable location access to view recommended schemes.
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold mt-6 mx-6'>
                        Trending Schemes
                    </h2>
                    <div className='flex space-x-2.5 text-2xl mt-[28px] mr-4'>
                        <button>
                            {"<"}
                        </button>
                        <button>
                            {">"}
                        </button>
                    </div>
                </div>
                <TrendingSchemes />
            </div>

            <div>
                <h2 className='text-2xl font-bold mt-6 mx-6'>
                    Explore Scheme
                </h2>
                <FilterButtons />
                <SchemeShow />
            </div>
        </>
    )
}

export default SchemePage
