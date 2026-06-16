import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#F9F9F7', // Ivory/Off-white custom base
100: '#F0F0EB',
200: '#E2E2DB',
800: '#2D2D2A',
900: '#1C1C1A', // Charcoal
},
bronze: {
500: '#A68A64', // Muted brass/gold
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-serif text-xl tracking-widest uppercase text-stone-900 z-50 flex items-center gap-2" href="#">
<span className="w-8 h-8 border border-stone-800 flex items-center justify-center text-xs">V</span>
                Viraasat Living
            </a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-stone-900 transition-colors" href="#services">Expertise</a>
<a className="hover:text-stone-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="px-6 py-2.5 bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors duration-300 text-xs uppercase tracking-widest" href="#contact">
                    Book Consultation
                </a>
</div>

<button className="md:hidden text-stone-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Luxury Living Room" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-50/30 via-stone-50/10 to-stone-50"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<span className="inline-block mb-6 text-xs font-medium tracking-[0.2em] uppercase text-stone-600 fade-in-up">
                Interior Design Studio • Siliguri
            </span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 tracking-tight leading-[1.1] mb-8 fade-in-up delay-100">
                Curating timeless <br/> <i className="font-light italic text-stone-600">living spaces</i>.
            </h1>
<p className="max-w-xl mx-auto text-stone-600 text-sm md:text-base leading-relaxed mb-10 fade-in-up delay-200 font-light">
                We blend architectural precision with bespoke craftsmanship to create sophisticated interiors that reflect your legacy.
            </p>
<div className="fade-in-up delay-300 flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="px-8 py-3 bg-stone-900 text-stone-50 text-xs uppercase tracking-widest hover:bg-stone-800 transition-all" href="#portfolio">
                    View Projects
                </a>
<a className="group flex items-center gap-2 px-8 py-3 border border-stone-300 text-stone-900 text-xs uppercase tracking-widest hover:border-stone-900 transition-all bg-white/50 backdrop-blur-sm" href="#contact">
                    Enquire Now
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-400">
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 bg-stone-50 border-b border-stone-200/60" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight leading-tight mb-8">
                        Design that <br/> transcends trends.
                    </h2>
<div className="w-12 h-px bg-bronze-500 mb-8"></div>
<img alt="Detail" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-7 flex flex-col justify-between h-full pt-4">
<div className="space-y-8">
<p className="text-lg md:text-xl text-stone-800 font-light leading-relaxed">
                            At Viraasat Living, we believe a home is more than a structure; it is a canvas for your life's most cherished moments. Based in Siliguri, our studio approaches every project with an architectural lens, prioritizing flow, light, and materiality.
                        </p>
<p className="text-sm md:text-base text-stone-500 font-light leading-relaxed">
                            From the meticulous selection of brass fittings to the precise grain of custom joinery, we obsess over details that others overlook. Our philosophy is rooted in "Quiet Luxury"—spaces that don't shout, but whisper sophistication through quality and restraint.
                        </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 border-t border-stone-200 pt-10">
<div>
<span className="block text-3xl font-serif text-stone-900 mb-1">10+</span>
<span className="text-xs uppercase tracking-wider text-stone-500">Years Experience</span>
</div>
<div>
<span className="block text-3xl font-serif text-stone-900 mb-1">100%</span>
<span className="text-xs uppercase tracking-wider text-stone-500">Bespoke Design</span>
</div>
<div>
<span className="block text-3xl font-serif text-stone-900 mb-1">50+</span>
<span className="text-xs uppercase tracking-wider text-stone-500">Luxury Homes</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
<div>
<span className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-3 block">Our Expertise</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Comprehensive Design Solutions</h2>
</div>
<a className="text-sm text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-1 transition-colors" href="#contact">Download Service Brochure</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-100 border border-stone-100">

<div className="bg-white p-10 md:p-14 group hover:bg-stone-50 transition-colors duration-500">
<div className="w-10 h-10 mb-8 text-stone-400 group-hover:text-bronze-500 transition-colors">
<iconify-icon icon="lucide:pencil-ruler" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-4 tracking-tight">Full Home Interiors</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        End-to-end conceptualization and execution for residential villas and apartments. We manage the entire lifecycle from blueprint to finishing touches.
                    </p>
</div>

<div className="bg-white p-10 md:p-14 group hover:bg-stone-50 transition-colors duration-500">
<div className="w-10 h-10 mb-8 text-stone-400 group-hover:text-bronze-500 transition-colors">
<iconify-icon icon="lucide:armchair" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-4 tracking-tight">Custom Furniture</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Bespoke furniture design tailored to your space's dimensions and aesthetic. Crafted by local artisans using premium hardwoods and fabrics.
                    </p>
</div>

<div className="bg-white p-10 md:p-14 group hover:bg-stone-50 transition-colors duration-500">
<div className="w-10 h-10 mb-8 text-stone-400 group-hover:text-bronze-500 transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-4 tracking-tight">Renovation Consulting</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Transforming existing structures with structural integrity and modern aesthetics. We breathe new life into aged properties in West Bengal.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-center">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Selected Works</h2>
<div className="hidden md:flex gap-6 text-sm text-stone-500">
<span className="text-stone-900 border-b border-stone-900 pb-1 cursor-pointer">All</span>
<span className="hover:text-stone-900 cursor-pointer transition-colors">Residential</span>
<span className="hover:text-stone-900 cursor-pointer transition-colors">Commercial</span>
<span className="hover:text-stone-900 cursor-pointer transition-colors">Renovation</span>
</div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative md:col-span-2 aspect-[16/9] overflow-hidden bg-stone-200">
<img alt="The White Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-white font-serif text-2xl tracking-wide mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">The Verdant Villa</h3>
<p className="text-white/80 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Siliguri • Full Interior</p>
</div>
</div>

<div className="group relative md:row-span-2 aspect-[3/4] md:aspect-auto overflow-hidden bg-stone-200">
<img alt="Modern Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-white font-serif text-2xl tracking-wide mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Mittal Residence</h3>
<p className="text-white/80 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Kitchen &amp; Dining</p>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-stone-200">
<img alt="Minimal Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-white font-serif text-xl tracking-wide mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Project K</h3>
<p className="text-white/80 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Master Suite</p>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-stone-200">
<img alt="Living Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-white font-serif text-xl tracking-wide mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Hill Cart Road Office</h3>
<p className="text-white/80 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Commercial</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 text-sm tracking-wide hover:opacity-70 transition-opacity" href="#">
                    View Entire Portfolio <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<span className="text-bronze-500 text-xs font-medium tracking-[0.2em] uppercase">Renovation Expertise</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight">Reimagining spaces,<br/>restoring value.</h2>
<p className="text-stone-400 font-light leading-relaxed max-w-md">
                        We specialize in transforming outdated layouts into modern, functional masterpieces. See the difference thoughtful design makes.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-4 text-sm font-light text-stone-300">
<iconify-icon className="text-bronze-500" icon="lucide:check"></iconify-icon> Structural Optimization
                        </li>
<li className="flex items-center gap-4 text-sm font-light text-stone-300">
<iconify-icon className="text-bronze-500" icon="lucide:check"></iconify-icon> Light Enhancement
                        </li>
<li className="flex items-center gap-4 text-sm font-light text-stone-300">
<iconify-icon className="text-bronze-500" icon="lucide:check"></iconify-icon> Premium Finishes
                        </li>
</ul>
</div>

<div className="relative w-full aspect-[4/3] bg-stone-800 p-2">
<div className="relative w-full h-full flex overflow-hidden">

<div className="w-1/2 h-full relative border-r-2 border-white">
<img alt="Before" className="absolute inset-0 h-full w-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-black/60 px-3 py-1 text-[10px] tracking-widest uppercase text-white backdrop-blur-sm">Before</span>
</div>

<div className="w-1/2 h-full relative">
<img alt="After" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] tracking-widest uppercase text-stone-900 backdrop-blur-sm">After</span>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl z-10">
<iconify-icon className="text-stone-900" icon="lucide:arrow-left-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-b border-stone-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center gap-1 mb-6 text-bronze-500">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<h3 className="font-serif text-2xl md:text-3xl text-stone-900 leading-relaxed italic mb-8">
                "Viraasat Living transformed our ancestral home in Siliguri into a modern sanctuary without losing its soul. The attention to detail in the woodwork and lighting was exceptional."
            </h3>
<div>
<p className="text-sm font-semibold tracking-wide text-stone-900">Mr. Rajesh Agarwal</p>
<p className="text-xs text-stone-500 mt-1">Residential Project, Hakim Para</p>
</div>
</div>
</section>

<footer className="bg-stone-100 pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

<div>
<h2 className="font-serif text-4xl text-stone-900 tracking-tight mb-6">Let's discuss your <br/>dream space.</h2>
<p className="text-stone-500 font-light mb-10 max-w-sm">
                        Schedule a consultation to explore the possibilities of your home or commercial space.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-stone-400" icon="lucide:map-pin" width="20"></iconify-icon>
<div className="text-sm text-stone-800 font-light">
<span className="block font-medium mb-1">Viraasat Studio</span>
                                Sevoke Road, Near Cosmos Mall<br/>
                                Siliguri, West Bengal 734001
                            </div>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400" icon="lucide:phone" width="20"></iconify-icon>
<a className="text-sm text-stone-800 hover:text-bronze-500 transition-colors" href="tel:+919800000000">+91 98000 00000</a>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400" icon="lucide:mail" width="20"></iconify-icon>
<a className="text-sm text-stone-800 hover:text-bronze-500 transition-colors" href="mailto:hello@viraasatliving.com">hello@viraasatliving.com</a>
</div>
</div>
<div className="mt-10 flex gap-4">
<button className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 text-xs uppercase tracking-widest hover:bg-stone-800 transition-all">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon> WhatsApp
                        </button>
</div>
</div>

<div className="bg-white p-8 md:p-10 shadow-sm border border-stone-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Name</label>
<input className="w-full bg-transparent border-b border-stone-200 py-2 text-stone-900 focus:border-stone-800 focus:outline-none transition-colors font-light" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Phone</label>
<input className="w-full bg-transparent border-b border-stone-200 py-2 text-stone-900 focus:border-stone-800 focus:outline-none transition-colors font-light" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Service Type</label>
<select className="w-full bg-transparent border-b border-stone-200 py-2 text-stone-900 focus:border-stone-800 focus:outline-none transition-colors font-light appearance-none rounded-none">
<option>Full Home Interior</option>
<option>Renovation</option>
<option>Commercial Design</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Message</label>
<textarea className="w-full bg-transparent border-b border-stone-200 py-2 text-stone-900 focus:border-stone-800 focus:outline-none transition-colors font-light resize-none" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-stone-900 text-white text-xs uppercase tracking-widest hover:bg-stone-800 transition-all mt-4" type="button">
                            Send Enquiry
                        </button>
</form>
</div>
</div>

<div className="w-full h-64 bg-stone-200 grayscale mb-16 overflow-hidden">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.39626305948!2d88.3697!3d26.7139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44114f6475d3b%3A0x6a2c271837c768c!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%)'}} width="100%"></iframe>
</div>

<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 font-light gap-4">
<p>© 2024 Viraasat Living. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-900 transition-colors" href="#">Facebook</a>
<a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
