import './Banner.css'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className='Banner'>
            <h4>FITNESS FOR LIFE</h4>
            <h1>Be Ready For Focus <br /><span>Your </span>
                    <Typewriter
                        words={['Fitness', 'Gym', 'Strength', 'Weight']}
                        loop={0}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
            </h1>

        </div>
    );
};

export default Banner;