import React from 'react';

export function Card ()
{
    return(
    <div className="card-container">
            <p>Apple</p>
            <p>Count: 5</p>
            <section className="card-footer">
                <p>Cost:</p>
                <p>5*Price</p>
                <p>Total: 100000</p>
            </section>
    </div>);
}