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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Preloader Logic
      window.addEventListener('load', () => {
          setTimeout(() => {
              const preloader = document.getElementById('preloader');
              preloader.style.opacity = '0';
              setTimeout(() => {
                  preloader.style.visibility = 'hidden';
              }, 1000);
          }, 800);
      });

      // Custom Cursor Logic (desktop only for performance)
      if (window.matchMedia("(pointer: fine)").matches) {
          const cursorDot = document.getElementById('cursor-dot');
          const cursorRing = document.getElementById('cursor-ring');
          let mouseX = window.innerWidth / 2;
          let mouseY = window.innerHeight / 2;
          let ringX = mouseX;
          let ringY = mouseY;

          window.addEventListener('mousemove', (e) => {
              mouseX = e.clientX;
              mouseY = e.clientY;

              // Immediate dot position
              cursorDot.style.left = `${mouseX}px`;
              cursorDot.style.top = `${mouseY}px`;
          });

          // Smooth ring follow
          const loop = () => {
              ringX += (mouseX - ringX) * 0.15;
              ringY += (mouseY - ringY) * 0.15;

              cursorRing.style.left = `${ringX}px`;
              cursorRing.style.top = `${ringY}px`;

              requestAnimationFrame(loop);
          };
          loop();

          // Hover effects
          const hoverTargets = document.querySelectorAll('.hover-target, a, button');
          hoverTargets.forEach(target => {
              target.addEventListener('mouseenter', () => {
                  document.body.classList.add('cursor-hover');
              });
              target.addEventListener('mouseleave', () => {
                  document.body.classList.remove('cursor-hover');
              });
          });
      } else {
          // Hide custom cursor on touch devices
          document.getElementById('cursor-dot').style.display = 'none';
          document.getElementById('cursor-ring').style.display = 'none';
          document.body.style.cursor = 'auto';
      }

      // Scroll Reveal Animation
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target); // Run once
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
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
      

<div id="preloader">
<div className="loader-text text-2xl tracking-tighter font-semibold">
<span>WITHIN.</span>
</div>
</div>

<div id="cursor-dot"></div>
<div id="cursor-ring"></div>
<div className="noise"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center transition-all duration-300" id="navbar">
<a className="text-lg tracking-tighter font-semibold hover-target" href="#">
        WITHIN.
      </a>
<div className="hidden md:flex gap-8 text-xs font-semibold tracking-wide uppercase text-zinc-400">
<a className="hover-target hover:text-white transition-colors" href="#about">
          About
        </a>
<a className="hover-target hover:text-white transition-colors" href="#services">
          Services
        </a>
<a className="hover-target hover:text-white transition-colors" href="#pricing">
          Pricing
        </a>
<a className="hover-target hover:text-white transition-colors" href="#work">
          Work
        </a>
<a className="hover-target hover:text-white transition-colors" href="#contact">
          Contact
        </a>
</div>
<button className="md:hidden hover-target text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20">
<div className="hero-bg"></div>
<div className="max-w-4xl z-10 reveal">
<h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight font-semibold leading-[1.1] mb-8">
          We Build Digital
          <br className="hidden md:block"/>
          Experiences From Within.
        </h1>
<p className="text-base md:text-lg text-zinc-400 font-light max-w-xl mx-auto mb-12">
          Creative agency focused on branding, design, and digital innovation.
          We craft solutions that resonate deeply.
        </p>
<a className="hover-target inline-flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-800 text-sm font-semibold tracking-tight hover:bg-white hover:text-black transition-all duration-300" href="#work">
          View Our Work
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal" style={{transitionDelay: '0.4s'}}>
<span className="text-xs uppercase tracking-widest font-semibold">
          Scroll
        </span>
<div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
</div>
</header>

<section className="py-32 px-6 md:px-12 lg:px-24 border-t border-zinc-900" id="about">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4 reveal">
<h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-4">
            About Us
          </h2>
</div>
<div className="md:col-span-8 reveal delay-100">
<p className="text-2xl md:text-4xl tracking-tight font-light leading-tight text-zinc-200">
            Within. Creations™ is an independent digital studio. We believe
            that the most powerful brands are built from a core truth. We
            combine strategic thinking with premium aesthetic execution to
            deliver products that don't just look good, but feel right.
          </p>
<div className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-900 pt-12">
<div>
<span className="block text-4xl tracking-tight font-semibold mb-2">
                12+
              </span>
<span className="text-sm text-zinc-500 font-light">
                Industry Awards
              </span>
</div>
<div>
<span className="block text-4xl tracking-tight font-semibold mb-2">
                80+
              </span>
<span className="text-sm text-zinc-500 font-light">
                Global Projects
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20 reveal">
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold">
            Capabilities.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-10 rounded-2xl bg-[#0a0a0c] border border-zinc-900 hover:border-zinc-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 hover-target transition-all duration-500 reveal">
<iconify-icon className="text-zinc-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-8" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold mb-3">Branding</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Visual identity, naming, and brand architecture designed to stand
              out and endure.
            </p>
</div>
<div className="group p-10 rounded-2xl bg-[#0a0a0c] border border-zinc-900 hover:border-zinc-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 hover-target transition-all duration-500 reveal delay-100">
<iconify-icon className="text-zinc-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-8" icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold mb-3">
              Web Design
            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Immersive, responsive websites that tell your story with precision
              and elegance.
            </p>
</div>
<div className="group p-10 rounded-2xl bg-[#0a0a0c] border border-zinc-900 hover:border-zinc-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 hover-target transition-all duration-500 reveal delay-200">
<iconify-icon className="text-zinc-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-8" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold mb-3">
              UI/UX Design
            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Intuitive interfaces and seamless user journeys that drive
              engagement and conversion.
            </p>
</div>
<div className="group p-10 rounded-2xl bg-[#0a0a0c] border border-zinc-900 hover:border-zinc-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 hover-target transition-all duration-500 reveal">
<iconify-icon className="text-zinc-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-8" icon="solar:code-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold mb-3">
              Development
            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Robust frontend and backend solutions utilizing the latest modern
              frameworks.
            </p>
</div>
<div className="group p-10 rounded-2xl bg-[#0a0a0c] border border-zinc-900 hover:border-zinc-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 hover-target transition-all duration-500 reveal delay-100 lg:col-span-2">
<iconify-icon className="text-zinc-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 mb-8" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold mb-3">
              Creative Strategy
            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-md">
              Data-driven insights merged with creative intuition to position
              your brand for long-term success in the digital landscape.
            </p>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 md:px-12 lg:px-24 border-t border-zinc-900" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold mb-8 text-center">
            Service Pricing.
          </h2>
<div className="flex items-center p-1.5 bg-[#0a0a0c] rounded-full border border-zinc-900">
<button className="px-8 py-2.5 rounded-full bg-white text-black text-sm font-semibold tracking-tight transition-all hover-target shadow-sm">
              Monthly
            </button>
<button className="px-8 py-2.5 rounded-full text-zinc-400 hover:text-white text-sm font-semibold tracking-tight transition-all hover-target">
              Annually
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">

<div className="group p-10 lg:p-12 rounded-3xl bg-[#0a0a0c] border border-zinc-900 hover:border-zinc-700 transition-all duration-500 reveal hover:-translate-y-2 flex flex-col hover-target h-full">
<h3 className="text-2xl tracking-tight font-semibold mb-2">Starter</h3>
<p className="text-sm text-zinc-500 font-light mb-8">
              Perfect for small businesses just getting started.
            </p>
<div className="mb-10">
<span className="text-5xl font-semibold tracking-tight">$99</span>
<span className="text-zinc-500 text-sm">/mo</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                Basic Branding
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                1 Page Website
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                Standard Support
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                1 Revision
              </li>
</ul>
<a className="block w-full py-4 text-center rounded-full border border-zinc-800 text-sm font-semibold tracking-tight hover:bg-white hover:text-black transition-colors hover-target" href="#contact">
              Get Started
            </a>
</div>

<div className="group p-10 lg:p-12 rounded-3xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-all duration-500 reveal delay-100 hover:-translate-y-2 flex flex-col relative overflow-hidden hover-target shadow-2xl shadow-black/50 z-10 lg:scale-105 h-full">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-zinc-500 to-white"></div>
<div className="flex justify-between items-center mb-2">
<h3 className="text-2xl tracking-tight font-semibold">
                Professional
              </h3>
<span className="text-[10px] uppercase tracking-widest font-semibold bg-white text-black px-3 py-1 rounded-full">
                Popular
              </span>
</div>
<p className="text-sm text-zinc-400 font-light mb-8">
              Ideal for growing companies needing more features.
            </p>
<div className="mb-10">
<span className="text-5xl font-semibold tracking-tight text-white">
                $199
              </span>
<span className="text-zinc-400 text-sm">/mo</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-center gap-4 text-sm font-light text-zinc-200">
<iconify-icon className="text-white" icon="solar:check-circle-bold" width="22"></iconify-icon>
                Full Branding
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-200">
<iconify-icon className="text-white" icon="solar:check-circle-bold" width="22"></iconify-icon>
                5 Page Website
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-200">
<iconify-icon className="text-white" icon="solar:check-circle-bold" width="22"></iconify-icon>
                Priority Support
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-200">
<iconify-icon className="text-white" icon="solar:check-circle-bold" width="22"></iconify-icon>
                3 Revisions
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-200">
<iconify-icon className="text-white" icon="solar:check-circle-bold" width="22"></iconify-icon>
                SEO Basics
              </li>
</ul>
<a className="block w-full py-4 text-center rounded-full bg-white text-black text-sm font-semibold tracking-tight hover:bg-zinc-200 transition-colors hover-target" href="#contact">
              Get Started
            </a>
</div>

<div className="group p-10 lg:p-12 rounded-3xl bg-[#0a0a0c] border border-zinc-900 hover:border-zinc-700 transition-all duration-500 reveal delay-200 hover:-translate-y-2 flex flex-col hover-target h-full">
<h3 className="text-2xl tracking-tight font-semibold mb-2">
              Enterprise
            </h3>
<p className="text-sm text-zinc-500 font-light mb-8">
              For large organizations requiring custom solutions.
            </p>
<div className="mb-10">
<span className="text-5xl font-semibold tracking-tight">$399</span>
<span className="text-zinc-500 text-sm">/mo</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                Custom Branding
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                Custom Web App
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                24/7 Support
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                Unlimited Revisions
              </li>
<li className="flex items-center gap-4 text-sm font-light text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
                Advanced SEO
              </li>
</ul>
<a className="block w-full py-4 text-center rounded-full border border-zinc-800 text-sm font-semibold tracking-tight hover:bg-white hover:text-black transition-colors hover-target" href="#contact">
              Get Started
            </a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16 reveal">
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold">
            Selected Work.
          </h2>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold hover:text-zinc-400 transition-colors" href="#">
            View Archive
            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<a className="project-card block relative rounded-xl hover-target reveal" href="#">
<div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden relative">
<img alt="Project 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="project-overlay absolute inset-0 bg-black/40 flex items-end p-8">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-white mb-2">
                    Aura Dynamics
                  </h3>
<p className="text-sm text-zinc-300 font-light">
                    Branding &amp; Web Platform
                  </p>
</div>
</div>
</div>
</a>

<a className="project-card block relative rounded-xl hover-target reveal delay-100 md:mt-16" href="#">
<div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden relative">
<img alt="Project 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="project-overlay absolute inset-0 bg-black/40 flex items-end p-8">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-white mb-2">
                    Lumina App
                  </h3>
<p className="text-sm text-zinc-300 font-light">
                    UI/UX &amp; Mobile Design
                  </p>
</div>
</div>
</div>
</a>

<a className="project-card block relative rounded-xl hover-target reveal" href="#">
<div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden relative">
<img alt="Project 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="project-overlay absolute inset-0 bg-black/40 flex items-end p-8">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-white mb-2">
                    Echo Systems
                  </h3>
<p className="text-sm text-zinc-300 font-light">
                    Corporate Identity
                  </p>
</div>
</div>
</div>
</a>

<a className="project-card block relative rounded-xl hover-target reveal delay-100 md:mt-16" href="#">
<div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden relative">
<img alt="Project 4" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="project-overlay absolute inset-0 bg-black/40 flex items-end p-8">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-white mb-2">
                    Vanguard
                  </h3>
<p className="text-sm text-zinc-300 font-light">
                    E-commerce Experience
                  </p>
</div>
</div>
</div>
</a>
</div>
<div className="mt-12 text-center md:hidden reveal">
<a className="inline-flex items-center gap-2 text-sm font-semibold hover:text-zinc-400 transition-colors" href="#">
            View All Work
            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/30 border-y border-zinc-900">
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
<div className="pt-8 sm:pt-0 sm:pr-8 reveal">
<iconify-icon className="text-white mb-4" icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg tracking-tight font-semibold mb-2">Precision</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
            Pixel-perfect execution in every detail, ensuring premium quality.
          </p>
</div>
<div className="pt-8 sm:pt-0 sm:px-8 reveal delay-100">
<iconify-icon className="text-white mb-4" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg tracking-tight font-semibold mb-2">Creativity</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
            Pushing boundaries to deliver unique, memorable experiences.
          </p>
</div>
<div className="pt-8 sm:pt-0 sm:px-8 reveal delay-200">
<iconify-icon className="text-white mb-4" icon="solar:rocket-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg tracking-tight font-semibold mb-2">Speed</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
            Agile processes that ensure rapid delivery without compromising
            quality.
          </p>
</div>
<div className="pt-8 sm:pt-0 sm:pl-8 reveal delay-300">
<iconify-icon className="text-white mb-4" icon="solar:planet-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg tracking-tight font-semibold mb-2">
            Modern Thinking
          </h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
            Utilizing the latest technologies and design trends to stay ahead.
          </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<h2 className="text-4xl md:text-6xl tracking-tight font-semibold mb-6">
            Let's create something extraordinary.
          </h2>
<p className="text-base text-zinc-400 font-light mb-12 max-w-md">
            Ready to elevate your digital presence? Drop us a line and let's
            discuss how we can help your brand grow.
          </p>
<div className="space-y-4">
<a className="block text-lg font-light hover:text-zinc-400 transition-colors hover-target w-max" href="mailto:hello@withincreations.com">
              hello@withincreations.com
            </a>
<div className="flex gap-6 pt-4">
<a className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors hover-target uppercase tracking-wider" href="#">
                Twitter
              </a>
<a className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors hover-target uppercase tracking-wider" href="#">
                Instagram
              </a>
<a className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors hover-target uppercase tracking-wider" href="#">
                LinkedIn
              </a>
</div>
</div>
</div>
<div className="reveal delay-100">
<form className="space-y-8">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-zinc-800 focus:border-white outline-none py-4 text-base font-light transition-colors text-white placeholder-transparent" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-4 text-zinc-600 text-base font-light transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-400 pointer-events-none" htmlFor="name">
                Your Name
              </label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-zinc-800 focus:border-white outline-none py-4 text-base font-light transition-colors text-white placeholder-transparent" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-4 text-zinc-600 text-base font-light transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-400 pointer-events-none" htmlFor="email">
                Email Address
              </label>
</div>
<div className="relative">
<textarea className="peer w-full bg-transparent border-b border-zinc-800 focus:border-white outline-none py-4 text-base font-light transition-colors text-white placeholder-transparent resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-0 top-4 text-zinc-600 text-base font-light transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-400 pointer-events-none" htmlFor="message">
                Project Details
              </label>
</div>
<button className="hover-target inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full text-sm font-semibold tracking-tight hover:bg-zinc-200 transition-colors" type="button">
              Start a Project
            </button>
</form>
</div>
</div>
</section>

<footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-zinc-900 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-sm tracking-tighter font-semibold">
          WITHIN. CREATIONS™
        </span>
<span className="text-xs text-zinc-600 font-light">
          © 2024 All rights reserved.
        </span>
<div className="flex gap-6 text-xs font-light text-zinc-500">
<a className="hover:text-white transition-colors hover-target" href="#">
            Privacy Policy
          </a>
<a className="hover:text-white transition-colors hover-target" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>


    </>
  );
}
