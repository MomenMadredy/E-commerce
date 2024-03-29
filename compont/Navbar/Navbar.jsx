import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const products = useSelector(state => state.cart.products)
  
    const [open,setOpen] = useState(false)

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="https://t3.ftcdn.net/jpg/00/02/22/66/360_F_2226655_oZRxLiayqDEF8M1Gm9NPQIJKqi6KLi.jpg"  alt="" />
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span>AED</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/Products/1">Woman</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/Products/2">Man</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/Products/3">Children</Link>
                </div>
            </div>
            <div className="center">
                <Link className='link' to="/">Momen Shop</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className="icon">
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon" onClick={() => setOpen(!open)}>
                        <ShoppingCartOutlinedIcon/>
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar