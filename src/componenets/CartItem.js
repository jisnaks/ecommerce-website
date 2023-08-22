import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteFromCart, incrementQuantity, decrementQantity } from '../features/Cart/CartSlice';

function CartItem() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className='d-flex '>

      {
        cartItems.map((item, key) => {
          return (
            <Card style={{ width: '15rem', height: '30rem' }} className='m-4 overflow-hidden product-cards  '>
              <Card.Img style={{ width: '15rem', height: '15rem' }} variant="top" src={item.image} className='prdt-image' />
              <Card.Body>
                <Card.Title className="m-0 ">{item.title}</Card.Title>
                <Card.Text className='m-1'>Price:{item.price}</Card.Text>
                <div className='d-flex gap-4 justify-content-center'>
                  <div style={{ height: "50px", width: '200px' }} className=' d-flex justify-content-center align-items-center gap-4 border p-2'>
                    <p className=''>Quantity</p>
                    <div className='d-flex justify-content-center align-items-center '>
                      <button onClick={() => dispatch(decrementQantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description
                      }))}>-</button>
                      <span className='p-3'>{item.quantity}</span>
                      <button onClick={() => dispatch(incrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description

                      }))}>+</button>
                    </div>
                  </div>

                </div>
                <Card.Text className='m-1'>Qty:{item.quantity}</Card.Text>
                <Card.Text className='m-1'>Total price:{item.price * item.quantity}</Card.Text>
                <FontAwesomeIcon onClick={() => dispatch(deleteFromCart(item._id))} icon={faTrash} className='pt-0' />
              </Card.Body>

            </Card>
          )
        })
      }

    </div>


  )
}

export default CartItem
