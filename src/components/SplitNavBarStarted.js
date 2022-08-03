import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import { Link, NavLink } from 'react-router-dom';
import '../css/splitnavbarStarted.css';

const SplitNavBarStarted = () => {
    const [ webData, setWebData ] = useState(); 
    
    let pageName = "";
    let data;

    // getting the data from the api
    const getData = async () => {
        const result = await axios.get("http://localhost:1337/api/webdatas")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data.data[0].attributes.data.data;
        if(data !== undefined)
        {
            // assigning it to webData in useState
            setWebData(data);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
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
                                <>
                                    <div className = 'innerMain'>
                                        <div className = 'navTab'>
                                            {
                                                webData.splitNav[0].GS.mainTab.map(title => (
                                                    <Link to = '/getStarted' key = { title.title }>
                                                        <span>{ title.title }</span>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    {/* main link */}
                                    {/* <div className = 'navCell'>
                                        <div className = 'navInnerCell'>
                                            <div className = 'navBtn'>
                                                <div className = 'navTab'> */}
                                                    {/* Link is used for navigation and it acts like anchor tag */}
                                                    {/* <Link to = { webData.splitNav[0].GS.SecTab.route } >
                                                        <img src = { webData.splitNav[0].GS.arrowImg } alt = { webData.splitNav[0].GS.arrImgAlt }></img>
                                                        <p id = "ptp" className = 'activeapiname'>{ webData.splitNav[0].GS.SecTab.first }</p>
                                                    </Link> */}
                                                {/* </div> */}
                                                {/* sublinks */}
                                                {/* <div className = 'apiNames'>
                                                    <ul>
                                                        {
                                                            webData.splitNav[0].GS.secTabList.map(li => (
                                                                <Link to = { li.route } key = { li.li } >
                                                                    <li id = {li.id}> { li.li } </li>
                                                                </Link>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </>
                                :
                                null
                            }
                            {   
                                // if the page is API details started then we render this section
                                pageName === 'api'
                                ?
                                webData
                                ?
                                <div>
                                    <div className = 'headUl'>
                                        <ul className = 'mainUl'>
                                            {
                                                webData.splitNav[0].API.map(heading => (
                                                    <li key = { heading.title }>
                                                        <div>
                                                            <div>
                                                                <NavLink to = { webData.splitNav[0].API[0].SecTab[0].route } className = {({ isActive }) => isActive ? "activeheadlink headlink" : "activeheadlink headlink" }>
                                                                    <p>{ heading.title }</p>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                        <ul className = 'subUl'>
                                                            {
                                                                heading.SecTab.map(sechead => (
                                                                <li key = { sechead.first } id = { sechead.headid }>
                                                                    {
                                                                        sechead.headid === 'p2p'
                                                                        ?
                                                                        <div>
                                                                        <Collapsible trigger = { 
                                                                            <div>
                                                                                <div className = "activesublink sublink">
                                                                                    { <img src = { heading.arrowImg } alt = { heading.arrImgAlt }></img> }
                                                                                    <p>{ sechead.first }</p>
                                                                                </div>
                                                                            </div>
                                                                        } open>
                                                                            <ul className = 'subsubUl'>
                                                                                {
                                                                                    sechead.secTabList.map(apilist =>(
                                                                                        <li key = { apilist.id }>
                                                                                            <div>
                                                                                                <div className = 'conten'>
                                                                                                    <NavLink to =  { apilist.route } className = {({ isActive }) => isActive ? "activesubsublink subsublink" : "subsublink"}>
                                                                                                        <p>{ apilist.li }</p>
                                                                                                    </NavLink>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </Collapsible>
                                                                    </div>
                                                                    :
                                                                    sechead.headid === 'error'
                                                                        ?
                                                                        <div>
                                                                            <Collapsible trigger = { 
                                                                                <div>
                                                                                    <NavLink to = { sechead.route } className = {({ isActive }) => isActive ? "activesublink sublink":  "activesublink sublink"}>
                                                                                        { <img src = { heading.arrowImg } alt = { heading.arrImgAlt }></img> }
                                                                                        <p>{ sechead.first }</p>
                                                                                    </NavLink>
                                                                                </div>
                                                                            }>
                                                                                <ul className = 'subsubUl'>
                                                                                    {
                                                                                        sechead.secTabList.map(apilist =>(
                                                                                            <li key = { apilist.id }>
                                                                                                <div>
                                                                                                    <div className = 'conten'>
                                                                                                        <NavLink to =  { apilist.route } className = {({ isActive }) => isActive ? "activesubsublink subsublink" : "subsublink"}>
                                                                                                            <p>{ apilist.li }</p>
                                                                                                        </NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        ))
                                                                                    }
                                                                                </ul>
                                                                            </Collapsible>
                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            <Collapsible trigger = { 
                                                                                <div>
                                                                                    <div className = "activesublink sublink">
                                                                                        { <img src = { heading.arrowImg } alt = { heading.arrImgAlt }></img> }
                                                                                        <p>{ sechead.first }</p>
                                                                                    </div>
                                                                                </div>
                                                                            }>
                                                                                <ul className = 'subsubUl'>
                                                                                    {
                                                                                        sechead.secTabList.map(apilist =>(
                                                                                            <li key = { apilist.id }>
                                                                                                <div>
                                                                                                    <div className = 'conten'>
                                                                                                        <NavLink to =  { apilist.route } className = {({ isActive }) => isActive ? "activesubsublink subsublink" : "subsublink"}>
                                                                                                            <p>{ apilist.li }</p>
                                                                                                        </NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        ))
                                                                                    }
                                                                                </ul>
                                                                            </Collapsible>
                                                                        </div>
                                                                    }
                                                                </li>
                                                                )) 
                                                            }
                                                        </ul>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                :
                                null
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
                                            {
                                                webData.splitNav[0].FEATURES.mainTab.map(title => (
                                                    <Link to = '/features' key = { title.title }>
                                                        <span>{ title.title }</span>
                                                    </Link>
                                                ))
                                            }   
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
                                                {/* <div className = 'navTab'>
                                                    <Link to = '/features' >
                                                        <img src = { webData.splitNav[0].API.arrowImg } alt = { webData.splitNav[0].API.arrImgAlt }></img>
                                                        <p id = "ptp" className = 'activeapiname'>Pull to Pay</p>
                                                    </Link>
                                                </div>

                                                <div className = 'navTab'>
                                                    <Link to = '/features' >
                                                        <img src = { webData.splitNav[0].API.arrowImg } alt = { webData.splitNav[0].API.arrImgAlt }></img>
                                                        <p id = "ptp" className = 'activeapiname'>Tap to Pay</p>
                                                    </Link>
                                                </div> */}
                                                {/* sublinks */}
                                                {/* <div className = 'apiNames'>
                                                    <ul>
                                                        {
                                                            webData.splitNav[0].FEATURES.secTabList.map(li => (
                                                                <Link to = { li.route } key = { li.li } >
                                                                    <li id = {li.id}> { li.li } </li>
                                                                </Link>
                                                            ))
                                                        }
                                                    </ul>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
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