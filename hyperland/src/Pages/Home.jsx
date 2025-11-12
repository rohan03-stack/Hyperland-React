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
  <a class="menu">Explore Our Menu</a>

  <button class="btn"> Reserve a Table
</button>
</div>
      </div>



      <div className="section  ">
        <div className="label mt-20">
 <span className=" label-tex">Signature Dishes</span>
        </div>
        <h1 className="sec-gradient font-serif">Culinary Masterpieces</h1>
       <p className="sec-p">Each dish tells a story of French culinary tradition, reimagined with modern artistry</p>
      </div>

<div className='grid '>


      {
        data.map((el,id) => (
         

         
          <>
          <
            div key={id}>
            <div className="cards   ">
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



<div className="abmain ">


<div className="imgabout flex mx-30  ">
  <div className="abou1 mb-30">
      <div className="label mt-20">
 <span className=" label-tex">OUR STORY</span>
        </div>

        <h1 className='abth1'>The Art of French Cuisine</h1>
<p className='text-[19px] w-148 mt-3 text-amber-50'> Our restaurant is a place where tradition meets innovation. Every dish is prepared with the finest ingredients and served in an atmosphere of authentic French elegance.</p>
<p className='text-[19px] w-148 mt-4 text-amber-50'>Experience the magic of culinary artistry, where every meal becomes an unforgettable event, and flavors transport you to the finest restaurants of Paris.</p>

<button className='bt'>Learn More About This</button>
  </div>
  <div className="img3 mt-20 ml-20  ">
    <img src="https://xn--hrsw-83d0a0ffu.xn--hngapp-3nf2be9ivbz917d.swapneweu.com/0b6a87b673d7996625a77e227127015d.jpg" className="w-170 h-104  rounded-2xl" alt="" />
  </div>
</div>
</div>



<div className="chefs text-center bg-black">
   <div className="label mt-20">
 <span className=" label-tex">MASTER CHEFS</span>
        </div>
         <h1 className="sec-gradient font-serif ">Culinary Masterpieces</h1>
         <p className='text-amber-50 text-[18px] font-medium mt-10 w-150 ml-118'>Our team of talented culinary masters creates authentic French cuisine with passion and precision</p>
</div>

   <div className="chef-main flex gap-0 px-25  py-19 bg-black">

   
   <div className="chef-1   ">
  <img src="https://xn--hrsw-83d0a0ffu.xn--hngapp-3nf2be9ivbz917d.swapneweu.com/203d6aedc13a691413bb753d80c8583b.jpg" className='w-40 rounded-full ml-20 ' alt="" />
  <h1 className='cardh1'>Executive Chef</h1>
  <h2 className='cardh2'>15 years of experience</h2>
  <p className='cardhp'>Master of classic French cuisine</p>
   </div>

     <div className="chef-1   ">
  <img src="https://xn--hrsw-83d0a0ffu.xn--hngapp-3nf2be9ivbz917d.swapneweu.com/2606c1d55bc11d9afaabd39bbc7b68dc.jpg" className='w-40 rounded-full ml-20 ' alt="" />
  <h1 className='cardh1'>Sous Chef</h1>
  <h2 className='cardh2'>10 years of experience</h2>
  <p className='cardhp'>Modern interpretation specialist</p>
   </div>

     <div className="chef-1   ">
  <img src="https://xn--hrsw-83d0a0ffu.xn--hngapp-3nf2be9ivbz917d.swapneweu.com/6b8a1e9e4705b23d0def284ba6b2530b.jpg" className='w-43 h-40 rounded-full ml-20 ' alt="" />
  <h1 className='cardh1'>Pastry Chef</h1>
  <h2 className='cardh2'>8 years of experience</h2>
  <p className='cardhp'>French pastry virtuoso</p>
   </div>

  
 </div>

<div className="but bg-black">
 <div className="bt uppercase ml-164">meet our chefs</div>

</div>




<div className="chefs text-center bg-black pt-30">
   <div className="label mt-20">
 <span className=" label-tex">OUR MENU</span>
        </div>
         <h1 className="sec-gradient font-serif ">Exquisite French Cuisine</h1>
         <p className='text-amber-50 text-[18px] font-medium mt-10 w-150 ml-118'>From traditional appetizers to decadent desserts, every dish tells a story of French culinary heritage</p>
</div>

   <div className="chef-main flex gap-0 px-25  py-19 bg-black">

   
   <div className="chef-1   ">
    <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto '>
  <span className='text-primary-400 text-2xl'>🥂</span>
    </div>

  <h1 className='cardh1'>Appetizers</h1>
  <p className='cardhp'>Elegant starters including foie gras, escargot, and artisanal pâtés</p>
  <h2 className='cardh2'>Les Entrées</h2>
  
   </div>

     <div className="chef-1   ">
  <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto '>
  <span className='text-primary-400 text-2xl'>🥩</span>
    </div>

  <h1 className='cardh1'>Main Courses</h1>
  <p className='cardhp'>Masterfully prepared beef, duck, and seafood dishes</p>
  <h2 className='cardh2'>Les Plats Principaux</h2>
  
   </div>

     <div className="chef-1   ">
 <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto '>
  <span className='text-primary-400 text-2xl'>🍰</span>
    </div>

  <h1 className='cardh1'>Desserts</h1>
  <p className='cardhp'>Decadent French pastries and traditional sweet endings</p>
  <h2 className='cardh2'>Les Desserts</h2>
  
   </div>
  
 </div>
        
        <div className="but bg-black">
 <div className="bt uppercase ml-164">meet our chefs</div>

</div>


<div className="chefs text-center bg-black pt-30">
   <div className="label mt-20">
 <span className=" label-tex">RESTAURANT DESIGN</span>
        </div>
         <h1 className="sec-gradient font-serif ">Elegant Atmosphere</h1>
         <p className='text-amber-50 text-[18px] font-medium mt-10 w-150 ml-118'>Every corner of our restaurant is designed to provide you with an unforgettable experience</p>
</div>

<div className="img-about flex relative  bg-black ">
  <div className="divimg1  w-202 h-87 ml-40  mt-20 mb-10 ">
<img src="https://xn--hrsw-83d0a0ffu.xn--hngapp-3nf2be9ivbz917d.swapneweu.com/9a40291faaaf9cc1f722292aea31a187.jpg" className='w-185 h-70 ml-8 mt-5  rounded-2xl' alt="" />
<h1  className='absolute text-amber-50 top-58 left-12 text-[20px] font-bold '>Main Dining Room</h1>
<p className='text-amber-50 absolute text-[16px] font-medium top-64 left-12'>Elegant interior with panoramic windows</p>
  </div>
  <div className="divimg2 w-108 relative ml-10  mt-20 mb-10">
    <img src="https://xn--hrsw-83d0a0ffu.xn--hngapp-3nf2be9ivbz917d.swapneweu.com/45d3ffa0d1d4e5d462d4741104ead697.jpg" className='w-90 h-70 ml-9 mt-5 rounded-2xl' alt="" />
    <h1  className='absolute text-amber-50 top-58 left-12 text-[20px] font-bold '>Cheese Cellar</h1>
    <p className='text-amber-50 absolute text-[16px] font-medium top-64 left-12'>Collection of the finest French cheeses</p>

  </div>
</div>


  <div className="but bg-black">
 <div className="bt uppercase ml-164">EXPLORE DESIGN</div>

</div>



      
    </div>
  )
}
