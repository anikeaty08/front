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



        document.addEventListener('DOMContentLoaded', () => {
            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            const navLogo = document.getElementById('nav-logo');
            const navLinks = document.querySelectorAll('.nav-link');
            const navCta = document.querySelector('.nav-cta');
            
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    navbar.classList.remove('bg-transparent', 'border-transparent', 'py-4');
                    navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-[#1a1a1a]/5', 'py-3');
                    
                    navLogo.classList.remove('text-white');
                    navLogo.classList.add('text-[#1a1a1a]');
                    
                    navLinks.forEach(link => {
                        link.classList.remove('text-white/90');
                        link.classList.add('text-[#1a1a1a]/80');
                    });

                    if(navCta) {
                        navCta.classList.remove('bg-white/10', 'border-white/20', 'text-white', 'hover:bg-white/20');
                        navCta.classList.add('bg-[#1a1a1a]', 'text-white', 'hover:bg-[#2a2a2a]');
                    }
                } else {
                    navbar.classList.add('bg-transparent', 'border-transparent', 'py-4');
                    navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-[#1a1a1a]/5', 'py-3');
                    
                    navLogo.classList.add('text-white');
                    navLogo.classList.remove('text-[#1a1a1a]');
                    
                    navLinks.forEach(link => {
                        link.classList.add('text-white/90');
                        link.classList.remove('text-[#1a1a1a]/80');
                    });

                    if(navCta) {
                        navCta.classList.add('bg-white/10', 'border-white/20', 'text-white', 'hover:bg-white/20');
                        navCta.classList.remove('bg-[#1a1a1a]', 'text-white', 'hover:bg-[#2a2a2a]');
                    }
                }
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Init

            // FAQ Accordion
            document.querySelectorAll('.faq-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const icon = btn.querySelector('.faq-icon');
                    const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';

                    // Close all
                    document.querySelectorAll('.faq-content').forEach(c => {
                        c.style.maxHeight = '0px';
                        c.style.opacity = '0';
                    });
                    document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

                    // Open target if wasn't open
                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = '1';
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // Custom Dropdown Logic
            const dropdownBtn = document.getElementById('dropdown-btn');
            const dropdownMenu = document.getElementById('dropdown-menu');
            const dropdownSelected = document.getElementById('dropdown-selected');
            const dropdownInput = document.getElementById('dropdown-input');
            const dropdownOptions = dropdownMenu.querySelectorAll('li');
            let isDropdownOpen = false;

            const toggleDropdown = () => {
                isDropdownOpen = !isDropdownOpen;
                if (isDropdownOpen) {
                    dropdownMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2');
                    dropdownMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    dropdownBtn.classList.add('ring-1', 'ring-[#c5a880]', 'border-[#c5a880]');
                } else {
                    dropdownMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                    dropdownMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    dropdownBtn.classList.remove('ring-1', 'ring-[#c5a880]', 'border-[#c5a880]');
                }
            };

            dropdownBtn.addEventListener('click', toggleDropdown);

            dropdownOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const val = option.getAttribute('data-value');
                    dropdownSelected.textContent = option.textContent;
                    dropdownSelected.classList.remove('text-stone-400');
                    dropdownSelected.classList.add('text-[#1a1a1a]');
                    dropdownInput.value = val;
                    toggleDropdown();
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!document.getElementById('custom-dropdown').contains(e.target) && isDropdownOpen) {
                    toggleDropdown();
                }
            });

            // Form Submit Simulation
            const leadForm = document.getElementById('lead-form');
            const formSuccess = document.getElementById('form-success');
            
            leadForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = leadForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Processing...';
                btn.disabled = true;

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    leadForm.reset();
                    dropdownSelected.textContent = 'Select Interest';
                    dropdownSelected.classList.add('text-stone-400');
                    dropdownSelected.classList.remove('text-[#1a1a1a]');
                    dropdownInput.value = '';
                    
                    formSuccess.classList.remove('hidden');
                    setTimeout(() => formSuccess.classList.add('hidden'), 4000);
                }, 1500);
            });
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
      

<nav className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300 border-b border-transparent py-4 px-6 md:px-12" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="font-semibold text-lg tracking-tighter text-white transition-colors duration-300" href="#" id="nav-logo">
                DECOLUXE
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-[#c5a880] transition-colors nav-link" href="#properties">Properties</a>
<a className="text-sm font-medium text-white/90 hover:text-[#c5a880] transition-colors nav-link" href="#lifestyle">Lifestyle</a>
<a className="text-sm font-medium text-white/90 hover:text-[#c5a880] transition-colors nav-link" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium rounded-full hover:bg-white/20 transition-colors nav-cta" href="#contact">
                Inquire Now
            </a>
<button className="md:hidden text-white nav-link" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center w-full">
<div className="absolute inset-0 z-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a]/60 via-[#1a1a1a]/50 to-[#1a1a1a]/80"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase text-white/80 mb-6 backdrop-blur-sm">
                Costa del Sol
            </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                New build on the Costa del Sol to live better, invest wisely, and buy with confidence
            </h1>
<p className="text-lg md:text-xl font-normal text-stone-200 mb-10 tracking-tight max-w-2xl mx-auto">
                Discover luxury apartments, penthouses, and villas with personalized advice from Erika and her team.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#c5a880] text-[#1a1a1a] text-sm font-medium rounded-full hover:bg-[#b09570] transition-colors" href="#properties">
                    Request catalog and availability
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white border border-white/30 text-sm font-medium rounded-full hover:bg-white/10 transition-colors" href="#contact">
                    Speak with Erika now
                </a>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-sm text-stone-300 font-medium tracking-tight">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Erika · +34 621 195 803
            </div>
</div>
</section>

<section className="py-16 px-6 bg-white border-b border-[#1a1a1a]/5">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-transparent md:divide-[#1a1a1a]/5">
<div className="flex flex-col items-center text-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a1a1a] mb-2">€500M+</span>
<span className="text-xs font-medium uppercase tracking-widest text-[#78716c]">Sales Volume</span>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a1a1a] mb-2">50+</span>
<span className="text-xs font-medium uppercase tracking-widest text-[#78716c]">New Builds</span>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a1a1a] mb-2">100%</span>
<span className="text-xs font-medium uppercase tracking-widest text-[#78716c]">Client Discretion</span>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a1a1a] mb-2">15</span>
<span className="text-xs font-medium uppercase tracking-widest text-[#78716c]">Years Heritage</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#faf9f6]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1a]">Why buy new build property on the Costa del Sol</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="flex flex-col items-start p-8 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-6 text-[#c5a880]">
<iconify-icon className="text-2xl" icon="solar:sun-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] leading-snug">High quality of life all year round</h3>
</div>

<div className="flex flex-col items-start p-8 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-6 text-[#c5a880]">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] leading-snug">Locations with real demand</h3>
</div>

<div className="flex flex-col items-start p-8 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-6 text-[#c5a880]">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] leading-snug">Modern and sustainable design</h3>
</div>

<div className="flex flex-col items-start p-8 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-6 text-[#c5a880]">
<iconify-icon className="text-2xl" icon="solar:key-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] leading-snug">Ready to enjoy or monetize</h3>
</div>

<div className="flex flex-col items-start p-8 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-6 text-[#c5a880]">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] leading-snug">Great potential for appreciation</h3>
</div>

<div className="flex flex-col items-start p-8 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-6 text-[#c5a880]">
<iconify-icon className="text-2xl" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] leading-snug">International appeal</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#f5f5f4]" id="properties">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1a] mb-4">Featured Collections</h2>
<p className="text-sm text-[#78716c] font-light max-w-md">Discover unparalleled architecture and breathtaking sea views in our latest Costa del Sol offerings.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a1a] hover:text-[#c5a880] transition-colors group" href="#">
                    View All Properties
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-[#1a1a1a]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-[#1a1a1a]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Villa Sierra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium tracking-tight rounded-full text-[#1a1a1a]">New Build</span>
</div>
</div>
<div className="p-6">
<div className="text-xl font-medium tracking-tight text-[#c5a880] mb-2">€4,500,000</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] mb-1">Villa Sierra Blanca</h3>
<p className="text-xs text-[#78716c] mb-5 font-light">Golden Mile, Marbella</p>
<div className="flex items-center gap-4 border-t border-[#1a1a1a]/5 pt-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:bed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                5 Beds
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                6 Baths
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                850 m²
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-[#1a1a1a]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-[#1a1a1a]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Penthouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-[#1a1a1a]/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium tracking-tight rounded-full text-white">Exclusive</span>
</div>
</div>
<div className="p-6">
<div className="text-xl font-medium tracking-tight text-[#c5a880] mb-2">€2,950,000</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] mb-1">The Azure Penthouse</h3>
<p className="text-xs text-[#78716c] mb-5 font-light">Puerto Banús, Marbella</p>
<div className="flex items-center gap-4 border-t border-[#1a1a1a]/5 pt-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:bed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                3 Beds
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                3 Baths
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                320 m²
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-[#1a1a1a]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group cursor-pointer md:col-span-2 lg:col-span-1">
<div className="relative aspect-[4/3] md:aspect-auto lg:aspect-[4/3] h-full lg:h-auto overflow-hidden">
<div className="absolute inset-0 bg-[#1a1a1a]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Modern Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium tracking-tight rounded-full text-[#1a1a1a]">Off-Market</span>
</div>
</div>
<div className="p-6">
<div className="text-xl font-medium tracking-tight text-[#c5a880] mb-2">Price on Request</div>
<h3 className="text-lg font-medium tracking-tight text-[#1a1a1a] mb-1">Estate Los Flamingos</h3>
<p className="text-xs text-[#78716c] mb-5 font-light">Benahavís, Costa del Sol</p>
<div className="flex items-center gap-4 border-t border-[#1a1a1a]/5 pt-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:bed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                6 Beds
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                8 Baths
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-[#78716c]">
<iconify-icon className="text-base" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                1,200 m²
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="lifestyle">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">
<div className="absolute top-0 -left-4 w-full h-full bg-[#f5f5f4] rounded-3xl transform -rotate-3 z-0"></div>
<img alt="Marbella Lifestyle" className="relative z-10 w-full aspect-square object-cover rounded-3xl shadow-lg" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="w-full lg:w-1/2 flex flex-col items-start">
<span className="text-[#c5a880] text-xs font-medium tracking-widest uppercase mb-4">The Marbella Way of Life</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1a1a1a] mb-6 leading-tight">
                    Beyond Real Estate, <br/> We Curate Lifestyles.
                </h2>
<p className="text-sm text-[#78716c] font-light mb-8 leading-relaxed">
                    Embrace 320 days of sunshine, world-class golf courses, Michelin-starred gastronomy, and pristine Mediterranean shores. Owning a property on the Costa del Sol is more than an investment—it is an entry into one of Europe's most coveted and glamorous communities.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm font-medium text-[#1a1a1a]">
<div className="w-6 h-6 rounded-full bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                        Private Yacht &amp; Beach Club Access
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-[#1a1a1a]">
<div className="w-6 h-6 rounded-full bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                        Championship Golf Course Memberships
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-[#1a1a1a]">
<div className="w-6 h-6 rounded-full bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                        Bespoke Legal &amp; Financial Structuring
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0f172a] text-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tighter mb-16">Trusted by the Exceptional</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
<div className="flex gap-1 text-[#c5a880] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg tracking-tight text-stone-200 font-light italic mb-8 leading-relaxed">
                        "Decoluxe operated with an unmatched level of discretion and efficiency. They secured an off-market plot in La Zagaleta that perfectly matched our architectural vision. Pure excellence."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-700 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Alexander V.</div>
<div className="text-xs text-stone-400 font-light">Tech Entrepreneur</div>
</div>
</div>
</div>
<div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
<div className="flex gap-1 text-[#c5a880] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg tracking-tight text-stone-200 font-light italic mb-8 leading-relaxed">
                        "From the initial viewing to the turnkey handover, the process was immaculate. Their concierge team ensured our transition to Marbella was seamless and utterly luxurious."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-700 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Eleanor S.</div>
<div className="text-xs text-stone-400 font-light">Private Investor</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#faf9f6]">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center text-[#1a1a1a] mb-12">Client Inquiries</h2>
<div className="flex flex-col border-t border-[#1a1a1a]/10">
<div className="faq-item border-b border-[#1a1a1a]/10 group">
<button className="faq-btn w-full py-6 flex justify-between items-center text-left focus:outline-none">
<span className="text-base font-medium tracking-tight text-[#1a1a1a] group-hover:text-[#c5a880] transition-colors">Do you only handle new builds?</span>
<iconify-icon className="faq-icon text-xl text-[#78716c] transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300" style={{maxHeight: '0', opacity: '0'}}>
<p className="pb-6 text-sm text-[#78716c] font-light leading-relaxed">
                            While our primary expertise lies in avant-garde new developments and off-plan luxury projects, we also maintain a highly curated portfolio of fully renovated, premium resale estates in prime locations.
                        </p>
</div>
</div>
<div className="faq-item border-b border-[#1a1a1a]/10 group">
<button className="faq-btn w-full py-6 flex justify-between items-center text-left focus:outline-none">
<span className="text-base font-medium tracking-tight text-[#1a1a1a] group-hover:text-[#c5a880] transition-colors">Can purchases be made discreetly?</span>
<iconify-icon className="faq-icon text-xl text-[#78716c] transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300" style={{maxHeight: '0', opacity: '0'}}>
<p className="pb-6 text-sm text-[#78716c] font-light leading-relaxed">
                            Absolutely. We frequently work with high-profile individuals, family offices, and legal representatives to execute transactions with absolute anonymity using corporate structures and NDAs.
                        </p>
</div>
</div>
<div className="faq-item border-b border-[#1a1a1a]/10 group">
<button className="faq-btn w-full py-6 flex justify-between items-center text-left focus:outline-none">
<span className="text-base font-medium tracking-tight text-[#1a1a1a] group-hover:text-[#c5a880] transition-colors">Do you assist with Golden Visa applications?</span>
<iconify-icon className="faq-icon text-xl text-[#78716c] transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300" style={{maxHeight: '0', opacity: '0'}}>
<p className="pb-6 text-sm text-[#78716c] font-light leading-relaxed">
                            Yes, through our network of elite legal partners in Spain, we facilitate the entire Spanish Golden Visa process seamlessly as part of your property acquisition.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="contact">
<div className="max-w-4xl mx-auto bg-[#f5f5f4] rounded-3xl p-8 md:p-16 border border-[#1a1a1a]/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1a] mb-4">Begin Your Journey</h2>
<p className="text-sm text-[#78716c] font-light max-w-md mx-auto">Register your interest to receive private access to our off-market listings and bespoke property sourcing.</p>
</div>
<form className="relative z-10 max-w-lg mx-auto flex flex-col gap-5" id="lead-form">
<div className="grid grid-cols-2 gap-5">
<div>
<input className="w-full px-4 py-3.5 bg-white border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#c5a880] focus:border-[#c5a880] transition-all placeholder:text-stone-400 font-light" placeholder="First Name" required="" type="text"/>
</div>
<div>
<input className="w-full px-4 py-3.5 bg-white border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#c5a880] focus:border-[#c5a880] transition-all placeholder:text-stone-400 font-light" placeholder="Last Name" required="" type="text"/>
</div>
</div>
<div>
<input className="w-full px-4 py-3.5 bg-white border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#c5a880] focus:border-[#c5a880] transition-all placeholder:text-stone-400 font-light" placeholder="Email Address" required="" type="email"/>
</div>

<div className="relative w-full text-left" id="custom-dropdown">
<button className="w-full flex justify-between items-center px-4 py-3.5 bg-white border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#c5a880] focus:border-[#c5a880] transition-all text-stone-400 font-light" id="dropdown-btn" type="button">
<span id="dropdown-selected">Select Interest</span>
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute z-20 mt-2 w-full bg-white border border-[#1a1a1a]/10 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 pointer-events-none transition-all duration-200 transform -translate-y-2 overflow-hidden" id="dropdown-menu">
<ul className="py-1 text-sm text-[#1a1a1a] font-light">
<li className="px-4 py-2.5 hover:bg-[#faf9f6] cursor-pointer transition-colors" data-value="Villa">Luxury Villa</li>
<li className="px-4 py-2.5 hover:bg-[#faf9f6] cursor-pointer transition-colors" data-value="Penthouse">Penthouse</li>
<li className="px-4 py-2.5 hover:bg-[#faf9f6] cursor-pointer transition-colors" data-value="Investment">Investment Project</li>
<li className="px-4 py-2.5 hover:bg-[#faf9f6] cursor-pointer transition-colors" data-value="Land">Plot / Land</li>
</ul>
</div>
<input id="dropdown-input" name="interest" required="" type="hidden"/>
</div>
<div className="flex items-center gap-3 mt-2">
<label className="relative flex items-center cursor-pointer">
<input className="peer appearance-none w-4 h-4 rounded-[3px] border border-[#1a1a1a]/20 checked:bg-[#c5a880] checked:border-[#c5a880] transition-colors cursor-pointer" required="" type="checkbox" />
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity text-[10px] pointer-events-none" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</input></label>
<span className="text-xs text-[#78716c] font-light">I agree to the strict privacy policy &amp; exclusive communication.</span>
</div>
<button className="w-full mt-4 py-3.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-xl hover:bg-[#2a2a2a] transition-all transform active:scale-[0.99] shadow-sm flex justify-center items-center gap-2" type="submit">
                    Request Consultation
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden text-xs text-center text-emerald-600 mt-2 font-medium" id="form-success">Your request has been received securely.</div>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-[#1a1a1a]/5 bg-[#faf9f6] text-center">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<span className="font-semibold text-xl tracking-tighter text-[#1a1a1a] mb-6">DECOLUXE</span>
<div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-[#78716c] font-light">
<a className="hover:text-[#c5a880] transition-colors" href="#">Properties</a>
<a className="hover:text-[#c5a880] transition-colors" href="#">Concierge</a>
<a className="hover:text-[#c5a880] transition-colors" href="#">Journal</a>
<a className="hover:text-[#c5a880] transition-colors" href="#">Privacy</a>
</div>
<p className="text-xs text-stone-400 font-light">
                © 2024 Decoluxe Marbella. Excellence in real estate.
            </p>
</div>
</footer>



    </>
  );
}
