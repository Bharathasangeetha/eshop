import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Components/Assets/cart_cross_icon.png'
const Cart = () => {
const{all_product,cartItems,removeCart,getTotalCart}=useContext(ShopContext)
    return (
    <div className='cart'>
        <div className="cartitems-fomat-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
      <hr />

    {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
return <div>
<div className="cartitems-format cartitems-fomat-main">
<img src={e.image} alt="" className='carticon-product-icon' />
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className='cartitems-quantity'>{cartItems[e.id]} </button>
<p>{e.new_price*cartItems[e.id]}</p>
<img className='cartItems-remove-icon' src={remove_icon} onClick={()=>{removeCart(e.id)}} alt="" />
</div>
 <hr />       

</div>
}
return null;
})}
<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Total</h1>
        <div>
        <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCart()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
<p>    shipping Fee</p>
<p>Free</p>        
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCart()}</h3>
                </div>
        
        </div>
        
             
             
             <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>Enter Promo Code here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
</div>
    </div>
  )
}

export default Cart
