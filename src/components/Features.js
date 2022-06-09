import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
import Markdown from 'react-markdown';
import Loading from './Loading';

let data;

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
                                <section className = 'pushToPay' id = 'pushToPay' style = {{ padding: "0px 350px" }}>
                                    <Markdown children = { webData } />
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

export default Features;