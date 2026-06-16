import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  useEffect(() => {
    // Setup spotlight mouse tracking globally across pages
    const body = document.getElementById('main-body');

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      if (body) {
        body.style.setProperty('--mouse-x', `${x}px`);
        body.style.setProperty('--mouse-y', `${y}px`);
      }

      // We query this dynamically inside the event listener so it picks up components 
      // from different routes as they mount and unmount
      const spotlightGroups = document.querySelectorAll('.spotlight-group');
      spotlightGroups.forEach(group => {
        const rect = group.getBoundingClientRect();
        const relX = x - rect.left;
        const relY = y - rect.top;
        
        group.style.setProperty('--mouse-x-rel', `${relX}px`);
        group.style.setProperty('--mouse-y-rel', `${relY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <div id="main-body" className="relative flex flex-col min-h-screen w-full">
        {/* Global Mouse Spotlight Background */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" 
          style={{ background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03), transparent 40%)' }}
        ></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;