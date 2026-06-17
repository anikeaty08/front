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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize App
        document.addEventListener("DOMContentLoaded", () => {
            requestAnimationFrame(() => document.body.classList.add('loaded'));
            
            // Set initial active page based on hash or default to home
            const hash = window.location.hash.replace('#', '') || 'home';
            navigateTo(hash);
        });

        // Mobile Menu Toggle Logic
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('menu-open');
        });

        let isAnimating = false;

        // Navigation Handler
        function navigateTo(targetId) {
            if (isAnimating) return;
            
            const targetView = document.getElementById('view-' + targetId);
            const currentView = document.querySelector('.page-view:not(.hidden-view)');
            
            if (!targetView || targetView === currentView) return;

            isAnimating = true;

            // Close mobile menu if open
            mobileMenu.classList.remove('menu-open');

            // Update Navigation active states immediately
            document.querySelectorAll('.nav-link').forEach(link => {
                // Ignore empty or external links
                if(!link.getAttribute('data-target')) return;
                
                if(link.getAttribute('data-target') === targetId) {
                    if (link.classList.contains('border-transparent')) {
                        link.classList.add('text-blue-500', 'border-blue-500');
                        link.classList.remove('text-white', 'border-transparent');
                    }
                } else {
                    if (link.classList.contains('border-blue-500')) {
                        link.classList.remove('text-blue-500', 'border-blue-500');
                        link.classList.add('text-white', 'border-transparent');
                    }
                }
            });

            const proceedToNewView = () => {
                // Hide all views
                document.querySelectorAll('.page-view').forEach(view => {
                    view.classList.add('hidden-view');
                });

                // Prepare and show target view
                targetView.classList.remove('hidden-view');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.hash = targetId;
                
                // Re-trigger enter animations
                targetView.querySelectorAll('.anim-element').forEach(el => {
                    el.classList.remove('page-exit');
                    void el.offsetWidth; // trigger reflow
                    el.classList.add('page-enter');
                });

                // Unlock navigation after enter animations finish
                setTimeout(() => { isAnimating = false; }, 800);
            };

            if (currentView) {
                // Trigger exit animations on current view
                const currentElements = currentView.querySelectorAll('.anim-element');
                currentElements.forEach(el => {
                    el.classList.remove('page-enter');
                    void el.offsetWidth; // trigger reflow
                    el.classList.add('page-exit');
                });
                
                // Wait for exit animations to finish before swapping
                setTimeout(proceedToNewView, 400); 
            } else {
                proceedToNewView();
            }
        }

        // Attach click listeners to all internal nav links and brand
        document.querySelectorAll('a[data-target]').forEach(link => {
            link.addEventListener('click', e => {
                const target = e.currentTarget.getAttribute('data-target');
                if (target) {
                    e.preventDefault();
                    navigateTo(target);
                }
            });
        });

        // Universal Modal Control
        const modal = document.getElementById('custom-modal');
        const modalBox = document.getElementById('modal-content-box');
        
        function showModal(title, message, isSuccess = false) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-message').innerText = message;
            
            // Swap Icon based on type
            const iconSvg = document.getElementById('modal-icon');
            if(isSuccess) {
                iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
            } else {
                iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>';
            }

            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.classList.add('opacity-100', 'pointer-events-auto');
            modalBox.classList.remove('scale-95');
            modalBox.classList.add('scale-100');
        }

        function closeModal() {
            modal.classList.remove('opacity-100', 'pointer-events-auto');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modalBox.classList.remove('scale-100');
            modalBox.classList.add('scale-95');
        }

        // Form Submission Handler
        const form = document.getElementById('dispatch-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            showModal('Transmission Sent', 'Blackhawk Dispatch has received your coordinates and will contact you shortly.', true);
            form.reset(); 
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
      

<nav className="w-full fixed top-0 z-50 glass-panel border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="nav-brand flex items-center gap-4 hover:opacity-80 transition-opacity z-20" data-target="home" href="#home">
<div className="h-14 w-14 md:h-20 md:w-20 rounded-full overflow-hidden border-2 border-blue-600/30 bg-black transition-all">
<img alt="Blackhawk Express Logo" className="h-full w-full object-cover" src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/644525265_122093779875213162_1304313115702937628_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=1d70fc&amp;_nc_ohc=xY9WHwHYyUwQ7kNvwE0oarH&amp;_nc_oc=AdmrLRZtYZIiJI2ThZe52Hd8CuTYeHGeSlzO0E17VMd96Zv95Ttg9pQr5w5-_xD_6LY&amp;_nc_zt=23&amp;_nc_ht=scontent-syd2-1.xx&amp;_nc_gid=N1hc8ZhSpnlWNRiiKUNLcw&amp;_nc_ss=8&amp;oh=00_Afu2NkBZ39jkQggNxsY-MlS6FHXddk3SWrwq32CIHRwjrQ&amp;oe=69A8C489"/>
</div>
<span className="font-montserrat font-black text-xl md:text-2xl tracking-widest">BLACKHAWK<span className="text-blue-500">EXPRESS</span></span>
</a>

<div className="hidden lg:flex gap-8 items-center">
<a className="nav-link text-blue-500 border-b-2 border-blue-500 uppercase tracking-[0.2em] text-xs font-bold transition-all py-2 hover:text-blue-400" data-target="home" href="#home">Home</a>
<a className="nav-link text-white hover:text-blue-400 border-b-2 border-transparent uppercase tracking-[0.2em] text-xs font-bold transition-all py-2" data-target="about" href="#about">About</a>
<a className="nav-link text-white hover:text-blue-400 border-b-2 border-transparent uppercase tracking-[0.2em] text-xs font-bold transition-all py-2" data-target="services" href="#services">Services</a>
<a className="nav-link text-white hover:text-blue-400 border-b-2 border-transparent uppercase tracking-[0.2em] text-xs font-bold transition-all py-2" data-target="quote" href="#quote">Quote</a>
<a className="nav-link text-white hover:text-blue-400 border-b-2 border-transparent uppercase tracking-[0.2em] text-xs font-bold transition-all py-2" data-target="blog" href="#blog">News</a>
<a className="nav-link text-white hover:text-blue-400 border-b-2 border-transparent uppercase tracking-[0.2em] text-xs font-bold transition-all py-2" data-target="contact" href="#contact">Contact</a>
</div>

<button className="lg:hidden text-white hover:text-blue-500 focus:outline-none transition-colors z-20" id="mobile-toggle">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="absolute top-full left-0 w-full glass-panel border-b border-white/5 flex flex-col items-center py-6 gap-6 opacity-0 pointer-events-none -translate-y-4 shadow-2xl z-10 lg:hidden" id="mobile-menu">
<a className="nav-link text-blue-500 uppercase tracking-[0.2em] text-sm font-bold transition-all w-full text-center hover:text-blue-400" data-target="home" href="#home">Home</a>
<a className="nav-link text-white hover:text-blue-400 uppercase tracking-[0.2em] text-sm font-bold transition-all w-full text-center" data-target="about" href="#about">About</a>
<a className="nav-link text-white hover:text-blue-400 uppercase tracking-[0.2em] text-sm font-bold transition-all w-full text-center" data-target="services" href="#services">Services</a>
<a className="nav-link text-white hover:text-blue-400 uppercase tracking-[0.2em] text-sm font-bold transition-all w-full text-center" data-target="quote" href="#quote">Quote</a>
<a className="nav-link text-white hover:text-blue-400 uppercase tracking-[0.2em] text-sm font-bold transition-all w-full text-center" data-target="blog" href="#blog">News</a>
<a className="nav-link text-white hover:text-blue-400 uppercase tracking-[0.2em] text-sm font-bold transition-all w-full text-center" data-target="contact" href="#contact">Contact</a>
</div>
</nav>

<main className="flex-grow pt-32 md:pt-40 pb-20 flex flex-col px-6 max-w-7xl mx-auto w-full justify-center relative">

<div className="page-view" id="view-home">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left">
<div className="anim-element page-enter inline-block px-4 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                        South East QLD &amp; Northern Rivers Logistics
                    </div>
<h1 className="anim-element page-enter text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                        Precision <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">In Motion.</span>
</h1>
<p className="anim-element page-enter delay-100 text-gray-400 text-base md:text-xl font-light max-w-lg mx-auto lg:mx-0 mb-10">
                        Fast, secure, and professional courier, warehouse &amp; freight services built for the modern supply chain.
                    </p>
<div className="anim-element page-enter delay-200 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
<a className="nav-link px-8 py-4 bg-blue-600 text-white font-black uppercase text-sm tracking-[0.2em] hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 rounded-sm shadow-[0_0_30px_rgba(37,99,235,0.4)] text-center" data-target="quote" href="#quote">
                            Get a Quote
                        </a>
<a className="nav-link px-8 py-4 glass-panel text-white font-black uppercase text-sm tracking-[0.2em] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-sm text-center" data-target="services" href="#services">
                            Our Services
                        </a>
</div>
</div>

<div className="anim-element page-enter delay-300 relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] group bg-gray-900 mt-8 lg:mt-0">
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10 pointer-events-none"></div>
<img alt="Blackhawk Express Fleet" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 z-0" src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 md:left-8 z-20 text-left">
<p className="text-white font-bold uppercase tracking-widest text-sm drop-shadow-md mb-1">Heavy Freight Fleet</p>
<p className="text-blue-400 text-xs tracking-wider uppercase font-black m-0">Active Deployment</p>
</div>
</div>
</div>
</div>

<div className="page-view hidden-view max-w-6xl mx-auto w-full" id="view-about">
<h1 className="anim-element text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 border-l-4 border-blue-600 pl-4 md:pl-6 text-center md:text-left">Built For <span className="text-blue-500">Speed.</span></h1>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
<div className="anim-element delay-100 glass-panel p-6 md:p-10 rounded-lg flex flex-col justify-center">
<h2 className="text-2xl font-bold mb-6 tracking-wide uppercase text-center md:text-left">Our Mission</h2>
<p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
                        Based on the Gold Coast, Queensland, <strong className="text-white">Blackhawk Express</strong> is designed from the ground up to help the logistics sector operate at peak efficiency. We bridge the gap between heavy freight and rapid last-mile delivery, ensuring your supply chain never breaks.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-auto text-center sm:text-left">
<div>
<h3 className="text-blue-500 font-black tracking-widest text-sm mb-2">01. FAST</h3>
<p className="text-xs text-gray-400">Rapid-response timelines tailored to your supply chain urgency across the East Coast.</p>
</div>
<div>
<h3 className="text-blue-500 font-black tracking-widest text-sm mb-2">02. SECURE</h3>
<p className="text-xs text-gray-400">Uncompromising safety protocols for heavy cargo, pallets, and fragile parcels.</p>
</div>
<div>
<h3 className="text-blue-500 font-black tracking-widest text-sm mb-2">03. FLEX</h3>
<p className="text-xs text-gray-400">Dynamic logistics models spanning Brisbane, the Gold Coast, and the Northern Rivers.</p>
</div>
</div>
</div>
<div className="anim-element delay-200 relative rounded-lg overflow-hidden border border-white/10 min-h-[300px] md:min-h-[400px] shadow-[0_0_30px_rgba(37,99,235,0.1)] group">
<img alt="Blackhawk Express Warehouse Operations" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
</div>
</div>
</div>

<div className="page-view hidden-view w-full" id="view-services">
<div className="anim-element text-center mb-12">
<h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Core <span className="text-blue-500">Capabilities.</span></h1>
<p className="text-gray-400">End-to-end freight management &amp; specialised logistics operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
<div className="anim-element delay-100 glass-panel rounded-lg hover-scale overflow-hidden flex flex-col group cursor-pointer" onclick="document.querySelector('[data-target=\'quote\']').click()">
<div className="h-48 relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Container Unloading" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex-grow">
<div className="h-12 w-12 bg-blue-600/20 flex items-center justify-center rounded mb-6 text-blue-500 font-black transition-colors group-hover:bg-blue-600 group-hover:text-white">01</div>
<h3 className="text-xl font-bold mb-3 tracking-wide uppercase">Container Unloading</h3>
<p className="text-gray-400 text-sm leading-relaxed">Heavy-duty capability to process incoming shipping containers swiftly. Our trained ground crews ensure precision handling of raw cargo right at the depot.</p>
</div>
</div>
<div className="anim-element delay-100 glass-panel rounded-lg hover-scale overflow-hidden flex flex-col group cursor-pointer" onclick="document.querySelector('[data-target=\'quote\']').click()">
<div className="h-48 relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Pallet Packing &amp; Uncrating" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex-grow">
<div className="h-12 w-12 bg-blue-600/20 flex items-center justify-center rounded mb-6 text-blue-500 font-black transition-colors group-hover:bg-blue-600 group-hover:text-white">02</div>
<h3 className="text-xl font-bold mb-3 tracking-wide uppercase">Pallet Packing &amp; Uncrating</h3>
<p className="text-gray-400 text-sm leading-relaxed">Comprehensive preparation of your freight. We build solid, secure pallets for outbound transport and meticulously uncrate fragile incoming goods.</p>
</div>
</div>
<div className="anim-element delay-200 glass-panel rounded-lg hover-scale overflow-hidden flex flex-col group cursor-pointer" onclick="document.querySelector('[data-target=\'quote\']').click()">
<div className="h-48 relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Emergency Courier" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex-grow">
<div className="h-12 w-12 bg-blue-600/20 flex items-center justify-center rounded mb-6 text-blue-500 font-black transition-colors group-hover:bg-blue-600 group-hover:text-white">03</div>
<h3 className="text-xl font-bold mb-3 tracking-wide uppercase">Emergency Courier</h3>
<p className="text-gray-400 text-sm leading-relaxed">Time-critical deliveries across Brisbane, Gold Coast, Sunshine Coast, and Northern Rivers. When it absolutely has to be there today, we mobilise immediately.</p>
</div>
</div>
<div className="anim-element delay-300 glass-panel rounded-lg hover-scale overflow-hidden flex flex-col group cursor-pointer" onclick="document.querySelector('[data-target=\'quote\']').click()">
<div className="h-48 relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Warehousing &amp; Logistics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex-grow">
<div className="h-12 w-12 bg-blue-600/20 flex items-center justify-center rounded mb-6 text-blue-500 font-black transition-colors group-hover:bg-blue-600 group-hover:text-white">04</div>
<h3 className="text-xl font-bold mb-3 tracking-wide uppercase">Warehousing &amp; Logistics</h3>
<p className="text-gray-400 text-sm leading-relaxed">Secure, scalable storage solutions paired with intelligent dispatch. We act as your localised fulfilment hub to streamline your entire operational workflow.</p>
</div>
</div>
</div>
</div>

<div className="page-view hidden-view max-w-3xl mx-auto w-full" id="view-quote">
<div className="anim-element text-center mb-10">
<h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Request <span className="text-blue-500">Dispatch.</span></h1>
<p className="text-gray-400">Initiate a secure freight or logistics request. Our team will respond with a tailored quote.</p>
</div>
<div className="anim-element delay-100 glass-panel p-6 md:p-10 rounded-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
<form className="space-y-6 relative z-10" id="dispatch-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Company / Name</label>
<input className="w-full bg-black/60 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Acme Corp" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Email Address</label>
<input className="w-full bg-black/60 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="dispatch@acme.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Service Required</label>
<select className="w-full bg-black/60 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
<option>Container Unloading</option>
<option>Pallet Packing / Uncrating</option>
<option>Emergency Courier</option>
<option>Warehousing &amp; Logistics</option>
</select>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Urgency Level</label>
<select className="w-full bg-black/60 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
<option>Standard Freight</option>
<option>Urgent / ASAP</option>
<option>Scheduled Contract</option>
</select>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Logistics Brief (Dimensions, Weight, Destinations)</label>
<textarea className="w-full bg-black/60 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Provide details regarding your freight requirements..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-sm tracking-[0.2em] py-5 rounded transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] mt-2" type="submit">
                        Transmit Request
                    </button>
</form>
</div>
</div>

<div className="page-view hidden-view max-w-5xl mx-auto w-full" id="view-blog">
<div className="anim-element flex flex-col md:flex-row justify-between items-center md:items-end mb-12 border-b border-white/10 pb-6 text-center md:text-left">
<div>
<h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Company <span className="text-blue-500">Intel.</span></h1>
<p className="text-gray-400">Latest updates, operational news, and logistics insights.</p>
</div>
<div className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mt-4 md:mt-0 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full">
                    Status: Operational
                </div>
</div>
<div className="space-y-8">
<article className="anim-element delay-100 glass-panel p-6 rounded-lg hover-scale flex flex-col md:flex-row gap-6 md:gap-8 items-center cursor-pointer group" onclick="showModal('Access Restricted', 'The full transmission log for this update is currently restricted to active clients. Please contact dispatch.')">
<div className="w-full md:w-1/3 h-48 md:h-full min-h-[200px] rounded overflow-hidden relative border border-white/5">
<img alt="Brisbane Logistics Platform" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-2/3 py-2 pr-0 md:pr-4">
<div className="flex items-center gap-4 mb-3 justify-center md:justify-start">
<p className="text-blue-500 font-black tracking-widest text-xs">UPDATE</p>
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
<p className="text-gray-500 text-xs tracking-widest uppercase">Feb 28, 2026</p>
</div>
<h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide text-center md:text-left group-hover:text-blue-400 transition-colors">Introducing Blackhawk Express Logistics Platform</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-6 text-center md:text-left">
                            We're excited to officially launch Blackhawk Express — your reliable partner for fast, secure, and professional courier, warehouse &amp; logistics services across Brisbane, Gold Coast, and Northern Rivers. Whether it's urgent deliveries, parcels, or heavy freight, our fleet has you covered.
                        </p>
<span className="text-blue-400 text-xs uppercase tracking-widest font-bold transition-colors border-b border-blue-400/30 pb-1 flex justify-center md:justify-start group-hover:border-blue-400">Read Full Transmission →</span>
</div>
</article>
<article className="anim-element delay-200 glass-panel p-6 rounded-lg hover-scale flex flex-col md:flex-row gap-6 md:gap-8 items-center cursor-pointer group" onclick="showModal('Access Restricted', 'The route optimization analysis is currently under review by headquarters. Please check back soon.')">
<div className="w-full md:w-1/3 h-48 md:h-full min-h-[200px] rounded overflow-hidden relative border border-white/5">
<img alt="Highway Traffic" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513069151745-0e3661be4fb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-2/3 py-2 pr-0 md:pr-4">
<div className="flex items-center gap-4 mb-3 justify-center md:justify-start">
<p className="text-blue-500 font-black tracking-widest text-xs">INSIGHT</p>
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
<p className="text-gray-500 text-xs tracking-widest uppercase">Feb 15, 2026</p>
</div>
<h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide text-center md:text-left group-hover:text-blue-400 transition-colors">Navigating the M1 Upgrades: Optimising Freight Routes</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-6 text-center md:text-left">
                            With the ongoing Pacific Motorway (M1) upgrades between Yatala and Tugun, route optimisation has never been more critical. Our dispatch team utilises real-time tracking to navigate construction zones, ensuring your pallets and containers avoid congestion and arrive on schedule.
                        </p>
<span className="text-blue-400 text-xs uppercase tracking-widest font-bold transition-colors border-b border-blue-400/30 pb-1 flex justify-center md:justify-start group-hover:border-blue-400">Read Full Transmission →</span>
</div>
</article>
</div>
</div>

<div className="page-view hidden-view max-w-4xl mx-auto w-full" id="view-contact">
<div className="anim-element text-center mb-12">
<h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Command <span className="text-blue-500">Centre.</span></h1>
<p className="text-gray-400">Direct lines to our Gold Coast dispatch and operations team.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="anim-element delay-100 glass-panel p-8 rounded-lg flex flex-col justify-center border-t-2 border-blue-600 hover-scale">
<div className="mb-8">
<div className="h-10 w-10 bg-blue-600/20 text-blue-500 flex items-center justify-center rounded mb-4">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Dispatch Email</p>
<a className="text-lg md:text-xl font-bold text-white hover:text-blue-400 transition-colors break-all" href="mailto:blackhawklogistics@outlook.com.au">blackhawklogistics<br/>@outlook.com.au</a>
</div>
<div>
<div className="h-10 w-10 bg-blue-600/20 text-blue-500 flex items-center justify-center rounded mb-4">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Operational Territory</p>
<p className="text-xl font-bold text-white">Gold Coast, QLD</p>
<p className="text-sm text-gray-400 mt-2">Servicing Brisbane to Northern Rivers</p>
</div>
</div>
<div className="anim-element delay-200 glass-panel p-8 rounded-lg flex flex-col justify-between relative overflow-hidden group hover-scale">
<div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-2xl font-black uppercase tracking-widest mb-4 flex items-center gap-3">
<svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            Facebook HQ
                        </h3>
<p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Follow our primary social feed for operational updates, new fleet acquisitions, and live service announcements directly from the team.
                        </p>
</div>
<a className="relative z-10 inline-flex items-center justify-center w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-black uppercase text-sm tracking-[0.2em] py-4 rounded transition-colors shadow-lg" href="https://www.facebook.com/" target="_blank">
                        Connect on Facebook
                    </a>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-10 text-center text-xs tracking-widest text-gray-500 uppercase z-10 relative">
<p>© 2026 Blackhawk Express · Gold Coast, Queensland · Built for speed, precision, and flexibility.</p>
</footer>

<div className="opacity-0 pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-500 px-4" id="custom-modal">
<div className="glass-panel p-8 rounded-lg max-w-sm w-full border-t-2 border-blue-500 text-center transform scale-95 transition-transform duration-500" id="modal-content-box">
<div className="h-16 w-16 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
<svg className="w-8 h-8" fill="none" id="modal-icon" stroke="currentColor" viewbox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-3" id="modal-title">Notice</h3>
<p className="text-gray-400 text-sm mb-8 leading-relaxed" id="modal-message">System message goes here.</p>
<button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] py-4 rounded transition-colors" onclick="closeModal()">
                Acknowledge
            </button>
</div>
</div>



    </>
  );
}
