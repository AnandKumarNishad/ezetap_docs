import React, { useEffect, useState } from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
import '../css/home.css';
import PaymentSection from './PaymentSection';
import { padding } from '@mui/system';
import HomeSideNav from './HomeSideNav';
import BankingSection from './BankingSection';

const Home = () => {
    const [ scroll, setScroll ] = useState(false);
    useEffect( () => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 110)
        })
    }, [])
    return (
        <div>
            <TopNavBar />
            <div className = 'homeMainDiv'>
                <div className = 'sidebar'>
                    <HomeSideNav />
                    <main className = 'mainArea'>
                        <div className = 'titleDiv'>
                            <div className = 'bgImageDiv'>
                                <div className = 'heading'>
                                    <h1>
                                        Documentation
                                    </h1>

                                    <div className = {scroll ? 'scrolledSearchbar' : 'searchbar'}>
                                        <input placeholder='Search the documentation' disabled className = {scroll ? 'scrolledInputField' : 'inputField'}></input>
                                        <img src = '/images/search-icon.svg' alt = 'search' className = {scroll ? 'ScrolledSearchIcon' : 'searchIcon'}></img>
                                        <img src = '/images/info-icon.svg' alt = 'info' className = {scroll ? 'scrolledInfoIcon' : 'infoIcon'}></img>
                                    </div>

                                    <div className = 'bottomTitleText'>
                                        <a>
                                            <p> Not here for integration. Looking for refund? </p>
                                            <img src = '/images/arrow.svg' alt = 'arrow'></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'secondaryNavBar'>
                            <div className = 'secondaryInnerDiv'>
                                <div className = 'tabDiv'>
                                    <a href = '#home-payment'>
                                        <p>Payments</p>
                                    </a>
                                </div>

                                <div className = 'tabDiv'>
                                    <a href = '#home-banking'>
                                        <p>Banking Plus</p>
                                    </a>
                                </div>

                                <div  className = 'tabDiv'>
                                    <a href = '#home-partners'>
                                        <p>Partners</p>
                                    </a>
                                </div>

                                <div className = 'tabDiv'>
                                    <a href = '#home-devtools'>
                                        <p>Developer Tools</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <PaymentSection />

                        <BankingSection />

                        <section id = 'home-partners' style = {{ height:"100vh", paddingTop:"200px" }}>
                            <div>
                                partners
                            </div>
                        </section>

                        <section id = 'home-devtools' style = {{ height:"100vh", paddingTop:"200px" }}>
                            <div>
                                devtools
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;