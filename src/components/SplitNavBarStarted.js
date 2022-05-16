import React from 'react';
import '../css/splitnavbarStarted.css'

const SplitNavBarStarted = () => {
    return (
        <div className = 'sideSplitNav'>
            <nav className = 'secondNav'>
                <nav className = 'splitnav'>
                    <div className='main'>
                        <div className = 'innerMain'>
                            <div className = 'navTab'>
                                <a>
                                    <span>Overview</span>
                                </a>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Get Started</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Dashboard</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Settlements</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Refunds</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'navCell'>
                            <div className = 'navInnerCell'>
                                <div className = 'navBtn'>
                                    <div className = 'navTab'>
                                        <img src = '/images/doublearrow.svg'></img>
                                        <p>Disputes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </div>
    );
};

export default SplitNavBarStarted;