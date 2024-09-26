import React from 'react'
import '../App.css'
export default function Navebar() {
  return (
   <>
    <nav>
    <div className="logo">MyLogo</div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div className="burger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
   </>
  )
}
