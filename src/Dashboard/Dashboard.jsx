import React,{useEffect,useState,useContext}from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import  {Redirect} from  "react-router-dom";
import { Product } from "./Product";
import { Navbar } from "../Order/Order";
import { CartContext } from "../Context/CartContext";
import useProduct from "../hooks/useProduct";
import Badge from "@material-ui/core/Badge";





export function Dashboard()
{

    const [cart,setcart,quantity] = useContext(CartContext);

    const [product,setproduct] = useProduct();

    const [active,setactive] = useState(false);

    

    const carthandler = () =>
    {
        setactive(!active);
    }


    

    return (
      <div className="Dashboard">
        <section className="navbar">
          <nav className="navbar-items">
            <p>E-Commerce</p>
            <span onClick={carthandler}>
              <Badge badgeContent={quantity} max={99} color="primary">
                <div className="icon">
                  <ShoppingCartIcon />
                </div>
              </Badge>
            </span>
          </nav>
        </section>
        <section>
          <Navbar Cart={active} />
        </section>
        <section className="Dashboard-List">
          {product?.map((item) => (
            <Product ProductDetails={item} />
          ))}
        </section>
      </div>
    );
}