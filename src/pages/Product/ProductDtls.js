
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addToCart } from '../../features/Cart/CartSlice';
import { useDispatch } from 'react-redux';
import NavBar from '../../componenets/NavBar';


function ProductDtls(props) {

  const dispatch = useDispatch()
  const location = useLocation();
  const [details, setDeatails] = useState({})
  const [baseQty, setBaseQty] = useState(1)

  useEffect(() => {
    setDeatails(location.state?.data);
  }, []);



  return (
    <div>
      <NavBar />
      <div className='details w-100 h-100 d-flex justify-content-center p-5'>

        <img variant="top" src={details.image} className='product-image' />
        <div className='w-50 p-4 '>
          <div className=' title'>
            <h1>{details.title}</h1>
            <p className='fs-4 p-4 '>Price:  {details.price}</p>
            <p className='pb-3'>Description: {details.description}</p>
          </div>
          <div className='d-flex gap-4 justify-content-center'>
            <div style={{ height: "50px", width: '200px' }} className=' d-flex justify-content-center align-items-center gap-4 border p-2'>
              <p className=''>Quantity</p>
              <div className='d-flex justify-content-center align-items-center '>
                <button style={{ width: '25px', height: '25px' }} onClick={() => setBaseQty(baseQty > 1 ? baseQty - 1 : 1)} className=' border text-black d-flex justify-content-center align-items-center '>-</button>
                <span className='p-3'>{baseQty}</span>
                <button style={{ width: '25px', height: '25px' }} onClick={() => setBaseQty(baseQty + 1)} className='border  d-flex justify-content-center align-items-center'>+</button>
              </div>
            </div>
            <button onClick={() => dispatch(addToCart({
              _id: details._id,
              title: details.title,
              image: details.image,
              price: details.price,
              quantity: baseQty,
              description: details.description
            }))} className='bg-black text-white py-3 px-6'>Add To Cart</button>
          </div>
          <p className='p-5 '>Category: <span className='font-medium capitalize'>{details.category}</span></p>
        </div>
      </div>
    </div>
  )
}

export default ProductDtls