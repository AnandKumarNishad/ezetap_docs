import React from 'react';
import '../css/splitnavbarStarted.css'
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';

const GetStarted = () => {
    return (
        <div>
            {/* rendering topnavbar component */}
            <TopNavBar />
            <div>
                <div>
                    <div>
                        {/* rendering sidenavbar component */}
                        <SideNavBar />
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