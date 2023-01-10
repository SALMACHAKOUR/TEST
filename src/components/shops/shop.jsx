import React from "react";
import Catg from "./catg";
import Shopcart from "./shopcart";
import"./style.css";
const Shop = (shopItems,addToCart) => {
    return (
        <>
       <section className="shop background">
        <div className="container d_flex">
            <Catg/>
            <div className="contentWidth">
            <div className="heading d_flex">
                    <div className="heading-left row d_flex">
                   
                        <h2>Mobile Phones</h2>
                    </div>
                    <div className="heading-right row">
                        <span> view all</span>
                        <i className="fa fa-caret-right"></i>
                    </div>

                </div>
                <div className="product-content grid1">
                    <Shopcart shopItems={shopItems} addToCart={addToCart} />
                </div>
            </div>
        </div>


       </section>
        </>
    )
}
export default Shop