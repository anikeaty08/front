import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Interaction Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Trigger once
                }
            });
        }, observerOptions);

        // Select all elements that need to animate
        const animatedElements = document.querySelectorAll('.scroll-trigger, .mask-reveal, .scale-reveal-img');
        
        document.querySelectorAll('.scroll-trigger').forEach((element) => {
            observer.observe(element);
        });

        // Parallax Effect for Footer Text & Images
        document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const heroText = document.querySelector('.hero-bg-anim img');
            if(heroText) {
                heroText.style.transform = `scale(${1 + scrollPosition * 0.0001})`;
            }
            
            // Navbar blur intensity
            const nav = document.getElementById('navbar');
            if (scrollPosition > 50) {
                nav.classList.add('bg-black/80', 'py-0');
            } else {
                nav.classList.remove('bg-black/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-black/40 transition-all duration-500" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="mask-container group" href="#">
<span className="mask-reveal is-visible text-xl tracking-tighter font-semibold text-white uppercase z-50 flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:aperture" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
                    Lumière
                </span>
</a>
<div className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors duration-300 relative group overflow-hidden" href="#studio">
<span className="relative z-10">STUDIO</span>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group overflow-hidden" href="#work">
<span className="relative z-10">SELECTED WORK</span>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group overflow-hidden" href="#process">
<span className="relative z-10">PROCESS</span>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group overflow-hidden" href="#contact">
<span className="relative z-10">CONTACT</span>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="mask-container">
<a className="mask-reveal is-visible delay-300 hidden md:flex items-center gap-2 text-xs font-semibold bg-white text-black px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-all duration-300 group hover:scale-105 active:scale-95" href="#contact">
<span>START PROJECT</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<button className="md:hidden text-white">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex items-center overflow-hidden">

<div className="absolute inset-0 z-0 hero-bg-anim">
<img alt="Cinematic Background" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/90"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30"></div>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-12 items-center">
<div className="hidden lg:block lg:col-span-6"></div>

<div className="lg:col-span-6 flex flex-col justify-center items-start pl-0 lg:pl-12">
<div className="space-y-[-5px] md:space-y-[-10px] lg:space-y-[-15px] mb-8 mt-16">
<div className="mask-container">
<h1 className="mask-reveal is-visible text-6xl md:text-8xl lg:text-[7rem] leading-[0.8] font-semibold tracking-tighter text-white">
                            VISUALS
                        </h1>
</div>
<div className="mask-container">
<h1 className="mask-reveal is-visible delay-100 text-6xl md:text-8xl lg:text-[7rem] leading-[0.8] font-semibold tracking-tighter text-white">
                            THAT
                        </h1>
</div>
<div className="mask-container">
<h1 className="mask-reveal is-visible delay-200 md:text-8xl lg:text-[7rem] leading-[0.8] text-6xl text-neutral-400 font-serif-italic opacity-90">
                            transcend
                        </h1>
</div>
<div className="mask-container">
<h1 className="mask-reveal is-visible delay-300 text-6xl md:text-8xl lg:text-[7rem] leading-[0.8] font-semibold tracking-tighter text-white">
                            REALITY
                        </h1>
</div>
</div>
<div className="mask-container mt-2">
<p className="mask-reveal is-visible delay-500 text-sm md:text-base text-neutral-400 max-w-md tracking-wide leading-relaxed">
                        A premium cinematography studio crafting award-winning narratives for global brands and visionaries.
                    </p>
</div>
<div className="mask-container mt-8">
<div className="mask-reveal is-visible delay-700">
<a className="inline-flex items-center justify-center text-xs font-bold tracking-wider text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 group" href="#work">
                            VIEW SHOWREEL
                            <svg aria-hidden="true" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="py-8 border-y border-white/5 bg-black/40 overflow-hidden relative z-20 backdrop-blur-sm">
<div className="marquee-container w-full flex whitespace-nowrap">
<div className="marquee-content flex gap-24 items-center min-w-full pl-24">
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">NETFLIX</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">A24</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">HBO MAX</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">VOGUE</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">UNIVERSAL</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">SONY PICTURES</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">WARNER BROS</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">APPLE TV+</span>

<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">NETFLIX</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">A24</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">HBO MAX</span>
<span className="text-lg font-semibold tracking-tight text-neutral-600 hover:text-white transition-colors cursor-default duration-300">VOGUE</span>
</div>
</div>
</section>

<section className="py-32 px-6" id="studio">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
<div className="scroll-trigger">
<div className="fade-up-element">
<h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-6 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> The Studio
                    </h2>
</div>
<div className="mask-container">
<h3 className="mask-reveal text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05]">
                        We exist in the space
                    </h3>
</div>
<div className="mask-container">
<h3 className="mask-reveal delay-100 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05]">
                        between <span className="text-neutral-500">technical precision</span>
</h3>
</div>
<div className="mask-container">
<h3 className="mask-reveal delay-200 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05]">
                        and <span className="font-serif-italic italic text-neutral-300">raw emotion.</span>
</h3>
</div>
</div>
<div className="space-y-8 scroll-trigger">
<p className="fade-up-element delay-300 text-neutral-400 leading-relaxed font-light text-lg max-w-lg">
                    Lumière was founded on a simple principle: every frame should be a painting. We utilize state-of-the-art cinematic robotics and large format sensors to capture the unseen details of our world.
                </p>
<div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10 relative">
<div className="absolute top-0 left-0 h-[1px] bg-white expand-line"></div>
<div className="fade-up-element delay-400">
<div className="text-4xl font-light text-white mb-2">8K</div>
<div className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Red Raptor Workflow</div>
</div>
<div className="fade-up-element delay-500">
<div className="text-4xl font-light text-white mb-2">15+</div>
<div className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">International Awards</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="work">
<div className="max-w-[1400px] mx-auto mb-16 flex justify-between items-end scroll-trigger">
<div className="mask-container">
<h2 className="mask-reveal text-4xl font-medium tracking-tight text-white">Selected Works</h2>
</div>
<a className="hidden md:flex text-xs font-bold tracking-wide text-neutral-400 hover:text-white transition-colors gap-2 items-center group fade-up-element delay-200" href="#">
                VIEW ARCHIVE
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1400px] mx-auto">

<div className="group cursor-pointer scroll-trigger">
<div className="project-card relative overflow-hidden bg-neutral-900 aspect-[16/10] mb-6 scale-reveal-container rounded-sm">
<img alt="Project 1" className="scale-reveal-img project-img w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/425f5489-ca76-4a80-aea1-448a92525210_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white tracking-widest uppercase mb-2 fade-up-element delay-300">Automotive</span>
</div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6 relative">
<div className="absolute bottom-0 left-0 h-[1px] bg-white expand-line group-hover:w-full transition-all duration-700 ease-out" style={{width: '0'}}></div>
<div className="fade-up-element delay-100">
<h3 className="text-xl font-medium text-white mb-1">Midnight Run</h3>
<p className="text-sm text-neutral-500">Porsche • Commercial</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group cursor-pointer md:mt-24 scroll-trigger">
<div className="project-card relative overflow-hidden bg-neutral-900 aspect-[16/10] mb-6 scale-reveal-container rounded-sm">
<img alt="Project 2" className="scale-reveal-img project-img w-full h-full object-cover grayscale delay-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dba46275-5f34-4633-9538-5372efd3342a_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white tracking-widest uppercase mb-2 fade-up-element delay-500">Documentary</span>
</div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6 relative">
<div className="absolute bottom-0 left-0 h-[1px] bg-white expand-line group-hover:w-full transition-all duration-700 ease-out" style={{width: '0'}}></div>
<div className="fade-up-element delay-100">
<h3 className="text-xl font-medium text-white mb-1">Silent Echoes</h3>
<p className="text-sm text-neutral-500">National Geographic • Short Film</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group cursor-pointer scroll-trigger">
<div className="project-card relative overflow-hidden bg-neutral-900 aspect-[16/10] mb-6 scale-reveal-container rounded-sm">
<img alt="Project 3" className="scale-reveal-img project-img w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d60959fd-77c4-42ba-98e1-994af89ef0b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white tracking-widest uppercase mb-2 fade-up-element delay-300">Fashion</span>
</div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6 relative">
<div className="absolute bottom-0 left-0 h-[1px] bg-white expand-line group-hover:w-full transition-all duration-700 ease-out" style={{width: '0'}}></div>
<div className="fade-up-element delay-100">
<h3 className="text-xl font-medium text-white mb-1">Ethereal Form</h3>
<p className="text-sm text-neutral-500">Saint Laurent • Campaign</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group cursor-pointer md:mt-24 scroll-trigger">
<div className="project-card relative overflow-hidden bg-neutral-900 aspect-[16/10] mb-6 scale-reveal-container rounded-sm">
<img alt="Project 4" className="scale-reveal-img project-img w-full h-full object-cover grayscale delay-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2fc6005-cb2e-4641-ad9a-4e31da37011f_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white tracking-widest uppercase mb-2 fade-up-element delay-500">Technology</span>
</div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6 relative">
<div className="absolute bottom-0 left-0 h-[1px] bg-white expand-line group-hover:w-full transition-all duration-700 ease-out" style={{width: '0'}}></div>
<div className="fade-up-element delay-100">
<h3 className="text-xl font-medium text-white mb-1">Future State</h3>
<p className="text-sm text-neutral-500">Sony • Product Reveal</p>
</div>
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5 relative" id="process">
<div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 scroll-trigger">
<div className="mask-container mb-6">
<h2 className="mask-reveal text-3xl font-medium tracking-tight text-white">Technical Artistry</h2>
</div>
<p className="fade-up-element delay-100 text-neutral-400 font-light text-sm leading-7 mb-8">
                        We don't just point and shoot. We engineer the shot. From high-speed robotics to custom color science, our pipeline is world-class.
                    </p>
<a className="fade-up-element delay-200 text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-1 hover:border-white transition-colors inline-flex items-center gap-2 group" href="#contact">
                        View Equipment List 
                        <svg aria-hidden="true" data-icon="lucide:download" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 scroll-trigger">

<div className="bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-colors group fade-up-element delay-100">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:text-black">
<svg aria-hidden="true" data-icon="lucide:clapperboard" data-width="22" height="22" role="img" strokeWidth="1.2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Zm-14-.7l3.1 3.9m3.1-5.8l3.1 4M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Pre-Production</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Concept development, storyboarding, location scouting, and casting. We lay the foundation for visual excellence.</p>
</div>

<div className="bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-colors group fade-up-element delay-200">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:text-black">
<svg aria-hidden="true" data-icon="lucide:aperture" data-width="22" height="22" role="img" strokeWidth="1.2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Cinematography</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Utilizing RED Monstro 8K and ARRI Alexa LF systems. High-speed, aerial, and underwater capabilities.</p>
</div>

<div className="bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-colors group fade-up-element delay-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:text-black">
<svg aria-hidden="true" data-icon="lucide:monitor-play" data-width="22" height="22" role="img" strokeWidth="1.2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Post-Production</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Offline/Online edit, VFX compositing, and sound design. A seamless workflow from set to screen.</p>
</div>

<div className="bg-[#080808] p-10 hover:bg-[#0c0c0c] transition-colors group fade-up-element delay-400">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:text-black">
<svg aria-hidden="true" data-icon="lucide:palette" data-width="22" height="22" role="img" strokeWidth="1.2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Color Grading</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">HDR mastering in our Dolby Vision certified theater. We define the mood and tone of your narrative.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-[1400px] mx-auto scroll-trigger">
<div className="mask-container mb-12">
<h2 className="mask-reveal text-2xl font-medium tracking-tight text-white">Director's Notes</h2>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x scrollbar-hide fade-up-element delay-200">

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] p-14 rounded-sm bg-[#0a0a0a] border border-white/5 relative group hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-8 right-8 text-neutral-800 group-hover:text-white/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-neutral-300 font-light leading-relaxed mb-8 relative z-10 text-lg">
                        "Lumière transformed our vague concept into a visual masterpiece. Their attention to lighting and composition is unmatched in the industry."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm">S</div>
<div>
<div className="text-base font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Creative Director, Vogue</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] p-14 rounded-sm bg-[#0a0a0a] border border-white/5 relative group hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-8 right-8 text-neutral-800 group-hover:text-white/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-neutral-300 font-light leading-relaxed mb-8 relative z-10 text-lg">
                        "Professional, punctual, and creatively inspiring. The team knows how to handle high-pressure sets with famous talent seamlessly."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">M</div>
<div>
<div className="text-base font-medium text-white">Marcus Thorne</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Producer, Netflix</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] p-14 rounded-sm bg-[#0a0a0a] border border-white/5 relative group hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-8 right-8 text-neutral-800 group-hover:text-white/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-neutral-300 font-light leading-relaxed mb-8 relative z-10 text-lg">
                        "The color science they bring to the table is incredible. Our product campaign looked cinematic and expensive. Highly recommended."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">E</div>
<div>
<div className="text-base font-medium text-white">Elena Rostova</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">CMO, Polestar</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 px-6 border-t border-white/10 bg-[#080808] overflow-hidden" id="contact">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 scroll-trigger">
<div>
<div className="mask-container">
<h2 className="mask-reveal text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-8">
                            Let's create <br/> history.
                        </h2>
</div>
<p className="fade-up-element delay-200 text-neutral-400 max-w-sm mb-10 font-light text-lg">
                        Available for global commissions. Currently booking for Q4 2024.
                    </p>
<a className="fade-up-element delay-300 inline-flex items-center gap-3 text-white border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 group" href="mailto:hello@lumiere.com">
<span className="font-bold text-sm tracking-widest">BOOK A CONSULTATION</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="md:pl-20 flex flex-col justify-end space-y-16 fade-up-element delay-500">
<div className="grid grid-cols-2 gap-12">
<div>
<h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Los Angeles</h4>
<p className="text-neutral-300 text-sm leading-7">
                                1200 Arts District,<br/>
                                Suite 404, CA 90013
                            </p>
</div>
<div>
<h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">London</h4>
<p className="text-neutral-300 text-sm leading-7">
                                45 Shoreditch High St,<br/>
                                London E1 6JJ, UK
                            </p>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Socials</h4>
<div className="flex gap-8">
<a className="text-neutral-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" href="#"><svg aria-hidden="true" data-icon="lucide:linkedin" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" href="#"><span className="iconify" data-icon="lucide:vimeo" data-width="22"></span></a>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-neutral-600 uppercase tracking-widest">
<p>© 2024 LUMIÈRE STUDIOS. All Rights Reserved.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Credits</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
<h1 className="text-[18vw] leading-[0.7] font-bold tracking-tighter text-white text-center whitespace-nowrap mask-container">
<span className="mask-reveal is-visible delay-500">LUMIÈRE</span>
</h1>
</div>
</footer>


    </>
  );
}
