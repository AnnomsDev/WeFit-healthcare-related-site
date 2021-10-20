import './Contact.css'
import React from 'react';
import { AiFillHome, AiFillPhone } from "react-icons/ai"
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <div className='Contact'>
            <h2><span>Contuct us</span></h2>
            {/* all fake data here is fake */}
            <div className="icons">

                <div>
                    <span className='wf-icon'><AiFillHome /></span>

                    <h5>Address:<br />4065 Felosa Drive, California, US</h5>
                </div>
                <div>
                    <span className='wf-icon'><AiFillPhone /></span>

                    <h5>Phone:<br />01812345678</h5>
                </div>
                <div>
                    <span className='wf-icon'><MdEmail /></span>

                    <h5>Email:<br />wefit2021@gmail.com</h5>
                </div>
            </div>
        </div>
    );
};

export default Contact;