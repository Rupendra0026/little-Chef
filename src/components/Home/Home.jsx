import React from 'react'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import Offers from '../Offers/Offers'
import SpecialOffers from '../splOffers/SpecialOffers'
import Menu from '../Menu/Menu'
import { offersData } from "../DataSets/OffersArray";
import { SpecialOffersArray } from "../DataSets/SpecialOfferArray";
import { foodItems ,uniqueCategories} from '../DataSets/ItemsList'

const Home = () => {
  console.log(foodItems);
  console.log(uniqueCategories);
  return (
    <>
    <Navbar/>
    <Landing/>
    <Offers offersData={offersData} />
    <SpecialOffers SpecialOffersArray={SpecialOffersArray} title={"Special Deals"}/>
    {/* <Menu uniqueCategories={uniqueCategories} foodItems={foodItems}/> */}
    </>
  )
}

export default Home