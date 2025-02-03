import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllScheme } from '../Reducers/SchemeSlice';

const ShowSchemes = () => {

    const [order, setOrder] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const dispatcher = useDispatch();
    const schemes = useSelector((state) => state.schemes.Schemes);
    const [sortedSchemes, setSortedScheme] = useState(schemes)

    useEffect(() => {
        setIsLoading(true);
        dispatcher(getAllScheme());
    }, [])

    useEffect(() => {
        if (schemes.length > 0) {
            setSortedScheme([...schemes].sort((a, b) => {
                return order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            }))
        }
        setIsLoading(false);
    }, [order, schemes])


    if (schemes.length === 0) {
        return (
            <div className='flex justify-center items-center h-[80vh]'>
                <h2 className='text-2xl font-semibold'>No Schemes Available</h2>
            </div>
        )
    }

    return (
        <div>
            <div className='flex justify-between'>
                <h2>
                    Total <span className='text-blue-500'>{schemes.length}</span> Schemes Available
                </h2>
                <div>
                    <span>sort : scheme </span>
                    <button className='' onClick={() => setOrder(!order)}>
                        {order ? "A -> Z" : "Z -> A"}
                    </button>
                </div>
            </div>
            {isLoading ? "Loading . . ." : null}
            <div>
                {
                    sortedSchemes.map((scheme) => {
                        return (
                            <div key={scheme._id} className='border-2 border-gray-300 rounded-md px-1 py-2 my-2 space-y-3'>
                                <h3 className='text-xl font-semibold'>{scheme.name}</h3>
                                <p className='text-gray-600'>{scheme.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ShowSchemes
