import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { Menu } from "./Pages/Menu.jsx";
import { About } from "./Pages/About.jsx";
import { Design } from "./Pages/Design.jsx";
import { Chef } from "./Pages/Chef.jsx";
import { Reservation } from "./Pages/Reservation.jsx";

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/design" element={<Design />}></Route>
      <Route path="/chef" element={<Chef />}></Route>
        <Route path="/about" element={<About />}></Route>
      
      <Route path="/resrv" element={<Reservation/>}></Route>

    </Routes>
    </>
  )
}

export default App
