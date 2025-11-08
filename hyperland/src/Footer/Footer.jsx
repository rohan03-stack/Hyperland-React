import React from 'react'
import { Link } from 'react-router-dom'
import'./foot.css'
export const Footer = () => {
  return (
    <>
    <div className="foot bg-black ">

    
    <footer className='flex h-[auto] mx-44 pt-20 border-amber-700 text-amber-100 '>
    <div className="f1 ">
        <h1>HyperLend</h1>
        <p>Discover authentic French cuisine in an atmosphere of unparalleled elegance. Every dish is a work of art, created with love and mastery.</p>
    </div>

    <div className="f2 ml-50 ">
        <h2>Navigation</h2>
        <ul  className='flex flex-col gap-1 mt-4 text-l mb-10'>
            <Link to='/menu' className='link'>Menu</Link> <br />
              <Link to='/design' className='link'>Design</Link> <br />
                <Link to='/chef' className='link'>Chefs</Link> <br />
                  <Link to='/about' className='link'>About Us</Link>
                   
        </ul> 
    </div>

    <div className="f3 ml-58">
        <h2>Information</h2>
        <ul className='flex flex-col gap-1 text-l mt-4'>
            <Link to='/privacy'>Privacy Policy</Link> <br />
             <Link to='/cookie'>Cookie Policy</Link> <br />
              <Link to='/resrv'>Reservation Policy</Link>
        </ul>
    </div>

    </footer>
    <p className='text-amber-100 text-center mt-8 text-xl'>@  2025 HyperLend. All rights reserved.</p>
    </div>

    
    </>
  )
}

