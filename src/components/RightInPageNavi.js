import React from 'react';
import { Link } from 'react-router-dom';
import "../css/rightInPageNavi.css";

const RightInPageNavi = () => {
    return (
        <div className = 'rightnavimain'>
            <div>
                <p> On This Page</p>
                <ul>
                    <li>
                        <div>
                            <Link to = '/'>
                                <p>push to pay</p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to = '/'>
                                <p>Start Api</p>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RightInPageNavi;