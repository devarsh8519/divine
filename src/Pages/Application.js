import React from 'react'
import Service from './Service'
import Main from './Main'

function Application() {
  return (
    <div className='ap'>
        {/* <Main/> */}
        <h1>APPLICATION INDUSTRY</h1>
        <div className='boxes'>
            <div className='box'>
                <h4>Auto Industry</h4>
            </div>
            <div className='box'>
                <h4>Energy Industry</h4>
            </div>
            <div className='box'>
                <h4>Fertilizer Plants</h4>
            </div>
            <div className='box'>
                <h4>Railway</h4>
            </div>
            <div className='box'>
                <h4>Space</h4>
            </div>
            <div className='box'>
                <h4>Textile Industry</h4>
            </div>
        </div>
        {/* <Service/> */}
    </div>
  )
}

export default Application