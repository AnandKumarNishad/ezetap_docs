import React from 'react';
import '../css/TopNavBar.css';
import '../App.css';

const TopNavBar = () => {
    return (
        <nav className = 'navbar'>
            <div className = 'mainDiv'>
                <div className = 'logoDiv'>
                    <div className = 'logoMainDiv'>
                        <a>
                            <div className = 'innerLogoDiv'>
                                <img src = "/images/ezetap_logo.gif" alt = 'logo' width = '130px' height = '55px'/>
                            </div>
                        </a>
                    </div>
                </div>

                <div className = 'linksButtonsDiv'>
                    <div className = 'linksMainDiv'>
                        <div className = 'linksInnerDiv'>
                            <div className = 'active'>
                                <a>
                                    <p>
                                        Documentation
                                    </p>
                                </a>
                            </div> 

                            <div className = 'linkDiv'>
                                <a>
                                    <p>
                                        API Reference
                                    </p>
                                </a>
                            </div> 

                            <div className = 'linkDiv'>
                                <a>
                                    <p>
                                        Support
                                    </p>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <div className = 'buttonsMainDiv'>
                        <div className = ' buttonsInnerDiv'>
                            <div className = 'buttonDiv'>
                                <a>
                                    <p>Log In</p>
                                </a>
                            </div>

                            <div className = 'buttonDiv'>
                                <a>
                                    <button>
                                        <p>
                                            Sign Up
                                        </p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;