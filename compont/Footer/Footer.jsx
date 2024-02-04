import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Expedita dignissimos repellat ducimus obcaecati, porro 
            et adipisci possimus qui labore optio esse hic deserunt 
            illum laborum fugiat! Aliquid quis beatae quo.
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Expedita dignissimos repellat ducimus obcaecati, porro 
            et adipisci possimus qui labore optio esse hic deserunt 
            illum laborum fugiat! Aliquid quis beatae quo.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Momen Shop</div>
          <div className="copyright">
            @Copyright 2024. All Right Reserved
          </div>
        </div>
        <div className="right">
          <img src="https://gradmedia.org/wp-content/uploads/2021/08/fama-strip.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer