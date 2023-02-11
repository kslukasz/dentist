import React, { useContext , useState , useEffect } from 'react';

import AppContext from '../AppContext'
import '../css/People.css'

function About() {  
    const { data } = useContext(AppContext);
    const [activeBig , setActiveBig] = useState(false);
    const [currentImageIndex , setCurrentImageIndex] = useState(0);
    const tableMini = [
        "/files/cert/thumbstrip01.jpg",
        "/files/cert/thumbstrip02.jpg",
        "/files/cert/thumbstrip03.jpg",
        "/files/cert/thumbstrip04.jpg",
        "/files/cert/thumbstrip05.jpg",
        "/files/cert/thumbstrip06.jpg",
        "/files/cert/thumbstrip07.jpg",
        "/files/cert/thumbstrip08.jpg",
        "/files/cert/thumbstrip09.jpg",
        "/files/cert/thumbstrip10.jpg",
        "/files/cert/thumbstrip11.jpg",
        "/files/cert/thumbstrip12.jpg",
        "/files/cert/thumbstrip13.jpg",
        "/files/cert/thumbstrip14.jpg",
        "/files/cert/thumbstrip15.jpg",
        "/files/cert/thumbstrip16.jpg",
        "/files/cert/thumbstrip17.jpg",
        "/files/cert/thumbstrip18.jpg",
        "/files/cert/thumbstrip19.jpg",
        "/files/cert/thumbstrip20.jpg",
        "/files/cert/thumbstrip21.jpg",
        "/files/cert/thumbstrip22.jpg",
        "/files/cert/thumbstrip23.jpg",
        "/files/cert/thumbstrip24.jpg",
        "/files/cert/thumbstrip25.jpg",
        "/files/cert/thumbstrip26.jpg",
        "/files/cert/thumbstrip27.jpg",
        "/files/cert/thumbstrip28.jpg",
        "/files/cert/thumbstrip29.jpg",
        "/files/cert/thumbstrip30.jpg",
        "/files/cert/thumbstrip31.jpg",
        "/files/cert/thumbstrip32.jpg",
        "/files/cert/thumbstrip33.jpg",
        "/files/cert/thumbstrip34.jpg",
        "/files/cert/thumbstrip35.jpg",
        "/files/cert/thumbstrip36.jpg",
        "/files/cert/thumbstrip37.jpg",
        "/files/cert/thumbstrip38.jpg",
        "/files/cert/thumbstrip39.jpg",
        "/files/cert/thumbstrip40.jpg",
        "/files/cert/thumbstrip41.jpg"
    ];
    const tableBig = [
        "/files/certBig/thumbstrip01.jpg",
        "/files/certBig/thumbstrip02.jpg",
        "/files/certBig/thumbstrip03.jpg",
        "/files/certBig/thumbstrip04.jpg",
        "/files/certBig/thumbstrip05.jpg",
        "/files/certBig/thumbstrip06.jpg",
        "/files/certBig/thumbstrip07.jpg",
        "/files/certBig/thumbstrip08.jpg",
        "/files/certBig/thumbstrip09.jpg",
        "/files/certBig/thumbstrip10.jpg",
        "/files/certBig/thumbstrip11.jpg",
        "/files/certBig/thumbstrip12.jpg",
        "/files/certBig/thumbstrip13.jpg",
        "/files/certBig/thumbstrip14.jpg",
        "/files/certBig/thumbstrip15.jpg",
        "/files/certBig/thumbstrip16.jpg",
        "/files/certBig/thumbstrip17.jpg",
        "/files/certBig/thumbstrip18.jpg",
        "/files/certBig/thumbstrip19.jpg",
        "/files/certBig/thumbstrip20.jpg",
        "/files/certBig/thumbstrip21.jpg",
        "/files/certBig/thumbstrip22.jpg",
        "/files/certBig/thumbstrip23.jpg",
        "/files/certBig/thumbstrip24.jpg",
        "/files/certBig/thumbstrip25.jpg",
        "/files/certBig/thumbstrip26.jpg",
        "/files/certBig/thumbstrip27.jpg",
        "/files/certBig/thumbstrip28.jpg",
        "/files/certBig/thumbstrip29.jpg",
        "/files/certBig/thumbstrip30.jpg",
        "/files/certBig/thumbstrip31.jpg",
        "/files/certBig/thumbstrip32.jpg",
        "/files/certBig/thumbstrip33.jpg",
        "/files/certBig/thumbstrip34.jpg",
        "/files/certBig/thumbstrip35.jpg",
        "/files/certBig/thumbstrip36.jpg",
        "/files/certBig/thumbstrip37.jpg",
        "/files/certBig/thumbstrip38.jpg",
        "/files/certBig/thumbstrip39.jpg",
        "/files/certBig/thumbstrip40.jpg",
        "/files/certBig/thumbstrip41.jpg"
    ];
    const table1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const table2 = [10, 11 , 12, 13, 14, 15, 16, 17, 18, 19 , 39];
    const table3 = [20, 21 , 22, 23, 24, 25, 26, 27, 28, 29 ];
    const table4 = [30, 31, 32, 33, 34, 35, 36, 37, 38 , 40];

    const galleryStart = (index) =>{       
       setCurrentImageIndex(index); 
       setActiveBig(true);
    }
    const closePicture =() => {
        setActiveBig(false);
    }
    const changePicture = (direction) => {
        if (direction==="left"){
            setCurrentImageIndex(prevState => {
                if (prevState===0){
                    return prevState;
                } else return prevState-1;
            })
        } 
        if (direction==="right"){
            setCurrentImageIndex(prevState => {
                if (prevState === tableBig.length-1){
                    return prevState;
                } else return prevState+1;
            })
        }
    }

    const blockScrollPicture = () =>{    
        if (activeBig) {
        //   window.scrollTo(0,0);
          document.body.style.overflow= 'hidden';
        } else{
          document.body.style.overflow= 'auto';
        }
      }

    function column(table) {
        const result = tableMini.map((element, index) => {
            if (table.includes(index)) {
                return (
                    <img src={element} alt="Not found" key={element} onClick={()=>galleryStart(index)}/>
                )
            }
        });
        return result;
    }
    useEffect(() => {
        blockScrollPicture();
      },[activeBig]);
    return (
        <>
            <section className='cont_row peopleCont fontBig '>
                <div>
                    <span className='font_bold fontBlue'><span class="material-symbols-outlined">clinical_notes</span><span>{data.PL.mobile[0].name}</span></span>
                    <span className='fontNormal'>{data.PL.aboutOne}</span>
                </div>
                <div>
                <span className='font_bold fontBlue'><span class="material-symbols-outlined">clinical_notes</span><span>{data.PL.mobile[1].name}</span></span>
                    <span className='fontNormal'>{data.PL.aboutTwo}</span>
                </div>
            </section>


            <div className='contCert cont_row'>
                <div className='cont_row contMini'>
                    {column(table1)}
                </div>
                <div className='cont_row contMini'>
                    {column(table2)}
                </div>
                <div className='cont_row contMini'>
                    {column(table3)}
                </div>
                <div className='cont_row contMini'>
                    {column(table4)}
                </div>           
            </div>
            <div className={`${activeBig ? 'backgroundPicture' : 'displayNone'}`}>               
                <div className='contPicture'>
                <img src={tableBig[currentImageIndex]} alt="Not found" />
                <div className={`${currentImageIndex===0 ? "displayNone" : 'buttonLeft'}`} onClick={()=>changePicture("left")}><span class="material-symbols-outlined">chevron_left</span></div>
                <div className={`${currentImageIndex===tableBig.length-1 ? "displayNone": 'buttonRight'}`} onClick={()=>changePicture("right")}><span class="material-symbols-outlined">chevron_right</span></div>
                <div className='buttonClose' onClick={closePicture}><span class="material-symbols-outlined">disabled_by_default</span></div>
                </div>
            </div>           
            
        </>
    );
}

export default About;