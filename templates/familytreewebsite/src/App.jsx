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
      

<aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-zinc-200/80 flex-shrink-0 flex flex-col z-20">

<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="h-8 w-8 bg-zinc-900 text-white rounded-md flex items-center justify-center font-medium tracking-tighter text-base shadow-sm">
                FH
            </div>
<span className="ml-3 font-medium tracking-tight text-base text-zinc-800">FamHistory</span>
</div>

<nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto hidden md:block">
<p className="px-3 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Overview</p>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:widget-2-linear"></iconify-icon>
<span>Dashboard</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-zinc-100/80 text-zinc-900 text-sm font-medium" href="#">
<iconify-icon className="text-lg text-zinc-700" icon="solar:git-network-linear"></iconify-icon>
<span>Family Tree</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span>Directory</span>
</a>
<p className="px-3 text-xs font-medium text-zinc-400 uppercase tracking-wider mt-6 mb-2">Media</p>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:gallery-linear"></iconify-icon>
<span>Photos &amp; Docs</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-medium" href="#">
<iconify-icon className="text-lg text-zinc-400" icon="solar:map-linear"></iconify-icon>
<span>Locations</span>
</a>
</nav>

<div className="p-4 border-t border-zinc-100 hidden md:block">
<div className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-zinc-50 cursor-pointer transition-colors">
<img alt="User" className="w-8 h-8 rounded-full border border-zinc-200" src="https://i.pravatar.cc/150?img=68"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">Alex Smith</p>
<p className="text-xs text-zinc-500 truncate">Pro Plan</p>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-16 border-b border-zinc-200/80 bg-white flex items-center justify-between px-6 z-10 flex-shrink-0">
<div className="flex items-center space-x-4">
<div className="flex items-center text-sm font-medium text-zinc-500">
<span className="hover:text-zinc-900 cursor-pointer">Trees</span>
<iconify-icon className="mx-2 text-zinc-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-zinc-900">The Smith Lineage</span>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="hidden sm:flex items-center bg-zinc-50 border border-zinc-200 rounded-md px-3 py-1.5 focus-within:border-zinc-300 focus-within:ring-1 focus-within:ring-zinc-200 transition-all">
<iconify-icon className="text-zinc-400 text-lg mr-2" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm w-48 text-zinc-800 placeholder-zinc-400" placeholder="Find a relative..." type="text"/>
</div>
<button className="px-3 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition-colors shadow-sm flex items-center space-x-2">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
<span className="hidden sm:inline">Add Person</span>
</button>
</div>
</header>

<div className="flex-1 relative overflow-auto cursor-grab active:cursor-grabbing" style={{backgroundImage: 'radial-gradient(#e4e4e7 1px, transparent 1px)', backgroundSize: '24px 24px'}}>

<div className="min-w-max p-12 md:p-24 flex flex-col items-center justify-start space-y-16">

<div className="flex justify-center items-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-px bg-zinc-300 -z-10"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-24 bg-zinc-300 -z-10 mt-12"></div>

<div className="relative z-10 mr-16">
<div className="w-56 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:border-zinc-300 group">

<div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all bg-white/90 backdrop-blur px-1.5 py-1 rounded-md border border-zinc-100 shadow-sm z-20">
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Edit Profile"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Add Relative"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></button>
</div>
<div className="flex items-start justify-between mb-3">
<img alt="Avatar" className="w-12 h-12 rounded-full ring-2 ring-white border border-zinc-100 object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<h3 className="font-medium text-sm text-zinc-900 mb-0.5 tracking-tight">Arthur J. Smith</h3>
<p className="text-xs text-zinc-500 mb-2">1920 - 1995</p>
<div className="flex items-center text-xs text-zinc-400">
<iconify-icon className="mr-1" icon="solar:map-point-linear"></iconify-icon> London, UK
                            </div>
</div>
</div>

<div className="relative z-10 ml-16">
<div className="w-56 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:border-zinc-300 group">

<div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all bg-white/90 backdrop-blur px-1.5 py-1 rounded-md border border-zinc-100 shadow-sm z-20">
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Edit Profile"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Add Relative"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></button>
</div>
<div className="flex items-start justify-between mb-3">
<img alt="Avatar" className="w-12 h-12 rounded-full ring-2 ring-white border border-zinc-100 object-cover" src="https://i.pravatar.cc/150?img=5"/>
</div>
<h3 className="font-medium text-sm text-zinc-900 mb-0.5 tracking-tight">Eleanor M. Davis</h3>
<p className="text-xs text-zinc-500 mb-2">1922 - 2004</p>
<div className="flex items-center text-xs text-zinc-400">
<iconify-icon className="mr-1" icon="solar:map-point-linear"></iconify-icon> Bristol, UK
                            </div>
</div>
</div>
</div>

<div className="flex justify-center items-start relative mt-8">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[32rem] h-px bg-zinc-300 -z-10"></div>

<div className="relative z-10 flex flex-col items-center mr-24">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-300 -z-10 -mt-8"></div>
<div className="w-56 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:border-zinc-300 group opacity-80">
<div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all bg-white/90 backdrop-blur px-1.5 py-1 rounded-md border border-zinc-100 shadow-sm z-20">
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Edit Profile"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Add Relative"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></button>
</div>

<button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 shadow-sm z-20 transition-colors">
<iconify-icon className="text-sm" icon="solar:add-linear"></iconify-icon>
</button>
<div className="flex items-start justify-between mb-3">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-sm text-zinc-900 mb-0.5 tracking-tight">Richard Smith</h3>
<p className="text-xs text-zinc-500">1948 - Present</p>
</div>
</div>

<div className="relative z-10 flex flex-col items-center group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-300 -z-10 -mt-8"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-zinc-800 -z-10 -mb-16"></div>

<div className="absolute top-1/2 left-1/2 w-48 h-px bg-zinc-300 -z-10"></div>

<div className="w-64 bg-white border-2 border-zinc-800 rounded-xl p-5 shadow-md ring-4 ring-zinc-800/5 relative z-10">

<div className="absolute top-3 right-3 flex space-x-1 opacity-60 group-hover:opacity-100 transition-all bg-white/90 backdrop-blur px-1.5 py-1 rounded-md border border-zinc-200 shadow-sm z-20">
<button className="p-1 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded transition-colors" title="Edit Profile">
<iconify-icon className="text-sm" icon="solar:pen-linear"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200 self-center mx-1"></div>
<button className="p-1 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded transition-colors" title="Add Partner">
<iconify-icon className="text-sm" icon="solar:hearts-linear"></iconify-icon>
</button>
<button className="p-1 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded transition-colors" title="Add Child">
<iconify-icon className="text-sm" icon="solar:user-plus-linear"></iconify-icon>
</button>
</div>

<button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-zinc-800 border-none rounded-full flex items-center justify-center text-white shadow-sm z-20 hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-sm" icon="solar:minus-linear"></iconify-icon>
</button>
<div className="flex items-start justify-between mb-4">
<img alt="Avatar" className="w-14 h-14 rounded-full ring-2 ring-white border border-zinc-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=3"/>
</div>
<h3 className="font-medium text-base text-zinc-900 mb-1 tracking-tight">Robert T. Smith</h3>
<p className="text-xs text-zinc-500 mb-3">b. Oct 12, 1950</p>
<div className="flex items-center space-x-3 text-zinc-500 text-xs mt-4 pt-3 border-t border-zinc-100">
<div className="flex items-center" title="Photos">
<iconify-icon className="mr-1" icon="solar:gallery-linear"></iconify-icon> 12
                                </div>
<div className="flex items-center" title="Records">
<iconify-icon className="mr-1" icon="solar:document-text-linear"></iconify-icon> 4
                                </div>
<div className="flex items-center" title="Events">
<iconify-icon className="mr-1" icon="solar:calendar-linear"></iconify-icon> 6
                                </div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center ml-24">
<div className="w-56 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:border-zinc-300 group mt-4">
<div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all bg-white/90 backdrop-blur px-1.5 py-1 rounded-md border border-zinc-100 shadow-sm z-20">
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Edit Profile"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Add Relative"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></button>
</div>
<div className="flex items-start justify-between mb-3">
<img alt="Avatar" className="w-12 h-12 rounded-full ring-2 ring-white border border-zinc-100 object-cover" src="https://i.pravatar.cc/150?img=9"/>
</div>
<h3 className="font-medium text-sm text-zinc-900 mb-0.5 tracking-tight">Martha L. Jones</h3>
<p className="text-xs text-zinc-500">b. 1952</p>
</div>
</div>
</div>

<div className="flex justify-center items-start relative mt-16">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-zinc-800 -z-10"></div>

<div className="relative z-10 flex flex-col items-center mr-16">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-800 -z-10 -mt-8"></div>
<div className="w-52 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:border-zinc-300 group">
<div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all bg-white/90 backdrop-blur px-1.5 py-1 rounded-md border border-zinc-100 shadow-sm z-20">
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Edit Profile"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Add Relative"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></button>
</div>
<div className="flex items-start justify-between mb-3">
<div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<h3 className="font-medium text-sm text-zinc-900 mb-0.5 tracking-tight">James Smith</h3>
<p className="text-xs text-zinc-500">b. 1980</p>
</div>
</div>

<div className="relative z-10 flex flex-col items-center ml-16">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-800 -z-10 -mt-8"></div>
<div className="w-52 bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:border-zinc-300 group">
<div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all bg-white/90 backdrop-blur px-1.5 py-1 rounded-md border border-zinc-100 shadow-sm z-20">
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Edit Profile"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded" title="Add Relative"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></button>
</div>
<button className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 shadow-sm z-20 transition-colors">
<iconify-icon className="text-sm" icon="solar:add-linear"></iconify-icon>
</button>
<div className="flex items-start justify-between mb-3">
<img alt="Avatar" className="w-12 h-12 rounded-full ring-2 ring-white border border-zinc-100 object-cover" src="https://i.pravatar.cc/150?img=12"/>
</div>
<h3 className="font-medium text-sm text-zinc-900 mb-0.5 tracking-tight">William Smith</h3>
<p className="text-xs text-zinc-500">b. 1985</p>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 lg:right-[26rem] flex flex-col space-y-2 z-30 transition-all">
<div className="bg-white border border-zinc-200 rounded-lg shadow-sm flex flex-col overflow-hidden backdrop-blur-md bg-white/90">
<button className="p-2.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors border-b border-zinc-100 flex items-center justify-center" title="Zoom In">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<button className="p-2.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors border-b border-zinc-100 flex items-center justify-center" title="Zoom Out">
<iconify-icon className="text-xl" icon="solar:minus-circle-linear"></iconify-icon>
</button>
<button className="p-2.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors flex items-center justify-center" title="Fit to Screen">
<iconify-icon className="text-xl" icon="solar:maximize-square-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<aside className="w-full md:w-96 bg-white border-l border-zinc-200/80 flex-shrink-0 hidden lg:flex flex-col z-20 shadow-[-4px_0_24px_-10px_rgba(0,0,0,0.05)] h-full overflow-hidden">

<div className="p-6 border-b border-zinc-100 relative bg-zinc-50/50">
<button className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors bg-white rounded-full p-1 border border-transparent hover:border-zinc-200 shadow-sm">
<iconify-icon className="text-lg block" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center text-center mt-2 group">
<div className="relative cursor-pointer mb-4">
<img alt="Robert Smith" className="w-24 h-24 rounded-full border border-zinc-200 shadow-sm object-cover" src="https://i.pravatar.cc/150?img=3"/>
<div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
</div>

<div className="w-full px-4">
<input className="w-full text-center text-lg font-semibold tracking-tight text-zinc-900 bg-transparent border border-transparent hover:bg-white hover:border-zinc-200 hover:shadow-sm focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-2 py-1 transition-all outline-none" type="text" value="Robert T. Smith"/>
</div>

<div className="w-full px-8 mt-1">
<input className="w-full text-center text-sm text-zinc-500 bg-transparent border border-transparent hover:bg-white hover:border-zinc-200 focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-2 py-0.5 transition-all outline-none" type="text" value="1950 - Present"/>
</div>
<div className="flex items-center justify-center space-x-2 mt-4">
<button className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-md transition-colors shadow-sm flex items-center">
<iconify-icon className="mr-1.5 text-sm" icon="solar:check-circle-linear"></iconify-icon> Save Changes
                    </button>
<button className="px-2 py-1.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 rounded-md transition-colors shadow-sm">
<iconify-icon className="block" icon="solar:link-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto pb-8">

<div className="p-6">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                    Profile Details
                </h3>
<div className="space-y-4">

<div className="relative group">
<label className="block text-xs font-medium text-zinc-500 mb-1 ml-1 flex items-center">
<iconify-icon className="mr-1.5 text-zinc-400" icon="solar:star-circle-linear"></iconify-icon> Birth
                        </label>
<input className="w-full text-sm font-medium text-zinc-900 bg-transparent border border-transparent hover:bg-zinc-50 hover:border-zinc-200 focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-3 py-1.5 transition-all outline-none mb-1" placeholder="Date..." type="text" value="October 12, 1950"/>
<input className="w-full text-xs text-zinc-600 bg-transparent border border-transparent hover:bg-zinc-50 hover:border-zinc-200 focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-3 py-1.5 transition-all outline-none" placeholder="Location..." type="text" value="St. Mary's Hospital, London, England"/>
</div>

<div className="relative group">
<label className="block text-xs font-medium text-zinc-500 mb-1 ml-1 flex items-center">
<iconify-icon className="mr-1.5 text-zinc-400" icon="solar:hearts-linear"></iconify-icon> Marriage
                        </label>
<input className="w-full text-sm font-medium text-zinc-900 bg-transparent border border-transparent hover:bg-zinc-50 hover:border-zinc-200 focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-3 py-1.5 transition-all outline-none mb-1" placeholder="Date..." type="text" value="June 5, 1975"/>
<input className="w-full text-xs text-zinc-600 bg-transparent border border-transparent hover:bg-zinc-50 hover:border-zinc-200 focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-3 py-1.5 transition-all outline-none" placeholder="Details..." type="text" value="Married Martha L. Jones"/>
</div>

<div className="relative group">
<label className="block text-xs font-medium text-zinc-500 mb-1 ml-1 flex items-center">
<iconify-icon className="mr-1.5 text-zinc-400" icon="solar:briefcase-linear"></iconify-icon> Occupation
                        </label>
<input className="w-full text-sm font-medium text-zinc-900 bg-transparent border border-transparent hover:bg-zinc-50 hover:border-zinc-200 focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-3 py-1.5 transition-all outline-none mb-1" placeholder="Role..." type="text" value="Architect"/>
<input className="w-full text-xs text-zinc-600 bg-transparent border border-transparent hover:bg-zinc-50 hover:border-zinc-200 focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 rounded-md px-3 py-1.5 transition-all outline-none" placeholder="Time period..." type="text" value="1974 - 2015"/>
</div>
<button className="w-full py-2 border border-zinc-200 border-dashed rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-center mt-2">
<iconify-icon className="mr-1.5 text-sm" icon="solar:add-circle-linear"></iconify-icon> Add Fact
                    </button>
</div>
</div>

<div className="mx-6 border-t border-zinc-100"></div>

<div className="p-6">
<div className="flex items-center justify-between mb-5">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Timeline</h3>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors p-1" title="Add Event">
<iconify-icon className="text-lg block" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<div className="relative pl-3 border-l border-zinc-200 space-y-6 ml-2">

<div className="relative">
<div className="absolute -left-[17px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-300 ring-1 ring-zinc-200"></div>
<p className="text-xs font-semibold text-zinc-900 mb-0.5">1950</p>
<p className="text-sm font-medium text-zinc-800">Born</p>
<p className="text-xs text-zinc-500 mt-1">St. Mary's Hospital, London</p>
</div>

<div className="relative">
<div className="absolute -left-[17px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-300 ring-1 ring-zinc-200"></div>
<p className="text-xs font-semibold text-zinc-900 mb-0.5">1974</p>
<p className="text-sm font-medium text-zinc-800">Graduated University</p>
<p className="text-xs text-zinc-500 mt-1">BA in Architecture, UCL</p>
</div>

<div className="relative">
<div className="absolute -left-[17px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-800 ring-1 ring-zinc-200"></div>
<p className="text-xs font-semibold text-zinc-900 mb-0.5">1975</p>
<p className="text-sm font-medium text-zinc-800">Marriage to Martha L. Jones</p>
</div>
</div>
</div>

<div className="mx-6 border-t border-zinc-100"></div>

<div className="p-6">
<div className="flex items-center justify-between mb-5">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Media Gallery</h3>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors p-1" title="Upload Files">
<iconify-icon className="text-lg block" icon="solar:upload-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="relative group cursor-pointer aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
<img alt="Vintage Family" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1541818165730-81f1e948c3b7?w=500&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>

<div className="relative group cursor-pointer aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 shadow-sm bg-zinc-50 flex flex-col items-center justify-center p-2 text-center">
<iconify-icon className="text-2xl text-zinc-400 mb-1" icon="solar:document-text-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600 truncate w-full">Birth Certificate.pdf</span>
</div>

<div className="relative group cursor-pointer aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
<img alt="Wedding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale opacity-80" src="https://images.unsplash.com/photo-1510172951991-856a654063f9?w=500&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>

<div className="relative cursor-pointer aspect-[4/3] rounded-lg border-2 border-dashed border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 flex flex-col items-center justify-center transition-colors group">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-600 mb-1.5" icon="solar:gallery-add-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-700">Add File</span>
</div>
</div>
</div>
</div>
</aside>

    </>
  );
}
