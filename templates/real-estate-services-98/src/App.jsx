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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
colors: {
"pro-green": "#0A3F2F",
"pro-green-dark": "#05291F",
"pro-cream": "#F5F5F0",
"pro-cream-dark": "#EBEBE6",
"stone-dark": "#1C1C1C",
"stone-med": "#262626",
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
}
}
}
}
}



            (function() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.querySelectorAll('.stat-number').forEach(stat => {
                                const target = parseFloat(stat.dataset.target);
                                let start = 0;
                                const duration = 2000;
                                const startTime = performance.now();
                                function update(currentTime) {
                                    const elapsed = currentTime - startTime;
                                    const progress = Math.min(elapsed / duration, 1);
                                    const ease = 1 - Math.pow(1 - progress, 3);
                                    const current = start + (target - start) * ease;
                                    stat.textContent = stat.dataset.decimal ? current.toFixed(1) : Math.floor(current);
                                    if (progress < 1) requestAnimationFrame(update);
                                }
                                requestAnimationFrame(update);
                            });
                            observer.unobserve(entry.target);
                        }
                    });
                });
                const statsSection = document.querySelector('.stat-number').closest('section');
                if (statsSection) observer.observe(statsSection);
            })();
        


            document.addEventListener('DOMContentLoaded', () => {
                const items = document.querySelectorAll('.service-item');
                const img = document.getElementById('service-image');
                const caption = document.getElementById('service-caption');
                
                items.forEach(item => {
                    item.addEventListener('mouseenter', function() {
                        const newSrc = this.getAttribute('data-image');
                        const newCaption = this.getAttribute('data-caption');
                        if (img.src !== newSrc) {
                            img.style.opacity = '0';
                            setTimeout(() => {
                                img.src = newSrc;
                                caption.textContent = newCaption;
                                img.onload = () => { img.style.opacity = '1'; };
                            }, 300);
                        }
                    });
                });
            });
        


            function toggleGear(btn) {
                btn.classList.toggle('packed');
                btn.classList.toggle('border-white');
                btn.classList.toggle('bg-stone-800');
                
                const total = 6;
                const packed = document.querySelectorAll('.gear-item.packed').length;
                const percent = Math.round((packed / total) * 100);
                
                document.getElementById('progress-text').innerText = percent + '%';
                document.getElementById('progress-bar').style.width = percent + '%';
            }
        
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
      

<nav className="fixed z-50 w-full top-0 transition-all duration-500 backdrop-blur-md bg-pro-green/90 border-b border-white/5" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center text-white">
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-white/80">
<a className="hover:text-white transition-colors font-sans" href="#">Acquisition</a>
<a className="hover:text-white transition-colors font-sans" href="#">Renovation</a>
<a className="hover:text-white transition-colors font-sans" href="#">Management</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2">
<a className="flex items-center gap-3 text-2xl tracking-tight font-display font-semibold text-white" href="#">
<div className="w-8 h-8 bg-white grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px]">
<div className="bg-pro-green"></div>
<div className="bg-pro-green"></div>
<div className="bg-pro-green"></div>
<div className="bg-pro-green opacity-0"></div>
</div>
                    ProHomes
                </a>
</div>
<div className="flex items-center space-x-6">
<a className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors font-sans" href="#">Client Login</a>
<a className="bg-pro-cream text-pro-green px-5 py-2 rounded-md text-sm font-semibold hover:bg-white transition-colors shadow-lg font-sans" href="#">Get Appraisal</a>
</div>
<div className="md:hidden text-white">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] min-h-[700px] overflow-hidden flex items-end bg-stone-900">
<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
<div className="z-10 bg-gradient-to-t from-stone-900 via-stone-900/40 to-black/30 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Dubai Modern Interior" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop" style={{animation: 'heroZoomOut 10s cubic-bezier(0.25, 0.1, 0.25, 1) forwards'}}/>
<style>
                @keyframes heroZoomOut {
                    0% { transform: scale(1.15); }
                    100% { transform: scale(1.0); }
                }
            </style>
</div>
<div className="z-20 md:px-10 md:pb-24 w-full max-w-[1400px] mx-auto px-6 pb-16 relative">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 py-1 px-3 border border-white/20 rounded-full bg-pro-green/30 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-xs font-medium text-white font-sans uppercase tracking-widest">Renovation • Rental • Cleaning</span>
</div>

<h1 className="md:text-6xl lg:text-7xl leading-[1] text-4xl text-white tracking-tight font-serif font-normal mb-8">
                        Welcome to ProHomes:<br/>
<span className="text-white/60">Renovation, Rental Management &amp; more, everything your property needs</span>
</h1>
<p className="leading-relaxed text-lg font-light text-stone-300 max-w-xl font-sans border-l border-white/20 pl-6">
                        Built for investors who care less about square footage and more about performance. Everything your property needs, under one roof.
                    </p>
</div>
<div className="md:col-span-4 flex flex-col items-start md:items-end justify-end space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="group relative px-8 py-4 bg-white text-pro-green font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02]">
<span className="relative z-10 flex items-center gap-2">
                            View Our Portfolio
                            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<p className="text-xs text-white/50 font-sans tracking-wide uppercase">Specializing in Motor City, Dubai</p>
</div>
</div>
</div>
</header>

<section className="bg-pro-green border-b border-white/10 pt-16 pb-16">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
<div className="text-left">
<h3 className="md:text-5xl text-4xl text-white tracking-tight font-serif font-normal">
<span className="stat-number" data-target="100">0</span>+
                    </h3>
<p className="text-sm text-white/60 mt-2 font-sans uppercase tracking-wider">Tenants Managed</p>
</div>
<div className="text-left">
<h3 className="text-4xl md:text-5xl text-white tracking-tight font-serif font-normal">
<span className="stat-number" data-decimal="true" data-target="15">0</span>%
                    </h3>
<p className="text-sm text-white/60 mt-2 font-sans uppercase tracking-wider">Target Yield</p>
</div>
<div className="text-left">
<h3 className="text-4xl md:text-5xl text-white tracking-tight font-serif font-normal">
<span className="stat-number" data-target="30">0</span>%
                    </h3>
<p className="text-sm text-white/60 mt-2 font-sans uppercase tracking-wider">Renovation Value Add</p>
</div>
<div className="text-left">
<h3 className="text-4xl md:text-5xl text-white tracking-tight font-serif font-normal">
                        1
                    </h3>
<p className="text-sm text-white/60 mt-2 font-sans uppercase tracking-wider">Motor City Focus</p>
</div>
</div>
</div>

</section>

<section className="md:py-32 bg-pro-cream pt-24 pb-24 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-20 mb-20 items-end">
<div className="md:col-span-6">
<span className="text-xs font-bold tracking-widest text-pro-green uppercase mb-6 block font-sans">[ Our Philosophy ]</span>
<h2 className="md:text-6xl text-4xl text-pro-green tracking-tight leading-[1.05] font-serif font-normal">Where most agencies stop, we start.</h2>
</div>
<div className="md:col-span-6 md:col-start-7">
<p className="text-xl text-stone-600 leading-relaxed font-light font-sans mb-8">
                        They close the deal and move on. We step in and make the property work. From acquisition to renovation to Airbnb operations, we’ve integrated the entire value chain under one roof.
                    </p>
<div className="flex gap-4">
<div className="h-px bg-stone-300 w-16 my-auto"></div>
<p className="text-sm font-medium text-stone-500 font-sans italic">Hands-off returns. Hospitality-grade service.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative group overflow-hidden h-[600px] rounded-sm bg-white border border-stone-200">
<div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
<div>
<span className="text-stone-400 font-mono text-xs uppercase mb-2 block">The Market Standard</span>
<h3 className="text-3xl text-stone-800 font-serif mb-4">The Passive Approach</h3>
<p className="text-stone-500 font-sans max-w-sm">Investors buy promising units but lose money to delays, bad contractors, and mismanaged rentals. A 7% yield on a long-term lease leaves money on the table.</p>
</div>
<div className="grayscale opacity-60">
<img className="w-full h-64 object-cover mt-8 mix-blend-multiply" src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="relative group overflow-hidden h-[600px] rounded-sm bg-pro-green text-white">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-pro-green via-pro-green/50 to-transparent"></div>
<div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
<div>
<span className="text-white/60 font-mono text-xs uppercase mb-2 block">The ProHomes Standard</span>
<h3 className="text-3xl text-white font-serif mb-4">Active Value Creation</h3>
<p className="text-white/80 font-sans max-w-sm">We renovate for yield, not just aesthetics. We handle DET licensing, guest management, and optimization. The result? 10–15% yields and assets that appreciate.</p>
</div>
<div className="flex items-center gap-4 mt-auto">
<span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
<svg className="lucide lucide-trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</span>
<span className="text-sm font-semibold tracking-wide uppercase">Performance First</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 border-stone-800 border-t pt-24 pb-24 text-white">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="mb-20 max-w-3xl">
<span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4 block font-sans">Three Businesses. One Vertical.</span>
<h2 className="text-4xl md:text-6xl text-white tracking-tight mb-6 font-serif font-normal">The Value Chain.</h2>
<p className="text-xl text-stone-400 font-light leading-relaxed font-sans">We’ve managed over 100 tenants and completed dozens of renovations. We built this model because no single vendor could solve the whole puzzle.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full relative">

<div className="lg:col-span-5 lg:sticky lg:top-32 h-fit hidden lg:block">
<div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-stone-800 border border-white/10">
<img className="w-full h-full object-cover transition-opacity duration-500" id="service-image" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
<p className="text-white text-lg font-medium font-serif" id="service-caption">Acquisition &amp; Brokerage</p>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="flex flex-col">

<div className="service-item group border-t border-white/10 py-12 cursor-pointer transition-all hover:bg-white/5 px-4 -mx-4" data-caption="Acquisition &amp; Brokerage" data-image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-start">
<div>
<span className="text-xs font-bold text-white/30 mb-2 block font-mono">01</span>
<h3 className="text-3xl md:text-4xl text-white font-serif mb-3 group-hover:text-white/90 transition-colors">Property Sales &amp; Rentals</h3>
<p className="text-stone-400 max-w-md font-sans font-light leading-relaxed">Traditional brokerage with a value-add sourcing lens. We help investors buy below market in undervalued buildings.</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="service-item group border-t border-white/10 py-12 cursor-pointer transition-all hover:bg-white/5 px-4 -mx-4" data-caption="Renovation Services" data-image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-start">
<div>
<span className="text-xs font-bold text-white/30 mb-2 block font-mono">02</span>
<h3 className="text-3xl md:text-4xl text-white font-serif mb-3 group-hover:text-white/90 transition-colors">Renovation Services</h3>
<p className="text-stone-400 max-w-md font-sans font-light leading-relaxed">In-house upgrades that increase rental value by 20–30%. We turn tired apartments into top-performing assets.</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">
<svg className="lucide lucide-hammer" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path><path d="M17.64 15 22 10.64"></path><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V2.46V2a2 2 0 0 0-2-2h-3.93c-.85 0-1.65.33-2.25.93L9.3 2.15"></path><path d="M15 12.31V6"></path></svg>
</div>
</div>
</div>

<div className="service-item group border-t border-b border-white/10 py-12 cursor-pointer transition-all hover:bg-white/5 px-4 -mx-4" data-caption="Airbnb Management" data-image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">
<div className="flex justify-between items-start">
<div>
<span className="text-xs font-bold text-white/30 mb-2 block font-mono">03</span>
<h3 className="text-3xl md:text-4xl text-white font-serif mb-3 group-hover:text-white/90 transition-colors">Airbnb Management</h3>
<p className="text-stone-400 max-w-md font-sans font-light leading-relaxed">Fully licensed, hotel-standard guest operations + cleaning. We optimize pricing, restock amenities, and deposit the income.</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">
<svg className="lucide lucide-key-round" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-3xl">
<span className="text-pro-green font-mono text-xs font-semibold tracking-widest uppercase mb-4 block font-sans">Portfolio</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.1] font-serif font-normal">Renovation Case Studies.</h2>
</div>
<div>
<a className="group px-6 py-3 border border-stone-200 text-stone-600 font-semibold text-sm hover:bg-stone-900 hover:text-white transition-all flex items-center gap-2 font-sans rounded-md" href="#">
                        View All Projects
                        <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer flex flex-col h-full">
<div className="relative overflow-hidden aspect-[4/3] mb-6 bg-stone-100 shadow-sm rounded-sm">
<img alt="Apartment Living Room" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-stone-900 uppercase tracking-wide">2BR Motor City</div>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
<div className="flex flex-col">
<span className="text-xs text-stone-400 uppercase tracking-wide">Renovation Cost</span>
<span className="font-medium text-stone-900">AED 65,000</span>
</div>
<div className="flex flex-col text-right">
<span className="text-xs text-stone-400 uppercase tracking-wide">ROI Increase</span>
<span className="font-medium text-pro-green">+22%</span>
</div>
</div>
<h3 className="text-2xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors font-serif font-normal">Fox Hill Modernization</h3>
<p className="text-stone-500 text-sm leading-relaxed line-clamp-2 font-sans">Complete gut renovation of a tired 2008 unit. Opened kitchen, installed smart home tech, and modernized bathrooms.</p>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="relative overflow-hidden aspect-[4/3] mb-6 bg-stone-100 shadow-sm rounded-sm">
<img alt="Bedroom" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-stone-900 uppercase tracking-wide">1BR Uptown</div>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
<div className="flex flex-col">
<span className="text-xs text-stone-400 uppercase tracking-wide">Renovation Cost</span>
<span className="font-medium text-stone-900">AED 42,000</span>
</div>
<div className="flex flex-col text-right">
<span className="text-xs text-stone-400 uppercase tracking-wide">ROI Increase</span>
<span className="font-medium text-pro-green">+18%</span>
</div>
</div>
<h3 className="text-2xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors font-serif font-normal">Minimalist Studio Conversion</h3>
<p className="text-stone-500 text-sm leading-relaxed line-clamp-2 font-sans">Optimized layout for short-term rentals. Custom joinery, LVT flooring, and hotel-grade furnishings.</p>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="relative overflow-hidden aspect-[4/3] mb-6 bg-stone-100 shadow-sm rounded-sm">
<img alt="Bathroom" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-stone-900 uppercase tracking-wide">3BR Villa</div>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
<div className="flex flex-col">
<span className="text-xs text-stone-400 uppercase tracking-wide">Renovation Cost</span>
<span className="font-medium text-stone-900">AED 110,000</span>
</div>
<div className="flex flex-col text-right">
<span className="text-xs text-stone-400 uppercase tracking-wide">ROI Increase</span>
<span className="font-medium text-pro-green">+28%</span>
</div>
</div>
<h3 className="text-2xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors font-serif font-normal">Green Community Flip</h3>
<p className="text-stone-500 text-sm leading-relaxed line-clamp-2 font-sans">Full landscaping and interior overhaul. Sold within 2 weeks of completion at 35% above market average.</p>
</article>
</div>
</div>
</section>

<section className="bg-pro-cream py-32 overflow-hidden relative">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-16">
<span className="text-pro-green font-mono text-xs font-semibold tracking-widest uppercase mb-4 block font-sans">Investor Feedback</span>
<h2 className="text-4xl md:text-5xl text-stone-900 tracking-tight leading-tight font-serif font-normal">Owners, not Landlords.</h2>
<p className="text-stone-500 mt-4 max-w-lg mx-auto font-sans">See why investors switch to ProHomes for peace of mind and higher yields.</p>
</div>
<div className="flex overflow-x-auto pb-20 pt-12 gap-8 md:gap-12 justify-start md:justify-center no-scrollbar px-4">

<div className="group flex-shrink-0 w-[320px] bg-white p-6 shadow-xl rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
<div className="flex items-center gap-1 mb-4 text-pro-green">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="font-serif italic text-lg text-stone-800 leading-relaxed mb-6">"I bought a unit in Motor City but lived in London. ProHomes handled the renovation and listing. I just check the dashboard and see the deposits."</p>
<div className="flex justify-between items-end border-t border-stone-100 pt-4">
<div>
<span className="font-bold text-sm text-stone-900 block font-sans">James C.</span>
<span className="text-xs text-stone-500 font-sans">London, UK</span>
</div>
</div>
</div>

<div className="group flex-shrink-0 w-[320px] bg-white p-6 shadow-xl -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
<div className="flex items-center gap-1 mb-4 text-pro-green">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="font-serif italic text-lg text-stone-800 leading-relaxed mb-6">"The renovation added 30% to my property value. They know exactly what finishes attract high-paying Airbnb guests in Dubai."</p>
<div className="flex justify-between items-end border-t border-stone-100 pt-4">
<div>
<span className="font-bold text-sm text-stone-900 block font-sans">Ahmad K.</span>
<span className="text-xs text-stone-500 font-sans">Abu Dhabi, UAE</span>
</div>
</div>
</div>

<div className="group flex-shrink-0 w-[320px] bg-white p-6 shadow-xl rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
<div className="flex items-center gap-1 mb-4 text-pro-green">
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="font-serif italic text-lg text-stone-800 leading-relaxed mb-6">"No late night calls, no maintenance headaches. Their cleaning standards are hotel-level, which keeps my reviews at 5 stars."</p>
<div className="flex justify-between items-end border-t border-stone-100 pt-4">
<div>
<span className="font-bold text-sm text-stone-900 block font-sans">Sarah M.</span>
<span className="text-xs text-stone-500 font-sans">Dubai Marina</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-pro-green pt-24 pb-24 border-t border-white/5">
<div className="max-w-[1200px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2 block font-sans">Operations</span>
<h2 className="text-4xl mb-6 tracking-tight font-serif font-normal text-white">The Turnkey Checklist</h2>
<p className="text-stone-300 mb-8 font-sans leading-relaxed">We handle the logistics, licensing, and late-night guest calls so you don't have to. See what goes into a 5-star listing.</p>
<div className="p-6 bg-white/5 border border-white/10 rounded-sm">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-mono text-stone-300 font-sans">Listing Readiness</span>
<span className="text-white font-semibold font-mono font-sans" id="progress-text">0%</span>
</div>
<div className="overflow-hidden bg-stone-900 w-full h-2 rounded-full">
<div className="h-full bg-white w-0 transition-all duration-500 ease-out" id="progress-bar"></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<button className="gear-item group h-32 bg-pro-green-dark border border-white/10 hover:border-white rounded-sm flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-search w-8 h-8 text-white/50 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<span className="text-xs text-white/50 group-hover:text-white uppercase tracking-wider font-sans">Sourcing</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-white absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>

<button className="gear-item group h-32 bg-pro-green-dark border border-white/10 hover:border-white rounded-sm flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-pencil-ruler w-8 h-8 text-white/50 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 2.9 5 5"></path><path d="m12 7 5 5"></path><path d="m8 11 5 5"></path><path d="m5.5 14.1 2.5 2.5"></path><path d="M2.5 17.1c1.2 1.2 1.8 1.8 1.8 3 0 .4-.3.9-.9 1.5"></path></svg>
<span className="text-xs text-white/50 group-hover:text-white uppercase tracking-wider font-sans">Design</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-white absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>

<button className="gear-item group h-32 bg-pro-green-dark border border-white/10 hover:border-white rounded-sm flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-file-text w-8 h-8 text-white/50 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h2"></path><path d="M8 17h2"></path><path d="M14 13h2"></path></svg>
<span className="text-xs text-white/50 group-hover:text-white uppercase tracking-wider font-sans">DET Permit</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-white absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>

<button className="gear-item group h-32 bg-pro-green-dark border border-white/10 hover:border-white rounded-sm flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-image w-8 h-8 text-white/50 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="text-xs text-white/50 group-hover:text-white uppercase tracking-wider font-sans">Photography</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-white absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>

<button className="gear-item group h-32 bg-pro-green-dark border border-white/10 hover:border-white rounded-sm flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-sparkles w-8 h-8 text-white/50 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
<span className="text-xs text-white/50 group-hover:text-white uppercase tracking-wider font-sans">Cleaning</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-white absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>

<button className="gear-item group h-32 bg-pro-green-dark border border-white/10 hover:border-white rounded-sm flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-banknote w-8 h-8 text-white/50 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<span className="text-xs text-white/50 group-hover:text-white uppercase tracking-wider font-sans">Earnings</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-white absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>
</div>
</div>
</div>

</section>

<section className="pt-24 pb-24 relative bg-white">
<div className="max-w-[800px] mx-auto px-6 md:px-10 relative z-10">
<div className="text-center mb-16">
<svg className="lucide lucide-message-square w-8 h-8 mx-auto text-stone-400 mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<h2 className="text-4xl text-stone-900 tracking-tight font-serif font-normal">Common Queries</h2>
</div>
<div className="space-y-6">
<div className="bg-pro-cream p-8 border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
<h3 className="font-semibold text-lg text-pro-green mb-2 font-sans">"Why Motor City?"</h3>
<p className="text-stone-600 leading-relaxed font-sans">The buildings are older, meaning units are undervalued. But they offer spacious layouts perfect for families. It's the sweet spot for high-yield ROI if operated correctly.</p>
</div>
<div className="bg-pro-cream p-8 border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
<h3 className="font-semibold text-lg text-pro-green mb-2 font-sans">"How long does renovation take?"</h3>
<p className="text-stone-600 leading-relaxed font-sans">Typical turnaround is 3-5 weeks depending on the scope. We work with pre-approved contractors and have materials ready to go to minimize vacancy days.</p>
</div>
<div className="bg-pro-cream p-8 border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
<h3 className="font-semibold text-lg text-pro-green mb-2 font-sans">"Do I need to be in Dubai?"</h3>
<p className="text-stone-600 leading-relaxed font-sans">No. 90% of our clients are international investors. We handle everything from the bank cheques for acquisition to the digital door locks for guests.</p>
</div>
</div>
</div>
</section>

<section className="bg-pro-green py-24 px-6 relative overflow-hidden text-center">
<div className="absolute inset-0 bg-pro-green">
<div className="opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl text-white mb-6 font-serif font-normal">Don't guess. Calculate.</h2>
<p className="text-white/60 mb-10 text-lg font-sans">Get our free Motor City ROI Calculator and see the potential returns on your unit.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 bg-white/10 border border-white/10 text-white px-6 py-4 rounded-md focus:outline-none focus:bg-white/20 transition-all placeholder:text-white/40" placeholder="Enter your email address" type="email"/>
<button className="bg-white text-pro-green px-8 py-4 rounded-md font-semibold hover:bg-pro-cream transition-colors font-sans">Get Calculator</button>
</form>
</div>
</section>

<footer className="bg-stone-900 text-white border-t border-white/10 pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
<div className="md:col-span-4">
<a className="text-2xl font-display font-semibold tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-white grid grid-cols-2 grid-rows-2 gap-[1px] p-[1px]">
<div className="bg-stone-900"></div><div className="bg-stone-900"></div><div className="bg-stone-900"></div><div className="bg-stone-900 opacity-0"></div>
</div>
                        ProHomes
                    </a>
<p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-8 font-sans">
                        We don't just help you buy a property. We make it perform. The operating system for Dubai real estate investors.
                    </p>
<div className="flex gap-5">
<a className="text-stone-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S1.2 2.9 8.3 9c-4.2-.2-6.1-3.3-4.5-6C1.5 8.7 6.9 12.6 12.5 4.7c-2-3.8 4-4.8 6.7-1.3-.3-2.2 2.8-2.3 2.8-2.3z"></path></svg></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div className="md:col-span-2 hidden md:block"></div>
<div className="md:col-span-2">
<h4 className="font-semibold text-white mb-6 font-sans">Services</h4>
<ul className="space-y-3 text-sm text-stone-400">
<li><a className="hover:text-white transition-colors font-sans" href="#">Brokerage &amp; Sales</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Renovation</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Airbnb Management</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Yield Analysis</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-semibold text-white mb-6 font-sans">Company</h4>
<ul className="space-y-3 text-sm text-stone-400">
<li><a className="hover:text-white transition-colors font-sans" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-semibold text-white mb-6 font-sans">Locations</h4>
<ul className="space-y-3 text-sm text-stone-400">
<li><a className="hover:text-white transition-colors font-sans" href="#">Motor City</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Sports City</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">JVC</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Dubai Hills</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-stone-500 text-sm font-sans">© 2024 ProHomes Real Estate. All rights reserved.</p>
<div className="flex gap-8 text-sm text-stone-500">
<a className="hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
