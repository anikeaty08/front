import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function openModal() {
          const modal = document.getElementById('contact-modal');
          const content = document.getElementById('modal-content');

          modal.classList.remove('hidden');
          setTimeout(() => {
              modal.classList.remove('opacity-0');
              content.classList.remove('scale-95');
              content.classList.add('scale-100');
          }, 10);

          document.body.style.overflow = 'hidden';
      }

      function closeModal() {
          const modal = document.getElementById('contact-modal');
          const content = document.getElementById('modal-content');

          modal.classList.add('opacity-0');
          content.classList.remove('scale-100');
          content.classList.add('scale-95');

          setTimeout(() => {
              modal.classList.add('hidden');
              document.body.style.overflow = 'auto';
          }, 300);
      }

      // Premium Scroll Reveal Animation Observer
      document.addEventListener("DOMContentLoaded", () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px 0px -50px 0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('reveal-active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal-up').forEach(el => {
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all bg-gray-900/80 backdrop-blur-md border-b border-white/10" id="navbar">
<div className="flex md:px-6 opacity-0 w-full h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer animate-fade-in-up" onclick="window.scrollTo(0,0)">
<span className="text-lg font-semibold tracking-tight font-quicksand text-white">
            Amwaj Al Dana
            <span className="text-orange-500">.</span>
</span>
</div>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center animate-fade-in-up delay-100">
<a className="text-sm font-medium transition-colors text-white/90 hover:text-white" href="#services">
            Services
          </a>
<a className="text-sm font-medium transition-colors text-white/90 hover:text-white" href="#projects">
            Projects
          </a>
<a className="text-sm font-medium transition-colors text-white/90 hover:text-white" href="#about">
            About
          </a>
<div className="flex items-center gap-4 ml-4">
<button className="btn-3d transition-colors hover:bg-blue-700 text-sm font-medium text-white rounded-md pt-2 pr-4 pb-2 pl-4 shadow-md" onclick="openModal()">
              Request Quote
            </button>
</div>
</div>
<div className="flex md:hidden items-center gap-4 animate-fade-in-up delay-100">
<button className="text-white/90 hover:text-white" onclick="const menu = document.getElementById('mobile-menu'); menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';">
<iconify-icon className="text-2xl" height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden flex-col bg-white border-t border-gray-200 absolute top-16 w-full left-0 shadow-xl z-40 p-6 gap-4" id="mobile-menu" style={{display: 'none'}}>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 border-b border-gray-100 pb-3" href="#services" onclick="this.parentElement.style.display='none'">
          Services
        </a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 border-b border-gray-100 pb-3" href="#projects" onclick="this.parentElement.style.display='none'">
          Projects
        </a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 border-b border-gray-100 pb-3" href="#about" onclick="this.parentElement.style.display='none'">
          About
        </a>
<a className="text-sm font-medium text-gray-600 hover:text-blue-600 border-b border-gray-100 pb-3 flex items-center gap-2" href="tel:+971501234567">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
          Call +971 50 123 4567
        </a>
<button className="btn-3d w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-md mt-2" onclick="openModal(); this.parentElement.style.display='none';">
          Get a Quote
        </button>
</div>
</nav>

<section className="overflow-hidden flex flex-col bg-center md:pt-48 md:pb-48 text-center bg-[url(https://images.unsplash.com/photo-1596719078222-300a2ced7081?w=3840&amp;q=80)] bg-cover bg-no-repeat pt-32 px-4 pb-24 relative items-center justify-center min-h-[90vh]">

<div className="z-0 bg-black/50 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm"></div>
<div className="z-10 flex flex-col w-full max-w-4xl mr-auto ml-auto relative items-center">
<div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 mb-8 backdrop-blur-md shadow-lg shadow-blue-500/10">
<span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
<span className="text-blue-100 text-xs font-medium tracking-wide uppercase">
            Based in Dubai, UAE
          </span>
</div>
<h1 className="animate-fade-in-up delay-100 leading-tight md:text-6xl lg:text-7xl text-4xl font-semibold text-white tracking-tighter font-ibm-sans text-center mb-6 drop-shadow-lg">
          Engineering Excellence for
          <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            Modern Infrastructure
          </span>
</h1>
<p className="animate-fade-in-up delay-200 leading-relaxed md:text-xl bg-clip-text text-base text-transparent font-ibm-sans bg-gradient-to-br from-white/50 via-white/100 to-white/50 max-w-2xl mb-10 px-4 drop-shadow-md">
          Amwaj Al Dana provides precise Mechanical, Electrical, Plumbing (MEB),
          and advanced Home Automation solutions for high-end residential and
          commercial spaces.
        </p>
<div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
<button className="btn-3d w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-50 text-sm font-medium px-8 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2" onclick="document.getElementById('services').scrollIntoView()">
            Explore Services
            <iconify-icon className="" height="14" icon="solar:alt-arrow-down-outline" style={{strokeWidth: '1.5', color: 'rgb(17, 24, 39)'}} width="14"></iconify-icon>
</button>
<button className="btn-3d-light w-full sm:w-auto bg-gray-900/60 backdrop-blur-md border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-400 text-sm font-medium px-8 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2" onclick="openModal()">
            Contact Engineering Team
          </button>
</div>
</div>
</section>

<section className="bg-orange-50/80 border-gray-200 border-b py-12">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:divide-x divide-gray-200/60">
<div className="text-center px-2 reveal-up">
<div className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-1 drop-shadow-sm">
              7+
            </div>
<div className="text-gray-500 text-xs md:text-sm font-medium">
              Years Experience
            </div>
</div>
<div className="text-center px-2 md:border-l border-gray-200/60 reveal-up delay-100">
<div className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight mb-1 drop-shadow-sm scale-100">
              500+
            </div>
<div className="text-gray-500 text-xs md:text-sm font-medium">
              Completed Projects
            </div>
</div>
<div className="text-center px-2 md:border-l border-gray-200/60 reveal-up delay-200">
<div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-1 tracking-tight drop-shadow-sm">
              24/7
            </div>
<div className="text-gray-500 text-xs md:text-sm font-medium">
              Emergency Response
            </div>
</div>
<div className="text-center px-2 md:border-l border-gray-200/60 reveal-up delay-300">
<div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-1 tracking-tight drop-shadow-sm">
              100%
            </div>
<div className="text-gray-500 text-xs md:text-sm font-medium">
              Compliance Rate
            </div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-20 md:py-28 relative" id="services">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="mb-12 md:mb-16 text-center md:text-left reveal-up">
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight font-ibm-sans mb-4">
            Core Capabilities
          </h2>
<p className="text-base text-gray-500 font-ibm-sans max-w-2xl mx-auto md:mx-0">
            Integrated MEB and smart systems designed for the harsh Middle
            Eastern climate, ensuring efficiency, durability, and comfort.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">

<div className="hover-lift reveal-up group flex flex-col bg-white h-full border-gray-200 border rounded-2xl px-6 py-8 md:px-8 shadow-sm">
<div className="w-12 h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300">
<iconify-icon className="text-2xl text-gray-600 group-hover:text-blue-600 transition-colors" icon="solar:wind-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
              Mechanical &amp; HVAC
            </h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Advanced cooling solutions, ventilation, and air conditioning
              systems designed to maintain optimal environments year-round.
            </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                VRF &amp; Chilled Water Systems
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Ducting &amp; Ventilation
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Preventive Maintenance
              </li>
</ul>
</div>

<div className="hover-lift reveal-up delay-100 group flex flex-col bg-white h-full border-gray-200 border rounded-2xl px-6 py-8 md:px-8 shadow-sm">
<div className="w-12 h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors duration-300">
<iconify-icon className="text-2xl text-gray-600 group-hover:text-orange-500 transition-colors" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
              Electrical Systems
            </h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Comprehensive power distribution, lighting design, and low-voltage
              systems engineered for safety and energy efficiency.
            </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Power Distribution &amp; Panels
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Architectural Lighting
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Load Balancing &amp; Audits
              </li>
</ul>
</div>

<div className="hover-lift reveal-up delay-200 group flex flex-col bg-white h-full border-gray-200 border rounded-2xl px-6 py-8 md:px-8 shadow-sm">
<div className="flex group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors duration-300 bg-gray-50 w-12 h-12 border-gray-100 border rounded-xl mb-6 items-center justify-center">
<iconify-icon className="text-2xl text-gray-600 group-hover:text-teal-600 transition-colors" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
              Plumbing Networks
            </h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Reliable water supply, drainage, and specialized plumbing
              infrastructure for residential towers and commercial facilities.
            </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Water Filtration Systems
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Pump &amp; Heater Installations
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Leak Detection &amp; Repair
              </li>
</ul>
</div>

<div className="hover-lift reveal-up delay-300 group flex flex-col bg-white h-full border-gray-200 border rounded-2xl px-6 py-8 md:px-8 shadow-sm">
<div className="w-12 h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors duration-300">
<iconify-icon className="text-2xl text-gray-600 group-hover:text-indigo-600 transition-colors" icon="solar:smart-home-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
              Home Automation
            </h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Intelligent integrations connecting climate, lighting, security,
              and entertainment into unified, intuitive interfaces.
            </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Smart Climate Control
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Automated Lighting Scenes
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Access Control &amp; Security
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="md:py-28 bg-white border-gray-200 border-t pt-20 pb-20" id="projects">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-up">
<div>
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight font-ibm-sans mb-4 text-center md:text-left">
              Featured Portfolio
            </h2>
<p className="text-base text-gray-500 max-w-2xl text-center md:text-left">
              Discover our recent benchmark installations across commercial and
              residential sectors in the UAE.
            </p>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors" onclick="openModal()">
            Request Similar Project
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="hover-lift reveal-up delay-100 group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm relative">
<div className="h-56 md:h-64 overflow-hidden relative bg-gray-100">
<img alt="Smart Home Integration" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/999f0234-18b7-4d74-8cb9-d15bafb623d1_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 tracking-wide">
                Automation
              </div>
</div>
<div className="p-6 relative bg-white">
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Palm Jumeirah Luxury Villa
              </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                Complete smart home ecosystem integration including climate
                mapping, automated shades, and security.
              </p>
</div>
</div>

<div className="hover-lift reveal-up delay-200 group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm relative">
<div className="h-56 md:h-64 overflow-hidden relative bg-gray-100">
<img alt="Industrial HVAC" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1509389807183-f0fbe962761a?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 tracking-wide">
                HVAC &amp; MEB
              </div>
</div>
<div className="p-6 relative bg-white">
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Business Bay Commercial Tower
              </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                Installation of state-of-the-art VRF cooling systems and
                comprehensive ducting for 20 floors.
              </p>
</div>
</div>

<div className="hover-lift reveal-up delay-300 group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm relative">
<div className="h-56 md:h-64 overflow-hidden relative bg-gray-100">
<img alt="Electrical Fitout" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=800&amp;q=80"/>
<div className="group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 tracking-wide">
                Electrical
              </div>
</div>
<div className="p-6 relative bg-white">
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                DIFC Restaurant Fit-out
              </h3>
<p className="text-sm text-gray-500 line-clamp-2">
                Bespoke architectural lighting arrays, power distribution
                panels, and heavy-duty kitchen plumbing.
              </p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden reveal-up delay-400">
<button className="btn-3d w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium py-3 rounded-md" onclick="openModal()">
            Discuss Your Project
          </button>
</div>
</div>
</section>

<section className="border-y bg-center md:py-28 bg-slate-900 border-gray-200 pt-20 pb-20">
<div className="md:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="md:mb-16 md:text-left reveal-up text-center mb-12">
<h2 className="md:text-4xl text-3xl font-semibold text-zinc-100 tracking-tight font-ibm-sans mb-4">
            Project Methodology
          </h2>
<p className="text-base text-gray-500 max-w-2xl mx-auto md:mx-0">
            A structured, transparent approach ensuring minimal disruption and
            maximum quality delivery across Dubai.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

<div className="flex flex-col hover-lift reveal-up delay-100 bg-neutral-100 border-gray-100/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-4 border border-blue-100 bg-blue-50 inline-block px-2 py-1 rounded w-max">
              Phase 01
            </div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              Technical Audit
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Comprehensive site inspection and requirement analysis by our
              senior engineers.
            </p>
</div>

<div className="flex flex-col hover-lift reveal-up delay-200 bg-neutral-100 border-gray-100 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-4 border border-blue-100 bg-blue-50 inline-block px-2 py-1 rounded w-max">
              Phase 02
            </div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              System Design
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Developing tailored schematics and transparent proposals aligned
              with UAE regulations.
            </p>
</div>

<div className="flex flex-col hover-lift reveal-up delay-300 bg-neutral-100 border-gray-100 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-4 border border-blue-100 bg-blue-50 inline-block px-2 py-1 rounded w-max">
              Phase 03
            </div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Precision installation by certified technicians, adhering strictly
              to timelines.
            </p>
</div>

<div className="flex flex-col hover-lift reveal-up delay-400 bg-neutral-100 border-gray-100 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-4 border border-blue-100 bg-blue-50 inline-block px-2 py-1 rounded w-max">
              Phase 04
            </div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
              Commissioning
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Rigorous testing, system handover, and ongoing maintenance support
              scheduling.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-blue-50/50 py-20 md:py-28">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 reveal-up">
<div>
<h2 className="md:text-4xl text-3xl font-semibold text-gray-900 tracking-tight font-ibm-sans mb-4 text-center md:text-left">
              Client Feedback
            </h2>
<div className="flex items-center justify-center md:justify-start gap-2">
<span className="text-gray-900 font-semibold text-xl">4.9</span>
<div className="flex text-yellow-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-gray-400 text-sm ml-2">Verified Reviews</span>
</div>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:shadow-md transition-all" onclick="document.getElementById('reviews-scroll').scrollBy({left: -320, behavior: 'smooth'})">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:shadow-md transition-all" onclick="document.getElementById('reviews-scroll').scrollBy({left: 320, behavior: 'smooth'})">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory no-scrollbar px-1" id="reviews-scroll">

<div className="hover-lift reveal-up delay-100 min-w-[85vw] sm:min-w-[320px] md:min-w-[380px] bg-white p-6 md:p-8 rounded-2xl border border-gray-200 snap-center md:snap-start flex-shrink-0 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-6">
              "Amwaj Al Dana handled the complete MEP fit-out for our new office
              in Business Bay. Their team is exceptionally professional,
              resolving complex HVAC routing issues seamlessly."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-xs tracking-wide">
                AO
              </div>
<div>
<div className="font-medium text-gray-900 text-sm">Ahmed O.</div>
<div className="text-xs text-gray-500">Commercial Client</div>
</div>
</div>
</div>

<div className="hover-lift reveal-up delay-200 min-w-[85vw] sm:min-w-[320px] md:min-w-[380px] bg-white p-6 md:p-8 rounded-2xl border border-gray-200 snap-center md:snap-start flex-shrink-0 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-6">
              "We upgraded our Palm Jumeirah villa to a full smart home system.
              The integration of lighting, AC, and security was flawless. Highly
              recommend their automation engineers."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-semibold text-xs tracking-wide">
                SJ
              </div>
<div>
<div className="font-medium text-gray-900 text-sm">Sarah J.</div>
<div className="text-xs text-gray-500">Residential Client</div>
</div>
</div>
</div>

<div className="hover-lift reveal-up delay-300 min-w-[85vw] sm:min-w-[320px] md:min-w-[380px] bg-white p-6 md:p-8 rounded-2xl border border-gray-200 snap-center md:snap-start flex-shrink-0 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 text-sm leading-relaxed mb-6">
              "Fast response during an AC emergency in mid-July. The technicians
              arrived on time, identified the compressor issue, and had it
              running within hours. True lifesavers."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold text-xs tracking-wide">
                MK
              </div>
<div>
<div className="font-medium text-gray-900 text-sm">Mohammed K.</div>
<div className="text-xs text-gray-500">Property Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-gray-900 text-white relative border-t border-gray-800 overflow-hidden" id="contact">
<div className="bg-center opacity-5 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1596719078222-300a2ced7081?w=2000&amp;q=80')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center">
<h2 className="md:text-5xl reveal-up text-3xl font-semibold text-white tracking-tight font-ibm-sans mb-6 drop-shadow-md">
          Ready to Upgrade Your Infrastructure?
        </h2>
<p className="md:text-lg leading-relaxed text-base text-gray-400 font-ibm-sans max-w-2xl mr-auto mb-10 ml-auto reveal-up delay-100">
          Connect with our engineering team to discuss your MEB or automation
          requirements. We provide detailed consultations and transparent, rapid
          quotations.
        </p>
<div className="reveal-up delay-200">
<button className="btn-3d hover:bg-blue-500 transition-colors hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] sm:w-auto text-base font-medium text-white w-full rounded-lg pt-4 pr-10 pb-4 pl-10 shadow-[0_0_20px_rgba(37,99,235,0.3)]" onclick="openModal()">
            Start a Project Request
          </button>
</div>
<div className="mt-16 pt-10 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-left reveal-up delay-300">
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-12 h-12 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center flex-shrink-0 shadow-inner">
<iconify-icon className="text-2xl text-blue-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-gray-300 mb-1">
                Headquarters
              </h4>
<p className="text-sm text-gray-500">Business Bay, Dubai</p>
</div>
</div>
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-12 h-12 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center flex-shrink-0 shadow-inner">
<iconify-icon className="text-2xl text-blue-400" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-300 mb-1">Email Us</h4>
<a className="text-sm text-gray-500 hover:text-blue-400 transition-colors" href="mailto:info@amwajaldana.com">
                info@amwajaldana.com
              </a>
</div>
</div>
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-12 h-12 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center flex-shrink-0 shadow-inner">
<iconify-icon className="text-2xl text-blue-400" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-300 mb-1">Call Us</h4>
<a className="text-sm text-gray-500 hover:text-blue-400 transition-colors" href="tel:+971501234567">
                +971 50 123 4567
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-10 mt-auto">
<div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<span className="text-sm font-semibold text-gray-900 tracking-tight font-quicksand">
            Amwaj Al Dana
            <span className="text-orange-500">.</span>
</span>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Terms of Service
          </a>
</div>
<p className="text-xs text-gray-400">
          © 2026 Amwaj Al Dana Technical Services.
        </p>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300 px-4" id="contact-modal">

<div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm cursor-pointer" onclick="closeModal()"></div>

<div className="relative bg-white rounded-2xl w-full max-w-2xl p-6 md:p-10 shadow-2xl transform scale-95 transition-transform duration-300 max-h-[90vh] overflow-y-auto no-scrollbar" id="modal-content">
<button className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors" onclick="closeModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-gray-900">
          Request Consultation
        </h3>
<p className="text-sm text-gray-500 mb-8">
          Fill out the details below and our technical team will reach out to
          you.
        </p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Request submitted successfully.'); closeModal();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-600">
                Full Name
              </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-600">
                Company (Optional)
              </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm" placeholder="Acme Corp" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-600">
                Email Address
              </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-600">
                Phone Number
              </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm" placeholder="+971 50 000 0000" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-600">
              Service Category
            </label>
<div className="relative">
<select className="appearance-none w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" required="">
<option disabled="" selected="" value="">
                  Select a service
                </option>
<option value="mep_contracting">Full MEB Contracting</option>
<option value="hvac">HVAC &amp; Mechanical</option>
<option value="electrical">Electrical Systems</option>
<option value="plumbing">Plumbing Networks</option>
<option value="automation">Smart Home &amp; Automation</option>
<option value="maintenance">
                  Annual Maintenance Contract (AMC)
                </option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-600">
              Project Details
            </label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 resize-none shadow-sm" placeholder="Briefly describe your requirements..." required="" rows="3"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<div className="flex items-center h-5">
<input className="appearance-none w-4 h-4 rounded-sm border border-gray-300 bg-gray-50 checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer relative transition-all" id="privacy" required="" style={{backgroundImage: 'url(\'data:image/svg+xml', svg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http: '//www.w3.org/2000/svg\\'&gt'}} type="checkbox"/>
</div>
<label className="text-xs text-gray-500 leading-tight cursor-pointer select-none mt-0.5" htmlFor="privacy">
              I agree to the processing of my data for communication regarding
              my inquiry.
            </label>
</div>
<button className="btn-3d w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3.5 rounded-lg transition-colors mt-4 shadow-md shadow-blue-600/20" type="submit">
            Submit Request
          </button>
</form>
</div>
</div>



    </>
  );
}
