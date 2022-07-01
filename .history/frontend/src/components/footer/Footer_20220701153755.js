import React from 'react'
import '../../App.css'

function Footer() {
    const year = new Date().getFullYear();
    console.log("NOS");
  return (
    <div className='footer'>
        <h3>Copyright ©{year} RJM&SNJ </h3>
    </div>
  )
}

export default Footer