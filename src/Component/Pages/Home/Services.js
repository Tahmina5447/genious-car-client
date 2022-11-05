import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                services.map(service =>
                    <div className="card bg-base-100 shadow-xl">
                    <figure><img src={service.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{service.title}</h2>
                        <p>Price: {service.price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to={`/checkout/${service._id}`}>Add To Cart</Link></button>
                        </div>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default Services;