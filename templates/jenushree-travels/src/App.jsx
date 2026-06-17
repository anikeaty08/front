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



        // Simple client-side router
        function switchPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            // Show selected page
            const selectedPage = document.getElementById('page-' + pageId);
            if(selectedPage) {
                selectedPage.classList.remove('hidden');
                window.scrollTo(0, 0); // Reset scroll to top
            }

            // Update nav state
            const navButtons = document.querySelectorAll('.nav-btn');
            navButtons.forEach(btn => {
                // Reset style
                btn.classList.remove('text-white', 'bg-zinc-800', 'shadow-sm');
                btn.classList.add('text-zinc-400');
                
                // Add hover style back if needed, but handled by css class
            });

            // Active style
            const activeBtn = document.getElementById('nav-' + pageId);
            if(activeBtn) {
                activeBtn.classList.remove('text-zinc-400');
                activeBtn.classList.add('text-white', 'bg-zinc-800', 'shadow-sm');
            }
        }

        // Initialize default page (Home)
        document.addEventListener('DOMContentLoaded', () => {
            switchPage('home');
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="javascript:void(0)" onclick="switchPage('home')">
<div className="flex shadow-emerald-900/20 bg-center text-sm font-bold text-white tracking-tighter w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d384db00-bf36-4dc2-b13f-2b79c34705d0_320w.jpg)] bg-cover border-white/10 border rounded-full shadow-xl items-center justify-center">
                    JT
                </div>
<div className="hidden sm:flex flex-col">
<span className="uppercase group-hover:text-amber-400 transition-colors leading-none lg:text-stone-200 text-lg font-semibold tracking-tight text-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 w-12 h-12">Jenushree Travels Private Limited</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5">
<button className="nav-btn px-4 py-1.5 text-xs font-medium rounded-full transition-all text-white bg-zinc-800 shadow-sm" id="nav-home" onclick="switchPage('home')">Home</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all" id="nav-about" onclick="switchPage('about')">About</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all" id="nav-services" onclick="switchPage('services')">Solutions</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all" id="nav-fleet" onclick="switchPage('fleet')">Fleet</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all" id="nav-technology" onclick="switchPage('technology')">Tech</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all" id="nav-clients" onclick="switchPage('clients')">Clients</button>
</div>

<div className="md:hidden">
<button className="text-white p-2">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-3">
<a className="hidden lg:flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors" href="tel:+919876543210">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
<span>Support</span>
</a>
<button className="bg-white text-zinc-950 px-3 py-1.5 text-xs font-bold rounded hover:bg-amber-400 transition-colors">
                    Contact Us
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-16 relative min-h-screen flex flex-col">

<section className="page-section fade-in flex-grow flex flex-col" id="page-home">
<header className="flex-grow flex overflow-hidden pt-24 pb-24 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-tr from-amber-500/10 via-emerald-500/5 to-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-amber-200 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                            Premier Corporate Transport Solutions
                        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[1]">
                            Driven by Values, 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-amber-500">Powered by Excellence.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
                            Headquartered in Bangalore, we specialize in premier corporate cab services designed specifically for enterprise clients who demand efficiency, safety, and reliability.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-medium px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2" onclick="switchPage('services')">
<span className="">Explore Solutions</span>
<iconify-icon className="" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2" onclick="switchPage('fleet')">
<span>View Fleet</span>
</button>
</div>
</div>
</div>
</header>

<div className="border-t border-white/5 bg-zinc-900/30 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="">
<div className="text-3xl font-bold text-white tracking-tight mb-1">2024</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Established</div>
</div>
<div className="">
<div className="text-3xl font-bold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Support</div>
</div>
<div className="">
<div className="text-3xl font-bold text-white tracking-tight mb-1">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Compliance</div>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight mb-1">Top</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Tier Clients</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-12" id="page-about">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-4">About Us</h1>
<p className="text-zinc-400 max-w-2xl text-lg">Building trust through miles of safe, reliable, and professional service.</p>
</div>
<div className="grid md:grid-cols-2 gap-16 items-start mb-24">
<div className="">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">More than a transportation provider</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed">
<p className="">
                                Since our establishment in 2024, we've experienced rapid growth from supporting travel service providers to becoming a trusted partner for major corporations across the region.
                            </p>
<p className="">
                                Our success stems from our unwavering commitment to quality and our understanding of corporate transportation needs. Our dynamic team comprises high-caliber professionals with extensive expertise spanning transport operations, technical systems, and administrative excellence.
                            </p>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-50"></div>
<div className="flex flex-col text-center bg-zinc-900 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="w-32 h-32 rounded-full bg-zinc-800 mb-6 overflow-hidden border-2 border-amber-500/30 p-1">

<img alt="Nandeesh S" className="filter hover:grayscale-0 transition-all duration-500 bg-center w-full h-full object-cover rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82a45fc3-6149-48f2-a7a5-655533375a54_800w.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Nandeesh S</h3>
<p className="text-amber-400 text-sm font-medium mt-1">Director / Founder</p>
<p className="text-zinc-500 text-xs mt-4 max-w-xs">Leading Jenushree Travels Private Limited with a vision for seamless, technology-enabled transport solutions.</p>
</div>
</div>
</div>

<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Our Core Values</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors">
<div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-4">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Safety First</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Employee safety is non-negotiable. Rigorous standards, comprehensive insurance, and emergency kits.</p>
</div>
<div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-colors">
<div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 mb-4">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Punctuality</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Time is your most valuable asset. GPS-tracked fleet ensures employees arrive on schedule.</p>
</div>
<div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="lucide:thumbs-up" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Reliability</h3>
<p className="text-sm text-zinc-400 leading-relaxed">24/7 operations, standby vehicles, and dedicated account management.</p>
</div>
<div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-colors">
<div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4">
<iconify-icon icon="lucide:award" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Quality Service</h3>
<p className="text-sm text-zinc-400 leading-relaxed">From vehicle cleanliness to driver professionalism, we maintain the highest standards.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-12" id="page-services">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16 text-center max-w-3xl mx-auto">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Our Services</h1>
<p className="text-zinc-400 text-lg">Different business needs require different approaches. We've developed three specialized service lines.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group bg-zinc-950 border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-amber-400 bg-zinc-900 px-3 py-1 rounded-full">I Commute</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Corporate Cab Services</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">Specialized employee transport solutions engineered for safety, punctuality, and comfort during daily transit.</p>
<div className="border-t border-white/5 pt-6">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Customized routing
                                </li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Real-time GPS tracking
                                </li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Background-verified drivers
                                </li>
</ul>
</div>
</div>

<div className="group bg-zinc-950 border border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
<iconify-icon icon="lucide:calendar-clock" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-emerald-400 bg-zinc-900 px-3 py-1 rounded-full">I Event</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Event Transport Services</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">Complete transportation management for group events, corporate outings, team-building activities, and conferences.</p>
<div className="border-t border-white/5 pt-6">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Group coordination
                                </li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Dedicated event coordinators
                                </li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Multiple pickup points
                                </li>
</ul>
</div>
</div>

<div className="group bg-zinc-950 border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center text-white group-hover:bg-purple-500 group-hover:text-zinc-950 transition-colors">
<iconify-icon icon="lucide:map" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-purple-400 bg-zinc-900 px-3 py-1 rounded-full">I Tour</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Tour &amp; Travel Services</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">Professionally organized tours with experienced guides. Perfect for discerning travelers wanting comfort and expertise.</p>
<div className="border-t border-white/5 pt-6">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Customized itineraries
                                </li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Experienced guides
                                </li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="16"></iconify-icon> Premium vehicles
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-12" id="page-fleet">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-4">Our Fleet</h1>
<p className="text-zinc-400 max-w-2xl text-lg">Modern, maintained, and diverse vehicles for every requirement.</p>
</div>
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-2/3 grid gap-6">

<div className="p-8 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col md:flex-row gap-6 hover:bg-zinc-900 transition-colors group">
<div className="w-full md:w-48 h-32 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:car-front" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-3 mb-2">
<h4 className="text-xl font-medium text-white">Executive Sedans</h4>
<span className="text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded border border-white/5">4 Seater</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">Premium comfort for executive travel, client meetings, and airport transfers. Perfect for individual executives or small teams.</p>
<div className="flex gap-4 text-xs text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:wind"></iconify-icon> AC</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:wifi"></iconify-icon> Wi-Fi</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:music"></iconify-icon> Music</span>
</div>
</div>
</div>

<div className="p-8 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col md:flex-row gap-6 hover:bg-zinc-900 transition-colors group">
<div className="w-full md:w-48 h-32 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:bus" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-3 mb-2">
<h4 className="text-xl font-medium text-white">SUVs &amp; MUVs</h4>
<span className="text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded border border-white/5">6-7 Seater</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">Spacious, comfortable options ideal for small teams, airport groups, or executives requiring extra room for luggage.</p>
<div className="flex gap-4 text-xs text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:wind"></iconify-icon> AC</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:briefcase"></iconify-icon> Extra Luggage</span>
</div>
</div>
</div>

<div className="p-8 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col md:flex-row gap-6 hover:bg-zinc-900 transition-colors group">
<div className="w-full md:w-48 h-32 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:bus-front" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-3 mb-2">
<h4 className="text-xl font-medium text-white">Luxury Coaches</h4>
<span className="text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded border border-white/5">12-50 Seater</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">High-capacity transportation solutions for large groups, corporate events, and conferences. Climate control ensures pleasant journeys.</p>
<div className="flex gap-4 text-xs text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:wind"></iconify-icon> AC</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:mic"></iconify-icon> PA System</span>
</div>
</div>
</div>
</div>

<div className="lg:w-1/3">
<div className="sticky top-24">
<h2 className="text-xl font-semibold text-white tracking-tight mb-6">Standard Amenities</h2>
<div className="space-y-4">
<div className="p-5 bg-zinc-900/40 border border-white/5 rounded-lg">
<iconify-icon className="text-amber-400 mb-3" icon="lucide:clock-4" width="20"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">24/7 Accessibility</h4>
<p className="text-xs text-zinc-500">Always ready to respond.</p>
</div>
<div className="p-5 bg-zinc-900/40 border border-white/5 rounded-lg">
<iconify-icon className="text-emerald-400 mb-3" icon="lucide:file-check" width="20"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">Full Compliance</h4>
<p className="text-xs text-zinc-500">Insurance &amp; Permits valid.</p>
</div>
<div className="p-5 bg-zinc-900/40 border border-white/5 rounded-lg">
<iconify-icon className="text-rose-400 mb-3" icon="lucide:first-aid" width="20"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">Safety Equipment</h4>
<p className="text-xs text-zinc-500">First aid, fire extinguisher, etc.</p>
</div>
<div className="p-5 bg-zinc-900/40 border border-white/5 rounded-lg">
<iconify-icon className="text-blue-400 mb-3" icon="lucide:refresh-cw" width="20"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">Immediate Backup</h4>
<p className="text-xs text-zinc-500">Zero disruption guarantee.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-12" id="page-technology">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16 text-center max-w-3xl mx-auto">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Technology Stack</h1>
<p className="text-zinc-400 text-lg">Our investment in technology infrastructure ensures that corporate clients receive not just transportation, but a complete mobility management solution.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 text-left">

<div className="relative p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950">
<div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6 border border-amber-500/20">
<iconify-icon icon="lucide:radar" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Real-Time Tracking</h3>
<p className="text-sm text-zinc-500 leading-relaxed">GPS-enabled fleet monitoring provides live location updates, estimated arrival times, and route optimization for maximum efficiency.</p>
</div>

<div className="relative p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950">
<div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Digital Management</h3>
<p className="text-sm text-zinc-500 leading-relaxed">User-friendly booking platforms, automated scheduling systems, and digital reporting tools streamline operations and provide complete visibility.</p>
</div>

<div className="relative p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950">
<div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Analytics &amp; Reports</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Comprehensive usage analytics, cost tracking, and performance metrics help you optimize your corporate transportation spend.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-12" id="page-clients">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-4">Trusted Clients</h1>
<p className="text-zinc-400 max-w-2xl text-lg">We are proud to serve some of the industry's leading organizations.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="h-40 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center p-6 text-center hover:border-white/20 transition-colors group">
<span className="text-xl font-semibold text-zinc-500 group-hover:text-white transition-colors">Happiness in Transit</span>
</div>
<div className="h-40 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center p-6 text-center hover:border-white/20 transition-colors group">
<span className="text-xl font-semibold text-zinc-500 group-hover:text-white transition-colors">Fiesta Smart</span>
</div>
<div className="h-40 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center p-6 text-center hover:border-white/20 transition-colors group">
<span className="text-xl font-semibold text-zinc-500 group-hover:text-white transition-colors">Baghirathi Group</span>
</div>
<div className="h-40 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center p-6 text-center hover:border-white/20 transition-colors group">
<span className="text-xl font-semibold text-zinc-500 group-hover:text-white transition-colors">VTT Mobility</span>
</div>
</div>
<div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
<iconify-icon className="text-amber-500/50 mb-4" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-lg text-zinc-300 italic mb-6">
                        "These partnerships represent more than business relationships—they're testaments to our reliability, professionalism, and commitment to exceeding expectations every single day."
                    </p>
<div className="text-sm font-semibold text-amber-500 uppercase tracking-widest">Client Testimonial</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-zinc-950 pt-16 pb-8 mt-auto" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs">JT</div>
<span className="text-white font-medium tracking-tight">Jenushree Travels</span>
</div>
<p className="leading-relaxed text-sm text-zinc-500 mb-4" onclick="window.location.href='https://www.google.com/maps?rlz=1C1CHBD_en-GBIN1168IN1168&amp;gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEEUYJxg7MgYIAhAjGCcyCAgDEAAYFhgeMgoIBBAAGIAEGKIEMgoIBRAAGIAEGKIEMgoIBhAAGIAEGKIEMgYIBxBFGD3SAQgzMjk0ajBqN6gCALACAA&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;gl=in&amp;sa=X&amp;geocode=KbNbfuoBQa47MXt-dscFUGp-&amp;daddr=Shop+No+107+Nagegowdanapalya+road,+Kanakapura+Main+Rd,+Post,+Talaghattapura,+Bengaluru,+Karnataka+560109'" role="button">Shop No 107 Nagegowdanapalya road, Kanakapura Main Rd, Post, Talaghattapura, Bengaluru, Karnataka 560109</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-amber-400 transition-colors" href="javascript:void(0)" onclick="switchPage('services')">Corporate Commute</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="javascript:void(0)" onclick="switchPage('services')">Event Transport</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="javascript:void(0)" onclick="switchPage('services')">Luxury Tours</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-amber-400 transition-colors" href="javascript:void(0)" onclick="switchPage('about')">About Us</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="javascript:void(0)" onclick="switchPage('fleet')">Our Fleet</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="javascript:void(0)" onclick="switchPage('clients')">Clients</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Contact Headquarters</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-amber-400" icon="lucide:map-pin"></iconify-icon>
<span>Bangalore, Karnataka, India</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-amber-400" icon="lucide:phone"></iconify-icon>
<span>24/7 Support Available</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-amber-400" icon="lucide:mail"></iconify-icon>
<span>contact@jenushreetravels.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Jenushree Travels Private Limited. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
