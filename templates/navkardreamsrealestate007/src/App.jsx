import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
black: '#0b0b0b',
dark: '#151515',
gold: '#d4af37',
goldlight: '#e8c96b',
}
},
animation: {
'infinite-scroll': 'scroll 40s linear infinite',
'infinite-scroll-slow': 'scroll 60s linear infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with custom stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Simple navbar background change on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-brand-black/95', 'shadow-lg');
                nav.classList.remove('bg-brand-black/80');
            } else {
                nav.classList.add('bg-brand-black/80');
                nav.classList.remove('bg-brand-black/95', 'shadow-lg');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
<div className="relative flex items-center justify-center w-12 h-12 border border-brand-gold rounded-sm">
<span className="font-serif text-2xl text-brand-gold font-medium tracking-tight">ND</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-2xl text-white tracking-tight leading-none">NAVKAR DREAMS</span>
<span className="text-xs text-brand-gold tracking-[0.2em] mt-1 font-medium">THE REAL ESTATE ADVISORY</span>
</div>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-white hover:text-brand-gold px-3 py-2 text-base font-medium transition-colors" href="#">Home</a>
<a className="text-gray-300 hover:text-brand-gold px-3 py-2 text-base font-medium transition-colors" href="#properties">Properties</a>
<a className="text-gray-300 hover:text-brand-gold px-3 py-2 text-base font-medium transition-colors" href="#projects">Projects</a>
<a className="text-gray-300 hover:text-brand-gold px-3 py-2 text-base font-medium transition-colors" href="#services">Services</a>
<a className="text-gray-300 hover:text-brand-gold px-3 py-2 text-base font-medium transition-colors" href="#contact">Contact</a>
</div>
</div>
<div className="hidden md:block">
<button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-6 py-2.5 rounded-sm text-base font-medium transition-all duration-300 ease-in-out">
                        List Property
                    </button>
</div>
</div>
</div>
</nav>

<div className="relative min-h-screen flex items-center justify-center pt-24">
<div className="absolute inset-0 z-0">
<img alt="Luxury Mansion" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2075&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/70 to-brand-black"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12">
<span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">Welcome to Excellence</span>
<h1 className="text-5xl md:text-7xl font-serif text-white font-medium tracking-tight mb-6 leading-tight">
                Find Your Dream <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-goldlight">Luxury Property</span>
</h1>
<p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mb-12">
                Exclusive properties. Trusted advisors. Premium living experiences tailored for the discerning few.
            </p>

<div className="w-full max-w-5xl bg-brand-dark/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-6 shadow-2xl">
<div className="flex flex-col md:flex-row items-center gap-4">

<div className="relative flex items-center w-full md:w-auto bg-black/40 rounded-lg p-1 border border-white/5">
<button className="w-1/2 md:w-24 py-2 text-base font-medium text-black bg-brand-gold rounded-md transition-all">Buy</button>
<button className="w-1/2 md:w-24 py-2 text-base font-medium text-gray-400 hover:text-white transition-all">Rent</button>
</div>
<div className="h-px md:h-12 w-full md:w-px bg-white/10 hidden md:block"></div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
<div className="relative">
<i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" data-lucide="map-pin"></i>
<input className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Location or City" type="text"/>
</div>
<div className="relative">
<i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" data-lucide="home"></i>
<select className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-base text-gray-400 appearance-none focus:outline-none focus:border-brand-gold transition-colors cursor-pointer">
<option className="bg-brand-dark text-white" value="">Property Type</option>
<option className="bg-brand-dark text-white" value="villa">Luxury Villa</option>
<option className="bg-brand-dark text-white" value="penthouse">Penthouse</option>
<option className="bg-brand-dark text-white" value="apartment">Premium Apartment</option>
</select>
<i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="relative col-span-1 md:col-span-2 flex items-center gap-4 px-2">
<div className="w-full">
<div className="flex justify-between text-sm text-gray-400 mb-2">
<span>Price Range</span>
<span className="text-brand-gold font-medium">₹5Cr - ₹50Cr+</span>
</div>
<input className="w-full" max="50" min="5" type="range" value="25"/>
</div>
</div>
</div>
<button className="w-full md:w-auto bg-brand-gold hover:bg-brand-goldlight text-black px-8 py-3.5 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 group">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="search"></i>
<span>Search</span>
</button>
</div>
</div>
</div>
</div>

<section className="py-24 bg-brand-black" id="properties">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-serif text-white font-medium tracking-tight mb-4">Featured Properties</h2>
<div className="w-24 h-1 bg-brand-gold rounded-full"></div>
</div>
<a className="text-brand-gold hover:text-white text-lg font-medium flex items-center gap-2 transition-colors" href="#">
                    View All Properties <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-brand-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)]">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-sm px-3 py-1 rounded text-sm text-white font-medium border border-white/10">
                            For Sale
                        </div>
</div>
<div className="p-6">
<div className="text-2xl text-brand-gold font-medium mb-2 font-serif tracking-tight">₹ 15.5 Cr</div>
<h3 className="text-xl text-white font-medium mb-3 truncate">The Royal Crest Villa</h3>
<p className="text-gray-400 text-base mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-brand-gold" data-lucide="map-pin"></i> Banjara Hills, Hyderabad
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4 mb-6 text-gray-300">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="bed-double"></i> <span className="text-base">5 BHK</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="bath"></i> <span className="text-base">6 Baths</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="maximize"></i> <span className="text-base">8,500 sqft</span></div>
</div>
<button className="w-full py-3 border border-brand-gold text-brand-gold rounded-lg text-base font-medium group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                            View Details
                        </button>
</div>
</div>

<div className="group bg-brand-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)]">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Penthouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-sm px-3 py-1 rounded text-sm text-white font-medium border border-white/10">
                            For Rent
                        </div>
</div>
<div className="p-6">
<div className="text-2xl text-brand-gold font-medium mb-2 font-serif tracking-tight">₹ 4.5 L / month</div>
<h3 className="text-xl text-white font-medium mb-3 truncate">Skyline Penthouse Suites</h3>
<p className="text-gray-400 text-base mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-brand-gold" data-lucide="map-pin"></i> Worli Sea Face, Mumbai
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4 mb-6 text-gray-300">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="bed-double"></i> <span className="text-base">4 BHK</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="bath"></i> <span className="text-base">4 Baths</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="maximize"></i> <span className="text-base">5,200 sqft</span></div>
</div>
<button className="w-full py-3 border border-brand-gold text-brand-gold rounded-lg text-base font-medium group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                            View Details
                        </button>
</div>
</div>

<div className="group bg-brand-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)]">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Mansion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-sm px-3 py-1 rounded text-sm text-white font-medium border border-white/10">
                            For Sale
                        </div>
</div>
<div className="p-6">
<div className="text-2xl text-brand-gold font-medium mb-2 font-serif tracking-tight">₹ 28.0 Cr</div>
<h3 className="text-xl text-white font-medium mb-3 truncate">Oakwood Estate Manor</h3>
<p className="text-gray-400 text-base mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-brand-gold" data-lucide="map-pin"></i> DLF Phase 5, Gurgaon
                        </p>
<div className="flex items-center justify-between border-t border-white/5 pt-4 mb-6 text-gray-300">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="bed-double"></i> <span className="text-base">6 BHK</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="bath"></i> <span className="text-base">7 Baths</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-gray-500" data-lucide="maximize"></i> <span className="text-base">12,000 sqft</span></div>
</div>
<button className="w-full py-3 border border-brand-gold text-brand-gold rounded-lg text-base font-medium group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                            View Details
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] overflow-hidden" id="projects">
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
<span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-2 block">Exclusive Developments</span>
<h2 className="text-4xl md:text-5xl font-serif text-white font-medium tracking-tight mb-4">Signature Projects</h2>
<div className="w-24 h-1 bg-brand-gold rounded-full mx-auto"></div>
</div>
<div className="relative w-full flex overflow-hidden">

<div className="flex w-[200%] animate-infinite-scroll">

<div className="flex w-1/2 justify-around items-center px-4 gap-6">
<div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="text-brand-gold font-medium text-sm tracking-widest mb-2 uppercase">Pre-Launch</div>
<h3 className="text-3xl font-serif text-white mb-2">The Zenith Towers</h3>
<p className="text-gray-300 text-base mb-4"><i className="inline w-4 h-4 mr-1" data-lucide="map-pin"></i> Lower Parel, Mumbai</p>
<div className="flex justify-between items-center">
<span className="text-xl text-white font-medium">Starts ₹8 Cr</span>
<button className="bg-white/10 hover:bg-brand-gold hover:text-black backdrop-blur-md p-3 rounded-full transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
<div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="text-brand-gold font-medium text-sm tracking-widest mb-2 uppercase">Ready to Move</div>
<h3 className="text-3xl font-serif text-white mb-2">Aura Residences</h3>
<p className="text-gray-300 text-base mb-4"><i className="inline w-4 h-4 mr-1" data-lucide="map-pin"></i> Whitefield, Bangalore</p>
<div className="flex justify-between items-center">
<span className="text-xl text-white font-medium">Starts ₹3.5 Cr</span>
<button className="bg-white/10 hover:bg-brand-gold hover:text-black backdrop-blur-md p-3 rounded-full transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
<div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="text-brand-gold font-medium text-sm tracking-widest mb-2 uppercase">Under Construction</div>
<h3 className="text-3xl font-serif text-white mb-2">Elysium Greens</h3>
<p className="text-gray-300 text-base mb-4"><i className="inline w-4 h-4 mr-1" data-lucide="map-pin"></i> Vasant Vihar, Delhi</p>
<div className="flex justify-between items-center">
<span className="text-xl text-white font-medium">Starts ₹12 Cr</span>
<button className="bg-white/10 hover:bg-brand-gold hover:text-black backdrop-blur-md p-3 rounded-full transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="flex w-1/2 justify-around items-center px-4 gap-6">
<div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="text-brand-gold font-medium text-sm tracking-widest mb-2 uppercase">Pre-Launch</div>
<h3 className="text-3xl font-serif text-white mb-2">The Zenith Towers</h3>
<p className="text-gray-300 text-base mb-4"><i className="inline w-4 h-4 mr-1" data-lucide="map-pin"></i> Lower Parel, Mumbai</p>
<div className="flex justify-between items-center">
<span className="text-xl text-white font-medium">Starts ₹8 Cr</span>
<button className="bg-white/10 hover:bg-brand-gold hover:text-black backdrop-blur-md p-3 rounded-full transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
<div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="text-brand-gold font-medium text-sm tracking-widest mb-2 uppercase">Ready to Move</div>
<h3 className="text-3xl font-serif text-white mb-2">Aura Residences</h3>
<p className="text-gray-300 text-base mb-4"><i className="inline w-4 h-4 mr-1" data-lucide="map-pin"></i> Whitefield, Bangalore</p>
<div className="flex justify-between items-center">
<span className="text-xl text-white font-medium">Starts ₹3.5 Cr</span>
<button className="bg-white/10 hover:bg-brand-gold hover:text-black backdrop-blur-md p-3 rounded-full transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
<div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden group flex-shrink-0">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="text-brand-gold font-medium text-sm tracking-widest mb-2 uppercase">Under Construction</div>
<h3 className="text-3xl font-serif text-white mb-2">Elysium Greens</h3>
<p className="text-gray-300 text-base mb-4"><i className="inline w-4 h-4 mr-1" data-lucide="map-pin"></i> Vasant Vihar, Delhi</p>
<div className="flex justify-between items-center">
<span className="text-xl text-white font-medium">Starts ₹12 Cr</span>
<button className="bg-white/10 hover:bg-brand-gold hover:text-black backdrop-blur-md p-3 rounded-full transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-black" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-serif text-white font-medium tracking-tight mb-4">Premium Services</h2>
<p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-6">Beyond finding your property, we curate your living experience through our network of elite partners.</p>
<div className="w-24 h-1 bg-brand-gold rounded-full mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/50 transition-colors duration-300 group">
<div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center border border-white/10 mb-6 group-hover:bg-brand-gold/10 transition-colors">
<i className="w-8 h-8 text-brand-gold" data-lucide="sofa"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">Interior Designers</h3>
<p className="text-base text-gray-400 leading-relaxed">Collaborate with award-winning designers to craft bespoke interiors that reflect your status.</p>
</div>

<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/50 transition-colors duration-300 group">
<div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center border border-white/10 mb-6 group-hover:bg-brand-gold/10 transition-colors">
<i className="w-8 h-8 text-brand-gold" data-lucide="paint-roller"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">Luxury Painters</h3>
<p className="text-base text-gray-400 leading-relaxed">Premium finishes, textures, and artistry to bring your walls to life with elegance.</p>
</div>

<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/50 transition-colors duration-300 group">
<div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center border border-white/10 mb-6 group-hover:bg-brand-gold/10 transition-colors">
<i className="w-8 h-8 text-brand-gold" data-lucide="hammer"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">General Contractors</h3>
<p className="text-base text-gray-400 leading-relaxed">Trusted experts for seamless renovations, modifications, and high-end construction.</p>
</div>

<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/50 transition-colors duration-300 group">
<div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center border border-white/10 mb-6 group-hover:bg-brand-gold/10 transition-colors">
<i className="w-8 h-8 text-brand-gold" data-lucide="lamp"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">Furniture Vendors</h3>
<p className="text-base text-gray-400 leading-relaxed">Access to exclusive imported and custom furniture pieces to complete your home.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-serif text-white font-medium tracking-tight mb-4">Client Experiences</h2>
<div className="w-24 h-1 bg-brand-gold rounded-full mx-auto"></div>
</div>
<div className="relative w-full flex overflow-hidden">
<div className="flex w-[200%] animate-infinite-scroll-slow">

<div className="flex w-1/2 justify-around items-center px-4 gap-6">
<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 w-[450px] flex-shrink-0">
<div className="flex text-brand-gold mb-4 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 font-light italic mb-6 leading-relaxed">"Navkar Dreams redefined our property search. Their exclusivity and understanding of luxury are unparalleled. Found exactly what we were looking for."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
</div>
<div>
<h4 className="text-white font-medium text-base">Rajiv Singhania</h4>
<span className="text-sm text-brand-gold">Industrialist</span>
</div>
</div>
</div>
<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 w-[450px] flex-shrink-0">
<div className="flex text-brand-gold mb-4 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 font-light italic mb-6 leading-relaxed">"The level of professionalism and the curated portfolio of properties made investing in real estate a seamless and premium experience."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=47"/>
</div>
<div>
<h4 className="text-white font-medium text-base">Anita Desai</h4>
<span className="text-sm text-brand-gold">Tech Executive</span>
</div>
</div>
</div>
<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 w-[450px] flex-shrink-0">
<div className="flex text-brand-gold mb-4 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 font-light italic mb-6 leading-relaxed">"From viewing to paperwork, everything was handled with utmost confidentiality and class. A true luxury real estate partner."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<h4 className="text-white font-medium text-base">Vikram Mehta</h4>
<span className="text-sm text-brand-gold">Investment Banker</span>
</div>
</div>
</div>
</div>

<div className="flex w-1/2 justify-around items-center px-4 gap-6">
<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 w-[450px] flex-shrink-0">
<div className="flex text-brand-gold mb-4 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 font-light italic mb-6 leading-relaxed">"Navkar Dreams redefined our property search. Their exclusivity and understanding of luxury are unparalleled. Found exactly what we were looking for."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
</div>
<div>
<h4 className="text-white font-medium text-base">Rajiv Singhania</h4>
<span className="text-sm text-brand-gold">Industrialist</span>
</div>
</div>
</div>
<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 w-[450px] flex-shrink-0">
<div className="flex text-brand-gold mb-4 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 font-light italic mb-6 leading-relaxed">"The level of professionalism and the curated portfolio of properties made investing in real estate a seamless and premium experience."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=47"/>
</div>
<div>
<h4 className="text-white font-medium text-base">Anita Desai</h4>
<span className="text-sm text-brand-gold">Tech Executive</span>
</div>
</div>
</div>
<div className="bg-brand-dark p-8 rounded-2xl border border-white/5 w-[450px] flex-shrink-0">
<div className="flex text-brand-gold mb-4 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-300 font-light italic mb-6 leading-relaxed">"From viewing to paperwork, everything was handled with utmost confidentiality and class. A true luxury real estate partner."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<h4 className="text-white font-medium text-base">Vikram Mehta</h4>
<span className="text-sm text-brand-gold">Investment Banker</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-black relative">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-serif text-white font-medium tracking-tight mb-6">List Your Property With Us</h2>
<p className="text-xl text-gray-400 font-light mb-8">Tap into our exclusive network of high-net-worth individuals. We ensure your property is presented to the right audience with unmatched marketing strategies.</p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20 mt-1">
<i className="w-5 h-5 text-brand-gold" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-lg text-white font-medium">Verified Buyers</h4>
<p className="text-base text-gray-400">Strict vetting process for all potential clients.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20 mt-1">
<i className="w-5 h-5 text-brand-gold" data-lucide="camera"></i>
</div>
<div>
<h4 className="text-lg text-white font-medium">Premium Photography</h4>
<p className="text-base text-gray-400">Professional shoots to highlight luxury features.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="bg-brand-gold/10 p-2 rounded-full border border-brand-gold/20 mt-1">
<i className="w-5 h-5 text-brand-gold" data-lucide="globe"></i>
</div>
<div>
<h4 className="text-lg text-white font-medium">Global Reach</h4>
<p className="text-base text-gray-400">Marketing across international premium channels.</p>
</div>
</li>
</ul>
</div>

<div className="bg-brand-dark p-8 md:p-10 rounded-2xl border border-white/5 relative z-10 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-400 mb-2">Owner Name</label>
<input className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
<input className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="+91 98765 43210" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-400 mb-2">Property Type</label>
<div className="relative">
<select className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-gold transition-colors cursor-pointer">
<option>Select Property Type</option>
<option>Villa</option>
<option>Penthouse</option>
<option>Independent House</option>
</select>
<i className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
<input className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="e.g. Bandra West" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-400 mb-2">Expected Price</label>
<input className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="₹ Amount" type="text"/>
</div>
</div>
<button className="w-full bg-brand-gold hover:bg-brand-goldlight text-black font-medium text-lg py-4 rounded-lg transition-colors mt-4" type="button">
                            Submit Property Details
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-2 lg:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="relative flex items-center justify-center w-10 h-10 border border-brand-gold rounded-sm">
<span className="font-serif text-xl text-brand-gold font-medium tracking-tight">ND</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-xl text-white tracking-tight leading-none">NAVKAR DREAMS</span>
</div>
</div>
<p className="text-base text-gray-400 mb-6 font-light">
                        Curating the finest luxury properties for the extraordinary. Your journey to elevated living begins here.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
</div>
</div>

<div>
<h4 className="text-lg text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-brand-gold transition-colors" href="#">Featured Properties</a></li>
<li><a className="text-base text-gray-400 hover:text-brand-gold transition-colors" href="#">New Projects</a></li>
<li><a className="text-base text-gray-400 hover:text-brand-gold transition-colors" href="#">Luxury Services</a></li>
<li><a className="text-base text-gray-400 hover:text-brand-gold transition-colors" href="#">List Your Property</a></li>
<li><a className="text-base text-gray-400 hover:text-brand-gold transition-colors" href="#">Market Insights (Blog)</a></li>
</ul>
</div>

<div>
<h4 className="text-lg text-white font-medium mb-6">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span className="text-base text-gray-400">Level 43, Tower 1, <br/>Luxury Hub, Mumbai 400001</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-gold flex-shrink-0" data-lucide="phone"></i>
<span className="text-base text-gray-400">+91 98765 43210</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-gold flex-shrink-0" data-lucide="mail"></i>
<span className="text-base text-gray-400">concierge@navkardreams.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-lg text-white font-medium mb-6">Newsletter</h4>
<p className="text-base text-gray-400 mb-4 font-light">Subscribe for exclusive listings and market reports.</p>
<form className="flex flex-col gap-3">
<input className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors text-base" placeholder="Your email address" type="email"/>
<button className="w-full bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-medium text-base py-3 rounded-lg transition-colors" type="button">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">© 2024 Navkar Dreams. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
