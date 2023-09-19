import React, { useState, useContext  } from 'react';
import { NavLink, useParams, useSearchParams } from 'react-router-dom'

import NotFound from './NotFound';
import AppContext from '../AppContext';

function Descripction() {
    const { data } = useContext(AppContext);
    const services = data.PL.services;
    let params = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    const [path, setPath] = useState(getPath());   

    function paramsToObject(entries) {
        const result = {}
        for (const [key, value] of entries) {
            result[key] = value;
        }
        return result;
    }
    function getPath() {
        const entries = searchParams.entries();
        const paramsObj = paramsToObject(entries);
        const tableKeys = Object.keys(paramsObj);
        paramsObj.categoryNumber = Number(paramsObj.categoryNumber);
        paramsObj.contentNumber = Number(paramsObj.contentNumber);
        // console.log(typeof paramsObj.contentNumber)
        if (tableKeys.includes("categoryNumber") & (tableKeys.includes("contentNumber"))) {
            if ((paramsObj.categoryNumber + 1) <= services.length) {
                // console.log(Number(paramsObj.categoryNumber) , services[paramsObj.categoryNumber].content.length)
                // console.log(paramsObj.contentNumber+1 , services[paramsObj.categoryNumber].content.length)
                if ((paramsObj.contentNumber + 1) <= services[paramsObj.categoryNumber].content.length) {
                    return paramsObj;
                } else return ""
            } else return ""
        } else return ""
    }

    

    return (
        <>
        {path?
        <section className='contServ'>
            <div className="categoryContainer">
                <div className='categoryTitle fontBigger fontBlue font_bold'>{services[path.categoryNumber].content[path.contentNumber].title[0].toUpperCase()}{services[path.categoryNumber].content[path.contentNumber].title.substring(1)}</div>
                <div className='contentTitle fontNormal'>{services[path.categoryNumber].content[path.contentNumber].descripction}</div>
            </div>
            <div className='return'>
            <span className="material-symbols-outlined back">keyboard_return</span>                
            <NavLink to='/services' className='linkBlack'>Powrót</NavLink>
            </div>
        </section> :<NotFound/>}
        </>
    );
}

export default Descripction;