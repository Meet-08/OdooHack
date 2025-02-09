import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiUserPlus } from 'react-icons/hi2';
import { updateProfilePic } from '../Reducers/AuthSlice';

const EditProfile = () => {
    const user = useSelector((state) => state.auth.user);
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            dispatch(updateProfilePic(formData));
        }
    }, [image, dispatch]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleDeleteImage = () => {
        setImage(null);
        dispatch(updateProfilePic(null));
    };
    console.log(user);
    return (
        <div className='container mx-auto w-screen'>
            <div className='flex bg-amber-400'>
                <div className=''>
                    {user?.profilePic ? (
                        <img
                            src={`http://localhost:3000/api/auth/profile-pic/${user._id}`}
                            alt="Profile"
                            className='w-36 h-36 rounded-full'
                        />
                    ) : (
                        <HiUserPlus className='w-36 h-36' />)}
                </div>
                <div className='flex flex-col items-center space-y-3 mt-6'>
                    <label className='min-w-[180px] bg-sky-400 px-8 py-4 rounded-full hover:bg-sky-600 cursor-pointer' htmlFor="imageInput">
                        {user?.profilePic ? "Change Image" : "Add Image"}
                        <input
                            type="file"
                            id="imageInput"
                            className='hidden'
                            onChange={handleImageChange}
                        />
                    </label>
                    <button
                        className='min-w-[180px] bg-sky-400 px-8 py-4 rounded-full hover:bg-sky-600'
                        onClick={handleDeleteImage}
                    >
                        Delete Image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
