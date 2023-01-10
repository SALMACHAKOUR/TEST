import React from "react";
import "./cart.css"
import { MainContext } from "../../App";
const Cart = ({CartItem ,addToCart,decreaseQty}) => {
    const totalPrice=CartItem.reduce((price,item) =>price + item.qty * item.price, 0)
    return (
        <>
         <section className="cart-items">
            <div className="container d_flex">
                <div className="cart-details">
                 {CartItem.length === 0 &&  <h1 className="no-items product"> no items are add in cart</h1>}
                  { CartItem.map((item)  => {
                    const prodcutQty = item.price * item.qty
                    return(
                       <div className="cart-list product d_flex" key="cart">
                        <div className="img">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="cart-details">
                            <h3>{item.name}</h3>
                            <h4>{item.price}.00 * {item.qty}
                            <span>${prodcutQty}.00</span>
                            </h4>
                        </div>
                        <div className="cart-items-function">
                            <div className="removeCart" onClick={MainContext.clearCart}>
                                <button > 
                                <i className="fa fa-close"></i></button>
                            </div>
                            <div className="cartControl d_flex">
                                <button className="inCart" onClick={() => addToCart(item)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                <button className="desCart" onClick={() => decreaseQty(item)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                        </div>
             
                       </div> 
                    )
                 } ) }
                   </div>
                   <div className="cart-total  product ">
                    <h2>cart summary</h2>
                    <div className="d_flex">
                        <h4>total price :</h4>
                        <h3>${totalPrice}</h3>
                    </div>

                   </div>
               

            </div>

         </section>
         
        
        
        </>
    ) 

    
}
export default Cart ;