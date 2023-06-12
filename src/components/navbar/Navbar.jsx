import { useState } from "react"
import "./navbar.scss"
import {AiOutlineShoppingCart,AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isNavOpen,setNavOpen]=useState(false)
  return (
    <header>
      <div className="wrapper">
        <img src="https://res.cloudinary.com/dxxh8iica/image/upload/v1686378441/restaurant/LOGO_f58p1b.png" alt="" />
        <nav>
          <ul>
          <Link style={{textDecoration:'none',color:"inherit"}} to="/"><li>Home</li></Link>
          <Link style={{textDecoration:'none',color:"inherit"}}  to="/menu"><li>Menu</li></Link>
          <Link style={{textDecoration:'none',color:"inherit"}}  to="/about"><li>About</li></Link>
          <Link style={{textDecoration:'none',color:"inherit"}}  to="/contact"><li>Contact</li></Link>
            <li><AiOutlineShoppingCart className="cartIcon"/></li>
          </ul>
          <div className="contactDiv">
                <div className="numberDiv">
                    <div className="top"><FiPhoneCall/>+987-82-18015</div>
                    <span>Contact us for reservation</span>
                </div>
                <button>BOOK A TABLE</button>
          </div>
        </nav>
        {isNavOpen?<AiOutlineClose className="navIcon" onClick={()=>setNavOpen(false)}/>:<AiOutlineMenu className="navIcon"  onClick={()=>setNavOpen(true)}/>}
        {isNavOpen && <nav className="mobileNav">
        <div className="wrapper">
        <ul>
          <Link style={{textDecoration:'none',color:"inherit"}} to="/"><li>Home</li></Link>
          <Link style={{textDecoration:'none',color:"inherit"}}  to="/menu"><li>Menu</li></Link>
          <Link style={{textDecoration:'none',color:"inherit"}}  to="/about"><li>About</li></Link>
          <Link style={{textDecoration:'none',color:"inherit"}}  to="/contact"><li>Contact</li></Link>
          </ul>
          <button>BOOK A TABLE</button>
        </div>
      </nav>}
      </div>
      
    </header>
  )
}

export default Navbar