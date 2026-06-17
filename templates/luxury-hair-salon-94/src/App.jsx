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
darkMode: 'class',
theme: {
extend: {
colors: {
noir: {
light: '#FAFAFA',
dark: '#050505',
gold: '#B08968',
border: 'rgba(0,0,0,0.08)',
darkBorder: 'rgba(255,255,255,0.08)'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
}
}
}
}
function toggleTheme() {
document.documentElement.classList.toggle('dark');
const isDark = document.documentElement.classList.contains('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
updateThemeIcons(isDark);
}
function updateThemeIcons(isDark) {
const sun = document.getElementById('sun-icon');
const moon = document.getElementById('moon-icon');
if(isDark){
sun.classList.remove('hidden');
moon.classList.add('hidden');
} else {
sun.classList.add('hidden');
moon.classList.remove('hidden');
}
}
document.addEventListener('DOMContentLoaded', () => {
const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
if (isDark) document.documentElement.classList.add('dark');
updateThemeIcons(isDark);
});



        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-noir-border dark:border-noir-darkBorder h-20">
<div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-none group-hover:bg-noir-gold transition-colors duration-300">
<span className="font-bold text-[10px] tracking-tighter">HN</span>
</div>
<span className="font-serif text-xl font-medium tracking-tight">House of Noir</span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-xs uppercase tracking-[0.2em] hover:text-noir-gold transition-colors" href="/about-us">Services</a>
<a className="text-xs uppercase tracking-[0.2em] hover:text-noir-gold transition-colors" href="#team">Artists</a>
<a className="text-xs uppercase tracking-[0.2em] hover:text-noir-gold transition-colors" href="#lookbook">Lookbook</a>
</div>

<div className="flex items-center gap-6">
<button className="hover:text-noir-gold transition-colors" onclick="toggleTheme()">
<iconify-icon className="hidden" icon="solar:moon-linear" id="moon-icon" width="20"></iconify-icon>
<iconify-icon className="" icon="solar:sun-linear" id="sun-icon" width="20"></iconify-icon>
</button>
<a className="hidden sm:flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-noir-gold dark:hover:bg-noir-gold dark:hover:text-white transition-colors rounded-none" href="https://squareup.com" target="_blank">
                    Book Now
                </a>
</div>
</div>
</nav>

<header className="min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-2 border-b border-noir-border dark:border-noir-darkBorder">

<div className="flex flex-col sm:px-16 lg:px-24 dark:bg-[#050505] order-2 lg:order-1 bg-[#FDFBF9] pt-20 pr-8 pb-20 pl-8 justify-center">

<div className="flex gap-3 mb-8 gap-x-3 gap-y-3 items-center">
<span className="w-2 h-2 bg-[#B08968]"></span>
<span className="text-[10px] font-medium tracking-widest uppercase text-[#111]/60 dark:text-white/60">Duncan's Premier Studio</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] font-light tracking-tight mb-8 text-[#111] dark:text-white">
                Define Your Aura.
            </h1>
<p className="text-base md:text-lg text-[#111]/60 dark:text-white/60 max-w-md leading-relaxed font-light mb-12">
                House of Noir is a sanctuary of radiance where artistry meets expertise. We don't just style hair; we craft an
                identity.
            </p>

<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-start" id="hero-cta">
<a className="px-8 py-4 bg-[#111] dark:bg-white text-white dark:text-black text-xs font-semibold tracking-widest uppercase hover:bg-[#B08968] dark:hover:bg-[#B08968] dark:hover:text-white transition-colors flex items-center justify-center gap-2 rounded-none min-w-[160px]" href="https://app.squareup.com/appointments/book/wsl2im5o2nxjch/L9EKTADX6RAV1/start">
                    Book Now
                </a>
<a className="px-8 py-4 border border-[#111]/20 dark:border-white/20 text-[#111] dark:text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#111] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center gap-2 rounded-none min-w-[160px]" href="#services">
                    Services
                </a>
<a className="px-8 py-4 bg-transparent text-[#111] dark:text-white text-xs font-semibold tracking-widest uppercase hover:text-[#B08968] transition-colors flex items-center justify-center gap-2 rounded-none" href="#contact">
                    Contact Us
                </a>
</div>
</div>

<div className="relative h-[50vh] lg:h-auto order-1 lg:order-2 border-l border-noir-border dark:border-noir-darkBorder overflow-hidden group">
<img alt="Model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="dark:bg-black/30 flex md:p-10 transition-colors duration-300 bg-black/10 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-start">
<div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-none inline-flex items-center gap-3 text-white shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">Duncan, BC</span>
</div>
</div>
</div>
</header>

<section className="py-24 border-b border-noir-border dark:border-noir-darkBorder bg-white dark:bg-[#080808] fade-in" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4">
<span className="text-noir-gold text-[10px] tracking-[0.25em] uppercase font-semibold mb-4 block">The Philosophy</span>
<h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">
                        Precision in <br/>Every Detail.
                    </h2>
<p className="text-sm text-[#111]/60 dark:text-white/60 leading-relaxed">
                        We believe in the quiet confidence of perfectly tailored hair. A blend of technical mastery, sustainable products, and intuitive design.
                    </p>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="group">
<div className="w-10 h-10 border border-[#111]/10 dark:border-white/10 flex items-center justify-center mb-6 text-[#111] dark:text-white group-hover:bg-noir-gold group-hover:border-noir-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:scissors-square-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3">Architectural Cuts</h3>
<p className="text-sm text-[#111]/50 dark:text-white/50 leading-relaxed">
                            Building shape from the inside out. Dry-cutting techniques ensure the style holds effortlessly.
                        </p>
</div>
<div className="group">
<div className="w-10 h-10 border border-[#111]/10 dark:border-white/10 flex items-center justify-center mb-6 text-[#111] dark:text-white group-hover:bg-noir-gold group-hover:border-noir-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:pallete-2-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3">Dimensional Color</h3>
<p className="text-sm text-[#111]/50 dark:text-white/50 leading-relaxed">
                            Custom formulations that enhance natural tones. Low maintenance, high impact placement.
                        </p>
</div>
<div className="group">
<div className="w-10 h-10 border border-[#111]/10 dark:border-white/10 flex items-center justify-center mb-6 text-[#111] dark:text-white group-hover:bg-noir-gold group-hover:border-noir-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3">Sustainable Care</h3>
<p className="text-sm text-[#111]/50 dark:text-white/50 leading-relaxed">
                            Partnering with eco-conscious brands like Davines to protect your hair and the planet.
                        </p>
</div>
<div className="group">
<div className="w-10 h-10 border border-[#111]/10 dark:border-white/10 flex items-center justify-center mb-6 text-[#111] dark:text-white group-hover:bg-noir-gold group-hover:border-noir-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3">Holistic Time</h3>
<p className="text-sm text-[#111]/50 dark:text-white/50 leading-relaxed">
                            We never double book. Your appointment is exclusively yours, from consultation to finish.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-noir-dark border-noir-border dark:border-noir-darkBorder fade-in border-b pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end mb-16 gap-x-6 gap-y-6 justify-between">
<div className="">
<span className="text-noir-gold text-[10px] tracking-[0.25em] uppercase font-semibold mb-4 block">Menu</span>
<h2 className="md:text-5xl dark:text-white text-4xl text-[#111] font-serif">Curated Services</h2>
</div>
<a className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-[#111] dark:border-white pb-1 inline-flex items-center gap-2" href="https://squareup.com" target="_blank">
                    Book Full Menu <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="aspect-[4/5] w-full bg-white dark:bg-[#111] border border-noir-border dark:border-noir-darkBorder overflow-hidden mb-6 relative">
<img alt="Cut" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=2000"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-[10px] uppercase tracking-widest font-bold">Book This Service</span>
</div>
</div>
<div className="flex justify-between items-baseline border-b border-noir-border dark:border-noir-darkBorder pb-4">
<h3 className="font-serif text-2xl text-[#111] dark:text-white">Signature Cut</h3>
<span className="font-serif italic text-[#111]/60 dark:text-white/60">$85+</span>
</div>
<p className="mt-3 text-xs uppercase tracking-widest text-[#111]/50 dark:text-white/50">Wash, Massage, Cut &amp; Style</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] w-full bg-white dark:bg-[#111] border border-noir-border dark:border-noir-darkBorder overflow-hidden mb-6 relative">
<img alt="Color" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2000"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-[10px] uppercase tracking-widest font-bold">Book This Service</span>
</div>
</div>
<div className="flex justify-between items-baseline border-b border-noir-border dark:border-noir-darkBorder pb-4">
<h3 className="font-serif text-2xl text-[#111] dark:text-white">Balayage</h3>
<span className="font-serif italic text-[#111]/60 dark:text-white/60">$210+</span>
</div>
<p className="mt-3 text-xs uppercase tracking-widest text-[#111]/50 dark:text-white/50">Hand-painted dimension</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[4/5] w-full bg-white dark:bg-[#111] border border-noir-border dark:border-noir-darkBorder overflow-hidden mb-6 relative">
<img alt="Style" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=2000"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-[10px] uppercase tracking-widest font-bold">Book This Service</span>
</div>
</div>
<div className="flex justify-between items-baseline border-b border-noir-border dark:border-noir-darkBorder pb-4">
<h3 className="font-serif text-2xl text-[#111] dark:text-white">Texture</h3>
<span className="font-serif italic text-[#111]/60 dark:text-white/60">$150+</span>
</div>
<p className="mt-3 text-xs uppercase tracking-widest text-[#111]/50 dark:text-white/50">Smoothing &amp; Perming</p>
</div>
</div>
</div>
</section>
<section className="dark:bg-[#0A0A0A] border-y dark:border-white/5 z-10 fade-in bg-white w-full border-[#111]/5 pt-32 pr-4 pb-32 pl-4 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="flex text-[#B08968] mb-6 gap-x-1 gap-y-1 justify-center">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h2 className="reveal-text font-serif text-4xl md:text-6xl leading-tight font-light text-[#111] dark:text-white tracking-tight">
                “A rare gem. The attention to detail is unmatched, and the atmosphere feels like a high-end studio in NYC.”
            </h2>
<div className="mt-8 flex flex-col items-center">
<img alt="Sarah Jenkins" className="w-12 h-12 rounded-full mb-3 border border-[#B08968] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<span className="text-xs uppercase tracking-widest font-medium text-[#111] dark:text-white">Sarah Jenkins</span>
<span className="text-[10px] text-[#111]/40 dark:text-white/40 uppercase tracking-widest mt-1">Verified Client</span>
</div>
</div>
</section>

<section className="py-24 border-b border-noir-border dark:border-noir-darkBorder bg-[#FAFAFA] dark:bg-[#050505] fade-in">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<span className="text-noir-gold text-[10px] tracking-[0.25em] uppercase font-semibold mb-6 block">The Process</span>
<h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8 text-[#111] dark:text-white">
                        Bespoke <br/>Consultations.
                    </h2>
<p className="text-sm text-[#111]/60 dark:text-white/60 leading-relaxed mb-8 max-w-md font-light">
                        True style begins with understanding. Before we pick up a pair of shears, we sit down to analyze your hair texture, face shape, and lifestyle. This collaborative approach ensures a look that is not only beautiful but effortlessly wearable.
                    </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-none border border-[#111]/10 dark:border-white/10 flex items-center justify-center text-noir-gold group-hover:bg-noir-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-speak-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-[#111] dark:text-white mb-1">In-Depth Analysis</h4>
<p className="text-xs text-[#111]/50 dark:text-white/50">Assessing scalp health and hair integrity.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-none border border-[#111]/10 dark:border-white/10 flex items-center justify-center text-noir-gold group-hover:bg-noir-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-[#111] dark:text-white mb-1">Custom Formulation</h4>
<p className="text-xs text-[#111]/50 dark:text-white/50">Color designed specifically for your skin tone.</p>
</div>
</li>
</ul>
<a className="inline-flex items-center gap-2 border-b border-[#111] dark:border-white pb-1 text-xs uppercase tracking-[0.2em] font-bold hover:text-noir-gold hover:border-noir-gold transition-colors" href="#contact">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="order-1 lg:order-2 relative h-[500px] lg:h-[650px] overflow-hidden group">
<img alt="Consultation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 right-6">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 max-w-[200px]">
<p className="text-[10px] text-white/90 leading-relaxed font-serif italic">
                                "We don't just cut hair; we design it to fit your life."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative h-[80vh] w-full overflow-hidden fade-in">

<div className="absolute inset-0">
<img alt="Texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=2574"/>
<div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
</div>

<div className="flex flex-col h-full z-10 pr-4 pl-4 relative items-center justify-center">
<h2 className="reveal-text text-white font-serif text-5xl md:text-7xl mb-12 text-center font-light leading-tight">
<span className="block">Experience</span>
<span className="block">the Sanctuary.</span>
</h2>

<div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 transform transition-all duration-700">
<div className="flex justify-between items-center mb-8">
<div className="text-white/80 text-xs uppercase tracking-widest font-semibold">Live Availability</div>
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-white text-sm mb-2 font-medium">
<span className="font-serif italic">Summer 2024</span>
<span className="text-noir-gold">Filling Fast</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-noir-gold w-[85%]"></div>
</div>
</div>
<div className="flex gap-4">
<div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
<div className="text-2xl text-white font-serif mb-1">3</div>
<div className="text-[10px] text-white/60 uppercase tracking-widest">Stylists</div>
</div>
<div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
<div className="text-2xl text-white font-serif mb-1">500+</div>
<div className="text-[10px] text-white/60 uppercase tracking-widest">Clients</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 text-center">
<a className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold hover:text-noir-gold transition-colors group" href="https://app.squareup.com/appointments/book/wsl2im5o2nxjch/L9EKTADX6RAV1/start" target="_blank">
                        Secure your appointment
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>


<section className="dark:bg-[#080808] border-noir-border dark:border-noir-darkBorder fade-in overflow-hidden bg-white border-b pt-24 pb-24 relative" id="team">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-noir-border dark:bg-noir-darkBorder hidden md:block opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="flex flex-col gap-24 gap-x-24 gap-y-24">

<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-noir-gold"></span>
<span className="text-noir-gold text-[10px] tracking-[0.25em] uppercase font-semibold">The Collective</span>
</div>
<h2 className="dark:text-white leading-[0.9] md:text-6xl text-5xl text-[#111] tracking-tight font-serif">Master Stylists</h2>
</div>

<div className="group relative w-full max-w-md">
<div className="aspect-[3/4] overflow-hidden bg-[#f0f0f0] dark:bg-[#111] mb-8 relative">

<img alt="Elena Noir" className="group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1200"/>

<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<div className="w-12 h-12 bg-white dark:bg-noir-gold text-black dark:text-white flex items-center justify-center rounded-none shadow-lg">
<iconify-icon className="" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col relative pl-6 border-l border-noir-border dark:border-noir-darkBorder group-hover:border-noir-gold transition-colors duration-500">
<h3 className="font-serif text-3xl md:text-4xl text-[#111] dark:text-white mb-2 group-hover:text-noir-gold transition-colors duration-300 tracking-tight">Elena Noir</h3>
<p className="text-[10px] uppercase tracking-[0.2em] text-noir-gold font-semibold mb-4">Creative Director</p>
<p className="text-sm text-[#111]/60 dark:text-white/60 leading-relaxed font-light font-sans max-w-xs">
                            Specializing in architectural cuts and transformational color corrections. 15+ years defining the Noir aesthetic.
                        </p>

<div className="flex gap-6 mt-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<a className="text-[#111] dark:text-white hover:text-noir-gold transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold" href="#">
<iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon> Portfolio
                             </a>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-24 md:pt-40">


<div className="group relative w-full max-w-md ml-auto">
<div className="aspect-[3/4] overflow-hidden bg-[#f0f0f0] dark:bg-[#111] mb-8 relative">

<img alt="Julian Voss" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1200"/>

<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<div className="w-12 h-12 bg-white dark:bg-noir-gold text-black dark:text-white flex items-center justify-center rounded-none shadow-lg">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col relative pl-6 border-l border-noir-border dark:border-noir-darkBorder group-hover:border-noir-gold transition-colors duration-500">
<h3 className="font-serif text-3xl md:text-4xl text-[#111] dark:text-white mb-2 group-hover:text-noir-gold transition-colors duration-300 tracking-tight">Julian Voss</h3>
<p className="text-[10px] uppercase tracking-[0.2em] text-noir-gold font-semibold mb-4">Senior Stylist</p>
<p className="text-sm text-[#111]/60 dark:text-white/60 leading-relaxed font-light font-sans max-w-xs">
                            Master of the lived-in blonde and intricate balayage techniques. Focused on sustainable beauty practices.
                        </p>

<div className="flex gap-6 mt-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<a className="text-[#111] dark:text-white hover:text-noir-gold transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold" href="#">
<iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon> Portfolio
                             </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-noir-dark border-noir-border dark:border-noir-darkBorder overflow-hidden fade-in border-b pt-32 pb-32" id="lookbook">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between">
<div className="">
<span className="text-noir-gold text-xs tracking-[0.25em] uppercase font-semibold mb-4 block">The Archive</span>
<h2 className="font-serif text-5xl md:text-6xl text-[#111] dark:text-white leading-none tracking-tight">Visual Dialogue</h2>
</div>
<div className="hidden md:flex items-center gap-4 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-[#111] dark:text-white">Drag to Explore</span>
<div className="w-12 h-px bg-[#111] dark:bg-white"></div>
</div>
</div>
<div className="relative w-full group">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="flex space-x-8 animate-[marquee_50s_linear_infinite] w-max px-8 hover:[animation-play-state:paused] transition-all duration-700">

<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Editorial" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Editorial 01</span>
</div>
</div>

<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Look" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Campaign 24</span>
</div>
</div>

<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Look" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Studio Session</span>
</div>
</div>

<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Look" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Backstage</span>
</div>
</div>

<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Look" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Runway</span>
</div>
</div>

<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Editorial" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Editorial 01</span>
</div>
</div>
<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Look" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Campaign 24</span>
</div>
</div>
<div className="w-[550px] h-[400px] relative overflow-hidden group/card cursor-pointer">
<img alt="Look" className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-out">
<span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">Studio Session</span>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-[#050505] overflow-hidden fade-in text-white bg-[#111] pt-32 pb-32 relative">
<div className="relative w-full z-20">
<style>
    /* Hide the original content sibling to replace it with this new layout */
    [data-element-id="aura-emlha1y43ku4iwvs"] + div { display: none !important; }
  </style>

<div className="absolute inset-[-100vw] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

<div className="text-left flex flex-col justify-center h-full">
<div className="flex items-center gap-2 text-noir-gold mb-6 animate-pulse">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
<span className="text-[10px] font-bold uppercase tracking-[0.25em]">Priority Access</span>
</div>
<h2 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight mb-8">
           Define Your <br/> <span className="text-noir-gold italic font-light">Signature.</span>
</h2>
<p className="text-white/60 text-lg font-light leading-relaxed max-w-md mb-10">
           Our calendar fills months in advance. Request a consultation to secure your transformation with our master stylists.
        </p>
<div className="flex items-center gap-10 pt-8 border-t border-white/10">
<div>
<div className="text-3xl font-serif text-white">4.9</div>
<div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Average Rating</div>
</div>
<div>
<div className="text-3xl font-serif text-white">500+</div>
<div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Active Clients</div>
</div>
</div>
</div>

<div className="md:p-10 group bg-[#111] border-white/10 border pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-noir-gold/40"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-noir-gold/40"></div>
<form className="space-y-6 relative z-10">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">First Name</label>
<input className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-noir-gold/50 focus:bg-white/10 transition-all placeholder:text-white/20 font-light rounded-none" placeholder="JANE" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-noir-gold/50 focus:bg-white/10 transition-all placeholder:text-white/20 font-light rounded-none" placeholder="DOE" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-noir-gold/50 focus:bg-white/10 transition-all placeholder:text-white/20 font-light rounded-none" placeholder="HELLO@EXAMPLE.COM" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Interest</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-noir-gold/50 focus:bg-white/10 transition-all appearance-none cursor-pointer font-light rounded-none">
<option>Signature Cut &amp; Style</option>
<option>Dimensional Color</option>
<option>Hair Extensions</option>
<option>Consultation Only</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<button className="w-full bg-white text-black font-bold text-xs uppercase tracking-[0.2em] py-4 hover:bg-noir-gold hover:text-white transition-all duration-300 mt-4 group flex items-center justify-center gap-2 rounded-none" type="button">
                Submit Request
                <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-center text-[10px] text-white/30 uppercase tracking-widest pt-2">Limited Availability for Fall 2024</p>
</form>
</div>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-3xl text-noir-gold mb-6 animate-pulse" icon="solar:stars-minimalistic-linear"></iconify-icon>
<h2 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight leading-none">
                Ready to Define <br/> <span className="text-noir-gold italic font-light">Your</span> Aesthetic?
            </h2>
<p className="text-white/60 mb-12 max-w-lg mx-auto leading-relaxed font-light">
                Appointments are limited. Reserve your session with our master stylists today and experience the House of Noir difference.
            </p>
<a className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-noir-gold hover:text-white transition-all duration-300 rounded-none transform hover:-translate-y-1" href="https://squareup.com" target="_blank">
                Book Your Appointment
            </a>
</div>
</section>

<footer className="bg-[#080808] dark:bg-black text-white pt-24 pb-12 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-12">

<div className="col-span-1 lg:col-span-2">
<h2 className="font-serif text-3xl mb-6">House of Noir</h2>
<p className="text-white/60 text-sm max-w-sm leading-relaxed mb-8">
                        Elevating hair artistry through precision, sustainability, and personal connection. Experience the difference of a studio that listens.
                    </p>
<a className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors" href="https://squareup.com" target="_blank">
                        Book Now
                    </a>
</div>

<div>
<h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-white/80">
<li><a className="hover:text-noir-gold transition-colors" href="mailto:hello@houseofnoir.com">hello@houseofnoir.com</a></li>
<li>+1 (250) 555-0123</li>
</ul>
</div>

<div className="">
<h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-6">Social</h4>
<ul className="space-y-4 text-sm text-white/80">
<li className=""><a className="hover:text-noir-gold transition-colors" href="#">Instagram</a></li>
<li className=""><a className="hover:text-noir-gold transition-colors" href="#">Facebook</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
<p>© 2024 House of Noir. All Rights Reserved.</p>
<p className="">Designed with Intent.</p>
</div>
</div>
</footer>


    </>
  );
}
