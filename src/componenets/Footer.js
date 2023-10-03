import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
  return (

   <div className='bg-black  d-flex  justify-content-center align-items-center pt-5'>
      <Container>
        <Row>
          <Col xs={12} sm={6} >
            <div className="px-5  py-2 ">
              <h2 className='text-xl text-white 300 mb-3'>Locate Us</h2>
              <p>Ernakulam</p>
              <p>Mobile: 009683732</p>
              <p>Phone: 0036352899</p>
              <p>Email: anime@gmail.com</p>
            </div>
          </Col>
          <Col xs={12} sm={6} > 
            <div className='p-3 '>
              <h2 className='text-xl text-white 300 mb-3'>Profile</h2>
              <p>My Account</p>
              <p>Checkout</p>
              <p>Order tracking</p>
              <p>help & support</p>
            </div>
          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default Footer

