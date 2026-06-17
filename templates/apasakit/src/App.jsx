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



    function switchTab(tabId, btnElement) {
      // 1. Reset all triggers
      const triggers = document.querySelectorAll('.tab-trigger');
      triggers.forEach(t => {
        t.classList.remove('bg-white', 'text-slate-900', 'shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]', 'ring-1', 'ring-slate-900/5', 'font-semibold');
        t.classList.add('text-slate-500', 'hover:text-slate-900', 'hover:bg-white/50', 'font-medium');
      });

      // 2. Activate clicked trigger
      btnElement.classList.remove('text-slate-500', 'hover:text-slate-900', 'hover:bg-white/50', 'font-medium');
      btnElement.classList.add('bg-white', 'text-slate-900', 'shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]', 'ring-1', 'ring-slate-900/5', 'font-semibold');

      // 3. Hide all contents
      const contents = document.querySelectorAll('.tab-content');
      contents.forEach(c => {
        c.classList.remove('opacity-100', 'translate-y-0', 'z-10');
        c.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none', 'z-0');
      });

      // 4. Show active content
      const activeContent = document.getElementById(tabId);
      activeContent.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none', 'z-0');
      activeContent.classList.add('opacity-100', 'translate-y-0', 'z-10');
    }
  
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
      

<div className="fixed top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px] bg-blue-400/10"></div>
<div className="absolute top-[10%] right-[0%] w-[40%] h-[40%] rounded-full blur-[100px] bg-purple-400/10"></div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b supports-[backdrop-filter]:bg-white/60 bg-white/80 border-slate-200/50">
<div className="sm:px-6 flex h-16 max-w-6xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">

<a className="text-lg tracking-tight font-bold flex items-center gap-2.5 group text-slate-900" href="/">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all from-blue-600 to-blue-700 text-white">
<svg aria-hidden="true" className="w-[18px] h-[18px]" data-icon="lucide:activity" data-icon-replaced="true" data-strokeWidth="2" height="18" role="img" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
          ApaSakit
        </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="transition-colors hover:text-blue-600" href="/how-it-works">How It Works</a>
<a className="transition-colors hover:text-blue-600" href="/plans">Plans</a>
<a className="transition-colors hover:text-blue-600" href="/app">App</a>
<a className="transition-colors hover:text-blue-600" href="/faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium px-3 py-2 text-slate-600 hover:text-slate-900" href="/login">
            Log In
          </a>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full px-6 font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-slate-900 text-white hover:bg-slate-800 hover:shadow-slate-300/50" href="/start">
<span className="mr-2 text-xs">Start Trial</span>
<svg aria-hidden="true" className="transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-strokeWidth="2" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>

<label className="md:hidden p-2 cursor-pointer rounded-md transition-colors text-slate-600 hover:bg-slate-100" htmlFor="mobile-menu-toggle">
<svg aria-hidden="true" data-icon="lucide:menu" data-strokeWidth="1.5" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</label>
</div>
</header>

<input className="hidden peer" id="mobile-menu-toggle" type="checkbox"/>
<div className="fixed inset-0 z-40 backdrop-blur-xl pt-24 px-6 transform -translate-y-full opacity-0 transition-all duration-500 ease-in-out md:hidden flex flex-col gap-6 bg-white/95" id="mobile-menu">
<div className="flex flex-col gap-4 text-lg font-medium text-slate-900">
<a className="py-2 border-b border-slate-100" href="/how-it-works">How It Works</a>
<a className="py-2 border-b border-slate-100" href="/plans">Plans</a>
<a className="py-2 border-b border-slate-100" href="/app">Download App</a>
<a className="py-2 border-b border-slate-100" href="/faq">FAQ</a>
</div>
<a className="w-full text-center py-3.5 rounded-xl font-semibold shadow-lg mt-4 bg-blue-600 text-white shadow-blue-200" href="/start">Start Free Trial</a>
</div>

<section className="md:pt-48 md:pb-32 overflow-visible pt-32 pr-4 pb-20 pl-4 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="text-left animate-fade-in-up">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm text-xs font-medium mb-8 transition-colors cursor-default bg-white border-slate-200 text-slate-600 hover:border-blue-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Kini Online: <span className="font-semibold ml-1 text-slate-900">Dr. Azman, Dr. Sarah + 14 lain</span>
</div>

<h1 className="md:text-7xl leading-[1.05] text-5xl font-bold tracking-tight mb-8 text-slate-900">Jumpa doktor, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600" style={{}}>tanpa perlu ke klinik.</span></h1>

<p className="md:text-xl text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
            Video call atau chat dengan doktor berdaftar KKM. Diagnosis, preskripsi &amp; MC digital — semuanya dari telefon anda.
          </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
<a className="w-full sm:w-auto text-base font-medium py-3.5 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200" href="/start">
              Mulakan Percubaan
            </a>
</div>

<div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5" style={{}}/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8" style={{}}/>
</div>
<p className="">Dipercayai 12,000+ rakyat Malaysia</p>
</div>
</div>

<div className="relative hidden lg:block h-[600px] w-full animate-fade-in-up delay-200">

<div className="absolute inset-0 bg-gradient-to-tr rounded-[3rem] transform rotate-3 scale-95 opacity-60 animate-pulse-soft from-blue-100 to-purple-100"></div>

<img alt="Doctor Teleconsult" className="animate-float mask-image-gradient w-full h-full object-cover z-10 border rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0 shadow-2xl border-white/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c55fcd8-25c9-4651-be88-e3d767ab6a09_1600w.jpg" style={{}}/>

<div className="absolute top-12 -left-8 backdrop-blur p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border z-20 animate-float-delayed w-64 bg-white/90 border-white/50">
<div className="flex gap-3 items-center mb-2">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100 text-green-600">
<svg className="" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="text-xs font-semibold text-slate-700" style={{}}>Dr. Ainita approved</div>
</div>
<div className="leading-snug text-xs text-slate-600 bg-slate-50 rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5">"Saya dah hantar prescription digital ke farmasi. Ubat akan sampai ke rumah tuan esok pagi."</div>
</div>

<div className="absolute bottom-20 -right-4 p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border z-20 animate-float w-48 bg-white border-slate-100">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Queue</span>
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
</div>
<div className="text-2xl font-bold tracking-tight text-slate-900">2 min</div>
<div className="text-xs text-slate-500">Anggaran menunggu</div>
</div>
</div>
</div>
</section>

<section className="border-y pt-10 pb-10 bg-white border-slate-100">
<div className="max-w-6xl mx-auto px-4 text-center">
<p className="text-xs font-semibold uppercase tracking-widest mb-6 text-slate-400">Dilindungi &amp; Diiktiraf Oleh</p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">

<span className="text-xl font-bold font-serif text-slate-800">MOH</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">Qualitas</span>
<span className="text-xl font-bold font-mono text-slate-800">Alpro</span>
<span className="text-xl font-extrabold italic text-slate-800">Doctor2U</span>
<span className="text-xl font-semibold text-slate-800">Takaful</span>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative text-white bg-slate-900">

<div className="blur-[120px] w-[500px] h-[500px] rounded-full absolute top-0 left-1/4 pointer-events-none bg-blue-600/20">
</div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-purple-600/20">
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="md:text-5xl text-3xl font-semibold tracking-tight mb-6">Klinik dalam poket.
      <span className="text-blue-400">Hanya satu klik.</span>
</h2>
<p className="leading-relaxed text-lg font-normal max-w-md mb-8 text-slate-400">
      App ApaSakit direka untuk kelajuan. Dari pendaftaran simptom hingga video call doktor, semuanya dioptimumkan
      untuk pengalaman satu tangan.
    </p>
<ul className="space-y-8 mb-10">
<li className="flex items-start gap-4 group cursor-default">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg bg-slate-800/50 border-slate-700/50 text-blue-400 shadow-blue-900/10">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="pt-1">
<h3 className="font-semibold mb-1 text-base text-white">Secure Chat &amp; Video</h3>
<p className="text-sm text-slate-500 leading-relaxed">End-to-end encryption untuk privasi maksimum pesakit
            sepanjang masa.</p>
</div>
</li>
<li className="flex items-start gap-4 group cursor-default">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg bg-slate-800/50 border-slate-700/50 text-purple-400 shadow-purple-900/10">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
</path>
</svg>
</div>
<div className="pt-1">
<h3 className="font-semibold mb-1 text-base text-white">Health Records Tracker</h3>
<p className="text-sm text-slate-500 leading-relaxed">Simpan sejarah MC, preskripsi dan surat rujukan
            automatik dalam satu tempat.</p>
</div>
</li>
</ul>
<div className="flex flex-wrap gap-4 rounded-none relative gap-x-2.5 gap-y-2.5">
<a className="flex items-center gap-2.5 transition-all hover:-translate-y-0.5 font-semibold h-12 rounded-lg pr-6 pl-6 hover:bg-slate-200 text-slate-900 bg-white" href="#"><svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="apple-app-store" fill="currentColor" height="20" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
<defs className="">
<lineargradient id="SVG1vlmueNw" x1="50%" x2="50%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#17C9FB"></stop>
<stop offset="100%" stop-color="#1A74E8"></stop>
</lineargradient>
</defs>
<path className="" d="M56.064 0h143.872C230.9 0 256 25.1 256 56.064v143.872C256 230.9 230.9 256 199.936 256H56.064C25.1 256 0 230.9 0 199.936V56.064C0 25.1 25.1 0 56.064 0" fill="url(#SVG1vlmueNw)">
</path>
<path className="" d="m82.042 185.81l.024.008l-8.753 15.16c-3.195 5.534-10.271 7.43-15.805 4.235s-7.43-10.271-4.235-15.805l6.448-11.168l.619-1.072c1.105-1.588 3.832-4.33 9.287-3.814c0 0 12.837 1.393 13.766 8.065c0 0 .126 2.195-1.351 4.391m124.143-38.72h-27.294c-1.859-.125-2.67-.789-2.99-1.175l-.02-.035l-29.217-50.606l-.038.025l-1.752-2.512c-2.872-4.392-7.432 6.84-7.432 6.84c-5.445 12.516.773 26.745 2.94 31.046l40.582 70.29c3.194 5.533 10.27 7.43 15.805 4.234c5.533-3.195 7.43-10.271 4.234-15.805l-10.147-17.576c-.197-.426-.539-1.582 1.542-1.587h13.787c6.39 0 11.57-5.18 11.57-11.57s-5.18-11.57-11.57-11.57m-53.014 15.728s1.457 7.411-4.18 7.411H48.092c-6.39 0-11.57-5.18-11.57-11.57s5.18-11.57 11.57-11.57h25.94c4.188-.242 5.18-2.66 5.18-2.66l.024.012l33.86-58.648l-.01-.002c.617-1.133.103-2.204.014-2.373l-11.183-19.369c-3.195-5.533-1.299-12.61 4.235-15.804s12.61-1.3 15.805 4.234l5.186 8.983l5.177-8.967c3.195-5.533 10.271-7.43 15.805-4.234s7.43 10.27 4.235 15.804l-47.118 81.61c-.206.497-.269 1.277 1.264 1.414h28.164l.006.275s16.278.253 18.495 15.454" fill="#FFF">
</path>
</svg>App
        Store</a><a className="flex items-center gap-2.5 transition-all hover:-translate-y-0.5 font-medium h-12 border rounded-lg pr-6 pl-6 hover:bg-slate-700 text-white bg-slate-800 border-slate-700" href="#">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="google-play-icon" fill="currentColor" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 256 283" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z" fill="#EA4335">
</path>
<path className="" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z" fill="#FBBC04">
</path>
<path className="" d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z" fill="#4285F4">
</path>
<path d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z" fill="#34A853">
</path>
</svg>
        Google Play
      </a>
</div>
</div>

<div className="order-1 lg:order-2 w-full min-w-0">
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 sm:mx-0 lg:w-auto w-full pt-8 pr-4 pb-12 pl-4 gap-x-6 gap-y-6 overflow" style={{scrollbarWidth: 'none'}}>

<div className="snap-center shrink-0 relative w-[290px] h-[590px] rounded-[3.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border-[6px] ring-1 group cursor-grab active:cursor-grabbing hover:-translate-y-2 transition-transform duration-300 bg-slate-900 border-slate-900 ring-white/10">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[26px] rounded-full z-50 flex items-center justify-center transition-all duration-300 group-hover:w-[100px] shadow-sm bg-black">
<div className="w-1.5 h-1.5 rounded-full mr-6 bg-slate-800/80"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-800/30"></div>
</div>

<div className="absolute inset-1.5 rounded-[3rem] overflow-hidden flex flex-col bg-slate-50">

<div className="h-12 w-full flex justify-between px-7 items-center pt-3 shrink-0 z-40 bg-white">
<div className="text-[11px] font-semibold text-slate-900">9:41</div>
<div className="flex gap-1.5 text-slate-900">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="M7 12v5.5a2.5 2.5 0 0 0 5 0V12"></path>
</svg>
<div className="w-4 h-2.5 rounded-[2px] border relative border-slate-900 bg-slate-900"></div>
</div>
</div>

<div className="p-4 border-b flex items-center justify-between shadow-sm z-30 shrink-0 bg-white border-slate-100">
<div className="flex items-center gap-3">
<div className="flex text-xs font-bold w-9 h-9 rounded-full items-center justify-center border text-blue-600 bg-blue-50 border-blue-100">
                AH</div>
<div className="">
<div className="text-xs font-bold text-slate-900">Dr. Ainita Harun</div>
<div className="text-[10px] font-medium flex items-center gap-1.5 text-green-600">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                </div>
</div>
</div>
<div className="p-2 rounded-full transition-colors bg-slate-50 hover:bg-slate-100">
<svg className="text-slate-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect className="" height="12" rx="2" width="14" x="2" y="6"></rect>
</svg>
</div>
</div>

<div className="flex-1 p-4 space-y-4 overflow-hidden flex flex-col relative bg-slate-50/50">
<div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none">
</div>
<div className="flex justify-end relative z-10">
<div className="text-xs py-2.5 px-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm bg-blue-600 text-white">
                Hi Doktor, saya demam panas sejak semalam. Suhu 38.5.
              </div>
</div>
<div className="flex justify-start relative z-10">
<div className="text-xs py-2.5 px-3.5 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border bg-white border-slate-200 text-slate-700">
                Hi, ada simptom lain seperti batuk atau selsema?
              </div>
</div>
<div className="flex justify-end relative z-10">
<div className="text-xs py-2.5 px-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm bg-blue-600 text-white">
                Sikit selsema. Tekak pun rasa perit.
              </div>
</div>

<div className="mt-auto backdrop-blur-xl rounded-2xl p-4 shadow-xl border animate-fade-in-up ring-1 relative z-20 bg-white/80 border-white/50 ring-slate-900/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse-soft bg-blue-100 text-blue-600">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</svg>
</div>
<div className="">
<div className="text-xs font-bold text-slate-900">Incoming Video Call</div>
<div className="text-[10px] text-slate-500">Dr. Ainita is calling...</div>
</div>
<div className="ml-auto flex gap-2">
<div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center cursor-pointer shadow-md shadow-green-500/20 transition-colors text-white hover:bg-green-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m18 6-12 12"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center cursor-pointer shadow-md shadow-red-500/20 transition-colors text-white hover:bg-red-600">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="h-1 w-1/3 mx-auto rounded-full mb-2 opacity-20 bg-slate-900"></div>
</div>
</div>

<div className="snap-center shrink-0 relative w-[290px] h-[590px] rounded-[3.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border-[6px] ring-1 group cursor-grab active:cursor-grabbing hover:-translate-y-2 transition-transform duration-300 bg-slate-900 border-slate-900 ring-white/10">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[26px] rounded-full z-50 flex items-center justify-center transition-all duration-300 group-hover:w-[100px] shadow-sm bg-black">
<div className="w-1.5 h-1.5 rounded-full mr-6 bg-slate-800/80"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-800/30"></div>
</div>

<div className="absolute inset-1.5 bg-[#F0F8FF] rounded-[3rem] overflow-hidden flex flex-col">

<div className="h-12 w-full flex justify-between px-7 items-center pt-3 bg-[#F0F8FF] shrink-0 z-40">
<div className="text-[11px] font-semibold text-slate-900">12:00</div>
<div className="flex gap-1.5 text-slate-900">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
<div className="w-4 h-2.5 rounded-[2px] border relative border-slate-900 bg-slate-900"></div>
</div>
</div>

<div className="px-4 py-3 flex items-center justify-between shrink-0 bg-[#0F3854] mx-3 mt-1 rounded-2xl shadow-lg z-10 shadow-blue-900/10">
<div className="w-8 h-8 rounded-full bg-[#F37042] flex items-center justify-center shadow-md text-white">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</div>
<div className="font-semibold text-sm text-white">Prescription</div>
<div className="w-8"></div>
</div>

<div className="mx-3 mt-4 flex p-1 rounded-xl shadow-sm shrink-0 border bg-white border-slate-100">
<div className="flex-1 py-1.5 flex items-center justify-center gap-1.5 rounded-lg bg-[#4FD1C5] shadow-sm text-[10px] font-semibold text-white">
              Mobile View
            </div>
<div className="flex-1 py-1.5 flex items-center justify-center gap-1.5 rounded-lg text-[10px] font-medium transition-colors text-slate-400 hover:bg-slate-50">
              PDF View
            </div>
</div>

<div className="m-3 rounded-2xl p-4 shadow-sm border flex-1 overflow-hidden flex flex-col relative bg-white border-slate-100">
<div className="flex justify-between items-start mb-4">
<div className="">
<div className="text-xs font-bold text-slate-900">Dr Salma Ismail</div>
<div className="text-[9px] text-slate-500 leading-tight mt-1">
                  C-3A.3A The Five, 50480 KL
                </div>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 opacity-80 rotate-45 to-orange-400">
</div>
</div>
<div className="mb-4 p-2.5 rounded-xl border bg-slate-50 border-slate-100">
<div className="flex justify-between text-[9px] mb-1">
<div className="text-slate-500">For: <span className="font-semibold text-slate-900">Rania Rahman</span>
</div>
<div className="text-slate-500">Date: <span className="font-semibold text-slate-900">08-Jan-25</span></div>
</div>
<div className="flex justify-between text-[9px]">
<div className="text-slate-500">NRIC: <span className="font-semibold text-slate-900">880808-10-5050</span>
</div>
</div>
</div>
<div className="space-y-2 overflow-y-auto flex-1 no-scrollbar pr-1">
<div className="flex gap-3 items-center p-2 rounded-xl transition-colors hover:bg-purple-50">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 bg-purple-100 text-purple-600">
                  1</div>
<div className="">
<div className="text-[10px] font-bold text-slate-900">Paracil Tablet 500mg</div>
<div className="text-[9px] text-slate-500 leading-tight">2 tablets, 3 times daily</div>
</div>
</div>
<div className="flex gap-3 items-center p-2 rounded-xl transition-colors hover:bg-purple-50">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 bg-purple-100 text-purple-600">
                  2</div>
<div className="">
<div className="text-[10px] font-bold text-slate-900">Cezti Stada 10mg</div>
<div className="text-[9px] text-slate-500 leading-tight">1 tablet, 1 time daily</div>
</div>
</div>
<div className="flex gap-3 items-center p-2 rounded-xl transition-colors hover:bg-purple-50">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 bg-purple-100 text-purple-600">
                  3</div>
<div className="">
<div className="text-[10px] font-bold text-slate-900">Loratadine 5mg</div>
<div className="text-[9px] text-slate-500 leading-tight">1 tablet, 1 time daily</div>
</div>
</div>
</div>
</div>
<div className="px-4 pb-4 pt-1 flex items-center justify-between gap-3 shrink-0">
<button className="w-full bg-[#F37042] hover:bg-[#E56035] text-xs font-semibold py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-white shadow-orange-200">
                                        Discuss with Doctor
                                    </button>
</div>
<div className="h-1 w-1/3 mx-auto rounded-full mb-2 opacity-10 bg-slate-900"></div>
</div>
</div>

<div className="snap-center shrink-0 relative w-[290px] h-[590px] rounded-[3.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border-[6px] ring-1 group cursor-grab active:cursor-grabbing hover:-translate-y-2 transition-transform duration-300 bg-slate-900 border-slate-900 ring-white/10">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[26px] rounded-full z-50 flex items-center justify-center transition-all duration-300 group-hover:w-[100px] shadow-sm bg-black">
<div className="w-1.5 h-1.5 rounded-full mr-6 bg-slate-800/80"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-800/30"></div>
</div>

<div className="absolute inset-1.5 rounded-[3rem] overflow-hidden flex flex-col bg-slate-50">

<div className="h-12 w-full flex justify-between px-7 items-center pt-3 shrink-0 z-40 bg-white">
<div className="text-[11px] font-semibold text-slate-900">12:05</div>
<div className="flex gap-1.5 text-slate-900">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
<div className="w-4 h-2.5 rounded-[2px] border relative border-slate-900 bg-slate-900"></div>
</div>
</div>

<div className="p-4 border-b flex items-center gap-3 shrink-0 shadow-sm z-10 bg-white border-slate-100">
<div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</div>
<div className="text-sm font-bold text-slate-900">Medical Certificate</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden border rounded-xl mt-4 mr-4 mb-4 ml-4 pt-6 pr-6 pb-6 pl-6 relative shadow-sm bg-white border-slate-100">
<div className="flex items-center gap-3 border-b pb-4 mb-4 border-slate-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md bg-blue-600 text-white shadow-blue-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
</path>
</svg>
</div>
<div className="">
<div className="text-[10px] font-bold uppercase tracking-widest text-slate-900">ApaSakit Digital</div>
<div className="text-[8px] text-slate-500">Telemedicine Provider (KKM-1293)</div>
</div>
</div>
<div className="text-center mb-6">
<div className="text-sm font-bold mb-1 text-slate-900">CERTIFICATE OF ILLNESS</div>
<div className="text-[9px] uppercase tracking-wide text-slate-400">Serial: MC-2025-89912</div>
</div>
<div className="space-y-4 text-[10px] leading-relaxed font-serif relative z-10 text-slate-600">
<p className="">This is to certify that
                <span className="font-bold border-b px-1 text-slate-900 border-slate-300 bg-yellow-50/50">Rania Rahman</span>
                (NRIC: 880808-10-5050) has undergone a teleconsultation session on
                <span className="font-bold text-slate-900">08 January 2025</span>.
              </p>
<p className="">Based on my examination, the patient is suffering from acute illness and is unfit for duty for
                <span className="font-bold px-1 text-slate-900 bg-yellow-50/50">1 day</span>.
              </p>
</div>
<div className="mt-auto pt-6">
<div className="w-24 h-12 mb-1 opacity-80">
<svg className="w-full h-full text-blue-800" viewbox="0 0 100 50">
<path d="M10,30 Q30,10 50,30 T90,20" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<div className="border-t w-32 pt-1 border-slate-800">
<div className="text-[10px] font-bold text-slate-900">Dr. Ainita Harun</div>
<div className="text-[8px] text-slate-500">MMC: 59281</div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
<svg fill="currentColor" height="200" viewbox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
</div>
<div className="px-4 pb-4 mt-auto">
<button className="w-full text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors bg-slate-900 text-white hover:bg-slate-800">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                                        Download PDF
                                    </button>
</div>
<div className="h-1 w-1/3 mx-auto rounded-full mb-2 opacity-10 bg-slate-900"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-24 border-b relative overflow-hidden bg-slate-50 border-slate-200">
<div className="max-w-6xl mx-auto px-4 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Cara guna — 4 langkah.</h2>
<p className="mt-4 text-lg text-slate-500 max-w-lg">Proses yang pantas dan mudah. Dapatkan rawatan dalam masa kurang 10 minit.</p>
</div>
<a className="group inline-flex items-center gap-2 font-semibold transition-colors text-blue-600 hover:text-blue-700" href="/start">
        Start sekarang
        <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-px mask-gradient z-0 bg-slate-200"></div>

<div className="relative group">
<div className="p-8 rounded-2xl border shadow-sm h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative z-10 bg-white border-slate-200">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 ring-1 bg-blue-50 text-blue-600 ring-blue-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">Step 1</div>
<h3 className="text-lg font-bold mb-3 text-slate-900">Isi borang (2 minit)</h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Anda bagi nama + nombor telefon + ringkas simptom untuk pendaftaran awal.
          </p>
</div>
</div>

<div className="relative group">
<div className="p-8 rounded-2xl border shadow-sm h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative z-10 bg-white border-slate-200">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 ring-1 bg-indigo-50 text-indigo-600 ring-indigo-100" style={{}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
<div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">Step 2</div>
<h3 className="text-lg font-bold mb-3 text-slate-900">Dapat link &amp; set-up app</h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Kami hantar link download terus ke SMS/WhatsApp anda berserta panduan log masuk.
          </p>
</div>
</div>

<div className="relative group">
<div className="p-8 rounded-2xl border shadow-sm h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative z-10 bg-white border-slate-200">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 ring-1 bg-purple-50 text-purple-600 ring-purple-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">Step 3</div>
<h3 className="text-lg font-bold mb-3 text-slate-900">Mula chat atau video call dengan doktor</h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Doktor bertauliah bertugas 24/7 sepanjang hari untuk konsultasi segera.
          </p>
</div>
</div>

<div className="relative group">
<div className="p-8 rounded-2xl border shadow-sm h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative z-10 bg-white border-slate-200">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 ring-1 bg-emerald-50 text-emerald-600 ring-emerald-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"></path><path d="M14 17h1"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
</div>
<div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">Step 4</div>
<h3 className="text-lg font-bold mb-3 text-slate-900">Dapatkan MC + ubat (jika perlu)</h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Ubat boleh <span className="font-bold px-1 rounded text-slate-900 bg-slate-100">dihantar</span> ke rumah atau <span className="font-bold px-1 rounded text-slate-900 bg-slate-100">self-collect</span> di farmasi berdekatan.
          </p>
</div>
</div>
</div>

<div className="mt-8 md:hidden">
<a className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-lg transition-transform active:scale-95 bg-slate-900 text-white shadow-slate-200" href="/start">
          Start sekarang
          <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section><section className="overflow-hidden pt-24 pb-24 relative bg-white" id="use-cases-tabs">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-4 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">Direka untuk keperluan sebenar.</h2>
<p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">Sistem kesihatan yang fleksibel mengikut situasi anda, bukan sebaliknya.</p>
</div>

<div className="flex flex-col items-center">

<div className="inline-flex flex-wrap justify-center gap-2 p-1.5 backdrop-blur-sm border rounded-full mb-12 relative bg-slate-100/80 border-slate-200/60">
<button className="tab-trigger active-tab flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] ring-1 text-slate-900 bg-white ring-slate-900/5" onclick="switchTab('tab-1', this)">
<svg className="text-blue-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v6"></path><path d="M11 19v2"></path><path d="M5 19v2"></path></svg>
          Simptom Biasa
        </button>
<button className="tab-trigger flex gap-2 transition-all duration-300 text-sm font-medium text-slate-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center hover:text-slate-900 hover:bg-white/50" onclick="switchTab('tab-2', this)">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(15, 23, 42)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Keluarga
        </button>
<button className="tab-trigger flex transition-all duration-300 text-sm font-medium text-slate-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center hover:text-slate-900 hover:bg-white/50" onclick="switchTab('tab-3', this)">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path className="" d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
          Ulang Preskripsi
        </button>
</div>

<div className="w-full max-w-5xl relative min-h-[850px] md:min-h-[450px]">

<div className="tab-content absolute inset-0 transition-all duration-500 ease-out opacity-100 translate-y-0 z-10" id="tab-1">
<div className="grid md:grid-cols-2 md:gap-16 md:p-12 overflow-hidden group h-full border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm gap-x-8 gap-y-8 items-center bg-slate-50 border-slate-200/80">
<div className="z-10 order-2 md:order-1 relative">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 bg-blue-100 text-blue-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3a1 1 0 0 0 .9 2.5z">
</path>
</svg>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-slate-900">Untuk simptom ringan &amp;
            biasa</h3>
<div className="space-y-6">
<p className="text-lg text-slate-500 leading-relaxed">
              Tidak perlu memandu, mencari parking, atau menunggu giliran di klinik yang sesak untuk sakit biasa seperti
              demam atau selsema.
            </p>
<div className="flex items-start gap-4 p-4 rounded-xl border shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] bg-white border-slate-200/60">
<div className="w-1 bg-blue-500 self-stretch rounded-full"></div>
<div className="">
<p className="text-sm font-medium italic text-slate-900">"Ramai orang ke klinik untuk benda yang sebenarnya
                  boleh diurus secara virtual."</p>
</div>
</div>
</div>
</div>
<div className="relative order-1 md:order-2 h-64 md:h-full min-h-[300px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr rounded-2xl transform rotate-3 scale-95 opacity-50 transition-transform duration-700 group-hover:rotate-6 from-blue-100 to-indigo-50" style={{}}>
</div>
<img alt="Virtual Consultation" className="transition-transform duration-700 group-hover:scale-[1.02] w-full h-full object-cover border rounded-2xl absolute top-0 right-0 bottom-0 left-0 shadow-lg border-white/50" src="https://images.unsplash.com/photo-1699472627754-842049ce2764?w=1600&amp;q=80"/>
</div>
</div>
</div>

<div className="tab-content absolute inset-0 transition-all duration-500 ease-out opacity-0 translate-y-4 pointer-events-none z-0" id="tab-2">
<div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center rounded-3xl p-8 md:p-12 border shadow-sm h-full overflow-hidden relative group bg-slate-50 border-slate-200/80">
<div className="relative z-10 order-2 md:order-1">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 bg-purple-100 text-purple-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-slate-900">Untuk keluarga</h3>
<div className="space-y-6">
<p className="text-lg text-slate-500 leading-relaxed">
              Kesihatan anak kecil sering tidak menentu. Dapatkan nasihat pakar pediatrik dari rumah sebelum membuat
              keputusan ke hospital.
            </p>
<div className="flex items-start gap-4 p-4 rounded-xl border shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] bg-white border-slate-200/60">
<div className="w-1 bg-purple-500 self-stretch rounded-full"></div>
<div>
<p className="text-sm font-medium italic text-slate-900">"Bila anak demam tengah malam, anda perlukan
                  jawapan cepat."</p>
</div>
</div>
</div>
</div>
<div className="relative order-1 md:order-2 h-64 md:h-full min-h-[300px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr rounded-2xl transform -rotate-2 scale-95 opacity-50 transition-transform duration-700 group-hover:-rotate-4 from-purple-100 to-pink-50">
</div>
<img alt="Family Health" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg border transition-transform duration-700 group-hover:scale-[1.02] border-white/50" src="https://images.unsplash.com/photo-1766505471493-dd8df085d0d2?w=1600&amp;q=80"/>
</div>
</div>
</div>

<div className="tab-content absolute inset-0 transition-all duration-500 ease-out opacity-0 translate-y-4 pointer-events-none z-0" id="tab-3">
<div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center rounded-3xl p-8 md:p-12 border shadow-sm h-full overflow-hidden relative group bg-slate-50 border-slate-200/80">
<div className="relative z-10 order-2 md:order-1">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 bg-emerald-100 text-emerald-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
<path d="M10 9H8"></path>
</svg>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-slate-900">Untuk susulan &amp; ulang
            preskripsi</h3>
<div className="space-y-6">
<p className="text-lg text-slate-500 leading-relaxed">
              Ubat akan dihantar terus ke pintu rumah. Doktor mempunyai akses penuh kepada sejarah
              perubatan anda.
            </p>
<div className="flex items-start gap-4 p-4 rounded-xl border shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] bg-white border-slate-200/60">
<div className="w-1 bg-emerald-500 self-stretch rounded-full"></div>
<div>
<p className="text-sm font-medium italic text-slate-900">"Rekod kesihatan tersimpan, jadi doktor boleh
                  follow up dengan konteks."</p>
</div>
</div>
</div>
</div>
<div className="relative order-1 md:order-2 h-64 md:h-full min-h-[300px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr rounded-2xl transform rotate-2 scale-95 opacity-50 transition-transform duration-700 group-hover:rotate-3 from-emerald-100 to-teal-50">
</div>
<img alt="Medical Records" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg border transition-transform duration-700 group-hover:scale-[1.02] border-white/50" src="https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?w=1600&amp;q=80" style={{}}/>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="pt-24 pr-4 pb-24 pl-4 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4 text-slate-900">
          Segalanya yang anda perlu.
        </h2>
<p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Kami bukan sekadar video call. Kami adalah ekosistem primary care yang lengkap.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="group relative overflow-hidden rounded-3xl border p-6 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between bg-slate-50 border-slate-100">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<svg className="text-blue-600" fill="none" height="120" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="120"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg shadow-sm flex items-center justify-center mb-4 border bg-white text-blue-600 border-slate-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-slate-900">Konsultasi Tanpa Had</h3>
<p className="text-slate-500 text-sm leading-relaxed">Akses kepada doktor 24 jam sehari. Tiada caj tambahan dalam pelan langganan.</p>
</div>
<div className="w-full rounded-lg p-3 shadow-sm border flex items-center gap-3 relative z-10 bg-white border-slate-100">
<span className="flex h-2.5 w-2.5 relative shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-slate-700">Menunggu: <span className="font-semibold">~3 min</span></span>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between bg-blue-600 text-white">
<div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
<svg className="" fill="none" height="150" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="150"><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-500 border flex items-center justify-center mb-4 shadow-sm border-blue-400 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-2 tracking-tight">Penghantaran Ubat</h3>
<p className="text-sm leading-relaxed text-blue-100">Percuma ke seluruh Malaysia. Sampai dalam 3 jam (KV) atau 1-2 hari bekerja.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border p-6 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between bg-white border-slate-200">
<div className="">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-purple-50 text-purple-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-slate-900">Rekod Digital</h3>
<p className="text-slate-500 text-sm leading-relaxed">Semua sejarah sakit, MC, dan surat rujukan tersimpan selamat dalam app.</p>
</div>
<div className="flex items-center gap-2 mt-4 opacity-60">
<div className="h-1.5 w-full rounded-full overflow-hidden bg-slate-100">
<div className="h-full bg-purple-500 w-2/3 rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 transition-all hover:shadow-xl hover:-translate-y-1 from-slate-900 to-slate-800 text-white">
<div className="absolute top-0 right-0 p-8 opacity-10">
<svg fill="none" height="200" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="200"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex flex-col md:flex-row items-center gap-8 h-full relative z-10">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border bg-slate-700 text-white border-slate-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight">Liputan Keluarga</h3>
<p className="leading-relaxed text-slate-400">Satu langganan boleh menampung pasangan dan anak-anak. Urus kesihatan keluarga dari satu dashboard.</p>
</div>
<div className="backdrop-blur rounded-xl p-5 border w-full md:w-64 shadow-inner bg-white/10 border-white/10">
<div className="flex items-center justify-between mb-4 border-b pb-2 border-white/10">
<span className="text-sm font-medium">Profile</span>
<span className="text-[10px] font-bold uppercase tracking-wider bg-green-500/20 px-2 py-0.5 rounded-full text-green-400">Active</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold ring-2 ring-slate-900">A</div>
<span className="text-sm font-medium">Ayah (Admin)</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold ring-2 ring-slate-900">I</div>
<span className="text-sm text-slate-300">Ibu</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold ring-2 text-black ring-slate-900">A</div>
<span className="text-sm text-slate-300">Adik</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border p-6 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between bg-white border-slate-200">
<div className="opacity-50 absolute top-0 right-0 bottom-0 left-0 bg-slate-50" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border bg-orange-50 text-orange-600 border-orange-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-slate-900">Rujukan Fizikal</h3>
<p className="text-slate-500 text-sm leading-relaxed">Perlu rawatan lanjut? Kami sediakan surat rujukan digital ke 2,000+ klinik panel.</p>
</div>
<div className="relative z-10 mt-4 pt-4 border-t flex items-center justify-between border-slate-100">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Panel Clinics</span>
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border-2 bg-slate-200 border-white"></div>
<div className="h-6 w-6 rounded-full border-2 bg-slate-300 border-white"></div>
<div className="h-6 w-6 rounded-full border-2 flex items-center justify-center text-[8px] font-bold bg-slate-400 border-white text-white">+</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative overflow-hidden bg-slate-50">

<div className="mesh-bg opacity-50 absolute top-0 right-0 bottom-0 left-0"></div><div className="max-w-3xl mx-auto relative z-10 mb-24 pt-8">

<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Soalan Lazim</h2>
<p className="mt-4 text-slate-500 text-lg">Jawapan untuk pertanyaan popular anda.</p>
</div>

<div className="space-y-3">

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Percubaan 7 hari ni betul-betul free?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Ya. Anda boleh mula dengan chat doktor dulu. Langganan bermula bila trial tamat atau bila ubat untuk penghantaran diperlukan (ikut T&amp;C).
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Berapa cepat boleh jumpa doktor?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Biasanya dalam masa kurang 10 minit, bergantung kepada queue dan waktu puncak.
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Boleh consult dalam BM?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Ya — video/call/chat dalam BM atau English.
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Ubat macam mana?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Ubat boleh dihantar nationwide atau anda boleh self-collect di farmasi (ikut arahan).
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Apa yang termasuk dalam pelan?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Unlimited consults + acute meds coverage + delivery + access to health records (ikut pelan).
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex cursor-pointer list-none [&amp;::--slate-900 pt-4 pr-4 pb-4 pl-4 items-center justify-between">Ada klinik fizikal?<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span></summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Kami tiada klinik fizikal sendiri, tapi doktor boleh refer jika perlu pemeriksaan bersemuka.
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Boleh dapat MC (sijil cuti sakit) melalui teleconsult?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
<span className="font-semibold text-slate-900">Tidak — MMC memutuskan MC tidak boleh dikeluarkan semata-mata selepas teleconsultation.</span> Jika perlu MC, anda perlukan konsultasi yang melibatkan pemeriksaan fizikal seperti ditetapkan.
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Macam mana kalau kes saya perlukan pemeriksaan fizikal?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Doktor akan maklumkan dan kami bantu anda dengan rujukan / langkah seterusnya.
      </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm open:border-blue-300 open:ring-4 open:ring-blue-50/50 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden select-none">
<span className="text-sm font-medium text-slate-900">Data saya selamat?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-slate-400 group-open:text-blue-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed">
        Data anda dilindungi dengan penyulitan gred bank (end-to-end encryption) dan mematuhi PDPA. Lihat <a className="text-blue-600 hover:text-blue-700 font-medium transition-colors hover:underline" href="/privacy">Dasar Privasi</a> kami.
      </div>
</details>
</div>
</div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Simple Pricing.
          </h2>
<p className="text-lg text-slate-500">Telus. Tiada caj tersembunyi. Batalkan bila-bila masa.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="rounded-2xl p-8 shadow-sm border hover:shadow-xl transition-all duration-300 bg-white border-slate-200">
<h3 className="text-lg font-semibold mb-2 text-slate-900">Solo</h3>
<div className="text-3xl font-bold mb-1 text-slate-900">RM 19<span className="text-sm font-normal text-slate-400">/bulan</span></div>
<p className="text-sm text-slate-500 mb-8">Untuk individu</p>
<a className="block w-full py-2.5 rounded-lg border text-center text-sm font-semibold transition-colors mb-8 border-slate-200 text-slate-700 hover:bg-slate-50" href="/start">
              Pilih Solo
            </a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex gap-3">
<svg className="w-5 h-5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Unlimited consults
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Basic meds included
              </li>
</ul>
</div>

<div className="rounded-2xl p-8 shadow-2xl border-2 relative transform md:-translate-y-4 z-10 bg-white border-blue-600">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg bg-blue-600 text-white">MOST POPULAR</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900">Duo</h3>
<div className="text-3xl font-bold mb-1 text-slate-900">RM 35<span className="text-sm font-normal text-slate-400">/bulan</span></div>
<p className="text-sm text-slate-500 mb-8">Untuk pasangan</p>
<a className="block w-full py-2.5 rounded-lg text-center text-sm font-semibold shadow-lg transition-all mb-8 bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200" href="/start">
              Mula 7 Hari Percuma
            </a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex gap-3 font-medium text-slate-900">
<svg className="w-5 h-5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Everything in Solo
              </li>
<li className="flex gap-3 font-medium text-slate-900">
<svg className="w-5 h-5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                2 separate accounts
              </li>
</ul>
</div>

<div className="hover:shadow-xl transition-all duration-300 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm bg-white border-slate-200">
<h3 className="text-lg font-semibold mb-2 text-slate-900">Family</h3>
<div className="text-3xl font-bold mb-1 text-slate-900">RM 60<span className="text-sm font-normal text-slate-400">/bulan</span></div>
<p className="text-sm text-slate-500 mb-8">Up to 5 members</p>
<a className="block w-full py-2.5 rounded-lg border text-center text-sm font-semibold transition-colors mb-8 border-slate-200 text-slate-700 hover:bg-slate-50" href="/start">
              Pilih Family
            </a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex gap-3">
<svg className="w-5 h-5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Lowest price per person
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Kids included
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 border-slate-200 border-t pt-24 pb-24 relative">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-[120px] mix-blend-multiply"></div>
</div>
<div className="max-w-6xl mx-auto px-4 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold tracking-wide uppercase mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
          Live Teleconsultation
        </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]">
          Tak perlu teka.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tanya doktor dulu.</span>
</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
          Sertai ribuan rakyat Malaysia yang telah beralih ke teleconsult. Jimat masa, jimat tenaga, kekal sihat dengan konsultasi video HD.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-slate-900 rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 hover:shadow-slate-300/50" href="/start">
            Mulakan Percubaan 7 Hari
          </a>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 pt-6 border-t border-slate-200/60">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=5" style={{}}/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=9" style={{}}/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+2k</div>
</div>
<div className="">
<span className="text-slate-900 font-bold">4.9/5</span> rating dari pesakit
           </div>
<div className="h-1 w-1 rounded-full bg-slate-300"></div>
<div>Tiada kad kredit diperlukan</div>
</div>
</div>

<div className="order-1 lg:order-2 flex lg:justify-end perspective-1000 justify-center">

<div className="relative animate-float duration-[6s]">

<div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[50px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.3),0_30px_60px_-30px_rgba(0,0,0,0.5),inset_0_-2px_6px_0_rgba(255,255,255,0.1)] ring-1 ring-slate-900/10 border-[6px] border-slate-800 z-20">

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-center px-3 shadow-sm transition-all duration-300 hover:w-[110px] hover:h-[32px] cursor-pointer group">
<div className="w-[80%] h-full flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="animate-pulse bg-lime-400 w-2 h-2 rounded-full"></div>
<div className="w-8 h-1 bg-white/20 rounded-full"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none group-hover:opacity-0">
<div className="w-2 h-2 rounded-full bg-[#1c1c1e] ring-1 ring-white/10"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#0f0f11] opacity-50"></div>
</div>
</div>

<div className="w-full h-full bg-slate-800 rounded-[44px] overflow-hidden relative text-white">

<div className="absolute inset-0 w-full h-full">
<img alt="Doctor Video" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4514fc9e-3a98-436b-a61f-b8d215183626_800w.webp" style={{}}/>
<div className="bg-gradient-to-b from-black/60 via-transparent to-black/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="flex z-10 w-full pt-16 pr-6 pb-6 pl-6 absolute top-0 left-0 items-start justify-between">
<div className="flex flex-col animate-fade-in-up">
<span className="text-[10px] uppercase font-medium text-white/70 tracking-wide mb-0.5" style={{}}>VIDEO CALL</span>
<span className="flex items-center gap-2 text-lg font-bold text-white tracking-tight" style={{}}>Dr. Azman Ismail <svg className="text-blue-400" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></span>
<span className="inline-flex items-center gap-1.5 mt-1 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-md w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] font-semibold text-white tracking-wide">08:12</span>
</span>
</div>

</div>

<div className="absolute bottom-28 right-5 w-24 h-32 bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-white/20 z-20 group cursor-pointer hover:scale-105 transition-transform duration-300">
<img alt="Patient" className="w-full h-full object-cover transform scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fcac307-8b2d-4446-a9bd-6bd1e9506187_320w.jpg" style={{}}/>
<div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-green-500 ring-1 ring-white"></div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30 w-full px-6 justify-center">

<button className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</button>

<button className="w-14 h-14 rounded-full bg-red-500 shadow-lg shadow-red-500/40 flex items-center justify-center text-white hover:scale-105 hover:bg-red-600 transition-all">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path></svg>
</button>

<button className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect className="" height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</button>

</div>

<div className="absolute bottom-28 left-6 right-36">
</div>
</div>
</div>

<div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-400 rounded-full blur-[60px] opacity-30 -z-10 animate-pulse"></div>
<div className="absolute top-1/2 -left-16 w-40 h-40 bg-blue-500 rounded-full blur-[70px] opacity-30 -z-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center bg-blue-600 text-white">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="font-bold tracking-tight text-slate-900">ApaSakit</span>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="transition-colors hover:text-slate-900" href="/privacy">Privacy</a>
<a className="transition-colors hover:text-slate-900" href="/terms">Terms</a>
<a className="transition-colors hover:text-slate-900" href="/support">Support</a>
</div>
<p className="text-xs text-slate-400">© 2023 ApaSakit Sdn Bhd. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
