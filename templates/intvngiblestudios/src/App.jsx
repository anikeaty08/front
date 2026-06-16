import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('side-menu');
            const body = document.body;
            
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                body.classList.add('menu-open');
            } else {
                menu.classList.add('translate-x-full');
                body.classList.remove('menu-open');
            }
        }

        // Header Glassmorphism Effect
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'border-black/5');
                header.classList.remove('py-6', 'md:py-8');
                header.classList.add('py-4');
                header.classList.remove('border-transparent');
            } else {
                header.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'border-black/5');
                header.classList.add('py-6', 'md:py-8');
                header.classList.remove('py-4');
                header.classList.add('border-transparent');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#ff4d00] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.06] ambient-glow"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#006b31] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.05] ambient-glow" style={{animationDelay: '-5s'}}></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] mix-blend-overlay"></div>
</div>

<header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:py-8 transition-all duration-500 border-b border-transparent" id="main-header">
<div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-12 gap-4 items-center">

<div className="md:col-span-3">
<a className="block w-[180px] group" href="#">
<svg className="w-full h-auto" fill="none" viewbox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="pulseGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3a5c45"></stop> 
<stop offset="50%" stop-color="#8ba860"></stop> 
<stop offset="100%" stop-color="#ff4d00"></stop> 
</lineargradient>
</defs>

<text fill="#1a1a1a" fontFamily="'Inter', sans-serif" fontSize="38" font-weight="300" letter-spacing="-1" x="0" y="45">INT</text>

<text fill="#1a1a1a" fontFamily="'Inter', sans-serif" fontSize="38" font-weight="300" letter-spacing="1" x="105" y="45">NGIBLE</text>


<path className="logo-path" d="M5 25 L65 25 L85 55 L100 5 L120 25 L230 25" fill="none" stroke="url(#pulseGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="hidden md:col-span-5 md:flex flex-col space-y-1 text-xs font-medium uppercase tracking-widest text-gray-500">
<span>Visual Storytelling</span>
<span>Digital Infrastructure</span>
<span>Brand Architecture</span>
<span>Creative Direction</span>
</div>

<div className="hidden md:col-span-2 md:block text-right md:text-left text-xs font-medium uppercase tracking-widest text-gray-400">
                ©2024
            </div>

<div className="md:col-span-2 flex justify-end">
<button className="text-xs font-medium uppercase tracking-widest hover:text-[#ff4d00] transition-colors flex items-center gap-2 group" onclick="toggleMenu()">
<span className="group-hover:tracking-widest transition-all duration-300">Menu</span>
</button>
</div>
</div>
</header>

<div className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-[#faf9f6] border-l border-black/5 z-[60] transform translate-x-full px-8 py-10 flex flex-col justify-between shadow-2xl" id="side-menu">
<div className="flex justify-between items-center mb-12">
<span className="text-xs uppercase tracking-widest text-gray-400">Navigation</span>
<button className="text-[#1a1a1a] hover:text-[#ff4d00] transition-colors" onclick="toggleMenu()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col space-y-2">
<a className="text-3xl md:text-4xl font-light text-[#1a1a1a] hover:text-[#ff4d00] hover:pl-4 transition-all duration-300" href="#hero" onclick="toggleMenu()">Home</a>
<a className="text-3xl md:text-4xl font-light text-[#1a1a1a] hover:text-[#ff4d00] hover:pl-4 transition-all duration-300" href="#services" onclick="toggleMenu()">Expertise</a>
<a className="text-3xl md:text-4xl font-light text-[#1a1a1a] hover:text-[#ff4d00] hover:pl-4 transition-all duration-300" href="#work" onclick="toggleMenu()">Selected Work</a>
<a className="text-3xl md:text-4xl font-light text-[#1a1a1a] hover:text-[#ff4d00] hover:pl-4 transition-all duration-300" href="#about" onclick="toggleMenu()">The Studio</a>
</nav>
<div className="space-y-6">
<div className="h-px w-full bg-black/5"></div>
<a className="block w-full py-4 bg-[#1a1a1a] text-white text-center rounded-full font-medium hover:bg-[#ff4d00] transition-colors" href="#contact" onclick="toggleMenu()">
                Book Consultation
            </a>
<div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
<span>Instagram</span>
<span>Twitter</span>
<span>LinkedIn</span>
</div>
</div>
</div>

<main className="relative z-10 min-h-screen flex items-center px-6 pt-32 pb-20" id="hero">
<div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-balance text-5xl font-medium text-[#1a1a1a] tracking-tight">
                    Bring coherence <br/>
                    to what you're <br/>
<span className="text-[#ff4d00]">building.</span>
</h1>
<div className="grid md:grid-cols-2 gap-8 max-w-2xl">
<p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed">
                        Intvngible Studios is a creative and strategic studio helping artists, founders, and brands bring coherence to what they’re building. A balance of studio-modernism and grounded reality.
                    </p>
<div className="flex items-start pt-1">
<a className="group flex items-center gap-3 text-sm font-medium text-[#1a1a1a] hover:text-[#ff4d00] transition-colors pb-1 border-b border-black/10 hover:border-[#ff4d00]" href="#services">
                            Explore Expertise
                            <svg className="lucide lucide-arrow-down-right w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>
</div>
</div>

<div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 h-[500px]">
<div className="hologram-scene">

<div className="holo-beam"></div>

<div className="hologram-plat"></div>

<div className="holo-scanlines"></div>

<div className="holo-float-zone">

<div className="holo-item text-[#ff4d00]">
<svg className="drop-shadow-[0_0_25px_rgba(255,77,0,0.8)]" fill="none" height="160" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="160" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path>
</svg>
</div>

<div className="holo-item text-[#ff4d00]">
<svg className="drop-shadow-[0_0_25px_rgba(255,77,0,0.8)]" fill="none" height="160" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="160" xmlns="http://www.w3.org/2000/svg">
<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
</svg>
</div>

<div className="holo-item text-[#ff4d00]">
<svg className="drop-shadow-[0_0_25px_rgba(255,77,0,0.8)]" fill="none" height="160" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="160" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path>
</svg>
</div>

<div className="holo-item text-[#ff4d00]">
<svg className="drop-shadow-[0_0_25px_rgba(255,77,0,0.8)]" fill="none" height="160" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="160" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-32 relative border-t border-black/5 bg-white/30 backdrop-blur-sm" id="services">
<div className="max-w-[1400px] mx-auto px-6">

<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
<div className="space-y-6">
<span className="text-[#ff4d00] font-mono text-xs tracking-widest uppercase block">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a]">
                        The Synthesis of <br/>
<span className="text-gray-400">Vision &amp; execution.</span>
</h2>
</div>
<div className="flex gap-4">
<p className="text-gray-500 font-normal text-sm leading-relaxed max-w-xs md:text-right">
                        Swipe to explore how we translate abstraction into tangible assets.
                    </p>
<div className="hidden md:flex gap-2 text-gray-400">
<svg className="lucide lucide-arrow-left w-5 h-5 hover:text-[#ff4d00] transition-colors" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<svg className="lucide lucide-arrow-right w-5 h-5 hover:text-[#ff4d00] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 relative mb-6">

<img alt="Cinematic Production" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-wide font-medium text-[#ff4d00]">
                            Direction
                        </div>
</div>
<div className="space-y-3 pr-4">
<div className="flex items-center justify-between border-b border-black/10 pb-3 mb-3">
<h3 className="text-xl font-medium text-[#1a1a1a]">Visual Storytelling</h3>
<svg className="lucide lucide-film w-4 h-4 text-gray-400 group-hover:text-[#ff4d00] transition-colors" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</div>
<p className="text-sm text-gray-500 font-normal leading-relaxed">
                            AI-powered short films and music videos designed to bring a clear vision to life. We use technology to translate emotion into moving image.
                        </p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 relative mb-6">

<img alt="Digital Code" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-wide font-medium text-[#006b31]">
                            Web
                        </div>
</div>
<div className="space-y-3 pr-4">
<div className="flex items-center justify-between border-b border-black/10 pb-3 mb-3">
<h3 className="text-xl font-medium text-[#1a1a1a]">Digital Infrastructure</h3>
<svg className="lucide lucide-layout-grid w-4 h-4 text-gray-400 group-hover:text-[#006b31] transition-colors" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<p className="text-sm text-gray-500 font-normal leading-relaxed">
                            Scalable web design and maintenance for creators. A digital home that is clear, functional, and aligned with where you're going next.
                        </p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 relative mb-6">

<img alt="Abstract Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-wide font-medium text-[#ff4d00]">
                            Identity
                        </div>
</div>
<div className="space-y-3 pr-4">
<div className="flex items-center justify-between border-b border-black/10 pb-3 mb-3">
<h3 className="text-xl font-medium text-[#1a1a1a]">Brand Architecture</h3>
<svg className="lucide lucide-fingerprint w-4 h-4 text-gray-400 group-hover:text-[#ff4d00] transition-colors" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path></svg>
</div>
<p className="text-sm text-gray-500 font-normal leading-relaxed">
                            Identity design that aligns visual language, story, and tone. We focus on vision and deep aesthetics rather than chasing trends.
                        </p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 relative mb-6">

<img alt="Creative Strategy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-wide font-medium text-[#1a1a1a]">
                            Oversight
                        </div>
</div>
<div className="space-y-3 pr-4">
<div className="flex items-center justify-between border-b border-black/10 pb-3 mb-3">
<h3 className="text-xl font-medium text-[#1a1a1a]">Creative Direction</h3>
<svg className="lucide lucide-layers w-4 h-4 text-gray-400 group-hover:text-[#1a1a1a] transition-colors" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<p className="text-sm text-gray-500 font-normal leading-relaxed">
                            Studio oversight for projects requiring alignment across visuals and messaging. We step in as the integrator for complex visions.
                        </p>
</div>
</div>

<div className="w-1 shrink-0"></div>
</div>
</div>
</section>

<footer className="pt-32 pb-12 px-6 relative overflow-hidden bg-white" id="contact">
<div className="max-w-[1400px] mx-auto border-t border-black/5 pt-16">
<div className="grid md:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-[#1a1a1a]">
                        Ready to stop feeling <br/>
<span className="text-gray-400">scattered?</span>
</h2>
<p className="text-gray-500 font-normal max-w-md">
                        Let's build something coherent. Schedule a consultation to discuss your vision, rebranding, or digital infrastructure.
                    </p>
</div>
<div className="flex flex-col justify-end items-start md:items-end">
<a className="group relative inline-flex items-center gap-4 text-xl md:text-2xl font-light text-[#1a1a1a] hover:text-[#ff4d00] transition-colors" href="mailto:studio@intvngible.com">
                        studio@intvngible.com
                        <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#ff4d00] group-hover:w-full transition-all duration-500"></span>
</a>
<a className="mt-8 px-8 py-4 bg-[#1a1a1a] text-white font-medium rounded-full hover:bg-[#ff4d00] transition-colors shadow-lg shadow-black/5" href="#">
                        Start a Project
                    </a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono text-gray-400 uppercase tracking-widest border-t border-black/5 pt-8">
<div>
<span className="block text-[#1a1a1a] mb-4">Intvngible</span>
<p className="normal-case text-gray-500">Design Without Limits</p>
</div>
<div>
<span className="block text-[#1a1a1a] mb-4">Socials</span>
<ul className="space-y-2">
<li><a className="hover:text-[#ff4d00] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#ff4d00] transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-[#ff4d00] transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<span className="block text-[#1a1a1a] mb-4">Legal</span>
<ul className="space-y-2">
<li><a className="hover:text-[#ff4d00] transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-[#ff4d00] transition-colors" href="#">Terms</a></li>
</ul>
</div>
<div className="text-right flex flex-col justify-between">
<span>© 2024</span>
<button className="hover:text-[#ff4d00] transition-colors text-right" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Back to Top ↑</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
