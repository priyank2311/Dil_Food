import React, {useState, useEffect} from 'react'
import { CartState } from '../context/Context'
import { Link } from 'react-router-dom';

const Cart = ({prod}) => {
  const {state: {cart}, dispatch} = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        const itemPrice = Number(curr.price);
        const itemQty = curr.qty || 1; 
        return isNaN(itemPrice) ? acc : acc + itemPrice * itemQty;
      }, 0)
    );
  }, [cart]);

  return (
    <div className='flex'>
      <div className='flex w-full p-5 flex-wrap justify-center gap-4'>
        <div className='flex justify-center flex-row items-center gap-4 flex-wrap text-center'>
          {cart.map((prod) => (
            <div key={prod.id} className="bg-white shadow-md p-4">
              <div className="md:col-span-2">
                <img src={prod.img} alt={prod.name} className="flex items-center justify-center w-60 h-auto flex-wrap rounded" />
              </div>
              <div className="md:col-span-2">
                <span>{prod.name}</span>
              </div>
              <div className="md:col-span-2">
                {prod.price}
              </div>

              <div className='mb-4'>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type='number' value={prod.qty}
                onChange={(e) => {
                  let newQty = parseInt(e.target.value, 4);
                  if (newQty < 1 || isNaN(newQty)) {
                    newQty = 1;
                  }
                  dispatch({
                  type: 'CHANGE_CART_QTY',
                  payload: {
                    id: prod.id,
                    qty: newQty,
                  }})}
                }
                />
              </div>

              <div className="md:col-span-2">
                <button className="p-2 rounded"
                type="button"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
             </div>
            </div>
            ))}
        </div>
        <Link to="/">
          <button className='bg-red-400 text-white rounded-xl flex text-center justify-center items-center p-2'>
            Go To Home
          </button>
        </Link>
        <div className='text-center flex items-start text-2xl'>
        {
          cart.length > 0 ? '' : 'Cart is Empty'
        }
        </div>
      </div>
      
      <div className="flex text-white p-8 flex-col w-1/5 m-2.5 items-center justify-center gap-2.5 bg-gray-800" style={{height:'96vh'}}>
        <span>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Link to='/productcheckout'>
        <button type="button" className='bg-red-400 rounded p-2 text-xl'>
          PLACE ORDER
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Cart