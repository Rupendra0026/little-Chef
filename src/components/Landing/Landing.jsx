import React from 'react'
import './Landing.css'
import Landingimage from '../../Images/Landingimage.jpg'
const Landing = () => {
  return (
    <>
    <div className="landing">
        <div className="landing-heading">
            <h1>The Funday Bite</h1>
            <p>Delicous Food For Every Mood</p>
        </div>
        
        <div className="landing-image">
            <img src={Landingimage} alt="" />
        </div>
    </div>
    </>
  )
}

export default Landing