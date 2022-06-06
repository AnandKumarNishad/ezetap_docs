import React, { useEffect, useState } from 'react';
import '../css/TopNavBar.css';
import '../App.css';
import axios from 'axios';

let data;
const TopNavBar = () => {

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
    
    return (
            webData 
            ?
            <nav className = 'navbar'>
                <div className = 'mainDiv'>
                    <div className = 'logoDiv'>
                        <div className = 'logoMainDiv'>
                            <a href = '/'>
                                <div className = 'innerLogoDiv'>
                                    <img src = { webData.topNavbar[0].logoURL } alt = { webData.topNavbar[0].logoURLAlt } width = '130px' height = '55px'/>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div className = 'searchBarAndLinksDiv'>
                        <div className = 'searchbar'>
                            <input placeholder = { webData.topNavbar[1].searchBarPLaceholder } disabled className = 'inputField'></input>
                            <img src = { webData.topNavbar[1].searchIcon } alt = { webData.topNavbar[1].searchIconAlt } className = 'searchIcon'></img>
                            <img src = { webData.topNavbar[1].infoIcon } alt = { webData.topNavbar[1].infoIconAlt } className = 'infoIcon'></img>
                        </div>
    
                        <div className = 'buttonsMainDiv'>
                            <div className = ' buttonsInnerDiv'>
                                <div className = 'buttonDiv'>
                                    <a>
                                        <p> 
                                            { webData.topNavbar[2].firstBtnText } 
                                        </p>
                                    </a>
                                </div>
    
                                <div className = 'buttonDiv'>
                                    <a>
                                        <button>
                                            <p>
                                                { webData.topNavbar[2].secondBtnText }
                                            </p>
                                        </button>
                                    </a>
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