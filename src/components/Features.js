import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import '../css/features.css';
import ReactMarkdown from 'react-markdown';


const Features = () => {
    const [ webData, setWebData ] = useState();

    let data;

    // getting the features md file data from the api
    const getData = async () => {
        const result = await axios.get("http://localhost:1337/api/api-details")
        .catch((error) => {
            console.log(error.message);
        });
        data = result.data.data[0].attributes.ApiDetails;
        if(data !== undefined)
        {
            // assigning it to data in useState
            setWebData(data);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    function RouterLink(props) {
        return (
          props.href.match(/^(https?:)?\/\//)
            ? <a href={props.href}>{props.children}</a>
            : <Link to={props.href}>{props.children}</Link>
        );
    }

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
                    <main style={{ textAlign: "left"}}>
                        {/* rendering the data based on the active page from the split navbar */}
                        {
                            last === 'features'
                            ?
                            <section className = 'pushToPay' id = 'pushToPay' style = {{ padding: "0px 0 0 350px" }}>
                                <ReactMarkdown className = 'markdown' children = { webData } remarkPlugins ={ [remarkGfm] } rehypePlugins = { [rehypeRaw] }/>
                            </section>
                            :
                            null
                        }
                    </main>
                </div>
                :
                <Loading />
            }
        </>
    );
};

export default Features;