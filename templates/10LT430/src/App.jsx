import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
          colors: {
            brand: { 500: '#10b981' },
            darkbg: '#1a1d27',
            darkpanel: '#222533',
            darkglass: 'rgba(32,42,56,0.65)',
            accent: '#10b981',
          },
          borderRadius: { xl2: '1.75rem' }
        }
      }
    };
  


    lucide.createIcons();
    const scrub = document.getElementById('scrub');
    const timeNow = document.getElementById('timeNow');
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return minutes + ':' + secs.toString().padStart(2, '0');
    }
    scrub.addEventListener('input', () => {
      const currentTime = parseInt(scrub.value);
      timeNow.textContent = formatTime(currentTime);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="flex items-center justify-center min-h-screen py-6 px-3 bg-darkbg">
<section className="glass w-full max-w-6xl sm:p-8 lg:p-10 border-white/5 border rounded-xl2 pt-4 pr-4 pb-4 pl-4 shadow-2xl">

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-7">
<div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-accent/90">
<svg className="lucide lucide-headphones w-5 h-5 sm:w-6 sm:h-6" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="hidden sm:inline uppercase font-light tracking-wider text-slate-200">InsightLink Dashboard</span>
<span className="sm:hidden text-slate-200">Dashboard</span>
</div>
<div className="flex items-center gap-3 flex-1 w-full sm:w-auto bg-darkpanel rounded-full px-3 py-1 border border-white/10">
<svg className="lucide lucide-search w-5 h-5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 placeholder-slate-400 bg-transparent focus:outline-none text-base text-slate-100" placeholder="Search support logs..." type="text"/>
</div>
</div>
<hr className="border-white/10 mb-7"/>

<div className="flex flex-wrap items-center gap-4 lg:gap-8 text-xs sm:text-sm font-medium mb-8">
<span className="flex items-center gap-2 text-green-300">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="hidden sm:inline">Sentiment Levels</span>
<span className="sm:hidden">Sentiment</span>
</span>
<span className="flex items-center gap-2">
<span className="block w-3 h-3 sm:w-4 sm:h-4 rounded-full hash"></span>
<span className="text-brand-500">Supportive</span>
</span>
<span className="flex items-center gap-2">
<span className="block w-3 h-3 sm:w-4 sm:h-4 rounded-full hash opacity-60" style={{transform: 'rotate(90deg)'}}></span>
<span className="text-slate-300">Neutral</span>
</span>
<span className="flex items-center gap-2">
<span className="block w-3 h-3 rounded-full bg-red-400/70"></span>
<span className="text-red-300">Concerned</span>
</span>
</div>

<div className="relative mb-12">
<div className="h-12 sm:h-14 flex items-center overflow-hidden bg-darkpanel border border-white/10 rounded-full px-3">
<div className="flex-1 h-4 sm:h-6 mx-1 rounded-full hash"></div>
<div className="w-1/6 h-4 sm:h-6 mx-1 rounded-full hash"></div>
<div className="flex-1 h-4 sm:h-6 mx-1 rounded-full hash opacity-60"></div>
<div className="w-1/5 h-4 sm:h-6 mx-1 hash opacity-40 rounded-full"></div>
</div>
<input className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-0 cursor-pointer bg-transparent" id="scrub" max="245" min="0" type="range" value="42"/>
<div className="flex justify-between items-center mt-3">
<span className="text-xs text-slate-400">0:00</span>
<span className="text-xs text-slate-200 font-medium" id="timeNow">1:36</span>
<span className="text-xs text-slate-400">4:05</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
<h2 className="text-xl sm:text-2xl font-semibold text-slate-100">Interaction Transcript</h2>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-sm bg-darkpanel rounded-full px-3 py-1 border border-white/10 text-green-300">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="hidden sm:inline">Assistance Call</span>
</div>
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-300" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>

<ul className="space-y-3">
<li className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-darkpanel rounded-xl p-3 sm:p-4 hover:bg-accent/10 transition-colors border border-white/10">
<div className="flex items-center gap-3">
<img className="w-8 h-8 sm:w-10 sm:h-10 ring-2 ring-accent/30 flex-shrink-0 object-cover rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="min-w-0">
<p className="font-medium text-sm sm:text-base text-blue-300">Darren Moss</p>
<p className="text-xs text-slate-400">00:01:08</p>
</div>
</div>
<p className="flex-1 text-sm text-slate-200 leading-relaxed">Thanks for joining so quickly! I’m trying to link my DataSync account with your API, but I keep getting an authentication error.</p>
<button className="p-1.5 hover:bg-accent/10 rounded-md self-start sm:self-center" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</li>
<li className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-darkpanel sm:p-4 hover:bg-accent/10 transition-colors border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 sm:w-10 sm:h-10 ring-2 ring-accent/30 flex-shrink-0 object-cover rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="min-w-0">
<p className="font-medium text-sm sm:text-base text-brand-500">Selena Park</p>
<p className="text-xs text-slate-400">00:00:42</p>
</div>
</div>
<p className="flex-1 leading-relaxed text-sm text-slate-200">Hello! This is Selena from InsightLink support. I see you’re having trouble connecting the integration. Can you tell me what error message you’re seeing?</p>
<button className="p-1.5 hover:bg-accent/10 rounded-md self-start sm:self-center" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</li>
<li className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-darkpanel rounded-xl p-3 sm:p-4 hover:bg-accent/10 transition-colors border border-white/10">
<div className="flex items-center gap-3">
<img className="w-8 h-8 sm:w-10 sm:h-10 ring-2 ring-accent/30 flex-shrink-0 object-cover rounded-full" src="https://randomuser.me/api/portraits/women/45.jpg"/>
<div className="min-w-0">
<p className="font-medium text-sm sm:text-base text-brand-500">Selena Park</p>
<p className="text-xs text-slate-400">00:01:24</p>
</div>
</div>
<p className="flex-1 text-sm text-slate-200 leading-relaxed">No worries! Let’s get this sorted. Can you double-check your API token in the settings page and confirm it matches the one you’re using?</p>
<button className="p-1.5 hover:bg-accent/10 rounded-md self-start sm:self-center" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</li>
</ul>
</section>
</main>


    </>
  );
}
