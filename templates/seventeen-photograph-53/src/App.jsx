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



        // Set dynamic year
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Simple View Router Logic
        function switchView(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            // Show target view
            const target = document.getElementById('view-' + viewId);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            // Update active nav state visually (simple approach)
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-white');
                btn.classList.add('text-neutral-400');
            });
            event.currentTarget.classList.remove('text-neutral-400');
            event.currentTarget.classList.add('text-white');
        }

        // Booking Form Logic (Swap category selects)
        function toggleBookingOptions() {
            const isPrivate = document.querySelector('input[name="booking_type"][value="private"]').checked;
            const privateSelect = document.getElementById('category_private');
            const eventSelect = document.getElementById('category_event');

            if (isPrivate) {
                privateSelect.classList.remove('hidden');
                eventSelect.classList.add('hidden');
            } else {
                privateSelect.classList.add('hidden');
                eventSelect.classList.remove('hidden');
            }
        }

        // Demo Admin Toggle
        function toggleAdminState() {
            document.body.classList.toggle('is-admin');
            const btn = document.querySelector('button[onclick="toggleAdminState()"]');
            if(document.body.classList.contains('is-admin')) {
                btn.classList.add('text-cyan-400', 'border-cyan-500/50');
            } else {
                btn.classList.remove('text-cyan-400', 'border-cyan-500/50');
                // If in admin view and logging out, redirect to home
                if(document.getElementById('view-admin-dashboard').classList.contains('active')) {
                    switchView('home');
                }
            }
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
      
<div className="ambient-bg"></div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#" onclick="switchView('home')">
<span className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
                    17P
                </a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<button className="nav-btn hover:text-white transition" onclick="switchView('home')">Portfolio</button>
<button className="nav-btn hover:text-white transition" onclick="switchView('gallery')">Galerie</button>
<button className="nav-btn hover:text-white transition" onclick="switchView('booking')">Buchen</button>
<button className="nav-btn hover:text-white transition" onclick="switchView('feedback')">Feedback</button>
<button className="nav-btn hover:text-white transition" onclick="switchView('raw')">RAW Upload</button>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-black bg-white rounded-md hover:bg-neutral-200 transition" onclick="switchView('booking')">
                    Termin vereinbaren
                </button>
<button className="admin-only items-center justify-center px-3 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-md hover:bg-cyan-400/20 transition" onclick="switchView('admin-dashboard')">
<iconify-icon className="mr-2 text-base" icon="solar:widget-linear"></iconify-icon> Dashboard
                </button>

<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 flex flex-col">

<section className="view-section active space-y-32" id="view-home">

<div className="flex flex-col items-center text-center mt-12 mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Jetzt Termine für Q4 verfügbar
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-tight mb-6 max-w-4xl">
                    Dein persönliches <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">Fotostudio.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mb-10 font-normal">
                    Hochwertige Cinematic-Fotografie, maßgeschneidert für deine Vision. Vom ersten Konzept bis zum finalen RAW-Edit.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-neutral-200 transition" onclick="switchView('booking')">Shooting buchen</button>
<button className="px-6 py-3 text-sm font-medium text-white bg-neutral-900 border border-neutral-800 rounded-md hover:bg-neutral-800 transition" onclick="switchView('gallery')">Galerie ansehen</button>
</div>
</div>

<div className="space-y-8">
<h2 className="text-2xl font-medium tracking-tight text-white">Der Prozess</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm">
<iconify-icon className="text-2xl text-amber-400 mb-4" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">1. Idee &amp; Vision</h3>
<p className="text-sm text-neutral-500">Wir besprechen deine Vorstellungen und planen das perfekte Setup.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm relative">
<div className="absolute top-1/2 -left-3 w-6 h-[1px] bg-white/10 hidden md:block"></div>
<iconify-icon className="text-2xl text-cyan-400 mb-4" icon="solar:calendar-date-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">2. Terminierung</h3>
<p className="text-sm text-neutral-500">Buche deinen Wunschtermin unkompliziert über unser System.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm relative">
<div className="absolute top-1/2 -left-3 w-6 h-[1px] bg-white/10 hidden md:block"></div>
<iconify-icon className="text-2xl text-fuchsia-400 mb-4" icon="solar:camera-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">3. Shooting</h3>
<p className="text-sm text-neutral-500">Entspannte Atmosphäre und professionelle Umsetzung am Set.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm relative">
<div className="absolute top-1/2 -left-3 w-6 h-[1px] bg-white/10 hidden md:block"></div>
<iconify-icon className="text-2xl text-purple-400 mb-4" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">4. RAW &amp; Edit</h3>
<p className="text-sm text-neutral-500">Lade deine Favoriten im Portal hoch und erhalte die finalen Edits.</p>
</div>
</div>
</div>

<div className="space-y-8">
<div className="flex items-end justify-between">
<h2 className="text-2xl font-medium tracking-tight text-white">Neueste Arbeiten</h2>
<button className="text-sm font-medium text-neutral-400 hover:text-white transition flex items-center gap-1" onclick="switchView('gallery')">Alle ansehen <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative rounded-xl overflow-hidden bg-neutral-900 border glow-legend aspect-[16/9]">
<img alt="Legendary Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
<span className="text-xs font-medium text-amber-400 mb-2 tracking-widest uppercase">Masterpiece</span>
<h3 className="text-2xl font-medium text-white tracking-tight">Neon Nights Automotive</h3>
<p className="text-sm text-neutral-300 mt-2">Porsche 911 GT3 RS in Downtown</p>
</div>
</div>

<div className="md:col-span-4 group relative rounded-xl overflow-hidden bg-neutral-900 border border-white/5 glow-primary aspect-square md:aspect-auto">
<img alt="Portrait" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<h3 className="text-lg font-medium text-white tracking-tight">Studio Portrait</h3>
<p className="text-xs text-neutral-400 mt-1">Cinematic Lighting Setup</p>
</div>
</div>
</div>
</div>

<div className="space-y-8 pb-20">
<h2 className="text-2xl font-medium tracking-tight text-white">Kategorien &amp; Services</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 rounded-xl bg-neutral-900/20 border border-white/5 hover:bg-neutral-900/50 transition cursor-pointer flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-neutral-400 mb-3" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Porträt</span>
</div>
<div className="p-6 rounded-xl bg-neutral-900/20 border border-white/5 hover:bg-neutral-900/50 transition cursor-pointer flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-neutral-400 mb-3" icon="solar:wheel-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Automotive</span>
</div>
<div className="p-6 rounded-xl bg-neutral-900/20 border border-white/5 hover:bg-neutral-900/50 transition cursor-pointer flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-neutral-400 mb-3" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Paare &amp; Family</span>
</div>
<div className="p-6 rounded-xl bg-neutral-900/20 border border-white/5 hover:bg-neutral-900/50 transition cursor-pointer flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-neutral-400 mb-3" icon="solar:confetti-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Events &amp; Firmen</span>
</div>
</div>
</div>
</section>

<section className="view-section space-y-8" id="view-gallery">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h1 className="text-3xl font-medium tracking-tight text-white mb-2">Galerie</h1>
<p className="text-sm text-neutral-400">Unsere letzten Arbeiten, sortiert nach Kategorien.</p>
</div>

<div className="admin-only gap-3">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-neutral-800 border border-neutral-700 rounded hover:bg-neutral-700 transition flex items-center gap-2">
<iconify-icon icon="solar:add-folder-linear"></iconify-icon> Neue Kategorie
                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-cyan-600/20 border border-cyan-500/50 rounded hover:bg-cyan-600/40 transition flex items-center gap-2 text-cyan-400">
<iconify-icon icon="solar:upload-linear"></iconify-icon> Bilder hochladen
                    </button>
</div>
</div>

<div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
<button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-black whitespace-nowrap">Alle zeigen</button>
<button className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white transition whitespace-nowrap">Porträt</button>
<button className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white transition whitespace-nowrap">Automotive</button>
<button className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white transition whitespace-nowrap">Paare</button>
<button className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white transition whitespace-nowrap">Events</button>
<div className="flex items-center pl-4 border-l border-white/10 ml-2">
<span className="text-xs text-neutral-500 flex items-center gap-1"><iconify-icon icon="solar:heart-linear"></iconify-icon> 12.4k Gesamt-Likes</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group relative rounded-lg overflow-hidden bg-neutral-900 aspect-[4/5] cursor-pointer" data-lightbox="true">
<img alt="Auto" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-3 left-3 px-2 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/50 rounded text-[10px] font-medium text-amber-400 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:star-linear"></iconify-icon> Top Shot
                    </div>

<button className="admin-only absolute top-3 right-3 w-8 h-8 bg-red-500/80 backdrop-blur-md rounded items-center justify-center text-white hover:bg-red-600 transition z-10">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
<h3 className="text-base font-medium text-white tracking-tight truncate">Midnight Run</h3>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-cyan-400">Automotive</span>
<button className="flex items-center gap-1.5 text-xs font-medium text-white hover:text-fuchsia-400 transition" data-like-image="1">
<iconify-icon className="text-base" icon="solar:heart-linear"></iconify-icon> 245
                            </button>
</div>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden bg-neutral-900 aspect-[4/5] cursor-pointer" data-lightbox="true">
<img alt="Portrait" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="admin-only absolute top-3 right-3 w-8 h-8 bg-red-500/80 backdrop-blur-md rounded items-center justify-center text-white hover:bg-red-600 transition z-10">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
<h3 className="text-base font-medium text-white tracking-tight truncate">Neon Glow Portrait</h3>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-fuchsia-400">Porträt</span>
<button className="flex items-center gap-1.5 text-xs font-medium text-white hover:text-fuchsia-400 transition">
<iconify-icon className="text-base" icon="solar:heart-linear"></iconify-icon> 182
                            </button>
</div>
</div>
</div>

<div className="rounded-lg bg-neutral-900/50 border border-white/5 aspect-[4/5] flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-800" icon="solar:gallery-linear"></iconify-icon>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/5 aspect-[4/5] flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-800" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
</section>

<section className="view-section max-w-3xl mx-auto w-full space-y-8" id="view-booking">
<div className="text-center mb-12">
<h1 className="text-3xl font-medium tracking-tight text-white mb-2">Shooting buchen</h1>
<p className="text-sm text-neutral-400">Fülle das Formular aus, um eine Anfrage für dein nächstes Projekt zu senden.</p>
</div>
<form className="space-y-8 bg-neutral-900/40 border border-white/5 p-8 rounded-2xl backdrop-blur-sm" data-booking-link="true">

<div className="space-y-3">
<label className="text-sm font-medium text-white">Buchungsart *</label>
<div className="grid grid-cols-2 gap-4">
<label className="relative cursor-pointer">
<input checked="" className="peer sr-only" name="booking_type" onchange="toggleBookingOptions()" type="radio" value="private"/>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950 peer-checked:border-cyan-500/50 peer-checked:bg-cyan-500/5 transition flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-neutral-400 peer-checked:text-cyan-400" icon="solar:user-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Privatshooting</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="booking_type" onchange="toggleBookingOptions()" type="radio" value="event"/>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950 peer-checked:border-fuchsia-500/50 peer-checked:bg-fuchsia-500/5 transition flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-neutral-400 peer-checked:text-fuchsia-400" icon="solar:buildings-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Firma &amp; Event</span>
</div>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-white">Kategorie *</label>
<select className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition" id="category_private">
<option value="einzel">Einzelshooting</option>
<option value="paar">Paarshooting</option>
<option value="tier">Tiershooting</option>
<option value="family">Family</option>
<option value="automotive">Automotive</option>
</select>
<select className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition hidden" id="category_event">
<option value="rideout">Rideout</option>
<option value="party">Party / Club</option>
<option value="hochzeit">Hochzeit</option>
<option value="firmenevent">Firmenevent</option>
<option value="launch">Launch / Release</option>
<option value="sonstiges">Sonstiges Event</option>
</select>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-white">Name (IC) *</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition" placeholder="Max Mustermann" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white">Telefon (IC) *</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition" placeholder="555-0123" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white">Wohnort *</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition" placeholder="Los Santos" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white">Discord (Optional)</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition" placeholder="username#1234" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white">Wunschdatum *</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition" required="" type="date"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white">Uhrzeit (Optional)</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition" style={{filter: 'invert(1)', backgroundColor: '#0a0a0a'}} type="time"/> 
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white">Nachricht / Details (Optional)</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition resize-none" placeholder="Erzähl uns etwas über deine Vorstellung..." rows="4"></textarea>
</div>
<button className="w-full py-3 px-4 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="button">
                    Anfrage absenden
                </button>
</form>
</section>

<section className="view-section space-y-8" id="view-feedback">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h1 className="text-3xl font-medium tracking-tight text-white mb-2">Kundenstimmen</h1>
<p className="text-sm text-neutral-400">Was andere über unsere Arbeit sagen.</p>
</div>
<button className="px-4 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-neutral-200 transition">
                    Feedback schreiben
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm flex flex-col">
<div className="flex gap-1 text-cyan-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 flex-grow mb-6 leading-relaxed">"Unglaubliches Shooting! Die Bilder von meinem Auto in der Nacht sehen extrem cinematic aus. Genau der Vibe, den ich gesucht habe."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">J</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Jason D.</span>
<span className="text-[10px] text-neutral-500">Automotive Shooting</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm flex flex-col">
<div className="flex gap-1 text-cyan-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 flex-grow mb-6 leading-relaxed">"Sehr entspannte Atmosphäre beim Paarshooting. Die Fotografen wissen genau, wie sie das perfekte Licht setzen."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">S</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Sarah &amp; Mike</span>
<span className="text-[10px] text-neutral-500">Paarshooting</span>
</div>
</div>
</div>

<div className="admin-only-block p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] uppercase tracking-wider font-medium text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">Ausstehend (Admin)</span>
<div className="flex gap-2">
<button className="text-green-400 hover:text-green-300"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></button>
<button className="text-red-400 hover:text-red-300"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
</div>
<p className="text-sm text-neutral-300 flex-grow mb-6 opacity-70">"Gutes Event, Fotos waren schnell da."</p>
<div className="flex items-center gap-3 opacity-70">
<span className="text-xs font-medium text-white">Anon</span>
</div>
</div>
</div>
</section>

<section className="view-section max-w-2xl mx-auto w-full space-y-8" data-upload-shell="true" id="view-raw">
<div className="text-center mb-8">
<h1 className="text-3xl font-medium tracking-tight text-white mb-2">RAW-Auswahl</h1>
<p className="text-sm text-neutral-400">Gib deinen Zugangscode ein, um deine Favoriten für die Bearbeitung hochzuladen.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm text-center" id="raw-login-step">
<iconify-icon className="text-4xl text-neutral-600 mb-4" icon="solar:lock-password-linear"></iconify-icon>
<div className="max-w-xs mx-auto space-y-4">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-center text-sm text-white tracking-widest placeholder:text-neutral-700 placeholder:tracking-normal focus:outline-none focus:border-cyan-500/50 transition uppercase" placeholder="ZUGANGSCODE" type="text"/>
<button className="w-full py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition" onclick="document.getElementById('raw-login-step').style.display='none'; document.getElementById('raw-upload-step').style.display='block';" type="button">
                        Zugang prüfen
                    </button>
</div>
</div>

<div className="space-y-6 hidden" id="raw-upload-step">
<div className="flex items-center justify-between p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
<div>
<p className="text-sm font-medium text-white">Ordner: REF-9281A</p>
<p className="text-xs text-neutral-500">Status: Warte auf Uploads</p>
</div>
</div>
<span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">0 / 3 RAWs</span>
</div>
<div className="border-2 border-dashed border-neutral-800 hover:border-white/30 rounded-xl p-10 text-center transition cursor-pointer bg-neutral-950/50">
<iconify-icon className="text-4xl text-neutral-500 mb-3" icon="solar:cloud-upload-linear"></iconify-icon>
<p className="text-sm font-medium text-white mb-1">Klicke oder ziehe Bilder hierher</p>
<p className="text-xs text-neutral-500">Max. 3 Dateien (.ARW, .CR3, .NEF)</p>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white">Bearbeitungswünsche</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition resize-none" placeholder="Z.B. Fokus auf Neonlichter, Kennzeichen schwärzen..." rows="3"></textarea>
</div>
<button className="w-full py-3 px-4 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition opacity-50 cursor-not-allowed" type="button">
                    Dateien übermitteln
                </button>
</div>
</section>

<section className="view-section admin-only-block space-y-8" data-category-admin="true" id="view-admin-dashboard">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
<div>
<h1 className="text-3xl font-medium tracking-tight text-cyan-400 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> System Monitor
                    </h1>
<p className="text-sm text-neutral-400">Buchungsübersicht und RAW-Inbox.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 border border-neutral-800 rounded hover:bg-neutral-800 transition">Preise bearbeiten</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 border border-neutral-800 rounded hover:bg-neutral-800 transition">Discord Sync</button>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
<div className="p-4 border-b border-white/5 flex items-center justify-between bg-neutral-950/50">
<h2 className="text-sm font-medium text-white">Offene Buchungen</h2>
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-8 pr-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-white focus:outline-none focus:border-cyan-500/50 w-48" placeholder="REF oder Name suchen..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-neutral-950/30 text-[11px] uppercase tracking-wider text-neutral-500">
<th className="p-4 font-medium border-b border-white/5">Ref</th>
<th className="p-4 font-medium border-b border-white/5">Kunde</th>
<th className="p-4 font-medium border-b border-white/5">Typ</th>
<th className="p-4 font-medium border-b border-white/5">Datum</th>
<th className="p-4 font-medium border-b border-white/5 text-right">Aktion</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300 divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition">
<td className="p-4 font-mono text-xs text-cyan-400">#BK-928</td>
<td className="p-4">
<div className="font-medium text-white">Alex Mercer</div>
<div className="text-[11px] text-neutral-500">555-0192</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-300">Automotive</span>
</td>
<td className="p-4">12.11.2023</td>
<td className="p-4 text-right">
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition">
<td className="p-4 font-mono text-xs text-cyan-400">#BK-927</td>
<td className="p-4">
<div className="font-medium text-white">Vespucci Customs</div>
<div className="text-[11px] text-neutral-500">Event</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">Firmenevent</span>
</td>
<td className="p-4">15.11.2023</td>
<td className="p-4 text-right">
<button className="text-neutral-500 hover:text-white"><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
<div className="p-4 border-b border-white/5 bg-neutral-950/50">
<h2 className="text-sm font-medium text-white">RAWShot Inbox</h2>
</div>
<div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-cyan-400">REF-9281A</span>
<span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-amber-500/10 text-amber-500 uppercase tracking-wider">Eingegangen</span>
</div>
<p className="text-sm text-white font-medium">3 Dateien hochgeladen</p>
<p className="text-xs text-neutral-500 mt-1 line-clamp-1">"Bitte die Reflexionen auf der Motorhaube..."</p>
</div>
<div className="flex flex-col gap-2">
<button className="w-8 h-8 rounded bg-neutral-800 text-neutral-300 flex items-center justify-center hover:bg-neutral-700 transition" title="Download ZIP">
<iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>

<div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex justify-between items-start opacity-70">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-neutral-500">REF-8120B</span>
<span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-green-500/10 text-green-500 uppercase tracking-wider">Fertig</span>
</div>
<p className="text-sm text-neutral-300 font-medium">Edits übergeben</p>
</div>
<div className="flex flex-col gap-2">
<button className="w-8 h-8 rounded bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition" title="Ordner löschen">
<iconify-icon icon="solar:trash-bin-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/50 backdrop-blur-md mt-auto">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-neutral-500 text-xs">
<span className="font-medium text-neutral-400">17P</span> © <span id="current-year"></span>. All rights reserved.
            </div>

<button className="text-[10px] text-neutral-600 hover:text-cyan-400 uppercase tracking-widest transition flex items-center gap-1 border border-neutral-800 px-2 py-1 rounded bg-neutral-900" onclick="toggleAdminState()">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> Toggle Admin View
            </button>
</div>
</footer>


    </>
  );
}
