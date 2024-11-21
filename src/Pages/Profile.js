import React from 'react'
import Touch from './Touch'
import { BsCompassFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";



function Profile() {
    return (
        <div className='profile'>
            <h1>Why us..?</h1>
            <h2 className='fs-2'>DIVINE TUBES A PART OF CHROMEA ROD AND TUBE COMPANY</h2>
            <h4>OUR GROUP COMPANY</h4>
            <h4>1 - HONEYWELL HYDRAULIC</h4>
            <h4>2 - SHREE HARI SUPER FINISH</h4>
            <p>We specialize in the design, manufacture, and supply of high-quality hydraulic equipment.</p>
            <div>
                <img src='Images/main.avif' alt='Main' />
            </div>

            <div className='details'>
                <div>
                    <h4>Services</h4>
                    <p>Tubes Export</p>
                </div>
                <div>
                    <h4>Category</h4>
                    <p>Manufacture</p>
                </div>
                <div>
                    <h4>Product</h4>
                    <p>Hydraulic Tubes</p>
                </div>
            </div>
            <hr />
            <div className='abtus'>
                <div>
                    <h1>About us</h1>
                </div>
                <div>
                    <p>Divine Tubes operates under the guidance of seasoned experts in the engineering and fluid power industry. With profound experience in the field, we specialize in the design, manufacture, and supply of high-quality hydraulic equipment. </p>
                    <p>Seamless Oil Pipes, CWD Pipes, Hydraulic Cylinders, Ready-to-Hone Tubes, Burnish Tubes, Honed Tubes.</p>
                    <p>At Divine Tubes, we are committed to delivering exceptional products that meet the highest industry standards.</p>
                </div>
            </div>
            {/* <Touch/> */}

            <div>
                <hr />
            </div>
            <div className='tou'>
                <div>
                    <h1>Get In Touch With Us</h1>
                    <h2 className='ma'>
                        <a href="mailto:info@mydivinetubes.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            info@mydivinetubes.com
                        </a>
                    </h2>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14686.80695664522!2d72.686322!3d23.034721!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAyJzA1LjAiTiA3MsKwNDEnMTAuOCJF!5e0!3m2!1sen!2sus!4v1727005586483!5m2!1sen!2sus" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className='con-second'>
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
                        <hr className='hr' />
                    </div>
                    <div className="con">
                        <div className='off'>
                            <div className='icon'>
                                <BiSolidPhoneCall />
                            </div>
                            <div className='text'>
                                <h4>Call Us</h4>
                                <span>
                                    <a href="tel:+919723334357">+91 9723334357</a>,&nbsp;&nbsp;
                                    <a href="tel:+917046125865">+91 7046125865</a>
                                </span>
                            </div>

                        </div>
                        <hr className='hr' />
                    </div>
                    <div className="con">
                        <div className='off'>
                            <div className='icon'>
                                <MdAlternateEmail />
                            </div>
                            <div className='text'>
                                <h4>Email Us</h4>
                                <a href="mailto:info@mydivinetubes.com">info@mydivinetubes.com</a>
                            </div>
                        </div>
                        <hr className='hr' />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Profile
