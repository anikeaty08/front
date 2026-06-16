import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Configure Tailwind to include our custom 3D transform utilities
    tailwind.config = {
      theme: {
        extend: {
          // Add any custom theme extensions here if needed
        }
      },
      plugins: [
        function({ addUtilities }) {
          const rotateXUtilities = {};
          const rotateYUtilities = {};
          const rotateZUtilities = {};

          const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
          
          // Generate rotate-x utilities
          rotateValues.forEach((value) => {
            rotateXUtilities[`.rotate-x-${value}`] = {
              '--tw-rotate-x': `${value}deg`,
              transform: `
                translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                rotateX(var(--tw-rotate-x, 0)) 
                rotateY(var(--tw-rotate-y, 0)) 
                rotateZ(var(--tw-rotate-z, 0)) 
                skewX(var(--tw-skew-x, 0)) 
                skewY(var(--tw-skew-y, 0)) 
                scaleX(var(--tw-scale-x, 1)) 
                scaleY(var(--tw-scale-y, 1))
              `.replace(/\\s+/g, ' ').trim(),
            };
            if (value !== 0) {
              rotateXUtilities[`.-rotate-x-${value}`] = {
                '--tw-rotate-x': `-${value}deg`,
                transform: `
                  translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                  rotateX(var(--tw-rotate-x, 0)) 
                  rotateY(var(--tw-rotate-y, 0)) 
                  rotateZ(var(--tw-rotate-z, 0)) 
                  skewX(var(--tw-skew-x, 0)) 
                  skewY(var(--tw-skew-y, 0)) 
                  scaleX(var(--tw-scale-x, 1)) 
                  scaleY(var(--tw-scale-y, 1))
                `.replace(/\\s+/g, ' ').trim(),
              };
            }
          });

          // Generate rotate-y utilities
          rotateValues.forEach((value) => {
            rotateYUtilities[`.rotate-y-${value}`] = {
              '--tw-rotate-y': `${value}deg`,
              transform: `
                translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                rotateX(var(--tw-rotate-x, 0)) 
                rotateY(var(--tw-rotate-y, 0)) 
                rotateZ(var(--tw-rotate-z, 0)) 
                skewX(var(--tw-skew-x, 0)) 
                skewY(var(--tw-skew-y, 0)) 
                scaleX(var(--tw-scale-x, 1)) 
                scaleY(var(--tw-scale-y, 1))
              `.replace(/\\s+/g, ' ').trim(),
            };
            if (value !== 0) {
              rotateYUtilities[`.-rotate-y-${value}`] = {
                '--tw-rotate-y': `-${value}deg`,
                transform: `
                  translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                  rotateX(var(--tw-rotate-x, 0)) 
                  rotateY(var(--tw-rotate-y, 0)) 
                  rotateZ(var(--tw-rotate-z, 0)) 
                  skewX(var(--tw-skew-x, 0)) 
                  skewY(var(--tw-skew-y, 0)) 
                  scaleX(var(--tw-scale-x, 1)) 
                  scaleY(var(--tw-scale-y, 1))
                `.replace(/\\s+/g, ' ').trim(),
              };
            }
          });

          // Generate rotate-z utilities
          rotateValues.forEach((value) => {
            rotateZUtilities[`.rotate-z-${value}`] = {
              '--tw-rotate-z': `${value}deg`,
              transform: `
                translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                rotateX(var(--tw-rotate-x, 0)) 
                rotateY(var(--tw-rotate-y, 0)) 
                rotateZ(var(--tw-rotate-z, 0)) 
                skewX(var(--tw-skew-x, 0)) 
                skewY(var(--tw-skew-y, 0)) 
                scaleX(var(--tw-scale-x, 1)) 
                scaleY(var(--tw-scale-y, 1))
              `.replace(/\\s+/g, ' ').trim(),
            };
            if (value !== 0) {
              rotateZUtilities[`.-rotate-z-${value}`] = {
                '--tw-rotate-z': `-${value}deg`,
                transform: `
                  translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) 
                  rotateX(var(--tw-rotate-x, 0)) 
                  rotateY(var(--tw-rotate-y, 0)) 
                  rotateZ(var(--tw-rotate-z, 0)) 
                  skewX(var(--tw-skew-x, 0)) 
                  skewY(var(--tw-skew-y, 0)) 
                  scaleX(var(--tw-scale-x, 1)) 
                  scaleY(var(--tw-scale-y, 1))
                `.replace(/\\s+/g, ' ').trim(),
              };
            }
          });

          // Perspective utilities
          const perspectiveUtilities = {
            ".perspective-none": { perspective: "none" },
            ".perspective-dramatic": { perspective: "100px" },
            ".perspective-near": { perspective: "300px" },
            ".perspective-normal": { perspective: "500px" },
            ".perspective-midrange": { perspective: "800px" },
            ".perspective-distant": { perspective: "1200px" },
          };

          // Transform style utilities
          const transformStyleUtilities = {
            ".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
            ".transform-style-flat": { "transform-style": "flat" },
          };

          addUtilities({
            ...rotateXUtilities,
            ...rotateYUtilities,
            ...rotateZUtilities,
            ...perspectiveUtilities,
            ...transformStyleUtilities,
          });
        }
      ]
    };
    


    function getSidebarClass() {
      return 'sidebar';
    }
    function animateRectangleAndText() {
      document.body.classList.remove('overflow-hidden');
      const ids = ['hero-1', 'hero-2', 'hero-3', 'hero-4'];
      ids.forEach((id, idx) => {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.classList.remove('opacity-0', '-translate-x-12');
            el.classList.add('opacity-100', 'translate-x-0');
          }
        }, idx * 120);
      });
    }
    window.onload = () => {
      document.body.classList.add('overflow-hidden');
      const rect = document.getElementById('animated-rect');
      rect.classList.add('fullscreen');
      rect.classList.remove('sidebar');
      setTimeout(() => {
        rect.classList.remove('fullscreen');
        rect.classList.add(getSidebarClass());
        setTimeout(animateRectangleAndText, 900);

        // Slide in the mockup after sidebar animation
        setTimeout(() => {
          const mockupCol = document.getElementById('mockup-col');
          mockupCol.classList.remove('slide-out-right');
          mockupCol.classList.add('slide-in-mockup');
        }, 300);
      }, 900);
    };
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const title = document.querySelector('.mockup-col h1');
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }, 700);
      setTimeout(() => {
        const description = document.querySelector('.mockup-col p:not(.text-xs)');
        description.style.opacity = '1';
        description.style.transition = 'opacity 0.8s ease';
      }, 1200);
      setTimeout(() => {
        const button = document.querySelector('.mockup-col button');
        button.style.opacity = '1';
        button.style.transform = 'scale(1)';
        button.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }, 1700);
      setTimeout(() => {
        const privacy = document.querySelector('.mockup-col .text-xs');
        privacy.style.opacity = '1';
        privacy.style.transition = 'opacity 0.8s ease';
      }, 2200);
      setTimeout(() => {
        const mainBtn = document.querySelector('.mockup-col .main-btn');
        mainBtn.style.opacity = '1';
        mainBtn.style.transition = 'opacity 0.8s ease';
        mainBtn.classList.add('pulse');
      }, 2600);
      setTimeout(() => {
        const circles = document.querySelectorAll('.mockup-col .orbit-circle');
        circles.forEach((circle, index) => {
          setTimeout(() => {
            circle.style.opacity = '1';
            circle.style.transition = 'opacity 0.5s ease';
          }, index * 100);
        });
      }, 2900);
      setTimeout(() => {
        const orbitals = document.querySelectorAll('.mockup-col .orbital-element');
        orbitals.forEach((orbital, index) => {
          setTimeout(() => {
            orbital.style.opacity = '1';
            orbital.style.animation = `orbit 20s linear infinite`;
            orbital.style.animationDelay = `-${index * 2.85}s`;
          }, index * 150 + 100);
        });
      }, 3400);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full px-8 py-6 flex items-center justify-between fixed top-0 left-0 z-40 bg-transparent">
<div className="text-3xl font-normal text-[#ff8b33] tracking-tight font-gt-walsheim">Zeno</div>
<nav>
<ul className="flex gap-8 text-gray-700 font-medium text-lg">
<li><a className="hover:text-[#ff8b33] transition" href="#">Home</a></li>
<li><a className="hover:text-[#ff8b33] transition" href="#">Portfolio</a></li>
<li><a className="hover:text-[#ff8b33] transition" href="#">Services</a></li>
<li><a className="hover:text-[#ff8b33] transition" href="#">Contact</a></li>
</ul>
</nav>
</header>

<section className="relative flex flex-1 items-center justify-center hero-app-stack flex-row px-8 md:px-24 h-screen min-h-screen py-12 md:py-0 w-full overflow-visible gap-12 md:gap-24">

<div aria-hidden="true" className="fullscreen" id="animated-rect"></div>

<div className="relative z-30 max-w-2xl text-left hero-col flex-1 min-w-[340px] flex items-center" style={{transform: 'translateY(-4vh)'}}>
<div>
<span className="uppercase tracking-widest font-semibold mb-6 block text-[#ff8b33] text-left opacity-0 -translate-x-12" id="hero-1" style={{transitionDelay: '0ms'}}>
          UI/UX Freelancer
        </span>
<h1 className="md:text-7xl leading-tight text-5xl font-bold text-slate-950 font-gt-walsheim text-left mb-8 opacity-0 -translate-x-12 transition-all duration-700" id="hero-2" style={{transitionDelay: '120ms'}}>
          Designing Bold Interfaces
        </h1>
<p className="md:text-2xl md:mb-12 text-xs font-light text-gray-500 text-left mb-8 opacity-0 -translate-x-12 transition-all duration-700" id="hero-3" style={{transitionDelay: '240ms'}}>
          I craft beautiful, intuitive interfaces for startups and brands who want to stand out and connect deeply with their users.
        </p>
<a className="inline-block bg-[#ff8b33] hover:bg-[#ed3403] transition-all duration-300 text-lg font-bold text-white rounded-md pt-4 pr-8 pb-4 pl-8 shadow-2xl opacity-0 -translate-x-12 transition-all duration-700" href="mailto:hello@uxfreelancer.com" id="hero-4" style={{transitionDelay: '360ms'}}>
          Let's Work Together
        </a>
</div>
</div>

<div className="flex flex-col items-center justify-center mockup-col flex-none relative z-30 drop-shadow-xl scale-75 -skew-x-15 rotate-x-5 -rotate-z-5 slide-out-right" id="mockup-col">

<div className="iphone-mockup">
<div className="notch"></div>

<div className="status-bar py-4">
<div className="">9:41</div>
<div className="flex gap-2">
<svg fill="none" height="16" viewbox="0 0 24 24" width="18"></svg>
<svg fill="none" height="16" viewbox="0 0 24 24" width="18"></svg>
</div>
</div>

<div className="flex flex-col items-center page-content pt-4 pr-6 pl-6">

<div className="orbit mb-8">
<div className="orbit-circle orbit-1"></div>
<div className="orbit-circle orbit-2"></div>
<div className="orbit-circle orbit-3"></div>
<div className="orbit-circle orbit-4"></div>

<div className="main-btn">
<svg fill="none" height="52" viewbox="0 0 52 52" width="52">
<circle cx="26" cy="26" fill="#fff" r="25"></circle>
<g>
<circle cx="18" cy="18" fill="#ff7262" r="7"></circle>
<circle cx="34" cy="18" fill="#a259ff" r="7"></circle>
<circle cx="18" cy="34" fill="#1abcfe" r="7"></circle>
<circle cx="34" cy="34" fill="#0acf83" r="7"></circle>
<circle cx="26" cy="26" fill="#f24e1e" r="7"></circle>
</g>
</svg>
</div>

<div className="orbital-element" id="orbital-1">
<div className="orbital-item icon-bg-gradient">
<svg fill="none" height="26" viewbox="0 0 24 24" width="26">
<rect height="14" rx="3" stroke="#fff" strokeWidth="2" width="18" x="3" y="5"></rect>
<rect height="6" rx="1" stroke="#fff" strokeWidth="2" width="10" x="7" y="9"></rect>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-2">
<div className="orbital-item" style={{background: 'linear-gradient(135deg,#a259ff 60%,#1abcfe 100%)'}}>
<svg fill="none" height="26" viewbox="0 0 24 24" width="26">
<circle cx="7" cy="12" fill="#fff" r="2"></circle>
<circle cx="12" cy="12" fill="#fff" r="2"></circle>
<circle cx="17" cy="12" fill="#fff" r="2"></circle>
<rect height="10" rx="5" stroke="#fff" strokeWidth="2" width="18" x="3" y="7"></rect>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-3">
<div className="orbital-item" style={{background: 'linear-gradient(135deg,#fff4e7 30%,#ffb347 100%)'}}>
<svg fill="none" height="26" viewbox="0 0 24 24" width="26">
<text fill="#ff8b33" fontFamily="Arial" fontSize="16" font-weight="bold" x="4" y="19">Aa</text>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-4">
<div className="orbital-item" style={{background: 'linear-gradient(135deg,#1abcfe 40%,#a259ff 100%)'}}>
<svg fill="none" height="26" viewbox="0 0 24 24" width="26">
<path d="M6 12h12m0 0l-5-5m5 5l-5 5" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-5">
<div className="orbital-item" style={{background: 'linear-gradient(135deg,#ff7262 60%,#ffb347 100%)'}}>
<svg fill="none" height="26" viewbox="0 0 24 24" width="26">
<rect height="14" rx="3" stroke="#fff" strokeWidth="2" width="14" x="3" y="5"></rect>
<rect height="8" rx="1" stroke="#fff" strokeWidth="2" width="4" x="17" y="8"></rect>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-6">
<div className="orbital-item" style={{background: 'linear-gradient(135deg,#f24e1e 40%,#ff7262 100%)'}}>
<svg fill="none" height="26" viewbox="0 0 24 24" width="26">
<circle cx="12" cy="10" r="4" stroke="#fff" strokeWidth="2"></circle>
<path d="M4 19c0-2.761 3.134-5 7-5s7 2.239 7 5" stroke="#fff" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="orbital-element" id="orbital-7">
<div className="orbital-item" style={{background: 'linear-gradient(135deg,#ffb347 60%,#ffe4b2 100%)'}}>
<svg fill="none" height="26" viewbox="0 0 24 24" width="26">
<path d="M12 17v2m0-10a5 5 0 00-3.58 8.36c.13.13.2.31.18.49-.13 1.13 1.1 2.15 2.4 2.15s2.53-1.02 2.4-2.15a.5.5 0 01.18-.49A5 5 0 0012 9z" stroke="#ff8b33" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<h1 className="text-2xl font-bold text-center mb-4 leading-tight fade-in-up">
            Your Next Project, Beautifully Designed
          </h1>
<p className="text-center text-gray-700 mb-8 px-4 fade-in">
            Collaborate directly with a freelance designer who brings your vision to life. From wireframes to prototypes and pixel-perfect UI, let's make your product shine.
          </p>
<button className="w-full bg-[#ff8b33] text-white py-4 px-6 rounded-full font-semibold mb-4 shadow-lg hover:bg-[#ed3403] transition-colors scale-up">
            Get a Free Consultation
          </button>
<p className="text-xs text-gray-600 text-center max-w-xs mb-8 fade-in">
            View <a className="text-[#ff8b33] underline hover:text-[#a259ff] transition" href="#">portfolio</a> or request references from happy clients!
          </p>
</div>
<div className="absolute bottom-2 left-0 right-0 flex justify-center">
<div className="home-indicator"></div>
</div>
</div>
</div>
</section>


    </>
  );
}
