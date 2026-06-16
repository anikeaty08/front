import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-7xl grid grid-cols-1 gap-12 place-items-center">

<div className="">
<div className="w-[375px] h-[812px] rounded-[2.5rem] p-2 bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5">
<div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#fbf8f2] flex flex-col relative">

<div className="flex items-center justify-between px-6 pt-4 pb-2">
<span className="text-xs text-neutral-600">9:41</span>
<div className="flex items-center gap-1">
<div className="w-4 h-2 border rounded-sm border-neutral-700/60">
<div className="w-3 h-1 rounded-sm bg-neutral-700/60"></div>
</div>
</div>
</div>

<div className="px-6 pt-2 pb-3 flex items-center justify-between">
<button aria-label="Back" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 backdrop-blur ring-1 ring-black/5 hover:bg-white/90 hover:ring-black/10 transition">
<svg className="text-neutral-800" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="text-neutral-900" style={{fontFamily: '\'Playfair Display\', serif'}}>
<h1 className="text-[22px] tracking-tight font-medium">Profile</h1>
</div>
<button aria-label="Menu" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 backdrop-blur ring-1 ring-black/5 hover:bg-white/90 hover:ring-black/10 transition">
<svg className="text-neutral-800" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>

<div className="flex-1 overflow-y-auto pb-28">

<div className="px-6">
<div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
<div className="h-28 overflow-hidden group">
<img alt="Yacht on calm water" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="h-28 overflow-hidden group">
<img alt="Art gallery" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="h-28 overflow-hidden group">
<img alt="Fine wine" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="h-28 overflow-hidden group">
<img alt="Equestrian polo" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&amp;w=1200"/>
</div>
<div className="h-28 overflow-hidden group">
<img alt="Architectural detail" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&amp;w=1200"/>
</div>
<div className="h-28 overflow-hidden group">
<img alt="Coastal retreat" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200"/>
</div>
</div>
</div>

<div className="px-6 pt-6">
<div className="bg-white rounded-2xl p-5 ring-1 ring-black/5">
<div className="flex items-start justify-between gap-4">
<div>
<div style={{fontFamily: '\'Playfair Display\', serif'}}>
<h2 className="text-[26px] leading-none tracking-tight text-neutral-900 font-semibold">Alexander, 35, London</h2>
</div>
<p className="text-sm text-neutral-600 mt-2">Investment Director</p>
</div>
<div className="flex items-center gap-2">

<button aria-label="Like" className="w-10 h-10 rounded-full flex items-center justify-center ring-1 ring-black/10 bg-[#fbf8f2] hover:bg-[#f3eee5] hover:ring-black/20 transition-all hover:-translate-y-0.5">
<svg className="text-neutral-800" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</button>

<button aria-label="Message" className="w-10 h-10 rounded-full flex items-center justify-center ring-1 ring-black/10 bg-[#fbf8f2] hover:bg-[#f3eee5] hover:ring-black/20 transition-all hover:-translate-y-0.5">
<svg className="text-neutral-800" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
</svg>
</button>
</div>
</div>

<div className="mt-4 flex items-center gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full ring-1 ring-[#bfa06c]/40 bg-[#c8ab78] text-white" title="Photo ID Verified">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</span>
<span className="text-[11px] text-neutral-600">Photo ID</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full ring-1 ring-[#bfa06c]/40 bg-[#c8ab78] text-white" title="LinkedIn Verified">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h4v16H4z"></path>
<path d="M8 8h6a4 4 0 0 1 4 4v8h-4v-7a2 2 0 0 0-2-2h-4z"></path>
</svg>
</span>
<span className="text-[11px] text-neutral-600">LinkedIn</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full ring-1 ring-[#bfa06c]/40 bg-[#c8ab78] text-white" title="Income Verified">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<path d="M12 8v8"></path>
<path d="M8 12h8"></path>
</svg>
</span>
<span className="text-[11px] text-neutral-600">Income</span>
</div>
</div>
</div>
</div>

<div className="px-6 pt-4">
<div className="bg-white rounded-2xl p-5 ring-1 ring-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f3eee5] ring-1 ring-black/5">
<svg className="text-neutral-800" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10L12 2 2 10l10 6 10-6z"></path>
<path d="M6 12v5c0 .93 2.686 3 6 3s6-2.07 6-3v-5"></path>
</svg>
</div>
<div>
<p className="text-xs text-neutral-500">Education</p>
<p className="text-sm text-neutral-900">MBA, Oxford University</p>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 pt-4">
<div className="bg-white rounded-2xl p-5 ring-1 ring-black/5">
<p className="text-xs text-neutral-500 mb-3">Interests</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-black/10 bg-[#fbf8f2] text-sm text-neutral-800 hover:bg-[#f3eee5] hover:ring-black/20 transition-colors">
<span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#c8ab78'}}></span> Sailing
                  </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-black/10 bg-[#fbf8f2] text-sm text-neutral-800 hover:bg-[#f3eee5] hover:ring-black/20 transition-colors">
<span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#c8ab78'}}></span> Contemporary Art
                  </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-black/10 bg-[#fbf8f2] text-sm text-neutral-800 hover:bg-[#f3eee5] hover:ring-black/20 transition-colors">
<span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#c8ab78'}}></span> Oenology
                  </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-black/10 bg-[#fbf8f2] text-sm text-neutral-800 hover:bg-[#f3eee5] hover:ring-black/20 transition-colors">
<span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#c8ab78'}}></span> Polo
                  </span>
</div>
</div>
</div>

<div className="px-6 pt-4 pb-4">
<div className="bg-white rounded-2xl p-5 ring-1 ring-black/5">
<p className="text-xs text-neutral-500 mb-3">About Me</p>
<p className="text-[15px] leading-7 text-neutral-800">
                  Weekdays are for building and mentoring exceptional teams; weekends are for salt air, good books, and dinners that stretch into unhurried conversation. I split my time between London and the coast, with a soft spot for galleries, well-crafted Burgundy, and horses. I appreciate people who are curious, warm, and quietly ambitious—who see beauty in details and substance in restraint. If that resonates, let’s trade recommendations—your favourite exhibit for my best table by the river.
                </p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-gradient-to-t from-[#fbf8f2] via-[#fbf8f2] to-[#fbf8f2]/80">
<div className="flex items-center gap-3">
<button className="flex-1 h-12 rounded-xl bg-neutral-900 text-[#f6f2ea] text-sm flex items-center justify-center gap-2 ring-1 ring-black/10 hover:bg-neutral-800 hover:ring-black/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
<svg className="text-[#c8ab78]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
</svg>
                Message
              </button>
<button className="w-12 h-12 rounded-xl flex items-center justify-center bg-white ring-1 ring-black/10 hover:bg-neutral-50 hover:ring-black/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
<svg className="text-neutral-900" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
