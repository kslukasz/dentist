import React, { useContext , useState , useEffect } from 'react';

import AppContext from '../AppContext'
import '../css/Gallery.css'

function About() {  
    const { data } = useContext(AppContext);
    const [activeBig , setActiveBig] = useState(false);
    const [currentImageIndex , setCurrentImageIndex] = useState(0);
    const tableMini = [
        "files/gal/image1.jpg",
        "files/gal/image2.jpg",
        "files/gal/image3.jpg",
        "files/gal/image4.jpg",
        "files/gal/image5.jpg",
        "files/gal/image6.jpg",
        "files/gal/image7.jpg",
        "files/gal/image8.jpg",
        "files/gal/image9.jpg",
        "files/gal/image10.jpg"
    ];
    const tableBig = [
        "files/galBig/image1.jpg",
        "files/galBig/image2.jpg",
        "files/galBig/image3.jpg",
        "files/galBig/image4.jpg",
        "files/galBig/image5.jpg",
        "files/galBig/image6.jpg",
        "files/galBig/image7.jpg",
        "files/galBig/image8.jpg",
        "files/galBig/image9.jpg",
        "files/galBig/image10.jpg"
    ];
    const table1 = [0, 9, 3];
    const table2 = [4, 5, 6];
    const table3 = [1, 7, 8, 2];

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

            <div className='contGal cont_row'>
                <div className='cont_row contMiniGal'>                 
                    {column(table1)}
                </div>
                <div className='cont_row contMiniGal'>
                    {column(table2)}
                </div> 
                <div className='cont_row contMiniGal'>
                    {column(table3)}
                </div>                 
            </div>
            <div className={`${activeBig ? 'backgroundPicture' : 'displayNone'}`}>               
                <div className='contPicture'>
                <img src={tableBig[currentImageIndex]} alt="Not found" className='galBigImage'/>
                <div className={`${currentImageIndex===0 ? "displayNone" : 'buttonLeft'}`} onClick={()=>changePicture("left")}><span class="material-symbols-outlined">chevron_left</span></div>
                <div className={`${currentImageIndex===tableBig.length-1 ? "displayNone": 'buttonRight'}`} onClick={()=>changePicture("right")}><span class="material-symbols-outlined">chevron_right</span></div>
                <div className='buttonClose' onClick={closePicture}><span class="material-symbols-outlined">disabled_by_default</span></div>
                </div>
            </div>           
            
        </>
    );
}

export default About;