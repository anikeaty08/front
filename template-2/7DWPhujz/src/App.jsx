import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      document.getElementById('clock').textContent = `${hours}:${minutes} ${ampm}`;
    }
    
    function openWindow(id) {
      document.getElementById(id).classList.remove('hidden');
      bringToFront(document.getElementById(id));
    }
    
    function closeWindow(id) {
      document.getElementById(id).classList.add('hidden');
    }
    
    function bringToFront(el) {
      const windows = document.querySelectorAll('.window');
      windows.forEach(w => w.style.zIndex = "10");
      el.style.zIndex = "20";
    }
    
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        menuItems.forEach(mi => {
          if (mi !== item) mi.classList.remove('active');
        });
        item.classList.toggle('active');
        e.stopPropagation();
      });
    });
    
    document.addEventListener('click', function() {
      menuItems.forEach(mi => mi.classList.remove('active'));
    });
    
    document.addEventListener('DOMContentLoaded', function() {
      const desktop = document.getElementById('desktop');
      const desktopRect = desktop.getBoundingClientRect();
      const windows = document.querySelectorAll('.window');
      
      windows.forEach(win => {
        const handle = win.querySelector('.handle');
        let isDragging = false;
        let offsetX, offsetY;
        
        win.addEventListener('mousedown', function() {
          bringToFront(win);
        });
        
        handle.addEventListener('mousedown', function(e) {
          isDragging = true;
          offsetX = e.clientX - win.getBoundingClientRect().left;
          offsetY = e.clientY - win.getBoundingClientRect().top;
          e.preventDefault();
        });
        
        document.addEventListener('mousemove', function(e) {
          if (!isDragging) return;
          const x = e.clientX - desktopRect.left - offsetX;
          const y = e.clientY - desktopRect.top - offsetY;
          const maxX = desktop.offsetWidth - win.offsetWidth;
          const maxY = desktop.offsetHeight - win.offsetHeight;
          win.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
          win.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
        });
        
        document.addEventListener('mouseup', function() {
          isDragging = false;
        });
      });
    });
    
    updateClock();
    setInterval(updateClock, 60000);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="w-[800px] h-[600px] bg-white rounded-lg overflow-hidden shadow-2xl border-4 border-gray-900 relative">

<div className="bg-white border-b border-black h-6 flex items-center chicago text-xs px-2 shadow-sm">
<div className="flex items-center mr-1">
<div className="w-3 h-3 mr-1">
<svg className="w-full h-full" viewBox="0 0 16 16">
<path d="M8.2,0.3c0,0,6.4,3.7,6.4,8.3s-2.9,7.1-6.4,7.1S1.8,13.2,1.8,8.6S8.2,0.3,8.2,0.3z" fill="black"></path>
</svg>
</div>
</div>
<div className="menu-item relative px-3 py-1 cursor-default" id="file-menu">
        File
        <div className="menu-dropdown absolute left-0 top-full w-48 bg-white border border-black z-50">
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black" onClick={(e) => { openWindow('about') }}>About This Macintosh</div>
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">New Folder</div>
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">Open</div>
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">Print</div>
<div className="dropdown-item px-4 py-1 text-black">Quit</div>
</div>
</div>
<div className="menu-item relative px-3 py-1 cursor-default" id="edit-menu">
        Edit
        <div className="menu-dropdown absolute left-0 top-full w-48 bg-white border border-black z-50">
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">Undo</div>
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">Cut</div>
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">Copy</div>
<div className="dropdown-item px-4 py-1 text-black">Paste</div>
</div>
</div>
<div className="menu-item relative px-3 py-1 cursor-default" id="view-menu">
        View
        <div className="menu-dropdown absolute left-0 top-full w-48 bg-white border border-black z-50">
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">by Icon</div>
<div className="dropdown-item px-4 py-1 border-b border-gray-200 text-black">by Name</div>
<div className="dropdown-item px-4 py-1 text-black">by Date</div>
</div>
</div>
<div className="ml-auto" id="clock">9:41 AM</div>
</div>

<div className="bg-white h-[530px] relative" id="desktop">

<div className="absolute top-4 right-4 flex flex-col items-center w-24 cursor-pointer" onClick={(e) => { openWindow('finder') }}>
<div className="w-12 h-12 bg-gray-200 border border-gray-400 rounded">
<svg className="w-full h-full p-1" viewBox="0 0 24 24">
<rect fill="#888" height="16" rx="1" stroke="#000" width="20" x="2" y="4"></rect>
<rect fill="#ddd" height="12" rx="1" stroke="#888" width="16" x="4" y="6"></rect>
</svg>
</div>
<div className="chicago text-xs mt-1 text-center">Macintosh HD</div>
</div>
<div className="absolute top-28 right-4 flex flex-col items-center w-24 cursor-pointer" onClick={(e) => { alert('The trash is empty') }}>
<div className="w-12 h-12 bg-gray-200 border border-gray-400 rounded">
<svg className="w-full h-full p-1" viewBox="0 0 24 24">
<path d="M5,6 L19,6 L17,22 L7,22 Z" fill="#ddd" stroke="#000"></path>
<path d="M3,4 L21,4 L21,6 L3,6 Z" fill="#aaa" stroke="#000"></path>
<path d="M8,2 L16,2 L16,4 L8,4 Z" fill="#bbb" stroke="#000"></path>
</svg>
</div>
<div className="chicago text-xs mt-1 text-center">Trash</div>
</div>

<div className="window absolute left-8 top-8 w-96 h-72 bg-white border border-black hidden" id="finder" style={{zIndex: `10`}}>
<div className="bg-gray-200 h-5 border-b border-black flex items-center chicago text-xs px-2 handle">
<div className="flex-grow text-center">Macintosh HD</div>
<div className="w-3 h-3 cursor-pointer" onClick={(e) => { closeWindow('finder') }}>
<svg className="w-full h-full" viewBox="0 0 16 16">
<rect fill="white" height="12" stroke="black" width="12" x="2" y="2"></rect>
<line stroke="black" strokeWidth="1" x1="4" x2="12" y1="4" y2="12"></line>
<line stroke="black" strokeWidth="1" x1="12" x2="4" y1="4" y2="12"></line>
</svg>
</div>
</div>
<div className="p-2 grid grid-cols-4 gap-4">
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-gray-200 border border-gray-400 flex items-center justify-center">
<svg className="w-8 h-8" viewBox="0 0 24 24">
<rect fill="#ddd" height="20" rx="1" stroke="#000" width="16" x="4" y="2"></rect>
<line stroke="#000" x1="8" x2="16" y1="6" y2="6"></line>
<line stroke="#000" x1="8" x2="16" y1="10" y2="10"></line>
<line stroke="#000" x1="8" x2="16" y1="14" y2="14"></line>
</svg>
</div>
<div className="chicago text-xs mt-1">System</div>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-gray-200 border border-gray-400 flex items-center justify-center">
<svg className="w-8 h-8" viewBox="0 0 24 24">
<rect fill="#ddd" height="18" rx="2" stroke="#000" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" fill="#888" r="5"></circle>
</svg>
</div>
<div className="chicago text-xs mt-1">Finder</div>
</div>
</div>
</div>

<div className="window absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white border border-black" id="about" style={{zIndex: `10`}}>
<div className="bg-gray-200 h-5 border-b border-black flex items-center chicago text-xs px-2 handle">
<div className="flex-grow text-center">About This Macintosh</div>
<div className="w-3 h-3 cursor-pointer" onClick={(e) => { closeWindow('about') }}>
<svg className="w-full h-full" viewBox="0 0 16 16">
<rect fill="white" height="12" stroke="black" width="12" x="2" y="2"></rect>
<line stroke="black" strokeWidth="1" x1="4" x2="12" y1="4" y2="12"></line>
<line stroke="black" strokeWidth="1" x1="12" x2="4" y1="4" y2="12"></line>
</svg>
</div>
</div>
<div className="p-4 flex">
<div className="w-20 h-20 mr-4">
<svg className="w-full h-full" viewBox="0 0 24 24">
<rect fill="#888" height="16" rx="2" width="20" x="2" y="4"></rect>
<rect fill="#ddd" height="12" rx="1" width="16" x="4" y="6"></rect>
<rect fill="#888" height="6" width="8" x="8" y="8"></rect>
<rect fill="#888" height="1" width="4" x="10" y="18"></rect>
</svg>
</div>
<div className="chicago text-xs flex-grow">
<p className="mb-2">Macintosh System 7.5.3</p>
<p className="mb-2">© Apple Computer, Inc. 1983-1996</p>
<p>Memory: 8,192K</p>
<p>Processor: Motorola 68040</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-[34px] bg-gray-200 border-t border-gray-400 flex items-center justify-center space-x-2 px-4">
<div className="dock-icon w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer" onClick={(e) => { openWindow('finder') }}>
<svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" fill="currentColor"></path>
</svg>
</div>
<div className="dock-icon w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer" onClick={(e) => { openWindow('about') }}>
<svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
<circle cx="12" cy="12" fill="#ddd" r="10" stroke="#555"></circle>
<text fill="#555" fontSize="12" font-weight="bold" text-anchor="middle" x="12" y="16">i</text>
</svg>
</div>
<div className="dock-icon w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
<svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" fill="currentColor"></path>
</svg>
</div>
<div className="dock-icon w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
<svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path>
</svg>
</div>
<div className="dock-icon w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
<svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24">
<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>


    </>
  );
}
