import React from 'react';

export function Card ({Order})
{
    return (
      <div className="card-container">
        <p>{Order.Name}</p>
        <p>Count: {Order.Count}</p>
        <section className="card-footer">
          <p>Cost:</p>
          <p>Rs {Order.Price}</p>
          <p>Total: Rs {Order.Count * Order.Price}</p>
        </section>
      </div>
    );
}