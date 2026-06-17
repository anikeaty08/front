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



/*
Sequence animation on scroll when visible. Requires Keyframe animation. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });



    (function () {
    const el = document.getElementById('marketChart');
    if (!el || !window.Chart) return;
    const ctx = el.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'Valuation',
          data: [12, 18, 21, 24, 30],
          borderColor: 'rgba(148, 163, 184, 0.9)',
          backgroundColor: 'rgba(148, 163, 184, 0.15)',
          fill: true,
          tension: 0.35,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(2,6,23,0.9)',
            titleColor: '#fff',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
            ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Geist' } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
            ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Geist' } }
          }
        }
      }
    });
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  })();
  


    // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<div className="aura-background-component z-10 mix-blend-screen w-full h-screen absolute top-0"><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="1560" style={{width: '100%', height: '100%'}} width="2144"></canvas></div></div>
<div className="relative h-screen overflow-hidden">

<div className="pointer-events-none absolute inset-0 z-0" style={{}}>

<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[50%] w-px bg-gradient-to-b from-transparent via-white/8 to-transparent">
</div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[87.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>

<div className="absolute inset-x-0 top-[20%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[40%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[60%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[80%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>

<img alt="" className="pointer-events-none w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92a4234b-15fa-4d5f-8821-48d3f9f7e2f1_3840w.jpg" style={{}}/>

<div className="absolute top-0 right-0 bottom-0 left-0" style={{}}></div>

<header className="z-10 border-white/5 border-b relative" style={{}}>
<div className="flex md:px-8 max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">

<div className="flex md:gap-6 ring-white/5 ring-1 [animation:fadeSlideIn_1s_ease-out_0.1s_both] rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-4 gap-y-4 items-center">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(nysteria%20logo-non-saturate.png)] bg-cover rounded-full" href="/#">
<span className="text-3xl font-medium text-white tracking-tight font-geist drop-shadow-sm">nysteria:</span>
</a>
<nav className="hidden md:flex gap-2 gap-x-2 gap-y-2 items-center">
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#solutions">
              Solutions
            </a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#showcase">
              Showcase
            </a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#resources">
              Resources
            </a>
</nav>
</div>

<div className="flex ring-white/5 ring-1 rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-2 gap-y-2 items-center">
<a className="hidden sm:inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#start">
            Get Started
          </a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/15 hover:ring-white/25 ring-white/15 ring-1 [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-sm font-medium text-white/90 font-geist bg-white/10 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="#">
            Contact
          </a>
</div>
</div>
<div className="" id="wrapper">
<div className="gradient-blur" style={{}}>
<div className=""></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style className="">
          .gradient-blur {
            position: fixed;
            z-index: 5;
            inset: auto 0 0 0;
            height: 65%;
            pointer-events: none;
          }

          .gradient-blur>div,
          .gradient-blur::before,
          .gradient-blur::after {
            position: absolute;
            inset: 0;
          }

          .gradient-blur::before {
            content: "";
            z-index: 1;
            backdrop-filter: blur(0.5px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 1) 12.5%,
                rgba(0, 0, 0, 1) 25%,
                rgba(0, 0, 0, 0) 37.5%);
          }

          .gradient-blur>div:nth-of-type(1) {
            z-index: 2;
            backdrop-filter: blur(1px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 12.5%,
                rgba(0, 0, 0, 1) 25%,
                rgba(0, 0, 0, 1) 37.5%,
                rgba(0, 0, 0, 0) 50%);
          }

          .gradient-blur>div:nth-of-type(2) {
            z-index: 3;
            backdrop-filter: blur(2px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 25%,
                rgba(0, 0, 0, 1) 37.5%,
                rgba(0, 0, 0, 1) 50%,
                rgba(0, 0, 0, 0) 62.5%);
          }

          .gradient-blur>div:nth-of-type(3) {
            z-index: 4;
            backdrop-filter: blur(4px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 37.5%,
                rgba(0, 0, 0, 1) 50%,
                rgba(0, 0, 0, 1) 62.5%,
                rgba(0, 0, 0, 0) 75%);
          }

          .gradient-blur>div:nth-of-type(4) {
            z-index: 5;
            backdrop-filter: blur(8px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 1) 62.5%,
                rgba(0, 0, 0, 1) 75%,
                rgba(0, 0, 0, 0) 87.5%);
          }

          .gradient-blur>div:nth-of-type(5) {
            z-index: 6;
            backdrop-filter: blur(16px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 62.5%,
                rgba(0, 0, 0, 1) 75%,
                rgba(0, 0, 0, 1) 87.5%,
                rgba(0, 0, 0, 0) 100%);
          }

          .gradient-blur>div:nth-of-type(6) {
            z-index: 7;
            backdrop-filter: blur(32px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 75%,
                rgba(0, 0, 0, 1) 87.5%,
                rgba(0, 0, 0, 1) 100%);
          }

          .gradient-blur::after {
            content: "";
            z-index: 8;
            backdrop-filter: blur(64px);
            mask: linear-gradient(to bottom,
                rgba(0, 0, 0, 0) 87.5%,
                rgba(0, 0, 0, 1) 100%);
          }
        </style>
</div>
</header>

<main className="z-10 flex h-[calc(100vh-80px)] relative items-end">
<section className="md:px-8 md:pb-16 lg:pb-20 w-full max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">

<div className="mb-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-12 md:gap-6 lg:gap-10 gap-x-8 gap-y-8 items-center">

<div className="md:col-span-5 lg:col-span-5 relative">
<div className="inline-flex text-xs font-medium text-white/80 font-geist bg-white/5 ring-white/10 ring-1 rounded-full mb-5 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-white/80" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Next-Gen AI Solutions
            </div>
<h1 className="leading-tight sm:text-5xl md:text-5xl lg:text-6xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-4xl tracking-tighter font-geist">
              Transform Your Business
              <span className="block bg-clip-text text-transparent tracking-tighter font-geist bg-gradient-to-r from-white via-white to-white/70">with Intelligent AI</span>
</h1>
</div>

<div className="hidden md:block md:col-span-1 lg:col-span-1 relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2">
</div>
</div>

<div className="md:col-span-4 lg:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.3s_both] relative">
<p className="leading-relaxed md:text-lg text-base text-white/70 font-geist">We help small and medium-sized businesses across Jacksonville design and deploy practical AI solutions that supercharge operations, streamline workflows, and multiply team efficiency.</p>
<div className="border-white/10 border-t mt-6 pt-6">
<div className="flex gap-4 text-sm text-white/50 gap-x-4 gap-y-4 items-center">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap opacity-50" data-icon-replaced="true" data-lucide="zap" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist">Fast turnaround</span>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-1 relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2">
</div>
</div>

<div className="md:col-span-12 lg:col-span-2 relative">
<div className="flex flex-row lg:flex-col gap-x-3 gap-y-3">
<a className="inline-flex items-center justify-center gap-2 transition hover:bg-white/15 hover:ring-white/25 whitespace-nowrap text-sm font-medium text-white/90 font-geist bg-white/10 ring-white/15 ring-1 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both]" href="#">Case
                Studies<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="inline-flex items-center justify-center gap-2 ring-1 ring-white/20 transition hover:bg-neutral-100 whitespace-nowrap [animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-neutral-900 font-geist bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4" href="#">Consultation<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg></a>
</div>
</div>
</div>

</section>
</main>

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<section className="overflow-hidden lg:py-20 pt-8 pb-8 relative" id="solutions">

<div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-y-0 left-[15%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[35%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[65%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[85%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-x-0 top-[25%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[50%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[75%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="md:px-8 flex flex-col h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex-1 flex items-center">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full gap-x-6 gap-y-6">

<div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
<svg className="lucide lucide-activity w-3.5 h-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
      Real-time metrics
    </div>
<div className="mt-4 space-y-3 flex-1 flex flex-col justify-between">
<div className="">
<p className="md:text-lg leading-relaxed text-base text-slate-300 font-geist">
          AI market projected to grow by
          <span className="text-orange-300 font-normal">59%</span> by 2025
        </p>

<div className="mt-4 rounded-xl bg-black/20 ring-1 ring-white/10 p-3">
<div className="flex gap-2 h-24 gap-x-2 gap-y-2 items-end">
<div className="bg-white/10 w-4 rounded" style={{height: '28px'}}></div>
<div className="bg-white/10 w-4 rounded" style={{height: '46px'}}></div><div className="bg-white/10 w-4 rounded" style={{height: '46px'}}></div>
<div className="bg-white/10 w-4 rounded" style={{height: '54px'}}></div>
<div className="bg-white/10 w-4 rounded" style={{height: '64px'}}></div><div className="bg-orange-400/70 w-4 rounded" style={{height: '88px'}}></div>
<div className="bg-orange-400/80 w-4 rounded" style={{height: '96px'}}></div><div className="bg-orange-400/80 w-4 rounded" style={{height: '96px'}}></div><div className="bg-orange-400/70 w-4 rounded" style={{height: '88px'}}></div><div className="bg-white/10 w-4 rounded" style={{height: '64px'}}></div><div className="bg-white/10 w-4 rounded" style={{height: '54px'}}></div><div className="bg-white/10 w-4 rounded" style={{height: '28px'}}></div><div className="bg-white/10 w-4 rounded" style={{height: '28px'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-400 font-geist">
<span>2021</span>
<span className="">2025</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="text-4xl md:text-5xl font-normal tracking-tighter font-geist">$40B</div>
<p className="text-slate-400 text-sm font-geist mt-1">Expected valuation</p>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-400 font-geist">
<svg className="w-3.5 h-3.5 text-orange-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 5 5L20 7"></path>
</svg>
<span className="">Forecasted growth trajectory</span>
</div>
</div>
</div>
</div>

<div className="overflow-hidden md:p-4 flex flex-col bg-gradient-to-b from-white/10 to-white/5 h-full ring-white/10 ring-1 rounded-3xl pt-3 pr-3 pb-3 pl-3 relative backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 flex-1">
<img alt="Face scan" className="min-h-[256px] md:min-h-[320px] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/863c6d3d-359c-471a-8fd8-543677b59c4c_800w.webp"/>
<div className="absolute top-3 md:top-4 left-4 right-4 flex items-center justify-between">
<span className="md:text-base text-sm font-normal text-slate-100 tracking-tighter font-geist">3X</span>
<span className="text-[11px] md:text-xs text-slate-300/80 font-geist">More leads captured</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
<div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
<span className="text-[10px] text-slate-200 font-geist">Live</span>
</div>
</div>
</div>
<div className="relative px-2 md:px-1 pt-4">
<h3 className="md:text-xl text-lg font-normal tracking-tighter font-geist">Website That Responds Like a Real Person</h3>
<p className="text-sm text-slate-400 font-geist">Your site becomes a 24/7 sales rep.</p>
</div>
</div>

<div className="md:p-6 flex flex-col bg-slate-900/60 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate">
<div className="flex items-start justify-between gap-4">
<p className="md:text-lg leading-relaxed text-base text-slate-300 font-geist">Cut <span className="font-normal text-orange-300">internal Delays </span> with automated workflows</p>
</div>
<div className="mt-6 flex-1 flex flex-col justify-between">
<div className="">
<p className="text-sm text-slate-400 font-geist">Delivery outcomes</p>
<div className="mt-4 grid grid-cols-3 gap-4">
<div className="">
<p className="text-xs text-slate-300 font-geist">faster tasks</p>
<div className="md:text-3xl text-2xl font-normal tracking-tighter font-geist">68%</div>
</div>
<div className="">
<p className="text-slate-300 text-xs font-geist">In Progress</p>
<div className="text-2xl md:text-3xl font-normal tracking-tighter font-geist">24%</div>
</div>
<div className="">
<p className="text-slate-300 text-xs font-geist">Failed</p>
<div className="text-2xl md:text-3xl font-normal tracking-tighter font-geist">13%</div>
</div>
</div>

<div className="mt-5 space-y-3">

<div className="relative h-5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="bg-orange-400/80 absolute top-0 bottom-0 left-0" style={{width: '63%'}}></div>
<div className="absolute left-[63%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow">
</div>
</div>

<div className="relative h-5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-red-500/80" style={{width: '24%'}}></div>
<div className="absolute left-[24%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow">
</div>
</div>

<div className="relative h-5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-slate-300/40" style={{width: '13%'}}></div>
<div className="absolute left-[13%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/80 shadow">
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5">
<p className="text-xs text-slate-400 font-geist"><span className="font-normal text-orange-300">+72%</span> teams move faster when repetitive steps are automated.</p>
</div>
</div>
</div>

<div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.35s_both] animate">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
<svg className="lucide lucide-smile w-3.5 h-3.5" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
      Customer satisfaction
    </div>
<div className="mt-4 flex-1 flex flex-col items-center justify-center">
<div className="relative w-24 h-24">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(rgba(163,230,53,0.85) 0% 86%, rgba(255,255,255,0.12) 86% 100%)'}}>
</div>
<div className="absolute inset-2 rounded-full bg-black/20 ring-1 ring-white/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-2xl font-normal tracking-tighter font-geist">4.8</div>
</div>
</div>
<p className="mt-3 text-slate-400 text-sm font-geist">CSAT • last 90 days</p>
<div className="mt-6 w-full pt-4 border-t border-white/5">
<div className="grid grid-cols-2 gap-4">
<div className="text-center">
<div className="text-lg font-normal text-slate-300 font-geist">1,240</div>
<p className="text-xs text-slate-400 font-geist">Responses</p>
</div>
<div className="text-center">
<div className="text-lg font-normal text-slate-300 font-geist">+0.3</div>
<p className="text-xs text-slate-400 font-geist">vs. Last Period</p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
      Deployment speed
    </div>
<div className="mt-4 flex-1 flex flex-col justify-between">
<div className="">
<div className="md:text-5xl text-4xl font-normal tracking-tighter font-geist">2 Seconds</div>
<p className="text-sm text-slate-400 font-geist">Teams Get Answers in Seconds</p>
<div className="mt-5 grid grid-cols-3 items-center gap-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-orange-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-slate-300 font-geist">Prompted Wikis</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-orange-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-slate-300 font-geist">Documents</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-orange-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-slate-300 font-geist">Prod</span>
</div>
</div>
</div>
<div className="mt-5 pt-4 border-t border-white/5">
<div className="grid grid-cols-2 gap-3">
<div className="">
<div className="text-lg font-normal text-slate-300 font-geist">14 days</div>
<p className="text-xs text-slate-400 font-geist">to launch your first working automation.</p>
</div>
<div className="">
<div className="text-lg font-normal text-slate-300 font-geist">24/7</div>
<p className="text-xs text-slate-400 font-geist">Support coverage</p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 flex flex-col h-full animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.45s_both] animate">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist w-fit">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
      Model latency
    </div>
<div className="mt-4 space-y-3 flex-1 flex flex-col justify-between">
<div className="">
<div className="text-4xl md:text-5xl font-normal tracking-tighter font-geist">120ms</div>
<p className="text-slate-400 text-sm font-geist">p95 response time</p>

<div className="mt-4">
<div className="relative h-3 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-400/80 to-red-500/80" style={{width: '60%'}}>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-400 font-geist">
<span>0ms</span>
<span className="">200ms</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="grid grid-cols-2 gap-3">
<div className="">
<div className="text-lg font-normal text-slate-300 font-geist">99.9%</div>
<p className="text-xs text-slate-400 font-geist">Uptime SLA</p>
</div>
<div className="">
<div className="text-lg font-normal text-slate-300 font-geist">50ms</div>
<p className="text-xs text-slate-400 font-geist">with fast response across all channels.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="z-10 fade-in fade-in-delay-4 sm:pb-12 sm:pt-12 pt-8 pb-8 relative animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Trusted by teams at</p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>
</div>
</div>
</div>
<style>
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-100%);
            }
          }

          .ticker-track {
            animation: ticker 40s linear infinite;
            width: calc(200% + 16px);
          }

          .ticker-track:hover {
            animation-play-state: paused;
          }
        </style>
</section>
</div>
</section>
<section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp)] bg-cover pt-16 pb-16 relative" id="showcase">

<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90 pointer-events-none"></div>

<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
<div className="">
<p className="text-sm font-medium text-white/70 font-geist">Power to your operations team</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter font-geist mt-1">Business Process Automation and Internal Assistant</h2>
<p className="sm:text-lg text-base text-neutral-300 font-geist max-w-[85ch] mt-4">Helping businesses remove slow steps, manual mistakes, and clogged workflows. Replace busywork with simple automations and an internal AI helper that keeps things moving, designed to your own unique needs.</p>
</div>
</div>
<div className="space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 md:p-10 overflow-hidden bg-zinc-950/90 border-zinc-900 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg">
<div className="absolute -left-10 -top-16 h-64 w-64 bg-gradient-to-tr from-emerald-400/20 to-cyan-300/10 rounded-full blur-2xl"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-workflow h-5 w-5 text-emerald-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 font-geist">
              Secure Automation by Design
            </h3>
</div>
<p className="text-zinc-300 font-geist max-w-2xl">You streamline everyday operations by removing slow manual steps. Invoices are captured, read, and routed without extra typing. Onboarding runs through a simple checklist that handles forms and gives new hires an assistant for common questions. Reports pull themselves together from the tools you already use and land in your inbox in plain language. Scheduling becomes smooth with automated booking and smart routing for field teams. A private internal assistant learns your processes, answers questions, finds files, and handles small tasks so your team stays focused on real work.</p>

<div className="mt-8 grid grid-cols-5 gap-4 md:gap-6">
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-eye-off h-5 w-5 text-zinc-400" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-geist">Invoice Processing</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-lock h-5 w-5 text-zinc-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-geist">Report Generation
</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-key-round h-5 w-5 text-zinc-400" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="text-xs text-zinc-400 font-geist">Scheduling and Routing</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-fingerprint h-5 w-5 text-zinc-400" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-geist">Internal AI Assistant
</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-shield-check h-5 w-5 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-geist">Onboarding Flows</span>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 bg-gradient-to-br from-emerald-900/20 via-neutral-900 to-slate-800 border-emerald-500/20 border rounded-3xl shadow-lg backdrop-blur h-full">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="relative h-56 sm:h-64 ring-1 ring-inset ring-emerald-500/20 overflow-hidden bg-gradient-to-br from-emerald-950/40 via-neutral-900 to-slate-800 rounded-2xl">

<div className="absolute right-6 top-8 sm:right-10 sm:top-10 w-[78%] rounded-2xl border border-emerald-500/30 bg-neutral-900/95 shadow-xl backdrop-blur">
<div className="flex items-center gap-2 px-4 py-3 border-b border-emerald-500/20 bg-emerald-950/30">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
<div className="ml-3 flex items-center gap-2">
<span className="text-xs text-emerald-400 font-geist">Workflow Run</span>
</div>
</div>
<div className="p-4 relative h-32">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<div className="absolute top-6 left-16 w-2 h-2 rounded-full bg-emerald-400"></div>
<div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-8 left-12 w-2 h-2 rounded-full bg-emerald-400"></div>
<div className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="absolute inset-1 flex flex-col justify-between text-[10px] text-neutral-300 font-geist">
<div className="flex items-center justify-between">
<span>Trigger: New ticket</span>
<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">Running</span>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between rounded-lg bg-neutral-900/80 border border-emerald-500/20 px-2 py-1">
<span>Classify intent</span>
<span className="text-emerald-300">AI</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/80 border border-emerald-500/20 px-2 py-1">
<span>Update CRM</span>
<span className="text-emerald-300">Success</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/80 border border-emerald-500/20 px-2 py-1">
<span>Notify owner</span>
<span className="text-emerald-300">Queued</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-4 bottom-6 w-[35%] h-[45%] rounded-xl bg-neutral-950/95 border border-emerald-500/20 shadow-lg">
<div className="px-2 py-1.5 border-b border-emerald-500/20">
<span className="text-[10px] text-emerald-400 tracking-wide font-geist">AUTOMATION LOAD</span>
</div>
<div className="p-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-geist">Runs / min</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-5 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400 font-geist">120</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-geist">Success</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-5 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400 font-geist">99.2%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-neutral-400 font-geist">Human review</span>
<div className="flex items-center gap-1">
<div className="h-1 w-6 rounded-full bg-neutral-800">
<div className="h-1 w-2 rounded-full bg-emerald-500"></div>
</div>
<span className="text-[9px] text-emerald-400 font-geist">6%</span>
</div>
</div>
</div>
</div>
<div className="absolute top-4 left-6 w-20 h-4 rounded bg-emerald-500/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute top-16 left-2 w-14 h-3 rounded bg-emerald-400/40" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-16 right-2 w-16 h-2 rounded bg-emerald-300/50"></div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<svg className="lucide lucide-monitor-check h-5 w-5 text-emerald-400" data-lucide="monitor-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 10 2 2 4-4"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
<h3 className="sm:text-2xl text-2xl font-semibold tracking-tight font-geist text-white">
                    Real‑time automation engine
                  </h3>
</div>
<p className="text-sm text-neutral-400 mt-3 font-geist">
                  Stream events from your tools, branch on conditions, and ship new flows without redeploying infrastructure.
                </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 font-geist" href="#">
                    Explore workflow templates
                    <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1">
<article className="relative bg-neutral-900/95 border-white/10 border rounded-2xl p-6 h-full">
<div className="flex items-center justify-between">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium font-geist">
                Internal AI Assistant
              </h3>
<span className="text-[11px] text-neutral-300 font-geist">On call</span>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist">
              An embedded teammate that knows your tools, processes, and data—with handoff to humans when it matters.
            </p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200 font-geist">Draft responses &amp; updates</span>
<svg ="24"="" className="text-emerald-400 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200 font-geist">Answer “how do we” questions</span>
<svg className="text-emerald-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-emerald-400/20 bg-emerald-500/10 px-3 py-2">
<span className="text-sm text-emerald-200 font-geist">Summarize tickets &amp; calls</span>
<svg className="text-emerald-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-indigo-400/20 bg-indigo-500/10 px-3 py-2">
<span className="text-sm text-indigo-200 font-geist">Route to the right owner</span>
<svg className="text-indigo-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-200 bg-emerald-500/10 rounded-full px-2 py-1 ring-1 ring-emerald-400/20 font-geist">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
                Trained on your data, not the public web
              </span>
</div>
</article>
</div>

<div className="lg:col-span-2">
<aside className="relative overflow-hidden sm:rounded-3xl flex flex-col bg-zinc-950/90 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5 h-full">
<div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400 font-geist">
<span className="">Process intelligence &amp; reporting</span>
<span>Real‑time</span>
</div>
<h4 className="sm:mt-4 sm:text-3xl md:text-4xl text-2xl font-semibold text-zinc-100 tracking-tight mt-3 font-geist">
              See every workflow, bottleneck, and impact in one view
            </h4>
<p className="md:text-base text-sm text-zinc-300 mt-3 font-geist">
              Track how work actually flows across teams: where things stall, which automations save the most time,
              and where to invest next.
            </p>

<div className="mt-6 md:mt-8">
<div className="grid grid-cols-12 gap-2 h-16 items-end">
<span className="h-4 bg-emerald-500 rounded-2xl"></span>
<span className="h-6 bg-emerald-500/80 rounded-2xl"></span>
<span className="h-8 bg-emerald-500/60 rounded-2xl"></span>
<span className="h-12 bg-emerald-500 rounded-2xl"></span>
<span className="h-10 bg-emerald-400 rounded-2xl"></span>
<span className="h-14 bg-emerald-500 rounded-2xl"></span>
<span className="h-6 bg-emerald-500/80 rounded-2xl"></span>
<span className="h-9 bg-emerald-500/60 rounded-2xl"></span>
<span className="h-5 bg-emerald-500 rounded-2xl"></span>
<span className="h-11 bg-emerald-400 rounded-2xl"></span>
<span className="h-7 bg-emerald-500/80 rounded-2xl"></span>
<span className="h-3 bg-emerald-500/60 rounded-2xl"></span>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3 text-zinc-300 text-sm font-geist">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path>
<path d="M6 6v11"></path>
<path d="M10 3v18"></path>
<path d="M14 8v7"></path>
<path d="M18 5v13"></path>
<path d="M22 10v3"></path>
</svg>
<span className="font-medium">Clean, explain, and optimize every process.</span>
</div>
<span className="text-xs text-zinc-400">
                Time‑to‑resolution, SLA adherence, and automation coverage—no extra BI tool required.
              </span>
</div>
</aside>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72c90007-7638-4902-8dda-5a6c20e92741_3840w.jpg)] bg-cover pt-16 pb-16 relative" id="resources">

<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

<div className="max-w-3xl">
<div className="inline-flex text-[11px] ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] font-medium text-white/70 font-geist bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">Key Features</div>
<h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
        Experience AI-Powered Excellence
      </h2>
<p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]">
        Our platform delivers cutting-edge capabilities designed to transform your workflow with intelligent automation and seamless integration.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 gap-x-6 gap-y-6">

<div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist">Intelligent Recording</h3>
<p className="mt-2 text-sm text-slate-400 font-geist">
          Capture every moment with precision. Our advanced transcription technology delivers unmatched accuracy for your most important conversations.
        </p>

<div className="mt-5 rounded-2xl bg-black/30 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300 font-geist">
<svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path>
<path d="M6 6v11"></path>
<path d="M10 3v18"></path>
<path d="M14 8v7"></path>
<path d="M18 5v13"></path>
<path d="M22 10v3"></path>
</svg>
              Live transcript
            </div>
<div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
<span className="text-[10px] text-slate-200 font-geist">Recording</span>
</div>
</div>
<div className="mt-3 space-y-2">
<div className="text-[11px] text-slate-300/90 font-geist">Welcome to the session</div>
<div className="text-[11px] text-slate-300/90 font-geist">How can we assist you today?</div>
<div className="text-[11px] text-slate-300/90 font-geist">Let's review the details</div>
<div className="text-[11px] text-slate-300/90 font-geist">Thank you for your time</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
<div className="absolute inset-0">
<img alt="Seamless connection" className="opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/459579f4-e2d0-4218-a12d-f974a4b89651_800w.jpg"/>
<div className="bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative p-5 md:p-6">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist">Seamless Collaboration</h3>
<p className="mt-2 text-sm text-slate-200/80 font-geist">
            Focus on what matters most. Spend less time managing tasks and more time building meaningful connections.
          </p>
</div>
<div className="relative p-5 md:p-6 pt-0">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/80 ring-1 ring-white/15 font-geist">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path>
<path d="M19 17v4"></path>
<path d="M3 5h4"></path>
<path d="M17 19h4"></path>
</svg>
            Auto‑summaries &amp; smart insights
          </div>
</div>
</div>

<div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.36s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="md:text-2xl text-xl font-normal tracking-tighter font-geist">Customizable Workflows</h3>
<p className="text-sm text-slate-400 font-geist mt-2">Built for businesses who demand flexibility. Our platform adapts to your unique workflow and documentation needs.</p>

<div className="mt-5 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),rgba(2,6,23,0.6))] ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-4 h-4 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="">
<p className="text-sm font-normal text-slate-200 font-geist">Workflow Management Systems</p>
<p className="text-[11px] text-slate-400 font-geist">Comprehensive walk-through </p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-300 font-geist">
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<span className="">November 21, 2025</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span>Virtual Session</span>
</div>
</div>
<div className="mt-4 space-y-2">
<p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300">Subject:</span> Strategic planning discussion initiated last week</p>
<p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300">Focus:</span> Implementation roadmap and key milestones</p>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-10 gap-x-3 gap-y-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition" href="#">
        Start free trial
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition" href="#">
        Explore features
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path>
<path d="M19 17v4"></path>
<path d="M3 5h4"></path>
<path d="M17 19h4"></path>
</svg>
</a>
<a className="group inline-flex items-center gap-2 text-sm font-medium font-geist text-white/90 underline decoration-white/30 underline-offset-4 hover:decoration-white/60" href="#">
        View security details
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</a>
</div>
</div>
</section><section className="overflow-hidden lg:py-24 pt-16 pb-16 relative">

<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="z-10 md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex text-[11px] ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] font-medium text-white/70 font-geist bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
      Schedule a live walkthrough
    </div>
<h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
      See RelayDesk VoiceAI in Action
    </h2>
<p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]">
      Book a 30‑minute demo to learn how RelayDesk can answer, route, and resolve calls automatically—while keeping your team in complete control.
    </p>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

<div className="lg:col-span-5 rounded-3xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist">
          What you’ll get on the call
        </h3>
<p className="mt-3 text-sm md:text-base text-slate-300/90 font-geist">
          A product specialist will walk you through RelayDesk’s VoiceAI, tailored to your use cases—no generic slide decks.
        </p>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<svg className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Live tour of how RelayDesk answers and triages inbound calls</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<svg className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Example call flows for support, sales, and after‑hours coverage</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<svg className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Integration overview for your existing phone system and tools</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<svg className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Clear recommendations on rollout, coverage, and ROI</span>
</li>
</ul>
</div>
<div className="mt-6 pt-5 border-t border-white/10">
<div className="flex flex-wrap items-center gap-4">
<a className="button" href="#">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
              Schedule a demo
              <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<button className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/70 tracking-tight font-semibold transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal text-[13px] md:text-sm">Listen to a sample call</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
<div className="mt-4 flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-400 font-geist">
<div className="flex -space-x-2">
</div>
<span className="">RelayDesk is trusted to handle calls for modern support and operations teams.</span>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
<div className="relative rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-white/5 ring-1 ring-white/15 backdrop-blur-md overflow-hidden">

<div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-black/30">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-orange-300"></span>
<span className="h-3 w-3 rounded-full bg-emerald-400"></span>
<div className="ml-3 hidden md:inline-flex items-center gap-2 rounded-md bg-white/5 ring-1 ring-white/10 px-2 py-1 text-[10px] md:text-xs text-slate-200 font-geist">
<svg className="w-3.5 h-3.5 text-blue-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
              RelayDesk • Live Voice Console
            </div>
</div>
<div className="flex items-center gap-2">
<span className="hidden md:inline-flex items-center gap-1 rounded-md bg-white/5 ring-1 ring-white/10 px-2 py-1 text-[10px] md:text-xs text-slate-300 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              24 agents online
            </span>
<button className="rounded-md bg-white/10 ring-1 ring-white/15 p-1.5 text-slate-200 hover:bg-white/15 transition">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1." viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</button>
</div>
</div>

<div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

<div className="md:col-span-1 rounded-2xl bg-black/40 ring-1 ring-white/10 p-3 md:p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200 font-geist">Live call queue</span>
<span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-slate-300 font-geist">Inbound</span>
</div>
<div className="space-y-2 text-[11px] text-slate-300 font-geist">
<div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span>Support line</span>
</div>
<span className="text-slate-400">00:42</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span>
<span>Billing</span>
</div>
<span className="text-slate-400">01:12</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-sky-300"></span>
<span>After‑hours</span>
</div>
<span className="text-slate-400">00:09</span>
</div>
</div>
<div className="mt-1 flex items-center justify-between text-[11px] text-slate-400 font-geist">
<span className="">RelayDesk handling 92% of volume</span>
</div>
</div>

<div className="md:col-span-2 rounded-2xl bg-black/35 ring-1 ring-white/10 p-3 md:p-4 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-[10px] md:text-xs text-slate-200 ring-1 ring-white/10 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulse"></span>
                Live VoiceAI transcript
              </div>
<span className="text-[10px] md:text-xs text-slate-400 font-geist">Caller • Jacksonville, FL</span>
</div>
<div className="mt-3 md:mt-4 space-y-2 text-[11px] md:text-[12px] text-slate-300 font-geist max-h-40 md:max-h-44 overflow-hidden">
<div className="rounded-lg bg-white/5 px-3 py-2">
<span className="text-slate-400 mr-1">Caller:</span>
                I’m trying to reach someone about a billing question on my last invoice.
              </div>
<div className="rounded-lg bg-blue-500/10 px-3 py-2 border border-blue-400/30">
<span className="text-slate-300 mr-1">RelayDesk:</span>
                I can help with that. Can you share your account number so I can pull up your details?
              </div>
<div className="rounded-lg bg-white/5 px-3 py-2">
<span className="text-slate-400 mr-1">Caller:</span>
                Sure, it’s 4289. I think I was charged twice last month.
              </div>
<div className="rounded-lg bg-blue-500/10 px-3 py-2 border border-blue-400/30">
<span className="text-slate-300 mr-1">RelayDesk:</span>
                I see the duplicate charge. I’ve initiated a refund and sent a confirmation email to the address on file.
              </div>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
<div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-400 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="">Resolved automatically • Agent not required</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] md:text-xs text-slate-300 font-geist">
<span className="rounded-full bg-white/5 px-2 py-1 flex items-center gap-1.5">
<svg className="w-[14px] h-[14px] text-orange-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 22H6a2 2 0 0 1-2-2v-4.28a2 2 0 0 1 .76-1.57l5.24-4.19a2 2 0 0 0 .76-1.57V4a2 2 0 0 1 2-2h.5a6.5 6.5 0 0 1 6.5 6.5V20a2 2 0 0 1-2 2Z"></path>
<path d="M8 22v-3"></path>
<path className="" d="M16 22v-3"></path>
</svg>
                  98% accuracy
                </span>
<span className="rounded-full bg-white/5 px-2 py-1">14s avg handle time</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] md:text-xs text-slate-300 font-geist">
<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 px-3 py-2.5 flex flex-col gap-1">
<span className="text-slate-400">Calls automated</span>
<span className="text-lg md:text-xl font-normal tracking-tighter font-geist">82%</span>
</div>
<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 px-3 py-2.5 flex flex-col gap-1">
<span className="text-slate-400">First‑call resolution</span>
<span className="text-lg md:text-xl font-normal tracking-tighter font-geist">67%</span>
</div>
<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 px-3 py-2.5 flex flex-col gap-1">
<span className="text-slate-400">Agent time saved</span>
<span className="text-lg md:text-xl font-normal tracking-tighter font-geist">+38%</span>
</div>
<div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 px-3 py-2.5 flex flex-col gap-1">
<span className="text-slate-400">CSAT impact</span>
<span className="text-lg md:text-xl font-normal tracking-tighter font-geist">+0.4</span>
</div>
</div>
</div>
</div>
<style>
    .button {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.25s ease;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: 0.75rem;
      border: none;
      outline: none;
      padding: 10px 18px;
      min-height: 44px;
      min-width: 120px;
    }

    .button::before,
    .button::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }

    .button::before {
      inset: 1px;
      background: linear-gradient(177.95deg,
          rgba(255, 255, 255, 0.19) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }

    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: calc(0.75rem - 2px);
    }

    .button:active {
      transform: scale(0.96);
    }

    .points_wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }

    .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out;
      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 9999px;
    }

    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }

      85% {
        opacity: 0;
      }

      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }

    .points_wrapper .point:nth-child(1) {
      left: 10%;
      opacity: 1;
      animation-duration: 2.35s;
      animation-delay: 0.2s;
    }

    .points_wrapper .point:nth-child(2) {
      left: 30%;
      opacity: 0.7;
      animation-duration: 2.5s;
      animation-delay: 0.5s;
    }

    .points_wrapper .point:nth-child(3) {
      left: 25%;
      opacity: 0.8;
      animation-duration: 2.2s;
      animation-delay: 0.1s;
    }

    .points_wrapper .point:nth-child(4) {
      left: 44%;
      opacity: 0.6;
      animation-duration: 2.05s;
    }

    .points_wrapper .point:nth-child(5) {
      left: 50%;
      opacity: 1;
      animation-duration: 1.9s;
    }

    .points_wrapper .point:nth-child(6) {
      left: 75%;
      opacity: 0.5;
      animation-duration: 1.5s;
      animation-delay: 1.5s;
    }

    .points_wrapper .point:nth-child(7) {
      left: 88%;
      opacity: 0.9;
      animation-duration: 2.2s;
      animation-delay: 0.2s;
    }

    .points_wrapper .point:nth-child(8) {
      left: 58%;
      opacity: 0.8;
      animation-duration: 2.25s;
      animation-delay: 0.2s;
    }

    .points_wrapper .point:nth-child(9) {
      left: 98%;
      opacity: 0.6;
      animation-duration: 2.6s;
      animation-delay: 0.1s;
    }

    .points_wrapper .point:nth-child(10) {
      left: 65%;
      opacity: 1;
      animation-duration: 2.5s;
      animation-delay: 0.2s;
    }

    .inner {
      z-index: 2;
      gap: 6px;
      position: relative;
      width: 100%;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.4;
      transition: color 0.2s ease-in-out;
    }

    .inner svg.icon {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
      stroke: white;
      fill: none;
    }

    .button:hover svg.icon {
      transform: translateX(2px);
    }

    .button:hover svg.icon path {
      animation: dash 0.8s linear forwards;
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 0, 20;
        stroke-dashoffset: 0;
      }

      50% {
        stroke-dasharray: 10, 10;
        stroke-dashoffset: -5;
      }

      100% {
        stroke-dasharray: 20, 0;
        stroke-dashoffset: -10;
      }
    }
  </style>
</div>
</section><section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32b67867-f241-44ab-a57c-c87e60b99c25_3840w.webp)] bg-cover pt-16 pb-16 relative" id="start">

<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent">
</div>
</div>
<div className="z-10 md:px-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 ring-1 ring-white/10 backdrop-blur-md">

<div className="absolute inset-0 opacity-30">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
</div>
<div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist mb-6">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
</path>
<path d="M5 3v4"></path>
<path d="M19 17v4"></path>
<path d="M3 5h4"></path>
<path d="M17 19h4"></path>
</svg>
            Ready to get started?
          </div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tighter font-geist">
            Transform Your Workflow Today
          </h2>
<p className="leading-relaxed text-lg text-slate-300 font-geist mt-6">Join thousands of teams and businesses using AI in 2026 to build better customer experiences faster. Schedule a call with us to help us solution for you.</p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-6 py-3 text-base font-medium font-geist hover:bg-neutral-100 transition" href="#">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-6 py-3 text-base font-medium font-geist hover:bg-white/15 transition" href="#">
              Schedule Demo
              <svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</a>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400 font-geist">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-blue-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>14-day free trial</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-blue-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">No credit card required</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-blue-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Cancel anytime</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section><footer className="overflow-hidden bg-slate-950 border-white/5 border-t relative">

<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-white/8 via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
</div>
<div className="z-10 md:px-8 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">

<div className="col-span-2">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<p className="mt-4 text-sm text-slate-400 leading-relaxed font-geist max-w-xs">
          Building the future of AI-powered systems for forward-thinking teams.
        </p>
<div className="mt-6 flex items-center gap-3">
<a className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
</svg>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-medium text-white font-geist">Product</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Features</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Pricing</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Integrations</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Changelog</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-medium text-white font-geist">Company</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">About</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Blog</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Careers</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-medium text-white font-geist">Resources</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Documentation</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Help Center</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Community</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Status</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-medium text-white font-geist">Legal</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Privacy</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Terms</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Security</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Cookies</a></li>
</ul>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400 font-geist">© 2026 Nysteria LLC. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Privacy Policy</a>
<a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Terms of Service</a>
<a className="text-sm text-slate-400 hover:text-white transition font-geist" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
