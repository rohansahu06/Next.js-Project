"use client"
import React, { useEffect, useRef } from 'react'
import './Product4.css'

export default function Product4() {
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
    <h2 id='heading'>From Jaipur to Jaisalmer: Rajasthan Experience</h2>
      <div className="image-slider" ref={sliderRef}>
        <img src="https://wanderon-images.gumlet.io/gallery/new/2025/09/14/1757798488258-rajasthan-trip-budget-and-cost-guide.jpg?auto=compress%2Cformat&w=1280" alt="Photo 1" className="active" />
        <img src="https://www.indiadrivertours.com/wp-content/uploads/2023/01/rajasthan-blog.jpg" alt="Photo 2" />
        <img src="https://images.herzindagi.info/image/2024/May/rajasthan-trip-tips.jpg" alt="Photo 3" />
        <img src="https://jaipurbuzz.in/wp-content/uploads/2025/01/Rajasthani-thali-in-Jaipur-1024x576.jpg" alt="Photo 4" />
         <img src="https://www.easeindiatrip.com/blog/wp-content/uploads/2024/10/Pushkar-Cultural-Performances-in-Pushkar-Camel-Fair.jpg" alt="Photo 5" />
      </div>
      <div className="desc">
        <p>
          Jaipur ke forts aur palaces dekhkar lagta tha jaise hum history ke beech chal rahe ho. Amber Fort ki grandeur aur Hawa Mahal ki beauty ne dil jeet liya. Udaipur ke lakes par boat ride karna aur sunset dekhna ekdum magical tha.

Thar desert me camel safari aur cultural dance dekhna ek alag hi adventure tha. Local bazaar me traditional jewelry aur handicrafts lena trip ko aur bhi colorful bana gaya.

Rajasthan ki yatra sirf ek ghumne ka safar nahi, balki ek royal experience tha jo hamesha yaad rahega. ❤️
        </p>
      </div>
    </div>
  )
}
