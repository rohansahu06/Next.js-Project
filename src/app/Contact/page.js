"use client";
import React from 'react'
import "./contact.css"

export default function Contact_page() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" />

        <label>Location</label>
        <input type="text" placeholder="City / State" />

        <label>Country</label>
        <select>
          <option>Select your country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

        <label>Message</label>
        <textarea rows="4" placeholder="Write your message..."></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
