import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../../componenets/NavBar';
import CartItem from '../../componenets/CartItem';


function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const [totalAmount, setTotalAmount] = useState("")

  useEffect(() => {
    let price = 0;
    cartItems.map((item) => {
      price += item.price * item.quantity;
      return price
    });
    setTotalAmount(price)
  }, [cartItems])

  return (
    <div>
      <NavBar />
      <h1 className='mx-ato pt-3'>Shopping Cart</h1>
      <CartItem />
      <div>
        <h4>Cart Total Amount:{totalAmount}</h4>
      </div>

    </div>

  )
}

export default Cart
