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
fontFamily: { sans: ['Inter', 'sans-serif'] }
}
}



// lucide
lucide.createIcons()

// Age slider
const ageSlider = document.getElementById('ageSlider')
const ageValue  = document.getElementById('ageValue')
ageSlider.addEventListener('input', e => ageValue.textContent = e.target.value)

// Gender buttons
const maleBtn    = document.getElementById('maleBtn')
const femaleBtn  = document.getElementById('femaleBtn')
let selectedGender = null

function selectGender(btn, gender) {
  // Remove selection from both buttons
  [maleBtn, femaleBtn].forEach(b => {
    b.classList.remove('border-white/70', 'bg-white/20')
    b.classList.add('border-white/20')
  })
  
  // Add selection to clicked button
  btn.classList.remove('border-white/20')
  btn.classList.add('border-white/70', 'bg-white/20')
  selectedGender = gender
}

maleBtn.addEventListener('click', () => selectGender(maleBtn, 'male'))
femaleBtn.addEventListener('click', () => selectGender(femaleBtn, 'female'))

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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("https://images.unsplash.com/photo-1612543827278-d19245d6a00d?w=3840&q=80")`}}></div>
<div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="relative rounded-3xl overflow-hidden bg-gradient-to-br p-8 backdrop-blur from-yellow-200/20 via-cyan-200/10 to-cyan-400/20">

<div className="flex gap-2 absolute top-8 left-8 items-start">
<svg className="lucide lucide-compass w-6 h-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
<span className="font-semibold tracking-wide font-nunito">DISCOVER</span>
</div>

<img alt="" className="w-80 h-80 object-cover rounded-full mx-auto mt-12" src="https://images.unsplash.com/photo-1636728557326-5d78e0abfe13?w=800&q=80" style={{}} />

<svg className="absolute inset-0 m-auto w-72 h-72" viewBox="0 0 200 200">
<path d="M40 140 A60 60 0 1 1 160 140" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"></path>
<path d="M40 140 A60 60 0 0 1 122 83" fill="none" id="progress-path" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="122" cy="83" fill="white" id="progress-knob" r="8"></circle>
</svg>
<div className="absolute left-16 bottom-24 text-xs font-medium font-nunito">02:15</div>
<div className="absolute right-16 bottom-24 text-xs font-medium font-nunito">-06:21</div>

<div className="absolute right-8 bottom-8 text-right">
<div className="text-3xl font-semibold font-nunito">9.2</div>
<div className="uppercase opacity-70 text-xs tracking-widest font-nunito">Discovery Score</div>
</div>
</div>

<div className="relative overflow-hidden flex flex-col gap-8 bg-gradient-to-br from-blue-200/20 via-cyan-200/10 to-cyan-400/20 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur">
<div className="flex flex-col items-center">
<span className="uppercase text-sm tracking-wider opacity-80 font-nunito">Your Age</span>
<span className="text-5xl mt-2 font-nunito font-semibold" id="ageValue">28</span>
<input className="w-full mt-6" id="ageSlider" max="65" min="16" type="range" value="28" />
<div className="flex justify-between w-full text-xs mt-1 opacity-70">
<span className="font-nunito">16</span><span className="font-nunito">25</span><span className="font-nunito">35</span><span className="font-nunito">45</span><span className="font-nunito">55</span><span className="font-nunito">65</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex flex-col items-center justify-center gap-2 border rounded-2xl py-8 transition-all border-white/20 hover:bg-white/5" id="maleBtn">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="font-medium font-nunito">Male</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 border rounded-2xl py-8 transition-all border-white/20 hover:bg-white/5" id="femaleBtn">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="font-medium font-nunito">Female</span>
</button>
</div>
</div>

<div className="relative overflow-hidden bg-gradient-to-br from-green-200/20 via-rose-200/10 to-fuchsia-400/20 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur">
<div className="flex flex-wrap items-center justify-center gap-6 h-full">
<span className="flex items-center justify-center w-48 h-48 rounded-full text-lg font-semibold bg-white/10 font-nunito">Technology</span>
<span className="flex items-center justify-center w-32 h-32 text-sm font-medium font-nunito bg-white/10 rounded-full">Fitness</span>
<span className="flex items-center justify-center w-24 h-24 rounded-full text-sm font-medium bg-white/10 font-nunito">Music</span>
<span className="flex items-center justify-center w-32 h-32 text-sm font-medium font-nunito bg-white/10 rounded-full">Travel</span>
<span className="flex items-center justify-center w-28 h-28 rounded-full text-sm font-medium bg-white/10 font-nunito">Writing</span>
<span className="flex items-center justify-center w-24 h-24 rounded-full text-sm font-medium bg-white/10 font-nunito">Cooking</span>
<span className="flex items-center justify-center w-20 h-20 rounded-full text-xs font-medium bg-white/10 font-nunito">Gaming</span>
<span className="flex items-center justify-center w-24 h-24 rounded-full text-sm font-medium bg-white/10 font-nunito">Reading</span>
<span className="flex items-center justify-center w-20 h-20 rounded-full text-xs font-medium bg-white/10 font-nunito">Science</span>
<span className="flex items-center justify-center w-20 h-20 rounded-full text-xs font-medium bg-white/10 font-nunito">Nature</span>
<span className="flex items-center justify-center w-24 h-24 rounded-full text-sm font-medium bg-white/10 font-nunito">Learning</span>
<span className="flex items-center justify-center w-20 h-20 rounded-full text-xs font-medium bg-white/10 font-nunito">Sports</span>
</div>
</div>

<div className="overflow-hidden bg-gradient-to-br from-cyan-200/20 via-green-200/10 to-green-400/20 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="relative group rounded-2xl overflow-hidden">
<img className="w-full h-52 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1604340083878-a3947d1775c5?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-blue-900/70 via-blue-800/10"></div>
<h3 className="absolute bottom-4 left-4 right-16 text-base font-semibold font-nunito">Creative Expression Workshop</h3>
<button className="absolute bottom-4 right-4 w-10 h-10 rounded-full backdrop-blur flex items-center justify-center bg-white/90">
<svg className="lucide lucide-play w-4 h-4 text-blue-900" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>
<div className="relative group rounded-2xl overflow-hidden">
<img className="w-full h-52 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1640102371408-5fc0c42a8792?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-blue-900/70 via-blue-800/10"></div>
<h3 className="absolute bottom-4 left-4 right-16 text-base font-semibold font-nunito">Entrepreneurship Journey</h3>
<button className="absolute bottom-4 right-4 w-10 h-10 rounded-full backdrop-blur flex items-center justify-center bg-white/90">
<svg className="lucide lucide-play w-4 h-4 text-blue-900" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>
<div className="relative group rounded-2xl overflow-hidden">
<img className="w-full h-52 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1649393832219-0ad856a1e119?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-blue-900/70 via-blue-800/10"></div>
<h3 className="absolute bottom-4 left-4 right-16 text-base font-semibold font-nunito">Discover Your Purpose: A Personal Growth Guide</h3>
<button className="absolute bottom-4 right-4 w-10 h-10 rounded-full backdrop-blur flex items-center justify-center bg-white/90">
<svg className="lucide lucide-play w-4 h-4 text-blue-900" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>
<div className="relative group rounded-2xl overflow-hidden">
<img className="w-full h-52 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1659772846955-456debf2737f?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-blue-900/70 via-blue-800/10"></div>
<h3 className="absolute bottom-4 left-4 right-16 text-base font-semibold font-nunito">Unlock Your Potential: Skills Development</h3>
<button className="absolute bottom-4 right-4 w-10 h-10 rounded-full backdrop-blur flex items-center justify-center bg-white/90">
<svg className="lucide lucide-play w-4 h-4 text-blue-900" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
