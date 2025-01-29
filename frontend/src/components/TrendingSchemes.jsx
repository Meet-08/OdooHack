import React from 'react'

const TrendingSchemes = () => {

    const schemes = [
        {
            id: 1,
            title: 'Scheme 1',
            description: 'Description of Scheme 1',
        },
        {
            id: 2,
            title: 'Scheme 2',
            description: 'Description of Scheme 2',
        },
        {
            id: 3,
            title: 'Scheme 3',
            description: 'Description of Scheme 3',
        },
        {
            id: 4,
            title: 'Scheme 4',
            description: 'Description of Scheme 4',
        }
    ]

    return (
        <div>

            <div className='grid grid-cols-4 space-x-2.5 mt-3 mx-5'>
                {
                    schemes.map((scheme) => {
                        return (
                            <div key={scheme.id} className='flex flex-col justify-center items-center border-2 border-slate-500 px-6 py-12 h-12' >
                                <h3 className='text-xl font-bold'>
                                    {scheme.title}
                                </h3>
                                <p>
                                    {scheme.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TrendingSchemes
