import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../css/rightInPageNavi.css";

const RightInPageNavi = () => {
    const [ webData, setWebData ] = useState(); 
    const [toggle, setToggle] = useState('1');
    const [subToggle, setSubToggle] = useState('0');
    
    let data;

    // getting the data from the api
    const getData = async () => {
        const result = await axios.get("https://ezetap-docs-project-api.herokuapp.com")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data;
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
        setSubToggle('0');
    };

    const toggleSubTab = (index) => {
        setSubToggle(index);
    };

    const handleClick = (e) => {

        const sect=(document.getElementById('main'));
        const sect1=(document.getElementById('parameter'));
        const sect4=(document.getElementById('resparam'));
        const sect2=(document.getElementById('sampleReqRes'));
        const sect3=(document.getElementById('curl'));
        
        if (e.target.id === 'main') {
            sect.scrollIntoView();
            window.scrollBy(0, -150)
        } else if (e.target.id === 'parameter') {
            sect1.scrollIntoView();
            window.scrollBy(0, -84)
        } else if (e.target.id === 'resparam') {
            sect4.scrollIntoView();
            window.scrollBy(0, -84)
        } else if (e.target.id === 'sampleReqRes') {
            sect2.scrollIntoView();
            window.scrollBy(0, -74)
        } else if (e.target.id === 'curl') {
            sect3.scrollIntoView();
            window.scrollBy(0, 0)
        }
    } 
    
    return (
        webData
        ?
        <div className = 'rightnavimain'>
            <div>
                <p className='rnheader'>{ webData.rightInPageNaviHeader }</p>
                <ul className='rnlist'>
                    {
                        webData.rightInPageNavi.map(heading => (
                            <li key = { heading.secListHeading }>
                                <div>
                                    <div className='cont' onClick = { (e) => { handleClick(e); toggleTab(heading.index) }}>
                                        <p id = { heading.id } className = { toggle === heading.index ? 'activern' : heading.id }>{ heading.secListHeading }</p>
                                    </div>
                                    <ul className = 'rnsublist'>
                                        {
                                            heading.secList.map(seclist => (
                                                <li key = { seclist.li }>
                                                    <div className = 'subcont' onClick = { (e) => { handleClick(e);  toggleSubTab(seclist.index) }}>
                                                        <p id = { seclist.id } className = { subToggle === seclist.index ? 'activesubrn' : seclist.id }>{ seclist.li }</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        :
        null
    );
};

export default RightInPageNavi;