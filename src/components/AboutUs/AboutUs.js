import './AboutUs.css'
import React from 'react';

const AboutUs = () => {
    return (
        <div className='About'>
            <h1><span>Our Story</span></h1>
            <div className='sections'>

                <p>
                    Calisthenics (American English) or callisthenics (British English) (/ˌkælɪsˈθɛnɪks/) is a form of strength training consisting of a variety of movements that exercise large muscle groups (gross motor movements), such as standing, grasping, pushing, etc. These exercises are often performed rhythmically and with minimal equipment, as bodyweight exercises. They are intended to increase strength, fitness, and flexibility, through movements such as pulling, pushing, bending, jumping, or swinging, using one's body weight for resistance. Calisthenics can provide the benefits of muscular and aerobic conditioning, in addition to improving psychomotor skills such as balance, agility, and coordination. A study done in 2017," The effects of a calisthenics training intervention on posture, strength and body composition", by a group of scientists who found that calisthenics training is an "effective training solution to improve posture, strength and body composition without the use of any major training equipment".
                </p>
                <img src="https://images.unsplash.com/photo-1575052814074-c05122e0a17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            <h1><span>Our Vision</span></h1>
            <div className="sections">
                <img src="https://images.unsplash.com/photo-1624622189831-6266d2373a94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" alt="" />
                <p>
                    “Calisthenics is a form of fitness which utilises gravity and bodyweight leverage to challenge your fitness level. I feel like that's the easiest way I can put it,” says Kenneth Gallarzo, who you may know as Progressive Calisthenics on Instagram. <br /> Gallarzo has been training himself and others for years, and he’s also the co-founder of the World Calisthenics Organisation. Together with Gallarzo, we’ve put together a complete guide to the discipline, so, whether you’re a beginner, an intermediate or an advanced practitioner, we've got something to teach you about mastering your own bodyweight.
                </p>
            </div>
        </div >
    );
};

export default AboutUs;