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
      

<aside className="w-64 border-r border-[#222] bg-[#0A0A0A] flex flex-col justify-between flex-shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-[#222]">
<div className="font-display font-medium text-base tracking-tight uppercase">Cici Askari</div>
<div className="ml-2 text-[10px] text-[#888] tracking-widest uppercase mt-0.5 border border-[#333] rounded px-1.5 py-0.5">CMS</div>
</div>

<nav className="p-4 space-y-1">
<div className="text-[10px] text-[#888] uppercase tracking-widest px-3 mb-2 mt-4">Content</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                    Landing Page
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-[#888] hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                    Properties
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-[#888] hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Biography
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-[#888] hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
                    Testimonials
                </a>
<div className="text-[10px] text-[#888] uppercase tracking-widest px-3 mb-2 mt-8">Configuration</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-[#888] hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pallete-2-linear" strokeWidth="1.5"></iconify-icon>
                    Design &amp; Styling
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-[#888] hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                    Global Settings
                </a>
</nav>
</div>

<div className="p-4 border-t border-[#222]">
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
<div>
<div className="text-sm font-medium">Admin</div>
<div className="text-xs text-[#888]">admin@ciciaskari.com</div>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#0A0A0A] h-full relative overflow-hidden">

<header className="h-16 border-b border-[#222] bg-[#0A0A0A]/80 backdrop-blur-md flex items-center justify-between px-8 flex-shrink-0 z-10 sticky top-0">
<div className="flex items-center gap-2 text-sm">
<span className="text-[#888]">Pages</span>
<span className="text-[#444]">/</span>
<span className="font-medium">Landing Page Editor</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs text-[#888]">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Changes saved
                </div>
<button className="bg-white text-black hover:bg-gray-200 rounded-md px-4 py-1.5 text-sm font-medium transition-all shadow-sm">
                    Publish to Live
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 lg:px-12 xl:px-20 pb-32">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-medium tracking-tight mb-2">Landing Page Editor</h1>
<p className="text-[#888] mb-8">Manage the content, imagery, and layout of your main storefront.</p>

<div className="flex gap-6 border-b border-[#222] mb-8">
<button className="pb-3 border-b-2 border-white text-white font-medium transition-colors">Hero Section</button>
<button className="pb-3 border-b-2 border-transparent text-[#888] hover:text-[#ccc] transition-colors">About Section</button>
<button className="pb-3 border-b-2 border-transparent text-[#888] hover:text-[#ccc] transition-colors">Featured Properties</button>
<button className="pb-3 border-b-2 border-transparent text-[#888] hover:text-[#ccc] transition-colors">Contact Footer</button>
</div>

<div className="space-y-8 animate-fade-in">

<div className="bg-[#111] border border-[#222] rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium tracking-tight">Typography &amp; Copy</h2>
<iconify-icon className="text-[#888] text-xl" icon="solar:text-field-linear"></iconify-icon>
</div>
<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider mb-2">Headline</label>
<input className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-3 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#666] focus:ring-1 focus:ring-[#666] transition-all font-display" type="text" value="Dubai's Premier Luxury Real Estate"/>
</div>
<div>
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider mb-2">Subheadline</label>
<textarea className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-3 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#666] focus:ring-1 focus:ring-[#666] transition-all resize-none" rows="2">Curating the finest properties across the Emirates and globally. Expect nothing less than extraordinary.</textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider mb-2">Primary Button Text</label>
<input className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-3 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#666] focus:ring-1 focus:ring-[#666] transition-all" type="text" value="Explore Portfolio"/>
</div>
<div>
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider mb-2">Primary Button Link</label>
<input className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-3 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#666] focus:ring-1 focus:ring-[#666] transition-all text-[#888]" type="text" value="#properties"/>
</div>
</div>
</div>
</div>

<div className="bg-[#111] border border-[#222] rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium tracking-tight">Background Media</h2>
<iconify-icon className="text-[#888] text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>

<div className="mb-5">
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider mb-2">Media Type</label>
<div className="relative w-48">
<select className="appearance-none w-full bg-[#0A0A0A] border border-[#333] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#666] transition-all cursor-pointer">
<option>Cinematic Video</option>
<option selected="">Static Image</option>
<option>Image Slideshow</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider mb-2">Current Hero Image</label>
<div className="group relative border border-[#333] rounded-lg overflow-hidden h-64 bg-[#0A0A0A] flex flex-col items-center justify-center transition-all hover:border-[#666]">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
<div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
<iconify-icon className="text-3xl text-white mb-2" icon="solar:upload-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Click to replace image</span>
<span className="text-xs text-[#888] mt-1">Recommended size: 2880 x 1600px</span>
</div>
<label className="absolute inset-0 cursor-pointer z-20">
<input accept="image/*" type="file"/>
</label>
</div>
</div>

<div className="mt-6">
<div className="flex justify-between items-center mb-2">
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider">Overlay Darkening</label>
<span className="text-xs text-[#888]">40%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="40"/>
</div>
</div>

<div className="bg-[#111] border border-[#222] rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium tracking-tight">Layout Configurations</h2>
<iconify-icon className="text-[#888] text-xl" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between">
<div>
<div className="font-medium text-white mb-1">Enable Scroll Down Indicator</div>
<div className="text-xs text-[#888]">Shows an animated arrow guiding users down.</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-[#222] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#333] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</label>
</div>

<div className="flex items-center justify-between">
<div>
<div className="font-medium text-white mb-1">Invert Header Colors on Scroll</div>
<div className="text-xs text-[#888]">Switches navigation text from white to black when scrolling past hero.</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-[#222] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#888] after:border-[#333] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</label>
</div>

<div className="pt-4 border-t border-[#222]">
<label className="block text-xs font-medium text-[#888] uppercase tracking-wider mb-3">Hero Statistics to Display</label>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#444] group-hover:border-[#888] bg-[#0A0A0A] flex items-center justify-center transition-colors relative">
<input checked="" className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-[#ccc] group-hover:text-white transition-colors">Total Sales Volume ($1B+)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#444] group-hover:border-[#888] bg-[#0A0A0A] flex items-center justify-center transition-colors relative">
<input checked="" className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-[#ccc] group-hover:text-white transition-colors">Years of Experience</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#444] group-hover:border-[#888] bg-[#0A0A0A] flex items-center justify-center transition-colors relative">
<input className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-[#ccc] group-hover:text-white transition-colors">Active Global Markets</span>
</label>
</div>
</div>
</div>
</div>

<div className="flex justify-end gap-3 mt-8">
<button className="px-4 py-2 border border-[#333] text-white rounded-md hover:bg-[#111] transition-colors">Discard Changes</button>
<button className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors shadow-sm">Save Section</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
