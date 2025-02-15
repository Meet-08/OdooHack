import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HiUserPlus } from "react-icons/hi2";
import { fetchUser, logoutUser } from '../Reducers/AuthSlice';
import logo from '../assets/logo.svg';
import { UserPen, LogOut } from 'lucide-react';

const Topbar = () => {
    const [keyword, setKeyword] = useState('');
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(fetchUser());
        }
    }, [dispatch, user]);

    // Debug: check if profilePicUrl is set
    console.log('User object:', user);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <img src={logo} alt="Website logo" className="w-32" />
                </div>

                <div className="w-1/2 bg-slate-300 rounded-4xl p-2 flex items-center space-x-1.5">
                    <IoSearchOutline className="text-2xl" />
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Search Scheme or initiative or policy"
                        className="w-full focus:outline-none focus:ring-0 focus:border-transparent"
                    />
                </div>

                <div className="flex items-center justify-center space-x-4 mx-7">
                    <div className="group relative">
                        {user?.profilePicUrl ? (
                            <img
                                src={user.profilePicUrl}
                                alt="User Profile"
                                className="w-9 h-9 rounded-full object-cover"
                            />
                        ) : (
                            <HiUserPlus className="w-9 h-9" />
                        )}
                        <div className="absolute p-2 right-0 top-10 bg-gray-100 hidden group-hover:flex flex-col space-y-1 z-20">
                            {user ? (
                                <>
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 rounded-full">
                                            {user.profilePicUrl ? (
                                                <img
                                                    src={user.profilePicUrl}
                                                    alt="User Profile"
                                                    className="w-9 h-9 rounded-full object-cover"
                                                />
                                            ) : (
                                                <HiUserPlus className="w-9 h-9" />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span>{user.fullname}</span>
                                            <span className="text-sm">{user.description || "Some static desc"}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center mt-2">
                                        <Link to="/edit-profile" className="flex items-center space-x-2">
                                            <UserPen size={20} />
                                            <span className="text-sm font-semibold">Profile</span>
                                        </Link>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <LogOut size={20} />
                                            <button className="text-sm font-semibold cursor-pointer" onClick={handleLogout}>
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="text-2xl font-semibold p-1">Log in</Link>
                                    <Link to="/register" className="text-2xl font-semibold p-1">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-2 bg-gray-300 w-full" />
        </>
    );
};

export default Topbar;
