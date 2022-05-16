import React from 'react';
import '../css/paymentSection.css';

const PaymentSection = () => {
    return (
        <section id = 'home-payment'>
            <div className = 'paymentMainDiv'>
                <div className = 'paymentFirstPart'>
                    <article className = 'paymentArticle'>
                        <h4>Payments</h4>
                        <hr className = 'hr'></hr>
                        <p>
                            Razorpay Payments provide a range of products to accept payments and make payouts. It also offers solutions to add offers and assess risk associated with a customer order.
                        </p>
                        <div className = 'explorebtn'>
                            <a>
                                <button>
                                    <p>Explore Payments</p>
                                </button>
                            </a>
                        </div>
                        <div className = 'listOuterDiv'>
                            <div className = 'listInnerDiv'>
                                <p>
                                    INTEGRATE WITH PAYMENT GATEWAY
                                </p>
                                <ul>
                                    <li>
                                        <img src = '/images/list.svg' alt = 'list'></img>
                                        <a>
                                            <p>Web Integration</p>
                                        </a>
                                    </li>

                                    <li>
                                    <img src = '/images/list.svg' alt = 'list'></img>
                                        <a>
                                            <p>React Native</p>
                                        </a>
                                    </li>

                                    <li>
                                    <img src = '/images/list.svg' alt = 'list'></img>
                                        <a>
                                            <p>iOS Integration</p>
                                        </a>
                                    </li>

                                    <li>
                                    <img src = '/images/list.svg' alt = 'list'></img>
                                        <a>
                                            <p>Ecommerce Plugins</p>
                                        </a>
                                    </li>

                                    <li>
                                    <img src = '/images/list.svg' alt = 'list'></img>
                                        <a>
                                            <p>Android Integration</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a>
                                            <p>See All Integration Options</p>
                                        </a>
                                        <img src = '/images/arrowOrange.svg' alt = 'arrow'></img>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <figure className = 'paymentFigure'>
                        <div className = 'videoBGDiv'>
                            <div className = 'videoDiv'>
                                <video autoPlay = { true } loop = { true } playsInline>
                                    <source src = '/video/payements-overview.mp4'></source>
                                    Sorry, your browser does not support embedded videos.
                                </video>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className = 'productsMainDiv'>
                    <div className = 'productsInnerDiv'>
                        <div className = 'productsTitle'>
                            <h4 className = 'title'>
                                Products from Exetap payment suite
                            </h4>
                            <hr className = 'hr'></hr>
                        </div>
                        <div className = 'productsdiv'>
                            <p className = 'prodTitle'>Accept Payments</p>
                            <div className = 'products'>
                                <div className = 'product'>
                                    <div className = 'boxClosed'>
                                        <div className = 'productDetails'>
                                            <div className = 'productImgandText'>
                                                <div className = 'imgandText'>
                                                    <div className = 'productimg'>
                                                        <img src = "/images/paymentGateway.svg" alt = 'Payment Gateway icon'></img>
                                                    </div>
                                                    <p>Payment Gateway</p>
                                                </div>
                                                <img src = '/images/winglessarrow.svg' alt = 'arrow'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className = 'product'>
                                    <div className = 'boxClosed'>
                                        <div className = 'productDetails'>
                                            <div className = 'productImgandText'>
                                                <div className = 'imgandText'>
                                                    <div className = 'productimg'>
                                                        <img src = "/images/paymentLinks.svg" alt = 'Payment links icon'></img>
                                                    </div>
                                                    <p>Payment Links</p>
                                                </div>
                                                <img src = '/images/winglessarrow.svg' alt = 'arrow'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className = 'product'>
                                    <div className = 'boxClosed'>
                                        <div className = 'productDetails'>
                                            <div className = 'productImgandText'>
                                                <div className = 'imgandText'>
                                                    <div className = 'productimg'>
                                                        <img src = "/images/paymentPages.svg" alt = 'Payment Gateway icon'></img>
                                                    </div>
                                                    <p>Payment Pages</p>
                                                </div>
                                                <img src = '/images/winglessarrow.svg' alt = 'arrow'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className = 'product'>
                                    <div className = 'boxClosed'>
                                        <div className = 'productDetails'>
                                            <div className = 'productImgandText'>
                                                <div className = 'imgandText'>
                                                    <div className = 'productimg'>
                                                        <img src = "/images/paymentButtons.svg" alt = 'Payment Buttons icon'></img>
                                                    </div>
                                                    <p>Payment Buttons</p>
                                                </div>
                                                <img src = '/images/winglessarrow.svg' alt = 'arrow'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className = 'product'>
                                    <div className = 'boxClosed'>
                                        <div className = 'productDetails'>
                                            <div className = 'productImgandText'>
                                                <div className = 'imgandText'>
                                                    <div className = 'productimg'>
                                                        <img src = "/images/invoicesFeed.svg" alt = 'Invoices icon'></img>
                                                    </div>
                                                    <p>Invoices</p>
                                                </div>
                                                <img src = '/images/winglessarrow.svg' alt = 'arrow'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className = 'product'>
                                    <div className = 'boxClosed'>
                                        <div className = 'productDetails'>
                                            <div className = 'productImgandText'>
                                                <div className = 'imgandText'>
                                                    <div className = 'productimg'>
                                                        <img src = "/images/smartCollect.svg" alt = 'Smart Collect icon'></img>
                                                    </div>
                                                    <p>Smart Collect</p>
                                                </div>
                                                <img src = '/images/winglessarrow.svg' alt = 'arrow'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className = 'product'>
                                    <div className = 'boxClosed'>
                                        <div className = 'productDetails'>
                                            <div className = 'productImgandText'>
                                                <div className = 'imgandText'>
                                                    <div className = 'productimg'>
                                                        <img src = "/images/subscription.svg" alt = 'Subscription icon'></img>
                                                    </div>
                                                    <p>Subscription</p>
                                                </div>
                                                <img src = '/images/winglessarrow.svg' alt = 'arrow'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentSection;