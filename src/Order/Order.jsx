import React,{useEffect,useState} from "react";

export function Navbar({Cart})
{   
  
    return(
    <div className={"navbar-container" + (Cart? " active-container":" ") }  >

            <section className={"navbar-modal" + (Cart? " active-modal":" ")} >
                   
            </section>
    </div>)
}