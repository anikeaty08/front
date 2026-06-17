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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
850: '#1f2937',
900: '#111827',
950: '#0B0C0E',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white">
<span className="font-medium text-sm tracking-tight">SS</span>
</div>
<span className="text-slate-200 font-medium tracking-tight group-hover:text-white transition-colors">Students Squad</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#memories">Memories</a>
<a className="hover:text-white transition-colors" href="#events">Events</a>
<a className="hover:text-white transition-colors" href="#community">Community</a>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-3 pr-4 border-r border-white/10">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brands-instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brands-twitter-linear" width="20"></iconify-icon></a>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium text-white transition-all">
<span>Join Squad</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New Event: Summer Hackathon 2024
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Organize <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">memories</span>,<br/>
                manage student events.
            </h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                The central hub for the Students Squad. Explore our past gallery, coordinate upcoming meetups, and stay connected across all social platforms in one unified space.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-slate-200 transition-colors flex text-sm font-medium text-black bg-white w-full rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                    Create Event
                </button>
<button className="w-full sm:w-auto px-6 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
                    View Gallery
                </button>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
<div>
<div className="text-2xl font-medium text-white tracking-tight">1,200+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Members</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">54</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Events Hosted</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">8.5k</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Photos Archived</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Active Squad</div>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="memories">
<div className="flex items-center justify-between mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Past Memories</h2>
<p className="text-sm text-slate-500">Highlights from our recent gatherings and workshops.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#">
                View Archive <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
<img alt="Students Gathering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
<span className="text-xs font-medium text-indigo-300 mb-2">Annual Meetup 2023</span>
<h3 className="text-xl text-white font-medium tracking-tight">Campus Gathering &amp; Tech Talk</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
<img alt="Workshop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
<iconify-icon className="text-white w-8 h-8" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
<img alt="Meeting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-black/50 backdrop-blur rounded text-[10px] text-white">Workshop</span>
</div>
</div>

<div className="md:col-span-2 group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 p-6 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
<div className="flex items-start justify-between">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<iconify-icon icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-500">128 Files</span>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-1">Study Materials</h3>
<p className="text-sm text-slate-500 line-clamp-2">Access past year papers, notes from seniors, and recorded lectures shared by the squad.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/[0.02] border-y border-white/5" id="events">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Upcoming Squad Events</h2>
<p className="text-sm text-slate-400">Join us to learn, network, and have fun.</p>
</div>
<div className="space-y-4">

<div className="group relative flex flex-col md:flex-row items-center gap-6 p-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl">
<div className="absolute inset-[1px] bg-gray-950 rounded-[15px] z-0"></div>
<div className="relative z-10 flex flex-col md:flex-row w-full items-center p-5 gap-6">

<div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-white/5 rounded-xl border border-white/10 text-center">
<span className="text-xs text-indigo-400 uppercase font-medium">Oct</span>
<span className="text-xl text-white font-medium">15</span>
</div>

<div className="flex-1 text-center md:text-left">
<h3 className="text-lg text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Web Development Bootcamp</h3>
<p className="text-sm text-slate-500 mb-3 md:mb-0">Intro to React &amp; Tailwind CSS • 10:00 AM - 4:00 PM • Lab 3</p>
</div>

<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-gray-950" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-gray-950" src="https://i.pravatar.cc/100?img=2"/>
<div className="w-8 h-8 rounded-full border-2 border-gray-950 bg-gray-800 text-[10px] text-white flex items-center justify-center">+42</div>
</div>
<button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-slate-200 transition-colors">
                                Register
                            </button>
</div>
</div>
</div>

<div className="group relative flex flex-col md:flex-row items-center gap-6 p-1 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<div className="relative z-10 flex flex-col md:flex-row w-full items-center p-5 gap-6">
<div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-white/5 rounded-xl border border-white/10 text-center">
<span className="text-xs text-purple-400 uppercase font-medium">Nov</span>
<span className="text-xl text-white font-medium">02</span>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-lg text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">Gaming Tournament</h3>
<p className="text-sm text-slate-500 mb-3 md:mb-0">Valorant &amp; FIFA • 5:00 PM • Student Hub</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-transparent text-white border border-white/20 text-xs font-medium rounded-full hover:bg-white/10 transition-colors">
                                Details
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> View Full Calendar
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="community">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-2xl mx-auto text-center border border-white/10 bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mx-auto mb-6 border border-white/10">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Be part of the Squad</h2>
<p className="text-sm text-slate-400 mb-8">Stay updated with the latest news, share your photos, and connect with fellow students on our social channels.</p>
<div className="flex flex-wrap justify-center gap-3">
<a className="flex items-center gap-3 px-5 py-3 bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 rounded-xl text-white hover:bg-[#1DA1F2]/20 transition-all" href="#">
<iconify-icon icon="logos:twitter" width="16"></iconify-icon>
<span className="text-xs font-medium">Twitter</span>
</a>
<a className="flex items-center gap-3 px-5 py-3 bg-[#E1306C]/10 border border-[#E1306C]/20 rounded-xl text-white hover:bg-[#E1306C]/20 transition-all" href="#">
<iconify-icon icon="skill-icons:instagram" width="16"></iconify-icon>
<span className="text-xs font-medium">Instagram</span>
</a>
<a className="flex items-center gap-3 px-5 py-3 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-xl text-white hover:bg-[#5865F2]/20 transition-all" href="#">
<iconify-icon icon="logos:discord-icon" width="16"></iconify-icon>
<span className="text-xs font-medium">Discord</span>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white text-[10px]">SS</div>
<span className="text-sm text-slate-400 font-medium">Students Squad © 2024</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
