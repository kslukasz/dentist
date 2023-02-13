import React, { useContext } from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";

import AppContext from '../AppContext';
import '../css/Services.css'

function Services() {
    const { data } = useContext(AppContext);
    const navigate = useNavigate();
    const services = data.PL.services;
    // console.log(services)

    const chandleClick = (objPath) => {
        // console.log(paramsObj);
        navigate({
            pathname: "/descripction",
            search: createSearchParams(objPath).toString()
        })

        // setSearchParams(paramsObj);
    }

    function listServices(category) {
        const result = services[category].content.map((element, index) => {
            if (element.descripction === "") {
                return (
                    <div className='descripction' key={element.title}>{element.title}</div>
                );
            } else {
                const objPath = {
                    categoryNumber: category,
                    contentNumber: index
                }
                return (
                    <div className='descripction navLinkServices' onClick={() => chandleClick(objPath)} key={element.title}>{element.title}</div>
                );
            }

        });
        const container = (
            <div className="categoryContainer">
                <div className='categoryTitle fontBigger fontBlue font_bold'>{services[category].category}</div>
                <div className='contentTitle fontNormal'>{result}</div>
            </div>
        );
        return container;
    }
    return (
        <section className='contServ'>
            <div className='contServLeft'>
                {listServices(0)}
                {listServices(1)}
            </div>
            <div className='contServRight'>
                {listServices(2)}
                {listServices(3)}
                {listServices(4)}

            </div>
        </section>
    );
}

export default Services;