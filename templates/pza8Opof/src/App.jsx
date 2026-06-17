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
      
<div className="container mx-auto px-4 py-12 max-w-[820px]">

<div className="mb-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="flex flex-col space-y-2">
<div className="w-full h-3 bg-[#6E56CF]/20 rounded flex items-center">
<div className="w-1/3 h-3 bg-[#6E56CF]/60 rounded-l"></div>
</div>
<div className="flex space-x-1">
<div className="w-3 h-3 rounded-full bg-[#6E56CF]"></div>
<div className="w-16 h-3 bg-[#6E56CF]/20 rounded"></div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Version Control</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Track design changes with full version history.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">History</span>
</div>
</div>
</div>

<div className="md:col-span-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="flex space-x-2">
<div className="w-8 h-8 bg-[#6E56CF] rounded"></div>
<div className="w-8 h-8 bg-[#9E8CFC] rounded"></div>
<div className="w-8 h-8 bg-[#C4B5FD] rounded"></div>
</div>
<div className="mt-3 flex space-x-2">
<div className="w-20 h-6 bg-[#6E56CF] rounded-md"></div>
<div className="w-20 h-6 bg-[#6E56CF]/60 rounded-md"></div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Design System</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Create and maintain consistent designs with a comprehensive design system.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">Components</span>
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">Tokens</span>
</div>
</div>
</div>

<div className="md:col-span-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="flex justify-center items-center h-full">
<div className="relative">
<div className="w-16 h-24 bg-[#6E56CF]/20 rounded-lg border border-[#6E56CF]/40"></div>
<div className="w-5 h-5 bg-[#6E56CF] rounded-full absolute -right-2 -bottom-2 flex items-center justify-center">
<div className="w-2 h-2 bg-[#0F0F0F] rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Prototyping</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Transform static designs into interactive prototypes.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">Interactive</span>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="grid grid-cols-3 gap-2 h-full">
<div className="col-span-2 bg-[#6E56CF]/10 rounded p-2">
<div className="w-1/2 h-2 bg-[#6E56CF]/40 rounded mb-2"></div>
<div className="w-full h-1 bg-[#6E56CF]/20 rounded mb-1"></div>
<div className="w-full h-1 bg-[#6E56CF]/20 rounded mb-1"></div>
<div className="flex mt-2">
<div className="w-5 h-5 rounded-full bg-[#9E8CFC] -mr-1 border border-[#212121]"></div>
<div className="w-5 h-5 rounded-full bg-[#6E56CF] -mr-1 border border-[#212121]"></div>
</div>
</div>
<div className="flex flex-col space-y-2">
<div className="flex-1 bg-[#6E56CF]/20 rounded p-1">
<div className="w-full h-1 bg-[#6E56CF]/40 rounded mb-1"></div>
<div className="w-2/3 h-1 bg-[#6E56CF]/40 rounded"></div>
</div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Collaboration</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Work together with your team in real-time with live editing.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">Live Editing</span>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="flex space-x-2">
<div className="w-8 h-8 bg-[#6E56CF] rounded"></div>
<div className="w-8 h-8 bg-[#9E8CFC] rounded"></div>
<div className="w-8 h-8 bg-[#C4B5FD] rounded"></div>
</div>
<div className="mt-3 flex space-x-2">
<div className="w-20 h-6 bg-[#6E56CF] rounded-md"></div>
<div className="w-20 h-6 bg-[#6E56CF]/60 rounded-md"></div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Design System</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Create and maintain consistent designs across your projects.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">Components</span>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="flex flex-col space-y-2">
<div className="w-full h-3 bg-[#6E56CF]/20 rounded flex items-center">
<div className="w-1/3 h-3 bg-[#6E56CF]/60 rounded-l"></div>
</div>
<div className="flex space-x-1">
<div className="w-3 h-3 rounded-full bg-[#6E56CF]"></div>
<div className="w-16 h-3 bg-[#6E56CF]/20 rounded"></div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Version History</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Track design changes over time.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">History</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="grid grid-cols-3 gap-2 h-full">
<div className="col-span-2 bg-[#6E56CF]/10 rounded p-2">
<div className="w-1/2 h-2 bg-[#6E56CF]/40 rounded mb-2"></div>
<div className="w-full h-1 bg-[#6E56CF]/20 rounded mb-1"></div>
<div className="w-full h-1 bg-[#6E56CF]/20 rounded mb-1"></div>
<div className="flex mt-2">
<div className="w-5 h-5 rounded-full bg-[#9E8CFC] -mr-1 border border-[#212121]"></div>
<div className="w-5 h-5 rounded-full bg-[#6E56CF] -mr-1 border border-[#212121]"></div>
</div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Collaboration</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Work together with your team in real-time with live editing.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">Team</span>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
<div className="aspect-w-16 aspect-h-9 bg-[#212121] p-4">
<div className="flex justify-center items-center h-full">
<div className="relative">
<div className="w-16 h-24 bg-[#6E56CF]/20 rounded-lg border border-[#6E56CF]/40"></div>
<div className="w-5 h-5 bg-[#6E56CF] rounded-full absolute -right-2 -bottom-2 flex items-center justify-center">
<div className="w-2 h-2 bg-[#0F0F0F] rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="p-5 flex flex-col">
<div className="flex items-center space-x-2 mb-3">
<svg className="w-4 h-4 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h3 className="text-base font-medium tracking-tight">Prototyping</h3>
</div>
<p className="text-gray-400 mb-3 text-xs leading-relaxed">
              Create interactive prototypes.
            </p>
<div className="flex text-[10px] gap-1 mt-auto">
<span className="px-1.5 py-0.5 rounded-full border border-[#6E56CF]/30 text-[#9E8CFC]">Interactive</span>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
