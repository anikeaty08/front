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



    // Activate lucide icons
    lucide.createIcons();

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile nav toggle
    const toggle   = document.getElementById('nav-toggle');
    const menu     = document.getElementById('nav-menu');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Close menu on link click (mobile)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) menu.classList.add('hidden');
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
      

<header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70">
<nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2 text-xl font-semibold text-brand font-geist" href="#">
        
        AeroForge
      </a>
<button className="lg:hidden p-2 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand" id="nav-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<ul className="fixed inset-0 lg:static lg:flex items-center gap-8 bg-neutral-950/90 lg:bg-transparent flex-col lg:flex-row justify-center lg:justify-end hidden lg:!flex" id="nav-menu">
<li><a className="block py-2 lg:py-0 hover:text-brand font-geist" href="#training">Programs</a></li>
<li><a className="block py-2 lg:py-0 hover:text-brand font-geist" href="#why">Advantage</a></li>
<li className=""><a className="block py-2 lg:py-0 hover:text-brand font-geist" href="#courses">Workshops</a></li>
<li className=""><a className="block py-2 lg:py-0 hover:text-brand font-geist" href="#security">Safety</a></li>
<li><a className="block py-2 lg:py-0 hover:text-brand font-geist" href="#contact">Contact</a></li>
<li className="lg:ml-4">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand font-geist" href="#">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Sign in
          </a>
</li>
</ul>
</nav>
</header>

<section className="relative overflow-hidden bg-[url(/assets/45c97fa5-e6c3-4724-9f9d-f101b6292bc0_3840w.jpg)] bg-cover">
<div className="max-w-7xl mx-auto px-4 lg:px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-8 font-space-grotesk font-semibold">
          Take Flight.<br /><span className="text-brand font-space-grotesk font-semibold">Master FPV with AeroForge.</span>
</h1>
<p className="text-neutral-400 max-w-md mb-10 font-geist">Industry-grade training, hands-on mentorship, and a global community of pilots—ready for you.</p>
<a className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-brand hover:bg-brand-dark transition-colors font-semibold shadow-lg font-geist" href="#training">
          Start free session
          <svg className="lucide lucide-arrow-right w-5 h-5 stroke-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative">
<img alt="Pilot wearing FPV goggles" className="rounded-xl shadow-2xl ring-1 ring-neutral-800 object-cover w-full h-auto" src="/assets/92a6b77d-f9a6-4e04-9d1f-9e2f3929a5ee_1600w.jpg" />
</div>
</div>
</section>

<section className="bg-neutral-900 bg-[url(/assets/9dead2ce-9640-41bd-8153-af6e7acc42cf_3840w.jpg)] bg-cover pt-24 pb-24" id="why">
<div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-brand text-sm font-semibold tracking-widest uppercase mb-4 font-geist">Our edge</h2>
<h3 className="text-3xl sm:text-4xl mb-8 font-space-grotesk font-semibold">Training designed for the next-gen pilot</h3>
<ul className="space-y-8 border-l border-neutral-700 pl-6">
<li className="">
<h4 className="text-lg font-semibold mb-1 font-geist">Flight Sim On-Ramp</h4>
<p className="text-neutral-400 text-sm font-geist">Zero risk, all reward. Learn the sticks in our virtual simulator before ever powering a quad.</p>
</li>
<li className="">
<h4 className="text-lg font-semibold mb-1 font-geist">Hardware Deep-Dive</h4>
<p className="text-neutral-400 text-sm font-geist">Motors, ESCs, firmware—understand how each piece works together so you can fix anything in the field.</p>
</li>
<li>
<h4 className="text-lg font-semibold mb-1 font-geist">Pro Cinematics</h4>
<p className="text-neutral-400 text-sm font-geist">Capture buttery footage with ND filters, gyroflow, and post-production tactics used by studios.</p>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-72 h-72 bg-brand/20 blur-3xl rounded-full"></div>
</div>
<img alt="Close-up of drone build" className="relative rounded-xl shadow-2xl ring-1 ring-neutral-800 object-cover w-full h-auto" src="/assets/f28788b9-ed9e-41a8-a3f6-32cd68f7be06_1600w.jpg" style={{}} />
</div>
</div>
</section>

<section className="py-24" id="courses">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<h2 className="text-brand text-sm font-semibold tracking-widest uppercase mb-4 font-geist">Workshops</h2>
<h3 className="text-3xl sm:text-4xl mb-12 max-w-3xl font-space-grotesk font-semibold">Hands-on sessions to level up every aspect of your flight</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-neutral-900 rounded-xl p-8 flex flex-col">
<div className="flex-shrink-0 mb-6">
<img alt="Drone build components" className="w-full h-40 object-cover rounded-lg" src="/assets/737adeef-7802-4581-a30c-fe2a0ab34814_800w.jpg" style={{}} />
</div>
<h4 className="text-xl font-semibold mb-2 font-geist">Build & Maiden</h4>
<p className="text-neutral-400 text-sm mb-6 flex-1 font-geist">Solder, tune, and launch your first custom rig. Leave with a ready-to-rip quad and the confidence to repair it.</p>
<a className="inline-flex items-center gap-2 mt-auto text-brand hover:text-brand-light font-medium font-geist" href="#">
            View details
            <svg className="lucide lucide-arrow-right w-4 h-4 stroke-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-neutral-900 rounded-xl p-8 flex flex-col">
<div className="flex-shrink-0 mb-6">
<img alt="Aerial filming" className="w-full h-40 object-cover rounded-lg" src="/assets/63f0a8e4-2348-4a21-ae0c-0dd3f83dafac_800w.jpg" style={{}} />
</div>
<h4 className="text-xl font-semibold mb-2 font-geist">Cinematic Flow</h4>
<p className="text-neutral-400 text-sm mb-6 flex-1 font-geist">Dial in smooth, stable footage with advanced rates, throttle control, and post-processing workflows.</p>
<a className="inline-flex items-center gap-2 mt-auto text-brand hover:text-brand-light font-medium font-geist" href="#">
            View details
            <svg className="lucide lucide-arrow-right w-4 h-4 stroke-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-neutral-900 rounded-xl p-8 flex flex-col">
<div className="flex-shrink-0 mb-6">
<img alt="Freestyle tricks" className="w-full h-40 object-cover rounded-lg" src="/assets/b1c63d47-0d9d-4b44-9e0c-263cef27b106_800w.jpg" />
</div>
<h4 className="text-xl font-semibold mb-2 font-geist">Freestyle Mastery</h4>
<p className="text-neutral-400 text-sm mb-6 flex-1 font-geist">Nail trippy spins, juicy flicks, and power loops while protecting your gear with on-the-spot repairs.</p>
<a className="inline-flex items-center gap-2 mt-auto text-brand hover:text-brand-light font-medium font-geist" href="#">
            View details
            <svg className="lucide lucide-arrow-right w-4 h-4 stroke-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[url(/assets/20f222af-e037-4dea-a697-2b93dc33d3f3_3840w.jpg)] bg-cover pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
<h3 className="text-3xl sm:text-4xl text-neutral-950 font-space-grotesk font-semibold">Your flight path starts here</h3>
<a className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-neutral-950 text-white hover:bg-neutral-800 transition-colors font-semibold shadow-lg font-geist" href="#training">
        Join the academy
        <svg className="lucide lucide-rocket w-5 h-5 stroke-2" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</a>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-3 gap-12">
<div className="">
<a className="flex items-center gap-2 text-xl font-semibold text-brand mb-4 font-geist" href="#">
          
          AeroForge
        </a>
<p className="text-neutral-400 text-sm font-geist">Empowering pilots worldwide with world-class education, hardware insights, and a supportive community.</p>
</div>
<div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
<div>
<h4 className="font-medium mb-4 font-geist">Explore</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="#training">Programs</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#courses">Workshops</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#why">Advantage</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#security">Safety</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 font-geist">Resources</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="#">Knowledge Base</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Equipment Guides</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 font-geist">Community</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="#">Pilot Forum</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Events</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Discord</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Ambassadors</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-neutral-800 py-8">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-neutral-600 text-xs font-geist">© <span className="font-geist" id="year">2025</span> AeroForge. All rights reserved.</p>
<div className="flex items-center gap-6">
<a aria-label="Twitter" className="text-neutral-600 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="YouTube" className="text-neutral-600 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a aria-label="Instagram" className="text-neutral-600 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
