import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
stone: '#F2F0EB', // Slightly warmer grey
obsidian: '#0F0F0F',
graphite: '#2A2A2A',
swiss: '#FF2E00', // Sharper red
fog: '#E8E6E1'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
fontSize: {
'xxs': '0.65rem',
},
letterSpacing: {
'tightest': '-0.075em',
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Clock
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
            document.getElementById('clock').innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Scroll Progress
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-progress").style.width = scrolled + "%";
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-stone/90 backdrop-blur-md border-b border-obsidian/10">
<div className="flex items-center justify-between h-14 px-4 md:px-6">
<div className="flex items-center gap-6">
<a className="font-bold tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-3 h-3 bg-obsidian"></div>
                    MONOLITH
                </a>
<div className="hidden md:flex text-xxs font-mono text-obsidian/50 gap-4 uppercase tracking-widest">
<span>Lat: 46.8182° N</span>
<span>Lon: 9.2275° E</span>
<span className="text-swiss">System: Online</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wide">
<a className="hover:text-swiss transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-swiss transition-colors" href="#locations">Spaces</a>
<a className="hover:text-swiss transition-colors" href="#specs">Specs</a>
<a className="hover:text-swiss transition-colors" href="#membership">Membership</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-mono uppercase border border-obsidian/20 px-3 py-1.5 hover:bg-obsidian hover:text-white transition-all">
<i className="w-3 h-3" data-lucide="user"></i>
<span>Login</span>
</button>
<a className="bg-obsidian text-white text-xs font-bold uppercase tracking-wide px-4 py-2 hover:bg-swiss transition-colors" href="#reserve">
                    Book Now
                </a>
</div>
</div>

<div className="h-[1px] w-full bg-obsidian/5">
<div className="h-full bg-swiss w-[15%]" id="scroll-progress"></div>
</div>
</nav>

<header className="relative pt-14 min-h-[90vh] border-b border-obsidian flex flex-col justify-between bg-grid">

<div className="grid grid-cols-2 md:grid-cols-4 border-b border-obsidian/10">
<div className="p-6 border-r border-obsidian/10">
<span className="block text-xxs font-mono text-obsidian/40 uppercase mb-2">Current Capacity</span>
<span className="text-2xl font-light tabular-nums">84%</span>
</div>
<div className="p-6 border-r border-obsidian/10 hidden md:block">
<span className="block text-xxs font-mono text-obsidian/40 uppercase mb-2">Next Availability</span>
<span className="text-xl font-light">OCT 14</span>
</div>
<div className="p-6 border-r border-obsidian/10 hidden md:block">
<span className="block text-xxs font-mono text-obsidian/40 uppercase mb-2">Weather</span>
<span className="text-xl font-light flex items-center gap-2"><i className="w-4 h-4" data-lucide="cloud-rain"></i> 12°C</span>
</div>
<div className="p-6 flex items-center justify-between">
<div>
<span className="block text-xxs font-mono text-obsidian/40 uppercase mb-2">Local Time</span>
<span className="text-xl font-light tabular-nums" id="clock">00:00:00</span>
</div>
<div className="w-2 h-2 rounded-full bg-swiss animate-pulse"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-center items-center text-center p-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-obsidian to-transparent opacity-20"></div>
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter leading-none mb-6">
                DEEP<br/>
                WORK<br/>
<span className="text-swiss">ONLY.</span>
</h1>
<p className="max-w-md mx-auto text-sm md:text-base text-obsidian/60 font-mono leading-relaxed mt-4">
                Architecture designed for cognitive performance. 
                Zero notifications. Zero distractions. Pure output.
            </p>
<div className="mt-12 flex flex-col md:flex-row gap-4 items-center">
<button className="group relative px-8 py-4 bg-transparent border border-obsidian text-xs font-bold uppercase tracking-widest overflow-hidden">
<span className="relative z-10 group-hover:text-stone transition-colors duration-300">Initiate Sequence</span>
<div className="absolute inset-0 bg-obsidian transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</button>
<div className="flex items-center gap-2 text-xxs font-mono text-obsidian/50">
<i className="w-3 h-3 animate-bounce" data-lucide="arrow-down"></i>
                    SCROLL TO EXPLORE
                </div>
</div>
</div>

<div className="border-t border-obsidian bg-obsidian text-stone overflow-hidden py-3">
<div className="flex whitespace-nowrap animate-ticker">
<span className="text-sm font-mono uppercase tracking-widest mx-8">/// DISCONNECT TO RECONNECT</span>
<span className="text-sm font-mono uppercase tracking-widest mx-8">/// DOPAMINE DETOX PROTOCOL</span>
<span className="text-sm font-mono uppercase tracking-widest mx-8">/// STARLINK V2 ENABLED</span>
<span className="text-sm font-mono uppercase tracking-widest mx-8">/// HERMAN MILLER ERGONOMICS</span>
<span className="text-sm font-mono uppercase tracking-widest mx-8">/// SOUND ISOLATION RATED 99%</span>
<span className="text-sm font-mono uppercase tracking-widest mx-8">/// DISCONNECT TO RECONNECT</span>
<span className="text-sm font-mono uppercase tracking-widest mx-8">/// DOPAMINE DETOX PROTOCOL</span>
</div>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-2 border-b border-obsidian" id="philosophy">
<div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-obsidian flex flex-col justify-between min-h-[60vh]">
<span className="text-xxs font-mono uppercase tracking-widest text-swiss mb-4">01 // The Philosophy</span>
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight mb-8">
                    Your best work isn't done in a crowded office or a noisy coffee shop.
                </h2>
<div className="w-12 h-1 bg-obsidian mb-8"></div>
<p className="text-sm md:text-base leading-relaxed text-obsidian/70 max-w-md">
                    Monolith builds isolated sanctuaries in remote locations, engineered specifically for "Deep Work" — the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time.
                </p>
</div>
<div className="mt-12 flex gap-4">
<div className="border border-obsidian/20 rounded-full px-4 py-1 text-xs font-mono">Cal Newport</div>
<div className="border border-obsidian/20 rounded-full px-4 py-1 text-xs font-mono">Mihaly Csikszentmihalyi</div>
</div>
</div>
<div className="bg-stone relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-[1500ms]" src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-obsidian/10"></div>

<div className="absolute bottom-8 left-8 right-8 bg-stone/90 backdrop-blur border border-obsidian p-6">
<div className="flex justify-between items-end mb-4">
<span className="text-xs font-bold uppercase">Focus Metric</span>
<span className="text-2xl font-mono text-swiss">3.5x</span>
</div>
<div className="w-full bg-obsidian/10 h-1">
<div className="bg-swiss h-full w-[85%]"></div>
</div>
<p className="text-xxs font-mono mt-3 text-obsidian/60 uppercase">Productivity output vs. Standard Office</p>
</div>
</div>
</section>

<section className="bg-obsidian text-stone py-24 border-b border-stone/20" id="specs">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone/20 pb-8">
<div>
<span className="text-swiss text-xs font-mono uppercase tracking-widest mb-2 block">02 // Technical Specs</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">THE ENVIRONMENT</h2>
</div>
<p className="text-stone/50 text-sm max-w-sm mt-4 md:mt-0 font-mono">
                    Every variable is controlled. <br/>Lighting, acoustics, air quality, and ergonomics.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone/20 border border-stone/20">

<div className="bg-obsidian p-8 group hover:bg-stone/5 transition-colors">
<div className="flex justify-between mb-8">
<i className="text-swiss w-6 h-6" data-lucide="waves"></i>
<span className="font-mono text-xs text-stone/40">AUDIO</span>
</div>
<h3 className="text-xl font-medium mb-2">Sound Isolation</h3>
<ul className="text-sm text-stone/60 space-y-2 font-mono mt-4">
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Rating</span> <span>STC 65</span></li>
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Floor</span> <span>Floating</span></li>
<li className="flex justify-between pt-1"><span>Glass</span> <span>Triple Pane</span></li>
</ul>
</div>

<div className="bg-obsidian p-8 group hover:bg-stone/5 transition-colors">
<div className="flex justify-between mb-8">
<i className="text-swiss w-6 h-6" data-lucide="sun"></i>
<span className="font-mono text-xs text-stone/40">OPTICS</span>
</div>
<h3 className="text-xl font-medium mb-2">Circadian Lighting</h3>
<ul className="text-sm text-stone/60 space-y-2 font-mono mt-4">
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Morning</span> <span>6500K</span></li>
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Evening</span> <span>2700K</span></li>
<li className="flex justify-between pt-1"><span>Control</span> <span>Auto/Manual</span></li>
</ul>
</div>

<div className="bg-obsidian p-8 group hover:bg-stone/5 transition-colors">
<div className="flex justify-between mb-8">
<i className="text-swiss w-6 h-6" data-lucide="wind"></i>
<span className="font-mono text-xs text-stone/40">ATMOSPHERE</span>
</div>
<h3 className="text-xl font-medium mb-2">Air Quality</h3>
<ul className="text-sm text-stone/60 space-y-2 font-mono mt-4">
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Filtration</span> <span>HEPA H13</span></li>
<li className="flex justify-between border-b border-stone/10 pb-1"><span>CO2 Monitor</span> <span>&lt;400ppm</span></li>
<li className="flex justify-between pt-1"><span>Scent</span> <span>Cedar/Hinoki</span></li>
</ul>
</div>

<div className="bg-obsidian p-8 group hover:bg-stone/5 transition-colors">
<div className="flex justify-between mb-8">
<i className="text-swiss w-6 h-6" data-lucide="wifi"></i>
<span className="font-mono text-xs text-stone/40">NETWORK</span>
</div>
<h3 className="text-xl font-medium mb-2">Connectivity</h3>
<ul className="text-sm text-stone/60 space-y-2 font-mono mt-4">
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Primary</span> <span>Fiber 1Gbps</span></li>
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Backup</span> <span>Starlink</span></li>
<li className="flex justify-between pt-1"><span>Security</span> <span>VPN Hardware</span></li>
</ul>
</div>

<div className="bg-obsidian p-8 group hover:bg-stone/5 transition-colors">
<div className="flex justify-between mb-8">
<i className="text-swiss w-6 h-6" data-lucide="armchair"></i>
<span className="font-mono text-xs text-stone/40">FURNITURE</span>
</div>
<h3 className="text-xl font-medium mb-2">Ergonomics</h3>
<ul className="text-sm text-stone/60 space-y-2 font-mono mt-4">
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Chair</span> <span>Herman Miller Aeron</span></li>
<li className="flex justify-between border-b border-stone/10 pb-1"><span>Desk</span> <span>Solid Oak Sit/Stand</span></li>
<li className="flex justify-between pt-1"><span>Accessories</span> <span>Mechanical Keyboards</span></li>
</ul>
</div>

<div className="bg-obsidian p-8 group hover:bg-stone/5 transition-colors flex items-center justify-center">
<div className="text-center">
<span className="block text-4xl font-light mb-2">+12</span>
<span className="text-xs font-mono text-stone/40 uppercase">Additional Features</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone border-b border-obsidian" id="locations">
<div className="p-6 md:p-8 flex justify-between items-end border-b border-obsidian">
<div>
<span className="text-xxs font-mono uppercase text-obsidian/60 block mb-2">03 // Global Network</span>
<h2 className="text-3xl font-medium tracking-tight uppercase">Select Location</h2>
</div>

<div className="flex gap-2">
<button className="w-10 h-10 border border-obsidian flex items-center justify-center hover:bg-obsidian hover:text-stone transition-colors"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="w-10 h-10 border border-obsidian flex items-center justify-center hover:bg-obsidian hover:text-stone transition-colors"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar border-b border-obsidian">

<div className="snap-center flex-shrink-0 w-[90vw] md:w-[45vw] border-r border-obsidian relative group">
<div className="aspect-[16/9] overflow-hidden">
<img className="w-full h-full object-cover filter grayscale contrast-100 group-hover:contrast-125 transition-all duration-700" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-4 left-4 bg-stone border border-obsidian px-3 py-1 z-10">
<span className="text-xs font-bold tracking-tight">ALPINE_BASE_01</span>
</div>
<div className="p-6 bg-stone border-t border-obsidian">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium">Swiss Alps</h3>
<p className="text-xs font-mono text-obsidian/60 mt-1">Grisons, Switzerland</p>
</div>
<div className="text-right">
<span className="block text-lg font-bold">$850</span>
<span className="text-xxs font-mono text-obsidian/60">PER NIGHT</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-xxs font-mono uppercase text-obsidian/60 mb-6">
<span className="border border-obsidian/20 px-2 py-1 text-center">Mountain View</span>
<span className="border border-obsidian/20 px-2 py-1 text-center">Sauna</span>
<span className="border border-obsidian/20 px-2 py-1 text-center">Fiber Optic</span>
</div>
<button className="w-full py-3 border border-obsidian text-xs font-bold uppercase hover:bg-obsidian hover:text-stone transition-colors">
                        View Availability
                    </button>
</div>
</div>

<div className="snap-center flex-shrink-0 w-[90vw] md:w-[45vw] border-r border-obsidian relative group">
<div className="aspect-[16/9] overflow-hidden">
<img className="w-full h-full object-cover filter grayscale contrast-100 group-hover:contrast-125 transition-all duration-700" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-4 left-4 bg-stone border border-obsidian px-3 py-1 z-10">
<span className="text-xs font-bold tracking-tight">FOREST_POD_04</span>
</div>
<div className="p-6 bg-stone border-t border-obsidian">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium">Black Forest</h3>
<p className="text-xs font-mono text-obsidian/60 mt-1">Baden-Württemberg, Germany</p>
</div>
<div className="text-right">
<span className="block text-lg font-bold">$620</span>
<span className="text-xxs font-mono text-obsidian/60">PER NIGHT</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-xxs font-mono uppercase text-obsidian/60 mb-6">
<span className="border border-obsidian/20 px-2 py-1 text-center">Deep Woods</span>
<span className="border border-obsidian/20 px-2 py-1 text-center">Rain Shower</span>
<span className="border border-obsidian/20 px-2 py-1 text-center">Starlink</span>
</div>
<button className="w-full py-3 border border-obsidian text-xs font-bold uppercase hover:bg-obsidian hover:text-stone transition-colors">
                        View Availability
                    </button>
</div>
</div>

<div className="snap-center flex-shrink-0 w-[90vw] md:w-[45vw] border-r border-obsidian relative group">
<div className="aspect-[16/9] overflow-hidden">
<img className="w-full h-full object-cover filter grayscale contrast-100 group-hover:contrast-125 transition-all duration-700" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-4 left-4 bg-stone border border-obsidian px-3 py-1 z-10">
<span className="text-xs font-bold tracking-tight">COASTAL_LAB_09</span>
</div>
<div className="p-6 bg-stone border-t border-obsidian">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium">Nordic Coast</h3>
<p className="text-xs font-mono text-obsidian/60 mt-1">Lofoten, Norway</p>
</div>
<div className="text-right">
<span className="block text-lg font-bold">$950</span>
<span className="text-xxs font-mono text-obsidian/60">PER NIGHT</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-xxs font-mono uppercase text-obsidian/60 mb-6">
<span className="border border-obsidian/20 px-2 py-1 text-center">Ocean Front</span>
<span className="border border-obsidian/20 px-2 py-1 text-center">Cold Plunge</span>
<span className="border border-obsidian/20 px-2 py-1 text-center">No Signal</span>
</div>
<button className="w-full py-3 border border-obsidian text-xs font-bold uppercase hover:bg-obsidian hover:text-stone transition-colors">
                        View Availability
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone relative" id="membership">
<div className="container mx-auto px-6 max-w-5xl">
<div className="text-center mb-16">
<span className="text-xs font-mono text-swiss uppercase tracking-widest mb-2 block">04 // Access</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">MEMBERSHIP TIERS</h2>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-xs font-bold uppercase opacity-50">Guest</span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="billing-toggle">
<input className="sr-only toggle-checkbox" id="billing-toggle" type="checkbox"/>
<div className="w-12 h-6 bg-obsidian rounded-full peer"></div>
<div className="w-4 h-4 bg-stone absolute left-1 top-1 rounded-full transition-all peer-checked:left-[calc(100%-1.25rem)] toggle-label"></div>
</label>
<span className="text-xs font-bold uppercase">Member</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="border border-obsidian p-8 bg-stone relative">
<h3 className="text-xl font-bold uppercase tracking-tight mb-2">Citizen</h3>
<p className="text-sm text-obsidian/60 mb-6 h-10">Standard access to the network.</p>
<div className="text-4xl font-light mb-8">$0 <span className="text-sm text-obsidian/40 font-mono">/ YR</span></div>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-obsidian" data-lucide="check"></i>
<span>Access to public booking calendar</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-obsidian" data-lucide="check"></i>
<span>Standard nightly rates</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-obsidian" data-lucide="check"></i>
<span>48hr cancellation policy</span>
</li>
</ul>
<button className="w-full py-4 border border-obsidian font-bold text-xs uppercase hover:bg-obsidian hover:text-stone transition-colors">
                        Create Account
                    </button>
</div>

<div className="border border-obsidian p-8 bg-obsidian text-stone relative transform md:-translate-y-4 shadow-2xl">
<div className="absolute top-0 right-0 bg-swiss text-white text-xxs font-bold px-2 py-1 uppercase">Recommended</div>
<h3 className="text-xl font-bold uppercase tracking-tight mb-2">Monolith</h3>
<p className="text-sm text-stone/60 mb-6 h-10">Priority access for deep work professionals.</p>
<div className="text-4xl font-light mb-8">$2,500 <span className="text-sm text-stone/40 font-mono">/ YR</span></div>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-swiss" data-lucide="check"></i>
<span>Priority booking (7 days early)</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-swiss" data-lucide="check"></i>
<span>20% off all nightly rates</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-swiss" data-lucide="check"></i>
<span>Concierge trip planning</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-swiss" data-lucide="check"></i>
<span>Exclusive "Black Site" locations</span>
</li>
</ul>
<button className="w-full py-4 bg-stone text-obsidian font-bold text-xs uppercase hover:bg-swiss hover:text-white transition-colors">
                        Apply for Membership
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-obsidian text-stone border-t border-stone/20 pt-24 pb-12" id="reserve">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
<div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-8 leading-[0.9]">
                        Commit to<br/>the work.
                    </h2>
</div>
<div>
<p className="text-stone/60 text-lg mb-8 font-light">
                        Join the waiting list for Q4 2024. We release new blocks of time on the 1st of every month at 09:00 UTC.
                    </p>
<form className="flex border-b border-stone/30 pb-2">
<input className="bg-transparent w-full outline-none text-stone font-mono uppercase text-sm placeholder-stone/30" placeholder="EMAIL_ADDRESS" type="email"/>
<button className="text-swiss uppercase text-sm font-bold tracking-widest hover:text-white transition-colors">Submit</button>
</form>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone/10 pt-12 text-xs font-mono text-stone/40 uppercase tracking-widest">
<div>
<span className="block text-white mb-4">Sitemap</span>
<ul className="space-y-2">
<li><a className="hover:text-swiss transition-colors" href="#philosophy">Philosophy</a></li>
<li><a className="hover:text-swiss transition-colors" href="#locations">Locations</a></li>
<li><a className="hover:text-swiss transition-colors" href="#membership">Membership</a></li>
<li><a className="hover:text-swiss transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<span className="block text-white mb-4">Social</span>
<ul className="space-y-2">
<li><a className="hover:text-swiss transition-colors" href="#">X / Twitter</a></li>
<li><a className="hover:text-swiss transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-swiss transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<span className="block text-white mb-4">Legal</span>
<ul className="space-y-2">
<li><a className="hover:text-swiss transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-swiss transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1 md:text-right">
<div className="w-8 h-8 bg-stone/10 mb-4 ml-auto hidden md:block"></div>
<p>© 2024 MONOLITH INC.</p>
<p className="mt-1">ZURICH, CH</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
