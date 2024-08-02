import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const contact = () => {
  return (
    <div className='mt-4' id="contact" >
        <h1 className='text-5xl font-bold font-montserrat text-center my-5'>Contact</h1>
        <div className=' border-b md:border-b-2 border-gray-200'></div>
        <div className='m-5 text-center p=5'>
          <h2 className='text-2xl font-bold text-my-yellow'>LET'S CONNECT!</h2>

          <p>I would love to hear from you. Anything at all from opportunities to suggestions on projects, books, music. I look forward to connecting with you!</p>

          <div className=' m-10 grid grid-cols-3 gap-6'>

            <div className='m-auto'>
              <a href="https://github.com/Sochima"><FaGithub className='text-3xl'/>Github</a>
            </div>

            <div className='m-auto'>
              
              <a href="https://www.linkedin.com/in/sochimaomenkeukwu/"><FaLinkedinIn className='text-3xl'/>LinkedIn</a>
            </div>

            <div className='m-auto'>
              <a className='text-center' href="mailto:omenkeukwu1@gmail.com?subject=Hello%20Sochima"><MdOutlineEmail className='text-3xl'/>Email</a>
            
            </div>

          </div>

      
        </div>
      </div>
  )
}

export default contact