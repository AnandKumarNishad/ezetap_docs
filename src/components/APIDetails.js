import React from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';

const APIDetails = () => {
    return (
        <div>
            <TopNavBar />
            <div>
                <div>
                    <div>
                        <SideNavBar />
                    </div>
                    <main style={{ marginTop: "20px" }}>
                        API
                    </main>
                </div>
            </div>
        </div>
    );
};

export default APIDetails;