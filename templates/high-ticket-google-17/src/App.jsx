import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="gradient-blur"></div>

<div className="fixed flex w-full z-50 pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="shadow-black/50 flex md:w-auto bg-black/60 w-full max-w-5xl rounded-full pt-5 pr-7 pb-5 pl-7 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-10 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '9999px'}}>
<style>
      [style*="--border-gradient"]::before {
        content: "";
        position: absolute;
        inset: 0;
        padding: 1px;
        border-radius: 9999px;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        background: var(--border-gradient);
        pointer-events: none;
      }
    </style>
<div className="flex items-center gap-2 shrink-0">
<img alt="FUEL Results" className="w-auto h-7 object-contain" src="https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/6851c8a3bcc32d7669e85377.png"/>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#how-it-works">
        How It Works
      </a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#case-studies">
        Results
      </a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#comparison">
        Comparison
      </a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans" href="#faq">
        FAQ
      </a>
</div>
<div className="flex items-center gap-4 shrink-0">
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ea580c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute top-0 right-0 bottom-0 left-0"></span>
<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-bold text-zinc-300 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
<span className="z-10 relative">apply now</span>
</span>
</button>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>

<div className="absolute inset-0 -z-20">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-900/20 to-black"></div>
<div className="opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-7 gap-0 -z-10 pointer-events-none">
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-1">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-2">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-r border-white/5 col-anim delay-3">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10"></div>
</div>
<div className="relative h-full border-r border-white/5 md:border-none col-anim delay-4">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[45%] border-t border-white/10"></div>
<div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-5">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[55%] border-t border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-6">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[65%] border-t border-white/10"></div>
</div>
<div className="relative h-full hidden md:block border-l border-white/5 col-anim delay-7">
<div className="absolute bottom-0 left-0 right-0 bg-black h-[75%] border-t border-white/10"></div>
</div>
</div>

<div className="z-10 text-center max-w-5xl mt-4 mr-auto mb-24 ml-auto pr-6 pl-6 relative">

<div className="absolute inset-0 -z-10 md:hidden pointer-events-none select-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_100%] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black"></div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex gap-2 animate mb-8 gap-x-2 gap-y-2 items-center">
<span className="uppercase text-xs font-bold text-red-200 tracking-[0.1em] font-manrope">
            Your competitors are taking your clients
          </span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-col justify-center leading-[1.05] md:text-6xl cursor-default text-4xl font-semibold tracking-tighter font-manrope mb-8">
<span className="">
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              We’ll Build, Launch &amp; Manage a
            </span>
<span className="text-white">Google Ads System</span>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              That Generates Qualified, High-Ticket Clients
            </span>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-[#EF5323] to-[#f3ab59]">
              in 21 Days – Or We Work for FREE
            </span>
</span>
</h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed animate md:text-xl text-lg font-normal text-gray-400 max-w-2xl mr-auto mb-10 ml-auto">Apply For Your FREE 30-Minute Strategy Session With Mississippi's

#1 Google Ads Agency Trusted By 200+ Businesses.</p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.3s_both] animate-on-scroll max-w-2xl mx-auto mb-10 bg-gradient-to-r from-orange-500/10 to-orange-900/10 border border-orange-500/30 rounded-xl p-4 backdrop-blur-sm relative overflow-hidden animate">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]">
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
<p className="text-sm font-medium text-orange-100"><span className="uppercase font-bold text-[#EF5323] tracking-wide">🎁 limited time Bonus:</span> Apply By Midnight Tonight and Get <span className="text-white underline decoration-orange-500 decoration-2 underline-offset-2">
                $500 in Free Ad Spend
              </span> - Only 4 Spots Left. No card required.</p>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col gap-4 animate mb-16 gap-x-4 gap-y-4 items-center justify-center">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-bold text-white tracking-widest font-manrope rounded-[5px] pt-5 pr-10 pb-5 pl-10 relative items-center justify-center">
<div className="absolute inset-0 -z-20 rounded-[5px] overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-[4px] bg-black"></div>
</div>
<style className="">
              @keyframes beam-spin { to { transform: rotate(360deg); } }
            </style>
<div className="-z-10 overflow-hidden bg-zinc-950 rounded-[3px] absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="bg-gradient-to-b from-[#EF5323] to-[#331200] rounded-[3px] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>
<span className="transition-colors group-hover:text-white text-lg text-white/90 z-10 relative">Apply For Your Free Strategy Session</span>
</button>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
      Only 4 new clients accepted monthly
    </p>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll relative z-20 w-full max-w-6xl mx-auto px-6 pb-12 animate">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-b border-white/10 py-8 bg-black/50 backdrop-blur-sm">
<div className="flex flex-col items-center justify-center text-center px-4 border-r border-white/5 last:border-0">
<span className="text-3xl font-bold text-white font-manrope tracking-tight">
              2,847
            </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
              Local Biz Served
            </span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4 border-r border-white/5 last:border-0">
<span className="text-3xl font-bold text-emerald-400 font-manrope tracking-tight">
              312%
            </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
              Avg ROI (90 Days)
            </span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4 border-r border-white/5 last:border-0">
<span className="text-3xl font-bold text-white tracking-tight font-manrope">$57M+</span>
<span className="uppercase text-xs text-zinc-500 tracking-widest mt-1">Client Revenue Generated</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl font-bold text-white tracking-tight font-manrope">
              98%
            </span>
<span className="uppercase text-xs text-zinc-500 tracking-widest mt-1">client retention rate</span>
</div>
</div>
</div>
</section>

<section className="z-20 w-full max-w-7xl mt-12 mx-auto px-6 pb-20 relative">
<h2 className="text-3xl md:text-5xl font-semibold text-center mb-16 font-manrope tracking-tight">
        Why Service Businesses Choose
        <span className="text-orange-500">FUEL Results</span>
</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-zinc-900/30 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
            Leads in DAYS, not months
          </h3>
<p className="text-zinc-400 leading-relaxed">
            Get high-ticket, ready-to-buy leads faster than industry standards
            with our AI setup.
          </p>
</div>

<div className="group bg-gradient-to-br from-orange-900/20 to-zinc-900/30 border border-orange-500/30 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
              Exclusive
            </span>
</div>
<div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-6">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
            Work For Free Guarantee
          </h3>
<p className="text-zinc-300 leading-relaxed">
            If we don’t deliver in 21 days, we work for
            <span className="text-white font-bold underline decoration-orange-500 decoration-2">
              FREE
            </span>
            until we do.
          </p>
</div>

<div className="group bg-zinc-900/30 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<svg className="lucide lucide-calendar-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.2 4.2l15.6 15.6"></path>
<path d="M21 17v-6a2 2 0 0 0-2-2H9"></path>
<path d="M21 11h-5"></path>
<path d="M9 3v2"></path>
<path d="M15 3v2"></path>
<path d="M3 21h18"></path>
<path d="M3 10h4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
            No Long Contracts
          </h3>
<p className="text-zinc-400 leading-relaxed">
            Month-to-month terms. We earn your business every 30 days. No risk,
            no lock-ins.
          </p>
</div>
</div>

<div className="mt-8 flex flex-col md:flex-row gap-4">
<div className="flex-1 bg-zinc-950 border border-white/5 rounded-2xl p-6 flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 shrink-0">
<svg className="lucide lucide-banknote" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</svg>
</div>
<div className="">
<h4 className="text-white font-bold">Bonus #1: $500 Free Ad Spend</h4>
<p className="text-sm text-zinc-500">Apply by midnight tonight.</p>
</div>
</div>
<div className="flex-1 bg-zinc-950 border border-white/5 rounded-2xl p-6 flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-purple-400 shrink-0">
<svg className="lucide lucide-spy" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10V7a7 7 0 0 1 14 0v3"></path>
<path d="M12 12a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3"></path>
<path d="M16 12a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3"></path>
<path d="M4 17h16"></path>
<path d="M2 17h20"></path>
</svg>
</div>
<div className="">
<h4 className="text-white font-bold">Bonus #2: Competitor Audit</h4>
<p className="text-sm text-zinc-500">
              We break down your top competitor’s strategy.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-zinc-950 w-full border-white/5 border-t pt-24 pb-24 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
            Your Competitors Are
            <span className="text-[#EF5323]">Stealing Customers</span>
            While You Read This.
          </h2>
<div className="text-lg text-zinc-400 space-y-6">
<p className="">Right now – this second – someone is searching for what you sell.</p><p className="">If your competitor’s ad appears and yours doesn’t… you didn’t just lose a click. You lost the customer, the revenue, and maybe even the long-term relationship.</p><p className="">Here’s the brutal truth:</p><p className=""></p>
<div className="italic text-zinc-300 border-[#EF5323] border-l-2 pl-6">
              "75% of buyers never scroll past page one on Google. The business
              that shows up first gets the click, the call, and the cash."
            </div>
<p className="">And if you’ve been watching competitors win while you struggle to get traction, it’s beyond frustrating – it’s infuriating.
</p><p className="">
              Maybe you’ve tried agencies before and got burned. Maybe you feel
              overwhelmed by Google Ads’ complexity. But every day you’re
              invisible is another day your competitor pulls ahead.
            </p><p className="">And the worst part?
</p><p className="">You might already be paying for marketing that’s failing to put you in front of the very customers who are ready to buy today.
</p><p className="">Every day you’re invisible on Google is another day your competitor’s phone is ringing – and another day they’re pulling further ahead while you fall behind.</p><p className="">If you don’t fix it now, the gap will only get wider… and harder to close.
</p>
</div>
<div className="mt-10">
<button className="hover:text-red-400 transition-colors uppercase text-sm font-bold text-white tracking-widest border-[#EF5323] border-b pb-1">
              Stop the bleeding - Get visible now
            </button>
</div>
</div>

<div className="flex relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-[80px]"></div>

<div className="relative border-gray-800 bg-gray-950 border-[10px] rounded-[2.5rem] h-[550px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
<div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[12px] top-[72px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[12px] top-[124px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[12px] top-[178px] rounded-l-lg"></div>
<div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[12px] top-[142px] rounded-r-lg"></div>

<div className="w-full h-full bg-zinc-900 flex flex-col pt-12 px-4 relative">

<div className="w-full h-10 bg-zinc-800 rounded-full mb-6 flex items-center px-4 gap-2">
<svg className="text-zinc-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-zinc-400">
                  Best [Service] near me
                </span>
</div>

<div className="w-full bg-zinc-800/50 rounded-xl p-3 mb-4 border border-zinc-700">
<div className="flex items-center gap-1 mb-1">
<span className="font-bold text-[10px] text-zinc-900 bg-white px-1 rounded-[2px]">
                    Ad
                  </span>
<span className="text-[10px] text-zinc-400">
                    www.competitor.com
                  </span>
</div>
<div className="h-3 w-3/4 bg-blue-500/80 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-700 rounded mb-1"></div>
<div className="h-2 w-2/3 bg-zinc-700 rounded"></div>
</div>

<div className="w-full bg-zinc-800/50 rounded-xl p-3 mb-6 border border-zinc-700">
<div className="flex items-center gap-1 mb-1">
<span className="font-bold text-[10px] text-zinc-900 bg-white px-1 rounded-[2px]">
                    Ad
                  </span>
<span className="text-[10px] text-zinc-400">
                    www.otherguy.com
                  </span>
</div>
<div className="h-3 w-2/3 bg-blue-500/80 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-700 rounded mb-1"></div>
<div className="h-2 w-1/2 bg-zinc-700 rounded"></div>
</div>

<div className="mt-auto mb-8 text-center">
<p className="text-xs text-red-400 font-mono mb-2">
                  Where is your business?
                </p>
<div className="w-full border-t border-dashed border-zinc-700"></div>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-black w-full border-white/5 border-t pt-24 pb-24 relative">

<div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

<div className="relative order-2 lg:order-1">

<div className="relative z-10 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">

<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider ml-2">Campaign_Performance.AI</span>
</div>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] text-emerald-500 font-medium">Live Optimization</span>
</div>
</div>

<div className="pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-zinc-900/50 rounded-lg p-4 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<svg className="text-zinc-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
<span className="text-xs text-zinc-400">Qualified Leads</span>
</div>
<div className="text-2xl font-bold text-white font-manrope">
                142
                <span className="text-xs font-normal text-emerald-400 ml-1">+28%</span>
</div>
</div>
<div className="bg-zinc-900/50 rounded-lg p-4 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<svg className="text-zinc-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="text-xs text-zinc-400">Cost Per Acquisition</span>
</div>
<div className="text-2xl font-bold text-white font-manrope">
                $18.50
                <span className="text-xs font-normal text-emerald-400 ml-1">-42%</span>
</div>
</div>
</div>

<div className="relative h-48 w-full flex items-end justify-between gap-2 pt-8">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-0">
<div className="w-full h-px bg-white/[0.03]"></div>
<div className="w-full h-px bg-white/[0.03]"></div>
<div className="w-full h-px bg-white/[0.03]"></div>
<div className="w-full h-px bg-white/[0.03]"></div>
</div>

<div className="w-full bg-zinc-800/30 rounded-t-sm h-[30%] relative group transition-all duration-500 hover:bg-zinc-800/50">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 text-[10px] text-zinc-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">Day 1</div>
</div>
<div 50="" 70"="" bg-zinc-800="" className="w-full bg-zinc-800/40 rounded-t-sm h-[45%] relative class=" duration-500="" group="" h-[40%]="" hover:bg-zinc-800="" relative="" rounded-t-sm="" transition-all="" w-full=""></div>
<div className="w-full bg-zinc-800/60 rounded-t-sm h-[55%] relative group transition-all duration-500 hover:bg-zinc-800/80"></div>
<div className="w-full bg-zinc-800/70 rounded-t-sm h-[70%] relative group transition-all duration-500 hover:bg-zinc-800/90"></div>
<div className="w-full bg-gradient-to-t from-orange-900/50 to-orange-500 rounded-t-sm h-[90%] relative shadow-[0_0_30px_rgba(249,115,22,0.2)]">

<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap transform transition-transform hover:scale-105 cursor-default z-20">
                Market Owner
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-10 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 w-64 z-20 animate-[fadeSlideIn_4s_ease-in-out_infinite_alternate]">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="">
<div className="text-[10px] text-zinc-400 uppercase tracking-wide">Just now</div>
<div className="text-xs text-white font-medium">New High-Ticket Inquiry</div>
</div>
</div>

<div className="absolute -left-4 bottom-20 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 w-56 z-20" style={{animation: 'fadeSlideIn 4s ease-in-out 1.5s infinite alternate-reverse'}}>
<div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div>
<div className="text-[10px] text-zinc-400 uppercase tracking-wide">Revenue</div>
<div className="text-xs text-white font-medium">$4,250 Deposited</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-[1.1] font-manrope">
        From Losing Ground to 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500">Owning the Market</span>
         — In Just 21 Days
      </h2>
<div className="text-lg text-zinc-400 space-y-6 font-sans">
<p className="">Picture this: instead of wondering where the next lead will come from, you wake up every morning to new appointment notifications from customers who are ready to buy.</p>
<p className="">Your phone rings with high-value inquiries – not price-shoppers, but clients who’ve already decided they want to work with you.</p>
<div className="border-l-2 border-orange-500/50 pl-6 py-1 my-6">
<p className="text-xl text-zinc-200 italic font-medium font-manrope">
            "You’re no longer chasing business… your competitors are chasing you."
          </p>
</div>
<p className="">Every ad dollar you spend comes back multiplied, because you finally have a system that delivers predictable, consistent leads week after week.</p>
<p className="">No more gambling with agencies that hide behind jargon and excuses. No more “crossing your fingers” every time you launch a campaign. Just a simple, done-for-you system – built to dominate your market – with full transparency and results you can measure in your bank account.</p>
<p className="text-white font-semibold">That’s what our 21-Day Fast Results Launch Plan delivers:</p>
<p className="">A proven, AI-powered Google Ads system that gets you in front of the right people, at the exact moment they’re ready to buy – and keeps you there.</p>
<p className="">In 21 days, you’ll know – with data, not promises – whether your Google Ads can finally give you the predictable lead flow you’ve been chasing. And if they can’t, you won’t pay another dime until they do.</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative" id="how-it-works">

<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4 block">
      The Solution
    </span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 font-manrope">
      The 21-Day Fast Results
      <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
        Launch Plan
      </span>
</h2>
<p className="text-lg text-zinc-400 mb-6 leading-relaxed">
      Get more leads in three weeks than most agencies deliver in three months – guaranteed.
    </p>
<p className="text-zinc-500 leading-relaxed font-normal text-base max-w-2xl mx-auto">
      Most agencies take 90 days just to “ramp up.” By then, you’ve spent thousands with nothing to show for it. We don’t play that game. Our 21-Day Fast Results Launch Plan is built for one thing: getting high-value, ready-to-buy leads into your pipeline in record time – with complete transparency every step of the way.
    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">

<div className="flex flex-col hover:bg-zinc-900/50 hover:border-orange-500/30 transition-all duration-300 group bg-zinc-900/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-6 flex items-center justify-between">
<div className="w-10 h-10 flex items-center justify-center bg-orange-500/10 rounded-xl text-orange-500 border border-orange-500/20">
<svg className="lucide lucide-scan-search" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"></path><path d="M19 12V5a2 2 0 0 0-2-2H9"></path><path d="m21 21-6-6"></path><circle cx="10" cy="16" r="4"></circle></svg>
</div>
<span className="text-[10px] font-bold tracking-wider uppercase text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">Days 1-3</span>
</div>
<h3 className="text-xl font-bold text-white mb-2 font-manrope">Phase 1: Intelligence &amp; Strategy</h3>
<p className="leading-relaxed text-sm text-zinc-400 mb-0">Before we spend a dime, we pull back the curtain on your competitors.</p>
<ul className="flex-1 my-3 space-y-6">
<li className="flex my-3 gap-x-3 gap-y-3">
<div className="shrink-0 mt-0.5 text-orange-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-zinc-200 mb-1">Competitor Spy Report</h4>
<p className="text-xs text-zinc-500 leading-relaxed">See the exact ads, keywords, and budgets your top 3 competitors
        are using to win clients.</p>
</div>
</li>
</ul><ul className="flex-1 mb-3 space-y-6">
<li className="flex my-3 gap-x-3 gap-y-3">
<div className="shrink-0 mt-0.5 text-orange-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-zinc-200 mb-1">Pinpoint High-Intent Buyers</h4>
<p className="leading-relaxed text-xs text-zinc-500">Target only the searches most likely to convert, not “window shoppers.”</p>
</div>
</li>
</ul><ul className="flex-1 mb-8 space-y-6">
<li className="flex gap-x-3 gap-y-3">
<div className="shrink-0 mt-0.5 text-orange-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-zinc-200 mb-1">Competitor Spy Report</h4>
<p className="leading-relaxed text-xs text-zinc-500">Built specifically for $500K-$5M local service businesses, so you’re not getting a cookie-cutter plan meant for big
brands.</p>
</div>
</li>
</ul>
<div className="mt-auto pt-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20 -mx-8 -mb-8 px-8 pb-8 rounded-b-3xl">
<p className="text-sm text-zinc-300 leading-relaxed mt-4">
<span className="text-orange-400 font-bold uppercase text-xs tracking-wide block mb-2">The Result</span>
          A crystal-clear roadmap showing exactly how we’ll win — and proof it’s possible before we even launch.
        </p>
</div>
</div>

<div className="flex flex-col bg-zinc-900/30 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-orange-500/30 transition-all duration-300 group">
<div className="mb-6 flex items-center justify-between">
<div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
<svg className="lucide lucide-rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path className="" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1"></path><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4"></path></svg>
</div>
<span className="text-[10px] font-bold tracking-wider uppercase text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Days 4-10</span>
</div>
<h3 className="text-xl font-bold text-white mb-2 font-manrope">Phase 2: Build &amp; Launch</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">In just one week, your complete AI-powered ad system goes live.</p>
<ul className="flex-1 mt-0 mb-0 space-y-6">
<li className="flex gap-x-3 gap-y-3">
<div className="shrink-0 mt-0.5 text-blue-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-zinc-200 font-semibold text-sm mb-1">Done-For-You Campaign Setup</h4>
<p className="leading-relaxed text-xs text-zinc-500">From ad copy to keyword targeting, we build everything for you.</p>
</div>
</li>
</ul><ul className="flex-1 my-3 space-y-6">
<li className="flex gap-3">
<div className="shrink-0 mt-0.5 text-blue-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-zinc-200 mb-1">Conversion-Ready Landing Pages </h4>
<p className="leading-relaxed text-xs text-zinc-500">Fast-loading, mobile-optimized pages designed to turn clicks into booked calls.
</p>
</div>
</li>
</ul><ul className="flex-1 mb-8 space-y-6">
<li className="flex gap-3">
<div className="shrink-0 mt-0.5 text-blue-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-zinc-200 mb-1">24/7 AI Optimization</h4>
<p className="leading-relaxed text-xs text-zinc-500">Machine learning adjusts bids, budgets, and targeting in real-time – even while you sleep.
</p>
</div>
</li>
</ul>
<div className="mt-auto pt-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20 -mx-8 -mb-8 px-8 pb-8 rounded-b-3xl">
<p className="leading-relaxed text-sm text-zinc-300 mt-4"><span className="text-blue-400 font-bold uppercase text-xs tracking-wide block mb-2">The Result</span> You’re live and generating leads in days, not months.
</p>
</div>
</div>

<div className="flex flex-col bg-zinc-900/30 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900/50 hover:border-orange-500/30 transition-all duration-300 group">
<div className="mb-6 flex items-center justify-between">
<div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-xl text-emerald-500 border border-emerald-500/20">
<svg className="lucide lucide-line-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Days 11-21</span>
</div>
<h3 className="text-xl font-bold text-white mb-2 font-manrope">Phase 3: Optimization</h3>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">The first 10 days are just the start — this is where the magic happens        </p><li className="flex gap-3 my-3 gap-x-3 gap-y-3">
<div className="shrink-0 mt-0.5 text-emerald-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-zinc-200 font-semibold text-sm mb-1">Real-Time Adjustments</h4>
<p className="text-xs text-zinc-500 leading-relaxed">We track every click, call, and form submission to fine-tune performance.</p>
</div>
</li>
<li className="flex gap-3 my-3 gap-x-3 gap-y-3">
<div className="shrink-0 text-emerald-500 mt-0.5">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-zinc-200 font-semibold text-sm mb-1">Full Transparency Dashboard</h4>
<p className="leading-relaxed text-xs text-zinc-500">See exactly where every dollar is going and how much revenue it’s bringing back.</p>
</div>
</li>
<li className="flex gap-3">
<div className="shrink-0 mt-0.5 text-emerald-500">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-zinc-200 font-semibold text-sm mb-1">Work-For-Free Guarantee</h4>
<p className="text-xs text-zinc-500 leading-relaxed">If we don’t deliver results by day 21, we keep working — for free — until we do.</p>
</div>
</li>
<div className="mt-auto pt-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20 -mx-8 -mb-8 px-8 pb-8 rounded-b-3xl">
<p className="text-sm text-zinc-300 leading-relaxed mt-4">
<span className="text-emerald-400 font-bold uppercase text-xs tracking-wide block mb-2">The Result</span>
          A fully optimized campaign that consistently produces high-ticket leads… without long contracts or guesswork.
        </p>
</div>
</div>
</div>

<div className="text-center max-w-2xl mx-auto">
<p className="text-zinc-300 text-lg mb-12 leading-relaxed font-normal">
       In 21 days, you’ll know – with data, not promises – whether your Google Ads can finally give you the predictable lead flow you’ve been chasing. And if they can’t, you won’t pay another dime until they do.
     </p>
<div className="flex flex-col items-center gap-6">
<a className="group inline-flex items-center justify-center hover:bg-zinc-200 transition-all uppercase hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] duration-300 text-sm font-bold text-slate-50 tracking-widest bg-[#EF5323] rounded-full px-8 py-5 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#apply">
  Apply For Your Free Strategy Session
  <svg className="ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
         Only 4 new clients accepted monthly
       </p>
</div>
</div>
</section>

<section className="border-y bg-zinc-900/20 w-full border-white/5 pt-24 pb-24" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-5xl text-3xl font-semibold font-manrope text-center mb-16">From Wasted Clicks &amp; Burned Money to <span className="text-orange-500">Predictable High-Ticket &amp; Qualified Leads
</span></h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group">
<div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-4xl font-bold text-white mb-2 font-manrope">
              313%
            </div>
<p className="text-sm text-zinc-400 mb-6 uppercase tracking-wide">
              Increase in Conversions
            </p>
<h4 className="text-lg font-bold text-white mb-2">Jewelmasters</h4>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Went from 20 failed campaigns to 3 laser-focused winners — cutting
              cost per conversion by 25%.
            </p>
<div className="border-t border-white/10 pt-4 mt-auto">
<p className="text-xs italic text-zinc-500">
                "Making it our primary source of new customers." - Cindy Vick
              </p>
</div>
</div>

<div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group">
<div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-4xl font-bold text-white mb-2 font-manrope">
              -22%
            </div>
<p className="text-sm text-zinc-400 mb-6 uppercase tracking-wide">
              Lower Ad Costs
            </p>
<h4 className="text-lg font-bold text-white mb-2">Sean Regan Law</h4>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Streamlined a high-converting system that doubled total calls and
              form submissions in 4 months.
            </p>
<div className="border-t border-white/10 pt-4 mt-auto">
<p className="text-xs text-zinc-500 italic">
                "Leads coming in are higher volume and better quality." - Sean
                Regan
              </p>
</div>
</div>

<div className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group">
<div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-4xl font-bold text-white mb-2 font-manrope">
              34%
            </div>
<p className="text-sm text-zinc-400 mb-6 uppercase tracking-wide">
              Conversion Rate
            </p>
<h4 className="text-lg font-bold text-white mb-2">NiceTintz</h4>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
              7x the industry average conversion rate. 330 Conversions at just
              $6.21 each in 6 months.
            </p>
<div className="border-t border-white/10 pt-4 mt-auto">
<p className="text-xs text-zinc-500 italic">
                "More leads, lower costs, phones ringing non-stop."
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="comparison">
<h2 className="text-3xl md:text-5xl font-semibold text-center mb-16 font-manrope">
        FUEL Results vs.
        <span className="text-zinc-600">The Others</span>
</h2>
<div className="rounded-3xl border border-white/10 overflow-hidden bg-black">

<div className="flex flex-col w-full font-sans">

<div className="grid grid-cols-1 md:grid-cols-3 bg-zinc-900/50 border-white/10 border-b p-6 gap-4">
<div className="text-zinc-500 font-medium text-sm flex items-center">Features</div>
<div className="text-orange-500 font-semibold text-lg md:text-center flex items-center md:justify-center tracking-tight">FUEL Results</div>
<div className="text-zinc-500 font-medium text-sm md:text-center flex items-center md:justify-center">Other Agencies</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Speed to Results</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">First leads in 7 days, full optimization in 21 days</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">60–90 days before meaningful results</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Guarantee</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Work for FREE if we don’t hit KPIs</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">No performance guarantees</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Campaign Setup Time</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Launch in 48 hours</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Weeks of onboarding &amp; delays</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Transparency</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Live reporting dashboard + competitor audit included</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Vague reports, no competitive insights</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Technology</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">24/7 AI bid &amp; budget optimization</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Manual adjustments, slow to react</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Specialization</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Built for $500K–$5M local businesses</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Focus on enterprise or generalist approach</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Ad Strategy</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Competitor-beating campaigns tailored to local market</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Generic ad templates across all clients</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Risk</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Month-to-month, no contracts</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Long-term contracts with penalties</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Creative &amp; Copy</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Persuasive, conversion-focused ads + landing page optimization</span>
    :justify-center items-start gap-2"&gt;
      <svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Standard ad copy, little to no CRO work</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Budget Efficiency</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Negative keyword optimization &amp; ROI tracking on every dollar</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Wasted spend on unqualified clicks</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Communication</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Direct access to strategist, 15-min weekly calls</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Account managers juggling dozens of clients</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 items-start md:items-center hover:bg-white/[0.02] transition-colors gap-4 group">
<div className="text-white font-medium text-sm">Proof of Results</div>
<div className="text-sm text-zinc-300 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-check-circle-2 text-emerald-500 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-left">Documented case studies with measurable ROI</span>
</div>
<div className="text-sm text-zinc-500 md:text-center flex md:justify-center items-start gap-2">
<svg className="lucide lucide-x-circle text-red-500/80 shrink-0 mt-0.5 md:mt-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-left">Vague claims, few verifiable results</span>
</div>
</div>
</div>

</div>
</section>

<section className="w-full max-w-4xl mx-auto px-6 py-24 border-t border-white/5" id="faq">
<h2 className="text-3xl font-semibold text-center mb-12 font-manrope">
        Frequently Asked Questions
      </h2>
<div className="grid gap-6">
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium">
<h3 className="text-lg">
              I’ve been burned before. How do I know you’re different?
            </h3>
<div className="white-space-nowrap text-zinc-500 group-open:-rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
            Most agencies lock you in and underdeliver. We do the opposite. Our
            21-Day Work-For-Free Guarantee means we take the risk. No long term
            contracts means we earn your business every single month.
          </p>
</details>
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium">
<h3 className="text-lg">How fast will I see results?</h3>
<div className="white-space-nowrap text-zinc-500 group-open:-rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
            We launch in 48 hours. First leads typically arrive in 7 days. Full
            optimization by Day 21.
          </p>
</details>
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium">
<h3 className="text-lg">Is this expensive?</h3>
<div className="white-space-nowrap text-zinc-500 group-open:-rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
            Not when you run the numbers. For most of our clients, just 1-2 new
            high-ticket sales covers our entire fee. Everything else is profit.
            We build profit systems, not expenses.
          </p>
</details>
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium">
<h3 className="text-lg">What happens if it doesn't work?</h3>
<div className="white-space-nowrap text-zinc-500 group-open:-rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
            If we don't hit our agreed targets in 21 days, we work for free
            until we do. You’ll never be left paying for a broken campaign.
          </p>
</details>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 mb-32 relative z-20 mt-12" id="apply">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 pt-4">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter font-manrope mb-6 leading-[1.1]">
            Your 21-Day
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Lead Machine
            </span>
            Starts Here.
          </h2>
<ul className="space-y-4 text-zinc-400 font-sans mt-8">
<li className="flex items-center gap-3">
<span className="text-emerald-500">✓</span>
              High-ticket leads in DAYS
            </li>
</ul>
</div>

<div className="lg:col-span-7 bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium" htmlFor="name">
                  Name
                </label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium" htmlFor="email">
                  Email
                </label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors font-sans text-lg" id="website" placeholder="Website URL" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-orange-500 font-sans uppercase tracking-wider font-medium" htmlFor="website">
                Website URL
              </label>
</div>
<div className="flex justify-end pt-4">
<button className="group flex items-center justify-center w-full md:w-auto gap-3 px-8 py-4 bg-orange-600 text-white font-bold tracking-widest uppercase text-xs hover:bg-orange-500 transition-all duration-300 font-manrope rounded-full shadow-lg shadow-orange-900/20" type="button">
                Apply For Free Strategy Session
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="relative w-full bg-zinc-950 pt-16 pb-8 border-t border-white/5 z-20">
<div className="w-full max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div>
<img alt="FUEL Results" className="h-12 w-auto object-contain" src="https://storage.googleapis.com/msgsndr/ybbZgmGJTpNCdjLzIzKR/media/6851c8a3bcc32d7669e85377.png"/>
<p className="text-zinc-500 text-sm mt-4 max-w-sm">
              High-performance Google Ads systems for local businesses. Built
              for speed, transparency, and ROI.
            </p>
</div>
<div className="mt-8 md:mt-0 flex flex-col items-end">
<p className="text-zinc-400 text-sm mb-2">
              Only 4 new clients accepted monthly.
            </p>
</div>
</div>
<div className="border-t border-white/5 pt-8">
<p className="text-[10px] text-zinc-600 leading-relaxed mb-4">
            Results Disclaimer: Results are not typical. Your results will vary
            based on your budget, market conditions, competition, and
            implementation. Testimonial Disclaimer: Client testimonials reflect
            the specific experiences of those customers and may not represent
            typical outcomes. Earnings Disclaimer: Fuel Results Marketing does
            not guarantee specific revenue increases or profit levels. Google
            Ads Compliance: All campaigns comply with Google Ads policies.
          </p>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-500">
              © 2025 Fuel Results Marketing. All rights reserved.
            </p>
<div className="flex gap-6">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
