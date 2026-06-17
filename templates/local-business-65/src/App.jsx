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



        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows immediately
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect for cursor
        document.querySelectorAll('a, button, .cursor-pointer').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(192, 132, 252, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counter
                    if (entry.target.querySelector('.counter')) {
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; 
                            const increment = target / (duration / 16); 
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 3D Tilt Effect for Hero
        const heroSection = document.getElementById('home');
        const heroContent = document.getElementById('hero-content');

        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            
            heroContent.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroContent.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            heroContent.style.transition = 'transform 0.5s ease';
        });
        
        heroSection.addEventListener('mouseenter', () => {
             heroContent.style.transition = 'none';
        });

        // Navbar Blur on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                nav.style.background = 'rgba(23, 23, 31, 0.9)';
            } else {
                nav.classList.remove('shadow-lg');
                nav.style.background = 'rgba(23, 23, 31, 0.7)';
            }
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
      

<div className="cursor-dot hidden md:block" style={{left: '390px', top: '83px'}}></div>
<div className="cursor-outline hidden md:block" style={{left: '390px', top: '83px'}}></div>

<nav className="fixed top-0 w-full z-50 glass border-b transition-all duration-300 border-white/5" id="navbar" style={{background: 'rgba(23, 23, 31, 0.9)'}}>
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-bold tracking-tight flex items-center gap-3 group text-white" href="#">

<svg className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(142,45,226,0.4)]" fill="none" height="34" viewbox="0 0 32 32" width="34" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logo_grad_top" x1="16" x2="16" y1="0" y2="16">
<stop stop-color="#E9D5FF"></stop>
<stop offset="1" stop-color="#C084FC"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="logo_grad_bot" x1="16" x2="16" y1="10" y2="32">
<stop stop-color="#9333EA"></stop>
<stop offset="1" stop-color="#581C87"></stop>
</lineargradient>
<mask id="arrow-cutout">
<rect fill="white" height="32" width="32"></rect>
<path d="M16 4L25 13H21V30H11V13H7L16 4Z" fill="black"></path>
</mask>
</defs>
<g mask="url(#arrow-cutout)">

<path d="M16 1L31 9.5L16 18L1 9.5L16 1Z" fill="url(#logo_grad_top)"></path>

<path d="M2 11V21C2 28.7 8.3 35 16 35C23.7 35 30 28.7 30 21V11H22V21C22 24.3 19.3 27 16 27C12.7 27 10 24.3 10 21V11H2Z" fill="url(#logo_grad_bot)"></path>
</g>
</svg>
<span className="tracking-tighter">UpRow</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#CFCFE6] hover:scale-105 transition-all duration-300 relative group hover:text-white" href="#home">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C084FC] transition-all duration-300 group-hover:w-full box-shadow-[0_0_8px_#C084FC]"></span>
</a>
<a className="text-sm text-[#CFCFE6] hover:scale-105 transition-all duration-300 relative group hover:text-white" href="#work">
                    Our Work
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-[#CFCFE6] hover:scale-105 transition-all duration-300 relative group hover:text-white" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-[#CFCFE6] hover:scale-105 transition-all duration-300 relative group hover:text-white" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium hover:border-[#C084FC]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.15)] group border-white/10 text-white hover:bg-white/5" href="#contact">
                Let's Talk
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full glass border-b p-6 flex flex-col gap-4 md:hidden border-white/10" id="mobile-menu">
<a className="text-[#CFCFE6] hover:text-[#C084FC]" href="#home">Home</a>
<a className="text-[#CFCFE6] hover:text-[#C084FC]" href="#work">Our Work</a>
<a className="text-[#CFCFE6] hover:text-[#C084FC]" href="#services">Services</a>
<a className="text-[#CFCFE6] hover:text-[#C084FC]" href="#pricing">Pricing</a>
<a className="text-[#C084FC] font-semibold" href="#contact">Contact Us</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="opacity-20 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6A0DAD] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8E2DE2] rounded-full mix-blend-screen filter blur-[128px] opacity-20" style={{animationDelay: '2s'}}></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center" id="hero-content" style={{transition: 'transform 0.5s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C084FC]/30 bg-[#C084FC]/10 mb-8 reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C084FC] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C084FC]"></span>
</span>
<span className="text-xs font-medium text-[#C084FC] tracking-wide uppercase">Accepting New Clients</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight reveal text-white" style={{transitionDelay: '100ms'}}>
                Your Local Business <br/>
<span className="text-gradient">Social Media Partner</span>
</h1>
<p className="text-lg md:text-xl text-[#CFCFE6] max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                We turn local brands into powerful digital identities that grow, engage, and convert. Elevate your presence with strategy-driven content.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<a className="px-8 py-4 rounded-full brand-gradient font-medium text-sm hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(106,13,173,0.5)] transition-all duration-300 flex items-center gap-2 text-white" href="#contact">
                    Get Started
                    <iconify-icon icon="solar:rocket-2-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-full border glass font-medium text-sm transition-all duration-300 border-white/10 text-white hover:bg-white/5" href="#work">
                    View Our Work
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-20 bg-[#0F0F14] relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="p-6 rounded-2xl bg-[#17171F] border text-center group hover:border-[#C084FC]/30 transition-colors duration-500 reveal border-white/5">
<h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#C084FC] transition-colors text-white"><span className="counter" data-target="120">1</span>+</h3>
<p className="text-xs uppercase tracking-widest text-[#CFCFE6] font-medium">Happy Clients</p>
</div>
<div className="p-6 rounded-2xl bg-[#17171F] border text-center group hover:border-[#C084FC]/30 transition-colors duration-500 reveal border-white/5" style={{transitionDelay: '100ms'}}>
<h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#C084FC] transition-colors text-white"><span className="counter" data-target="35">1</span>+</h3>
<p className="text-xs uppercase tracking-widest text-[#CFCFE6] font-medium">Active Clients</p>
</div>
<div className="p-6 rounded-2xl bg-[#17171F] border text-center group hover:border-[#C084FC]/30 transition-colors duration-500 reveal border-white/5" style={{transitionDelay: '200ms'}}>
<h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#C084FC] transition-colors text-white"><span className="counter" data-target="250">2</span>+</h3>
<p className="text-xs uppercase tracking-widest text-[#CFCFE6] font-medium">Projects Delivered</p>
</div>
<div className="p-6 rounded-2xl bg-[#17171F] border text-center group hover:border-[#C084FC]/30 transition-colors duration-500 reveal border-white/5" style={{transitionDelay: '300ms'}}>
<h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#C084FC] transition-colors text-white">3X</h3>
<p className="text-xs uppercase tracking-widest text-[#CFCFE6] font-medium">Avg Growth Rate</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="services">
<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#6A0DAD] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">What We Do</h2>
<p className="text-[#CFCFE6] text-lg">Comprehensive solutions designed to elevate your brand from every angle.</p>
</div>
<a className="text-[#C084FC] font-medium transition-colors flex items-center gap-2 hover:text-white" href="#pricing">
                    See Plans <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group reveal">
<div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/10 flex items-center justify-center text-[#C084FC] mb-6 group-hover:bg-[#C084FC] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:smartphone-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Social Media Mgmt</h3>
<p className="text-sm text-[#CFCFE6] leading-relaxed">Complete handling of your brand presence across all major platforms with consistency.</p>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/10 flex items-center justify-center text-[#C084FC] mb-6 group-hover:bg-[#C084FC] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Personal Branding</h3>
<p className="text-sm text-[#CFCFE6] leading-relaxed">Position yourself as an authority in your niche with a tailored identity strategy.</p>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/10 flex items-center justify-center text-[#C084FC] mb-6 group-hover:bg-[#C084FC] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Content Creation</h3>
<p className="text-sm text-[#CFCFE6] leading-relaxed">High-quality visuals, video production, and copywriting that tells your story.</p>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group reveal" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/10 flex items-center justify-center text-[#C084FC] mb-6 group-hover:bg-[#C084FC] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Audience Growth</h3>
<p className="text-sm text-[#CFCFE6] leading-relaxed">Strategic campaigns to grow real followers and drive meaningful engagement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F0F14] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Process</h2>
<p className="text-[#CFCFE6]">Simple, transparent, and effective.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C084FC]/30 to-transparent"></div>

<div className="relative pt-8 text-center reveal">
<div className="w-10 h-10 rounded-full bg-[#17171F] border border-[#C084FC] text-[#C084FC] flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(192,132,252,0.3)]">01</div>
<h3 className="text-xl font-semibold mb-2 text-white">Discovery</h3>
<p className="text-sm text-[#CFCFE6] max-w-xs mx-auto">We analyze your business, goals, and competitors to understand the landscape.</p>
</div>

<div className="relative pt-8 text-center reveal" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-[#17171F] border border-[#C084FC] text-[#C084FC] flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(192,132,252,0.3)]">02</div>
<h3 className="text-xl font-semibold mb-2 text-white">Custom Strategy</h3>
<p className="text-sm text-[#CFCFE6] max-w-xs mx-auto">We build a roadmap tailored to your specific audience and growth targets.</p>
</div>

<div className="relative pt-8 text-center reveal" style={{transitionDelay: '400ms'}}>
<div className="w-10 h-10 rounded-full bg-[#17171F] border border-[#C084FC] text-[#C084FC] flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(192,132,252,0.3)]">03</div>
<h3 className="text-xl font-semibold mb-2 text-white">Management</h3>
<p className="text-sm text-[#CFCFE6] max-w-xs mx-auto">We execute, monitor, and optimize your campaigns for maximum ROI.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Top Case Studies</h2>
<p className="text-[#CFCFE6] text-lg">A selection of our highest-performing client projects.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

<div className="lg:col-span-3 group relative rounded-2xl p-6 md:p-8 bg-[#17171F] border border-white/5 hover:scale-[1.04] hover:shadow-[0_0_30px_-5px_rgba(142,45,226,0.35)] hover:border-[#C084FC]/30 transition-all duration-500 ease-out reveal cursor-pointer flex flex-col justify-between min-h-[300px]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-2xl z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-bold text-[#C084FC] uppercase tracking-widest border border-[#C084FC]/30 px-3 py-1 rounded-full bg-[#C084FC]/10">Instagram Management</span>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C084FC] group-hover:text-white transition-colors text-[#CFCFE6]">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="mt-auto">
<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Local Cafe Brand Growth</h3>
<p className="text-[#C084FC] font-semibold mb-4 flex items-center gap-2"><iconify-icon icon="solar:graph-new-up-linear"></iconify-icon> 3X Engagement in 60 Days</p>
<p className="text-[#CFCFE6] text-sm leading-relaxed max-w-md">Complete social media revamp including content, reels, and engagement strategy.</p>
</div>
</div>
</div>

<div className="lg:col-span-3 group relative rounded-2xl p-6 md:p-8 bg-[#17171F] border border-white/5 hover:scale-[1.04] hover:shadow-[0_0_30px_-5px_rgba(142,45,226,0.35)] hover:border-[#C084FC]/30 transition-all duration-500 ease-out reveal cursor-pointer flex flex-col justify-between min-h-[300px]" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-2xl z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-bold text-[#C084FC] uppercase tracking-widest border border-[#C084FC]/30 px-3 py-1 rounded-full bg-[#C084FC]/10">Personal Brand Creation</span>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C084FC] group-hover:text-white transition-colors text-[#CFCFE6]">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="mt-auto">
<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Gym Personal Branding</h3>
<p className="text-[#C084FC] font-semibold mb-4 flex items-center gap-2"><iconify-icon icon="solar:graph-new-up-linear"></iconify-icon> 10K Followers Growth</p>
<p className="text-[#CFCFE6] text-sm leading-relaxed max-w-md">Built authority positioning and content strategy for fitness coach.</p>
</div>
</div>
</div>

<div className="lg:col-span-2 group relative rounded-2xl p-6 bg-[#17171F] border border-white/5 hover:scale-[1.04] hover:shadow-[0_0_30px_-5px_rgba(142,45,226,0.35)] hover:border-[#C084FC]/30 transition-all duration-500 ease-out reveal cursor-pointer" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-bold text-[#CFCFE6] uppercase tracking-widest border border-white/10 px-2 py-1 rounded-full">Paid Ads + Content</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Real Estate Lead Campaign</h3>
<p className="text-[#C084FC] text-sm font-semibold mb-3">40+ Qualified Leads</p>
<p className="text-[#CFCFE6] text-xs leading-relaxed">Performance-based social campaign for local real estate agency.</p>
</div>

<div className="lg:col-span-2 group relative rounded-2xl p-6 bg-[#17171F] border border-white/5 hover:scale-[1.04] hover:shadow-[0_0_30px_-5px_rgba(142,45,226,0.35)] hover:border-[#C084FC]/30 transition-all duration-500 ease-out reveal cursor-pointer" style={{transitionDelay: '300ms'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-bold text-[#CFCFE6] uppercase tracking-widest border border-white/10 px-2 py-1 rounded-full">Full Social Strategy</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Restaurant Rebranding</h3>
<p className="text-[#C084FC] text-sm font-semibold mb-3">2.5X Monthly Reach</p>
<p className="text-[#CFCFE6] text-xs leading-relaxed">Visual identity + content transformation for local restaurant.</p>
</div>

<div className="lg:col-span-2 group relative rounded-2xl p-6 bg-[#17171F] border border-white/5 hover:scale-[1.04] hover:shadow-[0_0_30px_-5px_rgba(142,45,226,0.35)] hover:border-[#C084FC]/30 transition-all duration-500 ease-out reveal cursor-pointer" style={{transitionDelay: '400ms'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-bold text-[#CFCFE6] uppercase tracking-widest border border-white/10 px-2 py-1 rounded-full">LinkedIn Growth</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Coaching Authority</h3>
<p className="text-[#C084FC] text-sm font-semibold mb-3">High-ticket Conversions</p>
<p className="text-[#CFCFE6] text-xs leading-relaxed">Optimized LinkedIn presence with authority-driven content.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F0F14] relative" id="pricing">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Pricing Plans</h2>
<p className="text-[#CFCFE6]">Transparent pricing for every stage of growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card rounded-2xl p-8 reveal border border-white/5 hover:border-white/10">
<h3 className="text-xl font-medium mb-2 text-white">Basic</h3>
<p className="text-sm text-[#CFCFE6] mb-6">Essential presence for new businesses.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-[#CFCFE6]"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-linear"></iconify-icon> Content Creation</li>
<li className="flex items-center gap-3 text-sm text-[#CFCFE6]"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-linear"></iconify-icon> Basic Scheduling</li>
<li className="flex items-center gap-3 text-sm text-[#CFCFE6]"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-linear"></iconify-icon> Monthly Reports</li>
</ul>
<a className="block w-full py-3 rounded-lg border text-center text-sm font-medium transition-all border-white/10 text-white hover:bg-white/5" href="#contact">Start Basic</a>
</div>

<div className="rounded-2xl p-8 bg-[#17171F] border border-[#C084FC]/50 relative shadow-[0_0_40px_-10px_rgba(192,132,252,0.15)] transform md:-translate-y-4 reveal" style={{transitionDelay: '150ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C084FC] text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase text-white">Most Popular</div>
<h3 className="text-xl font-medium mb-2 text-white">Standard</h3>
<p className="text-sm text-[#CFCFE6] mb-6">Growth focused strategy.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-bold"></iconify-icon> Everything in Basic</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-bold"></iconify-icon> Custom Strategy</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-bold"></iconify-icon> Analytics &amp; Insights</li>
</ul>
<a className="block w-full py-3 rounded-lg brand-gradient text-center text-sm font-medium hover:shadow-lg transition-all text-white" href="#contact">Start Standard</a>
</div>

<div className="glass-card rounded-2xl p-8 reveal border border-white/5 hover:border-white/10" style={{transitionDelay: '300ms'}}>
<h3 className="text-xl font-medium mb-2 text-white">Premium</h3>
<p className="text-sm text-[#CFCFE6] mb-6">Full scale domination.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-[#CFCFE6]"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-linear"></iconify-icon> All Services Included</li>
<li className="flex items-center gap-3 text-sm text-[#CFCFE6]"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-3 text-sm text-[#CFCFE6]"><iconify-icon className="text-[#C084FC]" icon="solar:check-circle-linear"></iconify-icon> Advanced Growth</li>
</ul>
<a className="block w-full py-3 rounded-lg border text-center text-sm font-medium transition-all border-white/10 text-white hover:bg-white/5" href="#contact">Start Premium</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About UpRow</h2>
<p className="text-lg text-[#CFCFE6] mb-8 leading-relaxed">
                UpRow was created to help local businesses compete at a global level through strategic social media growth. We believe in empowering local businesses to become digital leaders in their industry.
            </p>
<p className="text-sm text-[#C084FC] font-medium tracking-wide uppercase mb-12">Founded by [Your Name]</p>
<div className="flex justify-center gap-6">
<a className="text-[#CFCFE6] hover:text-[#C084FC] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-[#CFCFE6] hover:text-[#C084FC] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-[#CFCFE6] hover:text-[#C084FC] transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="24"></iconify-icon></a>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0F0F14] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-bold text-center reveal text-white">What Clients Say</h2>
</div>
<div className="relative w-full pause-on-hover mask-image-gradient">

<div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-[#0F0F14] to-transparent z-10 pointer-events-none"></div>
<div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-[#0F0F14] to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-marquee w-max gap-x-6 gap-y-6">


<div className="min-w-[300px] md:min-w-[380px] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300 bg-[#17171F] border-white/5 border rounded-[14px] pt-6 pr-6 pb-6 pl-6 shadow-[0_0_15px_rgba(142,45,226,0.05)]">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"UpRow completely transformed our online presence. Engagement tripled within weeks."</p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">RS</div>
<div>
<p className="font-semibold text-sm text-white">Rahul S.</p>
<p className="text-xs text-[#CFCFE6]">Cafe Owner</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300 bg-[#17171F] border-white/5 border rounded-[14px] pt-6 pr-6 pb-6 pl-6 shadow-[0_0_15px_rgba(142,45,226,0.05)]">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Professional, strategic, and creative. My personal brand finally looks premium."</p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">AM</div>
<div className="">
<p className="text-sm font-semibold text-white">Ankit M.</p>
<p className="text-xs text-[#CFCFE6]">Fitness Coach</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Generated real leads, not fake engagement. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">PD</div>
<div>
<p className="font-semibold text-sm text-white">Priya D.</p>
<p className="text-xs text-[#CFCFE6]">Real Estate Agency</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Our reach doubled and content quality improved massively."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">SK</div>
<div>
<p className="font-semibold text-sm text-white">Sahil K.</p>
<p className="text-xs text-[#CFCFE6]">Restaurant Owner</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Clean strategy and clear results. Worth every investment."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">NR</div>
<div>
<p className="font-semibold text-sm text-white">Neha R.</p>
<p className="text-xs text-[#CFCFE6]">Business Coach</p>
</div>
</div>
</div>


<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"UpRow completely transformed our online presence. Engagement tripled within weeks."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">RS</div>
<div>
<p className="font-semibold text-sm text-white">Rahul S.</p>
<p className="text-xs text-[#CFCFE6]">Cafe Owner</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Professional, strategic, and creative. My personal brand finally looks premium."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">AM</div>
<div>
<p className="font-semibold text-sm text-white">Ankit M.</p>
<p className="text-xs text-[#CFCFE6]">Fitness Coach</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Generated real leads, not fake engagement. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">PD</div>
<div>
<p className="font-semibold text-sm text-white">Priya D.</p>
<p className="text-xs text-[#CFCFE6]">Real Estate Agency</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Our reach doubled and content quality improved massively."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">SK</div>
<div>
<p className="font-semibold text-sm text-white">Sahil K.</p>
<p className="text-xs text-[#CFCFE6]">Restaurant Owner</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] bg-[#17171F] rounded-[14px] p-6 border border-white/5 shadow-[0_0_15px_rgba(142,45,226,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(142,45,226,0.15)] transition-all duration-300">
<div className="flex gap-1 text-[#C084FC] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#CFCFE6] text-sm leading-relaxed mb-6">"Clean strategy and clear results. Worth every investment."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2A2A35] flex items-center justify-center text-white font-bold text-xs">NR</div>
<div>
<p className="font-semibold text-sm text-white">Neha R.</p>
<p className="text-xs text-[#CFCFE6]">Business Coach</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="contact">
<div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-[#6A0DAD]/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Grow Together</h2>
<p className="text-[#CFCFE6] mb-8 text-lg">Ready to take your business to the next level? Fill out the form and we'll get back to you within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-[#CFCFE6]">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-[#C084FC] bg-white/5">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<p>+91-XXXXXXXXXX</p>
</div>
<div className="flex items-center gap-4 text-[#CFCFE6]">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-[#C084FC] bg-white/5">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<p>contact@uprowmedia.com</p>
</div>
</div>
</div>
<form className="glass-card p-8 rounded-2xl space-y-6 reveal" style={{transitionDelay: '200ms'}}>
<div className="">
<label className="block text-xs font-medium text-[#CFCFE6] mb-2 ml-1">Name</label>
<input className="w-full bg-[#0F0F14] border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all border-white/10 text-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#CFCFE6] mb-2 ml-1">Email</label>
<input className="w-full bg-[#0F0F14] border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all border-white/10 text-white" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#CFCFE6] mb-2 ml-1">Message</label>
<textarea className="w-full bg-[#0F0F14] border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all border-white/10 text-white" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-lg brand-gradient font-medium text-sm hover:opacity-90 transition-all flex justify-center items-center gap-2 group relative overflow-hidden text-white" type="button">
<span className="relative z-10">Send Message</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="py-8 border-t bg-[#0F0F14] border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#CFCFE6]">© 2023 UpRow. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-[#CFCFE6] transition-colors hover:text-white" href="#">Privacy Policy</a>
<a className="text-xs text-[#CFCFE6] transition-colors hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
