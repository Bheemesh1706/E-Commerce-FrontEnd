import React, { useEffect, useState, useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Redirect } from "react-router-dom";
import { Product } from "./Product";
import { Navbar } from "../Order/Order";
import { MenuBar } from "../Menu/MenuBar";
import { CartContext } from "../../Context/CartContext";
import useProduct from "../../hooks/useProduct";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthContext } from "../../Context/AuthContext";
export function Dashboard() {
  const [cart, setcart, quantity] = useContext(CartContext);

  const [product, setproduct] = useProduct();
  const [Token, setToken] = useContext(AuthContext);

  const [activecart, setActiveCart] = useState(false);
  const [activemenu,setActiveMenu] = useState(false);

  const carthandler = () => {
    setActiveCart(!activecart);

  };

  const menuhandler = ()=>{
    setActiveMenu(!activemenu);
  }

  return (
    
    <div className="Dashboard">
      <section className="navbar">
        <nav className="navbar-items">
          <p>E-Commerce</p>
          <div className="icon-button">
            <section className="icon" onClick={menuhandler}>
              <MenuIcon />
            </section>
            <span onClick={carthandler}>
              <Badge badgeContent={quantity} max={99} color="primary">
                <div className="icon">
                  <ShoppingCartIcon />
                </div>
              </Badge>
            </span>
          </div>
        </nav>
      </section>
      <section>
        <Navbar Cart={activecart} setCart={setActiveCart} />
      </section>
      <section>
        <MenuBar Menu={activemenu} />
      </section>
      <section className="Dashboard-List">
        {product?.map((item) => (
          <Product ProductDetails={item} />
        ))}
      </section>
    </div>
  );
}
