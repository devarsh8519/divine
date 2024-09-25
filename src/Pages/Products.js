import React from 'react';
import Touch from './Touch';

function Products() {
  return (
    <div className='pro'>
      <div>
        <h1>PRODUCTS RANGE</h1>
      </div>
      <div className="card-container">
        <div className="card custom-card">
          <img src="Images/pipe1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Hydraulic seamless oil pipe</h4>
            <p className="card-text">Seamless hydraulic tubing is produced as a seamless tube by rolling and piercing bar stock. It then gets multiple cold-drawing reductions before a final cold draw guarantees tight dimensional tolerances and excellent surface finish.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/pipe2.avif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">CDW pipe</h4>
            <p className="card-text">Cold Drawn Welded Pipes provide long lasting excellent performance and can be customized as per client requirement. These are known for high dimensional accuracy, better surface finish, corrosion resistance and high tensile strength.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/pipe3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Hydraulic cylinder</h4>
            <p className="card-text">A hydraulic cylinder (also called a linear hydraulic motor) is a mechanical actuator that is used to give a unidirectional force through a unidirectional stroke.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div className="card custom-card">
          <img src="Images/pipe4.avif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Varnish tubes</h4>
            <p className="card-text">Varnishes provide protective coatings for wooden surfaces, paintings, and various decorative objects.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/pipe5.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Honed tube</h4>
            <p className="card-text">The honing process involves using abrasive polishing stones and abrasive paper to remove small amounts of material, to produce extremely precise ID dimensions and improved finishes.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/prod.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">All hydraulic product</h4>
            <p className="card-text">Hydraulic products are devices and equipment that utilize the principles of fluid mechanics and hydraulic systems to generate, control, and transmit power.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
      <div className='gallery'>
        <div>
          <h1>GALLERY</h1>
        </div>
        <div className='gallery-grid'>
          <img src="Images/pipe3.jpg" alt="..." />
          <img src="Images/pipe2.avif" alt="..." />
          <img src="Images/pipe5.jpg" alt="..." />
          <img src="Images/pipe4.avif" alt="..." />
        </div>
      </div>
    <Touch/>
    </div>
  );
}

export default Products;
