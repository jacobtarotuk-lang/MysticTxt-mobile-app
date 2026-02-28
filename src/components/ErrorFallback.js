import React from 'react';
import PropTypes from 'prop-types';
import './ErrorFallback.css'; // Make sure to include appropriate styles

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert" className="error-fallback">
            <h1>Something went wrong</h1>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

ErrorFallback.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;