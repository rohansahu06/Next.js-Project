import React from 'react'
import './Footer.css'

export default function Footer_componets() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h3>About My Vlog</h3>
          <p>Sharing stories, experiences, and adventures through videos. 🎥✨</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>back to..</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Video_page">Videos</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Login_page">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: rohanvlogs@example.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">🌐 YouTube</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            <br/>
             <br/>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Rohan Vlogs. All rights reserved.</p>
      </div>
    </footer>
  )
}
