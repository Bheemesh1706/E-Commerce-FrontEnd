import React,{useState,createContext, useEffect} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) =>
{
    const [cart,setcart] = useState([]);

    // useEffect(()=>{
    //     console.log({cart})
    // },[cart])

    return(
    <CartContext.Provider value={[cart,setcart]}>
        {props.children}
    </CartContext.Provider>

    );
}