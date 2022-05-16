import React from 'react';
import '../css/bankingSection.css';

const BankingSection = () => {
    return (
        <section id = 'home-banking'>
            <div className = 'bankingBgDiv'>
                <div className = 'bankingMainDiv'>
                    <div className = 'FirstDiv'>
                        <div className = 'firstDivImage'>
                            <img src = '/images/bankingOverview.svg' alt = 'banking overview'></img>
                        </div>

                        <article className = 'bankingArticle'>
                            <h4>Banking Plus</h4>
                            <hr className = 'hr'></hr>

                            <p className = 'bankingPlusInfo'>
                                Manage your company's finances with a Business Banking Hub. It helps business owners and finance teams automate financial task and provide insights into money flow.
                            </p>

                            <div className = 'explorebtn'>
                                <a>
                                    <button>
                                        <p>Explore Payments</p>
                                    </button>
                                </a>
                            </div>

                            <div className = 'quickLinks'>
                                <p className = 'qltag'>QUICK LINKS</p>
                                <ul className = 'quicklinksList'>
                                    <li className = 'quicklinktitleandimg'>
                                        <img src = '/images/listBlack.svg'></img>
                                        <a>
                                            <p>
                                                Ezetap account
                                            </p>
                                        </a>
                                    </li>

                                    <li className = 'quicklinktitleandimg'>
                                        <img src = '/images/listBlack.svg'></img>
                                        <a>
                                            <p>
                                                Ezetap Payouts
                                            </p>
                                        </a>
                                    </li>

                                    <li className = 'quicklinktitleandimg'>
                                        <img src = '/images/listBlack.svg'></img>
                                        <a>
                                            <p>
                                                Bulk Payouts
                                            </p>
                                        </a>
                                    </li>

                                    <li className = 'quicklinktitleandimg'>
                                        <img src = '/images/listBlack.svg'></img>
                                        <a>
                                            <p>
                                                Ezetap Test Mode
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </article>
                    </div>

                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default BankingSection;