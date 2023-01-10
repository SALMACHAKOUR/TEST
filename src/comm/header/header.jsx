import React from 'react'
import "./header.css"
import Navbar from './navbar'
import Search from './search'
import Head from './head'
const Header  = ( {CartItem}) => {
    return (
        <> 
        
        <Head/>
        <Search  CartItem={CartItem}/>
        <Navbar/>
        </>
    )

}
 
export default Header