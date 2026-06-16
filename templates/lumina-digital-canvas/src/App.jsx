import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Masked Staggered Word Reveal
            // Targets words inside .reveal-container that have .reveal-word class
            gsap.utils.toArray('.reveal-container').forEach(container => {
                const words = container.querySelectorAll('.reveal-word');
                
                gsap.to(words, {
                    y: "0%",
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%", // Triggers when top of element hits 85% of viewport height
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 2. Parallax Background Scroll
            gsap.to("#parallax-image", {
                yPercent: 25, // Move image down slightly as user scrolls past
                ease: "none",
                scrollTrigger: {
                    trigger: "#parallax-section",
                    start: "top bottom", // Start when top of section hits bottom of viewport
                    end: "bottom top",   // End when bottom of section hits top of viewport
                    scrub: true          // Smoothly links animation to scroll position
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
<div className="w-full max-w-[1440px] h-full border-x border-grid flex justify-between px-6 md:px-12">
<div className="w-px h-full bg-[#1a1a1a]/10"></div>
<div className="w-px h-full bg-[#1a1a1a]/10 hidden md:block"></div>
<div className="w-px h-full bg-[#1a1a1a]/10 hidden lg:block"></div>
<div className="w-px h-full bg-[#1a1a1a]/10"></div>
</div>
</div>

<main className="relative z-10 w-full max-w-[1440px] mx-auto bg-[#e8e6df]">

<header className="flex justify-between items-center py-5 px-6 md:px-12 border-b border-grid text-base font-medium">
<div className="flex gap-8 hidden md:flex">
<a className="hover:opacity-60 transition-opacity font-sans" href="#">Archive</a>
<a className="hover:opacity-60 transition-opacity font-sans" href="#">Creators</a>
</div>
<a className="flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2" href="#">
<span className="tracking-tighter uppercase text-lg font-sans">Lumina</span>
</a>
<div className="flex gap-8 hidden md:flex">
<a className="hover:opacity-60 transition-opacity font-sans" href="#">Journal</a>
<a className="hover:opacity-60 transition-opacity font-sans" href="#">Store</a>
</div>

<button className="md:hidden ml-auto">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>

<section className="grid grid-cols-1 md:grid-cols-12 border-b border-grid">

<div className="md:col-span-7 h-[40vh] md:h-[60vh] border-b md:border-b-0 md:border-r border-grid p-4 md:p-6 overflow-hidden relative group">
<div className="w-full h-full relative overflow-hidden bg-gray-200">
<img alt="Abstract Art" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/41184952-9122-494d-bbf9-a48cf98ed1de/1600w.jpg"/>
</div>
</div>

<div className="md:col-span-5 flex flex-col">

<div className="flex h-1/2 border-b border-grid p-4 md:p-6 gap-4">
<div className="w-3/5 h-full bg-gray-200 overflow-hidden relative group">
<img alt="Classic Car" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/d03690bc-d8e5-4024-848b-61f76d45afe0/800w.png"/>
</div>
<div className="w-2/5 h-full flex flex-col justify-center items-center">
<span className="text-[5rem] md:text-[7rem] leading-none tracking-tighter font-dm-sans font-light">24</span>
<span className="text-xs uppercase tracking-widest font-sans">[Vol.1]</span>
</div>
</div>

<div className="flex h-1/2 p-4 md:p-6 gap-4">
<div className="w-1/2 h-full bg-gray-200 overflow-hidden relative group">
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/4b10aa04-289b-432c-acd3-1679f6046882/800w.png"/>
</div>
<div className="w-1/2 h-full bg-gray-200 overflow-hidden relative group">
<img alt="Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/ef27bdba-b57e-4fc6-b6a6-17698dbf7749/800w.png"/>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 border-b border-grid relative">
<div className="flex justify-between items-center text-xs uppercase tracking-widest mb-12 text-[#1a1a1a]/60">
<span className="font-sans">(*01)</span>
<span className="font-sans">Manifesto</span>
<span className="font-sans">(2024)</span>
</div>
<h1 className="text-[clamp(3.5rem,8vw,11rem)] leading-[0.85] font-medium tracking-tighter uppercase flex flex-wrap items-center gap-x-4 md:gap-x-8 gap-y-2 reveal-container">
<span className="overflow-hidden inline-flex pb-4"><span className="reveal-word block translate-y-[110%] font-dm-sans font-light">Digital</span></span>
<span className="overflow-hidden inline-flex items-center pb-4">
<iconify-icon className="reveal-word block translate-y-[110%] text-[clamp(3rem,6vw,8rem)] text-[#1a1a1a]" icon="solar:asterisk-linear"></iconify-icon>
</span>
<span className="overflow-hidden inline-flex pb-4"><span className="reveal-word block translate-y-[110%] font-dm-sans font-light">Canvas</span></span>
</h1>
<div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-4 text-xs uppercase tracking-widest text-[#1a1a1a]/60 pt-2 border-t border-grid w-32 font-sans">
                    [Est. 2018]
                </div>
<div className="md:col-span-8 text-base md:text-lg leading-relaxed max-w-3xl font-sans">
                    Lumina Studio is an avant-garde space dedicated to redefining the boundaries of digital and physical art. We believe in the visceral power of design to provoke thought, challenge norms, and construct entirely new visual vocabularies for the modern era.
                </div>
</div>
</section>

<section className="py-10 border-b border-grid bg-[#1a1a1a] text-[#e8e6df]">
<div className="marquee-container">
<div className="marquee-content items-center gap-16 px-8">

<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:sony" width="64"></iconify-icon>

<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 border-b border-grid">
<div className="md:col-span-5 p-6 md:p-12 border-b md:border-b-0 md:border-r border-grid flex flex-col justify-between">
<div>
<span className="text-xs uppercase tracking-widest text-[#1a1a1a]/60 block mb-6 font-sans">01 / Studio</span>
<h2 className="text-5xl md:text-7xl tracking-tighter mb-8 font-dm-sans font-light">Our <br/>Story.</h2>
</div>
<a className="inline-flex items-center gap-2 border border-grid rounded-full px-6 py-3 w-max hover:bg-[#1a1a1a] hover:text-[#e8e6df] transition-colors text-base font-medium font-sans" href="#">
                    Discover More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="md:col-span-7 p-6 md:p-12">
<div className="aspect-[16/9] md:aspect-[4/3] w-full bg-gray-200 overflow-hidden mb-8 relative group">
<img alt="Studio Setup" className="w-full h-full object-cover filter grayscale transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45211788-2848-430a-9e43-0a8eea33cea9_1600w.jpg"/>
</div>
<p className="text-base md:text-lg leading-relaxed max-w-2xl ml-auto font-sans">
                    Operating at the intersection of technology and traditional craftsmanship, our team of visionaries meticulously curates experiences that transcend the ordinary. Every project is a testament to our commitment to aesthetic perfection and conceptual depth.
                </p>
</div>
</section>

<section className="h-[50vh] md:h-[70vh] w-full overflow-hidden relative border-b border-grid" id="parallax-section">
<div className="absolute w-full h-[130%] -top-[15%] left-0" id="parallax-image">
<img alt="Abstract Architecture" className="w-full h-full object-cover filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3aff974c-dfe3-4b5b-806b-fb6a599a5f55_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-[#1a1a1a]/30 flex items-center justify-center p-6 text-center">
<h3 className="text-[#e8e6df] text-4xl md:text-6xl tracking-tight max-w-4xl font-dm-sans font-light">
                    "Designing the unseen, structuring the ephemeral."
                </h3>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 border-b border-grid">
<div className="lg:col-span-4 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-grid">
<span className="text-xs uppercase tracking-widest text-[#1a1a1a]/60 block mb-6 font-sans">02 / Archive</span>
<h2 className="text-4xl md:text-5xl tracking-tighter font-dm-sans font-light">Recent<br/>Projects.</h2>
</div>
<div className="lg:col-span-8 flex flex-col">

<a className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border-b border-grid hover:bg-[#1a1a1a]/5 transition-colors gap-6" href="#">
<div className="flex-1">
<h3 className="text-xl md:text-2xl tracking-tight mb-2 group-hover:translate-x-2 transition-transform font-dm-sans font-light">Echoes of Silence: Minimalist Forms</h3>
<p className="text-[#1a1a1a]/60 text-base font-sans">Oct 12 — Dec 05, 2023</p>
</div>
<div className="w-full md:w-48 aspect-[2/1] overflow-hidden bg-gray-200 shrink-0">
<img alt="Project 1" className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd45b08d-8cb4-4d75-bbf2-3e1fa7ad6459_800w.webp"/>
</div>
<i className="hidden md:block w-6 h-6 text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>

<a className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border-b border-grid hover:bg-[#1a1a1a]/5 transition-colors gap-6" href="#">
<div className="flex-1">
<h3 className="text-xl md:text-2xl tracking-tight mb-2 group-hover:translate-x-2 transition-transform font-dm-sans font-light">Synthetic Nature: A Digital Flora</h3>
<p className="text-[#1a1a1a]/60 text-base font-sans">Jan 20 — Mar 15, 2024</p>
</div>
<div className="w-full md:w-48 aspect-[2/1] overflow-hidden bg-gray-200 shrink-0">
<img alt="Project 2" className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d32d764-4d1b-43c4-a5f8-5fd80381faa8_800w.webp"/>
</div>
<i className="hidden md:block w-6 h-6 text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>

<a className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 hover:bg-[#1a1a1a]/5 transition-colors gap-6" href="#">
<div className="flex-1">
<h3 className="text-xl md:text-2xl tracking-tight mb-2 group-hover:translate-x-2 transition-transform font-dm-sans font-light">Monochrome Dynamics &amp; Light</h3>
<p className="text-[#1a1a1a]/60 text-base font-sans">Apr 02 — Jun 30, 2024</p>
</div>
<div className="w-full md:w-48 aspect-[2/1] overflow-hidden bg-gray-200 shrink-0">
<img alt="Project 3" className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca9a6afa-96a2-47bc-95e6-1d3002ad272b_800w.jpg"/>
</div>
<i className="hidden md:block w-6 h-6 text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 border-b border-grid">
<div className="lg:col-span-4 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-grid flex flex-col justify-between">
<div>
<span className="text-xs uppercase tracking-widest text-[#1a1a1a]/60 block mb-6 font-sans">03 / People</span>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-dm-sans font-light">The<br/>Creators.</h2>
</div>
<p className="text-base text-[#1a1a1a]/80 max-w-sm font-sans">
                    Meet the minds shaping Lumina's vision. A collective of distinct voices unified by a singular pursuit of design excellence.
                </p>
</div>
<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 border-grid">

<div className="aspect-[3/4] border-r border-b md:border-b-0 border-grid relative group overflow-hidden bg-gray-200">
<img alt="Creator" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a92b3294-0e4b-4d76-9955-36515f498a51_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent text-[#e8e6df] opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium tracking-tight font-sans">Elias Vance</p>
<p className="text-xs opacity-80 font-sans">Creative Dir.</p>
</div>
</div>

<div className="aspect-[3/4] border-r border-b md:border-b-0 border-grid relative group overflow-hidden bg-gray-200">
<img alt="Creator" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70502567-d08c-4d62-a15d-7c07d010ddc4_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent text-[#e8e6df] opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium tracking-tight font-sans">Maya Lin</p>
<p className="text-xs opacity-80 font-sans">Lead Designer</p>
</div>
</div>

<div className="aspect-[3/4] border-r border-b md:border-b-0 border-grid relative group overflow-hidden bg-gray-200">
<img alt="Creator" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f8ee86e-45b5-4d46-8bfb-9239d01291f4_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent text-[#e8e6df] opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium tracking-tight font-sans">Julian Cole</p>
<p className="text-xs opacity-80 font-sans">Technologist</p>
</div>
</div>

<div className="aspect-[3/4] relative group overflow-hidden bg-gray-200">
<img alt="Creator" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c31c76c-b1a0-4f67-87a4-0f4519b6fda4_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent text-[#e8e6df] opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium tracking-tight font-sans">Sarah Chen</p>
<p className="text-xs opacity-80 font-sans">Curator</p>
</div>
</div>
</div>
</section>

<footer className="py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="max-w-4xl relative z-10">
<p className="text-2xl md:text-4xl tracking-tight leading-snug mb-8 font-dm-sans font-light">
                    Step inside the nexus of computation and  artistic expression. This sanctuary provides a glimpse into the void where raw data translates into pure visual emotion.
                </p>
<div className="flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-[#1a1a1a]/60 mt-12">
<span className="font-sans">Lumina Studio</span>
<span className="font-sans">© 2024</span>
<span className="font-sans">All Rights Reserved</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] tracking-tighter text-[#1a1a1a]/[0.03] whitespace-nowrap pointer-events-none select-none z-0 uppercase font-dm-sans font-light">
                End of Transmission
            </div>
</footer>
</main>


    </>
  );
}
