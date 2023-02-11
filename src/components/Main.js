import React from 'react';
import {Routes,Route} from 'react-router-dom';

import About from './pages/About';
import People from './pages/People'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact';


function Main() {
    return (        
              <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/people' element={<People/>} />
                {/* <Route path='/services' element={<Services/>} /> */}
                {/* <Route path='/equipment' element={<Equipment/>} /> */}
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>        
     );
}

export default Main;