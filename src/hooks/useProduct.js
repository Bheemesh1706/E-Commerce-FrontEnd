import axios from "axios";
import { useState , useEffect} from "react";



export default function useProducts() {


  const [products, setProducts] = useState([
    // { id:1,
    //   item: "Apple",
    //   Price: 50,
    //   weight: "500gm",
    //   unit: 0,
    // },
    // { id:2,
    //   item: "Grape",
    //   Price: 60,
    //   weight: "1Kg",
    //   unit: 0,
    // },
    // { id:3,
    //   item: "Pineapple",
    //   Price: 70,
    //   weight: "1kg",
    //   unit: 0,
    // },
    // { id:4,
    //   item: "Watermelon",
    //   Price: 50,
    //   weight: "1kg",
    //   unit: 0,
    // },
  ]);

  const getProducts = async()=>{

    const {data} = await axios.get("http://localhost:3001/api/product");
    console.log(data);
    setProducts(data.products);

  }

    useEffect(()=>{
        getProducts();
    },[setProducts])

  return [products, setProducts];
}
