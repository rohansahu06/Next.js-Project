"use client"
import React from 'react'
import './Navbaar.css'
import Link from "next/link"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbaar_logo from './logo.png';
 

export default function Navbaar_componets() {
  return (
     <div className="Navbaar">
     <div className="logo">
        <img src={Navbaar_logo} alt="logo" />
      </div>
     <div className="search"><input type="text" placeholder="Find your favorite trip.. location" /> <i className="fa-solid fa-magnifying-glass"></i>
    </div>

    <button id='btn-photo-page'><Link href="/photo-page">Photos</Link></button>
    <button id='btn-video'><Link href="/Video_page">Videos</Link></button>
    <button id='btn-home'><Link href="/">Home</Link></button>
    <button id='btn-contact'><Link href="/Contact">Contact</Link></button>
    <button id='btn-login'><Link href="/Login_page">Login</Link></button>

</div>
  )
}
