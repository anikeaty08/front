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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-neutral-800">
<div className="flex items-center gap-8">
<a className="text-lg font-normal tracking-tight hover:text-orange-500 transition-colors" href="#">Home</a>
<a className="text-lg font-normal tracking-tight hidden md:block hover:text-orange-500 transition-colors" href="#about">About us</a>
<a className="text-lg font-normal tracking-tight hidden md:block hover:text-orange-500 transition-colors" href="#teams">The Swarm</a>
</div>
<div className="flex items-center gap-6">
<button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md hover:text-orange-500 transition-all bg-white/50 backdrop-blur-sm">
<i className="w-5 h-5" data-lucide="sun" strokeWidth="1.5"></i>
</button>
<a className="text-lg font-normal tracking-tight bg-neutral-800 text-white px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors shadow-lg shadow-neutral-800/20" href="#newsletter">Join Newsletter</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[800px] flex flex-col justify-between overflow-hidden rounded-b-[2.5rem] bg-yellow-400">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-300 via-yellow-400 to-yellow-500"></div>
<div className="relative z-10 pt-32 px-6 md:px-12 flex-1 flex flex-col justify-center items-center text-center">
<span className="text-xl font-normal text-neutral-800 mb-4 capitalize">Natural Community</span>
<h1 className="text-8xl md:text-9xl font-normal tracking-tight text-white leading-none uppercase drop-shadow-sm">
                Hive.
            </h1>
</div>
<div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row justify-between items-end gap-8 text-neutral-800">
<div className="flex items-center gap-4 max-w-sm bg-white/90 backdrop-blur-md rounded-full p-2 pr-6 shadow-xl shadow-yellow-600/10 border border-white">
<div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-orange-500">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-normal">Pollinating ideas.</p>
</div>
<div className="max-w-xl text-right md:text-left bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-lg shadow-yellow-600/5">
<p className="text-xl text-neutral-700 font-normal leading-relaxed">Cultivating a vibrant community of learners and creators. Working together to produce sweet results through collaboration and shared effort.</p>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-3 flex items-center gap-3">
<i className="text-orange-500 w-6 h-6" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-lg font-normal italic text-orange-500 capitalize">About the Colony</span>
</div>
<div className="md:col-span-9">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-neutral-800">
                    We function as a unified organism. Every member contributes to the collective success, transforming individual potential into shared kinetic energy.
                </h2>
</div>
</div>
</section>

<section className="pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-yellow-400 rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square lg:aspect-auto text-neutral-900 border border-yellow-300 shadow-xl shadow-yellow-500/10">
<div className="flex justify-between items-start">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm">
<i className="w-7 h-7" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
<div className="flex -space-x-3">
<img alt="Avatar" className="w-12 h-12 rounded-full border-4 border-yellow-400" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-4 border-yellow-400" src="https://i.pravatar.cc/100?img=2"/>
</div>
</div>
<div className="mt-12">
<h3 className="text-4xl font-normal tracking-tight mb-6 text-neutral-900">Design your ecosystem or schedule a session with a Queen Bee.</h3>
<div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 mt-4 border border-white">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-lg font-normal text-neutral-800">Active Swarm</span>
</div>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-auto relative group shadow-xl shadow-neutral-200/50 border-8 border-white bg-white">
<img alt="Nature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-yellow-400/0 transition-colors duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-white/90 backdrop-blur-md border border-white text-neutral-800 px-8 py-4 rounded-full text-xl font-normal tracking-tight shadow-lg shadow-black/5">Nectar Flow</span>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square lg:aspect-auto border border-yellow-200 shadow-xl shadow-yellow-500/5">
<div className="flex justify-between items-start">
<div>
<span className="text-8xl font-normal tracking-tight text-neutral-800">98%</span>
<p className="text-xl text-neutral-500 mt-2 font-normal">Cells Filled</p>
</div>
<div className="flex items-center gap-2 text-lg font-normal text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
<span>Last 24h</span>
</div>
</div>

<div className="flex items-end gap-3 mt-12 h-32">
<div className="w-full bg-yellow-100 rounded-t-full h-1/4"></div>
<div className="w-full bg-yellow-200 rounded-t-full h-2/4"></div>
<div className="w-full bg-yellow-400 rounded-t-full h-3/4"></div>
<div className="w-full bg-orange-400 rounded-t-full h-full relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-orange-500"></div>
</div>
<div className="w-full bg-yellow-200 rounded-t-full h-1/2"></div>
</div>
<div className="flex justify-between text-lg text-neutral-400 mt-4 font-normal">
<span>Mon</span>
<span>Wed</span>
<span>Fri</span>
</div>
</div>
</div>
<div className="flex justify-between px-6 mt-8 text-lg text-neutral-500 font-normal">
<span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> Constant Growth</span>
<span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-orange-400"></div> Maximum Output</span>
</div>
</section>

<section className="py-24 bg-white rounded-[3rem] mx-2 md:mx-6 mb-24 px-6 md:px-12 flex flex-col items-center shadow-xl shadow-yellow-500/5 border border-yellow-100">
<div className="inline-block border border-orange-200 bg-orange-50 rounded-full px-6 py-2 text-lg font-normal text-orange-600 mb-12">
            Voices of the Swarm
        </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-center max-w-5xl leading-tight mb-20 text-neutral-800">
            "With countless hours of dedication, the collective takes care of the details, from raw data to refined honey. Trust the process of the hive."
        </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border-[6px] border-white shadow-md group bg-yellow-50">
<img alt="Working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-neutral-900 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-normal">
<div className="w-2 h-2 rounded-full bg-neutral-900"></div> Analyze Data
                </div>
</div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border-[6px] border-white shadow-md group bg-yellow-50">
<img alt="Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-neutral-900 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-normal">
<div className="w-2 h-2 rounded-full bg-neutral-900"></div> Share Nectar
                </div>
</div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-yellow-50 flex items-center justify-center border-[6px] border-white shadow-sm">
<div className="bg-white border border-yellow-200 px-8 py-4 rounded-full text-lg font-normal tracking-tight shadow-sm text-orange-600 flex items-center">
<div className="w-2.5 h-2.5 inline-block rounded-full bg-yellow-400 mr-3 animate-pulse"></div> Building next
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="teams">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

<div className="lg:col-span-5 flex flex-col">
<span className="text-lg font-normal text-orange-600 mb-6 border border-orange-200 bg-orange-50 rounded-full px-5 py-2 w-fit shadow-sm">Leadership</span>
<h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-8 text-neutral-800 leading-tight">
                    Colony<br/>Officers
                </h2>
<p className="text-xl text-neutral-600 mb-12 max-w-md leading-relaxed">
                    Guiding the swarm with a modern take on traditional structure. Our leaders ensure the ecosystem thrives and goals are met efficiently.
                </p>
<div className="space-y-8 flex-1">

<div className="flex items-center gap-6 group bg-white p-4 rounded-3xl border border-transparent hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all cursor-pointer">
<img alt="Officer" className="w-20 h-20 rounded-2xl object-cover border-4 border-yellow-100 group-hover:border-yellow-300 transition-colors" src="https://i.pravatar.cc/150?img=11"/>
<div>
<h4 className="text-2xl font-normal tracking-tight text-neutral-800">Eleanor Vance</h4>
<p className="text-lg text-orange-500 font-normal mt-1">President (Queen)</p>
</div>
</div>

<div className="flex items-center gap-6 group bg-white p-4 rounded-3xl border border-transparent hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all cursor-pointer">
<img alt="Officer" className="w-20 h-20 rounded-2xl object-cover border-4 border-yellow-100 group-hover:border-yellow-300 transition-colors" src="https://i.pravatar.cc/150?img=12"/>
<div>
<h4 className="text-2xl font-normal tracking-tight text-neutral-800">Marcus Thorne</h4>
<p className="text-lg text-neutral-500 font-normal mt-1">Vice President</p>
</div>
</div>

<div className="flex items-center gap-6 group bg-white p-4 rounded-3xl border border-transparent hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all cursor-pointer">
<img alt="Officer" className="w-20 h-20 rounded-2xl object-cover border-4 border-yellow-100 group-hover:border-yellow-300 transition-colors" src="https://i.pravatar.cc/150?img=13"/>
<div>
<h4 className="text-2xl font-normal tracking-tight text-neutral-800">Sarah Jenkins</h4>
<p className="text-lg text-neutral-500 font-normal mt-1">Secretary</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-6">
<div className="bg-neutral-800 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-2xl shadow-neutral-900/10">
<div>
<h3 className="text-4xl md:text-5xl font-normal tracking-tight mb-3">Development Team</h3>
<p className="text-xl text-neutral-300">Architects of the honeycomb.</p>
</div>
<button className="bg-yellow-400 text-neutral-900 hover:bg-yellow-500 transition-colors rounded-full px-8 py-4 text-lg font-normal whitespace-nowrap shadow-md">
                        View Repos
                    </button>
</div>
<div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-yellow-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-lg shadow-yellow-500/5">
<div>
<h3 className="text-3xl font-normal tracking-tight mb-2 text-neutral-800">Frontend Foragers</h3>
<div className="flex items-center gap-8 mt-6">
<div className="flex flex-col">
<span className="text-lg text-orange-500 font-normal mb-1">Lead</span>
<span className="text-xl font-normal text-neutral-800">David Kim</span>
</div>
<div className="flex flex-col">
<span className="text-lg text-orange-500 font-normal mb-1">UI/UX</span>
<span className="text-xl font-normal text-neutral-800">Elena Rostova</span>
</div>
</div>
</div>
<button className="bg-neutral-800 text-white hover:bg-neutral-700 transition-colors rounded-full px-8 py-4 text-lg font-normal whitespace-nowrap shadow-md">
                        Meet UI Team
                    </button>
</div>
<div className="bg-yellow-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border border-yellow-200 shadow-sm">
<div>
<h3 className="text-3xl font-normal tracking-tight mb-3 text-neutral-800">Backend Builders</h3>
<p className="text-xl text-neutral-500">Maintaining the infrastructure.</p>
</div>
<div className="flex -space-x-4">
<img alt="Dev" className="w-16 h-16 rounded-full border-4 border-yellow-50 shadow-sm" src="https://i.pravatar.cc/100?img=3"/>
<img alt="Dev" className="w-16 h-16 rounded-full border-4 border-yellow-50 shadow-sm" src="https://i.pravatar.cc/100?img=4"/>
<img alt="Dev" className="w-16 h-16 rounded-full border-4 border-yellow-50 shadow-sm" src="https://i.pravatar.cc/100?img=5"/>
<div className="w-16 h-16 rounded-full border-4 border-yellow-50 bg-yellow-400 flex items-center justify-center text-lg font-normal text-neutral-900 z-10 shadow-sm">+4</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-yellow-200">
<div className="flex items-center justify-between mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-800">The Rest of the Swarm</h2>
<a className="text-lg font-normal text-orange-500 hover:text-orange-600 flex items-center gap-2 transition-colors bg-orange-50 px-5 py-2 rounded-full" href="#">
                View All <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-yellow-100 mb-4 overflow-hidden border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=21"/></div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Alex</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-yellow-100 mb-4 overflow-hidden border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=22"/></div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Jordan</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-yellow-100 mb-4 overflow-hidden border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=23"/></div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Taylor</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-yellow-100 mb-4 overflow-hidden border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=24"/></div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Casey</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-yellow-100 mb-4 overflow-hidden border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=25"/></div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Morgan</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full mb-4 overflow-hidden flex items-center justify-center bg-yellow-200 text-orange-600 font-normal border-4 border-transparent group-hover:border-yellow-400 transition-all text-xl group-hover:shadow-lg">
                    +24
                </div>
<span className="text-xl font-normal tracking-tight text-neutral-500">More</span>
</div>
</div>
</section>

<section className="py-16 w-full overflow-hidden">
<div className="flex gap-6 px-6 md:px-12 w-[150%] md:w-[120%] lg:w-full">
<div className="h-72 md:h-[28rem] flex-1 rounded-[2.5rem] overflow-hidden shadow-xl shadow-yellow-500/10 border-[6px] border-white">
<img alt="Gallery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="h-72 md:h-[28rem] flex-1 rounded-[2.5rem] overflow-hidden hidden md:block shadow-xl shadow-yellow-500/10 border-[6px] border-white">
<img alt="Gallery" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-72 md:h-[28rem] flex-1 rounded-[2.5rem] overflow-hidden bg-yellow-400 flex items-center justify-center p-12 text-center shadow-xl shadow-yellow-500/10 border-[6px] border-white">
<h3 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">Sweet memories built together.</h3>
</div>
</div>
</section>

<footer className="bg-yellow-100 text-neutral-800 rounded-t-[3rem] mt-12 px-6 py-16 md:px-12 md:py-24 border-t border-yellow-200" id="newsletter">
<div className="max-w-screen-2xl mx-auto">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-yellow-200 pb-16">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight max-w-2xl leading-tight text-neutral-900">
                    Design your ecosystem or schedule a virtual consultation with an Advisor to learn more.
                </h2>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
<span className="text-lg text-neutral-500 font-normal whitespace-nowrap hidden sm:block">Follow the swarm</span>
<div className="flex gap-3 w-full sm:w-auto">
<a className="flex-1 sm:flex-none border border-yellow-300 bg-white hover:bg-yellow-400 hover:border-yellow-400 rounded-full px-8 py-4 text-lg font-normal text-center transition-all shadow-sm" href="#">Insta</a>
<a className="flex-1 sm:flex-none border border-yellow-300 bg-white hover:bg-yellow-400 hover:border-yellow-400 rounded-full px-8 py-4 text-lg font-normal text-center transition-all shadow-sm" href="#">X</a>
<a className="flex-1 sm:flex-none border border-yellow-300 bg-white hover:bg-yellow-400 hover:border-yellow-400 rounded-full px-8 py-4 text-lg font-normal text-center transition-all shadow-sm" href="#">In</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
<div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-normal mb-2 uppercase tracking-wider">Colony</span>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">About us</a>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">Careers</a>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">Contact</a>
</div>
<div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-normal mb-2 uppercase tracking-wider">Projects</span>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">Nectar App</a>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">Hive Mind</a>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">Logs</a>
</div>
<div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-normal mb-2 uppercase tracking-wider">Resources</span>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">News</a>
<a className="text-xl font-normal text-neutral-600 hover:text-orange-500 transition-colors" href="#">Press</a>
</div>

<div className="col-span-2 lg:col-span-2 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-normal mb-2 uppercase tracking-wider">Newsletter</span>
<div className="flex items-center gap-2 bg-white border border-yellow-300 rounded-full p-2 focus-within:border-orange-400 transition-colors shadow-sm">
<input className="bg-transparent border-none outline-none text-xl text-neutral-800 px-6 w-full placeholder:text-neutral-400" placeholder="Email address" type="email"/>
<button className="bg-neutral-800 text-white hover:bg-neutral-700 rounded-full px-8 py-4 text-lg font-normal transition-colors shadow-md">
                            Subscribe
                        </button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-yellow-200 text-lg text-neutral-500 font-normal gap-4">
<p>© 2024 The Hive Batch.</p>
<div className="flex gap-8">
<a className="hover:text-neutral-800 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-800 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
