import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      (function () {
        const toggle = document.getElementById("menuToggle");
        const menu = document.getElementById("mobileMenu");
        const backdrop = document.getElementById("menuBackdrop");

        if (!toggle || !menu) return;

        function openMenu() {
          menu.classList.add("is-open");
          document.body.classList.add("no-scroll");
          if (backdrop) backdrop.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");
        }

        function closeMenu() {
          menu.classList.remove("is-open");
          document.body.classList.remove("no-scroll");
          if (backdrop) backdrop.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }

        function toggleMenu() {
          menu.classList.contains("is-open") ? closeMenu() : openMenu();
        }

        toggle.addEventListener("click", toggleMenu);

        // Close if you tap the backdrop
        if (backdrop) backdrop.addEventListener("click", closeMenu);

        // Close when a menu link is clicked
        menu.addEventListener("click", (e) => {
          const link = e.target.closest("a");
          if (link) closeMenu();
        });

        // Close on ESC (nice for accessibility)
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") closeMenu();
        });
      })();

      // Scroll Reveal Logic (Preserved)
      document.addEventListener('DOMContentLoaded', () => {
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

          const revealElements = document.querySelectorAll('.reveal');
          revealElements.forEach(el => observer.observe(el));
      });
    


        (function () {
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
          if (!isMobile) return;
        
          const menu = document.getElementById("mobileMenu");
          if (!menu) return;
        
          // Map anchor clicks to real pages
          const routes = {
            "#home": "/",
            "#pricing": "/pricing",
            "#prices": "/pricing",
            "#about": "/about",
            "#audit": "/audit",
            "#contact": "/contact"
          };
        
          menu.addEventListener("click", function (e) {
            const link = e.target.closest("a");
            if (!link) return;
        
            const href = link.getAttribute("href");
            if (!href) return;
        
            if (routes[href]) {
              e.preventDefault();
              window.location.href = routes[href];
            }
          });
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="menuBackdrop"></div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2.5 group hover:opacity-80 transition-opacity" href="#home">
<div className="w-8 h-8 bg-stone-900 text-stone-50 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
<iconify-icon icon="lucide:layout-grid" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">Caledonia</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors duration-300" href="#home">Home</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="/pricing">Pricing</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="/audit">Free Audit</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="/about">About</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="/faqs">FAQs</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="px-4 py-2 bg-stone-900 text-stone-50 text-xs font-medium rounded-lg hover:bg-stone-800 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95" href="#contact">
                    Book Now
                </a>
</div>

<button aria-expanded="false" className="md:hidden hover:text-stone-900 transition-colors active:scale-95 text-stone-600 pt-2 pr-2 pb-2 pl-2" id="menuToggle">
<iconify-icon className="" height="24" icon="lucide:menu" strokeWidth="2" style={{color: 'rgb(28, 25, 23)'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="flex flex-col h-full bg-stone-50" id="mobileMenu">

<div className="flex items-center justify-between px-6 h-16 border-b border-stone-200/60 bg-stone-50">
<a className="flex items-center gap-2.5" href="#home">
<div className="w-8 h-8 bg-stone-900 text-stone-50 rounded-lg flex items-center justify-center">
<iconify-icon icon="lucide:layout-grid" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">Caledonia</span>
</a>

<button className="p-2 text-stone-500 hover:text-stone-900 transition-colors active:scale-90 bg-stone-100 rounded-full" onclick="document.getElementById('menuToggle').click()">
<iconify-icon icon="lucide:x" strokeWidth="2" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto px-6 py-8">
<div className="flex flex-col gap-6">
<div className="space-y-1">
<p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4 pl-1">Navigation</p>
<a className="menu-link block text-2xl font-medium text-stone-900 hover:text-stone-600 transition-colors py-2" href="#home">Home</a>
<a className="menu-link block text-2xl font-medium text-stone-900 hover:text-stone-600 transition-colors py-2" href="#pricing">Pricing</a>
<a className="menu-link block text-2xl font-medium text-stone-900 hover:text-stone-600 transition-colors py-2" href="#audit">Free Audit</a>
<a className="menu-link block text-2xl font-medium text-stone-900 hover:text-stone-600 transition-colors py-2" href="#about">About</a>
<a className="menu-link block text-2xl font-medium text-stone-900 hover:text-stone-600 transition-colors py-2" href="#faqs">FAQs</a>
</div>
<div className="mt-8 pt-8 border-t border-stone-200">
<p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4 pl-1">Get in touch</p>
<a className="block text-lg text-stone-600 hover:text-stone-900 mb-2" href="mailto:hello@caledonia.com">hello@caledonia.com</a>
<p className="text-stone-500 text-sm">Edinburgh, Scotland</p>
</div>
</div>
</div>

<div className="p-6 border-t border-stone-200 bg-stone-50 safe-pb">
<a className="menu-link w-full flex items-center justify-center gap-2 py-4 bg-stone-900 text-stone-50 text-base font-medium rounded-xl shadow-lg active:scale-95 transition-transform" href="#audit">
                Book Free Audit
                <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl fade-in-up">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-stone-900 leading-[1.05] mb-6">
                    Simple websites.<br/>
                    Real business results.
                </h1>
<p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg mb-8 font-light">
                    Modern websites and AI business assistants for Edinburgh small businesses.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center hover:bg-stone-800 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group text-sm font-medium text-stone-50 bg-stone-900 rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" href="#contact">
                        Get a Free Website Audit
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform duration-300" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium text-stone-700 bg-white border-stone-200 border rounded-xl pt-3.5 pr-6 pb-3.5 pl-6" href="#process">
                        See How It Works
                    </a>
</div>
</div>

<div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-stone-200 border border-stone-100 fade-in-up delay-200 group">

<img alt="Edinburgh Coffee Shop Interior" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 will-change-transform" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-80 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-stone-100 shadow-lg z-20 flex items-start gap-4 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
<div className="h-10 w-10 bg-emerald-50 rounded-full flex-shrink-0 flex items-center justify-center text-emerald-600 border border-emerald-100">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-0.5">AI Assistant</div>
<div className="text-sm font-medium text-stone-900 leading-snug">"I've booked that table for you for Friday at 7pm."</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-200" id="problems">
<div className="max-w-7xl mx-auto">
<div className="max-w-xl mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">The trouble with local digital.</h2>
<p className="text-stone-500 text-lg leading-relaxed">Running a business is hard enough without worrying about your website.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group reveal delay-100-trans">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 mb-5 group-hover:bg-stone-900 group-hover:text-stone-50 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-md">
<iconify-icon icon="lucide:monitor-off" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-stone-900 mb-2">Outdated websites</h3>
<p className="text-sm text-stone-500 leading-relaxed">Sites that look like they were built in 2010. They don't load on mobile and scare customers away.</p>
</div>

<div className="group reveal delay-200-trans">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 mb-5 group-hover:bg-stone-900 group-hover:text-stone-50 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-md">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-stone-900 mb-2">Missed enquiries</h3>
<p className="text-sm text-stone-500 leading-relaxed">Customers message when you are closed or busy. Without an instant reply, they go elsewhere.</p>
</div>

<div className="group reveal delay-300-trans">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 mb-5 group-hover:bg-stone-900 group-hover:text-stone-50 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-md">
<iconify-icon icon="lucide:receipt" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-stone-900 mb-2">Complicated pricing</h3>
<p className="text-sm text-stone-500 leading-relaxed">Confusing retainers, hidden hosting fees, and contracts you can't get out of.</p>
</div>

<div className="group reveal">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 mb-5 group-hover:bg-stone-900 group-hover:text-stone-50 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-md">
<iconify-icon icon="lucide:hourglass" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-stone-900 mb-2">Long build times</h3>
<p className="text-sm text-stone-500 leading-relaxed">Agencies that take months to launch a simple 5-page site while your business waits.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-12 reveal">What we do.</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full reveal delay-100-trans group cursor-default">
<div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-200 transition-colors">
<iconify-icon icon="lucide:layout" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">One-off website builds</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        A clean, high-performance website that you own 100%. Built for mobile first, optimized for Google, and designed to convert.
                    </p>
</div>

<div className="bg-stone-900 rounded-2xl p-8 border border-stone-800 shadow-xl flex flex-col h-full relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-900/20 transition-all duration-500 reveal delay-200-trans cursor-default">
<div className="absolute top-0 right-0 p-24 bg-stone-800 rounded-full blur-3xl opacity-20 -mr-10 -mt-10 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center text-white mb-6 border border-stone-700 group-hover:border-stone-600 transition-colors">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-3">
<h3 className="text-xl font-semibold text-white tracking-tight">AI Business Assistant</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 uppercase tracking-wide">30-Day Free Trial</span>
</div>
<p className="text-stone-400 text-sm leading-relaxed">
                            A smart chatbot trained on your business data. It answers FAQs and takes booking details 24/7, so you never miss a lead.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full reveal delay-300-trans group cursor-default">
<div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-200 transition-colors">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Optional website care</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Don't want to manage updates? We offer a simple monthly package for hosting, security, and small content changes.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-200">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-12 reveal">Who we work with.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default reveal delay-100-trans shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Tradesperson working" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold text-white">Trades &amp; Services</h3>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm text-white group-hover:bg-white/20 transition-colors">
<iconify-icon icon="lucide:hammer" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default reveal delay-200-trans shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Cafe interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold text-white">Cafés &amp; Hospitality</h3>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm text-white group-hover:bg-white/20 transition-colors">
<iconify-icon icon="lucide:coffee" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default reveal delay-300-trans shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Gym weights" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold text-white">Gyms &amp; Wellness</h3>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm text-white group-hover:bg-white/20 transition-colors">
<iconify-icon icon="lucide:dumbbell" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">How it works.</h2>
<p className="text-stone-500">Straightforward from start to finish.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-stone-200 -z-10 reveal"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative flex flex-col items-center text-center md:text-center reveal delay-100-trans">
<div className="w-20 h-20 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-stone-900 shadow-sm mb-6 z-10 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:border-stone-300">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">1. Free website audit</h3>
<p className="text-stone-500 text-sm leading-relaxed px-2">
                            We review your current setup and identify opportunities for growth.
                        </p>
</div>

<div className="relative flex flex-col items-center text-center md:text-center reveal delay-200-trans">
<div className="w-20 h-20 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-stone-900 shadow-sm mb-6 z-10 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:border-stone-300">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">2. One-off website build</h3>
<p className="text-stone-500 text-sm leading-relaxed px-2">
                            We design and build a fast, modern site tailored to your brand.
                        </p>
</div>

<div className="relative flex flex-col items-center text-center md:text-center reveal delay-300-trans">
<div className="w-20 h-20 bg-stone-900 border border-stone-800 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 z-10 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-stone-900/20">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">3. 30-day AI assistant trial</h3>
<p className="text-stone-500 text-sm leading-relaxed px-2">
                            We install the AI. You test it risk-free. See real leads come in.
                        </p>
</div>

<div className="relative flex flex-col items-center text-center md:text-center reveal">
<div className="w-20 h-20 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-stone-900 shadow-sm mb-6 z-10 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:border-stone-300">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">4. You choose what to keep</h3>
<p className="text-stone-500 text-sm leading-relaxed px-2">
                            Keep the AI if it works. Keep the site always. No lock-in contracts.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-5xl mx-auto bg-stone-900 rounded-[2rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl reveal">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-700 via-stone-900 to-stone-950 transition-transform duration-1000 hover:scale-105"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 max-w-2xl leading-[1.1]">
                    See how your website could work harder for your business.
                </h2>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="hover:bg-stone-100 transition-all duration-300 shadow-stone-900/50 flex group hover:scale-105 active:scale-95 font-semibold text-stone-900 bg-white rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/audit'">
    Book Your Free Website Audit
    <iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors duration-300" icon="lucide:calendar-days" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity" href="#home">
<div className="w-6 h-6 bg-stone-900 text-stone-50 rounded flex items-center justify-center">
<iconify-icon icon="lucide:layout-grid" width="12"></iconify-icon>
</div>
<span className="font-semibold text-stone-900 tracking-tight">Caledonia</span>
</a>
<p className="text-stone-500 text-sm leading-relaxed">
                        Helping Edinburgh's small businesses grow through clean design and smart automation.
                    </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors duration-300" href="#">Web Design</a></li>
<li><a className="hover:text-stone-900 transition-colors duration-300" href="#">AI Automation</a></li>
<li><a className="hover:text-stone-900 transition-colors duration-300" href="#">Website Audits</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors duration-300" href="#">About Us</a></li>
<li><a className="hover:text-stone-900 transition-colors duration-300" href="#">Contact</a></li>
<li><a className="hover:text-stone-900 transition-colors duration-300" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 Caledonia Digital Studios. Made with ♥ in Edinburgh.</p>
<div className="flex gap-6">
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors duration-300 hover:scale-110" icon="lucide:twitter" width="16"></iconify-icon>
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors duration-300 hover:scale-110" icon="lucide:instagram" width="16"></iconify-icon>
<iconify-icon className="hover:text-stone-900 cursor-pointer transition-colors duration-300 hover:scale-110" icon="lucide:linkedin" width="16"></iconify-icon>
</div>
</div>
</div>
</footer>




    </>
  );
}
