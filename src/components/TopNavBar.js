import React, { useEffect, useState } from 'react';
import '../css/TopNavBar.css';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopNavBar = () => {
    const [ webData, setWebData ] = useState(); 
    
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
        // eslint-disable-next-line
    }, []);
    
    return (
            // rendering only if there is data in webData
            webData 
            ?
            <nav className = 'navbar'>
                {/* rendering logo */}
                <div className = 'mainDiv'>
                    <div className = 'logoDiv'>
                        <div className = 'logoMainDiv'>
                            <Link to = '/'>
                                <div className = 'innerLogoDiv'>
                                {/* { webData.topNavbar[0].logoURL } */}
                                    <img src = { webData.topNavbar[0].logoURL } alt = { webData.topNavbar[0].logoURLAlt } width = '130px' height = '55px'/>
                                </div>
                            </Link>
                        </div>
                    </div>
    
                    {/* rendering searchbar */}
                    <div className = 'searchBarAndLinksDiv'>
                        <div className = 'searchbar'>
                            <input placeholder = { webData.topNavbar[1].searchBarPLaceholder } disabled className = 'inputField'></input>
                            <img src = { webData.topNavbar[1].searchIcon } alt = { webData.topNavbar[1].searchIconAlt } className = 'searchIcon'></img>
                            <img src = { webData.topNavbar[1].infoIcon } alt = { webData.topNavbar[1].infoIconAlt } className = 'infoIcon'></img>
                        </div>
    
                        {/* rendering buttons */}
                        <div className = 'buttonsMainDiv'>
                            <div className = ' buttonsInnerDiv'>
                                <div className = 'buttonDiv'>
                                    {/* eslint-disable-next-line  */}
                                    <Link to = '' >
                                        <p> 
                                            { webData.topNavbar[2].firstBtnText } 
                                        </p>
                                    </Link>
                                </div>
    
                                <div className = 'buttonDiv'>
                                {/* eslint-disable-next-line  */}
                                    <Link to = ''>
                                        <button>
                                            <p>
                                                { webData.topNavbar[2].secondBtnText }
                                            </p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            :
            null
    );
};

export default TopNavBar;