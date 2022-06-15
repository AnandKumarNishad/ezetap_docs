import React, { useState } from 'react';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import Loading from './Loading';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
import { useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

let data;

const StartApi = () => {

    const [ webData, setWebData ] = useState(); 

    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/startapi")
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
                                <section className = 'startapi' id = 'startapi' style = {{ padding: "0px 350px" }}>
                                    <ReactMarkdown rehypePlugins = {[rehypeRaw]} remarkPlugins = { [remarkGfm] } className = 'markdown' children = { webData } />
                                </section>
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

export default StartApi;