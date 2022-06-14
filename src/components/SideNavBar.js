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
        if(tab === "Home") {
            navigate("/");
        } else if(tab === "GetStarted") {
            navigate("/getStarted");
        } else if(tab === "Features") {
            navigate("/features");
        } else if(tab === "API") {
            navigate("/apiDetails");
        }
    }

    const activetab = () => {
        let GetStarted = document.querySelector('#GetStarted');
        let Features = document.querySelector('#Features');
        let API = document.querySelector('#API');

        // console.log(GetStarted);
        // console.log(Features);
        // console.log(API);

        if(GetStarted !== null && Features !== null && API !== null )
        {
            if( document.URL.includes("getStarted") ) {
                GetStarted.classList.add("active");
            }
            if( document.URL.includes("features") ) {
                Features.classList.add("active");
            } 
            if( document.URL.includes("apiDetails") ) {
                API.classList.add("active");
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
