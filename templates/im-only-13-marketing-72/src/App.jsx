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



      const musicBtn = document.getElementById('music-btn');
      const bgAudio = document.getElementById('bg-audio');
      const iconOff = document.getElementById('music-icon-off');
      const iconOn = document.getElementById('music-icon-on');

      bgAudio.volume = 0.2;

      musicBtn.addEventListener('click', () => {
        if (bgAudio.paused) {
          bgAudio.play();
          iconOff.classList.add('hidden');
          iconOn.classList.remove('hidden');
          musicBtn.classList.add('bg-white', 'text-black');
          musicBtn.classList.remove('bg-black', 'text-white');
        } else {
          bgAudio.pause();
          iconOff.classList.remove('hidden');
          iconOn.classList.add('hidden');
          musicBtn.classList.remove('bg-white', 'text-black');
          musicBtn.classList.add('bg-black', 'text-white');
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
      

<main className="overflow-hidden w-full">

<section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-black pt-20 bg-black" id="home">

<div className="absolute inset-0 w-full h-full z-0">


<img alt="Young performer standing on stage with microphone in a cinematic spotlight" className="w-full h-full object-cover object-center opacity-[0.9] saturate-0 contrast-125 animate-subtle-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c0b2565-dfe5-4e8a-8d92-0ee022a32dd1_3840w.jpg"/>
<div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">

<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/10 rounded-full blur-[120px] flare-effect mix-blend-screen" style={{animationDelay: '0s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-400/10 rounded-full blur-[100px] flare-effect mix-blend-screen" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[80px] flare-effect mix-blend-overlay" style={{animationDelay: '-10s'}}></div>

<div className="dust-particle w-1 h-1 left-[10%]" style={{animationDuration: '15s', animationDelay: '0s'}}></div>
<div className="dust-particle w-[3px] h-[3px] left-[25%]" style={{animationDuration: '25s', animationDelay: '-5s'}}></div>
<div className="dust-particle w-[2px] h-[2px] left-[40%]" style={{animationDuration: '18s', animationDelay: '-10s'}}></div>
<div className="dust-particle w-1 h-1 left-[55%]" style={{animationDuration: '22s', animationDelay: '-2s'}}></div>
<div className="dust-particle w-[4px] h-[4px] left-[70%]" style={{animationDuration: '30s', animationDelay: '-15s'}}></div>
<div className="dust-particle w-[2px] h-[2px] left-[85%]" style={{animationDuration: '20s', animationDelay: '-8s'}}></div>
<div className="dust-particle w-1 h-1 left-[15%]" style={{animationDuration: '28s', animationDelay: '-3s'}}></div>
<div className="dust-particle w-[3px] h-[3px] left-[60%]" style={{animationDuration: '16s', animationDelay: '-12s'}}></div>
<div className="dust-particle w-[2px] h-[2px] left-[90%]" style={{animationDuration: '24s', animationDelay: '-6s'}}></div>
</div><div className="bg-gradient-to-t to-transparent from-black via-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-[90rem] mx-auto reveal-up mt-[-5vh]">
<p className="text-xs font-medium tracking-[0.2em] uppercase mb-8 text-gray-300">
            Im Only 13 Marketing
          </p>
<h1 className="md:text-[120px] leading-[0.9] uppercase text-6xl font-medium text-white tracking-tight-custom mb-10"></h1>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
<a className="bg-black text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10" href="#services">
              Explore Services
            </a>
<a className="px-8 py-4 rounded-full font-medium text-sm transition-colors flex items-center gap-2 group text-white hover:text-gray-300" href="#about">
              Our Story
              <svg aria-hidden="true" className="iconify w-4 h-4 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-32 bg-white relative z-10" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal-up border-b border-gray-100 pb-12">
<div className="">
<h2 className="text-4xl md:text-7xl font-medium tracking-tight-custom mb-6">
              Our Services
            </h2>
<p className="text-gray-500 max-w-xl text-xl leading-relaxed font-normal">
              Comprehensive marketing solutions driven by resilience and
              creativity.
            </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors pb-2" href="#contact">
            Get a quote
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-up reveal-delay-1">

<div className="group border border-gray-200 p-10 rounded-[2rem] hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white">
<div className="mb-10 p-3 bg-gray-50 w-fit rounded-xl border border-gray-100">
<svg aria-hidden="true" className="iconify w-6 h-6 text-gray-900 iconify--lucide" data-icon="lucide:video" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</g>
</svg>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight">
              High-Quality Video Production
            </h3>
<p className="text-gray-500 mb-10 leading-relaxed font-normal text-lg">
              Cinematic storytelling that captures your brand's essence. From
              commercials to social clips.
            </p>
<a className="inline-flex items-center text-sm font-medium gap-2 text-gray-900 group-hover:gap-3 transition-all opacity-60 group-hover:opacity-100" href="#">
              Learn More
              <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="group hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white border-gray-200 border rounded-[2rem] pt-10 pr-10 pb-10 pl-10">
<div className="mb-10 p-3 bg-gray-50 w-fit rounded-xl border border-gray-100">
<svg aria-hidden="true" className="iconify w-6 h-6 text-gray-900 iconify--lucide" data-icon="lucide:share-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path>
</g>
</svg>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight">
              Social Media Management
            </h3>
<p className="text-gray-500 mb-10 leading-relaxed font-normal text-lg">
              Strategic growth and community engagement across all major
              platforms.
            </p>
<a className="inline-flex items-center text-sm font-medium gap-2 text-gray-900 group-hover:gap-3 transition-all opacity-60 group-hover:opacity-100" href="#">
              Learn More
              <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="group border border-gray-200 p-10 rounded-[2rem] hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white">
<div className="mb-10 p-3 bg-gray-50 w-fit rounded-xl border border-gray-100">
<svg aria-hidden="true" className="iconify w-6 h-6 text-gray-900 iconify--lucide" data-icon="lucide:pen-tool" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
<path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path>
<circle cx="11" cy="11" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight">
              Content Creation Strategies
            </h3>
<a className="inline-flex items-center text-sm font-medium gap-2 text-gray-900 group-hover:gap-3 transition-all opacity-60 group-hover:opacity-100" href="#">
              Learn More
              <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<p className="leading-relaxed text-lg font-normal text-gray-500 mb-10">
              Data-driven content calendars and asset creation designed to
              convert.
            </p>
</div>

<div className="group border border-gray-200 p-10 rounded-[2rem] hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white">
<div className="mb-10 p-3 bg-gray-50 w-fit rounded-xl border border-gray-100">
<svg aria-hidden="true" className="iconify w-6 h-6 text-gray-900 iconify--lucide" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight">
              Brand Development
            </h3>
<p className="text-gray-500 mb-10 leading-relaxed font-normal text-lg">
              Building resilient identities that resonate with your target
              audience.
            </p>
<a className="inline-flex items-center text-sm font-medium gap-2 text-gray-900 group-hover:gap-3 transition-all opacity-60 group-hover:opacity-100" href="#">
              Learn More
              <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 pb-32" id="portfolio">
<div className="flex flex-col items-center gap-6 text-center mb-24 reveal-up">
<h2 className="text-4xl md:text-8xl font-medium tracking-tight-custom leading-none text-gray-900">
            Selected Work
          </h2>
<p className="text-gray-500 font-normal text-xl">
            Results that speak for themselves.
          </p>
</div>

<div className="reveal-up project-card group relative w-full mb-24">
<a className="block w-full" href="#">
<div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[2rem] bg-gray-100">
<img alt="Marketing Campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8199788e-b77e-4159-8504-37ca2bcefe7b_3840w.jpg" style={{}}/>
<div className="project-overlay absolute inset-0 bg-black/20 opacity-0"></div>
<div className="view-btn absolute top-1/2 left-1/2 opacity-0 bg-white text-black px-6 py-3 rounded-full font-medium text-sm pointer-events-none shadow-2xl">
                View Case Study
              </div>
</div>
<div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 pb-8">
<div>
<h3 className="text-3xl font-medium tracking-tight mb-2">
                  Apex Athletics
                </h3>
<p className="text-base text-gray-500">
                  Brand Rebrand &amp; Video Campaign
                </p>
</div>
<div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
<svg aria-hidden="true" className="iconify text-orange-500 w-4 h-4 iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-sm text-gray-600 italic">
                  "Incredible attention to detail."
                </p>
</div>
</div>
</a>
</div>

<div className="reveal-up project-card group relative w-full mb-12">
<a className="block w-full" href="#">
<div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-[2rem] bg-gray-100">
<img alt="Video Production" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7897751-ac8d-4c6b-94d1-f27606a66955_3840w.jpg"/>
<div className="project-overlay absolute inset-0 bg-black/20 opacity-0"></div>
<div className="view-btn absolute top-1/2 left-1/2 opacity-0 bg-white text-black px-6 py-3 rounded-full font-medium text-sm pointer-events-none shadow-2xl">
                View Case Study
              </div>
</div>
<div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 pb-8">
<div>
<h3 className="text-3xl font-medium tracking-tight mb-2">
                  Urban Future
                </h3>
<p className="text-base text-gray-500">
                  Social Media Strategy &amp; Content
                </p>
</div>
<div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
<svg aria-hidden="true" className="iconify text-orange-500 w-4 h-4 iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-sm text-gray-600 italic">
                  "Boosted our engagement by 200%."
                </p>
</div>
</div>
</a>
</div>
</section>

<section className="bg-gray-50 py-32 border-y border-gray-200" id="about">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="reveal-up order-2 md:order-1">
<p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
                The Founder's Story
              </p>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight-custom mb-8 text-gray-900">
                Jonathan Cobb
              </h2>
<div className="space-y-6 text-xl text-gray-600 leading-relaxed font-normal">
<p>
                  The doctors said I would never be the same after a bullet from
                  an AK-47 damaged my brain. Simple tasks like using my legs and
                  arms became monumental efforts.
                </p>
<p>
                  Miraculously, the injury forced me to tap into different parts
                  of my brain. This experience is the foundation of our
                  marketing company. We exist to prove that despite any
                  challenge—
                  <span className="text-black font-medium">
                    where there’s a will, there’s a way.
                  </span>
</p>
<p className="text-gray-900 text-lg border-l-2 border-black pl-6 italic">
                  This company is not just a business; it is the physical proof
                  and testimony of that indomitable human spirit.
                </p>
</div>
<div className="mt-12 opacity-70">

<div className="h-16 w-48 bg-gray-300/20 rounded animate-pulse"></div>
</div>
</div>

<div className="reveal-up reveal-delay-1 relative order-1 md:order-2">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-gray-200/50 transform rotate-2 hover:rotate-0 transition-transform duration-700">
<img alt="Johnathan Cobb" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6c8d3ad-e563-46d7-abaf-90720162bd1d_1600w.jpg"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-gray-100 hidden md:block">
<svg aria-hidden="true" className="iconify text-black w-8 h-8 mb-4 iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-base font-medium text-gray-900 leading-snug">
                  "We turn adversity into opportunity."
                </p>
<p className="text-sm text-gray-500 mt-3 font-medium">
                  — CEO &amp; Founder
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-32" id="contact">
<div className="grid md:grid-cols-2 gap-24">
<div className="reveal-up">
<h2 className="text-5xl md:text-8xl font-medium tracking-tight-custom mb-8 text-gray-900">
              Let's talk.
            </h2>
<p className="text-2xl text-gray-500 mb-16 font-normal">
              Ready to elevate your brand? Fill out the form or drop us a line
              directly.
            </p>
<div className="space-y-10">
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Contact
                </h4>
<p className="text-xl font-medium text-black">hello@imonly13.com</p>
<p className="text-xl font-medium text-gray-500">
                  +1 (618)365-5433)
                </p>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Location
                </h4>
<p className="text-xl font-medium text-black">East St. Louis IL. </p>
<a className="text-sm text-gray-500 underline decoration-gray-300 underline-offset-4 mt-2 inline-block hover:text-black transition-colors" href="#">
                  View on Map
                </a>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Follow Us
                </h4>
<div className="flex gap-4">
<a className="w-12 h-12 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-full hover:bg-black hover:text-white transition-all hover:scale-110 group" href="#">
<svg aria-hidden="true" className="iconify w-5 h-5 group-hover:text-white iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="w-12 h-12 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-full hover:bg-black hover:text-white transition-all hover:scale-110 group" href="#">
<svg aria-hidden="true" className="iconify w-5 h-5 group-hover:text-white iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="w-12 h-12 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-full hover:bg-black hover:text-white transition-all hover:scale-110 group" href="#">
<svg aria-hidden="true" className="iconify w-5 h-5 group-hover:text-white iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
</div>
</div>
</div>
</div>
<div className="reveal-up reveal-delay-1">
<form className="space-y-6 bg-white rounded-3xl p-2">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="name">
                    Name
                  </label>
<input className="custom-input w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:bg-white focus:border-black/20 focus:outline-none transition-all placeholder:text-gray-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="email">
                    Email
                  </label>
<input className="custom-input w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:bg-white focus:border-black/20 focus:outline-none transition-all placeholder:text-gray-400" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="phone">
                  Phone
                </label>
<input className="custom-input w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:bg-white focus:border-black/20 focus:outline-none transition-all placeholder:text-gray-400" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1" htmlFor="message">
                  Message
                </label>
<textarea className="custom-input w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-base focus:bg-white focus:border-black/20 focus:outline-none transition-all placeholder:text-gray-400" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-black text-white font-medium text-lg py-5 rounded-xl hover:bg-gray-800 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-black/10" type="button">
                Send Message
              </button>
</form>
</div>
</div>
</section>
</main>
<nav className="fixed z-50 transition-all duration-300 bg-white/80 w-full border-gray-100/50 border-b top-0 right-0 left-0 backdrop-blur-xl">
<div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">

<a className="uppercase text-sm font-medium text-black tracking-tight z-10 relative" href="#"></a>

<div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
<a className="hover:text-black transition-colors text-sm font-normal text-gray-500" href="#home">
            Home
          </a>
<a className="text-sm font-normal text-gray-500 hover:text-black transition-colors" href="#services">
            Services
          </a>
<a className="text-sm font-normal text-gray-500 hover:text-black transition-colors" href="#portfolio">
            Portfolio
          </a>
<a className="hover:text-black transition-colors text-sm font-normal text-gray-500" href="#about">
            About
          </a>
</div>

<a className="group flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all active:scale-95 text-sm font-medium" href="#contact">
<span>Contact</span>
<svg aria-hidden="true" className="iconify w-4 h-4 text-white/70 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</nav>


<footer className="w-full bg-white border-t border-gray-200 text-black">
<div className="max-w-[1400px] mx-auto px-6 py-20">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="text-sm font-semibold tracking-tight uppercase mb-8 block" href="#">
              Im Only 13 Marketing
            </a>
<p className="text-gray-500 text-base leading-relaxed">
              Proving that despite any challenge, where there’s a will, there’s
              a way.
            </p>
</div>
<div>
<h4 className="font-medium mb-6 text-sm uppercase tracking-wider text-gray-400">
              Company
            </h4>
<ul className="space-y-4 text-base text-gray-500">
<li>
<a className="hover:text-black transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#services">
                  Services
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#portfolio">
                  Portfolio
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-sm uppercase tracking-wider text-gray-400">
              Legal
            </h4>
<ul className="space-y-4 text-base text-gray-500">
<li>
<a className="hover:text-black transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-black transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-sm uppercase tracking-wider text-gray-400">
              Newsletter
            </h4>
<p className="text-gray-500 text-base mb-4">
              Stay updated with our latest insights.
            </p>
<div className="flex gap-2">
<input className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm w-full focus:border-black focus:outline-none transition-colors custom-input" placeholder="Email address" type="email"/>
<button className="bg-black text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Join
              </button>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
<p>© 2024 Im Only 13 Marketing. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-black transition-colors" href="#">Instagram</a>
<a className="hover:text-black transition-colors" href="#">Twitter</a>
<a className="hover:text-black transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>
<div className="fixed bottom-6 right-6 z-[100]">
<button className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-800" id="music-btn">
<span className="sr-only">Toggle Music</span>

<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:volume-x" data-icon-replaced="true" height="1em" id="music-icon-off" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<polygon className="" points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<line x1="23" x2="17" y1="9" y2="15"></line>
<line x1="17" x2="23" y1="9" y2="15"></line>
</g>
</svg>

<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide hidden" data-icon="lucide:music" height="1em" id="music-icon-on" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</g>
</svg>
</button>
</div>
<audio id="bg-audio" loop="">
<source src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg"/>
</audio>

  
365
    </>
  );
}
