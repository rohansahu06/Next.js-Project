"use client"
import React, { useEffect, useRef } from 'react'
import './Product5.css'

export default function Product5() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return; 

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
    <h2 id='heading'>From majestic forts to spiritual ghats of Utthar</h2>
      <div className="image-slider" ref={sliderRef}>
        <img src="https://images.moneycontrol.com/static-mcnews/2025/10/20251016104834_ayodhya.png?impolicy=website&width=770&height=431" alt="Photo 1" className="active" />
        <img src="https://i.pinimg.com/originals/92/8b/5f/928b5f224bb8d26a10ccff3e097a2ccf.jpg" alt="Photo 2" />
        <img src="https://www.tourmyindia.com/socialimg/manikarnika-ghat-varanasi.jpg" alt="Photo 3" />
        <img src="https://www.solitarytraveller.com/wp-content/uploads/2020/09/varanasi_scindia_ghat-min-1536x1152.jpg" alt="Photo 4" />
        <img src="https://www.captureatrip.com/_next/image?url=https:%2F%2Fd1zvcmhypeawxj.cloudfront.net%2Fblogs%2Fcover_web%2Fdashashwamedh-ghat-webp-16238dde3b-1764488913111.webp&w=3840&q=75" alt="Photo 5" />
        <img src="https://assets.telegraphindia.com/telegraph/2025/Jan/1736741032_maha-kumbh-5.jpg" alt="Photo 6" />
         <img src="https://images.indianexpress.com/2025/01/maha-kumbh-mela-2025.jpg" alt="Photo 7" />
          <img src="https://media.assettype.com/outlookindia/2025-01-02/fetumzl4/Mahakumbh-2025-Chavni-Pravesh.jpg?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" alt="Photo 8" />
      </div>
       <br/>
      <div className="desc">
        <h4>Uttar Pradesh the state Of Ghats</h4>
        <br/>
        <br/>
        <p>Uttar Pradesh (UTT-ər prə-DESH, abbr. UP; Hindi: Uttar Pradēś, pronounced [ˈʊt̪ːəɾ pɾə.ˈdeːɕ] ⓘ, lit. 'Northern Province') is a state in northern India. With over 241 million inhabitants, it is India's most populated state.
            [15] The state is bordered by Rajasthan to the west, Haryana, Himachal Pradesh and Delhi to the northwest,
             Uttarakhand and Nepal to the north, Bihar to the east, Madhya Pradesh, Chhattisgarh and Jharkhand to the south. 
             It is the fourth-largest Indian state by area covering 243,286 km2 (93,933 sq mi), accounting for 7.3 per cent of the total area of India.
              Lucknow serves as the state capital, with Prayagraj being the judicial capital. It is divided into 18 divisions and 75 districts.
               Uttar Pradesh is the Indian state with the highest number of bordering states, sharing its boundaries with nine other states and one union territory.</p>
                <br/>
            <h4>About Stablishment</h4>
            <br/>
            <p>Uttar Pradesh was established in 1950 after India had become a republic. It is a successor to the United Provinces,
                 established in 1935 by renaming the United Provinces of Agra and Oudh, in turn established in 1902 from the North-Western Provinces and the Oudh Province.
                  The two major rivers of the state, the Ganges and its tributary Yamuna, meet at the Triveni Sangam in Prayagraj, a Hindu pilgrimage site.
                   Other notable rivers are Gomti and Sarayu. Most of the state is covered by the Indo Gangetic plain which is intensely farmed.
                    The forest cover in the state is 6.1 per cent of the state's geographical area, mainly in the northern Terai. The cultivable area is 82 per cent of the total geographical area,
                     and the net area sown is 68.5 per cent of the cultivable area</p>
                     <br/>
                     <p>Uttar Pradesh encompasses several distinct cultural regions, forming a continuum from Braj and Rohilkhand in the west to Bundelkhand and Awadh in the centre and Purvanchal in the east.
                        [not verified in body] Hindi is the official and most widely-spoken language, with Urdu as an additional official language. 
                        The region has been a major centre of political and cultural development throughout Indian history.
                         It was the core area of several dominant Indian dynasties, including the Maurya, Gupta, Vardhana, Pala, Delhi Sultanate, and Mughal empires. During the British colonial period,
                          the area contained several princely states, notably Rampur, Benares, and Ramgadi, and played a central role in the Indian independence movement, including the Indian Rebellion of 1857.</p>
      </div>
    </div>
  )
}
