import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        gsap.registerPlugin(ScrollTrigger);

        const splitTextToScrub = (el) => {
            const text = el.innerText;
            el.innerHTML = text.split(' ').map(word => `<span class="scrub-word inline-block">${word}&nbsp;</span>`).join('');
        };

        const initAnimations = () => {
            // Loader
            const tl = gsap.timeline();
            tl.to('.loader-counter', { y: 0, duration: 1, ease: 'power4.out' })
              .to('.loader-progress', { width: '100%', duration: 1.2, ease: 'expo.inOut' }, 0)
              .to('.loader-counter', { y: '-100%', duration: 0.5, ease: 'power2.in' }, 1.5)
              .to('.loader', { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'expo.inOut' }, 1.8)
              .to('.hero-title-l, .hero-title-r', { y: 0, duration: 1.4, ease: 'power3.out', stagger: 0.1 }, 2.0);

            // Hero Parallax
            gsap.to('.hero-title-l', { x: '-15%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
            gsap.to('.hero-title-r', { x: '15%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
            gsap.to('.hero-img', { scale: 1.2, y: '20%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });

            // Intro Scrub
            const introText = document.querySelector('.intro-scrub-text');
            if(introText) {
                splitTextToScrub(introText);
                gsap.to('.scrub-word', {
                    opacity: 1, color: '#000000', stagger: 0.05, ease: 'none',
                    scrollTrigger: { trigger: introText, start: 'top 80%', end: 'bottom 40%', scrub: true }
                });
            }

            // Card Stack Rotation
            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                const inner = card.querySelector('.card-inner');
                const rot = (i % 2 === 0 ? 3 : -3) + (Math.random() * 2 - 1);
                if (i < cards.length - 1) {
                     gsap.to(inner, {
                        scale: 0.9, rotation: rot, y: -30, filter: 'blur(5px)', opacity: 0.6, ease: 'none',
                        scrollTrigger: { trigger: cards[i+1], start: 'top bottom', end: 'top 20%', scrub: true }
                    });
                }
            });

            // Horizontal Scroll Section
            const horizSection = document.querySelector('#horiz-scroll');
            if (horizSection) {
              const horizWrap = horizSection.querySelector('.horiz-wrap');
              gsap.to(horizWrap, {
                x: () => -(horizWrap.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                  trigger: horizSection,
                  start: "top top",
                  end: () => `+=${horizWrap.scrollWidth - window.innerWidth}`,
                  pin: true,
                  scrub: 1,
                  invalidateOnRefresh: true
                }
              });
            }

            // Parallax Grid
            const parallaxGrid = document.querySelector('#parallax-grid');
            if (parallaxGrid) {
              const cols = parallaxGrid.querySelectorAll('.parallax-col');
              cols.forEach((col, i) => {
                const speed = (i + 1) * 30;
                gsap.to(col, {
                  y: -speed * 2,
                  ease: "none",
                  scrollTrigger: {
                    trigger: parallaxGrid,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                  }
                });
              });
            }

            // Inverted Reveal
            const darkSection = document.querySelector('#inverted-section');
            if (darkSection) {
              gsap.from(darkSection.querySelectorAll('.reveal-item'), {
                y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out",
                scrollTrigger: { trigger: darkSection, start: "top 70%" }
              });
            }

            // Philosophy Reveal
            gsap.from('.wrapper > section:last-of-type h2', {
                scale: 0.9, opacity: 0, duration: 1.2, ease: 'power2.out',
                scrollTrigger: { trigger: '.wrapper > section:last-of-type', start: 'top 75%' }
            });
        };

        // Make visible and start
        document.body.style.opacity = 1;
        initAnimations();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise"></div>

<div className="loader fixed inset-0 z-[9999] bg-[#0A0A0A] text-white flex flex-col items-center justify-center">
<div className="overflow-hidden h-[1.2em] mb-6">
<div className="loader-counter display-font text-8xl md:text-9xl font-normal tracking-tighter leading-none translate-y-full">
                100
            </div>
</div>
<div className="w-64 h-[1px] bg-white/10 overflow-hidden">
<div className="loader-progress w-0 h-full bg-white"></div>
</div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display-font text-lg font-medium tracking-tight flex items-center gap-2">
            VERTEX
        </div>
<div className="hidden md:flex gap-8 text-xs font-normal tracking-widest uppercase opacity-80">
<a className="hover:opacity-100 transition-opacity" href="#">Services</a>
<a className="hover:opacity-100 transition-opacity" href="#">Membership</a>
<a className="hover:opacity-100 transition-opacity" href="#">Journal</a>
<a className="hover:opacity-100 transition-opacity" href="#">Inquire</a>
</div>
<button className="md:hidden group">
<iconify-icon className="w-6 h-6 group-hover:scale-110 transition-transform" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0 w-full h-full hero-img-wrap will-change-transform">
<img alt="Luxury Interior" className="w-full h-full object-cover brightness-[0.6] hero-img" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-exclusion py-32 px-6 md:px-12">
<div className="overflow-hidden self-start">
<h1 className="text-[18vw] leading-[0.8] tracking-tighter mix-blend-exclusion text-white font-normal hero-title-l translate-y-full block">
                        VER
                    </h1>
</div>
<div className="overflow-hidden self-end">
<h1 className="text-[18vw] leading-[0.8] tracking-tighter mix-blend-exclusion text-white italic font-light hero-title-r translate-y-full block">
                        TEX
                    </h1>
</div>
</div>
<div className="absolute bottom-12 left-6 md:left-12 text-white mix-blend-exclusion flex flex-col gap-1">
<span className="text-xs uppercase tracking-[0.2em]">
                    Private Concierge / Global
                </span>
<span className="text-xs uppercase tracking-[0.2em]">Est. 2024</span>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto relative z-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-black/10 pt-4">
<span className="text-xs font-mono text-gray-400">01 — PHILOSOPHY</span>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="display-font text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight max-w-6xl intro-scrub-text text-black">
                        Time is the ultimate luxury. We curate the exceptional, manage the impossible, and return your most valuable asset to you.
                    </h2>
</div>
</div>
</section>

<section className="stack-section pb-32">
<div className="px-6 md:px-20 mb-20 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-black"></div>
<span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                            Our Focus
                        </span>
</div>
<h2 className="display-font text-4xl md:text-5xl font-medium tracking-tight">
                        CURATED
                        <br/>
                        SERVICES
                    </h2>
</div>
<div className="hidden md:block">
<button className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest hover:opacity-60 transition-opacity">
                        View Complete List
                        <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="stack-container w-full max-w-[1200px] mx-auto relative pb-[10vh] px-4 md:px-0">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">01 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<iconify-icon className="w-4 h-4 text-gray-800" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-medium tracking-tight mt-6">
                                    GLOBAL TRAVEL
                                </h3>
<p className="text-xs font-normal text-gray-400 uppercase tracking-widest mt-2">
                                    Aviation &amp; Estates
                                </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                                    Seamless global movement. From chartering private aircraft to securing unlisted villas on the Amalfi Coast, we handle every logistical detail.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs uppercase tracking-wider font-normal text-gray-600">
                                        Logistics
                                    </span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs uppercase tracking-wider font-normal text-gray-600">
                                        Access
                                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Global Travel" className="card-img object-cover w-full h-auto" src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">02 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<iconify-icon className="w-4 h-4 text-gray-800" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-medium tracking-tight mt-6">
                                    LIFESTYLE MANAGEMENT
                                </h3>
<p className="text-xs font-normal text-gray-400 uppercase tracking-widest mt-2">
                                    Daily Optimization
                                </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                                    Proactive management of your personal ecosystem. Rare artifact sourcing, fine art consultation, and comprehensive household administration.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs uppercase tracking-wider font-normal text-gray-600">
                                        Sourcing
                                    </span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs uppercase tracking-wider font-normal text-gray-600">
                                        Management
                                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Lifestyle Management" className="card-img object-cover w-full h-auto" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">03 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<iconify-icon className="w-4 h-4 text-gray-800" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-medium tracking-tight mt-6">
                                    EXCLUSIVE EXPERIENCES
                                </h3>
<p className="text-xs font-normal text-gray-400 uppercase tracking-widest mt-2">
                                    Unattainable Access
                                </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                                    Unlocking closed doors. Securing reservations at fully booked Michelin establishments and arranging private viewings at elite cultural events.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs uppercase tracking-wider font-normal text-gray-600">
                                        Dining
                                    </span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs uppercase tracking-wider font-normal text-gray-600">
                                        Events
                                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Exclusive Experiences" className="card-img object-cover w-full h-auto" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen overflow-hidden border-t border-black/5" id="horiz-scroll">
<div className="horiz-wrap flex h-full w-[300vw]">
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10">
<span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        01 — APPROACH
                    </span>
<h2 className="display-font text-6xl md:text-8xl font-normal tracking-tight">
                        DISCRETION
                    </h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                        Privacy is paramount. We operate entirely in the background, ensuring your lifestyle remains guarded and your preferences confidential.
                    </p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10 bg-[#f0f0f2]">
<span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        02 — APPROACH
                    </span>
<h2 className="display-font text-6xl md:text-8xl font-normal tracking-tight">
                        ACCESS
                    </h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                        Our global network spans continents and industries, allowing us to unlock experiences and locations generally deemed unattainable.
                    </p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-white">
<span className="text-xs font-mono text-gray-400 mb-4 tracking-widest">
                        03 — APPROACH
                    </span>
<h2 className="display-font text-6xl md:text-8xl font-normal tracking-tight">
                        PRECISION
                    </h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                        Flawless execution is our baseline. Every itinerary, reservation, and detail is meticulously verified to ensure seamless delivery.
                    </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto overflow-hidden" id="parallax-grid">
<div className="mb-24 flex justify-between items-end">
<h2 className="display-font text-4xl md:text-5xl font-medium tracking-tight">
                    THE
                    <br/>
                    LIFESTYLE
                </h2>
<p className="text-xs font-mono text-gray-400 hidden md:block uppercase">
                    Refined / Curated / Effortless
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 min-h-[120vh]">
<div className="parallax-col flex flex-col gap-4 md:gap-8 pt-20">
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-8 flex flex-col justify-center items-center aspect-[4/5] bg-gray-100">
<iconify-icon className="w-12 h-12 text-black/40" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-gray-400 mt-6 tracking-widest uppercase">Vertex Standard</span>
</div>
</div>
<div className="parallax-col flex flex-col gap-4 md:gap-8">
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-8 border border-black/5 bg-white flex items-center justify-center text-center aspect-square">
<p className="font-mono text-xs leading-relaxed tracking-widest uppercase">
                            "Elevating the everyday
                            <br/><br/>
                            to the extraordinary."
                            <br/><br/>
                            — Vertex
                        </p>
</div>
<img className="w-full aspect-[4/3] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="parallax-col flex flex-col gap-4 md:gap-8 pt-40 hidden md:flex">
<div className="w-full aspect-[3/4] bg-[#111] text-white flex items-center justify-center">
<iconify-icon className="w-12 h-12 opacity-50" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-48 bg-[#0A0A0A] text-white relative z-20" id="inverted-section">
<div className="px-6 md:px-20 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
<div className="reveal-item">
<span className="text-xs font-mono text-gray-500 block mb-6 tracking-widest">
                        NETWORK
                    </span>
<h2 className="display-font text-5xl md:text-7xl font-normal tracking-tighter leading-none">
                        GLOBAL
                        <br/>
                        ACCESS
                    </h2>
</div>
<div className="flex flex-col gap-0 reveal-item">
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-200 group-hover:text-white tracking-tight">
                            Private Aviation Partners
                        </span>
<span className="text-xs font-mono text-gray-500">Tier 1</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-200 group-hover:text-white tracking-tight">
                            Michelin Alliance
                        </span>
<span className="text-xs font-mono text-gray-500">Priority</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-200 group-hover:text-white tracking-tight">
                            Global Real Estate
                        </span>
<span className="text-xs font-mono text-gray-500">Off-Market</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-200 group-hover:text-white tracking-tight">
                            Exclusive Event Access
                        </span>
<span className="text-xs font-mono text-gray-500">VIP</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
<h2 className="display-font text-3xl md:text-5xl font-medium tracking-tight mb-8 relative z-10">
                True luxury is
                <span className="text-gray-400 italic font-light">effortless.</span>
</h2>
<div className="max-w-lg text-gray-500 font-light leading-relaxed relative z-10">
                We handle the complexity of your world, leaving you with the clarity to enjoy it. Every interaction is designed to be invisible yet perfect.
            </div>

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</section>
</div>


<footer className="footer-sticky">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-10 pointer-events-none grayscale" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
</div>
<div className="relative z-10 text-center w-full max-w-4xl px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
<span className="text-xs uppercase tracking-widest text-gray-300">
                    Membership currently open
                </span>
</div>
<a className="block group" href="#">
<h2 className="display-font text-[12vw] sm:text-8xl md:text-9xl leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
                    REQUEST INVITATION
                </h2>
<div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-8"></div>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                        Network
                    </span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                        Partners
                    </a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                        Journal
                    </a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                        Careers
                    </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                        Headquarters
                    </span>
<p className="text-xs text-gray-400">1 Berkeley Square<br/>Mayfair, London</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                        Contact
                    </span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                        inquiries@vertex.com
                    </a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                        +44 20 7123 4567
                    </a>
</div>
<div className="flex flex-col justify-between">
<span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                        © 2024
                    </span>
<div className="text-xs text-gray-600 uppercase tracking-widest">
                        Vertex Global
                    </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
