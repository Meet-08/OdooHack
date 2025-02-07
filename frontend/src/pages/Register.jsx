import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'
import Toast from 'react-hot-toast'
import RegisterLogo from '../assets/RegisterLogo-removebg-preview.png';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../Reducers/AuthSlice';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitForm = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', data);
            if (response.status === 200) {
                Toast.success('User Registered Successfully!');
                reset();
                dispatch(fetchUser())
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            }
        } catch (err) {
            alert('Error Registering User!' + err);
        }
    }

    return (
        <div className='flex w-screen h-screen justify-center items-center gap-2'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-gray-100'>
                <img src={RegisterLogo} alt="Register page logo" />
            </div>
            <div className="max-w-full mx-auto px-4 py-8 flex flex-col justify-between items-center">
                <h2 className="text-3xl font-semibold mb-8 text-center">Create your Account</h2>
                <form className="w-[80%] space-y-2 border-[2px] border-slate-200 py-3 px-6 rounded-md" onSubmit={handleSubmit(submitForm)}>
                    <label htmlFor="Fullname" className='font-[400]'>Full Name</label>
                    <input
                        type="text" id='Fullname'
                        placeholder="Full Name"
                        {...register("fullname", { required: "Please Enter fullname", min: { value: 6, message: "Fullname must contain more then 6 letter" } })}
                        className="w-full px-2 py-[10px] border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                    {errors.fullname && <p className='text-red-500'>{errors.fullname.message}</p>}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" id='email'
                        placeholder="Email"
                        {...register("email", { required: "Please Enter email" })}
                        className="w-full px-2 py-[10px] border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    <label htmlFor="phoneNo">Phone number</label>
                    <div className="flex items-center border rounded-lg p-2 mt-1 className=w-full px-2 py-[10px] border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300">
                        <span className="mr-2">+91</span>
                        <input
                            type="tel" id='phoneNo'
                            placeholder="Phone number"
                            {...register("phoneNo", { required: false })}
                            className="w-full focus:outline-none"
                        />
                        {errors.phoneNo && <p className='text-red-500'>{errors.phoneNo.message}</p>}
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password" id='password'
                            {...register("password", { required: "Please Enter password" })}
                            className="w-full px-2 py-[10px] border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-3 top-3 text-sm text-gray-500"
                        >
                            {passwordVisible ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    <p className="text-xs text-gray-500">
                        By continuing you agree to the
                        <a href="#" className="text-blue-500"> Terms of use </a>
                        and
                        <a href="#" className="text-blue-500"> Privacy Policy</a>.
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-violet-600 text-white p-2 rounded-lg hover:bg-violet-800"
                    >
                        Create account
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account?
                    <Link to="/login" href="Login" className="text-blue-500 font-semibold"> Login</Link>
                </p>
            </div>
        </div>
    )
}
export default Register
