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
      
    window.addEventListener('DOMContentLoaded', () => lucide.createIcons());

    const waveContainer = document.getElementById('wave');
    const barCount = 24;
    const colors = ['#14b8a6','#06b6d4','#0ea5e9','#6366f1','#eab308','#f97316'];
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className='w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out';
      bar.style.background=`linear-gradient(to top,${colors[i%colors.length]},${colors[(i+2)%colors.length]})`;
      bar.style.height='20%';
      waveContainer.appendChild(bar);
    }
    let playing=true;
    const animateBars=()=>{if(!playing)return;waveContainer.childNodes.forEach(bar=>{bar.style.transform=`scaleY(${0.2+Math.random()*0.8})`;});};
    setInterval(animateBars,200);
    document.getElementById('micBtn').addEventListener('click',()=>{playing=!playing;if(!playing){waveContainer.childNodes.forEach(bar=>{bar.style.transform='scaleY(0.2)';});}});
  
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
      

<div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/19.5] bg-black rounded-[40px] shadow-2xl ring-1 ring-neutral-300">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-[14px]"></div>

<div className="hidden sm:block absolute -left-1 top-20 w-0.5 h-16 bg-neutral-500/50 rounded"></div>
<div className="hidden sm:block absolute -right-1 top-32 w-0.5 h-10 bg-neutral-500/50 rounded"></div>

<div className="absolute inset-[12px] bg-neutral-50 rounded-[28px] flex flex-col overflow-hidden">
<div className="flex-1 flex items-center justify-center px-4">

<div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl bg-gradient-to-b from-white via-neutral-50 to-neutral-100 shadow-xl ring-1 ring-neutral-200 overflow-hidden p-6">

<div className="bg-neutral-100/80 backdrop-blur rounded-xl p-4 ring-1 ring-neutral-200">
<p className="text-lg sm:text-2xl font-semibold tracking-tight leading-snug">
              What’s the weather
              like today?
            </p>
</div>

<div className="flex items-end justify-center gap-[2px] mt-12 h-24" id="wave"><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(20, 184, 166), rgb(14, 165, 233))', height: '20%', transform: 'scaleY(0.663195)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(6, 182, 212), rgb(99, 102, 241))', height: '20%', transform: 'scaleY(0.944737)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(14, 165, 233), rgb(234, 179, 8))', height: '20%', transform: 'scaleY(0.945853)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(99, 102, 241), rgb(249, 115, 22))', height: '20%', transform: 'scaleY(0.422626)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(234, 179, 8), rgb(20, 184, 166))', height: '20%', transform: 'scaleY(0.919408)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(249, 115, 22), rgb(6, 182, 212))', height: '20%', transform: 'scaleY(0.719269)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(20, 184, 166), rgb(14, 165, 233))', height: '20%', transform: 'scaleY(0.796197)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(6, 182, 212), rgb(99, 102, 241))', height: '20%', transform: 'scaleY(0.305803)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(14, 165, 233), rgb(234, 179, 8))', height: '20%', transform: 'scaleY(0.96887)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(99, 102, 241), rgb(249, 115, 22))', height: '20%', transform: 'scaleY(0.574351)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(234, 179, 8), rgb(20, 184, 166))', height: '20%', transform: 'scaleY(0.589829)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(249, 115, 22), rgb(6, 182, 212))', height: '20%', transform: 'scaleY(0.871722)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(20, 184, 166), rgb(14, 165, 233))', height: '20%', transform: 'scaleY(0.472085)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(6, 182, 212), rgb(99, 102, 241))', height: '20%', transform: 'scaleY(0.314632)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(14, 165, 233), rgb(234, 179, 8))', height: '20%', transform: 'scaleY(0.741252)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(99, 102, 241), rgb(249, 115, 22))', height: '20%', transform: 'scaleY(0.806599)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(234, 179, 8), rgb(20, 184, 166))', height: '20%', transform: 'scaleY(0.612089)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(249, 115, 22), rgb(6, 182, 212))', height: '20%', transform: 'scaleY(0.998988)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(20, 184, 166), rgb(14, 165, 233))', height: '20%', transform: 'scaleY(0.213714)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(6, 182, 212), rgb(99, 102, 241))', height: '20%', transform: 'scaleY(0.242607)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(14, 165, 233), rgb(234, 179, 8))', height: '20%', transform: 'scaleY(0.210309)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(99, 102, 241), rgb(249, 115, 22))', height: '20%', transform: 'scaleY(0.354688)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(234, 179, 8), rgb(20, 184, 166))', height: '20%', transform: 'scaleY(0.718448)'}}></div><div className="w-[3px] origin-bottom rounded-full transition-transform duration-[250ms] ease-in-out" style={{background: 'linear-gradient(to top, rgb(249, 115, 22), rgb(6, 182, 212))', height: '20%', transform: 'scaleY(0.917898)'}}></div></div>

<button aria-label="Toggle voice input" className="relative block mx-auto mt-12 w-28 h-28 rounded-full bg-gradient-to-b from-teal-500 to-teal-600 flex items-center justify-center shadow-lg active:scale-95 transition focus:outline-none focus:ring-4 focus:ring-teal-400/50" id="micBtn">
<span className="absolute inset-0 rounded-full bg-teal-500/30 animate-ping"></span>
<span className="absolute inset-0 m-2 rounded-full bg-teal-500/20 animate-ping [animation-delay:.6s]"></span>
<svg className="lucide lucide-mic w-10 h-10 text-white relative z-10" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
</div>
</div>

<div className="h-5 flex items-center justify-center">
<div className="w-24 h-1.5 bg-neutral-300 rounded-full"></div>
</div>
</div>
</div>




    </>
  );
}
