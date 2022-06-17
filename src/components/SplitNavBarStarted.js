import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/splitnavbarStarted.css';

const SplitNavBarStarted = () => {
    const [ webData, setWebData ] = useState(); 
    
    let pageName = "";
    let data;

    // getting the data from the api
    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data;
        if(data !== undefined)
        {
            // assigning it to webData in useState
            setWebData(data);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    // checking on which page we are on
    if (document.URL.includes("getStarted")) {
        pageName = 'gs';
    } else if (document.URL.includes("features")) {
        pageName = 'features';
    } else if (document.URL.includes("apiDetails")) {
        pageName = 'api';
    } else {
        pageName = 'home'
    }

    // setting the active css class to the active link
    const activeLink = () => {
        let ptp = document.querySelector("#ptp");
        let startapi = document.querySelector("#start");
        let statusapi = document.querySelector("#status");
        let cancelapi = document.querySelector("#cancel");

        if(startapi !== null && statusapi !== null && cancelapi !== null)
        {
            if( document.URL.includes("startApi")) {
                startapi.classList.add("activeapiname");
                ptp.classList.remove("activeapiname");
                cancelapi.classList.remove("activeapiname");
                statusapi.classList.remove("activeapiname");
                ptp.classList.add("secactive");
            } else if ( document.URL.includes("statusApi")) {
                cancelapi.classList.remove("activeapiname");
                startapi.classList.remove("activeapiname");
                ptp.classList.remove("activeapiname");
                ptp.classList.add("secactive");
                statusapi.classList.add("activeapiname");
            } else if ( document.URL.includes("cancelApi")) {
                startapi.classList.remove("activeapiname");
                statusapi.classList.remove("activeapiname");
                ptp.classList.remove("activeapiname");
                ptp.classList.add("secactive");
                cancelapi.classList.add("activeapiname");
            } else{
                startapi.classList.remove("activeapiname");
                statusapi.classList.remove("activeapiname");
                cancelapi.classList.remove("activeapiname");
                ptp.classList.add('activeapiname');
            }
        }
    }


    return (
        // as home page has no split nav bar so not rendering the splitbar
        pageName === "home"
        ?
        null
        :
        // if the page is not home page then we will the data accordinng to the page we are on
        <div className = 'sideSplitNav'>
            <nav className = 'secondNav'>
                <nav className = 'splitnav'>
                    {
                        webData
                        ?
                        <div className='main'>
                            {
                                // if the page is get started then we render this section
                                pageName === "gs"
                                ?
                                <div className = 'innerMain'>
                                    <div className = 'navTab'>
                                        <a>
                                            <span>{ webData.splitNav[0].GS.mainTab }</span>
                                        </a>
                                    </div>
                                </div>
                                :
                                null
                            }
                            {   
                                // if the page is API details started then we render this section
                                pageName === 'api'
                                ?
                                <>
                                    {/* main link */}
                                    <div className = 'innerMain'>
                                        <div className = 'navTab'>
                                            <a>
                                                <span>{ webData.splitNav[0].API.mainTab }</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* sublinks */}
                                    <div className = 'navCell'>
                                        <div className = 'navInnerCell'>
                                            <div className = 'navBtn'>
                                                <div className = 'navTab'>
                                                    <img src = { webData.splitNav[0].API.arrowImg } alt = { webData.splitNav[0].API.arrImgAlt }></img>
                                                    <p style = {{ color: "#E77A2B"}} >{ webData.splitNav[0].API.SecTab.first }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                null
                            }
                            {
                                // if the page is features then we render this section
                                pageName === 'features'
                                ?
                                <>
                                    <div className = 'innerMain'>
                                        <div className = 'navTab'>
                                            <a>
                                                <span>{ webData.splitNav[0].FEATURES.mainTab }</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* main link */}
                                    <div className = 'navCell'>
                                        <div className = 'navInnerCell'>
                                            <div className = 'navBtn'>
                                                <div className = 'navTab'>
                                                    {/* Link is used for navigation and it acts like anchor tag */}
                                                    <Link to = { webData.splitNav[0].FEATURES.SecTab.route } >
                                                        <img src = { webData.splitNav[0].FEATURES.arrowImg } alt = { webData.splitNav[0].FEATURES.arrImgAlt }></img>
                                                        <p id = "ptp" className = 'activeapiname'>{ webData.splitNav[0].FEATURES.SecTab.first }</p>
                                                    </Link>
                                                </div>
                                                {/* sublinks */}
                                                <div className = 'apiNames'>
                                                    <ul>
                                                        {
                                                            webData.splitNav[0].FEATURES.secTabList.map(li => (
                                                                <Link to = { li.route } key = { li.li } >
                                                                    <li id = {li.id}> { li.li } </li>
                                                                </Link>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    { activeLink() }
                                </>
                                :
                                null
                            }
                        </div>
                        :
                        null
                    }
                </nav>
            </nav>
        </div>
    );
};

export default SplitNavBarStarted;