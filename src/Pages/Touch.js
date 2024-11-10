import React from 'react'
import { BsCompassFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

function Touch() {
    return (
        <div>
            <div>
                <hr />
            </div>
            <div className='touch'>
                <div>
                    <h1>Get In Touch With Us</h1>
                    <h2 className='mail'>
                        <a href="mailto:info@mydivinetubes.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            info@mydivinetubes.com
                        </a>
                    </h2>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14686.80695664522!2d72.686322!3d23.034721!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAyJzA1LjAiTiA3MsKwNDEnMTAuOCJF!5e0!3m2!1sen!2sus!4v1727005586483!5m2!1sen!2sus"  style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="con">
                    <div className='off'>
                        <div className='icon'>
                            <BsCompassFill />
                        </div>
                        <div className='text'>
                            <h4>Visit Office</h4>
                            <p>561/1, Road No. 8, Near Varun Engineering, Kathwada GIDC, Ahmedabad - 382430</p>
                        </div>
                    </div>
                    <hr className='hr'/>
                </div>
                <div className="con">
                    <div className='off'>
                        <div className='icon'>
                            <BiSolidPhoneCall />
                        </div>
                        <div className='text'>
                            <h4>Call Us</h4>
                            <a href="tel:+919723334357" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9723334357</a>, 
                            <a href="tel:+917046125865" style={{ color: 'inherit', textDecoration: 'none' }}> +91 7046125865</a>
                        </div>
                    </div>
                    <hr className='hr'/>
                </div>
                <div className="con">
                    <div className='off'>
                        <div className='icon'>
                            <MdAlternateEmail /> 
                        </div>
                        <div className='text'>
                            <h4>Email Us</h4>
                            <p>info@mydivinetubes.com</p>
                        </div>
                    </div>
                    <hr className='hr'/>
                </div>
            </div>

        </div>

    )
}

export default Touch
