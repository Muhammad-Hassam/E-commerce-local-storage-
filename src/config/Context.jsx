import { createContext, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";

export const cardContext = createContext(null);
export const useCard = () => useContext(cardContext);
export const CardProvider = ({ children }) => {
  
    const[card_arr, fCard_arr]=useState([]);
    
    const { register, handleSubmit } = useForm();
    const history=useHistory();
  

    const onSubmit = ({edition, company, picture,price, genderOptions}) => {
      const newcard_arr = [...card_arr]
      newcard_arr.push({edition, company, picture, price, genderOptions})
      localStorage.setItem("Cards",JSON.stringify(newcard_arr));
      
      fCard_arr(newcard_arr);
      history.push("/");
    }
  
    //     
    const value= {
        card_arr:card_arr,
        // dataItems:dataItems,
        register,
        handleSubmit,
        onSubmit,
    }
        

    return <cardContext.Provider value={value}>
    {children}
    </cardContext.Provider>
}

