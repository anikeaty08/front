import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Icons
      lucide.createIcons();

      // Header Scroll Effect
      const header = document.getElementById('header-container');
      const mainHeader = document.getElementById('main-header');

      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              mainHeader.classList.add('py-2');
              mainHeader.classList.remove('py-4');
              // Could add more compression styles here
          } else {
              mainHeader.classList.add('py-4');
              mainHeader.classList.remove('py-2');
          }
      });

      // Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const closeMenuBtn = document.getElementById('close-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMobileMenu() {
          const isHidden = mobileMenu.classList.contains('translate-x-full');
          if (isHidden) {
              mobileMenu.classList.remove('translate-x-full');
              document.body.style.overflow = 'hidden';
          } else {
              mobileMenu.classList.add('translate-x-full');
              document.body.style.overflow = '';
          }
      }

      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
      closeMenuBtn.addEventListener('click', toggleMobileMenu);

      mobileLinks.forEach(link => {
          link.addEventListener('click', toggleMobileMenu);
      });

      // Mobile Services Accordion
      const mobileServicesToggle = document.getElementById('mobile-services-toggle');
      const mobileServicesList = document.getElementById('mobile-services-list');
      const mobileChevron = document.getElementById('mobile-chevron');

      mobileServicesToggle.addEventListener('click', () => {
          mobileServicesList.classList.toggle('hidden');
          mobileChevron.classList.toggle('rotate-180');
      });

      // Reveal on Scroll Observer
      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

      // Active Nav Highlighter
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      window.addEventListener('scroll', () => {
          let current = '';
          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
              if (pageYOffset >= (sectionTop - 200)) {
                  current = section.getAttribute('id');
              }
          });

          navLinks.forEach(link => {
              link.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
              link.classList.add('text-slate-600');
              if (link.getAttribute('href').includes(current)) {
                  link.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                  link.classList.remove('text-slate-600');
              }
          });
      });

      // AMC Tabs Logic
      function switchTab(tabName) {
          // Reset Buttons
          ['economy', 'business', 'first'].forEach(t => {
              const btn = document.getElementById(`tab-${t}`);
              const content = document.getElementById(`content-${t}`);

              if (t === tabName) {
                  btn.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                  btn.classList.remove('bg-transparent', 'text-slate-600');
                  content.classList.remove('hidden');
                  // Small animation reset
                  content.style.opacity = '0';
                  content.style.transform = 'translateY(10px)';
                  setTimeout(() => {
                      content.style.transition = 'all 0.3s ease-out';
                      content.style.opacity = '1';
                      content.style.transform = 'translateY(0)';
                  }, 10);
              } else {
                  btn.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                  btn.classList.add('bg-transparent', 'text-slate-600');
                  content.classList.add('hidden');
              }
          });
      }

      // Projects Filter
      function filterProjects(category) {
          // Update Buttons
          document.querySelectorAll('.filter-btn').forEach(btn => {
              if (btn.dataset.filter === category) {
                  btn.classList.add('bg-blue-600', 'text-white', 'border-transparent');
                  btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
              } else {
                  btn.classList.remove('bg-blue-600', 'text-white', 'border-transparent');
                  btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
              }
          });

          // Filter Cards
          const cards = document.querySelectorAll('.project-card');
          cards.forEach(card => {
              if (category === 'all' || card.dataset.category === category) {
                  card.style.display = 'block';
                  setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
              } else {
                  card.style.opacity = '0';
                  card.style.transform = 'scale(0.95)';
                  setTimeout(() => { card.style.display = 'none'; }, 300);
              }
          });
      }

      // Service Modal Logic
      const modal = document.getElementById('service-modal');
      const modalPanel = document.getElementById('service-modal-panel');
      const mTitle = document.getElementById('modal-title');
      const mDesc = document.getElementById('modal-description');
      const mTime = document.getElementById('modal-turnaround');

      function openServiceModal(title, desc, time) {
          mTitle.innerText = title;
          mDesc.innerText = desc;
          mTime.innerText = time;

          modal.classList.remove('hidden');
          setTimeout(() => {
              modalPanel.classList.remove('translate-x-full');
          }, 10);
          document.body.style.overflow = 'hidden';
      }

      function closeServiceModal() {
          modalPanel.classList.add('translate-x-full');
          setTimeout(() => {
              modal.classList.add('hidden');
              document.body.style.overflow = '';
          }, 300);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="gradient-blur"></div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-6" id="main-header">
<div className="max-w-7xl mx-auto">
<div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-full shadow-lg shadow-slate-200/20 flex items-center justify-between px-6 py-3 transition-all duration-300" id="header-container">

<a className="inline-flex flex-col gap-0.5 group shrink-0 select-none" href="#">
<div className="flex items-center font-black text-2xl tracking-tighter leading-none">
<span className="text-blue-700 group-hover:text-blue-600 transition-colors">
                V
              </span>
<span className="text-slate-300 mx-[1px]">-</span>
<span className="text-slate-900">E</span>
<span className="text-red-600 group-hover:text-red-500 transition-colors">
                X
              </span>
<span className="text-slate-900">PERT</span>
</div>
<div className="flex justify-between w-full text-[9px] font-bold text-slate-900 uppercase tracking-widest leading-none opacity-90">
<span className="">Technical</span>
<span>Services</span>
<span className="">Est.</span>
</div>
</a>

<nav className="hidden lg:flex items-center bg-slate-100/50 rounded-full p-1 border border-slate-200/50">
<a className="px-4 py-1.5 text-sm font-medium hover:text-slate-900 rounded-full hover:bg-white transition-all nav-link active-nav" href="#hero">
              Home
            </a>
<a className="px-4 py-1.5 text-sm font-medium hover:text-slate-900 rounded-full hover:bg-white transition-all nav-link" href="#about">
              About Us
            </a>

<div className="relative group">
<button className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-white transition-all focus:outline-none" id="services-btn">
                Our Services
                <svg className="lucide lucide-chevron-down w-3 h-3 mt-0.5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
<div className="grid grid-cols-2 gap-x-8 gap-y-4">

<a className="group/item block" href="#services">
<div className="font-semibold text-slate-900 text-sm group-hover/item:text-blue-600">
                      AC Services
                    </div>
<div className="text-xs text-slate-500">
                      Installation, repair &amp; cleaning
                    </div>
</a>
<a className="group/item block" href="#services">
<div className="font-semibold text-slate-900 text-sm group-hover/item:text-blue-600">
                      Electrical Services
                    </div>
<div className="text-xs text-slate-500">
                      Fault finding &amp; upgrades
                    </div>
</a>
<a className="group/item block" href="#services">
<div className="font-semibold text-slate-900 text-sm group-hover/item:text-blue-600">
                      Plumbing Services
                    </div>
<div className="text-xs text-slate-500">
                      Leak detection &amp; heaters
                    </div>
</a>
<a className="group/item block" href="#services">
<div className="font-semibold text-slate-900 text-sm group-hover/item:text-blue-600">
                      Fit-out &amp; Renovation
                    </div>
<div className="text-xs text-slate-500">
                      Turnkey interior solutions
                    </div>
</a>
<a className="group/item block" href="#services">
<div className="font-semibold text-slate-900 text-sm group-hover/item:text-blue-600">
                      Testing &amp; Commissioning
                    </div>
<div className="text-xs text-slate-500">
                      Electromechanical validation
                    </div>
</a>
<a className="group/item block" href="#services">
<div className="font-semibold text-slate-900 text-sm group-hover/item:text-blue-600">
                      AMC Packages
                    </div>
<div className="text-xs text-slate-500">
                      Annual peace of mind
                    </div>
</a>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 text-center">
<a className="text-xs font-semibold text-blue-600 hover:text-blue-700" href="#services">
                    View All Services →
                  </a>
</div>
</div>
</div>
<a className="px-4 py-1.5 text-sm font-medium hover:text-slate-900 rounded-full hover:bg-white transition-all nav-link" href="#projects">
              Projects
            </a>
<a className="px-4 py-1.5 text-sm font-medium hover:text-slate-900 rounded-full hover:bg-white transition-all nav-link" href="#contact">
              Contact Us
            </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 text-xl text-white tracking-wide font-instrument bg-blue-600 rounded-full pt-2 pr-6 pb-2 pl-6" href="https://wa.me/971508446737?text=Hi%20V-Expert%2C%20I%27d%20like%20a%20quote%20for%20%5Bservice%5D%20in%20%5Barea%5D." onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;" rel="noopener noreferrer" target="_blank">
              Book Services
            </a>

<button className="lg:hidden p-2 text-slate-600 hover:text-slate-900" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-300 lg:hidden overflow-y-auto" id="mobile-menu">
<div className="p-6">
<div className="flex items-center justify-between mb-8">

<a className="inline-flex flex-col gap-0.5 group shrink-0 select-none" href="#">
<div className="flex items-center font-black text-2xl tracking-tighter leading-none">
<span className="text-blue-700">V</span>
<span className="text-slate-300 mx-[1px]">-</span>
<span className="text-slate-900">E</span>
<span className="text-red-600">X</span>
<span className="text-slate-900">PERT</span>
</div>
<div className="flex justify-between w-full text-[9px] font-bold text-slate-900 uppercase tracking-widest leading-none opacity-90">
<span>Technical</span>
<span>Services</span>
<span>Est.</span>
</div>
</a>
<button className="p-2 text-slate-600" id="close-menu-btn">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<nav className="flex flex-col gap-4">
<a className="text-lg font-medium text-slate-900 mobile-link" href="#hero">
              Home
            </a>
<a className="text-lg font-medium text-slate-900 mobile-link" href="#about">
              About Us
            </a>
<div className="border-y border-slate-100 py-4">
<button className="flex items-center justify-between w-full text-lg font-medium text-slate-900" id="mobile-services-toggle">
                Our Services
                <svg className="lucide lucide-chevron-down w-5 h-5 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" id="mobile-chevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden mt-4 pl-4 space-y-3" id="mobile-services-list">
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  AC Services
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Electrical Services
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Plumbing Services
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Testing &amp; Commissioning
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Flooring &amp; Wall Tiles
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Plaster &amp; Painting
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  False Ceiling &amp; Partitions
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Carpentry Works
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Wallpaper Installation
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Handyman Services
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Snagging &amp; Handover
                </a>
<a className="block text-slate-600 text-sm mobile-link" href="#services">
                  Annual Maintenance (AMC)
                </a>
</div>
</div>
<a className="text-lg font-medium text-slate-900 mobile-link" href="#projects">
              Projects
            </a>
<a className="text-lg font-medium text-slate-900 mobile-link" href="#contact">
              Contact Us
            </a>
</nav>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-6 reveal-on-scroll is-visible">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Available for Emergency Calls 24/7
          </div>
<h1 className="sm:text-5xl lg:text-7xl leading-[1.1] reveal-on-scroll is-visible text-4xl font-semibold text-slate-900 tracking-tight mb-6" style={{transitionDelay: '100ms'}}>
            Trusted Technical Services in Dubai.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Done right the first time.
            </span>
</h1>
<p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed reveal-on-scroll is-visible" style={{transitionDelay: '200ms'}}>
            Expert installation, maintenance, and renovation across AC,
            electrical, plumbing, and fit-outs. We prioritize speed, quality,
            and transparent pricing for homes and businesses.
          </p>
<div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll is-visible mb-12 gap-x-4 gap-y-4 items-center justify-center" style={{transitionDelay: '300ms'}}>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-green-500/20 text-2xl text-white tracking-wide font-instrument bg-[#25D366] w-full rounded-full pt-5 pr-10 pb-5 pl-10" href="https://wa.me/971508446737?text=Hi%20V-Expert%2C%20I%27d%20like%20a%20quote%20for%20%5Bservice%5D%20in%20%5Barea%5D" onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
              WhatsApp Now
            </a>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 text-2xl text-slate-900 tracking-wide font-instrument bg-white w-full border-slate-200 border rounded-full pt-5 pr-10 pb-5 pl-10" href="tel:+971508446737">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
              Call Us +971 50 844 6737
            </a>
</div>
<div className="mt-6 text-sm text-slate-600 reveal-on-scroll is-visible" style={{transitionDelay: '350ms'}}>
<div className="font-medium text-slate-700">Prefer direct contact?</div>
<div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2">
<a className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-600" href="tel:+971508446737">
<svg className="lucide lucide-phone w-4 h-4 text-blue-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
                Phone: +971 50 844 6737
              </a>
<a className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-green-700" href="https://wa.me/971508446737?text=Hi%20V-Expert%2C%20I%27d%20like%20a%20quote%20for%20%5Bservice%5D%20in%20%5Barea%5D." onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4 text-[#25D366]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
                WhatsApp: +971 50 844 6737
              </a>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500 reveal-on-scroll is-visible" style={{transitionDelay: '400ms'}}>
<span className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
              15+ Years Experience
            </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Residential &amp; Commercial
            </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Engineer-led Team
            </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Transparent Quotes
            </span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Our Core Expertise
          </h2>
<p className="text-slate-600">
            Comprehensive building maintenance and technical services delivered
            by certified professionals.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-thermometer-snowflake w-6 h-6" data-lucide="thermometer-snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m10 20-1.25-2.5L6 18"></path>
<path d="M10 4 8.75 6.5 6 6"></path>
<path d="M10.585 15H10"></path>
<path d="M2 12h6.5L10 9"></path>
<path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"></path>
<path d="m4 10 1.5 2L4 14"></path>
<path d="m7 21 3-6-1.5-3"></path>
<path d="m7 3 3 6h2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              AC Services
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Installation, repair, duct cleaning &amp; preventive maintenance.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('AC Services', 'Includes coil cleaning, gas top-up, duct cleaning, thermostat checks, and leak repair.', 'Same Day / 24hrs')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Electrical Services
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Fault finding, DB dressing, light installation, and upgrades.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('Electrical Services', 'Short circuit fixing, fixture installation, DB upgrades, load balancing, socket replacement.', 'Urgent: 1-2 hours')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-droplets w-6 h-6" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
<path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Plumbing Services
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Leak detection, water heater fixing, pump repair &amp;
              installation.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('Plumbing Services', 'Leak repair, water heater replacement, pump maintenance, blockage removal, sanitary ware installation.', 'Urgent: 1-2 hours')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clipboard-check w-6 h-6" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Testing &amp; Commissioning
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Electromechanical services validation for new or renovated spaces.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('Testing &amp; Commissioning', 'Load testing, airflow measurement, safety checks, system integration validation.', 'Project Basis')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-grid w-6 h-6" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M3 15h18"></path>
<path d="M9 3v18"></path>
<path d="M15 3v18"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Flooring &amp; Tiles
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Installation and grouting for ceramic, porcelain, and marble.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('Flooring &amp; Wall Tiles', 'Tile removal, waterproofing, screeding, precision laying, grouting and polishing.', 'Project Basis')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-paint-bucket w-6 h-6" data-lucide="paint-bucket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H2"></path>
<path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595"></path>
<path d="m6 2 5 5"></path>
<path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Plaster &amp; Painting
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Interior and exterior painting, drywall repair, and finishing.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('Plaster &amp; Painting Services', 'Surface preparation, crack filling, primer application, multi-coat painting, cleanup.', 'Project Basis')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              False Ceiling
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Gypsum board partitions and ceiling design installation.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('False Ceiling &amp; Partitions', 'Gypsum installation, framing, joining, design cutouts, lighting integration.', 'Project Basis')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-hammer w-6 h-6" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path>
<path d="m18 15 4-4"></path>
<path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Carpentry Works
            </h3>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">
              Custom furniture, door installation, cabinets, and wood repairs.
            </p>
<button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openServiceModal('Carpentry Works', 'Door hanging, lock replacement, custom cabinets, shelving, furniture assembly/repair.', 'Project Basis')">
              See details
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="mt-6 text-center reveal-on-scroll">
<p className="text-sm text-slate-500">
            Also offering: Wallpaper Installation, Handyman Services, and
            Property Snagging.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="amc">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Peace of Mind
          </div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Annual Maintenance Contract (AMC)
          </h2>
<p className="text-slate-600 max-w-2xl mx-auto">
            Save money and avoid emergencies with our preventative maintenance
            packages. We keep your property running smoothly year-round.
          </p>
</div>

<div className="max-w-4xl mx-auto bg-slate-100 p-1 rounded-xl flex mb-12 reveal-on-scroll">
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-semibold text-slate-600 transition-all hover:text-slate-900 focus:outline-none bg-transparent" id="tab-economy" onclick="switchTab('economy')">
            Expert Economy
          </button>
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-semibold text-slate-900 bg-white shadow-sm transition-all focus:outline-none" id="tab-business" onclick="switchTab('business')">
            Expert Business
          </button>
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-semibold text-slate-600 transition-all hover:text-slate-900 focus:outline-none bg-transparent" id="tab-first" onclick="switchTab('first')">
            Expert First
          </button>
</div>

<div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl shadow-slate-200/40 relative reveal-on-scroll" id="content-business">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
            Most Popular
          </div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-100">
<div>
<h3 className="text-2xl font-bold text-slate-900">
                Expert - Business
              </h3>
<p className="text-slate-500 mt-1">
                Ideal for villas and medium offices.
              </p>
</div>
<div className="mt-4 md:mt-0 text-right">
<span className="block text-2xl font-bold text-blue-600">
                Contact for Pricing
              </span>
<span className="text-xs text-slate-400">AED / year</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-semibold">
                  2 Preventive Maintenance Visits
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>8 Regular Service Call-outs</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>2 Handyman Services Included</span>
</li>
</ul>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>AC Filter &amp; Outlet Cleaning</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Electrical &amp; Plumbing Checks</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Water Pump &amp; Drainage Checks</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 italic">
              *Materials not included. Supply subject to charge.
            </p>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all w-full sm:w-auto justify-center font-instrument text-xl tracking-wide" href="https://wa.me/971508446737?text=Hi%20V-Expert,%20I'm%20interested%20in%20the%20Business%20AMC%20package." onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;">
              Ask About This Package
            </a>
</div>
</div>

<div className="hidden max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/40" id="content-economy">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-100">
<div>
<h3 className="text-2xl font-bold text-slate-900">
                Expert - Economy
              </h3>
<p className="text-slate-500 mt-1">Basic coverage for apartments.</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<span className="block text-2xl font-bold text-blue-600">
                Contact for Pricing
              </span>
<span className="text-xs text-slate-400">AED / year</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-semibold">
                  1 Preventive Maintenance Visit
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>6 Regular Service Call-outs</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="lucide lucide-x w-5 h-5 shrink-0" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
<span>No Handyman Services</span>
</li>
</ul>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>AC Filter &amp; Outlet Cleaning</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Basic Functional Checks</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 italic">
              *Materials not included.
            </p>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all w-full sm:w-auto justify-center font-instrument text-xl tracking-wide" href="https://wa.me/971508446737?text=Hi%20V-Expert,%20I'm%20interested%20in%20the%20Economy%20AMC%20package." onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;">
              Ask About This Package
            </a>
</div>
</div>

<div className="hidden max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/40" id="content-first">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-100">
<div>
<h3 className="text-2xl font-bold text-slate-900">Expert - First</h3>
<p className="text-slate-500 mt-1">
                Premium care for large properties.
              </p>
</div>
<div className="mt-4 md:mt-0 text-right">
<span className="block text-2xl font-bold text-blue-600">
                Contact for Pricing
              </span>
<span className="text-xs text-slate-400">AED / year</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-semibold">
                  3 Preventive Maintenance Visits
                </span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>12 Regular Service Call-outs</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>3 Handyman Services Included</span>
</li>
</ul>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Comprehensive System Audit</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Priority Response Time</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="lucide lucide-check w-5 h-5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Full Sanitary/Drainage Checks</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 p-8 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 italic">
              *Materials not included.
            </p>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all w-full sm:w-auto justify-center font-instrument text-xl tracking-wide" href="https://wa.me/971508446737?text=Hi%20V-Expert,%20I'm%20interested%20in%20the%20First%20AMC%20package." onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;">
              Ask About This Package
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Why Dubai Trusts V-Expert
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 reveal-on-scroll">
<svg className="lucide lucide-award w-10 h-10 text-blue-400 mb-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
<h3 className="text-xl font-semibold mb-3">Quality Workmanship</h3>
<p className="text-slate-400 leading-relaxed">
              Our team is engineer-led. We don't cut corners. Every job is
              supervised to ensure the highest technical standards.
            </p>
</div>
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<svg className="lucide lucide-message-square w-10 h-10 text-blue-400 mb-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
<h3 className="text-xl font-semibold mb-3">Clear Communication</h3>
<p className="text-slate-400 leading-relaxed">
              No ghosting. No vague timings. We provide clear schedule windows
              and keep you updated via WhatsApp.
            </p>
</div>
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<svg className="lucide lucide-wallet w-10 h-10 text-blue-400 mb-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
<h3 className="text-xl font-semibold mb-3">Fair Pricing</h3>
<p className="text-slate-400 leading-relaxed">
              Written quotes before we start. No surprise "extra charges" at the
              end of the job. Honesty is our policy.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
              Recent Projects
            </h2>
<p className="text-slate-600 mt-2">Real results from across Dubai.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-600 text-white transition-all filter-btn active-filter" data-filter="all" onclick="filterProjects('all')">
              All
            </button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-blue-400 transition-all filter-btn" data-filter="renovation" onclick="filterProjects('renovation')">
              Renovation
            </button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-blue-400 transition-all filter-btn" data-filter="maintenance" onclick="filterProjects('maintenance')">
              Maintenance
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="project-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 group" data-category="maintenance">
<div className="h-48 relative overflow-hidden">
<img alt="AC Maintenance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://s6.imgcdn.dev/YUy2eq.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white font-medium">
                Villa AC Maintenance
              </div>
</div>
<div className="p-6">
<div className="text-xs font-bold text-blue-600 uppercase mb-2">
                Jumeirah Park
              </div>
<h4 className="font-semibold text-slate-900 mb-2">
                AC System Repair
              </h4>
<p className="text-sm text-slate-600 mb-4">
                Problem: Low cooling performance.
                <br/>
                Outcome: System flush, gas top-up, 100% efficiency.
              </p>
<a className="text-sm font-semibold text-slate-900 underline decoration-blue-400 underline-offset-4 hover:text-blue-600" href="#contact">
                Request similar work
              </a>
</div>
</div>

<div className="project-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 group" data-category="renovation">
<div className="h-48 relative overflow-hidden">
<img alt="Electrical Works" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://s6.imgcdn.dev/YUyOcB.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white font-medium">
                Office Fit-Out Support
              </div>
</div>
<div className="p-6">
<div className="text-xs font-bold text-blue-600 uppercase mb-2">
                Business Bay
              </div>
<h4 className="font-semibold text-slate-900 mb-2">
                Electrical &amp; Partitions
              </h4>
<p className="text-sm text-slate-600 mb-4">
                Problem: Expanding team needed new layout.
                <br/>
                Outcome: Power distribution &amp; partitions in 3 days.
              </p>
<a className="text-sm font-semibold text-slate-900 underline decoration-blue-400 underline-offset-4 hover:text-blue-600" href="#contact">
                Request similar work
              </a>
</div>
</div>

<div className="project-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 group" data-category="maintenance">
<div className="h-48 relative overflow-hidden">
<img alt="Leak &amp; Tile Repair" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://s6.imgcdn.dev/YUy9tL.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white font-medium">
                Bathroom Tile Restoration
              </div>
</div>
<div className="p-6">
<div className="text-xs font-bold text-blue-600 uppercase mb-2">
                Dubai Marina
              </div>
<h4 className="font-semibold text-slate-900 mb-2">
                Leak &amp; Tile Repair
              </h4>
<p className="text-sm text-slate-600 mb-4">
                Problem: Concealed leak damaging ceiling.
                <br/>
                Outcome: Leak fixed, tiles replaced perfectly.
              </p>
<a className="text-sm font-semibold text-slate-900 underline decoration-blue-400 underline-offset-4 hover:text-blue-600" href="#contact">
                Request similar work
              </a>
</div>
</div>
<div className="project-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 group" data-category="maintenance">
<div className="h-48 relative overflow-hidden">
<img alt="Plumbing Works" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://s6.imgcdn.dev/YUySgg.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white font-medium">
                Emergency Plumbing
              </div>
</div>
<div className="p-6">
<div className="text-xs font-bold text-blue-600 uppercase mb-2">
                Arabian Ranches
              </div>
<h4 className="font-semibold text-slate-900 mb-2">
                Water Pump Exchange
              </h4>
<p className="text-sm text-slate-600 mb-4">
                Problem: Water pressure failure.
                <br/>
                Outcome: New silent booster pump installed.
              </p>
<a className="text-sm font-semibold text-slate-900 underline decoration-blue-400 underline-offset-4 hover:text-blue-600" href="#contact">
                Request similar work
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            How We Work
          </h2>
<p className="text-slate-500 mt-2">Simple, transparent, and fast.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

<div className="text-center bg-white pt-4 reveal-on-scroll">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">
              1
            </div>
<h3 className="font-bold text-slate-900">Request</h3>
<p className="text-sm text-slate-600 mt-2 px-4">
              Call, WhatsApp, or fill the form. We reply fast.
            </p>
</div>

<div className="text-center bg-white pt-4 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">
              2
            </div>
<h3 className="font-bold text-slate-900">Quote</h3>
<p className="text-sm text-slate-600 mt-2 px-4">
              Clear scope and timeline provided upfront.
            </p>
</div>

<div className="text-center bg-white pt-4 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">
              3
            </div>
<h3 className="font-bold text-slate-900">Schedule</h3>
<p className="text-sm text-slate-600 mt-2 px-4">
              Our engineers arrive on time, fully equipped.
            </p>
</div>

<div className="text-center bg-white pt-4 reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">
              4
            </div>
<h3 className="font-bold text-slate-900">Handover</h3>
<p className="text-sm text-slate-600 mt-2 px-4">
              Job finished, area cleaned, checklist signed.
            </p>
</div>
</div>
<div className="text-center mt-10">
<p className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
            ⚡ Most enquiries answered in 15 mins on WhatsApp
          </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>
                Do you serve both residential and commercial properties?
              </span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
              Yes, V-Expert handles everything from studio apartments to large
              villas, offices, and retail spaces in Dubai.
            </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>How fast can you respond to an emergency?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
              For urgent electrical or plumbing issues, we aim to be on-site
              within 60-90 minutes depending on your location in Dubai.
            </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Do you provide written quotes?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
              Absolutely. We believe in transparency. You will receive a clear
              breakdown of costs before we start any major work.
            </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>What areas of Dubai do you cover?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
              We are based in Deira but cover all major areas including
              Downtown, Marina, Palm Jumeirah, JVC, Hills Estate, and Mirdif.
            </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Can you do full renovations?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed">
              Yes, our team is equipped for full bathroom/kitchen renovations,
              painting, flooring, and gypsum partition works.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Get a Quote
              </h2>
<p className="text-lg text-slate-600">
                Tell us about your technical issue or renovation project. We'll
                get back to you with a solution.
              </p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
<div className="">
<div className="text-sm font-medium text-slate-500">Call Us</div>
<a className="hover:text-blue-600 block text-lg font-semibold text-slate-900" href="tel:+971508446737">
                    +971 50 844 6737
                  </a>
<a className="text-lg font-semibold text-slate-900 hover:text-blue-600 block" href="tel:+971508446765">
                    +971 50 844 6765
                  </a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</div>
<div className="">
<div className="text-sm font-medium text-slate-500">Email Us</div>
<a className="text-base font-semibold text-slate-900 hover:text-blue-600 block" href="mailto:cs@vexpert.ae">
                    cs@vexpert.ae
                  </a>
</div>
</div>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<h4 className="font-semibold text-slate-900 mb-3">
                V-Expert Promise:
              </h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Fully licensed technical team
                </li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Clean finish, no mess left behind
                </li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  100% Transparent pricing
                </li>
</ul>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
<form className="space-y-5" onsubmit="event.preventDefault(); window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;">
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Name
                  </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Your Name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Phone
                  </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="050..." required="" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Location
                </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="e.g. Dubai Marina, Villa 32" type="text"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Service Needed
                </label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition">
<option>General Maintenance</option>
<option>AC Repair/Service</option>
<option>Electrical Issue</option>
<option>Plumbing Issue</option>
<option>Renovation/Fit-out</option>
<option>AMC Enquiry</option>
</select>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Urgency
                </label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition">
<option>Normal (Schedule a visit)</option>
<option>High (As soon as possible)</option>
<option>Emergency (Immediate)</option>
</select>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Message
                </label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Brief details about the job..." rows="3"></textarea>
</div>
<button className="hover:bg-green-600 shadow-green-500/20 transition-all transform hover:-translate-y-0.5 flex gap-2 cursor-pointer text-2xl text-white tracking-wide font-instrument bg-green-500 w-full rounded-xl pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer');" role="button" type="submit">
<svg className="lucide lucide-message-circle w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
                Send on WhatsApp
              </button>
<button className="hover:bg-slate-50 transition-all cursor-pointer text-sm font-semibold text-slate-700 bg-white w-full border-slate-200 border rounded-xl pt-3 pb-3" onclick="window.location.href='tel:+971508446737';" role="button" type="button">
                Request Callback
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="col-span-1 md:col-span-1">

<a className="inline-flex flex-col gap-0.5 group shrink-0 select-none mb-4" href="#">
<div className="flex items-center font-black text-2xl tracking-tighter leading-none">
<span className="text-blue-600">V</span>
<span className="text-slate-500 mx-[1px]">-</span>
<span className="text-white">E</span>
<span className="text-red-600">X</span>
<span className="text-white">PERT</span>
</div>
<div className="flex justify-between w-full text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none opacity-80">
<span>Technical</span>
<span>Services</span>
<span>Est.</span>
</div>
</a>
<p className="mb-4">
            Trusted Building Services, Installation &amp; Maintenance Contractor
            in Dubai, UAE.
          </p>
<div className="flex gap-4">

<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</div>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li>
<a className="hover:text-blue-400 transition" href="#hero">Home</a>
</li>
<li>
<a className="hover:text-blue-400 transition" href="#about">
                About Us
              </a>
</li>
<li>
<a className="hover:text-blue-400 transition" href="#projects">
                Projects
              </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2">
<li>
<a className="hover:text-blue-400 transition" href="#services">
                AC Maintenance
              </a>
</li>
<li>
<a className="hover:text-blue-400 transition" href="#services">
                Electrical Works
              </a>
</li>
<li>
<a className="hover:text-blue-400 transition" href="#services">
                Plumbing
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-2">
<li className="flex items-start gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 mt-0.5 text-blue-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
              Deira, Dubai, UAE
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-phone w-4 h-4 mt-0.5 text-blue-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
              +971 50 844 6737
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-mail w-4 h-4 mt-0.5 text-blue-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
              cs@vexpert.ae
            </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        © 2024 V-Expert Technical Services Est. All rights reserved.
      </div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 lg:hidden z-40 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
<a className="flex-1 bg-slate-100 text-slate-900 py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2" href="tel:+971508446737">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
        Call
      </a>
<a className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2" href="https://wa.me/971508446737?text=Hi%20V-Expert%2C%20I%27d%20like%20a%20quote%20for%20%5Bservice%5D%20in%20%5Barea%5D." onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
        WhatsApp
      </a>
</div>

<div className="fixed inset-0 z-[60] hidden" id="service-modal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closeServiceModal()"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 translate-x-full" id="service-modal-panel">
<div className="p-6 h-full flex flex-col">
<button className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200" onclick="closeServiceModal()">
<svg className="lucide lucide-x w-5 h-5 text-slate-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4" id="modal-title">
            Service Title
          </h3>
<div className="flex-1 overflow-y-auto">
<div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
<p className="text-xs font-semibold text-blue-600 uppercase mb-1">
                Typical Turnaround
              </p>
<p className="text-sm font-medium text-slate-900" id="modal-turnaround">
                24 Hours
              </p>
</div>
<h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
<p className="text-slate-600 text-sm leading-relaxed mb-6" id="modal-description">
              Description goes here.
            </p>
<div className="border-t border-slate-100 pt-6">
<h4 className="font-semibold text-slate-900 mb-3">
                Why choose V-Expert?
              </h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Certified Technicians
                </li>
<li className="flex gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  30-Day Service Warranty
                </li>
<li className="flex gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Clean Up Included
                </li>
</ul>
</div>
</div>
<div className="mt-6">
<a className="flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all font-instrument text-2xl tracking-wide" href="https://wa.me/971508446737?text=Hi,%20I%20need%20a%20quote%20for%20this%20service." onclick="window.open('https://wa.me/971508446737','_blank','noopener,noreferrer'); return false;">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
              WhatsApp for Quote
            </a>
</div>
</div>
</div>
</div>



    </>
  );
}
