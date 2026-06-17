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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px] opacity-60 animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50/50 rounded-full blur-[120px] opacity-60 animate-float" style={{animationDelay: '-3s'}}></div>
</div>

<header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-md">
<svg className="lucide lucide-activity h-5 w-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="hidden sm:block">
<h1 className="text-sm font-semibold tracking-tight text-slate-900 leading-tight">NHIVRC</h1>
<p className="text-[10px] text-slate-500 font-medium">Research Centre</p>
</div>
</div>
<div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
<div className="hidden sm:flex items-center gap-2 text-slate-500">
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Welcome</a>
<a className="hover:text-slate-900 transition-colors" href="#">What is a CI?</a>
<a className="hover:text-slate-900 transition-colors" href="#">For Patients</a>
<a className="hover:text-slate-900 transition-colors" href="#">Professionals</a>
<a className="hover:text-slate-900 transition-colors" href="#">Research</a>
<a className="hover:text-slate-900 transition-colors" href="#">About Us</a>
</nav>
<button className="md:hidden p-2 text-slate-600">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="sm:px-6 lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 space-y-16">

<section className="relative w-full rounded-[32px] overflow-hidden shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] bg-slate-100 animate-content group h-[400px] sm:h-[500px]">

<img alt="Happy child" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1717690306655-32a8cd518920?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent"></div>
<div className="flex sm:px-12 h-full pr-8 pl-8 relative items-center">
<div className="max-w-2xl space-y-4">
<span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                        National Centre of Excellence
                    </span>
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                        Welcome to the National <br/> Hearing Implant &amp; <br/> Viani Research Centre
                    </h2>
<p className="text-slate-200 text-sm sm:text-base max-w-md">
                        Bringing patients through the 'Journey Out of Silence' by enabling hearing, communication, and better quality of life.
                    </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 animate-content delay-100 gap-x-12 gap-y-12 items-center">
<div className="space-y-6">
<div className="space-y-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Our Mission</h3>
<p className="text-lg font-medium text-slate-700 leading-relaxed">
                        To bring our patients through the <span className="text-indigo-600">'Journey Out of Silence'</span> by enabling hearing, communication, and better quality of life.
                    </p>
</div>
<div className="space-y-4 text-sm text-slate-500 leading-relaxed text-justify">
<p className="">
                        Hearing loss affects one in every 1,000 children born in Ireland and nearly 1 in 3 adults over the age of 60 have disabling hearing loss.
                    </p>
<p className="">
                        We provide an efficient patient centred service to all our patients, and their families, who undergo assessment, surgery and rehabilitation for cochlear implants.
                    </p>
<p className="">
                        Our multidisciplinary team is committed to continuously audit the clinical outcomes of our implanted patients to deliver a state of the art service.
                    </p>
</div>
<div className="pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors" href="#">
                        Read more about our strategy <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">

<div className="absolute top-4 right-4 text-slate-100">
<svg className="lucide lucide-map w-32 h-32 opacity-20" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div className="relative z-10 grid gap-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
<svg className="lucide lucide-users w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(99, 102, 241)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<p className="text-2xl font-semibold text-slate-900 tracking-tight">1 in 6</p>
<p className="text-xs text-slate-500">adults suffer from some sort of hearing loss.</p>
</div>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="flex items-start gap-4">
<div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
<svg className="lucide lucide-user-minus w-6 h-6 text-indigo-500" data-lucide="user-minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="">
<p className="text-2xl font-semibold text-slate-900 tracking-tight">1 in 3</p>
<p className="text-xs text-slate-500">people over 60 have disabling hearing loss.</p>
</div>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="flex items-start gap-4">
<div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
<svg className="lucide lucide-baby w-6 h-6 text-indigo-500" data-lucide="baby" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>
</div>
<div className="">
<p className="text-2xl font-semibold text-slate-900 tracking-tight">1-2</p>
<p className="text-xs text-slate-500">babies in every <span className="font-semibold text-slate-700">1000</span> are born with hearing loss.</p>
</div>
</div>
<div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
<p className="text-xs text-slate-500">Estimated economic impact</p>
<p className="text-lg font-semibold text-slate-900">1.4% of GDP</p>
</div>
</div>
</div>
</section>

<section className="relative animate-content delay-200">
<div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
<div className="grid md:grid-cols-2">
<div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100">
<svg className="lucide lucide-ear w-6 h-6 text-indigo-600" data-lucide="ear" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"></path><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"></path></svg>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                            Explore Our Interactive Visualization
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Discover how hearing works and how cochlear implants bypass damaged parts of the ear to deliver sound signals to the auditory nerve.
                        </p>
<button className="w-fit group flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:scale-[1.02]">
<span className="">Launch 3D Model</span>
<svg className="lucide lucide-box w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</button>
</div>
<div className="relative h-64 md:h-auto bg-slate-50 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-10">
<div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-indigo-400 rounded-full blur-[80px]"></div>
</div>
<img alt="Ear anatomy" className="relative z-10 w-3/4 max-w-sm rounded-2xl shadow-2xl rotate-y-12 transform perspective-1000 opacity-90 grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="animate-content delay-300 space-y-8">
<div className="flex pr-2 pl-2 items-end justify-between">
<div className="">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Patient Stories</h3>
<p className="text-sm text-slate-500 mt-1">Real experiences from our community.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-lg border border-slate-200 hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-slate-900">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 rounded-lg border border-slate-200 hover:bg-white hover:shadow-sm transition-all text-slate-400 hover:text-slate-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mx-4 sm:mx-0 sm:px-0 pr-4 pb-8 pl-4">

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors overflow-visible">
<div className="">
<div className="flex justify-center -mt-10 mb-4">
<img alt="User" className="z-10 w-16 h-16 object-cover border-white border-4 rounded-full relative shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<blockquote className="text-center text-sm text-slate-600 leading-relaxed italic">
                "I truly feel that I would not have the confidence I have today without them. It changed my entire perspective on social interaction."
            </blockquote>
</div>
<div className="mt-6 text-center border-t border-slate-100 pt-4">
<p className="text-xs font-medium text-slate-900">Courtney, 20</p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">Implanted in 2014</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors">
<div className="">
<div className="flex justify-center -mt-10 mb-4">
<img alt="User" className="w-16 h-16 rounded-full border-4 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<blockquote className="text-center text-sm text-slate-600 leading-relaxed italic">
                "I love being able to hear with my cochlear implants because I can join in with the jokes and laugh along with my friends."
            </blockquote>
</div>
<div className="mt-6 text-center border-t border-slate-100 pt-4">
<p className="text-xs font-medium text-slate-900">Taylor Beth, 8</p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">Implanted in 2012</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors">
<div className="">
<div className="flex justify-center -mt-10 mb-4">
<img alt="User" className="w-16 h-16 rounded-full border-4 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<blockquote className="text-center text-sm text-slate-600 leading-relaxed italic">
                "The cochlear implant has opened doors for a whole new world of communication and more importantly, opportunity."
            </blockquote>
</div>
<div className="mt-6 text-center border-t border-slate-100 pt-4">
<p className="text-xs font-medium text-slate-900">Cameron, 15</p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">Implanted in 2008</p>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden leading-none text-slate-200 opacity-40">
<svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-8 border-b border-slate-200">
<div className="space-y-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">What is a CI?</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">How it works</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Benefits</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Candidates</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">For Patients</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Who is Suitable?</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">What to Expect?</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Professionals</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Referral Guidelines</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">How to Refer</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Training</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Research</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Research Fields</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Publications</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Collaborators</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">About Us</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">History</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Our Team</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Media Gallery</a></li>
</ul>
</div>
</div>

<div className="text-center space-y-4 max-w-2xl mx-auto py-8">
<button className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]">
<span>Donate Now</span>
<svg className="lucide lucide-heart w-4 h-4 text-rose-500 fill-rose-500 transition-transform group-hover:scale-110" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<p className="text-xs text-slate-400 leading-relaxed">
                We always welcome charitable donations to support the work we are undertaking at the National Hearing Implant &amp; Viani Research Centre.
            </p>
</div>

<div className="w-full h-80 bg-slate-100 rounded-[24px] border border-slate-200 overflow-hidden relative group">
<div className="absolute inset-0 flex items-center justify-center bg-slate-200/50 backdrop-blur-[2px] z-10 group-hover:bg-slate-200/20 group-hover:backdrop-blur-none transition-all duration-500">
<div className="bg-white/90 px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-xs font-medium text-slate-600 flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Beaumont Hospital, Dublin
                </div>
</div>

<img alt="Map" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

<div className="col-span-1 md:col-span-2 lg:col-span-4 space-y-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm ring-4 ring-slate-50">
<svg className="lucide lucide-activity h-5 w-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<h3 className="leading-tight text-sm font-semibold text-slate-900 tracking-tight">NHIVRC</h3>
<p className="text-[10px] text-slate-500 font-medium">Beaumont Hospital</p>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-500 max-w-sm">
                    National Hearing Implant &amp; Research Centre.
                    Bringing patients through the 'Journey Out of Silence' by enabling hearing and communication.
                </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors p-1 hover:bg-slate-100 rounded-lg" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-slate-900 transition-colors p-1 hover:bg-slate-100 rounded-lg" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="hover:text-slate-900 transition-colors p-1 hover:bg-slate-100 rounded-lg" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Programmes</h4>
<div className="space-y-6 text-sm">
<div className="group">
<span className="flex items-center gap-2 font-medium text-slate-700">
<svg className="lucide lucide-user w-3 h-3 text-indigo-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                Adult Programme
                            </span>
<div className="mt-2 flex flex-col gap-1.5 text-slate-500 text-xs pl-5 border-l border-slate-200 ml-1.5">
<a className="hover:text-indigo-600 transition-colors" href="tel:018092923">01 809 2923</a>
<a className="hover:text-indigo-600 transition-colors break-words" href="mailto:adultcochlearimplant@beaumont.ie">adultcochlearimplant@beaumont.ie</a>
</div>
</div>
<div className="group">
<span className="flex items-center gap-2 font-medium text-slate-700">
<svg className="lucide lucide-baby w-3 h-3 text-rose-500" data-lucide="baby" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>
                                Paediatric Programme
                            </span>
<div className="mt-2 flex flex-col gap-1.5 text-slate-500 text-xs pl-5 border-l border-slate-200 ml-1.5">
<a className="hover:text-indigo-600 transition-colors" href="tel:018092013">01 809 2013</a>
<a className="hover:text-indigo-600 transition-colors break-words" href="mailto:cochlearimplant@beaumont.ie">cochlearimplant@beaumont.ie</a>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">General Contact</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="">
<span className="block text-xs font-medium text-slate-700 mb-1">General Queries</span>
<a className="hover:text-slate-900 transition-colors flex items-center gap-2" href="tel:018092191">
<svg className="lucide lucide-phone w-3 h-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                01 809 2191
                            </a>
</li>
<li className="">
<span className="block text-xs font-medium text-slate-700 mb-1">SMS / Text Service</span>
<a className="hover:text-slate-900 transition-colors flex items-center gap-2" href="sms:0879535423">
<svg className="lucide lucide-message-square w-3 h-3" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                                087 953 5423
                            </a>
</li>
<li className="pt-2 border-t border-slate-100 mt-2">
</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Explore</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li className=""><a className="hover:text-indigo-600 transition-colors flex items-center gap-2" href="#" style={{}}>For Patients</a></li>
<li className=""><a className="hover:text-indigo-600 transition-colors" href="#">For Professionals</a></li>
<li className=""><a className="hover:text-indigo-600 transition-colors" href="#">Research Fields</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-medium">
                © 2024 National Hearing Implant &amp; Research Centre.
            </p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
<a className="text-xs text-slate-400 hover:text-slate-700 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-700 transition-colors" href="#">Accessibility</a>
<a className="text-xs text-slate-400 hover:text-slate-700 transition-colors" href="#">Cookie Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-700 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
