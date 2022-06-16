import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/splitnavbarStarted.css';

let pageName = "";
let data;

const SplitNavBarStarted = () => {

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

    if (document.URL.includes("getStarted")) {
        pageName = 'gs';
    } else if (document.URL.includes("features")) {
        pageName = 'features';
    } else if (document.URL.includes("apiDetails")) {
        pageName = 'api';
    } else {
        pageName = 'home'
    }

    const activeLink = () => {
        let ptp = document.querySelector("#ptp");
        let startapi = document.querySelector("#start");
        let statusapi = document.querySelector("#status");
        let cancelapi = document.querySelector("#cancel");
        console.log(ptp)
        console.log(startapi)
        console.log(statusapi)
        console.log(cancelapi)
        if(startapi !== null && statusapi !== null && cancelapi !== null)
        {
            if( document.URL.includes("startApi")) {
                startapi.classList.add("activeapiname");
                ptp.classList.remove("activeapiname");
                ptp.classList.add("secactive");
            }
            if( document.URL.includes("statusApi")) {
                statusapi.classList.add("activeapiname");
                ptp.classList.remove("activeapiname");
                ptp.classList.add("secactive");
            }
            if( document.URL.includes("cancelApi")) {
                cancelapi.classList.add("activeapiname");
                ptp.classList.remove("activeapiname");
                ptp.classList.add("secactive");
            }
        }
    }


    return (
        pageName === "home"
        ?
        null
        :
        <div className = 'sideSplitNav'>
            <nav className = 'secondNav'>
                <nav className = 'splitnav'>
                    {
                        webData
                        ?
                        <div className='main'>
                            {
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
                                pageName === 'api'
                                ?
                                <>
                                    <div className = 'innerMain'>
                                        <div className = 'navTab'>
                                            <a>
                                                <span>{ webData.splitNav[0].API.mainTab }</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className = 'navCell'>
                                        <div className = 'navInnerCell'>
                                            <div className = 'navBtn'>
                                                <div className = 'navTab'>
                                                    <img src = { webData.splitNav[0].API.arrowImg } alt = { webData.splitNav[0].API.arrImgAlt }></img>
                                                    <p>{ webData.splitNav[0].API.SecTab.first }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                null
                            }
                            {
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

                                    <div className = 'navCell'>
                                        <div className = 'navInnerCell'>
                                            <div className = 'navBtn'>
                                                <div className = 'navTab'>
                                                    <a href = { webData.splitNav[0].FEATURES.SecTab.route } >
                                                        <img src = { webData.splitNav[0].FEATURES.arrowImg } alt = { webData.splitNav[0].FEATURES.arrImgAlt }></img>
                                                        <p id = "ptp" className = 'activeapiname'>{ webData.splitNav[0].FEATURES.SecTab.first }</p>
                                                    </a>
                                                </div>
                                                <div className = 'apiNames'>
                                                    <ul>
                                                        {
                                                            webData.splitNav[0].FEATURES.secTabList.map(li => (
                                                                <a href = { li.route } key = { li.li } >
                                                                    <li id = {li.id}> { li.li } </li>
                                                                </a>
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