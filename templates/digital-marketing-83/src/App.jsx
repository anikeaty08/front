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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse-glow"></div>
<div className="absolute top-1/2 -right-32 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '4s'}}></div>
<div className="absolute top-20 right-1/4 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl animate-float-slow"></div>
</div>

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-32 left-20 w-16 h-16 glass rounded-2xl rotate-12 animate-float opacity-40"></div>
<div className="absolute top-48 right-32 w-12 h-12 glass rounded-full animate-float-reverse opacity-30"></div>
<div className="absolute bottom-48 left-1/4 w-20 h-20 glass rounded-3xl -rotate-12 animate-float-slow opacity-30"></div>
<div className="absolute top-1/3 right-20 w-8 h-8 glass rounded-lg rotate-45 animate-float opacity-40"></div>
<div className="absolute bottom-32 right-1/3 w-14 h-14 glass rounded-2xl animate-float-reverse opacity-30"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight" href="#">MRKTR</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<button className="btn-gradient px-5 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
<div className="max-w-5xl mx-auto text-center">
<div className="opacity-0 animate-slide-up delay-100">
<span className="glass inline-block px-4 py-2 rounded-full text-xs font-medium text-violet-300 mb-8">
                    ✨ Award-Winning Digital Marketing Studio
                </span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6 opacity-0 animate-slide-up delay-200">
                We craft <span className="text-gradient">digital experiences</span> that drive growth
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up delay-300">
                Strategic marketing, stunning design, and data-driven results. Transform your brand's digital presence with our expert team.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up delay-400">
<button className="btn-gradient px-8 py-4 rounded-2xl text-base font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 flex items-center justify-center gap-2">
                    Start Your Project
                    <span className="iconify" data-height="20" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="glass px-8 py-4 rounded-2xl text-base font-medium transition-all hover:bg-white/10 flex items-center justify-center gap-2">
<span className="iconify" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    Watch Showreel
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 opacity-0 animate-slide-up delay-500">
<div className="glass rounded-2xl p-6 transition-all hover:bg-white/10 hover:scale-105">
<div className="text-3xl md:text-4xl font-semibold text-gradient mb-1">150+</div>
<div className="text-sm text-slate-400">Projects Delivered</div>
</div>
<div className="glass rounded-2xl p-6 transition-all hover:bg-white/10 hover:scale-105">
<div className="text-3xl md:text-4xl font-semibold text-gradient mb-1">98%</div>
<div className="text-sm text-slate-400">Client Retention</div>
</div>
<div className="glass rounded-2xl p-6 transition-all hover:bg-white/10 hover:scale-105">
<div className="text-3xl md:text-4xl font-semibold text-gradient mb-1">12M+</div>
<div className="text-sm text-slate-400">Revenue Generated</div>
</div>
<div className="glass rounded-2xl p-6 transition-all hover:bg-white/10 hover:scale-105">
<div className="text-3xl md:text-4xl font-semibold text-gradient mb-1">24/7</div>
<div className="text-sm text-slate-400">Support Available</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="glass inline-block px-4 py-2 rounded-full text-xs font-medium text-violet-300 mb-4">Our Services</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">What we do best</h2>
<p className="text-slate-400 max-w-xl mx-auto">Comprehensive digital marketing solutions tailored to elevate your brand and accelerate your growth.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass rounded-3xl p-8 transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 group cursor-pointer">
<div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-violet-400" data-height="28" data-icon="lucide:megaphone" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-3">Brand Strategy</h3>
<p className="text-slate-400 text-sm leading-relaxed">Define your unique position in the market with comprehensive brand development and strategic positioning.</p>
</div>
<div className="glass rounded-3xl p-8 transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 group cursor-pointer">
<div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-indigo-400" data-height="28" data-icon="lucide:search" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-3">SEO &amp; SEM</h3>
<p className="text-slate-400 text-sm leading-relaxed">Dominate search results with data-driven SEO strategies and targeted paid advertising campaigns.</p>
</div>
<div className="glass rounded-3xl p-8 transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 group cursor-pointer">
<div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-purple-400" data-height="28" data-icon="lucide:share-2" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-3">Social Media</h3>
<p className="text-slate-400 text-sm leading-relaxed">Build engaged communities and drive conversions with strategic social media management and content.</p>
</div>
<div className="glass rounded-3xl p-8 transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 group cursor-pointer">
<div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-fuchsia-400" data-height="28" data-icon="lucide:pen-tool" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-3">Content Creation</h3>
<p className="text-slate-400 text-sm leading-relaxed">Captivate your audience with compelling content that tells your story and drives engagement.</p>
</div>
<div className="glass rounded-3xl p-8 transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 group cursor-pointer">
<div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-pink-400" data-height="28" data-icon="lucide:bar-chart-3" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-3">Analytics &amp; Insights</h3>
<p className="text-slate-400 text-sm leading-relaxed">Make informed decisions with comprehensive data analysis and actionable performance insights.</p>
</div>
<div className="glass rounded-3xl p-8 transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 group cursor-pointer">
<div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-rose-400" data-height="28" data-icon="lucide:mail" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-3">Email Marketing</h3>
<p className="text-slate-400 text-sm leading-relaxed">Nurture leads and drive conversions with personalized email campaigns and automation workflows.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="work">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="glass inline-block px-4 py-2 rounded-full text-xs font-medium text-violet-300 mb-4">Our Work</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Featured projects</h2>
<p className="text-slate-400 max-w-xl mx-auto">A showcase of our most impactful campaigns and digital transformations.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="glass rounded-3xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10">
<div className="aspect-video bg-gradient-to-br from-violet-600/40 to-indigo-600/40 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent"></div>
<span className="text-6xl font-bold tracking-tighter opacity-20">NOVA</span>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white" data-height="32" data-icon="lucide:external-link" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300">Branding</span>
<span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">Social</span>
</div>
<h3 className="text-lg font-medium mb-2">Nova Tech Rebrand</h3>
<p className="text-sm text-slate-400">Complete brand overhaul resulting in 340% increase in brand awareness.</p>
</div>
</div>
<div className="glass rounded-3xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10">
<div className="aspect-video bg-gradient-to-br from-fuchsia-600/40 to-pink-600/40 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-transparent"></div>
<span className="text-6xl font-bold tracking-tighter opacity-20">BLOOM</span>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white" data-height="32" data-icon="lucide:external-link" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-300">SEO</span>
<span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300">Content</span>
</div>
<h3 className="text-lg font-medium mb-2">Bloom Wellness Campaign</h3>
<p className="text-sm text-slate-400">SEO-driven content strategy leading to #1 rankings for 50+ keywords.</p>
</div>
</div>
<div className="glass rounded-3xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10">
<div className="aspect-video bg-gradient-to-br from-cyan-600/40 to-blue-600/40 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent"></div>
<span className="text-6xl font-bold tracking-tighter opacity-20">FLUX</span>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white" data-height="32" data-icon="lucide:external-link" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">PPC</span>
<span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">Analytics</span>
</div>
<h3 className="text-lg font-medium mb-2">Flux Finance Growth</h3>
<p className="text-sm text-slate-400">Data-driven PPC campaigns generating 5x ROAS within 3 months.</p>
</div>
</div>
<div className="glass rounded-3xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10">
<div className="aspect-video bg-gradient-to-br from-amber-600/40 to-orange-600/40 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"></div>
<span className="text-6xl font-bold tracking-tighter opacity-20">ECHO</span>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white" data-height="32" data-icon="lucide:external-link" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300">Email</span>
<span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-300">Automation</span>
</div>
<h3 className="text-lg font-medium mb-2">Echo Audio Launch</h3>
<p className="text-sm text-slate-400">Product launch campaign reaching 2M+ impressions in first week.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="glass inline-block px-4 py-2 rounded-full text-xs font-medium text-violet-300 mb-4">Testimonials</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">What clients say</h2>
</div>
<div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
<span className="iconify text-violet-400 mb-6" data-height="48" data-icon="lucide:quote" data-width="48" style={{strokeWidth: '1.5'}}></span>
<p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8">
                    "MRKTR transformed our digital presence completely. Their strategic approach and creative execution delivered results beyond our expectations. Our revenue increased by 280% in just 6 months."
                </p>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-lg font-medium">
                        SJ
                    </div>
<div className="text-left">
<div className="font-medium">Sarah Johnson</div>
<div className="text-sm text-slate-400">CEO, Nova Tech</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="max-w-4xl mx-auto">
<div className="glass-strong rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/30 rounded-full blur-3xl"></div>
<div className="relative">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Ready to grow?</h2>
<p className="text-slate-400 max-w-xl mx-auto mb-8">Let's discuss how we can help transform your digital presence and drive measurable results for your business.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="btn-gradient px-8 py-4 rounded-2xl text-base font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 flex items-center justify-center gap-2">
<span className="iconify" data-height="20" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Schedule a Call
                        </button>
<button className="glass px-8 py-4 rounded-2xl text-base font-medium transition-all hover:bg-white/10 flex items-center justify-center gap-2">
<span className="iconify" data-height="20" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            hello@mrktr.studio
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl font-semibold tracking-tight">MRKTR</div>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:dribbble" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="text-sm text-slate-500">© 2024 MRKTR Studio. All rights reserved.</div>
</div>
</div>
</footer>

    </>
  );
}
