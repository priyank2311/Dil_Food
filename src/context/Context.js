import { createContext, useContext, useReducer } from "react";
// import faker from "faker";
// import { faker } from '@faker-js/faker';
import { productData } from "../Data/product";
import { cartReducer } from "./Reducer";

const Cart = createContext(productData);

const Context = ({children}) => {
  // const products = [...Array(6)].map(() => ({
  //   id: faker.string.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.image.avatar(),
  //   fastDelivery: faker.datatype.boolean(),
  // }));

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