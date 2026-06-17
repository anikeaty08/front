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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
borderRadius: {
'4xl': '2.5rem',
},
colors: {
'off-black': '#111111',
'muted-gray': '#666666',
'dark-bg': '#0F0F0F',
'dark-card': '#1A1A1A',
'dark-border': '#2A2A2A',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'draw': 'draw 2.5s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
draw: {
'0%': { strokeDasharray: '1000', strokeDashoffset: '1000' },
'100%': { strokeDasharray: '1000', strokeDashoffset: '0' },
}
}
}
}
}



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}



    lucide.createIcons();
  


        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                init: function () {
                    updateSlideOpacity(this);
                },
                slideChange: function () {
                    updateSlideOpacity(this);
                },
            },
        });

        function updateSlideOpacity(swiper) {
            swiper.slides.forEach((slide, index) => {
                if (index === swiper.activeIndex) {
                    slide.style.opacity = '1';
                } else {
                    slide.style.opacity = '0.4';
                }
                slide.style.transition = 'opacity 0.3s ease';
            });
        }

        function scrollToSection(id) {
            const container = document.getElementById('scroll-container');
            const element = document.getElementById(id);
            if (element && container) {
                const topPos = element.offsetTop;
                container.scrollTo({ top: topPos, behavior: 'smooth' });
            }
        }

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }
        menuBtn.addEventListener('click', toggleMenu);

        const themeToggleBtn = document.getElementById('theme-toggle');
        themeToggleBtn.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const scrollContainer = document.getElementById('scroll-container');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1, root: scrollContainer });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<title>Custom Radio Component</title>


<style id="all-fonts-style-font-geist">
    .font-geist {
      font-family: 'Geist', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-roboto">
    .font-roboto {
      font-family: 'Roboto', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-montserrat">
    .font-montserrat {
      font-family: 'Montserrat', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-poppins">
    .font-poppins {
      font-family: 'Poppins', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-playfair">
    .font-playfair {
      font-family: 'Playfair Display', serif !important;
    }
  </style>
<style id="all-fonts-style-font-instrument-serif">
    .font-instrument-serif {
      font-family: 'Instrument Serif', serif !important;
    }
  </style>
<style id="all-fonts-style-font-merriweather">
    .font-merriweather {
      font-family: 'Merriweather', serif !important;
    }
  </style>
<style id="all-fonts-style-font-bricolage">
    .font-bricolage {
      font-family: 'Bricolage Grotesque', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-jakarta">
    .font-jakarta {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-manrope">
    .font-manrope {
      font-family: 'Manrope', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-space-grotesk">
    .font-space-grotesk {
      font-family: 'Space Grotesk', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-work-sans">
    .font-work-sans {
      font-family: 'Work Sans', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-pt-serif">
    .font-pt-serif {
      font-family: 'PT Serif', serif !important;
    }
  </style>
<style id="all-fonts-style-font-geist-mono">
    .font-geist-mono {
      font-family: 'Geist Mono', monospace !important;
    }
  </style>
<style id="all-fonts-style-font-space-mono">
    .font-space-mono {
      font-family: 'Space Mono', monospace !important;
    }
  </style>
<style id="all-fonts-style-font-quicksand">
    .font-quicksand {
      font-family: 'Quicksand', sans-serif !important;
    }
  </style>
<style id="all-fonts-style-font-nunito">
    .font-nunito {
      font-family: 'Nunito', sans-serif !important;
    }
  </style>
<div className="flex fixed top-0 left-0 bg-gray-900 w-full h-screen mt-0 mr-0 mb-0 ml-0 items-center justify-center" style={{background: '#181c21'}}>
<div className="overflow-hidden flex relative w-full h-full items-center justify-center" style={{background: 'repeating-linear-gradient(135deg, #232526 0px, #232526 60px, #23252699 70px, #414345 130px)'}}>
<svg className="absolute z-10 animate-cube-move opacity-70 w-[100px] h-[100px]" data-icon-replaced="true" height="100%" preserveaspectratio="xMidYMid slice" strokeWidth="2" style={{width: '100px', height: '100px', left: '-30%', top: '-20%', color: 'rgb(0, 0, 0)'}} viewbox="0 0 120 104" width="100%">
<defs>
<lineargradient id="cube-dark" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#232526"></stop>
<stop offset="100%" stop-color="#414345"></stop>
</lineargradient>
<lineargradient id="cube-mid" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" stop-color="#4b6cb7"></stop>
<stop offset="100%" stop-color="#182848"></stop>
</lineargradient>
<lineargradient id="cube-light" x1="100%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#a8edea"></stop>
<stop offset="100%" stop-color="#fed6e3"></stop>
</lineargradient>
</defs>
</svg>

</div>
</div>
<style>
    .radio-container {
      --main-color: #4f9eff;
      --main-color-opacity: #4f9eff1c;
    }

    .radio-container .glider::before {
      content: "";
      position: absolute;
      height: 60%;
      width: 300%;
      top: 50%;
      transform: translateY(-50%);
      background: var(--main-color);
      filter: blur(10px);
    }

    .radio-container .glider::after {
      content: "";
      position: absolute;
      left: 0;
      height: 100%;
      width: 150px;
      background: linear-gradient(90deg, var(--main-color-opacity) 0%, rgba(0, 0, 0, 0) 100%);
    }

    .radio-container input:checked+label {
      color: #4f9eff;
    }

    .radio-container input:nth-of-type(1):checked~.glider-container .glider {
      transform: translateY(0);
    }

    .radio-container input:nth-of-type(2):checked~.glider-container .glider {
      transform: translateY(100%);
    }

    .radio-container input:nth-of-type(3):checked~.glider-container .glider {
      transform: translateY(200%);
    }
  </style>

</div>
<main className="relative w-full max-w-[1400px] bg-white dark:bg-dark-card dark:border dark:border-dark-border transition-colors duration-500 rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden h-[95vh] sm:h-[90vh] flex flex-col">
<nav className="w-full px-6 py-6 md:px-10 flex items-center justify-between bg-white/90 dark:bg-dark-card/90 backdrop-blur-md z-50 absolute top-0 left-0 right-0 border-b border-transparent transition-colors duration-500">
<a className="text-xl font-bold tracking-tight text-off-black dark:text-white z-50 relative transition-colors" href="#">
                alex.design
            </a>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-sm">
<button className="text-muted-gray hover:text-off-black dark:text-neutral-400 dark:hover:text-white transition-colors" onclick="scrollToSection('work')">Work</button>
<button className="text-muted-gray hover:text-off-black dark:text-neutral-400 dark:hover:text-white transition-colors" onclick="scrollToSection('philosophy')">Philosophy</button>
<button className="text-muted-gray hover:text-off-black dark:text-neutral-400 dark:hover:text-white transition-colors" onclick="scrollToSection('contact-form')">Contact</button>
</div>
<div className="flex items-center gap-3 z-10">
<button className="p-2.5 rounded-full text-muted-gray hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-dark-border transition-colors" id="theme-toggle">
<svg aria-hidden="true" data-icon="lucide:sun" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<svg aria-hidden="true" data-icon="lucide:moon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="hidden sm:inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-off-black rounded-full hover:bg-neutral-800 dark:bg-white dark:text-off-black dark:hover:bg-neutral-200 transition-transform active:scale-95" onclick="scrollToSection('contact-form')">
                    Get in touch
                </button>
<button className="md:hidden p-2 text-off-black dark:text-white" id="menu-btn">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>
<div className="fixed inset-0 bg-white dark:bg-dark-bg z-40 transform translate-x-full transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8" id="mobile-menu">
<button className="text-3xl font-bold text-off-black dark:text-white" onclick="scrollToSection('work'); toggleMenu()">Work</button>
<button className="text-3xl font-bold text-off-black dark:text-white" onclick="scrollToSection('philosophy'); toggleMenu()">Philosophy</button>
<button className="text-3xl font-bold text-off-black dark:text-white" onclick="scrollToSection('contact-form'); toggleMenu()">Contact</button>
</div>
<div className="flex-1 overflow-y-auto hide-scrollbar scroll-smooth" id="scroll-container">
<section className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-6 min-h-[80vh]">
<div className="reveal mb-8 px-4 py-2 rounded-full border border-neutral-100 dark:border-dark-border bg-neutral-50 dark:bg-dark-border/50 inline-flex items-center gap-2.5 transition-colors">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
<span className="text-xs font-bold text-muted-gray dark:text-neutral-300 tracking-wider uppercase">Open for new projects</span>
</div>
<h1 className="reveal text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-off-black dark:text-white max-w-5xl mx-auto leading-[1.1] mb-8 transition-colors">
                    Smarter software <br/>
                    starts with <span className="text-neutral-300 dark:text-neutral-700">clarity.</span>
</h1>
<p className="reveal sm:text-xl text-muted-gray dark:text-neutral-400 leading-relaxed transition-colors text-lg font-medium max-w-2xl mr-auto mb-12 ml-auto">
                    A product engineer focused on minimalist interfaces and scalable systems. 
                    I build tools that feel reliable, smart, and pleasant to use.
                </p>
<div className="reveal flex flex-col sm:flex-row items-center gap-4 mb-20">
<button className="px-8 py-4 rounded-full bg-off-black text-white font-bold text-base hover:bg-neutral-800 dark:bg-white dark:text-off-black dark:hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-neutral-200 dark:shadow-none" onclick="scrollToSection('work')">
                        View Selected Work
                    </button>
<button className="px-8 py-4 rounded-full border border-neutral-200 text-off-black font-bold text-base hover:bg-neutral-50 dark:border-dark-border dark:text-white dark:hover:bg-dark-border transition-colors flex items-center gap-2 group" onclick="scrollToSection('philosophy')">
                        Read Philosophy
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="w-full max-w-4xl mx-auto reveal relative">
<svg className="w-full h-auto" fill="none" viewbox="0 0 800 350" xmlns="http://www.w3.org/2000/svg">
<path className="stroke-off-black dark:stroke-white transition-colors" d="M50 300 H 750" strokeLinecap="round" strokeWidth="2"></path>
<g className="animate-float" style={{animationDelay: '0s'}}>
<path className="stroke-off-black dark:stroke-white transition-colors" d="M180 300 C 180 220, 240 220, 240 300" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="stroke-off-black dark:stroke-white transition-colors" cx="210" cy="200" r="25" strokeWidth="2.5"></circle>
<path className="stroke-off-black dark:stroke-white transition-colors" d="M240 260 Q 280 260 300 280" strokeLinecap="round" strokeWidth="2.5"></path>
</g>
<g className="animate-float" style={{animationDelay: '1s'}}>
<path className="stroke-off-black dark:stroke-white transition-colors" d="M620 300 C 620 220, 560 220, 560 300" strokeLinecap="round" strokeWidth="2.5"></path>
<circle className="stroke-off-black dark:stroke-white transition-colors" cx="590" cy="200" r="25" strokeWidth="2.5"></circle>
<path className="stroke-off-black dark:stroke-white transition-colors" d="M650 300 L650 285 Q 650 280 655 280 L665 280 Q 670 280 670 285 L670 300" strokeWidth="2"></path>
</g>
<g transform="translate(325, 210)">
<rect className="stroke-off-black dark:stroke-white transition-colors" height="90" rx="4" strokeWidth="2.5" width="150" x="0" y="0"></rect>
<path className="stroke-off-black dark:stroke-white transition-colors" d="M-15 90 H 165" strokeLinecap="round" strokeWidth="2.5"></path>
<path className="stroke-neutral-300 dark:stroke-neutral-600 transition-colors" d="M20 25 H 80" strokeLinecap="round" strokeWidth="2.5"></path>
<path className="stroke-neutral-300 dark:stroke-neutral-600 transition-colors" d="M20 40 H 110" strokeLinecap="round" strokeWidth="2.5"></path>
<path className="stroke-neutral-300 dark:stroke-neutral-600 transition-colors" d="M20 55 H 60" strokeLinecap="round" strokeWidth="2.5"></path>
</g>
<circle className="fill-neutral-200 dark:fill-neutral-700 animate-pulse" cx="300" cy="150" r="4"></circle>
<circle className="fill-neutral-200 dark:fill-neutral-700 animate-pulse" cx="500" cy="130" r="6" style={{animationDelay: '0.5s'}}></circle>
</svg>
<p className="text-center text-xs font-bold text-neutral-300 dark:text-neutral-700 mt-6 tracking-widest uppercase">Fig 1. Collaborative Systems</p>
</div>
</section>
<section className="py-32 bg-neutral-50 dark:bg-[#121212] border-t border-neutral-100 dark:border-dark-border transition-colors overflow-hidden" id="work">
<div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 mb-16 reveal">
<div className="flex flex-col sm:flex-row justify-between items-center sm:items-end text-center sm:text-left">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-off-black dark:text-white mb-6">Selected Work</h2>
<p className="text-muted-gray dark:text-neutral-400 leading-relaxed font-medium">
                                Swipe to explore recent projects.
                            </p>
</div>
</div>
</div>
<div className="swiper mySwiper reveal swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress">
<div aria-live="polite" className="swiper-wrapper pb-12" id="swiper-wrapper-996d1ba0b3090fe6" style={{cursor: 'grab', transform: 'translate3d(163.5px, 0px, 0px)'}}>
<div aria-label="1 / 3" className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active" role="group" style={{transform: 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)', zIndex: '1', opacity: '1'}}>
<div className="bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-neutral-100 dark:border-dark-border shadow-lg h-full flex flex-col">
<div className="h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-dark-border dark:to-[#1a1a1a] relative">
<div className="absolute inset-0 flex items-center justify-center opacity-50">
<svg aria-hidden="true" data-icon="lucide:image" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</div>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-bold text-off-black dark:text-white mb-3">Cipher Social</h3>
<p className="text-muted-gray dark:text-neutral-400 mb-6 line-clamp-3">An anonymous social media platform built exclusively for students, enabling secure discussions.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">Next.js</span>
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">TypeScript</span>
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">Prisma</span>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-off-black text-white font-bold text-sm hover:bg-neutral-800 dark:bg-white dark:text-off-black dark:hover:bg-neutral-200 transition-colors">
<svg aria-hidden="true" data-icon="lucide:github" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg> Code
                                        </button>
<button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-off-black font-bold text-sm hover:bg-neutral-50 dark:border-dark-border dark:text-white dark:hover:bg-dark-border transition-colors">
<svg aria-hidden="true" data-icon="lucide:external-link" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Demo
                                        </button>
</div>
</div>
</div>
</div>
<div aria-label="2 / 3" className="swiper-slide swiper-slide-visible swiper-slide-next" role="group" style={{transform: 'translate3d(0px, 0px, -200px) rotateX(0deg) rotateY(0deg) scale(1)', zIndex: '0', opacity: '0.4'}}>
<div className="bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-neutral-100 dark:border-dark-border shadow-lg h-full flex flex-col">
<div className="h-64 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-[#1e1e2e] dark:to-[#1a1a1a] relative">
<div className="absolute inset-0 flex items-center justify-center opacity-50">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-bold text-off-black dark:text-white mb-3">Linear Sync Engine</h3>
<p className="text-muted-gray dark:text-neutral-400 mb-6 line-clamp-3">A high-performance real-time synchronization engine handling thousands of concurrent updates.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">Rust</span>
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">WebSockets</span>
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">Redis</span>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-off-black text-white font-bold text-sm hover:bg-neutral-800 dark:bg-white dark:text-off-black dark:hover:bg-neutral-200 transition-colors">
<svg aria-hidden="true" data-icon="lucide:github" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg> Code
                                        </button>
<button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-off-black font-bold text-sm hover:bg-neutral-50 dark:border-dark-border dark:text-white dark:hover:bg-dark-border transition-colors">
<svg aria-hidden="true" data-icon="lucide:external-link" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Article
                                        </button>
</div>
</div>
</div>
</div>
<div aria-label="3 / 3" className="swiper-slide" role="group" style={{transform: 'translate3d(0px, 0px, -400px) rotateX(0deg) rotateY(0deg) scale(1)', zIndex: '-1', opacity: '0.4'}}>
<div className="bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-neutral-100 dark:border-dark-border shadow-lg h-full flex flex-col">
<div className="h-64 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-[#13231b] dark:to-[#1a1a1a] relative">
<div className="absolute inset-0 flex items-center justify-center opacity-50">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-bold text-off-black dark:text-white mb-3">Untitled Design System</h3>
<p className="text-muted-gray dark:text-neutral-400 mb-6 line-clamp-3">A comprehensive, accessible component library and design token system.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">React</span>
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">Tailwind</span>
<span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-border text-xs font-bold text-muted-gray dark:text-neutral-300">Storybook</span>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-off-black text-white font-bold text-sm hover:bg-neutral-800 dark:bg-white dark:text-off-black dark:hover:bg-neutral-200 transition-colors">
<svg aria-hidden="true" data-icon="lucide:figma" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"></path></g></svg> Figma
                                        </button>
<button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-off-black font-bold text-sm hover:bg-neutral-50 dark:border-dark-border dark:text-white dark:hover:bg-dark-border transition-colors">
<svg aria-hidden="true" data-icon="lucide:external-link" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Docs
                                        </button>
</div>
</div>
</div>
</div>
</div>
<div aria-controls="swiper-wrapper-996d1ba0b3090fe6" aria-disabled="false" aria-label="Next slide" className="swiper-button-next after:hidden" role="button" tabindex="0"><svg aria-hidden="true" data-icon="lucide:chevron-right" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div aria-controls="swiper-wrapper-996d1ba0b3090fe6" aria-disabled="true" aria-label="Previous slide" className="swiper-button-prev after:hidden swiper-button-disabled" role="button" tabindex="-1"><svg aria-hidden="true" data-icon="lucide:chevron-left" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span aria-current="true" aria-label="Go to slide 1" className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" tabindex="0"></span><span aria-label="Go to slide 2" className="swiper-pagination-bullet" role="button" tabindex="0"></span><span aria-label="Go to slide 3" className="swiper-pagination-bullet" role="button" tabindex="0"></span></div>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span></div>
</section>
<section className="px-6 sm:px-12 lg:px-24 py-16 sm:py-32 bg-white dark:bg-dark-card transition-colors" id="philosophy">
<div className="max-w-4xl mx-auto text-center reveal">
<span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-600 uppercase mb-6 block">Philosophy</span>
<h2 className="text-4xl md:text-5xl font-extrabold text-off-black dark:text-white mb-16 tracking-tight leading-tight">
                        Complexity should be <br/> the engineer's burden, not the user's.
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
<div className="group">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-dark-bg border border-neutral-100 dark:border-dark-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:focus" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path></g></svg>
</div>
<h3 className="text-lg font-bold text-off-black dark:text-white mb-3">Focus</h3>
<p className="text-sm font-medium text-muted-gray dark:text-neutral-400 leading-relaxed">
                                Every element on the screen must fight for its existence. If it doesn't add value, it adds noise.
                            </p>
</div>
<div className="group">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-dark-bg border border-neutral-100 dark:border-dark-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:type" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-bold text-off-black dark:text-white mb-3">Typography</h3>
<p className="text-sm font-medium text-muted-gray dark:text-neutral-400 leading-relaxed">
                                Content is interface. Good typography solves 90% of design problems before they happen.
                            </p>
</div>
<div className="group">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-dark-bg border border-neutral-100 dark:border-dark-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:repeat" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m17 2l4 4l-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></g></svg>
</div>
<h3 className="text-lg font-bold text-off-black dark:text-white mb-3">Iteration</h3>
<p className="text-sm font-medium text-muted-gray dark:text-neutral-400 leading-relaxed">
                                Great software is never finished. It evolves through constant feedback and refinement.
                            </p>
</div>
</div>
</div>
</section>
<section className="px-6 sm:px-12 lg:px-24 py-24 bg-neutral-50 dark:bg-[#0A0A0A] border-t border-neutral-100 dark:border-dark-border transition-colors" id="contact-form">
<div className="max-w-6xl mx-auto reveal">
<div className="bg-white dark:bg-[#121212] rounded-3xl p-8 md:p-16 border border-neutral-100 dark:border-dark-border shadow-2xl shadow-neutral-100 dark:shadow-none grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 transition-colors">
<div className="flex flex-col justify-center">
<span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-4 block">Get in Touch</span>
<h2 className="text-3xl md:text-5xl font-extrabold text-off-black dark:text-white tracking-tight mb-6">
                                Let's start a <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-off-black dark:from-neutral-500 dark:to-white">conversation.</span>
</h2>
<p className="text-muted-gray dark:text-neutral-400 text-lg leading-relaxed mb-10">
                                Whether you have a project in mind or just want to chat about technology, I'm always open to new opportunities.
                            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-xl bg-neutral-50 dark:bg-dark-bg border border-neutral-100 dark:border-dark-border text-off-black dark:text-white">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Email</p>
<a className="text-off-black dark:text-white font-semibold hover:text-neutral-600 transition-colors" href="mailto:hello@alex.dev">hello@alex.dev</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-xl bg-neutral-50 dark:bg-dark-bg border border-neutral-100 dark:border-dark-border text-off-black dark:text-white">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Location</p>
<p className="text-off-black dark:text-white font-semibold">San Francisco, CA</p>
</div>
</div>
</div>
</div>
<div>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-bold text-muted-gray dark:text-neutral-500 uppercase tracking-wider">Name</label>
<input className="w-full bg-neutral-50 dark:bg-dark-bg border border-neutral-200 dark:border-dark-border rounded-xl px-4 py-3.5 text-sm font-medium text-off-black dark:text-white focus:outline-none focus:ring-2 focus:ring-off-black dark:focus:ring-white transition-all placeholder:text-neutral-400" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-muted-gray dark:text-neutral-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-neutral-50 dark:bg-dark-bg border border-neutral-200 dark:border-dark-border rounded-xl px-4 py-3.5 text-sm font-medium text-off-black dark:text-white focus:outline-none focus:ring-2 focus:ring-off-black dark:focus:ring-white transition-all placeholder:text-neutral-400" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-muted-gray dark:text-neutral-500 uppercase tracking-wider">Subject</label>
<input className="w-full bg-neutral-50 dark:bg-dark-bg border border-neutral-200 dark:border-dark-border rounded-xl px-4 py-3.5 text-sm font-medium text-off-black dark:text-white focus:outline-none focus:ring-2 focus:ring-off-black dark:focus:ring-white transition-all placeholder:text-neutral-400" placeholder="Project Inquiry" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-muted-gray dark:text-neutral-500 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-neutral-50 dark:bg-dark-bg border border-neutral-200 dark:border-dark-border rounded-xl px-4 py-3.5 text-sm font-medium text-off-black dark:text-white focus:outline-none focus:ring-2 focus:ring-off-black dark:focus:ring-white transition-all placeholder:text-neutral-400 resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<div className="flex items-center gap-2 pt-2">
<input className="w-4 h-4 rounded border-gray-300 text-off-black focus:ring-off-black" id="terms" type="checkbox"/>
<label className="text-xs text-muted-gray dark:text-neutral-500" htmlFor="terms">I agree to the <a className="underline hover:text-off-black dark:hover:text-white" href="#">Terms &amp; Conditions</a></label>
</div>
<button className="w-full mt-4 px-8 py-4 rounded-full bg-off-black text-white font-bold text-base hover:bg-neutral-800 dark:bg-white dark:text-off-black dark:hover:bg-neutral-200 transition-all active:scale-95 flex items-center justify-center gap-2 group" type="button">
                                    Send Message
                                    <svg aria-hidden="true" data-icon="lucide:send" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>
<footer className="px-6 sm:px-12 lg:px-24 py-8 bg-white dark:bg-dark-card border-t border-neutral-100 dark:border-dark-border transition-colors">
<div className="max-w-6xl mx-auto reveal">
<div className="flex flex-col lg:flex-row justify-between items-center gap-8">
<div className="text-center lg:text-left">
<h2 className="text-xl font-extrabold tracking-tight text-off-black dark:text-white uppercase mb-1">
                    alex.design
                </h2>
<p className="text-xs text-muted-gray dark:text-neutral-500 font-medium">
                    Building the digital future.
                </p>
</div>
<div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs font-bold text-muted-gray dark:text-neutral-400 uppercase tracking-wider">
<a className="hover:text-off-black dark:hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-off-black dark:hover:text-white transition-colors" href="#work">Projects</a>
<a className="hover:text-off-black dark:hover:text-white transition-colors" href="#contact-form">Contact</a>
<a className="hover:text-off-black dark:hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-off-black dark:hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex items-center gap-4">
<p className="text-[10px] text-neutral-400 dark:text-neutral-600 font-medium">
                    © 2026 Alex Dev.
                </p>
<button aria-label="Back to top" className="p-2 rounded-full bg-neutral-100 dark:bg-dark-border hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors group" onclick="document.getElementById('scroll-container').scrollTo({top:0, behavior:'smooth'})">
<svg aria-hidden="true" data-icon="lucide:arrow-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l7-7l7 7m-7 7V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</footer>
</div>
</main>



    </>
  );
}
