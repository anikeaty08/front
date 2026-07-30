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



tailwind.config = { theme: { fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] } } }



lucide.createIcons();

// Sidebar collapse (mobile)
document.getElementById('sidebarToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('-translate-x-full');
});

// Account menu
const avatarBtn = document.getElementById('avatarBtn');
const accountMenu = document.getElementById('accountMenu');
avatarBtn.addEventListener('click', e => {
  e.stopPropagation();
  accountMenu.classList.toggle('hidden');
});
window.addEventListener('click', () => accountMenu.classList.add('hidden'));

// Download HTML
document.getElementById('downloadBtn').addEventListener('click', e => {
  e.preventDefault();
  const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'streamflow.html';
  a.click();
  URL.revokeObjectURL(url);
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
      <iframe className="fixed top-0 w-full h-screen" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/dunes-3fd4468737972c9a084de27efa2263c4" width="100%"></iframe><div className="spline-container fixed top-0 w-full h-screen -z-10 hue-rotate-15"></div>

<div className="relative w-full max-w-6xl bg-zinc-900 text-white rounded-3xl shadow-xl overflow-hidden animate-fade-in">

<div className="h-9 flex animate-fade-in-up bg-slate-950/80 pr-4 pl-4 backdrop-blur space-x-2 items-center">
<div className="flex space-x-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
</div>
<p className="text-sm text-zinc-400 select-none font-sans">StreamFlow</p>
</div>
<div className="flex">

<aside className="w-64 shrink-0 bg-zinc-950/60 backdrop-blur-xl border-r border-zinc-800 animate-fade-in-up animate-delay-100" id="sidebar">
<nav className="flex flex-col h-full overflow-y-auto bg-gradient-to-b from-[#2E335A] to-[#1C1B33] pt-6 pr-3 pb-6 pl-3">
<button className="mb-6 self-end text-zinc-400 hover:text-white transition-colors" id="sidebarToggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<ul className="space-y-1">
<li className="animate-fade-in-up animate-delay-200">
<a className="flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500/70 to-violet-500/80 hover:to-violet-600 font-medium transition-all font-sans" href="#">
<svg className="lucide lucide-home w-5 h-5 mr-3" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Dashboard
            </a>
</li>
<li className="animate-fade-in-up animate-delay-300"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-zap w-5 h-5 mr-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Quick Clips</a></li>
<li className="animate-fade-in-up animate-delay-400"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-rss w-5 h-5 mr-3" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg> Following</a></li>
<li className="animate-fade-in-up animate-delay-500"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-headphones w-5 h-5 mr-3" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg> Audio</a></li>
</ul>
<h3 className="mt-6 mb-2 px-3 text-xs uppercase tracking-wide text-zinc-500 animate-fade-in-up animate-delay-600 font-sans">Personal</h3>
<ul className="space-y-1">
<li className="animate-fade-in-up animate-delay-700"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-folder w-5 h-5 mr-3" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> Collection</a></li>
<li className="animate-fade-in-up animate-delay-800"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-rewind w-5 h-5 mr-3" data-lucide="rewind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg> Recent</a></li>
<li className="animate-fade-in-up animate-delay-900"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-upload w-5 h-5 mr-3" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg> My Content</a></li>
<li className="animate-fade-in-up animate-delay-1000"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-clock w-5 h-5 mr-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Queue</a></li>
<li className="animate-fade-in-up animate-delay-1100"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><svg className="lucide lucide-save w-5 h-5 mr-3" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Offline</a></li>
</ul>
<h3 className="mt-6 mb-2 px-3 text-xs uppercase tracking-wide text-zinc-500 animate-fade-in-up animate-delay-1200 font-sans">Creators</h3>
<ul className="space-y-1">
<li className="animate-fade-in-up animate-delay-1300"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><span className="w-5 h-5 mr-3 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 grid place-items-center text-xs font-bold font-sans">T</span> TechVision</a></li>
<li className="animate-fade-in-up animate-delay-1400"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><span className="w-5 h-5 mr-3 rounded-full bg-green-600 grid place-items-center text-xs font-bold font-sans">C</span> CodeCraft</a></li>
<li className="animate-fade-in-up animate-delay-1500"><a className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-sans" href="#"><span className="w-5 h-5 mr-3 rounded-full bg-blue-500 grid place-items-center text-xs font-bold font-sans">D</span> DigitalArts</a></li>
</ul>
</nav>
</aside>

<main className="flex-1 relative bg-gradient-to-l from-[#2B2F53] to-[#1D1C34] border-slate-50">

<div className="sticky top-0 z-20 flex animate-fade-in-up animate-delay-200 bg-[#C427FB]/0 border-zinc-800/0 border-b pt-4 pr-6 pb-4 pl-6 backdrop-blur items-center justify-between">
<form className="flex-1 max-w-lg">
<label className="relative block">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<svg className="lucide lucide-search w-5 h-5 text-zinc-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input className="w-full placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition-all text-sm bg-gradient-to-r from-[#2D3762] to-[#343E63] border-slate-50/5 rounded-full pt-2 pr-4 pb-2 pl-10" placeholder="Discover content" type="search" />
</label>
</form>
<div className="flex items-center space-x-4 ml-6">
<button className="rounded-full p-2 hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="rounded-full p-2 hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>

<button className="relative" id="avatarBtn">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 font-semibold hover:bg-purple-600 transition-colors font-sans">M</span>
</button>
</div>
</div>

<div className="overflow-x-auto scrollbar-none animate-fade-in-up animate-delay-300 bg-gradient-to-b from-[#C427FB]/0 to-[#C427FB]/5 border-purple-400/20 border-b pt-4 pr-6 pb-4 pl-6">
<ul className="flex text-sm font-medium space-x-4">
<li className=""><button className="px-4 py-1.5 rounded-md bg-zinc-700 hover:bg-zinc-600 transition-colors font-sans">All</button></li>
<li className=""><button className="px-4 py-1.5 rounded-md hover:bg-zinc-700 transition-colors font-sans">Technology</button></li>
<li className=""><button className="px-4 py-1.5 rounded-md hover:bg-zinc-700 transition-colors font-sans">Tutorials</button></li>
<li className=""><button className="px-4 py-1.5 rounded-md hover:bg-zinc-700 transition-colors font-sans">Creative</button></li>
<li className=""><button className="px-4 py-1.5 rounded-md hover:bg-zinc-700 transition-colors font-sans">Science</button></li>
<li className=""><button className="px-4 py-1.5 rounded-md hover:bg-zinc-700 transition-colors font-sans">Reviews</button></li>
<li className=""><button className="px-4 py-1.5 rounded-md hover:bg-zinc-700 transition-colors font-sans">Innovation</button></li>
<li className=""><button className="px-4 py-1.5 rounded-md hover:bg-zinc-700 transition-colors font-sans">Analysis</button></li>
</ul>
</div>

<section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pr-6 pb-32 pl-6">

<article className="group relative overflow-hidden cursor-pointer animate-fade-in-up animate-delay-400 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#C427FB]/50 to-[#C427FB]/0 rounded-xl">
<div className="aspect-w-16 aspect-h-9">
<img alt="" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1711861982569-565113102217?w=800&q=80" style={{}} />
</div>
<div className="absolute bottom-2 right-2 bg-zinc-900/80 px-1.5 text-xs rounded-md font-sans">12:45</div>
<div className="pt-3">
<h3 className="truncate font-semibold text-zinc-100 pr-3 pl-3">Advanced React Patterns - Complete Development Guide</h3>
<p className="text-xs text-zinc-400 px-3">TechVision • 28k views • 2 weeks ago</p>
</div>
</article>
<article className="group relative overflow-hidden cursor-pointer animate-fade-in-up animate-delay-500 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#C427FB]/50 to-[#C427FB]/0 rounded-xl">
<div className="aspect-w-16 aspect-h-9">
<img alt="" className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover" src="https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=800&q=80" style={{}} />
</div>
<div className="pt-3">
<h3 className="truncate font-semibold text-zinc-100 pr-3 pl-3">3D Animation Techniques with Modern Tools</h3>
<p className="text-xs text-zinc-400 px-3">DigitalArts • 15k views • 1 week ago</p>
</div>
</article>
<article className="group relative overflow-hidden cursor-pointer animate-fade-in-up animate-delay-600 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#C427FB]/50 to-[#C427FB]/0 rounded-xl">
<div className="aspect-w-16 aspect-h-9">
<img alt="" className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover" src="https://images.unsplash.com/photo-1711861982584-b7493627213c?w=800&q=80" style={{}} />
</div>
<div className="pt-3">
<h3 className="truncate font-semibold text-zinc-100 pr-3 pl-3">Machine Learning Fundamentals - From Zero to Hero</h3>
<p className="text-xs text-zinc-400 px-3">CodeCraft • 42k views • 3 days ago</p>
</div>
</article>

<article className="group relative overflow-hidden cursor-pointer animate-fade-in-up animate-delay-700 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#C427FB]/50 to-[#C427FB]/0 rounded-xl">
<div className="aspect-w-16 aspect-h-9">
<img alt="" className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover" src="https://images.unsplash.com/photo-1677586883848-695b3ad692b4?w=800&q=80" style={{}} />
</div>
<div className="pt-3">
<h3 className="truncate font-semibold text-zinc-100 pr-3 pl-3">Building Scalable APIs with Node.js</h3>
<p className="text-xs text-zinc-400 px-3">DevMasters • 18k views • 4 days ago</p>
</div>
</article>

<article className="group relative overflow-hidden cursor-pointer animate-fade-in-up animate-delay-800 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#C427FB]/50 to-[#C427FB]/0 rounded-xl">
<div className="aspect-w-16 aspect-h-9">
<img alt="" className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80" style={{}} />
</div>
<div className="pt-3">
<h3 className="truncate font-semibold text-zinc-100 px-3">Creative Photoshop Techniques</h3>
<p className="text-xs text-zinc-400 pr-3 pl-3">DesignPro • 22k views • 3 weeks ago</p>
</div>
</article>

<article className="group relative overflow-hidden cursor-pointer animate-fade-in-up animate-delay-900 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#C427FB]/50 to-[#C427FB]/0 rounded-xl">
<div className="aspect-w-16 aspect-h-9">
<img alt="" className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=1080&q=80" style={{}} />
</div>
<div className="pt-3">
<h3 className="truncate font-semibold text-zinc-100 px-3">Intro to Quantum Computing</h3>
<p className="text-xs text-zinc-400 pr-3 pl-3">SciFuture • 9k views • 1 month ago</p>
</div>
</article>
</section>

<div className="hidden md:block absolute left-1/4 top-28 -translate-x-1/2 w-80 rounded-2xl bg-gradient-to-br from-purple-600/70 to-indigo-900/80 shadow-2xl backdrop-blur-xl overflow-hidden animate-fade-in animate-delay-700 hover:scale-105 transition-transform duration-300">
<img alt="" className="w-full aspect-video object-cover" src="https://images.unsplash.com/photo-1711861982569-565113102217?w=800&q=80" style={{}} />
<div className="px-4 py-3 space-y-2">
<h4 className="font-semibold leading-tight font-sans">Advanced React Patterns - Complete Development Guide</h4>
<p className="text-xs text-zinc-300 font-sans">TechVision • 28k views • 2 weeks ago</p>
<button className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full py-2 text-sm transition-colors">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-sans">Add to queue</span>
</button>
<button className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 rounded-full py-2 text-sm transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-sans">Save for later</span>
</button>
</div>
</div>
</main>
</div>

<div className="hidden absolute right-4 top-16 w-64 rounded-xl bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-lg shadow-2xl border border-zinc-700 overflow-hidden" id="accountMenu">
<div className="px-4 py-4 flex items-center space-x-3 border-b border-zinc-700">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 font-semibold font-sans">M</span>
<div>
<p className="font-medium font-sans">Maxwell</p>
<p className="text-xs text-zinc-400 font-sans">@maxwell_dev</p>
<p className="text-xs text-purple-400 mt-0.5 font-sans">Manage profile</p>
</div>
</div>
<ul className="py-2 text-sm">
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-user w-4 h-4 mr-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Your Profile</a></li>
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-settings w-4 h-4 mr-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>Creator Hub</a></li>
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-repeat w-4 h-4 mr-3" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>Switch profile</a></li>
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-log-out w-4 h-4 mr-3" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>Sign out</a></li>
</ul>
<ul className="py-2 text-sm border-t border-zinc-700">
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-star w-4 h-4 mr-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>Pro Features</a></li>
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-shopping-bag w-4 h-4 mr-3" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>Subscriptions</a></li>
</ul>
<ul className="py-2 text-sm border-t border-zinc-700">
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-moon w-4 h-4 mr-3" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>Theme</a></li>
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-globe w-4 h-4 mr-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>Language</a></li>
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-map-pin w-4 h-4 mr-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>Region</a></li>
</ul>
<ul className="py-2 text-sm border-t border-zinc-700">
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-help-circle w-4 h-4 mr-3" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>Support</a></li>
<li><a className="flex items-center px-4 py-2 hover:bg-zinc-800 transition-colors font-sans" href="#"><svg className="lucide lucide-message-square w-4 h-4 mr-3" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>Feedback</a></li>
</ul>
</div>
</div>




    </>
  );
}
