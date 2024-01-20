import React from 'react'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import Offers from '../Offers/Offers'
import SpecialOffers from '../splOffers/SpecialOffers'
import Menu from '../Menu/Menu'
import { offersData } from "../DataSets/OffersArray";
import { SpecialOffersArray } from "../DataSets/SpecialOfferArray";
import { foodItems ,uniqueCategoriesWithImg} from '../DataSets/ItemsList'
import Items from '../ItemsList/Items'

const Home = () => {
  console.log(foodItems);
  return (
    <>

    <Navbar/>
    <Landing/>
    <Offers offersData={offersData} />
    <SpecialOffers SpecialOffersArray={SpecialOffersArray} title={"Special Deals"}/>
    <Menu foodItems={foodItems} uniqueCategoriesWithImg={uniqueCategoriesWithImg}/>
    <Items/>
    </>
  )
}

export default Home