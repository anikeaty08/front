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
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach(section => {
                observer.observe(section);
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-zinc-200/50 rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-pulse" style={{animationDuration: '10s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100/50 rounded-full blur-[120px] opacity-40 mix-blend-multiply"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-2xl">
<div className="flex items-center gap-2 p-2 pr-2 pl-6 rounded-full border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:bg-white/70 hover:scale-[1.01]">
<a className="font-semibold tracking-tighter text-lg mr-6 text-zinc-900 flex items-center gap-2" href="#">
<span className="w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center">
<span className="text-white text-[10px] font-bold">Z</span>
</span>
                ZOEY
            </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#solutions">Capability</a>
<a className="hover:text-zinc-900 transition-colors" href="#platform">Logic Core</a>
<a className="hover:text-zinc-900 transition-colors" href="#research">Results</a>
</div>
<div className="ml-4 pl-4 border-l border-zinc-200/50">
<a className="group relative flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide overflow-hidden hover:shadow-lg hover:shadow-zinc-500/20 transition-all duration-300" href="#">
<span className="relative z-10">Access System</span>
<svg aria-hidden="true" className="iconify relative z-10 group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0 bg-zinc-50">
<div className="absolute inset-0 opacity-40 grayscale mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/90"></div>
</div>

<div className="relative z-10 w-full max-w-5xl px-6">
<div className="mx-auto text-center animate-fade-in-slow">

<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-zinc-900 tracking-tighter mb-8">Delegate the Chaos <br/> <span className="text-zinc-400">Execute the Vision</span></h1>
<p className="text-xl md:text-2xl text-zinc-600 font-normal mb-12 tracking-tight max-w-2xl mx-auto leading-relaxed">
                    Stop chasing leads. Zoey handles the outreach, the booking, and the follow-up 24/7. You just take the meeting.
                </p>
<button className="group relative px-10 py-5 rounded-full bg-zinc-900 text-white font-medium text-base transition-all duration-500 hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.8)] border border-blue-500/30 flex items-center gap-3 mx-auto overflow-hidden">
<span className="relative z-10">Hire Zoey Today</span>
<svg aria-hidden="true" className="iconify relative z-10 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:sparkles" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
</button>
</div>
</div>
</header>

<section className="relative py-24 md:py-32 px-6 border-b border-zinc-200/50 bg-white/50 backdrop-blur-sm z-10">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="fade-in-section order-2 md:order-1">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-tight">
                        The Ceiling is Real.
                    </h2>
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-8">
                        You didn't enter this industry to be a secretary. But between the texts and the chasing, the mission got lost.
                    </p>
<p className="text-xl md:text-2xl font-medium text-blue-600 italic tracking-tight">
                        "Volume breaks people. It fuels Zoey."
                    </p>
</div>

<div className="fade-in-section order-1 md:order-2 perspective-1000">
<div className="relative w-full aspect-video rounded-[2rem] bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-2xl border border-white/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden group hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-700">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-60 pointer-events-none"></div>

<div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

<div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/40 bg-white/10 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-zinc-50/50 border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto text-center">
<div className="mb-20 fade-in-section">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900">
                    Speak Only to the Ready.
                </h2>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 fade-in-section">

<div className="w-full md:w-72 h-48 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-zinc-200/50 flex flex-col items-center justify-center p-8 group hover:scale-[1.02] transition-transform duration-500">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-zinc-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<span className="font-medium text-zinc-600 tracking-tight group-hover:text-zinc-900">Inbound Traffic</span>
</div>

<div className="text-zinc-300 rotate-90 md:rotate-0 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="w-full md:w-72 h-48 rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-100 shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<span className="relative z-10 font-semibold text-zinc-900 tracking-tight">Zoey's Logic Core</span>
</div>

<div className="text-zinc-300 rotate-90 md:rotate-0 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="w-full md:w-72 h-48 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-zinc-200/50 flex flex-col items-center justify-center p-8 group hover:scale-[1.02] transition-transform duration-500">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-green-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar-check-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4m8-4v4m5 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-5 10l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-medium text-zinc-600 tracking-tight group-hover:text-zinc-900">Qualified Appointments</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

<div className="fade-in-section relative order-1">

<div className="relative mx-auto w-full max-w-[360px] h-[700px] rounded-[3rem] border-[8px] border-zinc-100 bg-white shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15)] overflow-hidden transform hover:-translate-y-4 transition-transform duration-700 ease-out">

<div className="absolute inset-0 bg-zinc-50 flex flex-col">

<div className="h-14 w-full bg-white border-b border-zinc-100 flex items-center justify-between px-6">
<div className="w-12 h-3 rounded-full bg-zinc-100"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>

<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 flex items-center justify-center mb-6 relative z-10">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:activity" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-2">Pulse-Animation-Slot</h4>
<div className="flex gap-1">
<div className="w-1 h-4 bg-zinc-200 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
<div className="w-1 h-6 bg-zinc-300 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-3 bg-zinc-200 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 h-5 bg-zinc-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
</div>
</div>

<div className="p-6 bg-white border-t border-zinc-100">
<div className="w-full h-12 bg-zinc-100 rounded-xl"></div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
</div>
</div>

<div className="fade-in-section order-2">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 mb-8">
                    Zero Latency.
                </h2>
<p className="text-xl text-zinc-500 leading-relaxed mb-10">
                    While you sleep, The Engine is awake. A digital workforce that ensures no hand goes unshaken. Response times are measured in milliseconds, not hours.
                </p>
<button className="group inline-flex items-center gap-3 text-sm font-semibold text-zinc-900 border-b border-zinc-200 pb-1 hover:border-zinc-900 transition-all">
                    See the Pulse Engine
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 fade-in-section text-center">

<div className="md:p-20 overflow-hidden group border-white/10 border rounded-[2.5rem] pt-12 pr-12 pb-12 pl-12 relative shadow-2xl backdrop-blur-xl">

<div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-16">
                        No Lead Left Behind.
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="md:text-right md:border-b-0 md:border-r md:pb-0 md:pr-12 text-center border-white/10 border-b pb-12">
<div className="text-sm text-zinc-400 uppercase tracking-widest font-medium mb-3">Dormant Leads Reactivated</div>
<div className="text-5xl md:text-6xl font-light text-white tracking-tight">1,420</div>
</div>
<div className="text-center md:text-left pt-2 md:pt-0 md:pl-4">
<div className="text-sm text-zinc-400 uppercase tracking-widest font-medium mb-3">Revenue Recovered</div>

<div className="text-5xl md:text-6xl font-semibold tracking-tight gold-shimmer-text">
                                $45,000
                            </div>
</div>
</div>
<div className="mt-16 pt-10 border-t border-white/5">
<p className="text-lg text-zinc-400 font-light">Relationships revived. Trust restored.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50/50 relative">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="max-w-2xl mx-auto mb-20 fade-in-section">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 mb-6">
                    Scale Without The Chaos.
                </h2>
<p className="text-xl text-zinc-500 leading-relaxed">
                    True growth is duplication. Equip your downline with the same power that drives you.
                </p>
</div>

<div className="relative max-w-4xl mx-auto h-[500px] md:h-[400px] flex items-center justify-center fade-in-section">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 w-full">

<div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-xl shadow-zinc-200/50 flex items-center justify-between transform md:translate-x-8 md:translate-y-8 z-0 opacity-60 scale-95">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="text-left">
<div className="text-xs font-bold text-zinc-900">Agent Unit Active</div>
<div className="text-[10px] text-zinc-400 font-mono">ID: 8829-A</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-xl shadow-zinc-200/50 flex items-center justify-between transform md:-translate-x-8 md:translate-y-8 z-10 opacity-80 scale-95">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="text-left">
<div className="text-xs font-bold text-zinc-900">Agent Unit Active</div>
<div className="text-[10px] text-zinc-400 font-mono">ID: 8829-B</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-xl shadow-zinc-200/50 flex items-center justify-between transform md:translate-x-8 md:-translate-y-4 z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="text-left">
<div className="text-xs font-bold text-zinc-900">Agent Unit Active</div>
<div className="text-[10px] text-zinc-400 font-mono">ID: 8829-C</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-xl shadow-zinc-200/50 flex items-center justify-between transform md:-translate-x-8 md:-translate-y-4 z-30 ring-4 ring-blue-500/10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="text-left">
<div className="text-xs font-bold text-zinc-900">Agent Unit Active</div>
<div className="text-[10px] text-zinc-400 font-mono">ID: 8829-D (Primary)</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-zinc-200/50">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 fade-in-section">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-4">
                    The Time Collapse.
                </h2>
<p className="text-lg text-zinc-500">Efficiency measured in orders of magnitude.</p>
</div>

<div className="space-y-8 fade-in-section bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-200/60">

<div className="relative">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-semibold text-zinc-600 uppercase tracking-wide">Standard Assistant</span>
<span className="font-mono text-zinc-900 font-medium">40 Hours/Week</span>
</div>
<div className="w-full h-8 bg-zinc-100 rounded-md overflow-hidden relative">
<div className="absolute top-0 left-0 h-full w-full bg-zinc-300 rounded-md flex items-center justify-end pr-3">
<span className="text-[10px] text-zinc-500 font-mono opacity-50">100% Load</span>
</div>
</div>
</div>

<div className="relative">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-semibold text-blue-600 uppercase tracking-wide flex items-center gap-2">
                            Assistant + Zoey
                            <svg aria-hidden="true" className="iconify animate-pulse iconify--lucide" data-icon="lucide:zap" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="font-mono text-blue-600 font-bold">5 Hours/Week</span>
</div>

<div className="w-full h-8 bg-zinc-100 rounded-md overflow-hidden relative">

<div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center">
<div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center fade-in-section">
<p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    Result: Your staff is now free to act as Executive Assistants for the Hierarchy, managing unlimited volume.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0B0F19] text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-20 fade-in-section">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    System Status: Online
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">
                    Protocol: StanceXSystems.
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16 fade-in-section">

<div className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col items-center justify-center min-h-[300px] hover:bg-white/[0.05] transition-colors group">
<svg aria-hidden="true" className="iconify text-zinc-500 mb-6 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:box" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Producer Core</h3>
<p className="text-sm text-zinc-500 text-center max-w-xs">Essential automation for individual high-performers.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border gold-border-glow flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
<div className="absolute top-0 right-0 bg-amber-500/10 text-amber-500 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl border-b border-l border-amber-500/20">Recommended</div>
<svg aria-hidden="true" className="iconify text-amber-500 mb-6 iconify--lucide" data-icon="lucide:layers" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Builder Command</h3>
<p className="text-sm text-zinc-400 text-center max-w-xs mb-4">Includes Recruitment Logic, Revival Engines, &amp; Autonomous Ops.</p>
</div>
</div>
<div className="fade-in-section">
<button className="w-full py-6 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-lg tracking-widest transition-all duration-300 matrix-glow hover:text-green-400 hover:border-green-500/50 hover:bg-black relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] duration-1000 group-hover:bg-[position:200%_0,0_0]"></div>
<span className="relative z-10">[ INITIALIZE STANCEXSYSTEMS ]</span>
</button>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12 text-center">
<div className="max-w-xl mx-auto px-6 fade-in-section">
<p className="text-sm text-zinc-500 font-medium tracking-tight">
                The future belongs to those who automate the mundane.
            </p>
</div>
</footer>



    </>
  );
}
