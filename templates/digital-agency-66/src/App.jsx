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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
        observer.observe(el);
      });

      const showreelSection = document.getElementById('showreel-section');
      const showreelVideo = document.getElementById('showreel-video');
      if (showreelSection && showreelVideo) {
        window.addEventListener('scroll', () => {
          const rect = showreelSection.getBoundingClientRect();
          const scrollProgress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));

          const isMobile = window.innerWidth < 768;
          const initialWidth = isMobile ? 90 : 75;
          const initialHeight = isMobile ? 60 : 75;

          const currentWidth = initialWidth + ((100 - initialWidth) * scrollProgress);
          const currentHeight = initialHeight + ((100 - initialHeight) * scrollProgress);
          const currentRadius = 1.5 - (1.5 * scrollProgress);

          showreelVideo.style.width = `${currentWidth}vw`;
          showreelVideo.style.height = `${currentHeight}vh`;
          showreelVideo.style.borderRadius = `${currentRadius}rem`;
        });
        setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);
      }
    
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
      
<div className="fixed inset-0 pointer-events-none z-[-1] flex justify-center">
<div className="w-full max-w-[1440px] h-full flex justify-between px-6 lg:px-24 border-x border-white/[0.04]">
<div className="w-px h-full bg-white/[0.04] hidden md:block"></div>
<div className="w-px h-full bg-white/[0.04] hidden lg:block"></div>
<div className="w-px h-full bg-white/[0.04] hidden lg:block"></div>
</div>
</div>
<div className="flex min-h-screen w-full relative">
<aside className="hidden lg:flex fixed inset-y-0 left-0 w-16 border-r border-white/[0.08] bg-[#030303] flex-col justify-between py-8 items-center z-50">
<a className="w-6 h-6 rounded flex items-center justify-center border border-white/20 hover:border-[#FF9900] transition-colors group" href="#">
<div className="w-2 h-2 bg-white group-hover:bg-[#FF9900] transition-colors"></div>
</a>
<div className="writing-vertical flex gap-8 text-xs font-normal tracking-widest text-white/40 uppercase">
<a className="hover:text-white transition-colors" href="#about">About</a>
<span className="text-white/10">•</span>
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<span className="text-white/10">•</span>
<a className="hover:text-white transition-colors" href="#works">Works</a>
</div>
<div className="flex flex-col gap-6 text-white/40">
<a className="hover:text-[#FF9900] transition-colors" href="#">
<iconify-icon icon="solar:hashtag-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#FF9900] transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#FF9900] transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</aside>
<main className="flex-1 lg:ml-16 w-full">
<nav className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-6 flex justify-between items-center border-b border-white/[0.04] bg-[#030303]/80 backdrop-blur-md sticky top-0 z-40">
<div className="flex items-center gap-3">
<div className="lg:hidden w-5 h-5 bg-white flex items-center justify-center">
<div className="w-2 h-2 bg-[#030303]"></div>
</div>
<a className="font-medium text-xl tracking-tight text-white" href="#">
              IDEASBOX
            </a>
</div>
<div className="hidden md:block text-xs font-normal tracking-widest text-white/40 uppercase">
            #1 Creative Design Agency
          </div>
<div className="flex gap-4 items-center">
<a className="text-xs font-normal border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#contact">
              Contact
            </a>
<button className="flex items-center gap-2 text-xs font-normal border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
<iconify-icon icon="solar:hamburger-menu-linear" width="16"></iconify-icon>
              Menu
            </button>
</div>
</nav>
<section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-8 lg:py-12 border-b border-white/[0.04] relative overflow-hidden min-h-[calc(100vh-148px)] flex flex-col justify-center">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen pointer-events-none" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-background-28562-large.mp4" type="video/mp4"/>
</video>
<div className="w-full mb-6 lg:mb-10 relative">
<div className="flex flex-col justify-center items-center relative z-20 mix-blend-difference pointer-events-none w-full">
<div className="flex flex-col items-center justify-center text-center reveal reveal-delay-100 w-full active">
<div className="text-[18vw] md:text-[20vw] lg:text-[21vw] leading-[0.75] font-medium tracking-tighter uppercase w-full text-center">
                  DESIGN
                </div>
<div className="text-2xl md:text-4xl lg:text-[3vw] font-light text-white/80 tracking-tight h-[1.5em] overflow-hidden relative flex justify-center mt-6 md:mt-10 w-full">
<div className="animate-text-slide flex flex-col absolute top-0 left-0 right-0 w-full text-center items-center text-[#FF9900]">
<span className="h-[1.5em] flex items-center justify-center">
                      that speaks.
                    </span>
<span className="h-[1.5em] flex items-center justify-center">
                      that sells.
                    </span>
<span className="h-[1.5em] flex items-center justify-center">
                      that works.
                    </span>
<span className="h-[1.5em] flex items-center justify-center">
                      that grows.
                    </span>
<span className="h-[1.5em] flex items-center justify-center">
                      that wins.
                    </span>
<span className="h-[1.5em] flex items-center justify-center">
                      that speaks.
                    </span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4 z-30 md:mt-8 reveal reveal-delay-200 active mt-6 relative gap-x-4 gap-y-4 items-center justify-center">
<a className="bg-[#FF9900] text-white text-base font-medium px-9 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center" href="#contact">
                Let’s Build Your Brand
              </a>
<a className="bg-transparent border border-white/20 text-white text-base font-medium px-9 py-4 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center" href="#works">
                See Our Projects
              </a>
</div>
</div>
<div className="w-full flex justify-center z-20 reveal reveal-delay-300 active relative px-4">
<p className="leading-relaxed text-base md:text-lg font-light text-white/60 text-center w-full max-w-2xl">
              Our mission is to craft immersive digital experiences that not
              only inspire users but also significantly enhance brand engagement
              in the online space.
            </p>
</div>
</section>
<div className="border-white/[0.04] overflow-hidden flex bg-[#050505] w-full border-b pt-4 pb-4 items-center">
<div className="flex w-max animate-slide text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default">
<div className="flex gap-16 whitespace-nowrap pr-8 pl-8 gap-x-16 gap-y-16 items-center">
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Logo Design
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Product Packaging
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Website Design
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Branding
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Creative Strategy
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Brand Positioning
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Visual Identity System
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
</div>
<div className="flex gap-16 items-center whitespace-nowrap px-8">
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Logo Design
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Product Packaging
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Website Design
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Branding
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Creative Strategy
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Brand Positioning
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                Visual Identity System
              </span>
<svg className="w-6 h-6 text-[#FF9900]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
</svg>
</div>
</div>
</div>
<section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-16 lg:py-24 border-b border-white/[0.04] overflow-hidden">
<div className="flex items-center mb-10 md:mb-12 reveal active">
<div className="w-[2px] h-6 md:h-8 bg-white mr-4"></div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-none">
              Selected Works
            </h2>
</div>
<div className="w-full overflow-hidden pb-6 reveal reveal-delay-100 relative group active">
<div className="flex w-max animate-slide-left-slow hover:[animation-play-state:paused] gap-4 md:gap-6">
<div className="flex gap-4 md:gap-6 w-max">
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f9b5851-f8a6-48ad-9443-2ecc7867b6f1_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49519cb8-a253-4041-b3f6-ff870ada6f62_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0fd5a84-599e-4215-8588-9c1826ac5def_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 4" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a4ed182-6390-43db-a3aa-fdcdb9e13534_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 5" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/595a9964-bb0d-4cdb-ad0d-9d592ae0e73e_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 6" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/795b1aaa-5daf-4820-ba82-9b44a508890e_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 7" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/133e4b1d-5b2a-4deb-967a-38e27e2b5cf3_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 8" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/219c715c-6d62-4b05-9f92-b57757b1089b_800w.jpg"/>
</div>
</div>
<div className="flex gap-4 md:gap-6 w-max">
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfa02f26-2aea-4ef4-848f-fb6c7d7b2517_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a4ed182-6390-43db-a3aa-fdcdb9e13534_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ac6a934-3cd5-40e7-8e5f-4e0ca88ac101_800w.jpg"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 4" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 5" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 6" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 7" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] bg-[#1a1a1a] shrink-0 relative overflow-hidden cursor-pointer">
<img alt="Work 8" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-8 md:mt-12 reveal reveal-delay-200">
<a className="inline-flex items-center justify-center border border-white/40 text-white text-sm font-medium px-6 py-3 md:px-8 md:py-3.5 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
              What's Glint's secret to their great packaging design?
              <i className="w-4 h-4 ml-2" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</section>
<section className="lg:px-24 border-white/[0.04] w-full max-w-[1440px] border-b mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="about">
<div className="flex items-center gap-2 text-xs font-normal tracking-wide text-white/50 mb-12 reveal active">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span>
            [002] About Us
          </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium mb-12 max-w-4xl leading-[1.1] reveal reveal-delay-100">
            We Blend Creativity And Strategy To Craft
            <span className="text-white/30">
              Meaningful Brand Experiences That Inspire.
            </span>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-4 flex flex-col items-start gap-12 reveal reveal-delay-200">
<a className="inline-flex text-xs font-normal border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#">
                More About Us
              </a>
<div className="">
<div className="text-7xl lg:text-8xl font-medium tracking-tight mb-2">
                  10+
                </div>
<div className="text-xs font-normal tracking-widest text-white/40 uppercase">
                  Years of Experience
                </div>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 reveal reveal-delay-300">
<div className="md:col-span-2">
<p className="text-base text-white/60 leading-relaxed max-w-xl font-light">
                  Ideasbox Creative blends strategy, design, and storytelling to
                  help brands stand out in a crowded digital world. We turn
                  ideas into visually powerful experiences that deliver real
                  impact.
                </p>
</div>
<div className="">
<div className="text-5xl lg:text-6xl font-medium tracking-tight mb-3">
                  320+
                </div>
<div className="text-xs font-normal tracking-widest text-white/40 uppercase">
                  Projects Completed
                </div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-medium tracking-tight mb-3">
                  40+
                </div>
<div className="text-xs font-normal tracking-widest text-white/40 uppercase">
                  Brand Partners
                </div>
</div>
</div>
</div>
</section>
<section className="w-full relative h-[200vh] bg-[#030303] border-b border-white/[0.04]" id="showreel-section">
<div className="sticky flex overflow-hidden z-20 w-full h-screen top-0 items-center justify-center">
<div className="w-[90vw] md:w-[75vw] h-[60vh] md:h-[75vh] rounded-3xl overflow-hidden relative bg-[#1a1a1a] shadow-2xl shadow-black/50" id="showreel-video" style={{transform: 'translateZ(0)', willChange: 'width, height, border-radius'}}>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-700 hover:opacity-100" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-background-28562-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-black/20">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 bg-white/10">
<i className="w-8 h-8 md:w-10 md:h-10 ml-1 text-white" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="text-white text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase">
                  Showreel
                </div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden reveal text-[#030303] bg-white w-full border-[#030303]/10 border-b py-20">
<div className="lg:px-24 w-full max-w-[1440px] mr-auto ml-auto pr-6 pl-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium mb-12 md:mb-16 max-w-2xl leading-[1.1]">
              Explore our branding
              <br/>
              and design services
            </h2>
<div className="flex flex-col lg:flex-row w-full">
<div className="group min-w-0 h-[80px] hover:h-[260px] lg:h-auto lg:flex-1 lg:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden bg-white cursor-pointer border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#030303]/25">
<div className="w-full h-full p-6 flex flex-col">
<div className="flex justify-between items-start lg:w-full relative">
<h3 className="text-xl lg:text-2xl font-normal z-20 whitespace-nowrap">
                      Analysis
                    </h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-500 group-hover:delay-150 absolute left-0 top-12 lg:left-auto lg:right-0 lg:top-0 z-10 w-[85vw] lg:w-[260px] xl:w-[300px] pointer-events-none group-hover:pointer-events-auto">
<ul className="text-base text-[#030303]/50 space-y-2 lg:space-y-3 font-light">
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span>
                          Brand Audit
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span>
                          Brand &amp; Benchmark
                        </li>
<li className="flex items-start gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span>
<span className="leading-snug">
                            Market &amp; Consumer Intelligence
                          </span>
</li>
</ul>
</div>
<div className="text-5xl font-light leading-none tracking-tighter lg:hidden ml-auto">
                      A
                    </div>
</div>
<div className="text-8xl xl:text-9xl font-light leading-none tracking-tighter hidden lg:block mt-10 -ml-1">
                    A
                  </div>
</div>
</div>
<div className="group min-w-0 h-[80px] hover:h-[260px] lg:h-auto lg:flex-1 lg:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden bg-white cursor-pointer border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#030303]/25">
<div className="w-full h-full p-6 flex flex-col">
<div className="flex justify-between items-start lg:w-full relative">
<h3 className="text-xl lg:text-2xl font-normal z-20 whitespace-nowrap">
                      Brand Strategy
                    </h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-500 group-hover:delay-150 absolute left-0 top-12 lg:left-auto lg:right-0 lg:top-0 z-10 w-[85vw] lg:w-[260px] xl:w-[300px] pointer-events-none group-hover:pointer-events-auto">
<ul className="text-base text-[#030303]/50 space-y-2 lg:space-y-3 font-light">
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Brand Positioning
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Brand Architecture
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Naming &amp; Messaging
                        </li>
</ul>
</div>
<div className="text-5xl font-light leading-none tracking-tighter lg:hidden ml-auto">
                      B
                    </div>
</div>
<div className="text-8xl xl:text-9xl font-light leading-none tracking-tighter hidden lg:block mt-10 -ml-1">
                    B
                  </div>
</div>
</div>
<div className="group min-w-0 h-[80px] hover:h-[260px] lg:h-auto lg:flex-1 lg:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden bg-white cursor-pointer border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#030303]/25">
<div className="w-full h-full p-6 flex flex-col">
<div className="flex justify-between items-start lg:w-full relative">
<h3 className="text-xl lg:text-2xl font-normal z-20 whitespace-nowrap">
                      Culture
                    </h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-500 group-hover:delay-150 absolute left-0 top-12 lg:left-auto lg:right-0 lg:top-0 z-10 w-[85vw] lg:w-[260px] xl:w-[300px] pointer-events-none group-hover:pointer-events-auto">
<ul className="text-base text-[#030303]/50 space-y-2 lg:space-y-3 font-light">
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Internal Alignment
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Purpose &amp; Values
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Employee Experience
                        </li>
</ul>
</div>
<div className="text-5xl font-light leading-none tracking-tighter lg:hidden ml-auto">
                      C
                    </div>
</div>
<div className="text-8xl xl:text-9xl font-light leading-none tracking-tighter hidden lg:block mt-10 -ml-1">
                    C
                  </div>
</div>
</div>
<div className="group min-w-0 h-[80px] hover:h-[260px] lg:h-auto lg:flex-1 lg:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden bg-white cursor-pointer border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#030303]/25">
<div className="w-full h-full p-6 flex flex-col">
<div className="flex justify-between items-start lg:w-full relative">
<h3 className="text-xl lg:text-2xl font-normal z-20 whitespace-nowrap">
                      Design
                    </h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-500 group-hover:delay-150 absolute left-0 top-12 lg:left-auto lg:right-0 lg:top-0 z-10 w-[85vw] lg:w-[260px] xl:w-[300px] pointer-events-none group-hover:pointer-events-auto">
<ul className="text-base text-[#030303]/50 space-y-2 lg:space-y-3 font-light">
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Visual Identity
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Art Direction
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          UI/UX System
                        </li>
</ul>
</div>
<div className="text-5xl font-light leading-none tracking-tighter lg:hidden ml-auto">
                      D
                    </div>
</div>
<div className="text-8xl xl:text-9xl font-light leading-none tracking-tighter hidden lg:block mt-10 -ml-1">
                    D
                  </div>
</div>
</div>
<div className="group min-w-0 h-[80px] hover:h-[260px] lg:h-auto lg:flex-1 lg:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden bg-white cursor-pointer border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#030303]/25">
<div className="w-full h-full p-6 flex flex-col">
<div className="flex justify-between items-start lg:w-full relative">
<h3 className="text-xl lg:text-2xl font-normal z-20 whitespace-nowrap">
                      Experience
                    </h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-500 group-hover:delay-150 absolute left-0 top-12 lg:left-auto lg:right-0 lg:top-0 z-10 w-[85vw] lg:w-[260px] xl:w-[300px] pointer-events-none group-hover:pointer-events-auto">
<ul className="text-base text-[#030303]/50 space-y-2 lg:space-y-3 font-light">
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Web Development
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Motion Design
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Interactive Media
                        </li>
</ul>
</div>
<div className="text-5xl font-light leading-none tracking-tighter lg:hidden ml-auto">
                      E
                    </div>
</div>
<div className="text-8xl xl:text-9xl font-light leading-none tracking-tighter hidden lg:block mt-10 -ml-1">
                    E
                  </div>
</div>
</div>
<div className="group min-w-0 h-[80px] hover:h-[260px] lg:h-auto lg:flex-1 lg:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden bg-white cursor-pointer border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-[#030303]/25">
<div className="w-full h-full p-6 flex flex-col">
<div className="flex justify-between items-start lg:w-full relative">
<h3 className="text-xl lg:text-2xl font-normal z-20 whitespace-nowrap">
                      Future
                    </h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-500 group-hover:delay-150 absolute left-0 top-12 lg:left-auto lg:right-0 lg:top-0 z-10 w-[85vw] lg:w-[260px] xl:w-[300px] pointer-events-none group-hover:pointer-events-auto">
<ul className="text-base text-[#030303]/50 space-y-2 lg:space-y-3 font-light">
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Campaign Strategy
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Content Creation
                        </li>
<li className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#030303]/30 shrink-0"></span>
                          Growth Marketing
                        </li>
</ul>
</div>
<div className="text-5xl font-light leading-none tracking-tighter lg:hidden ml-auto">
                      F
                    </div>
</div>
<div className="text-8xl xl:text-9xl font-light leading-none tracking-tighter hidden lg:block mt-10 -ml-1">
                    F
                  </div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-20 border-b border-white/[0.04] bg-[#050505]/50 overflow-hidden">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
<div className="flex items-center gap-2 text-xs font-normal tracking-wide text-white/50 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]"></span>
              [003] Benefits
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium max-w-2xl leading-[1.1] lg:text-right reveal reveal-delay-100">
              The Benefits Of Working
              <br/>
<span className="text-white/30">With Us</span>
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-12 pb-16">
<div className="flex flex-col items-center mt-0 lg:mt-0 reveal active">
<div className="w-px h-16 lg:h-24 bg-gradient-to-b from-transparent to-white/20"></div>
<div className="w-full max-w-[360px] min-h-[320px] lg:min-h-[360px] aspect-square rounded-2xl bg-[#7030c2] p-6 lg:p-8 relative overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
<div className="pattern-overlay absolute inset-0 z-0 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#030303]/40 flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="layers" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex flex-col gap-2 lg:gap-3">
<div className="text-xs lg:text-sm font-medium text-white/50 tracking-widest">
                      [001]
                    </div>
<h3 className="text-xl lg:text-2xl font-medium text-white leading-[1.2] tracking-tight mt-1">
                      Strategic
                      <br/>
                      Creativity
                    </h3>
<p className="text-sm lg:text-base font-light text-white/80 leading-relaxed mt-1 lg:mt-2">
                      Smart, research-driven design decisions that help your
                      brand grow effectively.
                    </p>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-center mt-12 lg:mt-8 reveal reveal-delay-100 active">
<div className="w-px h-16 lg:h-32 bg-gradient-to-b from-transparent to-white/20"></div>
<div className="w-full max-w-[360px] min-h-[320px] lg:min-h-[360px] aspect-square rounded-2xl bg-[#2814ff] p-6 lg:p-8 relative overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
<div className="pattern-overlay absolute inset-0 z-0 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#030303]/40 flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex flex-col gap-2 lg:gap-3">
<div className="text-xs lg:text-sm font-medium text-white/50 tracking-widest">
                      [002]
                    </div>
<h3 className="text-xl lg:text-2xl font-medium text-white leading-[1.2] tracking-tight mt-1">
                      Modern
                      <br/>
                      Aesthetics
                    </h3>
<p className="text-sm lg:text-base font-light text-white/80 leading-relaxed mt-1 lg:mt-2">
                      Clean, visually appealing designs crafted to elevate your
                      brand identity.
                    </p>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-center mt-12 lg:mt-4 reveal reveal-delay-200 active">
<div className="w-px h-16 lg:h-20 bg-gradient-to-b from-transparent to-white/20"></div>
<div className="w-full max-w-[360px] min-h-[320px] lg:min-h-[360px] aspect-square rounded-2xl bg-[#5bc8af] p-6 lg:p-8 relative overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
<div className="pattern-overlay absolute inset-0 z-0 pointer-events-none opacity-40"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#030303]/40 flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex flex-col gap-2 lg:gap-3">
<div className="text-xs lg:text-sm font-medium text-white/50 tracking-widest">
                      [003]
                    </div>
<h3 className="text-xl lg:text-2xl font-medium text-white leading-[1.2] tracking-tight mt-1">
                      Fast
                      <br/>
                      Delivery
                    </h3>
<p className="text-sm lg:text-base font-light text-white/80 leading-relaxed mt-1 lg:mt-2">
                      Quick turnaround without compromising the quality of your
                      final output.
                    </p>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-center mt-12 lg:mt-16 reveal reveal-delay-300 active">
<div className="w-px h-16 lg:h-24 bg-gradient-to-b from-transparent to-white/20"></div>
<div className="w-full max-w-[360px] min-h-[320px] lg:min-h-[360px] aspect-square rounded-2xl bg-[#d49e0a] p-6 lg:p-8 relative overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
<div className="pattern-overlay absolute inset-0 z-0 pointer-events-none opacity-50"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#030303]/40 flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex flex-col gap-2 lg:gap-3">
<div className="text-xs lg:text-sm font-medium text-white/50 tracking-widest">
                      [004]
                    </div>
<h3 className="text-xl lg:text-2xl font-medium text-white leading-[1.2] tracking-tight mt-1">
                      Client
                      <br/>
                      Focused
                    </h3>
<p className="text-sm lg:text-base font-light text-white/80 leading-relaxed mt-1 lg:mt-2">
                      A smooth, transparent workflow built around your needs and
                      satisfaction.
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-[1440px] mx-auto px-6 lg:px-24 py-20 border-b border-white/[0.04]" id="works">
<div className="flex items-center gap-2 text-xs font-normal tracking-wide text-white/50 mb-12 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]"></span>
            [005] Selected Works
          </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium mb-12 max-w-3xl leading-[1.1] reveal reveal-delay-100">
            Work Built To
            <br/>
<span className="text-white/30">Inspire And Perform</span>
</h2>
<div className="relative w-full flex flex-col pb-16">
<div className="sticky top-28 h-[75vh] w-full pt-4 pb-12 reveal-scale">
<div className="w-full h-full relative rounded-2xl overflow-hidden group shadow-[0_-20px_40px_rgba(0,0,0,0.6)] border border-white/10 bg-[#0a0a0a] transform transition-transform duration-700 hover:scale-[1.01]">
<img alt="Work 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f9b5851-f8a6-48ad-9443-2ecc7867b6f1_3840w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex flex-col lg:flex-row justify-between lg:items-end gap-6">
<div>
<div className="flex gap-3 mb-6">
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        Branding
                      </span>
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        UI/UX
                      </span>
</div>
<h3 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-3">
                      Nexus Platform
                    </h3>
<p className="text-base text-white/60 font-light max-w-md hidden md:block">
                      Redesigning the digital experience for a next-generation
                      data analytics tool.
                    </p>
</div>
<a className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md bg-black/30 group-hover:-rotate-45" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="sticky top-28 h-[75vh] w-full pt-10 pb-6 reveal-scale">
<div className="w-full h-full relative rounded-2xl overflow-hidden group shadow-[0_-20px_40px_rgba(0,0,0,0.8)] border border-white/10 bg-[#0a0a0a] transform transition-transform duration-700 hover:scale-[1.01]">
<img alt="Work 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0fd5a84-599e-4215-8588-9c1826ac5def_3840w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex flex-col lg:flex-row justify-between lg:items-end gap-6">
<div>
<div className="flex gap-3 mb-6">
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        E-Commerce
                      </span>
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        Web Dev
                      </span>
</div>
<h3 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-3">
                      Aura Studio
                    </h3>
<p className="text-base text-white/60 font-light max-w-md hidden md:block">
                      A seamless online shopping experience for an emerging
                      minimalist fashion brand.
                    </p>
</div>
<a className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md bg-black/30 group-hover:-rotate-45" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="sticky top-28 h-[75vh] w-full pt-16 pb-0 reveal-scale">
<div className="w-full h-full relative rounded-2xl overflow-hidden group shadow-[0_-20px_40px_rgba(0,0,0,0.9)] border border-white/10 bg-[#0a0a0a] transform transition-transform duration-700 hover:scale-[1.01]">
<img alt="Work 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49519cb8-a253-4041-b3f6-ff870ada6f62_3840w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex flex-col lg:flex-row justify-between lg:items-end gap-6">
<div className="">
<div className="flex gap-3 mb-6">
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        App Design
                      </span>
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        Motion
                      </span>
</div>
<h3 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-3">
                      Fintekk
                    </h3>
<p className="text-base text-white/60 font-light max-w-md hidden md:block">
                      Simplifying personal finance with intuitive interfaces and
                      engaging motion design.
                    </p>
</div>
<a className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md bg-black/30 group-hover:-rotate-45" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="sticky top-28 h-[75vh] w-full pt-20 pb-0 reveal-scale">
<div className="w-full h-full relative rounded-2xl overflow-hidden group shadow-[0_-20px_40px_rgba(0,0,0,0.9)] border border-white/10 bg-[#0a0a0a] transform transition-transform duration-700 hover:scale-[1.01]">
<img alt="Work 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f9b5851-f8a6-48ad-9443-2ecc7867b6f1_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex flex-col lg:flex-row justify-between lg:items-end gap-6">
<div className="">
<div className="flex gap-3 mb-6">
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        3D Design
                      </span>
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        Branding
                      </span>
</div>
<h3 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-3">
                      Omni Verse
                    </h3>
<p className="text-base text-white/60 font-light max-w-md hidden md:block">
                      Creating a new dimension of visual identity for an
                      innovative tech startup.
                    </p>
</div>
<a className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md bg-black/30 group-hover:-rotate-45" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="sticky top-28 h-[75vh] w-full pt-24 pb-0 reveal-scale">
<div className="w-full h-full relative rounded-2xl overflow-hidden group shadow-[0_-20px_40px_rgba(0,0,0,0.9)] border border-white/10 bg-[#0a0a0a] transform transition-transform duration-700 hover:scale-[1.01]">
<img alt="Work 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49519cb8-a253-4041-b3f6-ff870ada6f62_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex flex-col lg:flex-row justify-between lg:items-end gap-6">
<div className="">
<div className="flex gap-3 mb-6">
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        Web3
                      </span>
<span className="text-xs tracking-widest uppercase border border-white/20 px-4 py-1.5 rounded-full text-white/80 backdrop-blur-md bg-black/30">
                        Development
                      </span>
</div>
<h3 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-3">
                      Ethera
                    </h3>
<p className="text-base text-white/60 font-light max-w-md hidden md:block">
                      Decentralized platform design focusing on user trust and
                      accessibility.
                    </p>
</div>
<a className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md bg-black/30 group-hover:-rotate-45" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="flex reveal w-full pt-12 justify-center">
<a className="inline-flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm font-medium text-white bg-[#FF9900] border-[#FF9900] border rounded-full pt-4 pr-10 pb-4 pl-10" href="#">
              View all projects
            </a>
</div>
</section>
<section className="w-full border-b border-white/[0.04] overflow-hidden py-16 flex flex-col gap-16 bg-[#030303]">
<div className="flex w-[200%] animate-slide-right-slow cursor-default select-none opacity-80">
<div className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8 md:px-12 w-1/2 justify-around">
<span className="text-xl md:text-2xl font-semibold tracking-tighter lowercase text-white/60 hover:text-white transition-colors">
                bo
                <span className="text-white/40">a</span>
                t
              </span>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="font-semibold border border-white/40 px-1 py-0.5 text-xs">
                  DAT
                </div>
<div className="text-xs leading-none uppercase">
                  Freight
                  <br/>
                  &amp; Analytics
                </div>
</div>
<span className="text-2xl md:text-3xl font-semibold tracking-tighter lowercase text-white/60 hover:text-white transition-colors">
                swwl.
              </span>
<div className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
<div className="flex gap-0.5 mb-1">
<div className="w-3 h-5 bg-current"></div>
<div className="w-3 h-5 bg-current"></div>
</div>
<span className="text-xs font-semibold tracking-widest mt-1">
                  THERMAX
                </span>
</div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="shield-half" strokeWidth="1.5"></i>
<span className="text-xl md:text-2xl font-medium tracking-tight">
                  Hero
                </span>
</div>
<div className="text-lg md:text-xl font-semibold tracking-tight flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="flex flex-col gap-1">
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
</div>
                HT Media
              </div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="aperture" strokeWidth="1.5"></i>
<span className="border border-white/40 px-1.5 py-0.5 text-xs font-medium">
                  LPU
                </span>
</div>
</div>
<div className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8 md:px-12 w-1/2 justify-around">
<span className="text-xl md:text-2xl font-semibold tracking-tighter lowercase text-white/60 hover:text-white transition-colors">
                bo
                <span className="text-white/40">a</span>
                t
              </span>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="font-semibold border border-white/40 px-1 py-0.5 text-xs">
                  DAT
                </div>
<div className="text-xs leading-none uppercase">
                  Freight
                  <br/>
                  &amp; Analytics
                </div>
</div>
<span className="text-2xl md:text-3xl font-semibold tracking-tighter lowercase text-white/60 hover:text-white transition-colors">
                swwl.
              </span>
<div className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
<div className="flex gap-0.5 mb-1">
<div className="w-3 h-5 bg-current"></div>
<div className="w-3 h-5 bg-current"></div>
</div>
<span className="text-xs font-semibold tracking-widest mt-1">
                  THERMAX
                </span>
</div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="shield-half" strokeWidth="1.5"></i>
<span className="text-xl md:text-2xl font-medium tracking-tight">
                  Hero
                </span>
</div>
<div className="text-lg md:text-xl font-semibold tracking-tight flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="flex flex-col gap-1">
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
</div>
                HT Media
              </div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="aperture" strokeWidth="1.5"></i>
<span className="border border-white/40 px-1.5 py-0.5 text-xs font-medium">
                  LPU
                </span>
</div>
</div>
</div>
<div className="flex w-[200%] animate-slide-left-slow cursor-default select-none opacity-80">
<div className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8 md:px-12 w-1/2 justify-around">
<div className="flex flex-col items-end text-white/60 hover:text-white transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight leading-none mb-1">
                  Apollo
                </span>
<span className="bg-current text-[#030303] font-semibold px-1 py-0.5 text-xs rounded-sm leading-none">
                  24|7
                </span>
</div>
<div className="text-xl md:text-2xl font-extrabold tracking-tighter uppercase text-white/60 hover:text-white transition-colors">
                DECATHLON
              </div>
<div className="text-xl md:text-2xl font-medium tracking-tight lowercase text-white/60 hover:text-white transition-colors">
                livspace
              </div>
<div className="text-xl md:text-2xl font-bold tracking-tight text-white/60 hover:text-white transition-colors">
                Vistara
              </div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="triangle" strokeWidth="1.5"></i>
<span className="text-xl md:text-2xl font-medium tracking-tight">
                  Piramal
                </span>
</div>
</div>
<div className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8 md:px-12 w-1/2 justify-around">
<div className="flex flex-col items-end text-white/60 hover:text-white transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight leading-none mb-1">
                  Apollo
                </span>
<span className="bg-current text-[#030303] font-semibold px-1 py-0.5 text-xs rounded-sm leading-none">
                  24|7
                </span>
</div>
<div className="text-xl md:text-2xl font-extrabold tracking-tighter uppercase text-white/60 hover:text-white transition-colors">
                DECATHLON
              </div>
<div className="text-xl md:text-2xl font-medium tracking-tight lowercase text-white/60 hover:text-white transition-colors">
                livspace
              </div>
<div className="text-xl md:text-2xl font-bold tracking-tight text-white/60 hover:text-white transition-colors">
                Vistara
              </div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="triangle" strokeWidth="1.5"></i>
<span className="text-xl md:text-2xl font-medium tracking-tight">
                  Piramal
                </span>
</div>
</div>
</div>
<div className="flex w-[200%] animate-slide-right-slow cursor-default select-none opacity-80">
<div className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8 md:px-12 w-1/2 justify-around">
<div className="flex flex-col items-end text-white/60 hover:text-white transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight leading-none mb-1">
                  Apollo
                </span>
<span className="bg-current text-[#030303] font-semibold px-1 py-0.5 text-xs rounded-sm leading-none">
                  24|7
                </span>
</div>
<span className="text-xl md:text-2xl font-semibold tracking-tighter lowercase text-white/60 hover:text-white transition-colors">
                bo
                <span className="text-white/40">a</span>
                t
              </span>
<div className="text-lg md:text-xl font-semibold tracking-tight flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="flex flex-col gap-1">
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
</div>
                HT Media
              </div>
<div className="text-xl md:text-2xl font-bold tracking-tight text-white/60 hover:text-white transition-colors">
                Vistara
              </div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="font-semibold border border-white/40 px-1 py-0.5 text-xs">
                  DAT
                </div>
<div className="text-xs leading-none uppercase">
                  Freight
                  <br/>
                  &amp; Analytics
                </div>
</div>
</div>
<div className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8 md:px-12 w-1/2 justify-around">
<div className="flex flex-col items-end text-white/60 hover:text-white transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight leading-none mb-1">
                  Apollo
                </span>
<span className="bg-current text-[#030303] font-semibold px-1 py-0.5 text-xs rounded-sm leading-none">
                  24|7
                </span>
</div>
<span className="text-xl md:text-2xl font-semibold tracking-tighter lowercase text-white/60 hover:text-white transition-colors">
                bo
                <span className="text-white/40">a</span>
                t
              </span>
<div className="text-lg md:text-xl font-semibold tracking-tight flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="flex flex-col gap-1">
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
<div className="w-4 h-0.5 bg-current"></div>
</div>
                HT Media
              </div>
<div className="text-xl md:text-2xl font-bold tracking-tight text-white/60 hover:text-white transition-colors">
                Vistara
              </div>
<div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
<div className="font-semibold border border-white/40 px-1 py-0.5 text-xs">
                  DAT
                </div>
<div className="text-xs leading-none uppercase">
                  Freight
                  <br/>
                  &amp; Analytics
                </div>
</div>
</div>
</div>
</section>
<section className="lg:px-24 border-white/[0.04] w-full max-w-[1440px] border-b mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="testimonials">
<div className="flex items-center gap-2 text-xs font-normal tracking-wide text-white/50 mb-12 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff4e00]"></span>
            [006] Testimonials
          </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium mb-12 max-w-3xl leading-[1.1] reveal reveal-delay-100">
            Client Stories &amp;
            <br/>
<span className="text-white/30">Feedback</span>
</h2>
<div className="overflow-hidden w-full relative reveal reveal-delay-200" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'}}>
<div className="flex w-max animate-slide-left-slow hover:[animation-play-state:paused] py-4">

<div className="flex w-max gap-6 lg:gap-8 pr-6 lg:pr-8">
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Ideasbox completely transformed our digital presence.
                      Their strategic approach to our brand identity was exactly
                      what we needed to reach the next level.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        James Carter
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        CEO, Nexus Platform
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Working with the team was an absolute pleasure. They
                      delivered our new e-commerce platform ahead of schedule,
                      and the design is simply stunning.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Sarah Jenkins
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        Founder, Aura Studio
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Their understanding of web3 aesthetics and functional
                      design is unmatched. They helped us build a brand that
                      resonates deeply with our core audience.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Michael Chen
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        Director, Ethera
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      From initial concept to final execution, the process was
                      seamless. The motion graphics they produced increased our
                      user engagement by over 40%.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Emily Parker
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        CMO, Fintekk
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      We approached them with a complex problem and they
                      delivered a beautifully simple, elegant solution. Truly
                      world-class designers.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 5" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        David Rossi
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        Co-founder, Omni
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Their creative strategy didn't just give us a new logo; it
                      gave us a new voice. We've seen incredible growth since
                      our rebranding.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 6" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Sophia Martinez
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        VP Marketing, Solstice
                      </p>
</div>
</div>
</div>
</div>

<div className="flex w-max gap-6 lg:gap-8 pr-6 lg:pr-8">
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Ideasbox completely transformed our digital presence.
                      Their strategic approach to our brand identity was exactly
                      what we needed to reach the next level.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        James Carter
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        CEO, Nexus Platform
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Working with the team was an absolute pleasure. They
                      delivered our new e-commerce platform ahead of schedule,
                      and the design is simply stunning.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Sarah Jenkins
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        Founder, Aura Studio
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Their understanding of web3 aesthetics and functional
                      design is unmatched. They helped us build a brand that
                      resonates deeply with our core audience.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Michael Chen
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        Director, Ethera
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      From initial concept to final execution, the process was
                      seamless. The motion graphics they produced increased our
                      user engagement by over 40%.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Emily Parker
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        CMO, Fintekk
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      We approached them with a complex problem and they
                      delivered a beautifully simple, elegant solution. Truly
                      world-class designers.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 5" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        David Rossi
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        Co-founder, Omni
                      </p>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-[#0a0a0a] border border-white/10 p-8 lg:p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 w-[320px] md:w-[380px] lg:w-[420px] shrink-0">
<div>
<div className="text-6xl text-[#FF9900] font-serif leading-none h-8 mb-6">
                      “
                    </div>
<p className="text-base font-light text-white/80 leading-relaxed mb-10">
                      Their creative strategy didn't just give us a new logo; it
                      gave us a new voice. We've seen incredible growth since
                      our rebranding.
                    </p>
</div>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
<img alt="Client 6" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                        Sophia Martinez
                      </h4>
<p className="text-xs text-white/50 tracking-wide mt-0.5">
                        VP Marketing, Solstice
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
