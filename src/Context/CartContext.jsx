import React,{useState,createContext, useEffect} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) =>
{
    const [cart,setcart] = useState([]);
    const [quantity, setquantity] = useState(0);

    // useEffect(()=>{
    //     console.log({cart})
    // },[cart])

    return(
    <CartContext.Provider value={[cart,setcart,quantity,setquantity]}>
        {props.children}
    </CartContext.Provider>

    );
}