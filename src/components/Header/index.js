import React from 'react'
import logo from '../../image/Logo (1).png'

const Header = () => {
  return (
    <div id='header' >
      <div className='container'>
        <div className='header'>
          <div header-nav>
            <img src={logo} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header