import './Service.css'
import React from 'react';

const Service = ({ id, title, description, img }) => {

    return (
        <div className='Service'>
            <img src={img} alt={title} width='100%' />
            <h3>{title}</h3>
            <p>{description.substr(0, 100) + '...'}</p>
            <button className='wf-btn-primary'>See Details</button>
        </div>
    );
};

export default Service;