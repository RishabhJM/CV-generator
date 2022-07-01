import React from 'react'
import '../../App.css'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='footer'>
        <h3>Copyright© {year}</h3>
        <h4>All rights reserved by RJM & SJ.</h4>
    </div>
  )
}

export default Footer