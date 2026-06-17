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
colors: {
neon: '#C0FF00',
dark: '#050505',
panel: '#0A0A0A'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Scroll Animations (IntersectionObserver)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible if you don't want it to toggle
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // 2. Process Line Animation
        const processLine = document.querySelector('.process-line-fill');
        const processSection = document.querySelector('.process-line')?.parentElement?.parentElement;
        
        if(processSection && processLine) {
            const lineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        processLine.style.width = '100%';
                    } else {
                        processLine.style.width = '0';
                    }
                });
            }, { threshold: 0.2 });
            lineObserver.observe(processSection);
        }

        // 3. Accordion Logic
        const accordions = document.querySelectorAll('.accordion-btn');
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('[data-lucide="plus"]');
                
                // Close others
                document.querySelectorAll('.accordion-content').forEach(c => {
                    if (c !== content) {
                        c.classList.remove('open');
                        c.style.maxHeight = null;
                        // Reset icon
                        const otherIcon = c.previousElementSibling.querySelector('svg');
                        if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current
                content.classList.toggle('open');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                    icon.style.transition = 'transform 0.3s';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(45deg)';
                    icon.style.transition = 'transform 0.3s';
                }
            });
        });

        // 4. Modal Logic
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');

        window.openModal = function() {
            modalOverlay.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                modalOverlay.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        window.closeModal = function() {
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        // Close on click outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto">
<span className="font-display font-semibold tracking-tighter text-lg uppercase">Streetlab <span className="text-zinc-500">×</span> Bandits</span>
</div>
<div className="pointer-events-auto hidden md:block">
<button className="group flex items-center gap-2 text-sm font-medium hover:text-neon transition-colors" onclick="document.getElementById('fit-check').scrollIntoView()">
                Start Project <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<div className="fixed bottom-6 right-6 z-40">
<button className="bg-neon text-black font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg flex items-center gap-2" onclick="document.getElementById('fit-check').scrollIntoView()">
            Start My Brand <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden border-b border-zinc-900">

<div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
<i className="absolute top-1/4 left-1/4 w-32 h-32 text-zinc-900 opacity-20 -rotate-12" data-lucide="shirt"></i>
<i className="absolute bottom-1/4 right-1/4 w-40 h-40 text-zinc-900 opacity-20 rotate-6" data-lucide="printer"></i>
<i className="absolute top-1/3 right-10 w-24 h-24 text-zinc-900 opacity-20 rotate-45" data-lucide="scissors"></i>
</div>
<div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-xs font-mono text-neon reveal-on-scroll">
<span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
                ACCEPTING NEW CLIENTS FOR Q2
            </div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-white reveal-on-scroll delay-100">
                We Build Streetwear <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Brands That Sell.</span>
</h1>
<p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed reveal-on-scroll delay-200">
                Print-On-Demand + Branding + Marketing.<br/>
<span className="text-zinc-200">All under one roof.</span>
</p>
<div className="pt-8 reveal-on-scroll delay-300">
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-neon rounded-none hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon focus:ring-offset-black" onclick="document.getElementById('fit-check').scrollIntoView()">
                    Start My Brand
                    <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
<div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 border border-zinc-700 bg-transparent transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
</button>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-900 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
<div className="lg:col-span-1 reveal-on-scroll">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter leading-tight">
                        Launch your streetwear brand in <span className="text-neon">30 days.</span>
</h2>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4 reveal-on-scroll delay-100 border-l border-zinc-800 pl-6">
<i className="w-8 h-8 text-neon" data-lucide="factory"></i>
<h3 className="font-display text-lg font-semibold">Premium POD Manufacturing</h3>
<p className="text-zinc-400 text-sm leading-relaxed">High-GSM fabrics, puffy prints, and intricate embroidery without holding inventory.</p>
</div>

<div className="space-y-4 reveal-on-scroll delay-200 border-l border-zinc-800 pl-6">
<i className="w-8 h-8 text-neon" data-lucide="pen-tool"></i>
<h3 className="font-display text-lg font-semibold">Branding + Creative</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Identity design, lookbooks, and visual storytelling that resonates with Gen-Z.</p>
</div>

<div className="space-y-4 reveal-on-scroll delay-300 border-l border-zinc-800 pl-6">
<i className="w-8 h-8 text-neon" data-lucide="trending-up"></i>
<h3 className="font-display text-lg font-semibold">90-Day Marketing Plan</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Meta ads, influencer seeding strategies, and email flows set up for scale.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter mb-4">The Streetwear Launch Pack</h2>
<div className="inline-block px-4 py-1 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400 uppercase tracking-widest">
<span className="text-red-500 mr-2">●</span> Limited Slots Available
                </div>
</div>
<div className="relative bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 rounded-2xl reveal-on-scroll neon-glow">

<div className="absolute top-0 right-0 p-4">
<i className="w-6 h-6 text-neon" data-lucide="sparkles"></i>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-6">
<h3 className="font-mono text-neon text-sm uppercase tracking-wider">What You Get</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300">30-Day Launch System</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300">10 Custom SKUs <span className="text-zinc-500 text-sm">(Labels &amp; Tags included)</span></span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300">Brand Identity + Lookbook</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300">90-Day Ad Creative Bundle</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neon shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-neon font-medium">Priority Launch Support</span>
</li>
</ul>
</div>
<div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-8 md:pt-0 md:pl-12">
<div>
<p className="text-zinc-400 text-sm mb-2">Bonus Highlights</p>
<div className="space-y-3">
<div className="bg-zinc-900 border border-zinc-800 p-3 rounded flex items-center gap-3">
<i className="w-4 h-4 text-neon" data-lucide="video"></i>
<span className="text-sm text-zinc-200">Reels/TikTok Strategy Guide</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-3 rounded flex items-center gap-3">
<i className="w-4 h-4 text-neon" data-lucide="box"></i>
<span className="text-sm text-zinc-200">Custom Packaging Mockups</span>
</div>
</div>
</div>
<div className="mt-8">
<button className="w-full bg-white text-black font-semibold py-4 hover:bg-neon transition-colors duration-300" onclick="document.getElementById('fit-check').scrollIntoView()">
                                Apply For Access
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-900 bg-zinc-950">
<div className="max-w-3xl mx-auto px-6 text-center reveal-on-scroll">
<div className="mb-6 flex justify-center">
<div className="w-16 h-16 rounded-full border border-neon/30 bg-neon/5 flex items-center justify-center">
<i className="w-8 h-8 text-neon" data-lucide="shield-check"></i>
</div>
</div>
<h2 className="font-display text-3xl font-semibold mb-6">Our Launch Guarantee</h2>
<p className="text-zinc-300 text-lg leading-relaxed">
                If our launch plan doesn't project at least <span className="text-white font-semibold">₹5,00,000</span> in revenue potential based on our audit, we refund the consultation fee and give you the launch playbook for free.
            </p>
</div>
</section>

<section className="py-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-on-scroll">
<div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Brands We've <br/>Helped Build</h2>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400">50+ Brands Launched</span>
<span className="px-4 py-2 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400">98% QC Pass Rate</span>
<span className="px-4 py-2 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400">Fast Turnaround</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-600 transition-colors reveal-on-scroll delay-100">
<div className="h-12 mb-8 flex items-center">
<span className="font-display font-bold text-2xl tracking-tight">NOCTURNAL©</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2">
<span className="text-zinc-500">Before</span>
<span className="text-zinc-300">Idea on napkin</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2">
<span className="text-zinc-500">After</span>
<span className="text-neon font-mono">₹12L Rev / Month</span>
</div>
<p className="text-zinc-400 text-sm mt-4 pt-2">Full collection development and influencer campaign management.</p>
</div>
</div>

<div className="group border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-600 transition-colors reveal-on-scroll delay-200">
<div className="h-12 mb-8 flex items-center">
<span className="font-display font-bold text-2xl tracking-tight italic">DRIFT_LABS</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2">
<span className="text-zinc-500">Before</span>
<span className="text-zinc-300">Struggling with POD</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2">
<span className="text-zinc-500">After</span>
<span className="text-neon font-mono">3.5x ROAS</span>
</div>
<p className="text-zinc-400 text-sm mt-4 pt-2">Rebranded visual identity and optimized manufacturing costs.</p>
</div>
</div>

<div className="group border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-600 transition-colors reveal-on-scroll delay-300">
<div className="h-12 mb-8 flex items-center">
<span className="font-display font-bold text-2xl tracking-tight text-zinc-100">BLVKOUT</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2">
<span className="text-zinc-500">Before</span>
<span className="text-zinc-300">Sold out 0 stock</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2">
<span className="text-zinc-500">After</span>
<span className="text-neon font-mono">Sold out 500 units</span>
</div>
<p className="text-zinc-400 text-sm mt-4 pt-2">Rapid prototyping and drop-shipping logistics setup.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-16 text-center reveal-on-scroll">How We Build Your Brand</h2>
<div className="relative grid md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-zinc-800 -z-10">
<div className="h-full bg-neon w-0 transition-all duration-1000 ease-out process-line-fill"></div>
</div>
<div className="group relative reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-black border border-zinc-700 group-hover:border-neon text-white group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10">1</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left">Idea</h3>
<p className="text-sm text-zinc-400 text-center md:text-left">Concept validation and market research.</p>
</div>
<div className="group relative reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-black border border-zinc-700 group-hover:border-neon text-white group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10">2</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left">Design</h3>
<p className="text-sm text-zinc-400 text-center md:text-left">Apparel design, tech packs, and sampling.</p>
</div>
<div className="group relative reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-black border border-zinc-700 group-hover:border-neon text-white group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10">3</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left">Manufacture</h3>
<p className="text-sm text-zinc-400 text-center md:text-left">Bulk production with strict QC checks.</p>
</div>
<div className="group relative reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-black border border-zinc-700 group-hover:border-neon text-white group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10">4</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left">Market &amp; Scale</h3>
<p className="text-sm text-zinc-400 text-center md:text-left">Launch campaigns and ad optimization.</p>
</div>
</div>
</div>
</section>

<section className="relative pt-24 pb-48 overflow-hidden">
<div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter">The Automagic Workflow</h2>
<p className="text-zinc-400 mt-4">Scroll to see how we handle your orders.</p>
</div>
<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2 hidden md:block"></div>

<div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 group mb-12">
<div className="w-full md:w-5/12 order-2 md:order-1 reveal-on-scroll">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
<i className="w-16 h-16 text-zinc-700" data-lucide="shopping-bag"></i>
<div className="absolute bottom-4 left-4 bg-black px-3 py-1 text-xs font-mono border border-zinc-800 text-neon">Lottie: order_notification.json</div>
</div>
</div>
<div className="w-full md:w-5/12 order-1 md:order-2 reveal-on-scroll delay-100 md:text-left">
<div className="flex items-center gap-4 mb-4 md:hidden">
<span className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center font-bold">1</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>
<h3 className="text-2xl font-display font-semibold mb-3">Order Received</h3>
<p className="text-zinc-400 leading-relaxed mb-6">A new Shopify order comes in — workflow starts instantly. No manual entry required.</p>
<div className="bg-zinc-900/50 border-l-2 border-neon p-4">
<p className="font-mono text-xs text-zinc-500 uppercase">Live Metric</p>
<p className="font-mono text-sm text-white">Order #1234 • ₹1,799 • ETA 5 days</p>
</div>
</div>
</div>
<div className="md:hidden h-px w-full bg-neon/20 my-12"></div>

<div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 group mb-12">
<div className="w-full md:w-5/12 order-1 reveal-on-scroll md:text-right">
<div className="flex items-center gap-4 mb-4 md:hidden">
<span className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center font-bold">2</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>
<h3 className="text-2xl font-display font-semibold mb-3">Order Scheduled</h3>
<p className="text-zinc-400 leading-relaxed mb-6">The order is automatically assigned to Batch #7 for production scheduling.</p>
<div className="bg-zinc-900/50 border-r-2 border-neon p-4 ml-auto inline-block text-right w-full">
<p className="font-mono text-xs text-zinc-500 uppercase">Status</p>
<p className="font-mono text-sm text-white">Batch #7 • Starts Tomorrow</p>
</div>
</div>
<div className="w-full md:w-5/12 order-2 reveal-on-scroll delay-100">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
<i className="w-16 h-16 text-zinc-700" data-lucide="calendar-clock"></i>
<div className="absolute bottom-4 left-4 bg-black px-3 py-1 text-xs font-mono border border-zinc-800 text-neon">Lottie: order_dashboard.json</div>
</div>
</div>
</div>
<div className="md:hidden h-px w-full bg-neon/20 my-12"></div>

<div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 group mb-12">
<div className="w-full md:w-5/12 order-2 md:order-1 reveal-on-scroll">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
<i className="w-16 h-16 text-zinc-700" data-lucide="hammer"></i>
<div className="absolute bottom-4 left-4 bg-black px-3 py-1 text-xs font-mono border border-zinc-800 text-neon">Lottie: manufacture.json</div>
</div>
</div>
<div className="w-full md:w-5/12 order-1 md:order-2 reveal-on-scroll delay-100">
<div className="flex items-center gap-4 mb-4 md:hidden">
<span className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center font-bold">3</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>
<h3 className="text-2xl font-display font-semibold mb-3">Manufacturing</h3>
<p className="text-zinc-400 leading-relaxed mb-6">Cutting, sewing, finishing, and rigorous QC checks by expert tailors.</p>
<div className="bg-zinc-900/50 border-l-2 border-neon p-4">
<p className="font-mono text-xs text-zinc-500 uppercase">Quality Control</p>
<p className="font-mono text-sm text-white">QC Pass Rate: 98%</p>
</div>
</div>
</div>
<div className="md:hidden h-px w-full bg-neon/20 my-12"></div>

<div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 group mb-12">
<div className="w-full md:w-5/12 order-1 reveal-on-scroll md:text-right">
<div className="flex items-center gap-4 mb-4 md:hidden">
<span className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center font-bold">4</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>
<h3 className="text-2xl font-display font-semibold mb-3">Packing</h3>
<p className="text-zinc-400 leading-relaxed mb-6">Packed with your custom branding inserts, tags, and shipping label.</p>
<div className="bg-zinc-900/50 border-r-2 border-neon p-4 ml-auto inline-block text-right w-full">
<p className="font-mono text-xs text-zinc-500 uppercase">Fulfillment</p>
<p className="font-mono text-sm text-white">Packed: 1/1 • Box ID: P-232</p>
</div>
</div>
<div className="w-full md:w-5/12 order-2 reveal-on-scroll delay-100">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
<i className="w-16 h-16 text-zinc-700" data-lucide="package"></i>
<div className="absolute bottom-4 left-4 bg-black px-3 py-1 text-xs font-mono border border-zinc-800 text-neon">Lottie: packing.json</div>
</div>
</div>
</div>
<div className="md:hidden h-px w-full bg-neon/20 my-12"></div>

<div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 group">
<div className="w-full md:w-5/12 order-2 md:order-1 reveal-on-scroll">
<div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
<i className="w-16 h-16 text-zinc-700" data-lucide="truck"></i>
<div className="absolute bottom-4 left-4 bg-black px-3 py-1 text-xs font-mono border border-zinc-800 text-neon">Lottie: dispatch.json</div>
</div>
</div>
<div className="w-full md:w-5/12 order-1 md:order-2 reveal-on-scroll delay-100">
<div className="flex items-center gap-4 mb-4 md:hidden">
<span className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center font-bold">5</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>
<h3 className="text-2xl font-display font-semibold mb-3">Dispatched</h3>
<p className="text-zinc-400 leading-relaxed mb-6">Courier collects the package. Tracking number sent to customer automatically.</p>
<div className="bg-zinc-900/50 border-l-2 border-neon p-4">
<p className="font-mono text-xs text-zinc-500 uppercase">Logistics</p>
<p className="font-mono text-sm text-white">ETA: 2 days • Carrier: QuickShip</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950">
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-12 text-center">We're Not For Everyone</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="border border-green-900/30 bg-green-950/10 p-8 rounded-lg reveal-on-scroll">
<h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-green-500" data-lucide="check"></i>
</div>
                        We are a match if...
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check"></i>
                            You value quality manufacturing over cheap pricing.
                        </li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check"></i>
                            You want branding &amp; ads done professionally.
                        </li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check"></i>
                            You are ready to build a real asset, not just a side hustle.
                        </li>
</ul>
</div>

<div className="border border-red-900/30 bg-red-950/10 p-8 rounded-lg reveal-on-scroll delay-100">
<h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-red-500" data-lucide="x"></i>
</div>
                        We are NOT for you if...
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x"></i>
                            You are looking for the cheapest vendor in the market.
                        </li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x"></i>
                            You aren't serious about investing in marketing.
                        </li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x"></i>
                            You have no clear goals or vision.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-panel border-y border-zinc-800" id="fit-check">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-on-scroll">
<div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-neon/20">
<i className="w-10 h-10 text-neon" data-lucide="clipboard-check"></i>
</div>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6">60-Second Fit Check</h2>
<p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
                We only work with a few brands each month. Answer a few quick questions to see if we're a good match for your launch.
            </p>
<button className="animate-bounce-slow bg-neon text-black font-semibold text-lg px-10 py-5 rounded-none hover:bg-white transition-all shadow-[0_0_30px_rgba(192,255,0,0.3)] hover:shadow-[0_0_50px_rgba(192,255,0,0.5)] transform hover:-translate-y-1" onclick="openModal()">
                Start Questionnaire →
            </button>
<p className="mt-4 text-xs text-zinc-500 font-mono">Takes less than 1 minute • No obligation</p>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-display text-3xl font-semibold mb-4">Choose Your Launch Investment</h2>
<p className="text-zinc-400">Pricing helps us match you with the right launch plan.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-zinc-600 transition-colors reveal-on-scroll">
<h3 className="text-lg font-semibold text-zinc-300 mb-2">Starter</h3>
<p className="text-3xl font-display font-semibold mb-6">From ₹50k</p>
<ul className="text-sm text-zinc-400 space-y-2 mb-8">
<li>• Basic Branding</li>
<li>• 5 SKUs POD</li>
<li>• Launch Strategy</li>
</ul>
</div>

<div className="border border-neon bg-zinc-900/60 p-8 relative reveal-on-scroll delay-100">
<div className="absolute top-0 right-0 bg-neon text-black text-xs font-bold px-3 py-1 uppercase">Most Popular</div>
<h3 className="text-lg font-semibold text-neon mb-2">Scale</h3>
<p className="text-3xl font-display font-semibold mb-6">From ₹1.5L</p>
<ul className="text-sm text-zinc-300 space-y-2 mb-8">
<li>• Full Brand Identity</li>
<li>• 10 SKUs + Custom Labels</li>
<li>• 90-Day Marketing Mgmt</li>
</ul>
</div>

<div className="border border-zinc-800 bg-zinc-900/30 p-8 hover:border-zinc-600 transition-colors reveal-on-scroll delay-200">
<h3 className="text-lg font-semibold text-zinc-300 mb-2">Enterprise</h3>
<p className="text-3xl font-display font-semibold mb-6">Custom</p>
<ul className="text-sm text-zinc-400 space-y-2 mb-8">
<li>• Complete Brand Overhaul</li>
<li>• Unlimited SKUs</li>
<li>• Dedicated Account Mgr</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-12 text-center reveal-on-scroll">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="border-b border-zinc-800 pb-4 reveal-on-scroll">
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium">What's included in the launch?</span>
<i className="w-5 h-5 text-zinc-500" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="text-zinc-400 pt-2 pb-4 leading-relaxed">Everything you need: Manufacturing of your initial stock, complete branding (logo, colors, typography), and a comprehensive 90-day marketing strategy to get sales from day one.</p>
</div>
</div>

<div className="border-b border-zinc-800 pb-4 reveal-on-scroll delay-100">
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium">How fast is delivery?</span>
<i className="w-5 h-5 text-zinc-500" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="text-zinc-400 pt-2 pb-4 leading-relaxed">Our typical turnaround for sampling is 7-10 days. Bulk production takes 14-20 days depending on complexity. Direct-to-customer orders dispatch within 48 hours.</p>
</div>
</div>

<div className="border-b border-zinc-800 pb-4 reveal-on-scroll delay-200">
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium">What if I don't have designs?</span>
<i className="w-5 h-5 text-zinc-500" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="text-zinc-400 pt-2 pb-4 leading-relaxed">No problem. Our in-house design team specializes in streetwear aesthetics. We can create designs from scratch based on your vision or mood boards.</p>
</div>
</div>

<div className="border-b border-zinc-800 pb-4 reveal-on-scroll delay-300">
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium">How do you guarantee results?</span>
<i className="w-5 h-5 text-zinc-500" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="text-zinc-400 pt-2 pb-4 leading-relaxed">We perform a detailed audit before taking you on. If our data shows your niche isn't viable for our minimum revenue targets, we won't take your money. If we proceed, we back it with our refund guarantee.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-center px-6">
<div className="max-w-2xl mx-auto reveal-on-scroll">
<h2 className="font-display text-3xl font-semibold mb-4">Book Your Strategy Call</h2>
<p className="text-zinc-400 mb-8">Available only for qualified applicants who pass the Fit Check.</p>
<div className="bg-zinc-900 border border-zinc-800 rounded-lg h-64 flex flex-col items-center justify-center gap-4 text-zinc-500">
<i className="w-12 h-12 opacity-50" data-lucide="calendar"></i>
<span className="font-mono text-sm">[Calendly Embed Placeholder]</span>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-900 bg-black text-center">
<div className="max-w-7xl mx-auto px-6">
<p className="font-display font-semibold tracking-tight text-white mb-4">Streetlab Studios <span className="text-zinc-600">×</span> Marketing Bandits</p>
<p className="text-zinc-500 text-sm mb-8">info@streetlabstudios.com</p>
<p className="text-zinc-700 text-xs">© 2025 All Rights Reserved. Streetwear infrastructure for the modern age.</p>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="modal-overlay">
<div className="bg-zinc-900 w-full max-w-2xl h-[80vh] border border-zinc-800 rounded-lg relative transform scale-95 transition-transform duration-300 flex flex-col" id="modal-content">

<div className="flex justify-between items-center p-6 border-b border-zinc-800">
<h3 className="font-display text-xl font-semibold">Fit Check Questionnaire</h3>
<button className="text-zinc-400 hover:text-white" onclick="closeModal()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 flex items-center justify-center bg-zinc-950 p-6">
<div className="text-center text-zinc-500 space-y-4">
<i className="w-16 h-16 mx-auto opacity-20" data-lucide="file-text"></i>
<p className="font-mono">[Typeform / Tally Embed Placeholder]</p>
<p className="text-sm max-w-sm mx-auto">This area would contain the embedded questionnaire form.</p>
</div>
</div>
</div>
</div>



    </>
  );
}
