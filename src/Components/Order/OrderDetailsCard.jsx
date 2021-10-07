import React from 'react'

export default function OrderDetailsCard({Order,OrderDetails}) {
    console.log({Order,OrderDetails});
    const Details = OrderDetails.filter(o=> o.OrderID == Order._id)
    return (
      <div className="card-container">
        <p>{Order._id}</p>
        {Details.map((Detail) => (
          <React.Fragment key={Detail._id}>
            <p>{Detail.Name}</p>
            <p>Count: {Detail.Count}</p>
            <section className="card-footer">
              <p>Cost:</p>
              <p>Rs {Detail.Price}</p>
            </section>
          </React.Fragment>
        ))}
        <p>Total: Rs {Order.Total}</p>
      </div>
    );
}
