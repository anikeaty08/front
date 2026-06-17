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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-8">
<a className="text-xl tracking-tighter font-semibold text-slate-900 flex items-center gap-2" href="#">
                        UPGAMING
                        <span className="text-slate-400 font-light text-sm">LineUP</span>
</a>
<div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Culture</a>
<a className="text-slate-900" href="#">Stories</a>
<a className="hover:text-slate-900 transition-colors" href="#">Careers</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-sm ring-1 ring-slate-900/5" href="#">
                        Join the team
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-slate-50/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    Life at Upgaming
                </div>
<h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Real people. <br/>
                    Real moments. <br/>
<span className="text-slate-400">Real culture.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-10">
                    Welcome to LineUP Stories. This isn't just a workplace; it's a collection of unique journeys. Here, our team members share their experiences, achievements, and the behind-the-scenes snapshots that make Upgaming what it is.
                </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 h-64 md:h-80 lg:h-96">
<div className="col-span-1 h-full rounded-2xl overflow-hidden relative group">
<img alt="Team meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 md:col-span-2 h-full rounded-2xl overflow-hidden relative group">
<img alt="Group laughter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700">
                        Friday Socials
                    </div>
</div>
<div className="col-span-2 md:col-span-1 h-full rounded-2xl overflow-hidden relative group">
<img alt="Office moment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Spotlight</h2>
<p className="text-slate-500">Meet the minds building the future of gaming.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">
                    View all team
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Sarah" className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-50" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-medium text-slate-900">Sarah Jenkins</h3>
<p className="text-sm text-slate-500">Senior Product Designer</p>
</div>
</div>
<blockquote className="text-slate-600 text-sm leading-relaxed mb-6">
                        "The autonomy here is unmatched. I'm not just designing interfaces; I'm shaping how our users experience the entire platform. Every pixel has a purpose."
                    </blockquote>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors" href="#">
                        Read full story
                        <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Marcus" className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-medium text-slate-900">Marcus Chen</h3>
<p className="text-sm text-slate-500">Lead Backend Engineer</p>
</div>
</div>
<blockquote className="text-slate-600 text-sm leading-relaxed mb-6">
                        "Scaling systems for millions of concurrent users is the kind of challenge engineers dream of. At Upgaming, we solve these problems daily."
                    </blockquote>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors" href="#">
                        Read full story
                        <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Elena" className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-50" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-medium text-slate-900">Elena Rodriguez</h3>
<p className="text-sm text-slate-500">Head of People</p>
</div>
</div>
<blockquote className="text-slate-600 text-sm leading-relaxed mb-6">
                        "My goal is simple: ensure every person at LineUP feels valued. The culture we've built is supportive, ambitious, and incredibly human."
                    </blockquote>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors" href="#">
                        Read full story
                        <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-indigo-600 font-medium text-sm tracking-wide uppercase mb-3 block">Routines</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">A Day in the Life</h2>
<p className="text-slate-500">From morning stand-ups to deep focus sessions, see how different teams navigate their day at Upgaming.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Designer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-xs font-medium text-indigo-300 mb-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:pen-tool" data-width="14"></span>
                            Design Team
                        </div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:underline decoration-1 underline-offset-4">Creative Flow</h3>
</div>
</a>

<a className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Developer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-xs font-medium text-indigo-300 mb-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span>
                            Engineering
                        </div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:underline decoration-1 underline-offset-4">Shipping Code</h3>
</div>
</a>

<a className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Marketing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-xs font-medium text-indigo-300 mb-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:megaphone" data-width="14"></span>
                            Marketing
                        </div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:underline decoration-1 underline-offset-4">Brand Stories</h3>
</div>
</a>

<a className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-xs font-medium text-indigo-300 mb-2 flex items-center gap-1">
<span className="iconify" data-icon="lucide:kanban-square" data-width="14"></span>
                            Product
                        </div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:underline decoration-1 underline-offset-4">Defining Roadmap</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Beyond the Desk</h2>
<p className="text-slate-400 max-w-xl">We work hard, but we also know how to recharge. From hackathons to charity runs, here's what happens when we step away from the screens.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:chevron-left" data-width="20"></span>
</button>
<button className="p-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-5 aspect-video">
<img alt="Hackathon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur border border-slate-700 text-white px-3 py-1 rounded text-xs font-semibold tracking-wide uppercase">
                            Oct 12
                        </div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">Annual Hackathon 2023</h3>
<p className="text-sm text-slate-400 line-clamp-2">48 hours of coding, caffeine, and innovation. Teams built solutions ranging from AI assistants to internal gaming tools.</p>
</div>
<div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
<span className="iconify text-indigo-400" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-5 aspect-video">
<img alt="Team Retreat" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur border border-slate-700 text-white px-3 py-1 rounded text-xs font-semibold tracking-wide uppercase">
                            Sep 05
                        </div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">Summer Off-site</h3>
<p className="text-sm text-slate-400 line-clamp-2">The entire team headed to the mountains for a weekend of hiking, strategy workshops, and bonding.</p>
</div>
<div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
<span className="iconify text-indigo-400" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-5 aspect-video">
<img alt="Charity" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur border border-slate-700 text-white px-3 py-1 rounded text-xs font-semibold tracking-wide uppercase">
                            Aug 14
                        </div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">Community Day</h3>
<p className="text-sm text-slate-400 line-clamp-2">Giving back to our local community. We spent the day at the local food bank helping sort and distribute supplies.</p>
</div>
<div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
<span className="iconify text-indigo-400" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Gallery</h2>

<div className="inline-flex p-1 bg-white rounded-lg border border-slate-200 shadow-sm">
<button className="px-4 py-1.5 text-sm font-medium text-slate-900 bg-slate-100 rounded-md shadow-sm">All</button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700">Office</button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700">Activities</button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700">Trips</button>
</div>
</div>

<div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
<img alt="Office" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium">Headquarters</span>
</div>
</div>

<div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
<img alt="Meeting" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium">Strategy Session</span>
</div>
</div>

<div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
<img alt="Friends" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium">Team Lunch</span>
</div>
</div>

<div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
<img alt="Work" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium">All Hands</span>
</div>
</div>

<div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
<img alt="Analysis" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium">Data Team</span>
</div>
</div>

<div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
<img alt="Office Dog" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium">Chief Happiness Officer</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all bg-white shadow-sm">
                    Load more photos
                    <span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="text-lg tracking-tighter font-semibold text-slate-900 block mb-4">UPGAMING</span>
<p className="text-sm text-slate-500 mb-4">Building the next generation of digital experiences.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Instagram</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
<p className="text-xs text-slate-400">© 2023 Upgaming Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<span className="text-xs text-slate-400">Made with ❤️ by LineUP Team</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
