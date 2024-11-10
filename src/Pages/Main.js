import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="d">
      <div>
        <h1>DIVINE TUBES</h1>
        <p>Divine Tubes operates under the guidance of seasoned experts in the engineering and fluid power industry. With profound experience in the field, we specialize in the design, manufacture, and supply of high-quality hydraulic equipment.</p>
        <Link to="/profile" style={{"textDecoration":"none"}}><button className="e">Know More <FaArrowRight /></button></Link>
      </div>
      <div className="img-container">
        <img src="Images/w5.jpg" className="f" alt="Image 1" />
        <img src="Images/w4.jpg" className="f" alt="Image 2" />
        <img src="Images/w6.jpg" className="f" alt="Image 3" />
      </div>
    </div>
  );
}

export default Main;
