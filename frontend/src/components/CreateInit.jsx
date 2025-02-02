import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useForm } from 'react-hook-form';

const CreateInit = () => {

    const [isVisible, setIsVisible] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const submitForm = (data) => {
        setIsVisible(false);
        console.log(data);
        // After processing how to remove data from register
        reset();
    }

    return (
        <div className='mb-9'>
            <button onClick={() => setIsVisible(true)} className='bg-cyan-400 px-4 py-2  rounded-3xl hover:bg-cyan-500 text-white'>
                Create Initiative
            </button>
            <div className={`flex-col h-fit w-24  z-10 items-center justify-center fixed inset-0 m-auto ${isVisible ? "flex" : "hidden"}`}>

                <motion.button
                    type="button"
                    whileTap={{ y: 1 }}
                    onClick={() => setIsVisible(false)}
                    className="relative w-6 h-6 -right-28 flex items-center justify-center bg-red-500 rounded-full text-lg"
                >
                    ✕
                </motion.button>
                <AnimatePresence initial={false}>
                    {isVisible && (
                        <motion.form onSubmit={handleSubmit(submitForm)}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="w-auto h-auto p-4 flex flex-col space-y-3 bg-cyan-400 rounded-lg"
                            key="box"
                        >

                            <input type="text" placeholder='Enter title here'
                                {...register('title', { required: 'title is required ' })}
                                className='w-[250px] px-2 py-4 rounded-3xl bg-amber-300' />
                            {errors.title && <p>{errors.title.message}</p>}
                            <input type="text" placeholder='Enter description here'
                                {...register('description', { required: 'description is required ' })}
                                className='w-[250px] px-2 py-4 rounded-3xl bg-amber-300' />
                            {errors.description && <p>{errors.description.message}</p>}
                            {/* How to take image as input */}
                            <input type="file" placeholder='Enter image here'
                                {...register('image', { required: false })}
                                className='w-[250px] px-2 py-4 rounded-3xl bg-amber-300' />
                            <motion.button whileTap={{ y: 1 }}>
                                Submit
                            </motion.button>

                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
            <div className='border-[1px] border-solid border-gray-300 w-full' />
        </div>
    )
}

export default CreateInit
