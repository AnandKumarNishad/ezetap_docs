import React, { useEffect, useState } from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
import '../css/APIDetails.css'
import axios from 'axios';
import Loading from "../components/Loading";
import Markdown from 'react-markdown';

let data;
let aData;
let wData;

const APIDetails = () => {

    const [ webData, setWebData ] = useState(); 
    const [ apiData, setApiData ] = useState(); 
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

    const getApiData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/md")
        .catch((error) => {
            console.log(error.message);
        });
        aData = result.data;
        if(aData !== undefined)
        {
            setApiData(aData);
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
        getApiData();
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
                            <Markdown children = { apiData } />
                            {
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