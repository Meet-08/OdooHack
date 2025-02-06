import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Reducers/AuthSlice';
import { Eye, EyeOff, Check } from 'lucide-react';
import RegisterLogo from '../assets/RegisterLogo-removebg-preview.png';

const Login = () => {

    const [identity, setIdentity] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        try {
            if (!identity || !password) {
                alert('Please fill all the fields');
                return;
            }
            dispatch(loginUser({ identity, password }));
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex w-screen h-screen justify-center items-center gap-2'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-gray-100'>
                <img src={RegisterLogo} alt="Register page logo" />
            </div>
            <div className="max-w-full h-screen mx-auto px-4 py-8 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-semibold mb-8 text-center">Login</h2>
                <div className='space-y-4'>
                    <label htmlFor="emailOrPhoneNo" className='font-[400]'>Email or Phone number</label>
                    <input onChange={(e) => setIdentity(e.target.value)}
                        type="text" id='emailOrPhoneNo'
                        className="w-full px-2 py-[9px] border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                    <label htmlFor="password">Password</label>
                    <div className="relative">
                        <input onChange={(e) => setPassword(e.target.value)}
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password" id='password'
                            className="w-full px-2 py-[10px] border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-3 top-3 text-sm text-gray-500"
                        >
                            {passwordVisible ? <EyeOff /> : <Eye />}
                        </button>
                        <div className='flex items-center justify-between mt-4 text-black'>
                            <label className="flex items-center space-x-2">
                                <div className="relative">
                                    <input
                                        type="checkbox" onChange={(e) => setCheckbox(e.target.checked)}
                                        className="absolute -bottom-3 appearance-none w-5 h-5 border border-gray-300 rounded-md"
                                    />
                                    {checkbox && <Check className="size-5 absolute -bottom-3  pointer-events-none" />}
                                </div>
                                <span className="absolute -bottom-0 left-6 text-sm text-gray-700">Remember me</span>
                            </label>

                            <a href="#" className="text-sm">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className="w-[50%] bg-violet-600 text-white p-2 rounded-lg hover:bg-violet-800" onClick={handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
