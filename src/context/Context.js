import { createContext, useContext, useReducer } from "react";
import { productData } from "../Data/product";
import { cartReducer } from "./Reducer";

const Cart = createContext(productData);

const Context = ({children}) => {

  const products = productData.map((product) => <h1>{product.name}</h1>)

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}