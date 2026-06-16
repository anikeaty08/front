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
sand: {
50: '#FBF9F6',
100: '#F5F1EB',
200: '#EBE6E1', // Main BG
300: '#DED6CD',
800: '#3A2E26', // Main Text
900: '#2D241E',
},
accent: {
orange: '#F25F3A'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Text Reveal Animation (Masked Staggered Word Reveal)
            const revealElements = document.querySelectorAll('.reveal-text');
            
            revealElements.forEach(element => {
                // Split text into words manually to avoid SplitText dependency
                const words = element.innerText.split(' ');
                element.innerHTML = '';
                
                words.forEach(word => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'inline-block overflow-hidden align-top mr-[0.2em] mb-1'; // Mask
                    
                    const inner = document.createElement('span');
                    inner.className = 'reveal-word-inner inline-block translate-y-full';
                    inner.innerText = word;
                    
                    wrapper.appendChild(inner);
                    element.appendChild(wrapper);
                });

                // Animate words
                gsap.to(element.querySelectorAll('.reveal-word-inner'), {
                    y: 0,
                    duration: 1.2,
                    stagger: 0.02,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 2. Parallax Image Effect
            gsap.to(".parallax-img", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: ".parallax-img",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // 3. Header Intro Animation
            gsap.from(".reveal-header", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });

            // 4. Staggered List Items
            gsap.from("dl > div", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "dl",
                    start: "top 80%"
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex items-start justify-between mix-blend-multiply pointer-events-none">

<div className="pointer-events-auto flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-stone-800" height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
<span className="font-serif text-xl tracking-tighter font-semibold text-stone-900 group-hover:opacity-70 transition-opacity">Sixtine</span>
</div>

<div className="hidden md:flex items-center gap-1 font-sans text-xs tracking-wide uppercase text-stone-600 pointer-events-auto mt-2">
<a className="hover:text-stone-900 transition-colors" href="#">Studio</a>
<span className="opacity-30 px-2">/</span>
<a className="hover:text-stone-900 transition-colors" href="#">Expertise</a>
<span className="opacity-30 px-2">/</span>
<a className="hover:text-stone-900 transition-colors" href="#">Journal</a>
<span className="opacity-30 px-2">/</span>
<a className="hover:text-stone-900 transition-colors" href="#">Portfolio</a>
<span className="opacity-30 px-2">/</span>
<a className="hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>

<div className="pointer-events-auto">
<button aria-label="Open Menu" className="text-accent-orange hover:rotate-45 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-circle-equal md:w-10 md:h-10 stroke-[1.5]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="circle-equal" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(242, 95, 58)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10h10"></path><path d="M7 14h10"></path><circle cx="12" cy="12" r="10"></circle></svg>
</button>
</div>
</nav>
<main className="pt-32 md:pt-40 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-between pb-12">

<div className="relative w-full mb-12">
<div className="flex flex-col">

<h1 className="md:text-8xl lg:text-[9rem] leading-[0.8] reveal-header text-6xl text-stone-900 tracking-tight font-serif">
                    Timeless
                </h1>

<div className="flex flex-col md:flex-row items-end md:items-center w-full mt-4 md:mt-2 gap-4 md:gap-8">
<h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.8] tracking-tight text-stone-900 italic reveal-header">
                        Spatial
                    </h1>

<div className="hidden md:block h-[2px] bg-stone-800 flex-grow opacity-20 relative top-2"></div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.8] tracking-tight text-stone-900 reveal-header text-right">
                        Design
                    </h1>
</div>
</div>

<div className="absolute top-0 right-0 md:right-[15%] w-48 md:w-56 hidden lg:block opacity-0 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
<div className="flex justify-between items-center mb-2 border-b border-stone-800/20 pb-1">
<span className="font-sans text-[10px] uppercase tracking-wider text-stone-500">Start the dialogue</span>
</div>
<div className="relative aspect-video w-full overflow-hidden rounded-sm bg-stone-300 mb-3 group cursor-pointer">
<img alt="Eco Cabin Detail" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14e124ae-5fbe-471c-a4e9-3bf6e883abdb_800w.webp"/>
<div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-end border-b border-transparent md:border-stone-800/10 pb-2 mb-4">
<span className="font-sans text-xs uppercase tracking-wide text-stone-500">The Sixtine Residence</span>
<span className="font-sans text-xs uppercase tracking-wide text-stone-500">2024</span>
<span className="font-sans text-xs uppercase tracking-wide text-stone-500 hidden md:inline">Private Estate</span>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-sm group mb-4">
<img alt="Sustainable Modern Wooden House in Snow" className="w-full h-full object-cover parallax-img scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/305bc72d-b4d1-4c66-bf8c-c6cc8215cec9_3840w.webp"/>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
<div className="bg-stone-900/90 backdrop-blur-sm text-sand-100 px-4 py-2 rounded-full flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-medium tracking-wide">Award Winning Design</span>
</div>
</div>
</div>

<div className="flex justify-between items-center w-full pt-4 pb-20 border-b border-stone-800/20">
<div className="flex flex-col">
<span className="font-sans text-xs text-stone-500 mb-1">Featured Work</span>
<span className="font-serif text-lg text-stone-800 hover:text-stone-600 cursor-pointer transition-colors">Azure Coast Villa</span>
</div>
<a className="group flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-stone-800 hover:opacity-60 transition-opacity" href="#">
                View Project
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</main>

<section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">

<div className="max-w-5xl mb-24">
<h2 className="reveal-text font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-stone-900 tracking-tight">
                At Sixtine, we believe space is an emotion. We curate environments that transcend utility to become expressions of pure artistry and refined living.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">

<div className="md:col-span-5 flex flex-col gap-8">
<p className="font-sans text-stone-600 leading-relaxed text-sm md:text-base">
                    We orchestrate light, texture, and volume to create homes that feel inevitable. From bespoke architectural planning to the thoughtful selection of heritage materials, every project we undertake is a study in silence, beauty, and the art of dwelling.
                </p>
<button className="w-fit font-sans text-xs font-semibold tracking-wider uppercase border-b border-stone-800 pb-1 hover:text-stone-600 hover:border-stone-400 transition-all">
                    Explore The Studio
                </button>
</div>

<div className="md:col-span-7 relative">
<div className="flex flex-col md:flex-row gap-8 items-end">
<div className="w-full md:w-2/3">
<img alt="Minimal Cabin Window" className="w-full aspect-[4/5] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fae8a4f-dbea-4b69-b5f9-b0afdeda5fc3_1600w.webp"/>
</div>
<div className="w-full md:w-1/3 flex flex-col justify-end pb-4">
<div className="flex items-center justify-between border-t border-stone-800/20 pt-4 mt-auto">
<span className="font-serif italic text-stone-500">The Studio</span>
<div className="w-10 h-10 rounded-full border border-stone-800/20 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors cursor-pointer group">
<i className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-300/30 py-24 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<span className="block font-sans text-xs uppercase tracking-wide text-stone-500 mb-4">Approach</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight mb-12 tracking-tight">
                        Define Your <br/> <span className="italic text-stone-600">Signature</span> Legacy
                    </h2>
<div className="aspect-[3/4] overflow-hidden rounded-sm relative">
<img alt="Interior Wood Structure" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5327e46d-6195-4493-8fcb-a391f9adaad5_1600w.webp"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="mb-12">
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">Bespoke Interiors,</h3>
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 italic">Curated for You</h3>
</div>
<dl className="flex flex-col">

<div className="py-6 border-b border-stone-800/10 flex justify-between items-center group hover:bg-white/30 px-4 -mx-4 transition-colors rounded-sm">
<dt className="font-sans text-xs md:text-sm text-stone-600">Year Completed</dt>
<dd className="font-sans text-sm md:text-base font-medium text-stone-900">2024</dd>
</div>

<div className="py-6 border-b border-stone-800/10 flex justify-between items-center group hover:bg-white/30 px-4 -mx-4 transition-colors rounded-sm">
<dt className="font-sans text-xs md:text-sm text-stone-600">Project Scale</dt>
<dd className="font-sans text-sm md:text-base font-medium text-stone-900">45 custom residences per annum</dd>
</div>

<div className="py-6 border-b border-stone-800/10 flex justify-between items-center group hover:bg-white/30 px-4 -mx-4 transition-colors rounded-sm">
<dt className="font-sans text-xs md:text-sm text-stone-600">Material Sourcing</dt>
<dd className="font-sans text-sm md:text-base font-medium text-stone-900">100% ethically sourced stone</dd>
</div>

<div className="py-6 border-b border-stone-800/10 flex justify-between items-center group hover:bg-white/30 px-4 -mx-4 transition-colors rounded-sm">
<dt className="font-sans text-xs md:text-sm text-stone-600">Design Phase</dt>
<dd className="font-sans text-sm md:text-base font-medium text-stone-900">12 weeks of bespoke planning</dd>
</div>

<div className="py-6 border-b border-stone-800/10 flex justify-between items-center group hover:bg-white/30 px-4 -mx-4 transition-colors rounded-sm">
<dt className="font-sans text-xs md:text-sm text-stone-600">Client Retention</dt>
<dd className="font-sans text-sm md:text-base font-medium text-stone-900">98% satisfaction rate</dd>
</div>

<div className="py-6 border-b border-stone-800/10 flex justify-between items-center group hover:bg-white/30 px-4 -mx-4 transition-colors rounded-sm">
<dt className="font-sans text-xs md:text-sm text-stone-600">Asset Value</dt>
<dd className="font-sans text-sm md:text-base font-medium text-stone-900">+35% average valuation increase</dd>
</div>
</dl>
<div className="mt-8 text-right">
<a className="inline-block font-sans text-xs font-bold uppercase tracking-wider text-stone-900 border-b-2 border-transparent hover:border-stone-900 transition-all pb-1" href="#">Download Case Study</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="text-center mb-16">
<span className="font-sans text-xs uppercase tracking-wide text-stone-500">Collaborators</span>
<h3 className="mt-4 font-serif text-3xl text-stone-900">Building for world-class innovators</h3>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-60 mb-24">
<iconify-icon className="hover:text-stone-900 hover:scale-110 transition-all duration-300" height="48" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon className="hover:text-stone-900 hover:scale-110 transition-all duration-300" height="48" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="hover:text-stone-900 hover:scale-110 transition-all duration-300" height="48" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon className="hover:text-stone-900 hover:scale-110 transition-all duration-300" height="48" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="hover:text-stone-900 hover:scale-110 transition-all duration-300" height="48" icon="simple-icons:grab" width="48"></iconify-icon>
<iconify-icon className="hover:text-stone-900 hover:scale-110 transition-all duration-300" height="48" icon="simple-icons:tesla" width="48"></iconify-icon>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white/40 p-8 rounded-sm hover:bg-white transition-colors duration-500 group">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8322831-e2ba-4007-9960-8e7e82b00480_320w.webp"/>
<div>
<h4 className="font-serif text-lg text-stone-900">Alexander Vane</h4>
<p className="font-sans text-xs text-stone-500">CEO at Aura</p>
</div>
</div>
<p className="font-sans text-stone-700 italic">"Sixtine didn't just design a house; they curated a lifestyle. The flow of the space completely changed how I experience my daily rituals."</p>
</div>

<div className="bg-white/40 p-8 rounded-sm hover:bg-white transition-colors duration-500 group">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bed8bec-4438-48f4-9365-2c943b97dd1b_320w.webp"/>
<div>
<h4 className="font-serif text-lg text-stone-900">Isabelle Dubois</h4>
<p className="font-sans text-xs text-stone-500">Founder of Art/House</p>
</div>
</div>
<p className="font-sans text-stone-700 italic">"An absolute masterclass in restraint and elegance. They understood that true luxury is about what you take away, not just what you add."</p>
</div>
</div>
</section>

<footer className="bg-stone-900 text-sand-100 py-24 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto text-center">
<h2 className="font-serif text-4xl md:text-6xl mb-8">Ready to define your space?</h2>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<button className="bg-sand-100 text-stone-900 px-8 py-4 rounded-full font-sans font-semibold tracking-wide hover:bg-white transition-colors">
                    Inquire Now
                </button>
<button className="bg-transparent border border-stone-600 text-sand-100 px-8 py-4 rounded-full font-sans font-semibold tracking-wide hover:border-sand-100 transition-colors">
                    View Lookbook
                </button>
</div>
<div className="mt-24 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center font-sans text-xs text-stone-500">
<p>© 2025 Sixtine Interiors. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-sand-100" href="#">Privacy</a>
<a className="hover:text-sand-100" href="#">Terms</a>
<a className="hover:text-sand-100" href="#">Instagram</a>
</div>
</div>
</div>
</footer>


<style>
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation-name: fade-in-up;
            animation-duration: 0.8s;
            animation-fill-mode: both;
        }
    </style>

    </>
  );
}
