// Delivery upload component for Legacy Dashboard
import React, { useState } from 'react';

const DeliveryUpload = ({ orderId }) => {
    const [deliveryText, setDeliveryText] = useState('');

    const handleUpload = () => {
        // Logic to upload delivery text for the order
    };

    return (
        <div>
            <h2>Upload Delivery Text for Order {orderId}</h2>
            <textarea
                value={deliveryText}
                onChange={(e) => setDeliveryText(e.target.value)}
                placeholder="Enter delivery text..."
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default DeliveryUpload;