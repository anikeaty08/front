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



    lucide.createIcons();
    
    const range = document.getElementById('emotionRange');
    const label = document.getElementById('emotionLabel');
    const description = document.getElementById('emotionDescription');
    const centerDot = document.getElementById('centerDot');
    const nextButton = document.getElementById('nextButton');
    const ripple1 = document.getElementById('ripple1');
    const ripple2 = document.getElementById('ripple2');
    const ripple3 = document.getElementById('ripple3');
    
    const emotions = {
      'Very Unpleasant': { color: 'from-red-400 to-orange-500', desc: 'Feeling quite distressed', button: 'from-red-500 to-orange-600', ripple: 'bg-red-300/30' },
      'Unpleasant': { color: 'from-orange-400 to-yellow-500', desc: 'Experiencing some discomfort', button: 'from-orange-500 to-yellow-600', ripple: 'bg-orange-300/30' },
      'Neutral': { color: 'from-slate-300 to-slate-400', desc: 'Finding your balance', button: 'from-slate-600 to-slate-700', ripple: 'bg-slate-300/30' },
      'Pleasant': { color: 'from-blue-400 to-purple-500', desc: 'Feeling good and positive', button: 'from-blue-600 to-purple-700', ripple: 'bg-blue-300/30' },
      'Very Pleasant': { color: 'from-purple-500 to-pink-500', desc: 'Experiencing great joy', button: 'from-purple-600 to-pink-700', ripple: 'bg-purple-300/30' }
    };

    function updateUI() {
      const value = Number(range.value);
      const perc = (value + 50) / 100 * 100;
      
      // Update slider track
      range.style.background = `linear-gradient(90deg,#fb923c 0%,#a855f7 ${perc}%,#cbd5e1 ${perc}%)`;
      
      // Determine emotion
      let emotionKey = 'Neutral';
      if (value < -30) emotionKey = 'Very Unpleasant';
      else if (value < -10) emotionKey = 'Unpleasant';
      else if (value > 30) emotionKey = 'Very Pleasant';
      else if (value > 10) emotionKey = 'Pleasant';
      
      const emotion = emotions[emotionKey];
      
      // Update text
      label.textContent = emotionKey;
      description.textContent = emotion.desc;
      
      // Update center dot
      centerDot.className = `w-16 h-16 rounded-full bg-gradient-to-br ${emotion.color} shadow-lg transition-all duration-700 ease-out flex items-center justify-center`;
      
      // Update button
      nextButton.className = `w-full py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r ${emotion.button} shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/20`;
      
      // Update ripples
      [ripple1, ripple2, ripple3].forEach(ripple => {
        ripple.className = `absolute rounded-full animate-ripple ${emotion.ripple}`;
      });
      ripple1.className += ' inset-0';
      ripple2.className += ' inset-3';
      ripple3.className += ' inset-6';
    }

    range.addEventListener('input', updateUI);
    nextButton.addEventListener('click', () => {
      // Add click feedback
      nextButton.style.transform = 'scale(0.95)';
      setTimeout(() => {
        nextButton.style.transform = '';
      }, 150);
    });

    // Initialize
    updateUI();
  
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center z-[-1]" style={{backgroundImage: `url("https://images.unsplash.com/photo-1687392946857-96c2b7f94b0d?w=3840&q=80")`}}></div>

<div className="relative animate-scale-in" style={{animationDelay: `0.2s`}}>

<div className="relative w-[375px] h-[812px] bg-gradient-to-b from-slate-900 to-black rounded-[55px] p-[8px] shadow-2xl">

<div className="w-full h-full bg-gradient-to-b from-slate-100 to-white rounded-[47px] overflow-hidden relative shadow-inner">

<div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-50 flex items-center justify-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
<div className="w-3 h-3 bg-slate-700 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-60"></div>

<div className="w-full h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col pt-12 pb-8">

<header className="flex items-center justify-between px-6 pt-4 pb-3 animate-fade-in" style={{animationDelay: `0.4s`}}>
<button className="p-2.5 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-200 hover:scale-105 border border-white/20 shadow-sm">
<svg className="lucide lucide-menu w-4 h-4 text-slate-600" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="text-center">
<h1 className="text-xl font-semibold text-slate-800 tracking-tight">Emotion</h1>
<div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full mx-auto mt-0.5"></div>
</div>
<button className="p-2.5 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-200 hover:scale-105 border border-white/20 shadow-sm">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>

<div className="px-6 text-center animate-fade-in-up" style={{animationDelay: `0.6s`}}>
<p className="leading-relaxed text-base font-medium text-slate-600">Select your current emotional state</p>
</div>

<div className="flex-1 flex animate-scale-in pr-6 pl-6 items-center justify-center" style={{animationDelay: `0.8s`}}>
<div className="relative">

<div className="absolute rounded-full animate-ripple bg-slate-300/30 inset-0" id="ripple1" style={{animationDelay: `0s`}}></div>
<div className="absolute rounded-full animate-ripple bg-slate-300/30 inset-3" id="ripple2" style={{animationDelay: `0.5s`}}></div>
<div className="absolute rounded-full animate-ripple bg-slate-300/30 inset-6" id="ripple3" style={{animationDelay: `1s`}}></div>

<div className="w-64 h-64 rounded-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-2xl border border-white/30 relative overflow-hidden">

<div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/60 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 shadow-lg transition-all duration-700 ease-out flex items-center justify-center" id="centerDot">
<div className="w-6 h-6 rounded-full bg-white/80 shadow-inner"></div>
</div>
</div>
</div>
</div>
</div>

<section className="px-6 pb-4 space-y-6">

<div className="text-center animate-fade-in-up" style={{animationDelay: `1s`}}>
<h2 className="text-2xl font-semibold text-slate-800 tracking-tight transition-all duration-500" id="emotionLabel">Neutral</h2>
<p className="text-sm font-medium text-slate-500 mt-1 transition-all duration-500" id="emotionDescription">Finding your balance</p>
</div>

<div className="space-y-3 animate-fade-in-up" style={{animationDelay: `1.2s`}}>
<div className="relative">
<input className="focus:outline-none w-full cursor-pointer" id="emotionRange" max="50" min="-50" style={{background: `linear-gradient(90deg,#fb923c 0%,#a855f7 50%,#cbd5e1 50%)`}} type="range" value="0" />

<div className="flex justify-between text-xs font-semibold text-slate-400 mt-2 px-1">
<span className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                    UNPLEASANT
                  </span>
<span className="flex items-center gap-1">
                    PLEASANT
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
</span>
</div>
</div>
</div>

<div className="animate-fade-in-up" style={{animationDelay: `1.4s`}}>
<button className="w-full py-3.5 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-slate-600 to-slate-700 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/20" id="nextButton">
<span className="flex items-center justify-center gap-2">
                  Continue
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</section>
</div>
</div>
</div>

<div className="absolute -bottom-2 left-4 right-4 h-8 bg-gradient-to-b from-black/20 to-transparent rounded-full blur-xl"></div>
</div>


    </>
  );
}
