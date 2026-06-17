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



        // Initialize Icons
        lucide.createIcons();

        // Data for Carousel
        const slidesData = [
            {
                title: "Stay In Touch,<br>Stay with Twice",
                desc: "TWICE reimagines professional networking, making it digital, dynamic, and effortless."
            },
            {
                title: "Your Network,<br>Amplified",
                desc: "TWICE streamlines every interaction, ensuring you make lasting impressions."
            },
            {
                title: "Connect Smarter,<br>Not Harder",
                desc: "Build meaningful connections, manage your contacts with ease, and unlock new opportunities."
            }
        ];

        let currentIndex = 0;
        const visualSlides = document.querySelectorAll('.slide-visual');
        const indicators = document.querySelectorAll('.indicator');
        const titleEl = document.getElementById('slide-title');
        const descEl = document.getElementById('slide-desc');

        function updateSlide(index) {
            // Update Visuals
            visualSlides.forEach((slide, i) => {
                if(i === index) {
                    slide.style.opacity = '1';
                    slide.style.transform = 'scale(1)';
                } else {
                    slide.style.opacity = '0';
                    slide.style.transform = 'scale(0.95)';
                }
            });

            // Update Indicators
            indicators.forEach((ind, i) => {
                if(i === index) {
                    ind.classList.remove('bg-white/20', 'w-4');
                    ind.classList.add('bg-[#0F7EEB]', 'w-8');
                } else {
                    ind.classList.remove('bg-[#0F7EEB]', 'w-8');
                    ind.classList.add('bg-white/20', 'w-4');
                }
            });

            // Update Text with simple fade effect
            titleEl.style.opacity = '0';
            descEl.style.opacity = '0';
            
            setTimeout(() => {
                titleEl.innerHTML = slidesData[index].title;
                descEl.innerText = slidesData[index].desc;
                titleEl.style.opacity = '1';
                descEl.style.opacity = '1';
            }, 300);
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slidesData.length;
            updateSlide(currentIndex);
        }

        // Auto-play
        setInterval(nextSlide, 5000);

        // Allow manual click on indicators
        indicators.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                currentIndex = i;
                updateSlide(currentIndex);
            });
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
      

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse-glow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
</div>

<div className="relative w-full max-w-[400px] h-[850px] bg-[#02101E] rounded-[54px] border-[8px] border-[#1a1f26] shadow-2xl overflow-hidden flex flex-col">

<div className="absolute top-0 w-full h-14 z-50 flex justify-between items-end px-6 pb-2">
<span className="text-sm font-semibold tracking-wide">9:41</span>
<div className="absolute left-1/2 -translate-x-1/2 top-3 w-32 h-9 bg-black rounded-full flex items-center justify-end px-3 gap-2">
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="flex gap-1.5 items-center">
<i className="w-4 h-4 text-white" data-lucide="signal"></i>
<i className="w-4 h-4 text-white" data-lucide="wifi"></i>
<i className="w-5 h-5 text-white" data-lucide="battery-full"></i>
</div>
</div>

<div className="relative flex-1 w-full overflow-hidden" id="visual-container">

<div className="slide-visual absolute inset-0 flex items-center justify-center transition-opacity duration-500" data-index="0">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute w-64 h-64 rounded-full border border-white/10 animate-float"></div>
<div className="absolute w-96 h-96 rounded-full border border-white/5 animate-float-delayed"></div>

<div className="w-40 h-64 rounded-full bg-gradient-to-b from-cyan-200 via-blue-500 to-blue-700 blur-2xl opacity-40 mix-blend-screen absolute top-1/4 left-1/4 animate-pulse-glow"></div>
<div className="w-40 h-64 rounded-full bg-gradient-to-t from-blue-900 via-indigo-600 to-cyan-400 blur-xl opacity-60 mix-blend-overlay absolute top-1/3 right-1/4"></div>

<div className="absolute bottom-1/4 right-8 bg-[#0F7EEB] p-4 rounded-full shadow-lg shadow-blue-500/20 animate-float">
<i className="w-8 h-8 text-white" data-lucide="scan-face"></i>
</div>
</div>
</div>

<div className="slide-visual absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500" data-index="1">
<div className="relative w-full h-full flex flex-col items-center justify-center pt-20">
<div className="flex items-end gap-6 mb-12">

<div className="w-12 h-32 rounded-t-xl bg-gradient-to-t from-[#02101E] to-blue-800/80 backdrop-blur-sm border-t border-white/10 relative group">
<div className="absolute -top-12 -left-12 glass-panel px-3 py-1.5 rounded-full border border-blue-400/30 flex items-center gap-2 animate-float">
<span className="w-2 h-2 bg-blue-400 rounded-full"></span>
<span className="text-[10px] font-bricolage text-white">Collected 9 Cards</span>
</div>
</div>

<div className="w-12 h-56 rounded-t-xl bg-gradient-to-t from-[#02101E] to-blue-500 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.3)] relative">
<div className="absolute -top-16 -right-8 glass-panel px-3 py-1.5 rounded-full border border-blue-400/50 flex items-center gap-2 animate-float-delayed">
<div className="flex -space-x-1">
<div className="w-4 h-4 rounded-full bg-blue-200"></div>
<div className="w-4 h-4 rounded-full bg-indigo-300"></div>
</div>
<span className="text-[10px] font-bricolage text-white">Collected 16 Cards</span>
</div>
</div>

<div className="w-12 h-40 rounded-t-xl bg-gradient-to-t from-[#02101E] to-blue-700/80 backdrop-blur-sm border-t border-white/10 relative">
<div className="absolute -top-8 -left-16 glass-panel px-3 py-1.5 rounded-full border border-blue-400/30 flex items-center gap-2">
<span className="text-[10px] font-bricolage text-gray-300">Collected 12 Cards</span>
</div>
</div>
</div>

<div className="absolute bottom-1/4 right-8 bg-[#0F7EEB] p-4 rounded-full shadow-lg shadow-blue-500/20">
<i className="w-8 h-8 text-white" data-lucide="bar-chart-3"></i>
</div>
</div>
</div>

<div className="slide-visual absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500" data-index="2">
<div className="relative w-full h-full flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full" style={{opacity: '0.4'}}>
<line stroke="url(#grad1)" strokeWidth="1" x1="30%" x2="70%" y1="40%" y2="30%"></line>
<line stroke="url(#grad1)" strokeWidth="1" x1="70%" x2="80%" y1="30%" y2="60%"></line>
<line stroke="url(#grad1)" strokeWidth="1" x1="30%" x2="40%" y1="40%" y2="65%"></line>
<line stroke="url(#grad1)" strokeWidth="1" x1="40%" x2="80%" y1="65%" y2="60%"></line>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgb(59,130,246)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgb(59,130,246)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(59,130,246)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-[40%] left-[30%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-pulse"></div>
<div className="absolute top-[30%] left-[70%] w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)]"></div>
<div className="absolute top-[65%] left-[40%] w-2 h-2 bg-blue-600 rounded-full"></div>
<div className="absolute top-[60%] left-[80%] w-3 h-3 bg-cyan-400 rounded-full"></div>

<div className="absolute top-[25%] right-[15%] glass-panel px-4 py-2 rounded-full border border-white/20 animate-float">
<span className="text-xs font-bricolage text-white">New Connection</span>
</div>
<div className="absolute bottom-1/4 right-8 bg-[#0F7EEB] p-4 rounded-full shadow-lg shadow-blue-500/20">
<i className="w-8 h-8 text-white" data-lucide="network"></i>
</div>
</div>
</div>
</div>

<div className="glass-panel w-full absolute bottom-0 z-20 rounded-t-[32px] pt-8 pb-8 px-6 flex flex-col gap-8 transition-transform duration-500 ease-out">

<div className="text-center space-y-4">
<h2 className="text-2xl font-jakarta font-semibold tracking-tight text-white transition-opacity duration-300" id="slide-title">
                    Stay In Touch,<br/>Stay with Twice
                </h2>
<p className="text-sm text-slate-300 font-normal leading-relaxed px-4 transition-opacity duration-300" id="slide-desc">
                    TWICE reimagines professional networking, making it digital, dynamic, and effortless.
                </p>
</div>

<div className="flex justify-center gap-1.5">
<div className="indicator w-8 h-1 bg-[#0F7EEB] rounded-full transition-all duration-300" data-idx="0"></div>
<div className="indicator w-4 h-1 bg-white/20 rounded-full transition-all duration-300" data-idx="1"></div>
<div className="indicator w-4 h-1 bg-white/20 rounded-full transition-all duration-300" data-idx="2"></div>
</div>

<div className="flex flex-col gap-3 w-full">
<button className="w-full bg-[#0F7EEB] hover:bg-[#0d6ac7] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(15,126,235,0.3)] transition-colors">
<span>Sign In</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right"></i>
</button>
<button className="w-full bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
<span>Sign Up</span>
<i className="w-4 h-4 opacity-70" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>


    </>
  );
}
