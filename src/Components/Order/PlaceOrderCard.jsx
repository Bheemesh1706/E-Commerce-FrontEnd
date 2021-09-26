import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "../Schema";
import { useForm } from "react-hook-form";

export function PlaceOrderCard({setOrder}) {
    
 const [cart, setcart, quantity, setquantity] = useContext(CartContext);
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
   cart.map((item)=> {totalcost = totalcost + (item.unit*item.Price)})
   return totalcost
 }

 const handleOrder= (e) =>{
   console.log(e);
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
