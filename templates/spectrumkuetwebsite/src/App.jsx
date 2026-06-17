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



        // Page Navigation Logic
        function switchPage(pageId) {
            // 1. Hide all pages instantly (remove active class)
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
                // Ensure reset of any inline styles if previously added
                page.style.display = ''; 
            });

            // 2. Update Nav Links
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            const navItem = document.getElementById('nav-' + pageId);
            if(navItem) navItem.classList.add('active');

            // 3. Show selected page
            const targetPage = document.getElementById(pageId + '-page');
            if(targetPage) {
                targetPage.classList.add('active');
                
                // Re-trigger scroll animations (IntersectionObserver)
                setTimeout(() => {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('in-view');
                            }
                        });
                    }, { threshold: 0.1 });
                    
                    targetPage.querySelectorAll('.reveal-up').forEach(el => {
                        el.classList.remove('in-view'); // Reset animation state
                        observer.observe(el);
                    });
                }, 50);
            }

            // 4. Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Theme Toggle Logic
        const themeBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        themeBtn.addEventListener('click', () => {
            html.classList.toggle('light-mode');
            const isLight = html.classList.contains('light-mode');
            
            // Toggle Icons
            document.querySelector('.light-icon').style.display = isLight ? 'none' : 'block';
            document.querySelector('.dark-icon').style.display = isLight ? 'block' : 'none';
        });

        // Initial setup for icons
        document.querySelector('.dark-icon').style.display = 'none';

        // Existing Animation Scripts
        document.addEventListener('DOMContentLoaded', () => {
            // Cursor
            const cursor = document.getElementById('custom-cursor');
            const dot = cursor.querySelector('.cursor-dot');
            const ring = cursor.querySelector('.cursor-ring');
            let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                gsap.to(dot, { duration: 0, x: mouseX, y: mouseY });
                
                const spotlight = document.getElementById('spotlight');
                spotlight.style.setProperty('--x', mouseX + 'px');
                spotlight.style.setProperty('--y', mouseY + 'px');
            });

            gsap.ticker.add(() => {
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                gsap.set(ring, { x: ringX, y: ringY });
            });

            // Hover effects
            const addHover = () => {
                 document.querySelectorAll('a, button, .cursor-none-target, input').forEach(el => {
                    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
                });
            };
            addHover();

            // Magnetic
            document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
                wrap.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(this, { duration: 0.3, x: x * 0.5, y: y * 0.5, ease: "power2.out" });
                });
                wrap.addEventListener('mouseleave', function() {
                    gsap.to(this, { duration: 0.5, x: 0, y: 0, ease: "elastic.out(1, 0.3)" });
                });
            });

            // Tilt
            document.querySelectorAll('.tilt-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -3; 
                    const rotateY = ((x - centerX) / centerX) * 3;
                    gsap.to(card.querySelector('.tilt-inner'), { duration: 0.1, rotateX: rotateX, rotateY: rotateY, transformPerspective: 1000 });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card.querySelector('.tilt-inner'), { duration: 0.5, rotateX: 0, rotateY: 0 });
                });
            });

            // Reveal on Scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
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
      

<div className="custom-cursor hidden md:block" id="custom-cursor">
<div className="cursor-dot" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, -50%) translate(128px, 2px)'}}></div>
<div className="cursor-ring" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, -50%) translate(128.067px, 2.0223px)'}}></div>
</div>

<div className="blob-cont">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>

<div className="noise-overlay"></div>

<div className="spotlight" id="spotlight" style={{'--x': '128px', '--y': '2px'}}></div>

<nav className="fixed md:px-12 flex transition-all duration-300 backdrop-blur-[2px] bg-opacity-90 w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="magnetic-wrap" data-magnetic-strength="0.3" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<a className="text-highlight group z-50 text-2xl font-bold tracking-tight font-oswald relative" href="javascript:void(0)" onclick="switchPage('home')">SPECTRUM</a>
</div>
<div className="hidden md:flex items-center gap-8 bg-[var(--card-bg)] px-8 py-3 rounded-full border border-[var(--border-color)] backdrop-blur-md relative z-50">
<button className="nav-link relative text-sm font-medium tracking-wide uppercase hover:text-[#FFD400] transition-colors cursor-none-target text-highlight active appearance-none bg-transparent border-none p-0 focus:outline-none" id="nav-home" onclick="switchPage('home')">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD400] transition-all duration-300 hover:w-full"></span>
</button>
<button className="nav-link relative text-sm font-medium tracking-wide uppercase hover:text-[#FFD400] transition-colors cursor-none-target text-highlight appearance-none bg-transparent border-none p-0 focus:outline-none" id="nav-about" onclick="switchPage('about')">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD400] transition-all duration-300 hover:w-full"></span>
</button>
<button className="nav-link relative text-sm font-medium tracking-wide uppercase hover:text-[#FFD400] transition-colors cursor-none-target text-highlight appearance-none bg-transparent border-none p-0 focus:outline-none" id="nav-events" onclick="switchPage('events')">
                Events
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD400] transition-all duration-300 hover:w-full"></span>
</button>
<button className="nav-link relative text-sm font-medium tracking-wide uppercase hover:text-[#FFD400] transition-colors cursor-none-target text-highlight appearance-none bg-transparent border-none p-0 focus:outline-none" id="nav-alumni" onclick="switchPage('alumni')">
                Alumni
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD400] transition-all duration-300 hover:w-full"></span>
</button>
</div>
<div className="flex items-center gap-4 relative z-50">

<button className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-highlight hover:border-[#FFD400] hover:text-[#FFD400] transition-all cursor-none-target magnetic-wrap bg-[var(--card-bg)]" id="theme-toggle">
<iconify-icon className="block dark-icon hidden" icon="solar:sun-2-linear" style={{display: 'none'}} width="20"></iconify-icon>
<iconify-icon className="block light-icon" icon="solar:moon-linear" width="20"></iconify-icon>
</button>
<div className="md:hidden flex flex-col gap-[5px] items-end w-8 cursor-pointer">
<span className="block w-6 h-[1px] bg-[var(--text-primary)]"></span>
<span className="block w-4 h-[1px] bg-[var(--text-primary)]"></span>
</div>
</div>
</nav>

<main className="z-10 w-full relative min-h-screen">

<div className="page-section active" id="home-page">

<section className="flex flex-col min-h-[85vh] justify-center px-6 md:px-12 relative mb-12 pt-20">
<div className="flex flex-col md:flex-row w-full h-full relative items-center justify-between">
<div className="w-full md:w-3/4 z-20">
<h1 className="reveal-up delay-100 md:text-[10rem] leading-[0.85] text-7xl font-normal tracking-tight font-oswald mb-8 text-highlight">
<span className="opacity-90">SPECTRUM</span>
</h1>
<div className="w-full h-[1px] bg-gradient-to-r from-[#FFD400] via-[var(--border-color)] to-transparent mb-10 reveal-up delay-200 opacity-50"></div>
<div className="flex flex-col md:flex-row reveal-up delay-300 gap-x-12 gap-y-12 items-start">
<p className="md:text-xl leading-relaxed font-light max-w-lg font-sans">
                               Igniting leadership and innovation within <span className="text-highlight font-medium border-b border-[#FFD400]/50">KUET</span>. Navigate your professional journey with precision and purpose.
                            </p>
<div className="flex gap-4">
<button className="px-6 py-3 border border-[var(--border-color)] rounded-full text-xs uppercase tracking-widest hover:bg-[#FFD400] hover:text-[#05080f] hover:border-[#FFD400] transition-all cursor-none-target text-highlight" onclick="switchPage('about')">
                                    Discover More
                                </button>
<button className="px-6 py-3 bg-[#FFD400] text-[#05080f] rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all cursor-none-target font-bold" onclick="switchPage('events')">
                                    View Events
                                </button>
</div>
</div>
</div>

<div className="hidden md:flex w-1/4 h-full justify-center items-center absolute right-0 z-10 pointer-events-none opacity-50">
<div className="relative w-64 h-64 border border-[var(--border-color)] rounded-full animate-[spin_20s_linear_infinite]">
<div className="absolute inset-0 border border-[#FFD400]/20 rounded-full scale-75 animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-[var(--card-bg)] border-[var(--border-color)] mb-16 pt-12 pb-12 relative backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-main)] via-transparent to-[var(--bg-main)] z-20 pointer-events-none"></div>
<div className="marquee-container opacity-100">
<div className="marquee-content">
<span className="text-8xl font-normal text-[#FFD400] font-oswald px-8">ENTHUSIASM</span>
<span className="text-8xl font-normal text-[#FFD400] font-oswald px-8">EXCELLENCE</span>
<span className="text-8xl font-normal text-[#FFD400] font-oswald px-8">EXPERTISE</span>
<span className="text-8xl font-normal text-[#FFD400] font-oswald px-8">ENTHUSIASM</span>
<span className="text-8xl font-normal text-[#FFD400] font-oswald px-8">EXCELLENCE</span>
<span className="text-8xl font-normal text-[#FFD400] font-oswald px-8">EXPERTISE</span>
</div>
</div>
</section>

<section className="px-6 md:px-12 mb-20 reveal-up">
<div className="flex justify-between items-end mb-8">
<h3 className="text-3xl font-oswald text-highlight">Live Event</h3>
<button className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#FFD400] transition-colors cursor-none-target" onclick="switchPage('events')">
                        All Events <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="w-full relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)] group tilt-card h-[400px]">
<div className="tilt-inner relative h-full" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1000px)'}}>
<img alt="Event" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-[var(--gradient-overlay)]"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<span className="text-[#FFD400] text-[10px] tracking-[0.2em] uppercase border border-[#FFD400]/20 bg-[#FFD400]/5 px-3 py-1 rounded-sm font-sans mb-3 inline-block">National</span>
<h3 className="text-4xl font-display text-highlight mb-2">CaseSpecs 3.0</h3>
<p className="text-sm font-sans opacity-80 max-w-xl">An Intra University Case Competition designed to challenge your strategic thinking.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="about-page">
<section className="pt-32 px-6 md:px-12 mb-20">
<h1 className="text-6xl md:text-8xl font-oswald text-highlight mb-8 reveal-up">About Us</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-up delay-100">
<div>
<p className="text-lg leading-relaxed mb-6 font-light">
                            A Professional <span className="text-highlight font-medium border-b border-[#FFD400]/50">Skill Development</span> Club of KUET. We provide a platform to nurture creativity, innovation, passion, and efficiency in a guided environment.
                        </p>
<p className="text-lg leading-relaxed font-light">
                            Our mission is to bridge the gap between academic knowledge and professional application, ensuring our members shine bright in both national and international arenas.
                        </p>
</div>
<div className="relative border border-[var(--border-color)] p-8 rounded-2xl bg-[var(--card-bg)]">
<iconify-icon className="text-[#FFD400] text-4xl mb-4" icon="solar:star-fall-linear"></iconify-icon>
<h4 className="text-2xl font-display text-highlight mb-2">Our Vision</h4>
<p className="text-sm">To be the premier hub for leadership development and professional excellence.</p>
</div>
</div>
</section>

<section className="px-6 md:px-12 mb-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-up">
<div>
<h2 className="text-5xl font-oswald font-normal text-highlight">Committee</h2>
<p className="font-light tracking-wide text-sm font-sans flex items-center gap-2 mt-2">
<span className="w-2 h-2 bg-[#FFD400] rounded-full"></span>
                            THE VISIONARIES STEERING THE SHIP
                        </p>
</div>
</div>
<div className="space-y-12">

<div className="tilt-card group reveal-up">
<div className="tilt-inner relative w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
<div className="lg:col-span-5 h-[400px] lg:h-auto relative shine-wrapper overflow-hidden">
<img alt="President" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-80"></div>
</div>
<div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between relative">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#FFD400]/30 text-[#FFD400] text-[10px] tracking-[0.2em] uppercase rounded-full bg-[#FFD400]/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]"></span>
                                        Chairman
                                    </div>
<h3 className="text-5xl md:text-7xl mb-2 text-highlight font-oswald font-normal">James Sterling</h3>
<p className="font-light tracking-[0.15em] uppercase text-xs mt-2 opacity-80">President &amp; Global Strategist</p>
</div>
<div className="mt-8 pt-6 border-t border-[var(--border-color)]">
<p className="text-sm font-light leading-relaxed italic opacity-80">
                                        "True leadership isn't about presence. It's about impact that resonates when you're absent."
                                    </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="tilt-card group h-[450px] reveal-up delay-100">
<div className="tilt-inner h-full rounded-xl overflow-hidden relative flex flex-col">
<div className="h-3/4 relative shine-wrapper overflow-hidden">
<img alt="SVP" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 z-20">
<h4 className="text-3xl text-highlight font-oswald">Elena Ross</h4>
<p className="text-[10px] tracking-[0.2em] uppercase mt-1 opacity-80 text-highlight">Senior Vice President</p>
</div>
</div>
<div className="h-1/4 p-6 flex items-center bg-[var(--bg-main)]/50 backdrop-blur-md border-t border-[var(--border-color)]">
<p className="text-xs font-light leading-relaxed">Overseeing operational excellence across three continents.</p>
</div>
</div>
</div>
<div className="tilt-card group h-[450px] reveal-up delay-200">
<div className="tilt-inner h-full rounded-xl overflow-hidden relative flex flex-col">
<div className="h-3/4 relative shine-wrapper overflow-hidden">
<img alt="GS" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 z-20">
<h4 className="text-3xl text-highlight font-oswald">Marcus Chen</h4>
<p className="text-[10px] tracking-[0.2em] uppercase mt-1 opacity-80 text-highlight">General Secretary</p>
</div>
</div>
<div className="h-1/4 p-6 flex items-center bg-[var(--bg-main)]/50 backdrop-blur-md border-t border-[var(--border-color)]">
<p className="text-xs font-light leading-relaxed">Coordinating internal affairs and logistics seamlessly.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="events-page">
<section className="pt-32 px-6 md:px-12 mb-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h1 className="text-6xl md:text-8xl font-oswald text-highlight reveal-up">Events</h1>
<div className="flex gap-2 reveal-up delay-100">
<span className="px-4 py-2 border border-[var(--border-color)] rounded-full text-xs uppercase cursor-pointer hover:bg-[#FFD400] hover:text-black transition-colors">Upcoming</span>
<span className="px-4 py-2 border border-[var(--border-color)] rounded-full text-xs uppercase cursor-pointer hover:bg-[#FFD400] hover:text-black transition-colors opacity-50">Past</span>
</div>
</div>

<div className="w-full relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)] group tilt-card mb-16 reveal-up delay-200">
<div className="tilt-inner relative">
<div className="aspect-video w-full bg-slate-900 relative">
<img alt="Live Stream" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/60 to-transparent"></div>

<div className="absolute top-8 left-8 z-20 flex items-center gap-3 bg-red-600/10 border border-red-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
</span>
<span className="text-red-500 text-[10px] font-bold tracking-[0.25em] uppercase">Live Now</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row items-end justify-between gap-8">
<div className="max-w-3xl">
<span className="text-[#FFD400] text-[10px] tracking-[0.2em] uppercase border border-[#FFD400]/20 bg-[#FFD400]/5 px-3 py-1 rounded-sm mb-4 inline-block">Keynote Session</span>
<h3 className="text-4xl md:text-6xl font-display text-highlight mb-4 leading-none">CaseSpecs 3.0</h3>
<div className="flex items-center gap-4 text-sm">
<span className="text-highlight font-medium">Main Auditorium</span>
<span className="w-1 h-1 bg-slate-500 rounded-full"></span>
<span className="font-light">Jan 30, 2026</span>
</div>
</div>
<button className="px-8 py-4 bg-[#FFD400] text-[#05080f] font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform cursor-none-target">Join Stream</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-up delay-300">

<div className="group cursor-none-target">
<div className="aspect-[4/3] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)]">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&amp;q=80"/>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 text-white text-[10px] uppercase tracking-wider rounded border border-white/10">Feb 12</div>
</div>
<h5 className="text-xl font-display text-highlight group-hover:text-[#FFD400] transition-colors">Tech Summit 2025</h5>
<p className="text-xs uppercase tracking-widest mt-1 opacity-70">Workshop Series</p>
</div>

<div className="group cursor-none-target">
<div className="aspect-[4/3] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)]">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&amp;q=80"/>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 text-white text-[10px] uppercase tracking-wider rounded border border-white/10">Mar 05</div>
</div>
<h5 className="text-xl font-display text-highlight group-hover:text-[#FFD400] transition-colors">Leadership Bootcamp</h5>
<p className="text-xs uppercase tracking-widest mt-1 opacity-70">Training</p>
</div>

<div className="group cursor-none-target">
<div className="aspect-[4/3] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)]">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 text-white text-[10px] uppercase tracking-wider rounded border border-white/10">Apr 22</div>
</div>
<h5 className="text-xl font-display text-highlight group-hover:text-[#FFD400] transition-colors">Innovate KUET</h5>
<p className="text-xs uppercase tracking-widest mt-1 opacity-70">Hackathon</p>
</div>
</div>
</section>
</div>

<div className="page-section" id="alumni-page">
<section className="pt-32 px-6 md:px-12 mb-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<h1 className="text-6xl md:text-8xl font-oswald text-highlight reveal-up">Alumni</h1>
<div className="flex items-center gap-4 reveal-up delay-100">
<span className="text-xs uppercase tracking-widest opacity-60">Filter by Year:</span>
<div className="flex gap-2">
<span className="px-3 py-1 border border-[#FFD400] text-[#FFD400] rounded text-xs cursor-pointer">All</span>
<span className="px-3 py-1 border border-[var(--border-color)] rounded text-xs cursor-pointer hover:border-[#FFD400] transition-colors">2024</span>
<span className="px-3 py-1 border border-[var(--border-color)] rounded text-xs cursor-pointer hover:border-[#FFD400] transition-colors">2023</span>
</div>
</div>
</div>

<div className="mb-20">
<h3 className="text-3xl font-display text-highlight mb-8 border-b border-[var(--border-color)] pb-4 flex items-center gap-4">
                        Class of 2024 <span className="text-sm font-sans font-light opacity-50 tracking-normal transform translate-y-1">Legacy Makers</span>
</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-up">

<div className="group cursor-none-target">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)] hover:border-[#FFD400]/30 transition-all">
<img alt="Alumni" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;q=80"/>
</div>
<h5 className="text-lg font-display text-highlight group-hover:text-[#FFD400] transition-colors">David Kim</h5>
<p className="text-[10px] uppercase tracking-widest opacity-60">Ex-President</p>
</div>

<div className="group cursor-none-target">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)] hover:border-[#FFD400]/30 transition-all">
<img alt="Alumni" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&amp;q=80"/>
</div>
<h5 className="text-lg font-display text-highlight group-hover:text-[#FFD400] transition-colors">Sarah Vane</h5>
<p className="text-[10px] uppercase tracking-widest opacity-60">Ex-Secretary</p>
</div>

<div className="group cursor-none-target">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)] hover:border-[#FFD400]/30 transition-all">
<img alt="Alumni" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&amp;q=80"/>
</div>
<h5 className="text-lg font-display text-highlight group-hover:text-[#FFD400] transition-colors">Arjun Patel</h5>
<p className="text-[10px] uppercase tracking-widest opacity-60">Finance Lead</p>
</div>

<div className="group cursor-none-target">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)] hover:border-[#FFD400]/30 transition-all">
<img alt="Alumni" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;q=80"/>
</div>
<h5 className="text-lg font-display text-highlight group-hover:text-[#FFD400] transition-colors">Lina Wu</h5>
<p className="text-[10px] uppercase tracking-widest opacity-60">Marketing Head</p>
</div>
</div>
</div>

<div>
<h3 className="text-3xl font-display text-highlight mb-8 border-b border-[var(--border-color)] pb-4 flex items-center gap-4">
                        Class of 2023 <span className="text-sm font-sans font-light opacity-50 tracking-normal transform translate-y-1">Founding Members</span>
</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-up">
<div className="group cursor-none-target">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)] hover:border-[#FFD400]/30 transition-all">
<img alt="Alumni" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&amp;q=80"/>
</div>
<h5 className="text-lg font-display text-highlight group-hover:text-[#FFD400] transition-colors">Mark Doe</h5>
<p className="text-[10px] uppercase tracking-widest opacity-60">Advisor</p>
</div>
<div className="group cursor-none-target">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-[var(--border-color)] hover:border-[#FFD400]/30 transition-all">
<img alt="Alumni" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&amp;q=80"/>
</div>
<h5 className="text-lg font-display text-highlight group-hover:text-[#FFD400] transition-colors">Jane Smith</h5>
<p className="text-[10px] uppercase tracking-widest opacity-60">Director</p>
</div>
</div>
</div>
</section>
</div>

<section className="px-6 md:px-12 mt-auto border-t border-[var(--border-color)] pt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12 reveal-up relative z-20 bg-gradient-to-t from-[var(--bg-main)] to-transparent transition-colors duration-500">
<div className="max-w-md">
<h2 className="text-4xl mb-6 font-oswald font-light text-highlight">Stay ahead of the <span className="text-[#FFD400] italic font-display">curve</span>.</h2>
<div className="relative group">
<input className="bg-transparent border-b border-[var(--border-color)] py-4 w-full md:w-96 text-sm placeholder:opacity-50 focus:outline-none focus:border-[#FFD400] transition-all uppercase tracking-widest font-light text-highlight cursor-none-target" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="absolute right-0 top-4 opacity-50 group-focus-within:text-[#FFD400] group-focus-within:opacity-100 hover:text-[#FFD400] transition-colors cursor-none-target">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="text-right flex flex-col items-end gap-6">
<div className="flex gap-6 opacity-60">
<a className="hover:text-[#FFD400] hover:-translate-y-1 transition-all duration-300 cursor-none-target magnetic-wrap text-highlight" href="#"><iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon></a>
<a className="hover:text-[#FFD400] hover:-translate-y-1 transition-all duration-300 cursor-none-target magnetic-wrap text-highlight" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
<a className="hover:text-[#FFD400] hover:-translate-y-1 transition-all duration-300 cursor-none-target magnetic-wrap text-highlight" href="#"><iconify-icon icon="brandico:linkedin" width="20"></iconify-icon></a>
</div>
<p className="opacity-50 text-[10px] font-mono uppercase tracking-widest">© 2024 Nexus Organization. All Rights Reserved.</p>
</div>
</section>
</main>


    </>
  );
}
