import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { getOrderItemDetails, getOrderDetails } from "../../Backend/Services";
import InfiniteScroll from "react-infinite-scroll-component";
import { ConfirmOrderCard } from "../Order/ConfirmOrderCard";

import OrderDetailsCard from "../Order/OrderDetailsCard";

export function MenuBar({ Menu }) {
  const [Token, setToken] = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState([]);
  const [orderid, setOrderId] = useState([]);
  const [orderList, setOrderList] = useState(false);

  useEffect(() => {
    getOrderDetails(Token, page).then((e) => {
      console.log(e);
      console.log("order");
      console.log(page);
      setOrderId([...orderid, ...e]);
      console.log(orderid);
    });
  }, [page]);

  useEffect(() => {
    for (let i = (page - 1) * 2; i < orderid.length; i++) {
      getOrderItemDetails(Token, orderid[i]?._id).then((e) => {
        setOrder((order) => [...order, ...e]);
      });
    }
  }, [orderid]);

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
            <InfiniteScroll
              dataLength={order.length}
              next={()=>setPage(pg=> pg + 1)}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>END</b>
                </p>
              }

            > {orderid.map((item, index) => (
              <React.Fragment key={index}>
                <OrderDetailsCard Order={item} OrderDetails={order} />
              </React.Fragment>
            ))}
            </InfiniteScroll>

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
