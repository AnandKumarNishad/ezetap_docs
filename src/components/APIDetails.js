import React, { useEffect, useState } from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
import '../css/APIDetails.css'
import axios from 'axios';
import Loading from "../components/Loading";

let data;
let wData;

const APIDetails = () => {

    const [ webData, setWebData ] = useState(); 
    const [ paramsData, setParamsData ] = useState(); 

    const getParamsData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/params")
        .catch((error) => {
            console.log(error.mapiDetailsessage);
        });
        data = result.data;
        if(data !== undefined)
        {
            setParamsData(data);
        }
    }


    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.mapiDetailsessage);
        });
        wData = result.data;
        if(wData !== undefined)
        {
            setWebData(wData);
        }
    }

    useEffect(() => {
        getData();
        getParamsData();
    }, []);

    return (
        <div>
            <TopNavBar />
            <div>
                <div>
                    <div>
                        <SideNavBar />
                    </div>
                    <main style={{ marginTop: "20px" }}>
                        <section className = 'pushToPay' id = 'pushToPay' style = {{ padding: "0px 350px" }}>
                            
                            {
                                webData
                                ?
                                <div className = 'titleTop'>
                                    <h2> { webData.APIDetails.title } </h2>
                                    <p>
                                        { webData.APIDetails.titleText }
                                        <span>
                                            <ol>
                                                {
                                                    webData.APIDetails.APITypes.map(listitems => (
                                                        <li>{listitems.li}</li>
                                                    ))
                                                }
                                            </ol>
                                        </span>
                                        
                                        { webData.APIDetails.note }
                                        {<br/>}
                                        { webData.APIDetails.preprep }

                                        <span>
                                            <ol>
                                                { 
                                                    webData.APIDetails.preprepSteps.map(listitems => (
                                                        <li>{ listitems.li }</li>
                                                    )) 
                                                }
                                            </ol>
                                        </span>
                                        { webData.APIDetails.testText }
                                    </p>
                                    <div>
                                        <h3>{ webData.APIDetails.type1.heading }</h3>
                                        <p>{ webData.APIDetails.type1.type1Text }</p>
                                        <h4>{ webData.APIDetails.type1.innerTitle }</h4>
                                        <ul>
                                            {
                                                webData.APIDetails.type1.innerURLs.map(listitems => (
                                                    <li>{ listitems.li }</li>
                                                ))
                                            }
                                        </ul>
                                        <h4>{ webData.APIDetails.type1.tableTitle }</h4>
                                        <div className = 'dataGrid' style = {{ width: "100%" }}>
                                            <table>
                                                <tr>
                                                    <th style = {{ width: "220px" }}>Parameter</th>
                                                    <th style = {{ width: "300px" }}>Datatype</th>
                                                    <th>Description</th>
                                                </tr>
                                                {
                                                    paramsData
                                                    ?
                                                    paramsData.params.map(val => {
                                                        return (
                                                            <tr>
                                                                <td>{ val.Parameter }</td>
                                                                <td>{ val.Datatype }</td>
                                                                <td>{ val.Description }</td>
                                                            </tr>
                                                        )
                                                    })
                                                    :
                                                    <Loading />
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
                </div>
            </div>
        </div>
    );
};

export default APIDetails;