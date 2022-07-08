import React, { useEffect, useState } from 'react';
import '../css/APIDetails.css'
import '../css/orangeStartTheme.css';
import axios from 'axios';
import Loading from "../components/Loading";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import CurlReq from './CurlReq';
import RightInPageNavi from './RightInPageNavi';
import ReactMarkdown from 'react-markdown';

const APIDetails = () => {
    const [ webData, setWebData ] = useState(); 
    const [ apiData, setApiData ] = useState(); 
    const [ paramsData, setParamsData ] = useState();
    const [ startApiData, setStartApi ] = useState(); 
    const [ statusApiData, setStatusApi ] = useState(); 
    const [ cancelApiData, setCancelApi ] = useState(); 
    
    let data;
    let aData;
    let wData;
    let startData;
    let statusData;
    let cancelData;

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

    // getting the start Api md file data from the api
    const getStartApiData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/startapi")
        .catch((error) => {
            console.log(error.message);
        });
        startData = result.data;
        if(startData !== undefined)
        {
            // assigning it to startData in useState
            setStartApi(startData);
        }
    }

    // getting the start Api md file data from the api
    const getStatusApiData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/statusapi")
        .catch((error) => {
            console.log(error.message);
        });
        statusData = result.data;
        if(statusData !== undefined)
        {
            // assigning it to statusData in useState
            setStatusApi(statusData);
        }
    }

    // getting the start Api md file data from the api
    const getCancelApiData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/cancelapi")
        .catch((error) => {
            console.log(error.message);
        });
        cancelData = result.data;
        if(cancelData !== undefined)
        {
            // assigning it to cancelData in useState
            setCancelApi(cancelData);
        }
    }

    useEffect(() => {
        getData();
        getApiData();
        getParamsData();
        getStartApiData();
        getStatusApiData();
        getCancelApiData();
        // eslint-disable-next-line
    }, []);

    const segments = document.URL.split('/');
    const last = segments.pop() || segments.pop();

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
                        {
                            last === 'apiDetails'
                            ?
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
                            :
                            null
                        }
                        {
                            last === 'startApi'
                            ?
                            <section className = 'startapi' id = 'startapi' style = {{ padding: "0px 0 0 350px" }}>
                                <div>
                                    <ReactMarkdown className = 'markdown' children = { startApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                                    <div className = 'url'>
                                        <div className = 'ib'>/startApi</div>
                                    </div>
                                    <CurlReq />
                                </div>
                                <RightInPageNavi />
                            </section>
                            :
                            null
                        }
                        {
                            last === 'statusApi'
                            ?
                            <section className = 'statusapi' id = 'statusapi' style = {{ padding: "0px 0 0 350px" }}>
                                <div>
                                    <ReactMarkdown className = 'markdown' children = { statusApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                                    <div className = 'url'>
                                        <div className = 'ib'>/statusApi</div>
                                    </div>
                                    <CurlReq />
                                </div>
                                <RightInPageNavi />
                            </section>
                            :
                            null
                        }
                        {
                            last === 'cancelApi'
                            ?
                            <section className = 'cancelapi' id = 'cancelapi' style = {{ padding: "0px 0 0 350px" }}>
                                <div>
                                    <ReactMarkdown className = 'markdown' children = { cancelApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                                    <div className = 'url'>
                                         <div className = 'ib'>/cancelApi</div>
                                     </div>
                                     <CurlReq />
                                </div>
                                <RightInPageNavi />
                            </section>
                            :
                            null
                        }
                    </main>
                {/* </div> */}
            {/* </div> */}
        </div>
    );
};

export default APIDetails;