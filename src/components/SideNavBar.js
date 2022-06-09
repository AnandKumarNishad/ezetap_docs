import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/sideNavBar.css'
import SplitNavBarStarted from './SplitNavBarStarted';
// import GetStatedSplitNav from './GetStatedSplitNav'; 

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

    let splitNavBar = <></>;

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
            <SplitNavBarStarted />
        </div>
        :
        null
    );
};

export default SideNavBar;