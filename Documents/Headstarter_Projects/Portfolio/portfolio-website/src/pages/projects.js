import React from 'react'

import maxpatch from '../assets/max_patch.png';
import paramEq from '../assets/param_eq.png';
import acoustic from '../assets/signalimage.png'


const projects = () => {
  return (
    <div className=' ' id = "projects">
      <h1 className='text-5xl font-bold font-montserrat text-center my-5'>Projects</h1>
        <div className=' border-b md:border-b-2 border-gray-200'></div>

        <div className='grid grid-rows-3 gap-3'>

          <div className='p-5 mt-6'>
            <div className=' grid grid-cols-2 '>
              <div className=' rounded-md p-4  bg-yellow-100'>
                <img className=' object-contain h-full' src={maxpatch} alt="" />
                </div>
                
              <div className='p-5'>
                <h1 className='font-bold text-xl font-montserrat'>S-Synth</h1>
              <p className='w-4/5'>This is a monophonic audio synthesizer built with MAX/MSP. This uses subtarctive synthesis. The next stage in this project will be to create a polyphonic version and implement the synth on an STM32 Microcontroller.
              </p>
              <button className='bg-my-yellow justify-center mt-4 p-2 rounded-lg border-2 font-montserrat font-bold'><a href='https://github.com/Sochima/S_Synth'>Learn More</a></button>
              </div>
              
            </div>
          </div>


          <div className='p-5 '>
            <div className=' grid grid-cols-2'>
              <div className=' rounded-md p-4  bg-yellow-100'>
                <img className=' object-contain h-full' src={paramEq} alt="" />
              </div>
                
              <div className='p-5'>
                <h1 className='font-bold text-xl font-montserrat'>Parametric Eq</h1>
              <p className='w-4/5'>This is a Parametric EQ VST plug-in built with JUCE/C++.
              </p>
              <button className='bg-my-yellow justify-center mt-4 p-2 rounded-lg border-2 font-montserrat font-bold'><a href='https://github.com/Sochima/Parametric_EQ'>Learn More</a></button>
              </div>
              
            </div>
          </div>


          <div className='p-5 '>
            <div className=' grid grid-cols-2 '>
              <div className=' rounded-md p-4  bg-yellow-100'>
                <img className=' object-contain h-full' src={acoustic} alt="" />
                </div>
                
              <div className='p-5'>
                <h1 className='font-bold text-xl font-montserrat'>Acoustic Society Challenge 2023</h1>
              <p className='w-4/5 '>This is my contribution the Acoustic Society 2023 Challenge Problem. The goal was to extract and analyze acoustic sensor data from three hydrophones to estimate a diver's breath rate, swimming speed, altitude, and the distance between each hydrophone.
              </p>
              <button className='bg-my-yellow justify-center mt-4 p-2 rounded-lg border-2 font-montserrat font-bold'><a href='https://github.com/Sochima/Acoustic_Society_Challenge_2023'>Learn More</a></button>
              </div>
              
            </div>
          </div>

          
        </div>

      </div>
  )
}

export default projects