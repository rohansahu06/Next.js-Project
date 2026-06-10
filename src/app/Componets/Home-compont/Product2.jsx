"use client"
import React, { useEffect, useRef } from 'react'
import './Product2.css'

export default function Product2() {
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
      <h2 id='heading'>Shimla Trip: Nature, Nostalgia & Noodles</h2>
      <div className="image-slider" ref={sliderRef}>
        <img src="https://www.trawell.in/admin/images/upload/487035497Shimla_Main.jpg" alt="Photo 1" className="active" />
        <img src="https://www.honeymoonbug.com/blog/wp-content/uploads/2022/12/shimla-trip.jpg" alt="Photo 2" />
        <img src="https://www.runawaybrit.com/wp-content/uploads/2015/04/IMG_9404.jpg" alt="Photo 3" />
        <img src="https://www.financialexpress.com/wp-content/uploads/2025/01/Snowfall-in-Kashmir-and-Shimla-1.jpg?resize=768" alt="Photo 4" />
      </div>
      <div className="desc">
        <p>
          Jab hum pahadon ki taraf nikle, thandi hawa aur ghane deodar ke jungle ek alag hi sukoon dete the. Mall Road par ghoomna, chhoti‑chhoti shops se shopping karna aur garma‑garam momos khana – sab kuch ekdum perfect tha. Kufri me horse riding aur snow point par barf ke beech masti karna, wo moments kabhi bhoolne layak nahi.

Raat ko Ridge se pura Shimla jagmagata hua dikh raha tha, jaise ek chhoti si duniya roshniyon me chamak rahi ho. Har jagah pahadi logon ki muskaan aur unki hospitality ne trip ko aur bhi khas bana diya.
        </p>
      </div>
    </div>
  )
}
