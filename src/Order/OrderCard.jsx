import React from 'react';

export function Card ({item})
{
    return(
    <div className="card-container">
            <p>{item.item}</p>
            <p>Count: {item.unit}</p>
            <section className="card-footer">
                <p>Cost:</p>
                <p>{item.unit}*{item.Price}</p>
                <p>Total: Rs {item.unit * item.Price}</p>
            </section>
    </div>);
}