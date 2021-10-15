import React, { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './Store/CartProvider'
function App() {
    const [cartShown ,setCartShown]=useState(false)
    const showCart=()=>{
        setCartShown(true);
        
    }
    const hideCart=()=>{
        setCartShown(false);
    }
    return (
        <CartProvider>


            { cartShown &&<Cart onhide={hideCart}/>}

            <Header onShowCart={showCart}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    )
}

export default App

