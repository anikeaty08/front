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
cream: { 50: '#FDFBF7', 100: '#F9F6F0' },
stone: { 850: '#1f1c1a' }
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
widest: '0.2em',
}
}
}
}



        function switchPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }

            // Update Nav State
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.getAttribute('data-target') === pageId) {
                    link.classList.add('text-stone-900');
                    link.classList.remove('text-stone-500');
                } else {
                    link.classList.remove('text-stone-900');
                    link.classList.add('text-stone-500');
                }
            });
        }

        // Initialize Home active state
        document.addEventListener('DOMContentLoaded', () => {
             const homeLink = document.querySelector('.nav-link[data-target="home"]');
             if(homeLink) {
                 homeLink.classList.add('text-stone-900');
                 homeLink.classList.remove('text-stone-500');
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
      

<nav className="fixed w-full z-50 top-0 bg-cream-50/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">

<a className="font-serif text-2xl tracking-tighter text-stone-900 z-50 relative group" href="#" onclick="switchPage('home')">
                LAREINE
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
</a>

<div className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-widest font-medium text-stone-500">
<button className="nav-link hover:text-stone-900 transition-colors" data-target="home" onclick="switchPage('home')">Studio</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="lashes" onclick="switchPage('lashes')">Lashes</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="nails" onclick="switchPage('nails')">Nails</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="course" onclick="switchPage('course')">Academy</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="contact" onclick="switchPage('contact')">Visit Us</button>
</div>

<button className="lg:hidden text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-24 min-h-screen">

<div className="page-section active" id="home">

<section className="relative h-[85vh] w-full overflow-hidden flex items-end pb-20 px-6 md:px-12">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover object-top opacity-90" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
<div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-10 text-cream-50">
<div>
<span className="block text-xs uppercase tracking-[0.3em] mb-4 opacity-80">Est. 2023 — Jakarta</span>
<h1 className="font-serif text-6xl md:text-8xl tracking-tight leading-none mb-2">
                            Elevated <br/> <i className="font-light opacity-80">Simplicity</i>
</h1>
</div>
<div className="max-w-xs md:mb-4">
<p className="text-sm font-light leading-relaxed opacity-90 border-l border-cream-50/30 pl-6">
                            Where precision meets artistry. We specialize in bespoke lash enhancements and architectural nail designs tailored to your unique essence.
                        </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
<div className="bg-cream-50 p-12 hover:bg-white transition-all cursor-pointer group" onclick="switchPage('lashes')">
<h3 className="font-serif text-3xl mb-4 group-hover:translate-x-2 transition-transform">Lashes</h3>
<p className="text-stone-500 font-light text-sm mb-8">Japanese &amp; Russian techniques for weightless volume.</p>
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="bg-cream-50 p-12 hover:bg-white transition-all cursor-pointer group" onclick="switchPage('nails')">
<h3 className="font-serif text-3xl mb-4 group-hover:translate-x-2 transition-transform">Nails</h3>
<p className="text-stone-500 font-light text-sm mb-8">Gel-X extensions and hand-painted bespoke artistry.</p>
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="bg-cream-50 p-12 hover:bg-white transition-all cursor-pointer group" onclick="switchPage('course')">
<h3 className="font-serif text-3xl mb-4 group-hover:translate-x-2 transition-transform">Academy</h3>
<p className="text-stone-500 font-light text-sm mb-8">Professional certification courses for aspiring technicians.</p>
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</section>
</div>

<div className="page-section" id="lashes">
<header className="pt-20 pb-16 px-6 text-center max-w-3xl mx-auto">
<span className="text-xs text-stone-500 uppercase tracking-widest block mb-4">The Menu</span>
<h1 className="font-serif text-5xl md:text-6xl text-stone-900 tracking-tight mb-8">Lash Architecture</h1>
<p className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
                    We exclusively use premium cashmere and silk fibers. Every set is mapped according to your eye shape, natural lash health, and lifestyle.
                </p>
</header>
<div className="max-w-[1200px] mx-auto px-6 pb-24 grid gap-16">

<div className="grid md:grid-cols-2 gap-12 items-center group">
<div className="aspect-[4/3] bg-stone-200 overflow-hidden relative rounded-sm">
<img alt="Classic Lashes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1587779782352-257a0525547e?q=80&amp;w=2146&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-baseline justify-between border-b border-stone-200 pb-4 mb-6">
<h2 className="font-serif text-3xl text-stone-900">The Classic</h2>
<span className="font-serif text-xl text-stone-600">$85</span>
</div>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                            Our signature "mascara look". One individual extension is applied to one natural lash (1:1). Perfect for everyday elegance and those trying extensions for the first time.
                        </p>
<ul className="text-xs text-stone-500 space-y-2 uppercase tracking-wide">
<li className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 90 Minutes</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Natural Fullness</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center group">
<div className="order-2 md:order-1">
<div className="flex items-baseline justify-between border-b border-stone-200 pb-4 mb-6">
<h2 className="font-serif text-3xl text-stone-900">The Hybrid</h2>
<span className="font-serif text-xl text-stone-600">$105</span>
</div>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                            A textured mix of Classic and Volume fans. This style offers a wispy, slightly denser line that mimics the look of strip lashes without the weight.
                        </p>
<ul className="text-xs text-stone-500 space-y-2 uppercase tracking-wide">
<li className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 105 Minutes</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Textured Finish</li>
</ul>
</div>
<div className="order-1 md:order-2 aspect-[4/3] bg-stone-200 overflow-hidden relative rounded-sm">
<img alt="Hybrid Lashes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1628929731678-a61678255955?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center group">
<div className="aspect-[4/3] bg-stone-200 overflow-hidden relative rounded-sm">
<img alt="Volume Lashes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="flex items-baseline justify-between border-b border-stone-200 pb-4 mb-6">
<h2 className="font-serif text-3xl text-stone-900">Russian Volume</h2>
<span className="font-serif text-xl text-stone-600">$130</span>
</div>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                            Hand-made fans of ultra-fine lashes (2D-6D) applied to a single natural lash. Creates a dark, fluffy lash line and dramatic impact while remaining safe for natural lashes.
                        </p>
<ul className="text-xs text-stone-500 space-y-2 uppercase tracking-wide">
<li className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 120 Minutes</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> High Density</li>
</ul>
</div>
</div>
</div>
</div>

<div className="page-section" id="nails">
<div className="bg-stone-850 text-cream-50 py-24 px-6">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
<div>
<h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-4">Nail Atelier</h1>
<p className="text-stone-400 font-light max-w-md text-sm">Beyond maintenance. We view nails as a canvas for self-expression, utilizing precision e-file manicures.</p>
</div>
<div className="flex gap-8 text-xs uppercase tracking-widest text-stone-400">
<span>• Gel-X System</span>
<span>• Biab Overlay</span>
<span>• Hand-Painted Art</span>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">

<div>
<h3 className="font-serif text-2xl mb-6 border-b border-stone-200 pb-2">Extensions</h3>
<ul className="space-y-6">
<li className="flex justify-between items-center group cursor-pointer">
<div>
<p className="text-stone-900 font-medium">Aprés Gel-X™</p>
<p className="text-xs text-stone-500 mt-1">Full soft gel extension, no dust, no odor.</p>
</div>
<span className="text-stone-900 text-sm">$80</span>
</li>
<li className="flex justify-between items-center group cursor-pointer">
<div>
<p className="text-stone-900 font-medium">Polygel Sculpting</p>
<p className="text-xs text-stone-500 mt-1">Hybrid formula for extreme lengths.</p>
</div>
<span className="text-stone-900 text-sm">$95</span>
</li>
</ul>
</div>

<div>
<h3 className="font-serif text-2xl mb-6 border-b border-stone-200 pb-2">Art Tiers (Add-on)</h3>
<ul className="space-y-6">
<li className="flex justify-between items-center">
<div>
<p className="text-stone-900 font-medium">Tier I: Minimalist</p>
<p className="text-xs text-stone-500 mt-1">French, simple lines, chrome dust.</p>
</div>
<span className="text-stone-900 text-sm">+$15</span>
</li>
<li className="flex justify-between items-center">
<div>
<p className="text-stone-900 font-medium">Tier II: Detailed</p>
<p className="text-xs text-stone-500 mt-1">Tortoise, marble, abstract swirls.</p>
</div>
<span className="text-stone-900 text-sm">+$30</span>
</li>
<li className="flex justify-between items-center">
<div>
<p className="text-stone-900 font-medium">Tier III: Masterpiece</p>
<p className="text-xs text-stone-500 mt-1">3D charms, detailed character art.</p>
</div>
<span className="text-stone-900 text-sm">+$50+</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2 h-[400px] overflow-hidden rounded-sm relative group">
<img alt="Nail Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<span className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-widest bg-stone-900/50 backdrop-blur px-3 py-1">Featured: Chrome</span>
</div>
<div className="h-[500px] overflow-hidden rounded-sm relative group">
<img alt="Nail Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1632515904467-347575306354?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-[500px] overflow-hidden rounded-sm relative group">
<img alt="Nail Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="course">
<header className="bg-stone-100 py-32 px-6 text-center">
<span className="inline-block border border-stone-800 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-6">Now Enrolling</span>
<h1 className="font-serif text-5xl md:text-7xl tracking-tighter text-stone-900 mb-6">Master The Craft</h1>
<p className="max-w-2xl mx-auto text-stone-600 font-light text-sm md:text-base">
                    Comprehensive 2-day intensive training for the modern lash artist. Learn theory, safety, and our signature application techniques.
                </p>
</header>
<div className="max-w-5xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="font-serif text-3xl mb-8">Course Curriculum</h2>

<div className="relative border-l border-stone-300 ml-3 space-y-12">
<div className="pl-8 relative">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-900"></span>
<h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2">Module 01: Theory &amp; Safety</h4>
<p className="text-sm text-stone-500 font-light">Anatomy of the eye, contraindications, sanitation protocols, and adhesive chemistry.</p>
</div>
<div className="pl-8 relative">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-900"></span>
<h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2">Module 02: Mapping &amp; Styling</h4>
<p className="text-sm text-stone-500 font-light">Customizing styles for different eye shapes. Cat eye, doll eye, and wispy mapping techniques.</p>
</div>
<div className="pl-8 relative">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-900"></span>
<h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2">Module 03: Live Model Practice</h4>
<p className="text-sm text-stone-500 font-light">Hands-on application under strict supervision. Isolation, direction, and retention mastery.</p>
</div>
<div className="pl-8 relative">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-900"></span>
<h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2">Module 04: Business &amp; Branding</h4>
<p className="text-sm text-stone-500 font-light">Photography tips, social media strategy, and client retention pricing models.</p>
</div>
</div>
</div>
<div className="bg-stone-900 p-10 text-cream-50 rounded-sm h-fit">
<h3 className="font-serif text-2xl mb-2 text-white">Classic &amp; Volume Certification</h3>
<p className="text-stone-400 text-xs mb-8">Next Batch: October 14-15, 2023</p>
<div className="space-y-4 mb-8">
<div className="flex justify-between border-b border-stone-700 pb-2">
<span className="text-sm font-light">Duration</span>
<span className="text-sm font-medium">2 Days (10am - 5pm)</span>
</div>
<div className="flex justify-between border-b border-stone-700 pb-2">
<span className="text-sm font-light">Kit Included</span>
<span className="text-sm font-medium">Worth $300</span>
</div>
<div className="flex justify-between border-b border-stone-700 pb-2">
<span className="text-sm font-light">Total Investment</span>
<span className="text-sm font-medium">$850</span>
</div>
</div>
<button className="w-full bg-cream-50 text-stone-900 py-4 text-xs uppercase tracking-widest hover:bg-white transition-colors">
                            Secure Your Spot
                        </button>
</div>
</div>
</div>
</div>

<div className="page-section" id="contact">
<div className="flex flex-col md:flex-row h-[calc(100vh-6rem)]">

<div className="w-full md:w-1/2 bg-stone-200 relative min-h-[300px]">
<img alt="Location" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-32 h-32 border border-stone-900 rounded-full flex items-center justify-center bg-cream-50/20 backdrop-blur-sm">
<iconify-icon className="text-stone-900" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="w-full md:w-1/2 bg-cream-50 flex flex-col justify-center px-8 md:px-20 py-12">
<h1 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-900 mb-12">Visit the Studio</h1>
<div className="space-y-10">
<div>
<span className="text-xs uppercase tracking-widest text-stone-400 block mb-2">Location</span>
<p className="text-stone-800 text-lg font-light leading-relaxed">
                                Jl. Senopati No. 12<br/>
                                Kebayoran Baru, Jakarta Selatan<br/>
                                Indonesia 12190
                            </p>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-stone-400 block mb-2">Operating Hours</span>
<div className="grid grid-cols-2 gap-8 max-w-sm">
<div>
<p className="text-stone-800 font-medium text-sm">Mon - Fri</p>
<p className="text-stone-600 font-light text-sm">10:00 - 20:00</p>
</div>
<div>
<p className="text-stone-800 font-medium text-sm">Sat - Sun</p>
<p className="text-stone-600 font-light text-sm">09:00 - 18:00</p>
</div>
</div>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-stone-400 block mb-2">Contact</span>
<a className="block text-stone-800 text-lg hover:text-stone-500 transition-colors" href="#">+62 812 3456 7890</a>
<a className="block text-stone-800 text-lg hover:text-stone-500 transition-colors" href="#">hello@lareine.com</a>
</div>
<div className="pt-8 border-t border-stone-200">
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest bg-stone-900 text-cream-50 px-8 py-4 hover:bg-stone-700 transition-colors" href="#">
                                Book Appointment
                            </a>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-cream-100 border-t border-stone-200 py-12">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-serif text-xl tracking-tight">LAREINE</span>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:chat-round-linear" width="20"></iconify-icon></a>
</div>
<p className="text-xs text-stone-400 font-light">© 2023 Lareine Studio</p>
</div>
</footer>



    </>
  );
}
