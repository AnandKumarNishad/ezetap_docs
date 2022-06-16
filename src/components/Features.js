import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
// import Markdown from 'react-markdown';
// import reactMarkdown from 'react-markdown';
import Loading from './Loading';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import '../css/features.css';
import ReactMarkdown from 'react-markdown';
// import StartApi from './StartApi';
// import StatusApi from './StatusApi';
// import CancelApi from './CancelApi';

let data;
let startData;
let statusData;
let cancelData;
let pageName;

const Features = () => {

    const [ webData, setWebData ] = useState(); 

    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/featuresmd")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data;
        if(data !== undefined)
        {
            setWebData(data);
        }
    }


    const [ startApiData, setStartApi ] = useState(); 

    const getStartApiData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/startapi")
        .catch((error) => {
            console.log(error.message);
        });
        startData = result.data;
        if(startData !== undefined)
        {
            setStartApi(startData);
        }
    }

    useEffect(() => {
        getData();
        getStartApiData();
    }, []);

    if (document.URL.includes("features")) {
        pageName = 'main';
    } else if (document.URL.includes("startApi")) {
        pageName = 'startapi';
    } else if (document.URL.includes("statusApi")) {
        pageName = 'statusapi';
    } else if (document.URL.includes("cancelApi")) {
        pageName = 'cancelapi';
    }

    return (
        <>
            {
                webData
                ?
                <div>
                    <TopNavBar />
                    <div>
                        <div>
                            <div>
                                <SideNavBar />
                            </div>
                            <main style={{ textAlign: "left" }}>
                                {
                                    pageName === 'main'
                                    ?
                                    <section className = 'pushToPay' id = 'pushToPay' style = {{ padding: "0px 350px" }}>
                                        <ReactMarkdown className = 'markdown' children = { webData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } components = {{ td: ({node, ...props}) => <td style = {{textAlign: 'left'}} {...props} /> }}/>
                                    </section>
                                    :
                                    null
                                }
                                {
                                    pageName === 'main'
                                    ?
                                    <section className = 'startapi' id = 'startapi' style = {{ padding: "0px 350px" }}>
                                        {/* <ReactMarkdown className = 'markdown' children = { startApiData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] } components = {{ td: ({node, ...props}) => <td style = {{textAlign: 'left'}} {...props} /> }}/> */}
                                        <StartApi />
                                    </section>
                                    :
                                    null
                                }
                                {
                                    pageName === 'statusapi'
                                    ?
                                    <section className = 'statusapi' id = 'statusapi' style = {{ padding: "0px 350px" }}>
                                       <StatusApi />
                                    </section>
                                    :
                                    null
                                }
                                {
                                    pageName === 'cancelapi'
                                    ?
                                    <section className = 'cancelapi' id = 'cancelapi' style = {{ padding: "0px 350px" }}>
                                        <CancelApi />
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