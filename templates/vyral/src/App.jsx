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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Sora', 'sans-serif'],
hand: ['Caveat', 'cursive'],
},
colors: {
brand: {
sky: '#00E5FF',       // Primary
secondary: '#FF3D81', // Secondary
highlight: '#FFD400', // Highlight
accent: '#7CFF6B',    // Accent-2
dark: '#050507',      // Background
panel: '#0E1016',     // Panel
text: '#F2F4FF',      // Text
}
},
backgroundImage: {
'radial-glow': 'radial-gradient(circle at 70% 50%, rgba(0, 229, 255, 0.25) 0%, rgba(5, 5, 7, 0) 60%)',
},
animation: {
'beam': 'beam 3s linear infinite',
'spin-slow': 'spin 12s linear infinite',
'spin-slow-reverse': 'spin 15s linear infinite reverse',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
beam: {
'0%': { strokeDashoffset: '1000' },
'100%': { strokeDashoffset: '0' },
}
}
}
}
}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


          document.querySelectorAll('.spotlight-card').forEach(card => {
              card.addEventListener('mousemove', e => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
              });
          });
        


      // Simple fade-in animation on scroll using Intersection Observer
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      entry.target.classList.remove('opacity-0', 'translate-y-10');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          // Select elements to animate
          const animatedElements = document.querySelectorAll('[data-aos="fade-up"]');
          animatedElements.forEach(el => {
              el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
              observer.observe(el);
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
      


<div className="aura-background-component top-0 w-full h-screen -z-10 fixed brightness-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="qpSlPSWA2bdkUAYztz8z"></div>

</div>
</div>

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

<nav className="fixed -translate-x-1/2 flex shadow-black/50 transition-all duration-300 hover:border-brand-text/20 hover:shadow-brand-sky/10 bg-gradient-to-br from-brand-text/10 to-brand-text/0 w-full lg:w-fit max-w-[90vw] z-50 rounded-full ring-brand-text/10 ring-1 pt-1.5 pr-1.5 pb-1.5 pl-4 top-6 left-1/2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl items-center justify-between hover:shadow-brand-sky/30">

<div className="flex gap-2.5 items-center mr-8">
<div className="relative flex items-center justify-center">

<svg aria-hidden="true" className="w-[24px] h-[24px]" height="24" role="img" style={{color: '#00E5FF'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="vyralMark" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#00E5FF" stop-opacity="1"></stop>
<stop offset="60%" stop-color="#FF3D81" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#7CFF6B" stop-opacity="1"></stop>
</lineargradient>
</defs>
<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" fill="url(#vyralMark)" opacity="0.18"></path>
<path d="M6.2 7.2a1 1 0 0 1 1.414 0L12 11.586l4.386-4.386a1 1 0 1 1 1.414 1.414L13.414 13l4.386 4.386a1 1 0 0 1-1.414 1.414L12 14.414 7.614 18.8A1 1 0 1 1 6.2 17.386L10.586 13 6.2 8.614a1 1 0 0 1 0-1.414Z" fill="url(#vyralMark)"></path>
</svg>
</div>
<span className="font-sans font-semibold text-base tracking-tight text-brand-text">
          VYRAL
        </span>
</div>

<div className="hidden md:flex items-center gap-6 mr-8">
<a className="text-xs font-medium text-brand-text/50 hover:text-brand-text transition-colors" href="#">
          Playbook
        </a>
<a className="text-xs font-medium text-brand-text/50 hover:text-brand-text transition-colors" href="#">
          Proof
        </a>
<a className="text-xs font-medium text-brand-text/50 hover:text-brand-text transition-colors" href="#">
          Offers
        </a>
</div>

<button className="flex gap-2 hover:bg-brand-sky hover:text-brand-dark transition-colors group text-xs font-semibold text-black bg-brand-text rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center flex-none">
        See How It Works
        <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path>
</svg>
</button>
</nav>

<main className="container lg:px-12 lg:pt-0 min-h-[1100px] flex flex-col lg:flex-row z-10 mr-auto ml-auto pt-0 pr-6 pl-6 relative items-center">

<div className="lg:w-1/2 flex flex-col lg:py-0 lg:mt-0 w-full mt-16 pt-12 pb-20 justify-center">
<h4 className="text-xs font-mono tracking-[0.2em] text-brand-secondary/80 uppercase mb-8 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
</span>
          GROWTH SYSTEM ONLINE
        </h4>
<h1 className="lg:text-9xl leading-[0.8] text-brand-sky text-glow text-7xl font-bold mb-6 font-hand">
          Best product.
          <br/>
<span className="text-brand-text opacity-90">
            Zero attention.
            <span className="text-brand-secondary">Fixed.</span>
</span>
</h1>
<p className="font-sans text-xl lg:text-2xl font-light text-brand-text/70 leading-relaxed tracking-tight max-w-xl mb-12">
          We turn your product into a message people repeat—then we ship content
          and distribution every week until the market can’t ignore you.
        </p>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-brand-text/50 tracking-wide mb-10">
<div className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-brand-sky/70"></span>
<span>Positioning &amp; hooks</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-brand-secondary/70"></span>
<span>Weekly content pipeline</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-brand-accent/70"></span>
<span>Distribution + repurposing</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-6 gap-x-6 gap-y-6 items-start sm:items-center mb-12">

<button className="shiny-cta focus:outline-none">
<span>Get a Growth Audit</span>
</button>

<button className="hover:bg-brand-text/10 hover:text-brand-text transition-all flex text-sm font-medium text-slate-300 bg-brand-text/5 rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center group" style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))', '--border-radius-before': '9999px'}}>
<span className="text-sm font-medium tracking-tight">
              See the Playbook
            </span>
<svg className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="lg:w-1/2 lg:h-[800px] flex w-full h-[500px] relative perspective-1000 items-center justify-center">
<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewbox="0 0 600 600">
<defs></defs>


<g>
<path className="opacity-[0.08]" d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1"></path>
<path className="beam-line animate-beam opacity-60" d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="#00E5FF" strokeWidth="1.5"></path>
</g>

<g>
<path className="opacity-[0.08]" d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1"></path>
<path className="beam-line animate-beam opacity-60" d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="#FF3D81" strokeWidth="1.5" style={{animationDelay: '-1s'}}></path>
</g>

<g>
<path className="opacity-[0.08]" d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1"></path>
<path className="beam-line animate-beam opacity-60" d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="#00E5FF" strokeWidth="1.5" style={{animationDelay: '-2s'}}></path>
</g>

<g>
<path className="opacity-[0.08]" d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1"></path>
<path className="beam-line animate-beam opacity-60" d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="#00E5FF" strokeWidth="1.5" style={{animationDelay: '-1.5s'}}></path>
</g>

<g transform="translate(300, 300)">

<circle className="animate-pulse" fill="url(#center-glow)" r="120"></circle>

<circle className="animate-sonar" fill="none" opacity="0.5" r="20" stroke="#00E5FF" strokeWidth="1"></circle>
<circle className="animate-sonar delay-1000" fill="none" opacity="0.5" r="20" stroke="#00E5FF" strokeWidth="1"></circle>
<circle className="animate-sonar delay-2000" fill="none" opacity="0.5" r="20" stroke="#00E5FF" strokeWidth="1"></circle>


<circle className="animate-spin-slow" fill="none" r="65" stroke="white" stroke-dasharray="10 20" stroke-opacity="0.1" strokeWidth="1"></circle>

<circle className="animate-spin-slow-reverse" fill="none" r="45" stroke="#00E5FF" stroke-dasharray="4 6" stroke-opacity="0.2" strokeWidth="1"></circle>

<g className="animate-spin-slow" style={{animationDuration: '20s'}}>
<path d="M -80 0 L -70 0" stroke="white" stroke-opacity="0.2"></path>
<path d="M 80 0 L 70 0" stroke="white" stroke-opacity="0.2"></path>
<path d="M 0 -80 L 0 -70" stroke="white" stroke-opacity="0.2"></path>
<path d="M 0 80 L 0 70" stroke="white" stroke-opacity="0.2"></path>
</g>

<circle fill="#0E1016" r="8" stroke="#00E5FF" strokeWidth="2"></circle>
<circle className="animate-pulse-fast" fill="#00E5FF" r="4"></circle>
</g>
</svg>

<div className="absolute top-[20%] lg:top-[25%] left-[10%] lg:left-[15%] flex flex-col items-end">
<span className="text-3xl font-hand text-brand-sky mb-2 opacity-90 font-bold">
            HOOK TESTED
          </span>
<div className="h-[1px] w-12 bg-gradient-to-l from-brand-sky to-transparent"></div>
</div>
<div className="absolute bottom-[20%] lg:bottom-[25%] right-[10%] lg:right-[15%] flex flex-col items-start">
<span className="text-3xl font-hand text-brand-secondary mb-2 opacity-90 font-bold">
            ALGO-NATIVE
          </span>
<div className="h-[1px] w-12 bg-gradient-to-r from-brand-secondary to-transparent"></div>
</div>

<div className="absolute top-[50%] right-[15%] hidden lg:flex flex-col gap-1">
<div className="flex gap-1">
<div className="w-1 h-1 bg-white/20"></div>
<div className="w-1 h-1 bg-white/20"></div>
<div className="w-1 h-1 bg-brand-highlight animate-pulse"></div>
</div>
</div>
</div>
<section className="w-[95%] z-20 pb-8 absolute bottom-0">
<div className="flex flex-col lg:flex-row overflow-hidden opacity-50 w-full pt-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="w-full flex items-center justify-center">
<div className="text-xs font-mono tracking-widest text-brand-text/50 text-center mb-4">
              Used by teams who ship weekly.
            </div>
</div>
<style>
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
            .mask-gradient-fade {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          </style>

<div className="flex-1 overflow-hidden mask-gradient-fade w-full relative">
<div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-x-32 gap-y-16 items-center">

<svg aria-hidden="true" className="w-[124px] h-[28px] monotone-logo" data-icon="logos:vercel" data-icon-replaced="true" data-icon-set="logos" data-logos="airbrake" height="28" role="img" strokeWidth="2" style={{color: 'rgb(242, 244, 255)', width: '124px', height: '28px'}} viewbox="0 0 512 90" width="124" xmlns="http://www.w3.org/2000/svg">
<g fill="#F2F4FF">
<path d="m33.83 8.897l6.176 18.062l-10.965 31.634a78.3 78.3 0 0 0 13.112 1.02a83 83 0 0 0 9.038-.475l3.768 11.744c-4.066.411-8.5.709-12.75.709a122 122 0 0 1-16.88-1.219l-6.254 18.332H0L29.835 8.897z" fillOpacity=".6"></path>
<path d="M481.258 26.959c19.21 0 30.742 8.96 30.742 31.57c0 2.833-.078 5.907-.15 6.311h-44.227c-.078 9.102 7.664 13.076 19.741 13.076c8.132 0 14.613-1.898 18.983-3.188l.708 11.815c-3.62 1.353-11.453 3.322-22.149 3.322c-21.2.029-35.671-7.777-35.671-31.407c0-15.271 6.028-25.457 18.232-29.537v24.791h26.527c.07-11-4.144-15.753-13.26-15.753c-4.25 0-7.388 1.02-9.57 3.195V27.908a50.7 50.7 0 0 1 10.094-.95M201.561 2.309v56.22c0 12.042 2.487 19.415 13.26 19.415s14.089-7.402 14.089-19.415s-3.315-19.422-14.089-19.422c-4.519 0-7.536 1.289-9.57 3.669v-11.95c3.464-2.174 8.14-3.598 14.543-3.598c16.277 0 26.895 9.3 26.895 31.23c0 21.958-10.625 31.167-27.044 31.167c-10.172 0-16.05-3.542-19.366-8.082l-.828 7.132h-15.442V13.99h-7.841V2.31zm131.161 25.11c10.32 0 16.2 3.599 19.437 8.146l.906-7.473h15.371l.021 60.583h-17.56V58.53c0-12.042-2.485-19.422-13.259-19.422s-14.089 7.402-14.089 19.422s3.315 19.387 14.089 19.387c4.526 0 7.537-1.29 9.57-3.662V86.07c-3.464 2.167-8.21 3.541-14.542 3.541c-16.42 0-26.917-9.165-26.917-31.095s10.476-31.096 26.973-31.096M55.306 8.897l29.835 79.778H65.173l-27.2-79.778zm57.318 19.21V76.98h7.083v11.694H95.093V39.801h-7.834V28.106zm57.247-1.084a24.4 24.4 0 0 1 5.015.474l-.227 13.855c-1.417-.142-3.315-.276-4.958-.276c-5.2 0-8.89 1.225-11.454 3.124c-5.669 4.193-5.871 11.983-5.879 16.243v28.232H134.88V39.801h-7.842V28.106h23.283l1.133 9.712c3.167-6.177 9.039-10.795 18.417-10.795m127.003 0a24.4 24.4 0 0 1 5.05.474l-.227 13.855c-1.416-.142-3.314-.276-4.958-.276c-5.199 0-8.89 1.225-11.453 3.124c-5.663 4.193-5.865 11.983-5.872 16.243v28.232h-17.496V39.801h-7.841V28.106h23.282l1.134 9.712c3.166-6.177 9.038-10.795 18.38-10.795M402.59 2.309v86.366h-17.55V13.99h-7.834V2.31zm42.288 25.77l-21.491 28.275l24.19 32.321h-20.57l-23.134-32.009l21.171-28.588zM103.076 0c5.425 0 9.42 3.542 9.42 8.422s-3.995 8.415-9.42 8.415c-5.426 0-9.414-3.528-9.414-8.415h-.021C93.662 3.542 97.65 0 103.076 0"></path>
</g></svg><svg aria-hidden="true" className="w-[124px] h-[28px]" data-icon="logos:vercel" data-icon-replaced="true" data-icon-set="logos" data-logos="amplitude" height="28" role="img" strokeWidth="2" style={{color: 'rgb(242, 244, 255)', width: '124px', height: '28px'}} viewbox="0 0 512 107" width="124" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M53.346 0c29.459 0 53.347 23.888 53.347 53.346c0 29.459-23.888 53.347-53.347 53.347C23.888 106.693 0 82.826 0 53.346S23.888 0 53.346 0M276.31 38.135c10.54-.021 18.982 8.677 18.982 19.925c0 11.098-8.463 19.86-18.982 19.86c-4.306 0-7.906-1.114-10.862-3.02v20.652H254.35V38.928h11.098v2.228c2.956-1.907 6.534-3.02 10.862-3.02M46.298 16.304c-6.577.021-12.533 10.605-17.654 31.43c-3.258-.04-6.274-.095-9.11-.137l-.938-.014h-.471c-.386-.021-.771 0-1.157.043a3.7 3.7 0 0 0-3.02 3.642a3.73 3.73 0 0 0 2.958 3.63l.19.034l.043.043h9.834a240 240 0 0 0-2.123 10.76l-.255 1.494l-.3 1.736v.085c0 .836.429 1.607 1.136 2.057a2.457 2.457 0 0 0 3.29-.612l.095-.138l.064.065l4.82-15.447h23.224c1.778 6.727 3.621 13.647 6.063 20.16c1.284 3.43 4.243 11.35 9.182 11.666l.266.01h.065c6.142 0 9.372-7.737 11.461-15.147l.184-.663c.514-1.873.957-3.71 1.36-5.378c.412-1.67.752-3.123 1.086-4.245l.092-.297l.15-.472l.035-.125a1.21 1.21 0 0 0-.785-1.396c-.58-.2-1.235.067-1.494.626l-.049.124l-.171.471c-.581 1.631-1.13 3.164-1.63 4.57l-.213.594l-.043.128c-3.372 9.507-4.92 13.932-7.887 14.072l-.147.004h-.192c-3.921 0-7.585-15.897-8.977-21.874c-.197-.857-.378-1.67-.557-2.4l-.107-.428h25.28c.375 0 .75-.075 1.1-.223l.207-.099l.028-.021l.037-.022l.042-.021l.129-.086l.064-.043q.065-.04.129-.092l.064-.057l.166-.143c.426-.398.729-.933.862-1.486c.31-1.465-.613-2.91-2.04-3.282l-.166-.038h-.129c-.1-.015-.19-.03-.284-.037l-.144-.006l-.386-.043c-8.247-.593-16.713-.858-24.757-1.03l-2.002-.041l-.021-.065q-.502-1.892-1.024-3.777l-.263-.94l-.132-.47l-.267-.935l-.257-.89c-3.841-13.175-8.538-24.824-14.554-24.824M492.93 37.707c10.926 0 19.067 7.734 19.067 19.539c0 1.22-.064 2.42-.257 3.62h-28.15c.878 4.478 3.835 7.97 9.898 7.97c3.106 0 5.27-.964 6.47-2.87h11.569c-2.078 7.348-9.255 12.361-18.275 12.361c-12.298 0-20.589-8.848-20.589-20.267c0-11.805 8.227-20.353 20.268-20.353M360.57 25.259v13.647h13.798v9.341H360.57V61.81c0 4.306 2.636 6.299 6.706 6.299c2.078 0 4.306-.472 6.47-1.029l1.414 9.491c-4.627 1.436-6.705 1.757-10.283 1.757c-9.256 0-15.319-6.534-15.319-16.432V48.247h-8.055v-9.34h8.055V25.258zM392 38.906v20.032c0 6.063 3.042 9.341 8.227 9.341c2.785 0 5.827-1.671 8.377-4.777V38.928H419.7l-.021 38.2h-11.098v-2.722c-3.106 2.464-6.62 3.9-10.926 3.9c-10.048 0-16.754-7.263-16.754-18.34v-21.06zm74.75-18.424v56.645h-11.1V74.9c-2.956 1.907-6.534 3.021-10.84 3.021c-10.541 0-19.068-8.698-19.068-19.946c0-11.098 8.527-19.86 19.068-19.86c4.306 0 7.905 1.114 10.84 3.02V20.483zM334.86 38.928v38.22h-11.097v-38.22zM154.02 22.58l23.288 54.568h-12.212l-4.22-10.455H136.3l-4.22 10.455h-12.276l23.373-54.568zm75.885 15.147c9.32 0 16.646 7.263 16.646 18.425v20.974h-11.097v-20.03c0-6.063-2.957-9.341-8.142-9.341c-2.313 0-4.863 1.05-7.177 4.22c.193 1.371.3 2.764.322 4.157v20.974H209.38V57.074c0-6.063-2.956-9.34-8.205-9.34c-2.164 0-4.542 1.285-6.792 4.306v25.045h-11.097V38.928h11.097v2.314c2.4-2.228 4.95-3.514 9.427-3.514c4.863 0 9.17 1.907 12.212 5.42c4.07-3.749 7.905-5.42 13.883-5.42m82.719-17.246v56.645h-11.098V20.482zm134.009 27.037c-5.828 0-9.898 4.863-9.898 10.455c0 5.656 4.07 10.605 9.898 10.605c3.278.022 6.556-1.093 9.02-4.456V51.91c-2.464-3.278-5.742-4.392-9.02-4.392m-172.166-.064c-3.278 0-6.534 1.114-9.02 4.477v12.212c2.486 3.278 5.742 4.392 9.02 4.392c5.763-.021 9.898-4.885 9.898-10.476c0-5.656-4.156-10.605-9.898-10.605M148.513 36.357l-7.97 19.86h16.111zm344.48 10.54c-5.334 0-8.29 3.107-9.34 7.414h17.31c-.642-4.778-3.513-7.413-7.97-7.413M46.02 23.396c.365 0 .707.215 1.007.6c.729 1.157 2.014 3.75 3.92 9.491c1.308 3.942 2.722 8.848 4.221 14.547c-4.749-.071-9.527-.128-14.212-.182l-2.798-.032l-2.828-.021c3.192-12.47 7.07-21.917 9.92-24.146c.235-.15.492-.257.77-.257m283.272-4.499c3.664 0 6.62 2.785 6.62 6.535c0 3.663-2.956 6.384-6.62 6.384c-3.75 0-6.706-2.7-6.706-6.384c0-3.75 2.957-6.535 6.706-6.535" fill="#F2F4FF"></path>
</svg>
<svg aria-hidden="true" className="w-[96px] h-[30px]" data-icon="logos:airbnb" data-icon-replaced="true" data-icon-set="logos" data-logos="anthropic" height="30" role="img" strokeWidth="2" style={{color: 'rgb(242, 244, 255)', width: '96px', height: '30px'}} viewbox="0 0 512 58" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M499.297 37.878c-2.064 5.4-6.192 8.497-11.829 8.497c-9.368 0-15.084-6.67-15.084-17.55c0-11.037 5.716-17.708 15.084-17.708c5.637 0 9.765 3.097 11.83 8.497h12.623C508.824 7.703 499.536 0 487.468 0c-16.037 0-27.39 11.911-27.39 28.825c0 16.755 11.353 28.667 27.39 28.667c12.147 0 21.436-7.782 24.532-19.614zM423.39.97l22.163 55.588h12.153L435.544.97zm-25.634 24.697h-14.695V11.69h14.695c5.878 0 8.976 2.382 8.976 6.988s-3.098 6.988-8.976 6.988M398.312.97h-27.167v55.588h11.916v-20.17h15.251c12.63 0 20.336-6.671 20.336-17.71c0-11.037-7.705-17.708-20.336-17.708m-65.535 45.405c-9.367 0-15.083-6.67-15.083-17.55c0-11.037 5.716-17.708 15.083-17.708c9.288 0 14.924 6.67 14.924 17.708c0 10.88-5.636 17.55-14.924 17.55m0-46.375c-16.036 0-27.388 11.911-27.388 28.825c0 16.755 11.352 28.667 27.388 28.667c15.956 0 27.23-11.912 27.23-28.667C360.006 11.911 348.732 0 332.776 0m-72.068 11.69h14.691c5.877 0 8.974 2.145 8.974 6.195s-3.097 6.194-8.974 6.194h-14.691zm35.577 6.195c0-10.483-7.703-16.915-20.33-16.915h-27.16v55.588h11.913V34.799h13.261l11.913 21.759h13.183l-13.19-23.416c6.62-2.545 10.41-7.905 10.41-15.257m-74.095 5.241h-26.2V.97h-11.909v55.588h11.91V33.846h26.2v22.712h11.908V.97H222.19zM125.296 11.69h18.659v44.868h11.91V11.69h18.658V.97h-49.227zm-21.034 28.191L79.253.971H65.756v55.587h11.512V17.646l25.01 38.912h13.496V.97h-11.512zM20.93 34.56l7.582-19.534l7.583 19.535zM22.158.97L0 56.558h12.39l4.532-11.674h23.182l4.53 11.674h12.39L34.867.97z" fill="#F2F4FF"></path>
</svg>

<svg aria-hidden="true" className="w-[124px] h-[28px]" data-icon="logos:vercel" data-icon-replaced="true" data-icon-set="logos" data-logos="airbrake" height="28" role="img" strokeWidth="2" style={{color: 'rgb(242, 244, 255)', width: '124px', height: '28px'}} viewbox="0 0 512 90" width="124" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="#F2F4FF">
<path d="m33.83 8.897l6.176 18.062l-10.965 31.634a78.3 78.3 0 0 0 13.112 1.02a83 83 0 0 0 9.038-.475l3.768 11.744c-4.066.411-8.5.709-12.75.709a122 122 0 0 1-16.88-1.219l-6.254 18.332H0L29.835 8.897z" fillOpacity=".6"></path>
<path className="" d="M481.258 26.959c19.21 0 30.742 8.96 30.742 31.57c0 2.833-.078 5.907-.15 6.311h-44.227c-.078 9.102 7.664 13.076 19.741 13.076c8.132 0 14.613-1.898 18.983-3.188l.708 11.815c-3.62 1.353-11.453 3.322-22.149 3.322c-21.2.029-35.671-7.777-35.671-31.407c0-15.271 6.028-25.457 18.232-29.537v24.791h26.527c.07-11-4.144-15.753-13.26-15.753c-4.25 0-7.388 1.02-9.57 3.195V27.908a50.7 50.7 0 0 1 10.094-.95M201.561 2.309v56.22c0 12.042 2.487 19.415 13.26 19.415s14.089-7.402 14.089-19.415s-3.315-19.422-14.089-19.422c-4.519 0-7.536 1.289-9.57 3.669v-11.95c3.464-2.174 8.14-3.598 14.543-3.598c16.277 0 26.895 9.3 26.895 31.23c0 21.958-10.625 31.167-27.044 31.167c-10.172 0-16.05-3.542-19.366-8.082l-.828 7.132h-15.442V13.99h-7.841V2.31zm131.161 25.11c10.32 0 16.2 3.599 19.437 8.146l.906-7.473h15.371l.021 60.583h-17.56V58.53c0-12.042-2.485-19.422-13.259-19.422s-14.089 7.402-14.089 19.422s3.315 19.387 14.089 19.387c4.526 0 7.537-1.29 9.57-3.662V86.07c-3.464 2.167-8.21 3.541-14.542 3.541c-16.42 0-26.917-9.165-26.917-31.095s10.476-31.096 26.973-31.096M55.306 8.897l29.835 79.778H65.173l-27.2-79.778zm57.318 19.21V76.98h7.083v11.694H95.093V39.801h-7.834V28.106zm57.247-1.084a24.4 24.4 0 0 1 5.015.474l-.227 13.855c-1.417-.142-3.315-.276-4.958-.276c-5.2 0-8.89 1.225-11.454 3.124c-5.669 4.193-5.871 11.983-5.879 16.243v28.232H134.88V39.801h-7.842V28.106h23.283l1.133 9.712c3.167-6.177 9.039-10.795 18.417-10.795m127.003 0a24.4 24.4 0 0 1 5.05.474l-.227 13.855c-1.416-.142-3.314-.276-4.958-.276c-5.199 0-8.89 1.225-11.453 3.124c-5.663 4.193-5.865 11.983-5.872 16.243v28.232h-17.496V39.801h-7.841V28.106h23.282l1.134 9.712c3.166-6.177 9.038-10.795 18.38-10.795M402.59 2.309v86.366h-17.55V13.99h-7.834V2.31zm42.288 25.77l-21.491 28.275l24.19 32.321h-20.57l-23.134-32.009l21.171-28.588zM103.076 0c5.425 0 9.42 3.542 9.42 8.422s-3.995 8.415-9.42 8.415c-5.426 0-9.414-3.528-9.414-8.415h-.021C93.662 3.542 97.65 0 103.076 0"></path>
</g></svg><svg aria-hidden="true" className="w-[124px] h-[28px]" data-icon="logos:vercel" data-icon-replaced="true" data-icon-set="logos" data-logos="amplitude" height="28" role="img" strokeWidth="2" style={{color: 'rgb(242, 244, 255)', width: '124px', height: '28px'}} viewbox="0 0 512 107" width="124" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M53.346 0c29.459 0 53.347 23.888 53.347 53.346c0 29.459-23.888 53.347-53.347 53.347C23.888 106.693 0 82.826 0 53.346S23.888 0 53.346 0M276.31 38.135c10.54-.021 18.982 8.677 18.982 19.925c0 11.098-8.463 19.86-18.982 19.86c-4.306 0-7.906-1.114-10.862-3.02v20.652H254.35V38.928h11.098v2.228c2.956-1.907 6.534-3.02 10.862-3.02M46.298 16.304c-6.577.021-12.533 10.605-17.654 31.43c-3.258-.04-6.274-.095-9.11-.137l-.938-.014h-.471c-.386-.021-.771 0-1.157.043a3.7 3.7 0 0 0-3.02 3.642a3.73 3.73 0 0 0 2.958 3.63l.19.034l.043.043h9.834a240 240 0 0 0-2.123 10.76l-.255 1.494l-.3 1.736v.085c0 .836.429 1.607 1.136 2.057a2.457 2.457 0 0 0 3.29-.612l.095-.138l.064.065l4.82-15.447h23.224c1.778 6.727 3.621 13.647 6.063 20.16c1.284 3.43 4.243 11.35 9.182 11.666l.266.01h.065c6.142 0 9.372-7.737 11.461-15.147l.184-.663c.514-1.873.957-3.71 1.36-5.378c.412-1.67.752-3.123 1.086-4.245l.092-.297l.15-.472l.035-.125a1.21 1.21 0 0 0-.785-1.396c-.58-.2-1.235.067-1.494.626l-.049.124l-.171.471c-.581 1.631-1.13 3.164-1.63 4.57l-.213.594l-.043.128c-3.372 9.507-4.92 13.932-7.887 14.072l-.147.004h-.192c-3.921 0-7.585-15.897-8.977-21.874c-.197-.857-.378-1.67-.557-2.4l-.107-.428h25.28c.375 0 .75-.075 1.1-.223l.207-.099l.028-.021l.037-.022l.042-.021l.129-.086l.064-.043q.065-.04.129-.092l.064-.057l.166-.143c.426-.398.729-.933.862-1.486c.31-1.465-.613-2.91-2.04-3.282l-.166-.038h-.129c-.1-.015-.19-.03-.284-.037l-.144-.006l-.386-.043c-8.247-.593-16.713-.858-24.757-1.03l-2.002-.041l-.021-.065q-.502-1.892-1.024-3.777l-.263-.94l-.132-.47l-.267-.935l-.257-.89c-3.841-13.175-8.538-24.824-14.554-24.824M492.93 37.707c10.926 0 19.067 7.734 19.067 19.539c0 1.22-.064 2.42-.257 3.62h-28.15c.878 4.478 3.835 7.97 9.898 7.97c3.106 0 5.27-.964 6.47-2.87h11.569c-2.078 7.348-9.255 12.361-18.275 12.361c-12.298 0-20.589-8.848-20.589-20.267c0-11.805 8.227-20.353 20.268-20.353M360.57 25.259v13.647h13.798v9.341H360.57V61.81c0 4.306 2.636 6.299 6.706 6.299c2.078 0 4.306-.472 6.47-1.029l1.414 9.491c-4.627 1.436-6.705 1.757-10.283 1.757c-9.256 0-15.319-6.534-15.319-16.432V48.247h-8.055v-9.34h8.055V25.258zM392 38.906v20.032c0 6.063 3.042 9.341 8.227 9.341c2.785 0 5.827-1.671 8.377-4.777V38.928H419.7l-.021 38.2h-11.098v-2.722c-3.106 2.464-6.62 3.9-10.926 3.9c-10.048 0-16.754-7.263-16.754-18.34v-21.06zm74.75-18.424v56.645h-11.1V74.9c-2.956 1.907-6.534 3.021-10.84 3.021c-10.541 0-19.068-8.698-19.068-19.946c0-11.098 8.527-19.86 19.068-19.86c4.306 0 7.905 1.114 10.84 3.02V20.483zM334.86 38.928v38.22h-11.097v-38.22zM154.02 22.58l23.288 54.568h-12.212l-4.22-10.455H136.3l-4.22 10.455h-12.276l23.373-54.568zm75.885 15.147c9.32 0 16.646 7.263 16.646 18.425v20.974h-11.097v-20.03c0-6.063-2.957-9.341-8.142-9.341c-2.313 0-4.863 1.05-7.177 4.22c.193 1.371.3 2.764.322 4.157v20.974H209.38V57.074c0-6.063-2.956-9.34-8.205-9.34c-2.164 0-4.542 1.285-6.792 4.306v25.045h-11.097V38.928h11.097v2.314c2.4-2.228 4.95-3.514 9.427-3.514c4.863 0 9.17 1.907 12.212 5.42c4.07-3.749 7.905-5.42 13.883-5.42m82.719-17.246v56.645h-11.098V20.482zm134.009 27.037c-5.828 0-9.898 4.863-9.898 10.455c0 5.656 4.07 10.605 9.898 10.605c3.278.022 6.556-1.093 9.02-4.456V51.91c-2.464-3.278-5.742-4.392-9.02-4.392m-172.166-.064c-3.278 0-6.534 1.114-9.02 4.477v12.212c2.486 3.278 5.742 4.392 9.02 4.392c5.763-.021 9.898-4.885 9.898-10.476c0-5.656-4.156-10.605-9.898-10.605M148.513 36.357l-7.97 19.86h16.111zm344.48 10.54c-5.334 0-8.29 3.107-9.34 7.414h17.31c-.642-4.778-3.513-7.413-7.97-7.413M46.02 23.396c.365 0 .707.215 1.007.6c.729 1.157 2.014 3.75 3.92 9.491c1.308 3.942 2.722 8.848 4.221 14.547c-4.749-.071-9.527-.128-14.212-.182l-2.798-.032l-2.828-.021c3.192-12.47 7.07-21.917 9.92-24.146c.235-.15.492-.257.77-.257m283.272-4.499c3.664 0 6.62 2.785 6.62 6.535c0 3.663-2.956 6.384-6.62 6.384c-3.75 0-6.706-2.7-6.706-6.384c0-3.75 2.957-6.535 6.706-6.535" fill="#F2F4FF"></path>
</svg>
<svg aria-hidden="true" className="w-[96px] h-[30px]" data-icon="logos:airbnb" data-icon-replaced="true" data-icon-set="logos" data-logos="anthropic" height="30" role="img" strokeWidth="2" style={{color: 'rgb(242, 244, 255)', width: '96px', height: '30px'}} viewbox="0 0 512 58" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M499.297 37.878c-2.064 5.4-6.192 8.497-11.829 8.497c-9.368 0-15.084-6.67-15.084-17.55c0-11.037 5.716-17.708 15.084-17.708c5.637 0 9.765 3.097 11.83 8.497h12.623C508.824 7.703 499.536 0 487.468 0c-16.037 0-27.39 11.911-27.39 28.825c0 16.755 11.353 28.667 27.39 28.667c12.147 0 21.436-7.782 24.532-19.614zM423.39.97l22.163 55.588h12.153L435.544.97zm-25.634 24.697h-14.695V11.69h14.695c5.878 0 8.976 2.382 8.976 6.988s-3.098 6.988-8.976 6.988M398.312.97h-27.167v55.588h11.916v-20.17h15.251c12.63 0 20.336-6.671 20.336-17.71c0-11.037-7.705-17.708-20.336-17.708m-65.535 45.405c-9.367 0-15.083-6.67-15.083-17.55c0-11.037 5.716-17.708 15.083-17.708c9.288 0 14.924 6.67 14.924 17.708c0 10.88-5.636 17.55-14.924 17.55m0-46.375c-16.036 0-27.388 11.911-27.388 28.825c0 16.755 11.352 28.667 27.388 28.667c15.956 0 27.23-11.912 27.23-28.667C360.006 11.911 348.732 0 332.776 0m-72.068 11.69h14.691c5.877 0 8.974 2.145 8.974 6.195s-3.097 6.194-8.974 6.194h-14.691zm35.577 6.195c0-10.483-7.703-16.915-20.33-16.915h-27.16v55.588h11.913V34.799h13.261l11.913 21.759h13.183l-13.19-23.416c6.62-2.545 10.41-7.905 10.41-15.257m-74.095 5.241h-26.2V.97h-11.909v55.588h11.91V33.846h26.2v22.712h11.908V.97H222.19zM125.296 11.69h18.659v44.868h11.91V11.69h18.658V.97h-49.227zm-21.034 28.191L79.253.971H65.756v55.587h11.512V17.646l25.01 38.912h13.496V.97h-11.512zM20.93 34.56l7.582-19.534l7.583 19.535zM22.158.97L0 56.558h12.39l4.532-11.674h23.182l4.53 11.674h12.39L34.867.97z" fill="#F2F4FF"></path>
</svg>
</div>
</div>

<div className="flex items-center gap-3 text-brand-text/30 text-xs font-mono shrink-0 relative z-10 bg-brand-dark pl-4 lg:bg-transparent lg:pl-0">
<span className="text-brand-text tracking-wide">
              [
              <span className="text-brand-accent">✓</span>
              ] TRUSTED BY INDUSTRY LEADERS
            </span>
</div>
</div>
</section>
</main>

<section aria-labelledby="capabilities-title" className="flex flex-col overflow-hidden lg:px-12 z-10 bg-black/50 w-full border-brand-text/5 border-t pt-32 pr-6 pb-32 pl-6 relative backdrop-blur-3xl items-center">

<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-text/10 to-transparent"></div>

<div className="flex flex-col items-center text-center max-w-3xl mb-24 relative z-10 transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up">

<div className="absolute -top-32 left-1/2 -translate-x-1/2 h-48 w-6 overflow-hidden flex justify-center">
<svg className="h-full w-full" fill="none" viewbox="0 0 6 192">
<path className="beam-line animate-beam opacity-70" d="M3 0V192" stroke="url(#header-beam)" strokeLinecap="round" strokeWidth="1.5"></path>
<defs></defs>
</svg>
</div>
<div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-brand-text/10 bg-brand-text/5 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sky"></span>
</span>
<span className="text-xs font-mono text-brand-sky uppercase tracking-[0.2em] font-medium">
            System Capabilities
          </span>
</div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight text-brand-text mb-8" id="capabilities-title">
          Growth intelligence,
          <br className="hidden md:block"/>
          built to compound.
        </h2>
<p className="text-xl text-brand-text/60 leading-relaxed max-w-2xl font-light tracking-tight">
          We don’t post randomly. We analyze your product, your market, and what
          already works—then turn that into a repeatable content and
          distribution system that compounds attention over time.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 w-full max-w-7xl relative gap-x-6 gap-y-6">



<div className="spotlight-card group relative flex flex-col p-10 rounded-[32px] border border-brand-text/10 bg-brand-panel overflow-hidden transition-all duration-500 duration-1000 opacity-0 translate-y-10" data-aos="fade-up" data-aos-delay="100">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(242, 244, 255, 0.06), transparent 40%)'}}></div>

<div className="pointer-events-none absolute inset-0 rounded-[32px] border border-brand-sky/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)', WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-brand-text/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-text mb-4 relative z-10">
            Positioning &amp; Message Clarity
          </h3>
<p className="text-base text-brand-text/50 leading-relaxed mb-12 relative z-10 font-light">
            We distill your product into a message people instantly
            understand—and want to repeat.
          </p>

<div className="relative z-10 mt-auto w-full h-72 rounded-2xl border border-brand-text/10 bg-[#0A0A0A] overflow-hidden flex flex-col shadow-2xl">

<div className="px-5 py-4 border-b border-brand-text/5 flex items-center justify-between bg-brand-text/5">
<div className="flex items-center gap-2 opacity-80">
<div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
<div className="w-2 h-2 rounded-full bg-brand-highlight"></div>
<div className="w-2 h-2 rounded-full bg-brand-accent"></div>
</div>
<span className="text-xs text-brand-text/30 font-mono">
                VYRAL_SYSTEM v2.1
              </span>
</div>

<div className="p-6 flex flex-col gap-5 relative h-full">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>

<div className="self-end max-w-[90%] bg-brand-text/10 backdrop-blur-sm rounded-2xl rounded-tr-sm p-4 border border-brand-text/5 animate-[fadeIn_1s_ease-out]">
<p className="text-xs text-brand-text/90 font-light leading-relaxed">
                  Clarify the message for
                  <span className="text-brand-text font-medium">Product Alpha</span>
                  . Prioritize
                  <span className="text-brand-sky">3 repeatable hooks</span>
                  for weekly output.
                </p>
</div>

<div className="self-start max-w-[90%] bg-brand-text/[0.03] backdrop-blur-md rounded-2xl rounded-tl-sm p-5 border border-brand-text/10 relative overflow-hidden group-hover:border-brand-sky/20 transition-colors duration-500">
<div className="flex items-center gap-2 mb-3 text-brand-sky font-mono text-[10px] uppercase tracking-wider">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                  CLARITY
                </div>
<p className="mb-4 text-xs text-brand-text/80 font-light">
                  Extracting the core promise, proof, and differentiator.
                  Turning it into hooks your market actually repeats.
                </p>

<div className="w-full bg-black/40 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-brand-sky h-full w-[85%] animate-[pulse_2s_infinite]"></div>
</div>
<div className="flex justify-between text-[10px] text-brand-sky/60 font-mono">
<span>GENERATING HOOKS</span>
<span>8/10 READY</span>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card relative flex flex-col p-[1px] rounded-[32px] overflow-hidden lg:-mt-8 lg:mb-8 z-20 group transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up" data-aos-delay="200">
<div className="absolute inset-0 bg-gradient-to-b from-brand-text/10 via-transparent to-transparent rounded-[32px]"></div>
<div className="absolute inset-0 bg-brand-panel rounded-[31px] m-[1px] overflow-hidden">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(242, 244, 255, 0.06), transparent 40%)'}}></div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-[32px] border border-brand-sky/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50" style={{maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)', WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)'}}></div>
<div className="relative z-10 flex flex-col h-full p-10 group">
<div className="flex items-center gap-3 mb-4">
<div className="relative">
<div className="absolute inset-0 bg-brand-sky/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="lucide lucide-zap text-brand-sky relative z-10" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-text group-hover:text-brand-text transition-colors">
                Content Intelligence
              </h3>
</div>
<p className="text-base text-brand-text/50 leading-relaxed mb-12 font-light group-hover:text-brand-text/70 transition-colors">
              Hooks, formats, and angles tested against real platform
              behavior—not opinions.
            </p>

<div className="mt-auto relative w-full h-80 flex items-center justify-center perspective-1000">

<svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 320">
<defs></defs>

<path d="M420,40 C320,40 280,160 200,160" fill="none" stroke="rgba(242,244,255,0.03)" strokeWidth="1"></path>
<path className="animate-[beam_3s_linear_infinite]" d="M420,40 C320,40 280,160 200,160" fill="none" stroke="url(#smart-beam-grad)" stroke-dasharray="100 1000" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M-20,280 C80,280 120,160 200,160" fill="none" stroke="rgba(242,244,255,0.03)" strokeWidth="1"></path>
<path className="animate-[beam_4s_linear_infinite]" d="M-20,280 C80,280 120,160 200,160" fill="none" stroke="url(#smart-beam-grad)" stroke-dasharray="80 1000" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M200,0 L200,160" fill="none" stroke="rgba(242,244,255,0.03)" stroke-dasharray="2 4" strokeWidth="1"></path>
</svg>

<div className="absolute w-96 h-96 border border-brand-sky/5 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-10"></div>
<div className="absolute w-80 h-80 border border-brand-text/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20 delay-700"></div>

<div className="absolute w-64 h-64 border border-brand-text/5 rounded-full animate-[spin_40s_linear_infinite]">
<div className="absolute top-1/2 -right-1 w-2 h-2 bg-brand-text/10 rounded-full"></div>
<div className="absolute top-1/2 -left-1 w-2 h-2 bg-brand-text/10 rounded-full"></div>
</div>

<div className="absolute w-60 h-60 border border-brand-text/10 rounded-full animate-[spin_30s_linear_infinite]"></div>

<div className="absolute w-44 h-44 border border-brand-text/5 rounded-full animate-[spin_20s_linear_infinite_reverse] border-dashed"></div>

<div className="absolute w-36 h-36 border border-brand-sky/20 rounded-full animate-[spin_15s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-sky mt-[-3px] rounded-full shadow-[0_0_10px_rgba(0,229,255,1)]"></div>
</div>

<div className="absolute w-60 h-60 animate-[spin_30s_linear_infinite]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050507] p-2.5 rounded-full border border-brand-text/10 group-hover:border-brand-sky/30 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-500">
<svg className="lucide lucide-gem text-brand-text/40 group-hover:text-brand-sky transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3h12l4 6-10 13L2 9Z"></path>
<path d="M11 3 8 9l4 13 4-13-3-6"></path>
<path d="M2 9h20"></path>
</svg>
</div>

<div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-[#050507] p-2.5 rounded-full border border-brand-text/10 group-hover:border-brand-sky/30 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-500">
<svg className="lucide lucide-credit-card text-brand-text/40 group-hover:text-brand-sky transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
</div>

<div className="z-10 flex group-hover:border-brand-sky/40 transition-colors duration-500 bg-[#0E1016] w-24 h-24 border-brand-text/10 border rounded-3xl relative items-center justify-center overflow-hidden shadow-2xl">
<svg className="lucide lucide-layers text-brand-text relative z-20 group-hover:text-brand-sky transition-colors duration-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>

<div className="animate-[pulse_2s_infinite] bg-gradient-to-tr from-transparent via-brand-sky/10 to-transparent absolute top-0 right-0 bottom-0 left-0 z-10"></div>

<div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'radial-gradient(#F2F4FF 0.5px, transparent 0.5px)', backgroundSize: '18px 18px'}}></div>
</div>
<div className="absolute bottom-4 flex flex-col items-center">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-text/5 border border-brand-text/5 group-hover:border-brand-sky/20 transition-colors">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-sky"></span>
</span>
<div className="text-[10px] text-brand-text/40 font-mono tracking-widest uppercase group-hover:text-brand-text/70 transition-colors">
                    Signal Active
                  </div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group relative flex flex-col p-10 rounded-[32px] border border-brand-text/10 bg-brand-panel overflow-hidden transition-all duration-500 duration-1000 opacity-0 translate-y-10" data-aos="fade-up" data-aos-delay="300">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(242, 244, 255, 0.06), transparent 40%)'}}></div>

<div className="pointer-events-none absolute inset-0 rounded-[32px] border border-brand-sky/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)', WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)'}}></div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-text mb-4 relative z-10">
            Distribution System
          </h3>
<p className="text-base text-brand-text/50 leading-relaxed mb-12 relative z-10 font-light">
            We ship and repurpose content across platforms so your best ideas
            don’t die in drafts.
          </p>

<div className="relative mt-auto w-full h-72 rounded-2xl border border-brand-text/10 bg-[#0A0A0A] p-7 flex flex-col justify-center gap-6 shadow-2xl">

<div className="flex justify-between items-center pb-4 border-b border-brand-text/5">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-brand-accent shadow-none"></span>
<span className="text-xs text-brand-text/50 font-mono uppercase tracking-wider">
                  Treasury_V4
                </span>
</div>
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full border border-[#0A0A0A] bg-brand-text/10 flex items-center justify-center text-brand-text/80 text-[10px] font-medium">
                  JD
                </div>
<div className="w-7 h-7 rounded-full border border-[#0A0A0A] bg-brand-sky/20 flex items-center justify-center text-brand-sky text-[10px] font-medium">
                  AS
                </div>
<div className="w-7 h-7 rounded-full border border-[#0A0A0A] bg-brand-text/5 flex items-center justify-center text-[9px] text-brand-text/40">
                  +3
                </div>
</div>
</div>

<div className="relative py-1">
<div className="flex justify-between text-[10px] text-brand-text/40 mb-2 font-mono uppercase">
<span className="">Allocation Limit</span>
<span className="text-brand-sky">75% Scheduled</span>
</div>
<div className="w-full h-2 bg-brand-text/10 rounded-full relative flex items-center">
<div className="absolute left-0 h-full w-[75%] bg-brand-text/80 rounded-full"></div>

<div className="absolute left-[75%] w-4 h-4 bg-brand-text rounded-full z-10 transform -translate-x-1/2 border-2 border-[#0A0A0A] cursor-grab"></div>

<div className="absolute left-[75%] -top-9 -translate-x-1/2 bg-[#151515] border border-brand-text/10 text-brand-text text-[10px] px-2.5 py-1.5 rounded shadow-lg whitespace-nowrap animate-bounce">
                  Repurposed for 3 platforms
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#151515] border-r border-b border-brand-text/10 transform rotate-45"></div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mt-2">
<div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-brand-text/5 border border-brand-text/5 hover:bg-brand-text/10 transition-colors cursor-pointer">
<svg className="lucide lucide-history text-brand-text/40" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path>
<path d="M3 3v9h9"></path>
<path d="M12 7v5l4 2"></path>
</svg>
<span className="text-xs text-brand-text/60 font-medium">
                  Posting Log
                </span>
</div>
<div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-brand-sky/10 border border-brand-sky/20 cursor-pointer hover:bg-brand-sky/20 transition-colors">
<svg className="lucide lucide-check-circle text-brand-sky" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-xs text-brand-sky font-medium">
                  Ship This Week
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 relative z-10 transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up" data-aos-delay="400">
<a aria-label="See the Playbook" className="group relative px-9 py-4 rounded-full bg-brand-text/10 text-brand-text font-semibold text-sm transition-all duration-300 hover:bg-brand-text/15 flex items-center gap-3 overflow-hidden tracking-tight border border-brand-text/10" href="#">
<span className="relative z-10">See the Playbook</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-brand-text/20 to-transparent z-0"></div>
</a>
</div>
</section>
<section className="overflow-hidden flex flex-col px-6 md:px-8 lg:px-12 z-10 bg-brand-dark/80 w-full border-brand-text/5 border-t pt-32 pb-32 relative backdrop-blur-xl items-center">

<div className="absolute inset-0 bg-[linear-gradient(rgba(242,244,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(242,244,255,0.02)_1px,transparent_1px)] bg-[size:100px_200px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl w-full relative z-10">

<div className="flex flex-col gap-8 mb-24 max-w-5xl transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up">
<span className="text-xs font-mono text-brand-text/40 uppercase tracking-[0.2em] font-medium pl-1 flex items-center gap-3">
<span className="w-1 h-1 bg-brand-sky rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]"></span>
            Built for teams that ship.
          </span>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold tracking-tight text-brand-text leading-[1.05]">
            Built for teams that ship.
          </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-end" style={{}}>

<div className="lg:col-span-4 relative group transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up" data-aos-delay="100" style={{}}>
<div className="relative w-full aspect-[3.5/4] rounded-[24px] overflow-hidden border border-brand-text/10 bg-brand-text/[0.02]">

<img alt="Founder Profile" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c419f6f-232a-4b04-a86d-660e6a8205bb_800w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-90"></div>

<div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">
                    BUILT WITH VYRAL
                  </span>
</div>
<p className="font-serif text-lg text-brand-text italic leading-relaxed">
                  “VYRAL turned our product into a message people actually
                  remembered. Once the system was in place, shipping content
                  stopped feeling heavy.”
                </p>
<p className="text-xs font-mono text-brand-text/50 mt-4">
                  — Alex M. — SaaS Founder
                </p>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-l border-brand-sky/20 pl-8">
<div className="group cursor-default">
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-xl bg-brand-text/5 border border-brand-text/10 flex items-center justify-center">
<svg className="lucide lucide-node text-brand-sky/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<circle cx="5" cy="5" r="2"></circle>
<circle cx="19" cy="5" r="2"></circle>
<circle cx="5" cy="19" r="2"></circle>
<circle cx="19" cy="19" r="2"></circle>
<path d="M10.5 10.5 7 7"></path>
<path d="M13.5 10.5 17 7"></path>
<path d="M10.5 13.5 7 17"></path>
<path d="M13.5 13.5 17 17"></path>
</svg>
</div>
<div className="text-lg font-serif text-brand-text font-semibold">
                    Founders
                  </div>
</div>
<p className="text-sm text-brand-text/60 font-light leading-relaxed">
                  You’ve built a real product—but marketing keeps getting pushed
                  “to later.” We help you clarify the message and ship content
                  weekly without becoming a full-time creator.
                </p>
<div className="text-xs font-mono text-brand-text/40 uppercase tracking-widest mt-4">
                  Less guessing. More momentum.
                </div>
</div>
<div className="group cursor-default">
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-xl bg-brand-text/5 border border-brand-text/10 flex items-center justify-center">
<svg className="lucide lucide-layout-grid text-brand-secondary/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<div className="text-lg font-serif text-brand-text font-semibold">
                    Lean teams
                  </div>
</div>
<p className="text-sm text-brand-text/60 font-light leading-relaxed">
                  Small teams don’t have time for bloated campaigns. We plug in
                  as a system—handling positioning, content, and distribution so
                  your team stays focused on shipping.
                </p>
<div className="text-xs font-mono text-brand-text/40 uppercase tracking-widest mt-4">
                  Execution without overhead.
                </div>
</div>
<div className="group cursor-default">
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-xl bg-brand-text/5 border border-brand-text/10 flex items-center justify-center">
<svg className="lucide lucide-radio text-brand-accent/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
<path d="M7.8 16.2a6 6 0 0 1 0-8.5"></path>
<circle cx="12" cy="12" r="1"></circle>
<path d="M16.2 7.8a6 6 0 0 1 0 8.5"></path>
<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
</svg>
</div>
<div className="text-lg font-serif text-brand-text font-semibold">
                    Creators &amp; operators
                  </div>
</div>
<p className="text-sm text-brand-text/60 font-light leading-relaxed">
                  If your product, studio, or service depends on visibility, we
                  help you turn ideas into repeatable content that compounds
                  across platforms.
                </p>
<div className="text-xs font-mono text-brand-text/40 uppercase tracking-widest mt-4">
                  Consistency beats virality.
                </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-brand-text/10 pt-12 mt-4">

<div className="group cursor-default">
<div className="text-4xl md:text-5xl font-serif text-brand-text font-semibold mb-3 group-hover:text-brand-sky transition-colors duration-300">
                  12–20 posts / week
                </div>
<div className="text-xs font-mono text-brand-text/40 uppercase tracking-widest flex items-center gap-2">
                  Shipped across platforms
                </div>
</div>

<div className="group cursor-default">
<div className="text-4xl md:text-5xl font-serif text-brand-text font-semibold mb-3 group-hover:text-brand-secondary transition-colors duration-300">
                  Weekly iteration cycles
                </div>
<div className="text-xs font-mono text-brand-text/40 uppercase tracking-widest">
                  From insight → live
                </div>
</div>

<div className="group cursor-default">
<div className="text-4xl md:text-5xl font-serif text-brand-text font-semibold mb-3 group-hover:text-brand-highlight transition-colors duration-300">
                  Consistency beats virality
                </div>
<div className="text-xs font-mono text-brand-text/40 uppercase tracking-widest">
                  Momentum compounds
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full bg-brand-dark py-32 px-6 lg:px-12 border-t border-brand-text/5 transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up">

<div className="max-w-7xl mx-auto mb-20">
<div className="flex flex-col gap-6">
<span className="text-xs font-mono text-brand-text/40 uppercase tracking-[0.2em] font-medium flex items-center gap-3">
<span className="w-1 h-1 bg-brand-sky rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]"></span>
            THE PROCESS
          </span>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold tracking-tight text-brand-text leading-[1.05]">
            A simple system. Shipped weekly.
          </h2>
<p className="text-xl text-brand-text/60 leading-relaxed max-w-2xl font-light tracking-tight mt-4">
            VYRAL isn’t a campaign or a one-off sprint. It’s a weekly operating
            system for positioning, content, and distribution—designed to
            compound over time.
          </p>
</div>
</div>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">

<div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-brand-text/5 via-brand-text/10 to-brand-text/5"></div>

<div className="flex flex-col gap-6 relative group">
<div className="text-5xl font-mono font-light text-brand-text/10 group-hover:text-brand-sky/20 transition-colors duration-500 select-none bg-brand-dark pr-4 w-fit z-10">
            01
          </div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono text-brand-sky uppercase tracking-widest opacity-80">
              CLARITY FIRST
            </span>
<h3 className="text-xl font-serif font-medium text-brand-text">
              Audit &amp; positioning
            </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
              We start by understanding your product, market, and existing
              signal. Then we sharpen the message into something people
              instantly get—and want to repeat.
            </p>
</div>
</div>

<div className="flex flex-col gap-6 relative group">
<div className="text-5xl font-mono font-light text-brand-text/10 group-hover:text-brand-secondary/20 transition-colors duration-500 select-none bg-brand-dark pr-4 w-fit z-10">
            02
          </div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono text-brand-secondary uppercase tracking-widest opacity-80">
              NO GUESSWORK
            </span>
<h3 className="text-xl font-serif font-medium text-brand-text">
              System setup
            </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
              We define formats, hooks, platforms, and cadence—so content stops
              being a question mark and becomes a process.
            </p>
</div>
</div>

<div className="flex flex-col gap-6 relative group">
<div className="text-5xl font-mono font-light text-brand-text/10 group-hover:text-brand-highlight/20 transition-colors duration-500 select-none bg-brand-dark pr-4 w-fit z-10">
            03
          </div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono text-brand-highlight uppercase tracking-widest opacity-80">
              OUTPUT &gt; IDEAS
            </span>
<h3 className="text-xl font-serif font-medium text-brand-text">
              Weekly shipping
            </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
              Every week, we ship content and distribution. No waiting for
              perfect. No long gaps. Momentum is built through consistency.
            </p>
</div>
</div>

<div className="flex flex-col gap-6 relative group">
<div className="text-5xl font-mono font-light text-brand-text/10 group-hover:text-brand-accent/20 transition-colors duration-500 select-none bg-brand-dark pr-4 w-fit z-10">
            04
          </div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest opacity-80">
              MOMENTUM BUILDS
            </span>
<h3 className="text-xl font-serif font-medium text-brand-text">
              Iteration &amp; compounding
            </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
              What works gets doubled down. What doesn’t gets cut. Over time,
              signal compounds and effort drops.
            </p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-brand-text/5 flex justify-start">
<a className="group flex items-center gap-3 text-sm font-medium text-brand-text/60 hover:text-brand-text transition-colors" href="#">
<span className="border-b border-transparent group-hover:border-brand-text/30 transition-all">
            Explore the system
          </span>
<svg className="transform group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>
<section className="relative z-10 w-full bg-brand-dark py-32 px-6 lg:px-12 border-t border-brand-text/5 transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up">
<div className="max-w-7xl mx-auto mb-20 text-center flex flex-col items-center">
<div className="flex items-center gap-3 mb-6">
<span className="w-1 h-1 bg-brand-secondary rounded-full shadow-[0_0_10px_rgba(255,61,129,0.8)]"></span>
<span className="text-xs font-mono text-brand-text/40 uppercase tracking-[0.2em] font-medium">
            WHAT YOU GET
          </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold tracking-tight text-brand-text leading-[1.05] mb-6">
          Everything you need
          <br className="hidden md:block"/>
          to ship consistently.
        </h2>
<p className="text-xl text-brand-text/60 leading-relaxed max-w-2xl font-light tracking-tight">
          No bloated retainers. No random posts. Just a clear system with
          defined outputs.
        </p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex flex-col p-8 rounded-[24px] border border-brand-text/5 bg-brand-text/[0.02] hover:bg-brand-text/[0.04] transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full border border-brand-text/10 bg-brand-panel flex items-center justify-center mb-6 text-brand-sky group-hover:text-brand-text transition-colors">
<svg className="lucide lucide-crosshair" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
<h3 className="text-lg font-serif font-medium text-brand-text mb-3">
            Positioning &amp; messaging
          </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
            We clarify what you say, who it’s for, and why it matters—so every
            piece of content reinforces the same signal.
          </p>
</div>
<div className="flex flex-col p-8 rounded-[24px] border border-brand-text/5 bg-brand-text/[0.02] hover:bg-brand-text/[0.04] transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full border border-brand-text/10 bg-brand-panel flex items-center justify-center mb-6 text-brand-secondary group-hover:text-brand-text transition-colors">
<svg className="lucide lucide-zap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-lg font-serif font-medium text-brand-text mb-3">
            Hooks &amp; content angles
          </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
            We develop repeatable hooks, narratives, and angles designed for how
            platforms actually distribute content.
          </p>
</div>
<div className="flex flex-col p-8 rounded-[24px] border border-brand-text/5 bg-brand-text/[0.02] hover:bg-brand-text/[0.04] transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full border border-brand-text/10 bg-brand-panel flex items-center justify-center mb-6 text-brand-highlight group-hover:text-brand-text transition-colors">
<svg className="lucide lucide-pen-tool" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19 7-7 3 3-7 7-3-3z"></path>
<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="m2 2 7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
<h3 className="text-lg font-serif font-medium text-brand-text mb-3">
            Content production or direction
          </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
            Depending on the engagement, we either produce content directly or
            guide your team with clear briefs and templates.
          </p>
</div>
<div className="flex flex-col p-8 rounded-[24px] border border-brand-text/5 bg-brand-text/[0.02] hover:bg-brand-text/[0.04] transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full border border-brand-text/10 bg-brand-panel flex items-center justify-center mb-6 text-brand-accent group-hover:text-brand-text transition-colors">
<svg className="lucide lucide-share-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
</div>
<h3 className="text-lg font-serif font-medium text-brand-text mb-3">
            Distribution &amp; repurposing
          </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
            Every asset is deployed and adapted across platforms so nothing dies
            after one post.
          </p>
</div>
<div className="flex flex-col p-8 rounded-[24px] border border-brand-text/5 bg-brand-text/[0.02] hover:bg-brand-text/[0.04] transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full border border-brand-text/10 bg-brand-panel flex items-center justify-center mb-6 text-brand-sky group-hover:text-brand-text transition-colors">
<svg className="lucide lucide-repeat" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m17 2 4 4-4 4"></path>
<path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
<path d="m7 22-4-4 4-4"></path>
<path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
</svg>
</div>
<h3 className="text-lg font-serif font-medium text-brand-text mb-3">
            Weekly cadence &amp; iteration
          </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
            We work in weekly cycles—shipping, reviewing signal, and doubling
            down on what works.
          </p>
</div>
<div className="flex flex-col p-8 rounded-[24px] border border-brand-text/5 bg-brand-text/[0.02] hover:bg-brand-text/[0.04] transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full border border-brand-text/10 bg-brand-panel flex items-center justify-center mb-6 text-brand-secondary group-hover:text-brand-text transition-colors">
<svg className="lucide lucide-activity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<h3 className="text-lg font-serif font-medium text-brand-text mb-3">
            Lightweight reporting
          </h3>
<p className="text-sm text-brand-text/50 font-light leading-relaxed">
            Clear signal, not vanity dashboards. You’ll know what’s working and
            why—without noise.
          </p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-brand-text/5 text-center flex flex-col items-center gap-8">
<p className="text-xs font-mono text-brand-text/30 uppercase tracking-widest">
          We don’t sell one-off posts, viral guarantees, or growth hacks.
        </p>
<p className="text-lg font-serif text-brand-text/60 italic">
          Here’s what this looks like in practice.
        </p>
</div>
</section>
<section className="relative z-10 w-full bg-brand-dark py-32 px-6 lg:px-12 border-t border-brand-text/5 transition-all duration-1000 opacity-0 translate-y-10" data-aos="fade-up">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col gap-6 mb-20 md:text-center md:items-center">
<div className="flex items-center gap-3">
<span className="w-1 h-1 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(124,255,107,0.8)]"></span>
<span className="text-xs font-mono text-brand-text/40 uppercase tracking-[0.2em] font-medium">
              PROOF IN PRACTICE
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold tracking-tight text-brand-text leading-[1.05]">
            What this looks like with real teams.
          </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative group">
<div className="relative p-10 rounded-[32px] border border-brand-text/10 bg-brand-panel overflow-hidden transition-all duration-500 hover:border-brand-text/20">

<div className="absolute top-6 left-8 text-9xl font-serif text-brand-text/5 leading-none select-none pointer-events-none">
                “
              </div>
<p className="relative z-10 text-xl md:text-2xl font-serif text-brand-text font-light leading-relaxed mb-8">
                Once the system was in place, shipping content stopped feeling
                heavy.
                <span className="text-brand-text/60">
                  We finally had momentum without the burnout.
                </span>
</p>
<div className="flex items-center gap-4 relative z-10 border-t border-brand-text/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-text/10 to-transparent border border-brand-text/10 flex items-center justify-center text-brand-text/40 font-mono text-xs">
                  JD
                </div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-brand-text">
                    Jonathan D.
                  </span>
<span className="text-xs text-brand-text/40 font-mono">
                    Founder, SaaS Studio
                  </span>
</div>
</div>
</div>

<div className="absolute -inset-1 bg-brand-accent/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="flex flex-col gap-10">

<div className="flex gap-5 group">
<div className="flex-none pt-1">
<div className="w-8 h-8 rounded-full border border-brand-text/10 flex items-center justify-center text-brand-text/20 group-hover:border-brand-sky/50 group-hover:text-brand-sky transition-colors duration-300 bg-brand-panel">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div>
<div className="text-[10px] font-mono text-brand-text/30 mb-2 uppercase tracking-widest">
                  The Shift
                </div>
<h4 className="text-lg font-medium text-brand-text mb-2 group-hover:text-brand-sky transition-colors">
                  From guessing → Weekly shipping
                </h4>
<p className="text-sm text-brand-text/50 font-light leading-relaxed max-w-sm">
                  No more debating what to post. We execute on a defined
                  strategy every single week.
                </p>
</div>
</div>

<div className="flex gap-5 group">
<div className="flex-none pt-1">
<div className="w-8 h-8 rounded-full border border-brand-text/10 flex items-center justify-center text-brand-text/20 group-hover:border-brand-secondary/50 group-hover:text-brand-secondary transition-colors duration-300 bg-brand-panel">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div>
<div className="text-[10px] font-mono text-brand-text/30 mb-2 uppercase tracking-widest">
                  The Signal
                </div>
<h4 className="text-lg font-medium text-brand-text mb-2 group-hover:text-brand-secondary transition-colors">
                  From scattered posts → One clear signal
                </h4>
<p className="text-sm text-brand-text/50 font-light leading-relaxed max-w-sm">
                  Every piece of content reinforces the core value proposition.
                  The market finally understands us.
                </p>
</div>
</div>

<div className="flex gap-5 group">
<div className="flex-none pt-1">
<div className="w-8 h-8 rounded-full border border-brand-text/10 flex items-center justify-center text-brand-text/20 group-hover:border-brand-highlight/50 group-hover:text-brand-highlight transition-colors duration-300 bg-brand-panel">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div>
<div className="text-[10px] font-mono text-brand-text/30 mb-2 uppercase tracking-widest">
                  The Workflow
                </div>
<h4 className="text-lg font-medium text-brand-text mb-2 group-hover:text-brand-highlight transition-colors">
                  From burnout → Sustainable cadence
                </h4>
<p className="text-sm text-brand-text/50 font-light leading-relaxed max-w-sm">
                  The system handles the heavy lifting. We stay consistent
                  without exhausting the team.
                </p>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-10 border-t border-brand-text/5 flex justify-center">
<div className="flex items-center gap-3 px-4 py-2 rounded-full border border-brand-text/10 bg-brand-text/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-brand-text/40"></span>
<p className="text-xs font-mono text-brand-text/60 tracking-wide uppercase">
              No viral promises. Just consistent output that compounds.
            </p>
</div>
</div>
</div>
</section>
<section className="relative z-10 w-full bg-brand-dark py-32 px-6 lg:px-12 border-t border-brand-text/5 transition-all duration-1000" data-aos="fade-up">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col gap-6 mb-20 md:text-center md:items-center">
<div className="flex items-center gap-3">
<span className="w-1 h-1 bg-brand-sky rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]"></span>
<span className="text-xs font-mono text-brand-text/40 uppercase tracking-[0.2em] font-medium">
              FAQ
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold tracking-tight text-brand-text leading-[1.05]">
            Clear answers, upfront.
          </h2>
</div>

<div className="max-w-3xl mx-auto divide-y divide-brand-text/5">

<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-medium text-brand-text/90 hover:text-brand-sky transition-colors">
<span>Is this for B2B or B2C?</span>
<span className="transition-transform duration-300 group-open:rotate-180 opacity-50 group-hover:opacity-100">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-brand-text/50 mt-4 font-light leading-relaxed">
              Both. The system is built around clarity, consistency, and
              distribution — which applies whether you’re selling software,
              services, or products. The execution adapts to the audience.
            </p>
</details>

<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-medium text-brand-text/90 hover:text-brand-sky transition-colors">
<span className="">Do you post for us, or with us?</span>
<span className="transition-transform duration-300 group-open:rotate-180 opacity-50 group-hover:opacity-100">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-brand-text/50 mt-4 font-light leading-relaxed">
              It depends on the engagement. Some teams want full execution.
              Others prefer direction, structure, and review. We align on this
              during the audit.
            </p>
</details>

<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-medium text-brand-text/90 hover:text-brand-sky transition-colors">
<span className="">How long before we see results?</span>
<span className="transition-transform duration-300 group-open:rotate-180 opacity-50 group-hover:opacity-100">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-brand-text/50 mt-4 font-light leading-relaxed">
              This isn’t about overnight spikes. Most teams feel clarity
              immediately and see momentum build over the first few weeks as
              consistency compounds.
            </p>
</details>

<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-medium text-brand-text/90 hover:text-brand-sky transition-colors">
<span className="">What platforms do you focus on?</span>
<span className="transition-transform duration-300 group-open:rotate-180 opacity-50 group-hover:opacity-100">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-brand-text/50 mt-4 font-light leading-relaxed">
              We focus on platforms where consistent content and distribution
              matter most — typically X, LinkedIn, Instagram, TikTok, and
              YouTube. The mix depends on your product and audience.
            </p>
</details>

<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-medium text-brand-text/90 hover:text-brand-sky transition-colors">
<span className="">What if we already have content?</span>
<span className="transition-transform duration-300 group-open:rotate-180 opacity-50 group-hover:opacity-100">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-brand-text/50 mt-4 font-light leading-relaxed">
              That’s a good thing. We audit what exists, identify signal, and
              build on what’s already working instead of starting from scratch.
            </p>
</details>

<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-medium text-brand-text/90 hover:text-brand-sky transition-colors">
<span className="">Is there a long-term commitment?</span>
<span className="transition-transform duration-300 group-open:rotate-180 opacity-50 group-hover:opacity-100">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-brand-text/50 mt-4 font-light leading-relaxed">
              No long-term lock-ins. The goal is to build momentum and clarity —
              not trap teams in retainers.
            </p>
</details>

<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-medium text-brand-text/90 hover:text-brand-sky transition-colors">
<span className="">What happens in the growth audit?</span>
<span className="transition-transform duration-300 group-open:rotate-180 opacity-50 group-hover:opacity-100">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-brand-text/50 mt-4 font-light leading-relaxed">
              We review your product, message, and current signal, then outline
              a clear path forward. You’ll leave with clarity — whether or not
              we work together.
            </p>
</details>
</div>

<div className="mt-20 pt-12 text-center">
<p className="text-lg font-serif italic text-brand-text/60">
            If this sounds like the way you want to operate, the next step is
            simple.
          </p>
</div>
</div>
</section>

<section className="relative z-10 w-full bg-brand-dark py-32 px-6 lg:px-12 border-t border-brand-text/5 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-1000" data-aos="fade-up">

<div className="absolute inset-0 bg-gradient-to-b from-brand-sky/[0.03] to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
<h2 className="md:text-7xl lg:text-8xl text-brand-text leading-[0.9] text-5xl font-semibold tracking-tight font-hand">
          Stop guessing.
          <br/>
<span className="text-brand-sky">Start compounding.</span>
</h2>
<p className="text-xl md:text-2xl text-brand-text/60 font-light max-w-2xl">
          Get a growth audit and see if VYRAL is the right system for your team.
        </p>
<div className="mt-8">
<button className="shiny-cta focus:outline-none scale-110 sm:scale-125">
<span>Get a Growth Audit</span>
</button>
</div>
<p className="mt-3 text-xs font-mono text-brand-text/40 tracking-wide">
          No commitment. Just clarity.
        </p>
</div>
</section>
<footer className="bg-black/80 text-brand-text/60 py-16 lg:px-12 px-6 border-t border-brand-text/5 relative z-10 backdrop-blur-md">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="flex flex-col gap-6">
<div className="flex gap-2.5 items-center">
<svg aria-hidden="true" className="text-brand-sky w-6 h-6" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="vyralFooterMark" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#00E5FF"></stop>
<stop offset="60%" stop-color="#FF3D81"></stop>
<stop offset="100%" stop-color="#7CFF6B"></stop>
</lineargradient>
</defs>
<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" fill="url(#vyralFooterMark)" opacity="0.18"></path>
<path d="M6.2 7.2a1 1 0 0 1 1.414 0L12 11.586l4.386-4.386a1 1 0 1 1 1.414 1.414L13.414 13l4.386 4.386a1 1 0 0 1-1.414 1.414L12 14.414 7.614 18.8A1 1 0 1 1 6.2 17.386L10.586 13 6.2 8.614a1 1 0 0 1 0-1.414Z" fill="url(#vyralFooterMark)"></path>
</svg>
<span className="font-sans font-semibold text-lg text-brand-text">
              VYRAL
            </span>
</div>
<p className="text-sm font-light text-brand-text/40">
            Built for teams that ship.
          </p>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-xs font-mono uppercase tracking-widest text-brand-text/30 mb-2">
            Product
          </h4>
<a className="text-sm hover:text-brand-sky transition-colors" href="#">
            Playbook
          </a>
<a className="text-sm hover:text-brand-sky transition-colors" href="#">
            How It Works
          </a>
<a className="text-sm hover:text-brand-sky transition-colors" href="#">
            What We Deliver
          </a>
<a className="text-sm hover:text-brand-sky transition-colors" href="#">
            Proof
          </a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-xs font-mono uppercase tracking-widest text-brand-text/30 mb-2">
            Company
          </h4>
<a className="text-sm hover:text-brand-sky transition-colors" href="#">
            About
          </a>
<a className="text-sm hover:text-brand-sky transition-colors" href="#">
            Contact
          </a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-xs font-mono uppercase tracking-widest text-brand-text/30 mb-2">
            Get updates from VYRAL
          </h4>
<div className="flex gap-2">
<input className="bg-brand-text/5 border border-brand-text/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-sky/50 w-full transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-brand-text/10 hover:bg-brand-sky hover:text-black transition-all p-2 rounded-lg">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<p className="text-[10px] font-mono text-brand-text/30 tracking-wide">
            Occasional insights. No noise.
          </p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-text/30">
<p>© 2024 VYRAL. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-brand-text transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-brand-text transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>



<svg aria-hidden="true" focusable="false" style={{width: '0', height: '0', position: 'absolute'}}>
<defs>

<radialgradient id="center-glow">
<stop offset="0%" stop-color="#00E5FF" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#00E5FF" stop-opacity="0"></stop>
</radialgradient>

<lineargradient id="header-beam" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#00E5FF" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#00E5FF" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#00E5FF" stop-opacity="0"></stop>
</lineargradient>

<lineargradient gradientunits="userSpaceOnUse" id="smart-beam-grad">
<stop offset="0%" stop-color="#00E5FF" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#00E5FF" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#00E5FF" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>

    </>
  );
}
