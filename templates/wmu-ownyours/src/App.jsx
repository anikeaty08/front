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



      // Simple parallax effect for the giant text
      window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const outlines = document.querySelectorAll('.text-outline');
          outlines.forEach((el, index) => {
              const speed = 0.15 * (index + 1);
              el.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
          });
      });

      // Venue Modal Logic
      document.addEventListener('DOMContentLoaded', () => {
          const btn = document.getElementById('explore-venue-btn');
          const modal = document.getElementById('venue-modal');
          const closeBtn = document.getElementById('close-venue-btn');
          const content = document.getElementById('venue-image-container');

          if(btn && modal && closeBtn) {
              btn.addEventListener('click', () => {
                  modal.classList.remove('opacity-0', 'pointer-events-none');
                  setTimeout(() => content.classList.remove('scale-95'), 50);
              });

              const close = () => {
                  content.classList.add('scale-95');
                  modal.classList.add('opacity-0', 'pointer-events-none');
              };

              closeBtn.addEventListener('click', close);
              modal.addEventListener('click', (e) => {
                  if(e.target === modal) close();
              });
              document.addEventListener('keydown', (e) => {
                  if(e.key === 'Escape') close();
              });
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grain-overlay"></div>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex justify-between items-end">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="flex items-center gap-4">
<span className="text-[10px] font-mono text-neutral-500 uppercase">
            Scroll to recall
          </span>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 bg-gradient-to-b from-black/90 to-transparent pt-6 pb-12">
<div className="flex max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 mix-blend-difference">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-xs tracking-tighter">
            WMU
          </div>
<span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
            Legacy Archive
          </span>
</div>
<div className="hidden md:flex gap-8">
<a className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1" href="#">
            Manifesto
          </a>
<a className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1" href="#">
            Records
          </a>
<a className="text-[10px] uppercase hover:text-white transition-colors hover:border-white font-medium text-neutral-400 tracking-[0.2em] border-transparent border-b pb-1" href="#">
            Contact
          </a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Football Tunnel" className="w-full h-full object-cover opacity-40 grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/553975ef-8d03-43f6-aab7-081d732aac76_3840w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
</div>

<div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-overlay">
<h1 className="text-[15vw] leading-none font-black text-white opacity-20 tracking-tighter scale-y-110">
          LEGACY
        </h1>
</div>
<div className="relative z-20 text-center space-y-6 max-w-4xl mt-20">
<div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-black/40 backdrop-blur-md rounded-full animate-reveal" style={{animationDelay: '0.1s'}}>
<span className="w-2 h-2 rounded-full bg-[#f1c500]"></span>
<span className="text-xs font-semibold tracking-widest text-white uppercase">
            Hidden Memory v2.0
          </span>
</div>
<h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.85] animate-reveal" style={{animationDelay: '0.2s'}}>
          Own Your
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c500] to-[#bfa12f]">
            History
          </span>
</h2>
<p className="text-lg md:text-xl text-neutral-400 font-serif italic max-w-lg mx-auto leading-relaxed pt-4 animate-reveal" style={{animationDelay: '0.3s'}}>
          "The score is public record. The feeling is hidden memory."
        </p>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-black/80 backdrop-blur-sm z-30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<svg aria-hidden="true" data-icon="lucide:play" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-bold uppercase tracking-widest text-white">
              Start The Timeline
            </span>
</div>
<div className="hidden md:block w-32 h-[1px] bg-neutral-800"></div>
<div className="text-[10px] text-neutral-500 font-mono">
            EST. 1905 // KALAMAZOO
          </div>
</div>
</div>
</header>

<main className="relative z-10 bg-black">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent md:-translate-x-1/2 z-0"></div>

<section className="md:py-48 overflow-hidden group/section pt-32 pb-32 relative">

<div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-700 group-hover/section:opacity-40">
<img alt="Mud texture" className="w-full h-full object-cover grayscale contrast-150 mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ff5aae2-e013-4677-b639-d6b259d66692_3840w.jpg" style={{}}/>
</div>

<div className="absolute right-[-5%] top-20 text-[12rem] font-black text-neutral-900 select-none z-0 pointer-events-none opacity-50 text-outline" style={{transform: 'translateY(31.5px)'}}>
          GRIT
        </div>
<div className="md:flex md:justify-between md:items-center z-10 max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="md:w-5/12 text-left md:text-right md:pr-16 mb-8 md:mb-0">
<span className="text-xs font-bold tracking-[0.3em] text-[#8B7355] block mb-2">
              1904 — 1945
            </span>
<h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              Survival
              <br/>
              Mode
            </h3>
<div className="md:hidden mt-4 h-px w-12 bg-[#8B7355]"></div>
</div>

<div className="md:w-5/12 md:pl-16 relative">

<div className="absolute left-[-4px] md:left-[-4px] top-10 md:top-1/2 md:-translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_white] z-20"></div>

<div className="relative w-full group/card perspective-1000">

<div className="relative z-10 p-8 bg-neutral-900/40 backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover/card:bg-neutral-900/80 group-hover/card:border-[#8B7355]/50 overflow-hidden">

<div className="relative z-10 transition-all duration-500 group-hover/card:opacity-0 group-hover/card:translate-y-[-10px]">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-white/30"></span>
<span className="text-[10px] font-mono text-white/50">
                      ARCHIVE.04
                    </span>
</div>
<h4 className="text-xl font-bold text-white mb-2">
                    The Mud Bowl Era
                  </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Before the stadium lights, there was just the field, the
                    mud, and the will to stay standing.
                  </p>
</div>

<div className="absolute inset-0 z-20 p-8 flex flex-col justify-center bg-gradient-to-br from-[#261e18] to-black opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 memory-transition">
<div className="absolute top-0 right-0 p-4">
<svg aria-hidden="true" data-icon="lucide:eye" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
<circle cx="12" cy="12" r="3"></circle>
</g>
</svg>
</div>
<p className="font-serif text-xl text-[#dcdcdc] leading-relaxed italic border-l-2 border-[#8B7355] pl-4">
                    “The leather helmets didn't protect much. The only safety we
                    had was trusting the man next to us.”
                  </p>
<div className="mt-6 flex items-center gap-2">
<span className="text-[10px] uppercase tracking-widest text-[#8B7355]">
                      Audio File: Recovered
                    </span>
<div className="flex gap-0.5">
<div className="w-0.5 h-2 bg-[#8B7355] animate-pulse"></div>
<div className="w-0.5 h-4 bg-[#8B7355] animate-pulse delay-75"></div>
<div className="w-0.5 h-3 bg-[#8B7355] animate-pulse delay-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-48 overflow-hidden group/section flex-row-reverse pt-32 pb-32 relative">

<div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-700 group-hover/section:opacity-40">
<img alt="Stadium Lights" className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/791881d9-1435-4adc-aaf8-ab0a703cdbd2_800w.jpg"/>
</div>

<div className="absolute left-[-5%] bottom-20 text-[12rem] font-black text-neutral-900 select-none z-0 pointer-events-none opacity-50 text-outline" style={{transform: 'translateY(63px)'}}>
          UNION
        </div>
<div className="md:flex md:justify-between md:items-center flex-row-reverse max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="md:w-5/12 text-left md:pl-16 mb-8 md:mb-0">
<span className="text-xs font-bold tracking-[0.3em] text-neutral-500 block mb-2">
              1946 — 1969
            </span>
<h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              Forging
              <br/>
              Identity
            </h3>
</div>

<div className="md:w-5/12 md:pr-16 md:text-right relative">

<div className="absolute left-[-4px] md:right-[-5px] md:left-auto top-10 md:top-1/2 md:-translate-y-1/2 w-2 h-2 rounded-full bg-neutral-500 z-20"></div>
<div className="relative w-full group/card text-left">
<div className="relative z-10 p-8 bg-neutral-900/40 backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover/card:bg-neutral-800/90 overflow-hidden">

<div className="relative z-10 transition-all duration-500 group-hover/card:opacity-0 group-hover/card:scale-95">
<div className="flex items-center justify-between mb-6">
<svg aria-hidden="true" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<span className="text-[10px] font-mono text-white/50">
                      MAC.ENTRY
                    </span>
</div>
<h4 className="text-xl font-bold text-white mb-2">
                    The New Standard
                  </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Joining the Mid-American Conference. No longer outsiders,
                    now contenders.
                  </p>
</div>

<div className="absolute inset-0 z-20 p-8 flex flex-col justify-center bg-[#1a1a1a] opacity-0 scale-105 group-hover/card:opacity-100 group-hover/card:scale-100 memory-transition">
<div className="w-full h-full absolute inset-0 opacity-10 bg-cover bg-center bg-[url(default)]" style={{}}></div>
<h4 className="text-xs font-bold text-neutral-400 tracking-widest uppercase mb-4 relative z-10">
                    Collective Memory
                  </h4>
<p className="font-serif text-lg text-white leading-relaxed italic relative z-10">
                    “It wasn't just about playing games anymore. It was about
                    putting Kalamazoo on the map.”
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 overflow-hidden group/section">

<div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-700 group-hover/section:opacity-30">
<img alt="Victory" className="w-full h-full object-cover grayscale contrast-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fafc8a43-ac7b-406d-baec-2e671afa5da9_1600w.jpg?w=800&amp;q=80" style={{}}/>
</div>

<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[10vw] font-black text-transparent z-0 pointer-events-none select-none opacity-20" style={{WebkitTextStroke: '2px #f1c500'}}>
          CHAMPIONS
        </div>
<div className="max-w-5xl mx-auto px-6 relative z-10 md:flex md:justify-between md:items-center">

<div className="md:w-5/12 text-left md:text-right md:pr-16 mb-8 md:mb-0">
<span className="text-xs font-bold tracking-[0.3em] text-[#f1c500] block mb-2">
              1988
            </span>
<h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
              First
              <br/>
<span className="text-[#f1c500]">Gold</span>
</h3>
</div>

<div className="md:w-5/12 md:pl-16 relative">

<div className="absolute left-[-4px] md:left-[-4px] top-10 md:top-1/2 md:-translate-y-1/2 w-2 h-2 rounded-full bg-[#f1c500] shadow-[0_0_20px_#f1c500] z-20 animate-pulse"></div>
<div className="relative w-full group/card perspective-1000">
<div className="relative z-10 p-8 bg-neutral-900/60 backdrop-blur-xl border-l-2 border-[#f1c500] transition-all duration-500 group-hover/card:border-l-4 group-hover/card:bg-neutral-800">

<div className="relative z-10 transition-all duration-500 group-hover/card:opacity-0">
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" data-icon="lucide:trophy" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
</g>
</svg>
<span className="text-[10px] font-mono text-[#f1c500]">
                      CALIFORNIA.BOWL
                    </span>
</div>
<h4 className="text-2xl font-bold text-white mb-2">
                    Breaking Through
                  </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    The season that changed everything. MAC Champions. Defeating
                    Fresno State.
                  </p>
</div>

<div className="absolute inset-0 z-20 p-8 flex flex-col justify-between bg-[#f1c500] opacity-0 -translate-x-full group-hover/card:opacity-100 group-hover/card:translate-x-0 memory-transition">
<div className="flex justify-between items-start">
<span className="text-xs font-black uppercase tracking-widest text-black">
                      Raw Emotion
                    </span>
<svg aria-hidden="true" data-icon="lucide:quote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="font-serif text-2xl text-black font-medium leading-tight">
                    “I saw grown men crying in the stands. That's when I knew
                    this was more than a game.”
                  </p>
<div className="text-[10px] font-mono text-black/60 uppercase">
                    Source: Fan Interview, Dec '88
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 my-12 bg-neutral-900/50 border-y border-white/5 overflow-hidden group">
<div className="absolute inset-0 opacity-30 bg-cover bg-center bg-[url(default)]" style={{}}></div>
<div className="absolute -right-20 top-0 w-96 h-96 bg-[#f1c500] blur-[150px] opacity-10 rounded-full pointer-events-none group-hover:opacity-20 transition-opacity"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 px-6">
<div className="inline-flex items-center gap-2 mb-6 opacity-60">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
<span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
              Waldo Stadium // The Zoo
            </span>
</div>
<h3 className="text-3xl md:text-4xl font-serif italic text-white mb-6 leading-tight">
            "The wind off the hill cuts right through you. If you stay for the
            4th quarter, you're family."
          </h3>
<div className="flex justify-center gap-4">
<button className="px-6 py-2 border border-white/20 hover:border-white/60 text-xs font-bold uppercase tracking-widest text-white transition-colors" id="explore-venue-btn">
              Explore Venue
            </button>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 overflow-hidden group/section flex-row-reverse">

<div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-700 group-hover/section:opacity-50">
<img alt="Cotton Bowl" className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a927d15-9970-4ce3-bd1e-7e9c69b67b0e_800w.jpg?w=800&amp;q=80" style={{}}/>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 md:flex md:justify-between md:items-center flex-row-reverse">

<div className="md:w-5/12 text-left md:pl-16 mb-8 md:mb-0">
<span className="text-xs font-bold tracking-[0.3em] text-[#f1c500] block mb-2">
              2016
            </span>
<h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              Undefeated
            </h3>
<p className="text-neutral-500 mt-4 font-mono text-sm uppercase tracking-widest">
              13-0 Regular Season
            </p>
</div>

<div className="md:w-5/12 md:pr-16 md:text-right relative">

<div className="absolute left-[-4px] md:right-[-5px] md:left-auto top-10 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-black z-20"></div>
<div className="relative w-full group/card text-left">
<div className="relative z-10 p-10 bg-black/80 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover/card:bg-white overflow-hidden">

<div className="relative z-10 transition-all duration-300 group-hover/card:opacity-0 group-hover/card:translate-y-4">
<div className="flex gap-1 mb-6">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="text-2xl font-bold text-white mb-2">
                    The Perfect Run
                  </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Cotton Bowl. College GameDay. The moment Western Michigan
                    became the center of the football universe.
                  </p>
</div>

<div className="absolute inset-0 z-20 p-10 flex flex-col justify-center opacity-0 -translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 memory-transition">
<h4 className="text-sm font-bold text-black tracking-widest uppercase mb-4">
                    Cotton Bowl Diary
                  </h4>
<p className="font-serif text-xl text-black leading-tight font-medium">
                    “For one season, we didn't just hope to win. We expected it.
                    The air in Kalamazoo felt different.”
                  </p>
<div className="mt-6 w-full h-1 bg-neutral-200 overflow-hidden">
<div className="h-full bg-black w-[100%] animate-[width_2s_ease-out]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative py-24 bg-black border-t border-white/10 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-end">
<div className="mb-12 md:mb-0">
<h2 className="text-[5rem] md:text-[8rem] font-black leading-[0.8] text-neutral-900 uppercase tracking-tighter mb-4">
            Next
            <br/>
            Chapter
          </h2>
<div className="flex gap-4">
<a className="px-8 py-4 bg-[#f1c500] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors" href="#">
              View Current Roster
            </a>
</div>
</div>
<div className="text-right space-y-2">
<p className="text-xs text-neutral-500 uppercase tracking-widest">
            Designed for WMU Athletics
          </p>
<div className="flex justify-end gap-2 text-neutral-600">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-[10px] font-mono text-neutral-700 mt-4">
            © 2024 ARCHIVE PROJECT
          </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-500" id="venue-modal">
<button className="absolute top-8 right-8 text-neutral-500 hover:text-[#f1c500] transition-colors z-50" id="close-venue-btn">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="relative w-[90vw] max-w-7xl h-[80vh] scale-95 transition-transform duration-500" id="venue-image-container">
<img alt="Waldo Stadium" className="w-full h-full object-cover border border-white/10 shadow-[0_0_100px_rgba(241,197,0,0.1)] bg-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3bb81f6-5490-46f2-bf6b-10339f0be55b_1600w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent">
<h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
            Waldo Stadium
          </h2>
<p className="font-serif text-xl text-[#f1c500] italic">
            "The Zoo" — 30,200 Capacity
          </p>
</div>
</div>
</div>

    </>
  );
}
