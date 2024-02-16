import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import menu from '../../assets/icon-menu.svg'
import close from '../../assets/icon-close.svg'
import './navbar.scss'

const Navbar = () => {

  const [lists, setLists] = useState(['Collection', 'Men', 'Women', 'About', 'Contact'])
  const [isMenu, setIsMenu] = useState(true)

  const handleMenu = () => {
    setIsMenu(!isMenu)
    const body = document.querySelector('body')
    body.style.backgroundColor = isMenu ? 'hsla(0, 0%, 0%, 0.10)' : null
  }


  return (
    <div className='navbar'>

      <div className="logo_container">

        <div className="hamburger-menu" onClick={handleMenu}>
          <img src={!isMenu ? close : menu} alt="menu" />
        </div>

        <img src={logo} alt="Logo" />
        <ul className="list-item">
          {lists.map((list, index) => <li key={index} className='list-item-group'>{list}</li>)}
        </ul>
        
        {!isMenu && <ul className="list-item-mobile">
          {lists.map((list, index) => <li key={index} className='list-item-group'>{list}</li>)}
        </ul>}

      </div>

      <div className="profile-cart">
        <img src={cart} alt="cart" />
        <img src={avatar} alt="Avatar" className='profile' />
      </div>



    </div>
  )
}

export default Navbar
