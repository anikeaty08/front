import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import WebGLBackground from './components/WebGLBackground';
import Dashboard from './pages/Dashboard';

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <WebGLBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto border-x border-white/10 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}