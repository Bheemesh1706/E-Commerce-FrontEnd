import React,{useEffect,useState,useContext} from "react";
import { Card } from "./OrderCard";
import { CartContext } from "../Context/CartContext";

export function Navbar({Cart})
{   
    const [cart,setcart] = useContext(CartContext);
    const [quantity,setquantity] = useState(0);

    useEffect(()=>{

        setquantity(cart.reduce((sum,item)=>sum+item.unit,0))
    
    },[cart])

    return(
    <div className={"navbar-container" + (Cart? " active-container":" ") }  >

            <section className={"navbar-modal" + (Cart? " active-modal":" ")} >
                   {quantity?<Card/>:<p>Cart Empty</p>}
            </section>
    </div>)
}