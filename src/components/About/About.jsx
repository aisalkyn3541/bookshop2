import React, { Component } from 'react'
import './index.css';

export class index extends Component {
  render() {
    const imagePath = '/aboutImg/book.png';

    return (
      <div>
        <div className='main'>
        <h1>About Us</h1>
        <div className='imgText'>
            <img className='img' src={imagePath} alt="" />
            <p>We believe that books have the power to change lives,
               and we're dedicated to helping our customers find the
                perfect book for them. Whether you're looking for an
                 escape from reality, an educational read, or a book
                  to inspire you, we've got you covered.
              Thank you for choosing to shop with us. We 
              look forward to helping you discover your 
              next favorite book!</p>
        </div>

        </div>
      </div>
    )
  }
}

export default index