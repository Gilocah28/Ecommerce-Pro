import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import menu from '../../assets/icon-menu.svg'
import close from '../../assets/icon-close.svg'
import './navbar.scss'

const Navbar = () => {

  const [lists, setLists] = useState(['Collection', 'Men', 'Women', 'About', 'Contact'])

  const [handleMenuBtn, setHandleMenuBtn] = useState(null)
  const [isBg, setIsBg] = useState(true)


  const handleMenu = () => {

    const body = document.querySelector('body')

    setHandleMenuBtn((prevMenu) => prevMenu === null ? 'list-item-mobile' : null)
    setIsBg(!isBg)
    body.style.backgroundColor = isBg ? 'hsla(0, 0%, 0%, 0.10)' : null;

  }


  return (
    <div className='navbar'>

      <div className="logo_container">

        <div className="hamburger-menu" onClick={handleMenu}>
          <img src={isBg ? menu : close} alt="menu" />
        </div>

        <img src={logo} alt="Logo" />
        <ul className={`list-item ${handleMenuBtn}`}>
          {lists.map((list, index) => <li key={index} className='list-item-group'>{list}</li>)}
        </ul>

      </div>

      <div className="profile-cart">
        <img src={cart} alt="cart" />
        <img src={avatar} alt="Avatar" className='profile' />
      </div>



    </div>
  )
}

export default Navbar
