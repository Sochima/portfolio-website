import React from 'react'
import signal1 from '../assets/signal1.svg';



const about = () => {
  return (
    <div className='mt-4' id="about">
        <h1 className='text-5xl font-bold font-montserrat text-center my-5'>About</h1>
        <div className=' border-b md:border-b-2 border-gray-200'></div>

        <div className='flex flex-col md:flex-row'>
          <div className='m-6 w-4/5 lg:w-1/2 '>
            <p className='p-3'>I am a passionate Software Engineer with a foundation in multiple programming languages, including C, C++, Matlab, Python, and JavaScript. I recently earned my Master's degree in Electrical Engineering from the University of Rochester, where I developed my hardware and software engineering skills. I am actively seeking opportunities in Digital Signal Processing, hardware, and software engineering, leveraging my diverse skill set:</p>

            <div className='p-8'>
            <li className=''>Programming Languages: Matlab, Python, C, C++, JavaScript, HTML, CSS</li>
            <li>Embedded DSP: Sharc Audio Module, STM32</li>
            <li>Web Development Tools:  React, Tailwind CSS</li>
            <li>Circuit Design Software: KiCad, LTSpice</li>
            <li>Version Control: Git, Gitlab, GitHub</li>
            </div>

            <p className='p-3'>I am always eager to expand my network and collaborate with professionals in the tech industry. Feel free to connect with me on LinkedIn or email me at omenkeukwu1@gmail.com. I look forward to connecting and exploring potential opportunities together!</p>

            

          </div>


          <div className='m-auto'>
            <img src={signal1} alt="" />
          </div>
        </div>

        
      </div>

  )
}

export default about