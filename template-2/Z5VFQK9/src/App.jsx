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



    // Page load animations
    window.addEventListener('load', function() {
      // Hero image entrance
      setTimeout(() => {
        document.getElementById('heroImage').style.opacity = '1';
        document.getElementById('heroImage').style.transform = 'scale(1)';
        document.getElementById('heroImage').style.filter = 'brightness(0.56) blur(0px)';
      }, 100);
      
      // Hero overlay
      setTimeout(() => {
        document.getElementById('heroOverlay').style.opacity = '1';
      }, 300);
      
      // Hero elements
      setTimeout(() => {
        document.getElementById('heroNav').style.opacity = '1';
        document.getElementById('heroNav').style.transform = 'translateY(0)';
        document.getElementById('heroNav').style.filter = 'blur(0px)';
      }, 800);
      
      setTimeout(() => {
        document.getElementById('heroStatus').style.opacity = '1';
        document.getElementById('heroStatus').style.transform = 'translateY(0) translateX(0)';
        document.getElementById('heroStatus').style.filter = 'blur(0px)';
      }, 1000);
      
      setTimeout(() => {
        document.getElementById('heroTitle').style.opacity = '1';
        document.getElementById('heroTitle').style.transform = 'translateY(0) translateX(0)';
        document.getElementById('heroTitle').style.filter = 'blur(0px)';
      }, 1200);
      
      setTimeout(() => {
        document.getElementById('heroSubtitle').style.opacity = '1';
        document.getElementById('heroSubtitle').style.transform = 'translateY(0) translateX(0)';
        document.getElementById('heroSubtitle').style.filter = 'blur(0px)';
      }, 1400);
      
      setTimeout(() => {
        document.getElementById('heroButton').style.opacity = '1';
        document.getElementById('heroButton').style.transform = 'translateY(0) translateX(0)';
        document.getElementById('heroButton').style.filter = 'blur(0px)';
      }, 1600);
      
      setTimeout(() => {
        document.getElementById('heroText').style.opacity = '1';
        document.getElementById('heroText').style.transform = 'translateY(0)';
        document.getElementById('heroText').style.filter = 'blur(0px)';
      }, 1800);
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
          entry.target.style.filter = 'blur(0px)';
        }
      });
    }, observerOptions);

    // Observe all parallax elements
    document.querySelectorAll('.parallax-element').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
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
      

<section className="relative min-h-screen w-full flex items-center justify-center">
<img alt="Jennifer Lim portrait" className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-0 scale-125 blur-md transition-all duration-2000 ease-out" id="heroImage" src="/assets/9d0b0002-7af7-41bd-b98a-34421a404140_1600w.jpg" style={{filter: `brightness(0.56)`}} />
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-950/80 via-zinc-950/60 to-zinc-950/90 z-10 opacity-0 transition-opacity duration-1500 ease-out" id="heroOverlay"></div>

<nav className="absolute top-0 left-0 right-0 z-30 container mx-auto px-6 py-6 flex items-center justify-between opacity-0 transform -translate-y-8 blur-sm transition-all duration-1200 ease-out" id="heroNav" style={{transitionDelay: `800ms`}}>
<a className="flex items-center gap-3" href="#">
<span className="text-lg font-medium tracking-tight" style={{letterSpacing: `-0.02em`}}>Jennifer Lim</span>
</a>
<button className="p-2 rounded-md hover:bg-zinc-900/50 md:hidden transition-colors" id="menuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<ul className="hidden md:flex items-center gap-8" id="navLinks">
<li><a className="hover:text-zinc-300 hover:underline transition" href="#work">Work</a></li>
<li><a className="hover:text-zinc-300 hover:underline transition" href="#about">About</a></li>
<li><a className="hover:text-zinc-300 hover:underline transition" href="#contact">Contact</a></li>
</ul>
</nav>

<div className="container relative z-20 flex flex-col min-h-screen mr-auto ml-auto pr-6 pl-6" style={{paddingTop: `20vh`, paddingBottom: `30vh`}}>
<div className="flex flex-col w-full h-full justify-center text-left">

<div className="opacity-0 transform translate-y-12 translate-x-[-20px] blur-md transition-all duration-1200 ease-out" id="heroStatus" style={{transitionDelay: `1000ms`}}>
<span className="inline-flex items-center gap-2 px-4 py-1 bg-zinc-800/50 ring-1 ring-inset ring-zinc-600/40 rounded-full text-sm mb-6 backdrop-blur-md font-medium w-fit">
<span className="w-2 h-2 bg-zinc-300 rounded-full animate-pulse"></span>
            Open to Collaboration
          </span>
</div>

<div className="opacity-0 transform translate-y-16 translate-x-[-30px] blur-md transition-all duration-1400 ease-out" id="heroTitle" style={{transitionDelay: `1200ms`}}>
<h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6" style={{letterSpacing: `-0.035em`}}>
            UI/UX Designer<br />with a passion<br />for digital craft
          </h1>
</div>

<div className="opacity-0 transform translate-y-20 translate-x-[-40px] blur-md transition-all duration-1400 ease-out" id="heroSubtitle" style={{transitionDelay: `1400ms`}}>
<p className="max-w-2xl text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
            Hi, I'm Jennifer Lim — blending empathy, design, and technology to create delightful, accessible interfaces that empower users.
          </p>
</div>

<div className="opacity-0 transform translate-y-24 translate-x-[-50px] blur-md transition-all duration-1400 ease-out" id="heroButton" style={{transitionDelay: `1600ms`}}>
<a className="inline-flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 transition text-white font-medium rounded-full pl-2 pr-6 py-2 shadow-lg hover:shadow-zinc-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-600 ring-1 ring-zinc-700/30 w-fit" href="#work">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
            View Portfolio
          </a>
</div>
</div>
</div>

<div className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none select-none overflow-hidden opacity-0 transform translate-y-20 blur-lg transition-all duration-2000 ease-out" id="heroText" style={{transitionDelay: `1800ms`}}>
<h2 className="tracking-tight text-center" style={{fontFamily: `'Space Grotesk',sans-serif`, fontSize: `24vw`, lineHeight: `1`, letterSpacing: `-0.045em`, color: `rgba(113,113,122,0.11)`, fontWeight: `700`, textTransform: `uppercase`, whiteSpace: `nowrap`, width: `100vw`}}>
        Jennifer
      </h2>
</div>
</section>

<section className="relative bg-zinc-950 border-zinc-800/50 border-t pt-32 pb-32" id="about">
<div className="container mx-auto px-6">
<div className="max-w-7xl mx-auto">

<div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

<div className="parallax-element opacity-0 transform translate-x-[-60px] translate-y-20 blur-sm transition-all duration-1200 ease-out">
<div className="relative">
<div className="relative overflow-hidden rounded-2xl h-96 md:h-[500px] ring-1 ring-zinc-800/50">
<img alt="Jennifer Lim working" className="absolute inset-0 w-full h-full object-cover object-center" src="/assets/9d0b0002-7af7-41bd-b98a-34421a404140_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 bg-zinc-900/90 backdrop-blur-lg ring-1 ring-zinc-700/50 rounded-xl p-4 shadow-2xl">
<div className="text-center">
<div className="text-2xl font-semibold text-white mb-1">5+</div>
<div className="text-xs text-zinc-400">Years Experience</div>
</div>
</div>
<div className="absolute -top-6 -left-6 bg-zinc-900/90 backdrop-blur-lg ring-1 ring-zinc-700/50 rounded-xl p-4 shadow-2xl">
<div className="text-center">
<div className="text-2xl font-semibold text-white mb-1">50+</div>
<div className="text-xs text-zinc-400">Projects Delivered</div>
</div>
</div>
</div>
</div>

<div className="parallax-element opacity-0 transform translate-x-[60px] translate-y-20 blur-sm transition-all duration-1200 ease-out lg:pl-8">
<span className="inline-flex items-center gap-2 px-4 py-1 bg-zinc-800/40 ring-1 ring-inset ring-zinc-700/40 rounded-full text-sm mb-6 font-medium text-zinc-300">
<svg className="lucide lucide-user" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              About Me
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-white" style={{letterSpacing: `-0.03em`}}>
              Crafting experiences that matter
            </h2>
<div className="space-y-6 text-zinc-300 leading-relaxed mb-10">
<p className="text-lg">
                With over 5 years in UI/UX design, I specialize in creating intuitive digital experiences that bridge the gap between user needs and business goals.
              </p>
<p className="">
                My journey began in graphic design, but I quickly discovered my passion for the intersection of technology and human behavior. I believe great design is invisible — it should feel natural and effortless to use.
              </p>
<p>
                I'm particularly passionate about accessibility and inclusive design, ensuring that digital products work beautifully for everyone, regardless of their abilities or circumstances.
              </p>
</div>

<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition group shadow-lg" href="#contact">
                Let's work together
                <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-6 py-3 rounded-full transition group ring-1 ring-zinc-700/30" href="mailto:jennifer@example.com">
<svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
                Download Resume
              </a>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

<div className="parallax-element opacity-0 transform translate-y-24 blur-sm transition-all duration-1000 ease-out bg-zinc-900/30 ring-1 ring-zinc-800/50 rounded-xl p-6" style={{transitionDelay: `200ms`}}>
<div className="mb-4">
<div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-xl mb-4">
<svg className="lucide lucide-users text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3"></path><path d="M16 11h3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">UX Research</h3>
</div>
<p className="text-zinc-400 mb-4 leading-relaxed">User interviews, usability testing, and behavioral analysis to inform design decisions.</p>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">User Interviews</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">A/B Testing</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">Analytics</span>
</div>
</div>

<div className="parallax-element opacity-0 transform translate-y-24 blur-sm transition-all duration-1000 ease-out bg-zinc-900/30 ring-1 ring-zinc-800/50 rounded-xl p-6" style={{transitionDelay: `400ms`}}>
<div className="mb-4">
<div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl mb-4">
<svg className="lucide lucide-palette text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Visual Design</h3>
</div>
<p className="text-zinc-400 mb-4 leading-relaxed">Creating beautiful, accessible interfaces with strong visual hierarchy and brand consistency.</p>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">Figma</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">Sketch</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">Prototyping</span>
</div>
</div>

<div className="parallax-element opacity-0 transform translate-y-24 blur-sm transition-all duration-1000 ease-out bg-zinc-900/30 ring-1 ring-zinc-800/50 rounded-xl p-6" style={{transitionDelay: `600ms`}}>
<div className="mb-4">
<div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500/10 rounded-xl mb-4">
<svg className="lucide lucide-layers text-teal-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Design Systems</h3>
</div>
<p className="text-zinc-400 mb-4 leading-relaxed">Building scalable component libraries and design tokens for consistent product experiences.</p>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">Component Libraries</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">Tokens</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300">Documentation</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-zinc-950 border-zinc-800/50 border-y py-20">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="relative parallax-element opacity-0 transform translate-y-16 scale-95 blur-sm transition-all duration-1200 ease-out">
<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 text-8xl text-indigo-500/20 font-bold leading-none">"</div>
<blockquote className="text-2xl md:text-3xl text-zinc-200 italic leading-relaxed font-medium tracking-tight pt-8" style={{letterSpacing: `-0.02em`}}>
            Design is not just what it looks like and feels like. Design is how it works — and more importantly, how it makes people feel.
          </blockquote>
<div className="mt-8 text-zinc-400">
            — Jennifer Lim
          </div>
</div>
</div>
</div>
</section>

<section className="relative bg-zinc-950 pt-32 pb-32" id="work">
<div className="container mx-auto px-6">
<div className="max-w-7xl mx-auto">

<div className="mb-20 text-center parallax-element opacity-0 transform translate-y-16 blur-sm transition-all duration-1000 ease-out">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6" style={{letterSpacing: `-0.03em`}}>
            Featured Projects
          </h2>
<p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
            A curated selection of my most impactful design work, showcasing user-centered solutions and thoughtful design processes.
          </p>
</div>

<div className="space-y-32">

<article className="parallax-element opacity-0 transform translate-y-24 blur-sm transition-all duration-1200 ease-out">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="mb-6">
<span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 ring-1 ring-indigo-500/20 rounded-full text-sm text-indigo-400 font-medium mb-4">
<svg className="lucide lucide-star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
                    Featured Project
                  </span>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight" style={{letterSpacing: `-0.025em`}}>
                    E-Commerce Platform Redesign
                  </h3>
<p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    Complete redesign of a major e-commerce platform, focusing on improving conversion rates through enhanced product discovery, streamlined checkout flow, and personalized user experiences. The project resulted in a 35% increase in conversion rate and 28% reduction in cart abandonment.
                  </p>
</div>
<div className="mb-8">
<h4 className="text-white font-medium mb-3">Key Achievements</h4>
<ul className="space-y-2 text-zinc-400">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      35% increase in conversion rate
                    </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      28% reduction in cart abandonment
                    </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Improved accessibility compliance (WCAG 2.1 AA)
                    </li>
</ul>
</div>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-full text-sm text-zinc-300">UX Research</span>
<span className="px-3 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-full text-sm text-zinc-300">Prototyping</span>
<span className="px-3 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-full text-sm text-zinc-300">A/B Testing</span>
<span className="px-3 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-full text-sm text-zinc-300">Design Systems</span>
</div>
<a className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition group" href="#">
                  View Case Study
                  <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="order-1 lg:order-2">
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
<div className="relative bg-zinc-900/50 ring-1 ring-zinc-700/50 rounded-2xl overflow-hidden">
<img alt="E-Commerce Platform Redesign" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/77827dc5-39e4-4855-bf02-5d844f2cc636_800w.jpg" />
</div>
</div>
</div>
</div>
</article>

<div className="grid md:grid-cols-2 gap-12">

<article className="parallax-element opacity-0 transform translate-y-24 translate-x-[-30px] blur-sm transition-all duration-1200 ease-out" style={{transitionDelay: `200ms`}}>
<div className="group">
<div className="relative mb-6 overflow-hidden rounded-xl ring-1 ring-zinc-700/50">
<img alt="MobileBanking App" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/73268d9b-80d3-458d-acd9-47c696ab9d24_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
</div>
<div className="mb-4">
<span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 ring-1 ring-purple-500/20 rounded-full text-sm text-purple-400 font-medium mb-3">
<svg className="lucide lucide-smartphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                    Mobile App
                  </span>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight" style={{letterSpacing: `-0.02em`}}>
                    Mobile Banking App
                  </h3>
<p className="text-zinc-400 leading-relaxed mb-4">
                    Redesigned mobile banking experience focusing on security, accessibility, and intuitive financial management for everyday users.
                  </p>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded text-xs text-zinc-300">Mobile Design</span>
<span className="px-2 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded text-xs text-zinc-300">Security</span>
<span className="px-2 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded text-xs text-zinc-300">FinTech</span>
</div>
<a className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition group" href="#">
                  View Details
                  <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>

<article className="parallax-element opacity-0 transform translate-y-24 translate-x-[30px] blur-sm transition-all duration-1200 ease-out" style={{transitionDelay: `400ms`}}>
<div className="group">
<div className="relative mb-6 overflow-hidden rounded-xl ring-1 ring-zinc-700/50">
<img alt="Healthcare Dashboard" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/9d0b0002-7af7-41bd-b98a-34421a404140_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
</div>
<div className="mb-4">
<span className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 ring-1 ring-teal-500/20 rounded-full text-sm text-teal-400 font-medium mb-3">
<svg className="lucide lucide-activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 12-4-4-6 6-2-2-4 4"></path><path d="M16 12h6"></path></svg>
                    Dashboard Design
                  </span>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight" style={{letterSpacing: `-0.02em`}}>
                    Healthcare Dashboard
                  </h3>
<p className="text-zinc-400 leading-relaxed mb-4">
                    Complex data visualization for healthcare professionals, making patient information accessible and actionable.
                  </p>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded text-xs text-zinc-300">Data Viz</span>
<span className="px-2 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded text-xs text-zinc-300">Healthcare</span>
<span className="px-2 py-1 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded text-xs text-zinc-300">B2B</span>
</div>
<a className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition group" href="#">
                  View Details
                  <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>

<div className="text-center parallax-element opacity-0 transform translate-y-16 blur-sm transition-all duration-1000 ease-out pt-16">
<a className="inline-flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-4 rounded-full transition group ring-1 ring-zinc-700/30 shadow-lg" href="#">
              View All Projects
              <svg className="lucide lucide-grid group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-zinc-950 border-zinc-800/50 border-t pt-32 pb-32" id="contact">
<div className="container mx-auto px-6">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="parallax-element opacity-0 transform translate-x-[-60px] translate-y-20 blur-sm transition-all duration-1200 ease-out">
<span className="inline-flex items-center gap-2 px-4 py-1 bg-zinc-800/40 ring-1 ring-inset ring-zinc-700/40 rounded-full text-sm mb-6 font-medium text-zinc-300">
<svg className="lucide lucide-mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
              Get In Touch
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-white" style={{letterSpacing: `-0.03em`}}>
              Let's create something amazing together
            </h2>
<p className="text-zinc-300 text-lg leading-relaxed mb-10">
              I'm always excited to work on new projects and collaborate with like-minded people. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>

<div className="space-y-6 mb-10">
<div className="flex items-center gap-4">
<div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-xl">
<svg className="lucide lucide-mail text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
</div>
<div>
<div className="text-white font-medium">Email</div>
<a className="text-zinc-400 hover:text-indigo-400 transition" href="mailto:jennifer@example.com">jennifer@example.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl">
<svg className="lucide lucide-linkedin text-purple-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 8 6-6-6-6"></path><path d="m22 14-6 6-6-6"></path><path d="M2 2h20v20H2z"></path></svg>
</div>
<div>
<div className="text-white font-medium">LinkedIn</div>
<a className="text-zinc-400 hover:text-purple-400 transition" href="#">linkedin.com/in/jenniferlim</a>
</div>
</div>
</div>

<div className="flex gap-4">
<a className="inline-flex items-center justify-center w-12 h-12 bg-zinc-800/50 hover:bg-zinc-700/50 ring-1 ring-zinc-700/40 rounded-xl transition group" href="#">
<svg className="lucide lucide-twitter text-zinc-400 group-hover:text-white transition" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 bg-zinc-800/50 hover:bg-zinc-700/50 ring-1 ring-zinc-700/40 rounded-xl transition group" href="#">
<svg className="lucide lucide-dribbble text-zinc-400 group-hover:text-white transition" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m8.56 2.75 4.37 6.03c1.45 2 4.02 2.71 6.07 1.66l3.71-1.9"></path><path d="M21.96 16.17c-1.96-2.1-5.05-2.78-7.79-1.87l-7.34 2.43"></path><path d="M3.2 8.44c2.32-.64 4.91 0 6.81 1.7l5.13 4.6"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 bg-zinc-800/50 hover:bg-zinc-700/50 ring-1 ring-zinc-700/40 rounded-xl transition group" href="#">
<svg className="lucide lucide-github text-zinc-400 group-hover:text-white transition" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div className="parallax-element opacity-0 transform translate-x-[60px] translate-y-20 blur-sm transition-all duration-1200 ease-out">
<form className="space-y-6 bg-zinc-900/30 ring-1 ring-zinc-800/50 rounded-2xl p-8">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 focus:outline-none transition" id="name" name="name" placeholder="Your name" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 focus:outline-none transition" id="email" name="email" placeholder="your@email.com" type="email" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="subject">Subject</label>
<input className="w-full px-4 py-3 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 focus:outline-none transition" id="subject" name="subject" placeholder="What's this about?" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-zinc-800/50 ring-1 ring-zinc-700/40 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 focus:outline-none transition resize-none" id="message" name="message" placeholder="Tell me about your project..." rows="6"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-4 rounded-xl transition group shadow-lg" type="submit">
                Send Message
                <svg className="lucide lucide-send group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-zinc-950 border-zinc-800/50 border-t py-16">
<div className="container mx-auto px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white mb-2">Jennifer Lim</h3>
<p className="text-zinc-400">UI/UX Designer creating delightful digital experiences</p>
</div>
<div className="flex justify-center gap-6 mb-8">
<a className="text-zinc-400 hover:text-white transition" href="#work">Work</a>
<a className="text-zinc-400 hover:text-white transition" href="#about">About</a>
<a className="text-zinc-400 hover:text-white transition" href="#contact">Contact</a>
</div>
<div className="border-t border-zinc-800/50 pt-8">
<p className="text-zinc-500 text-sm">
              © 2024 Jennifer Lim. All rights reserved. Built with care and attention to detail.
            </p>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
