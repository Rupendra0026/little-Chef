import "./Offers.css";
import { Fade,Slide, Zoom } from "react-awesome-reveal";


const Offers = (props) => {
  const {offersData}=props
  return (
    <>
            <Fade  >
      <div className="main">
        <div className="offers-carousel">
          {offersData.map((offer) => {
            return (
              <>
                <div className="offers-card">
                  <Zoom>
                  <h1>{offer?.head}</h1>
                  <p>{offer?.text}</p>
                  </Zoom>
                </div>
              </>
            );
          })}
        </div>
      </div>
      </Fade>
    </>
  );
};

export default Offers;
