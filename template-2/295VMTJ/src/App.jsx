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



particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.1, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.05, width: 1 },
    move: { enable: true, speed: 0.5, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
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
      

<div className="pointer-events-none fixed inset-0 z-0" id="particles-js"><canvas className="particles-js-canvas-el" height="1988" style={{width: `100%`, height: `100%`}} width="2754"></canvas></div>
<section className="relative overflow-hidden py-24">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] bg-[size:3px_3px] opacity-40"></div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="md:text-5xl text-4xl font-semibold tracking-tight text-center mb-3">Loved by teams <span className="text-violet-400">worldwide</span></h2>
<p className="mx-auto mb-16 max-w-xl text-center text-sm text-white/70">We partner with forward-thinking companies to craft digital products that move businesses and people.</p>

<div className="masonry-grid animate-stagger">

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=80&q=80" />
<div className="">
<p className="text-sm font-semibold uppercase tracking-wide">Hiroki Tanaka</p>
<p className="text-xs uppercase text-white/60">Product Lead · Nexus Robotics</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<p className="leading-snug text-lg font-medium mb-4">"The dashboard they delivered is lightning-fast and visually stunning. It's given our engineering team superpowers."</p>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                4.9/5 Rating
              </span>
<span>Tokyo, Japan</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?fit=crop&w=80&q=80" />
<div className="">
<p className="text-sm font-semibold uppercase tracking-wide">Serena Cardenas</p>
<p className="text-xs uppercase text-white/60">Design Ops · TidalWave Music</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<p className="leading-snug text-lg font-medium mb-6">"Animations feel organic, copy is on point, and accessibility is baked in from day one. Exactly what we needed for our streaming platform."</p>
<div className="mb-6 rounded-lg bg-white/5 p-4 border border-white/10">
<p className="text-sm text-white/80 mb-2 font-medium">Key Results:</p>
<ul className="text-sm text-white/70 space-y-1">
<li>• 127% increase in user engagement</li>
<li>• 43% reduction in support tickets</li>
<li>• 98% accessibility compliance score</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                5.0/5 Rating
              </span>
<span>Los Angeles, CA</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?fit=crop&w=80&q=80" />
<div>
<p className="text-sm font-semibold uppercase tracking-wide">Armand Liu</p>
<p className="text-xs uppercase text-white/60">Chief Strategy · Aurora Health</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<p className="leading-snug text-lg font-medium mb-4">"We launched ahead of schedule and patient satisfaction jumped by 37%. The telehealth portal they built is intuitive and secure."</p>
<div className="mb-4 flex gap-2">
<span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 border border-green-500/20">Healthcare</span>
<span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">HIPAA Compliant</span>
</div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                4.8/5 Rating
              </span>
<span>Seattle, WA</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?fit=crop&w=80&q=80" />
<div>
<p className="text-sm font-semibold uppercase tracking-wide">Nyah Obeng</p>
<p className="text-xs uppercase text-white/60">Marketing Dir. · HelioSpace</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<p className="leading-snug text-lg font-medium mb-4">"Conversion rates soared and bounce rates plummeted in the first week. The results speak for themselves."</p>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                4.9/5 Rating
              </span>
<span>Houston, TX</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=80&q=80" />
<div className="">
<p className="text-sm font-semibold uppercase tracking-wide">Mateo Fernandez</p>
<p className="text-xs uppercase text-white/60">Ops Manager · Sphere Logistics</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="mb-4 pl-4 border-l-2 border-violet-400/40">
<p className="leading-snug text-lg font-medium italic">"The realtime tracking map blew our clients' minds. We're fielding new partnership requests daily and our delivery accuracy is now at 99.7%."</p>
</div>
<div className="mb-4 rounded-lg bg-violet-500/5 p-4 border border-violet-500/20">
<p className="text-sm text-violet-300 mb-2 font-medium">Impact Metrics:</p>
<div className="space-y-1 text-sm text-white/80">
<div className="flex justify-between"><span>Delivery Accuracy</span><span className="text-green-400">+12.3%</span></div>
<div className="flex justify-between"><span>Customer Inquiries</span><span className="text-green-400">-67%</span></div>
<div className="flex justify-between"><span>Partner Requests</span><span className="text-green-400">+340%</span></div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                5.0/5 Rating
              </span>
<span>Miami, FL</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=80&q=80" />
<div className="">
<p className="text-sm font-semibold uppercase tracking-wide">Amira Kaplan</p>
<p className="text-xs uppercase text-white/60">Founder · Lumen Learning</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<p className="leading-snug text-lg font-medium mb-4">"Our course completion rate jumped to 84%. The new UX keeps learners engaged till the last lesson."</p>
<div className="mb-4 grid grid-cols-2 gap-4">
<div className="text-center rounded-lg bg-white/5 p-3 border border-white/10">
<div className="text-xl font-semibold text-violet-400">84%</div>
<div className="text-xs text-white/60">Completion Rate</div>
</div>
<div className="text-center rounded-lg bg-white/5 p-3 border border-white/10">
<div className="text-xl font-semibold text-green-400">+156%</div>
<div className="text-xs text-white/60">Student Retention</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                4.7/5 Rating
              </span>
<span>Boston, MA</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=80&q=80" />
<div className="">
<p className="text-sm font-semibold uppercase tracking-wide">Chen Wei</p>
<p className="text-xs uppercase text-white/60">CTO · QuantumFlow</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<p className="leading-snug text-lg font-medium mb-4">"Scalable architecture, beautiful code, lightning deployment. They understand both design and engineering."</p>
<div className="mb-4">
<span className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-1 text-xs font-medium text-orange-400 border border-orange-500/20">Featured Client</span>
</div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                5.0/5 Rating
              </span>
<span>Singapore</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=80&q=80" />
<div className="">
<p className="text-sm font-semibold uppercase tracking-wide">Sophie Laurent</p>
<p className="text-xs uppercase text-white/60">Design Lead · Atelier Co</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
</div>
<p className="leading-snug text-lg font-medium mb-4">"From concept to launch in 6 weeks. Their process is seamless and the attention to detail is extraordinary."</p>
<div className="mb-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-white/70">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span>Week 1-2: Discovery & Strategy</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/70">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span>Week 3-4: Design & Prototyping</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/70">
<div className="w-2 h-2 rounded-full bg-violet-400"></div>
<span>Week 5-6: Development & Launch</span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                4.8/5 Rating
              </span>
<span>Paris, France</span>
</div>
</div>
</div>
</div>

<div className="masonry-item">
<div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=80&q=80" />
<div className="">
<p className="text-sm font-semibold uppercase tracking-wide">Alex Rivera</p>
<p className="text-xs uppercase text-white/60">CEO · Momentum Studios</p>
</div>
</div>
<svg className="h-6 w-6 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect></svg>
</div>
<p className="leading-snug text-lg font-medium mb-4">"Our video platform handles 2M+ concurrent users flawlessly. Performance is incredible across all devices."</p>
<div className="mb-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-3 border border-purple-500/20">
<div className="flex items-center gap-2 text-sm text-purple-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10,8 16,12 10,16 10,8"></polygon></svg>
              Watch Video Testimonial
            </div>
</div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-4 text-xs text-white/60">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                5.0/5 Rating
              </span>
<span>Barcelona, Spain</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center">
<div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
<h3 className="mb-4 text-2xl font-semibold">Ready to join them?</h3>
<p className="mb-6 text-white/70 max-w-md mx-auto">Let's create something extraordinary together. From concept to launch, we'll be your trusted partner.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            Start Your Project
          </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Schedule a Call
          </button>
</div>
</div>
</div>
</div>
</section>




    </>
  );
}
