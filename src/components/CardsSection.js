import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/cards.css';
import Loading from './Loading';

let data;

const CardsSection = () => {

    const [ webData, setWebData ] = useState(); 

    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data;
        if(data !== undefined)
        {
            setWebData(data);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className = 'container-fluid'>
            {
            webData
            ?
            <div className = 'container'>
                <h2> 
                    { webData.cardsSection.conhead }
                    <span> { webData.cardsSection.conheadspan } </span>
                </h2>
                {
                    webData.cardsSection.cards.map(card => (

                        <div className = 'desktopversion' key = { card.cardFront.title }>
                            <div className = 'flip-wrapper'>
                                <div className = 'flip-card'>
                                    <div className = 'flip-card-inner'>
                                        <div className = 'flip-card-front'>
                                            <img src = { card.cardFront.sdkImg } alt = { card.cardFront.sdkImgAlt }></img>
                                            <h3>{ card.cardFront.title }</h3>
                                        </div>
                                        <div className = 'flip-card-back'>
                                            <img src = { card.cardBack.sdkImg } alt = { card.cardBack.sdkImgAlt } width = '120px' height = '120px'></img>
                                            <h3>{ card.cardBack.title }</h3>
                                            <h5>{ card.cardBack.backtext }</h5>
                                            <ul>
                                                <li>
                                                    <a href = '/apiDetails'>{ card.cardBack.listlink.title1 }</a>
                                                </li>

                                                <li>
                                                    <a href = '/'>{ card.cardBack.listlink.title2 }</a>
                                                </li>
                                                
                                                <li>
                                                    <a href = '/'>{ card.cardBack.listlink.title3 }</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            :
            <Loading />
            }
        </section>
    );
};

export default CardsSection;