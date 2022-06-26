import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
import Loading from './Loading';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import '../css/features.css';
import ReactMarkdown from 'react-markdown';
import CurlReq from './CurlReq';


const Features = () => {
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
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/featuresmd")
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
    }, []);

    // getting the last segment from the url
    const segments = document.URL.split('/');
    const last = segments.pop() || segments.pop();

    return (
        <>
            {
                // rendering only if there is data in webData else loading screen is shown
                webData
                ?
                <div>
                    {/* rendering topnavbar component */}
                    <TopNavBar />
                    <div>
                        <div>
                            <div>
                                {/* rendering sidenavbar component */}
                                <SideNavBar />
                            </div>
                            <main style={{ textAlign: "left" }}>
                                {/* rendering the data based on the active page from the split navbar */}
                                {
                                    last === 'features'
                                    ?
                                    <section className = 'pushToPay' id = 'pushToPay' style = {{ padding: "0px 350px" }}>
                                        <ReactMarkdown className = 'markdown' children = { webData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                                    </section>
                                    :
                                    null
                                }
                                {
                                    last === 'startApi'
                                    ?
                                    <section className = 'startapi' id = 'startapi' style = {{ padding: "0px 350px" }}>
                                        <ReactMarkdown className = 'markdown' children = { startApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                                        <div className = 'url'>
                                            <div className = 'ib'>/startApi</div>
                                        </div>
                                        <CurlReq />
                                    </section>
                                    :
                                    null
                                }
                                {
                                    last === 'statusApi'
                                    ?
                                    <section className = 'statusapi' id = 'statusapi' style = {{ padding: "0px 350px" }}>
                                        <ReactMarkdown className = 'markdown' children = { statusApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                                        <div className = 'url'>
                                            <div className = 'ib'>/statusApi</div>
                                        </div>
                                        <CurlReq />
                                    </section>
                                    :
                                    null
                                }
                                {
                                    last === 'cancelApi'
                                    ?
                                    <section className = 'cancelapi' id = 'cancelapi' style = {{ padding: "0px 350px" }}>
                                       <ReactMarkdown className = 'markdown' children = { cancelApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } />
                                       <div className = 'url'>
                                            <div className = 'ib'>/cancelApi</div>
                                        </div>
                                        <CurlReq />
                                    </section>
                                    :
                                    null
                                }
                            </main>
                        </div>
                    </div>
                </div>
                :
                <Loading />
            }
        </>
    );
};

export default Features;