import React, { useState } from 'react';
import { ArrowBigUp, MessageCircle, Share2, User } from 'lucide-react';
import Comment from './Comment.jsx';

const InitiativeItem = ({ initiative, currUser, onVote }) => {
    const { _id, user, likedBy, voteCount, title, description, image } = initiative;
    const isLiked = likedBy?.includes(currUser?._id);
    const [showComment, setShowComment] = useState(false);

    const handleShare = async () => {
        if (!navigator.share) {
            console.warn('Web Share API is not supported in your browser.');
            return;
        }
        try {
            const shareData = { title, text: description };
            if (image) {
                const imageUrl = `http://localhost:3000/api/initiatives/image/${_id}`;
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const file = new File([blob], 'initiative-image.jpg', { type: blob.type });
                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    shareData.files = [file];
                } else {
                    console.warn('File sharing is not supported on this device.');
                    shareData.url = imageUrl;
                }
            }
            await navigator.share(shareData);
            console.log('Initiative shared successfully');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const profilePicUrl = user?.profilePic
        ? `http://localhost:3000/api/auth/profile-pic/${user._id}?t=${new Date().getTime()}`
        : null;
    const initiativeImageUrl = image ?
        `http://localhost:3000/api/initiatives/image/${_id}?t=${new Date().getTime()}` : null;

    return (
        <div className="mx-1 my-5 h-full" id={_id}>
            <div className="flex">
                <div className="rounded-full min-w-[7%]">
                    {profilePicUrl ? (
                        <img src={profilePicUrl} alt="profile" className="size-9 rounded-full object-cover" />
                    ) : (
                        <User className="size-9" />
                    )}
                </div>
                <div className="ml-2">
                    <h3 className="font-bold">{user?.fullname}</h3>
                    <div>
                        <h2 className="font-semibold text-xl">{title}</h2>
                        <p className="whitespace-pre-wrap break-words text-sm font-sans">{description}</p>
                    </div>
                    {initiativeImageUrl && (
                        <div className="mt-2">
                            <img
                                src={initiativeImageUrl}
                                alt={title}
                                className="h-36 aspect-video object-cover rounded-2xl"
                            />
                        </div>
                    )}
                    <div className="flex justify-start space-x-20 mt-2">
                        <button className="flex h-10 items-center gap-1.5" onClick={() => onVote(_id)}>
                            <ArrowBigUp size={29} fill={isLiked ? 'black' : 'white'} />
                            <span>{voteCount || 0}</span> Vote
                        </button>
                        <button onClick={() => setShowComment(!showComment)}>
                            <span className="flex h-10 items-center gap-1.5">
                                <MessageCircle fill={showComment ? 'black' : 'white'} /> Comment
                            </span>
                        </button>
                        <button onClick={handleShare}>
                            <span className="flex h-10 items-center gap-1.5">
                                <Share2 /> Share
                            </span>
                        </button>
                    </div>
                    {showComment && <Comment initiativeId={_id} />}
                </div>
            </div>
        </div>
    );
};

export default InitiativeItem;
