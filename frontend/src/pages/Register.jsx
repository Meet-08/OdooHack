import React from 'react'
import registerSMS from '../assets/register-sms.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginOption from '../components/LoginOption';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <div className='container mx-auto bg-slate-300 p-4'>

            <div className='text-center text-black space-y-2'>
                <h1 className='text-2xl font-bold'>
                    Create MyGov Account
                </h1>
                <p className='text-sm'>
                    Already have an account? <Link to='/login' className='text-blue-500'>Login</Link>
                </p>
            </div>

            <div className='flex flex-col-reverse sm:flex-row justify-center items-center gap-4 mt-4'>
                <div className=''>
                    <h3 className='mb-4'>
                        Login with Parichay/ MeriPehchan/ Social Profile
                    </h3>

                    <LoginOption />

                    <div>
                        <h3 className=''>
                            Register with SMS
                        </h3>
                        <div>
                            <img src={registerSMS} alt="" />
                        </div>
                    </div>
                </div>

                <div className='hidden md:block border-l-2 border-l-gray-600 w-0.5 h-96' />

                <div className='ml-2 flex flex-col gap-4'>
                    <h2 >
                        Register with Email or Mobile Number
                    </h2>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit(submitForm)}>
                        <input type="text" placeholder='Enter Your full name here'
                            {...register('fullName', { required: 'Full name is required ' })}
                            className='px-4 py-2 rounded-lg border-2 border-gray-500' />
                        {errors.fullName && <p>{errors.fullName.message}</p>}
                        <input type="text" placeholder='Enter Your Email here'
                            {...register('email', { pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email address' } })}
                            className='px-4 py-2 rounded-lg border-2 border-gray-500' />
                        {errors.email && <p>{errors.email.message}</p>}
                        <input type="text" placeholder='Enter Your phone no here'
                            {...register('phoneNo',
                                {
                                    required: 'Phone no is required ',
                                    pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' }
                                })}
                            className='px-4 py-2 rounded-lg border-2 border-gray-500' />
                        {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
                        <input type="date" {...register("dob", { required: 'Date of birth required' })}
                            pattern='dd-mm-yyyy' className='border-2 border-gray-500 rounded-lg' />

                        <label htmlFor="gender">Choose an Gender:</label>
                        <select {...register('gender', { required: 'Please select an Gender' })}
                            className="px-4 py-2 rounded-lg border-2 border-gray-500"
                        >
                            {/* <option value="">Select Gender</option> */}
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.option && <p className="text-red-500">{errors.option.message}</p>}

                        <button type='submit' className='bg-[#1d3a7ccc] p-4 rounded-3xl hover:bg-[#1d3a7c] text-white'>
                            Create New Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
