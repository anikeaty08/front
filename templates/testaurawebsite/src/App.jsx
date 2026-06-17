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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="text-xl font-semibold tracking-tighter">dhero.studio</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#work">Work</a>
<a className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#about">About</a>
<a className="text-sm bg-neutral-50 text-neutral-950 px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors font-medium" href="#contact">Get in touch</a>
</div>
<button className="md:hidden">
<iconify-icon height="24" icon="lucide:menu" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-24 px-6 lg:px-8">
<div className="max-w-7xl mr-auto ml-auto">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 mb-6 bg-neutral-900/50 border border-neutral-800 rounded-full px-4 py-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-none">
                    We craft digital experiences that inspire
                </h1>
<p className="text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
                    A premium design agency specializing in creating exceptional websites and digital products for forward-thinking brands.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-neutral-50 text-neutral-950 px-6 py-3 rounded-full hover:bg-neutral-200 transition-all font-medium" href="#contact">
                        Start a project
                        <iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-neutral-800 text-neutral-50 px-6 py-3 rounded-full hover:bg-neutral-900 transition-all font-medium" href="#work">
                        View our work
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16">
<div>
<p className="text-sm text-neutral-500 mb-2 uppercase tracking-wide font-medium">Featured Work</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Selected projects</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#">
                    View all
                    <iconify-icon height="16" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-9xl font-bold tracking-tighter opacity-20">NX</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold mb-1">Nexus Platform</h3>
<p className="text-sm text-neutral-500">Brand Identity &amp; Web Design</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-neutral-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" height="20" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-9xl font-bold tracking-tighter opacity-20">FL</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold mb-1">Flow Commerce</h3>
<p className="text-sm text-neutral-500">E-commerce &amp; Digital Strategy</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-neutral-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" height="20" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-9xl font-bold tracking-tighter opacity-20">ZN</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold mb-1">Zenith Labs</h3>
<p className="text-sm text-neutral-500">Product Design &amp; Development</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-neutral-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" height="20" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-9xl font-bold tracking-tighter opacity-20">AP</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold mb-1">Apex Digital</h3>
<p className="text-sm text-neutral-500">Web Design &amp; Marketing</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-neutral-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" height="20" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-neutral-900/30" id="services">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16">
<p className="text-sm text-neutral-500 mb-2 uppercase tracking-wide font-medium">Services</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">What we do</h2>
<p className="text-lg text-neutral-400">We deliver end-to-end design solutions that elevate your brand and drive meaningful results.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-violet-400" height="24" icon="lucide:layout" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Web Design</h3>
<p className="text-neutral-400 leading-relaxed">Beautiful, responsive websites crafted with attention to detail and user experience at the core.</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-400" height="24" icon="lucide:palette" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
<p className="text-neutral-400 leading-relaxed">Comprehensive brand systems that capture your essence and resonate with your audience.</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-blue-400" height="24" icon="lucide:smartphone" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Product Design</h3>
<p className="text-neutral-400 leading-relaxed">User-centered digital products that solve problems and delight users at every interaction.</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-amber-400" height="24" icon="lucide:code" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Development</h3>
<p className="text-neutral-400 leading-relaxed">Clean, scalable code that brings designs to life with performance and accessibility in mind.</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-pink-400" height="24" icon="lucide:trending-up" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Strategy</h3>
<p className="text-neutral-400 leading-relaxed">Data-driven strategies that align design decisions with business objectives and user needs.</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-cyan-400" height="24" icon="lucide:zap" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Optimization</h3>
<p className="text-neutral-400 leading-relaxed">Continuous improvement through testing, analytics, and refinement to maximize impact.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">150+</div>
<div className="text-sm text-neutral-500">Projects completed</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">95%</div>
<div className="text-sm text-neutral-500">Client satisfaction</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">12+</div>
<div className="text-sm text-neutral-500">Years experience</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">25+</div>
<div className="text-sm text-neutral-500">Team members</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-neutral-900/30">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16">
<p className="text-sm text-neutral-500 mb-2 uppercase tracking-wide font-medium">Testimonials</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Client love</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
</div>
<p className="text-neutral-300 mb-6 leading-relaxed">"dhero.studio transformed our vision into reality. Their attention to detail and creative approach exceeded all expectations."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">SM</div>
<div>
<div className="font-medium text-sm">Sarah Mitchell</div>
<div className="text-xs text-neutral-500">CEO, Nexus Platform</div>
</div>
</div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
</div>
<p className="text-neutral-300 mb-6 leading-relaxed">"Working with this team was an absolute pleasure. Professional, creative, and delivered beyond our timeline."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-sm font-semibold">JC</div>
<div>
<div className="font-medium text-sm">James Chen</div>
<div className="text-xs text-neutral-500">Founder, Flow Commerce</div>
</div>
</div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
<iconify-icon className="text-amber-400" height="16" icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}} width="16"></iconify-icon>
</div>
<p className="text-neutral-300 mb-6 leading-relaxed">"The level of craft and strategic thinking they brought to our project was truly impressive. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-sm font-semibold">EP</div>
<div>
<div className="font-medium text-sm">Emma Phillips</div>
<div className="text-xs text-neutral-500">Director, Zenith Labs</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8" id="contact">
<div className="max-w-7xl mx-auto">
<div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-12 md:p-16 lg:p-24 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent"></div>
<div className="relative">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Let's create something amazing together</h2>
<p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-neutral-50 text-neutral-950 px-8 py-4 rounded-full hover:bg-neutral-200 transition-all font-medium text-base" href="mailto:hello@dhero.studio">
                            Start a conversation
                            <iconify-icon height="20" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-50 px-8 py-4 rounded-full hover:bg-neutral-900 transition-all font-medium text-base" href="#work">
                            View case studies
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 lg:px-8 border-t border-neutral-800">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<div className="text-xl font-semibold tracking-tighter mb-4">dhero.studio</div>
<p className="text-sm text-neutral-500 max-w-sm">A premium web design agency creating exceptional digital experiences for forward-thinking brands.</p>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Web Design</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Brand Identity</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Product Design</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Development</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Connect</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Twitter</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Instagram</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Dribbble</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-500">© 2024 dhero.studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Terms</a>
<a className="text-sm text-neutral-500 hover:text-neutral-50 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
