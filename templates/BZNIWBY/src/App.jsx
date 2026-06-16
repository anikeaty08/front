import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevMobile = document.getElementById('prevMobile');
    const nextMobile = document.getElementById('nextMobile');
    const cardWidth = 320;
    function scrollByCard(dir) {
      carousel.scrollBy({
        left: dir * cardWidth,
        behavior: 'smooth'
      });
    }
    prevBtn && prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn && nextBtn.addEventListener('click', () => scrollByCard(1));
    prevMobile.addEventListener('click', () => scrollByCard(-1));
    nextMobile.addEventListener('click', () => scrollByCard(1));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-5xl">
<h2 className="md:text-4xl text-3xl font-black font-poppins text-center mb-10">Our Features</h2>
<div className="relative">
<button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 transition-colors rounded-full p-2 shadow-lg hidden md:block" id="prevBtn">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory font-thin font-poppins pt-4 pr-1 pb-4 pl-1" id="carousel">

<div className="group min-w-[300px] max-w-xs flex flex-col items-center snap-start shrink-0 bg-white/5 border border-white/10 rounded-2xl pt-8 pr-6 pb-8 pl-6 transition-all duration-300 hover:bg-white/10 hover:border-green-500/80 hover:shadow-2xl hover:-translate-y-2">
<div className="bg-green-600/80 p-4 rounded-full mb-5 transition-colors duration-300 group-hover:bg-green-500">
<svg className="lucide lucide-bar-chart-3 w-8 h-8 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 3v16a2 2 0 0 0 2 2h16"></path><path className="" d="M18 17V9"></path><path className="" d="M13 17V5"></path><path className="" d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 transition-colors duration-300 group-hover:text-green-400">Real-Time Analytics</h3>
<p className="font-thin text-gray-300 font-poppins text-center">Instant insights from your data streams for faster and smarter decisions.</p>
</div>

<div className="group min-w-[300px] max-w-xs bg-white/5 border border-white/10 rounded-2xl px-6 py-8 flex flex-col items-center snap-start shrink-0 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/80 hover:shadow-2xl hover:-translate-y-2">
<div className="bg-blue-600/80 p-4 rounded-full mb-5 transition-colors duration-300 group-hover:bg-blue-500">
<svg className="lucide lucide-cpu w-8 h-8 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect className="" height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 transition-colors duration-300 group-hover:text-blue-400">AI Optimization</h3>
<p className="text-gray-300 text-center">Machine learning driven resource optimization for peak performance.</p>
</div>

<div className="group min-w-[300px] max-w-xs bg-white/5 border border-white/10 rounded-2xl px-6 py-8 flex flex-col items-center snap-start shrink-0 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/80 hover:shadow-2xl hover:-translate-y-2">
<div className="bg-purple-600/80 p-4 rounded-full mb-5 transition-colors duration-300 group-hover:bg-purple-500">
<svg className="lucide lucide-settings-2 w-8 h-8 text-white" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 transition-colors duration-300 group-hover:text-purple-400">Seamless Automation</h3>
<p className="text-gray-300 text-center">Automate repetitive tasks to streamline your workflows and save time.</p>
</div>

<div className="group min-w-[300px] max-w-xs bg-white/5 border border-white/10 rounded-2xl px-6 py-8 flex flex-col items-center snap-start shrink-0 transition-all duration-300 hover:bg-white/10 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-2">
<div className="bg-yellow-500/80 p-4 rounded-full mb-5 transition-colors duration-300 group-hover:bg-yellow-400">
<svg className="lucide lucide-pie-chart w-8 h-8 text-white" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-yellow-300">Custom Reports</h3>
<p className="text-gray-300 text-center">Create and export customizable reports for deep business insights.</p>
</div>

<div className="group min-w-[300px] max-w-xs bg-white/5 border border-white/10 rounded-2xl px-6 py-8 flex flex-col items-center snap-start shrink-0 transition-all duration-300 hover:bg-white/10 hover:border-pink-500/80 hover:shadow-2xl hover:-translate-y-2">
<div className="bg-pink-500/80 p-4 rounded-full mb-5 transition-colors duration-300 group-hover:bg-pink-400">
<svg className="lucide lucide-shield-check w-8 h-8 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-pink-300">Secure Platform</h3>
<p className="text-gray-300 text-center">Top-tier security protocols keep your data safe and protected at all times.</p>
</div>
</div>
<button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 transition-colors rounded-full p-2 shadow-lg hidden md:block" id="nextBtn">
<svg className="lucide lucide-chevron-right w-6 h-6" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="flex md:hidden justify-center gap-4 mt-6">
<button className="bg-gray-800/80 hover:bg-gray-700 transition-colors rounded-full p-2 shadow-lg" id="prevMobile">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="bg-gray-800/80 hover:bg-gray-700 transition-colors rounded-full p-2 shadow-lg" id="nextMobile">
<svg className="lucide lucide-chevron-right w-6 h-6" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>


    </>
  );
}
