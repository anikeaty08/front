import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const menuBtn = document.getElementById('menu-btn');
    const menuDropdown = document.getElementById('menu-dropdown');
    menuBtn.addEventListener('click', () => {
      menuDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', (event) => {
      if (!menuBtn.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.classList.add('hidden');
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full flex items-center justify-between p-6">
<div className="text-2xl font-bold text-green-700 tracking-tight select-none farm-title">branches</div>
<div className="flex items-center space-x-4">
<a className="text-gray-600 font-medium hover:text-green-700 transition" href="#">Sign In</a>

<div className="relative">
<button aria-label="Open menu" className="inline-flex items-center px-3 py-2 rounded focus:outline-none hover:bg-gray-100" id="menu-btn">
<svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<div className="hidden absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50" id="menu-dropdown">
<div className="flex flex-col py-2">
<a className="px-6 py-3 hover:bg-gray-50 text-gray-800 font-semibold" href="#">White Paper</a>
<a className="px-6 py-3 hover:bg-gray-50 text-gray-800 font-semibold" href="#">Share Farming Calculator</a>
<a className="px-6 py-3 hover:bg-gray-50 text-gray-800 font-semibold" href="#">Covered Call Made Easy</a>
<a className="px-6 py-3 hover:bg-gray-50 text-gray-800 font-semibold" href="#">About Us</a>
</div>
<div className="border-t border-gray-200">
<a className="block px-6 py-3 text-xs text-gray-500 hover:bg-gray-50" href="#">Terms of Service</a>
</div>
</div>
</div>
</div>
</nav>

<main className="flex flex-1 flex-col items-center justify-center px-6">
<h1 className="farm-title text-5xl sm:text-7xl font-bold text-green-800 mb-4 text-center leading-tight">
      Share Farming,
    </h1>
<p className="text-lg sm:text-2xl text-gray-700 mb-8 text-center">
      like dividends, but smarter
    </p>
<a className="inline-block bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-800 transition" href="#">
      Start Growing Today
    </a>
</main>


    </>
  );
}
