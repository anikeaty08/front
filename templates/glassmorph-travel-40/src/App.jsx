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



        window.handleCategoryClick = function(el) {
            const container = el.parentElement;
            Array.from(container.children).forEach(child => {
                const icon = child.firstElementChild;
                const dot = child.lastElementChild.classList.contains('dot-indicator') ? child.lastElementChild : null;
                
                if (child === el) {
                    // Active State
                    child.className = "flex flex-col items-center gap-1 relative cursor-pointer transition-all duration-300 opacity-100";
                    icon.className = "w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform scale-105";
                    
                    if (!dot) {
                        const newDot = document.createElement('div');
                        newDot.className = "dot-indicator w-1 h-1 bg-blue-400 rounded-full absolute -bottom-2 transition-all duration-300 animate-in fade-in zoom-in";
                        child.appendChild(newDot);
                    }
                } else {
                    // Inactive State
                    child.className = "flex flex-col gap-1 hover:opacity-100 transition opacity-50 gap-x-1 gap-y-1 items-center cursor-pointer duration-300";
                    icon.className = "flex text-xl text-white bg-white/5 w-12 h-12 border-white/5 border rounded-2xl items-center justify-center transition-all duration-300";
                    
                    if (dot) dot.remove();
                }
            });
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
      

<div className="fixed pointer-events-none z-0 top-0 right-0 bottom-0 left-0" style={{}}>
<div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full max-w-[1600px] relative gap-x-8 gap-y-12 items-start justify-center mx-auto">

<div className="overflow-hidden flex flex-col bg-[#1c1e26]/60 w-full h-[780px] max-w-[360px] border-white/10 border rounded-[3rem] mx-auto relative shadow-2xl backdrop-blur-2xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

<div className="flex justify-between items-center px-6 pt-5 pb-2 text-white/80 text-xs font-medium z-20 select-none">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<svg className="text-lg" data-icon-set="solar" data-solar="battery-charge-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Zm18-2c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></path><path d="M11.5 9L9 12h3.5L10 15" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
</div>

<div className="px-6 py-6 flex items-center justify-between z-20">
<button className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-2xl transition-all" onclick="console.log('Open Profile')">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-[1px] group-active:scale-95 transition-transform duration-200">
<img alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-[#1c1e26]" src="https://i.pravatar.cc/150?u=elara"/>
</div>
<div className="">
<h2 className="text-white text-base font-medium tracking-tight group-hover:text-white/90 transition-colors">Elara Vance</h2>
<p className="text-white/50 text-xs mt-0.5 group-hover:text-blue-400 transition-colors">Show Profile</p>
</div>
</button>
<button aria-label="Close" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 active:bg-white/20 active:scale-90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<svg className="text-white/60 text-lg" data-icon-set="solar" data-solar="close-circle-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle className="" cx="12" cy="12" r="10"></circle><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</button>
</div>

<div className="px-4 z-20 space-y-1">
<h3 className="px-3 py-2 text-white/40 text-xs uppercase tracking-wider font-medium select-none">Account Settings</h3>

<button className="w-full text-left group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-active:scale-90 transition-all">
<svg className="text-lg" data-icon-set="solar" data-solar="bell-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></path><path d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Notifications</span>
</div>
<span className="bg-blue-600 text-white text-[10px] font-medium px-2 py-0.5 rounded-full shadow-lg shadow-blue-900/40">3</span>
</button>

<button className="w-full text-left relative overflow-hidden flex items-center justify-between p-3 rounded-2xl cursor-pointer active:scale-[0.98] transition-all shadow-lg shadow-blue-900/20 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-500/80 opacity-100 transition-opacity"></div>
<div className="relative flex items-center gap-4 z-10">
<div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white shadow-inner group-active:scale-90 transition-transform">
<svg className="text-lg" data-icon-set="solar" data-solar="card-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></path><path d="M10 16H6m8 0h-1.5M2 10h20" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-white text-base font-normal">Payment</span>
</div>
<svg className="text-white/80 z-10 text-base group-hover:translate-x-0.5 transition-transform" data-icon-set="solar" data-solar="alt-arrow-right-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>

<button className="w-full text-left group flex hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer rounded-2xl p-3 items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-active:scale-90 transition-all">
<svg className="text-lg" data-icon-set="solar" data-solar="global-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></path><path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"></path><path d="M2 12h20" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Translate</span>
</div>
<svg className="text-white/30 text-base group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" data-icon-set="solar" data-solar="alt-arrow-right-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>

<button className="w-full text-left group flex hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer rounded-2xl p-3 items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-active:scale-90 transition-all">
<svg className="text-lg" data-icon-set="solar" data-solar="shield-check-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path><path d="m9.5 12.4l1.429 1.6l3.571-4" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Privacy</span>
</div>
<svg className="text-white/30 text-base group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" data-icon-set="solar" data-solar="alt-arrow-right-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
<div className="my-4 h-px bg-white/5 mx-6"></div>

<div className="z-20 pr-4 pl-4 space-y-1">
<h3 className="px-3 py-2 text-white/40 text-xs uppercase tracking-wider font-medium select-none">Hosting</h3>
<button className="w-full text-left group flex hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer rounded-2xl p-3 items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-active:scale-90 transition-all">
<svg className="text-lg" data-icon-set="solar" data-solar="notes-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></path><path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309"></path><path d="m11.777 10l4.83 1.294M11 12.898l2.898.776" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Listing</span>
</div>
<svg className="text-white/30 text-base group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" data-icon-set="solar" data-solar="alt-arrow-right-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="w-full text-left group flex hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer rounded-2xl p-3 items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-active:scale-90 transition-all">
<svg className="text-lg" data-icon-set="solar" data-solar="user-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="4"></circle><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"></path></g></svg>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Host</span>
</div>
<svg className="text-white/30 text-base group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" data-icon-set="solar" data-solar="alt-arrow-right-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
<div className="mt-auto px-4 pb-12 z-20 space-y-1">
<h3 className="px-3 py-2 text-white/40 text-xs uppercase tracking-wider font-medium select-none">More</h3>

<button className="w-full text-left group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 active:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30" onclick="const dot = this.querySelector('.toggle-dot'); const track = this.querySelector('.toggle-track'); dot.classList.toggle('translate-x-full'); dot.classList.toggle('bg-white'); dot.classList.toggle('bg-blue-500'); track.classList.toggle('bg-white/10'); track.classList.toggle('bg-blue-500/20');">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<svg className="text-lg" data-icon-set="solar" data-solar="moon-stars-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z" stroke="currentColor"></path><path d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" fill="currentColor"></path></g></svg>
</div>
<span className="text-white/90 text-base font-normal group-hover:text-white transition-colors">Dark Mode</span>
</div>

<div className="toggle-track w-12 h-7 bg-white/10 rounded-full relative cursor-pointer transition-colors duration-300">
<div className="toggle-dot absolute top-1 right-1 w-5 h-5 bg-blue-500 rounded-full shadow-lg transition-all duration-300"></div>
</div>
</button>
<button className="w-full text-left group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 group-active:scale-90 transition-all">
<svg className="text-lg group-hover:rotate-180 transition-transform duration-700" data-icon-set="solar" data-solar="refresh-circle-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z" fill="currentColor"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle></g></svg>
</div>
<span className="text-white/80 text-base font-normal group-hover:text-white transition-colors">Update</span>
</div>
<svg className="text-white/30 text-base group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" data-icon-set="solar" data-solar="alt-arrow-right-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full pointer-events-none"></div>
</div>

<div className="overflow-hidden flex flex-col bg-[#1c1e26]/60 w-full h-[780px] max-w-[360px] border-white/10 border rounded-[3rem] mx-auto relative shadow-2xl backdrop-blur-2xl">


<div className="flex justify-between items-center px-6 pt-5 pb-4 text-white/80 text-xs font-medium z-20">
<span className="">9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<svg className="text-lg" data-icon-set="solar" data-solar="battery-charge-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Zm18-2c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></path><path d="M11.5 9L9 12h3.5L10 15" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
</div>

<div className="px-5 mb-6 z-20">
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 hover:bg-white/10 transition">
<svg className="text-xl" data-icon-set="solar" data-solar="hamburger-menu-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
<div className="flex-1 h-10 bg-white/5 rounded-full border border-white/5 flex items-center px-4 gap-3">
<svg className="text-white/50 text-lg" data-icon-set="solar" data-solar="magnifer-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle className="" cx="11.5" cy="11.5" r="9.5"></circle><path d="M18.5 18.5L22 22" strokeLinecap="round"></path></g></svg>
<span className="text-white/50 text-base font-normal">Where to?</span>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 hover:bg-white/10 transition">
<svg className="text-xl" data-icon-set="solar" data-solar="microphone-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></path><path d="M13 8h4m-4 3h4m3-1v1a8 8 0 1 1-16 0v-1m8 9v3" strokeLinecap="round"></path></g></svg>
</button>
</div>
</div>

<div className="overflow-x-auto no-scrollbar z-20 mb-6 pt-1 pr-5 pl-5">

<div className="flex gap-4 gap-x-4 gap-y-4">

<div className="flex flex-col gap-1 hover:opacity-100 transition opacity-50 gap-x-1 gap-y-1 items-center cursor-pointer" onclick="window.handleCategoryClick(this)">
<div className="flex text-xl text-white bg-white/5 w-12 h-12 border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="home-linear" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="#ffffff" strokeWidth="1.5"><path className="" d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11m-6.5-5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5M20 22V9.5" strokeLinecap="round"></path><path className="" d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path></g></svg>
</div>
<span className="text-[10px] text-white font-medium">Cabins</span>
</div>

<div className="flex flex-col items-center gap-1 relative cursor-pointer opacity-100" onclick="window.handleCategoryClick(this)">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/25 transform scale-105">
<svg className="" data-icon-set="solar" data-solar="city-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M3 22V12c0-1.886 0-2.828.586-3.414S5.114 8 7 8s2.828 0 3.414.586S11 10.114 11 12"></path><path className="" d="M17 22v-6c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v6"></path><path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"></path><path className="" d="M4 8V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293S10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-[10px] text-white font-medium">Hotels</span>
<div className="dot-indicator w-1 h-1 bg-blue-400 rounded-full absolute -bottom-2"></div>
</div>

<div className="flex flex-col gap-1 hover:opacity-100 transition opacity-50 gap-x-1 gap-y-1 items-center cursor-pointer" onclick="window.handleCategoryClick(this)">
<div className="flex text-xl text-white bg-white/5 w-12 h-12 border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="water-linear" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 8.786c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.565-1.815.013C16.055 7.943 14.485 9 12 9C9.493 9 7.918 7.655 6.867 6.389c-.44-.53-1.28-.522-1.665.043C4.5 7.462 3.684 8.412 2 8.786m20 10c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 17.943 14.485 19 12 19c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354m20-5c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 12.943 14.485 14 12 14c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<span className="text-[10px] font-medium text-white">Pool</span>
</div>

<div className="flex flex-col gap-1 hover:opacity-100 transition opacity-50 gap-x-1 gap-y-1 items-center cursor-pointer" onclick="window.handleCategoryClick(this)">
<div className="flex text-xl text-white bg-white/5 w-12 h-12 border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="bonfire-linear" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="#ffffff" strokeWidth="1.5"><path className="" d="M18 8.807C18 13.761 13.733 15 11.6 15C9.733 15 6 13.761 6 8.807C6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523c.178 1.245 1.305 2.173 1.987 1.104c.582-.914.793-2.148.793-2.891c0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807Z"></path><path d="M20 15L4 22m0-7l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-[10px] font-medium text-white">Camping</span>
</div>

<div className="flex flex-col gap-1 hover:opacity-100 transition opacity-50 gap-x-1 gap-y-1 items-center cursor-pointer" onclick="window.handleCategoryClick(this)">
<div className="flex text-xl text-white bg-white/5 w-12 h-12 border-white/5 border rounded-2xl items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="home-2-linear" height="20" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></path><path className="" d="M12 15v3" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-[10px] font-medium text-white">Island</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-24 z-10 px-5 space-y-6">

<div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden group">

<img alt="Japan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b69bf96-8151-406f-b37f-e3047798c8c5_800w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
<svg className="text-yellow-400 text-xs" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<span className="text-white text-xs font-medium">4.8 (2,105)</span>
</div>

<button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition border border-white/10">
<svg className="text-base text-pink-500" data-icon-set="solar" data-solar="heart-bold" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" fill="currentColor"></path></svg>
</button>

<div className="absolute top-[50%] left-1/2 -translate-x-1/2 flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
</div>

<div className="absolute bottom-0 inset-x-0 p-5 bg-white/10 backdrop-blur-xl border-t border-white/10 rounded-t-[2rem]">
<h3 className="text-xl font-medium text-white tracking-tight">Osaka, Japan</h3>
<div className="flex justify-between items-end mt-3">
<div className="">
<p className="text-[10px] text-white/50 uppercase tracking-wide font-semibold">Cost</p>
<p className="text-base text-white font-medium">$240 USD <span className="text-xs text-white/60 font-normal">/ night</span></p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/50 uppercase tracking-wide font-semibold">Available</p>
<div className="flex items-center gap-1 text-base text-white font-medium">
<svg className="text-blue-400 text-sm" data-icon-set="solar" data-solar="calendar-linear" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><path className="" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" stroke="currentColor" strokeWidth="1.5"></path><path d="M7 4V2.5M17 4V2.5M2.5 9h19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path></g></svg>
<span className="">Nov 12 - 14</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-40 rounded-[2rem] overflow-hidden bg-gray-800">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58e861e1-0244-4721-8f1a-113276de6436_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 mix-blend-overlay"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
<svg className="text-yellow-400 text-xs" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<span className="text-white text-xs font-medium">4.9 (850)</span>
</div>
<button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
<svg className="text-base" data-icon-set="solar" data-solar="heart-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z" fill="currentColor"></path></svg>
</button>
</div>
</div>

<div className="-translate-x-1/2 flex z-30 bg-[#181a22]/80 w-[85%] h-16 border-white/10 border rounded-full pr-2 pl-2 absolute bottom-8 left-1/2 shadow-2xl backdrop-blur-xl items-center justify-between" onclick="const t=event.target.closest('button');if(t){this.querySelectorAll('button').forEach(b=&gt;b.className='w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition');t.className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30'}">
<button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
<svg className="text-xl" data-icon-set="solar" data-solar="map-point-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="plane" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition">
<svg className="text-xl w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="heart-linear" height="20" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z" fill="currentColor"></path></svg>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-white transition">
<svg className="text-xl w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="chat-round-line-linear" height="20" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></path><path className="" d="M8 10.5h8M8 14h5.5" strokeLinecap="round"></path></g></svg>
</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
</div>

<div className="relative w-full max-w-[360px] mx-auto h-[780px] rounded-[3rem] border border-white/10 bg-[#1c1e26]/60 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 pt-5 pb-2 text-white/80 text-xs font-medium z-20">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<svg className="text-lg" data-icon-set="solar" data-solar="battery-charge-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Zm18-2c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></path><path d="M11.5 9L9 12h3.5L10 15" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
</div>

<div className="px-6 py-4 flex items-center justify-between z-20">
<button className="flex items-center gap-2 text-white hover:text-white/80 transition">
<svg className="text-xl" data-icon-set="solar" data-solar="alt-arrow-left-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 5l-6 7l6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="text-base font-normal">Back</span>
</button>
<button className="text-white/60 text-base font-normal hover:text-white transition">Cancel</button>
</div>

<div className="px-6 mt-4 z-20">
<h2 className="text-2xl font-medium text-white tracking-tight">2-night stay</h2>
<p className="text-white/50 text-base mt-1">Mon, Nov 12 - Wed, Nov 14</p>
</div>

<div className="mt-10 px-4 z-20">

<div className="grid grid-cols-7 text-center mb-6">
<div className="text-[10px] text-white/40 font-medium uppercase">Sun</div>
<div className="text-[10px] text-white/40 font-medium uppercase">Mon</div>
<div className="text-[10px] text-white/40 font-medium uppercase">Tue</div>
<div className="text-[10px] text-white/40 font-medium uppercase">Wed</div>
<div className="text-[10px] text-white/40 font-medium uppercase">Thu</div>
<div className="text-[10px] text-white/40 font-medium uppercase">Fri</div>
<div className="text-[10px] text-white/40 font-medium uppercase">Sat</div>
</div>

<div className="bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] p-4 border border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] -z-10"></div>
<div className="text-center mb-6">
<h3 className="text-white text-base font-medium">November 2022</h3>
</div>
<div className="grid grid-cols-7 gap-y-6 text-center text-base font-medium text-white/90">

<span className="text-white/20">30</span>
<span className="text-white/20">31</span>
<span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span className="">6</span>
<span className="">7</span>
<span>8</span>
<span>9</span>
<span>10</span>
<span>11</span>

<div className="relative z-10">
<div className="absolute inset-y-0 left-0 right-[-50%] bg-blue-600 rounded-l-full -z-10"></div>
<span className="relative text-white">12</span>
</div>

<div className="relative z-10">
<div className="absolute inset-y-0 left-[-50%] right-[-50%] bg-blue-600 -z-10"></div>
<span className="relative text-white">13</span>
</div>

<div className="relative z-10">
<div className="absolute inset-y-0 left-[-50%] right-0 bg-blue-600 rounded-r-full -z-10 shadow-lg shadow-blue-500/50"></div>
<span className="relative text-white">14</span>
</div>
<span className="">15</span>
<span>16</span>
<span>17</span>
<span>18</span>
<span className="">19</span>
<span>20</span>
<span className="">21</span>
<span className="">22</span>
<span className="">23</span>
<span className="">24</span>
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
<span>30</span>
<span className="text-white/20">1</span>
<span className="text-white/20">2</span>
<span className="text-white/20">3</span>
</div>

<div className="flex justify-center gap-4 mt-8">
<button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70">
<svg className="" data-icon-set="solar" data-solar="alt-arrow-left-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 5l-6 7l6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70">
<svg className="" data-icon-set="solar" data-solar="alt-arrow-right-linear" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</div>

<div className="mt-auto z-20">
<div className="mx-4 mb-8 p-1 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-xl flex items-center justify-between pl-6 pr-2 py-2">
<div>
<p className="text-white font-medium text-lg">$240 USD <span className="text-sm font-normal text-white/60">night</span></p>
<div className="flex items-center gap-1 text-white/50 text-xs mt-0.5">
<svg className="" data-icon-set="solar" data-solar="calendar-linear" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" stroke="currentColor" strokeWidth="1.5"></path><path d="M7 4V2.5M17 4V2.5M2.5 9h19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path></g></svg>
<span>Nov 12 - 14</span>
</div>
</div>
<button className="bg-blue-600 hover:bg-blue-500 text-white text-base font-medium px-8 py-3 rounded-[1.5rem] shadow-lg shadow-blue-600/30 transition-all">
                        Save
                    </button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</div>

<div className="relative w-full max-w-[360px] mx-auto h-[780px] rounded-[3rem] border border-white/10 bg-[#1c1e26]/60 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 pt-5 pb-2 text-white/80 text-xs font-medium z-20">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<svg className="text-lg" data-icon-set="solar" data-solar="battery-charge-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Zm18-2c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></path><path d="M11.5 9L9 12h3.5L10 15" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
</div>

<div className="px-6 py-4 flex items-center gap-4 z-20">
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition">
<svg className="text-xl" data-icon-set="solar" data-solar="alt-arrow-left-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 5l-6 7l6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<h2 className="text-lg font-medium text-white tracking-tight">Checkout</h2>
</div>

<div className="px-6 space-y-6 z-20 overflow-y-auto no-scrollbar pb-24">

<div className="w-full aspect-[1.6/1] rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 relative overflow-hidden shadow-2xl shadow-blue-900/40">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<iconify-icon className="text-4xl text-white opacity-80" icon="logos:visa" width="48"></iconify-icon>
<svg className="text-white/60" data-icon-set="solar" data-solar="card-linear" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></path><path d="M10 16H6m8 0h-1.5M2 10h20" strokeLinecap="round"></path></g></svg>
</div>
<div className="relative z-10">
<p className="text-white/80 text-lg font-mono tracking-widest mb-1">•••• •••• •••• 4242</p>
</div>
<div className="flex justify-between items-end mt-4 relative z-10">
<div>
<p className="text-[10px] text-white/50 uppercase tracking-widest">Card Holder</p>
<p className="text-white font-medium text-sm tracking-wide">ELARA VANCE</p>
</div>
<div>
<p className="text-[10px] text-white/50 uppercase tracking-widest">Expires</p>
<p className="text-white font-medium text-sm tracking-wide">09/26</p>
</div>
</div>
</div>

<div>
<h3 className="text-white text-base font-medium mb-3">Payment Method</h3>
<div className="space-y-2">

<button className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black">
<iconify-icon className="text-lg" icon="logos:apple"></iconify-icon>
</div>
<span className="text-white font-medium">Apple Pay</span>
</div>
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">

</div>
</button>

<button className="w-full flex items-center justify-between p-3 rounded-2xl bg-blue-600/20 border border-blue-500/50 transition">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white border border-white/10">
<iconify-icon className="text-xl" icon="logos:mastercard" width="24"></iconify-icon>
</div>
<div className="text-left">
<p className="text-white font-medium text-sm">Mastercard</p>
<p className="text-white/40 text-xs">•••• 4242</p>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
<svg className="text-white" data-icon-set="solar" data-solar="check-linear" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</button>
</div>
</div>

<div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-white/60">2 Nights</span>
<span className="text-white font-medium">$480.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-white/60">Cleaning Fee</span>
<span className="text-white font-medium">$45.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-white/60">Taxes</span>
<span className="text-white font-medium">$62.00</span>
</div>
<div className="h-px bg-white/10 my-2"></div>
<div className="flex justify-between items-center text-base">
<span className="text-white font-medium">Total</span>
<span className="text-white font-semibold text-lg">$587.00</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1c1e26] via-[#1c1e26]/90 to-transparent z-30 pt-10">
<button className="w-full bg-white text-black font-semibold text-base py-4 rounded-2xl shadow-xl shadow-white/10 hover:bg-gray-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<span>Pay Now</span>
<svg className="" data-icon-set="solar" data-solar="arrow-right-linear" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m10 17l5-5l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<div className="flex items-center justify-center gap-1.5 mt-3 text-white/30 text-xs">
<svg className="" data-icon-set="solar" data-solar="shield-check-linear" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path><path d="m9.5 12.4l1.429 1.6l3.571-4" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
<span>Secure encrypted payment</span>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
</div>
</div>

    </>
  );
}
