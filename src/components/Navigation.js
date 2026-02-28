  // Additional Navigation for Legacy Dashboard

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/legacy-dashboard">Legacy Dashboard</NavLink>
        </nav>
    );
};

export default Navigation;