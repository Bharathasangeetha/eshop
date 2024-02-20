import React from 'react'
import Models from '../Components/Models/Models'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'




const Shop = () => {
  return (
    <div>
      <Models/>
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
     
    </div>
  )
}

export default Shop
