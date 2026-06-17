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



        lucide.createIcons();

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Hero Animation Logic
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroWrapper = document.getElementById('hero-wrapper');
            const hero = document.getElementById('hero');

            if (scrollY > 10) {
                heroWrapper.classList.remove('p-2', 'md:p-4');
                heroWrapper.classList.add('p-0');
                hero.classList.remove('rounded-[2rem]', 'md:rounded-[3rem]', 'border', 'shadow-2xl');
                hero.classList.add('rounded-none', 'border-0', 'shadow-none');
            } else {
                heroWrapper.classList.add('p-2', 'md:p-4');
                heroWrapper.classList.remove('p-0');
                hero.classList.add('rounded-[2rem]', 'md:rounded-[3rem]', 'border', 'shadow-2xl');
                hero.classList.remove('rounded-none', 'border-0', 'shadow-none');
            }
        });

        // Text Highlighter Logic
        const textElement = document.getElementById('scrolling-text');
        
        function setupHighlighter() {
            if(textElement.querySelectorAll('.highlight-word').length === 0) {
                const textContent = textElement.innerText;
                textElement.innerHTML = '';
                textContent.split(' ').forEach(word => {
                    const span = document.createElement('span');
                    span.textContent = word + ' ';
                    span.classList.add('highlight-word', 'text-zinc-800'); 
                    textElement.appendChild(span);
                });
            }
        }
        setupHighlighter();

        function highlightTextOnScroll() {
            const triggerPoint = window.innerHeight * 0.7; 
            const currentSpans = textElement.querySelectorAll('.highlight-word');
            
            currentSpans.forEach((span) => {
                const rect = span.getBoundingClientRect();
                if (rect.top < triggerPoint) {
                    span.classList.remove('text-zinc-800');
                    span.classList.add('text-white');
                } else {
                    span.classList.add('text-zinc-800');
                    span.classList.remove('text-white');
                }
            });
        }
        
        // Reveal Elements on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
        });

        // Journey Timeline Animation Logic
        const journeyTimeline = document.getElementById('journey-timeline');
        const journeyLine = document.getElementById('journey-line');
        const timelineItems = document.querySelectorAll('.timeline-item');

        function animateJourneyLine() {
            if (!journeyTimeline) return;

            const rect = journeyTimeline.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Start filling when the top of the timeline is near the middle/bottom of the screen
            const startOffset = viewportHeight * 0.7;
            
            // Calculate how far we've scrolled past the top of the timeline
            let progress = startOffset - rect.top;
            const totalHeight = rect.height;

            if (progress < 0) progress = 0;
            if (progress > totalHeight) progress = totalHeight;

            journeyLine.style.height = `${progress}px`;

            timelineItems.forEach((item) => {
                const dot = item.querySelector('.timeline-dot');
                const itemTop = item.offsetTop;
                // Activate dot when the line reaches it
                if (progress >= itemTop) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Attach listeners for all scroll-based interactions
        window.addEventListener('scroll', () => {
            highlightTextOnScroll();
            animateJourneyLine();
        });
        window.addEventListener('resize', () => {
            highlightTextOnScroll();
            animateJourneyLine();
        });
        
        // Initial check
        highlightTextOnScroll(); 
        animateJourneyLine();

    
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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-zinc-950">
<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 reveal-element active">
<div className="max-w-4xl mx-auto backdrop-blur-xl bg-zinc-900/60 border border-white/5 rounded-full px-6 py-3 shadow-2xl relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm text-white/90 tracking-tight font-medium font-jakarta" contenteditable="true">Rudra Pratap Singh</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
<li className=""><a className="transition-colors duration-300 rounded-full px-4 py-2 hover:text-white hover:bg-white/5 font-medium font-jakarta" href="#about">About</a></li>
<li><a className="transition-colors duration-300 rounded-full px-4 py-2 hover:text-white hover:bg-white/5 font-medium font-jakarta" href="#work">Work</a></li>
<li><a className="transition-colors duration-300 rounded-full px-4 py-2 hover:text-white hover:bg-white/5 font-medium font-jakarta" href="#experience">Experience</a></li>
<li><a className="transition-colors duration-300 rounded-full px-4 py-2 hover:text-white hover:bg-white/5 font-medium font-jakarta" href="#contact">Contact</a></li>
</ul>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 text-xs text-white border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-all font-medium font-jakarta" href="#">
                        Resume
                        <svg className="lucide lucide-arrow-down-to-line w-3 h-3" data-lucide="arrow-down-to-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V3"></path><path d="m6 11 6 6 6-6"></path><path d="M19 21H5"></path></svg>
</a>
<button className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors" id="menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden absolute top-full left-0 right-0 mt-4 p-4 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl flex-col gap-2 text-center transform origin-top transition-all duration-300" id="mobile-menu">
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#about">About</a>
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#work">Work</a>
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#experience">Experience</a>
<a className="block py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<div className="transition-all duration-700" id="hero-wrapper">
<section className="hero-container relative min-h-[95vh] w-full bg-zinc-900 overflow-hidden flex flex-col items-center justify-center border-white/5" id="hero">
<div className="absolute inset-0 w-full h-full overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
<div className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-center opacity-40 mix-blend-screen bg-[url(https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?w=3840&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="text-center max-w-5xl z-10 mt-0 pt-16 pr-6 pl-6 relative reveal-element active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase tracking-wider font-medium text-zinc-300 mb-10 backdrop-blur-sm font-jakarta">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-medium" contenteditable="true">Available for new projects</span>
</div>
<h1 className="leading-[1.1] sm:text-6xl md:text-7xl lg:text-7xl text-4xl font-normal text-white tracking-tight font-google-sans-flex text-center max-w-4xl mr-auto mb-12 ml-auto" contenteditable="true" spellcheck="false">
                    I'm Rudra, <span className="xl:text-gray-50 font-normal font-google-sans-flex">designing</span>
<span className="inline-block align-middle mx-1 relative group" contenteditable="false">
<img alt="UI Component" className="sm:h-14 sm:w-24 md:h-16 md:w-28 group-hover:scale-105 transition duration-500 w-16 h-10 object-cover border-white/10 border rounded-full" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?w=320&amp;q=80"/>
</span>
                    future-ready 
                    <span className="inline-block align-middle mx-1 relative group" contenteditable="false">
<img alt="Abstract Art" className="sm:h-14 sm:w-14 md:h-16 md:w-16 group-hover:scale-105 transition duration-500 w-10 h-10 object-cover border-white/10 border rounded-[1rem] rotate-3" src="https://images.unsplash.com/photo-1678690832311-bb6e361989ca?w=320&amp;q=80"/>
</span>
                    digital <br className="hidden md:block"/> products.
                </h1>
<div className="flex mt-16 pb-12 items-center justify-center">
<a className="cta-button" href="#work">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">
                            View Selected Work
                            <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-indigo-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none w-full"></div>
<div className="absolute bottom-8 animate-bounce text-zinc-500">
<svg className="lucide lucide-mouse w-6 h-6" data-lucide="mouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="7" width="14" x="5" y="2"></rect><path d="M12 6v4"></path></svg>
</div>
</section>
</div>

<main className="max-w-7xl mx-auto px-6 md:px-10 relative z-20">

<section className="py-32 md:py-40 border-b border-white/5 reveal-element" id="about">
<div className="flex flex-col gap-16">
<h2 className="text-4xl font-normal text-slate-50 tracking-tight" contenteditable="true">About</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 gap-x-16 gap-y-16 items-center">
<div className="w-full">
<p className="text-3xl md:text-5xl leading-[1.3] font-google-sans-flex font-normal tracking-tight text-zinc-800" contenteditable="true" id="scrolling-text" spellcheck="false"><span className="highlight-word">I </span><span className="highlight-word">craft </span><span className="highlight-word">digital </span><span className="highlight-word">experiences </span><span className="highlight-word">that </span><span className="highlight-word">merge </span><span className="highlight-word">functionality </span><span className="highlight-word">with </span><span className="highlight-word">aesthetics. </span><span className="highlight-word">Driven </span><span className="highlight-word">by </span><span className="highlight-word">user-centric </span><span className="highlight-word">principles, </span><span className="highlight-word">I </span><span className="highlight-word">focus </span><span className="highlight-word">on </span><span className="highlight-word">creating </span><span className="highlight-word">intuitive </span><span className="highlight-word">interfaces </span><span className="highlight-word">that </span><span className="highlight-word">solve </span><span className="highlight-word">complex </span><span className="highlight-word">problems. </span><span className="highlight-word">From </span><span className="highlight-word">ideation </span><span className="highlight-word">to </span><span className="highlight-word">the </span><span className="highlight-word">final </span><span className="highlight-word">pixel, </span><span className="highlight-word">my </span><span className="highlight-word">goal </span><span className="highlight-word">is </span><span className="highlight-word">to </span><span className="highlight-word">build </span><span className="highlight-word">products </span><span className="highlight-word">that </span><span className="highlight-word">feel </span><span className="highlight-word">natural, </span><span className="highlight-word">responsive, </span><span className="highlight-word">and </span><span className="highlight-word">delightful </span><span className="highlight-word">to </span><span className="highlight-word">use. </span></p>
</div>
<div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900 animate-pulse"></div>
<img alt="Portrait" className="group-hover:scale-105 transition-transform duration-700 ease-out object-auto w-full h-full object-cover z-10 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44efd7bf-3c6f-449f-82d9-230499000886_3840w.png?w=800&amp;q=80"/>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl z-20">
<div className="flex items-center justify-between">
<span className="text-xs text-white/80 font-semibold">Vision</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">2025</span>
</div>
<p className="text-sm text-zinc-400 mt-1 font-medium">Exploring the intersection of humanity and technology.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-40 border-white/5 border-b pt-32 pb-32" id="work">
<div className="flex items-end justify-between mb-20 reveal-element">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-google-sans-flex font-normal" contenteditable="true">Featured Mobile Work</h2>
<p className="text-zinc-500 mt-3 font-medium font-jakarta" contenteditable="true">Crafted for iOS &amp; Android</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group font-jakarta" href="#">
<span className="font-medium" contenteditable="true">View Archive</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

<div className="group flex flex-col gap-8 reveal-element cursor-pointer">
<div className="relative w-full aspect-[16/12] bg-[#2DCD7A] rounded-[2rem] overflow-hidden flex justify-center items-end transition-transform duration-500 ease-out group-hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(45,205,122,0.3)]">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none mix-blend-overlay"></div>

<div className="relative w-[260px] h-[540px] bg-zinc-950 rounded-[3rem] border-[10px] border-zinc-950 shadow-2xl translate-y-16 transform transition-transform duration-500 group-hover:translate-y-12">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800">
<img alt="App Screen" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800/50"></div>
</div>
</div>

<div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-4 mb-3">
<h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-[#2DCD7A] transition-colors font-jakarta" contenteditable="true">Booking Flow</h3>
<span className="px-3 py-1 rounded-full border border-zinc-800 text-[10px] tracking-wide uppercase text-zinc-400 bg-zinc-900/50 font-medium" contenteditable="true">Case Study</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md font-medium font-jakarta" contenteditable="true">
                            Redesigned the car rental booking flow integrated into Viva Aerobus airline website. Cut clicks in half.
                        </p>
<div className="mt-4 text-xs text-zinc-200 tracking-wide uppercase font-semibold font-jakarta" contenteditable="true">VIVA · 2025</div>
</div>
</div>

<div className="group flex flex-col gap-8 reveal-element delay-100 cursor-pointer">
<div className="relative w-full aspect-[16/12] bg-[#E88D98] rounded-[2rem] overflow-hidden flex justify-center items-end transition-transform duration-500 ease-out group-hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(232,141,152,0.3)]">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none mix-blend-overlay"></div>

<div className="relative w-[260px] h-[540px] bg-zinc-950 rounded-[3rem] border-[10px] border-zinc-950 shadow-2xl translate-y-16 transform transition-transform duration-500 group-hover:translate-y-12">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800">
<img alt="App Screen" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800/50"></div>
</div>
</div>

<div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-4 mb-3">
<h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-[#E88D98] transition-colors font-jakarta" contenteditable="true">Activity Tracking</h3>
<span className="px-3 py-1 rounded-full border border-zinc-800 text-[10px] tracking-wide uppercase text-zinc-400 bg-zinc-900/50 font-medium" contenteditable="true">Case Study</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md font-medium font-jakarta" contenteditable="true">
                            A comprehensive overhaul of the activity tracking dashboard. Introducing social features and real-time biometric data.
                        </p>
<div className="mt-4 text-xs text-zinc-200 tracking-wide uppercase font-semibold font-jakarta" contenteditable="true">PULSE · 2024</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 reveal-element border-white/5 border-t pt-24 pb-24">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-google-sans-flex font-normal" contenteditable="true">Web Interfaces</h2>
<p className="text-zinc-500 mt-3 font-medium font-jakarta" contenteditable="true">SaaS Dashboards &amp; Landing Pages</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
<div className="group flex flex-col gap-8 reveal-element cursor-pointer">
<div className="relative w-full aspect-[16/10] bg-[#6366F1] rounded-[2rem] overflow-hidden pt-12 pl-10 pr-10 flex items-end justify-center transition-transform duration-500 ease-out group-hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)]">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

<div className="relative w-full h-[90%] bg-zinc-950 rounded-t-xl shadow-2xl overflow-hidden border border-white/10 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">

<div className="h-9 bg-zinc-900/90 backdrop-blur border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] border border-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] border border-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28c840] border border-black/10"></div>
</div>
<div className="ml-4 h-5 flex-1 max-w-[60%] bg-zinc-800/50 rounded flex items-center px-2">
<div className="w-2 h-2 rounded-full bg-zinc-600 mr-2"></div>
<div className="h-1.5 w-16 bg-zinc-700/50 rounded-full"></div>
</div>
</div>
<img alt="Web Screen" className="opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 pointer-events-none shadow-[inset_0_-20px_60px_-20px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-4 mb-3">
<h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-[#6366F1] transition-colors font-jakarta" contenteditable="true">Analytix Platform</h3>
<span className="px-3 py-1 rounded-full border border-zinc-800 text-[10px] tracking-wide uppercase text-zinc-400 bg-zinc-900/50 font-medium" contenteditable="true">SaaS</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md font-medium font-jakarta" contenteditable="true">
                            A B2B SaaS data visualization tool allowing enterprise clients to track real-time metrics with custom widgets.
                        </p>
<div className="mt-4 text-xs text-zinc-200 tracking-wide uppercase font-semibold font-jakarta" contenteditable="true">ANALYTIX · 2024</div>
</div>
</div>
<div className="group flex flex-col gap-8 reveal-element delay-100 cursor-pointer">
<div className="relative w-full aspect-[16/10] bg-[#22D3EE] rounded-[2rem] overflow-hidden pt-12 pl-10 pr-10 flex items-end justify-center transition-transform duration-500 ease-out group-hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.3)]">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

<div className="relative w-full h-[90%] bg-zinc-950 rounded-t-xl shadow-2xl overflow-hidden border border-white/10 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">

<div className="h-9 bg-zinc-900/90 backdrop-blur border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] border border-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] border border-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28c840] border border-black/10"></div>
</div>
<div className="ml-4 h-5 flex-1 max-w-[60%] bg-zinc-800/50 rounded flex items-center px-2">
<div className="w-2 h-2 rounded-full bg-zinc-600 mr-2"></div>
<div className="h-1.5 w-16 bg-zinc-700/50 rounded-full"></div>
</div>
</div>
<img alt="Web Screen" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 pointer-events-none shadow-[inset_0_-20px_60px_-20px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-4 mb-3">
<h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-[#22D3EE] transition-colors font-jakarta" contenteditable="true">Nexus CRM</h3>
<span className="px-3 py-1 rounded-full border border-zinc-800 text-[10px] tracking-wide uppercase text-zinc-400 bg-zinc-900/50 font-medium" contenteditable="true">CRM</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md font-medium font-jakarta" contenteditable="true">
                            Customer relationship management dashboard focused on speed and keyboard accessibility for power users.
                        </p>
<div className="mt-4 text-xs text-zinc-200 tracking-wide uppercase font-semibold font-jakarta" contenteditable="true">NEXUS · 2024</div>
</div>
</div>
</div>
</section>

<section className="md:pt-20 border-white/5 border-t pt-32 pb-32 reveal-element" id="experience">
<h2 className="text-3xl md:text-4xl tracking-tight text-white mb-20 text-center md:text-left font-google-sans-flex font-normal" contenteditable="true">Journey</h2>
<div className="md:ml-6 ml-4 relative space-y-16" id="journey-timeline">
<div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-zinc-800 rounded-full"></div>
<div className="absolute left-[3px] top-0 w-[2px] bg-gradient-to-b from-emerald-500 via-indigo-500 to-purple-500 h-0 transition-all duration-100 ease-out shadow-[0_0_15px_rgba(16,185,129,0.8)] rounded-full z-10" id="journey-line" style={{height: '301.123px'}}>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-white blur-[4px]"></div>
</div>
<div className="relative pl-10 md:pl-12 group timeline-item reveal-element">
<span className="timeline-dot absolute -left-[2px] top-2.5 h-3 w-3 rounded-full bg-zinc-950 border-2 border-zinc-700 z-20 active"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
<h3 className="group-hover:text-emerald-400 transition-colors text-xl font-semibold text-white font-jakarta" contenteditable="true">Senior Product Designer</h3>
<span className="text-sm text-zinc-500 font-medium font-jakarta" contenteditable="true">2023 — Present</span>
</div>
<p className="text-base text-zinc-400 mt-1 font-medium font-jakarta" contenteditable="true">Stripe Inc.</p>
<p className="leading-relaxed text-sm font-medium text-zinc-500 font-jakarta max-w-2xl mt-4" contenteditable="true" spellcheck="false">
                        Leading the design system team, improving component accessibility, and overseeing the checkout flow redesign which increased conversion by 12%.
                    </p>
</div>
<div className="relative pl-10 md:pl-12 group timeline-item reveal-element delay-100">
<span className="timeline-dot absolute -left-[2px] top-2.5 h-3 w-3 rounded-full bg-zinc-950 border-2 border-zinc-700 z-20"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
<h3 className="text-xl text-zinc-200 group-hover:text-indigo-400 transition-colors font-semibold font-jakarta" contenteditable="true">UI/UX Designer</h3>
<span className="text-sm text-zinc-500 font-medium font-jakarta" contenteditable="true">2021 — 2023</span>
</div>
<p className="text-base font-medium text-zinc-400 font-jakarta mt-1" contenteditable="true">Linear</p>
<p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-2xl font-medium font-jakarta" contenteditable="true">
                        Contributed to the mobile app interface, focusing on gesture-based interactions and dark mode optimization for power users.
                    </p>
</div>
<div className="relative pl-10 md:pl-12 group timeline-item reveal-element delay-200">
<span className="timeline-dot absolute -left-[2px] top-2.5 h-3 w-3 rounded-full bg-zinc-950 border-2 border-zinc-700 z-20"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
<h3 className="text-xl text-zinc-200 group-hover:text-purple-400 transition-colors font-semibold font-jakarta" contenteditable="true">Freelance Designer</h3>
<span className="text-sm text-zinc-500 font-medium font-jakarta" contenteditable="true">2025</span>
</div>
<p className="text-base text-zinc-400 mt-1 font-medium font-jakarta" contenteditable="true">Self-Employed</p>
<p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-2xl font-medium font-jakarta" contenteditable="true">
                        Partnered with early-stage startups to define their visual identity and ship MVP products across fintech and healthcare sectors.
                    </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 relative overflow-hidden" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-b from-white/5 to-transparent opacity-50 blur-3xl pointer-events-none"></div>
<div className="reveal-element md:pt-40 md:px-10 md:pb-24 max-w-7xl mx-auto pt-32 px-6 pb-20 relative">
<div className="flex items-center justify-center gap-4 text-zinc-500 text-xs tracking-widest uppercase">
<span className="h-px w-8 bg-zinc-800"></span>
<span className="font-semibold font-jakarta" contenteditable="true">Let's create together</span>
<span className="h-px w-8 bg-zinc-800"></span>
</div>
<h2 className="text-5xl md:text-7xl text-white tracking-tighter text-center mt-8 mb-6 font-google-sans-flex font-normal" contenteditable="true">
              Ready to Start Your <br className="hidden md:block"/> <span className="text-zinc-600 font-google-sans-flex font-normal">Next Project?</span>
</h2>
<p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto text-center leading-relaxed font-medium font-jakarta" contenteditable="true">
              Let's discuss your vision and create something extraordinary together. Whether it's a full product overhaul or a new feature.
            </p>

<div className="flex items-center justify-center mt-16">
<a className="cta-button" href="mailto:hello@rudra.design">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">
                        hello@rudra.design
                        <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
<div className="flex gap-8 text-zinc-400 mt-20 items-center justify-center">

<a aria-label="Behance" className="hover:text-white transition-colors duration-300" href="#">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 11h7.5"></path><path d="M15.5 15.5c2.378-1.583 2.15-4.5.385-5.5-1.996-1.13-4.385 0-4.385 3 0 2 2.389 4 4.385 2.5"></path><path d="M12.5 11c2.096-1.29 1.487-4-1.2-4.5-2.097-.39-4.3 1-4.3 4.5v5"></path><path d="M2 19h20"></path><path d="M2 5h20"></path></svg>
</a>

<a aria-label="Linkedin" className="hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/rudra-pratap-singh-17722b231/">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>

<a aria-label="Instagram" className="hover:text-white transition-colors duration-300" href="https://www.instagram.com/rudraaaaahhh/">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
<div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
<p className="font-medium font-jakarta">© 2025 Rudra Pratap Singh. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition font-medium font-jakarta" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition font-medium font-jakarta" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
