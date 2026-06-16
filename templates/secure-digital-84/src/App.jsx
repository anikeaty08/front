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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    


      !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NaoyTHRiquOhW7PvwNgE"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px]"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 pt-6 px-6">
<div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-full px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] animate-fade-up">
<div className="flex items-center gap-2">
<svg className="w-8 h-8 shrink-0" fill="none" stroke="url(#logo-grad-1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<defs>
<lineargradient id="logo-grad-1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c084fc"></stop>
<stop offset="100%" stop-color="#60a5fa"></stop>
</lineargradient>
</defs>
<path d="M3 4h18v16H3z" rx="4"></path>
<path d="M8 16V8l4 4 4-4v8"></path>
</svg>
<span className="text-white font-normal text-xl tracking-tight">
            MipTag
          </span>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-lg font-normal text-slate-400 hover:text-white transition-colors" href="#">
            Sign In
          </a>
<button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-normal shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:from-purple-500 hover:to-blue-500 transition-all border border-white/10">
            Get MipTag
          </button>
</div>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center pt-40 pb-24">

<section className="flex flex-col text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<div className="w-full max-w-2xl relative group mb-12 animate-fade-up delay-100">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition duration-700"></div>
<div className="relative flex items-center glass-panel rounded-full p-2 pl-6 shadow-2xl transition-all border-white/10 group-focus-within:border-indigo-500/50 group-focus-within:bg-white/[0.04]">
<input className="bg-transparent border-none outline-none text-white w-full px-2 py-3 text-lg placeholder-slate-500 font-normal" placeholder="Enter MipTag" type="text"/>
<div className="flex items-center gap-2 pr-2">
<button aria-label="Search" className="p-3 bg-white/[0.03] hover:bg-white/[0.08] rounded-full transition-colors text-slate-300 border border-white/5 hover:border-white/10 flex items-center justify-center shadow-sm" type="button">
<iconify-icon height="20" icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</button>
<button aria-label="Microphone" className="p-3 bg-white/[0.03] hover:bg-white/[0.08] rounded-full transition-colors text-slate-300 border border-white/5 hover:border-white/10 flex items-center justify-center shadow-sm" type="button">
<i className="text-purple-400 w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i>
</button>
<button aria-label="Camera" className="p-3 bg-white/[0.03] hover:bg-white/[0.08] rounded-full transition-colors text-slate-300 border border-white/5 hover:border-white/10 flex items-center justify-center shadow-sm" type="button">
<i className="text-blue-400 w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.05] animate-fade-up delay-200 max-w-5xl mb-4">
          Move Your Message
          <br className="hidden sm:block"/>
          With
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500">
            MipTags
          </span>
</h1>
<a className="group inline-flex items-center gap-2 text-lg md:text-xl font-normal text-slate-300 hover:text-white transition-colors mb-8 animate-fade-up delay-200 border border-white/10 bg-white/[0.03] px-6 py-2.5 rounded-full hover:bg-white/[0.08]" href="#">
          Connect Securely and Directly
          <i className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<p className="text-2xl md:text-3xl font-light text-slate-400 max-w-3xl mb-24 animate-fade-up delay-300">
          The future of secure digital brand connections—move from offline to
          online with patent-pending Direct Search Technology™.
        </p>

<div className="w-full max-w-sm mx-auto perspective-[2000px] animate-fade-up delay-400 relative z-20">

<div className="absolute -top-12 -left-16 w-32 h-32 glass-panel rounded-2xl flex items-center justify-center transform -rotate-12 translate-z-12 shadow-2xl border-white/10 hidden md:flex animate-[bounce_4s_infinite_ease-in-out]">
<i className="text-purple-400 w-10 h-10" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="absolute top-32 -right-20 w-24 h-24 glass-panel rounded-full flex items-center justify-center transform rotate-12 translate-z-12 shadow-2xl border-white/10 hidden md:flex animate-[bounce_5s_infinite_ease-in-out_reverse] p-4">
<svg className="w-full h-full" fill="none" stroke="url(#logo-grad-2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<defs>
<lineargradient id="logo-grad-2" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c084fc"></stop>
<stop offset="100%" stop-color="#60a5fa"></stop>
</lineargradient>
</defs>
<path d="M3 4h18v16H3z" rx="4"></path>
<path d="M8 16V8l4 4 4-4v8"></path>
</svg>
</div>
<div className="relative transform-gpu transition-transform duration-700 ease-out hover:rotate-x-[5deg] hover:rotate-y-[-5deg] rotate-x-[15deg] rotate-y-[-10deg] rotate-z-[2deg] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_60px_rgba(99,102,241,0.2)] rounded-[3.5rem] p-3 bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600/50">

<div className="relative w-full aspect-[9/19] bg-[#0a0217] rounded-[2.75rem] overflow-hidden border border-black shadow-inner">

<div className="absolute -top-10 -left-10 w-64 h-64 bg-[#d900ff] rounded-full mix-blend-screen blur-[60px] opacity-40 pointer-events-none"></div>
<div className="absolute top-1/2 -right-20 w-72 h-72 bg-[#0066ff] rounded-full mix-blend-screen blur-[70px] opacity-30 pointer-events-none"></div>
<div className="absolute -bottom-10 left-0 w-full h-40 bg-[#1e0059] rounded-full mix-blend-screen blur-[50px] opacity-60 pointer-events-none"></div>
<div className="absolute inset-0 phone-glare z-50 pointer-events-none"></div>

<div className="absolute top-0 inset-x-0 h-14 flex justify-center z-40">
<div className="w-32 h-7 bg-black rounded-b-3xl"></div>
</div>

<div className="relative z-10 h-full flex flex-col px-4 py-2">

<div className="w-full flex justify-between items-center z-50 text-white font-normal text-xs px-2 pt-2">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="signal" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5" data-lucide="wifi" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="battery" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex-1 flex flex-col items-center pt-2 w-full overflow-hidden">

<div className="relative w-24 h-24 mb-3 flex items-center justify-center shrink-0 mt-2">
<svg className="w-full h-full" fill="none" stroke="url(#logo-grad-3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<defs>
<lineargradient id="logo-grad-3" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c084fc"></stop>
<stop offset="100%" stop-color="#60a5fa"></stop>
</lineargradient>
</defs>
<path d="M3 4h18v16H3z" rx="4"></path>
<path d="M8 16V8l4 4 4-4v8"></path>
</svg>
</div>

<h1 className="text-white text-2xl tracking-tight font-normal mb-1 uppercase">
                    Miptag.me
                  </h1>
<p className="text-purple-200 text-sm text-center font-light leading-snug mb-4">
                    Connect Directly, Digitally, &amp; Safely
                    <br/>
                    With MIPTAGS
                  </p>

<div className="w-full relative flex items-center bg-[#251545]/50 backdrop-blur-xl rounded-full p-1 border border-white/10 mb-3 shadow-lg shrink-0">
<div className="w-7 h-7 rounded-full border border-fuchsia-400/50 flex items-center justify-center shrink-0 ml-1">
<div className="w-3 h-3 rounded-full border border-blue-400/50"></div>
</div>
<input className="bg-transparent border-none outline-none text-white/80 w-full pl-3 pr-1 text-base font-light placeholder-white/40" placeholder="Enter MipTag" type="text"/>
<div className="flex items-center pr-2 gap-2 shrink-0">
<button aria-label="Search" className="text-white hover:text-purple-200 transition-colors p-1 rounded-full focus:outline-none hover:bg-white/10 flex items-center justify-center shrink-0" type="button">
<iconify-icon height="16" icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</button>
<i className="w-4 h-4 text-white" data-lucide="camera" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-white" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>
</div>

<button className="w-full relative flex items-center justify-center bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] backdrop-blur-md rounded-full py-2.5 px-4 border border-white/10 text-white text-base font-normal mb-3 hover:opacity-90 shadow-[0_4px_15px_rgba(107,33,168,0.4)] transition-opacity shrink-0">
<i className="w-4 h-4 absolute left-4" data-lucide="mail" strokeWidth="1.5"></i>
                    Sign in with Email
                  </button>

<div className="w-full bg-gradient-to-b from-[#b47af5]/20 to-[#7a4db8]/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col items-center relative flex-1 min-h-0">
<div className="text-white/90 text-sm font-light text-center leading-[1.6] flex flex-col items-center gap-0.5 w-full">
<div className="flex items-center gap-2">
<span className="w-[3px] h-[3px] rounded-full bg-white/70"></span>
                        Listening...
                      </div>
<div className="flex items-center gap-2">
<span className="w-[3px] h-[3px] rounded-full bg-white/70"></span>
                        "Please say your MipTag"
                      </div>
<div className="flex items-center gap-2">
<span className="w-[3px] h-[3px] rounded-full bg-white/70"></span>
                        For accurate results
                      </div>
<div className="flex items-center gap-2">
<span className="w-[3px] h-[3px] rounded-full bg-white/70"></span>
                        Say one letter or number at a time
                      </div>
<div className="flex items-center gap-2">
<span className="w-[3px] h-[3px] rounded-full bg-white/70"></span>
                        "Example P, G, 2, 0, 1"
                      </div>
<div className="flex items-center gap-2">
<span className="w-[3px] h-[3px] rounded-full bg-white/70"></span>
                        Press stop when finish
                      </div>
</div>

<div className="flex items-end justify-center gap-1 h-5 mt-auto mb-2">
<div className="w-[3px] h-2 bg-white rounded-full"></div>
<div className="w-[3px] h-4 bg-white rounded-full"></div>
<div className="w-[3px] h-5 bg-white rounded-full"></div>
<div className="w-[3px] h-3 bg-white rounded-full"></div>
<div className="w-[3px] h-4 bg-white rounded-full"></div>
</div>

<div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded shadow-md"></div>
</div>

<div className="mt-3 pt-1 pb-1 flex flex-col items-center shrink-0 w-full z-20">
<div className="flex items-center gap-2">
<div className="relative w-6 h-6 flex items-center justify-center">
<i className="w-full h-full text-[#00d0ff] absolute inset-0" data-lucide="shield" strokeWidth="1.5"></i>
<div className="w-2.5 h-2.5 rounded-full border border-[#e81cff] flex items-center justify-center bg-transparent">
<div className="w-1 h-1 rounded-full border border-[#00d0ff]"></div>
</div>
</div>
<div className="text-sm text-white/80 font-light leading-tight">
                        Scanned &amp; Protected
                        <br/>
                        By MipTag Digital Defense
                      </div>
</div>

<div className="w-1/3 h-1 bg-white mt-2 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4">
              Direct Search Capabilities
            </h2>
<p className="text-2xl text-slate-400 font-light">
              Interact with the physical world instantly. Our multi-modal search
              engine seamlessly connects physical identifiers to secure digital
              spaces.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-[2rem] p-8 hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="text-purple-400 w-7 h-7" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">
              Voice
            </h3>
<p className="text-lg text-slate-400 leading-relaxed font-light">
              Simply speak a MipTag into any enabled device to instantly
              retrieve digital identity profiles, skipping manual entry
              entirely.
            </p>
</div>

<div className="glass-panel rounded-[2rem] p-8 hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full group-hover:bg-indigo-500/20 transition-colors"></div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="text-indigo-400 w-7 h-7" data-lucide="keyboard" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">
              Text
            </h3>
<p className="text-lg text-slate-400 leading-relaxed font-light">
              Input short, memorable alphanumeric MipTags into our universal
              search bar for immediate, verified connection to a brand or
              individual.
            </p>
</div>

<div className="glass-panel rounded-[2rem] p-8 hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="text-blue-400 w-7 h-7" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">
              Scan
            </h3>
<p className="text-lg text-slate-400 leading-relaxed font-light">
              Utilize advanced optical recognition to scan visual tags in the
              real world, bridging the gap between physical media and digital
              endpoints.
            </p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-32">
<div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#130a2b] to-[#0A0514] border border-white/10 p-12 md:p-24 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[2px]"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-20 h-20 rounded-2xl bg-[#0A0514] border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05),0_0_30px_rgba(124,58,237,0.3)] flex items-center justify-center mb-8">
<i className="text-blue-400 w-10 h-10" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Digital Defense
            </h2>
<p className="text-2xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
              Your digital identity is cryptographically secured. We prioritize
              privacy by design, ensuring every Direct Search connection is
              safe, authenticated, and fully under your control.
            </p>
<button className="px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white text-lg font-normal hover:bg-white/[0.1] hover:border-white/20 transition-all backdrop-blur-md">
              Explore Security Architecture
            </button>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-white/5 bg-[#06020F] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<svg className="w-6 h-6 shrink-0" fill="none" stroke="url(#logo-grad-4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<defs>
<lineargradient id="logo-grad-4" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c084fc"></stop>
<stop offset="100%" stop-color="#60a5fa"></stop>
</lineargradient>
</defs>
<path d="M3 4h18v16H3z" rx="4"></path>
<path d="M8 16V8l4 4 4-4v8"></path>
</svg>
<span className="text-white font-normal text-xl tracking-tight">
            MipTag
          </span>
</div>
<div className="flex flex-wrap gap-4">

<div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-base font-normal text-slate-300 border-white/5">
<i className="text-purple-400 w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
            GDPR Ready
          </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-base font-normal text-slate-300 border-white/5">
<i className="text-blue-400 w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
            CCPA Compliant
          </div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
<p className="text-base text-slate-500 font-normal">
          © 2026 Unit 52 Labs: All rights reserved. (2025.4.11)
        </p>
<div className="flex gap-6">
<a className="text-base text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="text-base text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Terms of Service
          </a>
<a className="text-base text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Security
          </a>
</div>
</div>
</footer>



    </>
  );
}
