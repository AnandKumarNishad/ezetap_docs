import React, { useEffect, useState } from 'react';
import '../css/APIDetails.css'
import '../css/orangeStartTheme.css';
import axios from 'axios';
import Loading from "../components/Loading";
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import CurlReq from './CurlReq';
import RightInPageNavi from './RightInPageNavi';
import ReactMarkdown from 'react-markdown';
import StatusCurlReq from './StatusCurlReq';

const APIDetails = () => {
    const [ webData, setWebData ] = useState();
    const [ startApiData, setStartApi ] = useState(); 
    const [ statusApiData, setStatusApi ] = useState(); 
    const [ cancelApiData, setCancelApi ] = useState(); 
    
    let data;
    let startData;
    let statusData;
    let cancelData;

    // getting the features md file data from the api
    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data;
        if(data !== undefined)
        {
            // assigning it to data in useState
            setWebData(data);
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
        getStartApiData();
        getStatusApiData();
        getCancelApiData();
        // eslint-disable-next-line
    }, []);

    const segments = document.URL.split('/');
    const last = segments.pop() || segments.pop();

    return (
        <div>
            {
                webData
                ?
                <main>
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
                        <section className = 'statusapi' id = 'statusapi' style = {{ padding: "0px 0 0 315px" }}>
                            <div className = 'maincurl'>
                                <ReactMarkdown className = 'markdown stmark' children = { statusApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                            </div>
                            <div className = 'urlCurlSec'>
                                <div className = 'url1'>
                                    <div className = 'ib'>/statusApi</div>
                                </div>
                                <StatusCurlReq />
                            </div>
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
                        </section>
                        :
                        null
                    } 
                </main>
                :
                <Loading />
            }
        </div>
    );
};

export default APIDetails;