import React from "react";
import './Menu.css'

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
          <div className="scrollmenu" key={data.name}>
              <img src={data.imgs} width="100px" alt="img not found" />
              <p>{data.category}</p>
            </div>
          </>
        );
      })}
      </div>
      </div>
    </>
  );
};

export default Menu;