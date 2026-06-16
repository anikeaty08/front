import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="uppercase group text-xl text-stone-900 tracking-widest font-serif z-50 relative" href="#">Interior Designer</a>
<div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-light text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#process">Process</a>
<a className="px-5 py-2 border border-stone-300 hover:border-stone-800 text-stone-900 transition-all duration-300 uppercase text-xs tracking-widest" href="#contact">
                    Contact
                </a>
</div>

<button className="md:hidden text-2xl text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-stone-900">
<div className="hero-bg"></div>
<div className="hero-bg"></div>
<div className="hero-bg"></div>

<div className="absolute inset-0 bg-black/30"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white reveal active">
<h2 className="text-sm md:text-base font-light tracking-[0.2em] mb-6 uppercase text-white/80">Architekt Wnętrz</h2>
<h1 className="md:text-7xl lg:text-8xl leading-none text-5xl tracking-tight font-serif mb-8">Interior Designer</h1>
<p className="text-lg md:text-xl font-light text-stone-100 max-w-2xl mx-auto leading-relaxed mb-10 opacity-90">
                Designing functional, beautiful interiors that elevate everyday living in Warsaw and beyond.
            </p>
<a className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white hover:gap-5 transition-all duration-300" href="#portfolio">
                View Portfolio
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon height="24" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 bg-stone-50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative reveal order-2 md:order-1">
<div className="aspect-[3/4] overflow-hidden bg-stone-200 relative group">

<img alt="Aleksandra Stefaniak Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=1742&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="reveal order-1 md:order-2">
<span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">About Me</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                        Timeless aesthetics customized to your lifestyle.
                    </h2>
<div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
<p>
                            I am a professional interior architect based in Warsaw, specializing in residential and show interior design. My philosophy centers on the belief that a home should be a sanctuary—a perfect balance of visual harmony and practical utility.
                        </p>
<p>
                            Offering tailored functional layouts, high-quality visualizations, and complete documentation ready for execution, I guide clients through every step of the transformation process.
                        </p>
</div>
<div className="mt-10 pt-10 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center gap-8 text-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</div>
<span className="tracking-wide text-stone-800">+48 602 895 454</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:globe-linear" width="18"></iconify-icon>
</div>
<a className="tracking-wide text-stone-800 hover:text-gold transition-colors" href="https://aleksandrastefaniak.com.pl">aleksandrastefaniak.com.pl</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<span className="text-xs font-bold tracking-widest uppercase text-stone-400">Expertise</span>
<h2 className="font-serif text-3xl md:text-4xl mt-3 text-stone-900">Design Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100 border border-stone-100">

<div className="bg-white p-10 group hover:shadow-xl transition-all duration-500 z-10 relative reveal">
<div className="text-stone-300 group-hover:text-gold transition-colors duration-300 mb-6">
<iconify-icon height="40" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900">Space Planning</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Tailored functional layouts that maximize space potential and ergonomic flow tailored to your daily habits.
                    </p>
</div>

<div className="bg-white p-10 group hover:shadow-xl transition-all duration-500 z-10 relative reveal" style={{transitionDelay: '100ms'}}>
<div className="text-stone-300 group-hover:text-gold transition-colors duration-300 mb-6">
<iconify-icon height="40" icon="solar:monitor-camera-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900">3D Visualizations</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Photorealistic renders allowing you to experience the atmosphere, lighting, and textures before construction begins.
                    </p>
</div>

<div className="bg-white p-10 group hover:shadow-xl transition-all duration-500 z-10 relative reveal" style={{transitionDelay: '200ms'}}>
<div className="text-stone-300 group-hover:text-gold transition-colors duration-300 mb-6">
<iconify-icon height="40" icon="solar:document-text-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900">Technical Documentation</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Comprehensive workshop drawings including electrics, hydraulics, and carpentry for contractors.
                    </p>
</div>

<div className="bg-white p-10 group hover:shadow-xl transition-all duration-500 z-10 relative reveal">
<div className="text-stone-300 group-hover:text-gold transition-colors duration-300 mb-6">
<iconify-icon height="40" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900">Contractor Consultation</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Ongoing support during the implementation phase to ensure the vision is executed flawlessly.
                    </p>
</div>

<div className="bg-white p-10 group hover:shadow-xl transition-all duration-500 z-10 relative reveal" style={{transitionDelay: '100ms'}}>
<div className="text-stone-300 group-hover:text-gold transition-colors duration-300 mb-6">
<iconify-icon height="40" icon="solar:armchair-2-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900">Home Staging</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Preparing real estate for sale or rent through strategic styling to increase market value.
                    </p>
</div>

<div className="bg-stone-50 p-10 flex items-center justify-center reveal" style={{transitionDelay: '200ms'}}>
<div className="text-center">
<p className="font-serif text-lg italic text-stone-400">"Quality is never an accident."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<span className="text-xs font-bold tracking-widest uppercase text-stone-400">Selected Works</span>
<h2 className="font-serif text-4xl mt-3 text-stone-900">Recent Projects</h2>
</div>
<div className="mt-6 md:mt-0">
<span className="block h-px w-24 bg-stone-300 mb-2"></span>
<span className="text-xs tracking-widest uppercase text-stone-500">Warsaw / Poland</span>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="break-inside-avoid reveal">
<div className="group relative overflow-hidden cursor-pointer">
<img alt="Interior Design 1" className="w-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-white font-serif text-xl">Mokotów Apartment</h3>
<p className="text-white/80 text-xs tracking-widest uppercase mt-1">Residential</p>
</div>
</div>
</div>

<div className="break-inside-avoid reveal">
<div className="group relative overflow-hidden cursor-pointer">
<img alt="Interior Design 2" className="w-full transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-white font-serif text-xl">Minimalist Kitchen</h3>
<p className="text-white/80 text-xs tracking-widest uppercase mt-1">Design &amp; Visuals</p>
</div>
</div>
</div>

<div className="break-inside-avoid reveal">
<div className="group relative overflow-hidden cursor-pointer">
<img alt="Interior Design 3" className="w-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=2592&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-white font-serif text-xl">Wilanów Residence</h3>
<p className="text-white/80 text-xs tracking-widest uppercase mt-1">Full Service</p>
</div>
</div>
</div>

<div className="break-inside-avoid reveal">
<div className="group relative overflow-hidden cursor-pointer">
<img alt="Interior Design 4" className="w-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-white font-serif text-xl">Warm Living Area</h3>
<p className="text-white/80 text-xs tracking-widest uppercase mt-1">Visualization</p>
</div>
</div>
</div>

<div className="break-inside-avoid reveal">
<div className="group relative overflow-hidden cursor-pointer">
<img alt="Interior Design 5" className="w-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-white font-serif text-xl">Modern Bathroom</h3>
<p className="text-white/80 text-xs tracking-widest uppercase mt-1">Detailing</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-16 reveal">
<button className="px-8 py-3 bg-stone-900 text-stone-50 text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors">Load More Projects</button>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<span className="text-xs font-bold tracking-widest uppercase text-stone-500">Methodology</span>
<h2 className="font-serif text-3xl md:text-4xl mt-3 text-white">How We Work</h2>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-800 transform md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 reveal group">
<div className="md:w-5/12 text-left md:text-right mb-4 md:mb-0 pl-12 md:pl-0 md:pr-10 order-2 md:order-1">
<h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">Initial Consultation</h3>
<p className="text-sm text-stone-400 font-light">Discussing your needs, budget, and design preferences.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-stone-600 bg-stone-900 flex items-center justify-center transform -translate-x-1/2 z-10 text-xs font-mono text-stone-400 order-1 md:order-2">01</div>
<div className="md:w-5/12 pl-12 md:pl-10 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 reveal group">
<div className="md:w-5/12 order-3 md:order-1"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-stone-600 bg-stone-900 flex items-center justify-center transform -translate-x-1/2 z-10 text-xs font-mono text-stone-400 order-1 md:order-2">02</div>
<div className="md:w-5/12 pl-12 md:pl-10 mb-4 md:mb-0 order-2 md:order-3">
<h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">Concept &amp; Layout</h3>
<p className="text-sm text-stone-400 font-light">Developing functional 2D layouts and moodboards.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 reveal group">
<div className="md:w-5/12 text-left md:text-right mb-4 md:mb-0 pl-12 md:pl-0 md:pr-10 order-2 md:order-1">
<h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">3D Visualizations</h3>
<p className="text-sm text-stone-400 font-light">Creating photorealistic renders to visualize the space.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-stone-600 bg-stone-900 flex items-center justify-center transform -translate-x-1/2 z-10 text-xs font-mono text-stone-400 order-1 md:order-2">03</div>
<div className="md:w-5/12 pl-12 md:pl-10 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 reveal group">
<div className="md:w-5/12 order-3 md:order-1"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-stone-600 bg-stone-900 flex items-center justify-center transform -translate-x-1/2 z-10 text-xs font-mono text-stone-400 order-1 md:order-2">04</div>
<div className="md:w-5/12 pl-12 md:pl-10 mb-4 md:mb-0 order-2 md:order-3">
<h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">Documentation</h3>
<p className="text-sm text-stone-400 font-light">Detailed technical drawings for contractors and carpenters.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between reveal group">
<div className="md:w-5/12 text-left md:text-right mb-4 md:mb-0 pl-12 md:pl-0 md:pr-10 order-2 md:order-1">
<h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">Implementation Support</h3>
<p className="text-sm text-stone-400 font-light">Consultations and supervision during the renovation.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-stone-600 bg-stone-900 flex items-center justify-center transform -translate-x-1/2 z-10 text-xs font-mono text-stone-400 order-1 md:order-2">05</div>
<div className="md:w-5/12 pl-12 md:pl-10 order-3"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-3xl text-stone-900 mb-12 text-center reveal">Client Stories</h2>
<div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory reveal">

<div className="min-w-[90%] md:min-w-[45%] bg-white p-8 border border-stone-100 shadow-sm snap-center flex flex-col justify-between">
<div className="">
<div className="text-gold mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="font-serif text-xl text-stone-800 leading-relaxed mb-6">
                            "Aleksandra transformed our chaotic apartment into a serene oasis. The attention to functional detail was exactly what we needed."
                        </blockquote>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full"></div>
<div>
<p className="text-xs font-bold uppercase text-stone-900">Anna K.</p>
<p className="text-xs text-stone-400">Warsaw, Mokotów</p>
</div>
</div>
</div>

<div className="min-w-[90%] md:min-w-[45%] bg-white p-8 border border-stone-100 shadow-sm snap-center flex flex-col justify-between">
<div>
<div className="text-gold mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="font-serif text-xl text-stone-800 leading-relaxed mb-6">
                            "Professional from start to finish. The 3D visualizations were incredibly accurate to the final result. Highly recommended."
                        </blockquote>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full"></div>
<div>
<p className="text-xs font-bold uppercase text-stone-900">Marek W.</p>
<p className="text-xs text-stone-400">Warsaw, Wilanów</p>
</div>
</div>
</div>

<div className="min-w-[90%] md:min-w-[45%] bg-white p-8 border border-stone-100 shadow-sm snap-center flex flex-col justify-between">
<div>
<div className="text-gold mb-4 flex gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="font-serif text-xl text-stone-800 leading-relaxed mb-6">
                            "Great communication and taste. She managed to combine my husband's modern style with my love for classics perfectly."
                        </blockquote>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full"></div>
<div>
<p className="text-xs font-bold uppercase text-stone-900">Karolina P.</p>
<p className="text-xs text-stone-400">Warsaw, Center</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal">
<span className="text-xs font-bold tracking-widest uppercase text-stone-400">Get in Touch</span>
<h2 className="font-serif text-4xl mt-3 text-stone-900 mb-8">Start your project</h2>
<p className="text-stone-500 font-light mb-10 max-w-md">
                        Ready to elevate your living space? Fill out the form or contact me directly to schedule a consultation.
                    </p>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative">
<input className="peer w-full border-b border-stone-300 py-2 placeholder-transparent focus:outline-none focus:border-stone-900 transition-colors bg-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-900 peer-focus:text-xs" htmlFor="name">Name</label>
</div>
<div className="relative">
<input className="peer w-full border-b border-stone-300 py-2 placeholder-transparent focus:outline-none focus:border-stone-900 transition-colors bg-transparent" id="phone" placeholder="Phone" type="tel"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-900 peer-focus:text-xs" htmlFor="phone">Phone</label>
</div>
</div>
<div className="relative">
<input className="peer w-full border-b border-stone-300 py-2 placeholder-transparent focus:outline-none focus:border-stone-900 transition-colors bg-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-900 peer-focus:text-xs" htmlFor="email">Email</label>
</div>
<div className="relative">
<textarea className="peer w-full border-b border-stone-300 py-2 placeholder-transparent focus:outline-none focus:border-stone-900 transition-colors bg-transparent resize-none" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-900 peer-focus:text-xs" htmlFor="message">Project Details</label>
</div>
<button className="mt-4 px-8 py-4 bg-stone-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300 w-full md:w-auto" type="submit">
                            Send Request
                        </button>
</form>
<div className="mt-16 space-y-4">
<div className="flex items-center gap-4">
<iconify-icon className="text-gold" icon="solar:phone-linear" width="20"></iconify-icon>
<span className="text-stone-600 tracking-wide">+48 600 000 000</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-gold" icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-stone-600 tracking-wide">InteriorDesigner.com.pl</span>
</div>
</div>
</div>

<div className="h-full min-h-[400px] w-full bg-stone-100 relative grayscale hover:grayscale-0 transition-all duration-700 reveal">

<img alt="Warsaw Map Concept" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&amp;w=2488&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur px-6 py-4 shadow-lg text-center">
<p className="font-serif text-xl text-stone-900">Warsaw, Poland</p>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Base of Operations</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-0 w-full bg-stone-900 border-t border-stone-800 p-4 md:hidden z-40 flex justify-between items-center">
<span className="text-stone-400 text-xs uppercase tracking-widest">Ready to renovate?</span>
<a className="bg-white text-stone-900 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-colors" href="#contact">
            Book Now
        </a>
</div>

<footer className="bg-stone-950 text-stone-500 py-12 pb-24 md:pb-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="font-serif text-lg text-stone-300">Aleksandra Stefaniak</p>
<p className="text-xs tracking-widest uppercase mt-1 opacity-60">Architekt Wnętrz</p>
</div>
<div className="flex gap-6 text-stone-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
<div className="text-xs font-light text-stone-600">
                © 2023 Aleksandra Stefaniak. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
