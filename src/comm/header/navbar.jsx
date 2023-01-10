import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
 const Navbar =() =>{
    const [MobileMenu, setMobileMenu] = useState(false)
    return (

        <>
        <header className='header'>
            <div className="container d_flex">
                <div className="categories d_flex">
                <span> <i className='fas fa-border-all'></i></span>
                <h4>
                    categories <i className='fa fa-chevron-down'></i>
                </h4>
                </div>
                <div className="navlink">
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
                         <li>
                        <Link to='/'>HOME</Link>
                         </li>
                        <li>
                        <Link to ="/pages">PAGES</Link>
                        </li>
                        <li>
                        <Link   to="/user">USER ACCOUNT</Link>
                        </li>
                        <li>
                        <Link  to="/vendor">VENDOR</Link>
                        </li>
                        <li>
                        <Link   to="/track">TRACK MY ORDER </Link>
                        </li>
                        <li>
                        <Link  to="/contact">CONTACT</Link>
                        </li>
                        <li>
                        <Link  to="/cart">CART</Link>
                        </li>
                        
                    </ul>
                    <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className="fa fa-close"></i>
              }
            </button>

                </div>
            </div>
        </header>
        
        </>

    )
 }
 export default Navbar 