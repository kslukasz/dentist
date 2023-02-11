import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from './AppContext.js';
import './css/Navigation.css'

function Navigation() {
    const { navView ,  mobileMenuButtonActive , setMobileMenuButtonActive } = useContext(AppContext);
    
    return (  
        <>  
        <div className={navView === 'large'? 'displayNone' : mobileMenuButtonActive ? 'backgroundMobile' : 'displayNone'} onClick={()=> setMobileMenuButtonActive(false)}></div>  
        <section className={navView === 'large' ? 'padding10 gap10 cont_row justyfy_center' : mobileMenuButtonActive ? 'mobileActive cont_row': 'mobile cont_row'} id='navSection'>
            <div className={navView === 'large'? 'cont_row gap10' : 'cont_row'}>
            <NavLink to='/about' className='cont_column paddingBottom10 paddingTop10 paddingRight5' onClick={()=> setMobileMenuButtonActive(false)}>
                <div className='cont_row'>
                    <span className="material-symbols-outlined navIco">dentistry</span>
                    <span className='paddingLeft5 paddingRight5'>O gabinecie</span>
                </div>
                <div className='line'></div>
            </NavLink>            
            <NavLink to='/people' className='cont_column paddingBottom10 paddingTop10 paddingRight5' onClick={()=> setMobileMenuButtonActive(false)}>
                <div className='cont_row'>
                    <span className="material-symbols-outlined navIco">badge</span>
                    <span className='paddingLeft5 paddingRight5'>Personel</span>
                </div>
                <div className='line'></div>
            </NavLink>
            <NavLink to='/services' className='cont_column paddingBottom10 paddingTop10 paddingRight5' onClick={()=> setMobileMenuButtonActive(false)}>
                <div className='cont_row'>
                    <span className="material-symbols-outlined navIco">Medical_services</span>
                    <span className='paddingLeft5 paddingRight5'>Usługi</span>
                </div>
                <div className='line'></div>
            </NavLink>
            </div>
            <div className={navView === 'large'? 'cont_row gap10' : 'cont_row'}>
            <NavLink to='/equipment' className='cont_column paddingBottom10 paddingTop10 paddingRight5' onClick={()=> setMobileMenuButtonActive(false)}>
                <div className='cont_row'>
                    <span className="material-symbols-outlined navIco">oral_disease</span>
                    <span className='paddingLeft5 paddingRight5'>Wyposażenie</span>
                </div>
                <div className='line'></div>
            </NavLink>
            <NavLink to='/gallery' className='cont_column paddingBottom10 paddingTop10 paddingRight5' onClick={()=> setMobileMenuButtonActive(false)}>
                <div className='cont_row'>
                    <span className="material-symbols-outlined navIco">imagesmode</span>
                    <span className='paddingLeft5 paddingRight5'>Galeria</span>
                </div>
                <div className='line'></div>
            </NavLink>
            <NavLink to='/contact' className='cont_column paddingBottom10 paddingTop10 paddingRight5' onClick={()=> setMobileMenuButtonActive(false)}>
                <div className='cont_row'>
                    <span className="material-symbols-outlined navIco">phone_in_talk</span>
                    <span className='paddingLeft5 paddingRight5'>Kontakt</span>
                </div>
                <div className='line'></div>
            </NavLink>
            </div>
        </section>
        </>
    )
}

export default Navigation;