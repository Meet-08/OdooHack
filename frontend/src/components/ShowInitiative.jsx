import React, { useEffect, useState } from 'react';
import CreateInit from './CreateInit';
import InitLoader from './InitLoader.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitiative, voteInitiative } from '../Reducers/InitiativeSlice.js';
import { ArrowBigUp, MessageCircle, Share2, User } from 'lucide-react';
import toast from 'react-hot-toast';


const ShowInitiative = () => {

    const dispatch = useDispatch();
    const initiatives = useSelector((state) => state.initiative.initiativeData);
    const currUser = useSelector((state) => state.auth.user);
    const status = useSelector((state) => state.initiative.status);
    const isLoading = status === 'loading';

    useEffect(() => {
        dispatch(fetchInitiative());
    }, [dispatch]);

    const handleVote = (initiativeId) => {
        if (!currUser) {
            toast.error("You must be logged in to vote !");
        } else {
            dispatch(voteInitiative({ initiativeId, userId: currUser._id }));
        }
    };

    return (
        <div className='scroll_hide'>
            <CreateInit />
            <div className='grid grid-cols-1 space-y-1.5 mx-2 mt-2'>
                {
                    isLoading ?
                        <InitLoader /> :
                        (initiatives.map((initiative, index) => {
                            const { user, likedBy } = initiative;
                            const isLiked = likedBy?.includes(currUser?._id);
                            return (
                                <div key={initiative._id} className='mx-1 my-5 h-full'>
                                    <div className='flex'>
                                        <div className='rounded-full min-w-[7%]'>
                                            {
                                                user?.profilePic ?
                                                    <img src={`http://localhost:3000/api/auth/profile-pic/${user._id}`} alt="" className='size-9 rounded-full object-cover' />
                                                    :
                                                    <User className='size-9' />
                                            }
                                        </div>
                                        <div>
                                            <h3 className='font-bold'>
                                                {user.fullname}
                                            </h3>
                                            <div className=''>
                                                <h2 className='font-semibold text-xl'>
                                                    {initiative.title}
                                                </h2>
                                                <p className='whitespace-pre-wrap break-words text-sm font-sans'>
                                                    {initiative.description}
                                                </p>
                                            </div>
                                            {
                                                initiative.image && (
                                                    <div className='mt-2'>
                                                        <img src={`http://localhost:3000/api/initiatives/image/${initiative._id}`} alt=""
                                                            className='h-36 aspect-video object-cover rounded-2xl' />
                                                    </div>
                                                )
                                            }
                                            <div className='flex justify-start space-x-20'>
                                                <button
                                                    className='flex h-10 justify-start items-center gap-1.5'
                                                    onClick={() => handleVote(initiative._id)}
                                                >
                                                    <ArrowBigUp size={29} fill={`${isLiked ? "black" : "white"}`} />
                                                    <span>{initiative.voteCount || 0}</span> Vote
                                                </button>
                                                <span className='flex h-10 justify-start items-center gap-1.5'>
                                                    <MessageCircle /> Comment
                                                </span>
                                                <span className='flex h-10 justify-start items-center gap-1.5'>
                                                    <Share2 /> Share
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))
                }
            </div>
        </div>
    )
}

export default ShowInitiative
