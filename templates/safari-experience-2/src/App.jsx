import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Register GSAP ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            // 2. Initialize Lenis for smooth scrolling
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                smoothTouch: false,
                touchMultiplier: 2,
            });

            // 3. Sync GSAP and Lenis safely
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0);

            // 4. Safe Parallax using yPercent
            const parallaxLayers = gsap.utils.toArray('[data-speed]');
            parallaxLayers.forEach((layer) => {
                const speed = parseFloat(layer.getAttribute('data-speed'));
                gsap.to(layer, {
                    yPercent: (1 - speed) * 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: layer.closest('section') || layer.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            // 5. Clean, subtle fade-in for glass cards
            const cards = gsap.utils.toArray('.glass-card');
            cards.forEach(card => {
                gsap.fromTo(card, 
                    { 
                        y: 40, 
                        opacity: 0,
                    },
                    {
                        y: 0, 
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 50%",
                            scrub: 1
                        }
                    }
                );
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-multiply film-grain"></div>

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-[#F7F5F0] py-6 px-8 md:px-12 flex justify-between items-center pointer-events-none">
<div className="font-serif text-sm tracking-tighter uppercase pointer-events-auto cursor-pointer">
            IDUBE
        </div>
<div className="pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity duration-300">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[#2D2A26]">
<div className="absolute inset-0 w-full h-full">

<img alt="Savanna Horizon" className="w-[110%] h-[110%] object-cover object-center absolute -top-[5%] -left-[5%] opacity-60" data-speed="0.85" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2868&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#F7F5F0] opacity-100 z-10 pointer-events-none"></div>
</div>
<div className="relative z-20 flex flex-col items-center text-center px-6 mt-20">
<span className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#F7F5F0]/70 mb-6 animate-fade-up">A Spatial Safari</span>
<h1 className="text-5xl md:text-7xl lg:text-[8vw] leading-none tracking-tight text-[#F7F5F0] font-normal animate-fade-up delay-200 uppercase">
                The Idube<br/>
<span className="italic font-light opacity-90 tracking-tighter capitalize">Chronicles</span>
</h1>
</div>
</header>

<main className="relative z-20 overflow-hidden pb-32 pt-12">

<section className="relative w-full py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto z-20">
<p className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight text-[#2D2A26] text-center opacity-90">
                "Welcome to camp Idube. Have you ever felt lonely at your job? Do you just love nature? Or do you like facing unknown challenges and experiencing new things? Well here at camp Idube, we have it all just for you my friend."
            </p>
</section>

<section className="w-full py-16 md:py-24 px-6 md:px-12 relative z-20">

<div className="absolute top-20 right-[10%] z-0 text-[#8B7355]/10 pointer-events-none" data-speed="1.1">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="160"></iconify-icon>
</div>
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">

<div className="lg:col-span-6 w-full h-[50vh] lg:h-[70vh] rounded-2xl overflow-hidden relative z-10 shadow-sm">
<img alt="Campfire scene" className="absolute inset-[-10%] w-[120%] h-[120%] object-cover" data-speed="0.9" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-[#4A5D4E]/10 mix-blend-multiply pointer-events-none"></div>
</div>

<div className="lg:col-span-6 flex flex-col justify-center relative z-20">
<div className="glass-card bg-white/60 border border-white/40 p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<h2 className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#8B7355] mb-4">01. The Experience</h2>
<h3 className="text-3xl md:text-5xl font-serif tracking-tight text-[#2D2A26] mb-8 leading-tight">What is <br/><span className="italic text-[#4A5D4E]">Camp Idube?</span></h3>
<div className="text-base md:text-lg text-[#2D2A26]/80 font-sans leading-relaxed space-y-6">
<p>
                                Well we are a safari camp that offers a wide range of relaxing and exiting activities such as, <span className="font-semibold text-[#2D2A26]">Safari drives</span> for our guest to experience the magnificence of nature and the beauty of wildlife.
                            </p>
<p>
                                Not only this, but we also offer <span className="font-semibold text-[#2D2A26]">Safari walks</span> which suit guests who prefer to wind down and actually step into the world of nature.
                            </p>
<p>
                                Additionally, we host weekly dinner nights at our smaller but calmer Bush Camp. Our well renowned bush camp offers peaceful seatings surrounding the soothing sound of the fireplace.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden mt-12 mb-24 z-10">
<img alt="Parallax Transition" className="absolute inset-[-10%] w-[120%] h-[120%] object-cover" data-speed="0.8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#2D2A26]/40 z-10 pointer-events-none"></div>
<div className="absolute bottom-[20%] right-[15%] z-20 text-[#F7F5F0]/20 pointer-events-none" data-speed="1.15">
<iconify-icon icon="solar:compass-square-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
</section>

<section className="w-full bg-[#2D2A26] text-[#F7F5F0] py-24 md:py-32 px-6 md:px-12 relative z-20 overflow-hidden">
<div className="absolute top-0 right-0 w-[50vw] h-full pointer-events-none z-0 mix-blend-overlay opacity-20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2071&amp;q=80"/>
</div>
<div className="absolute -left-12 top-1/4 z-0 text-[#8B7355]/10 pointer-events-none" data-speed="1.2">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="250"></iconify-icon>
</div>
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 relative z-30 items-center">
<div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 relative z-40">
<div className="glass-card bg-white/5 border border-white/10 p-10 md:p-14 rounded-3xl">
<h2 className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#8B7355] mb-4">02. The Opportunity</h2>
<h3 className="text-3xl md:text-5xl font-serif tracking-tight mb-8 leading-tight">What's in it <br/><span className="italic font-light">for you?</span></h3>
<div className="text-base md:text-lg text-[#F7F5F0]/70 font-sans leading-relaxed space-y-6">
<p>
                                Well you get to learn from our wonderful tour guides and be one with nature. You will be doing fast work but for an everlasting experience.
                            </p>
<p>
                                Another well appreciated question is, is it dangerous? I think we know everything can be and not be dangerous but if you follow our simple 3 step guide:
                            </p>
<ul className="space-y-4 py-6 border-y border-[#F7F5F0]/10 my-8">
<li className="flex items-start">
<span className="text-[#8B7355] font-serif text-lg mr-4 mt-1 italic">I.</span>
<span>Don't go near the river sand.</span>
</li>
<li className="flex items-start">
<span className="text-[#8B7355] font-serif text-lg mr-4 mt-1 italic">II.</span>
<span>Stay calm at all times.</span>
</li>
<li className="flex items-start">
<span className="text-[#8B7355] font-serif text-lg mr-4 mt-1 italic">III.</span>
<span className="text-[#F7F5F0]">
                                        Most importantly, 
                                        <span className="font-semibold text-orange-500 tracking-wider ml-1">DON'T RUN!</span>
</span>
</li>
</ul>
</div>
</div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 grid grid-cols-2 gap-4 relative z-20">
<div className="col-span-2 h-56 md:h-72 overflow-hidden rounded-2xl relative shadow-lg" data-speed="0.95">
<img alt="Safari Guide" className="absolute inset-[-5%] w-[110%] h-[110%] object-cover saturate-50 hover:saturate-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="h-40 md:h-56 overflow-hidden rounded-2xl mt-4 relative shadow-lg" data-speed="1.05">
<img alt="River Sand detail" className="absolute inset-[-5%] w-[110%] h-[110%] object-cover saturate-50 hover:saturate-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="h-40 md:h-56 overflow-hidden rounded-2xl mt-12 relative shadow-lg" data-speed="0.9">
<img alt="Leaves texture" className="absolute inset-[-5%] w-[110%] h-[110%] object-cover saturate-50 hover:saturate-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#F7F5F0] relative z-20">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
<div className="lg:col-span-5 lg:order-2 order-1 relative z-10">
<div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] glass-card">
<img alt="Majestic Lion" className="absolute inset-[-10%] w-[120%] h-[120%] object-cover" data-speed="0.92" src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2059&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/90 via-[#2D2A26]/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-8 left-8 right-8 text-[#F7F5F0] z-20">
<p className="font-serif italic text-xl mb-1">Panthera leo</p>
<p className="text-xs font-sans tracking-[0.1em] uppercase opacity-80">Respect the king. <span className="text-orange-400 font-semibold ml-1">Don't run.</span></p>
</div>
</div>
</div>
<div className="lg:col-span-7 lg:order-1 order-2 flex flex-col justify-center relative z-20">
<div className="glass-card bg-white/60 border border-white/40 p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<h2 className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#8B7355] mb-4">03. The Knowledge</h2>
<h3 className="text-3xl md:text-5xl font-serif tracking-tight text-[#2D2A26] mb-8 leading-tight">Understanding <br/><span className="italic text-[#8B7355]">Nature</span></h3>
<div className="text-base md:text-lg text-[#2D2A26]/80 font-sans leading-relaxed space-y-6">
<p>
                                Thirdly, you will need to understand and love nature so if you take guests for our walks, you can describe in detail about things such as trees and bugs.
                            </p>
<div className="p-6 bg-[#8B7355]/5 border-l-2 border-[#8B7355] mt-8 rounded-r-xl">
<p className="text-[#2D2A26] font-normal leading-relaxed text-sm md:text-base">
                                    Furthermore if you coincidentally run into a lion which the chances of that happening is lower than to be concerned about, remember your code, 
                                    <span className="text-orange-600 font-semibold mx-1">DON'T RUN</span>. 
                                    This may seem wrong but it works, the lions here respect you if one finds you and roars, just roar back, and everything will be fine.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full bg-[#1A1816] text-[#F7F5F0] py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden z-20">
<img className="absolute inset-[-10%] w-[120%] h-[120%] object-cover opacity-5 mix-blend-overlay pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-30 max-w-2xl mx-auto flex flex-col items-center">
<iconify-icon className="text-[#8B7355] mb-8 opacity-70" height="40" icon="solar:leaf-linear" strokeWidth="1.5" width="40"></iconify-icon>
<p className="text-2xl md:text-4xl font-serif leading-snug tracking-tight mb-12 text-[#F7F5F0]/90">
                "In conclusion, if you love nature or just want simple peace in life with a stable job that feels like a lifestyle and not your boring old office job, <span className="italic text-[#8B7355]">well why aren't you here yet?</span>"
            </p>
<a className="group flex items-center gap-3 text-xs md:text-sm font-sans tracking-[0.2em] uppercase border-b border-[#8B7355]/30 pb-2 hover:border-[#8B7355] transition-colors duration-300 text-[#F7F5F0]/80 hover:text-[#F7F5F0]" href="#">
<span>Join Camp Idube</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</footer>


    </>
  );
}
