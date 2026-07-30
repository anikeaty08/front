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

          const rotateValues = [0, 1, 2, 3, 6, 12, 45, 90, 180];
          
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
    


    // Simple tab logic
    const tabs = ['info', 'history', 'bundles'];
    tabs.forEach(tab => {
      document.getElementById('tab-' + tab).addEventListener('click', () => {
        tabs.forEach(t => {
          // Tab Button Styling
          const btn = document.getElementById('tab-' + t);
          if (t === tab) {
            btn.classList.add('border-b-2', 'border-[#4E18BB]', 'text-primary');
            btn.classList.remove('text-[#5c4e79]');
          } else {
            btn.classList.remove('border-b-2', 'border-[#4E18BB]', 'text-primary');
            btn.classList.add('text-[#5c4e79]');
          }
          // Content
          const content = document.getElementById('tab-content-' + t);
          if (t === tab) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });

        // Show/hide the pending pill only for Info tab
        document.getElementById('pending-pill').style.display = (tab === 'info') ? '' : 'none';
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
      

<div className="w-full bg-white/70 pb-4">
<div className="relative rounded-2xl overflow-hidden shadow-lg mx-4 mt-4 bg-cover bg-center border border-black/75" style={{backgroundImage: `url('https://cdn.prod.website-files.com/60ed2fe216a6db695bbec34e/6817f0b1a591ade2ccadab7e_ChatGPT%20Image%20Apr%2023%2C%202025%2C%2008_25_09%20PM.png')`}}>
<div className="flex items-center justify-between px-2 pt-1">
<button className="p-2">
<svg fill="none" height="24" stroke="white" viewBox="0 0 24 24" width="24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="p-2 rounded-full bg-black/30 hover:bg-black/40 transition">
<svg fill="none" height="24" stroke="white" viewBox="0 0 24 24" width="24">
<circle cx="5" cy="12" fill="white" r="1.5"></circle>
<circle cx="12" cy="12" fill="white" r="1.5"></circle>
<circle cx="19" cy="12" fill="white" r="1.5"></circle>
</svg>
</button>
</div>
<div className="flex items-center gap-3 mt-1 pb-4 pl-4">
<img alt="NZ Police" className="w-11 h-11 object-cover rounded-xl border border-white/25" src="https://cdn.prod.website-files.com/60ed2fe216a6db695bbec34e/683680a3b02863d0320a68a2_police%20check.png" />
<div className="">
<div className="text-white font-semibold text-xl leading-tight tracking-tight">NZ Police Check</div>
<div className="text-white/80 text-sm font-light">New Zealand Police • GOV</div>
</div>
</div>
<div className="flex gap-3 pb-4 pl-4">
<span className="flex items-center rounded-full px-2 py-1 bg-white/10 backdrop-blur-[4px] text-white text-sm font-normal">
<span className="inline-block w-2 h-2 rounded-full bg-[#95ffc1] mr-1"></span> Verified
        </span>
<span className="flex items-center rounded-full px-2 py-1 bg-[#ff7a0030] text-white text-sm font-normal backdrop-blur-[4px]">
<span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#ff7a00] text-white text-xs font-bold mr-1">1</span>
          pending request
        </span>
</div>
<div className="flex gap-2 pb-4 pl-4">
<span className="flex items-center rounded-full px-2 py-0.5 bg-white/10 text-white text-xs font-normal backdrop-blur-[4px]">
<svg className="w-4 h-4 mr-1" fill="none" stroke="white" viewBox="0 0 16 16">
<rect height="10" rx="2" strokeWidth="1" width="12" x="2" y="4"></rect>
<path d="M2 7h12" strokeWidth="1"></path>
</svg>
          Issued: 21/01/2025
        </span>
<span className="flex items-center rounded-full px-2 py-0.5 bg-white/10 text-white text-xs font-normal backdrop-blur-[4px]">
<svg className="w-4 h-4 mr-1" fill="none" stroke="white" viewBox="0 0 16 16">
<rect height="10" rx="2" strokeWidth="1" width="12" x="2" y="4"></rect>
<path d="M2 7h12" strokeWidth="1"></path>
</svg>
          Expires: 21/01/2026
        </span>
</div>
</div>
</div>

<div className="flex w-full mt-0 px-4 border-b border-[#e3e1ec] bg-white/60" id="tab-bar" style={{backdropFilter: `blur(4px)`}}>
<div className="flex flex-1 flex-col items-center">
<button className="tab-btn flex items-center gap-1 font-medium text-base border-b-2 border-[#4E18BB] pb-1 text-primary transition-all duration-150" data-tab="info" id="tab-info">
<svg className="w-4 h-4" fill="none" stroke="#2D264D" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="6" strokeWidth="1.5"></circle>
<path d="M8 6.5v2.5M8 11h.01" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
        Info
      </button>
</div>
<div className="flex flex-1 flex-col items-center">
<button className="tab-btn flex items-center gap-1 font-medium text-base pb-1 text-[#5c4e79] transition-all duration-150" data-tab="history" id="tab-history">
<svg className="w-4 h-4" fill="none" stroke="#5c4e79" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="6" strokeWidth="1.5"></circle>
<path d="M8 4v4l3 2" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
        History
      </button>
</div>
<div className="flex flex-1 flex-col items-center">
<button className="tab-btn flex items-center gap-1 font-medium text-base pb-1 text-[#5c4e79] transition-all duration-150" data-tab="bundles" id="tab-bundles">
<svg className="w-4 h-4" fill="none" stroke="#5c4e79" viewBox="0 0 16 16">
<polygon fill="none" points="8,3 14,6 8,9 2,6 8,3" strokeWidth="1.5"></polygon>
<polygon fill="none" points="8,6.5 14,9.5 8,12.5 2,9.5 8,6.5" strokeWidth="1.5"></polygon>
</svg>
        Bundles
      </button>
</div>
</div>

<div className="mx-4 mt-4 mb-2" id="pending-pill">
<div className="flex items-center gap-2 text-left bg-[#f0f1f9] border-[#b1a2cf] border rounded-xl px-2 py-2">
<span className="flex items-center justify-center w-5 h-5 bg-[#ff7a00] text-white text-xs font-bold rounded-full mr-1">1</span>
<span className="text-[#2d264d] text-base font-normal">Pending request</span>
</div>
</div>

<div className="" id="tab-contents">

<div className="bg-[#f6f8ff] pt-1 pr-4 pb-4 pl-4" id="tab-content-info">
<div className="mt-2 mb-5">
<div className="text-[#2d264d] font-semibold text-base mb-2">Request Details</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span className="">Original Requesting Agency</span>
<span className="text-[#2d264d] font-medium">Seek NZ</span>
</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span>Type</span>
<span className="text-[#2d264d] font-medium">Clean Slate</span>
</div>
<div className="flex justify-between text-xs text-[#5c4e79] mb-2">
<span></span>
<span className="text-right">Section 16 of the Criminal Records (Clean Slate) Act 2004</span>
</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span>Date Requested</span>
<span className="text-[#2d264d] font-medium">20 Dec 2024 20:25</span>
</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span>Date Processed</span>
<span className="text-[#2d264d] font-medium">20 Dec 2024 21:03</span>
</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span>Agency ID</span>
<span className="text-[#2d264d] font-medium">1211336</span>
</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span>Application ID</span>
<span className="text-[#2d264d] font-medium">2056978547</span>
</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span>Category</span>
<span className="text-[#2d264d] font-medium">Standard</span>
</div>
</div>
<div className="mb-5">
<div className="text-[#2d264d] font-semibold text-base mb-2">Applicant Details</div>
<div className="flex justify-between text-sm text-[#5c4e79] mb-1">
<span>Name</span>
<span className="text-[#2d264d] font-semibold">Sam Atmoon</span>
</div>
<div className="flex justify-between text-sm text-[#5c4e79]">
<span>Date Of Birth</span>
<span className="text-[#2d264d] font-semibold">18/06/1986</span>
</div>
</div>
</div>

<div className="bg-[#f6f8ff] px-4 pb-24 hidden" id="tab-content-history">
<div className="mt-6 text-[#2d264d] font-semibold text-base mb-2">Request History</div>
<ul className="space-y-3">
<li>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Requested by Seek NZ</span>
<span className="text-xs text-[#5c4e79]">20 Dec 2024 20:25</span>
</div>
<div className="text-xs text-[#5c4e79]">Reference: 2056978547</div>
</li>
<li>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Processed by NZ Police</span>
<span className="text-xs text-[#5c4e79]">20 Dec 2024 21:03</span>
</div>
<div className="text-xs text-[#5c4e79]">Status: Completed</div>
</li>
</ul>
</div>

<div className="bg-[#f6f8ff] px-4 pb-24 hidden" id="tab-content-bundles">
<div className="mt-6 text-[#2d264d] font-semibold text-base mb-3">Bundles</div>
<div className="bg-white border border-[#e3e1ec] rounded-xl p-4 text-[#5c4e79] text-sm shadow-sm">
<span>No bundles are associated with this Police Check yet.</span>
</div>
</div>
</div>

<div className="fixed bottom-3 left-0 right-0 flex justify-center z-30 pointer-events-none">
<div className="flex justify-center w-full max-w-[340px] mx-auto pointer-events-auto px-2">
<button className="flex flex-row items-center px-6 py-3 bg-[#4E18BB] text-white rounded-full shadow-lg text-base font-medium gap-2">
<svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 20 20">
<path d="M12 16v-3.5a3.5 3.5 0 10-4 0V16" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M16 12v-2a6 6 0 10-12 0v2" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
        Share
      </button>
</div>
</div>


    </>
  );
}
