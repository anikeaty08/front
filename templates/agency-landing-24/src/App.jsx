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



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Scroll Reveal Observer
            const revealElements = document.querySelectorAll('.reveal-up');
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealOnScroll = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Reveal only once
                    }
                });
            }, revealOptions);

            revealElements.forEach(el => revealOnScroll.observe(el));

            // 2. Hero Text Staggered Reveal
            const heroTitle = document.getElementById('hero-title');
            if (heroTitle) {
                // Split text nodes into words to animate individually, while ignoring HTML tags
                const walker = document.createTreeWalker(heroTitle, NodeFilter.SHOW_TEXT, null, false);
                const textNodes = [];
                while(walker.nextNode()) textNodes.push(walker.currentNode);
                
                let globalDelay = 0;
                textNodes.forEach(node => {
                    const text = node.textContent;
                    if(text.trim() === '') return;
                    
                    const words = text.split(/(\s+)/);
                    const fragment = document.createDocumentFragment();
                    
                    words.forEach(word => {
                        if (word.trim() === '') {
                            fragment.appendChild(document.createTextNode(word));
                        } else {
                            const span = document.createElement('span');
                            span.textContent = word;
                            span.style.animationDelay = `${globalDelay}ms`;
                            globalDelay += 60; // 60ms stagger per word
                            fragment.appendChild(span);
                        }
                    });
                    node.parentNode.replaceChild(fragment, node);
                });
            }

            // 3. Mouse Tracking Glow Effect for Cards
            const glowCards = document.querySelectorAll('.glow-card');
            glowCards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
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
      

<nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-zinc-200/50 transition-all duration-500 hover:bg-white/90">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase text-zinc-900 overflow-hidden group" href="#">
<div className="kinetic-link font-medium tracking-tighter" data-text="ADINNYC">
<span>ADINNYC</span>
</div>
</a>
<div className="hidden md:flex items-center space-x-10 text-sm font-normal text-zinc-500">
<a className="kinetic-link hover:text-zinc-900" data-text="Home" href="#home"><span>Home</span></a>
<a className="kinetic-link hover:text-zinc-900" data-text="About" href="#about"><span>About</span></a>
<a className="kinetic-link hover:text-zinc-900" data-text="Services" href="#services"><span>Services</span></a>
<a className="kinetic-link hover:text-zinc-900" data-text="Case Studies" href="#work"><span>Case Studies</span></a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium text-white bg-zinc-900 rounded-full btn-shine shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-500 tracking-tight" href="#contact">
                Connect
            </a>
<button className="md:hidden text-zinc-900 hover:rotate-90 transition-transform duration-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-48 pb-24 md:pt-64 md:pb-40 px-6 overflow-hidden bg-grid-noise flex items-center min-h-[90vh]" id="home">
<div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center w-full">
<div className="reveal-up inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] mb-10 badge-shimmer backdrop-blur-md cursor-pointer hover:scale-105 transition-transform duration-500">
<span className="relative flex h-1.5 w-1.5 ml-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-900 opacity-40"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-900"></span>
</span>
<span className="text-xs font-medium tracking-tight text-zinc-600 uppercase pr-2">The Change Agency</span>
</div>

<h1 className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-balance text-zinc-900 max-w-5xl leading-[0.95] text-reveal overflow-hidden p-2" id="hero-title">
                    Leading with <span className="text-zinc-400">purpose.</span><br/> Disrupting <span className="text-zinc-400">categories.</span>
</h1>
<p className="reveal-up delay-100 mt-10 text-lg md:text-xl text-zinc-500 max-w-2xl text-balance tracking-tight font-light leading-relaxed">
                    ADin creates effective targeted communications campaigns for conscious brands, thought leaders, businesses, and movements.
                </p>
<div className="reveal-up delay-200 mt-14 flex flex-col sm:flex-row gap-4">
<a className="btn-shine inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-zinc-900 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500" href="#services">
                        Explore Our Services
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-900 bg-white border border-zinc-200/80 rounded-full shadow-sm hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-1 transition-all duration-500 overflow-hidden group" href="#work">
<span className="kinetic-link" data-text="View Case Studies"><span>View Case Studies</span></span>
</a>
</div>
</div>
</section>

<section className="border-y border-zinc-200/50 bg-white/50 py-12 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest shrink-0 reveal-up">Trusted Partners</p>
<div className="marquee-container w-full reveal-up delay-100">
<div className="marquee-content items-center space-x-16 md:space-x-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-default">Naturepedic</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-default">EarthKind</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-default">Hooray Foods</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-default">Designs for Health</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-default">Dukan Diet</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-default">Kyowa Hakko</span>
</div>

<div aria-hidden="true" className="marquee-content items-center space-x-16 md:space-x-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900 ml-16 md:ml-24">Naturepedic</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900">EarthKind</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900">Hooray Foods</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900">Designs for Health</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900">Dukan Diet</span>
<span className="text-2xl font-medium tracking-tighter shrink-0 text-zinc-900">Kyowa Hakko</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-white relative overflow-hidden" id="about">

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40rem] h-[40rem] bg-zinc-100/50 rounded-full blur-3xl pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">
<div className="pr-0 md:pr-10">
<h2 className="reveal-up text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-zinc-900 mb-8 leading-[1.05]">
                        Results driven <br/>brand communicators.
                    </h2>
<p className="reveal-up delay-100 text-base lg:text-lg text-zinc-500 mb-6 leading-relaxed font-light">
                        Creating authentic connections between people and brands using strategic thinking, innovative storytelling, compelling content and marketing savvy. 
                    </p>
<p className="reveal-up delay-200 text-base lg:text-lg text-zinc-500 mb-10 leading-relaxed font-light">
                        ADin not only builds brand awareness and sales across multiple healthy and sustainable lifestyle categories, but just as importantly, has become a trusted partner to our clients.
                    </p>
<div className="reveal-up delay-300">
<a className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors duration-500 group" href="#contact">
<span className="kinetic-link" data-text="Schedule a Consult"><span>Schedule a Consult</span></span>
<iconify-icon className="ml-2 group-hover:translate-x-2 transition-transform duration-500 ease-out" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4 md:gap-6 relative">
<div className="reveal-up bg-gradient-to-b from-zinc-50 to-white rounded-[2rem] p-8 border border-zinc-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between aspect-[4/5] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 ease-out group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
<div className="w-14 h-14 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-sm mb-12 animate-float group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-zinc-800" height="28" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="transform group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Conscious Brands</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Working with those who make the world better.</p>
</div>
</div>
<div className="reveal-up delay-100 bg-gradient-to-b from-zinc-50 to-white rounded-[2rem] p-8 border border-zinc-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between aspect-[4/5] mt-12 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 ease-out group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
<div className="w-14 h-14 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-sm mb-12 animate-float-delayed group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-zinc-800" height="28" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="transform group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Scaling Impact</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Evolving and growing in an ever-changing world.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#0A0A0A] text-white relative overflow-hidden" id="services">
<div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-3xl">
<h2 className="reveal-up text-5xl md:text-7xl font-medium tracking-tighter mb-8 text-balance text-zinc-50 leading-[1.05]">
                            How we build key drivers for success.
                        </h2>
<p className="reveal-up delay-100 text-zinc-400 text-lg md:text-xl font-light tracking-tight leading-relaxed max-w-2xl">
                            From strategy to execution, our full suite of marketing services shift public perception and accelerate growth.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/60 border border-zinc-800/60 overflow-hidden rounded-[2.5rem]">
<div className="reveal-up glow-card bg-[#0A0A0A] p-10 md:p-12 transition-colors duration-700 group relative overflow-hidden">
<iconify-icon className="text-zinc-600 mb-10 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10" height="36" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 relative z-10 group-hover:translate-x-1 transition-transform duration-500">Strategy &amp; Planning</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                            Whatever stage you are at in your go-to-market strategy, our team can hone in on the key drivers for success.
                        </p>
</div>
<div className="reveal-up delay-100 glow-card bg-[#0A0A0A] p-10 md:p-12 transition-colors duration-700 group relative overflow-hidden">
<iconify-icon className="text-zinc-600 mb-10 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10" height="36" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 relative z-10 group-hover:translate-x-1 transition-transform duration-500">Branding &amp; Creative</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                            Your brand is everything. The right branding adds exceptional value to your company and reputation.
                        </p>
</div>
<div className="reveal-up delay-200 glow-card bg-[#0A0A0A] p-10 md:p-12 transition-colors duration-700 group relative overflow-hidden">
<iconify-icon className="text-zinc-600 mb-10 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10" height="36" icon="solar:megaphone-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 relative z-10 group-hover:translate-x-1 transition-transform duration-500">Public Relations</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                            We have the media relationships to leverage your story and a PR Affiliate Marketing Program to drive sales.
                        </p>
</div>
<div className="reveal-up glow-card bg-[#0A0A0A] p-10 md:p-12 transition-colors duration-700 group relative overflow-hidden">
<iconify-icon className="text-zinc-600 mb-10 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10" height="36" icon="solar:smartphone-update-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 relative z-10 group-hover:translate-x-1 transition-transform duration-500">Social &amp; Digital</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                            Compelling social strategies and a digital presence that drives customers to your website and retail.
                        </p>
</div>
<div className="reveal-up delay-100 glow-card bg-[#0A0A0A] p-10 md:p-12 transition-colors duration-700 group relative overflow-hidden">
<iconify-icon className="text-zinc-600 mb-10 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10" height="36" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 relative z-10 group-hover:translate-x-1 transition-transform duration-500">Marketing</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                            Full suite of services covering strategies for segmenting consumers to build loyalty and employing market research.
                        </p>
</div>
<div className="reveal-up delay-200 glow-card bg-[#0A0A0A] p-10 md:p-12 transition-colors duration-700 group relative overflow-hidden">
<iconify-icon className="text-zinc-600 mb-10 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10" height="36" icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100 relative z-10 group-hover:translate-x-1 transition-transform duration-500">Advisory</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                            ADin puts relationships first. Exploring new markets and advising to best serve the goals of our clients.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#FAFAFA]" id="work">
<div className="max-w-7xl mx-auto">
<div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl reveal-up">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-zinc-900 mb-6">
                            Work that matters.
                        </h2>
<p className="text-zinc-500 text-lg md:text-xl font-light tracking-tight leading-relaxed">
                            See the work behind some of our award-winning content and creative for amazing trusted partners.
                        </p>
</div>
<div className="reveal-up delay-100">
<a className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors duration-500 group whitespace-nowrap pb-2 md:pb-0" href="#">
<span className="kinetic-link" data-text="All Case Studies"><span>All Case Studies</span></span>
<div className="w-8 h-8 rounded-full border border-zinc-200 ml-3 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500 group-hover:translate-x-1">
<iconify-icon className="text-zinc-900 group-hover:text-white transition-colors duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-32">

<a className="group block reveal-up" href="#">
<div className="img-zoom-container aspect-[4/3] bg-zinc-100 rounded-[2rem] relative mb-8 border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] mask-image">
<div className="img-zoom-target absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
<span className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-300 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-1000 ease-out">Naturepedic</span>
</div>
</div>
<div className="flex items-start justify-between pr-4 transform group-hover:-translate-y-2 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors duration-300">Naturepedic</h3>
<p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-sm">Elevating the experience and becoming marketing agency of record for the organic mattress manufacturer.</p>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500 shrink-0 group-hover:rotate-45">
<iconify-icon className="text-zinc-900 group-hover:text-white transition-colors duration-500" icon="solar:arrow-up-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-8 flex gap-4 text-xs font-medium text-zinc-400 tracking-tight transform group-hover:translate-y-1 transition-transform duration-500 opacity-80 group-hover:opacity-100">
<span className="bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">1,784+M Impressions</span>
<span className="bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">1,508 Placements</span>
</div>
</a>

<a className="group block md:mt-32 reveal-up delay-100" href="#">
<div className="img-zoom-container aspect-[4/3] bg-zinc-100 rounded-[2rem] relative mb-8 border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
<div className="img-zoom-target absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
<span className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-300 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-1000 ease-out">EarthKind</span>
</div>
</div>
<div className="flex items-start justify-between pr-4 transform group-hover:-translate-y-2 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors duration-300">EarthKind</h3>
<p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-sm">Consistent dynamic storytelling across multiple media channels for the plant-based pest prevention brand.</p>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500 shrink-0 group-hover:rotate-45">
<iconify-icon className="text-zinc-900 group-hover:text-white transition-colors duration-500" icon="solar:arrow-up-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-8 flex gap-4 text-xs font-medium text-zinc-400 tracking-tight transform group-hover:translate-y-1 transition-transform duration-500 opacity-80 group-hover:opacity-100">
<span className="bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">1,202+M Impressions</span>
<span className="bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">973 Placements</span>
</div>
</a>

<a className="group block reveal-up" href="#">
<div className="img-zoom-container aspect-[4/3] bg-zinc-100 rounded-[2rem] relative mb-8 border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
<div className="img-zoom-target absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
<span className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-300 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-1000 ease-out">Hooray Foods</span>
</div>
</div>
<div className="flex items-start justify-between pr-4 transform group-hover:-translate-y-2 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors duration-300">Hooray Foods</h3>
<p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-sm">Helping a brand come out of the gate with a distinct voice to be heard over competitive noise.</p>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500 shrink-0 group-hover:rotate-45">
<iconify-icon className="text-zinc-900 group-hover:text-white transition-colors duration-500" icon="solar:arrow-up-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-8 flex gap-4 text-xs font-medium text-zinc-400 tracking-tight transform group-hover:translate-y-1 transition-transform duration-500 opacity-80 group-hover:opacity-100">
<span className="bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">494.5+M Impressions</span>
<span className="bg-white px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">186 Placements</span>
</div>
</a>

<a className="group block md:mt-32 reveal-up delay-100" href="#">
<div className="img-zoom-container aspect-[4/3] bg-zinc-100 rounded-[2rem] relative mb-8 border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
<div className="img-zoom-target absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center px-8 text-center">
<span className="text-4xl lg:text-5xl font-medium tracking-tighter text-zinc-300 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-1000 ease-out">Kari Warberg Block</span>
</div>
</div>
<div className="flex items-start justify-between pr-4 transform group-hover:-translate-y-2 transition-transform duration-500">
<div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors duration-300">Thought Leadership</h3>
<p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-sm">Establishing a "One-of-a-Kind" female CEO thought-leader who spoke her mind and her truth.</p>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500 shrink-0 group-hover:rotate-45">
<iconify-icon className="text-zinc-900 group-hover:text-white transition-colors duration-500" icon="solar:arrow-up-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-white border-y border-zinc-200/50 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-50/80 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-24 reveal-up">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-zinc-900 mb-6">What our clients say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="reveal-up bg-white p-10 md:p-12 rounded-[2rem] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 ease-out group">
<div>
<iconify-icon className="text-zinc-200 mb-8 group-hover:text-zinc-900 group-hover:-translate-y-1 transition-all duration-500" height="32" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-10 group-hover:text-zinc-900 transition-colors duration-500">
                                "The value of ADin goes way beyond their services. They have a knack for seeing opportunities and trends that for conscious driven entrepreneurs like myself, that’s golden."
                            </p>
</div>
<div className="transform group-hover:translate-x-2 transition-transform duration-500">
<p className="font-medium text-zinc-900 tracking-tight">Kari Warberg Block</p>
<p className="text-xs text-zinc-400 font-light mt-1 uppercase tracking-widest">CEO &amp; Founder, EarthKind</p>
</div>
</div>
<div className="reveal-up delay-100 bg-white p-10 md:p-12 rounded-[2rem] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 ease-out lg:translate-y-12 group">
<div>
<iconify-icon className="text-zinc-200 mb-8 group-hover:text-zinc-900 group-hover:-translate-y-1 transition-all duration-500" height="32" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-10 group-hover:text-zinc-900 transition-colors duration-500">
                                "During the onset of COVID-19, ADin coordinated with our experts and local media outlets in all our locations, executing a PR campaign which garnered almost 50 million impressions. A great team effort."
                            </p>
</div>
<div className="transform group-hover:translate-x-2 transition-transform duration-500">
<p className="font-medium text-zinc-900 tracking-tight">Neal Mercado</p>
<p className="text-xs text-zinc-400 font-light mt-1 uppercase tracking-widest">CMO, Designs for Health</p>
</div>
</div>
<div className="reveal-up delay-200 bg-white p-10 md:p-12 rounded-[2rem] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 ease-out md:col-span-2 lg:col-span-1 lg:translate-y-24 group">
<div>
<iconify-icon className="text-zinc-200 mb-8 group-hover:text-zinc-900 group-hover:-translate-y-1 transition-all duration-500" height="32" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-10 group-hover:text-zinc-900 transition-colors duration-500">
                                "We can’t thank ADin enough for helping us navigate our brand launch. Not only did they deliver great results with seamless execution but were incredibly responsive. It felt that they were part of our team. Hooray for ADin!"
                            </p>
</div>
<div className="transform group-hover:translate-x-2 transition-transform duration-500">
<p className="font-medium text-zinc-900 tracking-tight">Stephanie Su</p>
<p className="text-xs text-zinc-400 font-light mt-1 uppercase tracking-widest">Head of Marketing, Hooray Foods</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#FAFAFA] relative" id="contact">
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-24 reveal-up">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-900 mb-8">We'd love to hear from you.</h2>
<p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl mx-auto tracking-tight leading-relaxed">
                        Please use the form below or reach out to Sue Taggart directly on her cell <a className="text-zinc-900 font-medium hover:text-zinc-500 transition-colors kinetic-link" data-text="917.833.8101" href="tel:9178338101"><span>917.833.8101</span></a> or email <a className="text-zinc-900 font-medium hover:text-zinc-500 transition-colors kinetic-link" data-text="sue@adinnyc.com" href="mailto:sue@adinnyc.com"><span>sue@adinnyc.com</span></a>.
                    </p>
</div>
<form className="space-y-8 reveal-up delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-3 group">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest group-focus-within:text-zinc-900 transition-colors duration-300" htmlFor="firstName">First Name</label>
<input className="w-full bg-white border border-zinc-200/80 rounded-2xl py-4 px-6 text-sm text-zinc-900 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 shadow-sm transition-all duration-500 placeholder:text-zinc-300 font-light hover:shadow-md" id="firstName" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-3 group">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest group-focus-within:text-zinc-900 transition-colors duration-300" htmlFor="lastName">Last Name</label>
<input className="w-full bg-white border border-zinc-200/80 rounded-2xl py-4 px-6 text-sm text-zinc-900 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 shadow-sm transition-all duration-500 placeholder:text-zinc-300 font-light hover:shadow-md" id="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-3 group">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest group-focus-within:text-zinc-900 transition-colors duration-300" htmlFor="email">Email</label>
<input className="w-full bg-white border border-zinc-200/80 rounded-2xl py-4 px-6 text-sm text-zinc-900 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 shadow-sm transition-all duration-500 placeholder:text-zinc-300 font-light hover:shadow-md" id="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="space-y-3 group">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest group-focus-within:text-zinc-900 transition-colors duration-300" htmlFor="message">Message</label>
<textarea className="w-full bg-white border border-zinc-200/80 rounded-2xl py-4 px-6 text-sm text-zinc-900 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 shadow-sm transition-all duration-500 resize-none placeholder:text-zinc-300 font-light hover:shadow-md" id="message" placeholder="How can we help you?" required="" rows="5"></textarea>
</div>
<div className="pt-6 text-center md:text-left">
<button className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 text-sm font-medium text-white bg-zinc-900 rounded-full btn-shine shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500" type="submit">
                            Submit Inquiry
                        </button>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200/50 pt-24 pb-10 px-6 overflow-hidden relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32 relative z-10">
<div className="reveal-up">
<a className="text-2xl font-medium tracking-tighter uppercase text-zinc-900 block mb-6 kinetic-link" data-text="ADINNYC" href="#">
<span>ADINNYC</span>
</a>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                    7 World Trade Center<br/>
                    250 Greenwich St, New York, NY 10007
                </p>
</div>
<div className="flex flex-col md:items-end text-sm text-zinc-500 font-light reveal-up delay-100">
<div className="flex flex-col space-y-3 mb-12 md:mb-10 text-base">
<a className="hover:text-zinc-900 transition-colors duration-300 kinetic-link" data-text="917.833.8101" href="tel:9178338101"><span>917.833.8101</span></a>
<a className="hover:text-zinc-900 transition-colors duration-300 kinetic-link" data-text="sue@adinnyc.com" href="mailto:sue@adinnyc.com"><span>sue@adinnyc.com</span></a>
</div>
<div className="flex flex-wrap gap-x-10 gap-y-4 text-xs font-medium uppercase tracking-widest text-zinc-400">
<a className="hover:text-zinc-900 transition-colors duration-300" href="#home">Home</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#work">Work</a>
</div>
</div>
</div>

<div className="w-full relative flex items-center justify-center pointer-events-none select-none mb-12 border-t border-zinc-100/50 pt-10">
<div className="marquee-container w-full">
<div className="marquee-content slow opacity-[0.03]">
<span className="text-[20vw] font-medium tracking-tighter leading-none uppercase shrink-0 px-8 text-zinc-900">AdinNYC</span>
<span className="text-[20vw] font-medium tracking-tighter leading-none uppercase shrink-0 px-8 text-zinc-900">AdinNYC</span>
</div>
<div aria-hidden="true" className="marquee-content slow opacity-[0.03]">
<span className="text-[20vw] font-medium tracking-tighter leading-none uppercase shrink-0 px-8 text-zinc-900">AdinNYC</span>
<span className="text-[20vw] font-medium tracking-tighter leading-none uppercase shrink-0 px-8 text-zinc-900">AdinNYC</span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-400 relative z-10 reveal-up">
<p>All rights reserved. ADin NYC.</p>
<div className="flex items-center space-x-2 group cursor-pointer hover:text-zinc-900 transition-colors duration-300">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-700" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>New York City</span>
</div>
</div>
</footer>



    </>
  );
}
