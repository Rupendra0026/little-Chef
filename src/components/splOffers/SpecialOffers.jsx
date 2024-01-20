import React from "react";
import "./SpecialOffers.css";
import { Bounce } from "react-awesome-reveal";

const SpecialOffers = (props) => {
  const { SpecialOffersArray, title } = props;
  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
      </div>
      <div className="spl-container">
        {SpecialOffersArray.map((spl) => {
          return (
            <>
              <Bounce>
                <div className="wrapper">
                  <div className="card">
                    <div className="front">
                      <img src={spl.Image} alt="" />
                    </div>
                    <div className="back">
                      <h1>{spl.high}</h1>
                      <p>{spl.content}</p>
                    </div>
                  </div>
                </div>
              </Bounce>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SpecialOffers;
