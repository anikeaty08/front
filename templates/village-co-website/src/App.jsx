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
      

<nav className="w-full max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center relative z-50">

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-[#49beb2] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#49beb2] transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#49beb2] transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#49beb2] transition-colors" href="#">Projects</a>
<div className="flex items-center space-x-1 cursor-pointer group">
<span className="text-sm font-medium text-slate-500 group-hover:text-[#49beb2] transition-colors">Pages</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-slate-400 group-hover:text-[#49beb2]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="md:hidden">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6 text-slate-600" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>

<div className="flex transform -translate-x-1/2 absolute left-1/2 gap-x-2 gap-y-2 items-center">
<div className="text-[#49beb2]">
</div>
<span className="block">
<img alt="VillageCo" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be967b84-b91a-46b4-bf03-0cfafb633bbc_320w.png"/>
</span>
</div>

<div className="flex items-center space-x-6">
<div className="flex items-center space-x-1 text-slate-500 hover:text-[#49beb2] cursor-pointer transition-colors">
</div>
<button className="bg-[#49beb2] hover:bg-[#3da89d] text-white text-sm font-medium py-3 px-6 rounded-full transition-all shadow-sm hover:shadow-md">
                Support Our Cause
            </button>
</div>
</nav>

<main className="relative w-full max-w-[1400px] mx-auto mt-8 md:mt-16 pb-24 border-b border-slate-100">

<div className="hidden lg:block absolute left-0 top-20 -translate-x-20 -rotate-6 transform z-0 opacity-90 hover:opacity-100 transition-opacity duration-700">
<img alt="Nature" className="w-[280px] h-[360px] object-cover rounded-2xl shadow-xl grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b1587f4-dd57-4be7-87f7-178b15905553_800w.jpg"/>
</div>
<div className="hidden lg:block absolute right-0 top-20 translate-x-20 rotate-6 transform z-0 opacity-90 hover:opacity-100 transition-opacity duration-700">
<img alt="Community" className="w-[280px] h-[360px] object-cover rounded-2xl shadow-xl grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3787b02-7364-4767-a169-3e86a2118549_800w.jpg" style={{}}/>
</div>

<div className="relative z-10 flex flex-col items-center px-4">
<div className="mb-6 animate-pulse">
<span className="text-5xl">👋</span>
</div>
<h1 className="md:text-7xl lg:text-[5.5rem] leading-[1.1] text-5xl font-medium text-[#49beb2] tracking-tight text-center max-w-5xl mr-auto ml-auto drop-shadow-sm">Building Stronger Communities <br className="hidden md:block"/> One Village at a Time.</h1>
<div className="w-full max-w-6xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0">
<div className="w-full md:w-1/4 text-center md:text-left">
<span className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase block mb-1">Since 2012</span>
</div>
<div className="w-full md:w-2/4 text-center">
<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-500 max-w-xl mr-auto ml-auto">Connecting neighbors, fostering belonging, and creating lasting local impact.</p>
<div className="mt-10">
<button className="bg-[#bbf0ea] hover:bg-[#a5e6de] text-[#2a7a72] text-base font-medium py-4 px-10 rounded-full transition-colors duration-300">
                            Support Our Cause
                        </button>
</div>
</div>
<div className="w-full md:w-1/4 text-center md:text-right">
<span className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase block mb-1">1300 Projects Completed</span>
</div>
</div>
<div className="mt-20 relative w-full flex justify-center">
<div className="relative group cursor-pointer">
<div className="absolute inset-0 border border-slate-100 rounded-[2rem] transform translate-y-2 translate-x-2 -z-10"></div>
<img alt="Forest" className="w-[300px] h-[380px] object-cover rounded-[2rem] shadow-sm group-hover:shadow-lg transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20b3f65f-a67a-4ec3-9927-5609f8187bdb_800w.jpg"/>
<div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/60 rounded-tl-md"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/60 rounded-br-md"></div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 bg-white">
<div className="max-w-[1200px] mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#49beb2] mb-6">Restoring Human Connection</h2>
<p className="text-lg text-slate-500 font-light">We bridge the gap between isolation and belonging by empowering locals to build the village they want to see.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bbf0ea] transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#49beb2] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-3 tracking-tight">Local Connections</h3>
<p className="text-slate-500 font-light leading-relaxed">We provide the framework for neighbors to meet, interact, and rely on one another in meaningful ways.</p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bbf0ea] transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#49beb2] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wineglass-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-3 tracking-tight">Host Gatherings</h3>
<p className="text-slate-500 font-light leading-relaxed">From potlucks to park cleanups, we offer toolkits to help anyone host events that matter.</p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bbf0ea] transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#49beb2] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-3 tracking-tight">Create Belonging</h3>
<p className="text-slate-500 font-light leading-relaxed">Fostering spaces where everyone feels seen, heard, and valued regardless of background.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#f8xfcfc] bg-slate-50">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<div>
<span className="text-[#49beb2] font-medium tracking-widest text-xs uppercase mb-2 block">Our Process</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800">How to Build a Village</h2>
</div>
<a className="hidden md:flex items-center text-[#49beb2] font-medium hover:opacity-80 transition-opacity mt-4 md:mt-0" href="#">
                    See full guidelines 
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-slate-200 -z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center text-[#49beb2] mb-8">
<span className="text-3xl font-medium font-serif">1</span>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Start a Village</h3>
<p className="text-slate-500 font-light max-w-xs">Register your local area and get your digital and physical starter pack.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center text-[#49beb2] mb-8">
<span className="text-3xl font-medium font-serif">2</span>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Host Gatherings</h3>
<p className="text-slate-500 font-light max-w-xs">Use our app to schedule meetups and invite neighbors safely.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center text-[#49beb2] mb-8">
<span className="text-3xl font-medium font-serif">3</span>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Grow Community</h3>
<p className="text-slate-500 font-light max-w-xs">Watch trust build as casual hellos turn into lifelong friendships.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-4">
<img alt="Friends" className="rounded-2xl object-cover h-64 w-full shadow-sm translate-y-8" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Dinner" className="rounded-2xl object-cover h-64 w-full shadow-sm" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#49beb2] mb-6">Who is VillageCo For?</h2>
<p className="text-lg text-slate-500 font-light mb-10">Whether you're an extrovert looking to lead or an introvert seeking a quiet connection, there is a place for you here.</p>
<div className="space-y-6">
<div className="flex items-start">
<div className="mt-1 bg-[#f0f9f8] p-2 rounded-lg text-[#49beb2] mr-4">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">Community Leaders</h4>
<p className="text-slate-500 font-light text-sm mt-1">Tools to organize, manage, and inspire your local block.</p>
</div>
</div>
<div className="flex items-start">
<div className="mt-1 bg-[#f0f9f8] p-2 rounded-lg text-[#49beb2] mr-4">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">New Neighbors</h4>
<p className="text-slate-500 font-light text-sm mt-1">The easiest way to break the ice when moving to a new city.</p>
</div>
</div>
<div className="flex items-start">
<div className="mt-1 bg-[#f0f9f8] p-2 rounded-lg text-[#49beb2] mr-4">
<iconify-icon icon="solar:hand-heart-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800">Volunteers</h4>
<p className="text-slate-500 font-light text-sm mt-1">Find local causes that need your specific skills and time.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fcfcfc] border-y border-slate-50">
<div className="max-w-[1200px] mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800">Stories from the Village</h2>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<iconify-icon className="text-[#bbf0ea] mb-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-xl text-slate-600 font-light italic leading-relaxed">"I moved here not knowing a soul. Within a month of joining a VillageCo dinner, I had found my people. It wasn't just about networking; it was about feeling like I was home."</p>
</div>
<div className="flex items-center mt-8">
<img alt="Sarah" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-400 uppercase tracking-wide">Portland, OR</div>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<iconify-icon className="text-[#bbf0ea] mb-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-xl text-slate-600 font-light italic leading-relaxed">"The toolkit made it so simple to start a street library. Now neighbors stop by daily, chat, and we've even started a monthly block party. Simple, but life-changing."</p>
</div>
<div className="flex items-center mt-8">
<img alt="Marcus" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Marcus Chen</div>
<div className="text-xs text-slate-400 uppercase tracking-wide">Austin, TX</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-[1200px] mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#49beb2]">Tools &amp; Resources</h2>
<a className="text-slate-500 hover:text-[#49beb2] text-sm font-medium transition-colors" href="#">View all resources</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 h-56 w-full relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Guide" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-semibold text-[#49beb2] uppercase tracking-wider">Guide</span>
<h3 className="text-lg font-medium text-slate-800 mt-1 group-hover:text-[#49beb2] transition-colors">The Introvert's Guide to Hosting</h3>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 h-56 w-full relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Toolkit" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-semibold text-[#49beb2] uppercase tracking-wider">Toolkit</span>
<h3 className="text-lg font-medium text-slate-800 mt-1 group-hover:text-[#49beb2] transition-colors">Community Garden Starter Pack</h3>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 h-56 w-full relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Video" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-semibold text-[#49beb2] uppercase tracking-wider">Video Series</span>
<h3 className="text-lg font-medium text-slate-800 mt-1 group-hover:text-[#49beb2] transition-colors">Conflict Resolution for Neighbors</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-[1200px] mx-auto bg-[#49beb2] rounded-[2.5rem] py-20 px-8 md:px-20 text-center relative overflow-hidden shadow-xl">

<div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to Find Your Village?</h2>
<p className="text-teal-50 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">Join thousands of others building a more connected world, one street at a time.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-[#49beb2] hover:bg-slate-50 font-medium py-4 px-10 rounded-full transition-all shadow-md">
                        Start a Village
                    </button>
<button className="bg-[#3da89d] text-white hover:bg-[#349288] border border-white/20 font-medium py-4 px-10 rounded-full transition-all">
                        Find a Gathering
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="text-[#49beb2]">
<iconify-icon icon="solar:sprout-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-800">VillageCo</span>
</div>
<p className="text-slate-400 font-light text-sm leading-relaxed mb-6">Non-profit organization dedicated to restoring the fabric of local communities through connection and care.</p>
</div>
<div>
<h4 className="font-medium text-slate-800 mb-6">Organization</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#49beb2] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#49beb2] transition-colors" href="#">Our Mission</a></li>
<li><a className="hover:text-[#49beb2] transition-colors" href="#">Impact Report</a></li>
<li><a className="hover:text-[#49beb2] transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-800 mb-6">Resources</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#49beb2] transition-colors" href="#">Start a Village</a></li>
<li><a className="hover:text-[#49beb2] transition-colors" href="#">Event Toolkits</a></li>
<li><a className="hover:text-[#49beb2] transition-colors" href="#">Community Guidelines</a></li>
<li><a className="hover:text-[#49beb2] transition-colors" href="#">Safety Center</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-800 mb-6">Newsletter</h4>
<p className="text-slate-400 font-light text-sm mb-4">Weekly inspiration for community builders.</p>
<div className="flex gap-2">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#49beb2] transition-colors" placeholder="Email address" type="email"/>
<button className="bg-[#49beb2] text-white p-2 rounded-lg hover:bg-[#3da89d] transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-light">
<p>© 2024 VillageCo Non-Profit. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#49beb2]" href="#">Privacy Policy</a>
<a className="hover:text-[#49beb2]" href="#">Terms of Service</a>
<a className="hover:text-[#49beb2]" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
