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
      

<nav className="fixed transition-all duration-300 z-50 w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0">
<div className="flex glass shadow-slate-200/50 max-w-7xl rounded-2xl mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 shadow-sm items-center justify-between">
<a className="text-2xl font-normal text-slate-900 tracking-tight font-['Kalam']" href="#">Memora.</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500 gap-x-8 gap-y-8">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#features">Why Memora</a>
<a className="hover:text-slate-900 transition-colors" href="#preview">Experience</a>
</div>
<a className="text-sm font-medium bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg" href="#cta">
        Sign In
    </a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-24 pr-6 pl-6 relative items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-violet-200/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center space-y-8 z-10">
<div className="inline-flex gap-2 text-xs font-medium text-slate-500 bg-white/50 border-slate-200 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-violet-500"></span>
                The new standard for delivery
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-6xl text-slate-900 tracking-tight font-['Kalam']">
                Deliver memories, <br/>
<span className="text-violet-600/90">not just files.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-500 max-w-xl mr-auto ml-auto">
                The most elegant way for photographers and businesses to present galleries to clients. Simple, private, and breathtakingly beautiful.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
<button className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-violet-900/10 transition-all duration-300 w-full md:w-auto">
<span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                        For Individuals
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:user-linear" width="20"></iconify-icon>
</span>
</button>
<button className="group px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl hover:border-violet-200 hover:bg-violet-50/50 transition-all duration-300 w-full md:w-auto">
<span className="flex items-center justify-center gap-2 font-medium">
                        For Businesses
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:case-linear" width="20"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="mt-20 relative w-full max-w-5xl mx-auto aspect-[16/6] bg-gradient-to-t from-white to-transparent">
<div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-['Kalam'] text-4xl md:text-5xl text-slate-900 mb-4">Effortless Workflow</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px border-t border-dashed border-slate-200 -z-10"></div>

<div className="flex flex-col items-center text-center space-y-6">
<div className="w-24 h-24 rounded-2xl glass shadow-lg shadow-slate-100 flex items-center justify-center text-violet-600">
<iconify-icon icon="solar:cloud-upload-linear" width="40"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg text-slate-900 mb-2">Upload</h3>
<p className="font-light text-sm leading-relaxed max-w-xs mx-auto">Drag and drop high-res photos or videos. We handle the optimization instantly.</p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-6">
<div className="w-24 h-24 rounded-2xl glass shadow-lg shadow-slate-100 flex items-center justify-center text-violet-600">
<iconify-icon icon="solar:link-circle-linear" width="40"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg text-slate-900 mb-2">Share</h3>
<p className="font-light text-sm leading-relaxed max-w-xs mx-auto">Generate a private, elegant link. No bulky attachments or confusing expirations.</p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-6">
<div className="w-24 h-24 rounded-2xl glass shadow-lg shadow-slate-100 flex items-center justify-center text-violet-600">
<iconify-icon icon="solar:gallery-wide-linear" width="40"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg text-slate-900 mb-2">Experience</h3>
<p className="font-light text-sm leading-relaxed max-w-xs mx-auto">Clients view their moments in a distraction-free, immersive gallery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-12">
<h2 className="font-['Kalam'] text-4xl md:text-5xl text-slate-900 leading-tight">
                        Designed for <br/> <span className="text-violet-600">quiet luxury.</span>
</h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="mt-1 text-violet-600">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Curated Presentation</h4>
<p className="font-light text-slate-500 mt-2 leading-relaxed">Automatic layouts that respect the aspect ratio and emotion of every image.</p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 text-violet-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Privacy First</h4>
<p className="font-light text-slate-500 mt-2 leading-relaxed">Secure, password-protected galleries that ensure moments stay private.</p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 text-violet-600">
<iconify-icon icon="solar:smartphone-2-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Fluid on Any Device</h4>
<p className="font-light text-slate-500 mt-2 leading-relaxed">A native-app feel on mobile, tablet, or desktop without any downloads.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-slate-50 rounded-3xl overflow-hidden p-8 flex items-center justify-center">

<div className="absolute top-10 right-10 w-32 h-32 bg-violet-100 rounded-full blur-2xl"></div>
<div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl"></div>

<div className="relative w-64 h-80 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 transform rotate-[-6deg] z-10 flex flex-col p-4">
<div className="w-full h-48 bg-slate-100 rounded-lg mb-4 overflow-hidden">
<div className="w-full h-full object-cover bg-slate-200"></div>
</div>
<div className="h-2 w-2/3 bg-slate-100 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
<div className="absolute w-64 h-80 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl shadow-violet-200/20 border border-slate-100 transform rotate-[3deg] z-20 flex flex-col p-4">
<div className="w-full h-48 bg-slate-100 rounded-lg mb-4 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-200"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-400" icon="solar:eye-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center mt-2">
<div>
<div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="w-8 h-8 rounded-full bg-violet-50 text-violet-500 flex items-center justify-center">
<iconify-icon icon="solar:heart-angle-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="preview">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-violet-600 font-medium tracking-wide uppercase text-xs">For Creators</span>
<h2 className="font-['Kalam'] text-4xl text-slate-900 mt-2">Your Studio, Simplified.</h2>
</div>

<div className="relative max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden h-[600px] flex">

<div className="hidden md:flex flex-col w-64 border-r border-slate-50 bg-white p-6 justify-between">
<div className="space-y-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-violet-600"></div>
<div className="h-2 w-16 bg-slate-200 rounded"></div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 text-slate-800 font-medium p-2 bg-slate-50 rounded-lg">
<iconify-icon icon="solar:widget-linear"></iconify-icon>
<span className="text-sm">Dashboard</span>
</div>
<div className="flex items-center gap-3 text-slate-400 p-2">
<iconify-icon icon="solar:folder-linear"></iconify-icon>
<span className="text-sm">Projects</span>
</div>
<div className="flex items-center gap-3 text-slate-400 p-2">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
<span className="text-sm">Settings</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="h-2 w-20 bg-slate-100 rounded"></div>
</div>
</div>

<div className="flex-1 bg-slate-50/30 p-8 relative">

<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-medium text-slate-800">Recent Projects</h3>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
</div>
</div>
</div>

<div className="glass absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[400px] p-8 rounded-3xl text-center z-20 shadow-xl shadow-violet-100/50 hover:scale-[1.02] transition-transform duration-500 cursor-pointer group">
<div className="w-full h-32 border-2 border-dashed border-violet-200 bg-violet-50/30 rounded-2xl mb-6 flex flex-col items-center justify-center group-hover:bg-violet-50 transition-colors">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-violet-600 mb-2">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-xs text-violet-400">Drag &amp; Drop</span>
</div>
<h4 className="text-lg font-medium text-slate-900">Create New Collection</h4>
<p className="text-xs text-slate-400 mt-2 mb-6 px-4">Upload high-res photos (JPG, PNG) or videos. We'll handle the compression.</p>
<button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
                            Select Files
                        </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 opacity-30 blur-[2px] select-none pointer-events-none">
<div className="aspect-square bg-white rounded-2xl border border-slate-100"></div>
<div className="aspect-square bg-white rounded-2xl border border-slate-100"></div>
<div className="aspect-square bg-white rounded-2xl border border-slate-100"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="w-full aspect-[3/4] bg-slate-800 rounded-lg opacity-80 hover:opacity-100 transition-opacity"></div>
<div className="w-full aspect-[1] bg-slate-800 rounded-lg opacity-80 hover:opacity-100 transition-opacity"></div>
</div>
<div className="space-y-4">
<div className="w-full aspect-[1] bg-slate-800 rounded-lg opacity-80 hover:opacity-100 transition-opacity"></div>
<div className="w-full aspect-[3/4] bg-slate-800 rounded-lg opacity-80 hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div className="inline-block px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-xs font-medium text-slate-400">
                        Client View
                    </div>
<h2 className="font-['Kalam'] text-4xl md:text-5xl leading-tight">
                        Immersion without  distraction.
                    </h2>
<p className="text-slate-400 font-light text-lg leading-relaxed max-w-md">
                        Your clients receive a link. They open it, and the world falls away. Just their memories, displayed beautifully, downloadable in one click.
                    </p>
<ul className="space-y-4 text-slate-300 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon>
                            No account required for clients
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon>
                            One-click full collection download
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon>
                            Optimized for Retina displays
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 px-6">
<div className="max-w-3xl mx-auto text-center">
<iconify-icon className="text-violet-600 mb-8" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
<blockquote className="font-['Kalam'] text-3xl md:text-5xl text-slate-800 leading-tight">
                "We built Memora because the moments you capture deserve a stage that is as timeless as they are."
            </blockquote>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="cta">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-xl mx-auto text-center space-y-8 glass p-12 rounded-3xl shadow-xl shadow-slate-200/50">
<h2 className="font-['Kalam'] text-4xl text-slate-900">Start sharing beautifully.</h2>
<p className="text-slate-500 font-light">Join thousands of photographers elevating their client experience today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">
                    Get Started Free
                </button>
<button className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors">
                    Log in
                </button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-['Kalam'] text-xl font-bold text-slate-900">Memora.</span>
</div>
<div className="flex gap-8 text-sm text-slate-500 font-light">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact Support</a>
</div>
<div className="text-xs text-slate-400 font-light">
                © 2023 Memora Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
