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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fcfcfc',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
accent: {
50: '#f4f6f8',
100: '#e4e7eb',
400: '#9ba5b1',
900: '#1a202c',
}
}
}
}
}



        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('bg-stone-50/80', 'bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-white/95', 'bg-stone-50/80');
            }
        });

        // Hero Parallax
        gsap.to(".parallax-bg", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-bg",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Fade Up Elements (Hero)
        gsap.from(".fade-up", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2
        });

        // Reveal Text on Scroll
        gsap.utils.toArray('.reveal-text').forEach(section => {
            gsap.from(section.children, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        });

        // Reveal Cards
        gsap.utils.toArray('.reveal-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: i % 3 * 0.1, // Simple staggering based on index
                ease: "power3.out"
            });
        });

        // Image Reveal
        gsap.utils.toArray('.reveal-img').forEach(imgContainer => {
            gsap.from(imgContainer, {
                scrollTrigger: {
                    trigger: imgContainer,
                    start: "top 80%",
                },
                scale: 0.95,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        });
        
        // Process Steps Reveal
        gsap.utils.toArray('.reveal-up').forEach(step => {
            gsap.from(step, {
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
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
      

<nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md border-b bg-stone-950/80 border-stone-800/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 cursor-pointer">
<span className="text-xl font-semibold tracking-tighter uppercase text-stone-100">Palmera.</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#home">Home</a>
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#gallery">Gallery</a>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 text-black bg-stone-100 hover:bg-stone-200" href="#contact">
                        0421 334 910
                    </a>
</div>

<div className="md:hidden">
<button className="focus:outline-none text-stone-100">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-100" id="home">

<div className="absolute inset-0 z-0 opacity-80">
<img alt="Modern kitchen joinery" className="w-full h-full object-cover parallax-bg scale-105" src="https://static.wixstatic.com/media/e18ef5_889ff69afdd6459c80940b85e8939d13~mv2.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b z-0 from-white/30 via-white/10 to-stone-100"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6">
<span className="inline-block py-1 px-3 rounded-full border backdrop-blur-sm text-xs font-medium tracking-widest uppercase mb-6 fade-up bg-black/10 border-black/20 text-black">
                Redhead, NSW
            </span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight fade-up text-black">
                Custom cabinetry &amp; <br className="hidden md:block"/> joinery <span className="font-serif italic text-stone-600">solutions.</span>
</h1>
<p className="text-lg mb-10 max-w-2xl mx-auto font-light fade-up text-stone-800">
                Newcastle based design and renovation specialists. We provide holistic joinery services for both residential and commercial projects.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
<a className="px-8 py-3.5 text-sm font-medium rounded-full transition-colors bg-black text-stone-100 hover:bg-stone-900" href="#contact">
                    Get a Quote
                </a>
<a className="px-8 py-3.5 bg-transparent border text-sm font-medium rounded-full transition-colors backdrop-blur-sm border-black/30 text-black hover:bg-black/10" href="#gallery">
                    View Gallery
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-black" icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-950" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-img overflow-hidden rounded-2xl">
<img alt="Cabinetry design sketch" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 bg-white" src="https://static.wixstatic.com/media/e18ef5_5b75593c9dd64a41904be94e46b67420~mv2.png"/>
<div className="absolute bottom-8 left-8 right-8 backdrop-blur-md p-6 rounded-xl border shadow-sm bg-black/90 border-stone-800">
<div className="flex justify-between items-center divide-x divide-stone-800">
<div className="pr-6 text-center w-1/2">
<span className="block text-3xl font-semibold tracking-tight text-stone-100">100%</span>
<span className="text-xs text-stone-500 uppercase tracking-wider">Custom Made</span>
</div>
<div className="pl-6 text-center w-1/2">
<span className="block text-3xl font-semibold tracking-tight text-stone-100">Local</span>
<span className="text-xs text-stone-500 uppercase tracking-wider">Newcastle Team</span>
</div>
</div>
</div>
</div>
<div className="space-y-8 reveal-text">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-100">
                        From initial consult to <span className="font-serif italic text-stone-400">installation</span>.
                    </h2>
<p className="leading-relaxed font-light text-stone-400">
                        At Palmera Kitchens, we pride ourselves on our professionalism and attention to detail. We are a small team providing affordable custom cabinetry and joinery solutions for small and large scale projects.
                    </p>
<p className="leading-relaxed font-light text-stone-400">
                        We are involved from the very beginning. After our initial contact, we provide an in-home consultation to understand your vision for your dream space—whether it's a new kitchen, laundry, or bespoke office fit-out.
                    </p>
<div className="pt-4">
<p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-4">Our Trusted Partners</p>
<ul className="space-y-3">
<li className="flex items-center space-x-3">
<iconify-icon className="text-stone-100" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-stone-300">Blum &amp; Lincoln Sentry Hardware</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-stone-100" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-stone-300">Caesarstone &amp; Smartstone Surfaces</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-stone-100" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-stone-300">Polytec Finishes</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 text-stone-950" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 md:flex justify-between items-end border-b pb-8 reveal-text border-black/10">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Our Expertise</h2>
<p className="font-light text-stone-600">Comprehensive design and renovation services tailored to your lifestyle and budget.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium transition-colors group text-black hover:text-stone-700" href="#gallery">
                    View our work 
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-white border-stone-200 hover:border-stone-400 hover:shadow-lg">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-50 border-stone-200">
<iconify-icon className="text-stone-800" icon="lucide:chef-hat" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Kitchens</h3>
<p className="text-sm leading-relaxed text-stone-600">New kitchens and refacing of old kitchens. We replace doors, panels and benchtops to transform your cooking space.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-white border-stone-200 hover:border-stone-400 hover:shadow-lg">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-50 border-stone-200">
<iconify-icon className="text-stone-800" icon="lucide:shirt" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Residential Joinery</h3>
<p className="text-sm leading-relaxed text-stone-600">Custom wardrobes, laundry fit-outs, and vanity units designed to maximize storage and style.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-white border-stone-200 hover:border-stone-400 hover:shadow-lg">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-50 border-stone-200">
<iconify-icon className="text-stone-800" icon="lucide:monitor" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Office &amp; Commercial</h3>
<p className="text-sm leading-relaxed text-stone-600">Bespoke office areas, desk setups, and commercial joinery solutions for businesses in Newcastle.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-white border-stone-200 hover:border-stone-400 hover:shadow-lg">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-50 border-stone-200">
<iconify-icon className="text-stone-800" icon="lucide:martini" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Entertainment</h3>
<p className="text-sm leading-relaxed text-stone-600">Custom bar areas, BBQ areas, and entertainment units perfect for the Australian lifestyle.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal-text">
<span className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-3 block">Selected Works</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-100">Gallery</h2>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12 reveal-text">
<button className="px-5 py-2 text-sm font-medium rounded-full shadow-sm bg-stone-100 text-black">All</button>
<button className="px-5 py-2 text-sm font-medium rounded-full border transition-colors bg-black text-stone-400 border-stone-800 hover:border-stone-100">Kitchens</button>
<button className="px-5 py-2 text-sm font-medium rounded-full border transition-colors bg-black text-stone-400 border-stone-800 hover:border-stone-100">Wardrobes</button>
<button className="px-5 py-2 text-sm font-medium rounded-full border transition-colors bg-black text-stone-400 border-stone-800 hover:border-stone-100">Commercial</button>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Warabrook Project" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/e18ef5_cc45e46c5fb24c9aa5805b77efa1ceda~mv2.png"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-stone-900">Project</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Warabrook Residence</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Kitchen Design" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/e18ef5_dc6983c565304a07b99ae13d4e956e12~mv2.png"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-stone-900">Kitchen</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Modern White &amp; Timber</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Commercial Office" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/e18ef5_e2a6beb5955a4e72bc1fdd15518a5963~mv2.png"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-stone-900">Commercial</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Office Fit-out</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Storage Solutions" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/e18ef5_5f2c3eae04af436680d7f0c71584ea12~mv2.jpg"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-stone-900">Storage</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Custom Wardrobe</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Detailing" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/e18ef5_f8aa38b1418d4d58bcdd83677ac9a817~mv2.jpeg"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-stone-900">Joinery</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Floating Unit</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-black border-stone-800" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight mb-16 text-center reveal-text text-stone-100">Our Process</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px -z-10 bg-stone-800"></div>

<div className="group relative md:bg-transparent pt-4 reveal-up bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-500 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:message-square" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-600">01</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Consultation</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">In-home discussion to understand your vision, style, and requirements.</p>
</div>
</div>

<div className="group relative md:bg-transparent pt-4 reveal-up delay-100 bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-500 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:pen-tool" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-600">02</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Design</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">Professional assistance to design a space that meets your budget.</p>
</div>
</div>

<div className="group relative md:bg-transparent pt-4 reveal-up delay-200 bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-500 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:hammer" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-600">03</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Manufacture</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">Locally manufactured cabinetry with high attention to detail.</p>
</div>
</div>

<div className="group relative md:bg-transparent pt-4 reveal-up delay-300 bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-500 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:home" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-600">04</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Installation</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">Efficient on-site installation to bring your renovation to life.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="reveal-text">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-stone-100">Renovation Specialists</h2>
<p className="mb-8 font-light text-stone-400">With our eye for detail and honest approach, we ensure home transformations are second to none.</p>
<div className="flex items-center space-x-4">
<div className="flex -space-x-4">
<div className="w-10 h-10 rounded-full border-2 border-black bg-stone-700 flex items-center justify-center text-xs">PK</div>
<div className="w-10 h-10 rounded-full border-2 border-black bg-stone-600 flex items-center justify-center text-xs">PK</div>
<div className="w-10 h-10 rounded-full border-2 border-black bg-stone-500 flex items-center justify-center text-xs">PK</div>
</div>
<span className="text-sm font-medium text-stone-100">Trusted by Locals</span>
</div>
</div>
<div className="p-8 rounded-2xl shadow-sm border relative reveal-card bg-black border-stone-900">
<iconify-icon className="absolute top-8 left-8 text-stone-700" icon="lucide:quote" width="48"></iconify-icon>
<p className="text-lg leading-relaxed mb-6 pt-10 relative z-10 italic font-serif text-stone-300">
                        "If you need some inspiration or direction, we are happy to offer our professional assistance to help you achieve your desired renovation."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-stone-800 text-stone-400">PK</div>
<div>
<h4 className="text-sm font-semibold text-stone-100">Daniel</h4>
<p className="text-xs text-stone-500">Palmera Kitchens</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-stone-100 text-black" id="contact">
<div className="absolute top-0 right-0 w-1/3 h-full skew-x-12 pointer-events-none bg-stone-200/30"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal-text">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Start your project.</h2>
<p className="mb-10 font-light text-lg text-stone-600">Contact us for a free quote today. We service Newcastle and surrounding areas.</p>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<iconify-icon className="mt-1 text-stone-600" icon="lucide:map-pin" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-black">Location</h4>
<p className="text-sm text-stone-600">Shed 10/30 Kalaroo Road<br/>Redhead NSW 2290, Australia</p>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="mt-1 text-stone-600" icon="lucide:mail" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-black">Email</h4>
<a className="text-sm text-stone-600 hover:text-black transition-colors" href="mailto:Daniel@palmerakitchens.com">Daniel@palmerakitchens.com</a>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="mt-1 text-stone-600" icon="lucide:phone" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-black">Phone</h4>
<a className="text-sm text-stone-600 hover:text-black transition-colors" href="tel:0421334910">0421 334 910</a>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border reveal-card bg-white border-stone-200 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="name">Name</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all text-sm bg-stone-50 border-stone-200 text-black" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="phone">Phone</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all text-sm bg-stone-50 border-stone-200 text-black" id="phone" placeholder="0400 000 000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="email">Email</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all text-sm bg-stone-50 border-stone-200 text-black" id="email" placeholder="john@company.com" type="email"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600">Project Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="w-full text-center px-4 py-3 rounded-lg border text-sm peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100">Residential</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="w-full text-center px-4 py-3 rounded-lg border text-sm peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100">Commercial</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="message">Message</label>
<textarea className="w-full border rounded-lg px-4 py-3 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all text-sm resize-none bg-stone-50 border-stone-200 text-black" id="message" placeholder="Tell us about your renovation..." rows="4"></textarea>
</div>
<button className="w-full font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group bg-black text-stone-100 hover:bg-stone-800" type="submit">
                            Send Request
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-stone-50 border-black/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-xl font-semibold tracking-tighter uppercase mb-6 block text-black">Palmera.</span>
<p className="text-stone-500 text-sm max-w-sm">
                        Custom cabinetry and joinery solutions. Proudly serving Newcastle and Redhead since 2008.
                    </p>
</div>
<div>
<h5 className="font-medium mb-4 text-black">Explore</h5>
<ul className="space-y-2">
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#about">About</a></li>
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#services">Services</a></li>
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h5 className="font-medium mb-4 text-black">Contact</h5>
<ul className="space-y-2">
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="mailto:Daniel@palmerakitchens.com">Email Us</a></li>
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="tel:0421334910">0421 334 910</a></li>
<li className="text-stone-500 text-sm">Redhead, NSW</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center border-black/5">
<p className="text-xs text-stone-400">© 2023 Palmera Kitchens. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-xs text-stone-400 hover:text-black" href="#">Privacy Policy</a>
<a className="text-xs text-stone-400 hover:text-black" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-stone-900 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group text-white" href="tel:0421334910">
<iconify-icon icon="lucide:phone" strokeWidth="2" width="24"></iconify-icon>
<span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-medium ml-0 group-hover:ml-2">
            Call Now
        </span>
</a>



    </>
  );
}
