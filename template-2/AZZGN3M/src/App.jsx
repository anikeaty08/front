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
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
          animation: {
            'fade-in': 'fadeIn 0.8s ease-in-out forwards',
            'slide-up': 'slideUp 0.8s ease-in-out forwards',
            'slide-left': 'slideLeft 0.8s ease-in-out forwards',
            'slide-right': 'slideRight 0.8s ease-in-out forwards',
            'blur-in': 'blurIn 0.8s ease-in-out forwards',
            'scale-blur': 'scaleBlur 0.8s ease-in-out forwards',
          }
        }
      }
    }
  


    // Initialize everything
    document.addEventListener('DOMContentLoaded', function() {
      // Set year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Initialize Lucide icons
      lucide.createIcons();

      // ParticlesJS
      particlesJS('particles-js', {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 1000 } },
          color: { value: ['#6366f1', '#8b5cf6', '#06b6d4'] },
          shape: { type: 'circle' },
          opacity: { value: 0.3, random: true },
          size: { value: 2, random: true },
          move: { enable: true, speed: 0.8, direction: 'none', out_mode: 'bounce' }
        },
        interactivity: {
          events: { onhover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        retina_detect: true
      });

      // Mini Chart
      const ctx = document.getElementById('miniChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', ''],
          datasets: [{
            data: [20, 35, 25, 45, 40, 55, 60],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          },
          elements: { point: { radius: 0 } }
        }
      });

      // Trigger animations
      setTimeout(() => {
        document.querySelectorAll('[class*="animate-sequence"]').forEach((el) => {
          el.style.opacity = '1';
        });
      }, 100);
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
      

<div className="fixed inset-0 -z-10 opacity-40" id="particles-js"><canvas className="particles-js-canvas-el" height="2460" style={{width: `100%`, height: `100%`}} width="3326"></canvas></div>

<header className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-6 lg:pt-10 animate-fade-in animate-sequence-1" style={{opacity: `1`}}>
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
<h1 className="text-6xl lg:text-7xl font-normal leading-none tracking-tighter">Elevate</h1>
<p className="mt-4 lg:mt-0 lg:ml-auto text-lg font-normal text-white/80 max-w-xs lg:text-right">
        Where AI meets<br />Personal Training
      </p>
</div>
<hr className="mt-8 border-white/20" />
</header>

<main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-16">

<div className="grid grid-cols-1 lg:grid-cols-6 auto-rows-[minmax(140px,_1fr)] gap-2">

<div className="col-span-1 lg:col-span-2 flex items-end p-8 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 relative overflow-hidden group rounded-2xl animate-slide-right animate-sequence-2" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h2 className="text-4xl md:text-5xl font-normal leading-tight tracking-tight relative z-10">Coach-Client<br />Marketplace</h2>
</div>

<div className="col-span-1 lg:col-span-2 row-span-2 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden group rounded-2xl animate-scale-blur animate-sequence-3" style={{opacity: `1`}}>
<img alt="Coaching" className="w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-80 object-cover" src="https://images.unsplash.com/photo-1677644334825-0eb411012ac0?w=1080&q=80" />
<div className="absolute bottom-6 left-6 right-6">
<p className="text-sm font-normal text-white/90">Empowering connections</p>
</div>
</div>

<div className="col-span-1 lg:col-span-1 flex items-end justify-start p-6 bg-black/80 backdrop-blur-sm border border-white/10 relative group rounded-2xl animate-slide-left animate-sequence-4" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<p className="text-4xl lg:text-5xl font-normal text-emerald-400 tracking-tight">127</p>
<p className="text-xs tracking-wide mt-1 text-white/60">Active Coaches</p>
</div>
</div>

<div className="col-span-1 lg:col-span-1 flex items-end justify-start p-6 bg-black/80 backdrop-blur-sm border border-white/10 relative group rounded-2xl animate-slide-left animate-sequence-5" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<p className="text-4xl lg:text-5xl font-normal text-blue-400 tracking-tight">94%</p>
<p className="text-xs tracking-wide mt-1 text-white/60">Success Rate</p>
</div>
</div>

<div className="col-span-1 lg:col-span-2 flex items-start p-8 bg-black/80 backdrop-blur-sm border border-white/10 relative group rounded-2xl animate-slide-right animate-sequence-6" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-sm leading-relaxed text-white/80 max-w-xs relative z-10">
          "Put people first. Leverage technology only when it enhances the human experience." Every feature honors meaningful connections.
        </p>
</div>

<div className="col-span-1 lg:col-span-2 flex relative group animate-slide-up animate-sequence-7 bg-black/80 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm items-end" style={{opacity: `1`}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 to-orange-600/5"></div>
<div className="relative z-10">
<p className="text-4xl lg:text-5xl font-normal text-orange-400 tracking-tight">2.4K+</p>
<p className="text-xs tracking-wide mt-1 text-white/60">Sessions Completed</p>
</div>
</div><div className="col-span-1 lg:col-span-2 flex relative group animate-slide-up animate-sequence-7 bg-black/80 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm items-end" style={{opacity: `1`}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 to-orange-600/5"></div>
<div className="relative z-10">
<p className="lg:text-5xl text-4xl font-normal text-violet-500 tracking-tight">1.2K+</p>
<p className="text-xs text-white/60 tracking-wide mt-1">Hours Recorded</p>
</div>
</div><div className="col-span-1 lg:col-span-2 flex relative group animate-slide-up animate-sequence-7 bg-black/80 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm items-end" style={{opacity: `1`}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 to-orange-600/5"></div>
<div className="relative z-10">
<p className="lg:text-5xl text-4xl font-normal text-pink-600 tracking-tight">100+</p>
<p className="text-xs text-white/60 tracking-wide mt-1">Videos Included</p>
</div>
</div>

<div className="col-span-1 lg:col-span-1 flex items-end p-6 bg-black/80 backdrop-blur-sm border border-white/10 relative group rounded-2xl animate-slide-up animate-sequence-8" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<p className="text-4xl lg:text-5xl font-normal text-pink-400 tracking-tight">4.9</p>
<p className="text-xs tracking-wide mt-1 text-white/60">Avg Rating</p>
</div>
</div>

<div className="col-span-1 lg:col-span-1 flex items-end p-6 bg-black/80 backdrop-blur-sm border border-white/10 relative group rounded-2xl animate-slide-up animate-sequence-9" style={{opacity: `1`}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-500/5 to-teal-600/5"></div>
<div className="relative z-10">
<p className="text-4xl lg:text-5xl font-normal text-teal-400 tracking-tight">340%</p>
<p className="text-xs tracking-wide mt-1 text-white/60">Growth YoY</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(200px,_1fr)] gap-2">

<div className="col-span-1 md:col-span-2 p-8 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-white/10 relative group rounded-2xl animate-blur-in animate-sequence-10" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<svg className="lucide lucide-shield-check w-8 h-8 text-cyan-400 mb-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-xl font-normal text-white tracking-tight">Secure Authentication</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">Streamlined sign-up & login with enterprise-grade security protection.</p>
</div>
<div className="mt-8 p-4 bg-black/30 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-3 text-xs text-white/60">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span>SSL Encrypted • 2FA Available</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-white/10 relative group rounded-2xl animate-blur-in animate-sequence-11" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<svg className="lucide lucide-brain w-8 h-8 text-purple-400 mb-4" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<h3 className="text-xl font-normal text-white tracking-tight">AI-Powered Matching</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">Smart algorithms connect clients with ideal coaches based on goals and preferences.</p>
</div>
<div className="mt-8">
<div className="flex -space-x-2">
<div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-black"></div>
<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-black"></div>
<div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full border-2 border-black"></div>
<div className="w-8 h-8 bg-black/50 rounded-full border-2 border-white/20 flex items-center justify-center text-xs text-white/60">+5</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 p-8 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 border border-white/10 relative group rounded-2xl animate-slide-up animate-sequence-12" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<svg className="lucide lucide-activity w-8 h-8 text-emerald-400 mb-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-xl font-normal text-white tracking-tight">Progress Tracking</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">Visualize metrics, workouts, and milestones with real-time analytics.</p>
</div>
<div className="mt-8">
<div className="h-16">
<canvas className="w-full h-full" height="128" id="miniChart" style={{display: `block`, boxSizing: `border-box`, height: `64px`, width: `522px`}} width="1044"></canvas>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 p-8 bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-white/10 relative group rounded-2xl animate-slide-up animate-sequence-13" style={{opacity: `1`}}>
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<svg className="lucide lucide-calendar-clock w-8 h-8 text-orange-400 mb-4" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg>
<h3 className="text-xl font-normal text-white tracking-tight">Smart Scheduling</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">Native calendar integration with automated reminders and conflict resolution.</p>
</div>
<div className="mt-8 grid grid-cols-7 gap-1">
<div className="w-6 h-6 bg-orange-400/20 rounded-lg text-xs flex items-center justify-center text-orange-400">M</div>
<div className="w-6 h-6 bg-orange-400 rounded-lg text-xs flex items-center justify-center text-black font-medium">T</div>
<div className="w-6 h-6 bg-orange-400/20 rounded-lg text-xs flex items-center justify-center text-orange-400">W</div>
<div className="w-6 h-6 bg-orange-400/20 rounded-lg text-xs flex items-center justify-center text-orange-400">T</div>
<div className="w-6 h-6 bg-orange-400 rounded-lg text-xs flex items-center justify-center text-black font-medium">F</div>
<div className="w-6 h-6 bg-white/10 rounded-lg text-xs flex items-center justify-center text-white/40">S</div>
<div className="w-6 h-6 bg-white/10 rounded-lg text-xs flex items-center justify-center text-white/40">S</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-sequence-14" style={{opacity: `1`}}>
<button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-normal hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
<span className="text-base">Join as Client</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="group px-8 py-4 rounded-2xl border border-white/20 text-white font-normal hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
<span className="text-base">Join as Coach</span>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</div>
</main>

<footer className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-10 text-xs text-white/50 animate-fade-in animate-sequence-15" style={{opacity: `1`}}>
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<span>© <span id="year">2025</span> Elevate Platform. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Terms</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
