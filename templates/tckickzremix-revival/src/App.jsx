import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                function openGalleryModal(src) {
                    const modal = document.getElementById('gallery-modal');
                    const content = document.getElementById('gallery-modal-content');
                    const img = document.getElementById('modal-img');
                    img.src = src.replace('w=600', 'w=1600').replace('q=80', 'q=95');
                    modal.classList.remove('hidden');
                    requestAnimationFrame(() => {
                        modal.classList.remove('opacity-0');
                        content.classList.remove('scale-95');
                        content.classList.add('scale-100');
                    });
                    document.body.style.overflow = 'hidden';
                }

                function closeGalleryModal(e, force) {
                    if (force || e.target.id === 'gallery-modal') {
                        const modal = document.getElementById('gallery-modal');
                        const content = document.getElementById('gallery-modal-content');
                        modal.classList.add('opacity-0');
                        content.classList.remove('scale-100');
                        content.classList.add('scale-95');
                        setTimeout(() => {
                            modal.classList.add('hidden');
                            document.body.style.overflow = '';
                        }, 300);
                    }
                }
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') closeGalleryModal(null, true);
                });
            


        // SPARKLE SYSTEM
        function createSparkles() {
            const containers = [document.getElementById('sparkle-system'), document.getElementById('gallery-sparkles')];
            
            containers.forEach(container => {
                if(!container) return;
                
                const sparkleCount = 40;
                for (let i = 0; i < sparkleCount; i++) {
                    const sparkle = document.createElement('div');
                    sparkle.classList.add('sparkle');
                    
                    // Random positioning and timing
                    sparkle.style.left = Math.random() * 100 + '%';
                    sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    sparkle.style.animationDelay = (Math.random() * 2) + 's';
                    
                    container.appendChild(sparkle);
                }
            });
        }

        // SMOOTH SCROLL
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if(targetElement){
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // INIT
        window.addEventListener('DOMContentLoaded', () => {
            createSparkles();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 bg-[#050505]/90 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#E1120F] rounded flex items-center justify-center font-bold text-black italic tracking-tighter shadow-[0_0_15px_rgba(225,18,15,0.4)]">
                    TC
                </div>
<span className="font-bold tracking-tight text-white text-sm">TCKICKZ <span className="text-[#E1120F]">REMIX</span></span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#works">The Works</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden sm:flex uppercase hover:bg-neutral-200 transition-colors text-xs font-bold text-black tracking-wide bg-white rounded pt-2 pr-5 pb-2 pl-5" href="https://buy.stripe.com/fZu5kC47N5OI5nLdTi7ok02">
                Reserve Slot
            </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-60 contrast-125 blur-[5px] scale-105" loop="" muted="" playsinline="" poster="https://assets.mixkit.co/videos/preview/mixkit-night-city-life-432-large.jpg">
<source src="https://assets.mixkit.co/videos/preview/mixkit-night-city-life-432-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-[#1a0000]/40 mix-blend-multiply"></div>
<div className="bg-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="hero-glow-core"></div>

<div className="sparkle-container" id="sparkle-system"></div>

<div className="hero-patent-beam"></div>

<div className="hero-fog-red"></div>

<div className="z-10 grid lg:grid-cols-2 gap-16 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="space-y-8 relative z-20">
<div className="inline-flex items-center gap-2 border border-[#E1120F]/30 bg-[#E1120F]/10 px-3 py-1 rounded-full backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1120F] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1120F]"></span>
</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#E1120F]">Campaign Live: Atlanta</span>
</div>
<h1 className="lg:text-7xl leading-[0.95] text-5xl font-bold text-white tracking-tighter">
                    BRING YOUR <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1120F] to-[#ff4d4a]">GRAILS</span> BACK <br/>
                    TO LIFE.
                </h1>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-md">
                    The <span className="text-white font-medium">REVIVAL</span> campaign is here. Lock in "The Works" restoration for a <span className="text-white font-medium">$75 reservation</span>. We handle the rest.
                </p>

<div className="p-5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm max-w-md">
<div className="flex justify-between items-center mb-2">
<span className="uppercase text-xs text-white tracking-widest">Daily Capacity</span>
<span className="animate-pulse text-xs font-semibold text-white">ONLY 10 SLOTS / DAY</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#E1120F] h-full w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between items-start mt-1.5 gap-2">
<p className="text-[10px] font-medium text-[#E44D4D]/60 text-left">Full Payment Orders Receive Priority Cleaning</p>
<p className="text-[10px] text-white text-right shrink-0">Slots Only Available through Jan. 31st</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="overflow-hidden uppercase transition-all transform hover:bg-[#b00e0b] hover:-translate-y-1 active:scale-95 hover:shadow-[0_0_35px_rgba(225,18,15,0.7)] before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/10 before:to-transparent before:rounded before:pointer-events-none text-sm font-bold text-white tracking-wide text-center bg-[#E1120F] rounded pt-4 pr-8 pb-4 pl-8 relative shadow-[0_0_20px_rgba(225,18,15,0.3)]" href="https://buy.stripe.com/fZu5kC47N5OI5nLdTi7ok02">
                        Reserve My Slot ($75)
                    </a>
<a className="uppercase hover:bg-white/5 hover:border-white/40 transition-all text-sm font-medium text-white tracking-wide text-center border-white/20 border rounded pt-4 pr-8 pb-4 pl-8" href="#works">
                        See What's Included
                    </a>
</div>
<p className="flex items-center gap-2 text-xs font-medium text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                    Trusted by Atlanta's heavy hitters and collectors.
                </p>
</div>

<div className="relative hidden lg:block h-[600px] w-full z-10">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full aspect-square max-w-[500px]">
<div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-[#E1120F]/20 animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="absolute top-20 right-0 bg-black/80 backdrop-blur border border-white/10 px-4 py-2 rounded text-xs font-medium text-white shadow-xl z-20">
<span className="text-[#E1120F]">•</span> Deadstock Finish
                        </div>
<div className="absolute bottom-20 left-0 bg-black/80 backdrop-blur border border-white/10 px-4 py-2 rounded text-xs font-medium text-white shadow-xl z-20">
<span className="text-[#E1120F]">•</span> 100% Hand Cleaned
                        </div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-[#0A0A0A] border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">WHY <span className="text-[#E1120F]">REVIVAL</span>?</h2>
<p className="text-neutral-400 max-w-2xl mx-auto font-light">
                    We don't scrub. We restore. This is a technical process designed for the shoes you can't replace.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-900/50 border border-white/5 p-8 rounded hover:border-[#E1120F]/50 transition-colors group patent-gloss">
<div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#E1120F] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Factory Fresh Finish</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Our techniques remove deep-set oxidation and grime that regular cleaning misses. We aim for that "just unboxed" look.
                    </p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-8 rounded hover:border-[#E1120F]/50 transition-colors group patent-gloss">
<div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#E1120F] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">48-Hour Turnaround</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Speed without cutting corners. By limiting daily slots, we ensure your rotation is back on your feet faster than anyone in ATL.
                    </p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-8 rounded hover:border-[#E1120F]/50 transition-colors group patent-gloss">
<div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-[#E1120F] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">All Grails Welcome</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        From Jordan 11 patent leather to Yeezy knits and designer runners. We know materials and we know how to treat them safely.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] pt-24 pb-24 relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,18,15,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
<div className="sparkle-container opacity-30" id="gallery-sparkles"></div>
<div className="overflow-hidden group/gallery min-h-[800px] flex flex-col bg-[#050505] w-full pt-20 pb-20 relative justify-center">
<style>
                @keyframes filmRowLTR {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes filmRowRTL {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes fogFlow {
                    0% { transform: translateX(10%) translateY(0) scale(1); opacity: 0.05; }
                    50% { transform: translateX(-10%) translateY(5%) scale(1.1); opacity: 0.08; }
                    100% { transform: translateX(10%) translateY(0) scale(1); opacity: 0.05; }
                }
                
                .film-strip-row:hover {
                    animation-play-state: paused;
                }
            </style>


<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
<div className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] bg-[radial-gradient(circle_at_center,#E1120F,transparent_60%)] blur-[100px] animate-[fogFlow_20s_ease-in-out_infinite]"></div>
</div>

<div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
<div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>

<div className="relative z-10 text-center mb-14 px-6">
<h2 className="text-4xl font-bold text-white tracking-wide mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">RESTORATION ARCHIVE</h2>
<p className="text-white/60 text-lg font-light tracking-wide">“A cinematic reel of real transformations.”</p>
</div>

<div className="relative z-10 w-full overflow-hidden flex flex-col gap-10" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex gap-0 w-max film-strip-row animate-[filmRowLTR_45s_linear_infinite]">

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 z-10 w-full h-full">
<img alt="Restoration Comparison" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300"></div>
</div>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 1" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 2" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 3" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 4" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 z-10 w-full h-full">
<img alt="Restoration Comparison" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300"></div>
</div>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 1" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 2" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 3" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 4" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex gap-0 w-max film-strip-row animate-[filmRowRTL_45s_linear_infinite]">

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 11" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 12" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 13" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 14" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 15" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>

<div className="flex shrink-0">
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 11" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 12" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 13" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 14" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&amp;w=600&amp;fit=crop"/>
</div>
<div className="w-[360px] h-[270px] mx-4 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(225,18,15,0.33)] cursor-pointer group/item relative" onclick="openGalleryModal(this.querySelector('img').src)">
<div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300 z-10"></div>
<img alt="Restoration 15" className="w-full h-full object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&amp;w=600&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md hidden items-center justify-center p-6 opacity-0 transition-opacity duration-300" id="gallery-modal" onclick="closeGalleryModal(event)">
<div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center transform scale-95 transition-transform duration-300" id="gallery-modal-content">
<button className="absolute -top-12 right-0 text-white/60 hover:text-[#E1120F] transition-colors p-2" onclick="closeGalleryModal(null, true)">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<img className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.9)] border border-white/10 object-contain" id="modal-img" src=""/>
</div>
</div>

</div>
</section>

<section className="overflow-hidden bg-black pt-24 pb-24 relative" id="works">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E1120F] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
<img alt="Cleaning Process" className="w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-bold text-xl tracking-tight">THE WORKS</p>
<p className="text-[#E1120F] text-sm font-medium uppercase tracking-wide">Premium Package</p>
</div>
</div>

<div className="absolute -inset-4 border border-white/5 -z-0 rounded-xl"></div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-2">THE WORKS</h2>
<p className="text-lg text-neutral-400 font-light mb-8">Comprehensive restoration. No detail missed.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Deep Exterior Foam Scrub &amp; Extraction</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Interior Sanitation &amp; Deodorizing</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Midsole Brightening (Remove Oxidation)</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Laces Ironed &amp; Reset</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Scuff Reduction &amp; Material Conditioning</span>
</li>
<li className="flex items-center gap-4 text-neutral-300 group">
<span className="text-[#E1120F] group-hover:scale-125 transition-transform"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg></span>
<span className="font-medium">Protective Shine Finish</span>
</li>
</ul>
<div className="p-6 bg-white/5 rounded border border-white/10">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-neutral-400 uppercase tracking-widest">Total Value</span>
<span className="text-2xl font-bold text-white line-through decoration-[#E1120F] decoration-2">$120.00</span>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-2">
<div className="">
<span className="text-sm font-bold text-white uppercase tracking-widest block">Reserve Today</span>
<span className="text-[10px] text-neutral-400 italic">Credit applied to total service</span>
</div>
<span className="text-4xl font-bold text-[#E1120F]">$75.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-white tracking-tight mb-4">THE PROCESS</h2>
<p className="text-neutral-400">Simple. Transparent. Secure.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 relative z-10 group-hover:border-[#E1120F] transition-colors shadow-2xl">
                        1
                        <span className="absolute inset-0 rounded-full border border-[#E1120F]/20 animate-pulse"></span>
</div>
<h3 className="text-lg font-bold text-white mb-3">Reserve Your Slot</h3>
<p className="text-sm text-neutral-400 px-4">
                        Pay $75 to lock in your restoration time. This guarantees your sneaker is one of the 20 accepted that day.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 relative z-10 group-hover:border-[#E1120F] transition-colors shadow-2xl">
                        2
                    </div>
<h3 className="text-lg font-bold text-white mb-3">Drop Off or Ship</h3>
<p className="text-sm text-neutral-400 px-4">
                        Choose local drop-off in Atlanta or use our secure shipping label. You'll get instant instructions upon booking.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 relative z-10 group-hover:border-[#E1120F] transition-colors shadow-2xl">
                        3
                    </div>
<h3 className="text-lg font-bold text-white mb-3">Get The Works</h3>
<p className="text-sm text-neutral-400 px-4">
                        Your sneaker comes back refreshed, cleaned, and revived. We send photo updates every step of the way.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="bg-black/50 p-6 rounded border border-white/5">
<div className="flex text-[#E1120F] mb-3 text-xs gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-neutral-300 mb-4 italic">"Sent in my Bred 4s that were basically cooked. Torie brought them back to deadstock condition. Crazy work."</p>
<p className="text-xs font-bold text-white uppercase">— Marcus D, Buckhead</p>
</div>

<div className="bg-black/50 p-6 rounded border border-white/5">
<div className="flex text-[#E1120F] mb-3 text-xs gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-neutral-300 mb-4 italic">"The oxidation removal is magic. I thought my soles were yellow forever. Worth every dollar."</p>
<p className="text-xs font-bold text-white uppercase">— Jalen R, Midtown</p>
</div>

<div className="bg-black/50 p-6 rounded border border-white/5 hidden md:block">
<div className="flex text-[#E1120F] mb-3 text-xs gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-neutral-300 mb-4 italic">"I shipped from Charlotte. The process was super easy. They texted me when they arrived and when they were done."</p>
<p className="text-xs font-bold text-white uppercase">— Sarah K, Charlotte</p>
</div>

<div className="bg-black/50 p-6 rounded border border-white/5 hidden lg:block">
<div className="flex text-[#E1120F] mb-3 text-xs gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-neutral-300 mb-4 italic">"Legit the only people I trust with my grails. Torie treats them like his own."</p>
<p className="text-xs font-bold text-white uppercase">— Mike T, Decatur</p>
</div>
</div>

<div className="max-w-3xl mx-auto" id="faq">
<h3 className="text-2xl font-bold text-white text-center mb-8">FREQUENTLY ASKED QUESTIONS</h3>
<div className="space-y-4">

<details className="group bg-neutral-900/50 rounded border border-white/5 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:text-[#E1120F] transition-colors">
<span>Is my shipping covered?</span>
<span className="transform group-open:rotate-180 transition-transform text-[#E1120F]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                            For local Atlanta clients, drop-off is free. For mail-ins, the $75 reservation covers the return shipping label. You are responsible for shipping them to us.
                        </div>
</details>

<details className="group bg-neutral-900/50 rounded border border-white/5 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:text-[#E1120F] transition-colors">
<span>How long does the process take?</span>
<span className="transform group-open:rotate-180 transition-transform text-[#E1120F]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                            We pride ourselves on a 48-hour turnaround time from the moment we receive your shoes. Heavy oxidation or glue work may require an extra 24 hours for curing.
                        </div>
</details>

<details className="group bg-neutral-900/50 rounded border border-white/5 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white hover:text-[#E1120F] transition-colors">
<span>What if my shoes are too damaged?</span>
<span className="transform group-open:rotate-180 transition-transform text-[#E1120F]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                            The Works package covers deep cleaning and restoration. If your shoes need sole swaps or heavy stitching repair, we will assess them upon arrival. If we can't fix them, we refund your reservation fee immediately.
                        </div>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div className="flex items-center gap-3 mb-6 md:mb-0">
<div className="w-10 h-10 bg-[#E1120F] rounded flex items-center justify-center font-bold text-black italic text-lg">TC</div>
<div>
<span className="font-bold tracking-tight text-white block">TCKICKZ <span className="text-[#E1120F]">REMIX</span></span>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Atlanta, GA</span>
</div>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg></a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 TCKickz Remix. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
