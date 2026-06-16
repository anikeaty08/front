import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Set initial states to prevent FOUC
            gsap.set(".gsap-nav", { y: -30, opacity: 0 });
            gsap.set(".gsap-title-line > span", { yPercent: 120, rotation: 3 });
            gsap.set(".gsap-bottom-elem", { y: 40, opacity: 0 });
            gsap.set(".gsap-bg-text", { opacity: 0, scale: 0.95 });

            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Animate Navigation
            tl.to(".gsap-nav", { y: 0, opacity: 1, duration: 1.2, delay: 0.2 })
              
              // Animate Massive Header Text (Mask reveal)
              .to(".gsap-title-line > span", { 
                  yPercent: 0, 
                  rotation: 0,
                  duration: 1.4, 
                  stagger: 0.15 
              }, "-=0.8")
              
              // Animate Bottom Elements (CTA, Text, Image)
              .to(".gsap-bottom-elem", { 
                  y: 0, 
                  opacity: 1, 
                  duration: 1.2, 
                  stagger: 0.1 
              }, "-=1")
              
              // Animate Background Watermark Text
              .to(".gsap-bg-text", { 
                  opacity: 1, 
                  scale: 1, 
                  duration: 2,
                  ease: "power2.out"
              }, "-=1.5");
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="gsap-bg-text absolute bottom-0 left-0 w-full text-[15vw] md:text-[18vw] font-medium text-zinc-50 tracking-tighter leading-none -z-10 pointer-events-none select-none uppercase overflow-hidden whitespace-nowrap text-center">
        MARSSTUDIO
    </div>

<nav className="gsap-nav absolute top-0 left-0 w-full px-6 py-8 md:px-12 md:py-12 flex flex-col md:flex-row justify-between items-start z-50">

<a className="text-lg md:text-xl font-medium tracking-tight uppercase mb-8 md:mb-0 block" href="#">
            marsStudio
        </a>

<div className="hidden lg:flex justify-between w-1/2 max-w-3xl text-sm text-zinc-600 font-normal">
<ul className="flex flex-col gap-3">
<li><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Biography</a></li>
<li><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Capabilities</a></li>
<li><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Proficiencies</a></li>
</ul>
<ul className="flex flex-col gap-3">
<li><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Training</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Events</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Contact-us</a></li>
</ul>
<ul className="flex flex-col gap-3">
<li><a className="hover:text-zinc-900 transition-colors duration-300" href="#">LinkedIn</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Instagram</a></li>
<li><a className="hover:text-zinc-900 transition-colors duration-300" href="#">Behance</a></li>
</ul>
</div>

<div className="hidden md:block text-right text-sm text-zinc-500 leading-tight">
            Cotonou/<br/>Bénin/<br/>Afrique
        </div>
</nav>

<main className="flex-grow md:px-12 md:pt-48 flex flex-col z-10 pt-32 pr-6 pb-12 pl-6 relative justify-between">

<div className="w-full mb-24 md:mb-32">
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-medium leading-[0.85] tracking-tighter uppercase text-zinc-900 flex flex-col w-full">
<span className="gsap-title-line clip-text block w-full">
<span className="block origin-bottom-left">UX.UI DESIGN</span>
</span>
<span className="gsap-title-line clip-text block w-full mt-4 md:mt-0 lg:ml-[15%]">
<span className="block origin-bottom-left">FOR SCALE &amp; PERFORMANCE</span>
</span>
</h1>
</div>

<div className="flex flex-col lg:flex-row lg:gap-8 sticky w-full z-20 mt-auto bottom-12 gap-x-12 gap-y-12 items-end justify-between">

<div className="gsap-bottom-elem group cursor-pointer flex lg:w-auto w-full gap-x-y-8 gap-y-8 items-center">
<div className="flex flex-col gap-8 w-full ml-4 gap-x-8 w-auto pl-60 ml-60 gap-y-8">

<div className="description gsap-bottom-elem md:text-base leading-relaxed lg:mx-0 text-sm text-zinc-600 w-full max-w-none">
    We create edge cut design based on business long-term goal by leveraging strategy-first and UI interface that
    resonate with easy adoption and product growth.
  </div>
<div className="flex w-full justify-between items-center mt-4">

<div className="cta flex flex-row items-center relative">
<div className="-left-4 -z-10 transition-transform duration-500 ease-out group-hover:scale-110 origin-bottom-right yellow-icon bg-[#E5A600] w-12 h-12 rounded-br-[2rem] absolute">
</div>
<span className="md:text-2xl text-xl font-medium tracking-tight mr-6">Reach out</span>
</div>

<div className="flex items-center">
<div className="md:w-20 h-[1.5px] transition-all duration-500 group-hover:w-28 bg-zinc-900 w-16 relative">
<iconify-icon className="absolute -right-2 top-1/2 -translate-y-1/2 text-zinc-900 transform transition-transform duration-500 group-hover:translate-x-2" height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="gsap-bottom-elem w-full sm:w-80 md:w-96 aspect-square bg-zinc-100 overflow-hidden order-3">
<img alt="Abstract gradient sphere" className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-1000 ease-in-out hover:grayscale-0 hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</main>



    </>
  );
}
