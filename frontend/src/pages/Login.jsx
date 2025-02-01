import React, { useState } from 'react'

const Login = () => {

    const [identity, setIdentity] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container mx-auto bg-slate-300 p-4'>
            <h2 className='text-2xl font-bold text-center'>
                Log In to your MyGov account
            </h2>
            <form className='flex flex-col gap-4 max-w-screen justify-between items-center mt-8'>
                <input type="text" value={identity} onChange={(e) => setIdentity(e.target.value)}
                    className='px-4 py-2 rounded-lg border-2 border-gray-500' placeholder='Email/Phone' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className='px-4 py-2 rounded-lg border-2 border-gray-500' placeholder='password' />
                <button type='submit' className='bg-[#1d3a7ccc] p-4 rounded-3xl hover:bg-[#1d3a7c] text-white min-w-28'>
                    Login in
                </button>
            </form>
            <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                <h3 className='mb-4'>
                    Login with Parichay/ MeriPehchan/ Social Profile
                </h3>

                {/* <LoginOption /> */}
            </div>

        </div>
    )
}

export default Login
