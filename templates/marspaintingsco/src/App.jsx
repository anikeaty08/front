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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Animations using Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-white/95', 'bg-white/80');
            }
        });

        // Interactive Before/After Slider Logic
        const sliderContainer = document.getElementById('before-after-slider');
        if (sliderContainer) {
            let isDragging = false;

            const updateSlider = (x) => {
                const rect = sliderContainer.getBoundingClientRect();
                let position = ((x - rect.left) / rect.width) * 100;
                // Constrain to 0-100%
                position = Math.max(0, Math.min(100, position));
                sliderContainer.style.setProperty('--position', `${position}%`);
            };

            // Mouse events
            sliderContainer.addEventListener('mousedown', () => isDragging = true);
            window.addEventListener('mouseup', () => isDragging = false);
            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                updateSlider(e.clientX);
            });

            // Touch events for mobile
            sliderContainer.addEventListener('touchstart', () => isDragging = true);
            window.addEventListener('touchend', () => isDragging = false);
            window.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                updateSlider(e.touches[0].clientX);
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight uppercase leading-none text-black">MARS</span>
<span className="text-xs font-semibold tracking-tight text-red-600 uppercase bg-red-50 inline-block px-1 mt-0.5 rounded-sm">Painting Contractors</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors" href="#services">Services</a>
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors" href="#work">Our Work</a>
<a className="text-slate-600 hover:text-slate-900 font-medium transition-colors" href="#process">Process</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900 transition-colors" href="tel:479-555-0100">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
                    479-555-0100
                </a>
<a className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm shadow-red-600/20 active:scale-95" href="#estimate">
                    Get Free Estimate
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-red-600/5 blur-3xl"></div>
<div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-slate-300 text-sm font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Booking fast for Summer 2024
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                        Transform Your Home With <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Master Finishes</span>
</h1>
<p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        Flawless execution, spotless cleanup, and guaranteed results for homeowners who demand nothing but the absolute best.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 group" href="#estimate">
                            Get Your Free Estimate
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center backdrop-blur-sm border border-white/10" href="#work">
                            View Transformations
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-slate-400 text-base">
<div className="flex -space-x-2">
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-semibold text-white">+500</div>
</div>
<p>Trusted by local homeowners</p>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl reveal border border-white/10 bg-slate-800" style={{transitionDelay: '200ms'}}>
<img alt="Freshly painted modern home exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<div>
<p className="text-white font-semibold tracking-tight">Recent Project</p>
<p className="text-slate-300 text-base">Exterior Restoration</p>
</div>
<div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 text-white">
<i className="w-4 h-4 fill-current text-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-sm font-semibold">5.0</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-slate-200 py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2">
<i className="w-8 h-8 text-slate-800" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="font-semibold tracking-tight text-xl text-slate-800">Fully Licensed &amp; Insured</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden md:block"></div>
<div className="flex items-center gap-2">
<i className="w-8 h-8 text-slate-800" data-lucide="award" strokeWidth="1.5"></i>
<span className="font-semibold tracking-tight text-xl text-slate-800">Top Rated Local Painters</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden md:block"></div>
<div className="flex items-center gap-2">
<div className="flex text-amber-500">
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="font-semibold tracking-tight text-xl text-slate-800">150+ 5-Star Reviews</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Expertise in Every Stroke</h2>
<p className="text-slate-600">We don't just paint walls; we protect and elevate your property value with premium materials and meticulous preparation.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 reveal">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
<i className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Interior Painting</h3>
<p className="text-slate-600 mb-6">Crisp lines, smooth finishes, and zero mess. We treat your home with the utmost respect, protecting your furniture and floors.</p>
<ul className="space-y-3 text-slate-700 text-base mb-8">
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Walls, Ceilings &amp; Trim</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Cabinet Refinishing</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Drywall Repair</li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
<i className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Exterior Painting</h3>
<p className="text-slate-600 mb-6">Boost curb appeal and protect your home from the elements with weather-resistant, long-lasting exterior coatings.</p>
<ul className="space-y-3 text-slate-700 text-base mb-8">
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Siding, Brick &amp; Stucco</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Deck &amp; Fence Staining</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Power Washing Prep</li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
<i className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Commercial Services</h3>
<p className="text-slate-600 mb-6">Professional, efficient painting solutions for businesses, ensuring minimal disruption to your daily operations.</p>
<ul className="space-y-3 text-slate-700 text-base mb-8">
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Retail &amp; Office Spaces</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> HOAs &amp; Multi-Family</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i> Flexible Scheduling</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">See the Transformation</h2>
<p className="text-slate-600">A fresh coat of premium paint does more than change a color; it completely revitalizes your space. Drag the slider to compare.</p>
</div>
<div className="mt-6 md:mt-0 flex items-center gap-2 text-slate-500 text-base font-medium">
<i className="w-5 h-5" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
                    Interact to compare
                </div>
</div>

<div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none reveal bg-slate-200" id="before-after-slider">

<img alt="Beautiful newly painted home exterior" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute inset-0 w-full h-full pointer-events-none image-before">

<img alt="Old home exterior" className="absolute inset-0 w-full h-full object-cover grayscale sepia-[.3] brightness-75 pointer-events-none" draggable="false" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>

<div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-tight pointer-events-none">Before</div>
<div className="absolute top-6 right-6 bg-red-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-tight pointer-events-none">After</div>

<div className="absolute top-0 bottom-0 w-1 bg-white slider-line pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"></div>

<div className="absolute top-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center slider-button shadow-xl pointer-events-none z-20 text-slate-900 border border-slate-200">
<i className="w-6 h-6" data-lucide="chevrons-left-right" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-center text-slate-500 text-base mt-6 reveal">Recent Exterior Project in Northwest Arkansas</p>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Why Homeowners Trust Mars</h2>
<p className="text-slate-300 mb-10 text-xl leading-relaxed">
                        We strip away the frustration of hiring contractors. No ghosting, no messy yards, no surprise fees. Just professional painters delivering stunning results.
                    </p>
<div className="grid sm:grid-cols-2 gap-8">
<div>
<div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4 text-red-500">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Fast Turnaround</h4>
<p className="text-slate-400 text-base">We stick to our schedule. Your project starts on time and finishes on time.</p>
</div>
<div>
<div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4 text-red-500">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Spotless Cleanup</h4>
<p className="text-slate-400 text-base">We leave your home cleaner than we found it. Daily site cleanup guaranteed.</p>
</div>
<div>
<div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4 text-red-500">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-2">In-House Masters</h4>
<p className="text-slate-400 text-base">No cheap subcontractors. Our team consists of vetted, trained professionals.</p>
</div>
<div>
<div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4 text-red-500">
<i className="w-6 h-6" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Ironclad Guarantee</h4>
<p className="text-slate-400 text-base">We stand behind our work with a comprehensive multi-year warranty on all projects.</p>
</div>
</div>
</div>
<div className="relative reveal hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-3xl transform translate-x-6 translate-y-6"></div>
<img alt="Professional painter working" className="relative rounded-3xl object-cover aspect-[4/5] w-full border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Simple, Stress-Free Process</h2>
<p className="text-slate-600">From the first call to the final walkthrough, we make upgrading your home an effortless experience.</p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100"></div>
<div className="grid md:grid-cols-4 gap-10 relative">

<div className="relative text-center reveal">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-slate-200/50 mb-6 relative z-10 text-slate-800">
<i className="w-8 h-8" data-lucide="calculator" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold text-base border-4 border-white">1</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Get a Quote</h3>
<p className="text-slate-600 text-base">Contact us for a free, transparent, no-obligation estimate tailored to your project.</p>
</div>

<div className="relative text-center reveal" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-slate-200/50 mb-6 relative z-10 text-slate-800">
<i className="w-8 h-8" data-lucide="calendar-check" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-base border-4 border-white">2</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Schedule</h3>
<p className="text-slate-600 text-base">Choose a date that works for you. We assist with color consultation if needed.</p>
</div>

<div className="relative text-center reveal" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-slate-200/50 mb-6 relative z-10 text-slate-800">
<i className="w-8 h-8" data-lucide="paint-roller" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-base border-4 border-white">3</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">We Paint</h3>
<p className="text-slate-600 text-base">Our professional crew preps, protects, and paints your space to perfection.</p>
</div>

<div className="relative text-center reveal" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-slate-200/50 mb-6 relative z-10 text-slate-800">
<i className="w-8 h-8" data-lucide="party-popper" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-base border-4 border-white">4</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Enjoy Results</h3>
<p className="text-slate-600 text-base">Final walkthrough ensures 100% satisfaction before we leave your home spotless.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="estimate">
<div className="absolute inset-0 bg-red-600 clip-path-slant hidden lg:block" style={{clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Ready to Transform Your Space?</h2>
<p className="text-slate-600 mb-8 text-xl">
                        Stop delaying your home upgrade. Fill out the form below or call us directly. We respond to all inquiries within 24 hours.
                    </p>
<div className="flex items-center gap-4 mb-10 p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
<i className="w-6 h-6 text-amber-600 shrink-0" data-lucide="flame" strokeWidth="1.5"></i>
<p className="font-medium text-base"><strong>Limited Availability:</strong> Only 3 spots left for exterior painting this month.</p>
</div>
<div className="space-y-6 hidden lg:block">
<div className="flex items-center gap-4 text-slate-700">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center"><i className="w-5 h-5 text-slate-900" data-lucide="phone" strokeWidth="1.5"></i></div>
<div>
<p className="text-sm text-slate-500 font-medium">Call Us Directly</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">479-555-0100</p>
</div>
</div>
<div className="flex items-center gap-4 text-slate-700">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center"><i className="w-5 h-5 text-slate-900" data-lucide="map-pin" strokeWidth="1.5"></i></div>
<div>
<p className="text-sm text-slate-500 font-medium">Service Area</p>
<p className="text-lg font-medium text-slate-900">Northwest Arkansas &amp; Surrounding</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 reveal lg:ml-auto w-full max-w-md relative z-20">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Get Your Free Estimate</h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all outline-none text-base" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all outline-none text-base" placeholder="(479) 555-0000" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Project Type</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all outline-none appearance-none text-base">
<option>Exterior Painting</option>
<option>Interior Painting</option>
<option>Commercial Painting</option>
<option>Cabinet Refinishing</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/20 active:scale-[0.98] mt-2">
                            Request Estimate Now
                        </button>
<p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1">
<i className="w-3 h-3" data-lucide="lock" strokeWidth="1.5"></i> Your information is secure
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex flex-col mb-6">
<span className="text-3xl font-semibold tracking-tight uppercase leading-none text-white">MARS</span>
<span className="text-xs font-semibold tracking-tight text-red-500 uppercase mt-1">Painting Contractors, Inc.</span>
</div>
<p className="text-base mb-6">Premium painting services delivering flawless finishes and guaranteed results for discerning homeowners.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors border border-slate-800" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors border border-slate-800" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold tracking-tight mb-4 text-lg">Services</h4>
<ul className="space-y-3 text-base">
<li><a className="hover:text-white transition-colors" href="#">Exterior Painting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Interior Painting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Commercial Painting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cabinet Refinishing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold tracking-tight mb-4 text-lg">Company</h4>
<ul className="space-y-3 text-base">
<li><a className="hover:text-white transition-colors" href="#work">Our Work</a></li>
<li><a className="hover:text-white transition-colors" href="#process">Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Reviews</a></li>
<li><a className="hover:text-white transition-colors" href="#estimate">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold tracking-tight mb-4 text-lg">Contact Us</h4>
<ul className="space-y-4 text-base">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="phone" strokeWidth="1.5"></i>
<a className="hover:text-white transition-colors" href="tel:479-555-0100">479-555-0100</a>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="mail" strokeWidth="1.5"></i>
<a className="hover:text-white transition-colors" href="mailto:info@marspainting.com">info@marspainting.com</a>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Serving Northwest Arkansas</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
<p>© 2024 Mars Painting Contractors, Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
