import React  from "react"
import Header from "./comm/header/header"
import "./App.css"
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom"    
import Pages from "./pages/pages"
import Data from "./components/data"
import Sdata from "./components/shops/sdara"
import {useState} from "react"
import Cart from "./comm/cart/cart"

const MainContext = React.createContext([]);
function App() {
  const productItems = Data.productItems;
  const shopItems = Sdata.shopItems;
  // console.log(productItems);
  
const [CartItem , setCartItem] = useState([]);
  const addToCart =(product) =>{
    const productExit = CartItem.find((item) => item.id === product.id )
    if (productExit) {
      setCartItem(CartItem.map((item) =>
       (item.id === product.id? 
        { ...productExit,qty:productExit.qty + 1 } : item)))
    }else{
      setCartItem([...CartItem,{...product,qty: 1}])
    }
  };
  const clearCart = () => {
    setCartItem([]);
  };
  const decreaseQty =(product) =>{
    const productExit = CartItem.find((item) => item.id === product.id )
    if(productExit.qty ===1){
      setCartItem(CartItem.filter((item) =>item.id  !==   product.id))
    }else{
      setCartItem(CartItem.map((item) => (item.id === product.id? {...productExit,qty : productExit.qty-1}  : item)))
    }
  }
  
  return(
    <MainContext.Provider value={{addToCart : addToCart, clearCart : clearCart}}>
    <Router>
    <Header  CartItem={CartItem}/>
    <Switch>
    <Route path='/' exact>
      <Pages  productItems={productItems} addToCart={addToCart} shopItems={shopItems}
      />
    </Route>
    <Route path='/cart' exact>
    <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
    </Route>
    </Switch>


    </Router>
    
    </MainContext.Provider>


  )
  
}
export default App;
export {MainContext};