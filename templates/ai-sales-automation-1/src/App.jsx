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



      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };
          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal-window').forEach(section => {
              observer.observe(section);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-50 pointer-events-none select-none overflow-hidden bg-[#F5F5F7]">

<div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-[#E0F7FA] opacity-80 mix-blend-multiply blur-[100px] animate-blob"></div>

<div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-white opacity-100 mix-blend-multiply blur-[100px] animate-blob animation-delay-2000"></div>

<div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#F5F5F7] opacity-80 mix-blend-multiply blur-[100px] animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6">
<div className="h-[56px] flex items-center justify-between pl-4 pr-1.5 rounded-full bg-white/70 backdrop-blur-[60px] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/60 transition-all hover:bg-white/80">
<a className="flex items-center gap-3 shrink-0 group" href="#">
<span className="w-7 h-7 bg-[#1d1d1f] rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
<span className="text-white text-[10px] font-bold">S</span>
</span>
<span className="font-medium tracking-tight text-sm text-[#1d1d1f]">
            StanceXSystems
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#86868b] tracking-normal">
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#capabilities">
            Capabilities
          </a>
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#logic">
            Logic Core
          </a>
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#results">
            Results
          </a>
</div>
<div className="shrink-0">
<a className="flex items-center gap-1.5 bg-[#1d1d1f] text-white px-5 h-10 rounded-full text-xs font-semibold tracking-wide hover:bg-black transition-all hover:scale-[1.02] shadow-md hover:shadow-lg" href="#access">
<span>Access System</span>
<span className="opacity-70 font-normal ml-0.5">+</span>
</a>
</div>
</div>
</nav>

<header className="min-h-screen flex w-full pt-36 px-4 pb-20 relative items-center justify-center">
<div className="vision-window w-full max-w-6xl mx-auto p-8 md:p-12 overflow-visible reveal-window is-visible">

<div className="absolute top-5 left-5 flex gap-2 z-20 opacity-80 hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5 shadow-sm"></div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-6 relative z-10 text-left min-h-[520px]">

<div className="flex flex-col items-start relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-white/60 shadow-sm mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[11px] font-semibold text-[#86868b] tracking-wide uppercase">
                System Online
              </span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-[#1d1d1f] tracking-tighter mb-8 leading-[1.05]">
              Delegate the Chaos.
              <br/>
<span className="text-[#86868b] opacity-60">Execute the Vision.</span>
</h1>
<p className="text-lg lg:text-xl leading-relaxed font-medium text-[#86868b] tracking-tight max-w-lg mb-10">
              Your downline needs a system, not just motivation. Zoey automates
              recruitment, production, and retention for your entire hierarchy.
            </p>
<button className="group px-8 py-4 rounded-full bg-[#007AFF] text-white font-medium text-[15px] transition-all hover:bg-[#0071eb] hover:scale-[1.02] shadow-[0_0_30px_rgba(0,122,255,0.4)] hover:shadow-[0_0_50px_rgba(0,122,255,0.5)] flex items-center gap-2">
<span>Hire Zoey Today</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>

<div className="relative w-full h-full min-h-[400px] perspective-[1000px] flex items-center justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[90px] animate-pulse pointer-events-none z-0"></div>

<div className="relative z-10 w-full max-w-[420px] bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[30px] p-6 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)] animate-float-card transition-transform duration-700 ease-out hover:rotate-1">
<div className="flex items-center justify-between mb-8 border-b border-white/30 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-white/60 shadow-sm flex items-center justify-center">
<span className="iconify text-[#1d1d1f]" data-icon="lucide:activity" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-bold text-[#1d1d1f] tracking-tight">
                      Live Activity
                    </h3>
<p className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">
                      Real-time Stream
                    </p>
</div>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-gray-300/50"></div>
<div className="w-2 h-2 rounded-full bg-gray-300/50"></div>
</div>
</div>
<div className="space-y-4">

<div className="interactive-card flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white/60 shadow-sm cursor-default">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full bg-green-50 text-green-600">
<span className="iconify" data-icon="lucide:user-check" data-width="18"></span>
</div>
<span className="text-sm font-semibold text-[#1d1d1f] tracking-tight">
                      Lead #8821
                    </span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[11px] font-bold text-green-600 tracking-tight">
                      Qualified
                    </span>
</div>
</div>

<div className="interactive-card flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white/60 shadow-sm cursor-default">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full bg-blue-50 text-blue-600">
<span className="iconify" data-icon="lucide:calendar-check-2" data-width="18"></span>
</div>
<span className="text-sm font-semibold text-[#1d1d1f] tracking-tight">
                      Booking Appt
                    </span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-[11px] font-bold text-blue-600 tracking-tight">
                      Confirmed
                    </span>
</div>
</div>

<div className="interactive-card flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white/60 shadow-sm cursor-default">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full bg-amber-50 text-amber-600">
<span className="iconify" data-icon="lucide:rotate-ccw" data-width="18"></span>
</div>
<span className="text-sm font-semibold text-[#1d1d1f] tracking-tight">
                      Reviving Lead
                    </span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
<span className="text-[11px] font-bold text-amber-600 tracking-tight">
                      Success
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 px-4">
<div className="vision-window md:p-16 overflow-hidden reveal-window max-w-6xl mx-auto pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mt-8">
<div className="order-2 md:order-1">
<h2 className="md:text-5xl text-3xl font-bold text-[#1d1d1f] tracking-tighter mb-6">
              The Ceiling is Real.
            </h2>
<p className="md:text-xl leading-relaxed text-lg font-medium text-[#86868b] tracking-tight max-w-md">
              Volume breaks people. It fuels Zoey. The more leads you pour in,
              the smarter the system gets.
            </p>
</div>
<div className="order-1 md:order-2 flex flex-col items-center justify-center relative py-12">

<div className="interactive-card relative z-30 w-full max-w-sm bg-white/60 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(239,68,68,0.2)] flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-red-50/80 flex items-center justify-center shrink-0 text-red-500 border border-red-100/50">
<span className="iconify" data-icon="lucide:phone-missed" data-width="24"></span>
</div>
<div>
<h3 className="text-base font-bold text-[#1d1d1f] tracking-tight">
                  Missed Call
                </h3>
<p className="text-xs text-red-500 font-semibold mt-0.5">
                  12 mins ago
                </p>
</div>
</div>
<div className="interactive-card relative z-20 w-full max-w-sm bg-white/60 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(239,68,68,0.15)] flex items-center gap-4 -mt-8 scale-[0.95]">
<div className="w-12 h-12 rounded-full bg-amber-50/80 flex items-center justify-center shrink-0 text-amber-500 border border-amber-100/50">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="24"></span>
</div>
<div>
<h3 className="text-base font-bold text-[#1d1d1f] tracking-tight">
                  Calendar Conflict
                </h3>
<p className="text-xs text-[#86868b] font-semibold mt-0.5">
                  Action Required
                </p>
</div>
</div>
<div className="interactive-card relative z-10 w-full max-w-sm bg-white/60 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(239,68,68,0.1)] flex items-center gap-4 -mt-8 scale-[0.90]">
<div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0 text-blue-500 border border-blue-100/50">
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</div>
<div>
<h3 className="text-base font-bold text-[#1d1d1f] tracking-tight">
                  Quote Request
                </h3>
<p className="text-xs text-blue-500 font-bold mt-0.5">Unread</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4" id="capabilities">
<div className="vision-window max-w-6xl mx-auto p-8 md:p-12 relative overflow-hidden reveal-window">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="text-center mb-16 mt-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100/50 backdrop-blur-md mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[10px] font-semibold text-blue-600 tracking-wide uppercase">
              System Architecture
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-4">
            Zero Latency Operations.
          </h2>
<p className="text-lg text-[#86868b] font-medium tracking-tight max-w-2xl mx-auto">
            A suite of autonomous engines working in parallel to ensure speed,
            scale, and recovery.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">

<div className="group interactive-card rounded-[32px] p-8 md:col-span-1 md:row-span-2 flex flex-col justify-between relative overflow-hidden bg-white/40 backdrop-blur-md">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<span className="iconify text-green-600" data-icon="lucide:activity" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-2">
                Pulse Engine
              </h3>
<p className="text-[15px] text-[#86868b] font-medium leading-relaxed">
                Continuous background monitoring detecting lead signals in
                real-time.
              </p>
</div>

<div className="absolute inset-0 top-[20%] flex items-center justify-center opacity-80 pointer-events-none">
<div className="relative w-64 h-64">
<div className="absolute inset-0 rounded-full border border-green-500/10"></div>
<div className="absolute inset-[15%] rounded-full border border-green-500/10"></div>
<div className="absolute inset-[30%] rounded-full border border-green-500/20"></div>
<div className="absolute inset-0 rounded-full radar-sweep-gradient opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

<span className="block w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] relative z-20"></span>
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full radar-dot z-10"></span>
</div>

<div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-sm opacity-60"></div>
</div>
</div>
</div>

<div className="group interactive-card rounded-[32px] p-8 md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden bg-white/40 backdrop-blur-md">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<span className="iconify text-blue-600" data-icon="lucide:refresh-cw" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-2">
                Revival Core
              </h3>
<p className="text-[15px] text-[#86868b] font-medium leading-relaxed">
                Automated reactivation sequences turning dormant contacts into
                revenue.
              </p>
</div>
<div className="relative w-32 h-32 flex items-center justify-center shrink-0">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white rounded-full opacity-50 blur-xl"></div>
<div className="relative w-20 h-20 bg-white rounded-2xl border border-white/60 shadow-lg flex items-center justify-center overflow-hidden">

<style>
                  .anim-icon-1 { animation: icon-swap-1 6s infinite; } .anim-icon-2 { animation: icon-swap-2 6s infinite; } @keyframes icon-swap-1 { 0%,45%{opacity:1;transform:scale(1)} 50%,95%{opacity:0;transform:scale(0.8) rotate(15deg)} 100%{opacity:1;transform:scale(1)} } @keyframes icon-swap-2 { 0%,45%{opacity:0;transform:scale(0.8) rotate(-15deg)} 50%,95%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(0.8) rotate(-15deg)} }
                </style>
<div className="absolute inset-0 flex items-center justify-center anim-icon-1">
<span className="iconify text-gray-400" data-icon="lucide:recycle" data-width="36"></span>
</div>
<div className="absolute inset-0 flex items-center justify-center anim-icon-2">
<span className="iconify text-green-600" data-icon="lucide:circle-dollar-sign" data-width="36"></span>
</div>
</div>
</div>
</div>

<div className="group interactive-card rounded-[32px] p-8 md:col-span-1 flex flex-col justify-between relative overflow-hidden min-h-[240px] bg-white/40 backdrop-blur-md">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<span className="iconify text-purple-600" data-icon="lucide:git-branch" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-2">
                Infinite Scale
              </h3>
<p className="text-[15px] text-[#86868b] font-medium leading-relaxed">
                Fractal duplication of successful agent behaviors.
              </p>
</div>
<div className="absolute bottom-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<span className="iconify text-purple-900" data-icon="lucide:network" data-width="96"></span>
</div>
</div>

<div className="group interactive-card rounded-[32px] p-8 md:col-span-1 flex flex-col justify-between relative overflow-hidden min-h-[240px] bg-white/40 backdrop-blur-md">
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur border border-white/50 flex items-center justify-center mb-4 shadow-sm">
<span className="iconify text-amber-600" data-icon="lucide:wallet" data-width="20"></span>
</div>
<h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-1">
                Total Recovered
              </h3>
<p className="text-[15px] text-[#86868b] font-medium leading-relaxed">
                Lost revenue recaptured by Zoey systems.
              </p>
</div>
<div className="mt-6 relative z-10 flex items-baseline">
<span className="text-4xl lg:text-5xl font-bold tracking-tight text-shimmer">
                $450k+
              </span>
</div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-[50px] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4" id="logic">
<div className="max-w-6xl mx-auto vision-window p-8 md:p-16 relative overflow-hidden reveal-window">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="text-center mb-16 mt-8">
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f]">
            Speak Only to the Ready.
          </h2>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<div className="interactive-card w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm flex flex-col items-center justify-center p-6">
<div className="w-14 h-14 rounded-2xl bg-gray-100/80 flex items-center justify-center mb-4 text-[#86868b]">
<span className="iconify" data-icon="lucide:users" data-width="28"></span>
</div>
<span className="font-semibold text-[#1d1d1f] tracking-tight text-base">
              Raw Leads
            </span>
</div>
<div className="text-[#86868b]/30 rotate-90 md:rotate-0">
<span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
<div className="interactive-card w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-white/70 backdrop-blur-xl border-2 border-blue-400/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#007AFF] flex items-center justify-center mb-4 relative">
<span className="absolute inset-0 bg-blue-400/20 rounded-2xl animate-ping opacity-20"></span>
<span className="iconify relative z-10" data-icon="lucide:cpu" data-width="28"></span>
</div>
<span className="font-semibold text-[#1d1d1f] tracking-tight text-base">
              Zoey Filter
            </span>
</div>
<div className="text-[#86868b]/30 rotate-90 md:rotate-0">
<span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
<div className="interactive-card w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm flex flex-col items-center justify-center p-6">
<div className="w-14 h-14 rounded-2xl bg-gray-100/80 flex items-center justify-center mb-4 text-[#86868b]">
<span className="iconify" data-icon="lucide:badge-check" data-width="28"></span>
</div>
<span className="font-semibold text-[#1d1d1f] tracking-tight text-base">
              Booked Calendar
            </span>
</div>
</div>
</div>
</section>

<section className="py-12 px-4">
<div className="max-w-6xl mx-auto vision-window p-8 md:p-16 relative overflow-hidden reveal-window scale-section">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="max-w-2xl mx-auto mb-16 text-center mt-8">
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-6">
            Scale Without The Chaos.
          </h2>
<p className="text-lg text-[#86868b] font-medium leading-relaxed">
            True growth is duplication. Equip your downline with the same power
            that drives you.
          </p>
</div>
<div className="relative max-w-4xl mx-auto h-[450px] md:h-[350px] flex items-center justify-center">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full">

<div className="agent-card-init agent-card-1 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white shadow-lg flex items-center justify-between absolute left-0 right-0 md:relative z-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#007AFF] flex items-center justify-center">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
<div>
<div className="text-sm font-bold text-[#1d1d1f]">
                    Agent Unit 8829-A
                  </div>
<div className="text-[10px] text-[#86868b] font-mono">Active</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>

<div className="agent-card-init agent-card-2 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white shadow-lg flex items-center justify-between absolute left-0 right-0 md:relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#007AFF] flex items-center justify-center">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
<div>
<div className="text-sm font-bold text-[#1d1d1f]">
                    Agent Unit 8829-B
                  </div>
<div className="text-[10px] text-[#86868b] font-mono">Active</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>

<div className="agent-card-init agent-card-3 bg-white rounded-2xl p-5 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-between absolute left-0 right-0 md:relative z-20 ring-4 ring-blue-500/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#007AFF] text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
<span className="iconify" data-icon="lucide:user-check" data-width="20"></span>
</div>
<div>
<div className="text-sm font-bold text-[#1d1d1f]">
                    Agent Unit 8829-D (Primary)
                  </div>
<div className="text-[10px] text-[#86868b] font-mono">
                    Connected
                  </div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4">
<div className="max-w-4xl mx-auto vision-window p-8 md:p-16 relative overflow-hidden reveal-window">
<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="absolute top-5 right-5 z-20">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200/60 text-[10px] font-bold text-green-600 shadow-sm backdrop-blur-sm">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
<span>Performance: +800%</span>
</div>
</div>
<div className="text-center mb-16 mt-8">
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-4">
            Efficiency Metrics.
          </h2>
<p className="text-lg text-[#86868b] font-medium">
            Efficiency measured in orders of magnitude.
          </p>
</div>
<div className="space-y-10 bg-white/50 p-8 md:p-12 rounded-[32px] border border-white/60 shadow-inner">
<div>
<div className="flex justify-between items-end mb-3">
<span className="text-xs font-bold text-[#86868b] uppercase tracking-wide">
                Human Admin
              </span>
<span className="font-mono text-red-500 font-bold">40 Hours</span>
</div>
<div className="w-full h-10 bg-gray-100/50 rounded-full overflow-hidden relative shadow-inner border border-gray-200/50">
<div className="absolute top-0 left-0 h-full w-full bg-red-400 rounded-full shadow-[0_0_15px_rgba(248,113,113,0.3)]"></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-3">
<span className="text-xs font-bold text-[#007AFF] uppercase tracking-wide flex items-center gap-2">
                StanceX System
                <span className="iconify" data-icon="lucide:zap" data-width="12"></span>
</span>
<span className="font-mono text-[#007AFF] font-bold">5 Hours</span>
</div>
<div className="w-full h-10 bg-gray-100/50 rounded-full overflow-hidden relative shadow-inner border border-gray-200/50">
<div className="absolute top-0 left-0 h-full w-[15%] bg-[#007AFF] rounded-full shadow-[0_0_15px_rgba(0,122,255,0.4)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 mb-20 relative z-20" id="access">
<div className="max-w-5xl mx-auto bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 md:p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] reveal-window">

<div className="absolute top-6 left-6 flex gap-2 z-20 opacity-80">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
</div>

<div className="text-center mb-16 mt-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-[10px] font-bold text-green-400 uppercase tracking-widest mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            System Status: Online
          </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">
            Protocol: StanceXSystems
          </h2>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">

<div className="group relative p-10 rounded-[24px] bg-[#0A0A0A] border border-amber-500/40 shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] hover:shadow-[0_0_50px_-5px_rgba(245,158,11,0.3)] transition-all duration-300">
<div className="w-14 h-14 rounded-full bg-amber-900/20 flex items-center justify-center mb-6 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:briefcase" data-width="28"></span>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              Producer Core
            </h3>
<p className="text-sm text-gray-400 font-medium leading-relaxed max-w-xs">
              Essential automation for individual high-performers.
            </p>
</div>

<div className="group relative p-10 rounded-[24px] bg-[#0A0A0A] border border-blue-500/40 shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden">

<div className="absolute top-0 right-0 bg-[#007AFF] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest z-20">
              Recommended
            </div>
<div className="w-14 h-14 rounded-full bg-blue-900/20 flex items-center justify-center mb-6 text-[#007AFF] border border-blue-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="iconify" data-icon="lucide:layers" data-width="28"></span>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight relative z-10">
              Builder Command
            </h3>
<p className="text-sm text-gray-400 font-medium leading-relaxed mb-4 relative z-10">
              Includes Recruitment Logic, Revival Engines, &amp; Autonomous Ops.
            </p>

<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
</div>

<button className="w-full py-5 rounded-xl bg-black text-green-400 font-bold text-lg tracking-wide border border-green-500/50 matrix-glow hover:text-green-300 transition-all flex items-center justify-center gap-3 relative overflow-hidden group">
<span className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors duration-300"></span>
<span className="relative z-10">INITIALIZE SYSTEM</span>
<span className="iconify relative z-10" data-icon="lucide:power" data-width="20"></span>
</button>
</div>
</section>
<footer className="w-full border-t border-gray-200 bg-white/60 backdrop-blur-xl pt-16 pb-32 px-6 md:px-12 relative z-10">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4 group" href="#">
<span className="w-6 h-6 bg-[#1d1d1f] rounded-full flex items-center justify-center shadow-sm">
<span className="text-white text-[9px] font-bold">S</span>
</span>
<span className="font-bold tracking-tight text-sm text-[#1d1d1f]">
                StanceXSystems
              </span>
</a>
<p className="text-xs text-[#86868b] leading-relaxed max-w-[160px]">
              Redefining the standards of digital infrastructure.
            </p>
</div>

<div>
<h4 className="font-bold text-[#1d1d1f] text-sm mb-4">Product</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Pulse Engine
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Revival Core
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Logic Filter
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Security
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-[#1d1d1f] text-sm mb-4">Company</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  About Zoey
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Methodology
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-[#1d1d1f] text-sm mb-4">Legal</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Data Processing (GDPR)
                </a>
</li>
<li>
<a className="text-sm text-[#86868b] hover:text-[#007AFF] transition-colors" href="#">
                  Accessibility
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-[#1d1d1f] text-sm mb-4">Social</h4>
<div className="flex items-center gap-4 flex-wrap">
<a className="text-[#86868b] hover:text-[#1d1d1f] transition-colors hover:scale-110" href="#">
<span className="iconify" data-icon="logos:google-icon" data-width="18"></span>
</a>
<a className="text-[#86868b] hover:text-[#1d1d1f] transition-colors hover:scale-110" href="#">
<span className="iconify" data-icon="logos:facebook" data-width="18"></span>
</a>
<a className="text-[#86868b] hover:text-[#1d1d1f] transition-colors hover:scale-110" href="#">
<span className="iconify" data-icon="skill-icons:instagram" data-width="18"></span>
</a>
<a className="text-[#86868b] hover:text-[#1d1d1f] transition-colors hover:scale-110" href="#">
<span className="iconify text-black" data-icon="simple-icons:threads" data-width="18"></span>
</a>
<a className="text-[#86868b] hover:text-[#1d1d1f] transition-colors hover:scale-110" href="#">
<span className="iconify" data-icon="logos:tiktok-icon" data-width="18"></span>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#86868b]">
            © 2025 StanceX Systems Inc. All rights reserved. | Designed in the
            Future.
          </p>
</div>
</div>
</footer>

<footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
<div className="pointer-events-auto flex items-center gap-6 px-4 py-3 rounded-[2.5rem] bg-white/60 backdrop-blur-[50px] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-white/30 transition-all duration-300 hover:bg-white/70">

<div className="hidden md:flex items-center gap-4 pl-3">
<span className="text-[11px] font-semibold text-[#86868b] tracking-tight font-mono">
            StanceX OS v1.0
          </span>
<div className="w-px h-4 bg-black/10"></div>
</div>

<div className="flex items-center gap-2.5">

<a className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm border border-white/20 transition-all duration-300 cubic-bezier(0.25, 1, 0.5, 1) hover:scale-125 hover:-translate-y-2 hover:shadow-xl hover:z-10" href="#">
<span className="iconify" data-icon="logos:google-icon" data-width="22"></span>
</a>

<a className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm border border-white/20 transition-all duration-300 cubic-bezier(0.25, 1, 0.5, 1) hover:scale-125 hover:-translate-y-2 hover:shadow-xl hover:z-10" href="#">
<span className="iconify" data-icon="logos:facebook" data-width="22"></span>
</a>

<a className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm border border-white/20 transition-all duration-300 cubic-bezier(0.25, 1, 0.5, 1) hover:scale-125 hover:-translate-y-2 hover:shadow-xl hover:z-10" href="#">
<span className="iconify" data-icon="skill-icons:instagram" data-width="22"></span>
</a>

<a className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm border border-white/20 transition-all duration-300 cubic-bezier(0.25, 1, 0.5, 1) hover:scale-125 hover:-translate-y-2 hover:shadow-xl hover:z-10" href="#">
<span className="iconify text-black" data-icon="simple-icons:threads" data-width="20"></span>
</a>

<a className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm border border-white/20 transition-all duration-300 cubic-bezier(0.25, 1, 0.5, 1) hover:scale-125 hover:-translate-y-2 hover:shadow-xl hover:z-10" href="#">
<span className="iconify" data-icon="logos:tiktok-icon" data-width="20"></span>
</a>
</div>

<div className="hidden md:flex items-center gap-4 pr-3">
<div className="w-px h-4 bg-black/10"></div>
<div className="flex items-center gap-2 whitespace-nowrap">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#34c759]"></span>
</span>
<span className="text-[10px] font-bold text-[#1d1d1f] tracking-wide uppercase">
              Systems Online
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
