import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Reveal Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // Modal Logic
        function openModal() {
            const modal = document.getElementById('modal-overlay');
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.remove('opacity-0'), 10);
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('modal-overlay');
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 300);
            document.body.style.overflow = 'auto';
        }

        // Nav Scroll Logic
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('border-b', 'border-black/5');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 grid-bg opacity-40 pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-[100] border-b border-black/5 bg-[#FAFAF9]/80 backdrop-blur-sm transition-all duration-300" id="navbar">
<div className="w-full flex justify-between items-stretch h-20">

<a className="flex items-center gap-3 px-8 border-r border-black/5 hover:bg-black/5 transition-colors" href="#">
<iconify-icon className="text-neutral-900" icon="lucide:mountain-snow" width="20"></iconify-icon>
<span className="text-xs tracking-[0.2em] font-medium text-neutral-900 uppercase">MGC / Sanctuary</span>
</a>

<div className="hidden md:flex flex-1 justify-center items-center gap-12">
<a className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group" href="#about">
                    Concept
                    <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group" href="#architecture">
                    Architecture
                    <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group" href="#location">
                    Location
                    <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
</div>

<div className="flex items-stretch">
<button className="px-8 flex items-center gap-2 text-xs uppercase tracking-widest bg-neutral-900 text-white hover:bg-neutral-700 transition-colors font-semibold" onclick="openModal()">
                    Reserve
                </button>
</div>
</div>
</nav>

<header className="relative w-full h-screen pt-20 flex flex-col justify-between border-b border-black/5">

<div className="absolute inset-0 z-0">
<img alt="Mountains" className="w-full h-full object-cover opacity-20 grayscale-0" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9]/40 to-transparent"></div>
</div>
<div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6">
<p className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-[0.4em] mb-6 reveal-up">Latitude 28.0° N</p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-neutral-900 leading-none mb-6 italic reveal-up" style={{transitionDelay: '100ms'}}>
                The Stone <br/> <span className="not-italic font-light text-neutral-800">Sanctuary</span>
</h1>
<div className="h-16 w-px bg-black/10 mt-8 reveal-up" style={{transitionDelay: '200ms'}}></div>
</div>
<div className="relative z-10 w-full border-t border-black/5 grid grid-cols-3 divide-x divide-black/5 bg-[#FAFAF9]/50 backdrop-blur-sm">
<div className="p-6 md:p-8 text-center md:text-left">
<span className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Elevation</span>
<span className="font-serif text-2xl text-neutral-800">850m</span>
</div>
<div className="p-6 md:p-8 text-center md:text-left">
<span className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Climate</span>
<span className="font-serif text-2xl text-neutral-800">Subtropical</span>
</div>
<div className="p-6 md:p-8 text-center md:text-left">
<span className="block text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Design</span>
<span className="font-serif text-2xl text-neutral-800">Troglodyte</span>
</div>
</div>
</header>

<section className="relative z-10 border-b border-black/5" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-center">
<span className="text-accent text-xs font-mono mb-8 block">[ 01 — THE CONCEPT ]</span>
<h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8 font-light text-neutral-900">
                    Silence is the new <span className="italic text-neutral-500">luxury</span>.
                </h2>
<p className="text-neutral-600 font-light leading-relaxed max-w-md text-sm md:text-base">
                    My Green Canaria is an architectural experiment in slow living. Carved directly into the volcanic rock of Gran Canaria, we offer a retreat stripped of the inessential. Here, the walls breathe, the light travels, and time suspends.
                </p>
<div className="mt-12">
<a className="btn-outline border border-black/20 px-8 py-3 text-xs uppercase tracking-widest inline-block" href="#">
                        Read Our Journal
                    </a>
</div>
</div>
<div className="h-[500px] lg:h-auto img-zoom-container relative">
<img alt="Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499540633125-484965b60031?w=1200&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-white/90 to-transparent w-full">
<p className="font-mono text-[10px] text-neutral-800">FIG 1.1 — VOLCANIC TEXTURES</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 px-6" id="architecture">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8 reveal-up">
<div>
<span className="text-accent text-xs font-mono mb-4 block">[ 02 — THE ARCHITECTURE ]</span>
<h2 className="font-serif text-5xl md:text-7xl text-neutral-900">Carved Earth</h2>
</div>
<p className="text-neutral-500 text-sm max-w-xs mt-6 md:mt-0 text-right">
                    Organic forms meet brutalist necessity.
                    Natural thermal regulation.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/5 border border-black/5">

<div className="md:col-span-8 bg-[#F5F5F4] relative group overflow-hidden h-[400px] md:h-[600px]">
<img alt="Cave Interior" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 hover:grayscale-0" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&amp;q=80"/>
<div className="absolute top-6 left-6 z-10">
<span className="bg-white/40 backdrop-blur text-black px-3 py-1 text-[10px] uppercase tracking-widest border border-white/20">Main Chamber</span>
</div>
</div>

<div className="md:col-span-4 bg-white relative group overflow-hidden h-[400px] md:h-[600px] flex flex-col p-8 justify-between border-l border-black/5">
<div>
<iconify-icon className="text-neutral-800 text-3xl mb-6 font-thin" icon="lucide:wind"></iconify-icon>
<h3 className="font-serif text-3xl text-neutral-900 mb-2">Passive Air</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                            The cave creates a natural convection cycle, maintaining 21°C regardless of the exterior heat.
                        </p>
</div>
<div className="w-full h-px bg-black/5 my-8"></div>
<div>
<h3 className="font-serif text-3xl text-neutral-900 mb-2">Starlink</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                            Disconnected from noise, connected to the world. High speed satellite internet available.
                        </p>
</div>
</div>

<div className="md:col-span-6 bg-white p-8 md:p-12 border-t border-black/5 flex flex-col justify-center">
<span className="text-[10px] uppercase text-neutral-500 tracking-widest mb-4">The Terrace</span>
<h3 className="font-serif text-2xl md:text-4xl text-neutral-900 mb-6">"Breakfast with the falcons."</h3>
<div className="flex gap-4">
<span className="w-2 h-2 rounded-full bg-neutral-900"></span>
<span className="w-2 h-2 rounded-full bg-neutral-200"></span>
<span className="w-2 h-2 rounded-full bg-neutral-200"></span>
</div>
</div>

<div className="md:col-span-6 bg-[#F5F5F4] relative group overflow-hidden h-[300px] border-t border-l border-black/5">
<img alt="Detail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<div className="border-y border-black/5 py-6 overflow-hidden bg-white">
<div className="whitespace-nowrap flex animate-scroll">
<span className="text-6xl font-serif italic text-black/5 px-8">Sanctuary of Light</span>
<span className="text-6xl font-serif text-black/5 px-8">—</span>
<span className="text-6xl font-serif italic text-black/5 px-8">Slow Living</span>
<span className="text-6xl font-serif text-black/5 px-8">—</span>
<span className="text-6xl font-serif italic text-black/5 px-8">Volcanic Soul</span>
<span className="text-6xl font-serif text-black/5 px-8">—</span>
<span className="text-6xl font-serif italic text-black/5 px-8">Sanctuary of Light</span>
<span className="text-6xl font-serif text-black/5 px-8">—</span>
<span className="text-6xl font-serif italic text-black/5 px-8">Slow Living</span>
</div>
</div>

<section className="py-32 px-6" id="location">
<div className="max-w-5xl mx-auto">
<span className="text-accent text-xs font-mono mb-12 block">[ 03 — SURROUNDINGS ]</span>
<div className="space-y-0">

<div className="group py-10 border-t border-black/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors hover:bg-black/5 px-4 reveal-up">
<div className="flex items-baseline gap-6 md:w-1/2">
<span className="font-mono text-xs text-neutral-400">01</span>
<h3 className="text-3xl font-serif text-neutral-900 group-hover:translate-x-4 transition-transform duration-300">Roque Nublo Trail</h3>
</div>
<div className="md:w-1/2 mt-4 md:mt-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<p className="text-xs text-neutral-500 max-w-[200px]">Ancient sacred rock, reachable by foot.</p>
<img alt="Preview" className="w-24 h-16 object-cover" src="https://images.unsplash.com/photo-1542259659439-d4199d750731?w=200&amp;q=80"/>
</div>
</div>

<div className="group py-10 border-t border-black/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors hover:bg-black/5 px-4 reveal-up">
<div className="flex items-baseline gap-6 md:w-1/2">
<span className="font-mono text-xs text-neutral-400">02</span>
<h3 className="text-3xl font-serif text-neutral-900 group-hover:translate-x-4 transition-transform duration-300">Starlight Reserve</h3>
</div>
<div className="md:w-1/2 mt-4 md:mt-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<p className="text-xs text-neutral-500 max-w-[200px]">Zero light pollution. UNESCO certified.</p>
<img alt="Preview" className="w-24 h-16 object-cover" src="https://images.unsplash.com/photo-1533208087231-c3618eab623c?w=200&amp;q=80"/>
</div>
</div>

<div className="group py-10 border-y border-black/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors hover:bg-black/5 px-4 reveal-up">
<div className="flex items-baseline gap-6 md:w-1/2">
<span className="font-mono text-xs text-neutral-400">03</span>
<h3 className="text-3xl font-serif text-neutral-900 group-hover:translate-x-4 transition-transform duration-300">Cave Cheese</h3>
</div>
<div className="md:w-1/2 mt-4 md:mt-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<p className="text-xs text-neutral-500 max-w-[200px]">Locally aged 'Queso de Flor'.</p>
<img alt="Preview" className="w-24 h-16 object-cover" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=200&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#171717] text-white py-24 px-6 mt-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-between h-full">
<div>
<h2 className="font-serif text-7xl md:text-9xl tracking-tighter leading-[0.8] mb-8 text-[#FAFAF9]">
                        Book<br/>Now.
                    </h2>
<p className="font-mono text-xs max-w-sm border-l border-white/20 pl-4 text-neutral-400">
                        Availability is limited. The Cave accepts guests for a minimum of 3 nights to ensure full decompression.
                    </p>
</div>
<div className="mt-12 flex gap-6">
<a className="text-sm font-bold uppercase underline decoration-1 underline-offset-4 hover:text-neutral-300" href="#">Instagram</a>
<a className="text-sm font-bold uppercase underline decoration-1 underline-offset-4 hover:text-neutral-300" href="#">Airbnb</a>
<a className="text-sm font-bold uppercase underline decoration-1 underline-offset-4 hover:text-neutral-300" href="#">Email</a>
</div>
</div>
<div className="bg-[#262626] p-8 md:p-12 border border-white/10 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase text-neutral-400">Arrival</label>
<input className="w-full bg-transparent border-b border-neutral-600 text-white py-2 font-serif text-xl focus:outline-none focus:border-white transition-colors [color-scheme:dark]" type="date"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase text-neutral-400">Departure</label>
<input className="w-full bg-transparent border-b border-neutral-600 text-white py-2 font-serif text-xl focus:outline-none focus:border-white transition-colors [color-scheme:dark]" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase text-neutral-400">Guests</label>
<select className="w-full bg-transparent border-b border-neutral-600 text-white py-2 font-serif text-xl focus:outline-none focus:border-white transition-colors bg-[#262626]">
<option>1 Explorer</option>
<option>2 Explorers</option>
<option>3 Explorers</option>
</select>
</div>
<button className="w-full bg-[#FAFAF9] text-black py-4 mt-8 uppercase tracking-widest text-xs font-bold hover:bg-neutral-300 transition-colors" type="button">
                        Check Availability
                    </button>
</form>
</div>
</div>
<div className="flex justify-between items-end mt-24 pt-8 border-t border-white/10">
<span className="font-mono text-[10px] uppercase text-neutral-500">© 2023 My Green Canaria</span>
<span className="font-mono text-[10px] uppercase text-neutral-500">Designed by AI</span>
</div>
</footer>

<div className="fixed inset-0 z-[150] bg-white/80 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-opacity duration-300" id="modal-overlay" onclick="closeModal()">
<div className="bg-white border border-black/10 p-12 max-w-md w-full relative shadow-2xl" onclick="event.stopPropagation()">
<button className="absolute top-4 right-4 text-neutral-900 hover:text-red-400" onclick="closeModal()">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
<h3 className="font-serif text-3xl text-neutral-900 mb-4">Inquire</h3>
<p className="text-neutral-500 text-sm mb-6">Please contact us directly for photo shoots or long-term stays.</p>
<a className="text-neutral-900 border-b border-black pb-1" href="mailto:hello@mygreencanaria.com">hello@mygreencanaria.com</a>
</div>
</div>


    </>
  );
}
