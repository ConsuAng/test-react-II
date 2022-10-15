import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const Context = createContext();

const ContextProvider = ({children}) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

    
  async function getPizzas() {
    try{
      const res = await axios.get("/pizzas.json");
      const {data} = await res;
      setPizzas(data);
    } catch(error) {
      console.log(error);
    }
  };
   
  useEffect(() =>{
    getPizzas();
  },[]);

  const addCart = (id) => {
    const pizza = pizzas.find((x)=> x.id === id);
    setTotal(total+pizza.price);
    
    const searchCart = cart.findIndex((x)=>x.id ===id);
    if(searchCart >= 0) {
      cart[searchCart].count++
      setCart([...cart]);
    } else {
      const newObject = {
        id:pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        count: 1
      };
      setCart([...cart, newObject]);
    }
    console.log(cart);
    
  }

  return ( 
    <Context.Provider value={{pizzas, setPizzas, cart, total, addCart}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider };

export default Context;