import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/curlReq.css';

const CurlReq = () => {

    const [ webData, setWebData ] = useState(); 
    const [toggle, setToggle] = useState('1');
    
    let data;
    
    const segments = document.URL.split('/');
    const last = segments.pop() || segments.pop();
    
    // getting the data from the api
    const getData = async () => {
        if(last === 'startApi') {
            const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/startcurl")
            .catch((error) => {
                console.log(error.message);
            });
            data = result.data;
        }

        if(last === 'statusApi') {
            const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/statuscurl")
            .catch((error) => {
                console.log(error.message);
            });
            data = result.data;
        }

        if(last === 'cancelApi') {
            const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/cancelcurl")
            .catch((error) => {
                console.log(error.message);
            });
            data = result.data;
        }

        if(data !== undefined)
        {
            // assigning it to webData in useState
            setWebData(data);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <section>
            <div className = 'main-container'>
                <aside>
                    <pre className = 'codeblock has-label'>
                        <div className = 'code-labels bloc-tabs'>
                            {
                                webData
                                ?
                                webData.curldata.buttons.map(btn => (
                                    <button className = { toggle === btn.index ? 'tabs active-tab' : 'tabs' } onClick = { () => toggleTab(btn.index) }>
                                        { btn.text }
                                    </button>
                                ))
                                :
                                null
                            }
                        </div>

                        <div className = 'code-container content-tabs'>
                            <button className = 'copy-btn'>Copy</button>
                            {
                                webData
                                ?
                                webData.curldata.code.map(codeblock => (
                                   <code className = { toggle === codeblock.index ? 'content active-content' : 'content' }>
                                        { codeblock.language }
                                        <div dangerouslySetInnerHTML = {{ __html: codeblock.html }}></div>
                                    </code> 
                                ))
                                :
                                null
                            }
                        </div>
                    </pre>
                </aside>
            </div>
        </section>
    );
};

export default CurlReq;