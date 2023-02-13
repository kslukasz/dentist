import React from 'react';

import '../css/Equipment.css'
function Equipment() {
    return ( 
        <section className='cont_column gap10'>
                <div className='cont_row contEq'>
                    <img src="files/equipment/unit.jpg" alt="Not Found" />
                    <div>Nowoczesny unit stomatologiczny</div>
                </div>
                <div className='cont_row contEq'>
                    <img src="files/equipment/rtg.jpg" alt="Not Found" />
                    <div>System radiowizjografii cyfrowej</div>
                </div>
                <div className='cont_row contEq'>
                    <img src="files/equipment/endometr.jpg" alt="Not Found" />
                    <div>Endometr (Rypex5) narzędzie niezbędne w endodoncji, służące do pomiaru długości kanałów korzeniowych</div>
                </div>
                <div className='cont_row contEq'>
                    <img src="files/equipment/vdw-gold.jpg" alt="Not Found" />
                    <div>Endometr VDW GOLD- służący do poszerzenia i opracowania kanałów korzeniowych</div>
                </div>
                <div className='cont_row contEq'>
                    <img src="files/equipment/protraper.jpg" alt="Not Found" />
                    <div>Narzędzia maszynowe w endodoncji: Mtwo, Dr's Choice, Pro File, ProTaper, Rinse, Gates</div>
                </div>
                <div className='cont_row contEq'>
                    <img src="files/equipment/lupa.jpg" alt="Not Found" />
                    <div>Lupy powiększające (4 krotne powiększenie pola operacyjnego)</div>
                </div>
                <div className='cont_row contEq'>
                    <img src="files/equipment/piaskarka.jpg" alt="Not Found" />
                    <div>Piaskarka , Skaler ultradźwiękowy</div>
                </div>
        </section>
     );
}

export default Equipment;