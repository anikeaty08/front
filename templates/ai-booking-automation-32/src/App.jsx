import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile Nav
        const navToggle = document.getElementById('nav-toggle');
        const mobilePanel = document.getElementById('mobile-panel');
        let isNavOpen = false;

        navToggle.addEventListener('click', () => {
            isNavOpen = !isNavOpen;
            navToggle.setAttribute('aria-expanded', isNavOpen);
            mobilePanel.style.opacity = isNavOpen ? '1' : '0';
            mobilePanel.classList.toggle('pointer-events-none', !isNavOpen);
            
            // Toggle icons
            navToggle.querySelector('[data-lucide="menu"]').classList.toggle('hidden', isNavOpen);
            navToggle.querySelector('[data-lucide="x"]').classList.toggle('hidden', !isNavOpen);
        });

        // Close nav on link click
        document.querySelectorAll('[data-mobile-link]').forEach(link => {
            link.addEventListener('click', () => {
                isNavOpen = false;
                navToggle.setAttribute('aria-expanded', false);
                mobilePanel.style.opacity = '0';
                mobilePanel.classList.add('pointer-events-none');
                navToggle.querySelector('[data-lucide="menu"]').classList.remove('hidden');
                navToggle.querySelector('[data-lucide="x"]').classList.add('hidden');
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-animate]').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            const delay = el.getAttribute('data-delay');
            if(delay) el.style.transitionDelay = `${delay}ms`;
            observer.observe(el);
        });

        // Scroll Progress
        window.addEventListener('scroll', () => {
            const h = document.documentElement;
            const st = h.scrollTop || document.body.scrollTop;
            const sh = h.scrollHeight - h.clientHeight;
            const percent = (st / sh) * 100;
            document.getElementById('scroll-progress').style.width = percent + '%';
        });

        // Header Border on Scroll
        const header = document.getElementById('site-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('shadow-sm');
                header.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                header.classList.remove('shadow-sm');
                header.classList.replace('bg-white/95', 'bg-white/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-white">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"></div>

<svg className="opacity-40 absolute top-0 left-0 w-[1240px] h-[800px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '1240px', height: '800px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
<path d="M-100 400 C 200 300, 400 600, 800 400 C 1200 200, 1500 400, 1600 500" fill="none" stroke="#bae6fd" stroke-dasharray="10 10" strokeWidth="2"></path>
<path d="M-100 600 C 300 500, 600 800, 1000 500 C 1400 200, 1600 500, 1700 600" stroke="#e0f2fe" strokeLinecap="round" stroke-opacity="0.3" strokeWidth="400"></path>
</svg>
</div>

<div className="fixed top-0 left-0 h-[3px] bg-blue-600 w-0 z-[60]" id="scroll-progress" style={{width: '100%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-slate-100 transition-all duration-300" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md group" href="#home">
<div className="relative w-10 h-10 flex items-center justify-center">

<svg className="w-full h-full cursor-pointer transition-transform group-hover:scale-110 drop-shadow-sm text-blue-600" fill="none" onclick="window.location.href='/home'" role="button" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<path d="M28 85 C28 72 38 68 50 68 C62 68 72 72 72 85" fill="currentColor"></path>

<path d="M35 68 V48 C35 38 40 32 50 32 C60 32 65 38 65 48 V68 H35Z" fill="currentColor"></path>

<rect fill="currentColor" height="14" rx="2" width="6" x="31" y="48"></rect>
<rect fill="currentColor" height="14" rx="2" width="6" x="63" y="48"></rect>

<path d="M32 65 L22 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M22 55 L22 45" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M22 55 L12 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="22" cy="45" fill="currentColor" r="4"></circle>
<circle cx="12" cy="55" fill="currentColor" r="4"></circle>

<path d="M68 65 L78 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M78 55 L78 45" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M78 55 L88 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="78" cy="45" fill="currentColor" r="4"></circle>
<circle cx="88" cy="55" fill="currentColor" r="4"></circle>

<rect fill="white" height="12" rx="4" width="24" x="38" y="48"></rect>

<circle cx="44" cy="54" fill="currentColor" r="2.5"></circle>
<circle cx="56" cy="54" fill="currentColor" r="2.5"></circle>
</svg>
<div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>OPTIMALIS.AI</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wider" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wider" href="#calculator">Calculator</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wider" href="#features">Features</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-semibold text-blue-600 border border-dashed border-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase tracking-wide" href="#start">
                        Start Here
                    </a>

<button aria-expanded="false" className="md:hidden p-2 text-slate-600 rounded-md hover:bg-slate-100" id="nav-toggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-6 h-6 hidden" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 pointer-events-none opacity-0 transition-opacity duration-300 top-20" id="mobile-panel">
<div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 p-6">
<div className="flex flex-col gap-6 text-center">
<a className="text-lg font-medium text-slate-700 hover:text-blue-600" data-mobile-link="" href="#how-it-works">How it works</a>
<a className="text-lg font-medium text-slate-700 hover:text-blue-600" data-mobile-link="" href="#calculator">Calculator</a>
<a className="text-lg font-medium text-slate-700 hover:text-blue-600" data-mobile-link="" href="#features">Features</a>
<a className="inline-flex justify-center items-center px-6 py-3 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all" data-mobile-link="" href="#start">
                        Start Here
                    </a>
</div>
</div>
</div>
</header>

<section className="relative z-10 sm:p-8 bg-neutral-900/90 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee9b32bb-e72d-47cb-a983-ddf26a66cef2_1600w.jpg)] max-w-7xl bg-cover border-white/10 border rounded-3xl mt-32 mx-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur shadow-2xl overflow-hidden" id="home" style={{minHeight: '600px'}}>

<div className="absolute inset-0 overflow-hidden -z-10 rounded-3xl">
<div className="bg-gradient-to-tr from-neutral-950 via-slate-900/80 to-neutral-950/90 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>

<div aria-hidden="true" className="pointer-events-none select-none absolute -bottom-10 -left-10" data-animate="up" data-delay="600" style={{letterSpacing: '-0.05em', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out 600ms, transform 0.6s ease-out'}}>
<span className="block leading-none font-semibold text-white/5" style={{fontSize: 'min(18vw, 220px)', fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>OPTIMALIS</span>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center h-full py-10 lg:py-20">

<div className="lg:col-span-7 pl-2 sm:pl-4">
<h1 className="sm:text-6xl md:text-7xl leading-[1.05] text-4xl font-semibold text-slate-50 tracking-tight" data-animate="up" style={{fontFamily: '"Plus Jakarta Sans", sans-serif', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>AI Automation made easy with OPITIMALIS AI</h1>
</div>

<div className="lg:col-span-5 pl-2 sm:pl-4">
<p className="sm:text-lg leading-relaxed text-base font-normal text-neutral-300 max-w-[42ch]" data-animate="up" data-delay="100" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out 100ms, transform 0.6s ease-out'}}>
                    Instantly save time and close deals. Our AI connects to your leads, qualifies them, and books meetings directly into your calendar.
                </p>
<div className="flex flex-wrap gap-4 mt-8 items-center" data-animate="up" data-delay="200" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out 200ms, transform 0.6s ease-out'}}>

<a className="" href="#demo" onmousedown="this.style.transform='scale(0.95)'" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.05)'" onmouseup="this.style.transform='scale(1.05)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(59, 130, 246), rgb(37, 99, 235) 50%, rgb(99, 102, 241))', border: '0px', borderRadius: '9999px', boxShadow: 'rgba(37, 99, 235, 0.4) 0px 15px 30px -10px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '16px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '2px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '54px', transform: 'scale(1)', width: 'auto', transition: 'transform 0.2s'}}>
<span className="hover:bg-slate-900/90 transition-colors" style={{background: 'none rgb(15, 23, 42)', padding: '0 32px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', height: '100%', fontWeight: '500'}}>
                            Book a call
                        </span>
</a>

<a href="#features" onmousedown="this.style.transform='scale(0.95)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '9999px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '16px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '0 28px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '54px', transform: 'scale(1)', width: 'auto', transition: 'all 0.2s'}}>
<span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: '500'}}>
                            View pricing
                            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
</div>
</section>

<section className="bg-slate-50/50 border-slate-100 border-b mt-12 pt-10 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Trusted by forward-thinking teams</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2 font-semibold text-slate-700"><svg className="lucide lucide-triangle w-6 h-6 fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> VORTEX</div>
<div className="flex items-center justify-center gap-2 font-semibold text-slate-700"><svg className="lucide lucide-circle w-6 h-6 fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> SPHERE</div>
<div className="flex items-center justify-center gap-2 font-semibold text-slate-700"><svg className="lucide lucide-square w-6 h-6 fill-current" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> CUBE</div>
<div className="flex items-center justify-center gap-2 font-semibold text-slate-700"><svg className="lucide lucide-hexagon w-6 h-6 fill-current" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> POLYGON</div>
<div className="flex items-center justify-center gap-2 font-semibold text-slate-700"><svg className="lucide lucide-diamond w-6 h-6 fill-current" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg> PRISM</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="lg:text-4xl text-3xl font-semibold text-slate-900 tracking-tight font-heading">Your 24/7 AI Agent</h2>
<p className="text-lg text-slate-600 mt-4">
                    Optimalis AI connects to your leads, qualifies them, and books meetings directly into your calendar without you lifting a finger.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-blue-100 transition-all" data-animate="up" data-delay="0" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-plug w-7 h-7" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M15 8V2"></path><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"></path><path d="M9 8V2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">1. Connect</h3>
<p className="text-slate-600 leading-relaxed">
                        Integrate with your CRM, email, and calendar in seconds. We support all major platforms.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-blue-100 transition-all" data-animate="up" data-delay="100" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out 100ms, transform 0.6s ease-out'}}>
<div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bot w-7 h-7" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">2. Automate</h3>
<p className="text-slate-600 leading-relaxed">
                        Our AI engages leads naturally via SMS or Email, answering questions and handling objections.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-blue-100 transition-all" data-animate="up" data-delay="200" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out 200ms, transform 0.6s ease-out'}}>
<div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-calendar-check w-7 h-7" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">3. Close</h3>
<p className="text-slate-600 leading-relaxed">
                        Wake up to a calendar full of qualified appointments. Only speak to leads ready to buy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="calculator">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Calculate your ROI</h2>
<p className="text-slate-300 text-lg mb-8">
                        See how much revenue you're leaving on the table by missing leads or responding too slowly.
                    </p>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between text-sm font-medium">
<span>Monthly Leads</span>
<span className="text-blue-400">500</span>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500" type="range"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-sm font-medium">
<span>Average Deal Value</span>
<span className="text-blue-400">$1,500</span>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500" type="range"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-sm font-medium">
<span>Current Close Rate</span>
<span className="text-blue-400">15%</span>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500" type="range"/>
</div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
<p className="text-sm font-medium text-slate-300 uppercase tracking-wider">Potential Monthly Revenue</p>
<div className="mt-4 text-5xl font-semibold text-white tracking-tight">$142,500</div>
<div className="mt-2 text-green-400 font-medium flex items-center justify-center gap-2">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +$30,000 with Optimalis
                    </div>
<div className="mt-8">
<a className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all" href="#start">
                            Start Scaling Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Features</span>
<h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Everything you need to scale</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Multi-channel Comms</h3>
<p className="mt-2 text-slate-600 text-sm">SMS, Email, WhatsApp, and IG DMs - all handled by one AI brain.</p>
</div>
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Instant Response</h3>
<p className="mt-2 text-slate-600 text-sm">Engage leads within 30 seconds, 24/7/365. Never miss an opportunity.</p>
</div>
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600">
<svg className="lucide lucide-bar-chart w-5 h-5" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Detailed Analytics</h3>
<p className="mt-2 text-slate-600 text-sm">Know exactly which channels bring the best leads and highest ROI.</p>
</div>
</div>
</div>
</section>

<section className="bg-blue-50 border-blue-100 border-t pt-24 pb-24" id="start">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Ready to automate your growth?</h2>
<p className="text-xl text-slate-600 mb-10">Join 500+ businesses using Optimalis AI to fill their calendars.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30" href="#">
                    Get Started Free
                </a>
</div>
<p className="text-sm text-slate-500 mt-6"></p>
</div>
</section>

<footer className="bg-white border-slate-100 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 flex items-center justify-center rounded">

<svg className="w-full h-full cursor-pointer transition-transform group-hover:scale-110 text-blue-600" fill="none" onclick="window.location.href='/home'" role="button" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<path d="M28 85 C28 72 38 68 50 68 C62 68 72 72 72 85" fill="currentColor"></path>

<path d="M35 68 V48 C35 38 40 32 50 32 C60 32 65 38 65 48 V68 H35Z" fill="currentColor"></path>

<rect fill="currentColor" height="14" rx="2" width="6" x="31" y="48"></rect>
<rect fill="currentColor" height="14" rx="2" width="6" x="63" y="48"></rect>

<path d="M32 65 L22 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M22 55 L22 45" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M22 55 L12 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="22" cy="45" fill="currentColor" r="4"></circle>
<circle cx="12" cy="55" fill="currentColor" r="4"></circle>

<path d="M68 65 L78 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M78 55 L78 45" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<path d="M78 55 L88 55" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="78" cy="45" fill="currentColor" r="4"></circle>
<circle cx="88" cy="55" fill="currentColor" r="4"></circle>

<rect fill="white" height="12" rx="4" width="24" x="38" y="48"></rect>

<circle cx="44" cy="54" fill="currentColor" r="2.5"></circle>
<circle cx="56" cy="54" fill="currentColor" r="2.5"></circle>
</svg>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">OPTIMALIS.AI</span>
</a>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600" href="#">Privacy</a>
<a className="hover:text-blue-600" href="#">Terms</a>
<a className="hover:text-blue-600" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-blue-600" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-400 hover:text-blue-600" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div className="mt-12 text-center text-sm text-slate-400">
                © <span id="year">2026</span> Optimalis AI. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
