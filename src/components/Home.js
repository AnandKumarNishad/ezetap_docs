import React, { useEffect, useState } from 'react';
import TopNavBar from './TopNavBar';
import '../css/home.css';
import HomeSideNav from './HomeSideNav';
import CardsSection from './CardsSection';
import axios from 'axios';
import Loading from './Loading';

let data

const Home = () => {

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
        <div>
            <TopNavBar />
            <div className = 'homeMainDiv'>
                <div className = 'sidebar'>
                    <HomeSideNav />
                    <main className = 'mainArea'>
                        <div className = 'titleDiv'>
                            {
                                webData
                                ?
                                <div className = 'bgImageDiv'>
                                    <div className = 'heading'>
                                        <h1>
                                            { webData.headerArea[0].headerTitle }
                                        </h1>


                                        <div className = 'bottomTitleText'>
                                            <a>
                                                <h3>{ webData.headerArea[0].headerText }</h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className = 'heroImg'>
                                        <img src = { webData.headerArea[0].headerHeroImg } alt = { webData.headerArea[0].headerArrowIconAlt }></img>
                                    </div>
                                </div>
                                :
                                <Loading />
                            }
                        </div>

                        <CardsSection />
                        
                        {/* <PaymentSection />

                        <BankingSection /> */}

                        {/* <section id = 'home-partners' style = {{ height:"100vh", paddingTop:"200px" }}>
                            <div>
                                partners
                            </div>
                        </section>

                        <section id = 'home-devtools' style = {{ height:"100vh", paddingTop:"200px" }}>
                            <div>
                                devtools
                            </div>
                        </section> */}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;