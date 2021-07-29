import React,{useEffect,useState}from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import  {Redirect} from  "react-router-dom";
import { Product } from "./Product";
import { Navbar } from "../Order/Order";


export function Dashboard()
{
    const itemlist = ["Apple","Orange","Grape","Pinaple","Melon"]

    const [active,setactive] = useState(false);

    const carthandler = () =>
    {
        setactive(!active);
        console.log("");
        console.log(active);
    }

    return (
    <div className="Dashboard">
        
                <section className="navbar">
                    <nav className="navbar-items">
                            <p>E-Commerce</p>
                            <span ><ShoppingCartIcon onClick={carthandler}/> </span>
                    </nav>
               

                </section>
                <section>
                    <Navbar Cart={active}/>
                </section>
                <section className="Dashboard-List">
                        {itemlist.map((item)=>(<Product ProductDetails={item}/>))}
                </section>


    </div>

    
    
    
    );
}