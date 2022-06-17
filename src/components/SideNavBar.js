import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/sideNavBar.css'
import SplitNavBarStarted from './SplitNavBarStarted';

const SideNavBar = () => {
    const navigate = useNavigate();
    const [ webData, setWebData ] = useState(); 
    
    let data;

    // getting the data from the api
    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.mapiDetailsessage);
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

    // function for navigation from one page to another
    const gotoNavi = (e) => {
        const tab = e.target.id;
        if(tab === "home") {
            navigate("/");
        } else if(tab === "getStarted") {
            navigate("/getStarted");
        } else if(tab === "features") {
            navigate("/features");
        } else if(tab === "api") {
            navigate("/apiDetails");
        }
    }

    // function to find the active tab using the URL and id of the nav button
    const activetab = () => {
        let home = document.querySelector('#home');
        let getStarted = document.querySelector('#getStarted');
        let features = document.querySelector('#features');
        let api = document.querySelector('#api');

        if(home !== null ){
            home.classList.add("active");
        }

        // assigning the active css class to the active nav button
        if(getStarted !== null && features !== null && api !== null )
        {
            if( document.URL.includes("getStarted") ) {
                getStarted.classList.add("active");
                home.classList.remove("active");
            }
            if( document.URL.includes("features") ) {
                features.classList.add("active");
                home.classList.remove("active");
            } 
            if( document.URL.includes("apiDetails") ) {
                api.classList.add("active");
                home.classList.remove("active");
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
                            <div className = 'navBtns'  onClick = { gotoNavi } id = {element.type} >
                                <a>
                                    <span className = 'navoption'>
                                        <img className = { element.iconAlt } src = { element.icon } alt ={ element.iconAlt } ></img>
                                    </span>
                                    <span className = 'navText'>
                                        { element.text }
                                    </span>
                                </a>
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