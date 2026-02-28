import React from 'react';

const LoadingFallback = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div className="spinner" />
            <p>Loading, please wait...</p>
        </div>
    );
};

export default LoadingFallback;