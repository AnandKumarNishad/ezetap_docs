import React from 'react';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';

const Payments = () => {
    return (
    <div>
        <TopNavBar />
        <div>
            <div>
                <SideNavBar />
                <main style={{ marginTop: "20px" }} >
                    Payments
                </main>
            </div>
        </div>
    </div>
    );
};

export default Payments;