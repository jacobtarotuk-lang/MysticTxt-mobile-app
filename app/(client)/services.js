// Services Screen (Client Portal - Services List)
import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('active', true);

      if (error) console.error(error);
      else setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Available Services</h1>
      {services.map((service) => (
        <div key={service.id}> 
          <h2>{service.name}</h2>
          <p>${service.standard_price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;