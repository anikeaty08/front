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
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
fontSize: {
xxs: '0.65rem',
}
}
}
}
function toggleTheme() {
const html = document.documentElement;
const checkbox = document.getElementById('theme-toggle');
if (html.classList.contains('dark')) {
html.classList.remove('dark');
checkbox.checked = false;
} else {
html.classList.add('dark');
checkbox.checked = true;
}
}
// Mobile Menu Logic
function toggleMobileMenu() {
const menu = document.getElementById('mobile-menu');
const btn = document.getElementById('mobile-menu-btn-icon');
if (menu.classList.contains('translate-x-full')) {
menu.classList.remove('translate-x-full');
document.body.style.overflow = 'hidden'; // Prevent background scrolling
// Change icon to X
btn.setAttribute('data-icon', 'lucide:x');
} else {
menu.classList.add('translate-x-full');
document.body.style.overflow = 'auto';
// Change icon back to Menu
btn.setAttribute('data-icon', 'lucide:menu');
}
}
function closeMobileMenu() {
const menu = document.getElementById('mobile-menu');
const btn = document.getElementById('mobile-menu-btn-icon');
menu.classList.add('translate-x-full');
document.body.style.overflow = 'auto';
btn.setAttribute('data-icon', 'lucide:menu');
}
// Carousel Logic
function scrollCarousel(direction) {
const container = document.getElementById('testimonial-container');
const cardWidth = 400; // Approximate card width + gap
const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
      

<div className="fixed inset-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 flex flex-col pt-28 px-6 gap-8 md:hidden" id="mobile-menu">
<nav className="flex flex-col gap-6 text-xl font-medium text-neutral-900 dark:text-white">
<a className="flex items-center justify-between border-b border-neutral-100 dark:border-white/5 pb-4" href="#software" onclick="closeMobileMenu()">
                Software
                <span className="iconify text-neutral-400" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
<a className="flex items-center justify-between border-b border-neutral-100 dark:border-white/5 pb-4" href="#hardware" onclick="closeMobileMenu()">
                Hardware
                <span className="iconify text-neutral-400" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
<a className="flex items-center justify-between border-b border-neutral-100 dark:border-white/5 pb-4" href="#process" onclick="closeMobileMenu()">
                Process
                <span className="iconify text-neutral-400" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
<a className="flex items-center justify-between border-b border-neutral-100 dark:border-white/5 pb-4" href="#faq" onclick="closeMobileMenu()">
                FAQ
                <span className="iconify text-neutral-400" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
</nav>
<div className="mt-auto mb-8">
<a className="flex w-full items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black py-4 rounded-xl font-medium" href="#">
                Client Portal
            </a>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 dark:border-white/5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-neutral-900 dark:text-white flex items-center gap-2 z-50 relative" href="#">
<span className="iconify text-indigo-600 dark:text-indigo-500" data-icon="lucide:command" data-width="20"></span>
                NEXUS
            </a>

<div className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-400">
<a className="hover:text-black dark:hover:text-white transition-colors duration-200" href="#software">Software</a>
<a className="hover:text-black dark:hover:text-white transition-colors duration-200" href="#hardware">Hardware</a>
<a className="hover:text-black dark:hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-black dark:hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4 z-50 relative">

<div className="flex items-center">
<input checked="" className="theme-toggle-checkbox" id="theme-toggle" onchange="toggleTheme()" type="checkbox"/>
<label className="theme-toggle-label" htmlFor="theme-toggle">
<div className="theme-toggle-ball">
<span className="iconify text-neutral-400 dark:hidden" data-icon="lucide:sun" data-width="12"></span>
<span className="iconify text-white hidden dark:block" data-icon="lucide:moon" data-width="12"></span>
</div>
</label>
</div>
<a className="hidden sm:block text-sm text-neutral-900 dark:text-white bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/15 px-4 py-2 rounded-full border border-neutral-200 dark:border-white/5 transition-all duration-200 font-normal" href="#">
                    Client Portal
                </a>

<button className="md:hidden text-neutral-900 dark:text-white p-1" onclick="toggleMobileMenu()">
<span className="iconify" data-icon="lucide:menu" data-width="24" id="mobile-menu-btn-icon"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting New Enterprise Partners
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-neutral-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
                Unified digital <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-900 dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-600">infrastructure.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                We bridge the gap between physical hardware and abstract code. A full-stack agency engineering robust servers, networks, and the bespoke software that runs on them.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg dark:shadow-none shadow-neutral-500/20">
                    Start a Project
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    View Service Catalog
                </button>
</div>
</div>
</section>

<section className="border-y border-neutral-200 dark:border-white/5 bg-white dark:bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight">99.9%</div>
<div className="text-sm text-neutral-500 mt-1">Uptime Guaranteed</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight">24/7</div>
<div className="text-sm text-neutral-500 mt-1">Network Monitoring</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight">50+</div>
<div className="text-sm text-neutral-500 mt-1">Enterprise Clients</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight">4h</div>
<div className="text-sm text-neutral-500 mt-1">Avg. Response Time</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

<section id="software">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-200 dark:border-white/5 pb-8">
<div>
<div className="text-indigo-600 dark:text-indigo-500 font-medium mb-2 flex items-center gap-2">
<span className="iconify" data-icon="lucide:code-2"></span>
                        Software Engineering
                    </div>
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white font-medium tracking-tight">Scalable Digital Solutions</h2>
</div>
<p className="text-neutral-600 dark:text-neutral-500 max-w-md mt-4 md:mt-0 text-sm leading-relaxed">
                    From bare-metal optimization to cloud-native applications, we build software designed for performance, security, and longevity.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:shadow-indigo-500/5 dark:hover:bg-neutral-900">
<div className="h-10 w-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-900 dark:text-white mb-6 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:app-window" data-width="20"></span>
</div>
<h3 className="text-xl text-neutral-900 dark:text-white font-medium mb-3">Custom Development</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                        Bespoke web and mobile applications tailored to your operational workflows using React, Node.js, and Python.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span> Full-Stack Web Apps
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span> API Integration
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:shadow-indigo-500/5 dark:hover:bg-neutral-900">
<div className="h-10 w-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-900 dark:text-white mb-6 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:cloud" data-width="20"></span>
</div>
<h3 className="text-xl text-neutral-900 dark:text-white font-medium mb-3">Cloud Architecture</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                        Designing resilient cloud environments on AWS, Azure, or Hybrid setups to ensure data availability and scalability.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span> Migration Strategy
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span> Serverless Computing
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:shadow-indigo-500/5 dark:hover:bg-neutral-900">
<div className="h-10 w-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-900 dark:text-white mb-6 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-xl text-neutral-900 dark:text-white font-medium mb-3">Cybersecurity</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                        Proactive threat detection, penetration testing, and security auditing to protect your intellectual property.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span> Vulnerability Assessment
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span> Compliance (SOC2/GDPR)
                        </li>
</ul>
</div>
</div>
</section>

<section id="hardware">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-200 dark:border-white/5 pb-8">
<div>
<div className="text-emerald-600 dark:text-emerald-500 font-medium mb-2 flex items-center gap-2">
<span className="iconify" data-icon="lucide:cpu"></span>
                        Hardware Solutions
                    </div>
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white font-medium tracking-tight">Physical Infrastructure</h2>
</div>
<p className="text-neutral-600 dark:text-neutral-500 max-w-md mt-4 md:mt-0 text-sm leading-relaxed">
                    Reliable equipment is the backbone of operation. We procure, install, and maintain the machines that power your business.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:shadow-emerald-500/5 dark:hover:bg-neutral-900 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:server" data-width="64"></span>
</div>
<div className="relative z-10">
<h3 className="text-lg text-neutral-900 dark:text-white font-medium mb-2">Server Management</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                            On-premise server installation, rack optimization, and thermal management.
                        </p>
<div className="w-full h-px bg-neutral-100 dark:bg-white/5 mb-4"></div>
<span className="text-xs text-emerald-600 dark:text-emerald-500 flex items-center gap-1 font-medium">
                            Configure <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:shadow-emerald-500/5 dark:hover:bg-neutral-900 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:network" data-width="64"></span>
</div>
<div className="relative z-10">
<h3 className="text-lg text-neutral-900 dark:text-white font-medium mb-2">Network Setup</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                            Structured cabling, router configuration, and high-speed enterprise Wi-Fi zones.
                        </p>
<div className="w-full h-px bg-neutral-100 dark:bg-white/5 mb-4"></div>
<span className="text-xs text-emerald-600 dark:text-emerald-500 flex items-center gap-1 font-medium">
                            Details <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:shadow-emerald-500/5 dark:hover:bg-neutral-900 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:monitor" data-width="64"></span>
</div>
<div className="relative z-10">
<h3 className="text-lg text-neutral-900 dark:text-white font-medium mb-2">Workstations</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                            Procurement and setup of high-performance laptops and desktops for teams.
                        </p>
<div className="w-full h-px bg-neutral-100 dark:bg-white/5 mb-4"></div>
<span className="text-xs text-emerald-600 dark:text-emerald-500 flex items-center gap-1 font-medium">
                            Equip <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:shadow-emerald-500/5 dark:hover:bg-neutral-900 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:wrench" data-width="64"></span>
</div>
<div className="relative z-10">
<h3 className="text-lg text-neutral-900 dark:text-white font-medium mb-2">Maintenance</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                            24/7 hardware support, component repair, and scheduled lifecycle upgrades.
                        </p>
<div className="w-full h-px bg-neutral-100 dark:bg-white/5 mb-4"></div>
<span className="text-xs text-emerald-600 dark:text-emerald-500 flex items-center gap-1 font-medium">
                            Support <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>
</div>
</section>

<section id="process">
<div className="mb-16 text-center max-w-2xl mx-auto">
<div className="text-indigo-600 dark:text-indigo-500 font-medium mb-2 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:workflow"></span>
                    Methodology
                </div>
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white font-medium tracking-tight mb-4">How We Operate</h2>
<p className="text-neutral-600 dark:text-neutral-500 text-sm">A transparent, cyclical process ensures your infrastructure evolves with your business needs.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="relative pt-8 md:text-center">
<div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-24 h-px bg-indigo-500 md:hidden"></div> 
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-indigo-500 items-center justify-center z-10 shadow-lg shadow-indigo-500/20">
<span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">1</span>
</div>
<h3 className="text-lg text-neutral-900 dark:text-white font-medium mb-2">Audit &amp; Strategy</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            We analyze your current stack, identify bottlenecks, and map out a comprehensive digital roadmap.
                        </p>
</div>

<div className="relative pt-8 md:text-center">
<div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-24 h-px bg-indigo-500 md:hidden"></div>
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-indigo-500 items-center justify-center z-10 shadow-lg shadow-indigo-500/20">
<span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">2</span>
</div>
<h3 className="text-lg text-neutral-900 dark:text-white font-medium mb-2">Build &amp; Deploy</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Our engineers execute the plan, setting up hardware and coding software with rigorous testing.
                        </p>
</div>

<div className="relative pt-8 md:text-center">
<div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-24 h-px bg-indigo-500 md:hidden"></div>
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-indigo-500 items-center justify-center z-10 shadow-lg shadow-indigo-500/20">
<span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">3</span>
</div>
<h3 className="text-lg text-neutral-900 dark:text-white font-medium mb-2">Manage &amp; Scale</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Continuous monitoring and iterative updates keep your systems secure and ready for growth.
                        </p>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white font-medium tracking-tight">Trusted by Industry Leaders</h2>

<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-white" onclick="scrollCarousel('left')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button className="p-2 rounded-full border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-white" onclick="scrollCarousel('right')">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide" id="testimonial-container">

<div className="min-w-[85vw] md:min-w-[400px] snap-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 flex flex-col h-full">
<div className="flex items-center gap-1 text-indigo-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 flex-grow">
                        "Nexus completely overhauled our legacy server room and migrated our customer database to the cloud without a single minute of downtime. The transition was seamless."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium">SJ</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">CTO, FinTech Global</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 flex flex-col h-full">
<div className="flex items-center gap-1 text-indigo-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 flex-grow">
                        "The level of detail in their hardware procurement process is unmatched. They found us high-performance GPUs during a shortage and handled the entire installation process."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium">MC</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">Marcus Chen</div>
<div className="text-xs text-neutral-500">Director, AI Research Lab</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 flex flex-col h-full">
<div className="flex items-center gap-1 text-indigo-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 flex-grow">
                        "Their custom internal tools have saved our operations team roughly 20 hours a week. The ROI was immediate and the interface is incredibly intuitive."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium">ER</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">COO, Logistics Inc</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 flex flex-col h-full">
<div className="flex items-center gap-1 text-indigo-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 flex-grow">
                        "Reliability was our main concern, but Nexus's 24/7 monitoring service has given us complete peace of mind. We haven't had a network issue in six months."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium">DK</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">David Kim</div>
<div className="text-xs text-neutral-500">VP Eng, StreamLine</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto" id="faq">
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white font-medium tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-xl overflow-hidden cursor-pointer">
<summary className="px-6 py-4 flex items-center justify-between font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        Do you work with startups?
                        <span className="iconify transform group-open:rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-4 pt-0 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-transparent group-open:border-neutral-100 dark:group-open:border-white/5 group-open:pt-4">
                        Yes, we scale our services to fit the stage of your company. Whether you need a simple MVP or a complex enterprise architecture, we have packages tailored to your growth phase.
                    </div>
</details>
<details className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-xl overflow-hidden cursor-pointer">
<summary className="px-6 py-4 flex items-center justify-between font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        What is your typical response time for support?
                        <span className="iconify transform group-open:rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-4 pt-0 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-transparent group-open:border-neutral-100 dark:group-open:border-white/5 group-open:pt-4">
                        For our enterprise partners, we offer a 4-hour SLA (Service Level Agreement). For critical infrastructure outages, our automated systems alert our on-call engineers instantly, 24/7.
                    </div>
</details>
<details className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-xl overflow-hidden cursor-pointer">
<summary className="px-6 py-4 flex items-center justify-between font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        Do you provide hardware or just install it?
                        <span className="iconify transform group-open:rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-4 pt-0 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-transparent group-open:border-neutral-100 dark:group-open:border-white/5 group-open:pt-4">
                        We are a full-service procurement agency. We handle sourcing, vendor negotiation, shipping, installation, and ongoing maintenance. You receive a single invoice.
                    </div>
</details>
</div>
</section>
</div>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-950"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50 dark:from-neutral-950 dark:to-indigo-900/10"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-neutral-900 dark:text-white tracking-tight mb-6">Ready to upgrade your stack?</h2>
<p className="text-neutral-600 dark:text-neutral-400 mb-10 font-light">
                Whether you need a new server room or a custom SaaS platform, our team is ready to deploy.
            </p>
<form className="max-w-md mx-auto text-left space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-500 mb-1">Name</label>
<input className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-400 dark:placeholder-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1">Email</label>
<input className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-400 dark:placeholder-neutral-700" placeholder="john@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1">Interest</label>
<div className="flex gap-4 mt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-neutral-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-900 checked:bg-indigo-600 dark:checked:bg-indigo-500 checked:border-indigo-600 dark:checked:border-indigo-500 transition-all" type="checkbox"/>
<span className="iconify absolute text-white dark:text-black opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">Software</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-neutral-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-900 checked:bg-emerald-600 dark:checked:bg-emerald-500 checked:border-emerald-600 dark:checked:border-emerald-500 transition-all" type="checkbox"/>
<span className="iconify absolute text-white dark:text-black opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">Hardware</span>
</label>
</div>
</div>
<button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors mt-6 shadow-lg shadow-neutral-900/10 dark:shadow-none" type="button">
                    Request Consultation
                </button>
</form>
</div>
</section>

<footer className="border-t border-neutral-200 dark:border-white/5 bg-white dark:bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-neutral-900 dark:text-white flex items-center gap-2 mb-4" href="#">
<span className="iconify text-indigo-600 dark:text-indigo-500" data-icon="lucide:command" data-width="20"></span>
                        NEXUS
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Providing the backbone for modern enterprises through advanced software and rugged hardware.
                    </p>
</div>
<div>
<h4 className="text-sm text-neutral-900 dark:text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Cloud Solutions</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Server Maintenance</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Cybersecurity</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-neutral-900 dark:text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-neutral-900 dark:text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">SLA</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 dark:border-white/5 pt-8">
<p className="text-xs text-neutral-500 dark:text-neutral-600">© 2023 Nexus IT Agency. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-500 dark:text-neutral-600 hover:text-black dark:hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-500 dark:text-neutral-600 hover:text-black dark:hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-neutral-500 dark:text-neutral-600 hover:text-black dark:hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
