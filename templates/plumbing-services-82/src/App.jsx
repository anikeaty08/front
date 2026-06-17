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



        // Form Handling Logic
        function handleFormSubmit(event, formId, successId) {
            event.preventDefault();
            
            const form = document.getElementById(formId);
            const successMsg = document.getElementById(successId);
            const btn = form.querySelector('.submit-btn');
            const btnText = form.querySelector('.btn-text');
            const btnIcon = form.querySelector('.btn-icon');
            const loadingIcon = form.querySelector('.loading-icon');

            if(btnText) btnText.innerText = "Processing...";
            if(btnIcon) btnIcon.classList.add('hidden');
            if(loadingIcon) loadingIcon.classList.remove('hidden');
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                
                if(btnText) btnText.innerText = "Submit Request";
                if(btnIcon) btnIcon.classList.remove('hidden');
                if(loadingIcon) loadingIcon.classList.add('hidden');
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
            }, 1500);
        }

        function resetForm(formId, successId) {
            const form = document.getElementById(formId);
            const successMsg = document.getElementById(successId);
            
            form.reset();
            successMsg.classList.add('hidden');
            form.classList.remove('hidden');
        }

        // Navigation Router
        function navigateTo(pageId) {
            // Scroll to top when navigating to a new page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if(selectedPage) {
                selectedPage.classList.add('active');
            }

            // Re-trigger scroll animations
            setTimeout(() => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                        }
                    });
                }, { threshold: 0.1 });
                
                document.querySelectorAll('.reveal').forEach(el => {
                    el.classList.remove('active');
                    observer.observe(el);
                });
            }, 100);
        }

        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            // Check current state via class
            if (menu.classList.contains('menu-closed')) {
                // Open menu
                menu.classList.remove('menu-closed');
                menu.classList.add('menu-open');
                
                // Animate Icon: Rotate and Swap
                icon.style.transform = 'rotate(90deg)';
                setTimeout(() => {
                     icon.setAttribute('icon', 'solar:close-circle-linear');
                }, 100);
            } else {
                // Close menu
                menu.classList.remove('menu-open');
                menu.classList.add('menu-closed');
                
                // Animate Icon: Rotate Back and Swap
                icon.style.transform = 'rotate(0deg)';
                 setTimeout(() => {
                     icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                }, 100);
            }
        }

        function mobileNavigate(pageId) {
            toggleMobileMenu(); // Close menu
            navigateTo(pageId); // Navigate
        }

        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

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
      

<div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden text-sm font-medium shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] border-t border-slate-200">
<a className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 active:bg-slate-800 transition-colors" href="tel:0405405919">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
            Call Now
        </a>
<button className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 py-4 active:bg-slate-50 transition-colors" onclick="navigateTo('contact-page')">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
            Get Quote
        </button>
</div>

<div className="bg-slate-900 text-slate-300 text-xs py-2.5 hidden lg:block border-b border-slate-800">
<div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-between items-center">
<div className="flex gap-6">
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Serving Greater Metro Area
                </span>
<span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    24/7 Emergency Service
                </span>
</div>
<div className="flex gap-4">
<span className="hover:text-white transition-colors cursor-default">Lic #994021</span>
<span className="text-slate-700">|</span>
<span className="hover:text-white transition-colors cursor-default">Fully Insured</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="flex h-20 justify-between items-center relative">

<a className="flex items-center gap-3 group z-50 relative" href="#" onclick="navigateTo('home')">
<div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-2 rounded-lg shadow-sm group-hover:shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
<iconify-icon icon="solar:drop-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-semibold text-slate-900 text-lg leading-none tracking-tight">UNITED</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em]">Plumbing</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/60">
<button className="nav-link px-5 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all" onclick="navigateTo('home')">Home</button>
<button className="nav-link px-5 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all" onclick="navigateTo('services')">Services</button>
<button className="nav-link px-5 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all" onclick="navigateTo('about')">About</button>
<button className="nav-link px-5 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all" onclick="navigateTo('contact-page')">Contact</button>
</div>

<div className="hidden lg:flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Emergency 24/7</span>
<a className="text-base font-semibold text-slate-900 leading-none hover:text-blue-600 transition-colors tracking-tight" href="tel:0405405919">0405 405 919</a>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-2" onclick="navigateTo('contact-page')">
                        Book Online
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>


<button className="lg:hidden w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-100 active:bg-slate-200 rounded-lg transition-colors z-50" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon className="pointer-events-none transition-transform duration-300" icon="solar:hamburger-menu-linear" id="menu-icon" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>


<div className="menu-closed absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 overflow-hidden lg:hidden" id="mobile-menu">
<div className="px-6 py-6 flex flex-col gap-2">
<button className="text-left w-full px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-between group" onclick="mobileNavigate('home')">
                    Home
                    <iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors pointer-events-none" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="text-left w-full px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-between group" onclick="mobileNavigate('services')">
                    Services
                    <iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors pointer-events-none" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="text-left w-full px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-between group" onclick="mobileNavigate('about')">
                    About
                    <iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors pointer-events-none" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="text-left w-full px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-between group" onclick="mobileNavigate('contact-page')">
                    Contact
                    <iconify-icon className="text-slate-300 group-hover:text-blue-600 transition-colors pointer-events-none" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="h-px bg-slate-100 my-2"></div>
<div className="flex flex-col gap-4 mt-2 p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex items-center gap-3 text-sm">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Emergency 24/7</span>
<a className="font-semibold text-slate-900 block p-1 -ml-1" href="tel:0405405919">0405 405 919</a>
</div>
</div>
</div>
</div>
</div>
</nav>

<main className="page-section active" id="home">

<section className="relative bg-white pt-10 md:pt-20 pb-32 overflow-hidden border-b border-slate-200">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        #1 Rated Local Plumber
                    </div>
</div>
<h1 className="reveal delay-100 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
                    Professional Plumbing <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Done Right.</span>
</h1>
<p className="reveal delay-200 text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
                    From leaking taps to full renovations, we are your trusted local experts. Upfront pricing, licensed professionals, and satisfaction guaranteed.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] transition-all active:scale-95 text-sm" onclick="navigateTo('contact-page')">
                        Get Free Quote
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium px-8 py-4 rounded-xl shadow-sm transition-all active:scale-95 text-sm" href="tel:0405405919">
<iconify-icon className="text-slate-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        0405 405 919
                    </a>
</div>

<div className="reveal delay-300 mt-16 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-sm font-medium text-slate-500">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon> Fully Insured
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-500">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon> Licensed Experts
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-500">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon> 5-Star Rated
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Popular Services</h2>
<p className="text-slate-500 max-w-md">Comprehensive solutions for residential and commercial needs.</p>
</div>
<button className="text-slate-600 font-medium hover:text-blue-600 flex items-center gap-2 transition-colors text-sm group" onclick="navigateTo('services')">
                        View All Services <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-0 bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/60 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)] transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Leak Detection</h3>
<p className="text-slate-500 text-sm leading-relaxed">Advanced acoustic technology to find hidden leaks behind walls without damage.</p>
</div>

<div className="reveal delay-100 bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/60 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)] transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Blocked Drains</h3>
<p className="text-slate-500 text-sm leading-relaxed">High-pressure water jetting and CCTV camera inspections to clear blocked pipes.</p>
</div>

<div className="reveal delay-200 bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/60 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)] transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Hot Water</h3>
<p className="text-slate-500 text-sm leading-relaxed">Same-day repair or replacement of electric, gas, and solar hot water systems.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Customer Reviews</h2>
<div className="flex justify-center items-center gap-1.5 mb-2">
<div className="flex text-amber-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-900 ml-2">5.0 / 5.0</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<div className="mb-4 text-blue-500">
<iconify-icon icon="solar:quote-up-linear" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">"Fantastic Service"</h4>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">"United Plumbing Services were fantastic. Arrived exactly when they said they would and fixed my leaking pipe quickly. Very professional."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">JD</div>
<div>
<span className="block font-medium text-slate-900 text-sm">James D.</span>
<span className="text-xs text-slate-400">Local Resident</span>
</div>
</div>
</div>

<div className="reveal delay-100 bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<div className="mb-4 text-blue-500">
<iconify-icon icon="solar:quote-up-linear" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">"Highly Recommended"</h4>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">"Honest pricing and great work. It's hard to find trades you can trust these days, but these guys are the real deal."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">SM</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Sarah M.</span>
<span className="text-xs text-slate-400">Homeowner</span>
</div>
</div>
</div>

<div className="reveal delay-200 bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<div className="mb-4 text-blue-500">
<iconify-icon icon="solar:quote-up-linear" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">"Lifesavers!"</h4>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">"Called for an urgent hot water issue. They were responsive and got it sorted the same day. Saved us a lot of headache!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">MK</div>
<div>
<span className="block font-medium text-slate-900 text-sm">Michael K.</span>
<span className="text-xs text-slate-400">Business Owner</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section" id="services">
<div className="bg-white pt-24 pb-16 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 lg:px-8 text-center reveal">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Our Services</h1>
<p className="text-slate-500 max-w-xl mx-auto text-lg">Comprehensive plumbing solutions for residential and commercial properties.</p>
</div>
</div>
<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-0 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-colors group">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Leak Detection</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Using thermal imaging and acoustic sensors, we locate hidden leaks accurately to minimize property damage.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Non-invasive methods</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Thermal imaging</li>
</ul>
</div>

<div className="reveal delay-100 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-colors group">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Blocked Drains</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">We clear stubborn blockages in sinks, toilets, and showers using industrial grade electric eels.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> CCTV Inspection</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Hydro-jetting</li>
</ul>
</div>

<div className="reveal delay-200 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-colors group">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Hot Water Systems</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Installation, repair, and maintenance of all major hot water brands. Gas, electric, and continuous flow.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Same day replacement</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Energy efficiency</li>
</ul>
</div>

<div className="reveal delay-100 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-colors group">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:home-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Renovations</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Planning a kitchen or bathroom makeover? We handle rough-ins and fit-outs for your new fixtures.</p>
</div>

<div className="reveal delay-200 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-colors group">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Commercial</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Reliable scheduled maintenance and emergency response for offices, retail stores, and strata management.</p>
</div>

<div className="reveal delay-300 bg-white p-8 rounded-2xl shadow-sm border border-amber-500/30 hover:border-amber-500 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">24/7</div>
<div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:danger-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Emergency</h3>
<p className="text-slate-500 mb-6 leading-relaxed text-sm">Burst pipes? Overflowing toilets? Gas leaks? Our emergency team is on standby 24 hours a day.</p>
</div>
</div>
</div>
</section>
</main>

<main className="page-section" id="about">
<div className="bg-white pt-24 pb-16 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 lg:px-8 text-center reveal">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">About Us</h1>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">Family owned and operated since 2005.</p>
</div>
</div>
<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal delay-100">
<span className="text-blue-600 font-semibold tracking-widest text-xs uppercase mb-3 block">Our Story</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">Dedicated to quality workmanship and honest service.</h2>
<div className="space-y-4 text-slate-500 leading-relaxed text-base">
<p>Founded over 15 years ago, United Plumbing Services began with a single van and a commitment to doing the job right. Today, we have grown into one of the city's most trusted plumbing teams, but our core values remain the same.</p>
<p>We believe in transparency. That means upfront pricing, clear communication about the problem, and no hidden fees. Our team consists of fully licensed and insured professionals who take pride in their craft.</p>
</div>
<div className="grid grid-cols-2 gap-8 mt-10">
<div className="border-l-2 border-slate-200 pl-6 reveal delay-200">
<span className="block text-4xl font-semibold text-slate-900 tracking-tight">15+</span>
<span className="text-sm text-slate-500 mt-1 block">Years Experience</span>
</div>
<div className="border-l-2 border-slate-200 pl-6 reveal delay-300">
<span className="block text-4xl font-semibold text-slate-900 tracking-tight">5k+</span>
<span className="text-sm text-slate-500 mt-1 block">Jobs Completed</span>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center bg-slate-100">
<iconify-icon className="text-slate-300" icon="solar:users-group-two-rounded-linear" width="80"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div>
<span className="block font-semibold text-slate-900">Licensed &amp; Insured</span>
<span className="text-xs text-slate-500">License #994021</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section" id="contact-page">
<div className="bg-white pt-24 pb-16 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 lg:px-8 text-center reveal">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Contact Us</h1>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">We're here to help. Reach out to us for quotes or emergency service.</p>
</div>
</div>
<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal delay-100">
<h2 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">Get in Touch</h2>
<div className="space-y-10 mb-12">
<div className="flex items-start gap-5">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">Our Location</h3>
<p className="text-sm text-slate-500 leading-relaxed">123 Plumber Lane,<br/>Sydney NSW 2000, Australia</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">Phone</h3>
<p className="text-sm text-slate-500 mb-1">Mon-Fri 7am-5pm</p>
<a className="text-blue-600 font-medium hover:text-blue-700 transition-colors" href="tel:0405405919">0405 405 919</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">Email</h3>
<p className="text-sm text-slate-500 mb-1">Send us a message anytime</p>
<a className="text-blue-600 font-medium hover:text-blue-700 transition-colors" href="mailto:service@united.com">service@united.com</a>
</div>
</div>
</div>

<div className="w-full h-64 bg-slate-200 rounded-2xl border border-slate-300 flex items-center justify-center flex-col gap-2 relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors z-10" icon="solar:map-point-bold" width="48"></iconify-icon>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-widest z-10">Map View</span>
</div>
</div>

<div className="reveal delay-200 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<h2 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">Send a Message</h2>

<div className="hidden h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in" id="contact-success">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
<p className="text-slate-500 text-sm mb-6">Thanks for reaching out. We'll be in touch shortly.</p>
<button className="text-blue-600 font-medium text-sm hover:underline" onclick="resetForm('contact-form', 'contact-success')">Send another message</button>
</div>
<form className="space-y-6" id="contact-form" onsubmit="handleFormSubmit(event, 'contact-form', 'contact-success')">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-800 placeholder:text-slate-400" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-800 placeholder:text-slate-400" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-800 placeholder:text-slate-400" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">Subject</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-600">
<option>General Inquiry</option>
<option>Request a Quote</option>
<option>Emergency Service</option>
<option>Feedback</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none flex">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-slate-800 placeholder:text-slate-400" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<button className="submit-btn w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-lg shadow-sm transition-all text-sm flex items-center justify-center gap-2" type="submit">
<span className="btn-text">Send Message</span>
<iconify-icon className="btn-icon" icon="solar:plain-2-linear" width="18"></iconify-icon>
<iconify-icon className="loading-icon hidden animate-spin-custom" icon="solar:spinner-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="mt-24 pt-24 border-t border-slate-200">
<div className="text-center mb-16 reveal">
<h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
<p className="text-slate-500">Common questions about our services and pricing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
<div className="group reveal delay-0">
<h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="solar:question-circle-linear"></iconify-icon> Do you charge a call-out fee?
                            </h4>
<p className="text-sm text-slate-500 leading-relaxed pl-7">Yes, we have a standard call-out fee which covers the first 15 minutes of labor. This ensures our technicians can arrive fully equipped to diagnose your issue.</p>
</div>
<div className="group reveal delay-100">
<h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="solar:question-circle-linear"></iconify-icon> Do you offer emergency services?
                            </h4>
<p className="text-sm text-slate-500 leading-relaxed pl-7">Absolutely. We have plumbers on standby 24/7 for emergencies like burst pipes, gas leaks, and severe blockages.</p>
</div>
<div className="group reveal delay-200">
<h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="solar:question-circle-linear"></iconify-icon> Are you licensed and insured?
                            </h4>
<p className="text-sm text-slate-500 leading-relaxed pl-7">Yes, all our plumbers are fully licensed in NSW and we carry comprehensive public liability insurance for your peace of mind.</p>
</div>
<div className="group reveal delay-300">
<h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="solar:question-circle-linear"></iconify-icon> What areas do you service?
                            </h4>
<p className="text-sm text-slate-500 leading-relaxed pl-7">We service the entire greater metro area. Please contact us with your suburb to confirm availability.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="py-24 bg-white border-t border-slate-200" id="contact-section">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden text-white">

<div className="p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="text-2xl font-semibold mb-4 tracking-tight">Request Service</h3>
<p className="text-slate-400 mb-10 text-sm leading-relaxed">Fast response for all your plumbing needs. We pride ourselves on quick turnaround times and quality service.</p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-white border border-white/10 backdrop-blur-sm">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Phone Number</h4>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="tel:0405405919">0405 405 919</a>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-white border border-white/10 backdrop-blur-sm">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Email Address</h4>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="mailto:info@unitedplumbing.com">service@united.com</a>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-white border border-white/10 backdrop-blur-sm">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg">Working Hours</h4>
<p className="text-slate-400 text-sm">Mon - Fri: 7:00 AM - 5:00 PM</p>
<p className="text-amber-400 text-sm font-medium mt-1">24/7 Emergency Service</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-12 bg-white relative">
<h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Quick Quote</h3>
<div className="hidden absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-12 animate-fade-in" id="quote-success">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Request Received</h3>
<p className="text-slate-500 text-sm mb-6">Our team will review your request and call you back within 2 hours.</p>
<button className="text-blue-600 font-medium text-sm hover:underline" onclick="resetForm('quote-form', 'quote-success')">Submit another request</button>
</div>
<form className="space-y-5" id="quote-form" onsubmit="handleFormSubmit(event, 'quote-form', 'quote-success')">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-800" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-800" placeholder="0400 000 000" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">Service Type</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-600">
<option>Select a service...</option>
<option>General Plumbing Repair</option>
<option>Blocked Drain / Leak</option>
<option>Hot Water System</option>
<option>Renovation Quote</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none flex">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold uppercase text-slate-400 tracking-widest">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-slate-800" placeholder="How can we help you today?" required="" rows="3"></textarea>
</div>
<button className="submit-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2" type="submit">
<span className="btn-text">Submit Request</span>
<iconify-icon className="loading-icon hidden animate-spin-custom" icon="solar:spinner-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-24 md:pb-8 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-blue-600 text-white p-1.5 rounded">
<iconify-icon icon="solar:drop-bold" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg text-slate-900">United Plumbing</span>
</div>
<p className="text-sm leading-relaxed mb-6 font-normal text-slate-500">
                        Your trusted local partner for all plumbing solutions. Quality workmanship and fair prices guaranteed.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">Site Map</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><button className="hover:text-blue-600 transition-colors text-left" onclick="navigateTo('home')">Home</button></li>
<li><button className="hover:text-blue-600 transition-colors text-left" onclick="navigateTo('services')">Services</button></li>
<li><button className="hover:text-blue-600 transition-colors text-left" onclick="navigateTo('about')">About Us</button></li>
<li><button className="hover:text-blue-600 transition-colors text-left" onclick="navigateTo('contact-page')">Contact</button></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Blocked Drains</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Hot Water Systems</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Leaking Taps</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Gas Fitting</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 uppercase text-[11px] tracking-widest">Contact</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Local Service Area<br/>NSW, Australia</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
<a className="hover:text-blue-600 transition-colors" href="tel:0405405919">0405 405 919</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-blue-600 transition-colors" href="mailto:service@united.com">service@united.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 United Plumbing Services. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
