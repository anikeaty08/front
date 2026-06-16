import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Philosophy from './pages/Philosophy';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="reservations" element={<Reservations />} />
      </Route>
    </Routes>
  );
}