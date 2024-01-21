import React, { useEffect, useState } from 'react'
import { foodItems } from '../DataSets/ItemsList'
import ItemCard from './ItemCard'
import './Items.css'
import { motion } from 'framer-motion'

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
    <motion.div
     className='loadbtn'>
        <motion.button 
        whileHover={{
            scale:1.05
        }}
        onClick={updatenum}>Load More..</motion.button>
    </motion.div>
    </>
  )
}

export default Items