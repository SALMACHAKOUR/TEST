import React from "react"
import Discount from "../components/discount/discount"
import Shop from "../components/shops/shop"
import Flashdeals from "../components/flashdeals/flashdeals"
import Home from "../components/mainpage/home"
import TopCate from "../components/top/topcate"
import NewArrivals from "../components/newarrivals/newarrivals"
const Pages = (props) => {
    return (
        <>
       
        <Home  CartItem={props.CartItem}/>
    <Flashdeals productItems={props.productItems} addToCart={props.addToCart }/>
    <TopCate/>
    <NewArrivals/>
    <Discount/>
   <Shop shopItems={props.shopItems}/>
        </>
    )
}
export default  Pages