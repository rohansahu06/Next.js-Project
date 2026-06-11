"use client"
import React, { useEffect, useRef } from 'react'
import './Product6.css'

export default function Product6() {
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
    <h2 id='heading'>Folk music and bhangra brought the culture alive. Panjab</h2>
      <div className="image-slider" ref={sliderRef}>
        <img src="https://static.toiimg.com/thumb/msid-94860890,width-1070,height-580,resizemode-75/94860890,pt-32,y_pad-40/94860890.jpg" alt="Photo 1" className="active" />
           <img src="https://www.exploreourindia.com/backend/web/images/post/big/475_Jallianwala%20Bagh%20punjab.webp" alt="Photo 2" />
              <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/04/pti04-12-2022-000222b-1649812560.jpg" alt="Photo 3" />
                  <img src="https://amritsartourism.org.in/images/places-to-visit/headers/wagah-border-amritsar-tourism-entry-fee-timings-holidays-reviews-header.jpg" alt="Photo 4" />
                       <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/b9/e3.jpgg" alt="Photo 5" />
                            <img src="https://travelertree.in/wp-content/uploads/2016/12/DSC0176.NEF_-scaled.jpg" alt="Photo 6" />
                                    <img src="https://xplro.com/wp-content/uploads/2024/03/Xplro-49.jpg" alt="Photo 7" />
      </div>
      <div className="desc">
        <h4>panjab the state of bhangra</h4>
        <br/>
        <p>Panjab is a state in northwestern India. Forming part of the larger Punjab region of the Indian subcontinent, 
            the state is bordered by the Indian states and union territories of Himachal Pradesh to the north and northeast, 
            Haryana to the south and southeast, Rajasthan to the southwest, Jammu and Kashmir to the north. To the west, 
            it shares an international border with the identically named Pakistani province of Punjab.[9] Chandigarh serves as a shared captial for Punjab as well as Haryana. 
            The state covers an area of 50,362 square kilometres (19,445 square miles), which is 1.53% of India's total geographical area,[10] 
            <br/>
            making it the 19th-largest Indian state by area out of 28 Indian states (20th largest, if Union Territories are considered). With over 27 million inhabitants,
             Punjab is the 16th-largest Indian state by population, comprising 23 districts.[11] Punjabi, written in the Gurmukhi script, is the most widely spoken and the official language of the state.[12] 
             The main ethnic group are the Punjabis, with Sikhs (57.7%) and Hindus (38.5%) forming the dominant religious groups.[13]
             Three of the five traditional Punjab rivers — the Sutlej, Beas, and Ravi — flow through the state.</p>
             <br/>
                <h4>About Historic Sites</h4>
                <p>The history of Punjab has witnessed the migration and settlement of different tribes of people with different cultures and ideas, forming a civilisational melting pot.
                     The ancient Indus Valley Civilisation flourished in the region until its decline around 1900 BCE.[15] Punjab was enriched during the height of the Vedic period, 
                     but declined in predominance with the rise of the Mahajanapadas.[16] The region formed the frontier of initial empires during antiquity including Alexander's and the Maurya empires.
                     [17][18] It was subsequently conquered by the Kushan Empire, Gupta Empire,[19] and then Harsha's Empire.[20] Punjab continued to be settled by nomadic people; including the Huna, Turkic and the Mongols. 
                     Punjab came under Muslim rule c. 1000 CE,[21] and was part of the Delhi Sultanate and the Mughal Empire.[22] Sikhism, based on the teachings of Sikh Gurus, emerged between the 15th and 17th centuries.
                     <br/>
                      Conflicts between the Mughals and the later Sikh Gurus precipitated a militarisation of the Sikhs, resulting in the formation of a confederacy after the weakening of the Mughal Empire,
                       which competed for control with the larger Durrani Empire.[23] This confederacy was united in 1801 by Maharaja Ranjit Singh, forming the Sikh Empire.</p>

            
      </div>
    </div>
  )
}
