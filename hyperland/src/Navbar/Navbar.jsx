import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
    <header className='flex p-4  justify-between bg-neutral-500'>
        <div className="logo">
<a className="text-[24px] ml-40 font-bold font-serif text-gradient " href="">HyperLend</a>
        </div>

        <div className="nav mr-25">
          <ul className='text-[18px] font-semibold text-amber-50'>
            <Link  to="/" className='mr-8'>Home</Link>
             <Link to="/menu" className='mr-8'>Menu</Link>
              <Link to="/design" className='mr-8'>Design</Link>
               <Link to= "chef" className='mr-8'>Chefs</Link>
                <Link to="about" className='mr-8'>About</Link>
                 <Link to="reserv" className='mr-8'>Reservation</Link>

          </ul>
        </div>

      
    </header>
    </>
  )
}
