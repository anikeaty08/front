import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
ocean: {
dark: '#0e4c55',     // Deep Teal (Footer/Text)
primary: '#2da4a8',  // Vibrant Turquoise (Buttons/Accents)
light: '#e0f2f2',    // Very pale aqua (Backgrounds)
mist: '#f0f9f9',     // Almost white cyan
},
sand: {
light: '#fdfbf7',    // Warm off-white
DEFAULT: '#f3eee6',  // Sand
},
ui: {
black: '#1a202c',
gray: '#718096',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'brush-edge': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E\")",
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // View Switching Logic (SPA Feel)
        const views = ['home', 'listing', 'detail'];
        
        function switchView(viewName) {
            views.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if(el) {
                    el.classList.add('hidden');
                    el.classList.remove('opacity-100');
                    el.classList.add('opacity-0');
                }
            });

            const selected = document.getElementById(`view-${viewName}`);
            if(selected) {
                selected.classList.remove('hidden');
                setTimeout(() => {
                    selected.classList.remove('opacity-0');
                    selected.classList.add('opacity-100');
                }, 50);
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
                lucide.createIcons();
            }
        }

        function openDetail(propertyId) {
            switchView('detail');
        }

        // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.style.overflow = mobileMenu.classList.contains('translate-x-full') ? 'auto' : 'hidden';
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md');
                navbar.classList.add('bg-white/95');
            } else {
                navbar.classList.remove('shadow-md');
                // Keep bg somewhat visible but cleaner at top
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-500 bg-white/90 backdrop-blur-md border-b border-ocean-primary/10" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<a className="flex flex-col leading-none group" href="javascript:void(0)" onclick="switchView('home')">
<span className="font-serif text-2xl font-bold tracking-tight text-ocean-dark group-hover:text-ocean-primary transition-colors">Swell Living</span>
<span className="text-[10px] uppercase tracking-[0.25em] text-ocean-primary/70 group-hover:text-ocean-primary transition-colors mt-1 font-medium">Island Real Estate</span>
</a>

<div className="hidden lg:flex items-center space-x-10">
<button className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-ocean-primary transition-colors" onclick="switchView('home')">Home</button>
<button className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-ocean-primary transition-colors" onclick="switchView('listing')">Collection</button>
<a className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-ocean-primary transition-colors" href="#about">Philosophy</a>
<a className="px-8 py-3 bg-ocean-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-ocean-dark transition-colors shadow-lg shadow-ocean-primary/20" href="#contact">
                        Inquire
                    </a>
</div>

<button className="lg:hidden p-2 text-ocean-dark" id="mobile-menu-btn">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="fixed inset-0 bg-ocean-dark z-40 transform translate-x-full transition-transform duration-500 lg:hidden flex flex-col justify-center items-center space-y-8 text-white" id="mobile-menu">
<button className="absolute top-8 right-8" id="close-menu-btn">
<i className="w-8 h-8 stroke-[1.5] text-white" data-lucide="x"></i>
</button>
<button className="font-serif text-3xl hover:text-ocean-primary transition-colors" onclick="switchView('home'); toggleMenu()">Home</button>
<button className="font-serif text-3xl hover:text-ocean-primary transition-colors" onclick="switchView('listing'); toggleMenu()">Collection</button>
<a className="font-serif text-3xl text-ocean-primary" href="#contact" onclick="toggleMenu()">Contact</a>
</div>
</nav>

<main className="opacity-100 transition-opacity duration-500" id="view-home">

<section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Tropical Ocean Aerial" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/20 via-transparent to-ocean-dark/40"></div>
</div>
<div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
<div className="inline-block mb-6 reveal-up bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
<span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">The Best Waves at Your Doorstep</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl text-white leading-none tracking-tight mb-8 reveal-up drop-shadow-md" style={{transitionDelay: '100ms'}}>
                    Life by the <br/>
<span className="italic font-normal text-ocean-light">Water</span>
</h1>
<p className="text-white text-lg font-medium mb-12 max-w-xl mx-auto leading-relaxed reveal-up drop-shadow-sm" style={{transitionDelay: '200ms'}}>
                    Discover curated beachfront sanctuaries and hillside villas with panoramic Andaman Sea views.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-up" style={{transitionDelay: '300ms'}}>
<button className="min-w-[180px] px-8 py-4 bg-white text-ocean-dark text-xs font-bold uppercase tracking-widest hover:bg-ocean-primary hover:text-white transition-all duration-300 shadow-xl" onclick="switchView('listing')">
                        Find Your Villa
                    </button>
</div>
</div>

<div className="wave-bottom">
<svg data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="shape-fill" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="about">

<div className="absolute top-20 right-0 w-1/3 h-full bg-ocean-light/30 -z-0 rounded-l-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 reveal-up">
<span className="text-ocean-primary text-[10px] font-bold tracking-[0.2em] uppercase block mb-6">Tropical Living</span>
<h2 className="font-serif text-5xl text-ocean-dark mb-8 leading-tight">
                            Simply the best <br/>
<span className="text-ocean-primary italic">views</span> in Asia.
                        </h2>
<div className="space-y-6 text-gray-600 font-light leading-relaxed text-sm md:text-base">
<p>
                                If you are looking for a social, stylish, and comfortable place to invest, Swell Living offers the premier portfolio on the island. We are located right in the center of the most desirable coastlines.
                            </p>
<p>
                                Our architecture caters to the modern nomad and the luxury traveler alike; we surf together, have meals and drinks together, or head out for adventure day trips.
                            </p>
</div>
<div className="mt-10">
<button className="px-8 py-3 border-2 border-ocean-dark text-ocean-dark text-xs font-bold uppercase tracking-widest hover:bg-ocean-dark hover:text-white transition-colors" onclick="switchView('listing')">
                                Read Our Story
                            </button>
</div>
</div>

<div className="lg:col-span-7 relative h-[600px] reveal-up" style={{transitionDelay: '200ms'}}>

<div className="absolute top-0 right-0 w-4/5 h-4/5 shadow-2xl overflow-hidden rounded-lg">
<img alt="Bright Villa Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-0 left-0 w-1/2 h-3/5 shadow-xl overflow-hidden rounded-lg border-8 border-white">
<img alt="Surfing Lifestyle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 bg-ocean-primary/20 rounded-full blur-2xl pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-ocean-mist" id="projects">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20 reveal-up">
<span className="text-ocean-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Curated Assets</span>
<h2 className="font-serif text-4xl md:text-5xl text-ocean-dark">Island Adventures &amp; Estates</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group cursor-pointer reveal-up" onclick="openDetail('estate1')">
<div className="bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl">
<div className="relative overflow-hidden h-[350px] rounded-lg mb-6">
<img alt="Beachfront Villa" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-ocean-dark text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">New Listing</span>
</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-end mb-2">
<h3 className="font-serif text-2xl text-ocean-dark group-hover:text-ocean-primary transition-colors">Azure Cliff House</h3>
<span className="text-ocean-primary font-bold">$1.2M</span>
</div>
<p className="text-sm text-gray-500 font-light mb-4">Koh Tao • Ocean Front • 3 Bed</p>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean-dark border-b border-transparent group-hover:border-ocean-primary inline-block pb-1 transition-all">
                                    View Details <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer reveal-up" onclick="openDetail('estate2')" style={{transitionDelay: '100ms'}}>
<div className="bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl">
<div className="relative overflow-hidden h-[350px] rounded-lg mb-6">
<img alt="Jungle Villa" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-ocean-dark text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">Turnkey</span>
</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-end mb-2">
<h3 className="font-serif text-2xl text-ocean-dark group-hover:text-ocean-primary transition-colors">Palm Grove Retreat</h3>
<span className="text-ocean-primary font-bold">$650k</span>
</div>
<p className="text-sm text-gray-500 font-light mb-4">Koh Phangan • Garden View • 4 Bed</p>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean-dark border-b border-transparent group-hover:border-ocean-primary inline-block pb-1 transition-all">
                                    View Details <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[600px] flex items-center">
<div className="absolute inset-0">
<img alt="Ocean Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-ocean-dark/60 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white reveal-up">
<h2 className="font-serif text-5xl md:text-7xl mb-8">Yoga, Surf &amp; Trips!</h2>
<p className="text-xl font-light mb-10 max-w-2xl mx-auto text-white/90">
                    Everything for an active investment lifestyle. From snorkeling, diving, jungle hiking to pure relaxation.
                </p>
<button className="px-10 py-4 border border-white bg-transparent text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ocean-dark transition-all">
                    Swell Activities
                </button>
</div>

<div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
<svg className="relative block w-[calc(100%+1.3px)] h-[50px] fill-white" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
</svg>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
<svg className="relative block w-[calc(100%+1.3px)] h-[50px] fill-sand-light" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
</svg>
</div>
</section>
</main>

<main className="hidden opacity-0 transition-opacity duration-500 pt-20 min-h-screen bg-sand-light" id="view-listing">

<div className="bg-ocean-primary/5 py-24 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-96 h-96 bg-ocean-primary/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
<span className="text-ocean-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Our Portfolio</span>
<h1 className="font-serif text-5xl md:text-6xl text-ocean-dark mb-6">Explore the Archipelago</h1>
<p className="max-w-2xl mx-auto text-gray-500 font-light text-sm md:text-base leading-relaxed">
                    A selection of the finest properties where the jungle meets the ocean.
                </p>
</div>
</div>

<div className="sticky top-24 z-30 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="flex gap-4 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
<div className="relative">
<select className="appearance-none bg-ocean-mist border border-gray-200 rounded px-4 py-2 pr-8 text-xs uppercase tracking-widest font-bold text-ocean-dark focus:outline-none focus:border-ocean-primary cursor-pointer">
<option>Location: All</option>
<option>Koh Phangan</option>
<option>Koh Samui</option>
<option>Koh Tao</option>
</select>
<i className="absolute right-2 top-2.5 w-3 h-3 text-ocean-primary pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="relative">
<select className="appearance-none bg-ocean-mist border border-gray-200 rounded px-4 py-2 pr-8 text-xs uppercase tracking-widest font-bold text-ocean-dark focus:outline-none focus:border-ocean-primary cursor-pointer">
<option>Type: All</option>
<option>Villa</option>
<option>Land</option>
<option>Resort</option>
</select>
<i className="absolute right-2 top-2.5 w-3 h-3 text-ocean-primary pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden" onclick="openDetail('estate1')">
<div className="relative h-64 overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-ocean-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">New</div>
</div>
<div className="p-6">
<h3 className="font-serif text-xl text-ocean-dark mb-2 group-hover:text-ocean-primary transition-colors">Azure Cliff House</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Panoramic ocean views with private beach access.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
<div className="flex gap-4 text-xs text-gray-400 font-bold">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="bed"></i> 3</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="maximize"></i> 450m²</span>
</div>
<span className="text-sm font-bold text-ocean-dark">$1.2M</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden" onclick="openDetail('estate2')">
<div className="relative h-64 overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl text-ocean-dark mb-2 group-hover:text-ocean-primary transition-colors">Palm Grove Retreat</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">A hidden gem nestled in the coconut groves.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
<div className="flex gap-4 text-xs text-gray-400 font-bold">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="bed"></i> 4</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="maximize"></i> 320m²</span>
</div>
<span className="text-sm font-bold text-ocean-dark">$650k</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden" onclick="openDetail('estate1')">
<div className="relative h-64 overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Sold</div>
</div>
<div className="p-6">
<h3 className="font-serif text-xl text-ocean-dark mb-2 group-hover:text-ocean-primary transition-colors">White Sand Villa</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Minimalist white concrete design on the beach.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
<div className="flex gap-4 text-xs text-gray-400 font-bold">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="bed"></i> 2</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="maximize"></i> 180m²</span>
</div>
<span className="text-sm font-bold text-ocean-dark">$450k</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden" onclick="openDetail('estate2')">
<div className="relative h-64 overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1572331165267-854da2b00cc3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl text-ocean-dark mb-2 group-hover:text-ocean-primary transition-colors">The Lagoon</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Built over the water with sustainable materials.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
<div className="flex gap-4 text-xs text-gray-400 font-bold">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="bed"></i> 3</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="maximize"></i> 300m²</span>
</div>
<span className="text-sm font-bold text-ocean-dark">$890k</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden" onclick="openDetail('estate1')">
<div className="relative h-64 overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl text-ocean-dark mb-2 group-hover:text-ocean-primary transition-colors">Hilltop Horizon</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Complete privacy with 360 degree island views.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
<div className="flex gap-4 text-xs text-gray-400 font-bold">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="bed"></i> 5</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="maximize"></i> 700m²</span>
</div>
<span className="text-sm font-bold text-ocean-dark">$1.5M</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden" onclick="openDetail('estate2')">
<div className="relative h-64 overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616137466211-f939a420be63?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="font-serif text-xl text-ocean-dark mb-2 group-hover:text-ocean-primary transition-colors">Coral Villa</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Direct access to the coral reef. Snorkel from your deck.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
<div className="flex gap-4 text-xs text-gray-400 font-bold">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="bed"></i> 2</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-ocean-primary" data-lucide="maximize"></i> 150m²</span>
</div>
<span className="text-sm font-bold text-ocean-dark">$395k</span>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="hidden opacity-0 transition-opacity duration-500 pt-24 bg-sand-light min-h-screen" id="view-detail">

<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
<button className="flex items-center gap-2 text-xs uppercase tracking-widest text-ocean-primary font-bold hover:text-ocean-dark transition-colors" onclick="switchView('listing')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Collection
            </button>
</div>

<div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
<div className="rounded-2xl overflow-hidden relative shadow-2xl h-[60vh]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
<span className="bg-ocean-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Exclusive Listing</span>
<h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-2">Azure Cliff House</h1>
<p className="text-white/90 text-sm font-medium tracking-wide">Koh Tao, Thailand • $1,200,000 USD</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

<div className="lg:col-span-2">
<div className="prose prose-sm max-w-none text-gray-600 leading-relaxed mb-16">
<h3 className="font-serif text-3xl text-ocean-dark mb-6">Oceanfront Sanctuary</h3>
<p className="mb-6">
                            Perched on the prestigious cliffs, Azure Cliff House represents the pinnacle of tropical luxury. The villa seamlessly integrates local stone, reclaimed teak, and floor-to-ceiling glass to create a living experience that feels both sheltered and boundless.
                        </p>
<p>
                            Designed for the modern ocean lover, the property features direct access to a private cove, perfect for morning swims or sunset paddleboarding. The interior palette reflects the colors of the sea—teals, aquas, and crisp whites.
                        </p>
<h3 className="font-serif text-2xl text-ocean-dark mb-6 mt-12">Features</h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-ocean-light">
<i className="w-5 h-5 text-ocean-primary" data-lucide="waves"></i>
<span className="text-sm font-medium">Infinity Pool</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-ocean-light">
<i className="w-5 h-5 text-ocean-primary" data-lucide="sun"></i>
<span className="text-sm font-medium">Private Beach Access</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-ocean-light">
<i className="w-5 h-5 text-ocean-primary" data-lucide="wifi"></i>
<span className="text-sm font-medium">Starlink Internet</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-ocean-light">
<i className="w-5 h-5 text-ocean-primary" data-lucide="shield"></i>
<span className="text-sm font-medium">24/7 Security</span>
</div>
</div>
</div>

<h3 className="font-serif text-2xl text-ocean-dark mb-8">Gallery</h3>
<div className="grid grid-cols-2 gap-4">
<img className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity col-span-2" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1616137466211-f939a420be63?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-32 bg-white p-8 rounded-2xl shadow-xl border border-ocean-light">
<div className="text-center mb-6">
<p className="text-xs text-ocean-primary font-bold uppercase tracking-widest mb-2">Asking Price</p>
<p className="text-4xl font-serif text-ocean-dark">$1,200,000</p>
</div>
<form className="space-y-6">
<div>
<input className="input-underline w-full pb-3 text-sm text-ocean-dark placeholder-gray-400" placeholder="Full Name" type="text"/>
</div>
<div>
<input className="input-underline w-full pb-3 text-sm text-ocean-dark placeholder-gray-400" placeholder="Email Address" type="email"/>
</div>
<div>
<textarea className="input-underline w-full pb-3 text-sm text-ocean-dark placeholder-gray-400" placeholder="I am interested in this villa..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-ocean-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-ocean-dark transition-colors rounded shadow-lg shadow-ocean-primary/30">
                                Request Viewing
                            </button>
</form>
<div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-bold text-ocean-dark">Kai Thompson</p>
<p className="text-xs text-gray-500">Island Specialist</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-32 bg-sand-light relative overflow-hidden" id="contact">

<div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-ocean-primary/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal-up">
<span className="text-ocean-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
<h2 className="font-serif text-5xl text-ocean-dark mb-8 tracking-tight">Start Your Island Life</h2>
<p className="text-gray-600 font-light mb-12 max-w-md leading-relaxed">
                        Ready to trade the city for the sea? Contact us to discuss investment opportunities, visa requirements, and island living.
                    </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="mailto:hello@swellliving.com">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-ocean-primary transition-colors">
<i className="w-5 h-5 text-ocean-dark group-hover:text-white transition-colors" data-lucide="mail"></i>
</div>
<span className="text-ocean-dark font-medium">hello@swellliving.com</span>
</a>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-ocean-dark" data-lucide="map-pin"></i>
</div>
<span className="text-ocean-dark font-medium">128 Beach Road, Koh Phangan</span>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-2xl shadow-[0_20px_60px_rgba(45,164,168,0.1)] reveal-up border border-ocean-light">
<h3 className="font-serif text-2xl text-ocean-dark mb-8">Quick Inquiry</h3>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you. We will contact you shortly.');">
<div className="grid grid-cols-2 gap-6">
<input className="input-underline w-full pb-3 text-sm placeholder-gray-400 text-ocean-dark" placeholder="First Name" required="" type="text"/>
<input className="input-underline w-full pb-3 text-sm placeholder-gray-400 text-ocean-dark" placeholder="Last Name" required="" type="text"/>
</div>
<input className="input-underline w-full pb-3 text-sm placeholder-gray-400 text-ocean-dark" placeholder="Email Address" required="" type="email"/>
<button className="w-full py-4 bg-ocean-dark text-white font-bold hover:bg-ocean-primary transition-colors text-xs uppercase tracking-widest rounded shadow-lg" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-ocean-dark text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">

<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<h2 className="font-serif text-3xl mb-6 text-white">Swell Living.</h2>
<p className="text-ocean-light/70 text-sm leading-relaxed font-light">
                        Connecting you with the ocean. The premier real estate agency for beachfront and sea-view properties in Thailand.
                    </p>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-ocean-primary">Explore</h4>
<ul className="space-y-4 text-xs text-ocean-light/70 font-medium">
<li><button className="hover:text-white transition-colors" onclick="switchView('home')">Home</button></li>
<li><button className="hover:text-white transition-colors" onclick="switchView('listing')">Villas</button></li>
<li><a className="hover:text-white transition-colors" href="#about">Lifestyle</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-ocean-primary">Connect</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-primary transition-colors" href="#">
<i className="w-4 h-4 text-white" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-primary transition-colors" href="#">
<i className="w-4 h-4 text-white" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-primary transition-colors" href="#">
<i className="w-4 h-4 text-white" data-lucide="twitter"></i>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-ocean-primary">Newsletter</h4>
<div className="flex border-b border-white/20 pb-2">
<input className="bg-transparent border-none outline-none text-xs text-white w-full placeholder-white/40" placeholder="Enter your email" type="email"/>
<button className="text-xs font-bold uppercase text-ocean-primary hover:text-white">Join</button>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-ocean-light/50 uppercase tracking-wider">
<p>© 2025 Swell Living. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
