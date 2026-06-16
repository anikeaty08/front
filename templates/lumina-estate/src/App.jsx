import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Grid & Layout Animations
            gsap.from(".bg-line", {
                scaleY: 0,
                duration: 1.8,
                ease: "power3.inOut",
                stagger: 0.15,
                delay: 0.2
            });

            // General section fade-up on scroll
            gsap.utils.toArray(".section-animate").forEach(sec => {
                gsap.from(sec, {
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 2. Warping Grayscale Displacement Image Reveal
            document.querySelectorAll('.warp-image').forEach((img, i) => {
                // Ensure ID is fully unique to prevent caching and reference bugs
                const filterId = `warp-filter-${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${i}`;
                
                const svgWrapper = document.createElement('div');
                svgWrapper.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" style="position:absolute; width:0; height:0; pointer-events:none;">
                        <filter id="${filterId}" color-interpolation-filters="sRGB">
                            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G" class="disp-map" />
                            <feColorMatrix type="saturate" values="0" class="sat-mat" />
                        </filter>
                    </svg>
                `;
                document.body.appendChild(svgWrapper);
                
                // Apply filter dynamically so it doesn't conflict with old cached inline styles
                img.style.filter = `url(#${filterId})`;
                
                const dispMap = svgWrapper.querySelector('.disp-map');
                const satMat = svgWrapper.querySelector('.sat-mat');

                gsap.set(img, { scale: 1.25 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: img,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });

                tl.to(dispMap, {
                    attr: { scale: 0 },
                    duration: 1.5,
                    ease: "power3.out"
                }, 0)
                .to(satMat, {
                    attr: { values: 1 },
                    duration: 1.5,
                    ease: "power2.inOut"
                }, 0)
                .to(img, {
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out"
                }, 0);
            });

            // 3. Text Reveal Animation
            const revealElements = document.querySelectorAll(".reveal-text");
            revealElements.forEach((element) => {
                const text = element.innerHTML;
                element.innerHTML = ""; 

                const processedText = text.replace(/<br\s*[\/]?>/gi, " <br> ");
                const words = processedText.split(" ");

                words.forEach((word) => {
                    if (word === "<br>") {
                        element.appendChild(document.createElement("br"));
                    } else if (word.trim() !== "") {
                        const wrapper = document.createElement("span");
                        wrapper.style.display = "inline-block";
                        wrapper.style.overflow = "hidden";
                        wrapper.style.verticalAlign = "bottom"; 
                        wrapper.style.paddingTop = "0.1em"; 

                        const inner = document.createElement("span");
                        inner.classList.add("reveal-word-inner");
                        inner.style.display = "inline-block";
                        inner.style.transform = "translateY(110%)";
                        inner.innerHTML = word;

                        wrapper.appendChild(inner);
                        element.appendChild(wrapper);
                        element.appendChild(document.createTextNode(" "));
                    }
                });

                gsap.to(element.querySelectorAll(".reveal-word-inner"), {
                    y: "0%",
                    duration: 1,
                    stagger: 0.05,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-0 flex justify-center w-full max-w-[1400px] mx-auto">
<div className="w-full flex justify-between px-4 sm:px-6 lg:px-8">
<div className="bg-line w-px h-full bg-stone-300/40 origin-top"></div>
<div className="bg-line w-px h-full bg-stone-300/40 hidden md:block origin-top"></div>
<div className="bg-line w-px h-full bg-stone-300/40 hidden lg:block origin-top"></div>
<div className="bg-line w-px h-full bg-stone-300/40 origin-top"></div>
</div>
</div>

<div className="relative z-10 max-w-[1400px] mx-auto bg-[#EFECE5] min-h-screen border-x border-stone-300/40 shadow-2xl shadow-stone-900/5">

<nav className="flex items-center justify-between px-8 py-6 border-b border-stone-300/40 section-animate">
<div className="flex items-center gap-2 text-stone-900">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tighter font-light text-xl uppercase">Lumina</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-light text-stone-900 hover:text-stone-500 transition-colors uppercase tracking-widest" href="#">Home</a>
<a className="text-xs font-light text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-widest" href="#">Developments</a>
<a className="text-xs font-light text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-widest" href="#">Studio</a>
<a className="text-xs font-light text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-widest" href="#">Insights</a>
</div>
<a className="flex items-center gap-1.5 text-xs font-light text-stone-900 hover:text-stone-500 transition-colors uppercase tracking-widest" href="#">
                Partner
                <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-3 border-b border-stone-300/40 section-animate">

<div className="flex flex-col border-b lg:border-b-0 lg:border-r border-stone-300/40 col-span-1 lg:col-span-2">
<div className="p-8 pb-16 lg:pb-32 lg:pt-16">
<h1 className="text-6xl sm:text-7xl lg:text-9xl font-extralight tracking-tighter leading-[0.9] text-stone-900 reveal-text uppercase">
                        Earthly<br/>Sanctuary
                    </h1>
<button className="mt-12 bg-stone-800 hover:bg-stone-900 transition-colors text-[#EFECE5] text-xs font-light uppercase tracking-widest px-8 py-4 rounded-full flex items-center gap-3 w-fit shadow-[0_8px_24px_-4px_rgba(41,37,36,0.2)] group hover:scale-105 duration-500">
                        Explore Properties 
                        <iconify-icon className="text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-8 border-t border-stone-300/40 mt-auto flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
<p className="text-lg lg:text-xl text-stone-600 font-light leading-relaxed max-w-md">
                        Architectural masterpieces curated for those who demand harmony between space and nature.
                    </p>
<div className="flex -space-x-3 items-center shrink-0">
<img alt="Client" className="w-12 h-12 rounded-full border border-[#EFECE5] object-cover shadow-sm grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d70f9a9-2782-41bc-a7a7-6451e194132b_320w.jpg"/>
<img alt="Client" className="w-12 h-12 rounded-full border border-[#EFECE5] object-cover shadow-sm grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4aab28e-26fa-437c-bd19-d95c86c0c1a6_320w.jpg"/>
<img alt="Client" className="w-12 h-12 rounded-full border border-[#EFECE5] object-cover shadow-sm grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d9661d9-4f12-402b-80b7-6641508218f9_320w.jpg"/>
<div className="w-12 h-12 rounded-full border border-[#EFECE5] bg-stone-200 flex items-center justify-center text-xs font-light text-stone-600 shadow-sm z-10">
                            +2k
                        </div>
</div>
</div>
</div>

<div className="flex flex-col relative bg-stone-200/30">
<div className="relative flex items-center justify-center p-8 lg:p-12 border-b border-stone-300/40 h-full">

<div className="w-full max-w-[280px] aspect-[1/1.6] rounded-t-full rounded-b-full overflow-hidden relative shadow-xl ring-1 ring-stone-900/5 img-container">
<img alt="Earthy Architecture" className="w-full h-full object-cover warp-image origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85e71505-7e15-4fae-aa93-cd45e39227d1_800w.jpg"/>
</div>

<button className="absolute top-1/2 -left-6 bg-[#EFECE5] text-stone-900 p-5 rounded-full shadow-lg border border-stone-200 z-20 hover:scale-105 transition-transform duration-500 flex items-center justify-center group hidden lg:flex">
<iconify-icon className="text-2xl transition-transform duration-300" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-8 flex justify-between gap-10 mt-auto bg-[#EFECE5]">
<div>
<p className="text-4xl lg:text-5xl font-light text-stone-900 tracking-tighter flex items-start">
                             850<span className="text-stone-400 text-2xl font-light mt-1 ml-0.5">k</span>
</p>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest mt-2">Residents</p>
</div>
<div className="text-right">
<p className="text-4xl lg:text-5xl font-light text-stone-900 tracking-tighter flex items-start justify-end">
                             120<span className="text-stone-400 text-2xl font-light mt-1 ml-0.5">+</span>
</p>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest mt-2">Locations</p>
</div>
</div>
</div>
</main>

<section className="lg:py-20 overflow-hidden section-animate bg-[#EFECE5] border-stone-300/40 border-b pt-16 pb-16">
<div className="px-8 mb-10 text-center">
<p className="text-xs font-light text-stone-400 uppercase tracking-widest">Collaborating with visionary minds</p>
</div>
<div className="marquee-content flex w-full relative group opacity-60">
<div className="flex w-max animate-marquee">
<div className="flex justify-around items-center px-8 gap-16">
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">01</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:nasa"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">02</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:spacex"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">03</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:uber"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">04</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:visa"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">05</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:grab"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">06</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:bose"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">07</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:discover"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">08</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:dji"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">09</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:nikon"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">10</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:craftsman"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">11</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:sony"></iconify-icon>
</div>
</div>
<div className="flex justify-around items-center px-8 gap-16">
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">01</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:nasa"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">02</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:spacex"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">03</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:uber"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">04</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:visa"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">05</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:grab"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">06</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:bose"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">07</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:discover"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">08</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:dji"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">09</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:nikon"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">10</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:craftsman"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-light text-stone-400 tracking-widest uppercase">11</span>
<iconify-icon className="text-[64px] text-stone-400 hover:text-stone-800 transition-colors duration-500" icon="simple-icons:sony"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 px-8 border-b border-stone-300/40 flex flex-col items-center justify-center text-center bg-stone-200/20 section-animate">
<iconify-icon className="text-4xl text-stone-400 mb-8" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-stone-900 max-w-5xl leading-[1.1] reveal-text">
                Rooted in nature. Designed for the mindful dweller. We build spaces that breathe.
            </h2>
<p className="mt-10 text-stone-500 font-light text-lg max-w-2xl">
                Our philosophy embraces raw materials, organic textures, and natural light to create environments that ground you in the present moment.
            </p>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 border-b border-stone-300/40 section-animate">

<div className="p-8 border-b md:border-b-0 md:border-r border-stone-300/40 group cursor-pointer hover:bg-stone-200/30 transition-colors duration-500">
<div className="aspect-[4/3] w-full overflow-hidden mb-8 bg-stone-200 rounded-sm img-container">
<img alt="Interior" className="w-full h-full object-cover warp-image group-hover:scale-105 transition-transform duration-[1.5s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4e63e54-dad9-4cee-ba93-cbfc0642d5ce_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl font-light tracking-tight text-stone-900 mb-2">The Terracotta House</h3>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest">Tuscany, Italy</p>
</div>
<div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors duration-300">
<iconify-icon className="text-xl text-stone-600 group-hover:text-[#EFECE5] transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="p-8 group cursor-pointer hover:bg-stone-200/30 transition-colors duration-500">
<div className="aspect-[4/3] w-full overflow-hidden mb-8 bg-stone-200 rounded-sm img-container">
<img alt="Interior" className="w-full h-full object-cover warp-image group-hover:scale-105 transition-transform duration-[1.5s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/531455ad-0c4a-4d6b-b93b-d3d433c8c383_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl font-light tracking-tight text-stone-900 mb-2">Dune Residence</h3>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest">Palm Springs, CA</p>
</div>
<div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors duration-300">
<iconify-icon className="text-xl text-stone-600 group-hover:text-[#EFECE5] transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-8 border-b border-stone-300/40 section-animate relative bg-stone-200/20 overflow-hidden">

<div className="absolute -top-10 -right-10 text-[20rem] font-thin text-stone-300/20 tracking-tighter pointer-events-none select-none">“</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<h2 className="text-5xl lg:text-7xl font-extralight tracking-tighter text-stone-900 leading-[1.1] reveal-text">
                        Voices of<br/>the earth
                    </h2>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest max-w-xs md:text-right">Perspectives from our residents and architectural partners.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-stone-300/40">

<div className="p-8 lg:p-12 bg-[#EFECE5] flex flex-col justify-between h-full border-b md:border-b-0 md:border-r border-stone-300/40 group hover:bg-stone-900 transition-colors duration-500">
<iconify-icon className="text-3xl text-stone-300 mb-8 group-hover:text-stone-700 transition-colors duration-500" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg font-light text-stone-700 leading-relaxed mb-12 group-hover:text-stone-300 transition-colors duration-500">"Living in a Lumina space feels like an extension of the natural world. The raw textures and thoughtful light completely transformed my daily rituals."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden shrink-0"><img alt="Resident" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d70f9a9-2782-41bc-a7a7-6451e194132b_320w.jpg"/></div>
<div>
<p className="text-sm font-light text-stone-900 group-hover:text-[#EFECE5] transition-colors">Elena Rostova</p>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest mt-0.5 group-hover:text-stone-500 transition-colors">Resident, Terracotta</p>
</div>
</div>
</div>

<div className="p-8 lg:p-12 bg-[#EFECE5] flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-stone-300/40 group hover:bg-stone-900 transition-colors duration-500">
<iconify-icon className="text-3xl text-stone-300 mb-8 group-hover:text-stone-700 transition-colors duration-500" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg font-light text-stone-700 leading-relaxed mb-12 group-hover:text-stone-300 transition-colors duration-500">"Their approach to materiality is unmatched. They don't just build houses; they curate environments that age beautifully alongside their inhabitants."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden shrink-0"><img alt="Partner" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4aab28e-26fa-437c-bd19-d95c86c0c1a6_320w.jpg"/></div>
<div>
<p className="text-sm font-light text-stone-900 group-hover:text-[#EFECE5] transition-colors">Marcus Chen</p>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest mt-0.5 group-hover:text-stone-500 transition-colors">Lead Architect, Studio MC</p>
</div>
</div>
</div>

<div className="p-8 lg:p-12 bg-[#EFECE5] flex flex-col justify-between h-full group hover:bg-stone-900 transition-colors duration-500 md:col-span-2 lg:col-span-1">
<iconify-icon className="text-3xl text-stone-300 mb-8 group-hover:text-stone-700 transition-colors duration-500" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg font-light text-stone-700 leading-relaxed mb-12 group-hover:text-stone-300 transition-colors duration-500">"The seamless integration of indoor and outdoor spaces allows for a profound sense of peace. It's sanctuary design at its absolute peak."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden shrink-0"><img alt="Resident" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d9661d9-4f12-402b-80b7-6641508218f9_320w.jpg"/></div>
<div>
<p className="text-sm font-light text-stone-900 group-hover:text-[#EFECE5] transition-colors">Sarah Jenkins</p>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest mt-0.5 group-hover:text-stone-500 transition-colors">Resident, Dune</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-8 border-b border-stone-300/40 section-animate">
<div className="max-w-7xl mx-auto flex flex-col items-center mb-16 text-center">
<h2 className="text-5xl lg:text-7xl font-extralight tracking-tighter text-stone-900 leading-[1.1] reveal-text">
                    Curated<br/>offerings
                </h2>
<p className="mt-6 text-stone-500 font-light text-base max-w-lg">Transparent investment structures for our varying architectural models.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-x border-stone-300/40 max-w-6xl mx-auto bg-[#EFECE5]">

<div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-stone-300/40 flex flex-col hover:bg-stone-200/40 transition-colors duration-500">
<h3 className="text-3xl font-light tracking-tight text-stone-900 mb-2">Sanctuary</h3>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest mb-12">Essential minimal living</p>
<div className="flex items-baseline gap-1 mb-10">
<span className="text-sm font-light text-stone-500">From</span>
<span className="text-5xl font-light tracking-tighter text-stone-900">$850</span>
<span className="text-xl font-light text-stone-400">k</span>
</div>
<ul className="space-y-4 mb-12 flex-1 text-sm font-light text-stone-600">
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 1-2 Bedrooms, 800 sqft</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Organic lime wash finishes</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Shared courtyard access</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Passive cooling systems</li>
</ul>
<button className="w-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-[#EFECE5] py-4 text-xs font-light uppercase tracking-widest transition-all rounded-sm">Inquire</button>
</div>

<div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-stone-300/40 flex flex-col bg-stone-900 text-[#EFECE5] relative overflow-hidden group">

<div className="absolute top-0 right-0 w-32 h-32 bg-stone-600/20 blur-3xl rounded-full pointer-events-none"></div>
<h3 className="text-3xl font-light tracking-tight text-[#EFECE5] mb-2 relative z-10">Pavilion</h3>
<p className="text-xs font-light text-stone-400 uppercase tracking-widest mb-12 relative z-10">Integrated family spaces</p>
<div className="flex items-baseline gap-1 mb-10 relative z-10">
<span className="text-sm font-light text-stone-400">From</span>
<span className="text-5xl font-light tracking-tighter text-[#EFECE5]">$1.4</span>
<span className="text-xl font-light text-stone-500">m</span>
</div>
<ul className="space-y-4 mb-12 flex-1 text-sm font-light text-stone-300 relative z-10">
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 3-4 Bedrooms, 2400 sqft</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Rammed earth feature walls</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Private internal garden</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Solar integration standard</li>
</ul>
<button className="w-full bg-[#EFECE5] text-stone-900 hover:bg-stone-200 py-4 text-xs font-light uppercase tracking-widest transition-all rounded-sm relative z-10">Schedule Viewing</button>
</div>

<div className="p-8 lg:p-12 flex flex-col hover:bg-stone-200/40 transition-colors duration-500">
<h3 className="text-3xl font-light tracking-tight text-stone-900 mb-2">Estate</h3>
<p className="text-xs font-light text-stone-500 uppercase tracking-widest mb-12">Expansive remote living</p>
<div className="flex items-baseline gap-1 mb-10">
<span className="text-sm font-light text-stone-500">From</span>
<span className="text-5xl font-light tracking-tighter text-stone-900">$3.2</span>
<span className="text-xl font-light text-stone-400">m</span>
</div>
<ul className="space-y-4 mb-12 flex-1 text-sm font-light text-stone-600">
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Custom acreage + 4000 sqft</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Full off-grid capability</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bespoke material sourcing</li>
<li className="flex items-start gap-3"><iconify-icon className="text-xl text-stone-400 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Dedicated architectural partner</li>
</ul>
<button className="w-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-[#EFECE5] py-4 text-xs font-light uppercase tracking-widest transition-all rounded-sm">Consultation</button>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-8 border-b border-stone-300/40 section-animate bg-stone-200/10">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-extralight tracking-tighter text-stone-900 mb-16 text-center reveal-text">
                    Common inquiries
                </h2>
<div className="space-y-0 border-t border-stone-300/40">

<details className="group" name="faq" open="">
<summary className="flex justify-between items-center cursor-pointer list-none py-8 border-b border-stone-300/40 text-lg lg:text-xl font-light tracking-tight text-stone-900 hover:text-stone-500 transition-colors">
                            What sustainable materials are central to your builds?
                            <span className="relative w-6 h-6 flex items-center justify-center shrink-0">
<span className="absolute w-full h-px bg-stone-600 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-px h-full bg-stone-600 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="pb-8 border-b border-stone-300/40 -mt-px relative z-10 overflow-hidden">
<p className="text-base font-light text-stone-600 leading-relaxed pt-2">We prioritize locally sourced, low-embodied-energy materials. This includes rammed earth, reclaimed timber, natural stone, and hempcrete. Interior finishes rely on non-toxic lime washes and natural oils to ensure healthy indoor air quality and a tactile connection to nature.</p>
</div>
</details>

<details className="group" name="faq">
<summary className="flex justify-between items-center cursor-pointer list-none py-8 border-b border-stone-300/40 text-lg lg:text-xl font-light tracking-tight text-stone-900 hover:text-stone-500 transition-colors">
                            How long is the typical design and build timeline?
                            <span className="relative w-6 h-6 flex items-center justify-center shrink-0">
<span className="absolute w-full h-px bg-stone-600 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-px h-full bg-stone-600 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="pb-8 border-b border-stone-300/40 -mt-px relative z-10 overflow-hidden">
<p className="text-base font-light text-stone-600 leading-relaxed pt-2">Our processes are highly curated. A standard Pavilion model typically requires 12-14 months from initial consultation to handover, ensuring meticulous attention to architectural detail and material curing times, especially for elements like rammed earth.</p>
</div>
</details>

<details className="group" name="faq">
<summary className="flex justify-between items-center cursor-pointer list-none py-8 border-b border-stone-300/40 text-lg lg:text-xl font-light tracking-tight text-stone-900 hover:text-stone-500 transition-colors">
                            Do you build internationally?
                            <span className="relative w-6 h-6 flex items-center justify-center shrink-0">
<span className="absolute w-full h-px bg-stone-600 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-px h-full bg-stone-600 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="pb-8 border-b border-stone-300/40 -mt-px relative z-10 overflow-hidden">
<p className="text-base font-light text-stone-600 leading-relaxed pt-2">Currently, we maintain operational hubs in North America and select regions in Southern Europe. For Estate-level projects outside these zones, we operate on a case-by-case basis, often partnering with aligned local contractors to manage execution while retaining design control.</p>
</div>
</details>

<details className="group" name="faq">
<summary className="flex justify-between items-center cursor-pointer list-none py-8 border-b border-stone-300/40 text-lg lg:text-xl font-light tracking-tight text-stone-900 hover:text-stone-500 transition-colors">
                            Can designs be customized?
                            <span className="relative w-6 h-6 flex items-center justify-center shrink-0">
<span className="absolute w-full h-px bg-stone-600 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-px h-full bg-stone-600 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="pb-8 border-b border-stone-300/40 -mt-px relative z-10 overflow-hidden">
<p className="text-base font-light text-stone-600 leading-relaxed pt-2">Our Sanctuary and Pavilion models offer structured customization—allowing clients to select material palettes and minor layout variations while retaining the core architectural integrity. Estate projects are entirely bespoke, designed from the ground up for the specific site and client.</p>
</div>
</details>
</div>
</div>
</section>

<section className="p-4 sm:p-8 lg:p-12 border-b border-stone-300/40 section-animate">
<div className="bg-[#2A2621] rounded-[2rem] p-8 md:p-16 lg:p-24 overflow-hidden relative text-[#EFECE5] shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-stone-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tighter mb-16 lg:mb-24 reveal-text uppercase">
                        Experience<br/>The Elements
                    </h2>
<div className="flex flex-col gap-4 lg:gap-6">

<div className="relative flex flex-col md:flex-row items-stretch bg-[#EFECE5] text-stone-900 rounded-2xl md:rounded-full overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1 duration-500">
<div className="px-8 py-6 md:py-0 flex items-center gap-6 z-10 bg-[#EFECE5] md:w-5/12 shrink-0">
<span className="text-xs font-light text-stone-400 w-6">01</span>
<h3 className="text-xl lg:text-3xl font-light tracking-tight truncate">Sustainable Summit</h3>
</div>
<div className="relative w-full h-32 md:h-auto md:flex-1 overflow-hidden img-container">
<img alt="Expo" className="absolute inset-0 w-full h-full object-cover warp-image group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97c65e8c-b22b-4453-854a-d8fcd8c0189d_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#EFECE5] via-transparent to-[#EFECE5]/90 md:to-[#EFECE5] hidden md:block z-10 pointer-events-none"></div>
</div>
<div className="px-8 py-6 md:py-0 flex items-center justify-between md:justify-end gap-8 z-20 bg-[#EFECE5] md:w-4/12 shrink-0">
<span className="text-xs font-light text-stone-500 uppercase tracking-widest">18 Oct 2024</span>
<div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors duration-500">
<iconify-icon className="text-xl text-stone-600 group-hover:text-[#EFECE5] transition-colors duration-500" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-between p-6 md:px-10 md:py-8 rounded-2xl md:rounded-full border border-stone-100/10 hover:border-stone-100/20 hover:bg-stone-100/5 transition-all cursor-pointer group">
<div className="flex items-center gap-6">
<span className="text-xs font-light text-stone-500 w-6">02</span>
<h3 className="text-xl lg:text-3xl font-light tracking-tight text-stone-300 group-hover:text-[#EFECE5] transition-colors">Materiality in Design</h3>
</div>
<div className="flex items-center gap-8">
<span className="text-xs font-light text-stone-500 uppercase tracking-widest hidden md:block">05 Nov 2024</span>
<iconify-icon className="text-2xl text-stone-500 group-hover:text-[#EFECE5] transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between p-6 md:px-10 md:py-8 rounded-2xl md:rounded-full border border-stone-100/10 hover:border-stone-100/20 hover:bg-stone-100/5 transition-all cursor-pointer group">
<div className="flex items-center gap-6">
<span className="text-xs font-light text-stone-500 w-6">03</span>
<h3 className="text-xl lg:text-3xl font-light tracking-tight text-stone-300 group-hover:text-[#EFECE5] transition-colors">Architecture Biennale</h3>
</div>
<div className="flex items-center gap-8">
<span className="text-xs font-light text-stone-500 uppercase tracking-widest hidden md:block">12 Dec 2024</span>
<iconify-icon className="text-2xl text-stone-500 group-hover:text-[#EFECE5] transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="p-8 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 section-animate">
<div className="flex flex-col gap-6 w-full max-w-md">
<div className="flex items-center gap-2 text-stone-900 mb-4">
<iconify-icon className="text-3xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tighter font-light text-2xl uppercase">Lumina</span>
</div>
<p className="text-sm font-light text-stone-500 leading-relaxed">
                    Join our newsletter for curated insights on earthly architecture, natural materials, and the future of living spaces.
                </p>
<div className="flex mt-2">
<input className="bg-transparent border-b border-stone-300 py-3 w-full text-sm font-light text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors" placeholder="Your email address" type="email"/>
<button className="border-b border-stone-300 hover:border-stone-900 py-3 px-4 text-stone-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="text-xs font-light text-stone-400 uppercase tracking-widest mb-2">Platform</span>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#">Properties</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#">Journal</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#">Studio</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-light text-stone-400 uppercase tracking-widest mb-2">Connect</span>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#">Instagram</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#">LinkedIn</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
<div className="px-8 py-6 border-t border-stone-300/40 flex justify-between items-center text-xs font-light text-stone-400 uppercase tracking-widest section-animate">
<span>© 2024 Lumina Spaces</span>
<span>All rights reserved</span>
</div>
</div>


    </>
  );
}
