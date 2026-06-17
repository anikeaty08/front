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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      lucide.createIcons();

      // Column slider interaction
      const slider = document.getElementById('colSlider');
      const gallery = document.getElementById('gallery');
      const colCount = document.getElementById('colCount');

      slider.addEventListener('input', (e) => {
          const val = e.target.value;
          gallery.style.setProperty('--cols', val);
          colCount.textContent = val;

          // Update responsive grid
          if (window.innerWidth < 640) {
              gallery.style.setProperty('--cols', Math.min(val, 2));
          } else if (window.innerWidth < 768) {
              gallery.style.setProperty('--cols', Math.min(val, 3));
          }
      });

      // Responsive grid handling
      window.addEventListener('resize', () => {
          const val = slider.value;
          if (window.innerWidth < 640) {
              gallery.style.setProperty('--cols', Math.min(val, 2));
          } else if (window.innerWidth < 768) {
              gallery.style.setProperty('--cols', Math.min(val, 3));
          } else {
              gallery.style.setProperty('--cols', val);
          }
      });

      // Tabs interaction
      document.querySelectorAll('[data-tab]').forEach(btn => {
          btn.addEventListener('click', () => {
              document.querySelectorAll('[data-tab]').forEach(b => {
                  b.classList.remove('tab-active', 'bg-gradient-to-r', 'from-cyan-500', 'to-sky-500');
                  b.classList.add('hover:bg-white/5');
              });
              btn.classList.add('tab-active', 'bg-gradient-to-r', 'from-cyan-500', 'to-sky-500');
              btn.classList.remove('hover:bg-white/5');
          });
      });

      // Initialize responsive grid
      window.dispatchEvent(new Event('resize'));
    
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
      

<div className="aura-background-component w-full top-0 absolute h-[900px] saturate-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="mZq7XpvHyoo5yklnnqL9"><div data-us-text="id-mdi69c91dlpevrz7ugb7me" style={{width: '1160.32px', top: '311.702px', left: '203.84px', fontSize: '282.24px', lineHeight: '276.595px', letterSpacing: '-8.95337px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-0ujyan4y8lueqxp5d75irn" style={{width: '1413.26px', top: '308.105px', left: '77.3717px', fontSize: '282.24px', lineHeight: '283.791px', letterSpacing: '-8.95337px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div></div></div>

<div className="absolute inset-0 -z-10" style={{visibility: 'hidden'}}>
<img alt="" className="w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d73444d7-6d9e-4d7a-bd0f-2e1a6f620522_3840w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0b0b16]/70 via-[#0b0b16]/80 to-[#0b0b16]"></div>
</div>

<header className="animate-fade-in opacity-0 w-full">
<nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/56b2752b-f067-4093-be83-e35cac41ab92_320w.webp)] bg-cover rounded-full" href="#"></a>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium">
<a className="transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-200 hover:after:w-full font-poppins font-light tracking-normal hover:text-cyan-400 after:bg-cyan-400" href="#" style={{}}>
            Studio
          </a>
<a className="transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-200 hover:after:w-full font-poppins font-light tracking-normal hover:text-cyan-400 after:bg-cyan-400" href="#" style={{}}>
            Gallery
          </a>
<a className="transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-200 hover:after:w-full font-poppins font-light tracking-normal hover:text-cyan-400 after:bg-cyan-400" href="#" style={{}}>
            Community
          </a>
<a className="transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-200 hover:after:w-full font-poppins font-light tracking-normal hover:text-cyan-400 after:bg-cyan-400" href="#" style={{}}>
            Pro
          </a>
</div>
<div className="flex items-center space-x-4">
<button className="tab-active flex transition-all duration-200 hover:scale-105 text-sm font-medium bg-gradient-to-r to-sky-500 rounded-full pt-2 pr-4 pb-2 pl-4 space-x-1 items-center from-cyan-500" style={{}}>
            Get Started
          </button>
<button className="md:hidden hover:bg-white/10 p-2 rounded-lg transition-colors duration-200">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>
</header>

<section className="text-center pt-10 pb-24 relative">
<div className="max-w-4xl mt-14 mr-auto ml-auto pr-6 pl-6">
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-slide-up text-3xl font-light tracking-tight font-playfair opacity-0" style={{animationDelay: '0.2s'}}>Where inspiration becomes innovation <br className="hidden sm:block"/></h1>

<div className="animate-scale-in opacity-0 max-w-xl mt-20 mr-auto ml-auto relative backdrop-blur-lg" style={{animationDelay: '0.6s'}}>
<svg className="lucide lucide-paintbrush absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" data-lucide="paintbrush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14.622 17.897-10.68-2.913"></path><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path></svg>
<input className="focus:ring-2 focus:border-transparent placeholder-white/40 sm:text-base transition-all duration-200 hover:bg-white/10 text-sm bg-white/5 w-full border-white/20 border rounded-full pt-4 pr-12 pb-4 pl-12 backdrop-blur-sm focus:ring-cyan-500" placeholder="A mystical forest with glowing crystals..." style={{}} type="text"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200 hover:text-cyan-400" style={{}}>
<svg className="lucide lucide-wand-2 w-5 h-5 text-white/60" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</button>
</div>

<div className="flex animate-fade-in opacity-0 mt-6 space-x-4 justify-center" style={{animationDelay: '0.8s'}}>
<button className="uppercase cursor-pointer transition-all duration-500 hover:text-white hover:bg-[#00C0FF] hover:border-[#008cff] hover:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff] focus:text-white focus:bg-[#008cff] focus:border-[#008cff] focus:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff] text-base font-medium text-white/50 bg-transparent border-white/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 [--fx-filter:blur(6px)_liquid-glass(0.9,10)_saturate(1.25)_noise(0.5,1,0)]">
  Generate

                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            </button>
<button className="hover:bg-white/10 transition-all duration-200 hover:border-white/20 flex text-base font-medium bg-white/5 border-white/10 border rounded-full pt-3 pr-8 pb-3 pl-8 backdrop-blur-md space-x-2 items-center">
<svg className="lucide lucide-shuffle w-[16px] h-[16px]" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg>
<span className="font-poppins font-light tracking-normal" style={{}}>
              Random
            </span>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
<div className="flex flex-wrap gap-4 border-white/10 border-b pb-6 gap-x-4 gap-y-4 items-center justify-between">

<div className="flex overflow-x-auto pt-2 pr-2 pb-2 pl-2 space-x-6">
<button className="tab-active flex transition-all duration-200 hover:scale-105 text-sm font-medium bg-gradient-to-r to-sky-500 rounded-full pt-2 pr-4 pb-2 pl-4 space-x-1 items-center from-cyan-500" data-tab="Trending" style={{}}>
<svg className="lucide lucide-amphora w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="gallery-wide-outline" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" clip-rule="evenodd" fill="#ffffff" fill-rule="evenodd"><path className="" d="M17.141 2.374c-.924-.124-2.1-.124-3.568-.124h-3.321c-1.467 0-2.644 0-3.568.124c-.957.128-1.755.401-2.388 1.032c-.66.658-.931 1.495-1.053 2.504l-.006.05l.003.195q-.319.208-.599.486c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.545c.001 1.625.013 2.957.153 4c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87a3.7 3.7 0 0 0-.772-.593v-.093l-.005-.045c-.122-1.009-.392-1.846-1.053-2.504c-.633-.63-1.43-.904-2.388-1.032M2.751 14.84c.003 1.475.022 2.58.139 3.45c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c.763-.102 1.281-.273 1.672-.535l-2.687-2.419a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07zm15.527 2.201l2.588 2.33c.106-.296.186-.65.244-1.082c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 8.705 2.89 9.71c-.109.807-.133 1.816-.138 3.135l.506-.443a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281M5.354 4.47c-.24.239-.412.551-.526 1.053q.328-.072.683-.119c1.14-.153 2.595-.153 4.433-.153h4.112c1.838 0 3.294 0 4.433.153q.256.034.5.081c-.115-.48-.285-.782-.518-1.015c-.308-.307-.737-.502-1.529-.608c-.813-.11-1.889-.111-3.424-.111h-3.211c-1.535 0-2.611.002-3.424.11c-.792.107-1.221.302-1.529.609"></path><path d="M17.5 8.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></path></g></svg>
<span className="font-poppins font-light tracking-normal" style={{}}>
              Trending
            </span>
</button>
<button className="flex items-center space-x-1 py-2 px-4 text-sm font-medium hover:bg-white/5 rounded-full transition-all duration-200 hover:text-cyan-400" data-tab="Featured" style={{}}>
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="font-poppins font-light tracking-normal" style={{}}>
              Featured
            </span>
</button>
<button className="flex items-center space-x-1 py-2 px-4 text-sm font-medium hover:bg-white/5 rounded-full transition-all duration-200 hover:text-cyan-400" data-tab="Recent" style={{}}>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-poppins font-light tracking-normal" style={{}}>
              Recent
            </span>
</button>
<button className="flex items-center space-x-1 py-2 px-4 text-sm font-medium hover:bg-white/5 rounded-full transition-all duration-200 hover:text-cyan-400" data-tab="Popular" style={{}}>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-poppins font-light tracking-normal" style={{}}>
              Popular
            </span>
</button>
<button className="flex items-center space-x-1 py-2 px-4 text-sm font-medium hover:bg-white/5 rounded-full transition-all duration-200 hover:text-cyan-400" data-tab="Liked" style={{}}>
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-poppins font-light tracking-normal" style={{}}>
              Liked
            </span>
</button>
<button className="flex items-center space-x-1 py-2 px-4 text-sm font-medium hover:bg-white/5 rounded-full transition-all duration-200 hover:text-cyan-400" data-tab="Enhanced" style={{}}>
<svg className="lucide lucide-zoom-in w-4 h-4" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
<span className="font-poppins font-light tracking-normal" style={{}}>
              Enhanced
            </span>
</button>
</div>

<div className="flex sm:w-auto bg-white/5 w-full border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 space-x-3 items-center">
<svg className="lucide lucide-grid-3x3 w-4 h-4 text-white/60" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="select-none whitespace-nowrap text-sm font-light tracking-normal font-poppins">
    Grid:
    <span className="font-light text-cyan-300 tracking-normal font-poppins" id="colCount">
      4
    </span>
</span>
<div className="w-24 sm:w-32">
<input id="colSlider" max="6" min="1" step="1" style={{WebkitAppearance: 'none', width: '100%', height: '2px', background: '#3f3f46', borderRadius: '4px', outline: 'none'}} type="range" value="4"/>
<style>
      #colSlider::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #06b6d4;
        cursor: pointer;
        box-shadow: 0 0 0 2px #1e1e30;
        transition: all 0.2s ease;
      }
      #colSlider::-webkit-slider-thumb:hover {
        transform: scale(1.1);
        box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.2);
      }
      #colSlider::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #06b6d4;
        cursor: pointer;
        border: none;
      }
    </style>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mt-10 mr-auto mb-20 ml-auto pr-6 pl-6">
<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-6 gap-x-6 gap-y-6" id="gallery" style={{'--cols': '4'}}>

<div className="gallery-item group overflow-hidden hover:border-white/20 transition-all duration-300 break-inside-avoid bg-white/5 border-white/10 border rounded-2xl mb-6 relative">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ecd8a16e-643b-416c-b628-c9fde1f4f660_800w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7db323b-b62c-48e9-ba21-8ed554e7d2a8_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              CyberVision
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48a28117-7409-4626-895f-4839a0dec5ec_800w.webp" style={{aspectRatio: '3/4'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/386aed4d-4457-47f0-9edf-23b08539d1e4_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              NeonDreams
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5aa0ce1a-38d3-4eb1-9b04-be1f2c8edf8b_800w.jpg" style={{aspectRatio: '2/3'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20" src="https://i.pravatar.cc/40?img=3"/>
<span className="text-xs font-poppins font-light tracking-normal">
              QuantumArt
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b0ba932f-461e-435d-bdf9-a0e9136b08e0_800w.jpg"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5865c193-61b7-47c8-899a-c6fa35826688_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              VoxelStudio
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a3c9a9ca-5bde-46fb-b5fa-c3a22ee34a3f_800w.webp" style={{aspectRatio: '3/4'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a858baac-5596-4de9-8229-7a3c2cd9a05c_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              FluxCanvas
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item group overflow-hidden hover:border-white/20 transition-all duration-300 break-inside-avoid bg-white/5 border-white/10 border rounded-2xl mb-6 relative">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3c4f1dea-f838-465a-bfd2-8fbbf334a6bc_800w.webp" style={{aspectRatio: '2/3'}}/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/625569f6-2546-4071-9e1a-1a5d8f130ba3_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              ChromaMind
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/95221975-49b7-4db6-a8fe-15f9a78f1303_800w.webp"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99ffb7cb-ea18-479c-93b7-7dda9534f513_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              PulseCreate
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ed239d63-c20e-4e7d-b60a-fa07e64a867a_800w.jpg" style={{aspectRatio: '3/4'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc92b0c1-b36d-4071-a25e-0ff83ab8cc7a_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              ZenithLab
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/048e0a68-a97c-46dd-aed4-734f98009a4c_800w.webp" style={{aspectRatio: '2/3'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d577f83-6ff9-4ae7-b5cb-ccfd2ba39458_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              PixelForge
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5f268bed-1724-4f96-9a60-a6bf8a0406d6_800w.webp"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8b41f45-708f-4821-8903-b4825f2f3237_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              ArtisanAI
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0e6b5ac-24f8-446f-8b42-e4891f8f181f_800w.webp" style={{aspectRatio: '3/4'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e8252582-b1a9-4c58-a483-9b55d2a9eb29_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              VisionaryArt
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/25928c2a-a773-4535-906c-da729deae044_800w.webp" style={{aspectRatio: '2/3'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20" src="https://i.pravatar.cc/40?img=12"/>
<span className="text-xs font-poppins font-light tracking-normal">
              SynthWave
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d9b3fd8-338f-430e-86d7-21702b5f5d29_800w.webp"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9542191-4df3-4ba8-85c1-2b738ef7c3d2_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              LuminaArts
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6b2a6ec7-ff19-482c-9f75-2569234343b5_800w.jpg" style={{aspectRatio: '3/4'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20" src="https://i.pravatar.cc/40?img=14"/>
<span className="text-xs font-poppins font-light tracking-normal">
              DreamScape
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c4f47dd-cdd9-48fb-ac75-7df83023df8c_800w.jpg" style={{aspectRatio: '2/3'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4608706c-4ba5-47d2-aab2-e92a101cee39_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              EtherealArt
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2cd506d0-dd27-4384-a2f9-785ea63b5a91_800w.webp"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f74f270-3a34-48bf-af87-e0e7f4b87bb8_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              CosmicCanvas
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d4814233-7ad0-4e94-beb2-6f61b78cd196_800w.webp" style={{aspectRatio: '3/4'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b5cf61fd-d2fd-4bc9-995d-c404cfba9937_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              NovaStudio
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17355c23-5710-4c89-bd15-5b7ed9da596c_800w.webp" style={{aspectRatio: '2/3'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3aa0ef45-8616-4670-ad2b-4a676949289c_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              AuroraDesign
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/762ce684-abe6-4cba-8859-3d870a3b39e8_800w.webp"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20" src="https://i.pravatar.cc/40?img=19"/>
<span className="text-xs font-poppins font-light tracking-normal">
              SpectraLab
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 break-inside-avoid mb-6">
<img alt="" className="w-full group-hover:scale-110 transition-transform duration-700 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7dd59aaa-8029-485e-a5f1-82f2ba5cad29_800w.webp" style={{aspectRatio: '3/4'}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
</div>
<div className="absolute top-3 left-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img alt="" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7dd0000d-1655-4086-b7f0-f7de221f6d9f_320w.webp"/>
<span className="text-xs font-poppins font-light tracking-normal">
              InfinityArts
            </span>
</div>
<div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</div>
</div>
</div>
</section><footer className="border-t border-white/10 bg-[#0b0b16] mt-32">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/56b2752b-f067-4093-be83-e35cac41ab92_320w.webp)] bg-cover rounded-full" href="#"></a>
<p className="text-white/60 text-sm font-poppins font-light tracking-normal leading-relaxed">
          Transform your imagination into stunning AI-generated artwork. Create, explore, and share.
        </p>
<div className="flex space-x-4 pt-2">
<a className="text-white/60 hover:text-cyan-400 transition-colors duration-200" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/60 hover:text-cyan-400 transition-colors duration-200" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-white/60 hover:text-cyan-400 transition-colors duration-200" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-white/60 hover:text-cyan-400 transition-colors duration-200" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
</a>
</div>
</div>

<div className="">
<h3 className="font-medium text-white tracking-normal font-poppins mb-4">Product  <li className=""><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Features</a></li> <li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Pricing</a></li> <li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">API</a></li> <li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Changelog</a></li> <li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Roadmap</a></li></h3></div>

<div>
<h3 className="text-white font-poppins font-medium tracking-normal mb-4">Resources</h3>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Documentation</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Tutorials</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Blog</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Community</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Support</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-poppins font-medium tracking-normal mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">About</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Careers</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transitionsm font-poppins font-light tracking-normal" href="#">Press Kit</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Contact</a></li>
<li><a className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Partners</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<p className="text-white/40 text-sm font-poppins font-light tracking-normal">
        © 2024 Imaginova. All rights reserved.
      </p>
<div className="flex space-x-6">
<a className="text-white/40 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Privacy Policy</a>
<a className="text-white/40 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Terms of Service</a>
<a className="text-white/40 hover:text-cyan-400 transition-colors duration-200 text-sm font-poppins font-light tracking-normal" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
