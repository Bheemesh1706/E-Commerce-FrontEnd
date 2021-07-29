import React,{useEffect,useState}from "react";
import AddIcon from '@material-ui/icons/Add';

export function Product({ProductDetails})
{
    return(
        <div className="Product"> 

            <section className="Product-Detail">
                    {ProductDetails}
            </section>

            <section className="Product-Container">
                
                <section className="left">

                    <div className="left-items">
                        <section className="sup">₹</section>
                        <span>60</span>
                        <sub>/
                            1kg</sub>
                    </div>

                </section>

                <section className="right">

                    <div className="right-items"> 
                    
                        <div className="layer-1">
                            <span><AddIcon/></span>
                        </div>  
                        <div className="layer-2">
                        </div> 
                        
                    </div>
                
                </section>

            </section>

        </div>
    );
}