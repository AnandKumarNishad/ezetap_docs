import React, { useEffect, useState } from 'react';
import '../css/home.css';
import CardsSection from './CardsSection';
import axios from 'axios';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const Home = () => {
    const [ webData, setWebData ] = useState(); 
    
    let data;

    const getData = async () => {
        const res = await axios.get("http://localhost:1337/api/webdatas")
        .catch((error) => {
            console.log(error.message);
        });
        data = res.data.data[0].attributes.data.data;
        if(data !== undefined)
        {
            setWebData(data);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);
    
    return (
        <div>
            <main className = 'mainArea'>
                <div className = 'titleDiv'>
                    {
                        // rendering only if there is data in webData else loading screen is shown
                        webData
                        ?
                        <div className = 'bgImageDiv'>
                            <div className = 'heading'>
                                <h1 className = 'head'>
                                    { webData.headerArea[0].headerTitle }
                                </h1>
                                <div className = 'bottomTitleText'>
                                    <Link to = ''>
                                        <h3>{ webData.headerArea[0].headerText }</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className = 'heroImg'>
                                <img src = { webData.headerArea[0].headerHeroImg } alt = { webData.headerArea[0].headerArrowIconAlt }></img>
                            </div>
                        </div>
                        :
                        // untill the response is null a loading screen will be shown
                        <Loading />
                    }
                </div>
                {/* cards component */}
                <CardsSection />
            </main>
        </div>
    );
};

export default Home;