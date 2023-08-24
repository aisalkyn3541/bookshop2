import React from 'react'
import './style.css';

const Footer = () => {
  return (
    <div>
        <div className='footerAbout'>
              <div className='first'>
                <h3>Sign up for our newsletter</h3>
                <p>Be the first to know about our special
                   offers, news, and updates.</p>
                   <form>
                    <input className='input' placeholder='Email Addressv' />
                    <button className='button'>Sign Up</button>
                   </form>
              </div>      
              <div className='lorem'>
              <div className='Footer'>
                  <h4>
                  Lorem Ipsum
                  </h4>
                  <p>
                  Lorem<br/>Lorem<br/>Lorem<br/>Lorem<br/>Lorem
                  </p>
              </div>
              <div className='Footer'>
              <h4>
                  Lorem Ipsum
                  </h4>
                  <p>
                  Lorem<br/>Lorem<br/>Lorem<br/>Lorem<br/>Lorem
                  </p>
              </div>
               <div className='Footer'>
               <h4>
                  Lorem Ipsum
                  </h4>
                  <p>
                  Lorem<br/>Lorem<br/>Lorem<br/>Lorem<br/>Lorem
                  </p>
              </div>
              <div className='Footer'>
              <h4>
                  Lorem Ipsum
                  </h4>
                  <p>
                  Lorem<br/>Lorem<br/>Lorem<br/>Lorem<br/>Lorem
                  </p>
              </div>
              </div>

        </div>
    </div>
  )
}

export default Footer