import { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import auth from "../config/firebase";


export const cartContext = createContext(null);
export const useCart = () => useContext(cartContext);
export const CartProvider = ({ children }) => {
  let [carts,setcarts]=useState([]);
  let [cart]=useState(carts.length);
  const history=useHistory();

  const authentication=()=>{
    if(auth){
      history.push("/login");
      }
      else{
      history.push("/cartitems"); 
      }
   } 


  const addCart=(product)=>{
    const newcarts=[...carts]
    newcarts.push(product)
    setcarts(newcarts);
    localStorage.setItem("carts",JSON.stringify(newcarts));
    // authentication();
    history.push("/cartitems"); 

     }


      const value= {
        addCart,
        carts:carts,
        cart:cart

    }
      return <cartContext.Provider value={value}>
      {children}
      </cartContext.Provider>
}