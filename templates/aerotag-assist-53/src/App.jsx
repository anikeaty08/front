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



      // Initialize icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });

      // Mobile menu toggle
      const mobileOpen = document.getElementById('mobile-menu-open');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileOpen?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Smooth scroll shortcuts
      const seeBtns = [document.getElementById('see-demo-btn'), document.getElementById('see-demo-btn-mobile')];
      seeBtns.forEach(btn => btn && btn.addEventListener('click', () => {
        document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        mobileMenu?.classList.add('hidden');
      }));

      // Modal helpers
      const demoModal = document.getElementById('demo-modal');
      const contactModal = document.getElementById('contact-modal');
      const openDemoButtons = [
        document.getElementById('open-demo-modal'),
        document.getElementById('open-demo-modal-mobile'),
        document.getElementById('open-demo-modal-hero'),
        document.getElementById('open-demo-modal-showcase'),
        document.getElementById('open-demo-modal-cta'),
        document.getElementById('open-demo-modal-footer')
      ];
      const openContactButtons = [
        document.getElementById('open-contact-modal-showcase'),
        document.getElementById('open-contact-modal-cta'),
        document.getElementById('open-contact-modal-footer')
      ];
      const openModal = (el) => el?.classList.remove('hidden');
      const closeModal = (el) => el?.classList.add('hidden');

      openDemoButtons.forEach(btn => btn && btn.addEventListener('click', () => openModal(demoModal)));
      openContactButtons.forEach(btn => btn && btn.addEventListener('click', () => openModal(contactModal)));

      document.getElementById('demo-modal-close')?.addEventListener('click', () => closeModal(demoModal));
      document.getElementById('contact-modal-close')?.addEventListener('click', () => closeModal(contactModal));

      // Close when clicking backdrop
      demoModal?.addEventListener('click', (e) => {
        if (e.target === demoModal) closeModal(demoModal);
      });
      contactModal?.addEventListener('click', (e) => {
        if (e.target === contactModal) closeModal(contactModal);
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal(demoModal);
          closeModal(contactModal);
        }
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
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2 group" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-900 shadow-sm group-hover:shadow transition-shadow">
<span className="text-sm font-semibold tracking-tight">AT</span>
</span>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-semibold tracking-tight">AeroTag Assist</span>
<span className="text-[11px] text-slate-500 -mt-0.5">Geo-Fenced QR for Hotels</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#problem">Problem</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#solution">Solution</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#why">Why Choose</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-4 py-2 text-sm text-slate-700 hover:text-slate-900 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors" id="see-demo-btn">
              See How It Works
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-sm" id="open-demo-modal">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Book a Demo
            </button>
</div>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 hover:bg-slate-50" id="mobile-menu-open">
<i className="w-5 h-5 text-slate-900" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200" id="mobile-menu">
<div className="px-4 py-3 space-y-2">
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#problem">Problem</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#solution">Solution</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#how-it-works">How it works</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#features">Features</a>
<a className="block text-sm text-slate-700 hover:text-slate-900" href="#why">Why Choose</a>
<div className="pt-2 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800 rounded-md" id="open-demo-modal-mobile">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Book a Demo
            </button>
<button className="flex-1 px-4 py-2 text-sm text-slate-700 hover:text-slate-900 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50" id="see-demo-btn-mobile">
              See How It Works
            </button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-[12px] text-slate-600 bg-white shadow-sm">
<i className="w-4 h-4" data-lucide="scan-line"></i>
              Leading Geo-Fenced Hotel Room QR Communication System
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Smarter Guest Communication. Secure, Intuitive, Geo-Fenced.
            </h1>
<p className="mt-4 text-base sm:text-lg text-slate-600">
              With AeroTag Assist, one QR code unlocks seamless in-room services for guests inside your hotel — and transforms into a powerful marketing tool when scanned outside. Unlike traditional QR systems, our geo-fenced solution protects your operations from post-checkout misuse while enhancing guest satisfaction.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-sm" id="open-demo-modal-hero">
<i className="w-4 h-4" data-lucide="rocket"></i>
                Book a Demo
              </button>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm text-slate-700 hover:text-slate-900 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50" href="#how-it-works">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                See How It Works
              </a>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="Hotel staff" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Guest" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Manager" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600">
                Trusted by forward-thinking hotel teams to streamline service and protect operations.
              </p>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative">
<div className="absolute -inset-3 rounded-2xl bg-slate-100/60"></div>
<div className="relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-xs text-slate-500">Guest Services Portal</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2">
<div className="p-6 space-y-4 border-r border-slate-200">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-600" data-lucide="map-pin"></i>
<p className="text-sm text-slate-700">On-Premise Access</p>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-800" data-lucide="utensils"></i>
<span className="text-sm text-slate-600">Room Service</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-800" data-lucide="broom"></i>
<span className="text-sm text-slate-600">Housekeeping</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-800" data-lucide="concierge-bell"></i>
<span className="text-sm text-slate-600">Concierge &amp; Spa</span>
</li>
</ul>
<button className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium tracking-tight text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md hover:bg-emerald-100">
<i className="w-4 h-4" data-lucide="qr-code"></i>
                      Scan in hotel
                    </button>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-600" data-lucide="navigation"></i>
<p className="text-sm text-slate-700">Off-Premise Access</p>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-800" data-lucide="ticket-percent"></i>
<span className="text-sm text-slate-600">Offers &amp; Loyalty</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-800" data-lucide="calendar-check"></i>
<span className="text-sm text-slate-600">Bookings &amp; Events</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-800" data-lucide="shield"></i>
<span className="text-sm text-slate-600">Protected &amp; Private</span>
</li>
</ul>
<button className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium tracking-tight text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100">
<i className="w-4 h-4" data-lucide="external-link"></i>
                      Scan outside
                    </button>
</div>
</div>
<img alt="Modern hotel room with QR" className="w-full h-56 object-cover border-t border-slate-200" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-white" id="problem">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          The Risk No One Talks About in Hotel QR Systems
        </h2>
<p className="mt-4 text-base sm:text-lg text-slate-600">
          Most hotels have adopted QR-based guest service systems, but there’s a serious flaw that often goes unnoticed. Once a guest scans the QR, they can save the link or photo of the code. Even after checkout, they can still access the service page — and place requests to rooms they no longer occupy.
        </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-rose-600 mt-0.5" data-lucide="x-octagon"></i>
<div>
<p className="text-sm text-slate-900">Wrong orders being sent to rooms.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-amber-600 mt-0.5" data-lucide="timer-off"></i>
<p className="text-sm text-slate-900">Wasted staff time chasing invalid requests.</p>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-red-600 mt-0.5" data-lucide="shield-alert"></i>
<p className="text-sm text-slate-900">Risk of spam or malicious misuse.</p>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-orange-600 mt-0.5" data-lucide="alert-triangle"></i>
<p className="text-sm text-slate-900">Confusion and poor experiences for staff and future guests.</p>
</div>
</div>
<div className="mt-6 p-4 sm:p-5 rounded-xl border border-amber-200 bg-amber-50">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-700 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-amber-800">
              Hotels expect convenience, but instead, they inherit an operational and security problem.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50" id="solution">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">One QR. Two Journeys. Zero Misuse.</h2>
<p className="mt-4 text-base sm:text-lg text-slate-600">
            AeroTag Assist eliminates these flaws with geo-fenced access and time-limited control. Our intelligent QR system ensures guests only get the right services, at the right time, in the right place.
          </p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600" data-lucide="building-2"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">On-Premise Access</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
              Guests inside your hotel scan and instantly see the Guest Services Portal with options for room service, housekeeping, spa, concierge, and more.
            </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="megaphone"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Off-Premise Access</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
              If the QR is scanned outside the hotel or via a saved photo, it automatically redirects to your Marketing Page with offers, loyalty programs, and booking links.
            </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-800" data-lucide="lock"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Automatic Expiry &amp; Privacy</h3>
</div>
<p className="mt-2 text-sm text-slate-600">
              When a guest checks out, their access expires — preventing misuse. No guest details or room identity are ever exposed outside the property.
            </p>
</div>
</div>
<div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-indigo-600 mt-0.5" data-lucide="sparkles"></i>
<p className="text-sm text-slate-700">
              With AeroTag Assist, your hotel QR codes serve current guests and promote your brand simultaneously — without the risks of traditional systems.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-white" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple for Guests. Smart for Hotels.</h2>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center">
<i className="w-5 h-5 text-slate-900" data-lucide="qr-code"></i>
</div>
<div className="flex-1 w-px bg-slate-200 my-2"></div>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Step 1 – Scan</h3>
<p className="mt-1 text-sm text-slate-600">Guests scan the AeroTag QR code placed in their room or anywhere within the hotel.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center">
<i className="w-5 h-5 text-slate-900" data-lucide="route"></i>
</div>
<div className="flex-1 w-px bg-slate-200 my-2"></div>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Step 2 – Geo-Intelligent Redirect</h3>
<p className="mt-1 text-sm text-slate-600">
                  Inside the hotel: Guests are taken to the Room &amp; Guest Services Portal.<br/>
                  Outside the hotel: The QR redirects to your Marketing &amp; Promotional Page.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center">
<i className="w-5 h-5 text-slate-900" data-lucide="badge-check"></i>
</div>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Step 3 – Secure Access</h3>
<p className="mt-1 text-sm text-slate-600">
                  Once the guest checks out, access automatically expires — ensuring only the current guest can use the system.
                </p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-2 rounded-xl bg-slate-100/70"></div>
<div className="relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="smartphone"></i>
<p className="text-sm text-slate-800">AeroTag Flow Preview</p>
</div>
<span className="text-xs text-slate-500">Geo-Fenced</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-5 border-r border-slate-200">
<p className="text-xs font-medium text-emerald-700">Inside Hotel</p>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">Room Service</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">Housekeeping</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">Concierge</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
<div className="flex items-center gap-2 text-xs text-emerald-800">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                        Access verified within geo-fence.
                      </div>
</div>
</div>
</div>
<div className="p-5">
<p className="text-xs font-medium text-blue-700">Outside Hotel</p>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">Special Offers</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">Loyalty</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">Book Direct</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3">
<div className="flex items-center gap-2 text-xs text-blue-800">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
                        Auto-redirect to marketing page.
                      </div>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-200 bg-slate-50">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-4 h-4" data-lucide="clock"></i>
                  Access expires automatically post-checkout.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Powerful Features for a Modern Hotel Experience</h2>
<p className="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to deliver secure, delightful in-stay services and turn offsite scans into revenue.
          </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-emerald-600" data-lucide="map-pin"></i>
<h3 className="mt-3 text-lg font-medium tracking-tight text-slate-900">Geo-Fenced Access</h3>
<p className="mt-1 text-sm text-slate-600">QR works only within hotel premises.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-rose-600" data-lucide="calendar-x2"></i>
<h3 className="mt-3 text-lg font-medium tracking-tight text-slate-900">Auto Expiry on Checkout</h3>
<p className="mt-1 text-sm text-slate-600">No misuse after a guest’s stay ends.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-blue-600" data-lucide="split"></i>
<h3 className="mt-3 text-lg font-medium tracking-tight text-slate-900">Dual-Purpose Redirects</h3>
<p className="mt-1 text-sm text-slate-600">Services for guests, marketing for outsiders.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-slate-800" data-lucide="concierge-bell"></i>
<h3 className="mt-3 text-lg font-medium tracking-tight text-slate-900">Complete Services Portal</h3>
<p className="mt-1 text-sm text-slate-600">Room service, housekeeping, maintenance, spa, concierge, and more.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-indigo-600" data-lucide="layout-dashboard"></i>
<h3 className="mt-3 text-lg font-medium tracking-tight text-slate-900">Hotel Dashboard</h3>
<p className="mt-1 text-sm text-slate-600">Manage and track requests in real time.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-slate-800" data-lucide="shield"></i>
<h3 className="mt-3 text-lg font-medium tracking-tight text-slate-900">Data Security</h3>
<p className="mt-1 text-sm text-slate-600">Guest privacy is always protected.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<i className="w-5 h-5 text-violet-600" data-lucide="palette"></i>
<h3 className="mt-3 text-lg font-medium tracking-tight text-slate-900">Custom Branding</h3>
<p className="mt-1 text-sm text-slate-600">Tailored to match your hotel’s look and feel.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-white" id="why">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">The Smarter Choice for Hotels That Value Security and Service</h2>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600" data-lucide="smile"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Increase Guest Satisfaction</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Guests get instant access to all services without downloading an app.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-600" data-lucide="workflow"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Boost Staff Efficiency</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Only valid, in-stay requests reach your team.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-600" data-lucide="trending-up"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Unlock Marketing Potential</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Every offsite scan becomes a chance to promote your hotel and capture bookings.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-rose-600" data-lucide="shield-off"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Protect Operations</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Prevent misuse of old links or saved QR codes after checkout.</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow md:col-span-2">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-700" data-lucide="credit-card"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Drive More Direct Revenue</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Redirect offsite scans to booking engines and exclusive offers.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="relative">
<div className="absolute -inset-2 rounded-2xl bg-slate-100/70"></div>
<div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="layout-dashboard"></i>
<p className="text-sm text-slate-800">Hotel Dashboard</p>
</div>
<span className="text-xs text-slate-500">Live</span>
</div>
<div className="p-5 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-xs text-slate-500">Requests</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">124</p>
<div className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
                    +12% today
                  </div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-xs text-slate-500">Avg. Response</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">3.8m</p>
<div className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-1">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
                    SLA improved
                  </div>
</div>
<div className="col-span-2 rounded-lg border border-slate-200 p-4">
<p className="text-xs text-slate-500">Recent Activity</p>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="broom"></i>
<span className="text-sm text-slate-700">Housekeeping requested</span>
</div>
<span className="text-xs text-slate-500">Room 1207</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="utensils"></i>
<span className="text-sm text-slate-700">Room service placed</span>
</div>
<span className="text-xs text-slate-500">Room 808</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="concierge-bell"></i>
<span className="text-sm text-slate-700">Concierge call scheduled</span>
</div>
<span className="text-xs text-slate-500">Room 509</span>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-200 bg-slate-50">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                  Staff only see in-stay, verified requests.
                </div>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">A clear view of every request — only when it’s valid</h3>
<p className="mt-3 text-slate-600">
              Your team works faster with context-aware requests that arrive from verified, in-stay guests. Meanwhile, offsite scans route to marketing — automatically.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-700">Reduce noise and eliminate invalid submissions</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-700">Improve guest satisfaction with faster response times</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-700">Turn every offsite scan into a booking opportunity</span>
</li>
</ul>
<div className="mt-6 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800 rounded-md" id="open-demo-modal-showcase">
<i className="w-4 h-4" data-lucide="calendar"></i>
                Book a Demo
              </button>
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50" id="open-contact-modal-showcase">
<i className="w-4 h-4" data-lucide="messages-square"></i>
                Talk to Our Team
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-slate-200 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Ready to Upgrade Your Guest Experience and Protect Your Hotel?
        </h2>
<p className="mt-4 text-base sm:text-lg text-slate-600">
          AeroTag Assist is the only geo-fenced, misuse-proof QR communication system for hotels. Enhance guest services, safeguard your operations, and turn every scan into an opportunity.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
<button className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800 rounded-md" id="open-demo-modal-cta">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Book a Demo
          </button>
<button className="inline-flex items-center gap-2 px-5 py-3 text-sm text-slate-700 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50" id="open-contact-modal-cta">
<i className="w-4 h-4" data-lucide="messages-square"></i>
            Talk to Our Team
          </button>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-900 shadow-sm">
<span className="text-sm font-semibold tracking-tight">AT</span>
</span>
<span className="text-sm font-semibold tracking-tight text-slate-900">AeroTag Assist</span>
</div>
<p className="mt-3 text-sm text-slate-600">
              Geo-fenced QR communication built for hotels. Secure in-stay services. Smarter offsite marketing.
            </p>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">Product</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#how-it-works">How it works</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#features">Features</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#why">Why Choose</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">Connect</p>
<ul className="mt-3 space-y-2">
<li><button className="text-left text-sm text-slate-600 hover:text-slate-900" id="open-contact-modal-footer">Contact sales</button></li>
<li><button className="text-left text-sm text-slate-600 hover:text-slate-900" id="open-demo-modal-footer">Book a demo</button></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 pt-6">
<p className="text-xs text-slate-500">© <span id="year"></span> AeroTag Assist. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Privacy</a>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Terms</a>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Security</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="demo-modal">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="relative max-w-lg mx-auto my-10">
<div className="mx-4 rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="calendar"></i>
<p className="text-sm font-medium tracking-tight text-slate-900">Book a Demo</p>
</div>
<button className="h-8 w-8 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center justify-center" id="demo-modal-close">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="text-xs text-slate-600">Full name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Alex Morgan" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-600">Work email</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="alex@hotelgroup.com" type="email"/>
</div>
<div>
<label className="text-xs text-slate-600">Hotel / Group</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Evergreen Hotels" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Message (optional)</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Tell us about your property and goals..." rows="3"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<p className="text-xs text-slate-500">We’ll get back to you within 1 business day.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800 rounded-md">
<i className="w-4 h-4" data-lucide="send"></i>
                Request demo
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="contact-modal">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="relative max-w-lg mx-auto my-10">
<div className="mx-4 rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="messages-square"></i>
<p className="text-sm font-medium tracking-tight text-slate-900">Talk to Our Team</p>
</div>
<button className="h-8 w-8 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center justify-center" id="contact-modal-close">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-600">First name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Taylor" type="text"/>
</div>
<div>
<label className="text-xs text-slate-600">Last name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Lee" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Work email</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="taylor@boutiquehotel.com" type="email"/>
</div>
<div>
<label className="text-xs text-slate-600">How can we help?</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Questions about integration, pricing, or rollout timelines..." rows="3"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<p className="text-xs text-slate-500">Prefer email? hello@aerotagassist.com</p>
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800 rounded-md">
<i className="w-4 h-4" data-lucide="send"></i>
                Send message
              </button>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
