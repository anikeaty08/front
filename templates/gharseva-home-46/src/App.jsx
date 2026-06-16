import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- Navigation ---
      const menuBtn = document.getElementById('menu-btn');
      const closeMenuBtn = document.getElementById('close-menu-btn');
      const navOverlay = document.getElementById('nav-overlay');

      function toggleMenu() {
          const isOpen = navOverlay.classList.contains('open');
          if (isOpen) {
              navOverlay.classList.remove('open');
              document.body.style.overflow = '';
          } else {
              navOverlay.classList.add('open');
              document.body.style.overflow = 'hidden';
          }
      }

      menuBtn.addEventListener('click', toggleMenu);
      closeMenuBtn.addEventListener('click', toggleMenu);

      // --- Reveal Animation ---
      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  entry.target.classList.remove('reveal-init');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-element').forEach((el) => {
          el.classList.add('reveal-init');
          observer.observe(el);
      });

      // --- Rating Slider ---
      const track = document.getElementById('slider-track');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let slideIndex = 0;
      const totalSlides = 3;

      function updateSlider() {
          const cardWidth = track.firstElementChild.offsetWidth; 
          const gap = 32; 
          const moveAmount = (cardWidth + gap) * slideIndex;
          track.style.transform = `translateX(-${moveAmount}px)`;
      }

      if(nextBtn && prevBtn && track) {
          nextBtn.addEventListener('click', () => {
              if (slideIndex < totalSlides - 1) {
                  slideIndex++;
                  updateSlider();
              }
          });

          prevBtn.addEventListener('click', () => {
              if (slideIndex > 0) {
                  slideIndex--;
                  updateSlider();
              }
          });
          
          window.addEventListener('resize', updateSlider);
      }

      // --- FAQ Accordion ---
      const accordions = document.querySelectorAll('.accordion-item');

      accordions.forEach(item => {
          const header = item.querySelector('.accordion-header');
          const content = item.querySelector('.accordion-content');
          const iconBg = item.querySelector('.accordion-icon');

          header.addEventListener('click', () => {
              const isActive = item.classList.contains('active');

              accordions.forEach(otherItem => {
                  otherItem.classList.remove('active');
                  otherItem.querySelector('.accordion-content').style.maxHeight = 0;
                  
                  // Reset inactive icon
                  const otherIcon = otherItem.querySelector('.accordion-icon');
                  otherIcon.classList.remove('bg-white', 'text-black');
                  otherIcon.classList.add('bg-white/5', 'text-white', 'border', 'border-white/10');
                  
                  otherItem.classList.remove('shadow-[0_4px_30px_rgba(255,255,255,0.02)]');
              });

              if (!isActive) {
                  item.classList.add('active');
                  item.classList.add('shadow-[0_4px_30px_rgba(255,255,255,0.02)]');
                  content.style.maxHeight = content.scrollHeight + "px";

                  // Set active icon
                  iconBg.classList.remove('bg-white/5', 'text-white', 'border', 'border-white/10');
                  iconBg.classList.add('bg-white', 'text-black');
              }
          });
      });
      
      // Init first accordion height
      const activeAccordionContent = document.querySelector('.accordion-item.active .accordion-content');
      if(activeAccordionContent) {
          activeAccordionContent.style.maxHeight = activeAccordionContent.scrollHeight + "px";
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 reveal-element visible">
<div className="glass-panel flex gap-3 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] items-center justify-between transition-all duration-500 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] hover:border-white/20">
<button className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 ease-out group" id="menu-btn">
<iconify-icon className="text-xl text-white group-hover:scale-110 transition-transform duration-300" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="px-4 font-normal tracking-tight text-lg hidden md:block text-white">
          GharSeva
        </div>
<a className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gray-200" href="#services">
          Book Now
          <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<div className="fixed inset-0 bg-[#0A0A0A] z-[60] flex flex-col opacity-0 invisible" id="nav-overlay">
<div className="md:top-8 md:right-8 absolute top-6 right-6">
<button className="flex hover:scale-110 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/5 w-14 h-14 rounded-full shadow-sm items-center justify-center border border-white/10 hover:bg-white/10" id="close-menu-btn">
<iconify-icon className="text-3xl text-white" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="flex flex-col items-center gap-8 md:gap-10" id="nav-links">
<a className="text-4xl md:text-6xl font-normal tracking-tighter hover:text-white/40 hover:scale-105 transition-all duration-300 ease-out text-white" href="#services" onclick="toggleMenu()">
            Services
          </a>
<a className="text-4xl md:text-6xl font-normal tracking-tighter hover:text-white/40 hover:scale-105 transition-all duration-300 ease-out text-white" href="#how-it-works" onclick="toggleMenu()">
            How It Works
          </a>
<a className="text-4xl md:text-6xl font-normal tracking-tighter hover:text-white/40 hover:scale-105 transition-all duration-300 ease-out text-white" href="#pricing" onclick="toggleMenu()">
            Pricing
          </a>
<a className="text-4xl md:text-6xl font-normal tracking-tighter hover:text-white/40 hover:scale-105 transition-all duration-300 ease-out text-white" href="#faq" onclick="toggleMenu()">
            FAQ
          </a>
</div>
</div>
</div>

<header className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-center items-center overflow-hidden bg-[#0A0A0A]">
<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-0">
<img alt="Clean Premium Home" className="opacity-20 w-full h-full object-cover scale-105 bg-animate" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-[#0A0A0A] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center text-white w-full max-w-[90vw] mt-16">
<span className="text-gray-400 text-sm md:text-base tracking-widest uppercase mb-6 font-medium reveal-element visible">Your Home, Our Pride</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-[-0.04em] font-normal reveal-element visible max-w-5xl mx-auto" style={{transitionDelay: '100ms'}}>
          Premium Home Services, <br/>
<span className="text-gray-600 transition-colors duration-700 hover:text-white cursor-default">Delivered With Care.</span>
</h1>
<p className="text-gray-400 mt-8 text-lg md:text-xl font-light reveal-element visible max-w-2xl" style={{transitionDelay: '200ms'}}>
          Trusted by 50,000+ households across India. Book expert cleaners, plumbers, and technicians in seconds.
        </p>

<div className="mt-12 w-full max-w-2xl relative reveal-element visible glass-panel rounded-full p-2 flex items-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] hover:border-white/20 group" style={{transitionDelay: '300ms'}}>
<div className="pl-6 pr-4 text-gray-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-500 font-light text-base md:text-lg" placeholder="What service do you need? (e.g., AC Repair, Cleaning)" type="text"/>
<button className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-300 ease-out shrink-0 hover:bg-gray-200">
                Search
            </button>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.02] py-8 relative z-20">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-10">
<div className="flex items-center gap-3 text-sm md:text-base text-gray-400 font-light reveal-element reveal-init" style={{transitionDelay: '0ms'}}>
<iconify-icon className="text-2xl text-white" icon="solar:shield-check-linear"></iconify-icon>
                Verified Professionals
            </div>
<div className="flex items-center gap-3 text-sm md:text-base text-gray-400 font-light reveal-element reveal-init" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-2xl text-white" icon="solar:star-fall-linear"></iconify-icon>
                4.9★ Average Rating
            </div>
<div className="flex items-center gap-3 text-sm md:text-base text-gray-400 font-light reveal-element reveal-init" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-2xl text-white" icon="solar:verified-check-linear"></iconify-icon>
                Insured &amp; Bonded
            </div>
<div className="flex items-center gap-3 text-sm md:text-base text-gray-400 font-light reveal-element reveal-init" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-2xl text-white" icon="solar:clock-circle-linear"></iconify-icon>
                Same Day Booking
            </div>
</div>
</section>

<section className="py-24 px-6 md:px-12 xl:px-24 relative">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 max-w-[1400px] mx-auto text-center md:text-left">
<div className="reveal-element flex flex-col justify-center gap-2 md:border-r border-white/10 md:pr-12 visible reveal-init group">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-white group-hover:-translate-y-1 transition-transform duration-500 ease-out">50k+</div>
<div className="text-sm md:text-lg text-gray-400 font-light leading-tight">Happy Customers</div>
</div>
<div className="reveal-element flex flex-col justify-center gap-2 md:border-r border-white/10 md:px-12 visible reveal-init group" style={{transitionDelay: '100ms'}}>
<div className="text-4xl md:text-5xl font-normal tracking-tight text-white group-hover:-translate-y-1 transition-transform duration-500 ease-out">1.2k+</div>
<div className="text-sm md:text-lg text-gray-400 font-light leading-tight">Verified Experts</div>
</div>
<div className="reveal-element flex flex-col justify-center gap-2 md:border-r border-white/10 md:px-12 visible reveal-init group" style={{transitionDelay: '200ms'}}>
<div className="text-4xl md:text-5xl font-normal tracking-tight text-white group-hover:-translate-y-1 transition-transform duration-500 ease-out">15+</div>
<div className="text-sm md:text-lg text-gray-400 font-light leading-tight">Cities Served</div>
</div>
<div className="reveal-element flex flex-col justify-center gap-2 md:pl-12 visible reveal-init group" style={{transitionDelay: '300ms'}}>
<div className="text-4xl md:text-5xl font-normal tracking-tight text-white group-hover:-translate-y-1 transition-transform duration-500 ease-out">4.9★</div>
<div className="text-sm md:text-lg text-gray-400 font-light leading-tight">Average Rating</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto" id="how-it-works">
<div className="text-center mb-16 reveal-element reveal-init">
<h2 className="text-4xl md:text-5xl leading-[1.1] font-normal tracking-tight mb-4 text-white">How It Works</h2>
<p className="text-gray-400 text-lg font-light max-w-xl mx-auto">Getting your home sorted is as simple as 1-2-3.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 reveal-element reveal-init" style={{transitionDelay: '200ms'}}></div>
<div className="bg-[#111] border border-white/5 rounded-[32px] p-8 text-center relative z-10 reveal-element reveal-init hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group">
<div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-6 shadow-sm group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">1</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Choose Service</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Select from our wide range of premium home maintenance and repair services.</p>
</div>
<div className="bg-[#111] border border-white/5 rounded-[32px] p-8 text-center relative z-10 reveal-element reveal-init hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-6 shadow-sm group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">2</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Pick a Slot</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Choose a convenient date and time. Same-day bookings are available.</p>
</div>
<div className="bg-[#111] border border-white/5 rounded-[32px] p-8 text-center relative z-10 reveal-element reveal-init hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group" style={{transitionDelay: '200ms'}}>
<div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-6 shadow-md group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-500">3</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Expert Arrives</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Our background-verified professional arrives equipped to get the job done.</p>
</div>
</div>
</section>

<section className="md:px-12 xl:px-24 max-w-[1400px] mx-auto py-24 px-6" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-element reveal-init gap-6">
<div>
<h2 className="md:text-5xl leading-[1.1] text-4xl font-normal tracking-tight text-white">
            Expert Services
            <br/>
<span className="text-gray-500">for Your Home</span>
</h2>
</div>
<button className="bg-[#111] border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
            View All Services
        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#111] border border-white/5 rounded-[24px] p-8 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col reveal-element reveal-init">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
<iconify-icon className="text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:broom-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Deep Home Cleaning</h3>
<p className="text-gray-400 text-sm font-light mb-8 leading-relaxed flex-1">Professional deep cleaning for every corner of your home, leaving it spotless and fresh.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">4-6 Hrs</span>
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">Equipments Included</span>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors duration-500">
<div>
<span className="text-xs text-gray-500 block mb-1">Starting from</span>
<span className="text-xl font-medium text-white">₹399</span>
</div>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">Book Now</button>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-[24px] p-8 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col reveal-element reveal-init" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
<iconify-icon className="text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Plumbing &amp; Repairs</h3>
<p className="text-gray-400 text-sm font-light mb-8 leading-relaxed flex-1">Fix leaks, blockages, and installations with our trusted, verified plumbers.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">1-2 Hrs</span>
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">30-Day Warranty</span>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors duration-500">
<div>
<span className="text-xs text-gray-500 block mb-1">Starting from</span>
<span className="text-xl font-medium text-white">₹299</span>
</div>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">Book Now</button>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-[24px] p-8 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col reveal-element reveal-init" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
<iconify-icon className="text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Electrical Work</h3>
<p className="text-gray-400 text-sm font-light mb-8 leading-relaxed flex-1">Safe and certified electrical repairs and installations</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">1–3 Hrs</span>
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">Safety Certified</span>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors duration-500">
<div>
<span className="text-xs text-gray-500 block mb-1">From</span>
<span className="text-xl font-medium text-white">₹349</span>
</div>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">Book Now</button>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-[24px] p-8 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col reveal-element reveal-init">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
<iconify-icon className="text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:paint-roller-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Painting &amp; Renovation</h3>
<p className="text-gray-400 text-sm font-light mb-8 leading-relaxed flex-1">Wall painting and room renovation by skilled professionals</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">Per Room</span>
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">Premium Finish</span>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors duration-500">
<div>
<span className="text-xs text-gray-500 block mb-1">From</span>
<span className="text-xl font-medium text-white">₹999</span>
</div>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">Book Now</button>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-[24px] p-8 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col reveal-element reveal-init" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
<iconify-icon className="text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:bug-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">Pest Control</h3>
<p className="text-gray-400 text-sm font-light mb-8 leading-relaxed flex-1">Safe and effective pest removal for your entire home</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">2–3 Hrs</span>
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">Child Safe</span>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors duration-500">
<div>
<span className="text-xs text-gray-500 block mb-1">From</span>
<span className="text-xl font-medium text-white">₹499</span>
</div>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">Book Now</button>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-[24px] p-8 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col reveal-element reveal-init" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
<iconify-icon className="text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:snowflake-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-white">AC Service &amp; Repair</h3>
<p className="text-gray-400 text-sm font-light mb-8 leading-relaxed flex-1">Servicing and repair for all AC brands and models</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">1–2 Hrs</span>
<span className="text-xs border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-medium group-hover:border-white/30 transition-colors duration-500">All Brands</span>
</div>
<div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors duration-500">
<div>
<span className="text-xs text-gray-500 block mb-1">From</span>
<span className="text-xl font-medium text-white">₹449</span>
</div>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">Book Now</button>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 md:px-12 xl:px-24 mb-32 pt-12" id="pricing">
<div className="flex flex-col justify-between items-center text-center mb-16 gap-4 reveal-element reveal-init">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">Simple, Transparent Pricing</h2>
<p className="text-gray-400 text-lg font-light max-w-xl">No hidden charges. Ever.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#111] rounded-[32px] p-8 md:p-10 border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col reveal-element reveal-init group">
<div className="mb-8">
<h3 className="text-2xl font-normal tracking-tight mb-2 text-white">Basic</h3>
<p className="text-gray-400 text-sm font-light">Ideal for minor fixes and tasks.</p>
</div>
<div className="mb-8 flex items-baseline gap-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-white">₹499</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" icon="solar:check-circle-linear"></iconify-icon> 1 Service
            </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-75" icon="solar:check-circle-linear"></iconify-icon> Standard Slot
            </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-600 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> No Warranty
            </li>
</ul>
<a className="block w-full text-center py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" href="#services">Choose Basic</a>
</div>

<div className="bg-[#111] border-2 border-white rounded-[32px] p-8 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] relative flex flex-col reveal-element reveal-init md:-translate-y-4 hover:md:-translate-y-6 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide flex items-center gap-1">
<iconify-icon className="text-black" icon="solar:star-bold"></iconify-icon> MOST POPULAR
          </div>
<div className="mb-8">
<h3 className="text-2xl font-normal tracking-tight mb-2 text-white">Standard</h3>
<p className="text-gray-400 text-sm font-light">The perfect package for regular needs.</p>
</div>
<div className="mb-8 flex items-baseline gap-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-white">₹999</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" icon="solar:check-circle-linear"></iconify-icon> 3 Services
            </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-75" icon="solar:check-circle-linear"></iconify-icon> Priority Booking
            </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-100" icon="solar:check-circle-linear"></iconify-icon> 30-Day Warranty
            </li>
</ul>
<a className="block w-full text-center py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md" href="#services">Choose Standard</a>
</div>

<div className="bg-[#111] rounded-[32px] p-8 md:p-10 border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col reveal-element reveal-init group" style={{transitionDelay: '200ms'}}>
<div className="mb-8">
<h3 className="text-2xl font-normal tracking-tight mb-2 text-white">Premium</h3>
<p className="text-gray-400 text-sm font-light">Total peace of mind with total coverage.</p>
</div>
<div className="mb-8 flex items-baseline gap-1 transition-transform duration-500 group-hover:translate-x-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-white">₹1,999</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" icon="solar:check-circle-linear"></iconify-icon> Unlimited Services
            </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-75" icon="solar:check-circle-linear"></iconify-icon> Dedicated Expert
            </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-white text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-150" icon="solar:check-circle-linear"></iconify-icon> 60-Day Warranty
            </li>
</ul>
<a className="block w-full text-center py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" href="#services">Choose Premium</a>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-white/5 overflow-hidden select-none relative" id="testimonials">
<div className="md:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-element reveal-init">
<h2 className="md:text-5xl leading-tight text-4xl font-normal text-white tracking-tight">
            What Our <br/>
<span className="text-gray-500">Customers Say</span>
</h2>
<div className="flex gap-4 items-center">
<button className="w-14 h-14 rounded-full border border-white/10 bg-[#111] flex items-center justify-center hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm group text-white" id="prevBtn">
<iconify-icon className="text-2xl group-hover:text-black group-hover:-translate-x-1 transition-transform duration-300" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full border border-white/10 bg-[#111] flex items-center justify-center hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm group text-white" id="nextBtn">
<iconify-icon className="text-2xl group-hover:text-black group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-hidden reveal-element reveal-init" style={{transitionDelay: '200ms'}}>
<div className="flex gap-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" id="slider-track">

<div className="min-w-full md:min-w-[527px] flex flex-col group bg-[#111] h-[300px] border-white/5 border rounded-[24px] p-8 relative justify-between hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div>
<div className="text-[#F59E0B] tracking-widest text-sm mb-4">★★★★★</div>
<p className="text-xl leading-relaxed text-white tracking-tight max-w-sm font-light">
                  “The cleaning team was thorough and professional. Booked again the next month!”
                </p>
</div>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lg font-medium text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">P</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Priya S.</span>
<span className="text-gray-400 text-xs">Hyderabad</span>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[527px] flex flex-col group bg-[#111] h-[300px] border-white/5 border rounded-[24px] p-8 relative justify-between hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div>
<div className="text-[#F59E0B] tracking-widest text-sm mb-4">★★★★★</div>
<p className="text-xl leading-relaxed text-white tracking-tight max-w-sm font-light">
                  “AC service done in under an hour. Great value for money.”
                </p>
</div>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lg font-medium text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">R</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Rahul M.</span>
<span className="text-gray-400 text-xs">Bangalore</span>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[527px] flex flex-col group bg-[#111] h-[300px] border-white/5 border rounded-[24px] p-8 relative justify-between hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div>
<div className="text-[#F59E0B] tracking-widest text-sm mb-4">★★★★★</div>
<p className="text-xl leading-relaxed text-white tracking-tight max-w-sm font-light">
                  “Finally a service I can trust. No hidden charges at all.”
                </p>
</div>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lg font-medium text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">A</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Anita K.</span>
<span className="text-gray-400 text-xs">Mumbai</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto mb-12" id="faq">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="reveal-element reveal-init">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-6 text-white">
            Frequently Asked <br/> Questions
          </h2>
<p className="text-gray-400 font-light text-lg">Everything you need to know about GharSeva and our premium services.</p>
</div>
<div className="space-y-4 reveal-element reveal-init" style={{transitionDelay: '200ms'}}>

<div className="accordion-item active shadow-[0_4px_30px_rgba(255,255,255,0.02)] bg-[#111] rounded-[24px] border border-white/5 transition-all duration-500 hover:border-white/20">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight text-white">
                Are your professionals background-verified?
              </span>
<div className="bg-white text-black p-3 rounded-full shrink-0 accordion-icon flex items-center justify-center transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="accordion-content px-8" style={{maxHeight: '200px', opacity: '1'}}>
<div className="pb-8 text-gray-400 text-lg leading-relaxed font-light">
                Yes, absolutely. Every GharSeva professional undergoes a strict background check, identity verification, and hands-on skill assessment before they join our platform.
              </div>
</div>
</div>

<div className="accordion-item bg-[#111] rounded-[24px] border border-white/5 transition-all duration-500 hover:border-white/20">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight text-white">
                What if I'm not satisfied with the service?
              </span>
<div className="bg-white/5 text-white p-3 rounded-full shrink-0 accordion-icon flex items-center justify-center transition-colors duration-300 border border-white/10">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-400 text-lg leading-relaxed font-light">
                Your satisfaction is our priority. If you're not happy with the quality of work, we offer a free rework under our 30-Day Service Warranty policy for eligible services.
              </div>
</div>
</div>

<div className="accordion-item bg-[#111] rounded-[24px] border border-white/5 transition-all duration-500 hover:border-white/20">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight text-white">
                How do I reschedule or cancel a booking?
              </span>
<div className="bg-white/5 text-white p-3 rounded-full shrink-0 accordion-icon flex items-center justify-center transition-colors duration-300 border border-white/10">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-400 text-lg leading-relaxed font-light">
                You can easily reschedule or cancel your booking through our website up to 2 hours before the scheduled time slot without any penalty.
              </div>
</div>
</div>

<div className="accordion-item bg-[#111] rounded-[24px] border border-white/5 transition-all duration-500 hover:border-white/20">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight text-white">
                Which cities do you currently serve?
              </span>
<div className="bg-white/5 text-white p-3 rounded-full shrink-0 accordion-icon flex items-center justify-center transition-colors duration-300 border border-white/10">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-400 text-lg leading-relaxed font-light">
                We currently operate in Hyderabad, Bangalore, Mumbai, Pune, and Delhi. We are actively expanding to more locations soon.
              </div>
</div>
</div>

<div className="accordion-item bg-[#111] rounded-[24px] border border-white/5 transition-all duration-500 hover:border-white/20">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight text-white">
                Is same-day booking available?
              </span>
<div className="bg-white/5 text-white p-3 rounded-full shrink-0 accordion-icon flex items-center justify-center transition-colors duration-300 border border-white/10">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-400 text-lg leading-relaxed font-light">
                Yes! We offer emergency and same-day booking slots depending on expert availability in your area. Look for the 'Express' tag during booking.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] pt-24 pb-8 px-6 md:px-12 xl:px-24 rounded-t-[40px] border-t border-white/5 relative mt-12 reveal-element reveal-init">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">

<div className="flex flex-col items-start space-y-4">
<span className="text-2xl font-normal tracking-tight text-white">GharSeva</span>
<p className="text-gray-500 font-light">Your Home, Our Pride</p>
<p className="text-sm text-gray-400 pt-4">Made in India 🇮🇳</p>
</div>

<div className="flex flex-col items-start md:items-center space-y-4">
<div className="flex flex-col space-y-4 text-left">
<a className="text-lg font-normal text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 tracking-tight" href="#services">Services</a>
<a className="text-lg font-normal text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 tracking-tight" href="#how-it-works">How It Works</a>
<a className="text-lg font-normal text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 tracking-tight" href="#pricing">Pricing</a>
<a className="text-lg font-normal text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 tracking-tight" href="#faq">FAQ</a>
</div>
</div>

<div className="flex flex-col items-start md:items-end space-y-6">
<div className="flex gap-4">
<a className="w-12 h-12 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-12 h-12 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-linear"></iconify-icon>
</a>
<a className="w-12 h-12 bg-[#111] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:youtube-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="h-px w-full bg-white/10 mb-8"></div>
<div className="flex flex-col text-center space-y-4 text-sm text-gray-500 font-medium">
<p className="text-gray-400">Available in Hyderabad · Bangalore · Mumbai · Pune · Delhi</p>
<p>© 2025 GharSeva. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group">

<span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
<a className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.2)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.4)]" href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20book%20a%20home%20service" target="_blank">
<iconify-icon className="text-3xl text-white" icon="solar:chat-round-linear"></iconify-icon>
</a>
</div>


    </>
  );
}
