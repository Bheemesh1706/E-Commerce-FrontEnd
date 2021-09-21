import React,{useContext} from "react";
import { AuthContext } from "../../Context/AuthContext";

export function MenuBar({ Menu }) {

const [Token, setToken] = useContext(AuthContext);

  return (
    <div className={"navbar-container" + (Menu ? " active-container" : " ")}>
      <section className={"navbar-modal" + (Menu ? " active-modal" : " ")}>
          <button className="Menu-Button" onClick={()=>setToken(null)}>Log Out</button>
      </section>
    </div>
  );
}
