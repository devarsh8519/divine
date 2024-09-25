import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { PiPlantLight } from "react-icons/pi";


function Aboutus() {
    return (
        <div className='about'>
            <div className='fi'>
                <h1>About Us</h1>
                <ul>
                    <li>Seamless Oil Pipes</li>
                    <li>CWD Pipes</li>
                    <li>Hydraulic Cylinders</li>
                    <li>Ready-to-Hone Tubes</li>
                    <li>Varnish Tubes</li>
                    <li>Honed Tubes</li>
                </ul>
                <p>At Divine Tubes, we are to committed delivering exceptional products that meet the highest industry standards.</p>
                <button className='e mb-5'>Why Join Us <FaArrowRight /></button>
            </div>
            <div className='d-flex s'>
                 <div className='sq'>
                    <h1><BsGraphUpArrow /></h1>
                    <h5>7+ Years of Experience</h5>
                 </div>
                 <div className='sq'>
                    <h1><FaRegUser /></h1>
                    <h5 className='mt-4'>15+ Employee</h5>
                 </div>
                 <div className='sq'>
                    <h1><PiPlantLight /></h1>
                    <h5>450+ Valuable Clients</h5>
                 </div>
            </div>
        </div>
    )
}

export default Aboutus
