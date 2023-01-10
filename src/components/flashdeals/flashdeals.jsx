import React from "react";
import Flashcard from "./flashcard"

const Flashdeals = (props) => {
    return ( 
        <>
        <section className="flash background">
            <div className="container">
            <div className="heading f_flex">
                <i className="fa fa-bolt"></i>
                <h1>Flash Deals</h1>
                </div>
                <Flashcard productItems={props.productItems} addToCart={props.addToCart}/>

            </div>
              </section>
            

        
        
        </>
    )
}
export default Flashdeals;