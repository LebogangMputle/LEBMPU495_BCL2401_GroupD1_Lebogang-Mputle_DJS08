import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetail from "./Pages/VanDetail"
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Income';
import Layout from "./components/Layout"
import "./server"



export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanDetail />}/>
            <Route path="/host" element={<Dashboard />}/>
            <Route path="/host/income" element={<Income />}/>
            <Route path="/vans/reviews" element={<Reviews />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
