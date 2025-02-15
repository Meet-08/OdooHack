import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateInit from './CreateInit';
import InitLoader from './InitLoader.jsx';
import InitiativeItem from './InitiativeItem.jsx';
import { fetchInitiative, voteInitiative } from '../Reducers/InitiativeSlice.js';
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
            toast.error('You must be logged in to vote!');
            return;
        }
        dispatch(voteInitiative({ initiativeId, userId: currUser._id }));
    };

    return (
        <div className="scroll_hide">
            <CreateInit />
            <div className="grid grid-cols-1 space-y-1.5 mx-2 mt-2">
                {isLoading ? (
                    <InitLoader />
                ) : (
                    initiatives.map((initiative) => (
                        <InitiativeItem
                            key={initiative._id}
                            initiative={initiative}
                            currUser={currUser}
                            onVote={handleVote}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ShowInitiative;
