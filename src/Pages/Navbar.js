// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container">
//         <div className="navbar-brand d-flex" href="#">
//           <img src="Images/Logo.avif" className="img-fluid a" alt="Logo"/>
//           <p className='p'>Divine Tubes</p>
//         </div>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a href="#" className="b">Home</a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="b">Company Profile</a>
//             </li>
//             <li>
//             <a href="products" className="b">Products</a>
//               {/* <Link to="/products" className="b">Products</Link> */}
//             </li>
//             <li className="nav-item">
//               <a href="#" className="b">Industry</a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="b">Service Area</a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="b">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand d-flex" href="#">
          <img src="Images/Logo.avif" className="img-fluid a" alt="Logo" />
          <p className='p'>Divine Tubes</p>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="b">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="b">Company Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="b">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/application" className="b">Industry</Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="b">Service Area</Link>
            </li>
            <li className="nav-item">
              <Link to="/touch" className="b">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
