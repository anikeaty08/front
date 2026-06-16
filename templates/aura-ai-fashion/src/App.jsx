import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Parallax Background Animation
            gsap.to(".hero-bg-img", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // 2. Staggered Word Reveal
            // Split text helper function
            const splitTextToSpans = (element) => {
                const text = element.innerText;
                const words = text.split(' ');
                const newContent = words.map(word => {
                    return `<span class="word-wrap"><span class="word-inner">${word}&nbsp;</span></span>`;
                }).join('');
                element.innerHTML = newContent;
            };

            // Apply reveal animation
            document.querySelectorAll('.reveal-text').forEach(el => {
                splitTextToSpans(el);
                
                gsap.to(el.querySelectorAll('.word-inner'), {
                    y: 0,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", // Trigger when element is 85% down viewport
                        toggleActions: "play none none reverse" 
                    }
                });
            });

            // Handle special block reveals if needed (just fading in the whole block for simplicity if structure is complex)
             gsap.from(".reveal-text-block", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            // 3. Navbar Blur on Scroll
            ScrollTrigger.create({
                start: "top -80",
                end: 99999,
                toggleClass: {className: 'shadow-lg', targets: '#navbar'}
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="w-px h-full bg-white/5 mx-auto hidden md:block"></div>
<div className="w-px h-full bg-white/5 mx-auto hidden lg:block"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/10 backdrop-blur-md bg-stone-950/80 transition-all duration-500" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl text-orange-500" icon="solar:infinity-linear"></iconify-icon>
<span className="text-xl font-medium tracking-tighter">AURA</span>
</div>
<div className="hidden md:flex items-center gap-12 text-sm font-light text-stone-300">
<a className="hover:text-white transition-colors" href="#">Visionary AI</a>
<a className="hover:text-white transition-colors" href="#">Values</a>
<a className="hover:text-white transition-colors" href="#">Innovation</a>
</div>
<a className="text-sm font-light border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">Contact us</a>
</div>
</nav>

<section className="relative pt-20 min-h-screen overflow-hidden flex flex-col justify-between hero-section">

<div className="absolute inset-0 z-0 overflow-hidden">
<div className="w-full h-[120%] -y-10 relative hero-bg-wrapper">
<img alt="Hero background" className="w-full h-full object-cover opacity-60 hero-bg-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a74faa84-bfad-4c8f-bfeb-873e30ebdbdf_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-transparent to-[#FF5A36]/90"></div>
</div>
</div>
<div className="flex flex-col flex-grow w-full h-full max-w-[1400px] z-10 mr-auto ml-auto pt-16 pr-6 pb-12 pl-6 relative justify-between">
<div className="flex justify-between items-start">
<div className="reveal-text-block">
<h2 className="text-5xl tracking-tight font-medium">420+</h2>
<p className="text-stone-300 text-lg mt-1 font-light">Curated Styles</p>
</div>
<div className="text-right max-w-xs">
<p className="text-lg font-light leading-relaxed reveal-text">
                        Aura leverages neural networks to help you discover your perfect aesthetic fit.
                    </p>
</div>
</div>
<div className="relative mt-auto">

<h1 className="text-[13vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mix-blend-overlay reveal-text">
                    Aesthetics
                </h1>
</div>
<div className="absolute bottom-10 right-6 text-xs font-mono opacity-50 hidden md:block">
                *-8.8842, 115.4482
            </div>
</div>

<div className="halftone-orange z-10 [mask-image:linear-gradient(to_bottom,transparent,black)] w-full h-32 absolute bottom-0"></div>
</section>

<section className="bg-[#FF5A36] text-white relative z-20 pb-24">
<div className="max-w-[1400px] mx-auto px-6">
<div className="pt-16 pb-20 border-b border-white/20 mb-12">
<span className="text-orange-200 text-sm tracking-wide uppercase block mb-4">01 | About Us</span>

<h2 className="md:text-6xl leading-[1.1] text-5xl tracking-tight max-w-2xl reveal-text">
                    Beyond the Ordinary.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-5 relative group">
<div className="aspect-[3/4] overflow-hidden rounded-lg relative border border-white/20 shadow-2xl">
<img alt="Portrait" className="w-full h-full object-cover parallax-element" data-speed="0.05" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c386208-daec-4add-998e-20adb29af1e7_1600w.webp"/>
</div>
</div>

<div className="md:col-span-7 flex flex-col justify-center md:pl-12">
<div className="space-y-10">

<div className="flex group cursor-pointer border-white/10 border-b pb-8 gap-x-6 gap-y-6">
<span className="font-mono text-orange-200/60 mt-1 text-sm">01</span>
<div className="">
<h3 className="text-2xl font-medium mb-2 reveal-text">Curated for You</h3>
<p className="leading-relaxed text-lg font-light text-orange-100 max-w-md reveal-text">Our AI filters through the hype to find the silhouettes that actually define who you are, not who they want you to be.</p>
</div>
</div>

<div className="flex gap-6 group cursor-pointer border-b border-white/10 pb-8">
<span className="font-mono text-orange-200/60 mt-1 text-sm">02</span>
<div className="">
<h3 className="text-2xl mb-2 font-medium reveal-text">Style Soul</h3>
<p className="leading-relaxed text-lg font-light text-orange-100 max-w-md reveal-text">Tech that finally understands your style language—from the fabric texture to the color palette that hits right.</p>
</div>
</div>

<div className="flex gap-6 group cursor-pointer">
<span className="font-mono text-orange-200/60 mt-1 text-sm">03</span>
<div className="">
<h3 className="text-2xl mb-2 font-medium reveal-text">Fashion Spirit</h3>
<p className="text-orange-100 text-lg leading-relaxed max-w-md font-light reveal-text">
                                    Technology that truly grasps your fashion language, translating raw data into pure aesthetic expression.
                                </p>
</div>
</div>
</div>
<div className="flex items-center gap-8 mt-12">
<a className="flex items-center gap-2 text-lg font-medium hover:opacity-80 transition group" href="#">
                            Start Generate 
                            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-24 halftone-dark opacity-30 z-10 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
</section>

<section className="bg-black text-white py-24 relative overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="">
<span className="text-stone-500 text-sm tracking-wide uppercase">[02] Our Features</span>
<h2 className="text-4xl md:text-5xl tracking-tight mt-4 reveal-text">Try It On, Visionary Fitting.</h2>
</div>
<p className="text-stone-400 max-w-md font-light text-lg pb-2 text-right md:text-left reveal-text">
                    Check out our "Neural Fitting" tech. Upload your profile to see how it fits you in real-time.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
<div className="group relative aspect-[3/4] overflow-hidden bg-stone-900 rounded-lg">
<img alt="Feature 1" className="w-full h-full object-cover transition duration-700 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9315f69f-2c0a-4cae-9ff8-79beaa33e92e_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-medium mb-1">The Avant-Garde</h3>
<p className="text-stone-300 text-sm font-light">Trendsetting pieces.</p>
</div>
</div>
<div className="group relative aspect-[3/4] overflow-hidden bg-stone-900 rounded-lg">
<img alt="Feature 2" className="w-full h-full object-cover transition duration-700 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f90123a1-4a4a-48aa-bb65-b7b9b26fcb6a_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-medium mb-1">Urban Flow</h3>
<p className="text-stone-300 text-sm font-light">Enduring styles.</p>
</div>
</div>
<div className="group relative aspect-[3/4] overflow-hidden bg-stone-900 rounded-lg border border-stone-800">
<img alt="Feature 3" className="w-full h-full object-cover transition duration-700 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed7e6531-4988-47ea-aa67-a7e8524d6398_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-medium mb-1">Zero Waste</h3>
<p className="text-stone-300 text-sm font-light">Smart tech.</p>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden mask-fade-x border-t border-white/10 pt-16">
<div className="flex w-max animate-marquee gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">

<div className="flex gap-24 items-center">
<iconify-icon height="32" icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon height="32" icon="simple-icons:tesla" width="32"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:nike" width="48"></iconify-icon>
<iconify-icon height="40" icon="simple-icons:apple" width="40"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:prada" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:gucci" width="48"></iconify-icon>
<iconify-icon height="40" icon="simple-icons:adidas" width="40"></iconify-icon>
<iconify-icon height="40" icon="simple-icons:louisvuitton" width="40"></iconify-icon>
</div>

<div className="flex gap-24 items-center">
<iconify-icon height="32" icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon height="32" icon="simple-icons:tesla" width="32"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:nike" width="48"></iconify-icon>
<iconify-icon height="40" icon="simple-icons:apple" width="40"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:prada" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:gucci" width="48"></iconify-icon>
<iconify-icon height="40" icon="simple-icons:adidas" width="40"></iconify-icon>
<iconify-icon height="40" icon="simple-icons:louisvuitton" width="40"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-24 halftone-dark z-10 [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-50"></div>
</section>

<section className="bg-[#F8F7F4] text-stone-900 py-24 relative">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
<span className="text-stone-400 text-sm uppercase tracking-wide bg-[#F8F7F4] px-4">[04] Our Innovation</span>
</div>
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-5xl tracking-tight mb-6 reveal-text">High-Tech Meets High-Fit.</h2>
<p className="text-lg text-stone-600 font-light reveal-text">
                    We don't just use algorithms; we use digital intuition to bridge the gap between human identity and pixel-perfect style.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">

<div className="group p-8 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex gap-4 items-start">
<span className="text-sm font-mono text-stone-300 mt-1">[01]</span>
<div className="">
<h3 className="text-xl font-medium text-stone-900 reveal-text">Neural Style Mapping</h3>
<p className="text-stone-500 mt-3 font-light leading-relaxed">Our AI doesn't just look at trends; it decodes your personal style DNA to predict what hits right.</p>
</div>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex gap-4 items-start">
<span className="text-sm font-mono text-[#FF5A36] mt-1">[02]</span>
<div>
<h3 className="text-xl font-medium text-stone-900 reveal-text">Virtual Drape Physics</h3>
<p className="text-stone-500 mt-3 font-light leading-relaxed">Our digital mirror uses physics-based simulation to show how fabrics move on your body.</p>
</div>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex gap-4 items-start">
<span className="text-sm font-mono text-stone-300 mt-1">[03]</span>
<div className="">
<h3 className="text-xl font-medium text-stone-900 reveal-text">The Truth-Metric</h3>
<p className="text-stone-500 mt-3 font-light leading-relaxed">We've eliminated the friction of "size guessing" by using 3D spatial mapping.</p>
</div>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex gap-4 items-start">
<span className="text-sm font-mono text-stone-300 mt-1">[04]</span>
<div>
<h3 className="text-xl font-medium text-stone-900 reveal-text">Veracity-Index</h3>
<p className="text-stone-500 mt-3 font-light leading-relaxed">Ensuring your initial order is the perfect fit through data-driven sizing models.</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-16 halftone-light opacity-60 z-10 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
</section>

<section className="relative bg-gradient-to-b from-[#F8F7F4] to-[#FFE8E0] text-stone-900 pt-24 pb-12 overflow-hidden border-t border-stone-200">

<div className="absolute inset-0 halftone-light opacity-30 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 max-w-[1400px] mx-auto px-6 relative">

<div className="lg:col-span-4 flex flex-col h-full justify-between">
<div className="">
<span className="text-stone-400 text-sm uppercase tracking-wide mb-8 block">[05] Get In Touch</span>
<h2 className="text-5xl lg:text-6xl leading-none tracking-tight font-medium mb-6 reveal-text">
                        Mixing human identity with AI.
                    </h2>
<p className="text-xl text-stone-500 font-light italic reveal-text">Keep it real.</p>
</div>
<div className="hidden lg:block space-y-4 mt-20">
<p className="text-sm font-medium text-stone-400 mb-2">Follow us</p>
<div className="flex gap-6">
<a className="text-stone-600 hover:text-black transition-colors" href="#">Instagram</a>
<a className="text-stone-600 hover:text-black transition-colors" href="#">Pinterest</a>
<a className="text-stone-600 hover:text-black transition-colors" href="#">Twitter</a>
</div>
</div>
</div>

<div className="lg:col-span-4 flex relative items-end justify-center">

<div className="relative w-[300px] h-[600px] rounded-[3rem] border-[8px] border-stone-900 bg-stone-900 overflow-hidden shadow-2xl z-20 hover:-translate-y-2 transition-transform duration-500">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-stone-900 rounded-b-xl z-30"></div>

<img alt="App UI" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/215503eb-c4ac-4fc5-bada-7a0fa3bfbd39_800w.webp"/>

<div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-24">
<div className="flex justify-between items-center text-white mb-5">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-stone-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd81b30b-be55-4584-bbd5-929940943452_320w.webp"/>
<img className="w-10 h-10 rounded-full border-2 border-stone-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce5a380c-785b-4ec0-9cd9-486d09b03a12_320w.webp"/>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-medium">
                                 98% Match
                             </div>
</div>
<div className="bg-white text-black p-4 rounded-3xl flex justify-between items-center shadow-lg">
<div className="flex gap-4 text-2xl">
<iconify-icon icon="solar:home-smile-bold"></iconify-icon>
<iconify-icon className="text-stone-400" icon="solar:hanger-2-linear"></iconify-icon>
</div>
<button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-800 transition">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col justify-between lg:pl-12">
<div className="mb-12 lg:mb-0 lg:pt-12">
<p className="text-stone-600 font-light text-xl mb-8 max-w-sm leading-relaxed reveal-text">
                        Forget the friction of old-school shopping. Let Aura reveal the style you were always meant to own.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-[#FF5A36] text-white rounded-xl font-medium text-sm hover:bg-orange-600 transition shadow-lg shadow-orange-500/30 flex justify-center items-center gap-2 group">
                            Reveal my style
                            <iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-8 text-sm mt-auto border-t border-stone-300 pt-8">
<div>
<h4 className="font-semibold text-stone-900 mb-4">Quick Links</h4>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-[#FF5A36] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#FF5A36] transition-colors" href="#">Visionary AI</a></li>
<li><a className="hover:text-[#FF5A36] transition-colors" href="#">Values</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Resources</h4>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-[#FF5A36] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#FF5A36] transition-colors" href="#">Blogs</a></li>
<li><a className="hover:text-[#FF5A36] transition-colors" href="#">Get App</a></li>
</ul>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
