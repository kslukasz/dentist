import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContext from './AppContext.js';


import Header from './Header';
import Navigation from './Navigation'
import Main from './Main'
import Footer from './Footer.js';
// import data from '../files/data.json'
import './css/App.css';
const API = 'files/datafile.json'

function App() {
  const [data,setData] = useState(false);
  const [navView, setNavView] = useState(startAppView());
  const [mobileMenuButtonActive, setMobileMenuButtonActive ] = useState(false);

  function fetchData () {
    fetch(API)
      .then(response => response.json())
      .then(dataCont => {
       setData(dataCont);     
      })
      .catch((error) => {
        // console.log(error)        
      })
  }


function startAppView () {
  const bodyView = document.body.clientWidth;
  if (bodyView <= 700){
    return "small"
  } else return "large"
}

  const chandleResize = () => {
    const app = document.querySelector(".App").clientWidth;
    if (app <= 700) {
      setNavView("small");     
    } else {
      setNavView("large");
      setMobileMenuButtonActive(false); 
    }
  }
  const blockScroll = () =>{    
    if (mobileMenuButtonActive) {
      window.scrollTo(0,0);
      document.body.style.overflow= 'hidden';
    } else{
      document.body.style.overflow= 'auto';
    }
  }

  useEffect(() => {  
    fetchData();  
    chandleResize();
    window.addEventListener("resize", chandleResize);    
    return () => {
      window.removeEventListener("resize", chandleResize);
    }
  }, []);
  useEffect(() => {
    blockScroll();
  },[mobileMenuButtonActive]);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppContext.Provider value={{
        data:data,
        navView: navView,
        mobileMenuButtonActive: mobileMenuButtonActive,
        setMobileMenuButtonActive: setMobileMenuButtonActive,
      }}>
        <div className="App cont_column">
          <header className='cont_column rel'>
            {data ? <Header /> : null}
          </header>
          <nav className='cont_column align_center'>
          {data ? <Navigation /> : null}
          </nav>
          <main className='cont_column align_center'>           
          {data ? <Main /> : null}           
          </main>
          <footer>
          {data ? <Footer/>:null}
          </footer>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
