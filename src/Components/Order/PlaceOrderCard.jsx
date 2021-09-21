import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";

export function PlaceOrderCard({setOrder}) {
    
 const [cart, setcart, quantity, setquantity] = useContext(CartContext);

 const CalculateTotal= () =>{
   var totalcost = 0;
   cart.map((item)=> {totalcost = totalcost + (item.unit*item.Price)})
   return totalcost
 }
  return (
    <div className="card-container">
      {cart.map((item, index) => (
        <React.Fragment key={index}>
          <p>{item.item}</p>
          <p>Count: {item.unit}</p>
          <section className="card-footer">
            <p>Cost:</p>
            <p>
              {item.unit}*{item.Price}
            </p>
            <p>Total: Rs {item.unit * item.Price}</p>
          </section>
        </React.Fragment>
      ))}
      <p>Total Cost: Rs {CalculateTotal()}</p>
      <button className="navbar-modal-button">Confirm Order</button>
      <button className="navbar-modal-button" onClick={()=>setOrder(false)}>Go Back</button>
    </div>
  );
}
