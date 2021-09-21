import React,{useEffect,useState,useContext}from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CartContext } from "../../Context/CartContext";

export function Product({ProductDetails})
{

    const [counter,setcounter] = useState(0);
    const [active,setactive] = useState(false);
    const [cart, setcart] = useContext(CartContext);

    useEffect(()=>{

            const filtered = [
              ...cart.filter(({ id }) => id !== ProductDetails.id)
            ];
              counter?setcart(c=>[...filtered,{...ProductDetails,unit:counter}]):setcart(filtered)

                setactive(!!counter);
    },[counter])



    const counterHandler=  () =>
    {   
        setcounter(counter+1);

    }

    const addCounter = ()=>
    {
        setcounter(counter+1);

    }

    const minusCounter = ()=>
    {
        setcounter(counter-1);
        

     
    }

    return(
        <div className="Product"> 

            <section className="Product-Detail">
                    {ProductDetails.item}
            </section>

            <section className="Product-Container">
                
                <section className="left">

                    <div className="left-items">
                        <section className="sup">₹</section>
                        <span>{ProductDetails.Price}</span>
                        <sub>/
                            {ProductDetails.weight}</sub>
                    </div>

                </section>

                <section className="right">

                    <div className="right-items"> 
                    
                        <div className="layer-1">
                            <span><AddIcon onClick={counterHandler}/></span>
                        </div>  

                        <div className={"layer-2" + (active?" layer-2-active":" ")}>
                            <section className= "layer-2-items">
                                    <span className="add"><AddIcon onClick={addCounter} /></span>
                                    <span className="total">{counter}</span>
                                    <span className="minus"><RemoveIcon onClick={minusCounter} /></span>
                            </section>
                        </div> 
                        
                    </div>
                
                </section>

            </section>

        </div>
    );
}