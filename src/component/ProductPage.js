import React from 'react'
import { CartState } from '../context/Context'

const ProductPage = ({prod}) => {
  const {state: {cart}, dispatch} = CartState()

  return (
    <div className='flex flex-col justify-center items-center shadow-lg w-60 gap-1.5 p-5 text-center flex-nowrap'>
      <img src={prod.img} alt='product-image' className='w-60 h-60' />
      <h1 className='text-lg'>{prod.name}</h1>
      <p className='p-1 text-black text-center'>{prod.description}</p>
      <h1 className='font-bold'>₹{prod.price}</h1>
      {
        cart.some((x) => x.id === prod.id) ? (<button onClick={() => {
          dispatch({
            type: 'REMOVE_FROM_CART',
            payload: prod
          })
        }} className="bg-blue-500 text-white px-4 rounded">Remove from Cart</button>) : 
        (<button onClick={() => {
          dispatch({
            type: 'ADD_TO_CART',
            payload: prod
          })
        }} className="bg-red-500 text-white px-4 rounded">Add to Cart</button>)
      }
    </div>
  )
}

export default ProductPage