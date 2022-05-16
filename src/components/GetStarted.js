import React from 'react';
import GetStartedNav from './GetStartedNav';
import '../css/splitnavbarStarted.css'
import TopNavBar from './TopNavBar';

const GetStarted = () => {
    return (
        <div>
            <TopNavBar />
            <div>
                <div>
                    <div>
                        <GetStartedNav />
                    </div>
                    <main style={{ marginTop: "20px" }}>
                        getStarted
                    </main>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;