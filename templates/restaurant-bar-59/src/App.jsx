import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // 1. Initialize Lucide Icons
        lucide.createIcons();

        // 2. Dynamic Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // 3. Custom Cursor Logic (Desktop Only)
        const cursor = document.getElementById('custom-cursor');
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .cursor-interactive');

        if (window.matchMedia("(min-width: 768px)").matches) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
            });
        }

        // 4. Intro Animation Cleanup
        setTimeout(() => {
            document.querySelector('.intro-screen').style.display = 'none';
        }, 3800); 

        // 5. Scroll Reveal Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // 6. Circular Mask Transition Logic
        const maskContainer = document.querySelector('.mask-container');
        const triggerPoint = document.getElementById('dark-scene-trigger');

        const maskObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    maskContainer.classList.add('active');
                }
            });
        }, { threshold: 0.5 }); 

        maskObserver.observe(triggerPoint);

        // 7. Navbar Scroll Effect
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('-translate-y-2'); 
            } else {
                header.classList.remove('-translate-y-2');
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed w-4 h-4 bg-[#fbbf24] rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 hidden md:block backdrop-blur-sm shadow-[0_0_15px_rgba(251,191,36,0.5)]" id="custom-cursor" style={{left: '141px', top: '512px'}}></div>

<div className="intro-screen fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center overflow-hidden" style={{display: 'none'}}>
<div className="relative z-10 text-center flex flex-col items-center">

<svg className="w-32 h-32 mb-6 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" fill="none" viewbox="0 0 100 100">
<path d="M 20 75 Q 10 40 40 20" stroke="#fbbf24" strokeLinecap="round" strokeWidth="4"></path>
<path d="M 15 85 Q 50 105 85 75" stroke="#fbbf24" strokeLinecap="round" strokeWidth="4"></path>
<path d="M 35 30 L 35 70 L 70 25 L 70 65" stroke="#7f1d1d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>
</svg>
<h1 className="text-7xl font-heading font-medium text-[#f9faf5] tracking-tight opacity-0 animate-[fadeIn_1s_ease_forwards_0.5s]">NOX</h1>
<p className="text-sm uppercase tracking-[0.3em] text-gray-400 mt-4 opacity-0 animate-[fadeIn_1s_ease_forwards_0.8s]">Eatery &amp; Public House</p>
</div>
</div>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0b1120] border-t border-white/5 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md">
<a className="flex flex-col items-center text-xs text-gray-400" href="#menu">
<svg className="lucide lucide-utensils w-5 h-5 mb-1 text-[#fbbf24]" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
            Menu
        </a>
<a className="flex flex-col items-center text-xs text-gray-400" href="#events">
<svg className="lucide lucide-calendar w-5 h-5 mb-1 text-[#fbbf24]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Events
        </a>
<a className="flex flex-col items-center text-xs text-gray-400" href="#book">
<svg className="lucide lucide-armchair w-5 h-5 mb-1 text-[#fbbf24]" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
            Book
        </a>
<a className="flex flex-col items-center text-xs text-gray-400" href="tel:+16135550199">
<svg className="lucide lucide-phone w-5 h-5 mb-1 text-[#fbbf24]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            Call
        </a>
</div>

<header className="fixed top-0 w-full z-40 transition-all duration-300" id="main-header">

<div className="w-full bg-[#0b1120]/90 backdrop-blur-sm border-b border-white/5 py-2 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm tracking-wide text-gray-400">
<span className="flex items-center gap-3"><svg className="lucide lucide-map-pin w-3.5 h-3.5 text-[#fbbf24]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> uOttawa Minto Sports Complex (Level 2)</span>
<span className="flex items-center gap-6">
<span className="flex items-center gap-3"><svg className="lucide lucide-clock w-3.5 h-3.5 text-[#fbbf24]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Today: 11:00 am – 11:00 pm</span>
<a className="flex items-center gap-3 hover:text-white transition-colors cursor-interactive" href="tel:+16135550199"><svg className="lucide lucide-phone w-3.5 h-3.5 text-[#fbbf24]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> (613) 555-0199</a>
</span>
</div>
</div>

<div className="w-full py-5 md:py-8 bg-gradient-to-b from-[#020617]/90 to-transparent">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

<a className="flex items-center gap-3 cursor-interactive group" href="#">
<svg className="w-12 h-12 group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 100 100">

<path d="M 20 75 Q 10 40 40 20" stroke="#fbbf24" strokeLinecap="round" strokeWidth="4"></path>
<path d="M 15 85 Q 50 105 85 75" stroke="#fbbf24" strokeLinecap="round" strokeWidth="4"></path>

<path className="" d="M 35 30 L 35 70 L 70 25 L 70 65" stroke="#7f1d1d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>
</svg>
<span className="text-2xl font-heading font-medium text-white tracking-tight">NOX<span className="text-[#fbbf24]">.</span></span>
</a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-base font-light text-gray-300 hover:text-[#fbbf24] transition-colors cursor-interactive" href="#menu">Menu</a>
<a className="text-base font-light text-gray-300 hover:text-[#fbbf24] transition-colors cursor-interactive" href="#events">Events</a>
<a className="text-base font-light text-gray-300 hover:text-[#fbbf24] transition-colors cursor-interactive" href="#catering">Catering</a>
<a className="text-base font-light text-gray-300 hover:text-[#fbbf24] transition-colors cursor-interactive" href="#about">About</a>
</nav>

<a className="hidden md:flex items-center gap-2 bg-[#fbbf24] text-[#020617] px-7 py-3 rounded-full text-base font-normal hover:bg-[#f9faf5] transition-colors duration-300 cursor-interactive" href="#book">
                    Book a Table
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-white cursor-interactive">
<svg className="lucide lucide-menu w-7 h-7" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#020617]">

<div className="absolute inset-0 z-0">
<img alt="NOX Atmosphere" className="w-full h-full object-cover opacity-40 scale-105 animate-[slowZoom_20s_infinite_alternate]" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-5xl mt-16 pr-6 pl-6 relative">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-normal text-[#f9faf5] tracking-tight leading-[0.9] mb-8 reveal-on-scroll delay-100 is-visible">
                    ABOVE THE <span className="text-[#fbbf24]">GAME</span>.
                </h1>
<p className="md:text-2xl reveal-on-scroll delay-200 leading-relaxed is-visible text-xl font-light text-gray-300 max-w-3xl mr-auto mb-12 ml-auto">The best uOttawa’s hidden student bar &amp; public house and view of the rink on campus.</p>
<div className="flex flex-col md:flex-row gap-5 justify-center items-center reveal-on-scroll delay-300 is-visible">
<a className="w-full md:w-auto px-10 py-4 bg-[#fbbf24] text-[#020617] rounded-full font-normal hover:bg-[#f9faf5] transition-all cursor-interactive flex items-center justify-center gap-3" href="#book">
                        Book a Table
                    </a>
<a className="w-full md:w-auto px-10 py-4 bg-transparent border border-white/20 text-[#f9faf5] rounded-full font-light hover:bg-white/10 transition-all cursor-interactive backdrop-blur-sm" href="#events">
                        Host an Event
                    </a>
</div>
</div>
</section>

<section className="py-24 md:py-36 bg-[#020617] relative z-10 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="text-4xl md:text-6xl font-heading font-normal tracking-tight text-[#f9faf5] mb-3">Today at NOX</h2>
<p className="text-xl text-gray-400 font-light">Weekly rituals &amp; student specials.</p>
</div>
<a className="text-[#fbbf24] text-base font-normal hover:text-white transition-colors mt-6 md:mt-0 flex items-center gap-2 cursor-interactive" href="#">
                        View full lineup <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-[#0b1120] p-8 rounded-3xl border border-white/5 hover:border-[#fbbf24]/30 transition-all cursor-interactive reveal-on-scroll is-visible">
<span className="text-xs font-normal text-gray-500 uppercase tracking-widest mb-3 block">Monday</span>
<h3 className="text-2xl font-heading font-medium text-[#f9faf5] mb-2 group-hover:text-[#fbbf24] transition-colors">Burger Bonanza</h3>
<p className="text-base text-gray-400 mb-6 font-light">Half-price signature burgers with any pint purchase.</p>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#fbbf24] group-hover:text-[#020617] transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="group bg-[#fbbf24] p-8 rounded-3xl border border-[#fbbf24] transition-all cursor-interactive reveal-on-scroll delay-100 relative overflow-hidden is-visible">
<div className="absolute top-4 right-4 bg-[#020617]/10 px-3 py-1 rounded text-[10px] font-medium text-[#020617] uppercase tracking-wide">Today</div>
<span className="text-xs font-medium text-[#020617]/60 uppercase tracking-widest mb-3 block">Tuesday</span>
<h3 className="text-2xl font-heading font-medium text-[#020617] mb-2">Tacos &amp; Trivia</h3>
<p className="text-base text-[#020617]/80 mb-6 font-normal">4$ Tacos all night. Trivia starts at 8pm sharp. Prizes for top 3 teams.</p>
<div className="w-10 h-10 rounded-full bg-[#020617]/10 flex items-center justify-center text-[#020617]">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
</div>

<div className="group bg-[#0b1120] p-8 rounded-3xl border border-white/5 hover:border-[#fbbf24]/30 transition-all cursor-interactive reveal-on-scroll delay-200 is-visible">
<span className="text-xs font-normal text-gray-500 uppercase tracking-widest mb-3 block">Wednesday</span>
<h3 className="text-2xl font-heading font-medium text-[#f9faf5] mb-2 group-hover:text-[#fbbf24] transition-colors">Wings &amp; Pitchers</h3>
<p className="text-base font-light text-gray-400 mb-6">1lb wings + Pitcher combo. The perfect mid-week meal.</p>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#fbbf24] group-hover:text-[#020617] transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="group bg-[#0b1120] p-8 rounded-3xl border border-white/5 hover:border-[#fbbf24]/30 transition-all cursor-interactive reveal-on-scroll delay-300 is-visible">
<span className="text-xs font-normal text-gray-500 uppercase tracking-widest mb-3 block">Thursday</span>
<h3 className="text-2xl font-heading font-medium text-[#f9faf5] mb-2 group-hover:text-[#fbbf24] transition-colors">Karaoke Night</h3>
<p className="text-base font-light text-gray-400 mb-6">Late night singing and legends on the mic.</p>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#fbbf24] group-hover:text-[#020617] transition-colors">
<svg className="lucide lucide-music w-5 h-5" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-[#111827] bg-[#f9faf5] pt-36 pb-36 relative" id="why-nox">

<svg className="absolute top-0 right-0 h-full w-1/2 opacity-10 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 200">
<path d="M0 0 Q 50 100 0 200" fill="none" stroke="#111827" strokeWidth="0.5"></path>
<path d="M20 0 Q 70 100 20 200" fill="none" stroke="#111827" strokeWidth="0.5"></path>
</svg>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div className="reveal-on-scroll">
<span className="block text-sm font-medium tracking-[0.2em] uppercase mb-6 border-l-2 border-[#111827] pl-4">Our Purpose</span>
<h2 className="md:text-8xl leading-[0.9] text-6xl font-medium text-[#111827] tracking-tight font-heading mb-10">
                            ON CAMPUS<br/>FOR A REASON.
                        </h2>
<p className="leading-relaxed text-2xl font-normal text-[#111827]/80 max-w-lg">We aren't just a bar. We are the best uOttawa post-game celebration hub. </p>
</div>
<div className="flex flex-col gap-12 lg:mt-0 mt-12 gap-x-12 gap-y-12">
<div className="flex gap-8 reveal-on-scroll delay-100 group">
<div className="w-16 h-16 rounded-full border border-[#111827]/20 flex items-center justify-center shrink-0 group-hover:bg-[#fbbf24] group-hover:border-[#fbbf24] transition-colors duration-300">
<svg className="lucide lucide-users w-7 h-7 text-[#111827]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-[#111827] font-heading mb-3">For Students</h3>
<p className="text-lg font-light text-[#111827]/70">We are affordable, safe, and right above the rink. No Uber needed.</p>
</div>
</div>
<div className="flex gap-8 reveal-on-scroll delay-200 group">
<div className="w-16 h-16 rounded-full border border-[#111827]/20 flex items-center justify-center shrink-0 group-hover:bg-[#fbbf24] group-hover:border-[#fbbf24] transition-colors duration-300">
<svg className="lucide lucide-trophy w-7 h-7 text-[#111827]" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-[#111827] font-heading mb-3">For Teams &amp; Clubs</h3>
<p className="text-lg font-light text-[#111827]/70">The best upstairs venue for banquets, fundraisers, and victory parties.</p>
</div>
</div>
<div className="flex gap-8 reveal-on-scroll delay-300 group">
<div className="flex shrink-0 group-hover:bg-[#fbbf24] group-hover:border-[#fbbf24] transition-colors duration-300 w-16 h-16 border-[#111827]/20 border rounded-full items-center justify-center">
<svg className="lucide lucide-briefcase w-7 h-7 text-[#111827]" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-[#111827] font-heading mb-3">For Faculty &amp; Staff</h3>
<p className="text-lg font-light text-[#111827]/70">High-quality catering and truly the best spot for department mixers.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative w-full h-[150px]" id="dark-scene-trigger"></div>
<section className="relative w-full bg-[#020617] py-36 overflow-hidden mask-container -mt-24 z-20" id="dark-scene">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-32 reveal-on-scroll">
<span className="text-[#fbbf24] font-medium tracking-[0.25em] text-xs uppercase">The Kitchen &amp; Bar</span>
<h2 className="text-5xl md:text-7xl font-heading font-medium mt-6 tracking-tight text-[#f9faf5]">COMFORT FOOD<br/>THAT DOESN'T MISS.</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5 space-y-8 mt-0 md:mt-16 reveal-on-scroll">
<div className="relative group cursor-interactive overflow-hidden rounded-3xl">
<img alt="Burger" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1899&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8">
<span className="bg-[#7f1d1d] text-[#f9faf5] text-[10px] font-semibold px-3 py-1.5 rounded uppercase mb-3 inline-block tracking-wider">Crowd Fave</span>
<h3 className="text-3xl font-heading font-medium text-[#f9faf5]">Apple Brie BBQ Burger</h3>
<p className="text-base text-gray-300 mt-2 font-light">Double smash patty, melted brie, house apple slaw.</p>
</div>
</div>
<div className="relative group cursor-interactive overflow-hidden rounded-3xl">
<img alt="Cocktail" className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-3xl font-heading font-medium text-[#f9faf5]">Snake Oil Whiskey</h3>
<p className="text-base text-gray-300 mt-2 font-light">Our signature barrel-aged blend.</p>
</div>
</div>
</div>

<div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center h-full pt-40 reveal-on-scroll delay-100">
<div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-[#fbbf24] to-transparent"></div>
<p className="text-center text-xs font-mono text-[#fbbf24] mt-6 uppercase tracking-[0.3em] vertical-rl rotate-180">Curated for Campus</p>
</div>

<div className="lg:col-span-5 space-y-8 reveal-on-scroll delay-200">
<div className="bg-[#0b1120] p-10 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center h-[240px]">
<svg className="lucide lucide-beer w-12 h-12 text-[#fbbf24] mb-6" data-lucide="beer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 11h1a3 3 0 0 1 0 6h-1"></path><path d="M9 12v6"></path><path d="M13 12v6"></path><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"></path><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path></svg>
<h3 className="text-2xl font-medium text-[#f9faf5] mb-2">12 Taps Rotating</h3>
<p className="text-base text-gray-400 font-light">Local craft + Domestic staples.</p>
</div>
<div className="relative group cursor-interactive overflow-hidden rounded-3xl">
<img alt="Nachos" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61d3f4b5-52ee-48b2-a314-6d05d6bbf808_1600w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8">
<span className="bg-[#fbbf24] text-[#020617] text-[10px] font-semibold px-3 py-1.5 rounded uppercase mb-3 inline-block tracking-wider">Shareable</span>
<h3 className="text-3xl font-heading font-medium text-[#f9faf5]">The NOXchos</h3>
<p className="text-base text-gray-300 mt-2 font-light">Loaded sheet pan nachos, pickled jalapeños, queso.</p>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-3 text-[#f9faf5] border-b border-[#fbbf24] pb-1 hover:text-[#fbbf24] transition-colors cursor-interactive text-lg" href="#menu">
                        See Full Menu <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-32 bg-[#0b1120] border-y border-white/5 relative overflow-hidden">
<div className="absolute right-0 top-0 h-full w-1/3 bg-[#fbbf24]/5 skew-x-12"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<div className="flex items-center gap-4 mb-6">
<svg className="lucide lucide-zap w-8 h-8 text-[#fbbf24]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Fuel Shack</h3>
</div>
<h2 className="text-5xl md:text-6xl font-heading font-medium text-[#f9faf5] mb-8 tracking-tight">Smoothies &amp; ProteinFor Busy Students.</h2>
<p className="text-gray-400 mb-10 max-w-lg text-lg font-light leading-relaxed">Located within NOX. Grab a post-workout recovery shake or a meal replacement smoothie between classes.</p>
<div className="space-y-5">
<div className="flex items-center gap-5 bg-[#020617] p-5 rounded-2xl border border-white/5 hover:border-[#fbbf24]/30 transition-all">
<div className="w-14 h-14 bg-[#7f1d1d]/20 rounded-full flex items-center justify-center text-[#fbbf24] font-semibold text-sm">RJ</div>
<div>
<h4 className="font-medium text-xl text-[#f9faf5]">Ripped Berry</h4>
<p className="text-sm text-gray-400">Whey protein, mixed berries, banana, almond milk.</p>
</div>
<span className="ml-auto text-[#fbbf24] font-semibold text-lg">$9</span>
</div>
<div className="flex items-center gap-5 bg-[#020617] p-5 rounded-2xl border border-white/5 hover:border-[#fbbf24]/30 transition-all">
<div className="w-14 h-14 bg-[#fbbf24]/20 rounded-full flex items-center justify-center text-[#fbbf24] font-semibold text-sm">JM</div>
<div>
<h4 className="font-medium text-xl text-[#f9faf5]">Jacked Monkey</h4>
<p className="text-sm text-gray-400">Chocolate protein, peanut butter, espresso shot.</p>
</div>
<span className="ml-auto text-[#fbbf24] font-semibold text-lg">$10</span>
</div>
</div>
</div>
<div className="relative reveal-on-scroll delay-200">
<div className="relative z-10 bg-[#020617] rounded-3xl p-8 border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Smoothie" className="w-full h-80 object-cover rounded-2xl mb-8 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622597468620-656aa1f981ea?w=800&amp;q=80" style={{}}/>
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-heading font-medium text-[#f9faf5]">Pre-Order for Pickup</h3>
<p className="text-base text-gray-400 mt-2 font-light">Skip the line after your workout.</p>
</div>
<button className="w-14 h-14 bg-[#fbbf24] rounded-full flex items-center justify-center text-[#020617] cursor-interactive hover:scale-110 transition-transform">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#020617] pt-36 pb-36 relative" id="events">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24">

<div className="reveal-on-scroll">
<span className="text-[#7f1d1d] font-semibold tracking-widest text-xs uppercase mb-6 block">Private Events</span>
<h2 className="text-5xl md:text-7xl font-heading font-medium text-[#f9faf5] mb-8 tracking-tight">
                            Where the Campus<br/>Celebrates.
                        </h2>
<p className="leading-relaxed text-xl font-light text-gray-400 mb-12">Here at NOX we offer a private entrance, flexible AV setups, and custom catering menus that are the greatest fit your your event.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
<div className="bg-[#0b1120] p-8 rounded-2xl border border-white/5">
<svg className="lucide lucide-mic-2 w-8 h-8 text-[#fbbf24] mb-4" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
<h4 className="font-medium text-[#f9faf5] mb-2 text-lg">Student Socials</h4>
<p className="text-sm text-gray-400">Karaoke, trivia, and dance floor setups.</p>
</div>
<div className="bg-[#0b1120] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-award w-8 h-8 text-[#fbbf24] mb-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<h4 className="font-medium text-[#f9faf5] mb-2 text-lg">Team Banquets</h4>
<p className="text-sm text-gray-400">Audio for speeches and highlight reels.</p>
</div>
</div>
</div>

<div className="md:p-12 reveal-on-scroll delay-100 bg-[#0b1120] border-white/5 border rounded-[2rem] pt-10 pr-10 pb-10 pl-10 relative">
<div className="absolute -top-6 -right-6 w-32 h-32 bg-[#fbbf24]/10 rounded-full blur-3xl"></div>
<h3 className="text-3xl font-heading font-medium text-[#f9faf5] mb-8">Inquire About an Event</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<input className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-base text-[#f9faf5] focus:outline-none focus:border-[#fbbf24] transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-base text-[#f9faf5] focus:outline-none focus:border-[#fbbf24] transition-colors" placeholder="Email" type="email"/>
</div>
<div className="relative">
<select className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-base text-gray-400 focus:outline-none focus:border-[#fbbf24] transition-colors appearance-none cursor-interactive">
<option>Select Occasion</option>
<option>Team Banquet</option>
<option>Student Club Social</option>
<option>Faculty Mixer</option>
<option>Birthday / Private</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<input className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-base text-[#f9faf5] focus:outline-none focus:border-[#fbbf24] transition-colors" placeholder="Est. Guests" type="text"/>
<input className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-base text-[#f9faf5] focus:outline-none focus:border-[#fbbf24] transition-colors" placeholder="Preferred Date" type="text"/>
</div>
<textarea className="w-full bg-[#020617] border border-white/10 rounded-xl px-5 py-4 text-base text-[#f9faf5] focus:outline-none focus:border-[#fbbf24] transition-colors" placeholder="Tell us about your event..." rows="4"></textarea>
<button className="w-full bg-[#f9faf5] text-[#020617] font-semibold py-4 rounded-xl hover:bg-[#fbbf24] transition-colors cursor-interactive text-lg mt-4" type="button">
                                Send Inquiry
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0b1120] border-t border-white/5" id="catering">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-heading font-medium text-[#f9faf5] mb-16 reveal-on-scroll tracking-tight">We Cater Campus &amp; Office Life</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
<div className="bg-[#020617] p-10 rounded-3xl border border-white/5 hover:translate-y-[-8px] transition-transform duration-300 reveal-on-scroll">
<svg className="lucide lucide-package w-12 h-12 text-[#fbbf24] mx-auto mb-6" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<h4 className="text-2xl font-medium text-[#f9faf5] mb-3">Individual Meals</h4>
<p className="text-base text-gray-400 font-light">Perfect for lunch-and-learns and office meetings. Dietary labels included.</p>
</div>
<div className="bg-[#020617] p-10 rounded-3xl border border-white/5 hover:translate-y-[-8px] transition-transform duration-300 reveal-on-scroll delay-100">
<svg className="lucide lucide-layers w-12 h-12 text-[#fbbf24] mx-auto mb-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h4 className="text-2xl font-medium text-[#f9faf5] mb-3">Platters &amp; Boards</h4>
<p className="text-base text-gray-400 font-light">Shareable charcuterie, sliders, and wrap platters for social gatherings.</p>
</div>
<div className="bg-[#020617] p-10 rounded-3xl border border-white/5 hover:translate-y-[-8px] transition-transform duration-300 reveal-on-scroll delay-200">
<svg className="lucide lucide-utensils-crossed w-12 h-12 text-[#fbbf24] mx-auto mb-6" data-lucide="utensils-crossed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path><path d="m2.1 21.8 6.4-6.3"></path><path d="m19 5-7 7"></path></svg>
<h4 className="text-2xl font-medium text-[#f9faf5] mb-3">Buffet Spreads</h4>
<p className="text-base text-gray-400 font-light">Full service setup for large scale events and conferences.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-5 reveal-on-scroll">
<button className="px-10 py-4 bg-[#fbbf24] text-[#020617] font-semibold rounded-full hover:bg-[#f9faf5] transition-colors cursor-interactive text-lg">Get a Quote</button>
<button className="px-10 py-4 bg-transparent border border-white/20 text-[#f9faf5] font-medium rounded-full hover:bg-white/10 transition-colors cursor-interactive flex items-center justify-center gap-3 text-lg">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download Menu PDF
                    </button>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#020617] pt-24 pb-24 border-t border-white/5 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#fbbf24]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end reveal-on-scroll relative z-10">
<h2 className="text-4xl md:text-5xl font-heading font-medium text-[#f9faf5] tracking-tight">The Campus Knows.</h2>
<a className="text-base text-gray-400 hover:text-[#fbbf24] transition-colors flex items-center gap-3 cursor-interactive group" href="#">
<span className="group-hover:translate-x-[-2px] transition-transform">Follow @noxeatery</span>
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>

<div className="relative w-full overflow-hidden py-4">

<div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none"></div>
<div className="flex gap-8 animate-infinite-scroll w-max hover:pause">

<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/554749e8-476c-45f5-8b2d-5200465cc7db_800w.png" style={{}}/>
<div className="absolute bottom-6 left-6">
<p className="text-xs text-[#020617] font-semibold bg-[#fbbf24] px-3 py-1.5 rounded-lg uppercase tracking-wider">@geegees_football</p>
</div>
</div>
<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66a545a9-adcb-473f-b371-aac3e671fc18_800w.png" style={{}}/>
<div className="absolute bottom-6 left-6">
<p className="text-sm text-[#f9faf5] font-medium bg-[#020617]/70 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2">Trivia Night <svg className="lucide lucide-brain text-pink-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.97-1.375"></path><path d="M18 18a4 4 0 0 0 1.97-1.375"></path></svg></p>
</div>
</div>
<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28365dea-0b2b-4fae-99e3-3ed90b2a54af_800w.png"/>
<div className="absolute bottom-6 left-6">
<p className="text-sm text-[#f9faf5] font-medium bg-[#020617]/70 backdrop-blur-md px-3 py-1.5 rounded-lg">Best burgers on campus</p>
</div>
</div>
<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f92e32fe-0c10-4185-812d-22ee96cd53f8_800w.png"/>
<div className="absolute bottom-6 left-6">
<p className="text-sm text-[#f9faf5] font-medium bg-[#020617]/70 backdrop-blur-md px-3 py-1.5 rounded-lg">Friday Vibes</p>
</div>
</div>

<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5018d9-4cb1-43dd-a12d-c2d5d9af64dc_800w.png" style={{}}/>
<div className="absolute bottom-6 left-6">
<p className="text-xs text-[#020617] font-semibold bg-[#fbbf24] px-3 py-1.5 rounded-lg uppercase tracking-wider">@geegees_football</p>
</div>
</div>
<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa3e414d-2480-4401-a430-11f75e95e970_800w.png" style={{}}/>
<div className="absolute bottom-6 left-6">
<p className="text-sm text-[#f9faf5] font-medium bg-[#020617]/70 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2">Trivia Night <svg className="lucide lucide-brain text-pink-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.97-1.375"></path><path d="M18 18a4 4 0 0 0 1.97-1.375"></path></svg></p>
</div>
</div>
<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/539d2852-4c9d-465c-957f-8c5010946687_800w.png"/>
<div className="absolute bottom-6 left-6">
<p className="text-sm text-[#f9faf5] font-medium bg-[#020617]/70 backdrop-blur-md px-3 py-1.5 rounded-lg">Best burgers on campus</p>
</div>
</div>
<div className="w-[320px] h-[320px] bg-[#1a1a1a] rounded-2xl shrink-0 relative group overflow-hidden border border-white/5 hover:border-[#fbbf24]/50 transition-colors">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94b85016-8e96-4124-8a6b-ecd11d56498e_800w.png"/>
<div className="absolute bottom-6 left-6">
<p className="text-sm text-[#f9faf5] font-medium bg-[#020617]/70 backdrop-blur-md px-3 py-1.5 rounded-lg">Friday Vibes</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0b1120] border-white/5 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal-on-scroll">
<h2 className="text-4xl font-heading font-medium text-[#f9faf5] mb-8">Above the Minto Sports Complex.</h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#fbbf24]">
<span className="font-bold text-lg">1</span>
</div>
<p className="text-gray-400 text-lg mt-2 font-light">Enter the Minto Sports Complex main doors at 801 King Edward Ave.</p>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#fbbf24]">
<span className="font-bold text-lg">2</span>
</div>
<p className="text-gray-400 text-lg mt-2 font-light">Take the stairs or elevator to the .</p>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#fbbf24]">
<span className="font-bold text-lg">3</span>
</div>
<p className="text-gray-400 text-lg mt-2 font-light">Follow the signs to NOX overlooking the rink. You've arrived.</p>
</div>
</div>
<div className="mt-12 pt-10 border-t border-white/5">
<p className="text-[#f9faf5] font-semibold text-lg mb-1">801 King Edward Ave, Ottawa, ON</p>
<p className="text-base text-gray-500 mb-6">Located on uOttawa Campus</p>
<a className="text-[#fbbf24] text-base hover:underline" href="https://maps.google.com" target="_blank">Get Directions via Google Maps →</a>
</div>
</div>
<div className="h-[500px] w-full bg-gray-800 rounded-3xl overflow-hidden reveal-on-scroll delay-100 relative">

<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.77123456789!2d-75.68!3d45.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db9495f%3A0x6295555555555555!2s801%20King%20Edward%20Ave!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca" style={{border: '0', filter: 'grayscale(100%) invert(90%)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl"></div>
</div>
</div>
</section>
</main>

<footer className="relative bg-[#111827] text-[#f9faf5] pt-32 pb-16 overflow-hidden mt-12 border-t border-white/5">

<div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none">
<h1 className="text-[25vw] font-heading font-bold leading-none opacity-5 tracking-tighter translate-y-[20%] text-[#fbbf24]">NOX</h1>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
<div className="md:col-span-6">

<svg className="w-16 h-16 mb-6" fill="none" viewbox="0 0 100 100">
<path d="M 20 75 Q 10 40 40 20" stroke="#fbbf24" strokeLinecap="round" strokeWidth="4"></path>
<path d="M 15 85 Q 50 105 85 75" stroke="#fbbf24" strokeLinecap="round" strokeWidth="4"></path>
<path d="M 35 30 L 35 70 L 70 25 L 70 65" stroke="#7f1d1d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>
</svg>
<h2 className="text-4xl font-heading font-semibold mb-6 leading-tight">Hidden Student Bar.<br/>Public House.<br/>Events Venue.</h2>
<p className="max-w-md font-light text-gray-400 text-lg">
                        Hidden upstairs at the Minto Sports Complex. For games, food, and nights you remember.
                    </p>
<div className="mt-10 flex gap-5">
<a className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#020617] hover:border-[#fbbf24] transition-colors cursor-interactive" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#020617] hover:border-[#fbbf24] transition-colors cursor-interactive" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#020617] hover:border-[#fbbf24] transition-colors cursor-interactive" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
<div className="md:col-span-2">
<h4 className="font-semibold uppercase tracking-widest text-xs mb-8 border-b border-[#fbbf24] pb-2 inline-block text-[#fbbf24]">Explore</h4>
<ul className="space-y-4 font-normal text-gray-300">
<li><a className="hover:text-[#fbbf24] transition-colors cursor-interactive" href="#menu">Menu</a></li>
<li><a className="hover:text-[#fbbf24] transition-colors cursor-interactive" href="#book">Book Table</a></li>
<li><a className="hover:text-[#fbbf24] transition-colors cursor-interactive" href="#events">Private Events</a></li>
<li><a className="hover:text-[#fbbf24] transition-colors cursor-interactive" href="#catering">Catering</a></li>
<li><a className="hover:text-[#fbbf24] transition-colors cursor-interactive" href="#fuelshack">Fuel Shack</a></li>
</ul>
</div>
<div className="md:col-span-4">
<h4 className="font-semibold uppercase tracking-widest text-xs mb-8 border-b border-[#fbbf24] pb-2 inline-block text-[#fbbf24]">Hours</h4>
<table className="w-full text-base font-normal text-gray-300">
<tbody><tr className="border-b border-white/10">
<td className="py-3">Mon - Wed</td>
<td className="py-3 text-right">11:00 am – 11:00 pm</td>
</tr>
<tr className="border-b border-white/10">
<td className="py-3">Thu - Fri</td>
<td className="py-3 text-right">11:00 am – 01:00 am</td>
</tr>
<tr className="border-b border-white/10">
<td className="py-3">Saturday</td>
<td className="py-3 text-right">4:00 pm – 01:00 am</td>
</tr>
<tr>
<td className="py-3">Sunday</td>
<td className="py-3 text-right">Closed (Event Only)</td>
</tr>
</tbody></table>
<p className="mt-8 text-xs font-semibold uppercase tracking-wider flex items-center gap-3 text-[#fbbf24]">
<svg className="lucide lucide-badge-check w-5 h-5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> First Responder Discounts Available
                     </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium border-t border-white/10 pt-10 text-gray-500">
<p>© <span id="year">2025</span> NOX Eatery &amp; Public House.</p>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
