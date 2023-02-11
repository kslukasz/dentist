import React, {useContext} from 'react';
import AppContext from '../AppContext'
import SliderGallery from './SliderGallery';
import Contact from './Contact';

import '../css/About.css'


function About() {
    const { data } = useContext(AppContext);
    const galleryData ={...data.PL.gallery}   
    
    return ( 
        <>
        <SliderGallery 
        srcGallery={galleryData.srcGallery}
        writingGallery={galleryData.writingGallery}
        timeInterval={galleryData.time}
        />
        <Contact/>
        </>
     );
}

export default About;