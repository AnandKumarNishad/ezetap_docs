import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/sideNavBar.css'
import SplitNavBarStarted from './SplitNavBarStarted';

let data;
const SideNavBar = () => {

    const [ webData, setWebData ] = useState(); 

    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.mapiDetailsessage);
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

    const navigate = useNavigate();

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

    const activetab = () => {
        let home = document.querySelector('#home');
        let getStarted = document.querySelector('#getStarted');
        let features = document.querySelector('#features');
        let api = document.querySelector('#api');

        // console.log(getStarted);
        // console.log(features);
        // console.log(api);

        if(home !== null ){
            home.classList.add("active");
        }

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
        webData 
        ?
        <div className = 'sideNavBarMainDiv'>
            <nav className = 'sideNavBar'>
                {
                    webData.sideNavbar.map(element => (
                        <div className = 'mainNavBtn' key = { element.type }>
                            <div className = 'navBtns'  onClick = { gotoNavi } id = {element.type} >
                                { activetab() }
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
            </nav>
            <SplitNavBarStarted />
        </div>
        :
        null
    );
};

export default SideNavBar;
