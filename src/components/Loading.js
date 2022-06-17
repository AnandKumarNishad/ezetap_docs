import React from 'react';
import '../css/loading.css';

const Loading = () => {
    return (
        // loading image
        <div className = 'loadingDiv'>
            <img src = '/images/loading.svg' alt = 'Loading animation' />
        </div>
    );
};

export default Loading;