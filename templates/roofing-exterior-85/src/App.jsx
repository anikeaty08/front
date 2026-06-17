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
      
tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
},
blue: {
600: '#2563eb',
700: '#1d4ed8',
},
orange: {
500: '#f97316',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function navigate(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            // Show target page
            document.getElementById('page-' + pageId).classList.remove('hidden');
            document.getElementById('page-' + pageId).classList.add('block');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if(!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }

            // Update active state on desktop nav
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.textContent.toLowerCase().includes(pageId) || (pageId === 'home' && link.textContent === 'Home')) {
                    link.classList.remove('text-zinc-600');
                    link.classList.add('text-zinc-950');
                } else {
                    link.classList.add('text-zinc-600');
                    link.classList.remove('text-zinc-950');
                }
            });
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Initialize first nav link active state
        navigate('home');
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="navigate('home')">
<span className="flex items-center">
<img alt="Goldstone Contracting Excavator Logo" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0757326-bf08-47cd-939f-1fb8245c96ae_320w.png"/>
</span>
</div>

<nav className="hidden md:flex space-x-8">
<button className="nav-link text-sm font-medium hover:text-zinc-950 transition-colors text-zinc-950" onclick="navigate('home')">Home</button>
<button className="nav-link text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" onclick="navigate('residential')">Residential Roofing</button>
<button className="nav-link text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" onclick="navigate('hail')">Hail Damage</button>
<button className="nav-link text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" onclick="navigate('financing')">Financing</button>
<button className="nav-link text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" onclick="navigate('about')">About</button>
</nav>

<div className="flex items-center space-x-4">
<button className="hidden md:inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
                        Get Free Estimate
                    </button>
<button className="md:hidden p-2 text-zinc-600 hover:text-zinc-900" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-zinc-200" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
<button className="block px-3 py-2 text-base font-medium text-zinc-900 text-left w-full hover:bg-zinc-50 rounded-md" onclick="navigate('home')">Home</button>
<button className="block px-3 py-2 text-base font-medium text-zinc-600 text-left w-full hover:bg-zinc-50 rounded-md" onclick="navigate('residential')">Residential Roofing</button>
<button className="block px-3 py-2 text-base font-medium text-zinc-600 text-left w-full hover:bg-zinc-50 rounded-md" onclick="navigate('hail')">Hail Damage</button>
<button className="block px-3 py-2 text-base font-medium text-zinc-600 text-left w-full hover:bg-zinc-50 rounded-md" onclick="navigate('financing')">Financing</button>
<button className="block px-3 py-2 text-base font-medium text-zinc-600 text-left w-full hover:bg-zinc-50 rounded-md" onclick="navigate('about')">About</button>
</div>
</div>
</header>

<div className="flex-grow pt-16">

<main className="page-section block" id="page-home">

<section className="relative bg-zinc-950 text-white pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Roofing Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="text-balance max-w-2xl">
<span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-white/20 mb-6 backdrop-blur-sm">
                                Gambrills, MD Local Experts
                            </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold mb-6">Trusted Roofing Experts with 30+ Years Experience</h1>
<p className="text-lg text-zinc-400 mb-8 max-w-xl">
                                Specializing in residential and commercial roofing, storm damage restoration, and full exterior services. Built on quality, secured by trust.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
                                    Get Free Estimate
                                </button>
<button className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
<iconify-icon className="mr-2" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> (555) 123-4567
                                </button>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-2xl border border-zinc-200/50 text-zinc-900 lg:justify-self-end w-full max-w-md">
<h3 className="text-2xl tracking-tight font-semibold mb-2">Request an Estimate</h3>
<p className="text-sm text-zinc-500 mb-6">Fill out the form below and we'll contact you shortly.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="">
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="name">Full Name</label>
<input className="block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-zinc-50" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-zinc-50" id="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-zinc-50 text-zinc-900" id="service">
<option>Roof Replacement</option>
<option>Roof Repair</option>
<option>Storm/Hail Damage</option>
<option>Siding &amp; Windows</option>
<option>Gutters &amp; Fencing</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<button className="w-full inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors mt-2" type="submit">
                                    Get Free Estimate
                                </button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="sm:text-4xl text-balance text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Comprehensive Exterior Solutions</h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto">From roof to fence, we provide top-tier construction services to protect and enhance your property's value.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="group relative bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Roofing</h3>
<p className="text-sm text-zinc-500">Full replacements, repairs, and commercial flat roofs.</p>
</div>

<div className="group relative bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Siding</h3>
<p className="text-sm text-zinc-500">Durable vinyl and fiber cement siding installations.</p>
</div>

<div className="group relative bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:window-frame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Windows</h3>
<p className="text-sm text-zinc-500">Energy-efficient window replacements and upgrades.</p>
</div>

<div className="group relative bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Gutters</h3>
<p className="text-sm text-zinc-500">Seamless gutters and premium guard protection systems.</p>
</div>

<div className="group relative bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:menu-dots-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Fencing</h3>
<p className="text-sm text-zinc-500">Wood, vinyl, and metal fencing for privacy and security.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-zinc-200 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-zinc-900 mb-6">Built on Integrity. Delivered with Excellence.</h2>
<p className="text-base text-zinc-500 mb-8">For over three decades, Goldstone Contracting Inc. has been the trusted name in Gambrills for reliable construction. We don't just build roofs; we build peace of mind.</p>
<div className="space-y-6">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold tracking-tight text-zinc-900">30+ Years Experience</h4>
<p className="mt-1 text-sm text-zinc-500">Decades of proven expertise in local building codes and conditions.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold tracking-tight text-zinc-900">Fully Licensed &amp; Insured</h4>
<p className="mt-1 text-sm text-zinc-500">Protecting you and your property throughout every project phase.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="ml-4">
<h4 className="text-base font-semibold tracking-tight text-zinc-900">Insurance Claim Assistance</h4>
<p className="mt-1 text-sm text-zinc-500">We work directly with your insurance company to maximize your claim.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
<img alt="Roofing Team" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-zinc-200 flex items-center space-x-4">
<div className="text-4xl font-semibold tracking-tight text-blue-600">30+</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Years of<br/>Service</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
<div className="flex justify-between items-end">
<div className="">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-2">Recent Projects</h2>
<p className="text-sm text-zinc-500">See the quality of our work firsthand.</p>
</div>
<div className="hidden sm:flex space-x-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pl-4 sm:pl-6 lg:pl-8 flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">

<div className="snap-start shrink-0 w-72 sm:w-96 relative rounded-2xl overflow-hidden group">
<img alt="New Roof" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium text-sm">Architectural Shingle Replacement</p>
</div>
</div>

<div className="snap-start shrink-0 w-72 sm:w-96 relative rounded-2xl overflow-hidden group">
<img alt="Siding Job" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium text-sm">Premium Vinyl Siding Install</p>
</div>
</div>

<div className="snap-start shrink-0 w-72 sm:w-96 relative rounded-2xl overflow-hidden group">
<img alt="Metal Roof" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium text-sm">Commercial Metal Roofing</p>
</div>
</div>

<div className="snap-start shrink-0 w-72 sm:w-96 relative rounded-2xl overflow-hidden group pr-4 lg:pr-8">
<img alt="Gutters" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium text-sm">Seamless Gutter System</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-zinc-50 border-zinc-200 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-900 text-center mb-16">What Our Neighbors Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"Goldstone replaced our roof after a major storm. They handled the insurance paperwork completely and finished the job in one day. Highly professional crew."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-sm">MR</div>
<div className="ml-3">
<p className="text-sm font-semibold tracking-tight text-zinc-900">Michael R.</p>
<p className="text-xs text-zinc-500">Gambrills, MD</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"Excellent communication from start to finish. We had our siding and gutters done. The house looks brand new. Pricing was transparent with no hidden fees."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-sm">SL</div>
<div className="ml-3">
<p className="text-sm font-semibold tracking-tight text-zinc-900">Sarah L.</p>
<p className="text-xs text-zinc-500">Crofton, MD</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"I've used several contractors over the years, but Goldstone is by far the most reliable. Honest assessment of our roof repair needs without trying to upsell."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-sm">DT</div>
<div className="ml-3">
<p className="text-sm font-semibold tracking-tight text-zinc-900">David T.</p>
<p className="text-xs text-zinc-500">Odenton, MD</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 h-96 bg-zinc-100 rounded-2xl border border-zinc-200 overflow-hidden relative flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-4xl text-blue-600 mb-2" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-600 bg-white px-3 py-1 rounded-full border border-zinc-200 shadow-sm">Gambrills, MD</span>
</div>
</div>
<div className="order-1 lg:order-2 text-balance">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-900 mb-4">Serving Gambrills &amp; Surrounding Areas</h2>
<p className="text-base text-zinc-500 mb-6">We are proud to be a locally owned and operated business serving Anne Arundel County and surrounding communities.</p>
<ul className="grid grid-cols-2 gap-y-3 text-sm text-zinc-600 font-medium">
<li className="flex items-center"><iconify-icon className="text-blue-600 mr-2" icon="solar:alt-arrow-right-linear"></iconify-icon> Gambrills</li>
<li className="flex items-center"><iconify-icon className="text-blue-600 mr-2" icon="solar:alt-arrow-right-linear"></iconify-icon> Crofton</li>
<li className="flex items-center"><iconify-icon className="text-blue-600 mr-2" icon="solar:alt-arrow-right-linear"></iconify-icon> Odenton</li>
<li className="flex items-center"><iconify-icon className="text-blue-600 mr-2" icon="solar:alt-arrow-right-linear"></iconify-icon> Bowie</li>
<li className="flex items-center"><iconify-icon className="text-blue-600 mr-2" icon="solar:alt-arrow-right-linear"></iconify-icon> Annapolis</li>
<li className="flex items-center"><iconify-icon className="text-blue-600 mr-2" icon="solar:alt-arrow-right-linear"></iconify-icon> Severna Park</li>
</ul>
</div>
</div>
</div>
</section>

<section className="text-center bg-zinc-950 pt-24 pr-4 pb-24 pl-4">
<div className="max-w-3xl mr-auto ml-auto">
<h2 className="text-balance text-4xl font-semibold text-white tracking-tight mb-6">Get Your Free Roof Inspection Today</h2>
<p className="text-lg text-zinc-400 mb-10">Don't wait for a leak to become a major problem. Schedule a comprehensive evaluation with our experts.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors">
                            Schedule Estimate
                        </button>
<button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
<iconify-icon className="mr-2" icon="solar:phone-linear"></iconify-icon> Call (555) 123-4567
                        </button>
</div>
</div>
</section>
</main>

<main className="page-section hidden" id="page-residential">

<section className="pt-24 pb-20 bg-zinc-50 border-b border-zinc-200 text-center px-4">
<div className="max-w-3xl mx-auto">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-zinc-900 mb-6">Residential Roofing</h1>
<p className="text-lg text-zinc-500">High-quality, durable roofing solutions designed to protect your home and enhance its curb appeal.</p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl text-balance">
<h2 className="text-2xl tracking-tight font-semibold text-zinc-900 mb-4">Complete Roofing Services</h2>
<p className="text-base text-zinc-600 mb-12">Whether you need a minor repair, proactive maintenance, or a full roof replacement, our certified crews deliver meticulous craftsmanship. We use only premium materials from trusted manufacturers to ensure your roof withstands Maryland's diverse weather conditions.</p>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
<h3 className="text-xl tracking-tight font-semibold text-zinc-900 mb-3">Asphalt Shingles</h3>
<p className="text-sm text-zinc-600 mb-6">The most popular choice for homeowners. Offers excellent durability, a wide variety of colors and styles, and a cost-effective price point.</p>
<ul className="text-sm text-zinc-500 space-y-2">
<li>• Architectural &amp; 3-Tab options</li>
<li>• Class 4 impact resistance available</li>
<li>• Extended manufacturer warranties</li>
</ul>
</div>
<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
<h3 className="text-xl tracking-tight font-semibold text-zinc-900 mb-3">Metal Roofing</h3>
<p className="text-sm text-zinc-600 mb-6">A premium investment known for exceptional longevity and energy efficiency. Perfect for modernizing your home's look.</p>
<ul className="text-sm text-zinc-500 space-y-2">
<li>• Standing seam systems</li>
<li>• 50+ year expected lifespan</li>
<li>• High wind &amp; fire resistance</li>
</ul>
</div>
<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
<h3 className="text-xl tracking-tight font-semibold text-zinc-900 mb-3">Flat Roofing</h3>
<p className="text-sm text-zinc-600 mb-6">Specialized solutions for residential flat or low-slope sections, porches, and garages ensuring proper drainage.</p>
<ul className="text-sm text-zinc-500 space-y-2">
<li>• EPDM &amp; TPO systems</li>
<li>• Modified Bitumen</li>
<li>• Seamless application</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-semibold text-center mb-16">Our Proven Process</h2>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-400 group-[.is-active]:bg-blue-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<span className="text-sm font-semibold">1</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
<h4 className="text-lg font-semibold tracking-tight mb-2">Comprehensive Inspection</h4>
<p className="text-sm text-zinc-400">We assess the entire roofing system, including ventilation, decking, and flashing.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-400 group-[.is-active]:bg-blue-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<span className="text-sm font-semibold">2</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
<h4 className="text-lg font-semibold tracking-tight mb-2">Detailed Estimate</h4>
<p className="text-sm text-zinc-400">Transparent pricing with a breakdown of materials and labor. No hidden fees.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-400 group-[.is-active]:bg-blue-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<span className="text-sm font-semibold">3</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
<h4 className="text-lg font-semibold tracking-tight mb-2">Professional Installation</h4>
<p className="text-sm text-zinc-400">Efficient, clean tear-off and installation by factory-certified crews respecting your property.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-400 group-[.is-active]:bg-blue-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<span className="text-sm font-semibold">4</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
<h4 className="text-lg font-semibold tracking-tight mb-2">Final Quality Check</h4>
<p className="text-sm text-zinc-400">Rigorous post-installation inspection and complete site cleanup.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-900 mb-12">Benefits of a Goldstone Roof</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:shield-up-linear"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Maximum Durability</h4>
<p className="text-sm text-zinc-500">Engineered to withstand heavy rain, high winds, and Maryland winters.</p>
</div>
<div>
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:leaf-linear"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Energy Efficiency</h4>
<p className="text-sm text-zinc-500">Proper ventilation and reflective materials help lower heating and cooling costs.</p>
</div>
<div>
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:umbrella-linear"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Weather Protection</h4>
<p className="text-sm text-zinc-500">Advanced underlayment and flashing techniques keep your home watertight.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-100 border-t border-zinc-200 text-center px-4">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-900 mb-6">Get a Free Roofing Quote</h2>
<button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm">
                    Request Quote Now
                </button>
</section>
</main>

<main className="page-section hidden" id="page-hail">
<section className="pt-24 pb-20 bg-orange-50 border-b border-orange-100 text-center px-4">
<div className="max-w-3xl mx-auto">
<span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 mb-4">Emergency Service Available</span>
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-zinc-900 mb-6">Hail Damage? We Handle Everything</h1>
<p className="text-lg text-zinc-600">Fast inspections, emergency repairs, and full insurance claim assistance.</p>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl tracking-tight font-semibold text-zinc-900 mb-6">Understanding Hail Damage</h2>
<p className="text-base text-zinc-600 mb-6">Hail damage isn't always visible from the ground. Even small hail can bruise shingles, dislodging protective granules and exposing the fiberglass matting to UV rays, leading to premature failure and leaks.</p>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-4">Common Signs to Look For:</h3>
<ul className="space-y-3 text-sm text-zinc-600">
<li className="flex items-start"><iconify-icon className="text-orange-500 mr-2 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon> Dents in gutters, downspouts, or siding</li>
<li className="flex items-start"><iconify-icon className="text-orange-500 mr-2 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon> Accumulation of roofing granules in gutters</li>
<li className="flex items-start"><iconify-icon className="text-orange-500 mr-2 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon> Small, circular divots or bruising on shingles</li>
</ul>
</div>

<div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
<iconify-icon className="text-4xl text-blue-600 mb-4" icon="solar:documents-linear"></iconify-icon>
<h2 className="text-2xl tracking-tight font-semibold text-zinc-900 mb-4">Insurance Assistance</h2>
<p className="text-sm text-zinc-600 mb-6">Navigating an insurance claim can be stressful. Our team acts as your advocate.</p>
<ul className="space-y-4 text-sm text-zinc-700 font-medium">
<li className="flex items-center"><iconify-icon className="text-green-600 mr-3 text-lg" icon="solar:check-circle-linear"></iconify-icon> Thorough documentation &amp; photo reports</li>
<li className="flex items-center"><iconify-icon className="text-green-600 mr-3 text-lg" icon="solar:check-circle-linear"></iconify-icon> Direct communication with your adjuster</li>
<li className="flex items-center"><iconify-icon className="text-green-600 mr-3 text-lg" icon="solar:check-circle-linear"></iconify-icon> Ensuring all damage is accounted for</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-24 bg-zinc-950 text-center px-4">
<h2 className="text-4xl tracking-tight font-semibold text-white mb-6">Schedule Free Inspection Today</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">Time is critical after a storm. Contact us immediately to prevent secondary interior damage.</p>
<button className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
                    Get Emergency Inspection
                </button>
</section>
</main>

<main className="page-section hidden" id="page-financing">
<section className="pt-24 pb-20 bg-zinc-50 border-b border-zinc-200 text-center px-4">
<div className="max-w-3xl mx-auto">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-zinc-900 mb-6">Flexible Financing Options</h1>
<p className="text-lg text-zinc-500">Protect your home now and pay over time with our affordable financing plans.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-base text-zinc-600">A new roof or major exterior repair is a significant investment. We believe that budget constraints shouldn't prevent you from keeping your home safe and secure. That's why we've partnered with leading lenders to offer flexible payment solutions.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
<div className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:wallet-linear"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Affordable Plans</h4>
<p className="text-xs text-zinc-500">Low monthly payment options to fit your family's budget.</p>
</div>
<div className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:stopwatch-linear"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Quick Approvals</h4>
<p className="text-xs text-zinc-500">Paperless application process with decisions in minutes.</p>
</div>
<div className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
<iconify-icon className="text-3xl text-blue-600 mb-4" icon="solar:hand-shake-linear"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Easy Process</h4>
<p className="text-xs text-zinc-500">No home equity required and no prepayment penalties.</p>
</div>
</div>
<div className="bg-zinc-900 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-2xl tracking-tight font-semibold mb-4">Ready to see your options?</h2>
<p className="text-zinc-400 text-sm mb-8">Checking your financing options is quick, secure, and doesn't affect your credit score.</p>
<button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                                Check Financing Options <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="mt-16 flex justify-center space-x-12 text-zinc-400">
<div className="flex items-center text-sm font-medium"><iconify-icon className="mr-2 text-lg" icon="solar:shield-check-linear"></iconify-icon> No Hidden Fees</div>
<div className="flex items-center text-sm font-medium"><iconify-icon className="mr-2 text-lg" icon="solar:lock-keyhole-linear"></iconify-icon> Secure Process</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden" id="page-about">
<section className="pt-24 pb-20 bg-zinc-950 text-white text-center px-4">
<div className="max-w-3xl mx-auto">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold mb-6">30+ Years of Trusted Service</h1>
<p className="text-lg text-zinc-400">A legacy built on quality craftsmanship and community trust in Gambrills, Maryland.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-zinc-900 mb-6">Our Story</h2>
<div className="space-y-4 text-base text-zinc-600">
<p>Founded over three decades ago, Goldstone Contracting Inc. started with a simple mission: to provide the homeowners of Anne Arundel County with honest, high-quality roofing services they could rely on.</p>
<p>What began as a small, family-operated crew has grown into a premier exterior remodeling company. Despite our growth, our core values remain unchanged. We still treat every home as if it were our own, and we still believe that a handshake means something.</p>
<p>Our extensive experience means we've seen it all—from historic home restorations to complex commercial flat roofs. We combine this deep local knowledge with the latest in roofing technology and materials.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Construction Work" className="rounded-2xl h-64 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Blueprint" className="rounded-2xl h-64 w-full object-cover mt-8" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
<div className="mb-24">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-900 mb-12 text-center">Meet the Leadership</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">

<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-zinc-200 mb-4 overflow-hidden border border-zinc-300">
<img alt="Founder" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900">James Goldstone</h4>
<p className="text-sm text-zinc-500">Founder &amp; President</p>
</div>

<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-zinc-200 mb-4 overflow-hidden border border-zinc-300">
<img alt="Manager" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900">Sarah Jenkins</h4>
<p className="text-sm text-zinc-500">Operations Manager</p>
</div>

<div className="text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-zinc-200 mb-4 overflow-hidden border border-zinc-300">
<img alt="Lead Estimator" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900">Michael Ross</h4>
<p className="text-sm text-zinc-500">Lead Estimator</p>
</div>
</div>
</div>
<div className="bg-blue-50 rounded-3xl p-8 sm:p-12 border border-blue-100 flex flex-col items-center text-center">
<h2 className="text-2xl tracking-tight font-semibold text-blue-900 mb-4">Deep Roots in the Community</h2>
<p className="text-blue-800 text-sm max-w-2xl mb-8">We don't just work here; we live here. Goldstone Contracting is a proud sponsor of local youth sports and participates actively in Gambrills community events. Our reputation is built on the word-of-mouth of our neighbors.</p>
<button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                            Work With a Trusted Local Contractor
                        </button>
</div>
</div>
</section>
</main>
</div>

<footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-1">
<span className="text-xl tracking-tighter font-semibold text-white uppercase mb-4 block">Goldstone</span>
<p className="text-xs text-zinc-500 mb-4">Trusted roofing and exterior experts serving Gambrills, MD and surrounding areas for over 30 years.</p>
<div className="flex space-x-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Services</h4>
<ul className="space-y-2 text-xs">
<li><button className="hover:text-white transition-colors" onclick="navigate('residential')">Residential Roofing</button></li>
<li><button className="hover:text-white transition-colors" onclick="navigate('home')">Commercial Roofing</button></li>
<li><button className="hover:text-white transition-colors" onclick="navigate('hail')">Storm Damage</button></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Company</h4>
<ul className="space-y-2 text-xs">
<li><button className="hover:text-white transition-colors" onclick="navigate('about')">About Us</button></li>
<li><button className="hover:text-white transition-colors" onclick="navigate('financing')">Financing</button></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Contact Us</h4>
<ul className="space-y-3 text-xs">
<li className="flex items-start">
<iconify-icon className="text-lg mr-2 text-zinc-500 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>123 Main St, Suite 100<br/>Gambrills, MD 21054</span>
</li>
<li className="flex items-center">
<iconify-icon className="text-lg mr-2 text-zinc-500 shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center">
<iconify-icon className="text-lg mr-2 text-zinc-500 shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>info@goldstonecontracting.com</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 text-xs text-center text-zinc-600 flex flex-col sm:flex-row justify-between items-center">
<p>© 2023 Goldstone Contracting Inc. All rights reserved.</p>
<p className="mt-2 sm:mt-0">MHIC License #XXXXXX</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 w-full bg-white border-t border-zinc-200 p-3 md:hidden z-50">
<a className="flex w-full items-center justify-center bg-blue-600 text-white rounded-xl py-3.5 text-sm font-semibold shadow-sm active:bg-blue-700 transition-colors" href="tel:5551234567">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear"></iconify-icon> Call Now For Free Estimate
        </a>
</div>



    </>
  );
}
