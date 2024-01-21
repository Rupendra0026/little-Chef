import React from 'react'
import './ItemCard.css'
import { Fade, Zoom } from 'react-awesome-reveal';

const ItemCard = (props) => {
    const {data}=props;
    
  return (
    <>
    {/* <h1>{data.name}</h1> */}
    <Fade duration={1000}>
        <Zoom direction='left' >
        <div className="itemcard">
        <div className="topline">
            <h4>{data.name}</h4>
            <div className={data.type=="veg"?"veg":"nveg"}>
                <div className="dot"></div>
            </div>
        </div>
        <div className="">
            <p>Price:{data.price}</p>
            <p>Category:{data.category}</p>
        </div>
        <div className="btnadd">
        <button>Add Cart</button>
        </div>
    </div>
        </Zoom>
    </Fade>
    </>
    
  )
}

export default ItemCard