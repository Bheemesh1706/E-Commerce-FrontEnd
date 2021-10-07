import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "../Schema";
import { useForm } from "react-hook-form";
import { sendOrderData } from "../../Backend/Services";
import { AuthContext } from "../../Context/AuthContext";


export function PlaceOrderCard({setOrder,setCart}) {
    
 const [cart, setcart, quantity, setquantity] = useContext(CartContext);
 const [Token,setToken] = useContext(AuthContext);
 const {
   register,
   handleSubmit,
   reset,
   formState: { errors },
 } = useForm({
   resolver: yupResolver(addressSchema),
 });

 const CalculateTotal= () =>{
   var totalcost = 0;
   cart.map((item)=> {totalcost = totalcost + (item.Count*item.Price)})
   return totalcost
 }

 const handleOrder= (address) =>{
   console.log(address);
   console.log(cart);
   const User = Token.split(".");
   const UserID = JSON.parse(atob(User[1]));
   const Id = UserID.id;
   const Total = CalculateTotal();
   sendOrderData({address,cart,Id,Total}).then((e)=>{
     console.log(e.sucess_message);
     if (e.sucess_message === "Order Initiated!") {
       setOrder(false);
       setCart(false);
       setcart([])
     }
   });
 }

  return (
    <div className="card-container">
      {cart.map((item, index) => (
        <React.Fragment key={index}>
          <p>{item.Name}</p>
          <p>Count: {item.Count}</p>
          <section className="card-footer">
            <p>Cost:</p>
            <p>
             Rs {item.Price}
            </p>
            <p>Total: Rs {item.Count * item.Price}</p>
          </section>
        </React.Fragment>
      ))}
      <p>Total Cost: Rs {CalculateTotal()}</p>

      <p>Address:</p>
      <form onSubmit={handleSubmit(handleOrder)}>
        <section>
          <textarea
            className="address-box"
            type="text"
            placeholder="Enter your address..."
            cols="44"
            rows="5"
            name="Address"
            spellCheck="false"
            {...register("Address")}
          ></textarea>
          {errors.Address && (
            <p className="error3"> {errors.Address.message}</p>
          )}
        </section>
        <section className="place-order-button">
          <button className="navbar-modal-button" type="submit">
            Confirm Order
          </button>
          <button
            className="navbar-modal-button"
            onClick={() => setOrder(false)}
          >
            Go Back
          </button>
        </section>
      </form>
    </div>
  );
}
