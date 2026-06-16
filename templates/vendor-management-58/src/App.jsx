import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



              (function() {
                  const init = () => {
                      const ctx = document.getElementById('chart-aura-emk9p2fev4kpgm6tg');
                      if (!ctx) return;

                      // Destroy existing chart if it exists to prevent overlay
                      if (ctx.chart) ctx.chart.destroy();

                      ctx.chart = new Chart(ctx, {
                          type: 'doughnut',
                          data: {
                              labels: ['Permanent', 'Casual'],
                              datasets: [{
                                  data: [64, 36],
                                  backgroundColor: ['#4c954c', '#e6b405'], // Success, Yellow
                                  borderColor: '#1f3c24', // Matches card background
                                  borderWidth: 2,
                                  hoverOffset: 4
                              }]
                          },
                          options: {
                              responsive: true,
                              maintainAspectRatio: false,
                              cutout: '80%',
                              plugins: {
                                  legend: { display: false },
                                  tooltip: { enabled: false }
                              },
                              animation: {
                                  animateScale: true,
                                  animateRotate: true
                              }
                          }
                      });
                  };

                  if (typeof Chart === 'undefined') {
                      const script = document.createElement('script');
                      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
                      script.onload = init;
                      document.head.appendChild(script);
                  } else {
                      init();
                  }
              })();
            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/60">
</nav>

<section className="min-h-screen flex flex-col overflow-hidden bg-[#ffffff] pt-28 pr-4 pb-20 pl-4 relative items-center justify-start">

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#b5d4b5]/40 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#eff6ff]/60 rounded-full blur-[100px] pointer-events-none"></div>

<div className="md:h-[800px] w-full h-[700px] max-w-[1200px] mt-4 mr-auto ml-auto relative perspective-1000">

<div className="-translate-x-1/2 z-10 overflow-hidden font-sans bg-[#ffffff] w-full max-w-6xl border-[#d1d5db] border rounded-3xl absolute top-0 left-1/2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">

<div className="p-8 pb-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div className="">
<h1 className="text-2xl font-medium text-[#1f3c24] tracking-tight">
                  Stallholder Applications
                </h1>
<p className="text-sm text-[#7c8c7c] mt-1">
                  Review and manage pending stall applications.
                </p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="text-[#7c8c7c]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
</div>
<input className="block w-64 pl-10 pr-3 py-2 border border-[#d1d5db] rounded-lg leading-5 bg-[#ffffff] placeholder-[#7c8c7c] text-[#242924] focus:outline-none focus:ring-1 focus:ring-[#d1d5db] focus:border-[#d1d5db] sm:text-sm transition duration-150 ease-in-out" placeholder="Search..." type="text"/>
</div>
<button className="inline-flex items-center px-4 py-2 border border-[#d1d5db] text-sm font-normal rounded-lg text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff] focus:outline-none transition-colors">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
                  Export CSV
                </button>
<button className="inline-flex items-center p-2.5 border border-[#d1d5db] text-sm font-normal rounded-lg text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff] focus:outline-none transition-colors">
<svg className="text-[#7c8c7c]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="4" y1="21" y2="14"></line>
<line x1="4" x2="4" y1="10" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="12"></line>
<line x1="12" x2="12" y1="8" y2="3"></line>
<line x1="20" x2="20" y1="21" y2="16"></line>
<line x1="20" x2="20" y1="12" y2="3"></line>
<line x1="1" x2="7" y1="14" y2="14"></line>
<line x1="9" x2="15" y1="8" y2="8"></line>
<line x1="17" x2="23" y1="16" y2="16"></line>
</svg>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
                Event
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line className="" x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                Event Date
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
<line x1="7" x2="7.01" y1="7" y2="7"></line>
</svg>
                Category
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
                Shortlisted
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="ml-2 inline-flex items-center text-sm text-[#7c8c7c] hover:text-[#242924] transition-colors">
<svg className="mr-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
                Clear filters
              </button>
</div>
</div>

<div className="px-8 border-b border-[#d1d5db]/50">
<div className="flex gap-8">
<button className="pb-3 text-sm font-medium text-[#0a803f] border-b-2 border-[#0a803f]">
                All
              </button>
<button className="pb-3 text-sm font-medium text-[#7c8c7c] hover:text-[#242924] transition-colors">
                New Vendors
              </button>
<button className="pb-3 text-sm font-medium text-[#7c8c7c] hover:text-[#242924] transition-colors">
                Existing Vendors
              </button>
</div>
</div>

<div className="overflow-x-auto w-full">
<div className="min-w-[1000px] text-sm">

<div className="grid grid-cols-12 gap-4 px-8 py-4 border-b border-[#d1d5db]/50 text-xs font-semibold text-[#7c8c7c] uppercase tracking-wider">
<div className="col-span-3">Vendor</div>
<div className="col-span-2">Event</div>
<div className="col-span-2">Category</div>
<div className="col-span-1">Type</div>
<div className="col-span-3">Event Dates</div>
<div className="col-span-1 text-right">Actions</div>
</div>


<div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#d1d5db]/30 items-center hover:bg-[#eff6ff]/30 transition-colors">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="Eli" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=12"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          Dj's Kitchen
                        </span>
<span className="px-1.5 py-0.5 rounded bg-[#b5d4b5]/30 text-[#0a803f] text-[10px] font-semibold uppercase tracking-wide">
                          New
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">
                        Eli Johnson
                      </div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">Mt Berry Market</div>
<div className="col-span-2 text-[#404f4c]">Food Truck</div>
<div className="col-span-1 text-[#404f4c]">Stall</div>
<div className="col-span-3 text-[#404f4c] font-normal">
                  09 May 2026
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-12 hover:bg-[#eff6ff]/30 transition-colors border-[#d1d5db]/30 border-b pt-5 pr-8 pb-5 pl-8 gap-x-4 gap-y-4 items-center">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="Sarah" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=23"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          Artisan &amp; Flame
                        </span>
<span className="px-1.5 py-0.5 rounded bg-[#b5d4b5]/30 text-[#0a803f] text-[10px] font-semibold uppercase tracking-wide">
                          New
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">
                        Sarah Smith
                      </div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">Mt Berry Market</div>
<div className="col-span-2 text-[#404f4c] flex items-center gap-1.5">
                  Candles
                  <svg className="text-[#e6b405]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<div className="col-span-1 text-[#404f4c]">
                  Stall &amp; Extras
                </div>
<div className="col-span-3 text-[#404f4c] font-normal">
                  07 Mar 2026, 08 Mar 2026
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#d1d5db]/30 items-center hover:bg-[#eff6ff]/30 transition-colors">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="Mario" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=33"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          Flavours of Asia
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">
                        Mario Rossi
                      </div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">
                  Blackstone Festival
                </div>
<div className="col-span-2 text-[#404f4c]">Food Truck</div>
<div className="col-span-1 text-[#404f4c]">Stall</div>
<div className="col-span-3 text-[#404f4c] font-normal leading-tight">
                  11 Dec 2026, 12 Dec 2026, 13 Dec 2026, + 2 more
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#d1d5db]/30 items-center hover:bg-[#eff6ff]/30 transition-colors">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="John" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=44"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          CHEF Dee
                        </span>
<span className="px-1.5 py-0.5 rounded bg-[#b5d4b5]/30 text-[#0a803f] text-[10px] font-semibold uppercase tracking-wide">
                          New
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">John Chef</div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">Mt Berry Market</div>
<div className="col-span-2 text-[#404f4c]">
                  Skincare &amp; Beauty
                </div>
<div className="col-span-1 text-[#404f4c]">Stall</div>
<div className="col-span-3 text-[#404f4c] font-normal">
                  07 Mar 2026
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="px-8 py-5 flex items-center justify-between border-t border-[#d1d5db]/50 bg-[#eff6ff]/20">
<div className="text-sm text-[#7c8c7c]">
              Showing
              <span className="font-medium text-[#242924]">1</span>
              to
              <span className="font-medium text-[#242924]">4</span>
              of
              <span className="font-medium text-[#242924]">42</span>
              results
            </div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-[#d1d5db] rounded-lg text-sm font-medium text-[#7c8c7c] hover:bg-[#eff6ff] hover:text-[#404f4c] transition-colors bg-[#ffffff]">
                Previous
              </button>
<button className="px-4 py-2 border border-[#d1d5db] rounded-lg text-sm font-medium text-[#7c8c7c] hover:bg-[#eff6ff] hover:text-[#404f4c] transition-colors bg-[#ffffff]">
                Next
              </button>
</div>
</div>
</div>

<div className="hidden lg:flex animate-fade-in-up z-20 bg-[#ffffff] border-[#d1d5db]/50 border rounded-xl pt-3 pr-5 pb-3 pl-3 absolute top-48 left-[-5%] shadow-[0_8px_30px_rgb(0,0,0,0.08)] gap-x-4 gap-y-4 items-center" style={{display: 'flex'}}>
<div className="flex flex-col">
<span className="text-[10px] text-[#7c8c7c] font-medium">
              Join the community
            </span>
<div className="flex items-center gap-3 mt-1">
<div className="flex -space-x-2">
<img alt="Vendor 1" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Vendor 2" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-[#eff6ff] flex items-center justify-center text-[8px] font-bold text-[#404f4c] ring-1 ring-white">
                  +20k
                </div>
</div>
<div className="w-px h-4 bg-[#d1d5db]"></div>
<div className="flex text-xs font-semibold text-[#242924] gap-x-1.5 gap-y-1.5 items-center">
                Reach 20k+ vendors looking for markets
              </div>
</div>
</div>
</div>

<div className="hidden transition-transform hover:-translate-y-1 duration-300 group lg:block z-20 bg-zinc-800 w-[260px] border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 absolute bottom-24 left-[-8%] shadow-2xl">

<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-sm font-semibold text-[#ffffff] tracking-tight">Permanent vs Casual</h3>
<p className="text-[11px] font-medium text-[#ffffff]/40 mt-0.5">Reporting</p>
</div>
<div className="flex gap-3 pt-1">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#4c954c] shadow-[0_0_8px_rgba(76,149,76,0.5)]"></span>
<span className="text-[9px] text-[#ffffff]/50 font-medium tracking-wide uppercase">
                  Perm
                </span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#e6b405] shadow-[0_0_8px_rgba(230,180,5,0.5)]"></span>
<span className="text-[9px] text-[#ffffff]/50 font-medium tracking-wide uppercase">
                  Cas
                </span>
</div>
</div>
</div>

<div className="relative h-28 mb-6 flex items-center justify-center w-full">
<canvas className="z-10" height="210" id="chart-aura-emk9p2fev4kpgm6tg" style={{display: 'block', boxSizing: 'border-box', height: '105px', width: '213px'}} width="426"></canvas>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-xl font-bold text-[#ffffff] tracking-tight">
                64%
              </span>
<span className="text-[9px] text-[#ffffff]/40 font-medium uppercase tracking-widest mt-0.5">
                Perm
              </span>
</div>

</div>


</div>

<div className="hidden transition-transform hover:-translate-y-1 duration-300 lg:block bg-[#F1F5F9] w-[260px] z-20 rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-[-40px] right-[28%] shadow-xl" style={{display: 'block'}}>
<div className="flex justify-between items-start mb-5">
<div className="flex flex-col items-start">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#00632d]/10 backdrop-blur-md text-[10px] font-bold text-[#00632d] uppercase tracking-wider mb-2 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#00632d] animate-pulse"></span>
                Pending Invoice
              </div>
<div className="text-xl font-semibold text-[#002e15] leading-none tracking-tight">
                Mac's Pies
              </div>
</div>
<div className="w-10 h-10 rounded-full bg-white border border-[#00632d]/10 flex items-center justify-center text-[#00632d] shadow-sm">
<svg className="lucide lucide-receipt-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1Z"></path>
<path d="M14 8H8"></path>
<path d="M16 12H8"></path>
<path d="M13 16H8"></path>
</svg>
</div>
</div>
<div className="space-y-3 mb-5">
<div className="flex justify-between items-center pb-2 border-b border-[#002e15]/10">
<div className="text-[11px] font-medium text-[#002e15]/60" style={{}}>
                Event
              </div>
<div className="text-xs font-medium text-[#002e15]">
                Mt Berry Market
              </div>
</div>
<div className="flex justify-between items-center pb-2 border-b border-[#002e15]/10">
<div className="text-[11px] font-medium text-[#002e15]/60">
                Stall Size
              </div>
<div className="text-xs font-medium text-[#002e15]">
                3 x 3 Stall
              </div>
</div>
<div className="flex justify-between items-center">
<div className="text-[11px] font-medium text-[#002e15]/60">
                Category
              </div>
<div className="text-xs font-medium text-[#002e15]">Food Truck</div>
</div>
</div>
<button className="w-full bg-[#002e15] hover:bg-[#00632d] text-[#ffffff] text-xs font-medium py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 group">
            Send Invoice
            <svg className="lucide lucide-send transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</div>

<div className="hidden lg:block z-30 transition-all hover:-translate-y-1 duration-500 group text-white bg-[#007a38] w-[260px] border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-[120px] right-[10%] shadow-2xl" style={{display: 'block'}}>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
<div className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
<svg className="lucide lucide-shield-check text-white relative z-10" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<div className="leading-tight text-sm font-semibold text-white tracking-tight">
                Compliance
              </div>
<div className="text-[10px] font-medium text-white/70 mt-0.5" style={{}}>
                Vendor Documents
              </div>
</div>
</div>
<div className="mb-5">
<p className="text-[11px] leading-relaxed font-medium text-white/80" style={{}}>
              Collect, verify, and store essential documentation securely.
            </p>
</div>
<div className="space-y-2">
<div className="group/item flex items-center justify-between p-2.5 rounded-lg bg-black/20 border border-white/5 hover:bg-black/30 hover:border-white/20 transition-all cursor-default relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-check text-white/60 group-hover/item:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="m9 15 2 2 4-4"></path>
</svg>
<div className="flex flex-col">
<span className="text-[10px] leading-tight text-sm font-bold text-white/90">
                    Public Liability
                  </span>
<span className="text-[9px] text-white/50 font-medium mt-0.5 group-hover/item:text-white/70 transition-colors">
                    Expires 2027
                  </span>
</div>
</div>
<div className="px-1.5 py-0.5 rounded bg-white/20 border border-white/20 text-[9px] font-semibold text-white shadow-sm flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                Valid
              </div>
</div>
<div className="group/item flex flex-col gap-2 p-2.5 rounded-lg bg-black/20 border border-[#facc15]/30 hover:bg-[#facc15]/10 transition-colors cursor-default">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<svg className="lucide lucide-alert-circle text-[#facc15] group-hover/item:text-[#fde047] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<div className="flex flex-col">
<span className="text-[10px] leading-tight text-sm font-semibold text-white/90">
                      Food Hygiene
                    </span>
<span className="text-[9px] text-[#facc15]/80 font-medium mt-0.5">
                      Expired Dec 2023
                    </span>
</div>
</div>
<div className="px-1.5 py-0.5 rounded bg-[#facc15]/20 border border-[#facc15]/30 text-[9px] font-semibold text-[#facc15] shadow-sm">
                  Expired
                </div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-1.5 rounded bg-[#facc15]/10 hover:bg-[#facc15]/20 hover:shadow-lg border border-[#facc15]/20 text-white text-[10px] font-medium transition-all group/btn active:scale-95 duration-200">
<span className="">Update Document</span>
<svg className="lucide lucide-upload opacity-70 group-hover/btn:opacity-100 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</button>
</div>
</div>
</div>

<div className="hidden xl:block z-20 transition-transform hover:-translate-y-1 duration-300 overflow-hidden text-white bg-zinc-800 w-[260px] h-[240px] border-white/5 border rounded-2xl absolute top-[-60px] right-[-5%] shadow-2xl" style={{display: 'block'}}>

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-0.5">
                Drag &amp; Drop
              </span>
<span className="text-sm font-semibold text-white tracking-tight">
                Market Map Builder
              </span>
</div>
<div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
<svg className="text-white/80" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>
</div>
</div>

<div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[210px]">
<div className="grid grid-cols-4 gap-2">

<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  A1
                </span>
</div>
<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  A2
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<svg className="text-white/20 group-hover:text-white/40" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path className="" d="M5 12h14"></path>
</svg>
</div>
<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  A4
                </span>
</div>

<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<svg className="text-white/20 group-hover:text-white/40" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</div>
<div className="col-span-2 h-9 rounded-md bg-[#eab308]/20 border border-[#eab308]/30 flex items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
<span className="text-[9px] font-medium text-[#eab308] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#eab308] animate-pulse"></span>
                  Premium Zone
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<svg className="text-white/20 group-hover:text-white/40" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</div>

<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  C1
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<span className="text-[9px] text-white/20 group-hover:text-white/40">
                  C2
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<span className="text-[9px] text-white/20 group-hover:text-white/40">
                  C3
                </span>
</div>
<div className="h-9 rounded-md bg-[#f97316]/20 border border-[#f97316]/30 flex items-center justify-center group cursor-pointer hover:bg-[#f97316]/30 transition-all">
<svg className="text-[#f97316]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
</div>
</div>

<div className="-translate-x-1/2 flex bg-[#0f172a]/95 z-20 border-white/10 border rounded-full ring-white/5 ring-1 pt-1 pr-1 pb-1 pl-1 absolute bottom-5 left-1/2 shadow-xl backdrop-blur-md gap-x-1 gap-y-1 items-center">
<button className="p-1.5 rounded-full bg-white/10 text-white shadow-sm transition-colors group">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</button>
<div className="w-px h-3 bg-white/10 mx-0.5"></div>
<button className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors group relative">
<svg className="group-hover:scale-105 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</button>
<button className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors group">
<svg className="group-hover:scale-105 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line className="" x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
<button className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors group">
<svg className="group-hover:scale-105 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.09a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.09a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>
</div>
</div>
</section><section className="min-h-screen flex flex-col overflow-hidden bg-white pt-28 pr-4 pb-20 pl-4 relative items-center justify-start">

<div className="md:h-[800px] w-full h-[700px] max-w-[1200px] mt-4 mr-auto ml-auto relative perspective-1000">

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-6xl bg-[#ffffff] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#d1d5db] z-10 overflow-hidden font-sans">

<div className="p-8 pb-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div className="">
<h1 className="text-2xl font-medium text-[#1f3c24] tracking-tight">
                  Stallholder Applications
                </h1>
<p className="text-sm text-[#7c8c7c] mt-1">
                  Review and manage pending stall applications.
                </p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="text-[#7c8c7c]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
</div>
<input className="block w-64 pl-10 pr-3 py-2 border border-[#d1d5db] rounded-lg leading-5 bg-[#ffffff] placeholder-[#7c8c7c] text-[#242924] focus:outline-none focus:ring-1 focus:ring-[#d1d5db] focus:border-[#d1d5db] sm:text-sm transition duration-150 ease-in-out" placeholder="Search..." type="text"/>
</div>
<button className="inline-flex items-center px-4 py-2 border border-[#d1d5db] text-sm font-normal rounded-lg text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff] focus:outline-none transition-colors">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
                  Export CSV
                </button>
<button className="inline-flex items-center p-2.5 border border-[#d1d5db] text-sm font-normal rounded-lg text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff] focus:outline-none transition-colors">
<svg className="text-[#7c8c7c]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="4" y1="21" y2="14"></line>
<line x1="4" x2="4" y1="10" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="12"></line>
<line x1="12" x2="12" y1="8" y2="3"></line>
<line x1="20" x2="20" y1="21" y2="16"></line>
<line x1="20" x2="20" y1="12" y2="3"></line>
<line x1="1" x2="7" y1="14" y2="14"></line>
<line x1="9" x2="15" y1="8" y2="8"></line>
<line x1="17" x2="23" y1="16" y2="16"></line>
</svg>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
                Event
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line className="" x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                Event Date
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
<line x1="7" x2="7.01" y1="7" y2="7"></line>
</svg>
                Category
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="inline-flex items-center px-3 py-1.5 border border-[#d1d5db] rounded-md text-sm font-normal text-[#404f4c] bg-[#ffffff] hover:bg-[#eff6ff]">
<svg className="mr-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
                Shortlisted
                <svg className="ml-2 text-[#7c8c7c]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<button className="ml-2 inline-flex items-center text-sm text-[#7c8c7c] hover:text-[#242924] transition-colors">
<svg className="mr-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
                Clear filters
              </button>
</div>
</div>

<div className="px-8 border-b border-[#d1d5db]/50">
<div className="flex gap-8">
<button className="pb-3 text-sm font-medium text-[#0a803f] border-b-2 border-[#0a803f]">
                All
              </button>
<button className="pb-3 text-sm font-medium text-[#7c8c7c] hover:text-[#242924] transition-colors">
                New Vendors
              </button>
<button className="pb-3 text-sm font-medium text-[#7c8c7c] hover:text-[#242924] transition-colors">
                Existing Vendors
              </button>
</div>
</div>

<div className="overflow-x-auto w-full">
<div className="min-w-[1000px] text-sm">

<div className="grid grid-cols-12 gap-4 px-8 py-4 border-b border-[#d1d5db]/50 text-xs font-semibold text-[#7c8c7c] uppercase tracking-wider">
<div className="col-span-3">Vendor</div>
<div className="col-span-2">Event</div>
<div className="col-span-2">Category</div>
<div className="col-span-1">Type</div>
<div className="col-span-3">Event Dates</div>
<div className="col-span-1 text-right">Actions</div>
</div>


<div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#d1d5db]/30 items-center hover:bg-[#eff6ff]/30 transition-colors">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="Eli" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=12"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          Dj's Kitchen
                        </span>
<span className="px-1.5 py-0.5 rounded bg-[#b5d4b5]/30 text-[#0a803f] text-[10px] font-semibold uppercase tracking-wide">
                          New
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">
                        Eli Johnson
                      </div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">Mt Berry Market</div>
<div className="col-span-2 text-[#404f4c]">Food Truck</div>
<div className="col-span-1 text-[#404f4c]">Stall</div>
<div className="col-span-3 text-[#404f4c] font-normal">
                  09 May 2026
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-12 hover:bg-[#eff6ff]/30 transition-colors border-[#d1d5db]/30 border-b pt-5 pr-8 pb-5 pl-8 gap-x-4 gap-y-4 items-center">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="Sarah" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=23"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          Artisan &amp; Flame
                        </span>
<span className="px-1.5 py-0.5 rounded bg-[#b5d4b5]/30 text-[#0a803f] text-[10px] font-semibold uppercase tracking-wide">
                          New
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">
                        Sarah Smith
                      </div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">Mt Berry Market</div>
<div className="col-span-2 text-[#404f4c] flex items-center gap-1.5">
                  Candles
                  <svg className="text-[#e6b405]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<div className="col-span-1 text-[#404f4c]">
                  Stall &amp; Extras
                </div>
<div className="col-span-3 text-[#404f4c] font-normal">
                  07 Mar 2026, 08 Mar 2026
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#d1d5db]/30 items-center hover:bg-[#eff6ff]/30 transition-colors">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="Mario" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=33"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          Flavours of Asia
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">
                        Mario Rossi
                      </div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">
                  Blackstone Festival
                </div>
<div className="col-span-2 text-[#404f4c]">Food Truck</div>
<div className="col-span-1 text-[#404f4c]">Stall</div>
<div className="col-span-3 text-[#404f4c] font-normal leading-tight">
                  11 Dec 2026, 12 Dec 2026, 13 Dec 2026, + 2 more
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#d1d5db]/30 items-center hover:bg-[#eff6ff]/30 transition-colors">
<div className="col-span-3">
<div className="flex items-start gap-4">
<img alt="John" className="w-10 h-10 rounded-full object-cover border border-[#d1d5db]" src="https://i.pravatar.cc/150?u=44"/>
<div className="">
<div className="flex items-center gap-2">
<span className="font-medium text-[#242924]">
                          CHEF Dee
                        </span>
<span className="px-1.5 py-0.5 rounded bg-[#b5d4b5]/30 text-[#0a803f] text-[10px] font-semibold uppercase tracking-wide">
                          New
                        </span>
</div>
<div className="text-[#7c8c7c] text-xs mt-1">John Chef</div>
</div>
</div>
</div>
<div className="col-span-2 text-[#404f4c]">Mt Berry Market</div>
<div className="col-span-2 text-[#404f4c]">
                  Skincare &amp; Beauty
                </div>
<div className="col-span-1 text-[#404f4c]">Stall</div>
<div className="col-span-3 text-[#404f4c] font-normal">
                  07 Mar 2026
                </div>
<div className="col-span-1 flex items-center justify-end gap-3 text-[#7c8c7c]">
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</button>
<button className="hover:text-[#404f4c] transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="px-8 py-5 flex items-center justify-between border-t border-[#d1d5db]/50 bg-[#eff6ff]/20">
<div className="text-sm text-[#7c8c7c]">
              Showing
              <span className="font-medium text-[#242924]">1</span>
              to
              <span className="font-medium text-[#242924]">4</span>
              of
              <span className="font-medium text-[#242924]">42</span>
              results
            </div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-[#d1d5db] rounded-lg text-sm font-medium text-[#7c8c7c] hover:bg-[#eff6ff] hover:text-[#404f4c] transition-colors bg-[#ffffff]">
                Previous
              </button>
<button className="px-4 py-2 border border-[#d1d5db] rounded-lg text-sm font-medium text-[#7c8c7c] hover:bg-[#eff6ff] hover:text-[#404f4c] transition-colors bg-[#ffffff]">
                Next
              </button>
</div>
</div>
</div>

<div className="hidden lg:flex animate-fade-in-up z-20 bg-[#ffffff] border-[#d1d5db]/50 border rounded-xl pt-3 pr-5 pb-3 pl-3 absolute top-48 left-[-5%] shadow-[0_8px_30px_rgb(0,0,0,0.08)] gap-x-4 gap-y-4 items-center" style={{display: 'flex'}}>
<div className="flex flex-col">
<span className="text-[10px] text-[#7c8c7c] font-medium">
              Join the community
            </span>
<div className="flex items-center gap-3 mt-1">
<div className="flex -space-x-2">
<img alt="Vendor 1" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Vendor 2" className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-[#eff6ff] flex items-center justify-center text-[8px] font-bold text-[#404f4c] ring-1 ring-white">
                  +20k
                </div>
</div>
<div className="w-px h-4 bg-[#d1d5db]"></div>
<div className="flex text-xs font-semibold text-[#242924] gap-x-1.5 gap-y-1.5 items-center">
                Reach 20k+ vendors looking for markets
              </div>
</div>
</div>
</div>

</div>

<div className="flex flex-wrap gap-6 z-20 w-full max-w-[1200px] mt-8 mr-auto ml-auto relative gap-x-6 gap-y-6 justify-center">

<div className="transition-transform hover:-translate-y-1 duration-300 z-20 flex flex-col bg-[#F1F5F9] w-[260px] h-[240px] rounded-2xl p-5 relative" style={{display: 'block'}}>
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col items-start">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#00632d]/10 backdrop-blur-md text-[10px] font-semibold text-[#00632d] uppercase tracking-wider mb-2 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#00632d] animate-pulse"></span>
        Pending Invoice
      </div>
<div className="leading-none text-xl font-semibold text-[#002e15] tracking-tight">The Tasty Jar</div>
</div>
<div className="w-10 h-10 rounded-full bg-white border border-[#00632d]/10 flex items-center justify-center text-[#00632d] shadow-sm">
<svg className="lucide lucide-receipt-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1Z"></path>
<path d="M14 8H8"></path>
<path d="M16 12H8"></path>
<path d="M13 16H8"></path>
</svg>
</div>
</div>
<div className="space-y-3 mb-auto">
<div className="flex justify-between items-center pb-2 border-b border-[#002e15]/10">
<div className="text-[11px] font-medium text-[#002e15]/60">
        Event
      </div>
<div className="text-xs font-medium text-[#002e15]">
        Mt Berry Market
      </div>
</div>
<div className="flex justify-between items-center pb-2 border-b border-[#002e15]/10">
<div className="text-[11px] font-medium text-[#002e15]/60">
        Stall Size
      </div>
<div className="text-xs font-medium text-[#002e15]">
        3 x 3 Stall
      </div>
</div>
<div className="flex justify-between items-center">
<div className="text-[11px] font-medium text-[#002e15]/60">
        Category
      </div>
<div className="text-xs font-medium text-[#002e15]">Food Truck</div>
</div>
</div>
<button className="w-full bg-[#002e15] hover:bg-[#00632d] text-[#ffffff] text-xs font-medium py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 group mt-4">
    Send Invoice
    <svg className="lucide lucide-send transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</div>

<div className="transition-all hover:-translate-y-1 duration-500 group block text-white bg-[#007a38] w-[260px] border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative" style={{display: 'block'}}>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
<div className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
<svg className="lucide lucide-shield-check text-white relative z-10" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<div className="leading-tight text-sm font-semibold text-white tracking-tight">Vendor Documents</div>
<div className="text-[10px] font-medium text-white/70 mt-0.5">Compliance</div>
</div>
</div>
<div className="mb-5">
<p className="text-[11px] leading-relaxed font-medium text-white/80" style={{}}>
              Collect, verify, and store essential documentation securely.
            </p>
</div>
<div className="space-y-2">
<div className="group/item flex items-center justify-between p-2.5 rounded-lg bg-black/20 border border-white/5 hover:bg-black/30 hover:border-white/20 transition-all cursor-default relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-check text-white/60 group-hover/item:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="m9 15 2 2 4-4"></path>
</svg>
<div className="flex flex-col">
<span className="text-[10px] leading-tight text-sm font-bold text-white/90">
                    Public Liability
                  </span>
<span className="text-[9px] text-white/50 font-medium mt-0.5 group-hover/item:text-white/70 transition-colors">
                    Expires 2027
                  </span>
</div>
</div>
<div className="px-1.5 py-0.5 rounded bg-white/20 border border-white/20 text-[9px] font-semibold text-white shadow-sm flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                Valid
              </div>
</div>
<div className="group/item flex flex-col gap-2 p-2.5 rounded-lg bg-black/20 border border-[#facc15]/30 hover:bg-[#facc15]/10 transition-colors cursor-default">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<svg className="lucide lucide-alert-circle text-[#facc15] group-hover/item:text-[#fde047] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<div className="flex flex-col">
<span className="text-[10px] leading-tight text-sm font-semibold text-white/90">
                      Food Hygiene
                    </span>
<span className="text-[9px] text-[#facc15]/80 font-medium mt-0.5">
                      Expired Dec 2023
                    </span>
</div>
</div>
<div className="px-1.5 py-0.5 rounded bg-[#facc15]/20 border border-[#facc15]/30 text-[9px] font-semibold text-[#facc15] shadow-sm">
                  Expired
                </div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-1.5 rounded bg-[#facc15]/10 hover:bg-[#facc15]/20 hover:shadow-lg border border-[#facc15]/20 text-white text-[10px] font-medium transition-all group/btn active:scale-95 duration-200">
<span className="">Update Document</span>
<svg className="lucide lucide-upload opacity-70 group-hover/btn:opacity-100 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</button>
</div>
</div>
</div>

<div className="transition-transform hover:-translate-y-1 duration-300 overflow-hidden block text-white bg-zinc-800 w-[260px] h-[240px] border-white/5 border rounded-2xl relative" style={{display: 'block'}}>

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0 shadow-none" style={{backgroundImage: 'linear-gradient(rgb(255, 255, 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 255, 255) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
<div className="flex flex-col">
<span className="text-[10px] uppercase font-bold text-white/60 tracking-wider mb-0.5">
                Drag &amp; Drop
              </span>
<span className="text-sm font-semibold text-white tracking-tight">Event  Map  Builder</span>
</div>
<div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
<svg className="text-white/80" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>
</div>
</div>

<div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[210px]">
<div className="grid grid-cols-4 gap-2">

<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  A1
                </span>
</div>
<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  A2
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<svg className="text-white/20 group-hover:text-white/40" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path className="" d="M5 12h14"></path>
</svg>
</div>
<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  A4
                </span>
</div>

<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<svg className="text-white/20 group-hover:text-white/40" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</div>
<div className="col-span-2 h-9 rounded-md bg-[#eab308]/20 border border-[#eab308]/30 flex items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
<span className="text-[9px] font-medium text-[#eab308] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#eab308] animate-pulse"></span>
                  Premium Zone
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<svg className="text-white/20 group-hover:text-white/40" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</div>

<div className="h-9 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center group cursor-pointer hover:bg-[#3b82f6]/30 transition-all">
<span className="text-[9px] font-medium text-[#bfdbfe]">
                  C1
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<span className="text-[9px] text-white/20 group-hover:text-white/40">
                  C2
                </span>
</div>
<div className="h-9 rounded-md bg-white/5 border border-white/10 border-dashed flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
<span className="text-[9px] text-white/20 group-hover:text-white/40">
                  C3
                </span>
</div>
<div className="h-9 rounded-md bg-[#f97316]/20 border border-[#f97316]/30 flex items-center justify-center group cursor-pointer hover:bg-[#f97316]/30 transition-all">
<svg className="text-[#f97316]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
</div>
</div>

<div className="-translate-x-1/2 flex bg-[#0f172a]/95 z-20 border-white/10 border rounded-full ring-white/5 ring-1 pt-1 pr-1 pb-1 pl-1 absolute bottom-5 left-1/2 shadow-xl backdrop-blur-md gap-x-1 gap-y-1 items-center">
<button className="p-1.5 rounded-full bg-white/10 text-white shadow-sm transition-colors group">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</button>
<div className="w-px h-3 bg-white/10 mx-0.5"></div>
<button className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors group relative">
<svg className="group-hover:scale-105 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</button>
<button className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors group">
<svg className="group-hover:scale-105 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line className="" x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
<button className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors group">
<svg className="group-hover:scale-105 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.09a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.09a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>
</div>

<div className="transition-transform hover:-translate-y-1 duration-300 group block z-20 flex flex-col bg-zinc-800 w-[260px] h-[240px] border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{}}>

<div className="flex justify-between items-start w-full">
<div className="">
<h3 className="text-sm font-semibold text-white tracking-tight">Permanent vs Casual Stalls</h3>
<p className="text-[11px] font-medium text-white/40 mt-0.5">Reporting</p>
</div>
</div>

<div className="flex-1 flex items-center justify-center w-full relative">
<div className="relative w-32 h-32">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">

<circle className="transition-all duration-1000 ease-out" cx="18" cy="18" fill="none" r="15.9155" stroke="#e6b405" stroke-dasharray="36 64" stroke-dashoffset="-64" strokeLinecap="butt" strokeWidth="3"></circle>

<circle className="transition-all duration-1000 ease-out" cx="18" cy="18" fill="none" r="15.9155" stroke="#4c954c" stroke-dasharray="64 36" stroke-dashoffset="0" strokeLinecap="butt" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
<span className="text-2xl font-semibold text-white tracking-tight">64%</span>
<span className="text-[9px] text-white/40 font-medium uppercase tracking-widest mt-0.5">Perm</span>
</div>
</div>
</div>

<div className="flex justify-start gap-3 w-full mt-auto">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#4c954c] shadow-[0_0_8px_rgba(76,149,76,0.5)]"></span>
<span className="text-[9px] font-medium text-white/50 uppercase tracking-wide">Perm</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#e6b405] shadow-[0_0_8px_rgba(230,180,5,0.5)]"></span>
<span className="text-[9px] font-medium text-white/50 uppercase tracking-wide">Cas</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F3F4F6] pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 max-w-2xl">
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="lg:col-span-2 overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col bg-white border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="overflow-hidden bg-neutral-50 h-48 border-neutral-100 border rounded-xl mt-8 relative">
<div className="absolute top-4 left-4 right-4 space-y-3">
<div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-neutral-100 shadow-sm transition-all hover:scale-[1.01]">
<img alt="" className="w-10 h-10 rounded-full object-cover border border-neutral-100" src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-semibold text-neutral-900" style={{}}>
                      Rustic Breads
                    </div>
<div className="flex items-center gap-2">
<div className="text-[11px] text-neutral-500" style={{}}>
                        Bakery • 3mx3m Stall
                      </div>
<div className="text-[10px] text-amber-600 font-medium flex items-center gap-1">
<svg className="lucide lucide-zap" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
                        Power requested
                      </div>
</div>
</div>
<div className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border-emerald-100 border rounded-md pt-1 pr-2 pb-1 pl-2" style={{}}>
                    Accept &amp; Send Invoice
                  </div>
</div>
<div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-neutral-100 shadow-sm transition-all hover:scale-[1.01]">
<img alt="" className="w-10 h-10 rounded-full object-cover border border-neutral-100" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-semibold text-neutral-900">
                      Luna Ceramics
                    </div>
<div className="text-[11px] text-neutral-500" style={{}}>
                      Arts &amp; Crafts • Category at Capacity
                    </div>
</div>
<div className="text-[10px] font-semibold text-amber-600 bg-amber-50 border-amber-100 border rounded-md pt-1 pr-2 pb-1 pl-2" style={{}}>
                    Add To Waitlist
                  </div>
</div>
<div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-neutral-100 shadow-sm opacity-60">
<img alt="" className="w-10 h-10 rounded-full object-cover border border-neutral-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-semibold text-neutral-900">
                      Sunday Florist
                    </div>
<div className="text-[11px] text-neutral-500">
                      Plants • 3x3m Stall
                    </div>
</div>
<div className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-500 text-[10px] font-semibold border border-neutral-200">
                    Waitlist
                  </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1 overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col bg-white border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="mt-8 flex-1 rounded-xl bg-neutral-50 border border-neutral-100 relative overflow-hidden group-hover:bg-indigo-50/20 transition-colors min-h-[180px]">

<div className="[background-size:16px_16px] opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-4 right-4 flex items-center gap-1.5 select-none">
<svg className="text-neutral-900" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="text-[10px] font-bold text-neutral-900 uppercase tracking-widest">
                    Secure
                  </span>
</div>
</div>

<div className="absolute inset-x-5 top-5 bg-white border border-neutral-200 rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md z-10">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">
                      JD
                    </div>
<div className="">
<div className="text-xs font-semibold text-neutral-900" style={{}}>
                        Jane Smith
                      </div>
<div className="text-[10px] text-neutral-500">INV-24-001</div>
</div>
</div>
<div className="flex items-center gap-1 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
<div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[9px] font-medium text-emerald-700 uppercase tracking-wide">
                      Paid
                    </span>
</div>
</div>
<div className="space-y-1.5 py-2.5 border-t border-b border-dashed border-neutral-100 mb-2.5">
<div className="flex justify-between items-center text-[11px]">
<span className="text-neutral-500">Stall Fee (3x3m)</span>
<span className="font-medium text-neutral-900">$85.00</span>
</div>
<div className="flex justify-between items-center text-[11px]">
<span className="text-neutral-500">Power Access</span>
<span className="font-medium text-neutral-900">$15.00</span>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex flex-col">
<span className="text-[9px] text-neutral-400 font-medium uppercase">
                      Total
                    </span>
<span className="text-sm font-bold text-neutral-900">
                      $100.00
                    </span>
</div>
<button className="text-neutral-400 hover:text-indigo-600 transition-colors p-1 rounded-md hover:bg-indigo-50">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>

<div className="absolute inset-x-9 -bottom-2 h-6 bg-white border border-neutral-200 rounded-t-lg shadow-sm opacity-60 z-0"></div>
</div>
</div>

<div className="lg:col-span-1 overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col bg-white border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="mt-8 flex-1 rounded-xl bg-neutral-50 border border-neutral-100 relative overflow-hidden group-hover:bg-violet-50/20 transition-colors min-h-[200px]">

<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="flex flex-col gap-3 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 gap-x-3 gap-y-3">

<div className="flex gap-3">
<div className="w-16 h-16 rounded-md border-2 border-dashed border-neutral-200 bg-white/50 flex items-center justify-center">
<span className="text-xs font-medium text-neutral-400">
                      A01
                    </span>
</div>
<div className="w-16 h-16 rounded-md border border-neutral-200 bg-white flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
<div className="w-full h-1 bg-emerald-500 absolute top-0"></div>
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold mb-1">
                      JD
                    </div>
<span className="text-[9px] font-medium text-neutral-600">
                      J. Doe
                    </span>
</div>
<div className="w-16 h-16 rounded-md border border-violet-200 bg-violet-50/30 flex items-center justify-center relative">
<span className="text-xs font-medium text-violet-300">A03</span>
</div>
</div>

<div className="flex gap-3 mt-auto">
<div className="w-16 h-16 rounded-md border border-neutral-200 bg-white flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
<div className="w-full h-1 bg-indigo-500 absolute top-0"></div>
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold mb-1">
                      BB
                    </div>
<span className="text-[9px] font-medium text-neutral-600">
                      Bagels
                    </span>
</div>
<div className="w-16 h-16 rounded-md border-2 border-dashed border-neutral-200 bg-white/50 flex items-center justify-center">
<span className="text-xs font-medium text-neutral-400">
                      B02
                    </span>
</div>
</div>
</div>

<div className="absolute top-1/3 right-10 bg-white rounded-lg shadow-xl border border-violet-200 p-2.5 w-32 rotate-6 cursor-grabbing z-20 group-hover:scale-105 transition-transform duration-300">
<div className="flex items-center gap-2 mb-1.5">
<div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[10px] font-bold">
                    MP
                  </div>
<div className="flex-1 min-w-0">
<div className="text-[10px] font-bold text-neutral-900 truncate">
                      Mac's Pies
                    </div>
<div className="text-[9px] text-neutral-500">Food Truck</div>
</div>
</div>
<div className="flex items-center gap-1">
<div className="h-1 flex-1 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-violet-500"></div>
</div>
<span className="text-[8px] font-medium text-neutral-400">
                    3x3m
                  </span>
</div>

<div className="absolute -bottom-4 -right-3 text-neutral-900 drop-shadow-md">
<svg className="transform -rotate-12" fill="currentColor" height="20" stroke="white" strokeWidth="1" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22c-0.315 0-0.623-0.09-0.89-0.27l-0.038-0.027l-7.394-5.32c-0.627-0.45-0.916-1.226-0.728-1.964l2.454-9.61c0.187-0.738 0.77-1.32 1.508-1.508l9.61-2.454c0.738-0.188 1.514 0.1 1.964 0.728l5.32 7.394c0.47 0.655 0.368 1.564-0.232 2.094l-5.352 4.718c-0.342 0.3-0.79 0.435-1.237 0.372l-4.568-0.653l-0.653-4.568c-0.063-0.447 0.072-0.895 0.372-1.237l3.664-4.162c0.39-0.443 0.347-1.12-0.096-1.51c-0.443-0.39-1.12-0.347-1.51 0.096l-3.664 4.162c-0.655 0.744-0.95 1.72-0.812 2.693l0.87 6.095l-6.095-0.87c-0.973-0.138-1.948 0.157-2.693 0.812L2.73 20.21l6.195 4.457c0.267 0.192 0.59 0.285 0.913 0.264l5.06-0.33l-0.33 5.06c-0.02 0.323 0.073 0.646 0.264 0.913l4.457 6.195l-3.058-2.548c-0.53-0.6-1.44-0.702-2.094-0.232l-7.394 5.32C16.89 39.91 16.582 40 16.267 40"></path>
<path d="M5.636 18.364L12 12m-6.364 0L12 18.364" fill="none" stroke="none"></path>

<path d="M3.5 3.5l5.5 14.5l3.5-5l5 4l2-2l-4.5-4.5l5.5-2.5z"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2 overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col bg-white border-neutral-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="mt-8 relative h-56 rounded-xl bg-neutral-50 border border-neutral-100 overflow-hidden group-hover:bg-sky-50/10 transition-colors">

<div className="absolute inset-0 z-30 bg-white flex flex-col font-sans">

<div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-white/50 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Vendor Profile" className="w-10 h-10 rounded-full object-cover border border-neutral-100 shadow-sm" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-neutral-900 tracking-tight">
                        Sarah Jenkins
                      </h3>
<p className="text-[11px] text-neutral-500 font-medium">
                        The Bagel Boys • Food &amp; Bev
                      </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="group flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-700 rounded-lg transition-all shadow-sm">
<svg className="lucide lucide-mail text-neutral-500 group-hover:text-neutral-900 transition-colors" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<span className="text-[11px] font-medium">Email Vendor</span>
</button>
</div>
</div>

<div className="px-6 border-b border-neutral-100 flex gap-6 bg-neutral-50/30">
<button className="py-2.5 text-[11px] font-semibold text-indigo-600 border-b-2 border-indigo-600 relative">
                    Documents
                    <span className="ml-1.5 px-1 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[9px] font-bold">
                      2
                    </span>
</button>
<button className="py-2.5 text-[11px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                    Bookings
                  </button>
<button className="py-2.5 text-[11px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                    Payments
                  </button>
<button className="py-2.5 text-[11px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                    Notes
                  </button>
</div>

<div className="flex-1 overflow-y-auto p-2 bg-neutral-50/20">
<div className="space-y-1">

<div className="flex items-center justify-between p-2.5 mx-2 rounded-lg bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
<svg className="lucide lucide-shield-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<div className="text-[11px] font-semibold text-neutral-900" style={{}}>
                            General Liability Insurance
                          </div>
<div className="text-[10px] text-neutral-500">
                            Expires 12 Oct 2025 • $20M Coverage
                          </div>
</div>
</div>
<div className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100 flex items-center gap-1">
<svg className="lucide lucide-check" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                        Verified
                      </div>
</div>

<div className="flex items-center justify-between p-2.5 mx-2 rounded-lg bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
<svg className="lucide lucide-file-warning" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M12 17h.01"></path>
<path d="M12 11v4"></path>
</svg>
</div>
<div className="">
<div className="text-[11px] font-semibold text-neutral-900">
                            Food Safety Supervisor
                          </div>
<div className="text-[10px] text-neutral-500">
                            Missing Document
                          </div>
</div>
</div>
<button className="px-2 py-1 rounded bg-white hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900 text-[10px] font-medium border border-neutral-200 transition-colors">
                        Request
                      </button>
</div>
</div>
</div>

<div className="absolute bottom-3 right-3 z-50">
<div className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-neutral-900/95 backdrop-blur-md text-white rounded-full shadow-lg border border-neutral-700/50 hover:-translate-y-0.5 transition-transform cursor-help group ring-1 ring-white/10">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<svg className="lucide lucide-trending-up text-emerald-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div className="w-px bg-white/20 h-3"></div>
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-medium text-neutral-400">
                        Lifetime Spend
                      </span>
<span className="text-[10px] font-bold text-white tracking-tight">
                        $4,250
                      </span>
</div>
</div>
</div>
</div>

<div className="absolute left-6 right-6 top-8 h-full bg-white rounded-t-xl border border-neutral-200 shadow-sm flex flex-col overflow-hidden">

<div className="h-10 border-b border-neutral-100 flex items-center px-4 gap-3 bg-white z-10">
<div className="w-4 h-4 text-neutral-400 flex-shrink-0">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<div className="text-xs text-neutral-400 flex-1 font-medium">
                    Search vendors...
                  </div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-50 border border-neutral-100 text-[10px] font-medium text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>
                    Filter
                  </div>
</div>

<div className="flex-1 p-1 bg-white">

<div className="flex items-center gap-3 p-2.5 bg-sky-50/50 rounded-lg transition-colors group/row border border-sky-100/50 mb-1">
<div className="w-3.5 h-3.5 rounded border border-sky-500 bg-sky-500 flex items-center justify-center text-white shadow-sm">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="relative">
<img alt="Vendor" className="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=60&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="text-[11px] font-semibold text-neutral-900 truncate">
                          Sarah Jenkins
                        </div>
<div className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-bold border border-emerald-100">
                          Active
                        </div>
</div>
<div className="text-[10px] text-neutral-500 truncate">
                        The Bagel Boys • Food
                      </div>
</div>
</div>

<div className="flex items-center gap-3 p-2.5 bg-sky-50/50 rounded-lg transition-colors group/row border border-sky-100/50 mb-1">
<div className="w-3.5 h-3.5 rounded border border-sky-500 bg-sky-500 flex items-center justify-center text-white shadow-sm">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="relative">
<div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600 ring-2 ring-white shadow-sm">
                        MR
                      </div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="text-[11px] font-semibold text-neutral-900 truncate">
                          Mike Rivera
                        </div>
<div className="px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[9px] font-bold border border-amber-100">
                          Pending
                        </div>
</div>
<div className="text-[10px] text-neutral-500 truncate">
                        Rivera Leather • Crafts
                      </div>
</div>
</div>

<div className="flex items-center gap-3 p-2.5 bg-sky-50/50 rounded-lg transition-colors group/row border border-sky-100/50">
<div className="w-3.5 h-3.5 rounded border border-sky-500 bg-sky-500 flex items-center justify-center text-white shadow-sm">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="relative">
<img alt="Vendor" className="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=60&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="text-[11px] font-semibold text-neutral-900 truncate">
                          Lisa Chen
                        </div>
<div className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[9px] font-bold border border-emerald-100">
                          Active
                        </div>
</div>
<div className="text-[10px] text-neutral-500 truncate">
                        Luna Ceramics • Art
                      </div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 text-white rounded-full shadow-xl shadow-neutral-900/10 py-2 pl-4 pr-2 flex items-center gap-3 border border-neutral-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer z-20 group/action">
<span className="text-xs font-medium">3 selected</span>
<div className="h-3 w-px bg-white/20"></div>
<div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full group-hover/action:bg-white/20 transition-colors">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<span className="text-[10px] font-bold uppercase tracking-wide">
                    Compose
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
