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
"name": "Uplift Bangladesh",
"url": "https://upliftbangladesh.com",
"logo": "https://yt3.googleusercontent.com/ytc/AIdro_moGnwT8Bvv7MhV7_x7ScafzYizuT0WokyKGCWLARtx7Kc=s160-c-k-c0x00ffffff-no-rj",
"description": "Best Development Content Creator in Bangladesh",
"email": "upliftbd.media@gmail.com",
"sameAs": [
"https://youtube.com/c/UpliftBangladesh",
"https://facebook.com/UpliftBangladeshOfficiall",
"https://instagram.com/upliftbangladeshofficial",
"https://tiktok.com/@upliftbangladesh.real"
]
}



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
        });
        
        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.classList.add('py-2');
            } else {
                header.classList.remove('py-2');
            }
            lastScroll = currentScroll;
        });
        
        // FAQ Accordion
        document.querySelectorAll('.faq-trigger').forEach(trigger => {
            trigger.addEventListener('click', function() {
                const item = this.closest('.faq-item');
                const content = item.querySelector('.faq-content');
                const icon = this.querySelector('.iconify');
                const isOpen = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other items
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-content').classList.add('hidden');
                        otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
                        otherItem.querySelector('.iconify').style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current item
                content.classList.toggle('hidden');
                this.setAttribute('aria-expanded', !isOpen);
                icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
            });
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements with hover-lift class for entry animations
        document.querySelectorAll('.hover-lift').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
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
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg z-50" href="#main">Skip to main content</a>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" id="header">
<div className="absolute inset-0 bg-black/80 backdrop-blur-2xl border-b border-white/5"></div>
<nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-4 group" href="#">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-all"></div>
<img alt="Uplift Bangladesh Logo" className="relative w-12 h-12 rounded-full ring-2 ring-emerald-500/30 group-hover:ring-emerald-500/50 transition-all" height="48" loading="eager" src="https://yt3.googleusercontent.com/ytc/AIdro_moGnwT8Bvv7MhV7_x7ScafzYizuT0WokyKGCWLARtx7Kc=s160-c-k-c0x00ffffff-no-rj" width="48"/>
</div>
<div className="hidden sm:block">
<span className="font-semibold text-lg tracking-tight block">Uplift Bangladesh</span>
<span className="text-xs text-zinc-500">Content Creator</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#works">Works</a>
<a className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#services">Services</a>
<a className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#content">Content</a>
<a className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#about">About</a>
<a className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#stats">Stats</a>
<a className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all" href="#contact">
<span className="iconify w-4 h-4" data-icon="lucide:briefcase" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Work With Us
                    </a>
<a className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all glow-red" href="https://youtube.com/c/UpliftBangladesh?sub_confirmation=1" rel="noopener noreferrer" target="_blank">
<span className="iconify w-4 h-4" data-icon="lucide:youtube" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Subscribe</span>
<span className="hidden sm:inline text-red-200">445K</span>
</a>

<button aria-expanded="false" aria-label="Open menu" className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors" id="mobileMenuBtn">
<span className="iconify w-5 h-5" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</nav>

<div className="lg:hidden hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5" id="mobileMenu">
<div className="px-4 py-6 space-y-1 max-w-7xl mx-auto">
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#works">
<span className="iconify w-5 h-5" data-icon="lucide:play-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    Works
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#services">
<span className="iconify w-5 h-5" data-icon="lucide:sparkles" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    Services
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#content">
<span className="iconify w-5 h-5" data-icon="lucide:layers" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    Content Categories
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#about">
<span className="iconify w-5 h-5" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    About
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#stats">
<span className="iconify w-5 h-5" data-icon="lucide:bar-chart-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    Stats
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#faq">
<span className="iconify w-5 h-5" data-icon="lucide:help-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    FAQ
                </a>
<div className="pt-4 border-t border-white/5">
<a className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all" href="#contact">
<span className="iconify w-5 h-5" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
                        Business Enquiry
                    </a>
</div>
</div>
</div>
</header>
<main id="main">

<section className="min-h-screen relative overflow-hidden luxury-gradient mesh-gradient">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-1.5s'}}></div>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="text-center lg:text-left">

<div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-emerald-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
<span className="flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
<span className="text-zinc-400">Bangladesh's</span>
</span>
<span className="text-white">#1 Development Content Creator</span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
<span className="font-display text-gradient-gold">Uplift</span>
<br/>
<span className="gradient-text">Bangladesh</span>
</h1>
<p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Showcasing the <span className="text-white">positive transformation</span> of Bangladesh through cinematic storytelling, mega projects coverage, and breathtaking visuals.
                        </p>

<div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
<div className="text-center lg:text-left">
<div className="text-2xl font-bold text-white">445K+</div>
<div className="text-xs text-zinc-500">Subscribers</div>
</div>
<div className="w-px h-12 bg-white/10 hidden sm:block"></div>
<div className="text-center lg:text-left">
<div className="text-2xl font-bold text-white">87M+</div>
<div className="text-xs text-zinc-500">Total Views</div>
</div>
<div className="w-px h-12 bg-white/10 hidden sm:block"></div>
<div className="text-center lg:text-left">
<div className="text-2xl font-bold text-white">1300+</div>
<div className="text-xs text-zinc-500">Videos</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all glow-red hover:scale-105" href="https://youtube.com/c/UpliftBangladesh?sub_confirmation=1" rel="noopener noreferrer" target="_blank">
<span className="iconify w-6 h-6" data-icon="lucide:youtube" data-width="24" style={{strokeWidth: '1.5'}}></span>
                                Subscribe on YouTube
                                <span className="iconify w-4 h-4 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all backdrop-blur-xl" href="#services">
<span className="iconify w-5 h-5" data-icon="lucide:briefcase" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Hire for Projects
                            </a>
</div>
</div>

<div className="relative">

<div className="relative rounded-3xl overflow-hidden glow-emerald">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl"></div>
<div className="relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
<div className="aspect-video">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="heroVideo" loading="lazy" src="https://www.youtube.com/embed/IKazmj8qkfU?rel=0" title="Featured Video - Uplift Bangladesh"></iframe>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-emerald-400 font-medium mb-1">FEATURED</div>
<div className="text-sm text-white font-medium">Latest Documentary</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify w-4 h-4" data-icon="lucide:eye" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                            1.2M views
                                        </div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 hidden lg:block">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:trending-up" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm font-semibold text-white">Growing Fast</div>
<div className="text-xs text-zinc-500">+50K subs/month</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-zinc-500">
<span className="text-xs">Scroll to explore</span>
<div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-8">Featured &amp; Recognized</p>
<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify w-8 h-8" data-icon="lucide:youtube" data-width="32" style={{strokeWidth: '1.5'}}></span>
<span className="font-semibold">YouTube</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify w-8 h-8" data-icon="lucide:facebook" data-width="32" style={{strokeWidth: '1.5'}}></span>
<span className="font-semibold">Facebook</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify w-8 h-8" data-icon="lucide:instagram" data-width="32" style={{strokeWidth: '1.5'}}></span>
<span className="font-semibold">Instagram</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify w-8 h-8" data-icon="lucide:music-2" data-width="32" style={{strokeWidth: '1.5'}}></span>
<span className="font-semibold">TikTok</span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Quick Access</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">What Are You Looking For?</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<a className="group glass-card rounded-3xl p-6 hover-lift cursor-pointer" href="#services">
<div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<span className="iconify w-7 h-7 text-emerald-400" data-icon="lucide:briefcase" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors">Hire for Projects</h3>
<p className="text-sm text-zinc-500">Professional video production &amp; brand collaborations</p>
<div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            View Services
                            <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</a>

<a className="group glass-card rounded-3xl p-6 hover-lift cursor-pointer" href="#works">
<div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<span className="iconify w-7 h-7 text-red-400" data-icon="lucide:play-circle" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-lg mb-2 group-hover:text-red-400 transition-colors">Watch Videos</h3>
<p className="text-sm text-zinc-500">Explore our latest content &amp; documentaries</p>
<div className="mt-4 flex items-center gap-2 text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Browse Works
                            <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</a>

<a className="group glass-card rounded-3xl p-6 hover-lift cursor-pointer" href="#content">
<div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<span className="iconify w-7 h-7 text-blue-400" data-icon="lucide:layers" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">Content Types</h3>
<p className="text-sm text-zinc-500">Mega Projects, Travel, Moto Vlogs &amp; more</p>
<div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Explore Categories
                            <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</a>

<a className="group glass-card rounded-3xl p-6 hover-lift cursor-pointer" href="#contact">
<div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<span className="iconify w-7 h-7 text-purple-400" data-icon="lucide:mail" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">Get in Touch</h3>
<p className="text-sm text-zinc-500">Business inquiries &amp; sponsorship deals</p>
<div className="mt-4 flex items-center gap-2 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Contact Us
                            <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-black" id="content">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
<div>
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">What We Create</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Content Categories</h2>
</div>
<p className="text-zinc-400 max-w-md">Diverse content showcasing every aspect of Bangladesh's beauty and development.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/30 to-emerald-900/10 border border-emerald-500/20 p-8 hover-lift">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
<div className="relative">
<div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-emerald-400" data-icon="lucide:building-2" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3">Mega Projects</h3>
<p className="text-zinc-400 text-sm mb-4">Infrastructure development, bridges, metro, expressways, and national progress documentation.</p>
<div className="flex items-center gap-2 text-emerald-400 text-sm">
<span className="iconify w-4 h-4" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                400+ Videos
                            </div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-500/20 p-8 hover-lift">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="relative">
<div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-blue-400" data-icon="lucide:plane" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3">Travel Vlogs</h3>
<p className="text-zinc-400 text-sm mb-4">Exploring tourist destinations, hidden gems, cultural heritage sites across Bangladesh.</p>
<div className="flex items-center gap-2 text-blue-400 text-sm">
<span className="iconify w-4 h-4" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                300+ Videos
                            </div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900/30 to-orange-900/10 border border-orange-500/20 p-8 hover-lift">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
<div className="relative">
<div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-orange-400" data-icon="lucide:bike" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3">Moto Vlogs</h3>
<p className="text-zinc-400 text-sm mb-4">Motorcycle adventures, road trips, and exploring Bangladesh on two wheels.</p>
<div className="flex items-center gap-2 text-orange-400 text-sm">
<span className="iconify w-4 h-4" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                200+ Videos
                            </div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/20 p-8 hover-lift">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
<div className="relative">
<div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-purple-400" data-icon="lucide:building" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3">Dhaka City</h3>
<p className="text-zinc-400 text-sm mb-4">Urban stories, city development, lifestyle, and the vibrant capital life.</p>
<div className="flex items-center gap-2 text-purple-400 text-sm">
<span className="iconify w-4 h-4" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                250+ Videos
                            </div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 border border-cyan-500/20 p-8 hover-lift">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
<div className="relative">
<div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-cyan-400" data-icon="lucide:camera" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3">Drone Cinematics</h3>
<p className="text-zinc-400 text-sm mb-4">Breathtaking aerial footage of landscapes, cities, and mega infrastructure.</p>
<div className="flex items-center gap-2 text-cyan-400 text-sm">
<span className="iconify w-4 h-4" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                150+ Videos
                            </div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-500/20 p-8 hover-lift">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all"></div>
<div className="relative">
<div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-green-400" data-icon="lucide:trees" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3">Natural Beauty</h3>
<p className="text-zinc-400 text-sm mb-4">Stunning landscapes, rivers, forests, and the natural wonders of Bangladesh.</p>
<div className="flex items-center gap-2 text-green-400 text-sm">
<span className="iconify w-4 h-4" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                180+ Videos
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-zinc-950" id="works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
<div>
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Portfolio</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Recent Works</h2>
</div>
<a className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" href="https://www.youtube.com/@UpliftBangladesh/videos" rel="noopener noreferrer" target="_blank">
                        View all on YouTube
                        <span className="iconify w-4 h-4" data-icon="lucide:external-link" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<div className="mb-8">
<div className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover-lift">
<div className="grid lg:grid-cols-2">
<a className="relative aspect-video lg:aspect-auto" href="https://www.youtube.com/watch?v=IKazmj8qkfU" rel="noopener noreferrer" target="_blank">
<img alt="Featured Video - Mega Projects Bangladesh" className="w-full h-full object-cover" loading="lazy" src="https://img.youtube.com/vi/IKazmj8qkfU/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl glow-red">
<span className="iconify w-8 h-8 text-white ml-1" data-icon="lucide:play" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    FEATURED
                                </div>
</a>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Documentary</div>
<h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Mega Projects of Bangladesh - Development Progress 2024</h3>
<p className="text-zinc-400 mb-6">Comprehensive documentary coverage of Bangladesh's infrastructure development, including Padma Bridge, Metro Rail, Expressways, and other transformative projects shaping the nation's future.</p>
<div className="flex flex-wrap gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-2">
<span className="iconify w-4 h-4" data-icon="lucide:eye" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                        1.2M views
                                    </span>
<span className="flex items-center gap-2">
<span className="iconify w-4 h-4" data-icon="lucide:clock" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                        25 mins
                                    </span>
<span className="flex items-center gap-2">
<span className="iconify w-4 h-4" data-icon="lucide:thumbs-up" data-width="16" style={{strokeWidth: '1.5'}}></span>
                                        45K likes
                                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover-lift">
<a className="block relative aspect-video" href="https://www.youtube.com/watch?v=7m-fuIJG50E" rel="noopener noreferrer" target="_blank">
<img alt="Travel Vlog Bangladesh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://img.youtube.com/vi/7m-fuIJG50E/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
<span className="iconify w-6 h-6 text-white ml-0.5" data-icon="lucide:play" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                18:24
                            </div>
</a>
<div className="p-5">
<div className="text-xs text-blue-400 font-medium mb-2">TRAVEL</div>
<h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">Exploring Hidden Gems - Bangladesh Travel Series</h3>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<span>856K views</span>
<span>•</span>
<span>2 weeks ago</span>
</div>
</div>
</article>

<article className="group bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover-lift">
<a className="block relative aspect-video" href="https://www.youtube.com/watch?v=QFmDWvxtgx8" rel="noopener noreferrer" target="_blank">
<img alt="Dhaka City Vlog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://img.youtube.com/vi/QFmDWvxtgx8/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
<span className="iconify w-6 h-6 text-white ml-0.5" data-icon="lucide:play" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                22:15
                            </div>
</a>
<div className="p-5">
<div className="text-xs text-purple-400 font-medium mb-2">CITY</div>
<h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">Dhaka City Transformation - Urban Development</h3>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<span>1.1M views</span>
<span>•</span>
<span>1 month ago</span>
</div>
</div>
</article>

<article className="group bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover-lift">
<a className="block relative aspect-video" href="https://www.youtube.com/@UpliftBangladesh/videos" rel="noopener noreferrer" target="_blank">
<img alt="Moto Vlog Bangladesh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://img.youtube.com/vi/IKazmj8qkfU/hqdefault.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
<span className="iconify w-6 h-6 text-white ml-0.5" data-icon="lucide:play" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                15:30
                            </div>
</a>
<div className="p-5">
<div className="text-xs text-orange-400 font-medium mb-2">MOTO</div>
<h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">Epic Motorcycle Ride Through Bangladesh</h3>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<span>623K views</span>
<span>•</span>
<span>3 weeks ago</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-black relative overflow-hidden" id="services">
<div className="absolute inset-0 mesh-gradient"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">For Brands &amp; Businesses</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Professional Services</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">Partner with Bangladesh's leading development content creator for impactful visual storytelling and brand exposure.</p>
</div>

<div className="grid lg:grid-cols-3 gap-6 mb-16">

<div className="lg:col-span-1 relative group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
<div className="relative glass-card rounded-3xl p-8 h-full border-emerald-500/30">
<div className="absolute top-6 right-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                POPULAR
                            </div>
<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-white" data-icon="lucide:video" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-bold mb-4">Documentary Production</h3>
<p className="text-zinc-400 mb-6">Full-scale documentary coverage of your projects, events, or initiatives with cinematic quality.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                    Professional cinematography
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                    Drone aerial footage
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                    Professional editing &amp; color grading
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                    YouTube publication (445K audience)
                                </li>
</ul>
<a className="block w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-center font-semibold py-4 rounded-xl transition-all" href="#contact">
                                Get Quote
                            </a>
</div>
</div>

<div className="glass-card rounded-3xl p-8">
<div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-blue-400" data-icon="lucide:megaphone" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-bold mb-4">Brand Sponsorship</h3>
<p className="text-zinc-400 mb-6">Authentic brand integrations reaching 445K+ engaged subscribers and millions of viewers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Dedicated video sponsorship
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Product placement
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Social media promotion
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-blue-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Performance analytics
                            </li>
</ul>
<a className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-center font-semibold py-4 rounded-xl transition-all" href="#contact">
                            Discuss Partnership
                        </a>
</div>

<div className="glass-card rounded-3xl p-8">
<div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-purple-400" data-icon="lucide:camera" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-bold mb-4">Drone Services</h3>
<p className="text-zinc-400 mb-6">Professional aerial cinematography for real estate, events, tourism, and commercial projects.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-purple-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                4K aerial footage
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-purple-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Licensed &amp; insured operations
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-purple-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Quick turnaround
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify w-5 h-5 text-purple-400" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Raw footage available
                            </li>
</ul>
<a className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-center font-semibold py-4 rounded-xl transition-all" href="#contact">
                            Book Now
                        </a>
</div>
</div>

<div className="glass-card rounded-3xl p-8 lg:p-12">
<h3 className="text-2xl font-bold text-center mb-12">How We Work Together</h3>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center relative">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
<h4 className="font-semibold mb-2">Discovery Call</h4>
<p className="text-sm text-zinc-500">Share your vision and requirements</p>
<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent -translate-x-8"></div>
</div>
<div className="text-center relative">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
<h4 className="font-semibold mb-2">Proposal</h4>
<p className="text-sm text-zinc-500">Receive detailed plan &amp; quote</p>
<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -translate-x-8"></div>
</div>
<div className="text-center relative">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
<h4 className="font-semibold mb-2">Production</h4>
<p className="text-sm text-zinc-500">Professional filming &amp; editing</p>
<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -translate-x-8"></div>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
<h4 className="font-semibold mb-2">Delivery</h4>
<p className="text-sm text-zinc-500">Final content &amp; publication</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-zinc-950" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
<div className="relative bg-zinc-900 rounded-3xl p-8 border border-white/10">
<div className="flex items-center gap-6 mb-8">
<img alt="Uplift Bangladesh" className="w-24 h-24 rounded-2xl ring-4 ring-emerald-500/20" height="96" src="https://yt3.googleusercontent.com/ytc/AIdro_moGnwT8Bvv7MhV7_x7ScafzYizuT0WokyKGCWLARtx7Kc=s160-c-k-c0x00ffffff-no-rj" width="96"/>
<div>
<h3 className="text-2xl font-bold">Uplift Bangladesh</h3>
<p className="text-emerald-400 font-medium">Content Creator Since 2018</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white/5 rounded-xl p-4 text-center">
<div className="text-2xl font-bold text-emerald-400">445K+</div>
<div className="text-xs text-zinc-500">YouTube Subscribers</div>
</div>
<div className="bg-white/5 rounded-xl p-4 text-center">
<div className="text-2xl font-bold text-blue-400">87M+</div>
<div className="text-xs text-zinc-500">Total Views</div>
</div>
<div className="bg-white/5 rounded-xl p-4 text-center">
<div className="text-2xl font-bold text-purple-400">1300+</div>
<div className="text-xs text-zinc-500">Videos Created</div>
</div>
<div className="bg-white/5 rounded-xl p-4 text-center">
<div className="text-2xl font-bold text-orange-400">6+</div>
<div className="text-xs text-zinc-500">Years Experience</div>
</div>
</div>

<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
<p className="bengali text-emerald-400 text-center">
                                        নিয়মিত আপডেট পেতে চ্যানেলটি সাবস্কাইব করে আমাদের সাথেই থাকুন, ধন্যবাদ।
                                    </p>
</div>
</div>
</div>
</div>

<div>
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Our Story</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
<span className="font-display text-gradient-gold">Showcasing</span> <br/>
<span className="gradient-text">Positive Bangladesh</span>
</h2>
<div className="space-y-6 text-zinc-400 leading-relaxed">
<p>
                                Welcome to <strong className="text-white">Uplift Bangladesh</strong> — Bangladesh's premier development content creator. Our mission is to showcase the positive transformation, mega projects, natural beauty, and vibrant culture of Bangladesh to the world.
                            </p>
<p>
                                Since <strong className="text-white">May 2018</strong>, we've been documenting Bangladesh's journey of progress through cinematic storytelling, capturing everything from massive infrastructure projects to hidden natural wonders.
                            </p>
<p>
                                Our content spans <strong className="text-white">Mega Projects</strong>, Travel Vlogs, Moto Vlogs, Dhaka City stories, and breathtaking drone cinematography — all aimed at uplifting Bangladesh's image globally.
                            </p>
</div>

<div className="flex flex-wrap gap-2 mt-8">
<span className="bg-white/5 border border-white/10 text-xs font-medium px-4 py-2 rounded-full">Positive Bangladesh</span>
<span className="bg-white/5 border border-white/10 text-xs font-medium px-4 py-2 rounded-full">Mega Projects</span>
<span className="bg-white/5 border border-white/10 text-xs font-medium px-4 py-2 rounded-full">Travel</span>
<span className="bg-white/5 border border-white/10 text-xs font-medium px-4 py-2 rounded-full">Moto</span>
<span className="bg-white/5 border border-white/10 text-xs font-medium px-4 py-2 rounded-full">Dhaka City</span>
<span className="bg-white/5 border border-white/10 text-xs font-medium px-4 py-2 rounded-full">Natural Beauty</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-black relative overflow-hidden" id="stats">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-cyan-500/5"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">By The Numbers</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Channel Statistics</h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative glass-card rounded-3xl p-8 text-center hover-lift">
<div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="iconify w-8 h-8 text-red-400" data-icon="lucide:users" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-4xl lg:text-5xl font-bold text-white mb-2" data-count="445000">445K</div>
<div className="text-sm text-zinc-500 mb-1">Subscribers</div>
<div className="text-xs text-red-400">4.45 Lakh</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative glass-card rounded-3xl p-8 text-center hover-lift">
<div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="iconify w-8 h-8 text-emerald-400" data-icon="lucide:eye" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-4xl lg:text-5xl font-bold text-white mb-2">87M+</div>
<div className="text-sm text-zinc-500 mb-1">Total Views</div>
<div className="text-xs text-emerald-400">8.78 Crore</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative glass-card rounded-3xl p-8 text-center hover-lift">
<div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="iconify w-8 h-8 text-blue-400" data-icon="lucide:video" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-4xl lg:text-5xl font-bold text-white mb-2">1,338</div>
<div className="text-sm text-zinc-500 mb-1">Videos</div>
<div className="text-xs text-blue-400">Published</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative glass-card rounded-3xl p-8 text-center hover-lift">
<div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="iconify w-8 h-8 text-purple-400" data-icon="lucide:calendar" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-4xl lg:text-5xl font-bold text-white mb-2">2018</div>
<div className="text-sm text-zinc-500 mb-1">Established</div>
<div className="text-xs text-purple-400">24 May</div>
</div>
</div>
</div>
<p className="text-center text-xs text-zinc-600 mt-8">Statistics are approximate and updated periodically</p>
</div>
</section>

<section className="py-20 lg:py-28 bg-zinc-950" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Common Questions</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Frequently Asked</h2>
</div>
<div className="space-y-4">

<div className="faq-item glass-card rounded-2xl overflow-hidden">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between p-6 text-left">
<span className="font-semibold text-lg pr-8">What types of projects do you work on?</span>
<span className="iconify w-6 h-6 text-zinc-400 flex-shrink-0 transition-transform" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-zinc-400">We specialize in documentary production, brand sponsorships, drone cinematography, travel content, and event coverage. Our expertise spans mega project documentation, tourism promotion, corporate videos, and social media content creation for brands looking to reach Bangladeshi audiences.</p>
</div>
</div>

<div className="faq-item glass-card rounded-2xl overflow-hidden">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between p-6 text-left">
<span className="font-semibold text-lg pr-8">What is your typical project timeline?</span>
<span className="iconify w-6 h-6 text-zinc-400 flex-shrink-0 transition-transform" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-zinc-400">Project timelines vary based on scope. A simple sponsorship video can be delivered within 1-2 weeks, while comprehensive documentary projects may take 4-8 weeks. We always discuss timelines during the initial consultation to ensure alignment with your goals.</p>
</div>
</div>

<div className="faq-item glass-card rounded-2xl overflow-hidden">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between p-6 text-left">
<span className="font-semibold text-lg pr-8">How can I sponsor a video?</span>
<span className="iconify w-6 h-6 text-zinc-400 flex-shrink-0 transition-transform" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-zinc-400">Simply reach out via our contact form or email upliftbd.media@gmail.com with details about your brand and goals. We offer various sponsorship packages including dedicated videos, product placements, and social media promotions. Our team will respond within 24-48 hours with options tailored to your budget.</p>
</div>
</div>

<div className="faq-item glass-card rounded-2xl overflow-hidden">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between p-6 text-left">
<span className="font-semibold text-lg pr-8">What is your audience demographic?</span>
<span className="iconify w-6 h-6 text-zinc-400 flex-shrink-0 transition-transform" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-zinc-400">Our audience is primarily Bangladeshi (85%+), with ages ranging from 18-45. They are highly engaged, interested in travel, technology, infrastructure development, and national progress. Our content attracts viewers passionate about Bangladesh's positive stories and development.</p>
</div>
</div>

<div className="faq-item glass-card rounded-2xl overflow-hidden">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between p-6 text-left">
<span className="font-semibold text-lg pr-8">Do you offer drone services separately?</span>
<span className="iconify w-6 h-6 text-zinc-400 flex-shrink-0 transition-transform" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden px-6 pb-6">
<p className="text-zinc-400">Yes! We offer standalone drone cinematography services for real estate, events, construction projects, and commercial purposes. Our team operates with licensed equipment and can deliver raw footage or fully edited content based on your requirements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600"></div>
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Follow Our Journey</h3>
<p className="text-emerald-100 mb-10 max-w-2xl mx-auto">Stay connected across all platforms for daily updates, behind-the-scenes content, and exclusive releases.</p>
<div className="flex flex-wrap justify-center gap-4">
<a className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-6 py-4 rounded-2xl transition-all hover:-translate-y-1 border border-white/20" href="https://youtube.com/c/UpliftBangladesh" rel="noopener noreferrer" target="_blank">
<span className="iconify w-6 h-6" data-icon="lucide:youtube" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-left">
<div className="font-semibold">YouTube</div>
<div className="text-xs text-emerald-200">445K Subscribers</div>
</div>
</a>
<a className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-6 py-4 rounded-2xl transition-all hover:-translate-y-1 border border-white/20" href="https://facebook.com/UpliftBangladeshOfficiall" rel="noopener noreferrer" target="_blank">
<span className="iconify w-6 h-6" data-icon="lucide:facebook" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-left">
<div className="font-semibold">Facebook</div>
<div className="text-xs text-emerald-200">Page</div>
</div>
</a>
<a className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-6 py-4 rounded-2xl transition-all hover:-translate-y-1 border border-white/20" href="https://instagram.com/upliftbangladeshofficial" rel="noopener noreferrer" target="_blank">
<span className="iconify w-6 h-6" data-icon="lucide:instagram" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-left">
<div className="font-semibold">Instagram</div>
<div className="text-xs text-emerald-200">Official</div>
</div>
</a>
<a className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-6 py-4 rounded-2xl transition-all hover:-translate-y-1 border border-white/20" href="https://tiktok.com/@upliftbangladesh.real" rel="noopener noreferrer" target="_blank">
<span className="iconify w-6 h-6" data-icon="lucide:music-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-left">
<div className="font-semibold">TikTok</div>
<div className="text-xs text-emerald-200">Shorts</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-black" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Get in Touch</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Let's Work Together</h2>
<p className="text-zinc-400 text-lg mb-10">
                            Ready to elevate your brand or project? We'd love to hear from you. Reach out for business inquiries, sponsorships, or project collaborations.
                        </p>

<div className="space-y-6 mb-10">
<a className="flex items-center gap-4 group" href="mailto:upliftbd.media@gmail.com">
<div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify w-6 h-6 text-emerald-400" data-icon="lucide:mail" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm text-zinc-500">Email Us</div>
<div className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">upliftbd.media@gmail.com</div>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-blue-400" data-icon="lucide:map-pin" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm text-zinc-500">Location</div>
<div className="text-lg font-semibold text-white">Bangladesh</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-purple-400" data-icon="lucide:clock" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm text-zinc-500">Response Time</div>
<div className="text-lg font-semibold text-white">Within 24-48 hours</div>
</div>
</div>
</div>

<div>
<div className="text-sm text-zinc-500 mb-4">Or reach us on social media</div>
<div className="flex gap-3">
<a className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors" href="https://facebook.com/AmiUpliftBangladesh" rel="noopener noreferrer" target="_blank">
<span className="iconify w-5 h-5 text-zinc-400" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors" href="https://instagram.com/upliftbangladeshofficial" rel="noopener noreferrer" target="_blank">
<span className="iconify w-5 h-5 text-zinc-400" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors" href="https://youtube.com/c/UpliftBangladesh" rel="noopener noreferrer" target="_blank">
<span className="iconify w-5 h-5 text-zinc-400" data-icon="lucide:youtube" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl"></div>
<div className="relative glass-card rounded-3xl p-8 lg:p-10">
<h3 className="text-2xl font-bold mb-8">Send a Message</h3>
<form action="mailto:upliftbd.media@gmail.com" className="space-y-6" enctype="text/plain" method="POST">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="name">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" id="name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" id="email" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="inquiry">Inquiry Type</label>
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all appearance-none cursor-pointer" id="inquiry" name="inquiry" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2371717a%22 strokeWidth=%221.5%22 strokeLinecap=%22round%22 strokeLinejoin=%22round%22&gt', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em'}}>
<option className="bg-zinc-900" value="">Select inquiry type</option>
<option className="bg-zinc-900" value="sponsorship">Brand Sponsorship</option>
<option className="bg-zinc-900" value="documentary">Documentary Production</option>
<option className="bg-zinc-900" value="drone">Drone Services</option>
<option className="bg-zinc-900" value="collaboration">Collaboration</option>
<option className="bg-zinc-900" value="other">Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="budget">Budget Range (Optional)</label>
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all appearance-none cursor-pointer" id="budget" name="budget" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2371717a%22 strokeWidth=%221.5%22 strokeLinecap=%22round%22 strokeLinejoin=%22round%22&gt', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em'}}>
<option className="bg-zinc-900" value="">Select budget range</option>
<option className="bg-zinc-900" value="10k-50k">৳10,000 - ৳50,000</option>
<option className="bg-zinc-900" value="50k-100k">৳50,000 - ৳100,000</option>
<option className="bg-zinc-900" value="100k-500k">৳100,000 - ৳500,000</option>
<option className="bg-zinc-900" value="500k+">৳500,000+</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="message">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none" id="message" name="message" placeholder="Tell us about your project or inquiry..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 glow-emerald" type="submit">
<span className="iconify w-5 h-5" data-icon="lucide:send" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                    Send Message
                                </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-2">
<div className="flex items-center gap-4 mb-6">
<img alt="Uplift Bangladesh" className="w-12 h-12 rounded-xl" height="48" src="https://yt3.googleusercontent.com/ytc/AIdro_moGnwT8Bvv7MhV7_x7ScafzYizuT0WokyKGCWLARtx7Kc=s160-c-k-c0x00ffffff-no-rj" width="48"/>
<div>
<span className="font-bold text-xl tracking-tight block">Uplift Bangladesh</span>
<span className="text-xs text-zinc-500">Best Development Content Creator</span>
</div>
</div>
<p className="text-zinc-500 text-sm max-w-md mb-6">
                        Showcasing Positive Bangladesh through mega projects, travel vlogs, drone cinematography, and compelling visual storytelling since 2018.
                    </p>
<p className="bengali text-sm text-emerald-400/80">
                        নিয়মিত আপডেট পেতে চ্যানেলটি সাবস্কাইব করে আমাদের সাথেই থাকুন।
                    </p>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#works">Works</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#content">Content Categories</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#stats">Stats</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-zinc-500 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Connect</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors" href="https://youtube.com/c/UpliftBangladesh" rel="noopener noreferrer" target="_blank">
<span className="iconify w-5 h-5" data-icon="lucide:youtube" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                YouTube
                            </a>
</li>
<li>
<a className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors" href="https://facebook.com/UpliftBangladeshOfficiall" rel="noopener noreferrer" target="_blank">
<span className="iconify w-5 h-5" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Facebook
                            </a>
</li>
<li>
<a className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors" href="https://instagram.com/upliftbangladeshofficial" rel="noopener noreferrer" target="_blank">
<span className="iconify w-5 h-5" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Instagram
                            </a>
</li>
<li>
<a className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors" href="https://tiktok.com/@upliftbangladesh.real" rel="noopener noreferrer" target="_blank">
<span className="iconify w-5 h-5" data-icon="lucide:music-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                TikTok
                            </a>
</li>
<li>
<a className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors" href="mailto:upliftbd.media@gmail.com">
<span className="iconify w-5 h-5" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
                                Email
                            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-600">© 2024 Uplift Bangladesh. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-zinc-600">
<span>Made with ❤️ in Bangladesh</span>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 md:hidden">
<a aria-label="Subscribe on YouTube" className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl shadow-2xl glow-red transition-all hover:scale-110" href="https://youtube.com/c/UpliftBangladesh?sub_confirmation=1" rel="noopener noreferrer" target="_blank">
<span className="iconify w-7 h-7" data-icon="lucide:youtube" data-width="28" style={{strokeWidth: '1.5'}}></span>
</a>
</div>


    </>
  );
}
