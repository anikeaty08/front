import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Text Splitter Utility
            const splitTextElements = document.querySelectorAll(".reveal-text");
            
            splitTextElements.forEach(element => {
                const text = element.innerText;
                const words = text.split(" ");
                let newHtml = "";
                
                words.forEach(word => {
                    newHtml += `<span class="word-wrapper"><span class="word">${word}</span></span> `;
                });
                
                element.innerHTML = newHtml;
            });

            // 2. Reveal Animation
            const revealElements = document.querySelectorAll(".reveal-text");
            
            revealElements.forEach(element => {
                const words = element.querySelectorAll(".word");
                
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.04
                });
            });

            // 3. Parallax Image Effect
            const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");
            
            parallaxWrappers.forEach(wrapper => {
                const img = wrapper.querySelector(".parallax-img");
                if (img) {
                    gsap.fromTo(img, 
                        { y: "-10%" },
                        {
                            y: "10%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: wrapper,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });

            // 4. Fade Up Miscellaneous Elements
            gsap.utils.toArray(".fade-up-element").forEach(element => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });

            // 5. Button Reveal
            gsap.to("#hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1, 
                ease: "power3.out"
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#1C1917]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="hidden md:flex space-x-8 text-sm font-normal text-[#1C1917]/70">
<a className="hover:text-[#1C1917] transition-colors" href="#">Portfolio</a>
<a className="hover:text-[#1C1917] transition-colors" href="#">Process</a>
<a className="hover:text-[#1C1917] transition-colors" href="#">Rates</a>
</div>

<div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
<iconify-icon className="text-[#1C1917]" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-lg font-medium tracking-tight uppercase">Brownbridge</span>
</div>

<div className="flex items-center space-x-6">
<a className="text-sm font-normal hidden md:block" href="mailto:kyle@brownbridge.arch">Contact</a>
<button className="bg-[#1C1917] text-[#FAFAF9] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-stone-900/10">
                        Book Render
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 opacity-0 animate-fade-in" style={{animationFillMode: 'forwards'}}>
<div className="flex -space-x-2">
<img alt="Architect" className="w-6 h-6 rounded-full border border-[#FAFAF9] grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Developer" className="w-6 h-6 rounded-full border border-[#FAFAF9] grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Designer" className="w-6 h-6 rounded-full border border-[#FAFAF9] grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-[#1C1917]/60">Supporting Architects &amp; Developers</span>
</div>

<div className="flex flex-wrap gap-6 md:gap-8 opacity-40 mb-12 justify-center px-4 grayscale">
<iconify-icon className="md:w-8" height="24" icon="simple-icons:autodesk" width="24"></iconify-icon>
<iconify-icon className="md:w-8" height="24" icon="simple-icons:blender" width="24"></iconify-icon>
<iconify-icon className="md:w-8" height="24" icon="simple-icons:adobe" width="24"></iconify-icon>
<iconify-icon className="md:w-8" height="24" icon="simple-icons:unrealengine" width="24"></iconify-icon>
</div>

<div className="text-center max-w-4xl mx-auto mb-16">
<h1 className="reveal-text text-5xl md:text-7xl serif-font leading-[1.1] font-light tracking-tight mb-6 text-[#1C1917]"><span className="word-wrapper"><span className="word">Architectural</span></span> <span className="word-wrapper"><span className="word">AI</span></span> <span className="word-wrapper"><span className="word">Consultant</span></span> </h1>
<p className="text-lg text-[#1C1917]/70 max-w-xl mx-auto leading-relaxed reveal-para delay-300 font-light">
                From sketch to cinematic flyover. High-fidelity visualizations for competitive developments.
                <span className="md:block mt-2">Hourly rates. No complex contracts.</span>
</p>
<div className="mt-8 opacity-0" id="hero-cta">
<button className="bg-white border border-[#1C1917]/10 text-[#1C1917] px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-50 transition-transform duration-300 shadow-xl shadow-stone-200">
                    View Work
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper bg-stone-200">
<img alt="Exterior" className="w-full h-[120%] object-cover parallax-img grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white z-10">
<p className="text-xs font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5"></iconify-icon> Exterior Visualization
                    </p>
</div>
</div>

<div className="md:col-span-4 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#1C1917]/5">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-[#FAFAF9] border border-[#1C1917]/5 flex items-center justify-center">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<iconify-icon className="text-[#1C1917]/20 text-2xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="serif-font text-2xl mb-1 tracking-tight">Flexible Workflow</h3>
<p className="text-xs text-[#1C1917]/60">Adapting to your project stage.</p>
</div>
<div className="space-y-3 mt-8">
<div className="flex justify-between text-xs border-b border-stone-100 pb-2">
<span className="text-stone-500">Input</span>
<span className="font-medium">CAD / Sketch / PDF</span>
</div>
<div className="flex justify-between text-xs border-b border-stone-100 pb-2">
<span className="text-stone-500">Turnaround</span>
<span className="font-medium">48 - 72 Hours</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-stone-500">Output</span>
<span className="font-medium">4K / 8K / Video</span>
</div>
</div>
</div>

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper bg-stone-200">
<img alt="Interior" className="w-full h-[120%] object-cover parallax-img grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white max-w-[80%] z-10">
<p className="serif-font text-xl leading-tight tracking-tight">Photorealistic interiors with custom furniture placement.</p>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 bg-white border-y border-[#1C1917]/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="reveal-text serif-font text-3xl md:text-5xl leading-tight font-light text-[#1C1917] tracking-tight"><span className="word-wrapper"><span className="word">“I</span></span> <span className="word-wrapper"><span className="word">integrate</span></span> <span className="word-wrapper"><span className="word">seamlessly</span></span> <span className="word-wrapper"><span className="word">with</span></span> <span className="word-wrapper"><span className="word">your</span></span> <span className="word-wrapper"><span className="word">design</span></span> <span className="word-wrapper"><span className="word">team.</span></span> <span className="word-wrapper"><span className="word">From</span></span> <span className="word-wrapper"><span className="word">rough</span></span> <span className="word-wrapper"><span className="word">massing</span></span> <span className="word-wrapper"><span className="word">sketches</span></span> <span className="word-wrapper"><span className="word">to</span></span> <span className="word-wrapper"><span className="word">polished</span></span> <span className="word-wrapper"><span className="word">marketing</span></span> <span className="word-wrapper"><span className="word">visuals,</span></span> <span className="word-wrapper"><span className="word">I</span></span> <span className="word-wrapper"><span className="word">charge</span></span> <span className="word-wrapper"><span className="word">simply</span></span> <span className="word-wrapper"><span className="word">by</span></span> <span className="word-wrapper"><span className="word">the</span></span> <span className="word-wrapper"><span className="word">hour.”</span></span> </h2>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-10">
<div>
<h3 className="serif-font text-3xl mb-2 reveal-text tracking-tight"><span className="word-wrapper"><span className="word">Design</span></span> <span className="word-wrapper"><span className="word">Process</span></span> </h3>
<p className="text-sm text-[#1C1917]/60">Transparent iteration stages.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-[#1C1917]/10 flex items-center justify-center hover:bg-[#1C1917] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-[#1C1917]/10 flex items-center justify-center hover:bg-[#1C1917] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">

<div className="min-w-[220px] group cursor-pointer">
<div className="w-full aspect-[4/5] bg-white rounded-2xl mb-4 flex items-center justify-center p-8 group-hover:shadow-xl transition-all border border-[#1C1917]/5 relative overflow-hidden">
<img alt="Sketch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs font-medium bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20">Phase 01</span>
</div>
</div>
<h4 className="font-medium tracking-tight">Sketch to Site Plan</h4>
<p className="text-xs text-[#1C1917]/50">Massing &amp; Context</p>
</div>

<div className="min-w-[300px] cursor-pointer">
<div className="w-full aspect-[4/5] bg-[#1C1917] rounded-2xl mb-4 flex items-center justify-center p-0 shadow-2xl relative overflow-hidden">
<img alt="Clay Render" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=600&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
<p className="text-white text-xs leading-relaxed">
<span className="font-semibold block mb-1">3D Visualization</span>
                            Clay renders for lighting approval followed by full material application.
                        </p>
</div>
</div>
<h4 className="font-medium tracking-tight">Photorealism</h4>
<p className="text-xs text-[#1C1917]/50">Materials &amp; Lighting</p>
</div>

<div className="min-w-[220px] group cursor-pointer">
<div className="w-full aspect-[4/5] bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1C1917]/5 relative overflow-hidden">
<img alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<h4 className="font-medium tracking-tight">Interior Detail</h4>
<p className="text-xs text-[#1C1917]/50">Furniture &amp; Styling</p>
</div>

<div className="min-w-[220px] group cursor-pointer">
<div className="w-full aspect-[4/5] bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1C1917]/5 relative overflow-hidden">
<img alt="Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white drop-shadow-lg" icon="solar:play-circle-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<h4 className="font-medium tracking-tight">Cinematic Flyover</h4>
<p className="text-xs text-[#1C1917]/50">Motion &amp; Animation</p>
</div>
</div>
</section>

<section className="relative h-[600px] md:h-[800px] w-full overflow-hidden parallax-wrapper">
<img alt="High rise" className="absolute inset-0 w-full h-[120%] object-cover parallax-img grayscale-[30%]" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent opacity-90 z-0"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
<h2 className="reveal-text text-white serif-font text-4xl md:text-6xl mb-12 text-center tracking-tight"><span className="word-wrapper"><span className="word">Visualise</span></span> <span className="word-wrapper"><span className="word">the</span></span> <span className="word-wrapper"><span className="word">unbuilt</span></span> <span className="word-wrapper"><span className="word">environment.</span></span> </h2>

<div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl transform translate-y-12 opacity-0 fade-up-element">
<div className="flex justify-between items-center mb-6">
<div className="text-white/80 text-xs uppercase tracking-wider">Project Status</div>
<iconify-icon className="text-white" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-6">
<div className="">
<div className="flex justify-between text-white text-sm mb-2">
<span className="font-light">Geometry Processing</span>
<span className="text-stone-300">Complete</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white w-[100%]"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-white text-sm mb-2">
<span className="font-light">Ray Tracing</span>
<span>Running...</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-stone-400 to-white w-[85%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-stone-800 border border-white/10 flex items-center justify-center text-white text-xs"><iconify-icon icon="solar:monitor-camera-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-stone-700 border border-white/10 flex items-center justify-center text-white text-xs"><iconify-icon icon="solar:gallery-linear"></iconify-icon></div>
</div>
<div className="text-right">
<div className="text-white text-2xl font-serif">4K</div>
<div className="text-white/60 text-[10px]">Ultra-High Res</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[#1C1917]/10 pb-6">
<h2 className="reveal-text serif-font text-4xl md:text-5xl tracking-tight"><span className="word-wrapper"><span className="word">Capabilities</span></span> </h2>
<div className="flex space-x-6 text-sm font-medium mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
<button className="text-[#1C1917] border-b-2 border-[#1C1917] pb-1 whitespace-nowrap">Visualization</button>
<button className="text-[#1C1917]/40 hover:text-[#1C1917] transition-colors pb-1 whitespace-nowrap">Planning</button>
<button className="text-[#1C1917]/40 hover:text-[#1C1917] transition-colors pb-1 whitespace-nowrap">Animation</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div className="space-y-0">

<div className="group py-8 border-b border-[#1C1917]/10 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="inline-block px-2 py-0.5 rounded border border-[#1C1917]/20 text-[10px] uppercase tracking-wider mb-2 text-[#1C1917]/60">Most Popular</span>
</div>
<h3 className="serif-font text-3xl group-hover:text-[#1C1917]/70 transition-colors tracking-tight">3D Visualisations</h3>
<p className="text-sm text-[#1C1917]/60 mt-2 font-light">From site plan to photo-real renders. Including light study, material selection, and environment compositing.</p>
<div className="mt-4 flex gap-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span>Exterior</span>
<span>•</span>
<span>Interior</span>
</div>
</div>

<div className="group py-8 border-b border-[#1C1917]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl tracking-tight">Site Plans</h3>
<p className="text-sm text-[#1C1917]/60 mt-2 font-light">Converting sketches into accurate 2D/3D site plans for planning permission and developer presentations.</p>
</div>

<div className="group py-8 border-b border-[#1C1917]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl tracking-tight">3D Flyovers</h3>
<p className="text-sm text-[#1C1917]/60 mt-2 font-light">Cinematic camera paths showcasing the development flow. Full post-production and color grading included.</p>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4">
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64 bg-stone-200">
<img alt="Modern Interior" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64 mt-12 bg-stone-200">
<img alt="Stairs" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mt-12 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-[#1C1917]/20 text-xs font-medium hover:bg-[#1C1917] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Furniture Adjustments
            </span>
<span className="px-4 py-2 rounded-full border border-[#1C1917]/20 text-xs font-medium hover:bg-[#1C1917] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Lighting Studies
            </span>
<span className="px-4 py-2 rounded-full border border-[#1C1917]/20 text-xs font-medium hover:bg-[#1C1917] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Clay Renders
            </span>
<span className="px-4 py-2 rounded-full border border-[#1C1917]/20 text-xs font-medium hover:bg-[#1C1917] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Fast Turnaround
            </span>
</div>
</section>

<section className="text-[#FAFAF9] bg-[#1C1917] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-16 items-center">
<div className="mb-12 md:mb-0">
<h2 className="reveal-text serif-font text-4xl md:text-5xl mb-6 text-white tracking-tight"><span className="word-wrapper"><span className="word">Flexible</span></span> <span className="word-wrapper"><span className="word">Engagement.</span></span> <span className="word-wrapper"><span className="word">Simple</span></span> <span className="word-wrapper"><span className="word">Rates.</span></span> </h2>
<p className="text-white/60 text-lg mb-8 max-w-md font-light">Try my services without a heavy retainer. Pause or scale up your hours as deadlines approach.</p>
<div className="grid grid-cols-3 gap-4 mt-12">
<img alt="Work" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Work" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity grayscale" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Work" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity grayscale" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 text-[10rem] font-serif text-white/5 select-none pointer-events-none">£</div>

<div className="bg-[#FAFAF9] text-[#1C1917] rounded-3xl p-8 max-w-sm mx-auto shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-[#1C1917] text-white flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="px-3 py-1 bg-stone-200 rounded-full text-[10px] font-bold uppercase tracking-wide">Most Flexible</div>
</div>
<h3 className="text-xl font-semibold mb-2">Hourly Retainer</h3>
<p className="text-xs text-[#1C1917]/60 mb-6">Perfect for developers needing quick visualization assets.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm font-light">
<iconify-icon className="mt-0.5" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Unlimited Revisions (within time)</span>
</li>
<li className="flex items-start gap-3 text-sm font-light">
<iconify-icon className="mt-0.5" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="">High-Res Source Files</span>
</li>
<li className="flex items-start gap-3 text-sm font-light">
<iconify-icon className="mt-0.5" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span>Sketch to Final Polish</span>
</li>
</ul>
<div className="flex items-end gap-2 mb-6">
<span className="text-4xl font-serif">£45</span>
<span className="text-sm text-[#1C1917]/60 mb-1">/ hour</span>
</div>
<button className="w-full bg-[#1C1917] text-white py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">Start Project</button>
<div className="mt-4 text-center">
<p className="text-[10px] text-[#1C1917]/40">Billed weekly. Cancel anytime.</p>
</div>
</div>

<div className="mt-8 flex justify-between gap-4 text-xs text-white/40 max-w-sm mx-auto">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon icon="solar:user-linear"></iconify-icon> Available for hire</div>
<div className="flex gap-x-2 gap-y-2 items-center">Avg. project: 15-20 hrs</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAF9] pt-24 pb-24">
<div className="text-center mb-16 px-4">
<span className="border border-[#1C1917]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">Client feedback</span>
<h2 className="reveal-text serif-font text-3xl md:text-4xl mt-6 mb-4 tracking-tight"><span className="word-wrapper"><span className="word">Trusted</span></span> <span className="word-wrapper"><span className="word">by</span></span> <span className="word-wrapper"><span className="word">firms.</span></span> </h2>
<p className="text-[#1C1917]/60 text-sm">Helping architects win competitions and developers sell off-plan.</p>
</div>
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-[#1C1917]/5 shadow-sm">
<div className="flex gap-1 text-[#1C1917] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2">Detailed &amp; Precise</h4>
<p className="text-sm text-[#1C1917]/70 leading-relaxed mb-6 font-light">
                    "Kyle took our loose sketches and turned them into a stunning site plan in 48 hours. The ability to iterate on furniture layout was a game changer for our client presentation."
                </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1C1917]/5">
<div className="flex items-center gap-2">
<span className="font-bold text-sm">Sarah Jenkins</span>
<span className="text-[10px] text-[#1C1917]/50">SJ Architects</span>
</div>
</div>
</div>

<div className="bg-[#1C1917] rounded-2xl overflow-hidden relative group h-[400px] md:h-auto text-white">
<img alt="Office" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-white hover:text-[#1C1917] transition-colors">
<iconify-icon className="ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<p className="font-serif text-xl leading-snug mb-2 tracking-tight">"The flyover video secured our planning permission."</p>
<p className="text-xs text-white/70">Marcus T., Property Developer</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#1C1917]/5 flex flex-col shadow-sm">
<div className="mb-4">
<h4 className="font-serif text-lg mb-2">Seamless workflow</h4>
<p className="text-sm text-[#1C1917]/70 font-light">"I love the hourly rate model. It's so much easier to try out a new visualizer without committing to a massive contract. Quality is top tier."</p>
</div>
<div className="mt-auto">
<div className="flex gap-2 mb-4 overflow-hidden">
<img alt="Thumb" className="w-12 h-12 rounded-lg object-cover grayscale" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Thumb" className="w-12 h-12 rounded-lg object-cover grayscale" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="flex items-center gap-3">
<div className="text-xs">
<div className="font-bold">David Chen</div>
<div className="text-[#1C1917]/50">Interior Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#1C1917] text-[#FAFAF9] pt-32 pb-0 relative">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#FAFAF9]/40">Kyle Brownbridge</p>
<p className="text-3xl font-serif mb-6 leading-tight tracking-tight">Bringing architectural visions to life.</p>
<div className="flex gap-4">
<button className="text-xs font-medium bg-[#FAFAF9] text-[#1C1917] px-5 py-2.5 rounded-full hover:bg-white transition-colors">Contact Me</button>
</div>
</div>
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#FAFAF9]/40">Hire Me</p>
<a className="block text-lg font-serif mb-2 hover:opacity-70 transition-opacity tracking-tight" href="mailto:kyle@brownbridge.arch">kyle@brownbridge.arch</a>
<p className="text-sm text-[#FAFAF9]/60 mb-6">+44 (0) 7123 456 789</p>
<p className="text-[10px] text-[#FAFAF9]/40 leading-relaxed">Based in UK<br/>Available Globally</p>
</div>
<div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-medium">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#FAFAF9]/40 mb-2">Services</span>
<a className="hover:text-[#FAFAF9]/70 transition-colors" href="#">Exterior Renders</a>
<a className="hover:text-[#FAFAF9]/70 transition-colors" href="#">Interior Renders</a>
<a className="hover:text-[#FAFAF9]/70 transition-colors" href="#">Site Plans</a>
<a className="hover:text-[#FAFAF9]/70 transition-colors" href="#">Flyover Video</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#FAFAF9]/40 mb-2">Social</span>
<a className="hover:text-[#FAFAF9]/70 transition-colors" href="#">Instagram</a>
<a className="hover:text-[#FAFAF9]/70 transition-colors" href="#">Behance</a>
<a className="hover:text-[#FAFAF9]/70 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</div>

<div className="w-full text-center leading-none overflow-hidden border-t border-[#FAFAF9]/5">
<h1 className="text-[18vw] leading-[0.75] font-serif text-[#FAFAF9]/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4 parallax-footer-text">
                Brownbridge
            </h1>
</div>
</footer>



    </>
  );
}
