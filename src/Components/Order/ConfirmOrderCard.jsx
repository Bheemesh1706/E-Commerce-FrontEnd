import React from "react";

export function ConfirmOrderCard({ item }) {
  return (
    <div className="card-container">
      <p>{item.Name}</p>
      <p>Count: {item.unit}</p>
      <section className="card-footer">
        <p>Cost:</p>
        <p>
          Rs {item.Price}
        </p>
        <p>Total: Rs {item.unit * item.Price}</p>
      </section>
    </div>
  );
}
