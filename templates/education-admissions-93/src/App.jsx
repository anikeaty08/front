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
      

<div className="hidden lg:flex fixed right-0 top-0 bottom-0 w-16 border-l-[3px] border-black flex-col items-center justify-between py-12 z-50 bg-white">
<div className="flex flex-col items-center gap-4">

<div className="w-8 h-8 border-[2px] border-black rounded-full relative flex items-center justify-center">
<div className="w-full h-[2px] bg-black absolute"></div>
<div className="w-[2px] h-full bg-black absolute"></div>
</div>

<div className="w-6 flex flex-col border-[2px] border-black mt-4">
<div className="h-4 bg-black"></div>
<div className="h-4 bg-[#333]"></div>
<div className="h-4 bg-[#999]"></div>
<div className="h-4 bg-white"></div>
</div>
</div>
<div className="[writing-mode:vertical-rl] rotate-180 text-xs tracking-widest uppercase flex items-center gap-6 font-medium">
<span>Designed for conversion. Engineered in 2024.</span>
<span className="text-gray-500">ThinkPlus Education ©</span>
</div>
</div>

<div className="lg:mr-16">

<header className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 border-b-[3px] border-black pt-8 md:pt-12">

<div className="md:col-span-5 px-6 md:px-12 pb-8">
<h1 className="text-3xl font-semibold tracking-tight mb-8">ThinkPlus Ed™</h1>
<nav className="flex flex-col w-full">
<a className="block py-3 text-xl font-medium border-t-[2px] border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase tracking-widest flex justify-between items-center group" href="#">
<span>Admissions</span>
<i className="w-5 h-5 stroke-[1.5] opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</a>
<a className="block py-3 text-xl font-medium border-t-[2px] border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase tracking-widest flex justify-between items-center group" href="#">
<span>Methodology</span>
<i className="w-5 h-5 stroke-[1.5] opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</a>
<a className="block py-3 text-xl font-medium border-t-[2px] border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase tracking-widest flex justify-between items-center group" href="#">
<span>Data &amp; Results</span>
<i className="w-5 h-5 stroke-[1.5] opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</a>
<a className="block py-3 text-xl font-medium border-t-[2px] border-b-[2px] border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase tracking-widest flex justify-between items-center group" href="#">
<span>Initiate Application</span>
<i className="w-5 h-5 stroke-[1.5] opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</a>
</nav>
</div>

<div className="md:col-span-4 px-6 md:px-0 md:pr-8 pb-8 md:pt-20">
<div className="border-t-[2px] border-black pt-4 pb-8">
<p className="text-lg leading-snug font-medium">Currently accepting candidates for the intensive Fall cohort. Capacity strictly limited to maintain tactical advantage.</p>
</div>
<div className="border-t-[2px] border-black pt-4">
<p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Internal / Portal / Comm / Legal</p>
</div>
</div>

<div className="md:col-span-3 px-6 md:px-0 md:pr-12 pb-8 md:pt-20">
<div className="border-t-[2px] border-black pt-4 pb-8 flex flex-col gap-2">
<h2 className="text-2xl font-semibold tracking-tight">System Active</h2>
<p className="text-base text-gray-600">Metric tracking initialized.</p>
</div>
<div className="border-t-[2px] border-black pt-4">
<p className="text-sm font-medium">Placement success rate currently registering at 96.4% for target institutions.</p>
</div>
</div>
</header>

<main className="px-6 md:px-12 pt-16 md:pt-32 pb-24 md:pb-48 relative">
<h2 className="text-[15vw] leading-[0.85] font-semibold tracking-tighter uppercase break-words text-black m-0 z-10 relative">
                Engineer<br/>
                Academic<br/>
                Dominance.
            </h2>

<div className="absolute right-[10%] top-[20%] w-[30vw] h-[30vw] border-[min(4vw,40px)] border-black rounded-full opacity-10 pointer-events-none -z-10 mix-blend-multiply flex items-center justify-center">
<div className="w-[60%] h-[60%] border-[min(2vw,20px)] border-black rounded-full"></div>
</div>
</main>

<section className="border-t-[3px] border-black">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-black">

<div className="p-8 md:p-12 hover:bg-[#f4f4f4] transition-colors group">
<div className="flex justify-between items-start mb-16">
<span className="text-sm font-medium border-[2px] border-black px-3 py-1 rounded-full">SEQ. 01</span>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="target"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-6 uppercase">Precision <br/> Targeting</h3>
<p className="text-lg font-medium text-gray-700">Curriculum stripped of inefficiencies. Calibrated strictly for top-tier university admissions criteria.</p>
</div>

<div className="p-8 md:p-12 hover:bg-[#f4f4f4] transition-colors group">
<div className="flex justify-between items-start mb-16">
<span className="text-sm font-medium border-[2px] border-black px-3 py-1 rounded-full">SEQ. 02</span>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-6 uppercase">Algorithmic <br/> Assessment</h3>
<p className="text-lg font-medium text-gray-700">Continuous quantitative monitoring. We track 50+ data vectors per student to force upward trajectories.</p>
</div>

<div className="p-8 md:p-12 hover:bg-[#f4f4f4] transition-colors group">
<div className="flex justify-between items-start mb-16">
<span className="text-sm font-medium border-[2px] border-black px-3 py-1 rounded-full">SEQ. 03</span>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="crosshair"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-6 uppercase">Elite <br/> Extraction</h3>
<p className="text-lg font-medium text-gray-700">Instruction deployed exclusively by former admissions officers and verifiable top 1% academic performers.</p>
</div>

<a className="p-8 md:p-12 bg-black text-white hover:bg-white hover:text-black hover:border-l-[3px] border-black transition-all group flex flex-col justify-between cursor-pointer" href="#">
<div className="flex justify-between items-start mb-16">
<span className="text-sm font-medium border-[2px] border-current px-3 py-1 rounded-full">ACTION</span>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="power"></i>
</div>
<div>
<h3 className="text-4xl font-semibold tracking-tight mb-4 uppercase">Execute <br/> Protocol</h3>
<div className="w-16 h-16 rounded-full border-[2px] border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 mt-8">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>
</a>
</div>
</section>

<footer className="border-t-[3px] border-black p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<h1 className="text-4xl font-semibold tracking-tight">ThinkPlus™</h1>
<div className="text-lg font-medium uppercase tracking-widest text-gray-500">
                End of Page.
            </div>
</footer>
</div>


    </>
  );
}
