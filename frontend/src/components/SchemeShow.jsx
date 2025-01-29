import React from 'react'

const SchemeShow = () => {
    const data = [
        {
            id: 1,
            "category": "Agriculture, Rural & Environment",
            "schemes": 401,
            "icon": "🚜"
        },
        {
            id: 2,
            "category": "Banking, Financial Services and Insurance",
            "schemes": 214,
            "icon": "🏦"
        },
        {
            id: 3,
            "category": "Business & Entrepreneurship",
            "schemes": 408,
            "icon": "💰"
        },
        {
            id: 4,
            "category": "Education & Learning",
            "schemes": 746,
            "icon": "🎓"
        },
        {
            id: 5,
            "category": "Health & Wellness",
            "schemes": 209,
            "icon": "⚕️"
        },
        {
            id: 6,
            "category": "Housing & Shelter",
            "schemes": 90,
            "icon": "🏢"
        },
        {
            id: 7,
            "category": "Public Safety, Law & Justice",
            "schemes": 10,
            "icon": "👮"
        },
        {
            id: 8,
            "category": "Science, IT & Communications",
            "schemes": 61,
            "icon": "🧬"
        },
        {
            id: 9,
            "category": "Skills & Employment",
            "schemes": 238,
            "icon": "🛠️"
        },
        {
            id: 10,
            "category": "Social Welfare & Empowerment",
            "schemes": 1207,
            "icon": "🧑‍🤝‍🧑"
        },
        {
            id: 11,
            "category": "Sports & Culture",
            "schemes": 114,
            "icon": "🔍"
        },
        {
            id: 12,
            "category": "Transport & Infrastructure",
            "schemes": 49,
            "icon": "🚍"
        },
        {
            id: 13,
            "category": "Travel & Tourism",
            "schemes": 35,
            "icon": "✈️"
        },
        {
            id: 14,
            "category": "Utility & Sanitation",
            "schemes": 34,
            "icon": "🛠️"
        },
        {
            id: 15,
            "category": "Women and Child",
            "schemes": 355,
            "icon": "👩‍👧"
        }
    ];

    return (
        <div className='grid grid-cols-3 space-x-2 space-y-3 mt-5 mx-6'>
            {
                data.map((d) => {
                    return (
                        <div className='flex p-4 items-center border-2 border-slate-500 rounded-2xl' key={d.id}>
                            <div className='bg-amber-500 p-2 text-3xl rounded-2xl'>
                                {d.icon}
                            </div>
                            <div className='ml-2'>
                                <h3 className=''>
                                    {d.category}
                                </h3>
                                <div className='flex '>
                                    <span className='mr-1 text-blue-600 text-sm'>
                                        {d.schemes}
                                    </span>
                                    <p className='text-sm'>
                                        Schemes
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SchemeShow
