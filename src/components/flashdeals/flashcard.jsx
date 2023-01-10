import React , { useState  , addToCart}from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MainContext } from "../../App.js";
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-right'></i>
        </button>
      </div>
    )
  }

  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-left'></i>
        </button>
      </div>
    )
  }
 const Flashcard = (props) => {
    const [count, setCount] = React.useState(0);
    const mainContext = React.useContext(MainContext);
    const increment = () => {setCount((c) => c + 1)};
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      }
    
    return (
        <>
        <Slider {...settings}>
        
        {props.productItems?.map((elem) => {
           return (
           <div className="box" key={elem.id}>
            <div className="product mtop">
                <div className="img">
                    <span className="discount"  > {elem.discount}% off</span>
                    <img src={elem.cover} alt="1213" />
                    <div className="product-like">
                        <label >{count}</label><br />
                        <i className="fa fa-heart-o" ></i>
                    </div>
                    <div className="product-details">
                        <h3>{elem.name}</h3>
                        <div className="rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="price">
                            <h4>{elem.price}.00</h4>
                            <button onClick={() => addToCart(props.productItems)}
                            >
                                <i className="fa fa-plus" onClick={() => {
                          increment();
                          mainContext.addToCart(elem);
                        }}></i>


                            </button>
                        </div>

                            
                       
                    </div>


                </div>


                
             </div> 
            
           </div>
         
          )  
        } )}
    </Slider>
        </>
    )
 }
 export default Flashcard;