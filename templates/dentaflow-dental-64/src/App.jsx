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



        (function() {
            const card = document.getElementById('anim-card-aura-emig3dihp3928zo58');
            if (!card) return;
            
            const bars = card.querySelectorAll('.bar-anim');
            const scanLine = card.querySelector('.scan-line');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Reveal Main Card
                        card.classList.remove('opacity-0', 'translate-y-8');
                        
                        // Trigger Bar Growth
                        requestAnimationFrame(() => {
                            bars.forEach(bar => bar.classList.remove('scale-y-0'));
                        });

                        // Enable Scan Line
                        setTimeout(() => {
                            if(scanLine) scanLine.classList.remove('opacity-0');
                        }, 800);
                        
                        observer.unobserve(card);
                    }
                });
            }, { threshold: 0.4 });
            
            observer.observe(card);
        })();
    


        lucide.createIcons();
    
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
      

<div className="fixed inset-x-0 top-0 h-32 z-20 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent backdrop-blur-[2px]"></div>
</div>
<div className="min-h-screen overflow-hidden bg-white max-w-[1600px] mr-auto ml-auto relative shadow-2xl">

<nav className="flex z-50 max-w-[1600px] mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative right-0 left-0 justify-center">
<div className="glass-pill rounded-full px-2 py-2 pl-6 flex items-center gap-12 shadow-xl shadow-black/5">

<div className="flex bg-center w-[180px] h-[24px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40faf934-f200-475d-a74b-22cf75db628c_320w.webp)] bg-cover gap-x-2 gap-y-2 items-center">
</div>

<div className="hidden md:flex text-sm font-medium text-slate-600 gap-x-8 gap-y-8 items-center">
<a className="hover:text-blue-600 transition-colors font-sans" href="#" style={{}}>Treatments</a>
<a className="hover:text-blue-600 transition-colors font-sans" href="#" style={{}}>Technology</a>
<a className="hover:text-blue-600 transition-colors font-sans" href="#" style={{}}>Doctors</a>
<a className="hover:text-blue-600 transition-colors font-sans" href="#" style={{}}>Reviews</a>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<a className="hover:bg-slate-800 transition-all flex items-center gap-2 text-sm font-medium text-white bg-slate-900 w-[140px] rounded-full pt-2.5 pr-6 pb-2.5 pl-6 font-sans" href="#" style={{}}>
                        Book Visit <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<header className="relative w-full h-[95vh] md:h-[900px] overflow-hidden group">

<img alt="Modern Dental Clinic" className="absolute inset-0 w-full h-full object-cover brightness-[0.9] group-hover:scale-105 transition-transform duration-[2s] ease-in-out" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=3840&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/80"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-transparent"></div>

<div className="absolute top-1/3 right-[15%] hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur pl-2 pr-4 py-2 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
<svg className="lucide lucide-scan-face w-4 h-4" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans" style={{}}>Technology</span>
<span className="text-xs font-semibold text-slate-900 font-sans" style={{}}>3D Oral Scanning</span>
</div>
</div>
<div className="absolute bottom-1/3 left-[10%] hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur pl-2 pr-4 py-2 rounded-full shadow-lg animate-float">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans" style={{}}>Result</span>
<span className="text-xs font-semibold text-slate-900 font-sans" style={{}}>98% Whiter Smiles</span>
</div>
</div>

<div className="flex flex-col z-10 text-center absolute inset-0 items-center justify-center px-6 pt-24 md:pt-0 gap-8 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent">
<div className="animate-fade-up">
<span className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] shadow-lg shadow-black/5 ring-1 ring-white/10 transition-transform hover:scale-105 cursor-default font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
</span>
            Accepting New Patients
        </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.95] drop-shadow-2xl max-w-5xl mx-auto font-bricolage">
        Dentistry
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200 italic font-light pr-1">reimagined</span>
</h1>
<p className="text-blue-50/80 text-lg md:text-xl font-light max-w-xl leading-relaxed tracking-wide mx-auto font-sans">
        Experience the perfect synthesis of medical precision and artistic vision. 
        Advanced AI diagnostics meets luxury patient care.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
<button className="w-full sm:w-auto rounded-full bg-white text-slate-950 px-8 py-4 text-sm font-semibold hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 font-sans flex items-center justify-center gap-2 group">
            Book Appointment
            <svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 text-sm font-semibold hover:bg-white/10 transition-all hover:-translate-y-1 font-sans flex items-center justify-center gap-2">
            Virtual Consultation
            <svg className="lucide lucide-video" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</button>
</div>
</div>
</header>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<h2 className="text-4xl md:text-6xl text-slate-900 mb-8 leading-[1.1] font-bricolage font-light tracking-tighter" style={{}}>
                        Where clinical excellence <br/> meets <span className="text-slate-400 font-bricolage font-light tracking-tighter" style={{}}>human artistry.</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light mb-8 max-w-2xl font-sans" style={{}}>
                        Founded on the belief that oral health is the window to overall well-being, Smile Center integrates <span className="text-blue-600 font-medium font-sans" style={{}}>hospital-grade technology</span> with the comfort of a boutique studio. We don't just treat teeth; we engineer confidence.
                    </p>
<div className="flex items-center gap-12 pt-8 border-t border-slate-100">
<div>
<p className="text-3xl text-slate-900 font-bricolage font-light tracking-tighter" style={{}}>15k+</p>
<p className="text-sm text-slate-500 mt-1 font-sans" style={{}}>Smiles Crafted</p>
</div>
<div className="">
<p className="text-3xl text-slate-900 font-bricolage font-light tracking-tighter" style={{}}>100%</p>
<p className="text-sm text-slate-500 mt-1 font-sans" style={{}}>Digital Workflow</p>
</div>
<div className="">
<p className="text-3xl text-slate-900 font-bricolage font-light tracking-tighter" style={{}}>24/7</p>
<p className="text-sm text-slate-500 mt-1 font-sans" style={{}}>Emergency Care</p>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group shadow-2xl">
<img alt="Dental Procedure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<div className="bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl inline-flex items-center gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600">
<svg className="lucide lucide-play w-4 h-4 ml-1 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="text-white">
<p className="text-xs opacity-80 font-sans" style={{}}>Watch Video</p>
<p className="text-sm font-medium font-sans" style={{}}>The Patient Journey</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-slate-100 border-t mt-24 pt-16 relative group">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 px-2">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 bg-blue-50/50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-4 font-sans backdrop-blur-sm">
<svg className="lucide lucide-sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                Comprehensive Care
            </span>
<h3 className="text-4xl md:text-5xl text-slate-900 font-bricolage font-normal tracking-tight leading-[1.1]">Curated Dental Services</h3>
</div>
<div className="flex items-center gap-6">
<p className="text-slate-500 hidden md:block text-sm font-light font-sans tracking-wide">Swipe to explore treatments</p>
<div className="flex gap-2">
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 opacity-50 cursor-not-allowed">
<svg className="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</div>
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20">
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative -mx-6 px-6 md:mx-0 md:px-0">

<div className="absolute left-0 top-0 bottom-12 w-12 bg-gradient-to-r from-white to-transparent z-10 md:hidden pointer-events-none"></div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-12 pt-4 px-2 [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-slate-100 bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500 border border-blue-100/50">
<svg className="lucide lucide-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 mb-2 font-bricolage tracking-tight">Bridges</h4>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Custom-crafted dental bridges to restore missing teeth and your confident smile.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors font-sans">
                        Learn more <svg className="lucide lucide-arrow-right transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-slate-100 bg-white hover:border-purple-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-purple-50/50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-500 border border-purple-100/50">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 mb-2 font-bricolage tracking-tight">Cosmetic Dentistry</h4>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Transform your smile with whitening, bonding, and aesthetic enhancements.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-purple-600 transition-colors font-sans">
                        Learn more <svg className="lucide lucide-arrow-right transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-slate-100 bg-white hover:border-amber-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-amber-50/50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-500 border border-amber-100/50">
<svg className="lucide lucide-crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 mb-2 font-bricolage tracking-tight">Crowns</h4>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Premium porcelain and ceramic crowns for lasting protection and beauty.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-amber-600 transition-colors font-sans">
                        Learn more <svg className="lucide lucide-arrow-right transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-slate-100 bg-white hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500 border border-blue-100/50">
<svg className="lucide lucide-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17v5"></path><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 mb-2 font-bricolage tracking-tight">Dental Implants</h4>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Permanent tooth replacement with titanium implants for natural function.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors font-sans">
                        Learn more <svg className="lucide lucide-arrow-right transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-red-100 bg-red-50/10 hover:bg-red-50/20 hover:border-red-200 hover:shadow-[0_8px_30px_rgb(220,38,38,0.06)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-500 border border-red-100">
<svg className="lucide lucide-siren" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 18v-6a5 5 0 1 1 10 0v6"></path><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"></path><path d="M21 12h1"></path><path d="M18.5 4.5 18 5"></path><path d="M2 12h1"></path><path d="M12 2v1"></path><path d="M4.929 4.929l.707.707"></path><path d="M12 12v6"></path></svg>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<h4 className="text-xl font-medium text-slate-900 font-bricolage tracking-tight">Emergency</h4>
<span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">24/7</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Immediate priority care for dental emergencies, pain relief, and urgent treatments.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-red-500 group-hover:text-red-600 transition-colors font-sans">
                        Call Now <svg className="lucide lucide-phone-forwarded w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="19" y1="1" y2="7"></line><line x1="22" x2="16" y1="4" y2="4"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-slate-100 bg-white hover:border-cyan-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-cyan-50/50 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform duration-500 border border-cyan-100/50">
<svg className="lucide lucide-scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 mb-2 font-bricolage tracking-tight">Invisalign</h4>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Clear aligner therapy for discreet, comfortable teeth straightening.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-cyan-600 transition-colors font-sans">
                        Learn more <svg className="lucide lucide-arrow-right transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-slate-100 bg-white hover:border-teal-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-teal-50/50 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform duration-500 border border-teal-100/50">
<svg className="lucide lucide-heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 mb-2 font-bricolage tracking-tight">Periodontics</h4>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Advanced gum disease treatment and periodontal maintenance care.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-teal-600 transition-colors font-sans">
                        Learn more <svg className="lucide lucide-arrow-right transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[340px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="flex flex-col gap-6 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-emerald-50/50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-500 border border-emerald-100/50">
<svg className="lucide lucide-droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 mb-2 font-bricolage tracking-tight">Teeth Cleaning</h4>
<p className="text-sm text-slate-500 leading-relaxed font-sans font-light">Professional cleaning and polishing for optimal oral health and hygiene.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-emerald-600 transition-colors font-sans">
                        Learn more <svg className="lucide lucide-arrow-right transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[240px] snap-center">
<div className="group h-full p-8 rounded-[1.5rem] bg-slate-900 border border-slate-800 hover:shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center relative overflow-hidden cursor-pointer hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<h4 className="text-lg font-medium text-white font-bricolage">View All Treatments</h4>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 bottom-12 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none md:block hidden"></div>
</div>

<div className="mt-8 text-center">
<p className="text-slate-400 mb-6 font-sans text-sm font-light">Not sure which treatment is right for you?</p>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all font-sans group" href="#">
            Book a Free Consultation
            <svg className="lucide lucide-calendar-days group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</a>
</div>
</div>
</section>

<section className="md:py-32 md:mx-4 overflow-hidden text-white bg-slate-900 rounded-[3rem] mr-2 mb-20 ml-2 pt-24 pb-24 relative">

<div className="opacity-[0.03] absolute inset-0 pointer-events-none bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76593392-4bbc-4ce0-a318-0574c377f075_3840w.webp)] bg-cover bg-center"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
<div className="mb-20 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
<h2 className="text-5xl md:text-7xl leading-[1.1] font-bricolage font-light tracking-tighter" style={{}}>
                        Precision lives in  every pixel.
                    </h2>
<p className="text-slate-400 max-w-md text-lg text-right font-sans" style={{}}>
                        Our digital-first approach ensures accuracy down to the micron, reducing chair time and enhancing results.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col gap-6">
<div className="bg-slate-950/50 border border-white/10 rounded-[2rem] h-[450px] relative overflow-hidden flex flex-col shadow-2xl">

<div className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

<div className="flex-1 p-8 flex items-center justify-center">
<div className="w-full max-w-[280px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl relative">

<div className="px-4 py-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<span className="text-[10px] text-slate-500 font-mono font-sans" style={{}}>AI_DIAG.exe</span>
</div>

<div className="p-4 space-y-4 transition-all duration-1000 ease-out will-change-transform bg-slate-900/0" id="anim-card-aura-emig3dihp3928zo58">

<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:border-blue-500/40 transition-colors duration-500">
<svg className="lucide lucide-scan text-blue-400 w-6 h-6" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div className="space-y-1.5">
<div className="h-2 w-24 bg-slate-800 rounded overflow-hidden">
<div className="h-full w-full bg-slate-700/50 animate-pulse"></div>
</div>
<div className="h-1.5 w-16 bg-slate-800 rounded overflow-hidden">
<div className="h-full w-full bg-slate-700/50 animate-pulse delay-75"></div>
</div>
</div>
</div>

<div className="h-24 bg-slate-800/30 rounded-lg border border-slate-800 relative overflow-hidden p-2 backdrop-blur-sm group">
<div className="absolute inset-0 flex items-end justify-around px-2 pb-2">

<div className="w-1.5 bg-blue-500/30 rounded-t-[2px] transform scale-y-0 origin-bottom transition-transform duration-700 delay-[200ms] ease-out bar-anim" style={{height: '40%'}}></div>
<div className="w-1.5 bg-blue-500/50 rounded-t-[2px] transform scale-y-0 origin-bottom transition-transform duration-700 delay-[300ms] ease-out bar-anim" style={{height: '70%'}}></div>
<div className="w-1.5 bg-blue-500/30 rounded-t-[2px] transform scale-y-0 origin-bottom transition-transform duration-700 delay-[400ms] ease-out bar-anim" style={{height: '50%'}}></div>
<div className="w-1.5 bg-blue-500 rounded-t-[2px] shadow-[0_0_12px_rgba(59,130,246,0.6)] transform scale-y-0 origin-bottom transition-transform duration-700 delay-[500ms] ease-out bar-anim" style={{height: '85%'}}></div>
<div className="w-1.5 bg-blue-500/30 rounded-t-[2px] transform scale-y-0 origin-bottom transition-transform duration-700 delay-[600ms] ease-out bar-anim" style={{height: '60%'}}></div>
</div>

<div className="absolute top-0 left-0 w-full h-[1px] bg-blue-400/50 shadow-[0_0_10px_rgba(96,165,250,0.8)] animate-[scan-vertical_3s_ease-in-out_infinite] transition-opacity duration-700 delay-1000 scan-line"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-slate-400 font-medium">
<span className="font-sans" style={{}}>Sensitivity</span>
<span className="text-green-400 font-mono tracking-wider flex items-center gap-1 font-sans" style={{}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
            99.8%
        </span>
</div>
<style>
        @keyframes scan-vertical {
            0% { top: 0%; opacity: 0; }
            15% { opacity: 1; }
            50% { top: 100%; opacity: 1; }
            85% { opacity: 1; }
            100% { top: 0%; opacity: 0; }
        }
    </style>

</div>
</div>
</div>
<div className="p-8 pt-0">
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>AI Diagnostics</h3>
<p className="text-slate-500 text-sm leading-relaxed font-sans" style={{}}>Early detection algorithms analyze x-rays with superhuman accuracy.</p>
</div>
</div>
</div>

<div className="group flex flex-col gap-6">
<div className="bg-slate-950/50 border border-white/10 rounded-[2rem] h-[450px] relative overflow-hidden flex flex-col shadow-2xl perspective-1000">
<div className="absolute top-0 w-full h-full bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>

<div className="flex-1 flex preserve-3d items-center justify-center">
<style>
        @keyframes rot3D {
            0% { transform: rotateX(15deg) rotateY(0deg); }
            100% { transform: rotateX(15deg) rotateY(360deg); }
        }
        .cube-face {
            position: absolute;
            inset: 0;
            border: 1px solid rgba(139, 92, 246, 0.3);
            background: rgba(139, 92, 246, 0.05);
            border-radius: 8px;
            box-shadow: inset 0 0 15px rgba(139, 92, 246, 0.1);
            backface-visibility: visible;
        }
    </style>
<div className="relative w-48 h-48 preserve-3d group">

<div className="absolute inset-0 preserve-3d" style={{animation: 'rot3D 16s linear infinite'}}>

<div className="cube-face" style={{transform: 'translateZ(60px)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
</div>

<div className="cube-face" style={{transform: 'rotateY(180deg) translateZ(60px)'}}></div>

<div className="cube-face" style={{transform: 'rotateY(90deg) translateZ(60px)'}}></div>

<div className="cube-face" style={{transform: 'rotateY(-90deg) translateZ(60px)'}}></div>

<div className="cube-face" style={{transform: 'rotateX(90deg) translateZ(60px)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 border border-white/10 rounded-full"></div>
</div>
</div>

<div className="cube-face" style={{transform: 'rotateX(-90deg) translateZ(60px)'}}></div>

<div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 preserve-3d">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
<div className="absolute inset-0 border border-blue-400/40 rounded-full animate-[spin_4s_linear_infinite]" style={{transformStyle: 'flat'}}></div>
<div className="absolute inset-2 border border-white/20 rounded-full animate-[spin_4s_linear_infinite_reverse]" style={{transformStyle: 'flat'}}></div>
</div>
</div>

<div className="absolute -left-4 -right-4 h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-[scan-vertical_3s_ease-in-out_infinite] z-20 flex justify-end">
<span className="text-[8px] font-mono text-cyan-200 bg-slate-900/90 px-1 py-0.5 rounded ml-2 -mt-2.5 border border-cyan-500/30 font-sans" style={{}}>LIDAR SCAN</span>
</div>

<div className="absolute -top-4 -right-6 z-30 animate-[float_6s_ease-in-out_infinite]">
<div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-2 rounded-lg shadow-xl ring-1 ring-white/5">
<svg className="lucide lucide-box text-purple-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<div className="flex flex-col">
<span className="text-[8px] text-slate-400 uppercase font-medium leading-none mb-0.5 font-sans" style={{}}>Polygons</span>
<span className="text-[10px] text-white font-mono leading-none font-sans" style={{}}>1.2M</span>
</div>
</div>
</div>
<div className="absolute -bottom-2 -left-6 z-30 animate-[float_5s_ease-in-out_infinite_reverse]">
<div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-2 rounded-lg shadow-xl ring-1 ring-white/5">
<div className="relative flex items-center justify-center w-3 h-3">
<div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
<div className="relative w-1.5 h-1.5 bg-green-500 rounded-full"></div>
</div>
<div className="flex flex-col">
<span className="text-[8px] text-slate-400 uppercase font-medium leading-none mb-0.5 font-sans" style={{}}>Accuracy</span>
<span className="text-[10px] text-white font-mono leading-none font-sans" style={{}}>99.9%</span>
</div>
</div>
</div>
</div>
</div>
<div className="p-8 pt-0">
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>3D Modeling</h3>
<p className="text-slate-500 text-sm leading-relaxed font-sans" style={{}}>Full cranial visualizations for precise implant planning and orthodontics.</p>
</div>
</div>
</div>

<div className="group flex flex-col gap-6">
<div className="bg-slate-950/50 border border-white/10 rounded-[2rem] h-[450px] relative overflow-hidden flex flex-col shadow-2xl">
<div className="absolute top-0 w-full h-full bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none"></div>

<div className="flex-1 p-8 flex items-center justify-center">
<div className="w-[240px] bg-white rounded-[2rem] p-1 shadow-2xl relative overflow-hidden">
<div className="bg-slate-50 w-full h-full rounded-[1.7rem] overflow-hidden flex flex-col relative">

<div className="bg-blue-600 p-4 pb-8 text-white">
<div className="flex justify-between items-center mb-4">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<p className="text-xs opacity-80 font-sans" style={{}}>Welcome back,</p>
<p className="font-medium font-sans" style={{}}>Sarah</p>
</div>

<div className="mx-4 -mt-6 bg-white rounded-xl p-3 shadow-lg border border-slate-100 mb-3">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-[10px] text-slate-400 uppercase font-sans" style={{}}>Next Visit</p>
<p className="text-xs font-bold text-slate-800 font-sans" style={{}}>Oct 24, 10:00 AM</p>
</div>
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
</div>
</div>

<div className="px-4 space-y-2">
<div className="flex items-center gap-3 p-2 bg-white rounded-lg border border-slate-100">
<div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="text-[10px]">
<p className="font-medium text-slate-900 font-sans" style={{}}>Cleaning</p>
<p className="text-slate-400 font-sans" style={{}}>Completed</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="p-8 pt-0">
<h3 className="text-xl font-medium mb-2 text-white font-sans" style={{}}>Smart Portal</h3>
<p className="text-slate-500 text-sm leading-relaxed font-sans" style={{}}>Book appointments, view 3D scans, and manage treatment plans instantly.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h3 className="text-4xl md:text-5xl text-slate-900 mb-2 font-bricolage font-light tracking-tighter" style={{}}>World-class Specialists</h3>
<p className="text-slate-500 text-lg font-light font-sans" style={{}}>Leaders in restorative and cosmetic dentistry.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors font-sans" href="#" style={{}}>
                    Meet the whole team <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-[2rem] overflow-hidden mb-4 relative aspect-[3/4]">
<img alt="Dr. Smith" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-900 font-sans" style={{}}>
                            DDS, PhD
                        </div>
</div>
<h4 className="text-lg font-bold text-slate-900 font-sans" style={{}}>Dr. Sarah Cole</h4>
<p className="text-sm text-slate-500 font-sans" style={{}}>Orthodontics Lead</p>
</div>

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-[2rem] overflow-hidden mb-4 relative aspect-[3/4]">
<img alt="Dr. Lee" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="text-lg font-bold text-slate-900 font-sans" style={{}}>Dr. James Lee</h4>
<p className="text-sm text-slate-500 font-sans" style={{}}>Implant Specialist</p>
</div>

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-[2rem] overflow-hidden mb-4 relative aspect-[3/4]">
<img alt="Dr. Chen" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="text-lg font-bold text-slate-900 font-sans" style={{}}>Dr. Emily Chen</h4>
<p className="text-sm text-slate-500 font-sans" style={{}}>Cosmetic Dentistry</p>
</div>

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-[2rem] overflow-hidden mb-4 relative aspect-[3/4]">
<img alt="Dr. Ross" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="text-lg font-bold text-slate-900 font-sans" style={{}}>Dr. Michael Ross</h4>
<p className="text-sm text-slate-500 font-sans" style={{}}>Oral Surgery</p>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-950 pt-32 pb-32 relative mx-2 md:mx-4 rounded-[3rem] mb-20" id="locations">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Network Coverage
                </div>
<h2 className="text-4xl md:text-5xl text-white mb-6 font-bricolage font-light tracking-tighter" style={{}}>
                    Care where you are.
                </h2>
<p className="text-slate-400 text-lg font-light mb-12 max-w-md leading-relaxed font-sans" style={{}}>
                    Our interconnected network of studios ensures your records, care plans, and preferences travel with you across Southern California.
                </p>

<div className="space-y-2">

<div className="group relative flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
<span className="font-heading text-slate-400 group-hover:text-white transition-colors font-sans" style={{}}>01</span>
</div>
<div className="">
<h4 className="text-slate-200 font-medium group-hover:text-white transition-colors font-sans" style={{}}>La Puente</h4>
<p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors font-sans" style={{}}>1200 N Hacienda Blvd</p>
</div>
</div>
<div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
<span className="text-xs font-medium text-blue-400 font-sans" style={{}}>Open until 6pm</span>
<svg className="lucide lucide-arrow-right text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
<span className="font-heading text-slate-400 group-hover:text-white transition-colors font-sans" style={{}}>02</span>
</div>
<div className="">
<h4 className="text-slate-200 font-medium group-hover:text-white transition-colors font-sans" style={{}}>West Covina</h4>
<p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors font-sans" style={{}}>Plaza West, Suite 200</p>
</div>
</div>
<div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
<span className="text-xs font-medium text-blue-400 font-sans" style={{}}>Open until 7pm</span>
<svg className="lucide lucide-arrow-right text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
<span className="font-heading text-slate-400 group-hover:text-white transition-colors font-sans" style={{}}>03</span>
</div>
<div className="">
<h4 className="text-slate-200 font-medium group-hover:text-white transition-colors font-sans" style={{}}>Long Beach</h4>
<p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors font-sans" style={{}}>Ocean Blvd, Tower 4</p>
</div>
</div>
<div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
<span className="text-xs font-medium text-blue-400 font-sans" style={{}}>Open until 5pm</span>
<svg className="lucide lucide-arrow-right text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="pt-6 grid grid-cols-2 gap-4">
<a className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors p-2 font-sans" href="#" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></div>
                            Tarzana
                        </a>
<a className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors p-2 font-sans" href="#" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></div>
                            Panorama
                        </a>
<a className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors p-2 font-sans" href="#" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></div>
                            Palmdale
                        </a>
<a className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors p-2 font-sans" href="#" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"></div>
                            Downey
                        </a>
</div>
</div>
</div>

<div className="relative h-[600px] w-full bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl group perspective-1000">

<div className="absolute inset-0 bg-slate-900">
<img alt="Map" className="w-full h-full object-cover opacity-30 grayscale contrast-125 mix-blend-luminosity scale-110 group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&amp;q=80"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50"></div>

<div className="absolute inset-0">

<div className="absolute top-[15%] left-[55%] group/marker">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping opacity-75 duration-[3s]"></div>
<div className="relative w-3 h-3 bg-blue-500 border-2 border-slate-900 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] z-10 transition-transform group-hover/marker:scale-150"></div>

<div className="absolute bottom-6 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur border border-white/10 whitespace-nowrap z-20 transform translate-y-2 group-hover/marker:translate-y-0 duration-200 font-sans" style={{}}>
                                Palmdale
                            </div>
</div>
</div>

<div className="absolute top-[35%] left-[30%] group/marker">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping opacity-75 duration-[2.5s] delay-75"></div>
<div className="relative w-3 h-3 bg-white border-2 border-slate-900 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
<div className="absolute bottom-6 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur border border-white/10 whitespace-nowrap z-20 font-sans" style={{}}>
                                Panorama
                            </div>
</div>
</div>

<div className="absolute top-[40%] left-[22%] group/marker">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping opacity-75 duration-[3.5s] delay-150"></div>
<div className="relative w-3 h-3 bg-white border-2 border-slate-900 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
<div className="absolute bottom-6 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur border border-white/10 whitespace-nowrap z-20 font-sans" style={{}}>
                                Tarzana
                            </div>
</div>
</div>

<div className="absolute top-[48%] left-[70%] group/marker">
<div className="relative flex items-center justify-center">
<div className="absolute w-16 h-16 bg-blue-500/30 rounded-full animate-ping opacity-75 duration-[2s]"></div>
<div className="relative w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] z-10"></div>
<div className="absolute bottom-8 bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded backdrop-blur border border-white/10 whitespace-nowrap z-20 font-sans" style={{}}>
                                West Covina
                            </div>
</div>
</div>

<div className="absolute top-[52%] left-[74%] group/marker">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping opacity-75 duration-[3s] delay-300"></div>
<div className="relative w-3 h-3 bg-blue-400 border-2 border-slate-900 rounded-full shadow-[0_0_15px_rgba(96,165,250,1)] z-10"></div>
<div className="absolute bottom-6 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur border border-white/10 whitespace-nowrap z-20 font-sans" style={{}}>
                                La Puente
                            </div>
</div>
</div>

<div className="absolute top-[65%] left-[55%] group/marker">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping opacity-75 duration-[4s] delay-500"></div>
<div className="relative w-3 h-3 bg-white border-2 border-slate-900 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
<div className="absolute bottom-6 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur border border-white/10 whitespace-nowrap z-20 font-sans" style={{}}>
                                Downey
                            </div>
</div>
</div>

<div className="absolute top-[82%] left-[52%] group/marker">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping opacity-75 duration-[3s] delay-100"></div>
<div className="relative w-3 h-3 bg-blue-400 border-2 border-slate-900 rounded-full shadow-[0_0_15px_rgba(96,165,250,1)] z-10"></div>
<div className="absolute bottom-6 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur border border-white/10 whitespace-nowrap z-20 font-sans" style={{}}>
                                Long Beach
                            </div>
</div>
</div>
</div>

<div className="absolute bottom-8 right-8 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl shadow-2xl animate-float" style={{animationDelay: '1.5s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<svg className="lucide lucide-activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<div className="">
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold font-sans" style={{}}>System Status</p>
<p className="text-xs font-medium text-white font-sans" style={{}}>All Locations Online</p>
</div>
</div>
<div className="flex gap-1">
<div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-20 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10 font-sans" style={{}}>Trusted Technology Partners</p>
<div className="flex items-center justify-center w-full px-6 opacity-50 hover:opacity-100 transition-all duration-500">
<img alt="Dental Accreditations: ADA, CDA, Invisalign Preferred Provider, AACD" className="w-full max-w-5xl h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdf3d1b9-2e6c-4375-8858-4ecdaaf28787_3840w.webp"/>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white mx-2 md:mx-4 mb-4 rounded-[3rem] px-8 md:px-16 py-16">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-md">
<div className="flex w-[160px] h-[24px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6200e6ad-44a0-436a-af99-d6f802377045_1600w.png?w=800&amp;q=80)] bg-cover bg-center mb-6 gap-x-2 gap-y-2 items-center">
</div>
<h3 className="text-3xl mb-4 text-slate-200 font-bricolage font-light tracking-tighter" style={{}}>
                        Ready to transform <br/> your smile?
                    </h3>
<p className="text-slate-400 font-light mb-8 font-sans" style={{}}>
                        Join the hundreds of patients who have upgraded their confidence with our state-of-the-art treatments.
                    </p>
<a className="inline-flex items-center justify-center bg-white text-slate-900 rounded-full px-8 py-4 font-medium hover:bg-slate-200 transition-colors font-sans" href="#" style={{}}>
                        Book Your Visit <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-2" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-slate-400">
<div className="flex flex-col gap-4">
<span className="text-white font-medium mb-2 font-sans" style={{}}>Services</span>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Cosmetic</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Orthodontics</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Implants</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>General Care</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-medium mb-2 font-sans" style={{}}>Company</span>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>About Us</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Our Doctors</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Technology</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Careers</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-medium mb-2 font-sans" style={{}}>Social</span>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Instagram</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Twitter</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>LinkedIn</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
<span className="font-sans" style={{}}>© 2026 Smile Center Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-white transition font-sans" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-white transition font-sans" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
