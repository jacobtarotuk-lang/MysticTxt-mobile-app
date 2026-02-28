// Availability toggling component for advisors
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';

const AvailabilityToggle = () => {
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        const fetchAvailability = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select('advisor_available')
                .eq('id', supabase.auth.user().id)
                .single();
            if (data) setIsAvailable(data.advisor_available);
            if (error) console.error(error);
        };
        fetchAvailability();
    }, []);

    const toggleAvailability = async () => {
        const { error } = await supabase
            .from('profiles')
            .update({ advisor_available: !isAvailable })
            .eq('id', supabase.auth.user().id);
        if (error) console.error(error);
        else setIsAvailable(!isAvailable);
    };

    return (
        <div>
            <h2>Advisor Availability</h2>
            <p>{isAvailable ? 'You are currently available' : 'You are currently unavailable'}</p>
            <button onClick={toggleAvailability}>
                {isAvailable ? 'Set as Unavailable' : 'Set as Available'}
            </button>
        </div>
    );
};

export default AvailabilityToggle;