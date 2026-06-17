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



{
"@context": "https://schema.org",
"@type": "Organization",
"name": "Simplyreset",
"url": "index.html",
"image": "https://chqsjvgwaqzrfzeppaaa.supabase.co/storage/v1/object/public/templates/projects/e5c0e536-52a1-40ef-b0e2-b7fec15c12ba/39a8bd94-07d0-4cc9-9dfd-badf2b724018/background-hero-bg-1766467740746.png",
"contactPoint": {
"@type": "ContactPoint",
"telephone": "+447825888888",
"contactType": "customer service",
"email": "bookings@simplyreset.co"
}
}



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            // Small timeout to allow display:block to apply before transform
            setTimeout(() => {
                mobileMenu.classList.toggle('open');
            }, 10);
            
            if (mobileMenu.classList.contains('hidden')) {
                 document.body.style.overflow = '';
            } else {
                 document.body.style.overflow = 'hidden';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        // Form Handler
        async function handleSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'Sending...';
            
            try {
                const data = Object.fromEntries(new FormData(form));
                const res = await fetch('https://bondstudios.ai/api/form-submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                if (res.ok) {
                    alert('Thank you! You are subscribed.');
                    form.reset();
                } else {
                    throw new Error('Failed');
                }
            } catch (err) {
                alert('Failed to send. Please try again.');
            } finally {
                btn.disabled = false;
                btn.textContent = originalText;
            }
        }

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        // Sticky Header Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('h-20', 'h-16');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('h-16', 'h-20');
            }
        });
        
        // Editor Helper (Required)
        (function() {
            const isPreviewMode = window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1') || window.parent !== window;
            if (!isPreviewMode) return;
            document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (link && (link.href.includes('#linkedin') || link.href.includes('#instagram') || link.href.includes('#twitter') || link.href.includes('#facebook') || link.href.includes('#youtube') || link.href === '#')) {
                e.preventDefault();
                alert('Configure this link in the editor');
                }
            });
        })();
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a href="index.html">
<img alt="Simplyreset logo" className="h-10 w-auto" src="https://chqsjvgwaqzrfzeppaaa.supabase.co/storage/v1/object/public/templates/projects/e5c0e536-52a1-40ef-b0e2-b7fec15c12ba/39a8bd94-07d0-4cc9-9dfd-badf2b724018/logo-existing-0-1766467743057.svg"/>
</a>
</div>

<nav className="hidden lg:flex space-x-8 items-center">
<a className="text-sm font-semibold text-[#1A4B91] hover:text-[#00B6E6] transition-colors" href="index.html">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#00B6E6] transition-colors" href="pemf-devices-shop.html">Shop Devices</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#00B6E6] transition-colors" href="hyper-pulsed-emf-session.html">Hyper PEMF Session</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#00B6E6] transition-colors" href="pemf-and-hmf-therapy.html">Therapy Info</a>
<div className="flex items-center space-x-4 ml-6">
<a className="px-5 py-2.5 rounded-full border border-[#00B6E6] text-[#00B6E6] text-sm font-semibold hover:bg-[#00B6E6]/5 transition-colors" href="pemf-devices-shop.html">
                            Buy Products
                        </a>
<a className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00B6E6] to-[#0091FF] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00B6E6]/30 transition-all transform hover:-translate-y-0.5" href="pemf-therapy-booking.html">
                            Book Treatment
                        </a>
</div>
</nav>

<div className="flex items-center lg:hidden">
<button className="p-2 rounded-md text-gray-600 hover:text-[#00B6E6] focus:outline-none" id="menu-btn">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-[60] bg-white h-screen w-screen flex flex-col pt-24 px-6 overflow-y-auto" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-gray-500" id="close-menu-btn">
<i className="h-8 w-8" data-lucide="x"></i>
</button>
<nav className="flex flex-col space-y-6 text-center">
<a className="text-xl font-semibold text-[#1A4B91]" href="index.html">Home</a>
<a className="text-xl font-medium text-gray-800" href="pemf-devices-shop.html">Shop Devices</a>
<a className="text-xl font-medium text-gray-800" href="hyper-pulsed-emf-session.html">Hyper PEMF Session</a>
<a className="text-xl font-medium text-gray-800" href="pemf-and-hmf-therapy.html">Therapy Info</a>
<a className="text-xl font-medium text-gray-800" href="pemf-therapy-booking.html">Book Now</a>
<hr className="border-gray-100"/>
<div className="flex flex-col gap-4 pt-4">
<a className="w-full py-4 rounded-xl border border-[#00B6E6] text-[#00B6E6] font-semibold" href="pemf-devices-shop.html">Buy Products</a>
<a className="w-full py-4 rounded-xl bg-[#00B6E6] text-white font-semibold" href="pemf-therapy-booking.html">Book Treatment</a>
</div>
</nav>
</div>
<main>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Medical facility background" className="w-full h-full object-cover" src="https://chqsjvgwaqzrfzeppaaa.supabase.co/storage/v1/object/public/templates/projects/e5c0e536-52a1-40ef-b0e2-b7fec15c12ba/39a8bd94-07d0-4cc9-9dfd-badf2b724018/background-hero-bg-1766467740746.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1A4B91]/90 via-[#1A4B91]/70 to-[#00B6E6]/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 animate-on-scroll">
                    High speed blood cell regeneration to quickly relieve pain
                </h1>
<p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-on-scroll delay-1">
                    Treat various ailments using FDA-approved Hyper Pulsed Electromagnetic Field therapy (Hyper PEMF).
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-2">
<a className="px-8 py-4 rounded-full bg-[#FF6B33] hover:bg-[#FF4D00] text-white font-semibold shadow-lg shadow-[#FF6B33]/30 transition-all transform hover:-translate-y-1" href="pemf-and-hmf-therapy.html">
                        What is Hyper PEMF?
                    </a>
<a className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white hover:text-[#1A4B91] transition-all" href="pemf-therapy-booking.html">
                        Book a Session
                    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/70">
<i className="w-8 h-8" data-lucide="arrow-down"></i>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold text-[#1A4B91] tracking-tight mb-6">
                            Discover the physical and emotional benefits.
                        </h2>
<div className="prose prose-lg text-gray-600 mb-8">
<p className="mb-4">
                                Finally stop the suffering and discomfort in your life. We measure the frequency of your organs and analyse your blood, nutrition, and lifestyle to relieve pain, and accelerate healing.
                            </p>
<p>
                                If you suffer from pain, joint inflammation, high blood pressure, cholesterol, or even sleep and anxiety disorders, Hyper Magnetic Field therapy can be used to quickly stimulate blood cell regeneration and successfully treat your ailment.
                            </p>
</div>
<div className="flex items-center space-x-2 text-[#00B6E6] font-semibold">
<i className="w-5 h-5" data-lucide="check-circle"></i>
<span>10x more effective than standard PEMF systems</span>
</div>
</div>
<div className="relative animate-on-scroll delay-1">
<div className="absolute -inset-4 bg-[#00B6E6]/10 rounded-2xl transform rotate-2"></div>
<img alt="Knee injury treatment" className="relative rounded-xl shadow-2xl w-full object-cover h-[400px]" src="https://www.simplyreset.co/wp-content/uploads/2023/08/knee-injury.jpg"/>
<div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
<p className="text-sm font-semibold text-[#1A4B91]">"FDA approved since 1979 for non-union fractures."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F5]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<span className="text-[#00B6E6] font-semibold tracking-wider uppercase text-sm">Our Devices</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-4">Hyper PEMF Products</h2>
<p className="text-gray-600 max-w-2xl mx-auto">For improved wellbeing and healing in the clinic or at home.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-on-scroll delay-1 border border-gray-100">
<div className="p-8 bg-gray-50 flex items-center justify-center h-64 relative">
<img alt="Regenerate MAS 100" className="max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500" src="https://www.simplyreset.co/wp-content/uploads/2023/09/tesla-4000-portable-robust-pemf-device.png"/>
</div>
<div className="p-8">
<h3 className="text-xl font-bold text-[#1A4B91] mb-2">Regenerate MAS 100</h3>
<p className="text-sm text-gray-500 mb-6 uppercase tracking-wide">Portable Desktop Device</p>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="zap"></i> Field strength: up to 100 Gauss</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="activity"></i> Sine pure frequency: 1-9999 Hz</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="clock"></i> 94 pre-set programs</li>
</ul>
<a className="block w-full text-center py-3 rounded-lg border-2 border-[#1A4B91] text-[#1A4B91] font-semibold hover:bg-[#1A4B91] hover:text-white transition-colors" href="pemf-devices-shop.html">
                                View Details &amp; Buy
                            </a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-on-scroll delay-2 border border-gray-100 relative">
<div className="absolute top-4 right-4 bg-[#FF6B33] text-white text-xs font-bold px-3 py-1 rounded-full z-10">BEST SELLER</div>
<div className="p-8 bg-gray-50 flex items-center justify-center h-64 relative">
<img alt="TESLA 20000" className="max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500" src="https://www.simplyreset.co/wp-content/uploads/2023/09/simply-reset-tesla-20000-executive-desktop-pemf-device.png"/>
</div>
<div className="p-8">
<h3 className="text-xl font-bold text-[#1A4B91] mb-2">Regenerate TESLA 20000</h3>
<p className="text-sm text-gray-500 mb-6 uppercase tracking-wide">Executive Desktop Device</p>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="zap"></i> Strength up to: 20,000 Gauss</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="layers"></i> Double butterfly coil included</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="user-check"></i> Clinician support included</li>
</ul>
<a className="block w-full text-center py-3 rounded-lg bg-[#1A4B91] text-white font-semibold hover:bg-[#0091FF] transition-colors shadow-lg shadow-blue-900/20" href="pemf-devices-shop.html">
                                View Details &amp; Buy
                            </a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-on-scroll delay-3 border border-gray-100">
<div className="p-8 bg-gray-50 flex items-center justify-center h-64 relative">
<img alt="TESLA 4000" className="max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500" src="https://www.simplyreset.co/wp-content/uploads/2023/09/simply-reset-portable-desktop-pemf-device.png"/>
</div>
<div className="p-8">
<h3 className="text-xl font-bold text-[#1A4B91] mb-2">Regenerate TESLA 4000</h3>
<p className="text-sm text-gray-500 mb-6 uppercase tracking-wide">Robust Traveller Device</p>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="zap"></i> Strength up to: 3990 Gauss</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="briefcase"></i> Industrial travel case</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-[#FF6B33] mt-0.5" data-lucide="map"></i> Ailment/frequency map access</li>
</ul>
<a className="block w-full text-center py-3 rounded-lg border-2 border-[#1A4B91] text-[#1A4B91] font-semibold hover:bg-[#1A4B91] hover:text-white transition-colors" href="pemf-devices-shop.html">
                                View Details &amp; Buy
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A4B91] text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 animate-on-scroll">Simply Regenerate your blood cells back to life</h2>
<div className="prose prose-lg prose-invert mx-auto mb-10 text-blue-100 animate-on-scroll delay-1">
<p className="mb-6">
                        Healthy blood cells are akin to millions of nano magnets, holding their charge to deliver oxygen. 
                        Pain and ailments cause cells to lose charge and stick together (Rouleaux effect).
                    </p>
<p className="font-semibold text-white text-xl">
                        We GUARANTEE to visually reverse the effects of tired, sticky blood cells.
                    </p>
</div>
<a className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#1A4B91] font-bold hover:bg-[#00B6E6] hover:text-white transition-all transform hover:-translate-y-1 animate-on-scroll delay-2" href="pemf-and-hmf-therapy.html">
                    Learn what your blood can tell you
                    <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Treatable Ailments</h2>
<p className="text-gray-600">A frequency and therapy for most ailments.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="heart-pulse"></i>
</div>
<h4 className="font-semibold text-gray-800">Wellbeing</h4>
</div>

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll delay-1">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="bone"></i>
</div>
<h4 className="font-semibold text-gray-800">Orthopaedic</h4>
</div>

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll delay-2">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="cloud-rain"></i>
</div>
<h4 className="font-semibold text-gray-800">Anxiety</h4>
</div>

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll delay-3">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="moon"></i>
</div>
<h4 className="font-semibold text-gray-800">Insomnia</h4>
</div>

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="frown"></i>
</div>
<h4 className="font-semibold text-gray-800">Pain</h4>
</div>

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll delay-1">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="activity"></i>
</div>
<h4 className="font-semibold text-gray-800">Muscles &amp; Joints</h4>
</div>

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll delay-2">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="droplet"></i>
</div>
<h4 className="font-semibold text-gray-800">Blood Pressure</h4>
</div>

<div className="p-6 rounded-xl bg-gray-50 hover:bg-[#00B6E6]/10 transition-colors text-center group animate-on-scroll delay-3">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#00B6E6]" data-lucide="battery-low"></i>
</div>
<h4 className="font-semibold text-gray-800">Low Energy</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A4B91] mb-12 animate-on-scroll">Success Stories</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start animate-on-scroll delay-1">
<img alt="Mick" className="w-20 h-20 rounded-full object-cover border-4 border-[#00B6E6]/20" src="https://www.simplyreset.co/wp-content/uploads/2023/08/avatar-mick_simply-reset.png"/>
<div>
<h4 className="font-bold text-lg text-[#333333]">Mick Goodwin</h4>
<p className="text-sm text-[#00B6E6] font-medium mb-3">Multiple Fractures</p>
<p className="text-gray-600 mb-4">"Hyper Magnetic Field therapy helped give Mick full movement in his joints."</p>
<a className="text-sm font-semibold text-[#1A4B91] flex items-center hover:underline" href="https://www.youtube.com/embed/x9Q0hX2tBxs?si=cwkIk6AfVNJU34pZ" target="_blank">
<i className="w-4 h-4 mr-2" data-lucide="play-circle"></i> Watch Testimonial
                            </a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start animate-on-scroll delay-2">
<img alt="David" className="w-20 h-20 rounded-full object-cover border-4 border-[#00B6E6]/20" src="https://www.simplyreset.co/wp-content/uploads/2023/08/avatar-david_simply-reset.png"/>
<div>
<h4 className="font-bold text-lg text-[#333333]">David Fraser</h4>
<p className="text-sm text-[#00B6E6] font-medium mb-3">Spinal Cord Injury</p>
<p className="text-gray-600 mb-4">"Pressure Sores healed in 2 weeks using Hyper Magnetic Field therapy."</p>
<a className="text-sm font-semibold text-[#1A4B91] flex items-center hover:underline" href="#">
<i className="w-4 h-4 mr-2" data-lucide="play-circle"></i> Watch Testimonial
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-6">

<div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow animate-on-scroll">
<div className="w-12 h-12 bg-[#00B6E6]/10 text-[#00B6E6] rounded-lg flex items-center justify-center mx-auto mb-6">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="font-bold text-lg mb-2">Home Visits</h3>
<p className="text-sm text-gray-600 mb-6">Relax in the comfort of your home whilst we treat the cause.</p>
<a className="text-[#1A4B91] font-semibold text-sm hover:underline" href="pemf-therapy-booking.html">Book Visit →</a>
</div>

<div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow animate-on-scroll delay-1">
<div className="w-12 h-12 bg-[#00B6E6]/10 text-[#00B6E6] rounded-lg flex items-center justify-center mx-auto mb-6">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<h3 className="font-bold text-lg mb-2">Visit Clinic</h3>
<p className="text-sm text-gray-600 mb-6">Come to one of our fully-equipped Essex or Surrey clinics.</p>
<a className="text-[#1A4B91] font-semibold text-sm hover:underline" href="pemf-therapy-booking.html">Book Appt →</a>
</div>

<div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow animate-on-scroll delay-2">
<div className="w-12 h-12 bg-[#00B6E6]/10 text-[#00B6E6] rounded-lg flex items-center justify-center mx-auto mb-6">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
<h3 className="font-bold text-lg mb-2">Hire or Buy</h3>
<p className="text-sm text-gray-600 mb-6">We supply these life-changing products to the end user.</p>
<a className="text-[#1A4B91] font-semibold text-sm hover:underline" href="pemf-devices-shop.html">Shop Now →</a>
</div>

<div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow animate-on-scroll delay-3">
<div className="w-12 h-12 bg-[#00B6E6]/10 text-[#00B6E6] rounded-lg flex items-center justify-center mx-auto mb-6">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="font-bold text-lg mb-2">For Clinics</h3>
<p className="text-sm text-gray-600 mb-6">Spas and wellness pros: offer this service to your clients.</p>
<a className="text-[#1A4B91] font-semibold text-sm hover:underline" href="pemf-and-hmf-therapy.html">Learn More →</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F5F5F5] border-t border-gray-200">
<div className="max-w-4xl mx-auto px-4 text-center">
<h3 className="text-2xl font-bold text-[#333333] mb-4">Sign up for our newsletter</h3>
<p className="text-gray-600 mb-8">Don’t miss out on news and tips from Simply Regenerate</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onsubmit="handleSubmit(event)">
<input name="projectId" type="hidden" value="39a8bd94-07d0-4cc9-9dfd-badf2b724018"/>
<input className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B6E6] focus:border-transparent outline-none" name="email" placeholder="Your email address" required="" type="email"/>
<button className="px-6 py-3 bg-[#1A4B91] text-white font-semibold rounded-lg hover:bg-[#0091FF] transition-colors" type="submit">Subscribe</button>
</form>
</div>
</section>
</main>

<footer className="bg-[#333333] text-gray-300 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<img alt="Simplyreset" className="h-10 w-auto mb-6 brightness-0 invert" src="https://chqsjvgwaqzrfzeppaaa.supabase.co/storage/v1/object/public/templates/projects/e5c0e536-52a1-40ef-b0e2-b7fec15c12ba/39a8bd94-07d0-4cc9-9dfd-badf2b724018/logo-existing-0-1766467743057.svg"/>
<p className="text-sm leading-relaxed mb-6 text-gray-400">
                        Simply Regenerate a division of Watson Medical.<br/>
                        Regenerating health through advanced technology.
                    </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.facebook.com/SimplyReset/"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="https://twitter.com/simplyreset"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="https://www.instagram.com/simplyreset/"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#00B6E6] transition-colors" href="index.html">Home</a></li>
<li><a className="hover:text-[#00B6E6] transition-colors" href="pemf-and-hmf-therapy.html">About Therapy</a></li>
<li><a className="hover:text-[#00B6E6] transition-colors" href="hyper-pulsed-emf-session.html">Treatment Process</a></li>
<li><a className="hover:text-[#00B6E6] transition-colors" href="pemf-devices-shop.html">Buy Devices</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#00B6E6] transition-colors" href="pemf-therapy-booking.html">Book Session</a></li>
<li><a className="hover:text-[#00B6E6] transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-[#00B6E6] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#00B6E6] transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Contact Us</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-[#00B6E6] flex-shrink-0" data-lucide="phone"></i>
<span>7825888888</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-[#00B6E6] flex-shrink-0" data-lucide="mail"></i>
<span>bookings@simplyreset.co</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-[#00B6E6] flex-shrink-0" data-lucide="map-pin"></i>
<span>10 times the effectiveness of st</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2024 Simplyreset. All rights reserved.</p>
<div className="mt-4 md:mt-0">
<a className="hover:text-white transition-colors mr-4" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
