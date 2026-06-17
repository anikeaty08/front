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



      // Reviews Data
      const reviews = [
          { name: "Tim B.", location: "Kahibah", bike: "Orange Five", text: "Rick is a legend. Sorted out my suspension issues that two other shops couldn't fix. The Orange Five feels brand new again." },
          { name: "Sarah J.", location: "Newcastle", bike: "Commencal Meta", text: "Love that they are an official Commencal dealer. Got my new bike built up perfectly and the suspension dialled for my weight." },
          { name: "Mark D.", location: "Merewether", bike: "Specialized Levo", text: "Excellent E-bike service. The Bosch diagnostic found the error code immediately. Fast, professional and local." },
          { name: "Paul R.", location: "Glenrock", bike: "Santa Cruz", text: "Best wheel builder in the Hunter. My custom rims have taken a beating at Glenrock and are still dead straight." },
          { name: "Jason K.", location: "Warners Bay", bike: "Norco Sight", text: "The 'Like New' service is worth every cent. The bike runs silent and smooth. Highly recommend Rapid Descent." },
          { name: "Emma L.", location: "Charlestown", bike: "Trek Rail", text: "Dropped my bike off for a brake bleed and gear tune. Done in 24 hours. Great to have such a pro workshop in Kahibah." }
      ];

      // Marquee Logic
      function initMarquee() {
          const track = document.getElementById('marquee-track');
          if (!track) return;
          const allReviews = [...reviews, ...reviews]; // Duplicate for loop

          allReviews.forEach(review => {
              const card = document.createElement('div');
              card.className = "w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none";
              const daysAgo = Math.floor(Math.random() * 30) + 2;

              card.innerHTML = `
                  <div class="flex items-start justify-between mb-3">
                      <div class="flex items-center gap-3">
                          <div class="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">${review.name.charAt(0)}</div>
                          <div>
                              <div class="font-semibold text-[#244a70] leading-tight">${review.name}</div>
                              <div class="text-xs text-gray-500 mt-0.5">${review.location}</div>
                          </div>
                      </div>
                      <div class="flex text-[#305F8E] gap-0.5">
                          ${Array(5).fill('<svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>').join('')}
                      </div>
                  </div>
                  <p class="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">"${review.text}"</p>
                  <div class="mt-auto">
                      <div class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                        ${review.bike}
                      </div>
                  </div>
              `;
              track.appendChild(card);
          });
      }

      // Logic Init
      document.addEventListener('DOMContentLoaded', () => {
          initMarquee();
          initCalculator();

          // Header Scroll
          const header = document.getElementById('header');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 20) {
                  header.classList.add('bg-[#305F8E]/90', 'backdrop-blur-md', 'border-b', 'border-white/5', 'shadow-lg');
                  header.classList.remove('bg-transparent');
              } else {
                  header.classList.remove('bg-[#305F8E]/90', 'backdrop-blur-md', 'border-b', 'border-white/5', 'shadow-lg');
                  header.classList.add('bg-transparent');
              }
          });

          // Mobile Menu
          const mobileBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          mobileBtn.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
          });
          document.querySelectorAll('#mobile-menu a').forEach(link => {
              link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
          });
      });

      // Service Calculator
      function initCalculator() {
          const tabs = document.querySelectorAll('.service-tab');
          const panels = document.querySelectorAll('.service-panel');
          const totalDisplay = document.getElementById('live-total-display');

          function calculateTotal() {
              let total = 0;
              const activePanel = Array.from(panels).find(p => !p.classList.contains('hidden'));
              if (!activePanel) return;

              if (activePanel.id === 'panel-packages') {
                  const selected = activePanel.querySelector('input[name="service_type"]:checked');
                  if (selected) total = parseInt(selected.dataset.price);
              } else {
                  const checkedBoxes = activePanel.querySelectorAll('input[type="checkbox"]:checked');
                  checkedBoxes.forEach(box => total += parseInt(box.dataset.price || 0));
              }
              animateValue(totalDisplay, parseInt(totalDisplay.textContent), total, 300);
          }

          tabs.forEach(tab => {
              tab.addEventListener('click', () => {
                  tabs.forEach(t => {
                      t.classList.remove('bg-white', 'shadow-sm', 'text-[#305F8E]', 'ring-1', 'ring-black/5');
                      t.classList.add('text-neutral-500', 'hover:text-[#305F8E]');
                  });
                  tab.classList.remove('text-neutral-500', 'hover:text-[#305F8E]');
                  tab.classList.add('bg-white', 'shadow-sm', 'text-[#305F8E]', 'ring-1', 'ring-black/5');

                  const targetId = tab.dataset.target;
                  panels.forEach(panel => {
                      if(panel.id === targetId) {
                          panel.classList.remove('hidden');
                      } else {
                          panel.classList.add('hidden');
                      }
                  });
                  calculateTotal();
              });
          });

          const allInputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
          allInputs.forEach(input => input.addEventListener('change', calculateTotal));
      }

      function animateValue(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              obj.innerHTML = Math.floor(progress * (end - start) + start);
              if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
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
      
<div className="fixed inset-0 -z-10 h-full w-full bg-white pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#305F8E08_1px,transparent_1px),linear-gradient(to_bottom,#305F8E08_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
<div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-[#D4FF33]/20 blur-[120px]"></div>
<div className="absolute top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#305F8E]/10 blur-[100px]"></div>
<div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#D4FF33]/10 blur-[80px]"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3" id="header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex items-center justify-between h-14">

<a className="font-bebas text-4xl tracking-tight text-white transition-colors duration-300" href="#" id="header-logo">
            RAPID
            <span className="text-[#D4FF33]">DESCENT</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-white/80 hover:text-[#D4FF33] transition-colors" href="#services">
              Services
            </a>
<a className="text-xs font-medium uppercase tracking-widest text-white/80 hover:text-[#D4FF33] transition-colors" href="#pricing">
              Pricing
            </a>
<a className="text-xs font-medium uppercase tracking-widest text-white/80 hover:text-[#D4FF33] transition-colors" href="#about">
              About
            </a>
<a className="text-xs font-medium uppercase tracking-widest text-white/80 hover:text-[#D4FF33] transition-colors" href="#products">
              Sales
            </a>
<a className="text-xs font-medium uppercase tracking-widest text-white/80 hover:text-[#D4FF33] transition-colors" href="#contact">
              Contact
            </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#305F8E] bg-[#D4FF33] rounded-lg hover:bg-[#ccee22] transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-lime-400/20" href="#booking">
              Book Appointment
            </a>
<button aria-label="Toggle menu" className="md:hidden p-2 text-white hover:text-[#D4FF33] transition-colors" id="mobile-menu-btn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>
</div>

<div className="md:hidden absolute top-full left-0 right-0 bg-[#305F8E] border-b border-white/10 hidden" id="mobile-menu">
<div className="flex flex-col p-4 space-y-4">
<a className="text-lg font-medium text-white/90 hover:text-[#D4FF33]" href="#services">
            Services
          </a>
<a className="text-lg font-medium text-white/90 hover:text-[#D4FF33]" href="#pricing">
            Pricing
          </a>
<a className="text-lg font-medium text-white/90 hover:text-[#D4FF33]" href="#about">
            About
          </a>
<a className="text-lg font-medium text-white/90 hover:text-[#D4FF33]" href="#products">
            Bike Sales
          </a>
<a className="text-lg font-semibold text-[#D4FF33]" href="#booking">
            Book Now
          </a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#305F8E]">
<div className="absolute inset-0 z-0">

<img alt="Workshop Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1600&amp;q=80"/>
<div className="bg-gradient-to-b from-[#305F8E]/90 via-[#305F8E]/60 to-[#305F8E] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF33] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF33]"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest text-white/90">
            Kahibah • Hunter Region
          </span>
</div>
<h1 className="font-bebas text-7xl md:text-9xl text-white leading-[0.85] tracking-tight mb-8">
          TRUSTED
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF33] to-[#eaff80]">
            PRECISION
          </span>
<br/>
          WORKSHOP
        </h1>
<p className="text-2xl md:text-3xl text-blue-100 max-w-3xl mx-auto mb-12 font-light">
          Specialist Mountain Bike Servicing • Custom Wheels • Suspension •
          Bosch E-Bike Certified
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="w-full sm:w-auto px-8 py-4 bg-[#D4FF33] text-[#305F8E] text-lg font-medium rounded-lg hover:bg-[#ccee22] transition-all hover:scale-[1.02] shadow-xl shadow-lime-400/20" href="#booking">
            Book Appointment
          </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-colors" href="#services">
            Our Services
          </a>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</section>

<section className="md:py-32 pt-24 pb-24" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
            What We Do
          </span>
<h2 className="font-bebas text-6xl text-[#305F8E] mb-6 tracking-tight">
            Specialist Services
          </h2>
<p className="text-neutral-500 text-xl font-light">
            From routine maintenance to complex suspension overhauls and custom
            builds, we tailor our work to cyclists of all levels.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl border border-neutral-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[360px]">
<img alt="Suspension Service" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5c]/90 via-[#1e3a5c]/80 to-[#1e3a5c]/95 transition-opacity duration-300"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f718461-609e-4bfe-bf9d-6685631261c6_800w.jpg)] bg-cover bg-center z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="transition-all duration-300 bg-[#1e3a5c]/95 opacity-50 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4FF33] group-hover:border-[#D4FF33] transition-colors relative z-10">
<svg className="text-white group-hover:text-[#305F8E] w-7 h-7 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
</div>
<h3 className="font-bebas text-3xl mb-3 text-white tracking-wide relative z-10">
                Suspension Servicing
              </h3>
<p className="text-blue-100/80 text-lg leading-relaxed mb-6 font-light relative z-10">
                Fork lowers, air shaft service, and complete shock overhauls.
                Keep your ride plush and responsive.
              </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-neutral-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[360px]">
<img alt="Custom Wheels" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5c]/90 via-[#1e3a5c]/80 to-[#1e3a5c]/95 transition-opacity duration-300"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5737295-15e3-46d8-a7d1-0e3f0e43374c_800w.jpg)] bg-cover bg-center z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="transition-all duration-300 bg-[#1e3a5c]/95 opacity-50 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4FF33] group-hover:border-[#D4FF33] transition-colors relative z-10">
<svg className="text-white group-hover:text-[#305F8E] w-7 h-7 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m12 2 2.7 9.9"></path>
<path d="m12 22-2.7-9.9"></path>
<path d="m2 12 9.9-2.7"></path>
<path d="m22 12-9.9 2.7"></path>
</svg>
</div>
<h3 className="font-bebas text-3xl mb-3 text-white tracking-wide relative z-10">
                Custom Wheel Builds
              </h3>
<p className="text-blue-100/80 text-lg leading-relaxed mb-6 font-light relative z-10">
                Expert wheel building, truing, and tensioning. Custom lace-ups
                tailored to your riding style and weight.
              </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-neutral-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[360px]">
<img alt="E-Bike Service" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5c]/90 via-[#1e3a5c]/80 to-[#1e3a5c]/95 transition-opacity duration-300"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e545759f-3ae5-4c7f-9d48-5ad021f6641c_800w.jpg)] bg-cover bg-center z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="transition-all duration-300 bg-[#1e3a5c]/95 opacity-50 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4FF33] group-hover:border-[#D4FF33] transition-colors relative z-10">
<svg className="text-white group-hover:text-[#305F8E] w-7 h-7 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 2v2"></path>
<path d="M17 2v2"></path>
<path d="M12 2v2"></path>
<path className="" d="M2 9h20"></path>
<path d="M2 15h20"></path>
<path d="M12 22v-7"></path>
<path d="M7 22v-7"></path>
<path d="M17 22v-7"></path>
</svg>
</div>
<h3 className="font-bebas text-3xl mb-3 text-white tracking-wide relative z-10">
                E-Bike Specialist
              </h3>
<p className="text-blue-100/80 text-lg leading-relaxed mb-6 font-light relative z-10">
                Bosch certified technicians. Diagnostics, firmware updates, and
                drivetrain reinforcement for high-torque systems.
              </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-neutral-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[360px]">
<img alt="Custom Builds" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5c]/90 via-[#1e3a5c]/80 to-[#1e3a5c]/95 transition-opacity duration-300"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac7d4f45-65e9-4857-a97d-857d9ffa0225_800w.jpg)] bg-cover bg-center z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="transition-all duration-300 bg-[#1e3a5c]/95 opacity-40 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4FF33] group-hover:border-[#D4FF33] transition-colors relative z-10">
<svg className="text-white group-hover:text-[#305F8E] w-7 h-7 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
</svg>
</div>
<h3 className="font-bebas text-3xl mb-3 text-white tracking-wide relative z-10">
                Pro Builds
              </h3>
<p className="text-blue-100/80 text-lg leading-relaxed mb-6 font-light relative z-10">
                Assembly of online-purchased bikes, frame swaps, and full custom
                builds from the frame up with expert advice.
              </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-neutral-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[360px]">
<img alt="Event Support" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5c]/90 via-[#1e3a5c]/80 to-[#1e3a5c]/95 transition-opacity duration-300"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3d4e52d-155f-4fe5-9b0e-32c4b1089425_800w.jpg)] bg-cover bg-center z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="transition-all duration-300 bg-[#1e3a5c]/95 opacity-50 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4FF33] group-hover:border-[#D4FF33] transition-colors relative z-10">
<svg className="text-white group-hover:text-[#305F8E] w-7 h-7 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
<line x1="4" x2="4" y1="22" y2="15"></line>
</svg>
</div>
<h3 className="font-bebas text-3xl mb-3 text-white tracking-wide relative z-10">
                Mechanic for Hire
              </h3>
<p className="text-blue-100/80 text-lg leading-relaxed mb-6 font-light relative z-10">
                Available for track-side support at events across NSW &amp;
                abroad. Pro-level support when it counts.
              </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-neutral-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[360px]">
<img alt="General Repair" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5c]/90 via-[#1e3a5c]/80 to-[#1e3a5c]/95 transition-opacity duration-300"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3248d0f5-3fbc-4708-945d-4b9a6f74dc6d_800w.jpg)] bg-cover bg-center z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="transition-all duration-300 bg-[#1e3a5c]/95 opacity-50 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4FF33] group-hover:border-[#D4FF33] transition-colors relative z-10">
<svg className="text-white group-hover:text-[#305F8E] w-7 h-7 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="font-bebas text-3xl mb-3 text-white tracking-wide relative z-10">
                Routine Repairs
              </h3>
<p className="text-blue-100/80 text-lg leading-relaxed mb-6 font-light relative z-10">
                Brake bleeds, gear tunes, and safety checks. Precision work to
                keep your bike running fresh.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#305F8E] text-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#D4FF33] font-medium text-xs uppercase tracking-widest mb-3 block">
            Pricing
          </span>
<h2 className="font-bebas text-6xl text-white mb-6 tracking-tight">
            Service Packages
          </h2>
<p className="text-blue-100/70 text-2xl font-light">
            Transparent pricing for precision work.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

<div className="relative rounded-xl p-8 border border-[#D4FF33]/20 bg-gradient-to-br from-[#244a70]/50 via-[#1e3a5c]/80 to-[#102a45] backdrop-blur-sm shadow-xl hover:border-[#D4FF33]/50 transition-all duration-500 group">
<h3 className="text-2xl font-semibold mb-2 text-white tracking-tight">
              Fresh As
            </h3>
<div className="font-bebas text-7xl mb-4 text-[#D4FF33] tracking-tight">
              $220
            </div>
<p className="text-blue-100/60 text-base mb-8">
              Routine maintenance to keep you rolling.
            </p>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Gear tune &amp; indexing
              </li>
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Brake adjustment / bleed check
              </li>
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Bolt check &amp; safety inspection
              </li>
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Bike wash &amp; lube
              </li>
</ul>
<a className="block w-full text-center py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium text-base text-white" href="#booking">
              Book Now
            </a>
</div>

<div className="relative rounded-xl p-8 border border-[#D4FF33]/40 bg-gradient-to-br from-[#305F8E]/40 via-[#244a70]/90 to-[#102a45] backdrop-blur-sm shadow-[0_0_40px_rgba(212,255,51,0.05)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4FF33] text-[#305F8E] text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg shadow-lime-400/20">
              Recommended
            </div>
<h3 className="text-2xl font-semibold mb-2 text-white tracking-tight">
              Like New
            </h3>
<div className="font-bebas text-7xl mb-4 text-white tracking-tight">
              $390
            </div>
<p className="text-blue-100/60 text-base mb-8">
              Annual service for maximum performance.
            </p>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4 text-base text-white/90 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Complete drivetrain strip &amp; clean
              </li>
<li className="flex items-start gap-4 text-base text-white/90 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Bottom bracket &amp; headset service
              </li>
<li className="flex items-start gap-4 text-base text-white/90 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Wheel true &amp; spoke tension
              </li>
<li className="flex items-start gap-4 text-base text-white/90 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Full brake bleed (F+R)
              </li>
</ul>
<a className="block w-full text-center py-4 rounded-lg bg-[#D4FF33] hover:bg-[#ccee22] text-[#305F8E] transition-colors font-medium text-base shadow-lg shadow-lime-400/10" href="#booking">
              Book Now
            </a>
</div>

<div className="relative rounded-xl p-8 border border-[#D4FF33]/20 bg-gradient-to-br from-[#244a70]/50 via-[#1e3a5c]/80 to-[#102a45] backdrop-blur-sm shadow-xl hover:border-[#D4FF33]/50 transition-all duration-500 group">
<h3 className="text-2xl font-semibold mb-2 text-white tracking-tight">
              New Bike PRO
            </h3>
<div className="font-bebas text-7xl mb-4 text-[#D4FF33] tracking-tight">
              $1500
            </div>
<p className="text-blue-100/60 text-base mb-8">
              Ultimate custom build experience.
            </p>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Complete bare frame build
              </li>
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Ride wrap installation
              </li>
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Custom suspension baseline setup
              </li>
<li className="flex items-start gap-4 text-base text-blue-100/80 font-light">
<svg className="w-5 h-5 text-[#D4FF33] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Tubeless setup &amp; insert install
              </li>
</ul>
<a className="block w-full text-center py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium text-base text-white" href="#booking">
              Book Now
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
              About RDW
            </span>
<h2 className="font-bebas text-6xl text-[#305F8E] mb-6 tracking-tight">
              Rapid Descent Workshop
            </h2>
<p className="text-neutral-600 text-xl mb-6 font-light leading-relaxed">
              Based in Kahibah, NSW, Rapid Descent Workshop is a specialist
              repair service dedicated to mountain bikes and the riders who push
              them to the limit.
            </p>
<p className="text-neutral-500 text-lg mb-6 font-light leading-relaxed">
              We focus on precision. Whether it's a complex suspension service,
              a custom wheel build, or an E-bike diagnostic, every job is
              treated with the same attention to detail as a race bike.
            </p>
<p className="text-neutral-500 text-lg font-light leading-relaxed">
              We are an
              <span className="text-[#305F8E] font-medium">
                Authorised Dealer for Orange Bikes and Commencal
              </span>
              , offering full builds, custom setups, and expert local advice for
              the Hunter region trails.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="p-8 rounded-xl border border-blue-100/60 shadow-sm bg-[#f0f7ff] hover:bg-blue-50 transition-colors duration-300">
<div className="w-12 h-12 rounded bg-[#305F8E]/10 flex items-center justify-center mb-5 text-[#305F8E]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<h4 className="font-medium text-xl text-[#305F8E] mb-2 tracking-tight">
                Authorised Dealer
              </h4>
<p className="text-sm text-neutral-500">
                Official dealer for Orange Bikes (UK) and Commencal.
              </p>
</div>

<div className="p-8 rounded-xl border border-blue-100/60 shadow-sm bg-[#f8fafc] hover:bg-slate-50 transition-colors duration-300">
<div className="w-12 h-12 rounded bg-[#305F8E]/10 flex items-center justify-center mb-5 text-[#305F8E]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h4 className="font-medium text-xl text-[#305F8E] mb-2 tracking-tight">
                Mechanic for Hire
              </h4>
<p className="text-sm text-neutral-500">
                Available for track-side support at events in NSW &amp; abroad.
              </p>
</div>

<div className="p-8 rounded-xl border border-blue-100/60 shadow-sm bg-[#f0f9ff] hover:bg-sky-50 transition-colors duration-300">
<div className="w-12 h-12 rounded bg-[#305F8E]/10 flex items-center justify-center mb-5 text-[#305F8E]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 2v2"></path>
<path d="M17 2v2"></path>
<path d="M12 2v2"></path>
<path d="M2 9h20"></path>
<path d="M2 15h20"></path>
<path d="M12 22v-7"></path>
<path d="M7 22v-7"></path>
<path d="M17 22v-7"></path>
</svg>
</div>
<h4 className="font-medium text-xl text-[#305F8E] mb-2 tracking-tight">
                E-Bike Ready
              </h4>
<p className="text-sm text-neutral-500">
                Bosch certified. Software updates, diagnostics and repairs.
              </p>
</div>

<div className="p-8 rounded-xl border border-blue-100/60 shadow-sm bg-[#fff] hover:bg-neutral-50 transition-colors duration-300">
<div className="w-12 h-12 rounded bg-[#305F8E]/10 flex items-center justify-center mb-5 text-[#305F8E]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h4 className="font-medium text-xl text-[#305F8E] mb-2 tracking-tight">
                Appointment Only
              </h4>
<p className="text-sm text-neutral-500">
                Dedicated time slots ensure your bike gets the focus it
                deserves.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="reviews">
<div className="w-full pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
            Testimonials
          </span>
<h2 className="font-bebas text-6xl text-[#305F8E] tracking-tight">
            Rider Feedback
          </h2>
</div>
<div className="relative w-full overflow-hidden mask-linear">
<div className="flex gap-6 w-max animate-marquee px-4" id="marquee-track" style={{animationDuration: '200s'}}>

<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    T
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Tim B.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Kahibah</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Rick is a legend. Sorted out my suspension issues that two
                other shops couldn't fix. The Orange Five feels brand new
                again."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Orange Five
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    S
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Sarah J.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Newcastle</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Love that they are an official Commencal dealer. Got my new
                bike built up perfectly and the suspension dialled for my
                weight."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Commencal Meta
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    M
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Mark D.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Merewether</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Excellent E-bike service. The Bosch diagnostic found the error
                code immediately. Fast, professional and local."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Specialized Levo
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    P
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Paul R.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Glenrock</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Best wheel builder in the Hunter. My custom rims have taken a
                beating at Glenrock and are still dead straight."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Santa Cruz
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    J
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Jason K.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Warners Bay</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "The 'Like New' service is worth every cent. The bike runs
                silent and smooth. Highly recommend Rapid Descent."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Norco Sight
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    E
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Emma L.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Charlestown</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Dropped my bike off for a brake bleed and gear tune. Done in 24
                hours. Great to have such a pro workshop in Kahibah."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Trek Rail
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    T
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Tim B.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Kahibah</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Rick is a legend. Sorted out my suspension issues that two
                other shops couldn't fix. The Orange Five feels brand new
                again."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Orange Five
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    S
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Sarah J.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Newcastle</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Love that they are an official Commencal dealer. Got my new
                bike built up perfectly and the suspension dialled for my
                weight."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Commencal Meta
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    M
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Mark D.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Merewether</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Excellent E-bike service. The Bosch diagnostic found the error
                code immediately. Fast, professional and local."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Specialized Levo
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    P
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Paul R.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Glenrock</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Best wheel builder in the Hunter. My custom rims have taken a
                beating at Glenrock and are still dead straight."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Santa Cruz
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    J
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Jason K.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Warners Bay</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "The 'Like New' service is worth every cent. The bike runs
                silent and smooth. Highly recommend Rapid Descent."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Norco Sight
                </div>
</div>
</div>
<div className="w-[320px] md:w-[360px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-auto hover:shadow-md transition-shadow duration-300 select-none">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#305F8E] text-white flex items-center justify-center text-lg font-medium">
                    E
                  </div>
<div>
<div className="font-semibold text-[#244a70] leading-tight">
                      Emma L.
                    </div>
<div className="text-xs text-gray-500 mt-0.5">Charlestown</div>
</div>
</div>
<div className="flex text-[#305F8E] gap-0.5">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "Dropped my bike off for a brake bleed and gear tune. Done in 24
                hours. Great to have such a pro workshop in Kahibah."
              </p>
<div className="mt-auto">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 text-[10px] font-semibold text-[#305F8E] uppercase tracking-wide">
                  Trek Rail
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="booking">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
              Get Started
            </span>
<h2 className="font-bebas text-6xl text-[#305F8E] mb-6 tracking-tight">
              Book Your Service
            </h2>
<p className="text-neutral-500 text-xl mb-8 font-light">
              Work is scheduled by appointment only. Select your service below
              and we will contact you to confirm the drop-off time.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<svg className="w-5 h-5 text-[#305F8E]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span className="text-neutral-700 text-lg">
                  Payments: Bank Transfer or Cash (No EFTPOS)
                </span>
</div>
<div className="flex items-center gap-3">
<svg className="w-5 h-5 text-[#305F8E]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span className="text-neutral-700 text-lg">
                  Drop-offs strictly by appointment
                </span>
</div>
<div className="flex items-center gap-3">
<svg className="w-5 h-5 text-[#305F8E]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span className="text-neutral-700 text-lg">
                  Workshop Address: Banforth Lane, Kahibah NSW
                </span>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-xl shadow-blue-900/5">
<form action="#" className="space-y-6" method="POST">
<div>
<label className="block text-sm font-medium text-[#305F8E] mb-2">
                  Full Name
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#305F8E] focus:border-transparent transition-shadow text-sm" placeholder="Your name" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-[#305F8E] mb-2">
                    Phone
                  </label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#305F8E] focus:border-transparent transition-shadow text-sm" placeholder="0409 717 009" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-[#305F8E] mb-2">
                    Email
                  </label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#305F8E] focus:border-transparent transition-shadow text-sm" placeholder="you@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-[#305F8E] mb-2">
                  Bike Brand &amp; Model
                </label>
<input className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#305F8E] focus:border-transparent transition-shadow text-sm" placeholder="e.g. Commencal Meta AM" type="text"/>
</div>
<div className="space-y-6">

<div className="flex p-1.5 bg-neutral-100 rounded-xl">
<button className="service-tab flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all duration-200 bg-white shadow-sm text-[#305F8E] ring-1 ring-black/5" data-target="panel-packages" type="button">
                    Packages
                  </button>
<button className="service-tab flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all duration-200 text-neutral-500 hover:text-[#305F8E]" data-target="panel-individual" type="button">
                    Individual Services
                  </button>
</div>

<div className="service-panel space-y-3" id="panel-packages">
<label className="relative flex items-center justify-between p-4 rounded-xl border border-neutral-200 bg-white cursor-pointer hover:border-[#305F8E]/50 transition-colors group">
<div className="flex items-center gap-3">
<input checked="" className="w-5 h-5 text-[#305F8E] border-neutral-300 focus:ring-[#305F8E]" data-price="220" name="service_type" type="radio" value="basic"/>
<div>
<div className="font-semibold text-[#244a70]">
                          Fresh As Service
                        </div>
<div className="text-xs text-neutral-500">
                          Routine maintenance &amp; repairs.
                        </div>
</div>
</div>
<div className="font-bebas text-2xl text-neutral-300 group-hover:text-[#305F8E] transition-colors">
                      $220
                    </div>
</label>
<label className="relative flex items-center justify-between p-4 rounded-xl border border-[#305F8E] bg-blue-50/20 cursor-pointer shadow-sm group">
<div className="flex items-center gap-3">
<input className="w-5 h-5 text-[#305F8E] border-neutral-300 focus:ring-[#305F8E]" data-price="390" name="service_type" type="radio" value="performance"/>
<div>
<div className="font-semibold text-[#244a70] flex items-center gap-2">
                          Like New Annual
                          <span className="px-2 py-0.5 rounded-full bg-[#305F8E] text-white text-[10px] font-bold uppercase tracking-wider">
                            Popular
                          </span>
</div>
<div className="text-xs text-neutral-500">
                          Comprehensive annual service.
                        </div>
</div>
</div>
<div className="font-bebas text-2xl text-[#305F8E]">$390</div>
</label>
<label className="relative flex items-center justify-between p-4 rounded-xl border border-neutral-200 bg-white cursor-pointer hover:border-[#305F8E]/50 transition-colors group">
<div className="flex items-center gap-3">
<input className="w-5 h-5 text-[#305F8E] border-neutral-300 focus:ring-[#305F8E]" data-price="1500" name="service_type" type="radio" value="race"/>
<div>
<div className="font-semibold text-[#244a70]">
                          New Bike PRO
                        </div>
<div className="text-xs text-neutral-500">
                          Ultimate custom build &amp; wrap.
                        </div>
</div>
</div>
<div className="font-bebas text-2xl text-neutral-300 group-hover:text-[#305F8E] transition-colors">
                      $1500
                    </div>
</label>
</div>

<div className="service-panel hidden space-y-3" id="panel-individual">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="50" name="services[]" type="checkbox" value="gear_tune"/>
<span className="text-xs font-medium text-neutral-700">
                          Gear Tune
                        </span>
</div>
<span className="text-xs font-semibold">$50</span>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="50" name="services[]" type="checkbox" value="brake_bleed"/>
<span className="text-xs font-medium text-neutral-700">
                          Brake Bleed &amp; Tune
                        </span>
</div>
<span className="text-xs font-semibold">$50</span>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="40" name="services[]" type="checkbox" value="wheel_true"/>
<span className="text-xs font-medium text-neutral-700">
                          Wheel True
                        </span>
</div>
<span className="text-xs font-semibold">$40</span>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="150" name="services[]" type="checkbox" value="wheel_build"/>
<span className="text-xs font-medium text-neutral-700">
                          Wheel Build
                        </span>
</div>
<span className="text-xs font-semibold">$150</span>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="100" name="services[]" type="checkbox" value="fork_lowers"/>
<span className="text-xs font-medium text-neutral-700">
                          Fork Lowers &amp; Air Shaft
                        </span>
</div>
<span className="text-xs font-semibold">$100</span>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="75" name="services[]" type="checkbox" value="shock_air"/>
<span className="text-xs font-medium text-neutral-700">
                          Shock Air Can
                        </span>
</div>
<span className="text-xs font-semibold">$75</span>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="66" name="services[]" type="checkbox" value="dropper"/>
<span className="text-xs font-medium text-neutral-700">
                          Dropper Post Install
                        </span>
</div>
<span className="text-xs font-semibold">$66</span>
</label>
<label className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-white cursor-pointer hover:bg-neutral-50">
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded text-[#305F8E] focus:ring-[#305F8E]" data-price="220" name="services[]" type="checkbox" value="bike_build"/>
<span className="text-xs font-medium text-neutral-700">
                          Bike Build BASIC
                        </span>
</div>
<span className="text-xs font-semibold">$220</span>
</label>
</div>
</div>

<div className="flex items-center justify-between p-6 bg-[#305F8E] rounded-xl border border-white/10 shadow-lg">
<div>
<span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">
                      Estimated Total
                    </span>
<div className="font-bebas text-5xl tracking-wide text-white flex items-start gap-1">
<span className="text-xl mt-1 text-[#D4FF33]">$</span>
<span id="live-total-display">220</span>
</div>
</div>
<div className="text-right">
<div className="text-[10px] text-white/50 max-w-[140px] leading-tight border-l-2 border-[#D4FF33] pl-3">
                      *Price guide only. Final quote upon inspection.
                    </div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-[#305F8E] mb-2">
                  Additional Notes
                </label>
<textarea className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#305F8E] focus:border-transparent transition-shadow min-h-[100px] text-sm" placeholder="Any specific issues we should look for?"></textarea>
</div>
<button className="w-full py-4 bg-[#305F8E] text-white font-semibold rounded-lg hover:bg-[#244a70] transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-lg" type="submit">
                Confirm Booking Request
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#305F8E] text-blue-100/60" id="contact">
<div className="relative h-64 md:h-80 w-full grayscale contrast-125 border-b border-white/10">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13416.712613134383!2d151.71380965!3d-32.95383305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733e3c0b0b0b0b%3A0x5017d681632b880!2sKahibah%20NSW%202290!5e0!3m2!1sen!2sau!4v1701500000000!5m2!1sen!2sau" style={{border: '0', filter: 'grayscale(100%) invert(90%) opacity(0.5)'}} width="100%"></iframe>
<div className="absolute inset-0 bg-gradient-to-t from-[#305F8E] to-transparent pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="col-span-1 lg:col-span-2">
<a className="font-bebas text-4xl tracking-tight text-white transition-colors duration-300 block mb-6" href="#">
              RAPID
              <span className="text-[#D4FF33]">DESCENT</span>
</a>
<p className="max-w-sm mb-6 text-base font-light">
              Kahibah's dedicated bicycle repair service. Trusted precision work
              tailored to cyclists of all levels.
            </p>
</div>
<div>
<h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">
              Contact
            </h4>
<ul className="space-y-4 text-base font-light">
<li className="flex items-center gap-3 hover:text-[#D4FF33] transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0.7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<a href="tel:0409717009">0409 717 009</a>
</li>
<li className="flex items-center gap-3 hover:text-[#D4FF33] transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<a href="mailto:rick81boyer@gmail.com">rick81boyer@gmail.com</a>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Banforth Lane,Kahibah NSW 2290</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">
              Hours
            </h4>
<ul className="space-y-2 text-base font-light">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-white">9am - 5pm</span>
</li>
<li className="flex justify-between">
<span>Sat - Sun</span>
<span className="text-blue-200/50">Closed</span>
</li>
</ul>
<div className="mt-6 flex items-center gap-2 text-xs text-[#D4FF33]">
<svg className="w-3 h-3 text-[#D4FF33]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
              By appointment only
            </div>
</div>
</div>
<div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-blue-100/40">
            © 2024 Rapid Descent Workshop. All rights reserved.
          </p>
</div>
</div>
</footer>


    </>
  );
}
