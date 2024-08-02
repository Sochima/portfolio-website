import React from 'react';
import Nav from '../navigation/nav';

import { Outlet } from 'react-router-dom';

const mainlayout = () => {
  return (
    <div className='bg-slate-950 min-h-screen text-white'>
        <header>
            <Nav/>
        </header>

        <main>
            
        </main>

        {/* <footer>
        <p>Built by Sochima</p>
      </footer> */}

    </div>
  )
}

export default mainlayout