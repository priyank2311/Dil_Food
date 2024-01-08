import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../context/Context'

const ProductCheckOut = () => {
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

  const location = useLocation();
  
  if (location.pathname === '/cart') {
    return null;
  }

  return (
    <div className='flex w-full flex-row-reverse'>
    <div className="container mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Payment Information</h2>
      
      <form className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <div className='mb-4'>
          <input
            type="text"
            name="firstName"
            placeholder='First Name'
            value=''
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className='mb-4'>
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value=''
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className='mb-4'>
          <input
            type="email"
            name="emailId"
            placeholder='Email ID'
            value=''
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className='mb-4'>
          <input
            type="number"
            name="Mobile No."
            placeholder='Mobile No.'
            value=''
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className='mb-4'>
          <input
            type="text"
            name="address1"
            placeholder='Address 1'
            value=''
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className='mb-4'>
          <input
            type="text"
            name="address2"
            placeholder='Address 2'
            value=''
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className='flex items-center justify-evenly'>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          type="submit"
        >
          Process Payment
        </button>

        <Link to='/'>
        <button className='bg-red-400 py-2 px-4 rounded-md text-white'>
          Back to Home
        </button> 
        </Link>
        </div>
      </form>
    </div>
      <div className="flex text-white p-8 flex-col w-1/5 m-2.5 items-center justify-center gap-2.5 bg-gray-800" style={{height:'96vh'}}>
        <span>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Link to='/productcheckout'>
          <button type="button" disabled={cart.length === 0} className='bg-red-400 rounded p-2 text-xl'>
            PLACE ORDER
          </button>
        </Link>
      </div>
  </div>
  )
}

export default ProductCheckOut