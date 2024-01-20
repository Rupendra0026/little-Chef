import React from 'react'
import './Landing.css'
import Landingimage from '../../Images/Landingimage.jpg'
import { Zoom,Fade } from 'react-reveal'

const Landing = () => {
  return (
    <>
    <div className="landing">
        <div className="landing-heading">
           <Fade left big duration={2000}>
           <h1>The Funday Bite</h1>
           </Fade>
           <Fade right big duration={2000}>
           <p>Delicous Food For Every Mood</p>
           </Fade>
        </div>
       <Zoom> 
        <div className="landing-image" duration={5000}>
            <img src={Landingimage} alt="" />
        </div>
        </Zoom>
    </div>
    </>
  )
}

export default Landing