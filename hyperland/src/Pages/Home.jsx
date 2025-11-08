import React, { useEffect } from 'react'
import './home.css'
import { useState } from 'react'
import axios from 'axios'

export const Home = () => {

  const[data, setData] = useState([]);

  const ApisCarad = "https://api-4x2d.onrender.com/hyper"

  const getDataCard = async () => {
    try {
      let CardApi = await axios.get(ApisCarad);
      let cardsData = await CardApi.data;
      setData(cardsData);
    } catch (err) {
      console.log(err);
      
    }
  }

  useEffect(() => {
    getDataCard()
  },[])
  return (
    <div  >
      <div className="homeimg">

      </div>
      
      <div className="homeabout">
        <div className="label">
<span className=" label-text">Fine French Dining</span>
        </div>
        <h1 className="hero-gradient font-serif ">HyperLand</h1>
        <p className="text-[30px] font-medium">Where Culinary Art Meets Excellence</p>
        <p className="w-170 font-medium mt-3 text-[18px]">Experience the finest French cuisine in an atmosphere of unparalleled elegance. Every dish is a masterpiece crafted with passion and precision by our world-class chefs.</p>

        
      <div class="button-container mt-7">
  <a class="menu-button" href="/menu">Explore Our Menu</a>

  <button class="btn"> Reserve a Table
</button>
</div>
      </div>



      <div className="section ">
        <div className="label mt-20">
 <span className=" label-tex">Signature Dishes</span>
        </div>
        <h1 className="sec-gradient font-serif">Culinary Masterpieces</h1>
       <p className="sec-p">Each dish tells a story of French culinary tradition, reimagined with modern artistry</p>
      </div>

<div className='grid'>


      {
        data.map((el,id) => (
         

         
          <>
          <div key={id}>
            <div className="cards  ">
          <img src={el.img} className='w-110 h-80 rounded-2xl ' />
           <h1 className='cardh1 font-serif'>{el.fdname}</h1>
           <h2 className='cardh2'>{el.char}</h2>
           <p className='cardhp'>{el.disc}</p>



           <a href="">Discover more  <i class="fa-solid fa-greater-than"></i></a>

           
            </div>

           


         
          </div>

          </>
       
        ))
      }

</div>
 
    </div>
  )
}
