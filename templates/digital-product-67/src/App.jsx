import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      function toggleNav() {
          const sidebar = document.getElementById('nav-sidebar');
          const overlay = document.getElementById('nav-overlay');

          if (sidebar.classList.contains('-translate-x-full')) {
              sidebar.classList.remove('-translate-x-full');
              overlay.classList.remove('opacity-0', 'pointer-events-none');
          } else {
              sidebar.classList.add('-translate-x-full');
              overlay.classList.add('opacity-0', 'pointer-events-none');
          }
      }

      function toggleTooltip(element) {
          const panel = element.querySelector('.tooltip-panel');
          if (panel) {
              panel.classList.toggle('force-visible');
          }
      }

      // --- 1. Proof Section Particles (Organic/Upward) ---
      function initProofParticles() {
          const container = document.getElementById('particles-container');
          if(!container) return;
          const colors = ['#24B89D', '#00ADEE', '#A2238D', '#EC1C24', '#FFC10E'];
          const particleCount = 20;

          for (let i = 0; i < particleCount; i++) {
              const particle = document.createElement('div');
              particle.classList.add('particle');

              const size = Math.random() * 35 + 15;
              const color = colors[Math.floor(Math.random() * colors.length)];
              const left = Math.random() * 100;
              const top = Math.random() * 100;
              const duration = Math.random() * 20 + 10;
              const delay = Math.random() * 5;
              const tx = (Math.random() - 0.5) * 200;
              const ty = (Math.random() - 0.5) * 200 - 50;
              const r = (Math.random() - 0.5) * 360;

              const shapeType = Math.random();
              if (shapeType < 0.33) {
                  particle.style.borderRadius = '50%';
              } else if (shapeType < 0.66) {
                  particle.style.borderRadius = '2px';
              } else {
                  particle.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
              }

              particle.style.width = `${size}px`;
              particle.style.height = `${size}px`;
              particle.style.backgroundColor = color;
              particle.style.left = `${left}%`;
              particle.style.top = `${top}%`;
              particle.style.setProperty('--tx', `${tx}px`);
              particle.style.setProperty('--ty', `${ty}px`);
              particle.style.setProperty('--r', `${r}deg`);
              particle.style.setProperty('--d', `${duration}s`);
              particle.style.animationDelay = `${delay}s`;

              container.appendChild(particle);
          }
      }

      // --- 2. Industries Section Particles (Tech/Crosshairs/Drift) ---
      function initIndustryParticles() {
          const container = document.getElementById('industries-particles');
          if(!container) return;
          const colors = ['#24B89D', '#00ADEE', '#A2238D', '#EC1C24', '#FFC10E'];
          const particleCount = 35;

          for (let i = 0; i < particleCount; i++) {
              const particle = document.createElement('div');
              particle.classList.add('tech-particle');

              const color = colors[Math.floor(Math.random() * colors.length)];

              const type = Math.random() > 0.5 ? '+' : 'o';
              if(type === '+') {
                  particle.textContent = '+';
                  particle.style.fontSize = Math.random() * 30 + 24 + 'px';
                  particle.style.color = color;
              } else {
                  particle.style.width = Math.random() * 20 + 12 + 'px';
                  particle.style.height = particle.style.width;
                  particle.style.border = '1px solid ' + color;
                  particle.style.borderRadius = '50%';
              }

              const left = Math.random() * 100;
              const top = Math.random() * 100;
              particle.style.left = `${left}%`;
              particle.style.top = `${top}%`;

              const txStart = (Math.random() - 0.5) * 50;
              const tyStart = (Math.random() - 0.5) * 30;
              const txMid = txStart + (Math.random() - 0.5) * 100;
              const tyMid = tyStart + (Math.random() - 0.5) * 50;
              const txEnd = txMid + (Math.random() - 0.5) * 50;
              const tyEnd = tyMid + (Math.random() - 0.5) * 30;

              const duration = Math.random() * 30 + 15;
              const delay = Math.random() * 5;

              particle.style.setProperty('--tx-start', `${txStart}px`);
              particle.style.setProperty('--ty-start', `${tyStart}px`);
              particle.style.setProperty('--tx-mid', `${txMid}px`);
              particle.style.setProperty('--ty-mid', `${tyMid}px`);
              particle.style.setProperty('--tx-end', `${txEnd}px`);
              particle.style.setProperty('--ty-end', `${tyEnd}px`);
              particle.style.setProperty('--d', `${duration}s`);
              particle.style.animationDelay = `${delay}s`;

              container.appendChild(particle);
          }
      }

      // --- 3. Approach Section Particles (Oscillating Flow/Fun) ---
      function initApproachParticles() {
          const container = document.getElementById('approach-particles');
          if(!container) return;
          const colors = ['#24B89D', '#00ADEE', '#A2238D', '#EC1C24', '#FFC10E'];
          const particleCount = 10; // Number of flowing elements

          for (let i = 0; i < particleCount; i++) {
              // Wrapper for horizontal movement
              const wrapper = document.createElement('div');
              wrapper.classList.add('flow-particle-wrapper');

              // Inner element for vertical bobbing & shape
              const particle = document.createElement('div');
              particle.classList.add('flow-particle');

              // Randomize Shape
              const shapeType = Math.random();
              if (shapeType < 0.33) {
                  particle.style.borderRadius = '50%'; // Circle
              } else if (shapeType < 0.66) {
                  particle.style.borderRadius = '2px'; // Square
              } else {
                  particle.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'; // Triangle
              }

              const size = Math.random() * 20 + 8; // 8px to 28px
              const color = colors[Math.floor(Math.random() * colors.length)];
              const top = Math.random() * 100; // Vertical position percentage

              // Animation parameters (Slowed 50% -> 2x Duration)
              const duration = (Math.random() * 20 + 25) * 2;
              const delay = (Math.random() * 20) * 2; // Stagger start spread over longer time
              const bobSpeed = (Math.random() * 3 + 4) * 2;
              const amp = (Math.random() * 60) - 30; // Amplitude +/- 30px

              // Apply styles to wrapper (horizontal motion)
              wrapper.style.top = `${top}%`;
              wrapper.style.setProperty('--duration', `${duration}s`);
              wrapper.style.setProperty('--delay', `-${delay}s`); // Negative delay to start mid-stream

              // Apply styles to particle (visuals + bobbing)
              particle.style.backgroundColor = color;
              particle.style.setProperty('--size', `${size}px`);
              particle.style.setProperty('--color', color);
              particle.style.setProperty('--bob-speed', `${bobSpeed}s`);
              particle.style.setProperty('--amp', `${amp}px`);

              // Add mix-blend mode for cool overlaps
              particle.style.mixBlendMode = 'multiply';

              wrapper.appendChild(particle);
              container.appendChild(wrapper);
          }
      }

      // --- Scroll Reveal Observer ---
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      let proofParticlesInit = false;
      let industriesParticlesInit = false;
      let approachParticlesInit = false;

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Reveal animation
                  entry.target.classList.add('reveal-visible');
                  entry.target.classList.remove('reveal-hidden');

                  // Trigger Particles based on section ID
                  if (entry.target.id === 'proof-header' && !proofParticlesInit) {
                      initProofParticles();
                      proofParticlesInit = true;
                  }
                  if (entry.target.id === 'industries-header' && !industriesParticlesInit) {
                      initIndustryParticles();
                      industriesParticlesInit = true;
                  }
                  if (entry.target.id === 'approach-header' && !approachParticlesInit) {
                      initApproachParticles();
                      approachParticlesInit = true;
                  }

                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-hidden').forEach((el) => {
          observer.observe(el);
      });

      // Initialize Lucide Icons
      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });
    


      let lastScrollY = window.scrollY;
      const nav = document.getElementById('main-nav');

      window.addEventListener('scroll', () => {
        if (!nav) return;
        const currentScrollY = window.scrollY;

        // Hide on scroll down (if moved more than 50px)
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          nav.classList.add('-translate-y-full');
        } else {
          // Show on scroll up
          nav.classList.remove('-translate-y-full');
        }

        lastScrollY = currentScrollY;
      }, { passive: true });
    


      // Horizontal Scroll Animation for Approach Section
      document.addEventListener('scroll', () => {
        const section = document.getElementById('capabilities');
        const track = document.getElementById('approach-track');
        if (!section || !track) return;

        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;

        // Sticky logic: Map vertical scroll to horizontal progress
        const scrollableDistance = sectionHeight - viewportHeight;
        let progress = -sectionTop / scrollableDistance;

        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        // Calculate translation
        const trackWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        const maxTranslate = trackWidth - windowWidth;

        if (maxTranslate > 0) {
            const translateX = progress * maxTranslate;
            track.style.transform = `translateX(-${translateX}px)`;
        }

        // Active State Logic
        const screenCenter = windowWidth / 2;
        document.querySelectorAll('.approach-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const threshold = rect.width / 1.5;
            const distance = Math.abs(cardCenter - screenCenter);

            if (distance < threshold) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
      }, { passive: true });

      if(typeof lucide !== 'undefined') lucide.createIcons();

      // Trigger scroll event on load to set initial state
      window.dispatchEvent(new Event('scroll'));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed flex pointer-events-none z-0 w-full h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 top-0 right-0 bottom-0 left-0 justify-between">
<div className="w-px hidden md:block h-full"></div>
<div className="w-px h-full bg-slate-900/[0.03]"></div>
<div className="w-px h-full bg-slate-900/[0.03]"></div>
<div className="w-px h-full bg-slate-900/[0.03] hidden lg:block"></div>
<div className="w-px hidden xl:block h-full"></div>
</div>

<div className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-40 transition-opacity duration-300 opacity-0 pointer-events-none" id="nav-overlay" onclick="toggleNav()"></div>
<div className="fixed top-0 left-0 w-[280px] sm:w-[320px] h-full bg-white z-50 transform -translate-x-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-2xl flex flex-col border-r border-slate-100" id="nav-sidebar">
<div className="p-6 flex justify-between items-center border-b border-slate-50">
<div className="flex items-center gap-2">
<svg className="h-[40px] w-auto" viewbox="0 0 241 485" xmlns="http://www.w3.org/2000/svg">
<g fill="none" fill-rule="evenodd" transform="translate(-3)">
<polygon fill="#24B89D" opacity=".95" points="3.514 0 3.514 96.983 243.514 234.988 243.514 137.996"></polygon>
<polygon fill="#A2238D" opacity=".95" points="104.722 314.779 243.514 394.617 243.514 297.615 104.722 217.806"></polygon>
<polygon fill="#00ADEE" opacity=".95" points="104.722 217.806 104.722 314.779 243.514 234.989 243.514 138.004"></polygon>
<polygon fill="#EC1C24" opacity=".95" points="3.514 435.601 87.844 484.103 243.514 394.616 243.514 297.616"></polygon>
<polygon fill="#FFC10E" fillOpacity=".95" points="3.514 435.601 87.844 484.103 87.844 208.111 3.514 159.62"></polygon>
</g>
</svg>
<span className="text-base font-semibold text-slate-900 tracking-tight">
            …say ‘blend labs’
          </span>
</div>
<button className="p-2 hover:bg-slate-50 rounded-full transition-colors" onclick="toggleNav()">
<svg className="lucide lucide-x w-5 h-5 text-slate-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex flex-col pt-6 pr-6 pb-6 pl-6">
<a className="text-xl font-medium text-slate-900 hover:text-[#00ADEE] transition-colors" href="/work">
          Work
        </a>
<a className="text-xl font-medium text-slate-900 hover:text-[#24B89D] transition-colors" href="/industries">
          Industries
        </a>
<a className="text-xl font-medium text-slate-900 hover:text-[#A2238D] transition-colors" href="/capabilities">
          Capabilities
        </a>
<a className="text-xl font-medium text-slate-900 hover:text-[#FFC10E] transition-colors" href="/about">
          About
        </a>
</div>
<div className="mt-auto p-6 border-t border-slate-50">
<a className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-sm font-medium text-sm hover:bg-[#00ADEE] transition-colors" href="#">
          Contact Us
        </a>
<p className="text-xs text-slate-400 mt-4">© 2025 BL3NDlabs.</p>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-md transition-transform duration-300 border-b border-slate-100/50 transform translate-y-0" id="main-nav">
<div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm md:text-base">

<div className="flex items-center gap-2 cursor-pointer group z-50">
<svg className="h-[45px] w-auto" viewbox="0 0 241 485" xmlns="http://www.w3.org/2000/svg">
<g fill="none" fill-rule="evenodd" transform="translate(-3)">
<polygon fill="#24B89D" opacity=".95" points="3.514 0 3.514 96.983 243.514 234.988 243.514 137.996"></polygon>
<polygon fill="#A2238D" opacity=".95" points="104.722 314.779 243.514 394.617 243.514 297.615 104.722 217.806"></polygon>
<polygon fill="#00ADEE" opacity=".95" points="104.722 217.806 104.722 314.779 243.514 234.989 243.514 138.004"></polygon>
<polygon fill="#EC1C24" opacity=".95" points="3.514 435.601 87.844 484.103 243.514 394.616 243.514 297.616"></polygon>
<polygon fill="#FFC10E" fillOpacity=".95" points="3.514 435.601 87.844 484.103 87.844 208.111 3.514 159.62"></polygon>
</g>
</svg>
<span className="text-base font-semibold text-slate-900 tracking-tight">
            …say ‘blend labs’
          </span>
</div>

<div className="flex items-center gap-8">

<div className="hidden lg:flex gap-8 font-medium tracking-wide text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="/work">Work</a>
<a className="hover:text-slate-900 transition-colors" href="/industries">
              Industries
            </a>
<a className="hover:text-slate-900 transition-colors" href="/capabilities">
              Capabilities
            </a>
<a className="hover:text-slate-900 transition-colors" href="/about">About</a>
</div>

<a className="hidden sm:flex items-center gap-2 border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all px-5 py-2.5 rounded-sm font-medium text-xs sm:text-sm tracking-wide text-slate-900" href="#">
            Contact
          </a>

<button className="lg:hidden group flex flex-col justify-center gap-[6px] w-8 h-8 items-end p-1 cursor-pointer z-50" onclick="toggleNav()">
<span className="block w-6 h-[1.5px] bg-slate-900 transition-all group-hover:w-4"></span>
<span className="block w-6 h-[1.5px] bg-slate-900 transition-all"></span>
</button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col w-full relative z-10">

<section className="w-full max-w-7xl mx-auto pr-6 pb-20 pl-6 flex items-center justify-center bg-white relative pt-32">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 w-full gap-x-12 gap-y-12 items-center">

<div className="col-span-1 lg:col-span-5 flex flex-col justify-center text-center lg:text-left space-y-8">
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1] md:leading-[1] lg:leading-[0.95] tracking-tight font-medium text-slate-900">
              Strategy
              <span className="text-[#24B89D]">.</span>
<br/>
              Design
              <span className="text-[#00ADEE]">.</span>
<br/>
              Technology
              <span className="text-[#EC1C24]">.</span>
<br/>
<span className="italic font-normal text-slate-400">
                Aligned for Impact.
              </span>
</h1>
<p className="md:text-xl lg:text-2xl lg:mx-0 leading-relaxed text-xl font-light text-slate-900 max-w-lg mr-auto ml-auto">
<span className="bg-[#FFC10E] box-decoration-clone px-2 py-1 leading-[1.6]">
<span className="font-bold">BL3NDlabs</span>
                helps organizations transform ideas into
                <span className="font-semibold text-slate-900">AI-ready</span>
                digital products and experiences.
              </span>
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
<a className="bg-slate-900 text-white px-7 py-4 rounded-sm font-medium text-base hover:bg-[#00ADEE] transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-200" href="#">
                Start a Conversation
                <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="px-7 py-4 rounded-sm font-medium text-base text-slate-600 border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="/work">
                Explore Our Work
              </a>
</div>
</div>

<div className="col-span-1 lg:col-span-7 lg:h-[700px] flex lg:mt-0 w-full h-[500px] mt-8 relative items-center justify-center">

<div className="aspect-square animate-pulse-slower w-[80%] border-slate-200/60 border-[3px] rounded-full absolute"></div>
<div className="absolute w-[55%] aspect-square rounded-full border-[3px] border-slate-200/60 animate-pulse-slow"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 md:scale-100 z-0 overflow-visible">
<div className="w-[500px] h-[500px] relative">
<svg className="absolute inset-0 w-full h-full overflow-visible" viewbox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad-green" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#24B89D" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#24B89D"></stop>
<stop offset="100%" stop-color="#24B89D" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="grad-blue" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#00ADEE" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#00ADEE"></stop>
<stop offset="100%" stop-color="#00ADEE" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="grad-purple" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#A2238D" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#A2238D"></stop>
<stop offset="100%" stop-color="#A2238D" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="grad-red" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#EC1C24" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#EC1C24"></stop>
<stop offset="100%" stop-color="#EC1C24" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="grad-yellow" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#FFC10E" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#FFC10E"></stop>
<stop offset="100%" stop-color="#FFC10E" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="animate-beam delay-0" d="M250,250 C200,300 100,400 40,430" fill="none" opacity="0.5" stroke="url(#grad-green)" strokeWidth="4"></path>
<path className="animate-beam delay-1000" d="M250,250 C200,200 100,100 40,60" fill="none" opacity="0.5" stroke="url(#grad-blue)" strokeWidth="4"></path>
<path className="animate-beam delay-2000" d="M250,250 C300,200 400,100 460,50" fill="none" opacity="0.5" stroke="url(#grad-purple)" strokeWidth="4"></path>
<path className="animate-beam delay-3000" d="M250,250 C350,260 440,280 490,300" fill="none" opacity="0.5" stroke="url(#grad-red)" strokeWidth="4"></path>
<path className="animate-beam delay-4000" d="M250,250 C280,350 360,430 400,480" fill="none" opacity="0.5" stroke="url(#grad-yellow)" strokeWidth="4"></path>
</svg>
</div>
</div>
<div className="relative z-10 w-48 h-64 md:w-64 md:h-80 animate-float-organic flex items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-200/50 blur-3xl rounded-full mix-blend-multiply"></div>
<div className="w-full h-full flex items-center justify-center drop-shadow-2xl filter z-10 relative hover:scale-105 transition-transform duration-500">
<svg className="h-full w-auto max-w-full" viewbox="0 0 241 485" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" fill-rule="evenodd" transform="translate(-3)">
<polygon className="" fill="#24B89D" opacity=".95" points="3.514 0 3.514 96.983 243.514 234.988 243.514 137.996"></polygon>
<polygon className="" fill="#A2238D" opacity=".95" points="104.722 314.779 243.514 394.617 243.514 297.615 104.722 217.806"></polygon>
<polygon className="" fill="#00ADEE" opacity=".95" points="104.722 217.806 104.722 314.779 243.514 234.989 243.514 138.004"></polygon>
<polygon className="" fill="#EC1C24" opacity=".95" points="3.514 435.601 87.844 484.103 243.514 394.616 243.514 297.616"></polygon>
<polygon className="" fill="#FFC10E" fillOpacity=".95" points="3.514 435.601 87.844 484.103 87.844 208.111 3.514 159.62"></polygon>
</g>
</svg>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 md:scale-100 z-20 overflow-visible">
<div className="w-[500px] h-[500px] relative">


<div className="absolute bottom-[2%] -left-[2%] animate-float-organic delay-0 group z-30 pointer-events-auto" onclick="toggleTooltip(this)">

<div className="cursor-pointer relative z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#24B89D]/20 shadow-lg shadow-[#24B89D]/10 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 whitespace-nowrap transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-[#24B89D]/40">
<div className="w-3 h-3 rounded-full bg-[#24B89D] shadow-[0_0_8px_#24B89D]"></div>
                    Confidence
                  </div>

<div className="tooltip-panel absolute bottom-full left-0 mb-4 w-56 bg-white rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 opacity-0 transform translate-y-2 scale-95 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto z-10">
<p className="text-xs text-slate-500 leading-relaxed font-medium">
                      We give leaders the conviction to make decisions and move
                      forward decisively.
                    </p>
</div>
</div>

<div className="absolute top-[2%] left-[0%] animate-float-organic delay-1000 group z-30 pointer-events-auto" onclick="toggleTooltip(this)">

<div className="cursor-pointer relative z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#00ADEE]/20 shadow-lg shadow-[#00ADEE]/10 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 whitespace-nowrap transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-[#00ADEE]/40">
<div className="w-3 h-3 rounded-full bg-[#00ADEE] shadow-[0_0_8px_#00ADEE]"></div>
                    Insight
                  </div>

<div className="tooltip-panel absolute top-full left-0 mt-4 w-56 bg-white rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 opacity-0 transform -translate-y-2 scale-95 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto z-10">
<p className="text-xs text-slate-500 leading-relaxed font-medium">
                      We surface the signals that matter, turning complexity
                      into clear direction.
                    </p>
</div>
</div>

<div className="absolute top-[2%] right-[-2%] animate-float-organic delay-2000 group z-30 pointer-events-auto" onclick="toggleTooltip(this)">

<div className="cursor-pointer relative z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#A2238D]/20 shadow-lg shadow-[#A2238D]/10 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 whitespace-nowrap transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-[#A2238D]/40">
<div className="w-3 h-3 rounded-full bg-[#A2238D] shadow-[0_0_8px_#A2238D]"></div>
                    Acceleration
                  </div>

<div className="tooltip-panel absolute top-full right-0 mt-4 w-56 bg-white rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 opacity-0 transform -translate-y-2 scale-95 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto z-10">
<p className="text-xs text-slate-500 leading-relaxed font-medium">
                      We compress timelines by removing friction and focusing
                      effort where it counts.
                    </p>
</div>
</div>

<div className="absolute top-[55%] -right-[12%] animate-float-organic delay-3000 group z-30 pointer-events-auto" onclick="toggleTooltip(this)">

<div className="cursor-pointer relative z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#EC1C24]/20 shadow-lg shadow-[#EC1C24]/10 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 whitespace-nowrap transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-[#EC1C24]/40">
<div className="w-3 h-3 rounded-full bg-[#EC1C24] shadow-[0_0_8px_#EC1C24]"></div>
                    Assurance
                  </div>

<div className="tooltip-panel absolute bottom-full right-0 mb-4 w-56 bg-white rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 opacity-0 transform translate-y-2 scale-95 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto z-10">
<p className="text-xs text-slate-500 leading-relaxed font-medium">
                      We bring structure, rigor, and calm to work that has real
                      stakes.
                    </p>
</div>
</div>

<div className="absolute -bottom-[2%] right-[10%] animate-float-organic delay-4000 group z-30 pointer-events-auto" onclick="toggleTooltip(this)">

<div className="cursor-pointer relative z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#FFC10E]/40 shadow-lg shadow-[#FFC10E]/10 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 whitespace-nowrap transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-[#FFC10E]/60">
<div className="w-3 h-3 rounded-full bg-[#FFC10E] shadow-[0_0_8px_#FFC10E]"></div>
                    Advancement
                  </div>

<div className="tooltip-panel absolute bottom-full right-0 mb-4 w-56 bg-white rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 opacity-0 transform translate-y-2 scale-95 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto z-10">
<p className="text-xs text-slate-500 leading-relaxed font-medium">
                      We help organizations build capabilities they couldn’t
                      reach on their own.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-slate-50 border-t border-slate-200 relative z-10 overflow-hidden" id="proof-section">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="particles-container"></div>
<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal-hidden" id="proof-header">
<div className="max-w-2xl">
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">
                Proof Through Outcomes
              </h2>
<p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                We don't just build software; we engineer success. Our founding
                principles guide every decision, ensuring value from day one.
              </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-[#00ADEE] transition-colors group" href="#">
              View Case Studies
              <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

<div className="group p-8 rounded-sm border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-1 hover:border-slate-300 transition-all duration-500 relative overflow-hidden delay-100 reveal-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#24B89D] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<div className="mb-6 text-slate-400 group-hover:text-[#24B89D] transition-all duration-300 transform group-hover:scale-110 origin-left">
<iconify-icon icon="solar:user-heart-rounded-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
                Human-Centered Design
              </h3>
<p className="text-base leading-relaxed text-slate-500">
                We prioritize the end-user in every architectural decision,
                ensuring technology serves people, not the other way around.
              </p>
</div>

<div className="group p-8 rounded-sm border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-1 hover:border-slate-300 transition-all duration-500 relative overflow-hidden delay-200 reveal-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#00ADEE] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75"></div>
<div className="mb-6 text-slate-400 group-hover:text-[#00ADEE] transition-all duration-300 transform group-hover:scale-110 origin-left">
<iconify-icon icon="solar:layers-minimalistic-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
                Tech-Agnostic
              </h3>
<p className="text-base leading-relaxed text-slate-500">
                We select the right tools for the job without bias. Our
                architecture is flexible, scalable, and built for your specific
                needs.
              </p>
</div>

<div className="group p-8 rounded-sm border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-1 hover:border-slate-300 transition-all duration-500 relative overflow-hidden delay-300 reveal-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#EC1C24] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100"></div>
<div className="mb-6 text-slate-400 group-hover:text-[#EC1C24] transition-all duration-300 transform group-hover:scale-110 origin-left">
<iconify-icon icon="solar:chart-square-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
                Outcome-Driven
              </h3>
<p className="text-base leading-relaxed text-slate-500">
                Features are outputs; value is the outcome. We measure success
                by the tangible business impact we deliver.
              </p>
</div>
</div>

<div className="border-t border-slate-200 pt-16 delay-200 reveal-hidden">
<p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-10 text-center md:text-left">
              Trusted by innovators at
            </p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<iconify-icon className="hover:text-[#FF5A5F] hover:scale-110 transition-all duration-300" icon="simple-icons:airbnb" width="32"></iconify-icon>
<iconify-icon className="hover:text-[#1DB954] hover:scale-110 transition-all duration-300" icon="simple-icons:spotify" width="32"></iconify-icon>
<iconify-icon className="hover:text-[#008CDD] hover:scale-110 transition-all duration-300" icon="simple-icons:stripe" width="32"></iconify-icon>
<iconify-icon className="hover:text-[#4A154B] hover:scale-110 transition-all duration-300" icon="simple-icons:slack" width="32"></iconify-icon>
<iconify-icon className="hover:text-[#5E6AD2] hover:scale-110 transition-all duration-300" icon="simple-icons:linear" width="32"></iconify-icon>
<iconify-icon className="hover:text-black hover:scale-110 transition-all duration-300" icon="simple-icons:notion" width="32"></iconify-icon>
</div>
</div>
</section>
</div>

<section className="w-full bg-white relative z-10 py-24 lg:py-32 overflow-hidden" id="industries">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#24B89D]/20 to-[#00ADEE]/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-float-organic"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-gradient-to-bl from-[#A2238D]/20 to-[#FFC10E]/20 rounded-full blur-[80px] opacity-60 mix-blend-multiply animate-float-organic delay-2000"></div>
</div>

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="industries-particles"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 reveal-hidden" id="industries-header">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 tracking-tight leading-[0.95]">
                Technology has <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24B89D] via-[#00ADEE] to-[#A2238D] font-medium italic">No Vertical.</span>
</h2>
<div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
<p>
                  We adhere to a simple truth: <strong>engineering principles are universal.</strong>
</p>
<p>
                  By transferring knowledge across sectors, we bring the security rigor of <span className="text-[#24B89D] font-medium">Fintech</span> to Healthcare, and the real-time velocity of <span className="text-[#A2238D] font-medium">SaaS</span> to Energy.
                </p>
<p>
                  We don't just work within industries; we weave the best practices of each into a stronger, more resilient whole.
                </p>
</div>
<div className="mt-10 pt-10 border-t border-slate-100">
<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900 hover:text-[#00ADEE] transition-colors group" href="/industries">
                    Explore Our Expertise
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-[#24B89D]/30 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#24B89D]/10 flex items-center justify-center text-[#24B89D] group-hover:bg-[#24B89D] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:card-transfer-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Fintech</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#24B89D]">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-[#00ADEE]/30 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#00ADEE]/10 flex items-center justify-center text-[#00ADEE] group-hover:bg-[#00ADEE] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Healthcare &amp; Life Sciences</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00ADEE]">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-[#FFC10E]/30 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#FFC10E]/10 flex items-center justify-center text-[#FFC10E] group-hover:bg-[#FFC10E] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Energy &amp; Mobility</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFC10E]">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-[#A2238D]/30 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#A2238D]/10 flex items-center justify-center text-[#A2238D] group-hover:bg-[#A2238D] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:server-square-cloud-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Technology &amp; SaaS</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#A2238D]">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-[#EC1C24]/30 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#EC1C24]/10 flex items-center justify-center text-[#EC1C24] group-hover:bg-[#EC1C24] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:bag-heart-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Retail &amp; E-commerce</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#EC1C24]">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-slate-400 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:wheel-angle-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Auto &amp; Manufacturing</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-800">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-[#24B89D]/30 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#24B89D]/10 flex items-center justify-center text-[#24B89D] group-hover:bg-[#24B89D] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">PE-Backed Companies</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#24B89D]">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group py-4 border-b border-slate-100 flex items-center justify-between hover:border-[#00ADEE]/30 transition-colors" href="#">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#00ADEE]/10 flex items-center justify-center text-[#00ADEE] group-hover:bg-[#00ADEE] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Government &amp; Public</span>
</div>
<div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00ADEE]">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-slate-50 border-t border-slate-200 relative z-10 h-[400vh]" id="capabilities">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="approach-particles"></div>
<div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-10">

<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-24 reveal-hidden w-full max-w-7xl mx-auto px-6" id="approach-header">
<div>
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">
                Our Approach
              </h2>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
                An integrated studio model where strategy, design, and
                engineering converge to build intelligent digital products.
              </p>
</div>
</div>

<div className="w-full relative mt-16">

<div className="flex gap-8 md:gap-16 items-stretch pl-[7.5vw] md:pl-[calc(50vw-225px)] w-max pr-[50vw] relative will-change-transform" id="approach-track">

<div className="absolute top-[4.5rem] left-0 w-full h-[2px] z-0 hidden lg:block opacity-50">
<div className="w-full h-full process-line-h rounded-full"></div>
</div>

<div className="approach-card relative group flex flex-col p-8 rounded-3xl bg-white border border-slate-200 w-[85vw] md:w-[450px] shrink-0 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 z-10" data-index="0">
<div className="relative z-10 w-16 h-16 rounded-2xl rotate-3 bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 icon-box transition-all duration-500">
<svg className="lucide lucide-compass w-7 h-7 text-slate-400 transition-colors duration-300" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="relative content-box transition-transform duration-300">
<h3 className="text-2xl font-medium text-slate-900 mb-3 transition-colors">
                    Strategy
                  </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                    We define clear pathways to market leadership by
                    synthesizing data, customer insights, and business goals.
                  </p>
<a className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1 transition-colors" href="#">
                    Explore Strategy
                    <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="approach-card relative group flex flex-col p-8 rounded-3xl bg-white border border-slate-200 w-[85vw] md:w-[450px] shrink-0 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 z-10" data-index="1">
<div className="relative z-10 w-16 h-16 rounded-2xl -rotate-3 bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 icon-box transition-all duration-500">
<svg className="lucide lucide-pen-tool w-7 h-7 text-slate-400 transition-colors duration-300" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="relative content-box transition-transform duration-300">
<h3 className="text-2xl font-medium text-slate-900 mb-3 transition-colors">
                    Design
                  </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                    We craft intuitive, human-centered interfaces that translate
                    complex requirements into delightful user experiences.
                  </p>
<a className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1 transition-colors" href="#">
                    Explore Design
                    <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="approach-card relative group flex flex-col p-8 rounded-3xl bg-white border border-slate-200 w-[85vw] md:w-[450px] shrink-0 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 z-10" data-index="2">
<div className="relative z-10 w-16 h-16 rounded-2xl rotate-2 bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 icon-box transition-all duration-500">
<svg className="lucide lucide-cpu w-7 h-7 text-slate-400 transition-colors duration-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="relative content-box transition-transform duration-300">
<h3 className="text-2xl font-medium text-slate-900 mb-3 transition-colors">
                    Technology
                  </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                    We architect scalable, resilient infrastructure using modern
                    stacks that ensure performance, security, and velocity.
                  </p>
<a className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1 transition-colors" href="#">
                    Explore Tech
                    <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="approach-card relative group flex flex-col p-8 rounded-3xl bg-white border border-slate-200 w-[85vw] md:w-[450px] shrink-0 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 z-10" data-index="3">
<div className="relative z-10 w-16 h-16 rounded-2xl -rotate-2 bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 icon-box transition-all duration-500">
<svg className="lucide lucide-sparkles w-7 h-7 text-slate-400 transition-colors duration-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="relative content-box transition-transform duration-300">
<h3 className="text-2xl font-medium text-slate-900 mb-3 transition-colors">
                    Artificial Intelligence
                  </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                    We integrate predictive models and automation to unlock new
                    value and accelerate intelligent decision-making.
                  </p>
<a className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1 transition-colors" href="#">
                    Explore AI
                    <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 w-full bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16 lg:mb-24">
<div className="max-w-2xl">
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">
              Start your transformation.
            </h2>
<p className="text-lg text-slate-500 font-light">
              Let's discuss how we can help you build intelligent, scalable
              digital products.
            </p>
</div>
<a className="bg-slate-900 text-white px-7 py-4 rounded-sm font-medium text-base hover:bg-[#00ADEE] transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-200" href="#">
            Start a Conversation
            <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-100">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
<span className="text-base font-semibold text-slate-900 tracking-tight">
              …say ‘blend labs’
            </span>
<p className="text-sm text-slate-400">
              © 2025 BL3NDlabs. All rights reserved.
            </p>
</div>
<div className="flex flex-col md:flex-row items-center gap-8">

<div className="flex items-center gap-6">
<a aria-label="Instagram" className="text-slate-400 hover:text-[#E4405F] transition-colors hover:scale-110 duration-300" href="#">
<iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-slate-400 hover:text-[#0077B5] transition-colors hover:scale-110 duration-300" href="#">
<iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
</a>
<a aria-label="Meta" className="text-slate-400 hover:text-[#0668E1] transition-colors hover:scale-110 duration-300" href="#">
<iconify-icon icon="simple-icons:meta" width="20"></iconify-icon>
</a>
</div>

<div className="flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">
                Privacy
              </a>
<a className="hover:text-slate-900 transition-colors" href="#">
                Terms
              </a>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
