import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Cart/CartSlice';

function ProductCard({ product }) {

  const dispatch = useDispatch();
  const { title, price, image, _id } = product;
  console.log(product)


  return (

    <Card style={{ width: '15rem', height: '24rem' }} className='overflow-hidden product-cards  '>
      <Link to={`/productdetails/${_id}`} state={{ data: product }}>
        <Card.Img style={{ width: '15rem', height: '15rem' }} variant="top" src={image} className='prdt-image' />
      </Link>
      <Card.Body>
        <Card.Title className="m-0 ">{title}</Card.Title>
        <Card.Text className='m-1'>Price:{price}</Card.Text>
        <Button onClick={() => dispatch(addToCart({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
          description: product.description
        }))} variant="primary" className='btn-sm'>Add to Cart</Button>

      </Card.Body>
    </Card>



  )
}

export default ProductCard
