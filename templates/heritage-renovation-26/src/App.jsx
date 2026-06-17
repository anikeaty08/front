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
black: '#000000',
offwhite: '#FCFCFC',
lightgrey: '#F2F2F2',
midgrey: '#DEDEDE',
textgrey: '#4A4A4A',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
wide: '0.02em',
widest: '0.1em',
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



        // --- Comparison Slider Logic ---
        function updateSlider(id, val) {
            const overlay = document.getElementById(id + '-overlay');
            const handle = document.getElementById(id + '-btn');
            const line = document.getElementById(id + '-line');
            const img = document.getElementById(id + '-img-before');
            const container = document.getElementById(id);
            
            if(overlay && handle && line && img && container) {
                // Set widths/positions
                overlay.style.width = val + '%';
                handle.style.left = val + '%';
                line.style.left = val + '%';
                
                // Keep the inner image full width relative to the container, 
                // so it looks like it's being "revealed" rather than squashed.
                // We set width to container's width in px to ensure stability.
                img.style.width = container.offsetWidth + 'px';
            }
        }

        // Initialize slider sizes on resize
        window.addEventListener('resize', () => {
            const sliderId = 'slider-1';
            const container = document.getElementById(sliderId);
            const img = document.getElementById(sliderId + '-img-before');
            if(container && img) {
                img.style.width = container.offsetWidth + 'px';
            }
        });
        // Initial trigger
        window.dispatchEvent(new Event('resize'));


        // --- Lightbox Logic ---
        const projects = [
            { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", title: "Armadale Victorian", desc: "Full Restoration" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop", title: "Hawthorn Edwardian", desc: "Extension & Pool" },
            { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop", title: "Fitzroy Terrace", desc: "Modern Integration" },
            { src: "https://images.unsplash.com/photo-1556912173-3db996ea8c3e?q=80&w=2670&auto=format&fit=crop", title: "Toorak Residence", desc: "Heritage Overlay" },
            { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2700&auto=format&fit=crop", title: "South Yarra Villa", desc: "Interior Reconfiguration" }
        ];
        
        let currentImageIndex = 0;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDesc = document.getElementById('lightbox-desc');

        function openLightbox(index) {
            currentImageIndex = index;
            updateLightboxContent();
            lightbox.classList.remove('hidden');
            setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.add('opacity-0');
            setTimeout(() => {
                lightbox.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }

        function changeImage(direction) {
            currentImageIndex = (currentImageIndex + direction + projects.length) % projects.length;
            updateLightboxContent();
        }

        function updateLightboxContent() {
            lightboxImg.src = projects[currentImageIndex].src;
            lightboxTitle.innerText = projects[currentImageIndex].title;
            lightboxDesc.innerText = projects[currentImageIndex].desc;
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowRight") changeImage(1);
            if (event.key === "ArrowLeft") changeImage(-1);
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
      

<nav className="fixed top-0 w-full z-50 bg-offwhite/95 backdrop-blur-sm border-b border-midgrey transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="border border-black w-8 h-8 flex items-center justify-center bg-black text-white text-xs font-semibold tracking-tighter group-hover:bg-white group-hover:text-black transition-colors">
                    2M
                </div>
<span className="text-sm font-medium tracking-tight uppercase">Renovations</span>
</a>

<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide uppercase text-textgrey">
<a className="hover:text-black transition-colors" href="#about">About Us</a>
<a className="hover:text-black transition-colors" href="#projects">Our Projects</a>
<a className="px-5 py-2.5 bg-black text-white hover:bg-neutral-800 transition-colors" href="#contact">
                    Get In Touch
                </a>
</div>

<button className="md:hidden text-black" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-offwhite border-b border-midgrey p-8 flex flex-col gap-6 md:hidden h-screen" id="mobile-menu">
<a className="text-xl font-light tracking-tight" href="#about">About Us</a>
<a className="text-xl font-light tracking-tight" href="#projects">Our Projects</a>
<a className="px-6 py-4 bg-black text-white text-center text-sm font-medium tracking-widest uppercase" href="#contact">Get In Touch</a>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Heritage Renovation" className="w-full h-full object-cover grayscale-[10%] brightness-[0.85]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto py-20">
<p className="text-xxs md:text-xs font-medium tracking-[0.2em] uppercase mb-6 opacity-90 text-lightgrey">
                For Melbourne Home Owners Who Care About Preserving Their Beloved Home
            </p>
<h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-[1.1] mb-8 text-white">
                Work With Specialist Period Builders Who Properly Extend Heritage Homes — Planned, Priced &amp; Delivered With Certainty, Without Budget Blowouts Or Delays.
            </h1>
<p className="text-sm md:text-lg font-light tracking-wide text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                Most renovation blowouts happen because builders guess early and charge later. We do the opposite — penalty-free mid-build changes, credited-back costs not spent, and on-time completion that protects your home and your budget — or we pay you $10k per week guaranteed!
            </p>
<div className="flex flex-col items-center gap-8">
<a className="px-8 py-4 bg-white text-black text-xs font-medium tracking-widest uppercase hover:bg-lightgrey transition-colors w-full md:w-auto min-w-[280px]" href="#contact">
                    Discover What’s Possible For My Heritage Home
                </a>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 w-full border-t border-white/20 pt-8 mt-4 text-left md:text-center">
<div className="flex md:flex-col items-center gap-3">
<iconify-icon className="text-white text-xl" icon="solar:ruler-pen-linear"></iconify-icon>
<span className="text-xs font-light text-white/90">$40,000 Worth Of Preliminary Designs for FREE</span>
</div>
<div className="flex md:flex-col items-center gap-3">
<iconify-icon className="text-white text-xl" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-xs font-light text-white/90">20+ Years Expertise</span>
</div>
<div className="flex md:flex-col items-center gap-3">
<iconify-icon className="text-white text-xl" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs font-light text-white/90">$10,000 p/w On-Time Completion Guarantee</span>
</div>
<div className="flex md:flex-col items-center gap-3">
<iconify-icon className="text-white text-xl" icon="solar:buildings-linear"></iconify-icon>
<span className="text-xs font-light text-white/90">Backed By 40+ Major Projects</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 bg-offwhite relative" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="h-px w-12 bg-black mb-8"></div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tighter leading-tight mb-8">
                    Expand Your Period Home Without Endless Delays, Cost Surprises, or Losing Its Unique Charm
                </h2>
<div className="space-y-6 text-textgrey font-light text-sm md:text-base leading-relaxed">
<p>
                        Imagine walking into a home that feels spacious, finally giving your family room to breathe. Natural light moves effortlessly through the space, shaping unhurried mornings and calm evenings. Rooms flow with clarity and purpose, allowing space to grow, gather, and cherish without friction, while original details remain intact, respected, and carefully preserved.
                    </p>
<p>
                        A renovation extension that blends seamlessly as though it has always been there. Restoring the ease of hosting friends and family, creating space for lasting memories, and offering the quiet luxury of a personal sanctuary each day. And rather than second-guessing decisions or bracing for disruption, you feel settled, confident, and genuinely proud of the choice you made.
                    </p>
<p className="text-black font-normal">
                        What most Melbourne homeowners don’t realise is that outcomes like this are not the result of luck, taste or overspending. They’re achieved by following a proven, preservation-first framework designed specifically for heritage home extensions.
                    </p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-3 border-b border-black pb-1 text-xs font-medium uppercase tracking-widest hover:text-textgrey transition-colors" href="#contact">
                        Book My Free Heritage-Flow Home Design &amp; Consult
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-7 w-full h-full flex flex-col gap-6">

<div className="comparison-slider relative w-full aspect-[4/3] bg-midgrey group" id="slider-1">

<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 text-xs uppercase tracking-widest">After</div>

<div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden border-r border-white z-10" id="slider-1-overlay">
<img alt="Before" className="absolute top-0 left-0 max-w-none h-full object-cover" id="slider-1-img-before" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
<div className="absolute top-4 left-4 bg-white/90 text-black px-2 py-1 text-xs uppercase tracking-widest">Before</div>
</div>

<div className="slider-handle-line left-1/2" id="slider-1-line"></div>
<div className="slider-button left-1/2" id="slider-1-btn">
<iconify-icon className="rotate-90 text-black" icon="solar:code-scan-linear"></iconify-icon>
</div>

<input className="slider-input" max="100" min="0" oninput="updateSlider('slider-1', this.value)" type="range" value="50"/>
</div>
<p className="text-xs text-textgrey font-light text-center uppercase tracking-wide">Drag to reveal the transformation</p>
</div>
</div>
</section>

<section className="py-24 bg-lightgrey border-y border-midgrey" id="projects">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-xs font-medium uppercase tracking-widest text-textgrey mb-3 block">Our Work</span>
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter">2M Renovation Projects That Finally Feel Like Home</h2>
</div>
<div className="hidden md:block">
<iconify-icon className="text-textgrey" icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-midgrey border border-midgrey">

<div className="bg-offwhite aspect-[4/5] relative group overflow-hidden cursor-pointer" onclick="openLightbox(0)">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="text-lg font-normal tracking-tight">Armadale Victorian</h3>
<p className="text-xs font-light text-white/80 uppercase tracking-widest mt-1">Full Restoration</p>
</div>
</div>

<div className="bg-offwhite aspect-[4/5] relative group overflow-hidden cursor-pointer lg:col-span-2" onclick="openLightbox(1)">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="text-lg font-normal tracking-tight">Hawthorn Edwardian</h3>
<p className="text-xs font-light text-white/80 uppercase tracking-widest mt-1">Extension &amp; Pool</p>
</div>
</div>

<div className="bg-offwhite aspect-[4/5] relative group overflow-hidden cursor-pointer" onclick="openLightbox(2)">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="text-lg font-normal tracking-tight">Fitzroy Terrace</h3>
<p className="text-xs font-light text-white/80 uppercase tracking-widest mt-1">Modern Integration</p>
</div>
</div>

<div className="bg-offwhite aspect-[4/5] relative group overflow-hidden cursor-pointer" onclick="openLightbox(3)">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556912173-3db996ea8c3e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="text-lg font-normal tracking-tight">Toorak Residence</h3>
<p className="text-xs font-light text-white/80 uppercase tracking-widest mt-1">Heritage Overlay</p>
</div>
</div>

<div className="bg-offwhite aspect-[4/5] relative group overflow-hidden cursor-pointer" onclick="openLightbox(4)">
<img alt="Project 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="text-lg font-normal tracking-tight">South Yarra Villa</h3>
<p className="text-xs font-light text-white/80 uppercase tracking-widest mt-1">Interior Reconfiguration</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">
                    View Full Portfolio
                 </button>
</div>
</div>
</section>

<section className="py-24 bg-offwhite">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-normal tracking-tighter text-center max-w-4xl mx-auto mb-20">
                Why 317+ Melbourne Homeowners Chose 2M Renovations To Restore Their Home Properly And Never Looked Back
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="flex flex-col h-full border-t border-midgrey pt-8">
<div className="mb-6 text-black">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm md:text-base font-light text-textgrey leading-relaxed mb-6 flex-grow">
                        “We had a fantastic experience from start to finish. The owner was incredibly honest, knowledgeable, always calm even when the unexpected happened and genuinely invested in helping us achieve the best outcome.”
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-midgrey rounded-full overflow-hidden">

<span className="w-full h-full flex items-center justify-center text-xs font-medium text-textgrey">M</span>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-widest text-black">Marro</p>
<p className="text-xs text-textgrey font-light">Armadale</p>
</div>
</div>
</div>

<div className="flex flex-col h-full border-t border-midgrey pt-8">
<div className="mb-6 text-black">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm md:text-base font-light text-textgrey leading-relaxed mb-6 flex-grow">
                        “Words cannot describe how much the 2M crew have changed our lives.”
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-midgrey rounded-full overflow-hidden">
<span className="w-full h-full flex items-center justify-center text-xs font-medium text-textgrey">L</span>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-widest text-black">Lily</p>
<p className="text-xs text-textgrey font-light">Fitzroy North</p>
</div>
</div>
</div>

<div className="flex flex-col h-full border-t border-midgrey pt-8">
<div className="mb-6 text-black">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm md:text-base font-light text-textgrey leading-relaxed mb-6 flex-grow">
                        “We had nothing to fear as we were well guided and looked after by Ilhan and team, which made the entire experience positive and exceeded our expectations.”
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-midgrey rounded-full overflow-hidden">
<span className="w-full h-full flex items-center justify-center text-xs font-medium text-textgrey">A</span>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-widest text-black">Aimee</p>
<p className="text-xs text-textgrey font-light">Albert Park</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="px-8 py-4 bg-black text-white text-xs font-medium tracking-widest uppercase hover:bg-neutral-800 transition-colors inline-block" href="#contact">
                    Book My Free Heritage-Flow Home Design &amp; Consult
                </a>
</div>
</div>
</section>

<section className="py-24 bg-black text-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter leading-tight mb-8 text-white">
                    Why Most Heritage Home Extensions Go Wrong Even With Good Builders
                </h2>
<div className="h-[1px] w-24 bg-white/30"></div>
</div>
<div className="space-y-6 text-white/70 font-light leading-relaxed text-sm md:text-base">
<p>
                    Heritage homes reward precision and punish guesswork - and sadly, a majority of builders and architects are not equipped with the right tools, historical knowledge and construction know-how to tackle this calibre of property.
                </p>
<p>
                    Heritage homes require a different calibre of expertise. Structural implications, heritage overlays, council red tape, service upgrades and project management all need to be resolved from the start. When they are not, costs rapidly escalate, and compromises are made that end up in VCAT. This is not what you want.
                </p>
<p>
                    What appears to be a surprise mid-build is rarely unpredictable. In most cases, it is the result of insufficient heritage experience, rushed planning &amp; applying new-build processes to old homes.
                </p>
<p className="text-white">
                    Incorrect assumptions made early lead to expensive corrections later. Timelines drift. Materials are reworked (often costing more!). And character is sacrificed to keep the project moving. This is where many projects unravel.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-offwhite border-b border-midgrey">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 max-w-3xl">
<span className="text-xs font-medium uppercase tracking-widest text-textgrey mb-3 block">The Methodology</span>
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter mb-8">The Preservation-First System Behind Successful Heritage Extensions</h2>
<p className="text-textgrey font-light leading-relaxed text-sm md:text-base">
                    The HeritageFlow System exists because heritage homes require a level of planning and flexibility that standard renovation models were never designed to deliver. When plans and contracts are rigid and locked too early, necessary refinements become costly and disruptive once construction begins. Heritage homes reveal themselves gradually; it’s a process of considered decision making &amp; design which protects both the outcome and the character of the home.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-midgrey border border-midgrey">

<div className="bg-offwhite p-10 md:p-14 hover:bg-white transition-colors duration-500">
<div className="mb-6 text-black">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Considered Flexibility From The Start</h3>
<p className="text-sm font-light text-textgrey leading-relaxed">
                        The HeritageFlow System is designed around the reality that heritage homes evolve as they are carefully uncovered. Rather than charging for change later, flexibility is planned from the outset. Guided, penalty-free refinements are built into the process so decisions can be made thoughtfully, at the right time, without disruption.
                    </p>
</div>

<div className="bg-offwhite p-10 md:p-14 hover:bg-white transition-colors duration-500">
<div className="mb-6 text-black">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Genuine Budget Certainty With Credit-Back Protection</h3>
<p className="text-sm font-light text-textgrey leading-relaxed">
                        Budgeting is approached with foresight. Known risk items are allocated for upfront within a defined tolerance, rather than corrected later. Where allowances are not required, unused funds are returned. This provides clarity, removes uncertainty and protects against hidden costs.
                    </p>
</div>

<div className="bg-offwhite p-10 md:p-14 hover:bg-white transition-colors duration-500">
<div className="mb-6 text-black">
<iconify-icon icon="solar:home-angle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Architectural Continuity As A Non-Negotiable</h3>
<p className="text-sm font-light text-textgrey leading-relaxed">
                        With an in-house architectural team and an exclusive focus on heritage preservation, every decision is made through the lens of continuity. Extensions are composed to feel original. Period details are respected and integrated with care. The home evolves without losing its identity.
                    </p>
</div>

<div className="bg-offwhite p-10 md:p-14 hover:bg-white transition-colors duration-500">
<div className="mb-6 text-black">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Calm, Structured Delivery With No Guesswork</h3>
<p className="text-sm font-light text-textgrey leading-relaxed">
                        The result is a process that feels measured and predictable. Design, budget and timeline are resolved before construction begins and safeguarded throughout delivery. You move forward with confidence, knowing each stage has been considered and accounted for.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="px-8 py-4 bg-black text-white text-xs font-medium tracking-widest uppercase hover:bg-neutral-800 transition-colors inline-block" href="#contact">
                    Book My Free Heritage-Flow Home Design &amp; Consult
                </a>
</div>
</div>
</section>

<section className="py-24 bg-lightgrey">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tighter mb-6">
                    How 2M Renovations Exceeds Every Expectation<br/>Without Budget Blowouts Or Unnecessary Time-Extensions
                </h2>
<p className="text-textgrey font-light">
                    The difference is found in working with a system designed for heritage homes,<br/>rather than hoping a standard process is enough.
                </p>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse min-w-[600px] text-sm md:text-base">
<thead>
<tr>
<th className="p-6 text-left w-1/3 border-b border-black/10"></th>
<th className="p-6 text-center w-1/3 bg-white border-t-2 border-black font-semibold tracking-tight text-lg">2M Renovations</th>
<th className="p-6 text-center w-1/3 text-textgrey font-normal tracking-tight">Standard Builder</th>
</tr>
</thead>
<tbody className="font-light">
<tr className="border-b border-midgrey">
<td className="p-6 text-black font-medium">Changes Mid-Build</td>
<td className="p-6 text-center bg-white border-l border-r border-lightgrey text-black">Allowed &amp; Penalty-Free</td>
<td className="p-6 text-center text-textgrey">Heavy "Variation Fees" &amp; Delays</td>
</tr>
<tr className="border-b border-midgrey">
<td className="p-6 text-black font-medium">Unspent Allowances</td>
<td className="p-6 text-center bg-white border-l border-r border-lightgrey text-black">100% Credited Back To You</td>
<td className="p-6 text-center text-textgrey">Absorbed as builder profit</td>
</tr>
<tr className="border-b border-midgrey">
<td className="p-6 text-black font-medium">Timeline Guarantee</td>
<td className="p-6 text-center bg-white border-l border-r border-lightgrey text-black">We pay $10k per week late</td>
<td className="p-6 text-center text-textgrey">Rarely guaranteed, often vague</td>
</tr>
<tr className="border-b border-midgrey">
<td className="p-6 text-black font-medium">Design Focus</td>
<td className="p-6 text-center bg-white border-l border-r border-lightgrey text-black">Preservation-First Heritage Specialist</td>
<td className="p-6 text-center text-textgrey">Standard New Build Process</td>
</tr>
<tr className="border-b border-midgrey">
<td className="p-6 text-black font-medium">Heritage Council Approval</td>
<td className="p-6 text-center bg-white border-l border-r border-lightgrey text-black">Managed In-House End-to-End</td>
<td className="p-6 text-center text-textgrey">Outsourced or client responsibility</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-12 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-b border-white/20 pb-24">
<div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tighter mb-8 leading-tight">
                        Ready to build<br/>with certainty?
                    </h2>
<p className="text-white/60 text-lg font-light max-w-md mb-10">
                        Book a consultation to discuss your heritage project and see if the HeritageFlow System is right for you.
                    </p>
<a className="inline-block px-10 py-5 bg-white text-black text-xs font-semibold tracking-widest uppercase hover:bg-midgrey transition-colors" href="#">
                        Book Consultation
                    </a>
</div>
<div className="space-y-8 lg:pl-12 lg:border-l border-white/10">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-white/50" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-2 text-white/90">Office</h4>
<p className="text-white/60 font-light">Level 1, 150 Collins St<br/>Melbourne VIC 3000</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-white/50" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-2 text-white/90">Contact</h4>
<p className="text-white/60 font-light">(03) 9000 0000<br/>hello@2mrenovations.com.au</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-light tracking-wide">
<p>© 2024 2M Renovations. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-black/95 hidden flex items-center justify-center opacity-0 transition-opacity duration-300" id="lightbox">
<button className="absolute top-6 right-6 text-white hover:text-midgrey z-[101]" onclick="closeLightbox()">
<iconify-icon icon="solar:close-circle-linear" width="40"></iconify-icon>
</button>
<button className="absolute left-6 text-white hover:text-midgrey hidden md:block z-[101]" onclick="changeImage(-1)">
<iconify-icon icon="solar:arrow-left-linear" width="40"></iconify-icon>
</button>
<button className="absolute right-6 text-white hover:text-midgrey hidden md:block z-[101]" onclick="changeImage(1)">
<iconify-icon icon="solar:arrow-right-linear" width="40"></iconify-icon>
</button>
<div className="relative max-w-[90vw] max-h-[90vh]">
<img alt="Project Detail" className="max-h-[85vh] object-contain" id="lightbox-img" src=""/>
<div className="mt-4 text-center">
<h3 className="text-white text-lg font-normal tracking-tight" id="lightbox-title"></h3>
<p className="text-white/60 text-xs font-light tracking-widest uppercase mt-1" id="lightbox-desc"></p>
</div>
</div>
</div>



    </>
  );
}
