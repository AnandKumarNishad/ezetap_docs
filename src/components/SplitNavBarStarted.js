import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/splitnavbarStarted.css'

let pageName;
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
        pageName = 'GS';
    } else if (document.URL.includes("apiDetails")) {
        pageName = 'API';
    }

    return (
        
        <div className = 'sideSplitNav'>
            <nav className = 'secondNav'>
                <nav className = 'splitnav'>
                    {
                        webData
                        ?
                        <div className='main'>
                            {
                                pageName === "GS"
                                ?
                                <div className = 'innerMain'>
                                    <div className = 'navTab'>
                                        <a>
                                            <span>{ webData.splitNav[0].GS.mainTab }</span>
                                        </a>
                                    </div>
                                </div>
                                :
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
                                                    <img src = { webData.splitNav[0].API.arrowImg }></img>
                                                    <p>{ webData.splitNav[0].API.SecTab.first }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
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