import React,{useEffect,useState,useContext} from "react";
import { Card } from "./OrderCard";
import { CartContext } from "../../Context/CartContext";
import { PlaceOrderCard } from "./PlaceOrderCard";

export function Navbar({Cart,setCart})
{   
    const [cart,setcart,quantity,setquantity] = useContext(CartContext);

    const [order,setOrder] = useState(false);

    useEffect(()=>{

        setquantity(cart.reduce((sum,item)=>sum+item.unit,0))
    
    },[cart])

    return (<div>

         { !order ? (
          <div className={"navbar-container" + (Cart ? " active-container" : " ")}>
          <section className={"navbar-modal" + (Cart ? " active-modal" : " ")}>
          {quantity ? (
            cart.map((item) => (item.unit > 0 ? <Card item={item} /> : ""))
          ) : (
            <p>Cart Empty</p>
          )}
          {quantity ? (
            <button className="navbar-modal-button" onClick={() => setcart([])}>
              Clear Cart
            </button>
          ) : (
            " "
          )}
          {quantity ? (
            <button className="navbar-modal-button" onClick={() => setOrder(true)}>
              Place Order
            </button>
          ) : (
            " "
          )}  </section>
      </div>) : (
         <div className={"navbar-container" + (Cart ? " active-container" : " ")}>
          <section className={"navbar-modal" + (Cart ? " active-modal" : " ")}>
           <PlaceOrderCard setOrder={setOrder} setCart={setCart}/>
         </section>
      </div>)}  
    </div>);
}