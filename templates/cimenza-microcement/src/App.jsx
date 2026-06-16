import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
bg: '#F5F3EF', // Cream paper texture
black: '#121212',
gray: '#888888',
light: '#Eae8E4',
accent: '#2A2A2A'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Single Page Routing Logic
        function showPage(pageId) {
            // Hide all pages
            const pages = ['home', 'services', 'about', 'projects', 'contact'];
            
            // Fade out current content first (optional polish)
            pages.forEach(p => {
                const el = document.getElementById('page-' + p);
                if(el && !el.classList.contains('hidden')) {
                    el.classList.add('hidden');
                    el.classList.remove('fade-in');
                }
            });

            // Show selected page
            const activePage = document.getElementById('page-' + pageId);
            if (activePage) {
                activePage.classList.remove('hidden');
                // Trigger reflow to restart animation
                void activePage.offsetWidth; 
                activePage.classList.add('fade-in');
            }

            // Update Nav State (Optional Visual Feedback)
            const navLinks = document.querySelectorAll('.nav-link');
            // Reset styles if needed, or implement active state class logic here

            // Scroll to top
            window.scrollTo(0, 0);

            // Re-initialize icons just in case dynamic content loaded them
            lucide.createIcons();
        }

        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('hidden')) {
                // Open
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                setTimeout(() => {
                    menu.classList.remove('opacity-0');
                    menu.classList.add('opacity-100');
                }, 10); // slight delay for transition
                document.body.style.overflow = 'hidden'; // prevent scrolling
                icon.setAttribute('data-lucide', 'x');
            } else {
                // Close
                menu.classList.remove('opacity-100');
                menu.classList.add('opacity-0');
                setTimeout(() => {
                    menu.classList.remove('flex');
                    menu.classList.add('hidden');
                }, 300); // match transition duration
                document.body.style.overflow = 'auto';
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<a className="group cursor-pointer z-50 relative" href="#" onclick="showPage('home')">
<div className="text-brand-black flex gap-1 uppercase text-2xl tracking-widest font-display gap-x-1 gap-y-1 items-center">CIMENZA</div>
<div className="text-xs tracking-[0.3em] text-brand-black/70 mt-1 pl-0.5">Microcement</div>
</a>

<div className="hidden md:flex items-center gap-10">
<button className="nav-link text-sm font-medium text-brand-black/60 hover:text-brand-black transition-colors" onclick="showPage('home')">Home</button>
<button className="nav-link text-sm font-medium text-brand-black/60 hover:text-brand-black transition-colors" onclick="showPage('services')">Services</button>
<button className="nav-link text-sm font-medium text-brand-black/60 hover:text-brand-black transition-colors" onclick="showPage('about')">About</button>
<button className="nav-link text-sm font-medium text-brand-black/60 hover:text-brand-black transition-colors" onclick="showPage('projects')">Projects</button>
<button className="nav-link text-sm font-medium text-brand-black/60 hover:text-brand-black transition-colors" onclick="showPage('contact')">Contact</button>
</div>

<div className="hidden md:flex">
<button className="bg-brand-black text-brand-bg px-6 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity" onclick="showPage('contact')">
                    Get a Quote
                </button>
</div>

<button className="md:hidden text-brand-black z-50 relative" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-brand-bg z-40 hidden flex-col justify-center items-center opacity-0 transition-opacity duration-300" id="mobile-menu">
<div className="flex flex-col gap-8 text-center">
<button className="font-display text-4xl tracking-tight hover:text-brand-gray transition-colors" onclick="showPage('home'); toggleMobileMenu()">Home</button>
<button className="font-display text-4xl tracking-tight hover:text-brand-gray transition-colors" onclick="showPage('services'); toggleMobileMenu()">Services</button>
<button className="font-display text-4xl tracking-tight hover:text-brand-gray transition-colors" onclick="showPage('projects'); toggleMobileMenu()">Projects</button>
<button className="font-display text-4xl tracking-tight hover:text-brand-gray transition-colors" onclick="showPage('about'); toggleMobileMenu()">About</button>
<button className="font-display text-4xl tracking-tight hover:text-brand-gray transition-colors" onclick="showPage('contact'); toggleMobileMenu()">Contact</button>
</div>
</div>
</nav>

<main className="pt-24 flex-grow" id="main-content">

<div className="block fade-in" id="page-home">

<section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
<div className="opacity-10 z-0 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1518640165980-d3e0e2aa2c19?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="max-w-5xl mx-auto text-center z-10 space-y-8">
<div className="inline-flex items-center gap-2 border border-brand-black/10 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wider text-brand-black/80">Available for 2024 Projects</span>
</div>
<h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tighter text-brand-black leading-[0.95] mt-4">
                        Seamless.<br/>
                        Timeless.<br/>
<span className="text-brand-black/40">Concrete.</span>
</h1>
<p className="text-xl md:text-2xl text-brand-black/60 max-w-2xl mx-auto font-light">
                        Premium microcement applications for high-end residential and commercial spaces. Elevate your surfaces with continuous, handcrafted textures.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
<button className="bg-brand-black text-brand-bg px-8 py-4 text-base font-medium hover:bg-brand-accent transition-colors min-w-[200px]" onclick="showPage('contact')">
                            Start Your Project
                        </button>
<button className="bg-transparent border border-brand-black/20 text-brand-black px-8 py-4 text-base font-medium hover:bg-brand-black/5 transition-colors min-w-[200px]" onclick="showPage('services')">
                            Explore Services
                        </button>
</div>
</div>
</section>

<section className="border-y border-brand-black/5 py-12 bg-white/30">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs uppercase tracking-widest text-brand-black/40 mb-8">Trusted by leading Architects &amp; Designers</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 items-center opacity-60 grayscale">
<div className="text-xl font-display font-semibold tracking-tight">ARCHITECTURAL</div>
<div className="text-xl font-display font-semibold tracking-tight">DEZEEN</div>
<div className="text-xl font-display font-semibold tracking-tight">HABITAT</div>
<div className="text-xl font-display font-semibold tracking-tight">MINIMAL</div>
<div className="text-xl font-display font-semibold tracking-tight hidden lg:block">STUDIO.IO</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="font-display text-4xl md:text-5xl tracking-tighter mb-6">Redefining moderninteriors.</h2>
<p className="text-brand-black/70 text-lg mb-8 max-w-md">
                                Unlike traditional concrete, our microcement system is lightweight, flexible, and completely seamless. It creates a continuous dialogue between spaces.
                            </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<svg className="lucide lucide-check w-5 h-5 mt-1 text-brand-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-brand-black/80">3mm thickness requiring no structural changes.</span>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-check w-5 h-5 mt-1 text-brand-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-brand-black/80">Waterproof finishes ideal for bathrooms &amp; kitchens.</span>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-check w-5 h-5 mt-1 text-brand-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-brand-black/80">High resistance to abrasion and cracking.</span>
</li>
</ul>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-8 border border-brand-black/5 hover:border-brand-black/20 transition-all duration-300">
<svg className="lucide lucide-layers w-8 h-8 mb-4 stroke-1" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="text-xl font-medium mb-2 tracking-tight">Versatility</h3>
<p className="text-base text-brand-black/60">Apply over existing tiles, plaster, or MDF without demolition.</p>
</div>
<div className="bg-white p-8 border border-brand-black/5 hover:border-brand-black/20 transition-all duration-300 mt-8 md:mt-0">
<svg className="lucide lucide-droplet w-8 h-8 mb-4 stroke-1" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<h3 className="text-xl font-medium mb-2 tracking-tight">Waterproof</h3>
<p className="text-base text-brand-black/60">Seamless sealing technology makes it perfect for wet areas.</p>
</div>
<div className="bg-white p-8 border border-brand-black/5 hover:border-brand-black/20 transition-all duration-300">
<svg className="lucide lucide-palette w-8 h-8 mb-4 stroke-1" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h3 className="text-xl font-medium mb-2 tracking-tight">Custom Tones</h3>
<p className="text-base text-brand-black/60">Pigmented to order. From warm beige to industrial charcoal.</p>
</div>
<div className="bg-white p-8 border border-brand-black/5 hover:border-brand-black/20 transition-all duration-300 mt-8 md:mt-0">
<svg className="lucide lucide-hammer w-8 h-8 mb-4 stroke-1" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<h3 className="text-xl font-medium mb-2 tracking-tight">Durability</h3>
<p className="text-base text-brand-black/60">Engineered to withstand heavy foot traffic and wear.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in" id="page-services">

<section className="bg-brand-black text-brand-bg py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 justify-between items-end">
<div>
<span className="text-brand-bg/50 uppercase tracking-widest text-xs font-semibold">Our Expertise</span>
<h1 className="font-display text-5xl md:text-7xl tracking-tighter mt-4 max-w-3xl">Precision in every layer.</h1>
</div>
<p className="text-brand-bg/60 max-w-sm text-lg text-right">
                            Specialized application for floors, walls, and joinery. We handle complexities others avoid.
                        </p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto grid gap-16">

<div className="grid md:grid-cols-2 gap-12 items-center border-b border-brand-black/10 pb-16">
<div className="order-2 md:order-1">
<h2 className="font-display text-3xl tracking-tight mb-4">Residential Floors</h2>
<p className="text-brand-black/60 text-lg mb-6 leading-relaxed">
                                Create a sense of continuity in your home. Our floor systems are warm underfoot, compatible with underfloor heating, and easy to clean.
                            </p>
<button className="inline-block border-b border-black pb-1 hover:opacity-60 transition-opacity" onclick="showPage('contact')">Request Floor Quote</button>
</div>
<div className="order-1 md:order-2 bg-gray-200 h-[400px]">
<img alt="Microcement Floors" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center border-b border-brand-black/10 pb-16">
<div className="bg-gray-200 h-[400px]">
<img alt="Microcement Bathrooms" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="font-display text-3xl tracking-tight mb-4">Bathrooms &amp; Wet Rooms</h2>
<p className="text-brand-black/60 text-lg mb-6 leading-relaxed">
                                Say goodbye to grout lines. Our waterproof systems completely seal shower areas, sinks, and walls.
                            </p>
<button className="inline-block border-b border-black pb-1 hover:opacity-60 transition-opacity" onclick="showPage('contact')">Request Bathroom Quote</button>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in" id="page-about">

<section className="relative pt-32 pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<span className="text-brand-black/50 uppercase tracking-widest text-xs font-semibold block mb-6">Our Philosophy</span>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] max-w-4xl">
                        The art of the<br/>invisible background.
                    </h1>
<div className="mt-12 grid md:grid-cols-2 gap-12 border-t border-brand-black/10 pt-12">
<p className="text-xl font-light text-brand-black/80">
                            We believe surfaces should be felt, not just seen. Cimenza was founded on the principle that the most impactful design elements are those that create a seamless foundation for life to happen.
                        </p>
<p className="text-brand-black/60 leading-relaxed">
                            Established in 2014, we have evolved from a small artisan workshop into a premier applicator of continuous surfaces. Our approach combines old-world craftsmanship with modern chemical engineering, resulting in finishes that are as durable as they are beautiful.
                        </p>
</div>
</div>
</section>

<section className="px-6 pb-24">
<div className="max-w-7xl mx-auto h-[60vh] bg-brand-light relative overflow-hidden group">
<img alt="Studio texture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 text-xs font-medium uppercase tracking-wider">
                        Material Lab, 2024
                    </div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4">
<svg className="lucide lucide-feather w-6 h-6 text-brand-black/40" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
<h3 className="text-xl font-medium tracking-tight">Honest Materiality</h3>
<p className="text-brand-black/60 text-sm leading-relaxed">We respect the organic nature of cement. Every trowel mark is intentional, every shadow part of the design. No two square meters are identical.</p>
</div>
<div className="space-y-4">
<svg className="lucide lucide-shield-check w-6 h-6 text-brand-black/40" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-xl font-medium tracking-tight">Technical Rigor</h3>
<p className="text-brand-black/60 text-sm leading-relaxed">Aesthetics mean nothing without performance. We adhere to strict application protocols to ensure waterproofing and adhesion longevity.</p>
</div>
<div className="space-y-4">
<svg className="lucide lucide-recycle w-6 h-6 text-brand-black/40" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
<h3 className="text-xl font-medium tracking-tight">Sustainable Future</h3>
<p className="text-brand-black/60 text-sm leading-relaxed">Our microcement is water-based and low-VOC. By overlaying existing surfaces, we reduce construction waste and landfill impact significantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<div className="border-l border-brand-black/20 pl-8 space-y-16">
<div className="relative">
<span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-brand-black border-4 border-brand-bg"></span>
<span className="text-xs font-semibold text-brand-black/50 block mb-2">2014</span>
<h3 className="text-xl font-medium mb-2">Foundation</h3>
<p className="text-brand-black/60">Cimenza starts as a small family operation focused on polished concrete repair.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-bg"></span>
<span className="text-xs font-semibold text-brand-black/50 block mb-2">2018</span>
<h3 className="text-xl font-medium mb-2">Microcement Transition</h3>
<p className="text-brand-black/60">Pivot to exclusively applying thin-coat microcement systems imported from Spain.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-brand-black/20 border-4 border-brand-bg"></span>
<span className="text-xs font-semibold text-brand-black/50 block mb-2">2023</span>
<h3 className="text-xl font-medium mb-2">Expansion</h3>
<p className="text-brand-black/60">Opened our new Design District showroom and expanded the team to 15 artisans.</p>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in" id="page-projects">

<section className="pt-32 pb-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<h1 className="font-display text-5xl md:text-7xl tracking-tighter">Selected Works</h1>
</div>

<div className="flex flex-wrap gap-2 md:gap-6">
<button className="text-sm font-medium border-b border-black pb-0.5">All</button>
<button className="text-sm font-medium text-brand-black/50 hover:text-brand-black transition-colors">Residential</button>
<button className="text-sm font-medium text-brand-black/50 hover:text-brand-black transition-colors">Commercial</button>
<button className="text-sm font-medium text-brand-black/50 hover:text-brand-black transition-colors">Furniture</button>
</div>
</div>
</section>

<section className="px-6 mb-24">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden bg-brand-light mb-4">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium">Aesop Store Simulation</h3>
<p className="text-sm text-brand-black/50">Commercial • London</p>
</div>

<div className="group cursor-pointer md:pt-24">
<div className="aspect-[4/3] overflow-hidden bg-brand-light mb-4">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium">Nordic Apartment</h3>
<p className="text-sm text-brand-black/50">Residential • Oslo</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden bg-brand-light mb-4">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium">Custom Plinth Series</h3>
<p className="text-sm text-brand-black/50">Furniture • Commission</p>
</div>

<div className="group cursor-pointer md:pt-24">
<div className="aspect-[4/3] overflow-hidden bg-brand-light mb-4">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium">Soho Loft Bathroom</h3>
<p className="text-sm text-brand-black/50">Residential • New York</p>
</div>
</div>
</section>
</div>

<div className="hidden fade-in bg-white min-h-screen" id="page-contact">

<section className="pt-32 pb-12 px-6 bg-brand-bg border-b border-brand-black/5">
<div className="max-w-7xl mx-auto">
<span className="text-brand-black/50 uppercase tracking-widest text-xs font-semibold block mb-6">Get in Touch</span>
<h1 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.95] max-w-4xl">
                        Start your<br/>transformation.
                    </h1>
</div>
</section>
<div className="flex flex-col lg:flex-row h-full">

<div className="lg:w-1/3 bg-brand-bg p-6 lg:p-12 border-r border-brand-black/5">
<div className="space-y-12 sticky top-32">

<div>
<h3 className="text-sm font-semibold uppercase tracking-widest text-brand-black/40 mb-6">Contact Details</h3>
<div className="space-y-4">
<a className="block text-xl hover:text-brand-gray transition-colors" href="mailto:projects@cimenza.com">projects@cimenza.com</a>
<a className="block text-xl hover:text-brand-gray transition-colors" href="tel:+442030000000">+44 (0) 20 3000 0000</a>
</div>
</div>

<div>
<h3 className="text-sm font-semibold uppercase tracking-widest text-brand-black/40 mb-6">Showroom</h3>
<p className="text-brand-black/80 text-lg leading-relaxed mb-4">
                                128 Design District
                                Building C2, Studio 4
                                Greenwich Peninsula
                                London, SE10 0AX
                            </p>
<div className="flex items-center gap-2 text-sm text-brand-black/50">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Open Mon-Fri, 9am - 6pm</span>
</div>
</div>

<div className="pt-8 border-t border-brand-black/10">
<h3 className="text-sm font-semibold uppercase tracking-widest text-brand-black/40 mb-6">Quick Answers</h3>
<div className="space-y-6">
<div>
<h4 className="font-medium text-sm mb-1">Lead Time</h4>
<p className="text-brand-black/60 text-sm">Currently booking projects for Q3 2024. Typical wait time is 4-6 weeks.</p>
</div>
<div>
<h4 className="font-medium text-sm mb-1">Pricing</h4>
<p className="text-brand-black/60 text-sm">Installations start from £120/m² + VAT depending on complexity and substrate preparation.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-2/3 p-6 lg:p-16 lg:py-24 bg-white">
<div className="max-w-2xl mx-auto">
<p className="text-xl text-brand-black/60 font-light mb-12">
                            Please provide details about your project. For accurate quotes, include approximate dimensions and current surface conditions.
                        </p>
<form className="space-y-12">
<div className="grid md:grid-cols-2 gap-12">
<div className="group relative">
<input className="peer w-full border-b border-brand-black/20 py-3 focus:outline-none focus:border-brand-black transition-colors bg-transparent placeholder-transparent text-lg" id="name" required="" type="text"/>
<label className="absolute left-0 top-3 text-brand-black/40 transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brand-black cursor-text" htmlFor="name">Full Name</label>
</div>
<div className="group relative">
<input className="peer w-full border-b border-brand-black/20 py-3 focus:outline-none focus:border-brand-black transition-colors bg-transparent placeholder-transparent text-lg" id="email" required="" type="email"/>
<label className="absolute left-0 top-3 text-brand-black/40 transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brand-black cursor-text" htmlFor="email">Email Address</label>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="group relative">
<input className="peer w-full border-b border-brand-black/20 py-3 focus:outline-none focus:border-brand-black transition-colors bg-transparent placeholder-transparent text-lg" id="phone" type="tel"/>
<label className="absolute left-0 top-3 text-brand-black/40 transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brand-black cursor-text" htmlFor="phone">Phone (Optional)</label>
</div>
<div className="group relative">
<input className="peer w-full border-b border-brand-black/20 py-3 focus:outline-none focus:border-brand-black transition-colors bg-transparent placeholder-transparent text-lg" id="location" type="text"/>
<label className="absolute left-0 top-3 text-brand-black/40 transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-valid:-top-4 peer-valid:text-xs peer-valid:text-brand-black cursor-text" htmlFor="location">Project Location (Postcode)</label>
</div>
</div>

<div className="pt-4">
<label className="block text-xs font-semibold uppercase tracking-wider text-brand-black/40 mb-6">Project Type</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="border border-brand-black/10 px-4 py-3 text-center text-sm font-medium text-brand-black/60 transition-all hover:border-brand-black/40 peer-checked:bg-brand-black peer-checked:text-white peer-checked:border-brand-black">Residential</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="border border-brand-black/10 px-4 py-3 text-center text-sm font-medium text-brand-black/60 transition-all hover:border-brand-black/40 peer-checked:bg-brand-black peer-checked:text-white peer-checked:border-brand-black">Commercial</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="border border-brand-black/10 px-4 py-3 text-center text-sm font-medium text-brand-black/60 transition-all hover:border-brand-black/40 peer-checked:bg-brand-black peer-checked:text-white peer-checked:border-brand-black">Furniture</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="border border-brand-black/10 px-4 py-3 text-center text-sm font-medium text-brand-black/60 transition-all hover:border-brand-black/40 peer-checked:bg-brand-black peer-checked:text-white peer-checked:border-brand-black">Other</div>
</label>
</div>
</div>
<div className="group relative pt-4">
<textarea className="peer w-full border-b border-brand-black/20 py-3 focus:outline-none focus:border-brand-black transition-colors bg-transparent placeholder-transparent text-lg resize-none" id="message" rows="4"></textarea>
<label className="absolute left-0 top-7 text-brand-black/40 transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-black peer-valid:top-0 peer-valid:text-xs peer-valid:text-brand-black cursor-text" htmlFor="message">Tell us about your project...</label>
</div>
<div className="pt-4 flex items-center justify-between">
<p className="text-xs text-brand-black/40 max-w-xs">By submitting this form, you agree to our privacy policy. We typically respond within 24 hours.</p>
<button className="bg-brand-black text-white px-10 py-4 font-medium hover:bg-brand-accent transition-all flex items-center gap-2 group shadow-lg shadow-black/5" type="button">
                                    Send Enquiry <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>

<div className="h-[400px] w-full bg-gray-200 relative overflow-hidden grayscale">
<img alt="Map Location" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white px-6 py-3 shadow-xl flex items-center gap-3 animate-bounce">
<div className="bg-brand-black rounded-full p-1.5"><svg className="lucide lucide-map-pin w-4 h-4 text-white" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
<span className="font-medium text-sm">Design District, London</span>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-brand-black text-brand-bg/60 py-16 px-6 text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="font-display text-2xl tracking-widest text-brand-bg uppercase">CIMENZA</div>
<p>Elevating spaces through the art of seamless microcement.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Sitemap</h4>
<ul className="space-y-2">
<li><button className="hover:text-white transition-colors" onclick="showPage('home')">Home</button></li>
<li><button className="hover:text-white transition-colors" onclick="showPage('services')">Services</button></li>
<li><button className="hover:text-white transition-colors" onclick="showPage('projects')">Projects</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Follow Us</h4>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
<p>© 2024 CIMENZA Microcement. All rights reserved.</p>
<p>Designed for Growth.</p>
</div>
</footer>


    </>
  );
}
