import React, {useContext} from 'react';

import AppContext from './AppContext'

import './css/Footer.css'


function Footer() {
    const { data } = useContext(AppContext);
    function gridContent () {        
        const result = data.PL.why.map((element,index)=>{            
            return(
                <div key={element.substring(10)}>{element}</div>
            )
        });
        return result;
    }
    function yearActual () {
        const date = new Date();
        return(
            <span>{`${date.getFullYear()}${"\u00A0"}`}</span>
        )
    }
    return ( 
        <div className='contFooter cont_column'>
            <div className='fontBigger fontBlue'>Dlaczego warto skorzystać z naszych usług?</div>
                <div className='footerGrid'>
                   {gridContent()}
                </div>                
                <div  className='copyRights fontSmall'>
                <span>COPYRIGHT © 1993-{yearActual()}dentysta-litewka</span>
                <span>{`${"\u00A0"}`}napisz do nas:{`${"\u00A0"}`}<a href="mailto:dorident@poczta.fm" className='linkBlue'>dorident@poczta.fm</a></span>
                <span>{`${"\u00A0"}`}created by:{`${"\u00A0"}`}<a href="mailto:kslukasz@o2.pl" className='linkBlue'>kslukasz@o2.pl</a></span>
                </div>

        </div>
     );
}

export default Footer;