import "./Offers.css";
// import { Bounce } from "react-reveal";


const Offers = (props) => {
  const {offersData}=props
  return (
    <>
      <div className="main">
        {/* <Bounce left > */}
        <div className="offers-carousel">
          {offersData.map((offer) => {
            return (
              <>
                <div className="offers-card">
                  <h1>{offer?.head}</h1>
                  <p>{offer?.text}</p>
                </div>
              </>
            );
          })}
        </div>
        {/* </Bounce> */}
      </div>
    </>
  );
};

export default Offers;
