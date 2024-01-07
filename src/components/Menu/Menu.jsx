import React from 'react'

const Menu = (props) => {
    const {uniqueCategories,foodItems}=props
  return (
    <>
    <h1>Whats on your Mind?</h1>
    {
        uniqueCategories.map((data)=>{
            return(
                <>
                <p>{data}</p>
                </>
            )
        })
    }
    </>

  )
}

export default Menu