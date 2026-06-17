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
      

<header className="overflow-hidden min-h-[85vh] flex bg-blue-900 z-10 relative items-center">

<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-pink-900 to-fuchsia-900 z-0"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0"></div>

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="-mt-20 -ml-20 filter animate-blob animation-delay-2000 bg-pink-500 opacity-20 mix-blend-multiply w-96 h-96 rounded-full absolute top-0 left-0 blur-3xl"></div>
<div className="container lg:px-12 group z-10 mr-auto ml-auto pt-20 pr-6 pb-32 pl-6 relative">

<div className="absolute inset-0 -z-10 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 select-none pointer-events-none">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out opacity-60" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80">
<source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-living-room-interior-3274-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>

<div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-gray-900/40 to-blue-900/20"></div>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-2xl space-y-8">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-6xl font-medium text-white tracking-tight drop-shadow-lg">
                        Rentals Direct <br/>
<span className="italic font-normal opacity-90">from Owner</span>
</h1>
<div className="flex flex-wrap items-center gap-6 text-blue-50 text-sm md:text-base font-medium">
<div className="flex items-center gap-2">
<svg className="lucide lucide-user w-5 h-5 text-pink-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>by RENTCLUB.CA</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-5 h-5 text-pink-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">Find Your Space</span>
</div>
</div>
<p className="text-lg font-normal text-blue-100/90 max-w-md drop-shadow-md">skip the search, skip the stress, find a home</p>
<button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 border border-white/10 backdrop-blur-sm">
<span className="uppercase flex items-center gap-2 text-sm font-medium text-white tracking-wide relative">get started</span>
</button>
</div>

<div className="relative hidden lg:block perspective-1000">
<div className="relative transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">

<div className="bg-gray-800 p-2 rounded-2xl shadow-2xl border border-gray-700/50 ring-1 ring-white/10 backdrop-blur-sm">
<div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-[16/10] shadow-inner">

<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-pink-800 flex flex-col items-center justify-center p-8">
<div className="w-full h-8 bg-white/10 rounded-full mb-6 flex items-center px-4 space-x-2">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<h3 className="text-white/20 text-4xl font-serif font-bold tracking-widest">RENTCLUB</h3>
<div className="mt-8 w-2/3 h-32 bg-white/10 rounded-lg backdrop-blur-md shadow-lg border border-white/5"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="absolute -bottom-10 -left-10 bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-700">
<svg className="lucide lucide-mouse-pointer-2 w-6 h-6 text-pink-400" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
<svg className="relative block w-[calc(100%+1.3px)] h-[100px] text-white" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-current" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
</svg>
</div>
</header>

<main className="z-30 container lg:px-12 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-7 flex flex-col space-y-10 justify-center">

<div className="md:h-56 select-none pointer-events-none h-48 relative">
<span className="md:left-40 text-[10rem] md:text-[14rem] leading-none z-0 text-blue-100/80 font-serif absolute top-0 left-28">Find</span>
<h2 className="relative z-10 pt-20 pl-20 md:pl-32 text-5xl md:text-7xl font-medium text-gray-800 tracking-tight">
                        Your Space
                    </h2>
</div>
<div className="space-y-6 max-w-lg pl-2">
<p className="leading-relaxed text-xl font-light text-gray-600">Browse through our listings or fill out the questionnaire and find your next home. We make relocation seamless and user-friendly.</p>
<button className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
<span className="text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-3">
                            Search Properties
                            <svg className="lucide lucide-search w-4 h-4 group-hover:rotate-12 transition-transform" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
</button>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>

<div className="relative mb-8 flex justify-center">
<div className="bg-purple-100 w-32 h-32 rounded-full flex items-center justify-center relative">
<svg className="lucide lucide-mail w-12 h-12 text-pink-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="absolute top-0 right-0 bg-pink-500 p-2 rounded-full border-4 border-white">
<svg className="lucide lucide-bell w-4 h-4 text-white" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
</div>
</div>
<div className="text-center mb-8">
<h3 className="text-2xl font-serif text-gray-800 mb-2">Newsletter Subscribe</h3>
<p className="text-gray-400 text-sm font-light">Stay updated with the latest premium listings.</p>
</div>
<form className="space-y-5">
<div className="space-y-1">
<p className="text-xs text-gray-400 text-right">Fields marked with <span className="text-purple-500">*</span> are required</p>
<label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name <span className="text-purple-500">*</span></label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none" id="email" placeholder="john@example.com" type="email"/>
</div>
<button className="w-32 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-gray-900/20" type="button">
                            Submit
                        </button>
</form>
</div>
</div>
</div>
</main>

<footer className="relative mt-24">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform -translate-y-[99%]">
<svg className="relative block w-[calc(100%+1.3px)] h-[120px] text-indigo-950" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-indigo-900" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>

<path className="fill-[url(#footer-grad)] opacity-90" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
<defs>
<lineargradient id="footer-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#312e81', stopOpacity: '1'}}></stop> 
<stop offset="50%" style={{stopColor: '#4c1d95', stopOpacity: '1'}}></stop> 
<stop offset="100%" style={{stopColor: '#701a75', stopOpacity: '1'}}></stop> 
</lineargradient>
</defs>
</svg>
</div>
<div className="bg-gradient-to-r from-blue-900 via-pink-900 to-fuchsia-900 text-white pt-10 pb-12">
<div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">

<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-900/50">
<svg className="lucide lucide-home w-6 h-6 text-white" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div>
<span className="block text-sm text-blue-200">© Copyright by</span>
<span className="block font-semibold tracking-wide">RentClub.ca ™</span>
</div>
</div>

<nav className="flex items-center gap-8 text-sm font-medium text-blue-200">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</nav>

<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg border border-blue-700" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg border border-blue-700" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none mix-blend-overlay"></div>
</div>
</footer>


    </>
  );
}
