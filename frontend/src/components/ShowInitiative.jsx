import React from 'react'
import initiatives from '../utils/InitiveData'
import { ThumbsUp, MessageSquare, Share } from 'lucide-react';

const ShowInitiative = () => {
    return (
        <div>
            <div className='grid grid-cols-1 space-y-1.5'>
                {
                    initiatives.map((initiative) => {
                        const Icon = initiative.Icon;
                        return (
                            <div className='bg-indigo-950 flex flex-col justify-center items-center space-y-1.5 min-w-[60%] mx-4 px-2'>
                                <div className='flex w-full mt-0.5'>
                                    <div className='p-4 bg-amber-300 rounded-full mx-2'>
                                        <Icon />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h3 className='text-xl font-semibold'>{initiative.title}</h3>{/*username*/}
                                        <p className='text-sm'>{initiative.description}</p>
                                    </div>
                                </div>
                                <div className='relative l-[50%]'>
                                    <img src={initiative.image} alt="" className='object-contain h-42 rounded-3xl' />
                                </div>
                                <div className='flex justify-between w-[80%]'>
                                    <button className='flex '>
                                        <ThumbsUp />
                                        <span>Upvote</span>
                                    </button>
                                    <button className='flex'>
                                        <MessageSquare />
                                        <span>Comment</span>
                                    </button>
                                    <button className='flex'>
                                        <Share />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowInitiative
