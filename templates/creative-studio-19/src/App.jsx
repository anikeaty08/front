import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Scroll Animations
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-[#1a1a1a] transition-all duration-300">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter uppercase" href="#">WRTH.</a>
<div className="hidden md:flex items-center gap-12 text-xs font-mono-custom tracking-widest text-[#888888] uppercase">
<a className="hover:text-white transition-colors duration-300" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#studio">Studio</a>
</div>
<a className="flex items-center gap-2 text-xs font-mono-custom tracking-widest text-[#BFFF00] uppercase hover:text-white transition-colors duration-300" href="#contact">
<span>Start Project</span>
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</nav>
<main className="flex-grow">

<section className="min-h-screen flex items-center pt-20">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
<div className="max-w-5xl">
<p className="reveal-up text-xs font-mono-custom tracking-widest text-[#BFFF00] uppercase mb-8 flex items-center gap-4">
<span className="h-px w-8 bg-[#BFFF00]"></span>
                        Digital Design Studio
                    </p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter uppercase leading-[0.9] mb-10">
<span className="block reveal-up delay-100">We engineer</span>
<span className="block text-[#BFFF00] reveal-up delay-200">digital realities.</span>
</h1>
<p className="reveal-up delay-300 font-mono-custom text-base md:text-lg text-[#888888] leading-[1.8] max-w-2xl mb-12">
                        Award-winning design and technology studio crafting the next generation of digital experiences, brand identities, and cinematic motion.
                    </p>
<div className="reveal-up delay-400 flex flex-wrap items-center gap-6">
<a className="flex items-center gap-3 bg-[#BFFF00] text-black px-8 py-4 font-mono-custom text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300" href="#work">
                            Explore Work
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center gap-3 text-white px-8 py-4 font-mono-custom text-xs uppercase tracking-widest border border-[#333333] hover:border-[#BFFF00] hover:text-[#BFFF00] transition-colors duration-300" href="#contact">
                            Contact Us
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 py-24 md:py-32 lg:px-12" id="services">
<header className="flex items-center mb-16 lg:mb-20 reveal-up">
<div className="h-px w-16 bg-[#333333]"></div>
<h2 className="ml-6 text-xs font-mono-custom tracking-widest text-[#888888] uppercase">What we do</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="reveal-up delay-100 bg-[#0a0a0a] border border-[#1a1a1a] p-6 lg:p-8 flex flex-col group transition-colors duration-300 hover:border-[#333333]">
<div className="aspect-[1.5] w-full bg-[#111111] mb-8 overflow-hidden">
<img alt="Brand Identity" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-5 uppercase">01 / Brand Identity</h3>
<p className="font-mono-custom text-base text-[#888888] leading-[1.8] mb-12 flex-grow">
                        Crafting visual systems and strategic positioning that scale globally and resonate across every touchpoint.
                    </p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">Logo</span>
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">Typography</span>
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">Strategy</span>
</div>
</article>

<article className="reveal-up delay-200 bg-[#0a0a0a] border border-[#1a1a1a] p-6 lg:p-8 flex flex-col group transition-colors duration-300 hover:border-[#333333]">
<div className="aspect-[1.5] w-full bg-[#111111] mb-8 overflow-hidden">
<img alt="Digital Experience" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform ease-out" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-5 uppercase">02 / Digital Exp.</h3>
<p className="font-mono-custom text-base text-[#888888] leading-[1.8] mb-12 flex-grow">
                        Immersive websites and platforms built for performance, conversion, and unforgettable first impressions.
                    </p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">UI/UX</span>
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">Web Dev</span>
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">E-Comm</span>
</div>
</article>

<article className="reveal-up delay-300 bg-[#0a0a0a] border border-[#1a1a1a] p-6 lg:p-8 flex flex-col group transition-colors duration-300 hover:border-[#333333]">
<div className="aspect-[1.5] w-full bg-[#111111] mb-8 overflow-hidden">
<img alt="Motion &amp; Film" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform ease-out" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-5 uppercase">03 / Motion &amp; Film</h3>
<p className="font-mono-custom text-base text-[#888888] leading-[1.8] mb-12 flex-grow">
                        Cinematic sequences, 3D product rendering, and brand films that capture attention in a fraction of a second.
                    </p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">3D</span>
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">Film</span>
<span className="font-mono-custom text-xs tracking-widest text-[#BFFF00] px-4 py-1.5 rounded-full border border-[#BFFF00]/20 uppercase">WebGL</span>
</div>
</article>
</div>
</section>

<section className="py-32 md:py-48 px-6 lg:px-12 border-t border-[#1a1a1a] bg-[#020202] text-center overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto">
<iconify-icon className="reveal-up text-6xl text-[#333333] mb-8" icon="solar:globus-linear"></iconify-icon>
<h2 className="reveal-up delay-100 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter uppercase leading-[1.1] mb-10">
                    Ready to build <br/> <span className="text-[#888888]">something exceptional?</span>
</h2>
<div className="reveal-up delay-200 flex justify-center">
<button className="group relative flex items-center gap-4 bg-white text-black px-10 py-5 font-mono-custom text-sm uppercase tracking-widest overflow-hidden transition-colors duration-300 hover:bg-[#BFFF00]">
<span className="relative z-10 font-medium">Start a Project</span>
<iconify-icon className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#1a1a1a] bg-[#050505] py-12 px-6 lg:px-12">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl font-medium tracking-tighter uppercase">WRTH.</div>
<div className="text-xs font-mono-custom tracking-widest text-[#555555] uppercase">
                © 2024 Wraith Studio. All rights reserved.
            </div>
<div className="flex items-center gap-6">
<a className="text-[#888888] hover:text-white transition-colors duration-300" href="#">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="text-[#888888] hover:text-white transition-colors duration-300" href="#">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
