import React, {useState} from 'react'
import { CartState } from '../context/Context'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Header = () => {
  const[isOpen, setIsOpen] = useState(false)
  const {state: {cart}, dispatch} = CartState();
  const location = useLocation();

  const toggleButton = () => {
    setIsOpen(!isOpen)
  }

  if (location.pathname === '/cart') {
    return null;
  }

  if (location.pathname === '/productcheckout') {
    return null;
  }

  return (
    <nav className="p-4 border-2 flex justify-evenly">
      <div className="container mx-auto flex justify-between items-center flex-col gap-1">
        <div className="flex items-center space-x-4">
          <h1 className='text-2xl font-bold font-mono'>Mobile World</h1>
        </div>

        <button onClick={toggleButton} className='bg-red-500 text-white px-4 flex gap-x-2 items-center py-1 rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <span>{cart.length}</span>
        </button>
        {isOpen && (
        <div style={{minWidth:370}}>
          {
            cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.img}
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>₹{prod.price}</span>
                    </div>
                    <button style={{cursor: 'pointer'}} onClick={() => {
                      dispatch({
                        type: 'REMOVE_FROM_CART', payload: prod
                      })
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>
                  </span>
                ))}
                <Link to="/cart">
                  <button style={{ width: "95%", margin: "0 10px" }} className='bg-red-400 text-white rounded-xl'>
                    Go To Cart
                  </button>
                </Link>
              </>
            ) : <span className='flex justify-center'>Cart is Empty</span>
          }
        </div>
      )}
      </div>
    </nav>
  )
}

export default Header

