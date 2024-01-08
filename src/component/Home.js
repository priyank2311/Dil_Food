import React from 'react'
import { CartState } from '../context/Context'
import { productData } from "../Data/product"
import ProductPage from './ProductPage';
import './style.css';

const Home = () => {
  const {state: {products}} = CartState();

  return (
    <div className='flex'>
      <div className='flex w-full p-5 flex-wrap justify-center gap-4'>
        {
          productData.map((prod) => {
            return <ProductPage prod={prod} key={prod.id} />
          })
        }
      </div>
    </div>
  )
}

export default Home