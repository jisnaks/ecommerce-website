import React, { useEffect } from 'react'
import CartSlice, { getProducts } from '../features/Cart/CartSlice'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'


function Products() {
  const { products } = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <h1 className='pt-5 mx-auto'>SHOP EVERYDAY</h1>
      <p className='fs-5 pt-3'>
        Dress to impress with our fashion finesse.Style that always sets the trend.Your fashion destination awaits.Be fashion-forward with us. Unleash your inner fashionista.Look good, feel great, and stay ahead.Wearing anything but our clothes is a crime. Step into style with our collection.
      </p>
      <div className=' d-flex flex-wrap pt-3 justify-content-center gap-5'>
        {products.map((item, key) => {
          return <ProductCard product={item} key={key} />

        }
        )}
      </div>
    </div>
  )
}

export default Products
