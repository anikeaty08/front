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
wood: {
50: '#f7f3ef',
100: '#ebe3db',
200: '#dcd1c3',
300: '#c5b4a0',
400: '#ad9278',
500: '#967859',
600: '#7d6148',
800: '#544234',
900: '#45362e',
950: '#261d18',
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
                navbar.classList.replace('bg-wood-50/80', 'bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-white/95', 'bg-wood-50/80');
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
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md border-b bg-wood-950/80 border-stone-800/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 cursor-pointer">
<span className="text-xl font-semibold tracking-tighter uppercase text-stone-100">Kraft.</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium transition-colors text-stone-400 hover:text-stone-100" href="#process">Process</a>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 text-black bg-stone-100 hover:bg-stone-200" href="#contact">
                        Request Quote
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

<section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-100">

<div className="absolute inset-0 z-0 opacity-60">
<img alt="Woodworking craftsmanship" className="w-full h-full object-cover parallax-bg scale-105" src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b z-0 from-white/40 via-white/20 to-stone-100"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-6">
<span className="inline-block py-1 px-3 rounded-full border backdrop-blur-sm text-xs font-medium tracking-widest uppercase mb-6 fade-up bg-black/10 border-black/20 text-black">
                Established 2008
            </span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight fade-up text-black">
                Bespoke furniture that <br className="hidden md:block"/> <span className="font-serif italic text-wood-800">transforms</span> spaces.
            </h1>
<p className="text-lg mb-10 max-w-2xl mx-auto font-light fade-up text-stone-700">
                Where traditional craftsmanship meets modern precision. We create custom-made environments for residential and corporate clients who demand excellence.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
<a className="px-8 py-3.5 text-sm font-medium rounded-full transition-colors bg-black text-stone-100 hover:bg-stone-900" href="#contact">
                    Start Your Project
                </a>
<a className="px-8 py-3.5 bg-transparent border text-sm font-medium rounded-full transition-colors backdrop-blur-sm border-black/30 text-black hover:bg-black/10" href="#portfolio">
                    View Portfolio
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-black" icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 bg-wood-950" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-img overflow-hidden rounded-2xl">
<img alt="Master carpenter at work" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8 backdrop-blur-md p-6 rounded-xl border shadow-sm bg-black/90 border-stone-800">
<div className="flex justify-between items-center divide-x divide-stone-800">
<div className="pr-6 text-center w-1/2">
<span className="block text-3xl font-semibold tracking-tight text-stone-100">15+</span>
<span className="text-xs text-stone-500 uppercase tracking-wider">Years Experience</span>
</div>
<div className="pl-6 text-center w-1/2">
<span className="block text-3xl font-semibold tracking-tight text-stone-100">400+</span>
<span className="text-xs text-stone-500 uppercase tracking-wider">Projects Delivered</span>
</div>
</div>
</div>
</div>
<div className="space-y-8 reveal-text">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-100">
                        Crafting legacy through <span className="font-serif italic text-wood-400">precision</span> &amp; passion.
                    </h2>
<p className="leading-relaxed font-light text-stone-400">
                        At Kraft, we believe that furniture is not just functional; it is an expression of identity. Founded on the principles of integrity and artisanal excellence, we bridge the gap between industrial capability and the delicate touch of hand-finishing.
                    </p>
<p className="leading-relaxed font-light text-stone-400">
                        Our workshop combines state-of-the-art CNC technology with traditional joinery techniques, ensuring that every curve, joint, and surface meets the highest standards of durability and aesthetics.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center space-x-3">
<iconify-icon className="text-stone-100" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-stone-300">Premium sustainably sourced materials</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-stone-100" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-stone-300">End-to-end project management</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-stone-100" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-stone-300">Lifetime warranty on structural integrity</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 text-stone-950" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 md:flex justify-between items-end border-b pb-8 reveal-text border-black/10">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Our Expertise</h2>
<p className="font-light text-stone-600">Comprehensive woodworking solutions tailored to the unique dimensions and style of your space.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium transition-colors group text-black hover:text-stone-700" href="#portfolio">
                    View our work 
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-black/5 border-black/5 hover:border-black/20 hover:bg-black/10">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-100 border-black/10">
<iconify-icon className="text-wood-700" icon="lucide:armchair" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Custom Furniture</h3>
<p className="text-sm leading-relaxed text-stone-600">Unique pieces designed from scratch including tables, chairs, and consoles that serve as centerpieces.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-black/5 border-black/5 hover:border-black/20 hover:bg-black/10">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-100 border-black/10">
<iconify-icon className="text-wood-700" icon="lucide:utensils" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Bespoke Kitchens</h3>
<p className="text-sm leading-relaxed text-stone-600">Functional, ergonomic, and aesthetic kitchen environments combining wood, stone, and metal.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-black/5 border-black/5 hover:border-black/20 hover:bg-black/10">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-100 border-black/10">
<iconify-icon className="text-wood-700" icon="lucide:briefcase" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Corporate Solutions</h3>
<p className="text-sm leading-relaxed text-stone-600">Conference tables, acoustic paneling, and reception desks for high-end offices and hotels.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-500 reveal-card bg-black/5 border-black/5 hover:border-black/20 hover:bg-black/10">
<div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform bg-stone-100 border-black/10">
<iconify-icon className="text-wood-700" icon="lucide:box-select" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 tracking-tight">Architectural Joinery</h3>
<p className="text-sm leading-relaxed text-stone-600">Wall cladding, built-in wardrobes, and custom millwork integrated seamlessly into architecture.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-950" id="portfolio">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal-text">
<span className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-3 block">Selected Works</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-100">Curated Excellence</h2>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12 reveal-text">
<button className="px-5 py-2 text-sm font-medium rounded-full shadow-sm bg-stone-100 text-black">All</button>
<button className="px-5 py-2 text-sm font-medium rounded-full border transition-colors bg-black text-stone-400 border-stone-800 hover:border-stone-100">Residential</button>
<button className="px-5 py-2 text-sm font-medium rounded-full border transition-colors bg-black text-stone-400 border-stone-800 hover:border-stone-100">Corporate</button>
<button className="px-5 py-2 text-sm font-medium rounded-full border transition-colors bg-black text-stone-400 border-stone-800 hover:border-stone-100">Kitchens</button>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Living Room" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-wood-800">Residential</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Oak Minimalist Living</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Kitchen" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-wood-800">Kitchen</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Matte Black &amp; Walnut</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Office" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-wood-800">Corporate</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Executive Boardroom</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Bedroom" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-wood-800">Bedroom</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Cedar Walk-in Closet</h3>
</div>
</div>

<div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer reveal-card">
<img alt="Stairs" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 bg-white/40">
<span className="text-xs font-medium tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-wood-800">Architectural</span>
<h3 className="text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-black">Floating Staircase</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-black border-stone-800" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight mb-16 text-center reveal-text text-stone-100">The Journey</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px -z-10 bg-stone-800"></div>

<div className="group relative md:bg-transparent pt-4 reveal-up bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-900 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:message-square" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-700">01</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Briefing</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">Understanding your vision, space requirements, and material preferences.</p>
</div>
</div>

<div className="group relative md:bg-transparent pt-4 reveal-up delay-100 bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-900 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:pen-tool" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-700">02</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Design</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">3D modeling and material selection to visualize the final outcome accurately.</p>
</div>
</div>

<div className="group relative md:bg-transparent pt-4 reveal-up delay-200 bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-900 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:hammer" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-700">03</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Manufacturing</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">Precision cutting and hand-finishing in our specialized workshop.</p>
</div>
</div>

<div className="group relative md:bg-transparent pt-4 reveal-up delay-300 bg-black">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:border-stone-900 group-hover:bg-stone-900 transition-colors duration-300 bg-stone-950 border-stone-800">
<iconify-icon className="group-hover:text-white transition-colors text-stone-600" icon="lucide:home" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-xs font-bold mb-2 text-stone-700">04</span>
<h3 className="text-lg font-medium mb-2 text-stone-100">Installation</h3>
<p className="text-sm text-stone-500 leading-relaxed px-4">Clean, efficient on-site assembly and final quality checks.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-950">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="reveal-text">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-stone-100">Trusted by Architects &amp; Homeowners</h2>
<p className="mb-8 font-light text-stone-400">Our commitment to quality has earned us the trust of the region's most demanding clients.</p>
<div className="flex items-center space-x-4">
<div className="flex -space-x-4">
<img alt="" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=5"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?img=8"/>
</div>
<span className="text-sm font-medium text-stone-100">4.9/5 Average Rating</span>
</div>
</div>
<div className="p-8 rounded-2xl shadow-sm border relative reveal-card bg-black border-stone-900">
<iconify-icon className="absolute top-8 left-8 text-wood-800" icon="lucide:quote" width="48"></iconify-icon>
<p className="text-lg leading-relaxed mb-6 pt-10 relative z-10 italic font-serif text-stone-300">
                        "The level of detail Kraft put into our library shelving was astonishing. They didn't just build furniture; they enhanced the entire architecture of our home. Professional from start to finish."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-stone-800 text-stone-400">ES</div>
<div>
<h4 className="text-sm font-semibold text-stone-100">Elena Santoro</h4>
<p className="text-xs text-stone-500">Interior Designer, Milan</p>
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
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Let's build something exceptional.</h2>
<p className="mb-10 font-light text-lg text-stone-600">Send us details about your project, and our technical team will get back to you with a preliminary assessment.</p>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<iconify-icon className="mt-1 text-wood-600" icon="lucide:map-pin" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-black">Workshop</h4>
<p className="text-sm text-stone-600">128 Artisan Avenue, Industrial District<br/>New York, NY 10012</p>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="mt-1 text-wood-600" icon="lucide:mail" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-black">Email</h4>
<p className="text-sm text-stone-600">projects@kraftwoodworking.com</p>
</div>
</div>
<div className="flex items-start space-x-4">
<iconify-icon className="mt-1 text-wood-600" icon="lucide:phone" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-black">Phone</h4>
<p className="text-sm text-stone-600">+1 (555) 123-4567</p>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border reveal-card bg-stone-50 border-black/10">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="name">Name</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-wood-400 focus:border-wood-400 transition-all text-sm bg-stone-100 border-stone-200 text-black" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="phone">Phone</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-wood-400 focus:border-wood-400 transition-all text-sm bg-stone-100 border-stone-200 text-black" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="email">Email</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-wood-400 focus:border-wood-400 transition-all text-sm bg-stone-100 border-stone-200 text-black" id="email" placeholder="john@company.com" type="email"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600">Project Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="w-full text-center px-4 py-3 rounded-lg border text-sm peer-checked:bg-stone-800 peer-checked:text-white peer-checked:border-wood-500 transition-all bg-stone-100 border-stone-200 text-stone-600 hover:bg-stone-200/50">Residential</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="w-full text-center px-4 py-3 rounded-lg border text-sm peer-checked:bg-stone-800 peer-checked:text-white peer-checked:border-wood-500 transition-all bg-stone-100 border-stone-200 text-stone-600 hover:bg-stone-200/50">Corporate</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-stone-600" htmlFor="message">Message</label>
<textarea className="w-full border rounded-lg px-4 py-3 placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-wood-400 focus:border-wood-400 transition-all text-sm resize-none bg-stone-100 border-stone-200 text-black" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group bg-black text-stone-100 hover:bg-wood-900" type="submit">
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
<span className="text-xl font-semibold tracking-tighter uppercase mb-6 block text-black">Kraft.</span>
<p className="text-stone-500 text-sm max-w-sm">
                        Combining industrial precision with the soul of artisanal craftsmanship. We create bespoke spaces that stand the test of time.
                    </p>
</div>
<div>
<h5 className="font-medium mb-4 text-black">Explore</h5>
<ul className="space-y-2">
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#about">About</a></li>
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#services">Services</a></li>
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#portfolio">Portfolio</a></li>
</ul>
</div>
<div>
<h5 className="font-medium mb-4 text-black">Connect</h5>
<ul className="space-y-2">
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#">Instagram</a></li>
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#">LinkedIn</a></li>
<li><a className="text-stone-500 text-sm transition-colors hover:text-black" href="#">Pinterest</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center border-black/5">
<p className="text-xs text-stone-400">© 2023 Kraft Woodworking. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-xs text-stone-400 hover:text-black" href="#">Privacy Policy</a>
<a className="text-xs text-stone-400 hover:text-black" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group text-black" href="https://wa.me/1234567890" target="_blank">
<iconify-icon icon="lucide:message-circle" strokeWidth="2" width="24"></iconify-icon>
<span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-medium ml-0 group-hover:ml-2">
            Chat with us
        </span>
</a>



    </>
  );
}
