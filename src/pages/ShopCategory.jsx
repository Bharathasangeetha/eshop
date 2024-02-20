import React from 'react'
import dropdown from '../Components/Assets/dropdown_icon.png'
import { useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import './ShopCategory.css'

const ShopCategory = (props) => {
    const {all_product}=useContext(ShopContext)
  
  return (
    <div className='shop-Category'>
          <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
          <p>
            <span>Showing result 1-12</span> out of 36
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown} alt="" />
          </div>
        </div>
      <div className="shopcategory-product">
{
  all_product.map((item,i)=>{
    if(props.category===item.category){
      return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    }
    else return null;
  })
}
      </div>
      <div className="shopcategory-loadmaore">
Expolre More
      </div>
    </div>
  )
}

export default ShopCategory
