import React from 'react';

export function Card ({item})
{
    return(
    <div className="card-container">
            <p>{item.Name}</p>
            <p>Count: {item.Count}</p>
            <section className="card-footer">
                <p>Cost:</p>
                <p>{item.Count}*{item.Price}</p>
                <p>Total: Rs {item.Count * item.Price}</p>
            </section>
    </div>);
}