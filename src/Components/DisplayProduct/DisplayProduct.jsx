import React, { useContext } from 'react'
import './DisplayProduct.css'
import star_icon from '../Assets/star_icon.png'
import dull_star from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const DisplayProduct = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext)
  return (
    <div className="productdisplay">
        
            <div className="productdisplay-left">
                <div className="productdisplay-image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdiplay-image">
                    <img className='productdiplay-main-image' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdiplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={dull_star} alt="" />
                    <p>(122)</p>
              </div>
              <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
        <div className="productdisplay-right-description">
            A lightweight, knitted, pullover shirt, close-fitting, round neckline, short sleeve sweatshirt which is comportable to wear in any seasons. It worn as an undershirt or outershirt.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplayright-sizes">
                <div>S</div>            
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='prodctdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop top</p>
        <p className='prodctdisplay-right-category'><span>tag: </span>Modern, Latesst</p>

            </div>
                    </div>
      

  )
}

export default DisplayProduct
