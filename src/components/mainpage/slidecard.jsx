import React from "react"
import Sdata from "./sdata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//import Slider from "react-slick"
const Slidecard = ({productItems }) => {
/*const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }*/
  return (
    <>
      
        {Sdata.map((value,index) => {
          return (
              <div id="ka" className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img className="da" src={value.cover} alt='' />
                </div>
              </div>
          )
        })}
       
    </>
  )
}

export default Slidecard
