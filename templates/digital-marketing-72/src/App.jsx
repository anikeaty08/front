import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Scroll Reveal
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        // Interactive Description Logic
        const serviceItems = document.querySelectorAll('.service-item');
        
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const desc = item.getAttribute('data-desc');
                const targetId = item.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                
                if (targetEl && desc) {
                    targetEl.style.opacity = '0';
                    setTimeout(() => {
                        targetEl.innerText = desc;
                        targetEl.style.opacity = '1';
                    }, 200);
                }
            });

            item.addEventListener('mouseleave', () => {
                const targetId = item.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                const original = targetEl.getAttribute('data-original');
                
                if (targetEl && original) {
                    targetEl.style.opacity = '0';
                    setTimeout(() => {
                        targetEl.innerText = original;
                        targetEl.style.opacity = '1';
                    }, 200);
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="top-0 w-full h-screen -z-10 bg-cover bg-center blur-sm fixed saturate-0 opacity-30" data-alpha-mask="0" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6ffaa2c-c22e-4c8b-9a54-37a651c4b67a_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)'}}></div>


<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full h-full max-w-[1920px] mx-auto opacity-40">
<div className="w-full h-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 border-l border-[#1e1e50]/10">
<div className="h-full border-r border-[#1e1e50]/10"></div>
<div className="h-full border-r border-[#1e1e50]/10"></div>
<div className="h-full border-r border-[#1e1e50]/10"></div>
<div className="h-full border-r border-[#1e1e50]/10"></div>
<div className="h-full border-r border-[#1e1e50]/10"></div>
<div className="h-full border-r border-[#1e1e50]/10"></div>
<div className="h-full border-r border-[#1e1e50]/10 hidden md:block"></div>
<div className="h-full border-r border-[#1e1e50]/10 hidden md:block"></div>
<div className="h-full border-r border-[#1e1e50]/10 hidden lg:block"></div>
<div className="h-full border-r border-[#1e1e50]/10 hidden lg:block"></div>
<div className="h-full border-r border-[#1e1e50]/10 hidden lg:block"></div>
<div className="h-full border-r border-[#1e1e50]/10 hidden lg:block"></div>
</div>
</div>

<nav className="relative z-50 w-full max-w-[1920px] mx-auto transition-transform duration-300" id="navbar">
<div className="flex lg:px-12 lg:py-8 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-10 h-10 bg-[#1e1e50] text-white rounded-lg shadow-lg group-hover:bg-[#da3531] transition-colors duration-300">
<span className="text-xl font-bold">B</span>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#da3531] rounded-full border-2 border-white group-hover:bg-[#1e1e50] transition-colors"></div>
</div>
<span className="text-xl font-semibold tracking-tight text-[#1e1e50]">BANY<span className="text-[#da3531]">.</span></span>
</a>
<div className="hidden lg:flex items-center gap-12">
<a className="text-sm font-medium hover:text-[#da3531] transition-colors tracking-wide" href="#">HOME</a>
<a className="text-sm font-medium hover:text-[#da3531] transition-colors tracking-wide" href="#services">SERVICES</a>
<a className="text-sm font-medium hover:text-[#da3531] transition-colors tracking-wide" href="#">EXPERTISE</a>
<a className="text-sm font-medium hover:text-[#da3531] transition-colors tracking-wide" href="#">WORKS</a>
<a className="px-6 py-2.5 text-sm font-semibold text-white bg-[#1e1e50] rounded-full hover:bg-[#da3531] hover:shadow-lg hover:shadow-[#da3531]/30 transition-all duration-300 tracking-wide" href="#">SAY HELLO!</a>
</div>
<button className="lg:hidden p-2 text-[#1e1e50]">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-4 mix-blend-multiply">
<div className="w-3 h-3 bg-[#da3531] rounded-full animate-pulse"></div>
<div className="h-24 w-[1px] bg-[#1e1e50]/20">
<div className="h-1/2 w-full bg-[#1e1e50] animate-scroll-indicator"></div>
</div>
<span className="text-[10px] font-semibold tracking-[0.2em] text-[#1e1e50] [writing-mode:vertical-rl] rotate-180 uppercase">Scroll</span>
</div>

<main className="relative z-10 w-full max-w-[1920px] mx-auto">

<div className="lg:px-12 lg:pt-20 min-h-[90vh] flex flex-col pt-12 pr-6 pb-32 pl-6 relative justify-center">
<div className="absolute top-1/3 left-[8%] w-2 h-2 bg-[#1e1e50] rounded-full hidden md:block animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute top-[40%] right-[15%] lg:right-[20%] w-32 h-32 rounded-full border border-[#da3531]/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-2 h-2 bg-[#da3531] rounded-full absolute -top-1"></div>
</div>
<div className="flex flex-col lg:ml-[8.33%] reveal-on-scroll is-visible w-full max-w-7xl relative items-start">
<div className="relative z-10 overflow-hidden">
<h1 className="sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] cursor-default select-none hover:scale-[1.02] transition-transform duration-700 origin-left text-6xl font-bold text-[#da3531] tracking-tighter" style={{}}>BANY</h1>
</div>
<div className="relative z-10 mt-2 lg:mt-4 lg:ml-32 overflow-hidden">
<h1 className="sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] cursor-default select-none hover:scale-[1.02] transition-transform duration-700 origin-left text-6xl font-bold text-[#1e1e50] tracking-tighter" style={{}}>AGENCY</h1>
</div>
<div className="relative z-20 mt-16 lg:mt-24 max-w-xl lg:ml-2">
<div className="flex flex-col gap-6 pl-4 border-l-2 border-[#da3531]">
<p className="text-xl lg:text-2xl font-medium text-[#1e1e50] leading-relaxed">
                            At Bany, we boldly venture where no brand has dared to go before.
                        </p>
<p className="text-lg lg:text-xl font-normal text-[#1e1e50]/70 leading-relaxed">
                            Our mission? To position your brand into the hearts and minds of your audience through data-driven creativity.
                        </p>
</div>
<a className="mt-8 flex items-center gap-3 group cursor-pointer w-fit" href="#services">
<div className="w-12 h-12 rounded-full border border-[#1e1e50]/20 flex items-center justify-center group-hover:bg-[#da3531] group-hover:border-[#da3531] transition-all duration-300">
<i className="w-5 h-5 text-[#1e1e50] group-hover:text-white transition-colors" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-semibold tracking-wide text-[#1e1e50] group-hover:text-[#da3531] transition-colors">EXPLORE SERVICES</span>
</a>
</div>
</div>
</div>

<div className="relative w-full bg-white" id="services">

<div className="group relative w-full border-t border-[#1e1e50]/10 pt-16 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-12">
<div className="flex justify-between items-baseline mb-16 lg:mb-24 reveal-on-scroll">
<h2 className="text-sm font-bold tracking-wide uppercase text-[#1e1e50]">
                        Strategy &amp; Creative
                    </h2>
<span className="absolute right-6 lg:right-12 top-0 -translate-y-1/2 bg-white px-4 text-5xl lg:text-7xl font-light text-[#1e1e50] tracking-tighter">
                        01
                    </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 gap-x-12 gap-y-12 items-start">

<div className="lg:col-span-4 lg:pr-12 reveal-on-scroll delay-100 min-h-[200px]">
<p className="text-lg lg:text-xl font-normal text-[#1e1e50]/70 leading-relaxed text-balance fade-text" data-original="We build the foundation of your digital presence. From crafting a unique voice to executing social strategies that resonate, we turn passive followers into active advocates." id="desc-01">We build the foundation of your digital presence. From crafting a unique voice to executing social strategies that resonate, we turn passive followers into active advocates.</p>
<div className="flex gap-2 cursor-pointer hover:underline underline-offset-4 text-sm font-medium text-[#da3531] tracking-wide mt-8 gap-x-2 gap-y-2 items-center">
<span className="">VIEW CASE STUDIES</span>
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="lg:col-span-4 w-full reveal-on-scroll delay-200">
<ul className="flex flex-col w-full">
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="We develop data-driven roadmaps to navigate the social landscape, ensuring your brand reaches the right audience with the right message at the right time." data-target="desc-01">
<span className="transition-colors text-lg font-medium">Social Media Strategy</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="From high-quality visuals to engaging copy, we produce content that captures attention and drives interaction across all digital platforms." data-target="desc-01">
<span className="text-lg font-medium transition-colors">Content Creation</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="We craft distinct visual identities and brand narratives that set you apart from the competition and resonate deeply with your core values." data-target="desc-01">
<span className="text-lg font-medium transition-colors">Branding</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="Guiding the visual and conceptual direction of your campaigns to ensure consistency, impact, and alignment with your business goals." data-target="desc-01">
<span className="text-lg font-medium transition-colors">Creative Direction</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="Persuasive and compelling words that tell your story, sell your products, and build a lasting emotional connection with your customers." data-target="desc-01">
<span className="text-lg font-medium transition-colors">Copywriting</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
</ul>
</div>

<div className="lg:col-span-4 relative h-[300px] lg:h-[400px] w-full overflow-hidden reveal-on-scroll delay-300 group-hover:shadow-2xl transition-shadow duration-500">
<div className="absolute inset-0 bg-[#1e1e50]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Creative Strategy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>

<div className="group relative w-full border-t border-[#1e1e50]/10 pt-16 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-12">
<div className="flex justify-between items-baseline mb-16 lg:mb-24 reveal-on-scroll">
<h2 className="text-sm font-bold tracking-wide uppercase text-[#1e1e50]">
                        Production &amp; Ads
                    </h2>
<span className="absolute right-6 lg:right-12 top-0 -translate-y-1/2 bg-white px-4 text-5xl lg:text-7xl font-light text-[#1e1e50] tracking-tighter">
                        02
                    </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

<div className="lg:col-span-4 lg:pr-12 reveal-on-scroll delay-100 min-h-[200px]">
<p className="lg:text-xl leading-relaxed text-balance fade-text text-lg font-normal text-[#1e1e50]/70" data-original="We specialize in creating engaging high-fidelity content. Whether it's a cinematic corporate profile or a viral TikTok ad, we handle the entire production pipeline to elevate your brand." id="desc-02">We specialize in creating engaging high-fidelity content. Whether it's a cinematic corporate profile or a viral TikTok ad, we handle the entire production pipeline to elevate your brand.</p>
<div className="mt-8 flex items-center gap-2 text-[#da3531] font-medium text-sm tracking-wide cursor-pointer hover:underline underline-offset-4">
<span className="">VIEW SHOWREEL</span>
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
</div>

<div className="lg:col-span-4 w-full reveal-on-scroll delay-200">
<ul className="flex flex-col w-full">
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="Online video advertising today and in the future is a more engaging, interactive marketing experience and it refers to advertising that occurs before, during, and/or after a video stream on the internet." data-target="desc-02">
<span className="text-lg font-medium transition-colors">Video Advertising</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="We document your events, launches, and corporate milestones with dynamic footage that preserves the energy and importance of the moment." data-target="desc-02">
<span className="text-lg font-medium transition-colors">Event Videos</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="Professional photography that captures the essence of your products, team, and events with striking clarity, lighting, and artistic style." data-target="desc-02">
<span className="text-lg font-medium transition-colors">Photography</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="Cinematic videography services that tell your brand's story through motion, sound, and visual excellence, suitable for all digital channels." data-target="desc-02">
<span className="text-lg font-medium transition-colors">Videography</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
<li className="service-item group/item py-4 border-b border-[#1e1e50]/10 hover:border-transparent px-6 -mx-6 transition-all duration-300 hover:bg-[#da3531] hover:text-white cursor-pointer flex justify-between items-center rounded-lg" data-desc="Polished and professional video profiles that effectively communicate your company's vision, culture, and capabilities to stakeholders and clients." data-target="desc-02">
<span className="text-lg font-medium transition-colors">Corporate profile</span>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-30 group-hover/item:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-current"></div>
</div>
</li>
</ul>
</div>

<div className="lg:col-span-4 relative h-[300px] lg:h-[400px] w-full overflow-hidden reveal-on-scroll delay-300 group-hover:shadow-2xl transition-shadow duration-500">
<div className="absolute inset-0 bg-[#1e1e50]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Video Production" className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2452b756-1d35-4d75-af92-df0fb5f4aea7_800w.webp"/>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-[#1e1e50] text-white py-12 px-6 lg:px-12 relative z-10 border-t border-white/10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-2xl font-bold tracking-tight">BANY<span className="text-[#da3531]">.</span></span>
<p className="text-sm text-white/60">© 2024 Bany Agency. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 lg:hidden">
<button className="w-14 h-14 bg-[#da3531] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#1e1e50] transition-colors">
<i className="w-6 h-6" data-lucide="message-square" strokeWidth="1.5"></i>
</button>
</div>


    </>
  );
}
