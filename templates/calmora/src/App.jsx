import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lenis for Smooth Scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        // Get scroll value for GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Navbar blur strength increase on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.remove('shadow-sm');
            } else {
                nav.classList.add('shadow-sm');
                nav.classList.remove('shadow-md');
            }
        });

        // Text Reveal Functionality
        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(element => {
            const text = element.textContent.trim();
            const words = text.split(' ');
            element.textContent = '';

            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.classList.add('word-wrapper');
                const inner = document.createElement('span');
                inner.classList.add('word-inner');
                inner.textContent = word + '\u00A0';
                wrapper.appendChild(inner);
                element.appendChild(wrapper);
            });

            const innerWords = element.querySelectorAll('.word-inner');
            gsap.to(innerWords, {
                y: 0,
                duration: 1,
                stagger: 0.03,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%"
                }
            });
        });

        // Section Reveal Animations
        gsap.utils.toArray('section').forEach(section => {
            gsap.fromTo(section,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Slider Logic
        const container = document.getElementById('testimonial-container');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if(container && nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: container.clientWidth * 0.6, behavior: 'smooth' });
            });
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -(container.clientWidth * 0.6), behavior: 'smooth' });
            });
        }
      // Auto-scroll testimonials
        if(container) {
            setInterval(() => {
                const maxScroll = container.scrollWidth - container.clientWidth;
                if (container.scrollLeft >= maxScroll - 5) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: container.clientWidth * 0.6, behavior: 'smooth' });
                }
            }, 6000);
        }
    


      (function(){const openBtn=document.getElementById('mobile-menu-open');const closeBtn=document.getElementById('mobile-menu-close');const menu=document.getElementById('mobile-menu');if(openBtn&&closeBtn&&menu){const toggleMenu=(open)=>{menu.classList.toggle('translate-x-full',!open);document.body.style.overflow=open?'hidden':'';};openBtn.addEventListener('click',()=>toggleMenu(true));closeBtn.addEventListener('click',()=>toggleMenu(false));menu.querySelectorAll('a, button:not(#mobile-menu-close)').forEach(el=>{el.addEventListener('click',()=>toggleMenu(false));});}})();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none px-4 sm:px-8 md:px-24 lg:px-40 py-4 sm:py-6">

<nav className="pointer-events-auto w-full max-w-[1200px] bg-white/90 backdrop-blur-xl border border-white/40 rounded-full px-5 py-3 flex justify-between items-center transition-all duration-300 relative" id="navbar">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="text-lg font-semibold tracking-tight text-[#2B1F7E]">
            Calmora
          </span>
</div>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="hover:text-[#2B1F7E] transition text-sm font-medium text-[#1F1F2E]/60" href="#">
            How it Works
          </a>
<a className="hover:text-[#4865FF] transition text-sm font-medium text-[#1B1463]/70" href="#">
            Services
          </a>
<a className="hover:text-[#4865FF] transition text-sm font-medium text-[#1B1463]/70" href="#">
            About
          </a>
<a className="hover:text-[#4865FF] transition text-sm font-medium text-[#1B1463]/70" href="#">
            Resources
          </a>
</div>

<div className="flex items-center gap-6">
<button aria-label="Open Menu" className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#2B1F7E] hover:bg-stone-100/50 transition-colors" id="mobile-menu-open">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="hidden md:block text-sm font-medium hover:text-[#2B1F7E] transition text-[#1F1F2E]" href="#">
            Login
          </a>
<button className="group relative pointer-events-auto hover:-translate-y-0.5 transition-transform duration-300 hidden md:block">
<div className="blur-[1px] opacity-20 rounded-full absolute inset-0 translate-y-1 blur-md bg-[#C7F36B]"></div>
<div className="flex gap-4 active:translate-y-[1px] transition-all text-[#2B1F7E] bg-gradient-to-r from-[#C7F36B] to-[#D5F58D] rounded-full pt-1.5 pr-1.5 pb-1.5 pl-6 relative shadow-[0_4px_12px_rgba(199,243,107,0.15)] group-hover:shadow-[0_6px_16px_rgba(199,243,107,0.25)] items-center">
<span className="text-sm font-semibold">Get Matched</span>
<div className="group-hover:scale-110 group-hover:-rotate-45 transition-transform duration-500 flex bg-white rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-sm items-center justify-center">
<iconify-icon className="text-[#2B1F7E]" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</button>
</div>
</nav>
</div>

<header className="min-h-screen flex flex-col overflow-hidden px-4 sm:px-8 md:px-24 lg:px-40 w-full pt-24 sm:pt-32 pb-12 relative" id="hero-section">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[120px] opacity-60 mix-blend-multiply bg-[#E9E6F6]"></div>
<div className="absolute inset-0 bg-grain opacity-40"></div>
</div>
<div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col items-start max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#C7F36B]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7F36B]"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-wide text-[#2B1F7E]">
                Online Therapy &amp; Care
              </span>
</div>
<h1 className="tracking-tight leading-[1.1] text-[#2B1F7E] mb-8 sm:mb-10 font-semibold text-4xl sm:text-5xl md:text-7xl">
<span className="reveal-text block">
<span className="word-wrapper">
<span className="word-inner">
                    Find clarity with 
                  </span>
</span>
</span>
<span className="reveal-text block">
<span className="word-wrapper">
<span className="word-inner">expert support. </span>
</span>
</span>
</h1>
<p className="text-lg md:text-xl leading-loose max-w-lg mb-12 font-medium text-[#2B1F7E]/80">
              Experience a new standard of mental healthcare. Connect with
              licensed therapists who understand your needs and help you grow.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="group relative w-full sm:w-auto hover:-translate-y-0.5 transition-transform duration-300">
<div className="flex gap-8 active:translate-y-[1px] transition-all text-[#2B1F7E] bg-gradient-to-r from-[#C7F36B] to-[#D5F58D] rounded-full pt-2 pr-2 pb-2 pl-8 relative shadow-[0_4px_12px_rgba(199,243,107,0.15)] group-hover:shadow-[0_6px_16px_rgba(199,243,107,0.25)] items-center justify-between sm:justify-start">
<span className="text-sm font-semibold">
                    Match with a Therapist
                  </span>
<div className="bg-white rounded-full p-2 shadow-sm group-hover:scale-110 group-hover:-rotate-45 transition-transform duration-500 flex items-center justify-center">
<iconify-icon className="text-[#2B1F7E]" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border bg-white transition-all text-[#2B1F7E] border-[#2B1F7E]/10 hover:border-[#2B1F7E]/30 hover:bg-[#F6F7FB] hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
<span className="text-sm font-medium">How it Works</span>
</button>
</div>
<div className="inline-flex w-max border-[#E7E9EE] border rounded-full mt-8 pt-1.5 pr-5 pb-1.5 pl-1.5 gap-x-3 gap-y-3 items-center">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80')] bg-cover"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80')] bg-cover"></div>
</div>
<span className="text-sm font-semibold text-[#2B1F7E]">
                500+ Trusted Patients
              </span>
</div>
</div>

<div className="flex flex-col gap-8 w-full relative gap-x-8 gap-y-8">

<div className="relative h-[320px] sm:h-[400px] md:h-[480px] w-full bg-stone-200 rounded-[32px] overflow-hidden group shadow-[0_24px_48px_rgba(0,0,0,0.08)]">

<img alt="Professional mental health doctor" className="transition duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1738566495571-80dd493b5f62?w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-xl p-4 pr-8 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-white animate-float w-auto md:min-w-[260px]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#4865FF]/10 flex items-center justify-center text-[#4865FF]">
<iconify-icon className="" icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-xs font-semibold uppercase text-stone-400 tracking-wider mb-0.5">
                      Next Session
                    </p>
<p className="text-sm font-semibold text-[#1F1F2E]">
                      Tomorrow, 2:00 PM
                    </p>
<p className="text-xs text-stone-500">with Dr. Sarah Jenks</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

<div className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] hover:border-[#2B1F7E]/10 bg-white/90 h-32 border-white border rounded-[24px] p-5 shadow-[0_12px_24px_rgba(0,0,0,0.04)] backdrop-blur-md justify-between relative overflow-hidden group">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C7F36B]/20 blur-2xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60"></div>
<div className="flex justify-between items-start relative z-10">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#2B1F7E]"></div>
<span className="text-[10px] font-bold text-[#1B1463]/60 tracking-wider uppercase">
                      Anxiety Level
                    </span>
</div>
<span className="text-[11px] font-bold text-[#2B1F7E] bg-[#E9E6F6] px-2 py-0.5 rounded-md">
                    -24%
                  </span>
</div>
<div className="flex w-full h-12 mt-auto relative items-end justify-center z-10">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<defs>
<lineargradient id="anxietyGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#2B1F7E" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#2B1F7E" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 50 C 40 50, 60 20, 100 30 C 140 40, 170 15, 200 20 L 200 60 L 0 60 Z" fill="url(#anxietyGradient)"></path>
<path d="M0 50 C 40 50, 60 20, 100 30 C 140 40, 170 15, 200 20" fill="none" stroke="#2B1F7E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="absolute w-2 h-2 rounded-full bg-white border-2 border-[#2B1F7E] shadow-sm" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute w-2 h-2 rounded-full bg-[#2B1F7E] shadow-[0_2px_4px_rgba(43,31,126,0.3)] ring-2 ring-white" style={{left: '100%', top: '33.3%', transform: 'translate(-50%, -50%)'}}></div>
</div>
</div>

<div className="flex flex-col overflow-hidden group bg-gradient-to-br from-[#2B1F7E] to-[#3B2B9E] h-32 rounded-[24px] p-5 relative shadow-[0_12px_24px_rgba(43,31,126,0.15)] justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,31,126,0.2)]">
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C7F36B]/20 blur-2xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="absolute top-1/2 -translate-y-1/2 -right-4 opacity-[0.04] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
<iconify-icon className="text-white" icon="solar:heart-pulse-bold" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<span className="uppercase text-[10px] font-bold text-[#A7D7C5] tracking-wider">
                    Wellness Score
                  </span>
</div>
<div className="relative z-10 flex items-baseline gap-1.5 mt-auto mb-3">
<span className="text-5xl font-semibold text-white tracking-tighter leading-none">
                    92
                  </span>
<span className="text-xs font-medium text-white/50 tracking-wide">
                    / 100
                  </span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full relative z-10 overflow-hidden backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
<div className="h-full rounded-full w-[92%] bg-gradient-to-r from-[#A7D7C5] to-[#C7F36B] shadow-[0_0_8px_rgba(199,243,107,0.5)] relative overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-6 bg-white/40 blur-[2px] rounded-full translate-x-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="overflow-hidden border-y bg-transparent w-full border-[#E7E9EE]/60 pt-16 pb-16 relative">
<style>
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      </style>
<div className="max-w-[1600px] mx-auto mb-6 sm:mb-10 text-center px-4 sm:px-8 md:px-24 lg:px-40">
<p className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest">
          Trusted by leading organizations
        </p>
</div>
<div className="relative w-full overflow-hidden flex">

<div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-[#F5F6F8] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-[#F5F6F8] to-transparent z-10 pointer-events-none"></div>

<div className="flex w-max items-center" style={{animation: 'ticker-scroll 40s linear infinite'}}>

<div className="flex gap-4 md:gap-6 md:pr-6 shrink-0 pr-4 gap-x-4 gap-y-4 items-center">
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" height="28" icon="simple-icons:1panel" style={{color: 'rgb(168, 162, 158)'}} width="28"></iconify-icon>
</div>
<div className="md:w-[180px] md:h-[80px] flex shrink-0 bg-white/20 w-[140px] h-[64px] border-[#E7E9EE] border rounded-2xl items-center justify-center">
<iconify-icon className="text-stone-400" icon="simple-icons:calm" width="64"></iconify-icon>
<iconify-icon className="text-stone-400" height="28" icon="simple-icons:1and1" style={{color: 'rgb(168, 162, 158)'}} width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:notion" width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:spotify" width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:slack" width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:zoom" width="56"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" height="28" icon="simple-icons:abbott" style={{color: 'rgb(168, 162, 158)'}} width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:calm" width="64"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:notion" width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:spotify" width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:slack" width="28"></iconify-icon>
</div>
<div className="w-[140px] h-[64px] md:w-[180px] md:h-[80px] flex items-center justify-center border border-[#E7E9EE] rounded-2xl shrink-0 bg-white/20">
<iconify-icon className="text-stone-400" icon="simple-icons:zoom" width="56"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<section className="px-4 sm:px-8 md:px-24 lg:px-40 bg-gradient-to-b from-[#E9E6F6] to-[#F3F1FA] max-w-[1600px] rounded-[32px] sm:rounded-[40px] mx-auto py-16 sm:py-16 md:py-24 lg:py-32 shadow-[inset_0_2px_20px_rgba(255,255,255,0.5)]">
<style>
        @keyframes softRotate {
          0%, 25% { opacity: 1; transform: translateY(0); visibility: visible; }
          30%, 90% { opacity: 0; transform: translateY(-15px); visibility: hidden; }
          95% { opacity: 0; transform: translateY(15px); visibility: hidden; }
          100% { opacity: 1; transform: translateY(0); visibility: visible; }
        }
        .slide-1 { animation: softRotate 12s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .slide-2 { animation: softRotate 12s cubic-bezier(0.4, 0, 0.2, 1) infinite; animation-delay: 4s; opacity: 0; }
        .slide-3 { animation: softRotate 12s cubic-bezier(0.4, 0, 0.2, 1) infinite; animation-delay: 8s; opacity: 0; }
      </style>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32">
<span className="text-xs font-semibold text-[#2B1F7E] uppercase tracking-widest mb-5 block">
            Our Approach
          </span>
<h2 className="text-4xl md:text-5xl leading-[1.1] text-[#2B1F7E] tracking-tight mb-8 font-semibold">
            Evidence-based care meets human connection.
          </h2>
<p className="text-lg mb-10 leading-relaxed font-normal text-[#2B1F7E]/70">
            We combine clinical expertise with advanced technology to deliver
            care that is proactive, not reactive. Your mental wellness journey
            is supported by data, but driven by empathy.
          </p>

<div className="flex flex-col gap-6">
<div className="flex gap-6 transition-all duration-300 hover:shadow-md hover:border-stone-300 bg-white/80 backdrop-blur-sm border-stone-200/50 border rounded-[24px] p-7 shadow-[0_4px_12px_rgba(0,0,0,0.03)] items-center hover:-translate-y-1">
<div className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center bg-[#C7F36B] text-[#2B1F7E]">
<iconify-icon icon="lucide:user-check" width="24"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-base font-semibold text-[#2B1F7E]">
                  Personalized Matching
                </h4>
<p className="text-sm font-normal text-stone-500/70 leading-relaxed">
                  Find the perfect therapist for your specific needs.
                </p>
</div>
</div>
<div className="flex gap-6 transition-all duration-300 hover:shadow-md hover:border-stone-300 bg-white/80 backdrop-blur-sm border-stone-200/50 border rounded-[24px] p-7 shadow-[0_4px_12px_rgba(0,0,0,0.03)] items-center hover:-translate-y-1">
<div className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center bg-[#C7F36B] text-[#2B1F7E]">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-base font-semibold text-[#2B1F7E]">
                  Private &amp; Secure
                </h4>
<p className="text-sm font-normal text-stone-500/70 leading-relaxed">
                  HIPAA compliant, fully encrypted platform.
                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-10 sm:gap-8">

<div className="relative h-[450px] md:h-[600px] rounded-[32px] overflow-hidden group shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
<img alt="Professional therapist" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&amp;fit=crop&amp;w=2160&amp;q=80"/>
<div className="bg-gradient-to-t from-[#1A2621]/90 via-[#1A2621]/30 to-transparent absolute inset-0"></div>
<div className="flex flex-col absolute inset-0 p-6 sm:p-10 justify-end overflow-hidden">
<div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-[24px] max-w-md transform transition duration-500 hover:-translate-y-1 hover:bg-white/15">
<iconify-icon className="mb-4 text-[#C7F36B]" icon="lucide:message-square-heart" width="28"></iconify-icon>
<p className="text-white text-lg font-normal leading-relaxed">
                  "The flexibility to message my therapist whenever I'm feeling
                  anxious has been an absolute lifeline."
                </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

<div className="bg-gradient-to-br from-[#2B1F7E] to-[#3B2B9E] rounded-[32px] p-8 sm:p-10 text-white relative overflow-hidden group min-h-[300px] shadow-[0_20px_40px_rgba(43,31,126,0.15)] hover:-translate-y-1 transition-transform duration-500">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex flex-col gap-2">
<h3 className="text-6xl font-semibold tracking-tighter text-white">
                    85%
                  </h3>
<p className="uppercase text-xs font-semibold text-white/80 tracking-widest">
                    Success Rate
                  </p>
</div>
<p className="text-white/90 text-sm leading-relaxed mt-10 font-medium max-w-[240px]">
                  Reduction in anxiety and depression symptoms within 12 weeks
                  of consistent care.
                </p>
</div>
<iconify-icon className="absolute bottom-[-10%] right-[-10%] text-white/10 transition-transform duration-1000 group-hover:scale-110" icon="lucide:heart" width="240"></iconify-icon>
</div>

<div className="bg-gradient-to-br from-[#2B1F7E] to-[#1B1463] rounded-[32px] relative overflow-hidden min-h-[300px] shadow-[0_20px_40px_rgba(43,31,126,0.15)] hover:-translate-y-1 transition-transform duration-500">
<div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between slide-1 text-white bg-[#2B1F7E]">
<div className="flex flex-col gap-2">
<h3 className="text-6xl font-semibold tracking-tighter text-white">
                    24/7
                  </h3>
<p className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                    Always On
                  </p>
</div>
<p className="text-white/90 text-sm leading-relaxed font-medium mt-10 max-w-[240px]">
                  Access to mindfulness tools, crisis resources, and instant
                  care.
                </p>
</div>
<div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between slide-2 text-white bg-[#2B1F7E]">
<div className="flex flex-col gap-2">
<h3 className="text-6xl font-semibold tracking-tighter text-white">
                    1:1
                  </h3>
<p className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                    Direct Support
                  </p>
</div>
<p className="text-white/90 text-sm leading-relaxed font-medium mt-10 max-w-[240px]">
                  Connect with your care team anytime, anywhere, at your own
                  pace.
                </p>
</div>
<div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between slide-3 text-white bg-[#2B1F7E]">
<div className="flex flex-col gap-2">
<h3 className="text-6xl font-semibold tracking-tighter text-white">
                    365
                  </h3>
<p className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                    Daily Care
                  </p>
</div>
<p className="text-white/90 text-sm leading-relaxed font-medium mt-10 max-w-[240px]">
                  Personalized daily exercises and check-ins to build lasting
                  resilience.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 lg:py-32 border-y border-black/5 bg-[#FAFAFC]">
<div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-24 lg:px-40">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold uppercase tracking-widest mb-4 block text-[#2B1F7E]">
            Our Services
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-[#2B1F7E] font-semibold">
            Complete care ecosystem.
          </h2>
<p className="text-lg text-[#2B1F7E]/70 font-normal">
            From clinical therapy to daily wellness habits, we provide the tools
            you need to thrive.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">

<div className="group p-8 rounded-[32px] bg-white border border-[#E7E9EE]/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-6 right-6 px-3 py-1 bg-[#C7F36B]/20 text-[#2B1F7E] text-[10px] font-bold uppercase tracking-wider rounded-full">
              Popular
            </div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition bg-[#C7F36B] text-[#2B1F7E]">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-[#2B1F7E]">
              Live Video Therapy
            </h3>
<p className="text-sm leading-relaxed mb-8 text-[#2B1F7E]/70 font-normal">
              Connect face-to-face with licensed providers for 50-minute
              sessions. Available evenings and weekends.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B1F7E] hover:opacity-80 transition group/link" href="#">
              Meet Therapists
              <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[32px] bg-white border border-[#E7E9EE]/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-6 right-6 px-3 py-1 bg-[#2B1F7E]/10 text-[#2B1F7E] text-[10px] font-semibold uppercase tracking-wider rounded-full">
              Insights
            </div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition bg-[#C7F36B] text-[#2B1F7E]">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-[#2B1F7E] tracking-tight">
              Mood Tracking
            </h3>
<p className="text-sm leading-relaxed mb-8 text-[#2B1F7E]/70 font-normal">
              Track emotional patterns and gain insights into your mental
              well-being with daily interactive check-ins.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B1F7E] hover:opacity-80 transition group/link" href="#">
              Start Tracking
              <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[32px] bg-white border border-[#E7E9EE]/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-6 right-6 px-3 py-1 bg-[#A7D7C5]/30 text-[#1A2621] text-[10px] font-bold uppercase tracking-wider rounded-full">
              Recommended
            </div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition bg-[#C7F36B] text-[#2B1F7E]">
<iconify-icon icon="lucide:leaf" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-[#2B1F7E]">
              Guided Mindfulness
            </h3>
<p className="text-sm leading-relaxed mb-8 text-[#2B1F7E]/70 font-normal">
              Access hundreds of guided meditations, breathwork exercises, and
              soundscapes to calm your nervous system.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B1F7E] hover:opacity-80 transition group/link" href="#">
              How it works
              <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-24 lg:px-40 max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 sm:gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative bg-gradient-to-br from-[#2B1F7E] to-[#1B1463] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden group shadow-[0_20px_40px_rgba(43,31,126,0.15)] hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 right-0 p-12 opacity-5 scale-110">
<iconify-icon className="" icon="solar:smartphone-linear" width="300"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#2B1F7E]/0 via-white/5 to-white/10 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-semibold text-[#C7F36B] uppercase tracking-wider">
                App Store #1
              </span>
<span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] animate-pulse"></span>
</div>
<h3 className="text-3xl text-white mb-4 font-semibold tracking-tight">
              Aura Daily App
            </h3>
<p className="text-white/70 max-w-xs leading-relaxed font-normal">
              Your pocket companion for relief. Includes personalized
              breathwork, daily journals, and calm soundscapes.
            </p>
</div>
<div className="relative z-10 mt-8 flex items-center gap-4">
<button className="hover:bg-white transition flex gap-2 text-sm font-semibold text-[#2B1F7E] bg-[#C7F36B] w-max rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_4px_12px_rgba(199,243,107,0.15)] hover:shadow-[0_6px_16px_rgba(199,243,107,0.25)] hover:-translate-y-0.5 gap-x-2 gap-y-2 items-center">
              Dowload App
            </button>
</div>
</div>

<div className="md:col-span-1 flex flex-col group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-[#FAFAFC] to-white border-[#E7E9EE]/50 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-[#2B1F7E]/5 rounded-2xl flex items-center justify-center text-[#2B1F7E]">
<iconify-icon icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-[#2B1F7E]/40">
              04 LESSONS
            </span>
</div>
<div className="space-y-3">
<h4 className="text-lg font-semibold text-[#2B1F7E] tracking-tight">
              Anxiety 101
            </h4>
<div className="w-full bg-[#E7E9EE] h-1.5 rounded-full overflow-hidden">
<div className="bg-[#C7F36B] h-full w-3/4"></div>
</div>
<p className="text-xs text-[#2B1F7E]/60 font-medium">75% Completed</p>
</div>
</div>

<button className="md:col-span-1 flex aspect-square transition-all duration-500 hover:bg-[#F6F7FB] hover:shadow-[0_6px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 text-sm font-semibold text-[#2B1F7E] text-center bg-white w-full max-w-lg border-[#E7E9EE]/50 border rounded-full mt-0 mr-auto mb-0 ml-auto pt-6 pr-6 pb-6 pl-6 shadow-sm items-center justify-center">
          View All
          <br/>
          Resources
        </button>

<div className="md:col-span-2 flex overflow-hidden hover:shadow-[0_16px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 group bg-gradient-to-r from-[#E9E6F6] to-[#F3F1FA] border-white border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-sm items-center justify-between">
<div className="relative z-10 w-full flex justify-between items-center">
<div className="max-w-xs">
<div className="flex gap-2 items-center mb-3">
<span className="px-2 py-0.5 bg-[#2B1F7E] text-white text-[9px] rounded-md font-semibold tracking-widest uppercase">
                  Live
                </span>
<span className="text-[11px] text-[#2B1F7E]/50 font-semibold">
                  NOW HAPPENING
                </span>
</div>
<h4 className="text-2xl mb-2 text-[#2B1F7E] font-semibold tracking-tight">
                Community Workshops
              </h4>
<p className="text-sm text-[#2B1F7E]/70 font-normal">
                Weekly group sessions on stress, sleep, and digital well-being.
              </p>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=40&amp;h=40&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=40&amp;h=40&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-[#C7F36B] flex items-center justify-center text-[10px] font-bold text-[#2B1F7E]">
                  +12
                </div>
</div>
<a className="text-xs font-semibold text-[#2B1F7E] hover:underline" href="#">
                Join Session
              </a>
</div>
</div>
<div className="absolute right-[-20px] bottom-[-20px] text-[#2B1F7E]/5"></div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 md:py-24 lg:py-32 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-24 lg:px-40 bg-transparent">
<div className="bg-[#E9E6F6] bg-opacity-60 backdrop-blur-xl border border-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-16 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-xs font-semibold uppercase tracking-widest mb-4 block text-[#2B1F7E]">
              Success Stories
            </span>
<h2 className="text-2xl sm:text-3xl md:text-5xl tracking-tight max-w-lg text-[#2B1F7E] font-semibold">
              Real progress,
              <br/>
              real people.
            </h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:text-white transition duration-300 hover:bg-[#2B1F7E] hover:border-[#2B1F7E]" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#2B1F7E] hover:text-white transition duration-300" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-8 pb-8 pt-4 px-4 -mx-4 snap-x hide-scrollbar scroll-smooth" id="testimonial-container">

<div className="min-w-[100%] md:min-w-[60%] snap-center">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
<div className="flex gap-1 text-[#C7F36B]">
<iconify-icon className="" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-2xl md:text-3xl leading-snug tracking-tight text-[#2B1F7E] font-semibold">
                "I tried traditional therapy for years but never felt a
                connection. The matching algorithm here found me the perfect
                specialist for my anxiety."
              </blockquote>
<div className="flex items-center gap-4 mt-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="">
<div className="font-semibold">Emily R.</div>
<div className="text-xs text-stone-500">Member since 2023</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[60%] snap-center">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
<div className="flex gap-1 text-[#C7F36B]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-2xl md:text-3xl leading-snug tracking-tight font-semibold text-[#2B1F7E]">
                "The combination of video sessions and the daily mood tracker
                keeps me accountable. It's comprehensive care."
              </blockquote>
<div className="flex items-center gap-4 mt-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?w=320&amp;q=80"/>
</div>
<div className="">
<div className="font-semibold text-[#1A2621]">James K.</div>
<div className="text-xs text-stone-500">Member since 2024</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[60%] snap-center">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
<div className="flex gap-1 text-[#C7F36B]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-2xl md:text-3xl leading-snug tracking-tight font-semibold text-[#2B1F7E]">
                "I love the daily journal prompts. They help me process my
                thoughts before bed, improving my sleep drastically."
              </blockquote>
<div className="flex items-center gap-4 mt-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<div className="font-semibold text-[#1A2621]">Sarah M.</div>
<div className="text-xs text-stone-500">Member since 2022</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[60%] snap-center">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
<div className="flex gap-1 text-[#C7F36B]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-2xl md:text-3xl leading-snug tracking-tight font-semibold text-[#2B1F7E]">
                "Finding a therapist who truly understands my background was
                difficult until I found Aura. Highly recommend."
              </blockquote>
<div className="flex items-center gap-4 mt-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<div className="font-semibold text-[#1A2621]">David L.</div>
<div className="text-xs text-stone-500">Member since 2023</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[60%] snap-center">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
<div className="flex gap-1 text-[#C7F36B]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-2xl md:text-3xl leading-snug tracking-tight font-semibold text-[#2B1F7E]">
                "A game changer for my mental health. The community workshops
                make me feel less alone in my struggles."
              </blockquote>
<div className="flex items-center gap-4 mt-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<div className="font-semibold text-[#1A2621]">Jessica W.</div>
<div className="text-xs text-stone-500">Member since 2024</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 md:py-24 lg:py-32 max-w-[1000px] mx-auto px-4 sm:px-8 md:px-24 lg:px-40">
<h2 className="text-center mb-10 sm:mb-16 text-[#2B1F7E] font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
        Frequently Asked Questions
      </h2>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-stone-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.04)] transition-all duration-300 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex cursor-pointer items-center justify-between font-medium text-[#2B1F7E]">
<span className="text-lg">Does Aura accept insurance?</span>
<span className="transition group-open:rotate-180 text-[#2B1F7E]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-[#2B1F7E]/70 font-normal">
            Yes, we partner with major insurance providers including Aetna,
            Cigna, and UnitedHealthcare. You can verify your coverage during the
            sign-up process.
          </p>
</details>

<details className="group bg-white rounded-2xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between font-medium">
<span className="text-lg">How are therapists vetted?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-stone-500">
            Every provider on Aura is licensed, background-checked, and required
            to have a Masters or Doctorate degree in their field. We accept less
            than 5% of applicants.
          </p>
</details>

<details className="group bg-white rounded-2xl border border-stone-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-[#1A2621] font-medium">
<span className="text-lg">
              Can I switch therapists if it's not a fit?
            </span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-stone-500">
            Absolutely. The therapeutic relationship is key. You can switch
            providers at any time directly through your dashboard with no
            questions asked.
          </p>
</details>
</div>
</section>

<section className="py-12 sm:py-16 md:py-24 lg:py-32 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-24 lg:px-40">
<div className="p-6 sm:p-8 md:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 overflow-hidden bg-gradient-to-br from-[#E9E6F6]/80 to-white border border-white/80 rounded-[32px] sm:rounded-[40px] relative items-center shadow-[0_24px_48px_rgba(0,0,0,0.04)] backdrop-blur-sm">

<div className="lg:w-1/2 flex lg:justify-start lg:pl-12 order-2 lg:order-1 w-full relative justify-center">


<div className="relative w-[300px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[6px] border-white overflow-hidden flex flex-col ring-1 ring-black/5 shadow-[0_40px_100px_rgba(43,31,126,0.15)] ring-white/50">

<div className="text-white bg-[#2B1F7E] pt-12 pr-6 pb-6 pl-6">
<div className="flex justify-between items-center mb-6 text-white/80">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
<span className="font-medium text-xs tracking-wide uppercase">
                  Schedule
                </span>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="" icon="solar:bell-linear" width="18"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight">Up next</h3>
</div>

<div className="flex-1 bg-[#F5F6F8] pt-4 pr-4 pb-4 pl-4 space-y-4">

<div className="overflow-hidden group bg-white border-stone-100 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative shadow-sm">
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-[10px] font-bold uppercase tracking-wider text-[#2B1F7E] bg-[#E9E6F6] px-2 py-1 rounded-md">
                    Tomorrow
                  </span>
<div className="w-8 h-8 rounded-full bg-[#E0E7FF]/50 flex items-center justify-center">
<iconify-icon className="text-[#2B1F7E]" icon="solar:videocamera-record-linear" width="16"></iconify-icon>
</div>
</div>
<h4 className="font-semibold text-sm mb-1 relative z-10 text-[#2B1F7E]">
                  Video Therapy
                </h4>
<p className="text-xs mb-5 relative z-10">2:00 PM - 2:50 PM</p>
<div className="flex items-center gap-3 relative z-10 pt-4 border-t border-stone-100">
<img alt="Dr. Sarah Jenks" className="w-8 h-8 rounded-full object-cover border border-stone-200" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="">
<div className="text-xs font-semibold text-[#2B1F7E]">
                      Dr. Sarah Jenks
                    </div>
<div className="text-[10px] text-stone-400">
                      Clinical Psychologist
                    </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 opacity-60">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
                    Aug 14
                  </span>
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
<iconify-icon className="text-stone-500" icon="solar:chat-line-linear" width="16"></iconify-icon>
</div>
</div>
<h4 className="font-semibold text-stone-700 text-sm mb-1">
                  Check-in
                </h4>
<p className="text-xs text-stone-500">Asynchronous Messaging</p>
</div>
</div>
</div>

<div className="absolute -right-4 md:-right-8 top-20 bg-white p-3 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 w-56 animate-float hidden sm:flex z-20">
<img alt="Therapist" className="w-10 h-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="">
<div className="text-sm font-semibold">Dr. Marcus Weil</div>
<div className="text-[10px] text-stone-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
                5.0 (120 reviews)
              </div>
</div>
</div>
</div>

<div className="flex flex-col lg:w-1/2 order-1 lg:order-2 w-full items-start">
<span className="text-xs font-semibold text-[#2B1F7E] uppercase tracking-widest mb-4 block">
            Take the next step
          </span>
<h2 className="tracking-tight text-[#2B1F7E] mb-4 sm:mb-6 font-semibold text-3xl sm:text-4xl md:text-5xl">
            Schedule calm into your day.
          </h2>
<p className="text-lg text-stone-500 mb-10 leading-relaxed font-light text-[#2B1F7E]/70 font-normal">
            Join thousands of others who have found their perfect therapist
            match. Book your first session today and start your journey toward
            better mental wellness.
          </p>
<button className="group relative w-max mb-12 hover:-translate-y-0.5 transition-transform duration-300">
<div className="flex gap-8 active:translate-y-[1px] transition-all text-[#2B1F7E] bg-gradient-to-r from-[#C7F36B] to-[#D5F58D] rounded-full pt-2 pr-2 pb-2 pl-8 relative shadow-[0_4px_12px_rgba(199,243,107,0.15)] group-hover:shadow-[0_6px_16px_rgba(199,243,107,0.25)] items-center">
<span className="text-sm font-semibold">Match With a Therapist</span>
<div className="bg-white rounded-full p-2 shadow-sm group-hover:scale-110 group-hover:-rotate-45 transition-transform duration-500 flex items-center justify-center">
<iconify-icon className="text-[#2B1F7E]" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</button>

<div className="w-full">
<p className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest mb-4 block">
              Available Providers Today
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">

<div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-white shadow-[0_8px_16px_rgba(0,0,0,0.03)] flex-1 transition-all duration-300 cursor-pointer hover:border-[#2B1F7E]/20 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1">
<img alt="Therapist" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=320&amp;q=80"/>
<div className="">
<div className="text-xs font-semibold text-[#1A2621]">
                    Dr. Elena Rostova
                  </div>
<div className="text-[10px] text-stone-500">CBT Specialist</div>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-white shadow-[0_8px_16px_rgba(0,0,0,0.03)] flex-1 transition-all duration-300 cursor-pointer hover:border-[#2B1F7E]/20 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1">
<img alt="Therapist" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="">
<div className="text-xs font-semibold text-[#1A2621]">
                    Dr. James Carter
                  </div>
<div className="text-[10px] text-stone-500">
                    Anxiety &amp; Stress
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-white pt-16 sm:pt-24 pb-8 sm:pb-12 rounded-t-[32px] sm:rounded-t-[40px] px-4 sm:px-8 md:px-24 lg:px-40 bg-[#2B1F7E]">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="" icon="solar:mind-map-bold" width="32"></iconify-icon>
<span className="text-2xl font-semibold">Aura</span>
</div>
<h2 className="tracking-tight mb-6 sm:mb-8 font-semibold text-3xl sm:text-4xl md:text-5xl">
              Start your journey to a clearer mind today.
            </h2>
<button className="group relative w-max hover:-translate-y-0.5 transition-transform duration-300">
<div className="blur-[1px] opacity-30 rounded-full absolute inset-0 translate-y-1.5 blur-md bg-[#C7F36B]"></div>
<div className="flex gap-8 active:translate-y-[1px] transition-all text-[#2B1F7E] bg-gradient-to-r from-[#C7F36B] to-[#D5F58D] rounded-full pt-2 pr-2 pb-2 pl-8 relative shadow-[0_4px_12px_rgba(199,243,107,0.15)] group-hover:shadow-[0_6px_16px_rgba(199,243,107,0.2)] items-center">
<span className="text-sm font-semibold">Get Matched Now</span>
<div className="bg-white rounded-full p-2 shadow-sm group-hover:scale-110 group-hover:-rotate-45 transition-transform duration-500 flex items-center justify-center">
<iconify-icon className="text-[#2B1F7E]" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</button>
</div>
<div className="grid grid-cols-2 sm:flex gap-8 sm:gap-16 text-sm text-stone-400">
<div className="flex flex-col gap-4">
<span className="text-white font-semibold mb-2">Platform</span>
<a className="hover:text-[#C7F36B] transition" href="#">Therapy</a>
<a className="hover:text-[#C7F36B] transition" href="#">Psychiatry</a>
<a className="hover:text-[#C7F36B] transition" href="#">Reviews</a>
<a className="hover:text-[#C7F36B] transition" href="#">
                For Business
              </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-semibold mb-2">Company</span>
<a className="hover:text-[#C7F36B] transition" href="#">About Us</a>
<a className="hover:text-[#C7F36B] transition" href="#">Careers</a>
<a className="hover:text-[#C7F36B] transition" href="#">Press</a>
<a className="hover:text-[#C7F36B] transition" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-semibold mb-2">Resources</span>
<a className="hover:text-[#C7F36B] transition" href="#">Blog</a>
<a className="hover:text-[#C7F36B] transition" href="#">
                Crisis Support
              </a>
<a className="hover:text-[#C7F36B] transition" href="#">Insurance</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<p>© 2024 Aura Health Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
<div className="flex gap-4 ml-4">
<iconify-icon className="hover:text-white cursor-pointer transition" icon="simple-icons:instagram" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition" icon="simple-icons:twitter" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition" icon="simple-icons:linkedin" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-white translate-x-full transition-transform duration-500 ease-in-out md:hidden flex flex-col" id="mobile-menu">
<div className="p-6 flex justify-between items-center border-b border-stone-100">
<span className="text-lg font-semibold tracking-tight text-[#2B1F7E]">
          Calmora
        </span>
<button className="p-2 text-[#2B1F7E] hover:bg-stone-100 rounded-full transition-colors" id="mobile-menu-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<div className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto">
<a className="text-3xl font-semibold text-[#2B1F7E] tracking-tight hover:text-[#4865FF] transition-colors" href="#">
          How it Works
        </a>
<a className="text-3xl font-semibold text-[#2B1F7E] tracking-tight hover:text-[#4865FF] transition-colors" href="#">
          Services
        </a>
<a className="text-3xl font-semibold text-[#2B1F7E] tracking-tight hover:text-[#4865FF] transition-colors" href="#">
          About
        </a>
<a className="text-3xl font-semibold text-[#2B1F7E] tracking-tight hover:text-[#4865FF] transition-colors" href="#">
          Resources
        </a>
<hr className="border-stone-100"/>
<a className="text-xl font-medium text-[#2B1F7E]/60" href="#">Login</a>
</div>
<div className="p-8">
<button className="w-full bg-gradient-to-r from-[#C7F36B] to-[#D5F58D] text-[#2B1F7E] font-bold py-5 rounded-full shadow-[0_12px_24px_rgba(199,243,107,0.3)] active:scale-[0.98] transition-transform">
          Get Matched
        </button>
</div>
</div>


    </>
  );
}
