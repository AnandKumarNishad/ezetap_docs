import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/sideNavBar.css'
import SplitNavBarStarted from './SplitNavBarStarted';

const SideNavBar = () => {
    useNavigate();
    const [ webData, setWebData ] = useState(); 
    
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

    // function to find the active tab using the URL and id of the nav button
    const activetab = () => {
        let home = document.querySelector('#home');
        // let getStarted = document.querySelector('#getStarted');
        let features = document.querySelector('#features');
        let api = document.querySelector('#api');

        if(home !== null ){
            home.classList.add("active");
            // getStarted.classList.remove("active");
            features.classList.remove("active");
            api.classList.remove("active");
        }

        // assigning the active css class to the active nav button
        if(features !== null && api !== null )
        {
            if( document.URL.includes("getStarted") ) {
                home.classList.remove("active");
                // getStarted.classList.add("active");
                features.classList.remove("active");
                api.classList.remove("active");
            }
            if( document.URL.includes("features") ) {
                home.classList.remove("active");
                // getStarted.classList.remove("active");
                features.classList.add("active");
                api.classList.remove("active");
            } 
            if( document.URL.includes("apiDetails") ) {
                home.classList.remove("active");
                // getStarted.classList.remove("active");
                features.classList.remove("active");
                api.classList.add("active");
            }
        }
    }

    return (
        // rendering only if there is data in webData else loading screen is shown
        webData 
        ?
        <div className = 'sideNavBarMainDiv'>
            <nav className = 'sideNavBar'>
                {
                    webData.sideNavbar.map(element => (
                        <div className = 'mainNavBtn' key = { element.type }>
                            <div className = { element.class } id = {element.type} >
                                <Link to = { element.route }>
                                    <span className = 'navoption'>
                                        <img className = { element.iconAlt } src = { element.icon } alt ={ element.iconAlt } ></img>
                                    </span>
                                    <span className = 'navText'>
                                        { element.text }
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                {/* calling the function to check active tab */}
                { activetab() }
            </nav>

            {/* rendering the split navbar */}
            <SplitNavBarStarted />
        </div>
        :
        null
    );
};

export default SideNavBar;