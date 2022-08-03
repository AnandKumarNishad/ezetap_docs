import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/cards.css';
import Loading from './Loading';


const CardsSection = () => {
    const [ webData, setWebData ] = useState(); 
    
    let data;

    // getting the data from the api
    const getData = async () => {
        const result = await axios.get("http://localhost:1337/api/webdatas")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data.data[0].attributes.data.data;
        if(data !== undefined)
        {
            // assigning it to webData in useState
            setWebData(data);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <section className = 'container-fluid'>
            {
            // rendering only if ther is data in webData
            webData
            ?
            <div className = 'container'>
                <h2> 
                    { webData.cardsSection.conhead }
                    <span> { webData.cardsSection.conheadspan } </span>
                </h2>
                <div className = 'deskcontainer'>
                    {
                        webData.cardsSection.cards.map(card => (

                            <div className = 'desktopversion' key = { card.cardFront.title }>
                                <div className = 'flip-wrapper'>
                                    <div className = 'flip-card'>
                                        <div className = 'flip-card-inner'>
                                            {/* rendering two faces of cards */}
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
                                                        <Link to = { card.cardBack.linkTo.link1 } >{ card.cardBack.listlink.title1 }</Link>
                                                    </li>

                                                    <li>
                                                        <Link to = { card.cardBack.linkTo.link2 } >{ card.cardBack.listlink.title2 }</Link>
                                                    </li>

                                                    <li>
                                                        <Link to = { card.cardBack.linkTo.link3 } >{ card.cardBack.listlink.title3 }</Link>
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
            </div>
            :
            <Loading />
            }
        </section>
    );
};

export default CardsSection;