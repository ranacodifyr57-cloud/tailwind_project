import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"
import toast from 'react-hot-toast'
const ContactUs = () => {

    const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "239bbb5c-46ac-4798-b61f-bfba2da023a4");

    try{
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("thank you for your submission");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
    } catch (error) {
        toast.error(error.message)
    }
    }
    
  return (
      <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{staggerChildren:0.2}}
      viewport={{once:true}}
      id='contact-us'className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title='Reach out to us' desc='From strategy to execution, we carft digital solutions that move your busniss forward.'/>
      <motion.form 
      initial={{opacity: 0, y: 30}}
                 whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay:0.4}}
                  viewport={{once:true}}
                  onSubmit={onSubmit}
      className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
            <p className='mb-2 text-sm font-medium'>Your Name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.person_icon} alt="" />
                <input name="name" type="text" placeholder='Enter your Name' className='w-full p-3 text-sm outline-none' required/>
            </div>
        </div>
        
         <div>
            <p className='mb-2 text-sm font-medium'>Your Email</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.email_icon} alt="" />
                <input name="email" type="email" placeholder='Enter your Email' className='w-full p-3 text-sm outline-none' required/>
            </div>
        </div>
         <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea name="message" rows={8} placeholder='Enter your message' className='w-full p-3 text-sm  outline-none rounded-lg border border-gray-300 dark:border-gray-600' required/>
        </div>
        <div className='sm:col-span-2'>
        <button type='submit' className=' flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'>
            Submit <img src={assets.arrow_icon} alt="" className='w-4'/>

        </button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs
