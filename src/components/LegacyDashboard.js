// Legacy Dashboard Setup

import React from 'react';
import { Table, Chart } from 'my-ui-library';

const LegacyDashboard = () => {
    // Simulated data
    const legacyData = [
        { id: 1, name: 'Legacy Data 1', value: 100 },
        { id: 2, name: 'Legacy Data 2', value: 200 },
    ];

    return (
        <div>
            <h1>Legacy Dashboard</h1>
            <Table data={legacyData} />
            <Chart data={legacyData} />
        </div>
    );
};

export default LegacyDashboard;