"use client"
import React, { useEffect, useRef } from 'react'
import './Product3.css'

export default function Product3() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return; // safety check

    const images = slider.querySelectorAll('img');
    let index = 0;

    const interval = setInterval(() => {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
      index = (index + 1) % images.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="parent">
    <h2 id='heading'>Bastar Trip: Nature, Culture & Adventure</h2>
      <div className="image-slider" ref={sliderRef}>
        <img src="https://portal-tourism.cgstate.gov.in/files/Bastar%20Dussehra.86.jpg" alt="Photo 1" className="active" />
        <img src="https://chhattisgarhtourism.co.in/photo_gallery/bastar/02.jpg" alt="Photo 2" />
        <img src="https://chhattisgarhtourism.co.in/photo_gallery/bastar/03.jpg" alt="Photo 3" />
        <img src="https://magikindia.com/wp-content/uploads/2019/07/dandami-muria-bison-dance.jpg" alt="Photo 4" />
      </div>
      <div className="desc">
        <p>Dense jungle ki shanti, Chitrakote aur Teerathgarh waterfalls ki raw beauty, aur local haat me tribal culture dekhna – sab kuch ek alag hi vibe deta tha.
             Adventure ke saath‑saath wahan ke logon ki simplicity aur hospitality ne trip ko unforgettable bana diya.</p>
      </div>
    </div>
  )
}
