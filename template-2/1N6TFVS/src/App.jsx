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



tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#1e40af',
        secondary: '#dc2626',
      }
    }
  }
}



lucide.createIcons();

// Brightness control
const brightness = document.getElementById('brightness');
const brightnessVal = document.getElementById('brightnessVal');
const ticket = document.querySelector('.ticket');

brightness.addEventListener('input', e => {
  brightnessVal.textContent = e.target.value;
  ticket.style.opacity = e.target.value / 100;
});

// Airline dropdown
const airlineBtn = document.getElementById('airlineBtn');
const airlineMenu = document.getElementById('airlineMenu');
const selectedAirline = document.getElementById('selectedAirline');

airlineBtn.addEventListener('click', () => airlineMenu.classList.toggle('hidden'));

airlineMenu.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    const airline = item.getAttribute('data-airline');
    selectedAirline.textContent = airline;
    airlineMenu.classList.add('hidden');
    updateAirlineTheme(airline);
  });
});

window.addEventListener('click', e => {
  if (!airlineBtn.contains(e.target) && !airlineMenu.contains(e.target)) {
    airlineMenu.classList.add('hidden');
  }
});

// Theme updates
function updateAirlineTheme(airline) {
  const themes = {
    'AeroLux Airlines': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    'SkyLink Express': 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    'CloudJet Premium': 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)'
  };
  ticket.style.background = themes[airline] || themes['AeroLux Airlines'];
}

// Share functionality
function sharePass() {
  if (navigator.share) {
    navigator.share({
      title: 'My Boarding Pass',
      text: 'Check out my digital boarding pass!',
      url: window.location.href
    });
  } else {
    // Fallback
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
}

// Download functionality
function downloadPass() {
  const source = '<!DOCTYPE html>' + document.documentElement.outerHTML;
  const blob = new Blob([source], {type: 'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'aerolux_boarding_pass.html';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

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
      
<div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">

<div className="ticket rounded-3xl text-white shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
<div className="p-6 sm:p-8">

<div className="flex items-center justify-between text-sm font-semibold tracking-wider">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="plane"></i>
<span className="text-base">AEROLUX</span>
</div>
<div className="text-right">
<div className="text-lg font-bold">AL 2847</div>
<div className="text-xs opacity-90">15 DEC 2024</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between">
<div className="text-left">
<div className="text-5xl sm:text-6xl font-black leading-none tracking-tight">NYC</div>
<div className="text-xs mt-2 opacity-90 font-medium">LaGuardia Airport</div>
<div className="text-sm mt-1 font-bold">07:25 AM EST</div>
</div>
<div className="flex flex-col items-center px-4">
<i className="w-8 h-8 rotate-90 opacity-80" data-lucide="plane"></i>
<div className="text-xs mt-2 opacity-75">5h 32m</div>
</div>
<div className="text-right">
<div className="text-5xl sm:text-6xl font-black leading-none tracking-tight">LAX</div>
<div className="text-xs mt-2 opacity-90 font-medium">Los Angeles Intl</div>
<div className="text-sm mt-1 font-bold">10:57 AM PST</div>
</div>
</div>

<div className="mt-8">
<div className="text-xl font-bold tracking-wide">SOFIA MARTINEZ</div>
<div className="text-sm opacity-90 mt-1">Confirmation: AX7K92</div>
</div>

<div className="mt-6 flex gap-2 flex-wrap">
<span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="crown"></i>
            BUSINESS
          </span>
<span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="wifi"></i>
            WIFI
          </span>
<span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
<i className="w-3 h-3" data-lucide="utensils"></i>
            MEAL
          </span>
</div>

<div className="mt-8 grid grid-cols-5 gap-3 text-xs font-semibold tracking-wider">
<div className="text-center">
<div className="flex items-center justify-center mb-1">
<i className="w-3 h-3 opacity-80" data-lucide="clock"></i>
</div>
<span className="block opacity-80 text-xs">BOARDING</span>
<span className="text-lg font-black">06:45</span>
</div>
<div className="text-center">
<div className="flex items-center justify-center mb-1">
<i className="w-3 h-3 opacity-80" data-lucide="building"></i>
</div>
<span className="block opacity-80 text-xs">TERMINAL</span>
<span className="text-lg font-black">B</span>
</div>
<div className="text-center">
<div className="flex items-center justify-center mb-1">
<i className="w-3 h-3 opacity-80" data-lucide="map-pin"></i>
</div>
<span className="block opacity-80 text-xs">GATE</span>
<span className="text-lg font-black">C14</span>
</div>
<div className="text-center">
<div className="flex items-center justify-center mb-1">
<i className="w-3 h-3 opacity-80" data-lucide="users"></i>
</div>
<span className="block opacity-80 text-xs">GROUP</span>
<span className="text-lg font-black">1</span>
</div>
<div className="text-center">
<div className="flex items-center justify-center mb-1">
<i className="w-3 h-3 opacity-80" data-lucide="armchair"></i>
</div>
<span className="block opacity-80 text-xs">SEAT</span>
<span className="text-lg font-black">2A</span>
</div>
</div>
<div className="dashed-line"></div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="shield-check"></i>
<span className="text-sm font-bold">TSA Pre✓ Clear</span>
</div>
<div className="flex items-center gap-2 text-sm">
<i className="w-4 h-4" data-lucide="smartphone"></i>
<span>Mobile Pass</span>
</div>
</div>
<div className="mt-6 flex justify-center">
<div className="bg-white p-3 rounded-xl">
<img alt="Boarding Pass QR Code" className="w-24 h-24" src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=AeroLux-AL2847-SOFIA-MARTINEZ-2A" />
</div>
</div>
<div className="mt-4 text-center text-xs opacity-75">
          Scan at security checkpoint and gate
        </div>
</div>
</div>

<div className="mt-8 space-y-6 glass-effect rounded-2xl p-6 shadow-xl">
<h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="settings"></i>
        Pass Settings
      </h3>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="moon"></i>
<label className="text-sm font-semibold text-slate-700" htmlFor="toggle">Dark Theme</label>
</div>
<label className="relative inline-flex cursor-pointer">
<input className="sr-only peer" id="toggle" type="checkbox" />
<div className="w-12 h-6 bg-slate-300 rounded-full peer-checked:bg-primary relative transition-colors duration-300">
<span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition-transform duration-300 flex items-center justify-center">
<i className="w-3 h-3 text-yellow-500 peer-checked:hidden" data-lucide="sun"></i>
</span>
</div>
</label>
</div>

<div className="flex items-center gap-3">
<label className="relative inline-flex cursor-pointer">
<input className="sr-only peer" id="wallet" type="checkbox" />
<div className="w-5 h-5 rounded-md border-2 border-slate-400 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-all duration-200">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" data-lucide="check"></i>
</div>
</label>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="wallet"></i>
<label className="text-sm font-semibold text-slate-700 cursor-pointer" htmlFor="wallet">Add to Apple Wallet</label>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-slate-600" data-lucide="sun"></i>
<label className="text-sm font-semibold text-slate-700" htmlFor="brightness">
            Brightness: <span className="text-primary" id="brightnessVal">100</span>%
          </label>
</div>
<input className="w-full" id="brightness" max="100" min="30" type="range" value="100" />
</div>

<div className="relative">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-slate-600" data-lucide="plane"></i>
<label className="text-sm font-semibold text-slate-700">Select Airline</label>
</div>
<button className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between text-sm font-semibold shadow-sm hover:border-primary transition-colors duration-200" id="airlineBtn">
<span id="selectedAirline">AeroLux Airlines</span>
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden" id="airlineMenu">
<ul className="text-sm">
<li className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-slate-100 font-medium" data-airline="AeroLux Airlines">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="plane"></i>
                AeroLux Airlines
              </div>
</li>
<li className="px-4 py-3 hover:bg-emerald-50 cursor-pointer border-b border-slate-100 font-medium" data-airline="SkyLink Express">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="zap"></i>
                SkyLink Express
              </div>
</li>
<li className="px-4 py-3 hover:bg-rose-50 cursor-pointer font-medium" data-airline="CloudJet Premium">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-rose-600" data-lucide="star"></i>
                CloudJet Premium
              </div>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-2 gap-3 pt-4">
<button className="flex items-center justify-center gap-2 bg-slate-700 text-white text-sm font-semibold py-3 rounded-xl shadow-lg hover:bg-slate-800 transition-all duration-200 transform hover:scale-105" onClick={(e) => { sharePass() }}>
<i className="w-4 h-4" data-lucide="share-2"></i>
          Share
        </button>
<button className="flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105" onClick={(e) => { downloadPass() }}>
<i className="w-4 h-4" data-lucide="download"></i>
          Download
        </button>
</div>
</div>
</div>


    </>
  );
}
