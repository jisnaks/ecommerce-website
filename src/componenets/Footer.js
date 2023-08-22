import React from 'react'
function Footer() {
  return (

    <div className='bg-black  d-flex  justify-content-center aligh-items-center'>

      <div className='d-flex flex-col '>
        <div className="px-5 me-5 py-2 ">
          <h2 className='text-xl text-white 300 mb-3'>Locate Us</h2>
          <p>Ernakulam</p>
          <p>Mobile: 009683732</p>
          <p>Phone: 0036352899</p>
          <p>Email: anime@gmail.com</p>
        </div>
        <div className='p-3 ms-5'>
          <h2 className='text-xl text-white 300 mb-3'>Profile</h2>
          <p>My Account</p>
          <p>Checkout</p>
          <p>Order tracking</p>
          <p>help & support</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

