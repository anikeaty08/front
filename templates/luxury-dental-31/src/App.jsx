import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Before/After Slider Logic
        function updateComparison(val) {
            const beforeImage = document.getElementById('before-image-wrapper');
            const handle = document.getElementById('slider-handle');
            const fixedImg = document.getElementById('before-img-fixed');
            const container = document.getElementById('slider-container');
            
            if(beforeImage) beforeImage.style.width = val + "%";
            if(handle) handle.style.left = val + "%";

            if(container && fixedImg) {
                fixedImg.style.width = container.offsetWidth + "px";
            }
        }

        window.addEventListener('load', () => {
            const container = document.getElementById('slider-container');
            const fixedImg = document.getElementById('before-img-fixed');
            if(container && fixedImg) {
                fixedImg.style.width = container.offsetWidth + "px";
            }
        });

        window.addEventListener('resize', () => {
            const container = document.getElementById('slider-container');
            const fixedImg = document.getElementById('before-img-fixed');
            if(container && fixedImg) {
                fixedImg.style.width = container.offsetWidth + "px";
            }
        });

        // Aura Text Effect Logic
        const auraContainer = document.getElementById('aura-text-area');
        const auraOverlay = document.getElementById('aura-overlay');

        if(auraContainer && auraOverlay) {
            auraContainer.addEventListener('mousemove', (e) => {
                const rect = auraContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                auraOverlay.style.clipPath = `circle(120px at ${x}px ${y}px)`;
            });

            auraContainer.addEventListener('mouseleave', () => {
                auraOverlay.style.clipPath = `circle(0px at 50% 50%)`;
            });
        }

        // Tilt Card Logic
        document.addEventListener('DOMContentLoaded', () => {
            const tiltCard = document.getElementById('tilt-card');
            if(!tiltCard) return;
            
            const tiltWrapper = tiltCard.parentElement;
            const shine = document.getElementById('card-shine');
            let isHovering = false;
            let currentScaleBase = 0.9;

            const handleScroll = () => {
                const rect = tiltWrapper.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                let progress = 1 - (rect.top / (viewHeight * 0.8));
                if (progress < 0) progress = 0;
                
                let scale = 0.9 + (progress * 0.15);
                let opacity = 0.8 + (progress * 0.4);

                if (scale > 1) scale = 1;
                if (opacity > 1) opacity = 1;

                if (!isHovering) {
                    tiltCard.style.transform = `scale(${scale})`;
                    tiltCard.style.opacity = opacity;
                }
                currentScaleBase = scale;
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();

            tiltWrapper.addEventListener('mousemove', (e) => {
                if (window.innerWidth < 768) return;
                isHovering = true;
                const rect = tiltCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const maxRotation = 5;
                const rotateX = ((y - centerY) / centerY) * -maxRotation;
                const rotateY = ((x - centerX) / centerX) * maxRotation;

                tiltCard.style.transform = `scale(${currentScaleBase}) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                const shineOpacity = 0.1 + (Math.abs(rotateX) + Math.abs(rotateY)) / 20;
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 60%)`;
                shine.style.opacity = shineOpacity;
            });

            tiltWrapper.addEventListener('mouseleave', () => {
                isHovering = false;
                tiltCard.style.transform = `scale(${currentScaleBase}) rotateX(0) rotateY(0)`;
                shine.style.opacity = 0;
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a04fd32-2bf8-47cc-90ac-4ad096efea65_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>



<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#69af38] rounded-full blur-[180px] opacity-5"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#2b93c9] rounded-full blur-[180px] opacity-5"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="glass-panel rounded-full px-8 py-4 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="flex shadow-[#69af38]/20 text-white bg-gradient-to-br from-[#69af38] to-emerald-900 w-10 h-10 rounded-xl shadow-lg items-center justify-center">
<iconify-icon className="" icon="solar:diamond-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-medium text-white tracking-tight">Celestia<span className="opacity-60 font-light">Smiles</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-[#69af38] transition-colors" href="#about-section">About Us</a>
<a className="hover:text-[#69af38] transition-colors" href="#services-section">Services</a>
<a className="hover:text-[#69af38] transition-colors" href="#team-section">Dr. Souza</a>
<a className="hover:text-[#69af38] transition-colors" href="#stories-section">Stories</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#booking-section">Contact</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative z-10 min-h-screen pt-32 pb-20 flex flex-col justify-center max-w-7xl mx-auto px-6">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 z-0">
<h1 className="text-[12vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent leading-none">
                CELESTIA
            </h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 relative gap-x-12 gap-y-12 items-center">
<div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
<div className="aura-text-container">

<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] aura-text-base">
                        Not all smiles need fixing, some need <span className="italic font-light">vision</span>.
                    </h1>

<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] aura-text-overlay">
                        Not all smiles need fixing, some need <span className="italic font-light">vision</span>.
                    </h1>
</div>
<p className="text-lg text-slate-400 font-light max-w-md leading-relaxed">
                    A boutique orthodontic studio led by Dr. Laryssa Souza, crafting confident smiles for those who accept nothing less than extraordinary.
                </p>
</div>

<div className="lg:col-span-3 flex justify-center py-10 lg:py-0 relative order-1 lg:order-2 h-[400px] lg:h-[600px] items-center">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute w-[250px] h-[250px] bg-[#69af38] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="flex animate-reveal w-full h-full z-20 relative items-center justify-center">
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col justify-end gap-8 text-right lg:pl-12 order-3">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
                    Bespoke luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">care</span>.
                </h2>
<div className="flex justify-end">
<a className="group relative px-8 py-4 rounded-full overflow-hidden glass-btn transition-all duration-300 hover:scale-105 active:scale-95 inline-block" href="#booking-section">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-3 font-semibold text-white">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                            Book now
                        </span>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-10 max-w-7xl mx-auto px-6 tilt-card-wrapper" id="about-section">
<div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[600px] flex flex-col justify-between p-8 md:p-16 border border-white/10 group transition-transform duration-100 ease-out origin-center" id="tilt-card" style={{transform: 'scale(1)', opacity: '1'}}>
<div className="absolute inset-0 z-0">
<img alt="Dental Office" className="w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2668&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#050505]/80 to-[#69af38]/30 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-300 pointer-events-none mix-blend-overlay" id="card-shine" style={{background: 'radial-gradient(circle at 505px 74.3333px, rgba(255, 255, 255, 0.2), transparent 60%)'}}></div>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 pointer-events-none">
<div className="max-w-3xl pointer-events-auto">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-8 animate-reveal">
                        Unveil excellence.
                        Discover the Celestia Smiles difference.
                    </h2>
<p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl animate-reveal delay-100">
                        Dr. Souza believes your smile deserves more than just care – it deserves celebration. Experience a spa-like journey paired with cutting-edge dental artistry.
                    </p>
</div>
<div className="animate-reveal delay-200 pointer-events-auto">
<span className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-white hover:bg-white/10 transition-colors cursor-default">
                        Philosophy
                    </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 max-w-7xl mx-auto px-6" id="services-section">
<div className="flex flex-col items-start mb-16">
<h3 className="text-[#69af38] uppercase tracking-widest text-xs font-semibold mb-3">Our Expertise</h3>
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight">Precision procedures</h2>
</div>
<div className="flex flex-col lg:flex-row h-[800px] lg:h-[500px] gap-4">

<div className="service-card group relative flex-1 hover:flex-[2.5] rounded-3xl overflow-hidden cursor-pointer border border-white/10" onclick="document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})">
<img alt="Porcelain Veneers" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-xl bg-[#69af38]/20 flex items-center justify-center text-[#69af38] mb-4 backdrop-blur-md border border-[#69af38]/20">
<iconify-icon icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Porcelain Veneers</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
<div className="overflow-hidden">
<div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<p className="text-slate-300 font-light leading-relaxed mb-6">
                                    Ultra-thin, custom porcelain shells to redesign your smile. We meticulously shape each veneer to match your facial features.
                                </p>
<span className="text-[#69af38] text-sm font-medium flex items-center gap-2">View Treatment <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>

<div className="service-card group relative flex-1 hover:flex-[2.5] rounded-3xl overflow-hidden cursor-pointer border border-white/10" onclick="document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})">
<img alt="Invisalign" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-xl bg-[#69af38]/20 flex items-center justify-center text-[#69af38] mb-4 backdrop-blur-md border border-[#69af38]/20">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Invisalign &amp; Aligners</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
<div className="overflow-hidden">
<div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<p className="text-slate-300 font-light leading-relaxed mb-6">
                                    Discreet and comfortable alignment therapy using 3D scanning technology to predict your perfect smile.
                                </p>
<span className="text-[#69af38] text-sm font-medium flex items-center gap-2">View Treatment <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>

<div className="service-card group relative flex-1 hover:flex-[2.5] rounded-3xl overflow-hidden cursor-pointer border border-white/10" onclick="document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})">
<img alt="Laser Whitening" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-xl bg-[#69af38]/20 flex items-center justify-center text-[#69af38] mb-4 backdrop-blur-md border border-[#69af38]/20">
<iconify-icon icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Laser Whitening</h3>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
<div className="overflow-hidden">
<div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<p className="text-slate-300 font-light leading-relaxed mb-6">
                                    Immediate, brilliant results using advanced laser technology. Our specialized protocol minimizes sensitivity.
                                </p>
<span className="text-[#69af38] text-sm font-medium flex items-center gap-2">View Treatment <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-t border-white/5 bg-[#080808]" id="stories-section">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#69af38]/30 bg-[#69af38]/10 text-[#69af38] text-xs font-semibold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-[#69af38] animate-pulse"></span>
                        Client Stories
                    </div>
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-8">
                        Real stories, <span className="text-slate-500">real transformations</span>
</h2>
<div className="relative pl-8 border-l border-white/10">
<div className="mb-10">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Before Treatment</h4>
<p className="leading-relaxed text-xl font-light italic text-slate-400">
                                "I spent years hiding my laugh behind my hand. The gap between my teeth made me insecure in every meeting, and I felt I wasn't projecting my true self."
                            </p>
</div>
<div className="">
<h4 className="text-xs font-bold text-[#69af38] uppercase tracking-widest mb-2">After Dr. Souza</h4>
<p className="text-2xl text-white font-medium italic leading-relaxed">
                                "Now, I can't stop smiling. The shift in confidence was immediate. I feel radiant, professional, and finally comfortable in my own skin."
                            </p>
</div>
</div>
<div className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" width="18"></iconify-icon>
</div>
                        Drag the slider to see the difference
                    </div>
</div>
<div className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group select-none">
<div className="relative w-full h-full" id="slider-container">
<img alt="After treatment" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/beb02b96-73a0-447c-9713-d3cfb0a6a2b3_3840w.png"/>
<div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#69af38] border border-[#69af38]/30">AFTER</div>
<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-white/50" id="before-image-wrapper" style={{width: '54%'}}>
<img className="absolute inset-0 w-full h-full object-cover max-w-none" id="before-img-fixed" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ff6d160-bef0-4fb2-b9e4-f25dc7d790c2_3840w.png" style={{width: '579px'}}/>
<div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">BEFORE</div>
<div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
</div>
<div className="absolute inset-y-0 left-[50%] w-10 -ml-5 flex items-center justify-center pointer-events-none z-20" id="slider-handle" style={{left: '54%'}}>
<div className="w-1 h-full bg-white/40 backdrop-blur-sm"></div>
<div className="absolute w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-ew-resize transform transition-transform group-hover:scale-110">
<iconify-icon className="text-black" icon="solar:transfer-horizontal-linear" width="18"></iconify-icon>
</div>
</div>
<input className="cursor-ew-resize z-30 opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" id="comparison-range" max="100" min="0" oninput="updateComparison(this.value)" type="range" value="50"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050505] overflow-hidden" id="team-section">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#69af38] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-4">
                    Meet the mind 
                    <span className="text-slate-500">behind your smile</span>
</h2>
<div className="w-20 h-1 bg-[#69af38] rounded-full opacity-50"></div>
</div>
<div className="glass-panel rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative group">
<div className="absolute inset-0 bg-[#69af38] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
<img alt="Dr. Laryssa Souza" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 glass-panel-strong p-4 rounded-xl flex items-center justify-between">
<div>
<p className="text-white font-medium">Dr. Laryssa Souza</p>
<p className="text-xs text-[#69af38] uppercase tracking-wider font-bold">Lead Specialist</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:medal-star-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="md:col-span-7 flex flex-col gap-8">
<div className="">
<span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 mb-4">Practicing since 2018</span>
<h3 className="text-3xl lg:text-5xl font-medium text-white mb-6">Precision meets <span className="italic text-[#69af38] font-serif">art</span>.</h3>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                                Dr. Laryssa Souza founded Celestia Smiles with a singular vision: to bridge the gap between clinical orthodontics and facial aesthetics. With over 6 years of specialized experience, she pioneered a "face-first" approach in dentistry.
                            </p>
</div>
<div className="flex flex-wrap gap-4 mt-4">
<a className="px-8 py-3 bg-[#69af38] hover:bg-[#5a9632] text-black font-semibold rounded-full transition-colors text-center" href="#booking-section">
                                Book Consultation
                            </a>
<button className="px-8 py-3 border border-white/20 hover:bg-white/5 text-white font-medium rounded-full transition-colors text-center">
                                Read Full Bio
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050505] overflow-hidden" id="booking-section">
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#69af38] rounded-full blur-[150px] opacity-[0.05] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#69af38]/30 bg-[#69af38]/10 text-[#69af38] text-xs font-semibold uppercase tracking-wider mb-6">
                            Begin your journey
                        </div>
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-6">
                            Request an <span className="italic font-serif text-slate-400">appointment</span>
</h2>
<p className="text-slate-400 font-light leading-relaxed mb-10 max-w-md">
                            Take the first step towards your extraordinary smile. Fill out the form, and our concierge team will contact you to confirm your preferred time.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#69af38] shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white mb-1">Direct Line</p>
<p className="text-sm text-slate-400 font-light">+55 (11) 99999-9999</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#69af38] shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white mb-1">Email</p>
<p className="text-sm text-slate-400 font-light">concierge@celestiasmiles.com</p>
</div>
</div>
</div>
</div>

<div className="bg-black/40 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm shadow-2xl">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Appointment request sent! Our concierge will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#69af38]/50 focus:bg-white/10 transition-colors" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Phone Number</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#69af38]/50 focus:bg-white/10 transition-colors" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#69af38]/50 focus:bg-white/10 transition-colors" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Service of Interest</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#69af38]/50 focus:bg-white/10 transition-colors cursor-pointer" required="">
<option className="bg-[#111] text-slate-500" disabled="" selected="" value="">Select a service</option>
<option className="bg-[#111] text-white" value="veneers">Porcelain Veneers</option>
<option className="bg-[#111] text-white" value="invisalign">Invisalign &amp; Aligners</option>
<option className="bg-[#111] text-white" value="whitening">Laser Whitening</option>
<option className="bg-[#111] text-white" value="consultation">General Consultation</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Preferred Date</label>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#69af38]/50 focus:bg-white/10 transition-colors cursor-pointer appearance-none [color-scheme:dark]" required="" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Preferred Time</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#69af38]/50 focus:bg-white/10 transition-colors cursor-pointer" required="">
<option className="bg-[#111] text-slate-500" disabled="" selected="" value="">Select time</option>
<option className="bg-[#111] text-white" value="morning">Morning (9AM - 12PM)</option>
<option className="bg-[#111] text-white" value="afternoon">Afternoon (1PM - 5PM)</option>
<option className="bg-[#111] text-white" value="evening">Evening (5PM - 7PM)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full group relative px-8 py-4 rounded-xl overflow-hidden glass-btn transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2" type="submit">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative font-semibold text-white">Confirm Request</span>
<iconify-icon className="relative text-white group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-500 mt-3 font-light">
                                    By submitting, you agree to our Privacy Policy.
                                </p>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-[2.5rem] p-2 overflow-hidden border border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-12 bg-black rounded-[2rem] overflow-hidden">
<div className="lg:col-span-4 p-10 flex flex-col justify-between h-full bg-gradient-to-b from-white/5 to-transparent">
<div>
<div className="inline-flex items-center gap-2 mb-8 text-[#69af38]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Location</span>
</div>
<h3 className="text-3xl font-medium text-white mb-6">Visit our exclusive space.</h3>
<p className="text-slate-400 font-light leading-relaxed mb-8">
                                Located in the heart of São Paulo, our practice was designed to be an oasis of tranquility amidst the city.
                            </p>
<div className="space-y-4 text-sm text-slate-300">
<p className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#69af38]"></span>
                                    Paulista Ave, 1000 - Jardins
                                </p>
<p className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#69af38]"></span>
                                    São Paulo - SP, 01310-100
                                </p>
</div>
</div>
<div className="mt-12">
<a className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-[#69af38] transition-colors gap-2" href="https://maps.app.goo.gl/HY1DKuNGFczkbMdr9" target="_blank">
<iconify-icon icon="solar:routing-2-linear" width="18"></iconify-icon>
                                Get Directions on Map
                            </a>
</div>
</div>
<div className="lg:col-span-8 h-[400px] lg:h-auto relative bg-[#111]">
<iframe allowfullscreen="" className="map-dark-mode w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975762886475!2d-46.65215758502223!3d-23.56396448468164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sus!4v1709228392123!5m2!1sen!2sus" style={{border: '0'}} width="100%">
</iframe>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent via-transparent to-black/50 lg:to-black/80"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-[#69af38] flex items-center justify-center text-white">
<iconify-icon icon="solar:diamond-linear" width="16"></iconify-icon>
</div>
<span className="text-xl font-medium text-white tracking-tight">Celestia</span>
</div>
<p className="text-slate-500 max-w-xs font-light">
                        Redefining modern dentistry through design, technology, and compassionate care.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="text-white font-medium mb-4">Sitemap</h4>
<ul className="space-y-3 text-slate-500 font-light text-sm">
<li><a className="hover:text-[#69af38] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#69af38] transition-colors" href="#about-section">About</a></li>
<li><a className="hover:text-[#69af38] transition-colors" href="#services-section">Services</a></li>
<li><a className="hover:text-[#69af38] transition-colors" href="#booking-section">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-white font-medium mb-4">Visit Us</h4>
<p className="text-slate-500 font-light text-sm leading-relaxed">
                             Paulista Ave, 1000 - Suite 400<br/>
                             Jardins, São Paulo - SP
                         </p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600 font-light">
<p>© 2024 Celestia Smiles. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
