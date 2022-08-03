import React, { useEffect, useState } from 'react';
import '../css/APIDetails.css'
import '../css/orangeStartTheme.css';
import "../css/rightInPageNavi.css";
import '../css/statusCurlReq.css';
import axios from 'axios';
import Loading from "../components/Loading";
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import CurlReq from './CurlReq';
import ReactMarkdown from 'react-markdown';

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
        const result = await axios.get("http://localhost:1337/api/webdatas")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data;
        if(data !== undefined)
        {
            // assigning it to data in useState
            setWebData(data.data[0].attributes.data.data);
        }
    }

    // getting the start Api md file data from the api
    const getStartApiData = async () => {
        const result = await axios.get("http://localhost:1337/api/api-details")
        .catch((error) => {
            console.log(error.message);
        });
        startData = result.data.data[0].attributes.startApi;
        if(startData !== undefined)
        {
            // assigning it to startData in useState
            setStartApi(startData);
        }
    }

    // getting the start Api md file data from the api
    const getStatusApiData = async () => {
        const result = await axios.get("http://localhost:1337/api/api-details")
        .catch((error) => {
            console.log(error.message);
        });
        statusData = result.data.data[0].attributes.statusApi;
        if(statusData !== undefined)
        {
            // assigning it to statusData in useState
            setStatusApi(statusData);
        }
    }

    // getting the start Api md file data from the api
    const getCancelApiData = async () => {
        const result = await axios.get("http://localhost:1337/api/api-details")
        .catch((error) => {
            console.log(error.message);
        });
        cancelData = result.data.data[0].attributes.cancelApi;
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
                        last === 'createApi'
                        ?
                        <section className = 'startapi' id = 'startapi' style = {{ padding: "0px 0 0 315px" }}>
                            <div className = 'maincurl'>
                                <ReactMarkdown className = 'markdown stmark' children = { startApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                            </div>
                            <div className = 'urlCurlSec'>
                                <div className = 'url1'>
                                    <div className = 'ib'>/startApi</div>
                                </div>
                                <CurlReq />
                            </div>
                        </section>
                        :
                        null
                    }
                    {
                        last === 'updateApi'
                        ?
                        <section className = 'statusapi' id = 'statusapi' style = {{ padding: "0px 0 0 315px" }}>
                            <div className = 'maincurl'>
                                <ReactMarkdown className = 'markdown stmark' children = { statusApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                            </div>
                            <div className = 'urlCurlSec'>
                                <div className = 'url1'>
                                    <div className = 'ib'>/statusApi</div>
                                </div>
                                <CurlReq />
                            </div>
                        </section>
                        :
                        null
                    }
                    {
                        last === 'fetchApi'
                        ?
                        <section className = 'cancelapi' id = 'cancelapi' style = {{ padding: "0px 0 0 315px" }}>
                            <div className = 'maincurl'>
                                <ReactMarkdown className = 'markdown stmark' children = { cancelApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                            </div>
                            <div className = 'urlCurlSec'>
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