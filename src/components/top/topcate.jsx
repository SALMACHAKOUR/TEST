import React from "react";
import TopCart from "./topcart"
import  "./style.css"

const TopCate= () => {
    return (
        <>
         <section className="topCat background">
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row d_flex">
                        <i className="fa fa-border-all" ></i>
                        <h2>TOP CATEGORIES</h2>
                    </div>
                    <div className="heading-right row">
                        <span> view all</span>
                        <i className="fa fa-caret-right"></i>
                    </div>

                </div>
                <TopCart/>
            </div>
             
         </section>
        
        </>
    )
}
export default TopCate