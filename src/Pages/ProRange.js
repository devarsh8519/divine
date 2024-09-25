import React from 'react'
import { Link } from 'react-router-dom'

function ProRange() {
  return (
    <div className='pro1'>
      <div>
        <h1>PRODUCTS RANGE</h1>
      </div>
      <div className="card-container">
        <div className="card custom-card">
          <img src="Images/pipe1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Hydraulic seamless oil pipe</h4>
            <Link to="/products" className="btn btn-primary text-center">View Product</Link>
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/pipe2.avif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">CDW pipe</h4>
            <Link to="/products" className="btn btn-primary text-center">View Product</Link>
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/pipe3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Hydraulic cylinder</h4>
            <Link to="/products" className="btn btn-primary text-center">View Product</Link>
          </div>
        </div>

        <div className="card custom-card">
          <img src="Images/pipe4.avif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Varnish tubes</h4>
            <Link to="/products" className="btn btn-primary text-center">View Product</Link>
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/pipe5.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Honed tube</h4>
            <Link to="/products" className="btn btn-primary text-center">View Product</Link>
          </div>
        </div>
        <div className="card custom-card">
          <img src="Images/prod.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">All hydraulic product</h4>
            <Link to="/products" className="btn btn-primary text-center">View Product</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProRange
