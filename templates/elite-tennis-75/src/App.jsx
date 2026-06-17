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



      // Initialize Lucide Icons
      lucide.createIcons();

      const root = document.documentElement;

      document.addEventListener('DOMContentLoaded', () => {
          // 2. Text Reveal Animation
          const revealText = document.querySelector('.reveal-text');
          if (revealText) {
              const text = revealText.innerText;
              revealText.innerHTML = '';
              text.split(' ').forEach(word => {
                  const span = document.createElement('span');
                  span.innerText = word + ' ';
                  revealText.appendChild(span);
              });

              const spans = revealText.querySelectorAll('span');
              const handleScrollReveal = () => {
                  const rect = revealText.getBoundingClientRect();
                  const viewHeight = window.innerHeight;
                  if (rect.top < viewHeight && rect.bottom > 0) {
                      const percent = 1 - (rect.bottom / (viewHeight + rect.height));
                      const activeIndex = Math.floor(percent * spans.length * 2.5);
                      spans.forEach((span, index) => {
                          if (index < activeIndex) span.classList.add('active');
                          else span.classList.remove('active');
                      });
                  }
              };
              window.addEventListener('scroll', handleScrollReveal);
          }

          // 3. Parallax Effect
          const parallaxItems = document.querySelectorAll('.parallax-item');
          const handleParallax = () => {
              parallaxItems.forEach(item => {
                  const speed = parseFloat(item.getAttribute('data-speed'));
                  const rect = item.getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                      const centerOffset = (window.innerHeight / 2) - (rect.top + rect.height / 2);
                      const yPos = centerOffset * speed;
                      item.style.transform = `translate3d(0, ${yPos}px, 0)`;
                  }
              });
          };
          window.addEventListener('scroll', handleParallax, { passive: true });

          // 4. Navbar Logic
          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) navbar.classList.add('bg-zinc-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
              else navbar.classList.remove('bg-zinc-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
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
      

<nav className="fixed top-0 w-full z-50 py-6 transition-all duration-300" id="navbar">
<div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
<a className="hover:text-white transition-colors hover:text-[#DFFF4F]" href="#philosophy">
            Philosophy
          </a>
<a className="hover:text-white transition-colors" href="#history">
            Legacy
          </a>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<a className="font-serif text-3xl hover:opacity-80 transition-opacity text-white tracking-tight" href="#">
            VANCE
          </a>
</div>

<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
<a className="hover:text-white transition-colors hover:text-[#DFFF4F]" href="#programs">
              Training
            </a>
<a className="hover:text-white transition-colors" href="#methodology">
              Methodology
            </a>
<a className="hover:text-white transition-colors" href="#academy">
              Academy
            </a>
<a className="hover:bg-[#DFFF4F] hover:text-black transition-colors bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
              Inquire
            </a>
</div>
<button className="flex items-center gap-2 text-white transition-colors md:hidden hover:text-[#DFFF4F]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="overflow-hidden flex w-full h-screen relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Tennis Court" className="w-full h-full object-cover opacity-50 grayscale contrast-125" src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/20 to-zinc-950"></div>
<div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
<div className="w-[80vw] h-[1px] bg-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="h-[80vh] w-[1px] bg-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="w-[500px] h-[500px] rounded-full border border-[#DFFF4F]/20 absolute opacity-60 animate-[pulse_6s_ease-in-out_infinite]"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
<p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up text-[#DFFF4F]">
          ATP Certified • High Performance
        </p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
          Match
          <br/>
<span className="italic text-white/90">Point.</span>
</h1>
<p className="md:text-base leading-relaxed text-sm font-light text-zinc-300 opacity-90 max-w-lg mr-auto ml-auto">
          The difference between a player and a champion isn't just the swing.
          It's the mind, the movement, and the moment.
        </p>
</div>

<div className="absolute bottom-12 left-12 flex items-center gap-4 text-white/50 animate-bounce">
<svg className="lucide lucide-arrow-down w-6 h-6" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="text-[10px] uppercase tracking-widest">Serve</span>
</div>

<div className="absolute bottom-12 right-12 hidden md:block">
<div className="relative w-32 h-32 flex items-center justify-center cursor-pointer group">
<div className="w-20 h-20 rounded-full bg-[#DFFF4F]/10 backdrop-blur-sm border border-[#DFFF4F]/30 flex items-center justify-center group-hover:bg-[#DFFF4F] transition-colors duration-500">
<svg className="lucide lucide-activity w-6 h-6 text-white group-hover:text-black transition-colors" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<svg className="animate-spin-slow w-[128px] h-[128px] absolute top-0 right-0 bottom-0 left-0" strokeWidth="2" style={{color: '#DFFF4F'}} viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-[10px] uppercase font-medium tracking-[0.2em]" fill="currentColor">
<textpath href="#circlePath">
                • Elite Coaching • Performance
              </textpath>
</text>
</svg>
</div>
</div>
</header>

<section className="bg-zinc-950 pt-32 pb-32 relative" id="philosophy">
<div className="max-w-4xl mx-auto px-6">
<p className="reveal-text font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-white text-center"><span>Success </span><span>is </span><span>not </span><span>an </span><span>accident. </span><span>It </span><span>is </span><span>hard </span><span>work, </span><span>perseverance, </span><span>learning, </span><span>studying, </span><span>sacrifice, </span><span>and </span><span>most </span><span>of </span><span>all, </span><span>love </span><span>of </span><span>what </span><span>you </span><span>are </span><span>doing </span><span>or </span><span>learning </span><span>to </span><span>do. </span><span>We </span><span>build </span><span>champions </span><span>from </span><span>the </span><span>inside </span><span>out. </span></p>
</div>
</section>

<section className="overflow-hidden bg-zinc-950 pt-32 pb-32 relative" id="history">

<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
<svg height="100%" width="100%">
<line stroke="white" strokeWidth="1" x1="15%" x2="15%" y1="0" y2="100%"></line>
<line stroke="white" strokeWidth="1" x1="85%" x2="85%" y1="0" y2="100%"></line>
<line stroke="white" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%"></line>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="">
<span className="text-accent text-xs font-bold tracking-widest uppercase block mb-4 text-[#DFFF4F]">
              The Track Record
            </span>
<h2 className="font-serif text-5xl text-white">Proven Results.</h2>
</div>
<div className="text-right hidden md:block">
<p className="text-zinc-500 text-sm max-w-xs">
              From Junior Circuits to Grand Slams.
              <br/>
              Development without compromise.
            </p>
</div>
</div>

<div className="grid grid-cols-12 lg:gap-y-0 lg:h-[900px] gap-x-y-24 gap-y-24">

<div className="col-span-12 md:col-span-6 lg:col-span-5 relative group parallax-item" data-speed="0.05" style={{transform: 'translate3d(0px, 37.208px, 0px)'}}>
<div className="overflow-hidden aspect-[4/5] relative block">
<img alt="Clay Court" className="img-scale-hover hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aa73a69-413a-4832-9c32-659e8aa3ecbd_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/90 to-transparent w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<span className="font-serif text-2xl text-white block italic">
                  Roland Garros
                </span>
<span className="uppercase text-xs text-white/60 tracking-widest">
                  Clay Court Specialist
                </span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8 lg:mt-12 parallax-item relative group overflow-hidden" data-speed="-0.02" style={{transform: 'translate3d(0px, -13.7832px, 0px)'}}>
<div className="absolute inset-0 bg-zinc-900 w-full h-full border border-white/5"></div>
<div className="bg-zinc-900/50 backdrop-blur-md p-8 relative z-10 h-full flex flex-col justify-center">
<div className="absolute -top-6 -right-6 text-6xl text-[#DFFF4F] opacity-20 font-serif">
                "
              </div>
<h3 className="font-serif text-2xl text-white mb-4">
                Mental Fortitude.
              </h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Technique gets you to the point, but mentality wins the match. My methodology prioritizes cognitive resilience under pressure, turning breakpoints into breakthroughs.
              </p>
<div className="h-[1px] w-12 bg-[#DFFF4F]"></div>
</div>
</div>

<div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 lg:-mt-32 relative z-20 parallax-item" data-speed="0.08" style={{transform: 'translate3d(0px, 57.1339px, 0px)'}}>
<div className="relative overflow-hidden aspect-[3/4] border-4 border-zinc-950 shadow-2xl block">
<img alt="Service Motion" className="img-scale-hover hover:grayscale-0 transition-all duration-700 bg-center w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1711055909181-20bdede493ea?w=1600&amp;q=80"/>
<div className="absolute top-6 right-6">
<div className="bg-[#DFFF4F] p-2 rounded-full">
<svg className="lucide lucide-award w-5 h-5 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="7"></circle>
<polyline className="" points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-5 lg:col-span-3 lg:col-start-2 lg:-mt-12 parallax-item" data-speed="0.03" style={{transform: 'translate3d(0px, 16.4695px, 0px)'}}>
<div className="relative overflow-hidden aspect-square block">
<img alt="Racket Details" className="w-full h-full object-cover img-scale-hover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="mt-4 flex items-center gap-4">
<span className="h-[1px] w-8 bg-zinc-700"></span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                Precision Gear
              </span>
</div>
</div>

<div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-3 lg:col-start-9 lg:mt-24 parallax-item" data-speed="0.06" style={{transform: 'translate3d(0px, 28.0487px, 0px)'}}>
<div className="space-y-8">
<div>
<span className="block text-4xl text-white font-serif mb-1">
                  12
                </span>
<span className="uppercase text-xs text-zinc-500 tracking-widest">
                  D1 Scholarships
                </span>
</div>
<div>
<span className="block text-4xl text-white font-serif mb-1">3</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                  ATP Top 100
                </span>
</div>
<div>
<span className="block text-4xl text-white font-serif mb-1">4</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                  Grand Slam Visits
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-32 pb-32 relative" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-[#DFFF4F] text-xs font-bold tracking-widest uppercase mb-4 block">
            Development
          </span>
<h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Training Regimens
          </h2>
<div className="w-16 h-[1px] bg-[#DFFF4F] mx-auto"></div>
</div>
<div className="max-w-2xl mx-auto relative bg-zinc-900/20 p-12 border border-white/5 shadow-2xl backdrop-blur-sm">

<div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#DFFF4F] opacity-50"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#DFFF4F] opacity-50"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#DFFF4F] opacity-50"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#DFFF4F] opacity-50"></div>

<div className="text-center mb-16">
<h3 className="font-serif italic text-4xl md:text-5xl text-white">
              technical + tactical
            </h3>
</div>

<div className="space-y-12 mb-16">

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-[#DFFF4F] transition-colors">
                  Private 1-on-1
                </h4>
<span className="text-sm font-semibold text-white/90">$150/hr</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Complete stroke analysis, biomechanical correction, and personalized drill sequencing.
              </p>
</div>

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-[#DFFF4F] transition-colors">
                  Semi-Private Clinic
                </h4>
<span className="text-sm font-semibold text-white/90">$90/pp</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                High-intensity live ball drills, pattern recognition, and competitive scenarios (Max 4 players).
              </p>
</div>

<div className="menu-item group cursor-default">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-[#DFFF4F] transition-colors">
                  Match Analysis
                </h4>
<span className="text-sm font-semibold text-white/90">$200</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                Video breakdown of a recorded match. Statistical charting of unforced errors, winners, and serve percentage.
              </p>
</div>
</div>

<div className="w-full h-[1px] bg-white/10 mb-16"></div>

<div className="text-center mb-16">
<h3 className="font-serif italic text-4xl md:text-5xl text-white">
              mental + physical
            </h3>
</div>

<div className="menu-item group cursor-default mb-16">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-sm font-semibold uppercase tracking-widest text-white group-hover:text-[#DFFF4F] transition-colors">
                The "Championship" Package
              </h4>
<span className="text-sm font-semibold text-white/90">$850/mo</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
              Weekly private session, bi-weekly fitness plan, monthly video review, and tournament scheduling assistance.
            </p>
</div>

<div className="border-t border-white/10 pt-12 text-center md:text-left space-y-6">
<div>
<h5 className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-2">
                Court Surface
              </h5>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
                Training available on Hard Court (Standard), Clay (Seasonal), and Indoor Carpet.
              </p>
</div>
<p className="text-[10px] text-zinc-600 font-light leading-relaxed italic">
              Cancellation policy: 24-hour notice required for all private sessions.
              Rain credits applied to future bookings. 
            </p>
</div>
</div>

<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-download w-4 h-4 group-hover:-translate-y-1 transition-transform" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
            Download Full Pricing Sheet
          </a>
</div>
</div>
</section>

<section className="bg-zinc-950 pb-32 pt-20 relative" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<span className="text-[#DFFF4F] text-xs font-bold tracking-widest uppercase mb-4">
            The Science of Swing
          </span>
<h2 className="font-serif text-4xl md:text-5xl text-white/80 mb-8">
            Methodology
          </h2>
</div>

<div className="mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-[#DFFF4F] hover:bg-zinc-900/80 transition-all duration-500 relative drink-card">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#DFFF4F]">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#DFFF4F] transition-colors">
                Kinetic Chain
              </h4>
<p className="text-xs text-[#DFFF4F]/80 italic mb-4">
                Energy transfer optimization
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                We rebuild the serve from the ground up. Leg drive, hip rotation, shoulder extension. Efficiency prevents injury.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-[#DFFF4F] hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#DFFF4F] transition-colors">
                Video Analysis
              </h4>
<p className="text-xs text-[#DFFF4F]/80 italic mb-4">
                Dartfish &amp; SwingVision
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Frame-by-frame breakdown comparisons against ATP pros. Visual learning accelerates technical correction by 40%.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-[#DFFF4F] hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#DFFF4F] transition-colors">
                Footwork Patterns
              </h4>
<p className="text-xs text-[#DFFF4F]/80 italic mb-4">
                Split-step &amp; Recovery
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Tennis is movement. We focus on the split-step timing, gravitational center, and efficient recovery to the hub.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-[#DFFF4F] hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#DFFF4F] transition-colors">
                Data Analytics
              </h4>
<p className="text-xs text-[#DFFF4F]/80 italic mb-4">
                Match Charting
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                We track serve placement, return depth, and rally length to build a statistically backed game plan.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-[#DFFF4F] hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#DFFF4F] transition-colors">
                Equipment Tuning
              </h4>
<p className="text-xs text-[#DFFF4F]/80 italic mb-4">
                Stringing &amp; Weighting
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Customizing racket weight, balance point, and string tension to complement your swing speed and playstyle.
              </p>
</div>
<div className="group p-6 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-[#DFFF4F] hover:bg-zinc-900/80 transition-all duration-500 drink-card">
<h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#DFFF4F] transition-colors">
                Mental Conditioning
              </h4>
<p className="text-xs text-[#DFFF4F]/80 italic mb-4">
                Between the points
              </p>
<p className="text-sm text-zinc-400 leading-relaxed">
                Rituals, breathing techniques, and visualization strategies to handle breakpoint pressure and tiebreakers.
              </p>
</div>
</div>
</div>
<div className="mt-24 text-center border-t border-white/5 pt-12">
<p className="font-serif text-xl italic text-white/60">
            "The ball doesn't know how old you are or what your ranking is."
          </p>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-32 pb-32 relative bg-zinc-950" id="academy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<span className="text-[#DFFF4F] text-xs font-bold tracking-widest uppercase mb-4 block">
              Join the Team
            </span>
<h2 className="font-serif text-4xl text-white mb-6">
              Academy Tiers
            </h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Limited spots available for the upcoming season. We maintain a low player-to-coach ratio to ensure quality.
            </p>
<div className="flex items-center gap-2 mb-12">
<div className="w-10 h-[1px] bg-zinc-700"></div>
<span className="text-xs text-zinc-500">Next Tryout: August 15th</span>
</div>
</div>

<div className="lg:col-span-8 grid md:grid-cols-2 gap-6">

<div className="group p-8 rounded bg-zinc-950 border border-white/5 hover:border-[#DFFF4F] transition-colors relative overflow-hidden">
<h3 className="font-serif text-2xl text-white">Junior Development</h3>
<p className="text-xs text-zinc-500 mt-2 mb-8 uppercase tracking-widest">
                Ages 12-16
              </p>
<div className="text-3xl font-serif text-white mb-1">
                $1,200
                <span className="text-sm font-sans text-zinc-500 font-normal ml-2">
                  / month
                </span>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-400">
<span className="w-1 h-1 rounded-full bg-[#DFFF4F]"></span>
                    3x Group Clinics / week
                  </li>
<li className="flex items-center gap-3 text-sm text-zinc-400">
<span className="w-1 h-1 rounded-full bg-[#DFFF4F]"></span>
                    1x Private Lesson / week
                  </li>
<li className="flex items-center gap-3 text-sm text-zinc-400">
<span className="w-1 h-1 rounded-full bg-[#DFFF4F]"></span>
                    Fitness assessment
                  </li>
</ul>
</div>
<button className="mt-8 w-full py-3 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-[#DFFF4F] hover:text-black transition-colors">
                Apply for Evaluation
              </button>
</div>

<div className="group p-8 rounded bg-zinc-800/50 border border-[#DFFF4F] relative overflow-hidden shadow-accent">
<div className="absolute top-0 inset-x-0 h-1 bg-[#DFFF4F]"></div>
<h3 className="font-serif text-2xl text-white">Elite Touring</h3>
<p className="text-xs text-[#DFFF4F] mt-2 mb-8 uppercase tracking-widest">
                Tournament Players
              </p>
<div className="text-3xl font-serif text-white mb-1">
                $2,500
                <span className="text-sm font-sans text-zinc-500 font-normal ml-2">
                  / month
                </span>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-[#DFFF4F]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                    Daily On-Court Training
                  </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-[#DFFF4F]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                    Travel Coaching Support
                  </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-[#DFFF4F]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                    College Recruiting Service
                  </li>
</ul>
</div>
<button className="uppercase hover:bg-white hover:text-black transition-all text-xs text-black font-bold tracking-widest bg-[#DFFF4F] w-full mt-8 pt-3 pb-3">
                Join Program
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-24 relative border-t border-white/5" id="partners">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#DFFF4F] text-xs font-bold tracking-widest uppercase mb-4 block">
            The Gear
          </span>
<h2 className="font-serif text-4xl text-white">Official Partners</h2>
<div className="w-12 h-[1px] bg-[#DFFF4F] mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-3 gap-x-12 gap-y-16">

<div>
<div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
<svg className="lucide lucide-zap w-5 h-5 text-[#DFFF4F]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<h3 className="font-serif text-xl text-white">Racket Tech</h3>
</div>
<ul className="space-y-6 text-center md:text-left">
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-[#DFFF4F] transition-colors">
                  Wilson Pro Lab
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Blade &amp; Pro Staff configurations
                </p>
</li>
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-[#DFFF4F] transition-colors">
                  Luxilon Strings
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  4G &amp; ALU Power options
                </p>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#DFFF4F]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<h3 className="font-serif text-xl text-white">Facilities</h3>
</div>
<ul className="space-y-6 text-center md:text-left">
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-[#DFFF4F] transition-colors">
                  Vance Tennis Center
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  8 Indoor Hard, 6 Outdoor Clay
                </p>
</li>
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-[#DFFF4F] transition-colors">
                  Gym &amp; Recovery
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Ice baths, Physio on-site
                </p>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
<svg className="lucide lucide-shirt w-5 h-5 text-[#DFFF4F]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
</svg>
<h3 className="font-serif text-xl text-white">Apparel</h3>
</div>
<ul className="space-y-6 text-center md:text-left">
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-[#DFFF4F] transition-colors">
                  Nike Court
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Exclusive Academy kits
                </p>
</li>
<li className="group">
<h4 className="text-zinc-200 text-sm font-medium mb-1 group-hover:text-[#DFFF4F] transition-colors">
                  Asics Footwear
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Gel-Resolution 9 Partners
                </p>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="py-20 bg-zinc-950 border-t border-white/5 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 whitespace-nowrap opacity-5 select-none pointer-events-none">
<span className="font-serif text-[12rem] lg:text-[20rem] text-white">
          VANCE
        </span>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
<span className="font-serif text-4xl text-white mb-8">VANCE ACADEMY</span>
<div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-500 mb-12">
<a className="hover:text-white transition-colors hover:text-[#DFFF4F]" href="#">
            Tryouts
          </a>
<a className="hover:text-white transition-colors hover:text-[#DFFF4F]" href="#">
            Camps
          </a>
<a className="hover:text-white transition-colors hover:text-[#DFFF4F]" href="#">
            Contact
          </a>
<a className="hover:text-white transition-colors hover:text-[#DFFF4F]" href="#">
            Portal
          </a>
</div>
<div className="flex gap-6 mb-12">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-[#DFFF4F] hover:border-[#DFFF4F] transition-all cursor-pointer">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-[#DFFF4F] hover:border-[#DFFF4F] transition-all cursor-pointer">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-[#DFFF4F] hover:border-[#DFFF4F] transition-all cursor-pointer">
<svg className="lucide lucide-mail w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
</div>
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">
          © 2024 Alaric Vance Tennis Academy.
        </p>
</div>
</footer>



    </>
  );
}
