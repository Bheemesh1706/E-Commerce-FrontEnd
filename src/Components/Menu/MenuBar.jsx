import React,{useContext, useState} from "react";
import { AuthContext } from "../../Context/AuthContext";
import {getOrderDetails} from "../../Backend/Services"
export function MenuBar({ Menu }) {

const [Token, setToken] = useContext(AuthContext);
const [orderList,setOrderList] = useState(false);

  return (
    <div>
      {!orderList ? (
        <div
          className={"navbar-container" + (Menu ? " active-container" : " ")}
        >
          <section className={"navbar-modal" + (Menu ? " active-modal" : " ")}>
            <button className="Menu-Button" onClick={() => setOrderList(true)}>
              Orders
            </button>
            <button className="Menu-Button" onClick={() => setToken(null)}>
              Log Out
            </button>
          </section>
        </div>
      ) : (
        <div
          className={"navbar-container" + (Menu ? " active-container" : " ")}
        >
          <section className={"navbar-modal" + (Menu ? " active-modal" : " ")}>
            <p onClick={()=> getOrderDetails(Token)}>Orders</p>
            <button
              className="navbar-modal-button"
              onClick={() => setOrderList(false)}
            >
              Go Back
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
