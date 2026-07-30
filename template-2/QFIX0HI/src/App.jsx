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
      
    // Dark mode toggle
    document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.getElementById('dark-toggle');
      const html = document.documentElement;
      toggle?.addEventListener('click', () => {
        html.classList.toggle('dark');
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
      

<header className="fixed w-full top-0 left-0 z-30 bg-white/90 dark:bg-[#22272F]/90 shadow-sm backdrop-blur-lg transition-colors duration-300">
<nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
<a className="flex items-center gap-2" href="#">

<img alt="Refrens Logo" className="h-8 w-8 rounded-md bg-gradient-to-tr from-[#800080] to-[#EB3374] p-1" src="https://refrens.com/images/logo-dark.svg" />
<span className="text-xl font-bold tracking-tight bg-gradient-to-tr from-[#800080] to-[#EB3374] bg-clip-text text-transparent">Refrens</span>
</a>
<div className="hidden md:flex gap-8 items-center">
<a className="font-medium hover:text-[#EB3374] transition-colors" href="#features">Features</a>
<a className="font-medium hover:text-[#EB3374] transition-colors" href="#testimonials">Testimonials</a>
<a className="font-medium hover:text-[#EB3374] transition-colors" href="#pricing">Pricing</a>
<a className="font-medium hover:text-[#EB3374] transition-colors" href="#contact">Contact</a>
</div>
<div className="flex gap-3 items-center">

<button aria-label="Toggle dark mode" className="rounded-full p-2 bg-[#EB3374]/10 hover:bg-[#EB3374]/20 transition" id="dark-toggle">
<i className="ph ph-moon text-[#800080] dark:text-[#EB3374] text-xl"></i>
</button>
<a className="hidden md:inline-block rounded-md px-5 py-2 bg-gradient-to-tr from-[#800080] to-[#EB3374] text-white font-bold shadow-md hover:scale-105 hover:shadow-pink-400/30 transition-all duration-200 focus:ring-2 focus:ring-[#EB3374] focus:outline-none" href="#signup">Get Started</a>
<button aria-label="Open menu" className="md:hidden rounded p-2 hover:bg-[#EB3374]/10">
<i className="ph ph-list text-2xl"></i>
</button>
</div>
</nav>
</header>

<section className="pt-28 md:pt-36 pb-14 bg-gradient-to-br from-[#22272F] to-[#800080] dark:from-[#281347] dark:to-[#800080] text-white relative overflow-hidden">

<div className="absolute right-0 top-0 w-2/3 md:w-1/3 opacity-30 pointer-events-none z-0">
<img alt="Abstract Illustration" className="w-full" src="https://assets-global.website-files.com/5d1bc4077e6e7e4c1e4a6c22/61d6f3e1fca7be0a4e1f5e99_clickup-hero-abstract.svg" />
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-tr from-[#EB3374] to-white text-transparent bg-clip-text mb-4 animate-fadeIn">Smart Accounting, <span className="text-[#EB3374]">Simplified</span> for You</h1>
<p className="text-lg md:text-xl font-secondary text-white/85 max-w-2xl mb-8 animate-fadeIn delay-150">Refrens empowers young professionals with intuitive, automated accounting tools. Save time, gain clarity, and grow your business with one click.</p>
<a className="rounded-md px-8 py-3 bg-gradient-to-tr from-[#800080] to-[#EB3374] text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-200 hover:shadow-pink-400/40 focus:ring-2 focus:ring-[#EB3374] focus:outline-none animate-fadeIn delay-300" href="#signup">Get Started Free</a>

<div className="mt-12 w-full flex justify-center animate-fadeIn delay-400">
<img alt="Accounting Dashboard Illustration" className="w-11/12 md:w-3/4 lg:w-2/3 rounded-xl shadow-lg" src="https://assets-global.website-files.com/5d1bc4077e6e7e4c1e4a6c22/61d6f3e1fca7be0a4e1f5e99_clickup-hero-abstract.svg" />
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16" id="features">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose <span className="text-[#800080]">Refrens?</span></h2>
<p className="text-lg font-secondary text-[#555] dark:text-white/80">Powerful, easy-to-use tools for every step of your accounting journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition transform duration-200 group animate-fadeIn delay-150">
<div className="bg-gradient-to-br from-[#800080] to-[#EB3374] p-4 rounded-full mb-4">
<i className="ph ph-lightning text-white text-3xl"></i>
</div>
<h3 className="font-bold text-xl mb-2">Automated Invoicing</h3>
<p className="font-secondary text-[#555] dark:text-white/70">Create, send, and track professional invoices in seconds—no manual effort needed.</p>
</div>

<div className="bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition transform duration-200 group animate-fadeIn delay-300">
<div className="bg-gradient-to-br from-[#800080] to-[#EB3374] p-4 rounded-full mb-4">
<i className="ph ph-chart-bar text-white text-3xl"></i>
</div>
<h3 className="font-bold text-xl mb-2">Real-Time Analytics</h3>
<p className="font-secondary text-[#555] dark:text-white/70">Visualize your finances with interactive dashboards and actionable insights.</p>
</div>

<div className="bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition transform duration-200 group animate-fadeIn delay-450">
<div className="bg-gradient-to-br from-[#800080] to-[#EB3374] p-4 rounded-full mb-4">
<i className="ph ph-shield-check text-white text-3xl"></i>
</div>
<h3 className="font-bold text-xl mb-2">Bank-Grade Security</h3>
<p className="font-secondary text-[#555] dark:text-white/70">Your data is encrypted and protected with industry-leading security protocols.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8 justify-center mt-12">

<div className="bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition transform duration-200 group animate-fadeIn delay-600">
<div className="bg-gradient-to-br from-[#800080] to-[#EB3374] p-4 rounded-full mb-4">
<i className="ph ph-user-plus text-white text-3xl"></i>
</div>
<h3 className="font-bold text-xl mb-2">Multi-User Collaboration</h3>
<p className="font-secondary text-[#555] dark:text-white/70">Invite your team and accountants to collaborate seamlessly and securely.</p>
</div>

<div className="bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition transform duration-200 group animate-fadeIn delay-750">
<div className="bg-gradient-to-br from-[#800080] to-[#EB3374] p-4 rounded-full mb-4">
<i className="ph ph-cloud-arrow-down text-white text-3xl"></i>
</div>
<h3 className="font-bold text-xl mb-2">Cloud Access Anywhere</h3>
<p className="font-secondary text-[#555] dark:text-white/70">Access your accounts from any device, anytime, with secure cloud syncing.</p>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-br from-[#800080]/10 to-[#EB3374]/5 dark:from-[#22272F]/80 dark:to-[#800080]/30" id="testimonials">
<div className="max-w-5xl mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Trusted by <span className="text-[#800080]">thousands</span> of professionals</h2>
<div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">

<blockquote className="flex-1 bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 text-center animate-fadeIn delay-150">
<p className="text-lg italic font-secondary mb-4">“Refrens has made invoicing and expense tracking effortless. I can focus on my work instead of paperwork.”</p>
<div className="flex flex-col items-center">
<img alt="Testimonial User" className="w-12 h-12 rounded-full mb-2" src="https://randomuser.me/api/portraits/men/32.jpg" />
<span className="font-bold">Amit K.</span>
<span className="text-[#800080] font-secondary text-sm">Freelance Designer</span>
</div>
</blockquote>

<blockquote className="flex-1 bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 text-center animate-fadeIn delay-300">
<p className="text-lg italic font-secondary mb-4">“The real-time analytics help me make smarter decisions for my growing startup.”</p>
<div className="flex flex-col items-center">
<img alt="Testimonial User" className="w-12 h-12 rounded-full mb-2" src="https://randomuser.me/api/portraits/women/68.jpg" />
<span className="font-bold">Priya S.</span>
<span className="text-[#800080] font-secondary text-sm">Startup Founder</span>
</div>
</blockquote>

<blockquote className="flex-1 bg-white dark:bg-[#281347] rounded-2xl shadow-md p-8 text-center animate-fadeIn delay-450">
<p className="text-lg italic font-secondary mb-4">“Collaboration is a breeze. My accountant and I work together seamlessly on Refrens.”</p>
<div className="flex flex-col items-center">
<img alt="Testimonial User" className="w-12 h-12 rounded-full mb-2" src="https://randomuser.me/api/portraits/men/42.jpg" />
<span className="font-bold">Rahul T.</span>
<span className="text-[#800080] font-secondary text-sm">Small Business Owner</span>
</div>
</blockquote>
</div>

<div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-80 animate-fadeIn delay-700">
<img alt="Microsoft" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />
<img alt="Google" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Google_2015_logo.svg" />
<img alt="Apple" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />
<img alt="Spotify" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_vertical_black.svg" />
</div>
</div>
</section>

<section className="py-16 max-w-4xl mx-auto px-4" id="pricing">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Simple, Transparent Pricing</h2>
<div className="bg-white dark:bg-[#281347] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row justify-between items-center gap-8 animate-fadeIn delay-200">
<div>
<div className="flex items-end gap-2">
<span className="text-4xl font-bold bg-gradient-to-tr from-[#800080] to-[#EB3374] bg-clip-text text-transparent">$0</span>
<span className="text-lg font-secondary text-[#555] dark:text-white/70">per month</span>
</div>
<p className="font-secondary text-[#22272F] dark:text-white/70 mt-2">Unlimited invoices, analytics, and team members. Upgrade only if you need premium support.</p>
</div>
<a className="rounded-md px-8 py-3 bg-gradient-to-tr from-[#800080] to-[#EB3374] text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-200 hover:shadow-pink-400/40 focus:ring-2 focus:ring-[#EB3374] focus:outline-none" href="#signup">Sign Up Free</a>
</div>
<p className="text-center text-sm text-[#555] dark:text-white/60 mt-4 font-secondary">No credit card required. Cancel anytime.</p>
</section>

<footer className="fixed md:hidden left-0 bottom-0 w-full bg-gradient-to-tr from-[#800080] to-[#EB3374] shadow-lg flex justify-center items-center p-4 z-40">
<a className="w-full rounded-md px-6 py-3 bg-white text-[#800080] text-lg font-bold shadow-md hover:bg-[#EB3374] hover:text-white transition-all duration-200 text-center focus:ring-2 focus:ring-white focus:outline-none" href="#signup">Get Started Free</a>
</footer>

<footer className="relative z-10 bg-[#22272F] dark:bg-[#281347] text-white py-10 mt-28">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 mb-6 md:mb-0">
<img alt="Refrens Logo" className="h-8 w-8 rounded-md bg-gradient-to-tr from-[#800080] to-[#EB3374] p-1" src="https://refrens.com/images/logo-dark.svg" />
<span className="text-lg font-bold">Refrens</span>
</div>
<nav className="flex gap-8 mb-6 md:mb-0">
<a className="hover:text-[#EB3374] transition-colors" href="#">About</a>
<a className="hover:text-[#EB3374] transition-colors" href="#contact">Contact</a>
<a className="hover:text-[#EB3374] transition-colors" href="#">Privacy Policy</a>
</nav>
<div className="flex gap-4">
<a aria-label="Twitter" className="hover:text-[#EB3374]" href="https://twitter.com/" rel="noopener" target="_blank">
<i className="ph ph-twitter-logo text-2xl"></i>
</a>
<a aria-label="Facebook" className="hover:text-[#EB3374]" href="https://facebook.com/" rel="noopener" target="_blank">
<i className="ph ph-facebook-logo text-2xl"></i>
</a>
<a aria-label="LinkedIn" className="hover:text-[#EB3374]" href="https://linkedin.com/" rel="noopener" target="_blank">
<i className="ph ph-linkedin-logo text-2xl"></i>
</a>
</div>
</div>
<div className="text-center text-sm text-white/60 mt-6 font-secondary">© 2024 Refrens. All rights reserved.</div>
</footer>



    </>
  );
}
