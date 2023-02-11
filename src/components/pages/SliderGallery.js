import React, { useState, useEffect } from 'react';
import '../css/SliderGallery.css'

function SliderGallery({ srcGallery, writingGallery, timeInterval }) {
    const [currentView, setCurrentView] = useState(0);
    const [time, setTime] = useState(true);
    const [intNumber, setIntNumber] = useState();

    function stopInterval () {
        clearInterval(intNumber);
        setAutomatGallery();
        add();
    }


    function add(auto) {
        setTime(prevTime => {
            if (prevTime){            
            setCurrentView(prevState => {
                if (prevState === srcGallery.length - 1) {
                    return 0;
                } else return prevState + 1;
            });          
            setTimeout(() => {
                setTime(true)
            }, 601)          
            return false;
        }
        });
    }

    const galleryShow = (
        srcGallery.map((element, index) => {
            return (
                <img src={element} alt="" key={element[index]} className={`${index === currentView ? "null" : "zero"}`} />
            )
        })
    );
    const writingShow = (
        writingGallery.map((element, index) => {
            return (
                <span key={element[index]} className={`${index === currentView ? "string" : "opacityZero"}`}>{element}</span>
            )
        })
    );
    function setAutomatGallery() {
        let number= setInterval(() => {
            add();
        }, timeInterval);
        setIntNumber(number);
    }

    useEffect(() => {
        setAutomatGallery();
    }, []);
    return (
        <div className='contGallery cont_row nowrap'>
            {galleryShow}
            {writingShow}
            <div className='numberOfPage'>{`${currentView+1} | ${srcGallery.length}`}</div>
            <div className='cont_row nowrap gap10 contButton'>
                {/* <button className='one' onClick={del}>left</button> */}
                <button className='cont_row no wrap' onClick={stopInterval}><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
        </div>
    );
}

export default SliderGallery;