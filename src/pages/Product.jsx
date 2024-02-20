import React from 'react'
import { ShopContext} from '../Context/ShopContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrums'
import DisplayProduct from '../Components/DisplayProduct/DisplayProduct'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from './RelatedProducts/RelatedProducts';
const Product = () => {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId))
    return (
   
    <div>
     <Breadcrum product={product}/>
     <DisplayProduct product={product}/>
     <DescriptionBox />
<RelatedProducts  />

    </div>
  )
}


export default Product
