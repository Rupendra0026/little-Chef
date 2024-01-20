import React from "react";
import './Menu.css'
import { Zoom } from "react-awesome-reveal";
const Menu = (props) => {
  const { uniqueCategoriesWithImg } = props;

  return (
    <>
      
      <div className="menu-corousel">
        <h1>Whats on your Mind?</h1>
      <div className="mainn">
      {uniqueCategoriesWithImg.map((data) => {
        return (
          <>
          <Zoom>
          <div className="scrollmenu" key={data.name}>
              <img src={data.imgs} width="100px" alt="img not found" />
              <p>{data.category}</p>
            </div>
          </Zoom>
          </>
        );
      })}
      </div>
      </div>
    </>
  );
};

export default Menu;