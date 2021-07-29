import React,{useEffect,useState} from "react";

export function Navbar({Cart})
{   
  
    return(
    <div className={"navbar-container" + (Cart? " active":" ") }  >

            <section className="navbar-modal" >
                   
            </section>
    </div>)
}