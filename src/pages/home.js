import React from 'react'
import signal2 from '../assets/signal2.svg';
import { TypeAnimation } from 'react-type-animation';

const home = () => {
  return (
    <div className=' #header flex flex-col p-5 lg:p-12  h-screen '>

      <div className='my-auto'>
        <h1 className='text-5xl md:text-7xl font-montserrat'>Hello, I'm <span className='text-my-yellow font-semibold'> <TypeAnimation speed = {15} cursor = {false} sequence= {["Sochima" ]}/></span></h1>
        <h3 className='text-1xl md:text-3xl'>
          I'm a Software Engineer with interests in Digital Signal Processing, 
          Embedded Systems and Web Development.
        </h3>
        <div className='w-1/2'>
        <img src={signal2} alt="Sine Wave SVG" />
      </div>
      </div>

      </div>
  )
}

export default home