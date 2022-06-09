import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/sideNavBar.css'

let data;

const HomeSideNav = () => {

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

    return (
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
            </nav>
        </div>
        :
        null
    );
};

export default HomeSideNav;