import React, { useContext , useState , useEffect } from 'react';
import AppContext from './AppContext.js'
import './css/Header.css'

import imageDentist from '../files/dentist.jpg'
import imageTooth from '../files/tooth.png'

function Header() {
    const { navView, setMobileMenuButtonActive, data } = useContext(AppContext);
    const [toUp , setToUp] = useState(false);
    const handleClick = () => {
        setMobileMenuButtonActive(true);
    }
    function handleScroll () {
        window.addEventListener("scroll", ()=>{          
            if (window.scrollY > 260) {
                setToUp(true);
            } else setToUp(false)
        })
    }
    function goToTop () {
        if (toUp) {
        window.scrollTo(0,0);
        }
    }
    useEffect(()=>{
        handleScroll();
    },[])
    return (
        <>
            <div className='cont_row rel nowrap'>
                <div className={`${toUp ? 'toTop toTopVisible' : 'toTop displayNoneTop'}`} onClick={goToTop}><span className="material-symbols-outlined icoTop">arrow_circle_up</span></div>
                <div className='header cont_column font_bold'>
                    <div className='fontBig mainName'>
                        Gabinet Stomatologiczny
                    </div>
                    <div className='fontBlue paddingLeft10 paddingTop10'>
                        {data.PL.adres[0]}
                    </div>
                    <div className='fontBlue paddingLeft10'>
                        {data.PL.adres[1]}
                    </div>
                    <div className='paddingTop10'>
                        {data.PL.mobile[0].name}
                    </div>
                    <div className='fontBlue paddingLeft10'>
                        <a href={`${data.PL.mobile[0].number}`} className='linkBlue'>{data.PL.mobile[0].number}</a>
                    </div>
                    <div>
                    {data.PL.mobile[1].name}
                    </div>
                    <div className='fontBlue paddingLeft10'>
                    <a href={`${data.PL.mobile[1].number}`} className='linkBlue'>{data.PL.mobile[1].number}</a>
                    </div>
                </div>
                <div className='cont_tooth cont_column rel'>
                    <img src={imageTooth} alt="dentist" />
                    <div className={navView === 'large' ? 'displayNone' : 'cont_row justyfy_center cursorPointer'} onClick={handleClick}><span className="material-symbols-outlined menuIco">menu_open</span></div>
                </div>
                <div className='empty_space'>

                </div>
                <div className='cont_img cont_column'>
                    <img src={imageDentist} alt="dentist" />
                </div>


            </div>
            <div className={navView === 'large' ? 'localNumbers fontBig font_bold cont_column' : 'localNumbersMobile fontNormal font_bold cont_row'}>
                <div>
                    Rejestracja: 
                </div>
                <div><br /></div>
                <div className={navView === 'large' ? 'fontNormal paddingLeft10' : 'fontSmall paddingLeft10'}>
                <a href={`tel:${data.PL.local[0].substring(8)}`} className='linkBlack'>{data.PL.local[0]}</a>
                </div>
                <div className={navView === 'large' ? 'fontNormal paddingLeft10' : 'fontSmall paddingLeft10'}>
                <a href={`tel:${data.PL.local[1].substring(10)}`} className='linkBlack'>{data.PL.local[1]}</a>
                </div>
            </div>
        </>
    )
}

export default Header;