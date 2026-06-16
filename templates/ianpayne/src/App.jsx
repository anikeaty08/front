import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          // Initial Animations
          setTimeout(() => { document.querySelector('header').classList.add('loaded'); }, 100);
          setTimeout(() => {
              const heroTitle = document.getElementById('hero-title');
              if(heroTitle) heroTitle.classList.add('reveal-active');
          }, 500);
          setTimeout(() => {
              document.querySelectorAll('.hero-badge, .hero-stat').forEach(el => el.classList.add('active'));
          }, 500);

          // Scroll Observer
          const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      if(entry.target.querySelector('.text-reveal-content') || entry.target.classList.contains('text-reveal-wrapper')) {
                          entry.target.classList.add('reveal-active');
                      }
                      if(entry.target.tagName === 'H1') entry.target.classList.add('reveal-active');
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
          document.querySelectorAll('h1').forEach(el => {
              if(el.querySelector('.text-reveal-content')) observer.observe(el);
          });

          // Parallax
          window.addEventListener('scroll', () => {
              const scrolled = window.scrollY;
              document.querySelectorAll('.parallax-img').forEach((el) => {
                  const speed = el.dataset.speed || 0.1;
                  el.style.transform = `translateY(${scrolled * speed}px)`;
              });
              document.querySelectorAll('.parallax-element').forEach((el) => {
                  const speed = el.dataset.speed || 0.1;
                  el.style.transform = `translateY(${scrolled * speed}px)`;
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="border-x bg-[#EAEAE5] max-w-[1400px] border-stone-300 mr-auto ml-auto relative">

<div className="pointer-events-none grid grid-cols-1 md:grid-cols-12 gap-0 z-0 w-full h-full absolute top-0 right-0 bottom-0 left-0">
<div className="hidden md:block md:col-span-3 h-full border-stone-300/40 border-r"></div>
<div className="hidden md:block md:col-span-6 h-full border-stone-300/40 border-r"></div>
<div className="hidden md:block md:col-span-3 h-full"></div>
</div>

<header className="z-50 sticky nav-load bg-[#EAEAE5] border-stone-300 border-b relative top-0 loaded">
<div className="flex md:px-6 pt-5 pr-4 pb-5 pl-4 items-center justify-between">
<div className="flex items-center gap-4 md:gap-12">
<a className="uppercase hover:text-stone-500 transition-colors text-xs font-medium tracking-widest" href="#work">
              Scores
            </a>
<a className="uppercase hidden md:block hover:text-stone-500 transition-colors text-xs font-medium tracking-widest" href="#awards">
              Awards
            </a>
</div>
<div className="-translate-x-1/2 flex gap-2 group cursor-pointer absolute left-1/2 items-center">
<svg className="group-hover:scale-110 transition-transform duration-700" data-icon-replaced="true" data-icon-set="lucide" data-lucide="music" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(28, 28, 28)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
<span className="text-lg font-bold tracking-tighter">IAN.PAYNE</span>
</div>
<div className="flex items-center gap-4 md:gap-12">
<a className="uppercase hidden md:block hover:text-stone-500 transition-colors text-xs font-medium tracking-widest" href="#about">
              About
            </a>
<a className="uppercase hover:text-stone-500 transition-colors text-xs font-medium tracking-widest" href="mailto:ian@example.com">
              Contact
            </a>
</div>
</div>
</header>

<section className="z-10 grid grid-cols-1 md:grid-cols-12 border-stone-300 border-b relative min-h-screen md:min-h-[850px]">

<div className="col-span-1 md:col-span-9 md:border-b-0 md:border-r group overflow-hidden bg-stone-900 border-stone-300 border-b relative min-h-[65svh] md:min-h-full">
<div className="w-full h-full relative" id="hero-carousel">

<div className="carousel-slide active">

<img alt="Ian composing at piano" className="contrast-125 w-full h-full object-cover grayscale object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e635c4a-e234-48a9-9346-ccc6618c88c2_3840w.png"/>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-stone-900/60 to-transparent pointer-events-none"></div>

<div className="md:bottom-10 md:left-10 text-white mix-blend-normal z-20 absolute bottom-6 left-6">
<h1 className="md:text-8xl font-semibold tracking-tighter leading-none mb-2 active reveal-active text-5xl" id="hero-title">
<span className="text-reveal-wrapper">
<span className="text-reveal-content delay-200">Film</span>
</span>
<span className="text-reveal-wrapper">
<span className="text-reveal-content delay-300">Composer</span>
</span>
</h1>
<div className="mt-6 flex items-center gap-4 reveal delay-500 hero-badge active">
<span className="px-3 py-1 border border-white/40 rounded-full text-xs font-mono uppercase backdrop-blur-md">
                Animation
              </span>
<span className="px-3 py-1 border border-white/40 rounded-full text-xs font-mono uppercase backdrop-blur-md">
                Horror
              </span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 grid grid-rows-3 h-full min-h-[400px]">

<div className="row-span-1 border-b border-stone-300 p-8 flex flex-col justify-between delay-500 hero-stat group hover:bg-white transition-colors active reveal-perspective">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-stone-800 transition-colors" icon="lucide:award" strokeWidth="1.5"></iconify-icon>
<div className="">
<h2 className="text-5xl font-medium tracking-tighter">10+</h2>
<span className="text-xs font-mono text-stone-500 mt-1 block">
                FESTIVAL AWARDS
              </span>
</div>
</div>

<div className="row-span-1 border-b border-stone-300 p-8 flex flex-col justify-between delay-700 hero-stat group hover:bg-white transition-colors active reveal-perspective">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-stone-800 transition-colors" icon="lucide:clapperboard" strokeWidth="1.5"></iconify-icon>
<div className="">
<h2 className="text-5xl font-medium tracking-tighter">2025</h2>
<span className="text-xs font-mono text-stone-500 mt-1 block">
                AVAILABLE FOR Q2
              </span>
</div>
</div>

<div className="row-span-1 p-8 flex flex-col justify-between delay-700 hero-stat group hover:bg-white transition-colors relative overflow-hidden active reveal-perspective">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-stone-800 transition-colors" icon="lucide:graduation-cap" strokeWidth="1.5"></iconify-icon>
<div className="">
<h2 className="text-3xl font-medium tracking-tighter">Masters</h2>
<span className="text-xs font-mono text-stone-500 mt-1 block">
                CANDIDATE
              </span>
</div>
<div className="absolute top-4 right-4 animate-spin-slow">
<iconify-icon className="text-stone-200 text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" icon="lucide:disc" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="border-b border-stone-300 overflow-hidden py-5 bg-stone-100/50">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Scoring for Animation &amp; Horror
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Phi Beta Kappa Honors
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Based in USA
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Top Pianist - UNC Jazz Studies
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
</div>

<div className="marquee-content">
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Scoring for Animation &amp; Horror
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Phi Beta Kappa Honors
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Based in USA
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              Top Pianist - UNC Jazz Studies
            </span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">
              •
            </span>
</div>
</div>
</div>

<section className="z-10 overflow-hidden border-stone-300 border-b relative py-20 md:py-32">
<div className="flex flex-col items-center">
<div className="flex items-center gap-4 md:gap-8 reveal">
<h1 className="md:text-8xl lg:text-9xl font-semibold tracking-tighter text-stone-900 text-5xl">
<span className="text-reveal-wrapper">
<span className="text-reveal-content text-stone-900">Sonic</span>
</span>
</h1>
<div className="md:w-20 md:h-20 flex md:mt-4 hover:bg-stone-900 hover:text-white transition-all duration-500 bg-transparent w-12 h-12 border-stone-800 border rounded-full mt-4 items-center justify-center">
<svg className="text-2xl md:text-4xl" data-icon-set="lucide" data-lucide="audio-waveform" height="36" style={{}} viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h1 className="md:text-8xl lg:text-9xl font-semibold text-stone-900 tracking-tighter text-5xl">
<span className="text-reveal-wrapper">
<span className="text-reveal-content delay-100 text-stone-900">
                  Depth
                </span>
</span>
</h1>
</div>
<h1 className="md:text-8xl lg:text-9xl font-semibold tracking-tighter text-stone-400 text-5xl reveal delay-200">
<span className="text-reveal-wrapper">
<span className="text-reveal-content delay-200 pb-4">
                Storytelling
              </span>
</span>
</h1>
</div>
<div className="absolute top-1/2 left-0 w-full h-px bg-stone-300 -z-10"></div>

<div className="absolute top-10 right-[10%] opacity-20 parallax-element" data-speed="-0.02" style={{transform: 'translateY(0px)'}}>
<iconify-icon className="text-9xl" icon="lucide:music-4" strokeWidth="0.5"></iconify-icon>
</div>
</section>

<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-stone-300" id="about">

<div className="col-span-1 md:col-span-4 md:p-12 flex flex-col min-h-[400px] md:border-b-0 md:border-r border-stone-300 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="flex flex-col gap-8">
<svg className="text-5xl text-stone-800 reveal" data-icon-set="lucide" data-lucide="piano" height="48" viewbox="0 0 24 24" width="369" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8M2 14h20M6 14v4m4-4v4m4-4v4m4-4v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="">
<h3 className="uppercase text-sm font-bold text-stone-900 tracking-widest mb-6 reveal delay-100">
                Expertise
              </h3>
<div className="space-y-4">
<div className="flex border-stone-300 border-b pb-2 items-center justify-between reveal delay-200 hover:bg-stone-200/50 transition-colors p-2 rounded">
<span className="text-sm text-stone-600">Animation Scoring</span>
<svg className="text-stone-400 text-base w-[18px] h-[18px]" data-icon-set="lucide" data-lucide="check" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex items-center justify-between border-b border-stone-300 pb-2 reveal delay-300 hover:bg-stone-200/50 transition-colors p-2 rounded">
<span className="text-sm text-stone-600">Horror Soundscapes</span>
<iconify-icon className="text-stone-400 text-lg" icon="lucide:check"></iconify-icon>
</div>
<div className="flex items-center justify-between border-b border-stone-300 pb-2 reveal delay-400 hover:bg-stone-200/50 transition-colors p-2 rounded">
<span className="text-sm text-stone-600">Jazz Piano</span>
<iconify-icon className="text-stone-400 text-lg" icon="lucide:check"></iconify-icon>
</div>
<div className="flex items-center justify-between border-b border-stone-300 pb-2 reveal delay-500 hover:bg-stone-200/50 transition-colors p-2 rounded">
<span className="text-sm text-stone-600">Music Production</span>
<iconify-icon className="text-stone-400 text-lg" icon="lucide:check"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-8 md:p-12 md:pr-24 flex flex-col delay-100 pt-8 pr-8 pb-8 pl-8 justify-center">
<div className="prose prose-lg text-stone-600 leading-relaxed space-y-6">
<p className="text-xl md:text-2xl font-medium text-stone-900 reveal">
              Ian specializes in scoring animation and horror. In 2025, Ian was
              awarded
              <span className="text-stone-400">"Best Animated Short"</span>
              for his work on at ExpoEAAD in Mexico,
              <span className="text-stone-400">"Best Horror Short"</span>
              and the
              <span className="text-stone-400">"Platinum Award"</span>
              for his work on at Roswell Festival and Global Indie Filmmaker
              Awards, and eight separate awards for his work on at Buried Alive
              Festival.
            </p>
<p className="text-base text-stone-600 reveal delay-100">
              In addition to scoring, Ian has toured the US as the keyboardist
              for the rock ensemble, , recording multiple albums with
              grammy-nominated producer, TJ Elias (GroupLove, Walk the Moon).
              Ian received his bachelor's degree in Jazz Studies from the
              University of North Carolina, graduating with Phi Beta Kappa
              Honors as the top pianist in the program. He is now pursuing a
              Masters in Film Composition.
            </p>
</div>
<div className="flex gap-6 items-center mt-10 reveal delay-200">
<button className="px-6 py-3 bg-stone-900 text-white rounded-md text-sm font-medium hover:bg-stone-700 transition-all flex items-center gap-2 group">
              Download CV
              <iconify-icon className="text-lg group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down-to-line"></iconify-icon>
</button>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 border-b border-stone-400 hover:border-stone-900 pb-0.5 transition-colors" href="#work">
              Listen to Reel
            </a>
</div>
</div>
</section>

<section className="relative z-10 py-12" id="work">
<div className="px-4 md:px-6 mb-12 flex justify-between items-end">
<div className="reveal">
<span className="text-xs font-mono uppercase text-stone-500 mb-2 block">
              01 / Recent Projects
            </span>
<h3 className="text-4xl font-medium tracking-tight">Selected Works</h3>
</div>
<iconify-icon className="text-3xl text-stone-400 reveal delay-100" icon="lucide:arrow-down-right" strokeWidth="1.5"></iconify-icon>
</div>

<div className="group border-y border-stone-300 bg-[#EAEAE5] hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[250px]">
<div className="col-span-1 md:col-span-5 p-8 md:p-12 border-r border-stone-300/0 md:border-stone-300 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-stone-500">01</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Score
                </span>
</div>
<h4 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                Requiem Croa
              </h4>
<p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                Original score blending atmospheric tension with orchestral
                elements.
              </p>
</div>
<div className="col-span-1 md:col-span-7 block relative overflow-hidden reveal reveal-perspective delay-200 h-64 md:h-auto">
<div className="absolute inset-0 bg-stone-100 flex items-center justify-center p-8">

<img className="group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1ebfce9-b9c9-4b21-a60a-deee61eca900_1600w.png"/>
<div className="flex group-hover:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="flex items-center justify-center bg-white/90 w-16 h-16 rounded-full backdrop-blur">
<svg className="text-2xl text-black ml-1" data-icon-set="lucide" data-lucide="play" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="group border-b border-stone-300 bg-[#EAEAE5] hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[250px]">
<div className="col-span-1 md:col-span-5 p-8 md:p-12 border-r border-stone-300/0 md:border-stone-300 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-stone-500">02</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Horror Short
                </span>
</div>
<h4 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                Night Shift at Ned's
              </h4>
<p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                Award-winning trailer score utilizing found sounds and dissonant
                piano.
              </p>
</div>
<div className="col-span-1 md:col-span-7 block relative overflow-hidden reveal reveal-perspective delay-200 h-64 md:h-auto">
<div className="absolute inset-0 bg-stone-100 flex items-center justify-center p-8">

<img className="group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa13e90a-ab72-4488-957c-c0362926c24e_1600w.png"/>
</div>
</div>
</div>
</div>

<div className="group border-b border-stone-300 bg-[#EAEAE5] hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[250px]">
<div className="col-span-1 md:col-span-5 p-8 md:p-12 border-r border-stone-300/0 md:border-stone-300 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-stone-500">03</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Audio Branding
                </span>
</div>
<h4 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                ISM Podcast
              </h4>
<p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                Complete sonic identity and intro/outro themes for weekly
                series.
              </p>
</div>
<div className="col-span-1 md:col-span-7 block relative overflow-hidden reveal reveal-perspective delay-200 h-64 md:h-auto">
<div className="absolute inset-0 bg-stone-100 flex items-center justify-center p-8">

<img className="group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 object-repeat opacity-80 w-full h-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a834c69-c464-4cee-b071-735338a122e4_3840w.png"/>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 reveal">
<a className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest border border-stone-900 rounded-full px-8 py-3 hover:bg-stone-900 hover:text-white transition-all" href="#">
            View Complete Discography
            <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</section>

<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-t border-stone-300 mt-24" id="awards">

<div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col justify-between min-h-[300px] reveal bg-stone-200">
<div className="">
<span className="text-xs font-mono uppercase text-stone-500 mb-2 block">
              02 / Recognition
            </span>
<h2 className="text-5xl font-medium tracking-tight">Awards</h2>
</div>
<div className="flex items-end justify-between">
<iconify-icon className="text-5xl text-stone-800" icon="lucide:trophy" strokeWidth="1"></iconify-icon>
<span className="text-xs font-mono text-stone-500">[2024-2025]</span>
</div>
</div>

<div className="col-span-1 md:col-span-8 p-8 md:p-12">

<div className="border-b border-stone-200 pb-8 mb-8 reveal delay-100">
<h3 className="text-xl font-bold uppercase tracking-wide mb-4 flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="lucide:clapperboard"></iconify-icon>
              Forces From Beyond
            </h3>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
<li className="flex items-start gap-2">
<iconify-icon className="text-stone-900 mt-1" icon="lucide:star" width="16"></iconify-icon>
<span className="text-sm text-stone-600">
                  Buried Alive Festival (Inc. Best Sound)
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-stone-900 mt-1" icon="lucide:star" width="16"></iconify-icon>
<span className="text-sm text-stone-600">
                  ExpoEAAD Film Festival (Mexico)
                </span>
</li>
</ul>
</div>

<div className="reveal delay-200 border-stone-200 border-b mb-8 pb-8">
<h3 className="uppercase flex items-center gap-3 text-xl font-bold tracking-wide mb-4">
<iconify-icon className="text-stone-400" icon="lucide:ghost"></iconify-icon>
              Night Shift at Ned's
            </h3>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
<li className="flex items-start gap-2">
<iconify-icon className="text-stone-900 mt-1" icon="lucide:star" width="16"></iconify-icon>
<span className="text-sm text-stone-600">
                  Roswell Shorts Festival (New Mexico)
                </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-stone-900 mt-1" icon="lucide:medal" width="16"></iconify-icon>
<span className="text-sm text-stone-600">
                  Global Indie Filmmaker’s Festival (England)
                </span>
</li>
</ul>
</div>
</div>
</section>

<section className="relative z-10 border-b border-stone-300 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[400px]">

<div className="relative group h-[300px] md:h-full border-b md:border-b-0 md:border-r border-stone-300 bg-stone-100 overflow-hidden">
<div className="absolute top-6 left-6 z-20">
<span className="text-xs font-mono uppercase bg-black text-white px-2 py-1">
                In Production
              </span>
</div>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-2xl font-bold text-white mb-1">
                I Think You Should Quit
              </h3>
<p className="text-sm text-stone-300">
                Video Game • Designed by Ethan Mattingly
              </p>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group h-[300px] md:h-full bg-stone-100 overflow-hidden">
<div className="absolute top-6 left-6 z-20">
<span className="text-xs font-mono uppercase bg-black text-white px-2 py-1">
                In Production
              </span>
</div>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-2xl font-bold text-white mb-1">Canapé</h3>
<p className="text-sm text-stone-50">
                Animated Short • Directed by Elena Saborio
              </p>
</div>
<div className="bg-center bg-gradient-to-t from-black/80 to-transparent opacity-100 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e1b9cad-a3ca-4857-99db-5eaaf535b4cd_1600w.png)] bg-cover z-10 absolute top-0 right-0 bottom-0 left-0group-hover:scale-105 grayscale"></div>

<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="z-10 text-stone-200 bg-stone-900 pt-24 pb-12 relative">

<div className="md:px-12 text-center mb-24 pr-6 pl-6">
<div className="reveal">
<h2 className="md:text-7xl font-medium text-white tracking-tighter mb-8 text-4xl">
              Let's create something
              <br/>
              extraordinary together.
            </h2>
<a className="inline-block hover:bg-white hover:text-stone-900 transition-all duration-300 text-lg border-stone-700 border rounded-full pt-4 pr-8 pb-4 pl-8" href="mailto:ian@example.com">
              Start a Project
            </a>
</div>
</div>
<div className="w-full border-stone-800 border-t mb-12"></div>

<div className="grid grid-cols-1 md:grid-cols-12 md:px-12 gap-12 md:gap-0 pr-6 pl-6">
<div className="col-span-1 md:col-span-3 reveal delay-100">
<div className="flex gap-2 mb-6 items-center">
<svg className="text-xl" data-icon-set="lucide" data-lucide="music" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</g>
</svg>
<span className="text-lg font-bold tracking-tight">IAN.PAYNE</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed max-w-[200px]">
              Film composer focusing on animation and horror. UNC Jazz Studies
              Alum.
            </p>
</div>
<div className="col-span-1 md:col-span-3 reveal delay-200">
<h4 className="text-xs font-mono uppercase text-stone-500 mb-6">
              Sitemap
            </h4>
<ul className="space-y-3 text-sm font-medium">
<li className="">
<a className="hover:text-white transition-colors" href="#work">
                  Selected Work
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#awards">
                  Awards
                </a>
</li>
</ul>
</div>
<div className="col-span-1 md:col-span-3 reveal delay-300">
<h4 className="text-xs font-mono uppercase text-stone-500 mb-6">
              Socials
            </h4>
<ul className="space-y-3 text-sm font-medium">
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
                  Instagram
                  <iconify-icon className="text-xs text-stone-600" icon="lucide:arrow-up-right"></iconify-icon>
</a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
                  Spotify
                  <iconify-icon className="text-xs text-stone-600" icon="lucide:arrow-up-right"></iconify-icon>
</a>
</li>
</ul>
</div>
<div className="col-span-1 md:col-span-3 flex flex-col h-full justify-between reveal delay-400">
<div className="text-right hidden md:block">
<iconify-icon className="text-4xl text-stone-800" icon="lucide:globe" strokeWidth="1"></iconify-icon>
</div>
<div className="text-left md:text-right mt-4 md:mt-0">
<span className="text-xs text-stone-600">© 2025 Ian Music.</span>
<span className="text-xs text-stone-600 block">
                All Rights Reserved.
              </span>
</div>
</div>
</div>

<div className="pointer-events-none select-none overflow-hidden text-center opacity-10 mt-24">
<span className="text-[8rem] leading-none whitespace-nowrap md:text-[16rem] font-bold tracking-tighter">
            IAN.PAYNE
          </span>
</div>
</footer>
</div>


    </>
  );
}
