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
forest: '#1a2e1a',
moss: '#2F4F2F',
sage: '#7d9171',
gold: '#C5A065',
silver: '#c4cfc0',
cream: '#F9F8F6',
white: '#ffffff',
border: 'rgba(26, 46, 26, 0.08)',
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['DM Sans', 'sans-serif'],
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        lucide.createIcons();
    
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
      

<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b border-border bg-cream/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center text-forest group-hover:text-gold transition-colors duration-500">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 40 40">

<path className="opacity-100" d="M20 38C20 38 35 28 35 14C35 8 30 2 20 2C10 2 5 8 5 14C5 28 20 38 20 38Z" strokeLinejoin="round"></path>

<line x1="20" x2="20" y1="2" y2="38"></line>

<path d="M20 10L10 16"></path>
<path d="M20 18L8 24"></path>
<path d="M20 26L12 30"></path>

<path d="M20 10L30 16"></path>
<path d="M20 18L32 24"></path>
<path d="M20 26L28 30"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="font-serif text-lg tracking-tight font-medium text-forest uppercase leading-none">
                        Silver Leaf
                    </span>
<span className="text-[0.6rem] uppercase tracking-[0.2em] text-sage leading-none mt-1">Refinishing</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-forest/70">
<a className="hover:text-forest transition-colors" href="#services">Services</a>
<a className="hover:text-forest transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-forest transition-colors" href="#about">Our Story</a>
<a className="bg-forest text-cream px-5 py-2 rounded-sm hover:bg-forest/90 transition-all duration-300 tracking-wide border border-transparent hover:shadow-lg hover:shadow-forest/10" href="#contact">
                    Book Estimate
                </a>
</div>

<button className="md:hidden text-forest p-2">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Pristine Hardwood Floor" className="w-full h-full object-cover" src="https://storage.googleapis.com/msgsndr/tebhevwfwW8kS8peb2m1/media/692b89feaaad911075c865a2.jpeg"/>
<div className="absolute inset-0 bg-cream/20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12 md:pt-0">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-forest/10 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
<span className="text-xs font-medium tracking-wider uppercase text-forest/80">Vancouver's Flooring Authorities</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-forest font-medium mb-8 tracking-tighter leading-[0.95]">
                    The art of <br/>
<span className="text-forest/90 italic font-normal">restoration.</span>
</h1>
<p className="text-lg md:text-xl text-forest/70 font-light max-w-lg mb-10 leading-relaxed text-balance">
                    We breathe new life into tired hardwood and curate eco-resilient alternatives. Craftsmanship for homes and businesses that value quality over speed.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-forest text-cream px-8 py-4 rounded-sm text-sm font-medium hover:bg-forest/90 transition-all shadow-xl shadow-forest/10 flex items-center justify-center gap-2 group" href="#contact">
                        Start Your Project
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="bg-white text-forest px-8 py-4 rounded-sm text-sm font-medium hover:bg-cream border border-forest/5 transition-all flex items-center justify-center gap-2 shadow-lg shadow-forest/5" href="#portfolio">
                        View Gallery
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-forest/5 bg-white/30 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="flex flex-wrap gap-8 md:gap-16 items-center text-forest/60 text-xs tracking-widest uppercase font-medium">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gold" data-lucide="award"></i>
<span>Bona Certified</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gold" data-lucide="shield-check"></i>
<span>Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gold" data-lucide="star"></i>
<span>5-Star Rated</span>
</div>
<div className="hidden md:block w-px h-8 bg-forest/10"></div>
<p className="hidden md:block normal-case tracking-normal opacity-70">Restoring heritage homes in Kitsilano, Shaughnessy, and West Vancouver since 1999.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-4 block">Expertise</span>
<h2 className="font-serif text-4xl text-forest tracking-tight mb-6">Flooring perfected.</h2>
<p className="text-forest/60 font-light leading-relaxed mb-8">
                        We specialize in the mastery of wood, but we also understand the practical needs of modern business. From heritage restoration to high-performance eco-vinyls, we deliver the right surface for your space.
                    </p>
<a className="text-sm font-medium text-forest border-b border-forest/30 pb-1 hover:border-gold transition-colors inline-flex items-center gap-2" href="#portfolio">
                        View Our Work <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>

<div className="lg:col-span-8 grid md:grid-cols-2 gap-4">

<div className="group p-8 rounded-sm bg-cream border border-transparent hover:border-border hover:bg-white hover:shadow-2xl hover:shadow-forest/5 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
<i data-lucide="eraser" strokeWidth="1.2"></i>
</div>
<h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">Dustless Refinishing</h3>
<p className="text-sm text-forest/60 leading-relaxed">
                            Using state-of-the-art HEPA containment systems to strip old finishes without coating your home in dust.
                        </p>
</div>

<div className="group p-8 rounded-sm bg-cream border border-transparent hover:border-border hover:bg-white hover:shadow-2xl hover:shadow-forest/5 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
<i data-lucide="layers" strokeWidth="1.2"></i>
</div>
<h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">Hardwood Installation</h3>
<p className="text-sm text-forest/60 leading-relaxed">
                            Precision installation of raw and pre-finished hardwood, herringbone, and chevron patterns.
                        </p>
</div>

<div className="group p-8 rounded-sm bg-cream border border-transparent hover:border-border hover:bg-white hover:shadow-2xl hover:shadow-forest/5 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
<i data-lucide="leaf" strokeWidth="1.2"></i>
</div>
<h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">Architectural Vinyl</h3>
<p className="text-sm text-forest/60 leading-relaxed">
                            Embracing the new. For businesses and busy homes, we install eco-friendly LVP that mimics the natural beauty of wood so perfectly, it's virtually invisible.
                        </p>
</div>

<div className="group p-8 rounded-sm bg-cream border border-transparent hover:border-border hover:bg-white hover:shadow-2xl hover:shadow-forest/5 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
<i data-lucide="hammer" strokeWidth="1.2"></i>
</div>
<h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">Repair &amp; Restoration</h3>
<p className="text-sm text-forest/60 leading-relaxed">
                            From seamless lace-in patching to custom staining. We match species and grain to make damage disappear.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-forest text-cream relative overflow-hidden" id="portfolio">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-4 block">Selected Works</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">From worn to wonderful.</h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-forest transition-colors">
<i data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-forest transition-colors">
<i data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative group">
<div className="aspect-[4/3] overflow-hidden rounded-sm relative">

<img alt="Restored Oak Floor After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/msgsndr/tebhevwfwW8kS8peb2m1/media/692cc8452b865e12b3f41e12.png"/>

<div className="absolute bottom-6 left-6 w-32 md:w-48 aspect-square border-2 border-white/20 shadow-2xl rounded-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
<img alt="Damaged Floor Before" className="w-full h-full object-cover grayscale opacity-80" src="https://storage.googleapis.com/msgsndr/tebhevwfwW8kS8peb2m1/media/692cc845aaad91061cf3d9d2.png"/>
<span className="absolute top-2 left-2 bg-black/60 backdrop-blur text-[10px] uppercase tracking-widest px-2 py-1 rounded text-white font-medium">Before</span>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-6 opacity-60">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="text-sm tracking-wide uppercase">Shaughnessy Heritage Home</span>
</div>
<h3 className="font-serif text-3xl mb-6">1920s White Oak Restoration</h3>
<p className="text-cream/70 font-light leading-relaxed mb-8">
                        Hidden under carpet for 40 years, this original white oak floor was stained with adhesive and water damage. We performed a deep sand, replaced 15 damaged boards with reclaimed oak of the same era, and finished with a water-based invisible sealer to maintain the raw, organic look requested by the designer.
                    </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-white/10 pt-8">
<div>
<span className="block text-xs uppercase tracking-widest text-gold mb-1">Wood Species</span>
<span className="font-serif text-lg">Rift &amp; Quartered Oak</span>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gold mb-1">Finish</span>
<span className="font-serif text-lg">Bona Traffic HD Raw</span>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gold mb-1">Duration</span>
<span className="font-serif text-lg">5 Days</span>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gold mb-1">Service</span>
<span className="font-serif text-lg">Refinish &amp; Repair</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream border-b border-border" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-200">
<img alt="Craftsman working on floor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://storage.googleapis.com/msgsndr/tebhevwfwW8kS8peb2m1/media/692cc8451f60a133e33a52ec.png"/>
</div>

<div className="absolute -bottom-6 -right-6 w-2/3 h-1/2 border border-forest/20 -z-10"></div>
</div>
<div>
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-4 block">The Craftsman</span>
<h2 className="font-serif text-4xl text-forest tracking-tight mb-6">Built on honest work.</h2>
<div className="space-y-6 text-forest/70 font-light text-lg leading-relaxed">
<p>
                            Born and raised in Atlanta, Jarome made Vancouver home and built Silver Leaf on a foundation of honest work, community service, and genuine care for people.
                        </p>
<p>
                            The craftsmanship he brings was passed down through years of hands-on training. In an industry full of shortcuts, Jarome insists on the long way round if it means a better result. Silver Leaf isn't just about floors; it's about respecting the home and the people who live in it.
                        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-forest/10">
<div>
<div className="text-gold mb-3"><i className="w-5 h-5" data-lucide="gem" strokeWidth="1.5"></i></div>
<h4 className="font-serif text-lg text-forest mb-1">Dedication</h4>
<p className="text-xs text-forest/60 leading-normal uppercase tracking-wide">Unwavering commitment to quality.</p>
</div>
<div>
<div className="text-gold mb-3"><i className="w-5 h-5" data-lucide="heart-handshake" strokeWidth="1.5"></i></div>
<h4 className="font-serif text-lg text-forest mb-1">Community</h4>
<p className="text-xs text-forest/60 leading-normal uppercase tracking-wide">Built on trust and local service.</p>
</div>
<div>
<div className="text-gold mb-3"><i className="w-5 h-5" data-lucide="award" strokeWidth="1.5"></i></div>
<h4 className="font-serif text-lg text-forest mb-1">Craftsmanship</h4>
<p className="text-xs text-forest/60 leading-normal uppercase tracking-wide">Mastery over speed.</p>
</div>
</div>
<div className="mt-10 flex items-center gap-4">
<img alt="Jarome Glanton" className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-white shadow-lg" src="https://storage.googleapis.com/msgsndr/tebhevwfwW8kS8peb2m1/media/692ccaf42b865e45abf4a0fb.png"/>
<div>
<p className="font-serif text-forest font-medium">Jarome Glanton</p>
<p className="text-xs uppercase tracking-wider text-sage">Founder &amp; Lead Tech</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-forest text-cream relative overflow-hidden" id="newsletter">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#C5A065 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-4 block">The Grain</span>
<h2 className="font-serif text-4xl text-white tracking-tight mb-6">Seasonal care for your sanctuary.</h2>
<p className="text-white/60 text-lg font-light mb-10 max-w-2xl mx-auto">
                Join our mailing list for expert maintenance tips, seasonal wood care advice, and exclusive priority access to our schedule before it opens to the public.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/40 px-5 py-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Email address" type="email"/>
<button className="bg-gold text-white px-8 py-3 rounded-sm font-medium hover:bg-gold/90 transition-colors shadow-lg">Subscribe</button>
</form>
<p className="text-xs text-white/30 mt-6 tracking-wide">No spam. Unsubscribe anytime.</p>
</div>
</section>

<section className="py-24 bg-cream/50 border-t border-border" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-gold text-xs font-semibold tracking-widest uppercase mb-4 block">Common Questions</span>
<h2 className="font-serif text-4xl text-forest tracking-tight">Everything you need to know.</h2>
</div>
<div className="space-y-2">

<details className="group border-b border-forest/10">
<summary className="flex items-center justify-between cursor-pointer py-5 text-lg font-serif text-forest transition-colors hover:text-gold">
                        Does dustless refinishing really mean no dust?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 opacity-50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-forest/70 font-light leading-relaxed">
                        Yes. We use advanced HEPA containment systems that capture 99.8% of dust particles at the source. Unlike traditional sanding that leaves your home covered in a fine layer of dust, our process leaves your air quality safe and your surfaces clean, so you don't have to hire deep cleaners afterwards.
                    </div>
</details>

<details className="group border-b border-forest/10">
<summary className="flex items-center justify-between cursor-pointer py-5 text-lg font-serif text-forest transition-colors hover:text-gold">
                        How long does the refinishing process take?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 opacity-50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-forest/70 font-light leading-relaxed">
                        For an average 800-1000 sq ft project, the process typically takes 3 to 4 days. This includes sanding, staining, and applying three coats of finish. If extensive repairs or board replacements are needed, we may add 1-2 days to ensure the craftsmanship meets our standards.
                    </div>
</details>

<details className="group border-b border-forest/10">
<summary className="flex items-center justify-between cursor-pointer py-5 text-lg font-serif text-forest transition-colors hover:text-gold">
                        Do I need to move out of my house?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 opacity-50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-forest/70 font-light leading-relaxed">
                        Not necessarily. If we are doing only one level or specific rooms, you can stay in your home. However, access to the work area will be restricted. We use low-VOC, water-based finishes that dry quickly and don't emit harmful fumes, making it safe to sleep in other parts of the house.
                    </div>
</details>

<details className="group border-b border-forest/10">
<summary className="flex items-center justify-between cursor-pointer py-5 text-lg font-serif text-forest transition-colors hover:text-gold">
                        Can you match the new floor to my existing hardwood?
                        <span className="transition-transform group-open:rotate-180">
<i className="w-5 h-5 opacity-50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-forest/70 font-light leading-relaxed">
                        Absolutely. This is our specialty. We identify the species, grade, and cut of your existing wood and source matching material. Then, we use custom stain blends to feather the new section into the old, creating a seamless transition where the repair becomes invisible.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-cream relative" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white p-8 md:p-16 rounded-sm shadow-sm border border-border">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl text-forest tracking-tight mb-4">Let's discuss your floors.</h2>
<p className="text-forest/60">Fill out the form below or call us at <span className="text-forest font-medium">(604) 555-0199</span></p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-forest/40">Name</label>
<input className="w-full bg-cream border border-forest/5 p-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-forest/40">Phone</label>
<input className="w-full bg-cream border border-forest/5 p-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-forest/40">Email</label>
<input className="w-full bg-cream border border-forest/5 p-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-forest/40">Project Type</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 border border-forest/10 rounded-sm text-sm text-forest/60 peer-checked:bg-forest peer-checked:text-white peer-checked:border-forest transition-all">Refinish</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 border border-forest/10 rounded-sm text-sm text-forest/60 peer-checked:bg-forest peer-checked:text-white peer-checked:border-forest transition-all">Install</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 border border-forest/10 rounded-sm text-sm text-forest/60 peer-checked:bg-forest peer-checked:text-white peer-checked:border-forest transition-all">Commercial</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 border border-forest/10 rounded-sm text-sm text-forest/60 peer-checked:bg-forest peer-checked:text-white peer-checked:border-forest transition-all">Repair</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-forest/40">Message</label>
<textarea className="w-full bg-cream border border-forest/5 p-3 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Tell us about the square footage, wood type, or if you are interested in our commercial vinyl solutions..." rows="4"></textarea>
</div>
<button className="w-full bg-forest text-white py-4 rounded-sm font-medium tracking-wide hover:bg-forest/90 hover:shadow-lg transition-all">Request Free Estimate</button>
</form>
</div>
</div>
</section>

<footer className="bg-forest text-cream pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-white">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 40 40" width="24">
<path className="opacity-100" d="M20 38C20 38 35 28 35 14C35 8 30 2 20 2C10 2 5 8 5 14C5 28 20 38 20 38Z" strokeLinejoin="round"></path>
<line x1="20" x2="20" y1="2" y2="38"></line>
<path d="M20 10L10 16"></path>
<path d="M20 18L8 24"></path>
<path d="M20 26L12 30"></path>
<path d="M20 10L30 16"></path>
<path d="M20 18L32 24"></path>
<path d="M20 26L28 30"></path>
</svg>
<span className="font-serif text-xl font-medium tracking-tight">Silver Leaf</span>
</div>
<p className="text-white/40 text-sm max-w-xs leading-relaxed">
                        Elevating Vancouver homes and businesses with sustainable hardwood and resilient eco-solutions.
                    </p>
</div>
<div className="flex gap-12 text-sm text-white/60">
<div className="flex flex-col gap-3">
<a className="hover:text-gold transition-colors" href="#">Services</a>
<a className="hover:text-gold transition-colors" href="#">Portfolio</a>
<a className="hover:text-gold transition-colors" href="#">About</a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:text-gold transition-colors" href="#">Contact</a>
<a className="hover:text-gold transition-colors" href="#">FAQ</a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:text-gold transition-colors" href="#">Instagram</a>
<a className="hover:text-gold transition-colors" href="#">Facebook</a>
<a className="hover:text-gold transition-colors" href="#">Houzz</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
<p>© 2024 Silver Leaf Refinishing Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
