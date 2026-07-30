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



    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Lucide icons
      lucide.createIcons();

      // Intersection Observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe all animated elements
      document.querySelectorAll('[class*="animate-fade"]').forEach(el => {
        observer.observe(el);
      });

      // Add smooth scrolling behavior
      document.documentElement.style.scrollBehavior = 'smooth';
    });
  
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
      
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg %3E%3Cg fill=none fill-rule=evenodd fill-opacity=0.05 %3E%3Ccircle cx=30 cy=30 r=1 %3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>
<div className="page-container">
<header className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
<div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="animate-fade-slide-left delay-100 flex items-center gap-3">
<div className="gradient-border">
<div className="gradient-border-inner px-4 py-2">
<span className="text-xs font-medium tracking-wider text-lime-300 uppercase flex items-center gap-2">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  Latest Insights
                </span>
</div>
</div>
<div className="h-px bg-gradient-to-r from-lime-300/50 to-transparent flex-1"></div>
</div>
<h1 className="animate-fade-slide-left delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[0.9] tracking-tight">
            Discover the future of
            <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">technology</span>
            through expert insights
          </h1>
</div>
<div className="lg:col-span-5 space-y-6 lg:space-y-8">
<div className="animate-fade-slide-right delay-300 glass-effect lg:p-8 bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm hover-lift">
<p className="text-neutral-300 leading-relaxed text-sm sm:text-base mb-4">
              Dive deep into cutting-edge technologies, innovative solutions, and transformative ideas that are reshaping our digital landscape. From AI breakthroughs to quantum computing advances.
            </p>
<details className="text-neutral-400 text-sm leading-relaxed">
<summary className="cursor-pointer font-medium mb-2 select-none hover:text-lime-300 transition-colors">Read more details</summary>
<p className="mt-2">
                Explore the latest trends in artificial intelligence, blockchain innovation, cybersecurity advancements, and the expanding Internet of Things ecosystem. Stay informed about how these technologies are impacting industries and driving digital transformation worldwide.
              </p>
</details>
</div>
<div className="animate-fade-slide-right delay-400 flex flex-col sm:flex-row gap-4">
<button className="button-enhanced group inline-flex items-center justify-center gap-3 bg-lime-400 text-[#360e2d] px-6 py-3 rounded-full font-medium text-sm hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 hover:scale-105">
<span>Explore Articles</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="button-enhanced group inline-flex items-center justify-center gap-3 border border-neutral-600 text-neutral-300 px-6 py-3 rounded-full font-medium text-sm hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span>Save for Later</span>
</button>
</div>
</div>
</div>
</header>
<main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
<div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2">

<article className="animate-fade-scale delay-500 md:col-span-2 group cursor-pointer hover-lift">
<div className="relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-lime-400/50 transition-all duration-500">
<div className="relative">
<img alt="Neural Network Visualization" className="w-full h-64 sm:h-80 lg:h-96 image-blur-hover object-cover" src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=2160&q=80" />
<div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
<span className="glass-effect bg-lime-400/20 border border-lime-400/30 text-lime-300 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">Featured</span>
<span className="glass-effect bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">AI & Machine Learning</span>
</div>
<div className="absolute top-4 right-4">
<button className="glass-effect bg-white/10 border border-white/20 p-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-3 text-white">
<img alt="Dr. Sarah Chen" className="w-10 h-10 object-cover border-white/30 border-2 rounded-full" src="https://images.unsplash.com/photo-1458696352784-ffe1f47c2edc?w=1080&q=80" />
<div>
<p className="font-medium text-sm">Dr. Sarah Chen</p>
<p className="text-xs text-neutral-300">AI Research Director at QuantumLab</p>
</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-center gap-4 mb-4 text-xs text-neutral-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>December 15, 2024</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>8 min read</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>12.4K views</span>
</div>
</div>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 group-hover:text-lime-300 transition-colors duration-300">
                The Revolutionary Impact of Quantum-Enhanced AI on Modern Computing
              </h2>
<p className="text-neutral-400 leading-relaxed mb-6">
                Exploring how quantum computing integration is accelerating artificial intelligence capabilities, opening unprecedented possibilities for complex problem-solving and data processing at scales previously thought impossible.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-neutral-400 hover:text-lime-400 transition-colors cursor-pointer">
<svg className="lucide lucide-thumbs-up w-4 h-4" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span>847</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400 hover:text-lime-400 transition-colors cursor-pointer">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span>92</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400 hover:text-lime-400 transition-colors cursor-pointer">
<svg className="lucide lucide-share w-4 h-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<span>156</span>
</div>
</div>
<button className="button-enhanced flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors font-medium text-sm">
<span>Continue Reading</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="animate-fade-slide delay-600 group cursor-pointer hover-lift">
<div className="overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-lime-400/50 transition-all duration-500 h-full flex flex-col">
<div className="relative">
<img alt="Blockchain Network" className="w-full h-48 sm:h-56 image-blur-hover object-cover" src="https://images.unsplash.com/photo-1657741146085-c05a4c8122b1?w=1080&q=80" />
<div className="absolute top-3 left-3 right-3 flex justify-between items-start">
<div className="flex flex-wrap gap-2">
<span className="glass-effect bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium px-2 py-1 rounded-full">Blockchain</span>
<span className="glass-effect bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-medium px-2 py-1 rounded-full">DeFi</span>
</div>
<button className="glass-effect bg-white/10 border border-white/20 p-1.5 rounded-full hover:bg-white/20 transition-all hover:scale-110">
<svg className="lucide lucide-bookmark w-3 h-3 text-white" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-3 mb-3">
<img alt="Marcus Thompson" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1080&q=80" />
<div>
<p className="font-medium text-sm">Marcus Thompson</p>
<p className="text-xs text-neutral-400">Blockchain Architect</p>
</div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-neutral-400">
<span>Nov 28, 2024</span>
<span>•</span>
<span>6 min read</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold leading-tight mb-3 group-hover:text-lime-300 transition-colors flex-1">
                Decentralized Finance Evolution: Smart Contracts Redefining Traditional Banking
              </h3>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1 hover:text-lime-400 transition-colors cursor-pointer"><svg className="lucide lucide-heart w-3 h-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> 234</span>
<span className="flex items-center gap-1 hover:text-lime-400 transition-colors cursor-pointer"><svg className="lucide lucide-message-circle w-3 h-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg> 45</span>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-lime-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</article>
<article className="animate-fade-slide delay-700 group cursor-pointer hover-lift">
<div className="overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-lime-400/50 transition-all duration-500 h-full flex flex-col">
<div className="relative">
<img alt="Cybersecurity Shield" className="w-full h-48 sm:h-56 image-blur-hover object-cover" src="https://images.unsplash.com/photo-1617791160588-241658c0f566?w=1080&q=80" />
<div className="absolute top-3 left-3 right-3 flex justify-between items-start">
<div className="flex flex-wrap gap-2">
<span className="glass-effect bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-medium px-2 py-1 rounded-full">Security</span>
<span className="glass-effect bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-medium px-2 py-1 rounded-full">Privacy</span>
</div>
<button className="glass-effect bg-white/10 border border-white/20 p-1.5 rounded-full hover:bg-white/20 transition-all hover:scale-110">
<svg className="lucide lucide-bookmark w-3 h-3 text-white" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-3 mb-3">
<img alt="Elena Rodriguez" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&q=80" />
<div>
<p className="font-medium text-sm">Elena Rodriguez</p>
<p className="text-xs text-neutral-400">Security Specialist</p>
</div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-neutral-400">
<span>Nov 22, 2024</span>
<span>•</span>
<span>5 min read</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold leading-tight mb-3 group-hover:text-lime-300 transition-colors flex-1">
                Zero-Trust Architecture: The Future of Enterprise Cybersecurity Infrastructure
              </h3>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1 hover:text-lime-400 transition-colors cursor-pointer"><svg className="lucide lucide-heart w-3 h-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> 189</span>
<span className="flex items-center gap-1 hover:text-lime-400 transition-colors cursor-pointer"><svg className="lucide lucide-message-circle w-3 h-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg> 31</span>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-lime-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</article>
</div>
</main>

<section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
<div className="animate-fade-blur delay-800 glass-effect bg-gradient-to-r from-lime-400/10 to-emerald-400/10 border border-lime-400/20 rounded-3xl p-8 lg:p-12 text-center">
<div className="max-w-2xl mx-auto">
<div className="mb-6">
<div className="inline-flex items-center justify-center w-16 h-16 bg-lime-400/20 rounded-full mb-4">
<svg className="lucide lucide-mail w-8 h-8 text-lime-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold mb-4">Stay Ahead of the Curve</h3>
<p className="text-neutral-300 leading-relaxed">
              Join over 50,000 tech professionals who receive our weekly digest of the latest insights, breakthroughs, and industry trends delivered straight to their inbox.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:border-lime-400 focus:bg-white/15 transition-all" placeholder="Enter your email address" type="email" />
<button className="button-enhanced bg-lime-400 text-[#360e2d] px-6 py-3 rounded-full font-medium hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 hover:scale-105">
              Subscribe
            </button>
</div>
<p className="text-xs text-neutral-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
</div>
</div>
</section>
</div>



    </>
  );
}
