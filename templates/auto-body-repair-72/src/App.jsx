import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Image Slider
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('comparison-container');
            const slider = document.getElementById('slider-handle');
            const beforeWrapper = document.getElementById('before-wrapper');
            const beforeImage = document.getElementById('before-image');
            
            const adjustImageWidth = () => {
                if(container && beforeImage) beforeImage.style.width = `${container.offsetWidth}px`;
            };
            adjustImageWidth();
            window.addEventListener('resize', adjustImageWidth);

            let isDragging = false;
            const startDrag = (e) => { isDragging = true; if(e.type === 'touchstart') e.preventDefault(); };
            const stopDrag = () => { isDragging = false; };
            const moveDrag = (e) => {
                if (!isDragging) return;
                const rect = container.getBoundingClientRect();
                let clientX = e.clientX || (e.touches && e.touches[0].clientX);
                let x = Math.max(0, Math.min(clientX - rect.left, rect.width));
                const percent = (x / rect.width) * 100;
                slider.style.left = `${percent}%`;
                beforeWrapper.style.width = `${percent}%`;
            };

            if(slider && container) {
                slider.addEventListener('mousedown', startDrag);
                window.addEventListener('mouseup', stopDrag);
                window.addEventListener('mousemove', moveDrag);
                slider.addEventListener('touchstart', startDrag);
                window.addEventListener('touchend', stopDrag);
                window.addEventListener('touchmove', moveDrag);
                
                container.addEventListener('click', (e) => {
                    if(e.target === slider || slider.contains(e.target)) return;
                    const rect = container.getBoundingClientRect();
                    const percent = ((Math.max(0, Math.min(e.clientX - rect.left, rect.width))) / rect.width) * 100;
                    slider.style.left = `${percent}%`;
                    beforeWrapper.style.width = `${percent}%`;
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-800">

<div className="border-b border-zinc-800 bg-zinc-900/20 py-1.5 overflow-hidden">
<div className="marquee-container flex">
<div className="marquee-content flex gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
<span>/// STATUS: OPERATIONAL</span>
<span>/// LOCATION: CONGERS, NY</span>
<span>/// EST. 2008</span>
<span>/// CERTIFIED: OEM STANDARDS</span>
<span>/// QUEUE: OPEN</span>
<span>/// STATUS: OPERATIONAL</span>
<span>/// LOCATION: CONGERS, NY</span>
<span>/// EST. 2008</span>
<span>/// CERTIFIED: OEM STANDARDS</span>
<span>/// QUEUE: OPEN</span>
</div>
</div>
</div>

<div className="max-w-full px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-6 w-6 border border-zinc-700 flex items-center justify-center text-white bg-zinc-900 group-hover:bg-white group-hover:text-black transition-colors">
<span className="font-bold text-xs">G</span>
</div>
<div className="flex flex-col">
<span className="text-white font-medium text-sm tracking-tight leading-none">GLOBAL</span>
<span className="text-[10px] text-zinc-500 tracking-widest leading-none mt-0.5">COLLISION</span>
</div>
</a>
<div className="hidden md:flex items-center gap-px bg-zinc-800 border border-zinc-800">
<a className="bg-black px-6 py-2 text-xs font-mono uppercase hover:bg-zinc-900 hover:text-white transition-colors" href="#services">Services</a>
<a className="bg-black px-6 py-2 text-xs font-mono uppercase hover:bg-zinc-900 hover:text-white transition-colors" href="#portfolio">Index</a>
<a className="bg-black px-6 py-2 text-xs font-mono uppercase hover:bg-zinc-900 hover:text-white transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:block text-xs font-mono text-zinc-500 hover:text-white transition-colors" href="tel:555-123-4567">
                    [845.555.0123]
                </a>
<a className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-zinc-300 transition-colors border border-white" href="#contact">
                    Start Repair
                </a>
</div>
</div>
</div>

<section className="pt-32 pb-0 border-b border-zinc-800 relative">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">

<div className="lg:col-span-7 px-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800 py-12 lg:py-20 relative">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10">
<div className="mb-12 inline-block">
<span className="border border-zinc-700 text-zinc-400 px-2 py-1 text-[10px] font-mono uppercase bg-zinc-900">
                            System: Restoration
                        </span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium text-white tracking-tighter leading-[0.85] mb-8">
                        AUTO<br/>BODY<br/><span className="text-zinc-600">WORKS</span>
</h1>
</div>
<div className="relative z-10 max-w-md">
<p className="text-sm md:text-base text-zinc-400 font-mono leading-relaxed mb-8 border-l border-zinc-700 pl-4">
                        // 01<br/>
                        Specialized collision repair and structural engineering for high-performance vehicles. Restoring factory specifications with surgical precision.
                    </p>
<div className="flex items-center gap-4">
<a className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors" href="#contact">
<span className="text-sm uppercase tracking-widest font-medium">Initiate Estimate</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="lg:col-span-5 relative bg-zinc-900 overflow-hidden">

<div className="absolute inset-0 select-none group" id="comparison-container">

<img alt="After Repair" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2300&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-10">
<span className="bg-black text-white text-[10px] font-mono uppercase px-2 py-1 border border-zinc-700">Output: Clean</span>
</div>

<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-white/50" id="before-wrapper" style={{width: '50%'}}>
<img alt="Before Repair" className="absolute top-0 left-0 max-w-none h-full object-cover grayscale brightness-50 contrast-150 sepia-[.5]" id="before-image" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2300&amp;auto=format&amp;fit=crop" style={{width: '100%'}}/>
<div className="absolute top-4 left-4 z-10">
<span className="bg-red-900/50 text-red-200 text-[10px] font-mono uppercase px-2 py-1 border border-red-900/50">Input: Damaged</span>
</div>
</div>

<div className="absolute top-0 bottom-0 left-[50%] w-px bg-white cursor-ew-resize z-30 drag-handle" id="slider-handle" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-black border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-move-horizontal w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="18 8 22 12 18 16"></polyline><polyline points="6 8 2 12 6 16"></polyline></svg>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-zinc-800 bg-black">
<div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800">
<div className="p-4 flex flex-col justify-between h-24 hover:bg-zinc-900 transition-colors">
<span className="text-[10px] text-zinc-500 font-mono uppercase">Partner</span>
<span className="text-white font-medium tracking-tight">Geico</span>
</div>
<div className="p-4 flex flex-col justify-between h-24 hover:bg-zinc-900 transition-colors">
<span className="text-[10px] text-zinc-500 font-mono uppercase">Partner</span>
<span className="text-white font-medium tracking-tight">State Farm</span>
</div>
<div className="p-4 flex flex-col justify-between h-24 hover:bg-zinc-900 transition-colors">
<span className="text-[10px] text-zinc-500 font-mono uppercase">Partner</span>
<span className="text-white font-medium tracking-tight">Allstate</span>
</div>
<div className="p-4 flex flex-col justify-between h-24 hover:bg-zinc-900 transition-colors">
<span className="text-[10px] text-zinc-500 font-mono uppercase">Partner</span>
<span className="text-white font-medium tracking-tight">Progressive</span>
</div>
</div>
</div>
</section>

<section className="bg-black border-b border-zinc-800" id="services">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">

<div className="lg:col-span-1 p-8 lg:p-12 flex flex-col justify-between bg-zinc-950">
<div>
<h2 className="text-xs font-mono text-zinc-500 uppercase mb-4">[02] Capabilities</h2>
<h3 className="text-3xl font-medium text-white tracking-tight leading-tight mb-6">ENGINEERED<br/>REPAIR<br/>SOLUTIONS</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                        Deploying advanced diagnostic tools and OEM-certified methodologies to ensure structural integrity.
                    </p>
</div>
<div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    SYSTEMS ONLINE
                </div>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">

<div className="group p-8 hover:bg-zinc-900 transition-colors relative min-h-[300px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-xs font-mono border border-zinc-700 px-1.5 py-0.5 text-zinc-500 group-hover:text-white group-hover:border-white transition-colors">A-01</span>
<svg className="lucide lucide-car text-zinc-600 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Collision Architecture</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Structural realignment using laser-guided measuring systems for micron-level accuracy.</p>
</div>
</div>

<div className="group p-8 hover:bg-zinc-900 transition-colors relative min-h-[300px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-xs font-mono border border-zinc-700 px-1.5 py-0.5 text-zinc-500 group-hover:text-white group-hover:border-white transition-colors">B-02</span>
<svg className="lucide lucide-scan text-zinc-600 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Surface Refinishing</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Computerized color matching and localized painting techniques. Seamless integration.</p>
</div>
</div>

<div className="group p-8 hover:bg-zinc-900 transition-colors relative min-h-[300px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-xs font-mono border border-zinc-700 px-1.5 py-0.5 text-zinc-500 group-hover:text-white group-hover:border-white transition-colors">C-03</span>
<svg className="lucide lucide-shield text-zinc-600 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Glass &amp; Integrity</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Windshield calibration and replacement ensuring safety sensor functionality.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-b border-zinc-800" id="portfolio">
<div className="max-w-[1920px] mx-auto">
<div className="p-6 border-b border-zinc-800 flex items-center justify-between">
<h2 className="text-xs font-mono text-zinc-500 uppercase">[03] Case Index</h2>
<div className="flex gap-2 text-[10px] font-mono text-zinc-600 uppercase">
<span>View: Grid</span>
<span>/</span>
<span>Sort: Date</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">

<div className="group relative aspect-[4/3] overflow-hidden bg-zinc-900">
<img alt="Project 1" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10">
<span className="bg-black text-white border border-zinc-700 px-2 py-1 text-[10px] font-mono">P-911</span>
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/10 backdrop-blur-sm bg-black/50">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl text-white font-medium tracking-tight">Porsche 911</h3>
<p className="text-xs text-zinc-400 font-mono mt-1">REAR CHASSIS ALIGNMENT</p>
</div>
<span className="text-[10px] font-mono text-zinc-500">2023.11.02</span>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden bg-zinc-900">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10">
<span className="bg-black text-white border border-zinc-700 px-2 py-1 text-[10px] font-mono">M-COMP</span>
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/10 backdrop-blur-sm bg-black/50">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl text-white font-medium tracking-tight">BMW M4</h3>
<p className="text-xs text-zinc-400 font-mono mt-1">FULL SURFACE RESPRAY</p>
</div>
<span className="text-[10px] font-mono text-zinc-500">2023.10.15</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-b border-zinc-800" id="about">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
<div className="lg:col-span-8 p-12 lg:p-24">
<h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tighter mb-8 leading-[0.9]">
                    PRECISION<br/><span className="text-zinc-600">IS NOT OPTIONAL</span>
</h2>
<p className="text-base text-zinc-400 max-w-2xl leading-relaxed mb-12">
                    Global Collision &amp; Body Works operates at the intersection of craftsmanship and technology. Our facility handles over 500 high-end repairs annually, maintaining a zero-compromise policy on parts and procedures.
                </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<span className="block text-3xl font-mono text-white mb-2">15<span className="text-zinc-600 text-lg">Y</span></span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Operational</span>
</div>
<div>
<span className="block text-3xl font-mono text-white mb-2">5K<span className="text-zinc-600 text-lg">+</span></span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Vehicles</span>
</div>
<div>
<span className="block text-3xl font-mono text-white mb-2">100<span className="text-zinc-600 text-lg">%</span></span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">OEM Parts</span>
</div>
</div>
</div>
<div className="lg:col-span-4 bg-zinc-950 p-8 flex flex-col justify-center border-l border-zinc-800">
<div className="space-y-6">
<div className="bg-black border border-zinc-800 p-6 relative">
<div className="absolute top-2 right-2 text-zinc-700">
<svg className="lucide lucide-quote" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
</div>
<p className="text-sm text-zinc-300 italic mb-4">"The technical accuracy of the paint match on my Audi was indistinguishable from factory."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-zinc-800 flex items-center justify-center text-[10px] font-mono text-white">JS</div>
<span className="text-xs font-mono text-zinc-500 uppercase">J. Stevens / Client</span>
</div>
</div>
<div className="bg-black border border-zinc-800 p-6 relative opacity-60 hover:opacity-100 transition-opacity">
<p className="text-sm text-zinc-300 italic mb-4">"Efficient workflow. They handled the insurance claim digitally."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-zinc-800 flex items-center justify-center text-[10px] font-mono text-white">MR</div>
<span className="text-xs font-mono text-zinc-500 uppercase">M. Rivera / Client</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black" id="contact">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">

<div className="p-8 lg:p-24">
<div className="mb-12">
<span className="text-xs font-mono text-zinc-500 uppercase block mb-2">[04] Communication</span>
<h2 className="text-3xl text-white font-medium tracking-tight">REQUEST ASSESSMENT</h2>
</div>
<form className="space-y-0">
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
<div className="bg-black p-4 group focus-within:bg-zinc-950 transition-colors">
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2 group-focus-within:text-white">Input: Name</label>
<input className="w-full bg-transparent text-white border-none focus:ring-0 p-0 text-sm font-mono placeholder-zinc-800" placeholder="FULL_NAME" type="text"/>
</div>
<div className="bg-black p-4 group focus-within:bg-zinc-950 transition-colors">
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2 group-focus-within:text-white">Input: Contact</label>
<input className="w-full bg-transparent text-white border-none focus:ring-0 p-0 text-sm font-mono placeholder-zinc-800" placeholder="+1 (___) ___-____" type="tel"/>
</div>
</div>
<div className="gap-px bg-zinc-800 border-x border-b border-zinc-800">
<div className="bg-black p-4 group focus-within:bg-zinc-950 transition-colors">
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2 group-focus-within:text-white">Input: Details</label>
<textarea className="w-full bg-transparent text-white border-none focus:ring-0 p-0 text-sm font-mono placeholder-zinc-800 resize-none" placeholder="DESCRIBE_DAMAGE_PARAMETERS..." rows="4"></textarea>
</div>
</div>
<button className="w-full bg-white text-black py-5 text-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-px border border-zinc-800" type="submit">
<span>Transmit Data</span>
<svg className="lucide lucide-corner-down-left w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
</button>
</form>
</div>

<div className="relative bg-zinc-950/50 flex flex-col">

<div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex-1 p-8 lg:p-12 flex flex-col justify-center items-center">
<div className="w-full max-w-sm space-y-px bg-zinc-800 border border-zinc-800">
<div className="bg-black p-6 flex items-center justify-between">
<span className="text-xs font-mono text-zinc-500 uppercase">H.Q.</span>
<span className="text-sm text-white font-medium">123 Auto Park Dr, Congers NY</span>
</div>
<div className="bg-black p-6 flex items-center justify-between">
<span className="text-xs font-mono text-zinc-500 uppercase">Comm.</span>
<span className="text-sm text-white font-medium">(845) 555-0123</span>
</div>
<div className="bg-black p-6 flex items-center justify-between">
<span className="text-xs font-mono text-zinc-500 uppercase">Hours</span>
<span className="text-sm text-white font-medium">0800 - 1800 EST</span>
</div>
</div>
</div>
<div className="p-6 border-t border-zinc-800 flex justify-between items-center bg-black relative z-10">
<span className="text-[10px] font-mono text-zinc-600">© 2024 GLOBAL COLLISION</span>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white" href="#"><svg className="lucide lucide-instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-zinc-600 hover:text-white" href="#"><svg className="lucide lucide-facebook" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
