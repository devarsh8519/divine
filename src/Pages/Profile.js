import React from 'react'
import Touch from './Touch'


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
            <Touch/>
        </div>

    )
}

export default Profile
