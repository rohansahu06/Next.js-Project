"use client";
import "./notfound.css";
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 id="not-found-title">404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <br/>
      <button id="go-back-home"><Link href="/">Go Back Home</Link></button>
     
    </div>
  );
}