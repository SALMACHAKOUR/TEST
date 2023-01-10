import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../components/assets/images/logo1.png"
 const Search =( {CartItem}) =>{
    window.addEventListener("scroll",function(){
        const Search =this.document.querySelector('.search')
        Search.classList.toggle("active", window.scrollY > 100)
    })
    return (

        <>
        <section className='search'>
            <div className='container c_flex'>
                <div className="logo widh">
                    <img  src={logo} alt="" />
                </div>
                <div className="search-box f_flex">
                    <i className='fa fa-search'></i>
                    <input type="text" placeholder='search andhit enter.....'/>
                    <span>All category</span>


                    </div>
                <div className="icon f_flex width">
                    <i className='fa fa-user icon-circle '>  </i>
                    <div className='cart'>
                        <Link to="/cart"> 
                        <i className='fa fa-shopping-bag icon-circle'></i>
                         <span> {CartItem.length === 0 ? "" : CartItem.length}</span>
                        </Link>

                    </div>
                </div>



            </div>


        </section>
        
        </>

    )
 }
 export default Search 