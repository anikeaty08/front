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
      
      // Init lucide icons
      lucide.createIcons();

      // Mobile nav
      const menuBtn = document.getElementById("menuBtn");
      const closeBtn = document.getElementById("closeBtn");
      const mobileNav = document.getElementById("mobileNav");

      menuBtn?.addEventListener("click", () => mobileNav.classList.remove("hidden"));
      closeBtn?.addEventListener("click", () => mobileNav.classList.add("hidden"));

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Reveal animations
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el, idx) => {
        el.classList.add(
          "opacity-0",
          "translate-y-8",
          "transition",
          "duration-700",
          "ease-out"
        );
        const delay =
          parseFloat(el.getAttribute("style")?.match(/(\d+)ms/)?.[1] || 0) + idx * 60;
        setTimeout(() => {
          el.classList.remove("opacity-0", "translate-y-8");
          el.classList.add("opacity-100", "translate-y-0");
        }, 200 + delay);
      });

      // Chart.js donut
      const ctx = document.getElementById("sectorChart");
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Commercial", "Industrial", "Infrastructure", "Healthcare"],
            datasets: [
              {
                data: [40, 25, 20, 15],
                backgroundColor: [
                  "#1d4ed8",
                  "#3b82f6",
                  "#93c5fd",
                  "#dbeafe",
                ],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            cutout: "70%",
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  font: { size: 14, family: "Inter", weight: 500 },
                  color: "#52525b",
                  padding: 20,
                  usePointStyle: true,
                },
              },
            },
          },
        });
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
      

<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<a className="text-xl tracking-tight font-semibold text-gray-900 flex items-center gap-2" href="#">
          HC
        </a>
<nav className="hidden lg:flex gap-8 items-center text-sm font-medium" id="nav">
<a className="hover:text-[#1d4ed8] transition-colors duration-200" href="#home">Home</a>
<a className="hover:text-[#1d4ed8] transition-colors duration-200" href="#about">About</a>
<a className="hover:text-[#1d4ed8] transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-[#1d4ed8] transition-colors duration-200" href="#projects">Projects</a>
<a className="hover:text-[#1d4ed8] transition-colors duration-200" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden lg:inline-flex items-center gap-2 rounded-md shadow-sm bg-[#1d4ed8] text-white px-4 py-2 text-sm font-medium hover:bg-[#1e40af] transition" href="#contact">
<span>Get a Quote</span>
<i className="stroke-current" data-lucide="chevron-right" height="18" strokeWidth="1.5" width="18"></i>
</a>

<button aria-label="Open Menu" className="lg:hidden rounded-md p-2 hover:bg-gray-100" id="menuBtn">
<i className="stroke-gray-900" data-lucide="menu" height="24" strokeWidth="1.5" width="24"></i>
</button>
</div>
</div>

<div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl flex-col p-8 gap-6 hidden" id="mobileNav">
<div className="flex justify-between items-center mb-8">
<span className="text-xl font-semibold tracking-tight">HC</span>
<button className="p-2 rounded-md hover:bg-gray-100" id="closeBtn">
<i className="stroke-gray-900" data-lucide="x" height="24" strokeWidth="1.5" width="24"></i>
</button>
</div>
<nav className="flex flex-col gap-6 text-lg font-medium">
<a className="hover:text-[#1d4ed8]" href="#home">Home</a>
<a className="hover:text-[#1d4ed8]" href="#about">About</a>
<a className="hover:text-[#1d4ed8]" href="#services">Services</a>
<a className="hover:text-[#1d4ed8]" href="#projects">Projects</a>
<a className="hover:text-[#1d4ed8]" href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="pt-24 lg:pt-28 relative isolate overflow-hidden" id="home">
<img alt="construction site" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
<h1 className="reveal text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-gray-900 max-w-3xl">
          Innovative Solutions For Complex Construction Projects
        </h1>
<p className="reveal text-lg sm:text-xl text-gray-600 max-w-2xl" style={{transitionDelay: '120ms'}}>
          From pre-construction to final delivery, we provide comprehensive,
          client-focused services driven by quality, safety and integrity.
        </p>
<div className="reveal flex flex-col sm:flex-row items-center gap-4" style={{transitionDelay: '240ms'}}>
<a className="inline-flex items-center gap-2 rounded-md shadow-sm bg-[#1d4ed8] text-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-[#1e40af] transition" href="#projects">Our Projects</a>
<a className="inline-flex items-center gap-2 rounded-md border border-gray-300 hover:border-gray-400 bg-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-gray-50 transition" href="#contact">
            Contact Us
          </a>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 border-t border-gray-200 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
<div className="reveal max-w-xl">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900">
            Building Trust Since 1984
          </h2>
<p className="mt-6 text-gray-600 leading-relaxed">
            Hadley Construction is a family-owned general contractor committed
            to delivering high-quality, cost-effective projects on schedule. Our
            team collaborates seamlessly with owners, architects, and
            subcontractors to bring visions to life while maintaining the
            highest safety standards.
          </p>
<div className="mt-8 grid grid-cols-2 gap-6">
<div>
<p className="text-3xl font-semibold tracking-tight text-gray-900">275+</p>
<p className="text-sm text-gray-600">Completed Projects</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-gray-900">40</p>
<p className="text-sm text-gray-600">Years of Experience</p>
</div>
</div>
</div>
<div className="reveal relative">
<img alt="Engineers discussing plans" className="rounded-lg shadow-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-gray-200 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="reveal text-3xl tracking-tight font-semibold text-gray-900 text-center mb-16">
          Comprehensive Services
        </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="reveal p-8 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition shadow-sm">
<i className="stroke-[#1d4ed8] mb-4" data-lucide="hammer" height="32" strokeWidth="1.5" width="32"></i>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">
              General Contracting
            </h3>
<p className="mt-2 text-sm text-gray-600 leading-relaxed">
              End-to-end project execution with meticulous coordination and
              transparent communication.
            </p>
</div>
<div className="reveal p-8 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition shadow-sm" style={{transitionDelay: '120ms'}}>
<i className="stroke-[#1d4ed8] mb-4" data-lucide="hard-hat" height="32" strokeWidth="1.5" width="32"></i>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">
              Design-Build
            </h3>
<p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Unified design and construction services that streamline workflows
              and accelerate delivery.
            </p>
</div>
<div className="reveal p-8 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition shadow-sm" style={{transitionDelay: '240ms'}}>
<i className="stroke-[#1d4ed8] mb-4" data-lucide="shield" height="32" strokeWidth="1.5" width="32"></i>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">
              Safety Management
            </h3>
<p className="mt-2 text-sm text-gray-600 leading-relaxed">
              A proactive culture prioritizing worker welfare and regulatory
              compliance on every site.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-gray-200 bg-gray-50" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="reveal text-3xl tracking-tight font-semibold text-gray-900 text-center mb-16">
          Featured Projects
        </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<figure className="reveal relative overflow-hidden rounded-lg shadow-sm">
<img alt="Commercial building" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</figure>
<figure className="reveal relative overflow-hidden rounded-lg shadow-sm" style={{transitionDelay: '120ms'}}>
<img alt="Industrial facility" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</figure>
<figure className="reveal relative overflow-hidden rounded-lg shadow-sm" style={{transitionDelay: '240ms'}}>
<img alt="Infrastructure project" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</figure>
</div>
</div>
</section>

<section className="py-24 sm:py-32 border-t border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
<div className="reveal flex-1">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900 mb-6">
            Industry Focus
          </h2>
<p className="text-gray-600 leading-relaxed">
            We build across diverse sectors, tailoring our approach to the
            unique needs of each market.
          </p>
</div>
<div className="reveal flex-1" style={{transitionDelay: '120ms'}}>
<div className="w-full max-w-xs mx-auto">
<canvas height="400" id="sectorChart" width="400"></canvas>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 border-t border-gray-200 bg-gray-50" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
<h2 className="reveal text-3xl tracking-tight font-semibold text-gray-900">
          Ready to Build?
        </h2>
<p className="reveal text-gray-600 leading-relaxed max-w-xl" style={{transitionDelay: '120ms'}}>
          Let’s discuss your next project and explore how Hadley Construction
          can deliver exceptional value and craftsmanship.
        </p>
<a className="reveal inline-flex items-center gap-2 rounded-md shadow-sm bg-[#1d4ed8] text-white px-8 py-4 text-base font-medium hover:bg-[#1e40af] transition" href="mailto:info@hadleyconstruction.com" style={{transitionDelay: '240ms'}}>
<i className="stroke-current" data-lucide="phone" height="20" strokeWidth="1.5" width="20"></i>
<span>Schedule a Call</span>
</a>
</div>
</section>

<footer className="border-t border-gray-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-gray-600">
          © <span id="year"></span> Hadley Construction. All rights reserved.
        </p>
<div className="flex gap-6 text-sm">
<a className="hover:text-[#1d4ed8]" href="#">Privacy</a>
<a className="hover:text-[#1d4ed8]" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
