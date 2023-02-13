import React from 'react';
import { NavLink } from 'react-router-dom'

function NotFound() {
    return ( 
        <div className='cont_column paddingTop10'>
            <div className=' fontVeryBig fontBlue font_bold'>Nie znaleziono strony</div>
            <div className='return'>
            <span className="material-symbols-outlined back">keyboard_return</span>                
            <NavLink to='/services' className='linkBlack'>Powrót do strony głównej</NavLink>
            </div>
        </div>
     );
}

export default NotFound;