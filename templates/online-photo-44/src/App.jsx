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
nunito: ['Nunito', 'sans-serif'],
},
colors: {
brand: {
dark: '#1A1A1A',
accent: '#3482f6',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/30 blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/30 blur-[100px]"></div>
<div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-teal-100/40 blur-[80px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-all duration-300 glass border-b border-white/40">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-black rounded-xl flex items-center justify-center text-white shadow-lg">
<span className="font-nunito font-bold text-xl">P</span>
</div>
<span className="text-xl font-bold text-slate-900 tracking-tight font-nunito">Pictora</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
<a className="hover:text-black transition-colors" href="//www.photopea.com/learn" target="_blank">Learn</a>
<a className="hover:text-black transition-colors" href="//www.photopea.com/tuts" target="_blank">Tutorials</a>
<a className="hover:text-black transition-colors" href="//www.photopea.com/templates" target="_blank">Templates</a>
<a className="hover:text-black transition-colors" href="//www.photopea.com/api" target="_blank">API</a>
</div>
<div>
<button className="bg-brand-dark text-white text-[14px] font-semibold px-6 py-2.5 rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2" onclick="window.location.href='https://www.photopea.com'">
                    Open Editor
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="relative z-10 flex flex-col pt-24">

<main className="flex-grow flex flex-col items-center pt-12 pb-20 px-4 md:px-6 w-full max-w-7xl mx-auto">

<div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200 text-xs font-semibold text-slate-600 mb-6 shadow-sm backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    No downloads, runs in browser
                </div>
<h1 className="md:text-[76px] leading-[1.1] text-5xl font-semibold text-brand-dark tracking-tight font-nunito mb-6">
                    Free Online <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Photo Editor</span>
</h1>
<p className="md:text-[19px] leading-relaxed text-lg font-medium text-slate-600 font-sans max-w-2xl mx-auto mb-10">
                    Transform your photos with professional-grade tools. Unlock your creativity with the best free photo editor that works right in your browser.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="text-[17px] hover:bg-black transition-all hover:shadow-xl hover:-translate-y-0.5 sm:w-auto font-semibold text-white bg-brand-dark w-full rounded-full py-3.5 px-8 shadow-lg flex items-center justify-center gap-2" onclick="window.location.href='https://www.photopea.com'">
                        Start using Pictora
                        <iconify-icon height="20" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</button>
<button className="bg-white/60 backdrop-blur-md border border-white/50 text-brand-dark text-[17px] font-semibold px-8 py-3.5 rounded-full hover:bg-white/80 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                        Learn more
                    </button>
</div>
</div>

<div className="w-full max-w-[1200px] animate-slide-up relative group" style={{animationDelay: '0.3s'}}>

<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[34px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="bg-[#2a2a2a] rounded-[32px] shadow-2xl border border-white/10 overflow-hidden relative aspect-[16/10] md:aspect-[16/9] flex flex-col">

<div className="h-10 bg-[#383838] flex items-center px-4 gap-2 border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="mx-auto bg-[#222] px-32 py-1 rounded-md text-[10px] text-gray-400 font-mono flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                            pictora.com
                        </div>
</div>

<div className="flex-1 flex overflow-hidden text-[#ccc] font-sans text-xs">

<div className="w-10 bg-[#353535] border-r border-white/5 flex flex-col items-center py-2 gap-3">
<div className="p-1.5 hover:bg-white/10 rounded"><iconify-icon icon="solar:cursor-linear" width="18"></iconify-icon></div>
<div className="p-1.5 hover:bg-white/10 rounded"><iconify-icon icon="solar:crop-linear" width="18"></iconify-icon></div>
<div className="p-1.5 hover:bg-white/10 rounded"><iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon></div>
<div className="p-1.5 hover:bg-white/10 rounded"><iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon></div>
<div className="p-1.5 hover:bg-white/10 rounded"><iconify-icon icon="solar:text-field-linear" width="18"></iconify-icon></div>
<div className="p-1.5 hover:bg-white/10 rounded"><iconify-icon icon="solar:eraser-linear" width="18"></iconify-icon></div>
<div className="mt-auto p-1.5 hover:bg-white/10 rounded"><iconify-icon icon="solar:pallete-2-linear" width="18"></iconify-icon></div>
</div>

<div className="flex-1 bg-[#151515] relative flex items-center justify-center p-8">

<div className="relative shadow-2xl">
<img alt="Editing Canvas" className="max-w-full h-auto rounded-sm max-h-[60vh] object-cover border border-white/10" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 border border-blue-500 pointer-events-none">
<div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 border border-white"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 border border-white"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 border border-white"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 border border-white"></div>
</div>
</div>
</div>

<div className="w-56 bg-[#353535] border-l border-white/5 flex flex-col hidden md:flex">
<div className="px-3 py-2 border-b border-white/5 font-semibold text-[11px] uppercase tracking-wider text-gray-500">Layers</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<div className="flex items-center gap-2 p-2 bg-blue-600/20 rounded border border-blue-500/30">
<iconify-icon className="text-gray-400" icon="solar:eye-linear"></iconify-icon>
<div className="w-6 h-6 bg-white/10 rounded overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=50&amp;q=80"/></div>
<span>Main Photo</span>
</div>
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded">
<iconify-icon className="text-gray-400" icon="solar:eye-linear"></iconify-icon>
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center"><span className="font-serif font-bold text-lg leading-none">T</span></div>
<span>Headline Text</span>
</div>
<div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded">
<iconify-icon className="text-gray-400" icon="solar:eye-linear"></iconify-icon>
<div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
<span>Gradient Overlay</span>
</div>
</div>
<div className="h-1/3 border-t border-white/5 p-2">
<div className="px-1 py-1 font-semibold text-[11px] uppercase tracking-wider text-gray-500 mb-2">Properties</div>
<div className="space-y-3">
<div>
<div className="flex justify-between mb-1 text-[10px] text-gray-400"><span>Opacity</span><span>100%</span></div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-full h-full bg-blue-500"></div></div>
</div>
<div>
<div className="flex justify-between mb-1 text-[10px] text-gray-400"><span>Fill</span><span>100%</span></div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-full h-full bg-blue-500"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-nunito text-slate-900 mb-2">Fully Local</h3>
<p className="text-sm text-slate-600 leading-relaxed">Runs on your device using your CPU &amp; GPU. Files open instantly and never leave your device.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-nunito text-slate-900 mb-2">Cost-Effective</h3>
<p className="text-sm text-slate-600 leading-relaxed">Enjoy all the premium features without spending a dime. Professional tools for everyone.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:rocket-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-nunito text-slate-900 mb-2">Convenient Editor</h3>
<p className="text-sm text-slate-600 leading-relaxed">No heavy installations. Just open your browser and start editing immediately.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:devices-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-nunito text-slate-900 mb-2">Runs Everywhere</h3>
<p className="text-sm text-slate-600 leading-relaxed">Works on any device. From desktops to tablets, use your hardware to the fullest.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

<div className="w-full lg:w-1/2">
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[32px] transform rotate-2 transition-transform duration-500 group-hover:rotate-0"></div>
<div className="relative bg-white border border-slate-200 rounded-[32px] p-8 shadow-xl overflow-hidden">

<div className="space-y-4">
<div className="flex items-center justify-between border-b border-slate-100 pb-4">
<div className="flex gap-2">
<span className="w-3 h-3 bg-slate-200 rounded-full"></span>
<span className="w-3 h-3 bg-slate-200 rounded-full"></span>
</div>
<span className="text-xs font-bold text-slate-400 uppercase">Layer Properties</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600"><iconify-icon icon="solar:layers-linear"></iconify-icon></div>
<div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-purple-600"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon></div>
<div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-pink-100 flex items-center justify-center text-pink-600"><iconify-icon icon="solar:filters-linear"></iconify-icon></div>
<div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="pt-4 grid grid-cols-2 gap-3">
<div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Masking</div>
<div className="h-1.5 w-2/3 bg-blue-500 rounded-full"></div>
</div>
<div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Blending</div>
<div className="h-1.5 w-3/4 bg-purple-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4 block">Advanced Capabilities</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 font-nunito mb-6 tracking-tight">Professional Editor with full PSD support</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Pictora offers a full suite of editing tools, from basic features like cropping and resizing to advanced features such as layering, masking, and blending. 
                        Fully supports the popular PSD format for both opening and saving.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                            Layering &amp; Masking
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                            Smart Objects
                        </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                            Blending Modes
                        </li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">

<div className="w-full lg:w-1/2">
<span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4 block">Compatibility</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 font-nunito mb-6 tracking-tight">Swiss knife for graphics</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Open and edit almost any image format. From standard PNG/JPG to specialized formats like AI, XD, SKETCH, PDF, and RAW camera files.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:file-smile-linear"></iconify-icon> Vector Formats
                            </h4>
<p className="text-xs text-slate-500">SVG, PDF, AI, EPS, CDR</p>
</div>
<div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
<iconify-icon className="text-purple-500" icon="solar:camera-linear"></iconify-icon> RAW Support
                            </h4>
<p className="text-xs text-slate-500">DNG, CR2, NEF, ARW</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<div className="grid grid-cols-3 gap-4">

<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
<span className="font-black text-2xl text-blue-900">PSD</span>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
<span className="font-black text-2xl text-orange-500">AI</span>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
<span className="font-black text-2xl text-pink-500">XD</span>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
<span className="font-black text-2xl text-yellow-500">SKETCH</span>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
<span className="font-black text-2xl text-red-500">PDF</span>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
<span className="font-black text-2xl text-green-500">RAW</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 bg-white rounded-[40px] shadow-sm border border-slate-100">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4 block">Features</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight font-nunito mb-6">Everything you need</h2>
<p className="text-lg text-slate-600">From basic adjustments to state-of-the-art AI generation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

<div className="bg-slate-50 rounded-[32px] p-8 md:p-12 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 font-nunito mb-3">State-of-the-art AI</h3>
<p className="text-slate-600 leading-relaxed mb-6">Remove backgrounds with one click or replace any part of an image with new content through a simple text description.</p>
<a className="text-sm font-semibold text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">See AI in action <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-slate-50 rounded-[32px] p-8 md:p-12 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm">
<iconify-icon icon="solar:tuning-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 font-nunito mb-3">Adjustments &amp; Filters</h3>
<p className="text-slate-600 leading-relaxed mb-6">Need Levels, Curves, or Gaussian Blur? Or advanced tools like Liquify and Puppet Warp? We have it all included.</p>
<a className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore tools <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
<div className="p-8 bg-slate-50 rounded-[32px] border border-transparent hover:border-slate-200 hover:shadow-lg transition-all">
<iconify-icon className="text-slate-700 mb-4" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<h4 className="font-bold text-xl text-slate-900 mb-2">Essential Features</h4>
<p className="text-slate-600 text-sm">Layers, Masks, Smart Objects, Channels, Paths and more.</p>
</div>
<div className="p-8 bg-slate-50 rounded-[32px] border border-transparent hover:border-slate-200 hover:shadow-lg transition-all">
<iconify-icon className="text-slate-700 mb-4" icon="solar:pen-new-square-linear" width="32"></iconify-icon>
<h4 className="font-bold text-xl text-slate-900 mb-2">Vector Graphics</h4>
<p className="text-slate-600 text-sm">Create logos and icons directly with vector tools.</p>
</div>
<div className="p-8 bg-slate-50 rounded-[32px] border border-transparent hover:border-slate-200 hover:shadow-lg transition-all">
<iconify-icon className="text-slate-700 mb-4" icon="solar:palette-linear" width="32"></iconify-icon>
<h4 className="font-bold text-xl text-slate-900 mb-2">Color Control</h4>
<p className="text-slate-600 text-sm">Exposure, Color Balance, Contrast, Highlights and Shadows.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl font-semibold text-slate-900 font-nunito mb-6 tracking-tight">Who uses Pictora?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 mb-6">
<iconify-icon icon="solar:camera-linear" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-3">Social Media</h3>
<p className="text-sm text-slate-600">Enhance photos before sharing on Instagram, Facebook, or Twitter. Make every post stand out.</p>
</div>

<div className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-6">
<iconify-icon icon="solar:mortarboard-linear" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-3">Students</h3>
<p className="text-sm text-slate-600">Create stunning visuals for presentations and assignments. Perfect for educational projects.</p>
</div>

<div className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:shop-linear" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-3">Small Business</h3>
<p className="text-sm text-slate-600">Design promotional materials and edit product photos without expensive software.</p>
</div>

<div className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 mb-6">
<iconify-icon icon="solar:pen-new-round-linear" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-3">Designers</h3>
<p className="text-sm text-slate-600">Whether freelancer or part of a team, get professional quality features you need.</p>
</div>
</div>
</section>

<section className="w-full px-6 pb-24">
<div className="max-w-7xl mx-auto bg-brand-dark rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<h2 className="text-3xl md:text-5xl font-bold font-nunito text-white mb-8 relative z-10 tracking-tight">Ready to create?</h2>
<div className="flex justify-center relative z-10">
<button className="bg-white text-brand-dark text-lg font-semibold px-10 py-4 rounded-full hover:bg-slate-100 hover:scale-105 transition-all shadow-xl flex items-center gap-2" onclick="window.location.href='https://www.photopea.com'">
                        Open Pictora Now
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 pb-12">
<div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm">
<div className="flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white"><span className="font-bold font-nunito">P</span></div>
<span className="text-xl font-bold font-nunito text-slate-900">Pictora</span>
</div>
<p className="text-slate-500 text-sm mb-6">Advanced image editor supporting PSD, XCF, Sketch, XD and CDR formats.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="//x.com/photopeacom" target="_blank"><iconify-icon icon="logos:twitter" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="//facebook.com/photopea/" target="_blank"><iconify-icon icon="logos:facebook" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="//reddit.com/r/photopea/" target="_blank"><iconify-icon icon="logos:reddit-icon" width="18"></iconify-icon></a>
</div>
</div>
<div className="flex gap-12 sm:gap-24">
<div className="flex flex-col gap-3">
<h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Learn</h4>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="//www.photopea.com/tuts" target="_blank">Tutorials</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="//www.photopea.com/templates" target="_blank">Templates</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="//www.photopea.com/api" target="_blank">API</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Company</h4>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="mailto:support@photopea.com">Contact</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="/privacy.html" target="_blank">Privacy Policy</a>
</div>
</div>
</div>
<div className="w-full h-px bg-slate-100 my-8"></div>
<div className="text-center text-slate-400 text-xs">
                    © 2024 Pictora. All rights reserved.
                </div>
</div>
</footer>
</div>

    </>
  );
}
