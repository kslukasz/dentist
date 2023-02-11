import React, { useContext } from 'react';

import AppContext from '../AppContext'

import '../css/Contact.css'


function Contact() {
    const { data } = useContext(AppContext);

    function hoursCont(element) {
        const result = element.map((nextElement, nextIndex) => {
            return (            
                    <div className='cont_row nowrap days' key={nextElement + nextIndex}>
                        <div>{data.PL.days[nextIndex]}</div>
                        <div>{nextElement}</div>
                    </div>                
            )
        });
        return result;
    }

    function hours(val) {
        const result = data.PL.hours[val].map((element, index) => {
            return (
                <div className='cont_column' key={data.PL.local[index].substring(7)}>
                    <span className='adres'>{data.PL.adres[index]}</span>
                    <a href={`tel:${data.PL.local[index].substring(8)}`} className='linkBlack'><span className='localPhone'>{data.PL.local[index]}</span></a>
                    <div className='cont_column'>
                        {hoursCont(element)}
                    </div>
                </div>
            )
        });
        return result;
    }
    function map() {
        const result = data.PL.location.map((element, index) => {         
            return (                
                    <iframe className='map' src={element}  key={element}
                        title={`Map${+index}`}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>               
            )
        })
        return result;
    }

    return (
<>
        <section className='contactName'>
            <div>
                <span className='fontBig fontBlue font_bold'>{data.PL.mobile[0].name}</span>
                <a href={`${data.PL.mobile[0].number}`} className='linkBlue'><span className='fontBigger fontBlue font_bold'>{data.PL.mobile[0].number}</span></a>
                <div className='cont_row hours fontBigger'>
                    {hours("one")}
                </div>
            </div>
            <div>

                <span className='fontBig fontBlue font_bold'>{data.PL.mobile[1].name}</span>
                <a href={`${data.PL.mobile[1].number}`} className='linkBlue'><span className='fontBigger fontBlue font_bold'>{data.PL.mobile[1].number}</span></a>
                <div className='cont_row hours fontBigger'>
                    {hours("two")}
                </div>
            </div>
           
            {/* </div> */}

        </section>
         <section className='cont_column fontBig font_bold contLocation'>
         <span>Jak do nas trafić ?</span>
         <div className='contMap'>
          {map()}
          </div>
     </section>

    
</>
    );
}

export default Contact;