import React from "react"
import  Categories from "./categories"
import  Slider from "./slider"
import "./home.css"
import Cart from "../../comm/cart/cart"
const Home = ({CartItem, addToCart}) => {
    return (
        <>
      <section className="home">
        <div className="container d_flex">
             <Categories/>
             <Slider/>
        </div>
       

      </section>
        </>

    )
}
export default Home 