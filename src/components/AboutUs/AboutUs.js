import './AboutUs.css'
import React from 'react';

const AboutUs = () => {
    return (
        <div className='About'>
            <h1>Our Story</h1>
            <div className='sections'>

                <p>
                    Yoga Sanskrit: योग, lit. 'yoke' or 'union' pronounced  is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India, aimed at controlling ('yoking') and stilling the mind, and recognizing the detached 'witness-consciousness' as untouched by the activities of the mind (Citta) and mundane suffering (Duḥkha). There are a broad variety of the schools of yoga, practices, and goals[2] in Hinduism, Buddhism, and Jainism,[3][4][5] and traditional forms and modern methods of yoga are practiced worldwide.
                </p>
                <img src="https://images.unsplash.com/photo-1575052814074-c05122e0a17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            <h1>Our Vision</h1>
            <div className="sections">
                <img src="https://images.unsplash.com/photo-1504505278590-428d1acd0f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=581&q=80" alt="" />
                <p>
                    There are broadly two kinds of theories on the origins of yoga. The linear model argues that yoga has Aryan origins, as reflected in the Vedic textual corpus, and influenced Buddhism; according to Crangle, this model is mainly supported by Hindu scholars. The synthesis model argues that yoga is a synthesis of indigenous, non-Aryan practices with Aryan elements; this model is favoured in western scholarship.
                </p>
            </div>
        </div >
    );
};

export default AboutUs;