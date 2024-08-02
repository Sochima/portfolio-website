import { createBrowserRouter,Routes, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import '../src/styles/index.css';
import signal1 from './assets/signal1.svg';
import signal2 from './assets/signal2.svg';
import music from './assets/Music.jpg';
import vinyl from './assets/vinyl.jpg';

import maxpatch from './assets/max_patch.png';
import paramEq from './assets/param_eq.png';
import acoustic from './assets/signalimage.png'

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Nav from './navigation/nav';

import Mainlayout from './layouts/mainlayout';


function App() {
  return (
    <div className=' bg-gradient-to-r from-slate-950 to-slate-900 min-h-screen text-white scroll-smooth'>
      
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>

      <footer>
        <p className='text-black'>Built by Sochima</p>
      </footer>


    
    </div>
  );
}

export default App;
