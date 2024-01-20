import React from 'react'
import './Landing.css'
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";
import Landingimage from '../../Images/Landingimage.jpg'

const Landing = () => {
  return (
    <>
    <div className="landing">
    <Slide cascade>
        <div className="landing-heading">
          <h1>The Funday Bite</h1>
           <p>Delicous Food For Every Mood</p>
        </div>
        </Slide>
        <Fade cascade>
        <div className="landing-image">
            <img src={Landingimage} alt="" />
        </div>
        </Fade>
    </div>
    </>
  )
}

export default Landing