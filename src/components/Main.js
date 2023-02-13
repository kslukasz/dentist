import React from 'react';
import {Routes,Route} from 'react-router-dom';

import About from './pages/About';
import People from './pages/People'
import Gallery from './pages/Gallery'
import Services from './pages/Services';
import Descripction from './pages/Descripction';
import Contact from './pages/Contact';
import Equipment from './pages/Equipment';
import NotFound from './pages/NotFound';


function Main() {
    return (        
              <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/people' element={<People/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/descripction' element={<Descripction/>} />
                <Route path='/equipment' element={<Equipment/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path="*" element={<NotFound />}/>
            </Routes>        
     );
}

export default Main;