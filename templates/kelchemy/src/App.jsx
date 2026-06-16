import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
emerald: { 800: '#065f46', 900: '#064e3b', 950: '#022c22' },
stone: { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 800: '#292524', 900: '#1c1917' }
},
letterSpacing: { 'tight': '-0.02em', 'tighter': '-0.04em', 'wide': '0.05em', 'widest': '0.15em', 'ultra': '0.25em' },
fontSize: { 'xxs': '0.65rem' },
screens: {
'lg': '1200px',
}
}
}
}



        // Router Logic
        function handleNav(viewId) {
            if (window.event) window.event.preventDefault();

            // Hide all views
            const views = document.querySelectorAll('.page-view');
            views.forEach(v => v.classList.remove('active'));
            
            // Show target view
            const targetView = document.getElementById('view-' + viewId);
            if (targetView) {
                targetView.classList.add('active');
                
                // Update styling for active nav state
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    // Reset all
                    btn.classList.remove('text-stone-900');
                    btn.classList.add('text-stone-500');
                    
                    // Highlight active
                    if (btn.getAttribute('onclick') === `handleNav('${viewId}')`) {
                        btn.classList.remove('text-stone-500');
                        btn.classList.add('text-stone-900');
                    }
                });
            } else {
                console.error('View not found:', viewId);
            }
            
            window.scrollTo(0, 0);

            // Close mobile menu if open
            if(isMenuOpen) {
                toggleMenu();
            }
        }

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                if(menuToggle) menuToggle.innerHTML = '<span class="iconify" data-icon="lucide:x" data-width="24"></span>';
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                if(menuToggle) menuToggle.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24"></span>';
            }
        }
        
        if(menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 bg-white/95 backdrop-blur-md border-b border-stone-100 h-24">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 h-full flex justify-between items-center relative">

<div className="flex-shrink-0 z-50">
<button className="text-sm tracking-[0.2em] font-medium uppercase text-stone-900 hover:text-emerald-900 transition-colors focus:outline-none" onclick="handleNav('home')">
                    KELCHEMY™
                </button>
</div>

<div className="hidden lg:flex absolute left-0 right-0 justify-center items-center h-full pointer-events-none">
<div className="flex items-center gap-6 xl:gap-8 pointer-events-auto bg-white/0 px-4">
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('home')">Home</button>
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('philosophy')">Philosophy</button>
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('brands-alchemy-method')">Brand Alchemy</button>
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('transformations')">Transformations</button>
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('kelchemy-lab')">Kelchemy Lab</button>
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('kelchemy-ai')">Kelchemy AI</button>
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('about')">About</button>
<button className="nav-btn text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none" onclick="handleNav('contact')">Contact</button>
</div>
</div>

<div className="flex items-center gap-4 flex-shrink-0 z-50">
<div className="hidden lg:block">
<button className="bg-emerald-900 text-white text-[10px] xl:text-[11px] uppercase tracking-widest font-medium px-6 py-3 hover:bg-emerald-800 transition-colors shadow-sm focus:outline-none" onclick="handleNav('booking')">
                        Begin Collaboration
                    </button>
</div>

<button className="lg:hidden text-stone-900 p-2 relative focus:outline-none" id="menu-toggle">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden" id="mobile-menu">
<div className="flex flex-col space-y-6 text-center">
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('home')">Home</button>
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('philosophy')">Philosophy</button>
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('brands-alchemy-method')">Brand Alchemy</button>
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('transformations')">Transformations</button>
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('kelchemy-lab')">Kelchemy Lab</button>
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('kelchemy-ai')">Kelchemy AI</button>
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('about')">About</button>
<button className="text-xl font-serif italic text-stone-900 hover:text-emerald-900" onclick="handleNav('contact')">Contact</button>
<div className="pt-6">
<button className="bg-emerald-900 text-white text-xs uppercase tracking-widest px-8 py-4 w-full" onclick="handleNav('booking')">
                    Begin Collaboration
                </button>
</div>
</div>
</div>

<main className="relative" id="app">

<div className="page-view active -mt-24" id="view-home">

<section className="relative w-full h-screen overflow-hidden bg-stone-900">
<div className="absolute inset-0 z-0">
<img alt="Editorial Fashion Portrait" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grain-overlay opacity-20"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-50/90 via-stone-50/40 to-transparent"></div>
<div className="absolute inset-0 z-20 w-full h-full">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 h-full relative">
<div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 max-w-3xl">
<h2 className="text-[11px] uppercase tracking-ultra font-semibold text-emerald-900 mb-8 animate-[fadeIn_1s_ease-out]">The Art of Brand Elevation</h2>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tighter text-stone-900 mb-10 animate-[fadeIn_1.2s_ease-out]">Turn the ordinary <br/> into <span className="text-emerald-900 italic font-normal">iconic.</span></h1>
<p className="font-sans text-stone-800 text-sm md:text-base font-medium leading-relaxed max-w-md animate-[fadeIn_1.4s_ease-out]">We distill essence into identity. <br/> A strategic studio shaping premium brands through clarity, precision, and contemporary Parisian elegance.</p>
</div>
<div className="absolute right-6 md:right-12 bottom-12 md:top-1/2 md:-translate-y-1/2 flex items-center">
<button className="group text-[10px] uppercase tracking-widest font-semibold text-stone-900 hover:text-emerald-900 transition-colors flex items-center gap-3" onclick="handleNav('philosophy')">
                                Explore the vision <span className="iconify transform group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-stone-50 py-32 md:py-40 border-b border-stone-200/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-10 block">
                        About The Studio
                    </span>
<h2 className="font-serif text-4xl md:text-6xl text-stone-900 italic leading-tight mb-10 tracking-tight">
                        "We work with founders and brands ready for elevation, not noise."
                    </h2>
<p className="font-sans text-stone-600 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Kelchemy is a strategic branding consultancy based in Paris, serving a global clientele of visionaries in beauty, lifestyle, and culture.
                    </p>
</div>
</section>

<section className="relative w-full py-32 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-stone-100 opacity-50"></div>
<div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
<div className="max-w-4xl mx-auto text-center mb-24">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-stone-400 mb-6 block">The Method</span>
<h2 className="font-serif text-6xl md:text-8xl text-stone-900 tracking-tighter mb-8">Brand Alchemy™</h2>
<p className="font-sans text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">We don’t just decorate brands. <br/> We <span className="italic text-emerald-900">transmute</span> them.</p>
</div>
<div className="flex justify-center">
<button className="text-[10px] uppercase tracking-widest font-semibold text-stone-900 hover:text-emerald-900 transition-colors flex items-center gap-3" onclick="handleNav('brands-alchemy-method')">Discover The Method <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></button>
</div>
</div>
</section>

<section className="relative w-full bg-stone-900 text-stone-50 py-32">
<div className="max-w-[1800px] mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-[10px] uppercase tracking-ultra font-semibold text-stone-400 mb-4 block">Curated Portfolio</span>
<h2 className="font-serif text-5xl md:text-6xl text-white tracking-tighter">Transformations</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer" onclick="handleNav('transformations')">
<img alt="Transformation 1" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer md:mt-24" onclick="handleNav('transformations')">
<img alt="Transformation 2" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="text-[10px] uppercase tracking-widest font-semibold text-stone-50 hover:text-emerald-400 transition-colors flex items-center gap-3" onclick="handleNav('transformations')">View All Projects <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></button>
</div>
</div>
</section>

<section className="relative w-full py-24 md:py-32 bg-stone-50 text-center">
<div className="max-w-xl mx-auto px-6">
<p className="font-serif text-3xl md:text-4xl italic text-stone-800 mb-10 tracking-tight">"If this vision resonates, discover the philosophy behind it."</p>
<button className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-emerald-900 transition-colors focus:outline-none" onclick="handleNav('philosophy')">
                        Explore the philosophy 
                        <span className="iconify transform group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</section>
</div>

<div className="page-view" id="view-philosophy">
<div className="pt-12 px-6 md:px-12 min-h-screen bg-stone-50 max-w-[1800px] mx-auto pb-12">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-6 block">Our Beliefs</span>
<h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-12 tracking-tighter">Philosophy</h1>
<h3 className="font-serif text-4xl text-stone-800 italic mb-10">Intention, not noise.</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<p className="font-serif text-2xl text-stone-800 leading-relaxed">
                        At Kelchemy™, we believe true luxury lies in clarity. In a world saturated with signals, the most powerful brands are those that speak with precision and quiet confidence.
                    </p>
<div className="space-y-6 text-stone-600 font-sans">
<p>We strip away the non-essential to reveal the core truth of your brand. This is not minimalism for minimalism's sake, but a rigorous process of refinement.</p>
<p>Our philosophy is rooted in the belief that design is intelligence made visible. Every curve, every shade, every typographic choice is a strategic decision aimed at evoking a specific emotional response.</p>
</div>
</div>
</div>

<section className="relative w-full py-24 md:py-32 bg-stone-50 border-t border-stone-100 text-center">
<div className="max-w-xl mx-auto px-6">
<p className="font-serif text-3xl md:text-4xl italic text-stone-800 mb-10 tracking-tight">"A vision requires a method."</p>
<button className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-emerald-900 transition-colors focus:outline-none" onclick="handleNav('brands-alchemy-method')">
                        Discover the method 
                        <span className="iconify transform group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</section>
</div>

<div className="page-view" id="view-brands-alchemy-method">
<div className="pt-12 px-6 md:px-12 min-h-screen bg-stone-50 max-w-[1800px] mx-auto pb-12">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-6 block">Methodology</span>
<h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-12 tracking-tighter">Brand Alchemy™</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
<div className="border-t border-stone-200 pt-8">
<h3 className="font-serif text-3xl text-stone-900 mb-4">01. Discovery</h3>
<p className="text-stone-600 text-sm leading-relaxed">Deep dive analysis into market positioning, cultural semiotics, and brand essence.</p>
</div>
<div className="border-t border-stone-200 pt-8">
<h3 className="font-serif text-3xl text-stone-900 mb-4">02. Distillation</h3>
<p className="text-stone-600 text-sm leading-relaxed">Refining the narrative. Removing the noise to find the singular, potent truth.</p>
</div>
<div className="border-t border-stone-200 pt-8">
<h3 className="font-serif text-3xl text-stone-900 mb-4">03. Design</h3>
<p className="text-stone-600 text-sm leading-relaxed">Crafting the visual language. Logo, typography, color, and motion tailored to the strategy.</p>
</div>
</div>
</div>

<section className="relative w-full py-24 md:py-32 bg-stone-50 border-t border-stone-100 text-center">
<div className="max-w-xl mx-auto px-6">
<p className="font-serif text-3xl md:text-4xl italic text-stone-800 mb-10 tracking-tight">"A method only matters if it transforms."</p>
<button className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-emerald-900 transition-colors focus:outline-none" onclick="handleNav('transformations')">
                        See the transformations 
                        <span className="iconify transform group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</section>
</div>

<div className="page-view" id="view-transformations">
<div className="pt-12 px-6 md:px-12 min-h-screen bg-stone-50 max-w-[1800px] mx-auto pb-12">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-6 block">Selected Works</span>
<h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-12 tracking-tighter">Transformations</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-stone-200 overflow-hidden mb-4">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-stone-900">Maison Étude</h3>
<span className="text-xs uppercase tracking-widest text-stone-500">Rebranding / Strategy</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-stone-200 overflow-hidden mb-4">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-stone-900">Velvet &amp; Vine</h3>
<span className="text-xs uppercase tracking-widest text-stone-500">Visual Identity</span>
</div>
</div>
</div>

<section className="relative w-full py-24 md:py-32 bg-stone-50 border-t border-stone-100 text-center">
<div className="max-w-xl mx-auto px-6">
<p className="font-serif text-3xl md:text-4xl italic text-stone-800 mb-10 tracking-tight">"The next chapter is yours to write."</p>
<button className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-widest font-medium text-stone-500 hover:text-emerald-900 transition-colors focus:outline-none" onclick="handleNav('booking')">
                        Begin a collaboration 
                        <span className="iconify transform group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</section>
</div>

<div className="page-view" id="view-kelchemy-lab">
<div className="pt-12 px-6 md:px-12 min-h-screen bg-stone-50 max-w-[1800px] mx-auto">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-6 block">Experimental</span>
<h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-12 tracking-tighter">Kelchemy Lab</h1>
<p className="font-sans text-stone-600 max-w-2xl text-lg leading-relaxed">
                    The playground for the unexplored. Here we test new aesthetic theories, experimental typography, and motion design concepts before they hit the market.
                </p>
<div className="mt-12 h-96 w-full bg-stone-200 relative overflow-hidden flex items-center justify-center">
<span className="font-serif italic text-4xl text-stone-400">Lab Experiments Loading...</span>
<div className="grain-overlay opacity-50"></div>
</div>
</div>
</div>

<div className="page-view" id="view-kelchemy-ai">
<div className="pt-12 px-6 md:px-12 min-h-screen bg-stone-50 max-w-[1800px] mx-auto">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-6 block">Intelligence</span>
<h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-12 tracking-tighter">Kelchemy AI</h1>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<p className="font-serif text-2xl text-stone-800 leading-relaxed mb-6">
                            Where luxury meets machine intelligence.
                        </p>
<p className="font-sans text-stone-600 leading-relaxed">
                            We leverage proprietary data models to analyze luxury market trends in real-time. Our AI assists in color forecasting and semantic resonance testing, ensuring your brand isn't just beautiful, but empirically potent.
                        </p>
</div>
<div className="order-1 lg:order-2 aspect-square bg-stone-900 overflow-hidden relative">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="page-view" id="view-about">
<div className="pt-12 px-6 md:px-12 min-h-screen bg-stone-50 max-w-[1800px] mx-auto">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-6 block">Studio Profile</span>
<h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-12 tracking-tighter">About</h1>
<h3 className="font-serif text-3xl text-stone-800 italic leading-relaxed mb-8">"We work with founders and brands ready for elevation, not noise."</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<p className="font-serif text-3xl text-stone-800 leading-relaxed mb-8">
                            Founded on the principle that brand is the ultimate asset.
                        </p>
<p className="font-sans text-stone-600 text-lg leading-relaxed mb-6">
                            Kelchemy™ is a boutique strategic design consultancy. We work with founders and visionaries who refuse to compromise. Our team consists of strategists, designers, and creative directors with backgrounds in high fashion, architecture, and technology.
                        </p>
</div>
<div className="md:col-span-4 bg-stone-200 aspect-[3/4]">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="page-view" id="view-contact">
<div className="pt-12 px-6 md:px-12 min-h-screen bg-stone-50 max-w-[1800px] mx-auto flex items-center justify-center">
<div className="text-center">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-900 mb-6 block">Get in Touch</span>
<h1 className="font-serif text-6xl md:text-8xl text-stone-900 mb-12 tracking-tighter">Contact</h1>
<div className="space-y-8">
<div>
<p className="text-[10px] uppercase tracking-ultra font-semibold text-stone-400 mb-2">Email</p>
<a className="font-serif italic text-3xl md:text-4xl text-stone-900 hover:text-emerald-900 transition-colors" href="mailto:contact@kelchemy.com">contact@kelchemy.com</a>
</div>
<div>
<p className="text-[10px] uppercase tracking-ultra font-semibold text-stone-400 mb-2">Studio</p>
<p className="font-sans text-xl text-stone-600 font-light">Paris, France</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-view" id="view-booking">
<section className="min-h-screen py-12 px-6 md:px-12 bg-stone-50 flex items-center justify-center">
<div className="w-full max-w-xl">
<div className="mb-12">
<span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Connect</span>
<h2 className="font-serif text-5xl text-stone-900 mt-4 tracking-tighter">Start the <span className="italic text-emerald-900">conversation.</span></h2>
</div>
<form className="space-y-8">
<input className="w-full bg-transparent border-b border-stone-300 py-4 text-lg font-serif text-stone-900 placeholder:text-stone-300 focus:border-emerald-900 transition-colors focus:outline-none" placeholder="Your Name" type="text"/>
<input className="w-full bg-transparent border-b border-stone-300 py-4 text-lg font-serif text-stone-900 placeholder:text-stone-300 focus:border-emerald-900 transition-colors focus:outline-none" placeholder="Email Address" type="email"/>
<textarea className="w-full bg-transparent border-b border-stone-300 py-4 text-lg font-serif text-stone-900 placeholder:text-stone-300 focus:border-emerald-900 transition-colors focus:outline-none resize-none" placeholder="Tell us about your vision..." rows="3"></textarea>
<div className="pt-8 flex justify-between items-center">
<button className="bg-stone-900 text-white uppercase tracking-widest text-[10px] font-bold px-8 py-4 hover:bg-emerald-900 transition-colors" type="button">Send Inquiry</button>
</div>
</form>
</div>
</section>
</div>
</main>

<footer className="bg-white border-t border-stone-100 py-24">
<div className="max-w-[1800px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4 flex flex-col justify-between h-full">
<div>
<span className="text-sm tracking-[0.2em] font-medium uppercase text-stone-900 block mb-2">KELCHEMY™</span>
<span className="font-serif italic text-stone-400 text-lg">The art of brand elevation.</span>
</div>
</div>

<div className="md:col-span-4">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-stone-400 mb-8 block">Navigation</span>
<div className="flex flex-col space-y-4">
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('home')">Home</button>
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('philosophy')">Philosophy</button>
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('brands-alchemy-method')">Brand Alchemy</button>
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('transformations')">Transformations</button>
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('kelchemy-lab')">Kelchemy Lab</button>
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('kelchemy-ai')">Kelchemy AI</button>
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('about')">About</button>
<button className="text-xs uppercase tracking-widest text-stone-500 hover:text-emerald-900 text-left transition-colors w-fit" onclick="handleNav('contact')">Contact</button>
</div>
</div>

<div className="md:col-span-4">
<div className="mb-12">
<span className="text-[10px] uppercase tracking-ultra font-semibold text-stone-400 mb-6 block">Contact</span>
<a className="font-serif italic text-2xl text-stone-900 hover:text-emerald-900 transition-colors" href="mailto:contact@kelchemy.com">contact@kelchemy.com</a>
</div>
<div>
<span className="text-[10px] uppercase tracking-ultra font-semibold text-stone-400 mb-6 block">Studio</span>
<p className="font-sans text-stone-600 font-light">Paris, France</p>
</div>
</div>
</div>
<div className="mt-24 pt-8 border-t border-stone-50 flex justify-between items-end">
<span className="text-[10px] text-stone-300 uppercase tracking-wide">© 2024 Kelchemy Strategic Design</span>
</div>
</div>
</footer>


    </>
  );
}
