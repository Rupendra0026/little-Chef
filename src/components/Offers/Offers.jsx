import "./Offers.css";



const Offers = (props) => {
  const {offersData}=props
  return (
    <>
      <div className="main">
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
      </div>
    </>
  );
};

export default Offers;
