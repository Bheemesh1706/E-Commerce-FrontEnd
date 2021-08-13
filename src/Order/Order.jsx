import React,{useEffect,useState,useContext} from "react";
import { Card } from "./OrderCard";
import { CartContext } from "../Context/CartContext";

export function Navbar({Cart})
{   
    const [cart,setcart,quantity,setquantity] = useContext(CartContext);

    useEffect(()=>{

        setquantity(cart.reduce((sum,item)=>sum+item.unit,0))
    
    },[cart])

    return (
      <div className={"navbar-container" + (Cart ? " active-container" : " ")}>
        <section className={"navbar-modal" + (Cart ? " active-modal" : " ")}>
          {quantity ? (
            cart.map((item) => (item.unit > 0 ? <Card item={item} /> : ""))
          ) : (
            <p>Cart Empty</p>
          )}
          { quantity? <button className="navbar-modal-button"  onClick={()=>setcart([])}>Clear Cart</button> : " "} 
        </section>
      </div>
    );
}