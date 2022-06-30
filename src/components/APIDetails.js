import React, { useEffect, useState } from 'react';
import '../css/APIDetails.css'
import '../css/orangeStartTheme.css';
import axios from 'axios';
import Loading from "../components/Loading";
import Markdown from 'react-markdown';

const APIDetails = () => {
    const [ webData, setWebData ] = useState(); 
    const [ apiData, setApiData ] = useState(); 
    const [ paramsData, setParamsData ] = useState(); 
    
    let data;
    let aData;
    let wData;

    // getting the parameter table data from the api
    const getParamsData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/params")
        .catch((error) => {
            console.log(error.mapiDetailsessage);
        });
        data = result.data;
        if(data !== undefined)
        {
            // assigning it to data in useState
            setParamsData(data);
        }
    }

    // getting the md file data from the api 
    const getApiData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/md")
        .catch((error) => {
            console.log(error.message);
        });
        aData = result.data;
        if(aData !== undefined)
        {
            // assigning it to aData in useState
            setApiData(aData);
        }
    }

    // getting the data from the api
    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.mapiDetailsessage);
        });
        wData = result.data;
        if(wData !== undefined)
        {
            // assigning it to wData in useState
            setWebData(wData);
        }
    }

    useEffect(() => {
        getData();
        getApiData();
        getParamsData();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {/* rendering the topnavbar */}
            {/* <TopNavBar /> */}
            {/* <div> */}
                {/* <div> */}
                    {/* <div> */}
                        {/* rendering the sidenavbar */}
                        {/* <SideNavBar /> */}
                    {/* </div> */}
                    <main style={{ marginTop: "20px" }}>
                        <section className = 'pushToPay' style = {{ padding: "0px 350px" }}>
                            {/* rendering the data of a md file */}
                            <Markdown children = { apiData } />
                            {
                                // rendering only if there is data in webData else loading screen is shown
                                webData
                                ?
                                <div className = 'titleTop'>
                                    <div>
                                        <h4>{ webData.tableTitle }</h4>
                                        <div className = 'dataGrid' style = {{ width: "100%" }}>
                                            <table>
                                                <thead>
                                                    <tr key = "heading">
                                                        <th style = {{ width: "220px" }}>Parameter</th>
                                                        <th style = {{ width: "300px" }}>Datatype</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                {
                                                    // rendering the table only if there is data in paramData else loading screen is shown
                                                    paramsData
                                                    ?
                                                    paramsData.params.map(val => {
                                                        return (
                                                            <tbody key = { val.parameter }>
                                                                <tr>
                                                                    <td>{ val.parameter }</td>
                                                                    <td>{ val.datatype }</td>
                                                                    <td>{ val.description }</td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })
                                                    :
                                                    null
                                                }
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                :
                                <Loading />
                            }
                        </section>
                    </main>
                {/* </div> */}
            {/* </div> */}
        </div>
    );
};

export default APIDetails;