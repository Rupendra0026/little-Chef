import React, { useEffect, useState } from 'react'
import { foodItems } from '../DataSets/ItemsList'
import ItemCard from './ItemCard'
import './Items.css'

const Items = () => {
    const mainFooditems=foodItems;
    const [num,setNum]=useState(9);
    const [data,setData]=useState(mainFooditems.slice(0,num))
    const updatenum=()=>{
        setNum(prev=>prev+prev);
    }
    useEffect(()=>{
        setData(mainFooditems.slice(0,num));
    },[num])
  return (
    <>
    <div className="itemslist">
    {
        data.map((data)=>{
            return(
                <>
                <ItemCard data={data}/>
                </>
            )
        })
    }
    </div>
    <div className='loadbtn'>
        <button onClick={updatenum}>Load More</button>
    </div>
    </>
  )
}

export default Items