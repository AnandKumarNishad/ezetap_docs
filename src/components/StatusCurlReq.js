import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/statusCurlReq.css';
import '../css/orangeStartTheme.css';
import ReactJson from 'react-json-view';

const StatusCurlReq = () => {

    const [ webData, setWebData ] = useState(); 
    const [toggle, setToggle] = useState('1');
    
    let data;
    
    const segments = document.URL.split('/');
    const last = segments.pop() || segments.pop();
    
    // getting the data from the api
    const getData = async () => {

        if(last === 'statusApi') {
            const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com/statuscurl")
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
        // eslint-disable-next-line
    }, []);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <section id = "curl">
            <div className = 'main-container1'>
                <aside className = 'stmain-box'>
                    <pre className = 'codeblock1 has-label1'>
                        <div className = 'code-labels1 bloc-tabs1'>
                            {
                                webData
                                ?
                                webData.curldata.buttons.map(btn => (
                                    <button key = { btn.text } className = { toggle === btn.index ? 'tabs1 active-tab1' : 'tabs1' } onClick = { () => toggleTab(btn.index) }>
                                        { btn.text }
                                    </button>
                                ))
                                :
                                null
                            }
                        </div>

                        <div className = 'code-container1 content-tabs1'>
                            <button className = 'copy-btn1'>Copy</button>
                            {
                                webData
                                ?
                                webData.curldata.code.map(codeblock => (
                                   <code key = { codeblock.language } className = { toggle === codeblock.index ? 'content1 active-content1' : 'content1' }>
                                        { codeblock.language }
                                        <div dangerouslySetInnerHTML = {{ __html: codeblock.html }}></div>
                                        <ReactJson src = { codeblock.json } name = { false } displayDataTypes = { false } displayObjectSize = { false } onEdit = {false} onDelete = { false } onAdd = { false } theme = 'bespin'/>
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

export default StatusCurlReq;