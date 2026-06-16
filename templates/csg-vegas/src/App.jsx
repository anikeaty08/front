import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Icon Initialization
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        // Simple Single Page Router
        function switchPage(pageId) {
            // Update Navigation State
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.dataset.target === pageId) {
                    link.classList.add('text-[#BF953F]');
                } else {
                    link.classList.remove('text-[#BF953F]');
                }
            });

            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }
        }

        // Initialize Home Nav State
        document.addEventListener('DOMContentLoaded', () => {
             document.querySelector('[data-target="home"]').classList.add('text-[#BF953F]');
        });

        // Flame Effect Logic
        const fireCard = document.getElementById('fire-card');
        const fireGlow = document.getElementById('fire-glow');
        let isHovering = false;
        
        // Mouse Follow (Desktop)
        fireCard.addEventListener('mouseenter', () => {
            isHovering = true;
            fireGlow.style.opacity = '1';
        });

        fireCard.addEventListener('mouseleave', () => {
            isHovering = false;
            fireGlow.style.opacity = '0';
        });

        fireCard.addEventListener('mousemove', (e) => {
            if(!isHovering) return;
            const rect = fireCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Simple ease towards mouse position
            requestAnimationFrame(() => {
                fireGlow.style.left = `${x}px`;
                fireGlow.style.top = `${y}px`;
            });
        });

        // Scroll Reaction (Mobile/Touch)
        window.addEventListener('scroll', () => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                const rect = fireCard.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                
                // Check if element is in view
                if (rect.top < viewHeight && rect.bottom > 0) {
                    fireGlow.style.opacity = '0.6'; // Visible but subtle
                    
                    // Map scroll position to vertical movement inside the card
                    const scrollPercent = (viewHeight - rect.top) / (viewHeight + rect.height);
                    const yPos = scrollPercent * rect.height;
                    
                    // Center X, Move Y
                    fireGlow.style.left = '50%';
                    fireGlow.style.top = `${yPos}px`;
                } else {
                    fireGlow.style.opacity = '0';
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed w-full h-full left-0 top-0 -z-10 pointer-events-none" data-us-project="bmaMERjX2VZDtPrh4Zwx" id="us-background"></div>


<nav className="fixed top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 flex justify-between items-center mix-blend-plus-lighter border-b border-white/5 bg-black/20 backdrop-blur-md transition-all duration-300">
<a className="group relative" href="#" onclick="switchPage('home')">
<h1 className="font-display text-2xl tracking-tight font-semibold text-white">CSG Vegas</h1>
<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#BF953F] group-hover:w-full transition-all duration-500"></span>
</a>
<div className="hidden md:flex gap-10 text-xs font-medium tracking-widest uppercase items-center">
<button className="hover:text-[#BF953F] transition-colors nav-link" data-target="home" onclick="switchPage('home')">Home</button>
<button className="hover:text-[#BF953F] transition-colors nav-link" data-target="fireplaces" onclick="switchPage('fireplaces')">Fireplaces</button>
<button className="hover:text-[#BF953F] transition-colors nav-link" data-target="garage" onclick="switchPage('garage')">Garage Doors</button>
<button className="px-6 py-2 border border-[#BF953F]/50 rounded-sm hover:bg-[#BF953F] hover:text-black transition-all duration-300" onclick="switchPage('contact')">Get in Touch</button>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<div className="hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden" id="mobile-menu">
<button className="absolute top-8 right-8 text-white" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<button className="font-display text-2xl text-white hover:text-[#BF953F]" onclick="switchPage('home'); document.getElementById('mobile-menu').classList.add('hidden')">Home</button>
<button className="font-display text-2xl text-white hover:text-[#BF953F]" onclick="switchPage('fireplaces'); document.getElementById('mobile-menu').classList.add('hidden')">Fireplaces</button>
<button className="font-display text-2xl text-white hover:text-[#BF953F]" onclick="switchPage('garage'); document.getElementById('mobile-menu').classList.add('hidden')">Garage Doors</button>
<button className="font-display text-2xl text-[#BF953F]" onclick="switchPage('contact'); document.getElementById('mobile-menu').classList.add('hidden')">Get in Touch</button>
</div>

<main className="relative z-10 pt-24 min-h-screen flex flex-col">

<section className="page-section active flex-grow" id="home">

<div className="relative h-[85vh] w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-white/5">
<div className="max-w-screen-2xl w-full mx-auto space-y-8 relative z-10">
<div className="flex items-center gap-4 text-xs font-medium text-[#BF953F] uppercase tracking-[0.4em] animate-pulse">
<span className="w-8 h-[1px] bg-[#BF953F]"></span>
                        Exquisite Living
                    </div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white drop-shadow-2xl">
<span className="block text-gold italic pr-4">LUXURY</span>
<span className="block text-stone-500/80 text-5xl md:text-7xl lg:text-8xl mt-2 font-normal">Fireplaces &amp; Garage Doors </span>
</h1>
<p className="max-w-lg text-sm text-stone-400 leading-7 font-light tracking-wide border-l border-[#BF953F]/30 pl-6 mt-8">
                        CSG Vegas curates an exclusive portfolio of architectural masterpieces. From the warmth of bespoke fire features to the grand entrance of custom garage artistry, we define modern opulence.
                    </p>
<div className="pt-8">
<button className="group flex items-center gap-4 text-sm uppercase tracking-widest text-white hover:text-[#BF953F] transition-colors" onclick="switchPage('contact')">
                            Explore Assets
                            <i className="w-4 h-4 group-hover:translate-x-2 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh] border-b border-white/5 bg-black/40 backdrop-blur-sm">

<div className="relative overflow-hidden p-12 md:p-24 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center group cursor-pointer hover:bg-white/[0.02] transition-colors" id="fire-card" onclick="switchPage('fireplaces')">

<div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,100,0,0.15)_0%,rgba(191,149,63,0.05)_40%,transparent_70%)] rounded-full blur-[60px] pointer-events-none opacity-0 transition-opacity duration-700 mix-blend-screen z-0 -translate-x-1/2 -translate-y-1/2" id="fire-glow"></div>
<div className="relative z-10 pointer-events-none">
<div className="mb-6 text-[#BF953F]">
<i className="w-8 h-8" data-lucide="flame"></i>
</div>
<h2 className="font-display text-3xl md:text-4xl text-white mb-4">Fire Features</h2>
<p className="text-stone-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
                            Sculptural heating elements that serve as the heart of the home. Minimalist gas fireplaces and linear flame designs.
                        </p>
<span className="text-xs uppercase tracking-widest text-white group-hover:text-[#BF953F] transition-colors flex items-center gap-2">
                            View Collection <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</span>
</div>
</div>
<div className="p-12 md:p-24 flex flex-col justify-center group cursor-pointer hover:bg-white/[0.02] transition-colors" onclick="switchPage('garage')">
<div className="mb-6 text-[#BF953F]">
<i className="w-8 h-8" data-lucide="car-front"></i>
</div>
<h2 className="font-display text-3xl md:text-4xl text-white mb-4">Garage Systems</h2>
<p className="text-stone-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
                        Architectural grade entryways for the automotive enthusiast. Frameless glass and custom timber integration.
                    </p>
<span className="text-xs uppercase tracking-widest text-white group-hover:text-[#BF953F] transition-colors flex items-center gap-2">
                        View Collection <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</span>
</div>
</div>
</section>

<section className="page-section" id="fireplaces">
<div className="pt-12 pb-24 px-6 md:px-12 border-b border-white/5 bg-black/80 backdrop-blur-sm">
<div className="max-w-screen-2xl mx-auto mb-16">
<span className="text-xs text-[#BF953F] uppercase tracking-widest block mb-4">Portfolio / Interiors</span>
<h2 className="font-display text-5xl md:text-6xl text-white tracking-tight">The Hearth <span className="text-stone-600 font-serif italic">&amp;</span> Home</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">

<div className="group relative aspect-[4/3] bg-stone-900 overflow-hidden">
<img alt="Fireplace" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-display text-2xl text-white mb-1">The Monolith</h3>
<p className="text-xs text-[#BF953F] tracking-widest uppercase">Stone &amp; Gas</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-stone-900 overflow-hidden">
<img alt="Fireplace" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-display text-2xl text-white mb-1">Linear Void</h3>
<p className="text-xs text-[#BF953F] tracking-widest uppercase">Embedded Wall Unit</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-stone-900 overflow-hidden">
<img alt="Fireplace" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-display text-2xl text-white mb-1">Outdoor Sanctum</h3>
<p className="text-xs text-[#BF953F] tracking-widest uppercase">Patio Feature</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-stone-900 overflow-hidden">
<img alt="Fireplace" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-display text-2xl text-white mb-1">Suspended Flame</h3>
<p className="text-xs text-[#BF953F] tracking-widest uppercase">Central Piece</p>
</div>
</div>
</div>
<div className="mt-24 max-w-2xl">
<p className="text-2xl font-display text-white leading-relaxed">
                        "Fire is the ultra-living element. It is intimacy and it is universal."
                    </p>
<p className="text-stone-500 mt-4 text-sm font-mono">— Design Philosophy</p>
</div>
</div>
</section>

<section className="page-section" id="garage">
<div className="pt-12 pb-24 px-6 md:px-12 border-b border-white/5 bg-black/80 backdrop-blur-sm">
<div className="max-w-screen-2xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
<div>
<span className="text-xs text-[#BF953F] uppercase tracking-widest block mb-4">Portfolio / Exterior</span>
<h2 className="font-display text-5xl md:text-6xl text-white tracking-tight">Automotive <br/> <span className="text-gold">Sanctuaries</span></h2>
</div>
<p className="max-w-md text-stone-500 text-sm leading-7">
                        Where engineering meets aesthetics. Our custom garage solutions are designed to showcase, protect, and integrate seamlessly with modern architectural forms.
                    </p>
</div>

<div className="relative w-full h-[60vh] bg-stone-900 mb-8 group overflow-hidden border border-white/5">
<img alt="Luxury Garage" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 md:p-12">
<h3 className="text-3xl font-display text-white mb-2">The Glass Vault</h3>
<p className="text-[#BF953F] text-xs uppercase tracking-widest">Frameless Technology</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#0a0a0a] border border-white/5 p-6 group hover:border-[#BF953F]/30 transition-colors">
<div className="aspect-square overflow-hidden mb-6 bg-stone-900">
<img alt="Wood Garage" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-display text-lg mb-1">Cedar Batten</h4>
<p className="text-stone-500 text-xs">Flush Mount System</p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-6 group hover:border-[#BF953F]/30 transition-colors">
<div className="aspect-square overflow-hidden mb-6 bg-stone-900">
<img alt="Black Garage" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518987048-93e29699e79a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-display text-lg mb-1">Obsidian Aluminum</h4>
<p className="text-stone-500 text-xs">Matte Finish</p>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-6 group hover:border-[#BF953F]/30 transition-colors">
<div className="aspect-square overflow-hidden mb-6 bg-stone-900">
<img alt="Modern Garage" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h4 className="text-white font-display text-lg mb-1">Industrial Mesh</h4>
<p className="text-stone-500 text-xs">High Security</p>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="min-h-screen px-6 md:px-12 pt-12 pb-24 flex items-center bg-black/80 backdrop-blur-sm">
<div className="max-w-screen-2xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="flex flex-col justify-between">
<div>
<span className="text-xs text-[#BF953F] uppercase tracking-widest block mb-6">Acquisition &amp; Inquiry</span>
<h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9] mb-8">
                                Secure Your <br/> <span className="text-stone-600">Legacy.</span>
</h2>
<p className="text-stone-400 font-light leading-relaxed max-w-md">
                                For inquiries regarding our fireplace collections, garage systems, or real estate portfolio, please use the secure channel opposite. 
                            </p>
</div>
<div className="space-y-6 mt-16">
<div className="flex items-center gap-4 text-stone-300">
<i className="w-5 h-5 text-[#BF953F]" data-lucide="map-pin"></i>
<span className="text-sm">432 Park Avenue, New York, NY 10022</span>
</div>
<div className="flex items-center gap-4 text-stone-300">
<i className="w-5 h-5 text-[#BF953F]" data-lucide="mail"></i>
<span className="text-sm">concierge@csgvegas.com</span>
</div>
<div className="flex items-center gap-4 text-stone-300">
<i className="w-5 h-5 text-[#BF953F]" data-lucide="phone"></i>
<span className="text-sm">+1 (212) 555-0199</span>
</div>
</div>
</div>

<div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#BF953F] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
<form className="space-y-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-stone-500">First Name</label>
<input className="w-full bg-transparent border-b border-stone-800 focus:border-[#BF953F] text-white py-2 outline-none transition-colors rounded-none placeholder-stone-700" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-stone-500">Last Name</label>
<input className="w-full bg-transparent border-b border-stone-800 focus:border-[#BF953F] text-white py-2 outline-none transition-colors rounded-none placeholder-stone-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-stone-500">Email Address</label>
<input className="w-full bg-transparent border-b border-stone-800 focus:border-[#BF953F] text-white py-2 outline-none transition-colors rounded-none placeholder-stone-700" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-stone-500">Interest</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-stone-600 rounded-sm group-hover:border-[#BF953F] flex items-center justify-center">
<input className="appearance-none checked:bg-[#BF953F] w-2 h-2 rounded-[1px]" name="interest" type="radio"/>
</div>
<span className="text-sm text-stone-400 group-hover:text-white">Real Estate</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-stone-600 rounded-sm group-hover:border-[#BF953F] flex items-center justify-center">
<input className="appearance-none checked:bg-[#BF953F] w-2 h-2 rounded-[1px]" name="interest" type="radio"/>
</div>
<span className="text-sm text-stone-400 group-hover:text-white">Fireplaces</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-stone-600 rounded-sm group-hover:border-[#BF953F] flex items-center justify-center">
<input className="appearance-none checked:bg-[#BF953F] w-2 h-2 rounded-[1px]" name="interest" type="radio"/>
</div>
<span className="text-sm text-stone-400 group-hover:text-white">Garage</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-stone-500">Message</label>
<textarea className="w-full bg-transparent border-b border-stone-800 focus:border-[#BF953F] text-white py-2 h-32 outline-none transition-colors resize-none rounded-none placeholder-stone-700" placeholder="Tell us about your project..."></textarea>
</div>
<button className="w-full bg-[#BF953F] text-black font-medium py-4 uppercase tracking-widest text-xs hover:bg-[#AA771C] transition-colors mt-4" type="button">
                                Send Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black/90 backdrop-blur-lg py-12 px-6 md:px-12 border-t border-white/10 relative z-20">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h3 className="font-display text-xl text-white mb-2">CSG VEGAS</h3>
<p className="text-[10px] text-stone-600 uppercase tracking-widest">© 2024 CSG Vegas. All rights reserved.</p>
</div>
<div className="flex gap-8">
<a className="text-stone-500 hover:text-[#BF953F] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-stone-500 hover:text-[#BF953F] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-stone-500 hover:text-[#BF953F] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
