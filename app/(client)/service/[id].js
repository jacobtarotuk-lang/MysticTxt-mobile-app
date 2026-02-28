import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router';
import { supabase } from '../../../services/supabase';

const ServiceDetails = () => {
    const { id } = useSearchParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchService = async () => {
            if (id) {
                const { data, error } = await supabase
                    .from('services')
                    .select('*')
                    .eq('id', id)
                    .single();
                
                if (error) {
                    console.error(error);
                } else {
                    setService(data);
                }
                setLoading(false);
            }
        };
        fetchService();
    }, [id]);
    
    if (loading) {
        return <p>Loading service details...</p>;
    }
    
    if (!service) {
        return <p>Service not found</p>;
    }
    
    return (
        <div>
            <h1>{service.name}</h1>
            <p>${service.standard_price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ServiceDetails;
