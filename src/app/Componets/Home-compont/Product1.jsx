"use client"
import React, { useEffect } from 'react'
import './Product1.css'

export default function Product1() {
  useEffect(() => {
    const slider = document.querySelector('.image-slider');
    const images = slider.querySelectorAll('img');
    let index = 0;

    const interval = setInterval(() => {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
      index = (index + 1) % images.length;
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="parent">
      <h2 id='heading'>Barf, Bhakti aur Breathtaking Views – Kedarnath Trip</h2>
      <div className="image-slider">
        <img src="https://curlytales.com/wp-content/uploads/2022/07/Also-read-Aviation-Minister-Jyotiraditya-Scindia-To-2022-07-04T175416.870.jpg" alt="Photo 1" className="active" />
        <img src="https://buddymantra.com/wp-content/uploads/2021/10/kedarnath-temple.jpg" alt="Photo 2" />
        <img src="https://d2qa7a8q0vuocm.cloudfront.net/images/40053320250328133241.png" alt="Photo 3" />
        <img src="https://static.tnn.in/thumb/msid-110000930,thumbsize-148866,width-1280,height-720,resizemode-75/110000930.jpg" alt="Photo 4" />
      </div>
      <div className="desc">
       
        <p>  Kedarnath ki yatra mere liye sirf ek safar nahi, balki ek spiritual journey thi.
          Subah-subah jab humne trek start kiya, thandi hawa aur pahadon ki khamoshi ek alag hi sukoon deti thi.
          Raaste me chhote-chhote dhabe, chai ki garmahat aur pahadi logon ki muskaan, sab kuch dil ko choo jaata hai.
          Jaise-jaise upar badhte gaye, thakan zaroor hoti thi, par har mod pe milta hua naya nazara us thakan ko mita deta tha.
          Barf se dhaki chotiyaan, mandir tak jaane wala raasta aur bhakton ki awaaz – “Har Har Mahadev” – ekdum goosebumps de deti hai.
          Kedarnath trip ek yaadgar anubhav hai jo sirf ek darshan nahi, balki ek zindagi bhar ke liye yaad rehne wali kahani ban jaata hai.</p>
        
        
      </div>
    </div>
  )
}
