import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/sideNavBar.css'
import GetStatedSplitNav from './GetStatedSplitNav';

const GetStartedNav = () => {
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    }

    const gotoGetStarted = () => {
        navigate("/getStarted");
    }

    const gotoPayments = () => {
        navigate("/payments");
    }

    const gotoBanking = () => {
        navigate("/");
    }

    const gotoPartners = () => {
        navigate("/");
    }

    const gotoDevTools = () => {
        navigate("/");
    }

    return (
        <div className = 'sideNavBarMainDiv'>
            <nav className = 'sideNavBar'>
                <div className = 'mainNavBtn'>
                    <div className = 'navBtn'>
                        <a onClick={gotoHome}>
                            <span className = 'navHome'>
                                <img src = "/images/home.svg"></img>
                            </span>
                            <span className = 'navText'>
                                Home
                            </span>
                        </a>
                    </div>
                </div>

                <div className = 'mainNavBtn'>
                    <div className = 'navBtn'>
                        <a onClick={gotoGetStarted}>
                            <span className = 'navHome'>
                                <img src = "/images/getStarted.svg"></img>
                            </span>
                            <span className = 'navText'>
                                Get Started
                            </span>
                        </a>
                    </div>
                </div>

                <div className = 'mainNavBtn'>
                    <div className = 'navBtn'>
                        <a onClick={gotoPayments}>
                            <span className = 'navHome'>
                                <img src = "/images/payments.svg"></img>
                            </span>
                            <span className = 'navText'>
                                Payments
                            </span>
                        </a>
                    </div>
                </div>

                <div className = 'mainNavBtn'>
                    <div className = 'navBtn'>
                        <a onClick={gotoBanking}>
                            <span className = 'navHome'>
                                <img src = "/images/banking.svg"></img>
                            </span>
                            <span className = 'navText'>
                                Banking Plus
                            </span>
                        </a>
                    </div>
                </div>

                <div className = 'mainNavBtn'>
                    <div className = 'navBtn'>
                        <a onClick={gotoPartners}>
                            <span className = 'navHome'>
                                <img src = "/images/partners.svg"></img>
                            </span>
                            <span className = 'navText'>
                                Partners
                            </span>
                        </a>
                    </div>
                </div>

                <div className = 'mainNavBtn'>
                    <div className = 'navBtn'>
                        <a onClick={gotoDevTools}>
                            <span className = 'navHome'>
                                <img src = "/images/DeveloperTools.svg"></img>
                            </span>
                            <span className = 'navText'>
                                Developer Tools
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
            <GetStatedSplitNav />
        </div>
    );
};

export default GetStartedNav;