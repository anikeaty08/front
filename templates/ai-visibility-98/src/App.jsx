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



        // Navigation Logic (SPA style)
        function navigate(pageId) {
            const target = document.getElementById('page-' + pageId);
            if(!target) return; // Ignore links without mock pages like pricing/about

            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => el.style.display = 'none', 400); // Wait for fade out
            });

            // Show selected page
            setTimeout(() => {
                target.style.display = 'block';
                // Trigger reflow to restart transition
                void target.offsetWidth; 
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                triggerAnimations();
            }, 400);

            // Update Nav Active States
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            const activeLinks = document.querySelectorAll(`.nav-link[data-target="${pageId}"]`);
            activeLinks.forEach(link => link.classList.add('active'));
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // FAQ Toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            
            // Close others (optional)
            document.querySelectorAll('.faq-content').forEach(el => {
                if(el !== content) {
                    el.classList.remove('open');
                    el.previousElementSibling.querySelector('.faq-icon').classList.remove('open');
                }
            });

            content.classList.toggle('open');
            icon.classList.toggle('open');
        }

        // Scroll Animation Observer
        function triggerAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('active'); // Reset on re-render
                observer.observe(el);
            });
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            triggerAnimations();
            document.getElementById('page-home').style.display = 'block';
            setTimeout(() => document.getElementById('page-home').classList.add('active'), 50);
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
      

<nav className="fixed top-0 w-full z-50 bg-[#0A0E1A] border-b border-[#1e2a3a]">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="text-xl md:text-2xl font-['Syne',sans-serif] font-semibold tracking-tighter flex items-center gap-1 cursor-pointer shrink-0" href="/" onclick="navigate('home'); return false;">
                Revyve<span className="text-[#00C9A7]">Digital</span>
</a>

<div className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium text-[#8A8FA0]">
<div className="group relative py-8">
<button className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer nav-link">
                        Services <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="service-dropdown absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#0A0E1A] border border-[#1e2a3a] rounded-xl p-2 shadow-2xl">
<a className="block px-4 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="/aio" onclick="navigate('aio'); return false;">
<div className="text-sm font-medium">AI Visibility Optimisation</div>
</a>
<a className="block px-4 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors mt-1" href="/reddit" onclick="navigate('reddit'); return false;">
<div className="text-sm font-medium">Reddit Marketing</div>
</a>
<a className="block px-4 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors mt-1" href="/seo" onclick="navigate('home'); return false;">
<div className="text-sm font-medium">SEO Services</div>
</a>
</div>
</div>
<a className="hover:text-white transition-colors nav-link" data-target="about" href="/about" onclick="navigate('about'); return false;">About Us</a>
<a className="hover:text-white transition-colors nav-link" data-target="contact" href="/contact" onclick="navigate('contact'); return false;">Contact</a>
</div>

<div className="hidden md:block shrink-0">
<a className="bg-[#00C9A7] hover:bg-[#00E3BD] text-[#0A0E1A] px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2" href="/contact" onclick="navigate('contact'); return false;">
                    Book a Free Call →
                </a>
</div>

<button className="md:hidden text-2xl text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-[#0A0E1A] border-b border-[#1e2a3a] p-6 flex-col gap-6 shadow-2xl" id="mobile-menu">
<a className="text-lg font-medium text-white" href="/aio" onclick="navigate('aio'); toggleMobileMenu(); return false;">AI Visibility Optimisation</a>
<a className="text-lg font-medium text-white" href="/reddit" onclick="navigate('reddit'); toggleMobileMenu(); return false;">Reddit Marketing</a>
<a className="text-lg font-medium text-white" href="/seo" onclick="navigate('home'); toggleMobileMenu(); return false;">SEO Services</a>
<a className="text-lg font-medium text-white" href="/about" onclick="navigate('about'); toggleMobileMenu(); return false;">About Us</a>
<a className="text-lg font-medium text-white" href="/pricing" onclick="navigate('pricing'); toggleMobileMenu(); return false;">Pricing</a>
<a className="text-lg font-medium text-white" href="/contact" onclick="navigate('contact'); toggleMobileMenu(); return false;">Contact</a>
<a className="bg-[#00C9A7] text-[#0A0E1A] px-5 py-3 rounded-lg text-center font-bold mt-4" href="/contact" onclick="navigate('contact'); toggleMobileMenu(); return false;">Book a Free Call →</a>
</div>
</nav>

<main className="pt-20" id="app">



<div className="page-view active" id="page-home" style={{display: 'block'}}>

<section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 bg-[#0A0E1A]">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-semibold tracking-tight font-['Syne',sans-serif] mb-6">Your business deserves to be found.</h1>
<p className="md:text-xl leading-relaxed text-lg text-[#8A8FA0] max-w-lg mb-10">Search. AI recommendations. Community trust. Your buyers use all three before they decide. We make sure your business shows up across all of them — and stays there.</p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="hover:bg-[#00E3BD] transition-all duration-300 sm:w-auto text-sm font-bold text-[#0A0E1A] text-center bg-[#00C9A7] w-full rounded-lg pt-4 pr-8 pb-4 pl-8" href="/contact" onclick="navigate('contact'); return false;">Book a Free Discovery Call</a>
</div>
</div>

<div className="reveal lg:h-[600px] flex flex-col gap-6 relative gap-x-6 gap-y-6 justify-center">

<div className="lg:absolute lg:top-0 lg:left-0 lg:w-[85%] z-0 transform lg:-translate-y-4 hover:opacity-100 transition-opacity bg-white/5 opacity-70 border-[#FF5757]/30 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="flex text-xs text-[#8A8FA0] mb-4 gap-x-3 gap-y-3 items-center">Without Revyve</div>
<p className="text-sm mb-6">Best implant dentist in Austin?</p><div className="flex gap-3 text-xs text-[#FF5757] mb-4 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-base" icon="solar:magic-stick-3-linear"></iconify-icon> AI Response
                            </div>
<div className="space-y-3">
<div className="text-sm text-[#8A8FA0] bg-black/20 rounded pt-2 pr-2 pb-2 pl-2">1. Austin Dental Implants (Highly rated)</div>
<div className="text-sm text-[#8A8FA0] bg-black/20 rounded pt-2 pr-2 pb-2 pl-2">2. Texas Tooth Clinic</div>
<div className="flex text-sm font-medium text-[#FF5757] bg-[#FF5757]/10 border-[#FF5757]/20 border rounded pt-2 pr-2 pb-2 pl-2 items-center justify-between">
                                    Your Business <span className="text-[10px] uppercase tracking-wider">Not Mentioned</span>
</div>
</div>
</div>

<div className="lg:absolute lg:bottom-10 lg:right-0 lg:w-[90%] z-10 transform bg-[#0A0E1A] border-[#00C9A7]/50 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-2xl">
<div className="flex text-xs text-[#8A8FA0] mb-4 gap-x-3 gap-y-3 items-center">With Revyve</div>
<p className="text-sm mb-6">Best implant dentist in Austin?</p>
<div className="flex items-center gap-3 mb-4 text-[#00C9A7] text-xs">
<iconify-icon className="text-base" icon="solar:magic-stick-3-linear"></iconify-icon> AI Response
                            </div>
<div className="space-y-3">
<div className="flex text-sm font-medium text-white bg-[#00C9A7]/10 border-[#00C9A7]/30 border rounded pt-2 pr-2 pb-2 pl-2 items-center justify-between">
                                    1. Your Business <span className="text-[10px] text-[#00C9A7] uppercase tracking-wider bg-[#00C9A7]/10 px-2 py-1 rounded">Recommended</span>
</div>
<div className="text-sm text-[#8A8FA0] bg-black/20 rounded pt-2 pr-2 pb-2 pl-2">2. Austin Dental Implants</div>
<div className="text-sm text-[#8A8FA0] bg-black/20 rounded pt-2 pr-2 pb-2 pl-2">3. Texas Tooth Clinic</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF]" style={{padding: '20px 0', overflow: 'hidden'}}>
<div className="" style={{maxWidth: '1280px', margin: '0 auto', padding: '0 24px 12px', display: 'flex', alignItems: 'center', gap: '32px'}}>
<span className="w-full text-center block" style={{fontSize: '11px', color: '#8A8FA0', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap', flexShrink: '0'}}>
                        Trusted by growing businesses
                    </span>
</div>
<div className="" style={{width: '100%', overflow: 'hidden'}}>
<div className="animate-scroll" style={{display: 'flex', width: 'max-content'}}>

<div className="" style={{display: 'flex'}}>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="Affordable Screen Co." src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6126c345-812b-4ecc-8db4-34c428b42785_320w.png" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain'}}/>
</div>
<div className="" style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="AutoLeap Brand Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19edc8b4-08af-40c6-96d9-79cc8787fab9_320w.png" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain'}}/>
</div>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="BookPal Official Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3ae5859-d4bb-472a-92ac-fef6ec7f0b3a_320w.webp" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain', mixBlendMode: 'darken'}}/>
</div>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="Platinum Volkswagen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58c7b27e-1052-472f-911c-8d8816786e9c_320w.jpg" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply'}}/>
</div>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="AutoLeap Brand Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19edc8b4-08af-40c6-96d9-79cc8787fab9_320w.png" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain'}}/>
</div>
</div>

<div style={{display: 'flex'}}>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="Affordable Screen Co." src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6126c345-812b-4ecc-8db4-34c428b42785_320w.png" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain'}}/>
</div>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="AutoLeap Brand Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19edc8b4-08af-40c6-96d9-79cc8787fab9_320w.png" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain'}}/>
</div>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="BookPal Official Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3ae5859-d4bb-472a-92ac-fef6ec7f0b3a_320w.webp" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain', mixBlendMode: 'darken'}}/>
</div>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="Platinum Volkswagen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58c7b27e-1052-472f-911c-8d8816786e9c_320w.jpg" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply'}}/>
</div>
<div style={{width: '120px', height: '48px', background: '#F4F4F6', borderRadius: '6px', border: '0.5px solid #e0e0e6', flexShrink: '0', margin: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '8px'}}>
<img alt="AutoLeap Brand Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19edc8b4-08af-40c6-96d9-79cc8787fab9_320w.png" style={{maxHeight: '40px', width: 'auto', objectFit: 'contain'}}/>
</div>
</div>
</div>
</div>
</section>

<section className="text-[#333344] bg-[#F4F4F6] pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="max-w-4xl mx-auto text-center mb-16 reveal">
<h2 className="md:text-5xl text-3xl font-semibold text-[#0A0E1A] tracking-tight font-['Syne',sans-serif] mb-6">Visibility used to mean ranking on Google. That's no longer enough.</h2>
<p className="md:text-lg leading-relaxed text-base text-[#555566]">SEO built the foundation — and it still matters. But search has expanded. Buyers now ask AI for recommendations, read Reddit threads before they decide, and trust peer conversations over polished brand pages. Businesses that only optimise for one channel are already losing ground to those building presence across all three. We help you cover all of it.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal flex-1">

<div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#e0e0e6] shadow-sm text-center flex flex-col items-center justify-center">
<div className="text-5xl font-['Syne',sans-serif] font-bold text-[#0A0E1A] mb-3">50%+</div>
<p className="text-sm text-[#8A8FA0] leading-relaxed">of Google searches now show AI-generated answers above all organic results</p>
</div>

<div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#e0e0e6] shadow-sm text-center flex flex-col items-center justify-center">
<div className="text-5xl font-['Syne',sans-serif] font-bold text-[#0A0E1A] mb-3">80%</div>
<p className="text-sm text-[#8A8FA0] leading-relaxed">of consumers rely on zero-click AI answers for at least 40% of their searches</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F4F6] pt-12 pb-24">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="md:text-5xl text-3xl font-semibold text-[#0A0E1A] tracking-tight font-['Syne',sans-serif] mb-4">Simple to start. Built to compound.</h2>
<p className="text-base text-[#8A8FA0]">Go from invisible to the top recommended in three simple steps</p>
</div>
<div className="grid md:grid-cols-3 gap-6 reveal">

<div className="bg-[#FFFFFF] border border-[#e0e0e6] rounded-[10px] p-6">
<div className="text-3xl font-['Syne',sans-serif] font-semibold text-[#00C9A7] mb-4">01</div>
<h3 className="text-xl font-semibold text-[#0A0E1A] font-['Syne',sans-serif] mb-3">Benchmarking current visibility</h3>
<p className="leading-relaxed text-sm text-[#8A8FA0]">We measure where the brand appears, where competitors are winning attention, and where the biggest visibility gaps exist.</p>
</div>

<div className="bg-[#FFFFFF] border-[#e0e0e6] border rounded-[10px] pt-6 pr-6 pb-6 pl-6" style={{transitionDelay: '100ms'}}>
<div className="text-3xl font-['Syne',sans-serif] font-semibold text-[#00C9A7] mb-4">02</div>
<h3 className="text-xl font-semibold text-[#0A0E1A] font-['Syne',sans-serif] mb-3">Building discovery signals</h3>
<p className="leading-relaxed text-sm text-[#8A8FA0]">We strengthen the trust and visibility signals that influence how brands get surfaced across AI-driven discovery.</p>
</div>

<div className="bg-[#FFFFFF] border border-[#e0e0e6] rounded-[10px] p-6" style={{transitionDelay: '200ms'}}>
<div className="text-3xl font-['Syne',sans-serif] font-semibold text-[#00C9A7] mb-4">03</div>
<h3 className="text-xl font-semibold text-[#0A0E1A] font-['Syne',sans-serif] mb-3">Measuring the change</h3>
<p className="leading-relaxed text-sm text-[#8A8FA0]">Monthly reporting shows how brand visibility is moving across the platforms and prompts that matter.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0E1A] border-[#1e2a3a] border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="max-w-3xl mx-auto text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tight mb-6">If your customers are looking for you, we make sure they find you.</h2>
<p className="text-lg text-[#8A8FA0] leading-relaxed">
                            We've worked with dentists, SaaS founders, e-commerce brands, home service businesses, and everyone in between. What they all had in common: their buyers were already searching — and they weren't showing up. We fix that.
                        </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 reveal">
<div className="text-center">
<div className="text-4xl md:text-5xl font-['Syne',sans-serif] font-bold text-[#00C9A7] mb-2">8+</div>
<div className="text-xs text-[#8A8FA0] leading-relaxed">Years driving visibility growth</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-['Syne',sans-serif] font-bold text-[#00C9A7] mb-2">20+</div>
<div className="text-xs text-[#8A8FA0] leading-relaxed">Specialists focused on performance</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-['Syne',sans-serif] font-bold text-[#00C9A7] mb-2">100+</div>
<div className="text-xs text-[#8A8FA0] leading-relaxed">Clients grown across industries</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-['Syne',sans-serif] font-bold text-[#00C9A7] mb-2">$2M+</div>
<div className="text-xs text-[#8A8FA0] leading-relaxed">In revenue generated through organic</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 reveal text-center flex flex-col items-center justify-center">
<iconify-icon className="text-4xl text-[#00C9A7] mb-6" icon="solar:map-point-linear"></iconify-icon>
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-white">Local &amp; service businesses</h3>
<p className="text-sm text-[#8A8FA0] leading-relaxed">From 'best dentist in [city]' to 'most trusted HVAC near me' — we get you into the answers your local buyers are already getting.</p>
</div>

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 reveal text-center flex flex-col items-center justify-center" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-4xl text-[#00C9A7] mb-6" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-white">Growing brands &amp; e-commerce</h3>
<p className="text-sm text-[#8A8FA0] leading-relaxed">Buyers research before they buy. We make sure what they find — on Google, Reddit, or AI — points them toward you.</p>
</div>

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 reveal text-center flex flex-col items-center justify-center" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-4xl text-[#00C9A7] mb-6" icon="solar:widget-linear"></iconify-icon>
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-white">SaaS &amp; tech companies</h3>
<p className="text-sm text-[#8A8FA0] leading-relaxed">Category conversations happen whether you're in them or not. We make sure you are.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F4F6] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tight text-[#0A0E1A] mb-4">
                            What our clients say.
                        </h2>
<p className="text-base text-[#8A8FA0]">
                            Real results for real businesses.
                        </p>
</div>
<div className="grid md:grid-cols-3 gap-6 reveal">

<div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#555566] leading-relaxed flex-1 mb-6">
                                "Revyve has significantly improved our online visibility and search performance. Their team is professional, knowledgeable, and results-driven. We're very satisfied with the partnership."
                            </p>
<div className="border-t border-black/5 pt-5">
<div className="text-sm font-semibold text-[#0A0E1A] font-['Syne',sans-serif]">PlatinumVW</div>
<div className="text-xs text-[#8A8FA0] mt-1">Automotive</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#555566] leading-relaxed flex-1 mb-6">
                                "The Revyve team really knows their stuff. They've helped us grow our organic traffic steadily, and we always appreciate their clear communication and honest advice."
                            </p>
<div className="border-t border-black/5 pt-5">
<div className="text-sm font-semibold text-[#0A0E1A] font-['Syne',sans-serif]">BookPal</div>
<div className="text-xs text-[#8A8FA0] mt-1">E-commerce</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00C9A7] text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#555566] leading-relaxed flex-1 mb-6">
                                "Revyve's technical SEO insights and content strategy have helped drive consistent growth in organic traffic. It's clear they understand how to scale for fast-moving tech companies."
                            </p>
<div className="border-t border-black/5 pt-5">
<div className="text-sm font-semibold text-[#0A0E1A] font-['Syne',sans-serif]">AutoLeap</div>
<div className="text-xs text-[#8A8FA0] mt-1">SaaS / Tech</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-[#0A0E1A] bg-[#00C9A7] pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tight mb-6">Ready to see where you stand?</h2>
<p className="text-lg md:text-xl font-medium text-[#0A0E1A]/80 mb-10 max-w-2xl mx-auto">
                        Book a free 30-minute discovery call. We'll show you how your business appears in AI answers today, where your competitors are showing up that you aren't, and what it takes to change that.
                    </p>
<a className="inline-flex hover:bg-[#0A0E1A]/80 transition-all duration-300 items-center gap-2 text-base font-bold text-[#00C9A7] bg-[#0A0E1A] rounded-lg mb-6 pt-4 pr-8 pb-4 pl-8" href="/contact" onclick="navigate('contact'); return false;">Run an AI Audit</a>
</div>
</section>

<section className="py-24 bg-[#F4F4F6] text-[#0A0E1A]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tight mb-12 text-center reveal">Questions we get asked.</h2>
<div className="space-y-4 reveal">

<div className="bg-white border border-black/5 rounded-xl overflow-hidden">
<button className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-sm focus:outline-none" onclick="toggleFaq(this)">
                                How is this different from SEO?
                                <iconify-icon className="faq-icon text-[#00C9A7] text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-[#F4F4F6]/50">
<div className="px-6 pb-5 pt-1 text-sm text-[#555566] leading-relaxed">
                                    SEO gets you ranking on Google's search page. AI optimisation gets you into the actual answer AI gives. More people are asking AI directly instead of searching Google — if you're not in those answers, you're losing customers. We handle both, but AI visibility is the part nobody else is working on yet.
                                </div>
</div>
</div>

<div className="bg-white border border-black/5 rounded-xl overflow-hidden">
<button className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-sm focus:outline-none" onclick="toggleFaq(this)">
                                Can you guarantee results?
                                <iconify-icon className="faq-icon text-[#00C9A7] text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-[#F4F4F6]/50">
<div className="px-6 pb-5 pt-1 text-sm text-[#555566] leading-relaxed">
                                    No one can guarantee what an AI says — anyone who does is lying. What we guarantee is the work: the auditing, the optimisation, the content, the mentions. And we track month-over-month whether your AI visibility is improving with actual data.
                                </div>
</div>
</div>

<div className="bg-white border border-black/5 rounded-xl overflow-hidden">
<button className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-sm focus:outline-none" onclick="toggleFaq(this)">
                                What if I already have an SEO agency?
                                <iconify-icon className="faq-icon text-[#00C9A7] text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-[#F4F4F6]/50">
<div className="px-6 pb-5 pt-1 text-sm text-[#555566] leading-relaxed">
                                    Keep them. Ask your current agency to show you your AI mention rate across ChatGPT and Perplexity. If they can't measure it, they're not working on it. We layer on top of what you already have.
                                </div>
</div>
</div>

<div className="bg-white border border-black/5 rounded-xl overflow-hidden">
<button className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-sm focus:outline-none" onclick="toggleFaq(this)">
                                Do you have standard pricing packages?
                                <iconify-icon className="faq-icon text-[#00C9A7] text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-[#F4F4F6]/50">
<div className="px-6 pb-5 pt-1 text-sm text-[#555566] leading-relaxed">
                                    No. Every business has a different digital footprint, a different market saturation, and different goals. We build tailored packages after running an initial audit and baseline assessment so you only pay for the infrastructure you actually need.
                                </div>
</div>
</div>

<div className="bg-white border border-black/5 rounded-xl overflow-hidden">
<button className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-sm focus:outline-none" onclick="toggleFaq(this)">
                                How long before I see results?
                                <iconify-icon className="faq-icon text-[#00C9A7] text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content bg-[#F4F4F6]/50">
<div className="px-6 pb-5 pt-1 text-sm text-[#555566] leading-relaxed">
                                    Reddit threads can rank on Google within days. AI visibility builds over 90–180 days as the technical foundations compound. We track both — so you see early movement and long-term momentum.
                                </div>
</div>
</div>
</div>
</div>
</section>
</div>



<div className="page-view" id="page-aio">

<section className="py-24 bg-[#0A0E1A] min-h-[70vh] flex items-center relative border-b border-[#1e2a3a]">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h1 className="text-4xl md:text-6xl font-['Syne',sans-serif] font-semibold tracking-tight leading-[1.1] mb-6">
                        AI has replaced the search page.<br/>Your brand needs to be inside the answer.
                    </h1>
<p className="text-lg text-[#8A8FA0] mb-10 leading-relaxed max-w-3xl mx-auto">
                        Google, ChatGPT, Perplexity — they all now generate direct answers to buyer questions. No list of links. Just a recommendation. The brands that build their AI presence early will own their category. The ones that don't are already invisible to an entire generation of buyers.
                    </p>
<p className="text-sm text-white/80 border-t border-[#1e2a3a] pt-6 mb-10 font-medium">
                        We build the technical and content infrastructure that makes AI engines know, trust, and recommend your brand.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="bg-[#00C9A7] hover:bg-[#00E3BD] text-[#0A0E1A] px-8 py-3.5 rounded-lg text-sm font-bold transition-all duration-300 w-full sm:w-auto text-center" href="/contact" onclick="navigate('contact'); return false;">
                            Book a Free Discovery Call
                        </a>
<a className="text-white hover:text-[#00C9A7] text-sm font-semibold transition-colors" href="/contact" onclick="navigate('contact'); return false;">
                            Inquire About an Audit →
                        </a>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F4F6] text-[#333344]">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tight mb-8 text-[#0A0E1A]">Why AI visibility is different from everything you've done before.</h2>
<p className="text-base md:text-lg text-[#555566] leading-relaxed">
                        Traditional SEO optimises for a search engine that shows you a list of results. AI optimisation works on a completely different mechanism. AI engines don't rank pages — they synthesise answers from the sources they trust most: established entities with consistent information, brands mentioned across Reddit and review platforms, content structured to answer specific questions directly. If your digital presence isn't built for this — you don't appear. There's no page 2 in an AI answer.
                    </p>
</div>
</section>

<section className="py-24 bg-[#0A0E1A]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-['Syne',sans-serif] font-semibold tracking-tight mb-12">How we build your AI visibility.</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 reveal">
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-white">1. Entity Establishment</h3>
<p className="text-sm text-[#8A8FA0] mb-6 leading-relaxed">AI engines need to know your business exists as a recognised entity before they can recommend it. We establish your brand across directories and structured data sources so AI can find, understand, and trust you.</p>
<ul className="space-y-2 text-xs text-[#D1D5DB]">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Directory blitzes</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Industry-specific platforms (G2, Healthgrades)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Consistent NAP signals across all platforms</li>
</ul>
</div>

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 reveal" style={{transitionDelay: '100ms'}}>
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-white">2. AI-Optimised Content</h3>
<p className="text-sm text-[#8A8FA0] mb-6 leading-relaxed">AI engines pull from content that directly answers questions. We build the FAQ pages, comparison articles, and authority content designed to be cited inside AI-generated answers — not just ranked on Google.</p>
<ul className="space-y-2 text-xs text-[#D1D5DB]">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Custom content velocity per month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> FAQ pages structured for AI citation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Authority articles targeting AI-pulled prompts</li>
</ul>
</div>

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 reveal">
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-white">3. Third-Party Mentions</h3>
<p className="text-sm text-[#8A8FA0] mb-6 leading-relaxed">AI doesn't just read your website. It reads everything the web says about you. Reddit threads, review platforms, and press mentions are the sources AI pulls recommendations from. We build your presence there.</p>
<ul className="space-y-2 text-xs text-[#D1D5DB]">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Strategic Reddit seeding</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Review platform presence &amp; generation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> Press outreach &amp; roundup placement</li>
</ul>
</div>

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 reveal" style={{transitionDelay: '100ms'}}>
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-white">4. Structured Data &amp; Schema</h3>
<p className="text-sm text-[#8A8FA0] mb-6 leading-relaxed">Schema markup tells AI engines exactly who you are, what you do, and where you operate. Without it, AI has to guess — and it will guess wrong or not at all.</p>
<ul className="space-y-2 text-xs text-[#D1D5DB]">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> LocalBusiness / Organization schema</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> SoftwareApplication schema (SaaS)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00C9A7]" icon="solar:check-circle-linear"></iconify-icon> FAQPage and AggregateRating schema</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F4F6] text-[#0A0E1A]">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tight mb-6">We track AI visibility the way other agencies track Google rankings.</h2>
<p className="text-base text-[#555566] mb-8 leading-relaxed">
                            You can't improve what you can't measure. Most agencies can't measure this at all. Using Peec.ai and Otterly.ai, we baseline your brand's appearance in AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews before we start — then show you month-over-month movement.
                        </p>
<div className="space-y-4 text-sm font-medium">
<div className="flex items-center gap-3"><iconify-icon className="text-[#00C9A7] text-xl" icon="solar:check-circle-linear"></iconify-icon> Identify What's Working</div>
<div className="flex items-center gap-3"><iconify-icon className="text-[#00C9A7] text-xl" icon="solar:check-circle-linear"></iconify-icon> Visualise Limiting Factors</div>
<div className="flex items-center gap-3"><iconify-icon className="text-[#00C9A7] text-xl" icon="solar:check-circle-linear"></iconify-icon> Gain Strategic Signals</div>
</div>
</div>

<div className="reveal bg-[#0A0E1A] rounded-2xl p-6 border border-[#1e2a3a] shadow-2xl relative overflow-hidden">
<div className="flex items-center justify-between mb-6 border-b border-[#1e2a3a] pb-4">
<div className="text-white font-medium text-sm">AI Visibility Dashboard</div>
<div className="text-[#00C9A7] text-xs px-2 py-1 bg-[#00C9A7]/10 rounded">Live Data</div>
</div>

<div className="h-32 w-full border-b border-l border-[#1e2a3a] relative mb-8">
<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="opacity-80" d="M0,80 Q20,70 40,50 T80,20 T100,10" fill="none" stroke="#00C9A7" strokeWidth="2"></path>
<path className="opacity-20" d="M0,80 Q20,70 40,50 T80,20 T100,10 L100,100 L0,100 Z" fill="url(#grad1)"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#00C9A7', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#00C9A7', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-xs text-[#8A8FA0] mb-2">Mentions</div>
<div className="text-xl font-['Syne',sans-serif] text-white">142</div>
<div className="text-[10px] text-[#00C9A7] mt-1">+12%</div>
</div>
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-xs text-[#8A8FA0] mb-2">Avg Pos.</div>
<div className="text-xl font-['Syne',sans-serif] text-white">1.8</div>
<div className="text-[10px] text-[#00C9A7] mt-1">Top 3</div>
</div>
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-xs text-[#8A8FA0] mb-2">Readiness</div>
<div className="text-xl font-['Syne',sans-serif] text-white">94%</div>
<div className="text-[10px] text-[#00C9A7] mt-1">Optimised</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00C9A7] text-[#0A0E1A]">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tight mb-6">See where your brand stands in AI answers.</h2>
<p className="text-lg font-medium text-[#0A0E1A]/80 mb-10 max-w-2xl mx-auto">
                        The window for first-mover advantage in AI visibility is open right now. It will close. We start with a 30-minute call — no pitch, no pressure.
                    </p>
<a className="inline-flex bg-[#0A0E1A] hover:bg-[#0A0E1A]/80 text-[#00C9A7] px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 items-center gap-2 mb-4" href="/contact" onclick="navigate('contact'); return false;">
                        Book a Free Discovery Call
                    </a>
<p className="text-xs text-[#0A0E1A]/70 font-medium">We offer fully tailored AI Visibility Audits customised to your business size.</p>
</div>
</section>
</div>



<div className="page-view" id="page-reddit">

<section className="py-24 bg-[#0A0E1A] min-h-[70vh] flex items-center relative border-b border-[#1e2a3a]">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h1 className="text-4xl md:text-6xl font-['Syne',sans-serif] font-semibold tracking-tight leading-[1.1] mb-6">
                        Your buyers trust Reddit more than your ads.<br/>We make sure they find you there.
                    </h1>
<p className="text-lg text-[#8A8FA0] mb-10 leading-relaxed max-w-3xl mx-auto">
                        Reddit threads rank on Google page 1 for almost every 'best of' and 'recommend me' search. They're also one of the primary sources AI engines pull recommendations from. Your competitors are being recommended. You're not in the conversation.
                    </p>
<p className="text-sm text-white/80 border-t border-[#1e2a3a] pt-6 mb-10 font-medium">
                        We place your brand organically in the Reddit discussions that are already driving decisions in your category.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="bg-[#00C9A7] hover:bg-[#00E3BD] text-[#0A0E1A] px-8 py-3.5 rounded-lg text-sm font-bold transition-all duration-300 w-full sm:w-auto text-center" href="/contact" onclick="navigate('contact'); return false;">
                            Book a Free Discovery Call
                        </a>
<a className="text-white hover:text-[#00C9A7] text-sm font-semibold transition-colors" href="/contact" onclick="navigate('contact'); return false;">
                            Inquire About Packages →
                        </a>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F4F6] text-[#0A0E1A]">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<h2 className="text-3xl md:text-4xl font-['Syne',sans-serif] font-semibold tracking-tight mb-16">Reddit is where trust actually lives on the internet.</h2>
<div className="grid md:grid-cols-3 gap-8 text-left">
<div className="reveal">
<div className="bg-black/5 w-10 h-10 rounded-lg flex items-center justify-center text-[#0A0E1A] text-xl mb-4">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3">Google page 1 rankings.</h3>
<p className="text-sm text-[#555566] leading-relaxed">Reddit threads rank on the first page of Google for 'best [category] in [city]' searches. Your brand being recommended in those threads is more valuable than any ad you could run.</p>
</div>
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="bg-black/5 w-10 h-10 rounded-lg flex items-center justify-center text-[#0A0E1A] text-xl mb-4">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3">The source AI pulls from.</h3>
<p className="text-sm text-[#555566] leading-relaxed">ChatGPT and Perplexity pull heavily from Reddit when generating recommendations. Every organic Reddit mention is also an AI visibility signal. The two compound.</p>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="bg-black/5 w-10 h-10 rounded-lg flex items-center justify-center text-[#0A0E1A] text-xl mb-4">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3">The trust no ad can buy.</h3>
<p className="text-sm text-[#555566] leading-relaxed">Consumers add 'reddit' to their Google searches specifically to find real opinions. A Reddit recommendation carries authentic social proof that paid channels simply cannot replicate.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0E1A]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-['Syne',sans-serif] font-semibold tracking-tight mb-6">What Reddit marketing actually looks like.</h2>
<p className="text-[#8A8FA0] max-w-3xl mb-12 text-sm leading-relaxed">
                        This isn't spam. We use aged, credible accounts in the right subreddits with the right context — because Reddit's community is extremely good at spotting inauthenticity, and that's exactly why you need professionals who understand the platform.
                    </p>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white/5 border border-[#1e2a3a] rounded-xl p-6 reveal">
<h4 className="text-white font-semibold text-base mb-3">Thread Creation</h4>
<p className="text-xs text-[#8A8FA0] leading-relaxed">Starting genuine discussion threads in relevant subreddits where your brand is naturally mentioned or recommended.</p>
</div>
<div className="bg-white/5 border border-[#1e2a3a] rounded-xl p-6 reveal" style={{transitionDelay: '50ms'}}>
<h4 className="text-white font-semibold text-base mb-3">Comment Placement</h4>
<p className="text-xs text-[#8A8FA0] leading-relaxed">Adding your brand as a recommendation in existing high-traffic threads that are already ranking or gaining traction.</p>
</div>
<div className="bg-white/5 border border-[#1e2a3a] rounded-xl p-6 reveal" style={{transitionDelay: '100ms'}}>
<h4 className="text-white font-semibold text-base mb-3">Subreddit Targeting</h4>
<p className="text-xs text-[#8A8FA0] leading-relaxed">Identifying the exact subreddits where your buyers are active — city subreddits for local, niche subreddits for SaaS.</p>
</div>
<div className="bg-white/5 border border-[#1e2a3a] rounded-xl p-6 reveal" style={{transitionDelay: '150ms'}}>
<h4 className="text-white font-semibold text-base mb-3">Reputation Monitoring</h4>
<p className="text-xs text-[#8A8FA0] leading-relaxed">Tracking brand mentions across Reddit, flagging negative threads, and responding strategically to protect your presence.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F4F6] text-[#0A0E1A]">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<h2 className="text-3xl md:text-4xl font-['Syne',sans-serif] font-semibold tracking-tight mb-12">Reddit works for three kinds of business.</h2>
<div className="grid md:grid-cols-3 gap-6 text-left">
<div className="bg-white border border-black/5 rounded-xl p-8 reveal shadow-sm">
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-[#0A0E1A]">SaaS &amp; Tech</h3>
<p className="text-sm text-[#555566] leading-relaxed">SaaS buyers live on Reddit. r/SaaS, r/startups, r/marketing — these are where buyers ask for recommendations right now. ARR $200K–$20M.</p>
</div>
<div className="bg-white border border-black/5 rounded-xl p-8 reveal shadow-sm" style={{transitionDelay: '100ms'}}>
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-[#0A0E1A]">E-commerce &amp; DTC</h3>
<p className="text-sm text-[#555566] leading-relaxed">r/BuyItForLife, r/SkincareAddiction — Reddit drives purchase decisions for physical products more than almost any other platform. Rev $500K–$20M.</p>
</div>
<div className="bg-white border border-black/5 rounded-xl p-8 reveal shadow-sm" style={{transitionDelay: '200ms'}}>
<h3 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight mb-4 text-[#0A0E1A]">Local Business</h3>
<p className="text-sm text-[#555566] leading-relaxed">r/[city] subreddits rank on Google for 'best [business] in [city]' searches. Your competitors are recommended there. Revenue $500K–$5M.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00C9A7] text-[#0A0E1A]">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-4xl font-['Syne',sans-serif] font-semibold tracking-tight mb-8">See which Reddit threads are ranking for your keywords — and who's in them.</h2>
<a className="inline-flex bg-[#0A0E1A] hover:bg-[#0A0E1A]/80 text-[#00C9A7] px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 items-center gap-2 mb-4" href="/contact" onclick="navigate('contact'); return false;">
                        Book a Free Discovery Call
                    </a>
<p className="text-xs text-[#0A0E1A]/70 font-medium">Or start with a tailored Reddit Audit (credited toward your first month).</p>
</div>
</section>
</div>



<div className="page-view" id="page-contact">

<section className="py-24 bg-[#0A0E1A] min-h-[50vh] flex items-center border-b border-[#1e2a3a]">
<div className="max-w-5xl mx-auto px-6 md:px-12 w-full reveal">
<h1 className="text-4xl md:text-6xl font-['Syne',sans-serif] font-semibold tracking-tight leading-[1.1] mb-6 text-center">
                        Let's find out where you stand.
                    </h1>
<p className="text-lg text-[#8A8FA0] mb-16 leading-relaxed max-w-2xl mx-auto text-center">
                        Every business has a unique digital footprint. That's why we don't do cookie-cutter pricing. All of our packages are completely tailored to your baseline, industry, and goals.
                    </p>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white/5 border border-[#00C9A7]/30 rounded-2xl p-8 relative overflow-hidden flex flex-col h-full">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,201,167,0.1)_0%,transparent_70%)]"></div>
<h3 className="text-2xl font-['Syne',sans-serif] font-semibold mb-4 text-white relative z-10">Book a Discovery Call</h3>
<p className="text-sm text-[#8A8FA0] mb-8 relative z-10 flex-1 leading-relaxed">A free 30-minute call. We'll look up your business live in AI search, show you where you stand versus competitors, and talk through what it would take to close the gap. No pitch deck. No pressure.</p>
<button className="bg-[#00C9A7] text-[#0A0E1A] px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#00E3BD] transition-colors relative z-10 w-full">Book a Free Call</button>
</div>

<div className="bg-white/5 border border-[#1e2a3a] rounded-2xl p-8 relative flex flex-col h-full">
<h3 className="text-2xl font-['Syne',sans-serif] font-semibold mb-4 text-white">Book a Tailored Audit</h3>
<p className="text-sm text-[#8A8FA0] mb-6 flex-1 leading-relaxed">A full AI visibility audit delivered within 48 hours. Baseline across ChatGPT, Perplexity, and Google AI. Competitor comparison. Gap analysis. Credited toward your first month.</p>
<div className="text-xs font-medium text-white mb-6 border-l-2 border-[#00C9A7] pl-3 py-1">Tailored to your specific business size and market</div>
<button className="bg-transparent border border-white/20 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors w-full">Inquire About an Audit</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F4F6] text-[#0A0E1A]">
<div className="max-w-3xl mx-auto px-6 md:px-12 reveal">
<h2 className="text-3xl font-['Syne',sans-serif] font-semibold tracking-tight mb-8">Or send us a message.</h2>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Message sent! (Mockup)');">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">First Name</label>
<input className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">Last Name</label>
<input className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">Business Name</label>
<input className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">Website URL</label>
<input className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors" required="" type="url"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">Email Address</label>
<input className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">Business Type</label>
<select className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors text-[#0A0E1A]">
<option>Local Business</option>
<option>SaaS Company</option>
<option>E-commerce</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">What are you interested in?</label>
<select className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors text-[#0A0E1A]">
<option>Discovery Call</option>
<option>Tailored Packages</option>
<option>AI Visibility Audit</option>
<option>Reddit Marketing</option>
<option>Not sure yet</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-[#555566] mb-2">Anything else we should know? (Optional)</label>
<textarea className="w-full bg-transparent border-b border-black/20 focus:border-[#00C9A7] py-2 text-sm transition-colors resize-none" rows="3"></textarea>
</div>
<button className="bg-[#00C9A7] text-[#0A0E1A] px-8 py-3 rounded-lg text-sm font-bold hover:bg-[#00E3BD] transition-colors flex items-center gap-2 group" type="submit">
                            Send <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-[#555566] mt-4">We respond within one business day.</p>
</form>
</div>
</section>

<section className="py-24 bg-[#0A0E1A]">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center reveal">
<h2 className="text-3xl font-['Syne',sans-serif] font-semibold tracking-tight mb-12">What happens after you reach out.</h2>
<div className="grid md:grid-cols-3 gap-6 text-left">
<div className="bg-white/5 border border-[#1e2a3a] rounded-xl p-6">
<div className="text-[#00C9A7] font-['Syne',sans-serif] font-bold text-xl mb-3">01</div>
<p className="text-sm text-[#8A8FA0] leading-relaxed">We review your message and your website within 24 hours.</p>
</div>
<div className="bg-white/5 border border-[#1e2a3a] rounded-xl p-6">
<div className="text-[#00C9A7] font-['Syne',sans-serif] font-bold text-xl mb-3">02</div>
<p className="text-sm text-[#8A8FA0] leading-relaxed">We run a quick AI visibility check on your brand — so we come to the call with something useful to show you.</p>
</div>
<div className="bg-white/5 border border-[#1e2a3a] rounded-xl p-6">
<div className="text-[#00C9A7] font-['Syne',sans-serif] font-bold text-xl mb-3">03</div>
<p className="text-sm text-[#8A8FA0] leading-relaxed">We meet for 30 minutes. You leave knowing exactly where you stand and what it would take to change it.</p>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-[#0A0E1A] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 mb-16 md:divide-x divide-[#1e2a3a]">

<div className="flex flex-col items-start md:pr-12">
<a className="text-2xl font-['Syne',sans-serif] font-bold tracking-tighter flex items-center gap-1 cursor-pointer mb-4" href="/" onclick="navigate('home'); return false;">
                        Revyve<span className="text-[#00C9A7]">Digital</span>
</a>
<p className="text-sm text-[#8A8FA0] mb-6 font-['Inter',sans-serif]">Be the answer AI gives.</p>
<div className="flex items-center gap-5">
<a className="text-[#8A8FA0] hover:text-[#00C9A7] transition-colors text-xl" href="https://linkedin.com/company/revyve">
<iconify-icon icon="ri:linkedin-fill"></iconify-icon>
</a>
<a className="text-[#8A8FA0] hover:text-[#00C9A7] transition-colors text-xl" href="https://instagram.com/revyvedigital">
<iconify-icon icon="ri:instagram-line"></iconify-icon>
</a>
<a className="text-[#8A8FA0] hover:text-[#00C9A7] transition-colors text-xl" href="https://x.com/revyvedigital">
<iconify-icon icon="ri:twitter-x-line"></iconify-icon>
</a>
<a className="text-[#8A8FA0] hover:text-[#00C9A7] transition-colors text-xl" href="https://facebook.com/revyvedigital">
<iconify-icon className="" icon="ri:facebook-box-fill"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col items-start md:px-12">
<span className="text-[11px] uppercase tracking-[2px] text-[#00C9A7] font-medium font-['Inter',sans-serif] mb-6">QUICK LINKS</span>
<div className="flex flex-col">
<a className="text-[14px] leading-[2] text-[#8A8FA0] hover:text-[#FFFFFF] transition-colors font-['Inter',sans-serif]" href="/" onclick="navigate('home'); return false;">Home</a>
<a className="text-[14px] leading-[2] text-[#8A8FA0] hover:text-[#FFFFFF] transition-colors font-['Inter',sans-serif]" href="/about" onclick="navigate('about'); return false;">About Us</a>
<a className="text-[14px] leading-[2] text-[#8A8FA0] hover:text-[#FFFFFF] transition-colors font-['Inter',sans-serif]" href="/pricing" onclick="navigate('pricing'); return false;">Pricing</a>
<a className="text-[14px] leading-[2] text-[#8A8FA0] hover:text-[#FFFFFF] transition-colors font-['Inter',sans-serif]" href="/contact" onclick="navigate('contact'); return false;">Contact Us</a>
</div>
</div>

<div className="flex flex-col items-start md:px-12">
<span className="text-[11px] uppercase tracking-[2px] text-[#00C9A7] font-medium font-['Inter',sans-serif] mb-6">OUR SERVICES</span>
<div className="flex flex-col">
<a className="text-[14px] leading-[2] text-[#8A8FA0] hover:text-[#FFFFFF] transition-colors font-['Inter',sans-serif]" href="/aio" onclick="navigate('aio'); return false;">AI Visibility Optimisation</a>
<a className="text-[14px] leading-[2] text-[#8A8FA0] hover:text-[#FFFFFF] transition-colors font-['Inter',sans-serif]" href="/reddit" onclick="navigate('reddit'); return false;">Reddit Marketing</a>
<a className="text-[14px] leading-[2] text-[#8A8FA0] hover:text-[#FFFFFF] transition-colors font-['Inter',sans-serif]" href="/seo" onclick="navigate('home'); return false;">SEO Services</a>
</div>
</div>

<div className="flex flex-col items-start md:pl-12">
<span className="text-[11px] uppercase tracking-[2px] text-[#00C9A7] font-medium font-['Inter',sans-serif] mb-6">GET IN TOUCH</span>
<div className="flex flex-col space-y-4 w-full">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00C9A7] text-[16px] shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span className="text-[14px] text-[#8A8FA0] font-['Inter',sans-serif]">Dubai, United Arab Emirates</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00C9A7] text-[16px] shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="text-[14px] text-[#8A8FA0] hover:text-[#00C9A7] transition-colors font-['Inter',sans-serif]" href="mailto:team@revyveseo.com">team@revyveseo.com</a>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00C9A7] text-[16px] shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="text-[14px] text-[#8A8FA0] hover:text-[#00C9A7] transition-colors font-['Inter',sans-serif]" href="tel:+971568511807">+971 568511807</a>
</div>
</div>
</div>
</div>

<div className="border-t border-[#1e2a3a] pt-[16px] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[12px] text-[#444456] font-['Inter',sans-serif]">© 2026 Revyve Digital. A brand of Revyve Inc.</p>
</div>
</div>
</footer>



    </>
  );
}
