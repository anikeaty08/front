import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);

        // Mobile Menu
        const menuBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');
        const navbar = document.getElementById('navbar');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            const tl = gsap.timeline();
            if (isMenuOpen) {
                tl.to(mobileMenu, { x: 0, duration: 0.8, ease: 'power4.inOut' })
                  .to(menuIcon, { opacity: 0, scale: 0.5, rotate: 90, duration: 0.4 }, 0)
                  .to(closeIcon, { opacity: 1, scale: 1, rotate: 0, duration: 0.4 }, 0.1)
                  .to('.mobile-link', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.4)
                  .to('.mobile-footer', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.6);
                navbar.style.transform = 'translateY(0)';
                lenis.stop();
            } else {
                tl.to(mobileMenu, { x: '100%', duration: 0.6, ease: 'power4.inOut' })
                  .to(closeIcon, { opacity: 0, scale: 0.5, rotate: -90, duration: 0.4 }, 0)
                  .to(menuIcon, { opacity: 1, scale: 1, rotate: 0, duration: 0.4 }, 0.1);
                gsap.set('.mobile-link', { y: 32, opacity: 0 });
                gsap.set('.mobile-footer', { y: 16, opacity: 0 });
                lenis.start();
            }
        });

        // Sticky Navbar
        let lastScrollTop = 0;
        const scrollThreshold = 10;
        lenis.on('scroll', (e) => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDiff = scrollTop - lastScrollTop;
            if (!isMenuOpen) {
                if (scrollTop < 100) navbar.style.transform = 'translateY(0)';
                else if (scrollDiff > scrollThreshold) navbar.style.transform = 'translateY(-100%)';
                else if (scrollDiff < -scrollThreshold) navbar.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop;
        });

        // Cursor
        const initCursor = () => {
            if (window.matchMedia("(pointer: fine)").matches) {
                const cursorDot = document.querySelector('.cursor-dot');
                const cursorCircle = document.querySelector('.cursor-circle');
                gsap.set(".cursor-dot, .cursor-circle", {xPercent: -50, yPercent: -50});
                const setDotX = gsap.quickTo(cursorDot, "x", { duration: 0.1 });
                const setDotY = gsap.quickTo(cursorDot, "y", { duration: 0.1 });
                const setCircleX = gsap.quickTo(cursorCircle, "x", { duration: 0.35 });
                const setCircleY = gsap.quickTo(cursorCircle, "y", { duration: 0.35 });
                window.addEventListener('mousemove', (e) => {
                    setDotX(e.clientX); setDotY(e.clientY);
                    setCircleX(e.clientX); setCircleY(e.clientY);
                });
                document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
                    el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                    el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
                });
            }
        };

        const initAnimations = () => {
            // Line Preloader Animation
            const loaderTl = gsap.timeline();
            loaderTl.to('.loader-line', { width: '100%', duration: 1.8, ease: 'power3.inOut' })
                    .to('.loader', { yPercent: -100, duration: 1.2, ease: 'power4.inOut' }, '+=0.2')
                    .from('.hero-img', { scale: 1.1, duration: 2, ease: 'power2.out' }, '-=1.2')
                    .to('.hero-content, .hero-details', { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, '-=0.6');

            // Scrub Text
            const introText = document.querySelector('.intro-scrub-text');
            if(introText) {
                const text = introText.innerText;
                const words = text.split(' ');
                const keyPhrases = ["legacies.", "exceptional", "value", "Joint", "Venture", "Partnerships", "prime", "locations."];
                introText.innerHTML = words.map(word => {
                    const isKey = keyPhrases.some(phrase => word.includes(phrase));
                    return `<span class="scrub-word inline-block ${isKey ? 'is-key' : ''}" data-key="${isKey}">${word}</span>`;
                }).join(' ');
                gsap.to(introText.querySelectorAll('.scrub-word'), { 
                    opacity: 1, 
                    stagger: 0.05, 
                    color: (i, target) => target.dataset.key === 'true' ? '#b19777' : '#1A1A1A',
                    scrollTrigger: { trigger: introText, start: 'top 85%', end: 'bottom 45%', scrub: true }
                });
            }

            // Stack Cards
            gsap.utils.toArray('.card-item').forEach((card, i, arr) => {
                if (i < arr.length - 1) {
                    const rotationDirection = i % 2 === 0 ? 5 : -5;
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.8, y: -60, rotationZ: rotationDirection, filter: 'blur(12px)', opacity: 0.3, ease: 'none',
                        scrollTrigger: { trigger: arr[i+1], start: 'top bottom', end: 'top 20%', scrub: true }
                    });
                }
            });

            // Horizontal Scroll
            const sections = gsap.utils.toArray(".horiz-wrap > div");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: { trigger: "#horiz-scroll", pin: true, scrub: 1, end: "+=2000" }
            });
        };

        window.onload = () => {
            document.body.style.opacity = 1;
            initCursor();
            initAnimations();
            ScrollTrigger.refresh();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot"></div>
<div className="cursor-circle"></div>
<div className="noise"></div>

<div className="loader fixed inset-0 z-[9999] bg-[#FAFAFA] flex items-center justify-center">
<div className="w-32 md:w-48 h-[1px] bg-black/5 relative overflow-hidden">
<div className="loader-line absolute top-0 left-0 h-full w-0 bg-[#b19777]"></div>
</div>
</div>

<div className="fixed inset-0 z-40 bg-[#FAFAFA] translate-x-full flex flex-col justify-between pt-32 pb-12 px-6 will-change-transform" id="mobile-menu">
<div className="flex flex-col items-start space-y-2 h-full justify-center">
<a className="mobile-link opacity-0 translate-y-8 display-font text-5xl font-medium tracking-tight text-[#1A1A1A] hover:text-[#b19777] transition-colors" href="#">Developments</a>
<a className="mobile-link opacity-0 translate-y-8 display-font text-5xl font-medium tracking-tight text-[#1A1A1A] hover:text-[#b19777] transition-colors" href="#">Ventures</a>
<a className="mobile-link opacity-0 translate-y-8 display-font text-5xl font-medium tracking-tight text-[#1A1A1A] hover:text-[#b19777] transition-colors" href="#">Insight</a>
<a className="mobile-link opacity-0 translate-y-8 display-font text-5xl font-medium tracking-tight text-[#1A1A1A] hover:text-[#b19777] transition-colors" href="#">Harare</a>
</div>
<div className="border-t border-black/10 pt-8 flex justify-between items-end w-full opacity-0 translate-y-4 mobile-footer">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-[#b19777] font-semibold">Contact</span>
<span className="text-sm font-medium">info@equinox.co.zw</span>
</div>
<div className="text-[10px] uppercase tracking-widest text-gray-400">© 2025</div>
</div>
</div>

<nav className="fixed top-0 left-0 right-0 w-full z-50 pt-8 pb-4 px-6 md:px-12 pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

<a className="cursor-hover block flex-shrink-0 mix-blend-difference relative z-50" href="#">
<img alt="Equinox Developments" className="md:h-30 w-auto h-20 object-contain invert brightness-0" src="https://i.postimg.cc/3J8TW9Z9/ED-Logo-horizontal.png"/>
</a>

<div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase text-gray-500 bg-white/90 backdrop-blur-xl px-8 py-3 rounded-full border border-white/50 shadow-sm">
<a className="hover:text-[#b19777] transition-colors cursor-hover" href="#">Developments</a>
<a className="hover:text-[#b19777] transition-colors cursor-hover" href="#">Ventures</a>
<a className="hover:text-[#b19777] transition-colors cursor-hover" href="#">Insight</a>
<a className="hover:text-[#b19777] transition-colors cursor-hover" href="#">Harare</a>
</div>

<button className="md:hidden relative z-50 group text-[#1A1A1A] cursor-hover bg-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-95" id="menu-toggle">
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="menu-icon absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] opacity-100 rotate-0 scale-100" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
<iconify-icon className="close-icon absolute inset-0 m-auto transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] opacity-0 -rotate-90 scale-50 text-[#b19777]" icon="solar:close-circle-linear" width="28"></iconify-icon>
</div>
</button>
</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center overflow-hidden bg-[#0f0f0f]" id="hero">
<div className="hero-img-wrap w-full h-full absolute inset-0 will-change-transform z-0">
<div className="w-full h-full relative">
<img alt="Equinox Property" className="w-full h-full object-cover hero-img scale-110" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="bg-black/60 absolute inset-0 z-10"></div>
<div className="bg-gradient-to-t from-black/80 via-transparent to-black/30 absolute inset-0 z-10"></div>
</div>
</div>
<div className="relative z-20 w-full max-w-[90rem] mx-auto px-6 md:px-20 pt-20 h-full flex flex-col justify-center">
<div className="hero-content opacity-0 translate-y-10">
<span className="text-xs md:text-sm tracking-[0.3em] font-medium text-white/80 mb-6 block uppercase font-body">
                        Discover Equinox
                    </span>
<h1 className="display-font text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white font-normal uppercase mb-2">
                        Creative <br/>
                        Unique Design
                    </h1>
</div>
<div className="hero-details flex flex-col md:flex-row items-start md:items-center gap-8 mt-12 opacity-0 translate-y-10">
<div className="flex items-center gap-6">
<div className="h-[1px] w-12 bg-white/60"></div>
<p className="text-white/80 max-w-md text-base md:text-lg font-light leading-relaxed">
                            Pioneering sustainable luxury and architectural excellence in Southern Africa's most coveted landscapes.
                        </p>
</div>
<button className="bg-[#b19777] hover:bg-[#9a8365] text-white pl-8 pr-6 py-4 rounded-full flex items-center gap-3 transition-all duration-300 group cursor-hover md:ml-12">
<span className="text-sm font-medium tracking-wide">Explore More</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto relative z-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-[#b19777]/30 pt-4">
<span className="text-xs font-mono text-[#b19777]">01 — VISION</span>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="display-font text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-5xl intro-scrub-text text-gray-300">
                        We don't just build structures; we curate legacies. Unlocking exceptional value through strategic Joint Venture Partnerships in Zimbabwe's most prime locations.
                    </h2>
</div>
</div>
</section>

<section className="stack-section pb-32">
<div className="px-6 md:px-20 mb-20 flex justify-between items-end max-w-[1600px] mx-auto">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#b19777]"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Current Portfolio</span>
</div>
<h2 className="display-font text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#1A1A1A] leading-tight">
                        SIGNATURE <br/> DEVELOPMENTS
                    </h2>
</div>
</div>
<div className="stack-container px-4 md:px-0">

<div className="card-item cursor-hover">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-[#b19777]">HIGHLANDS</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</div>
<h3 className="display-font text-3xl md:text-4xl tracking-tight mt-6 text-[#1A1A1A]">THE RIDGE ESTATE</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Harare North</p>
</div>
<div className="space-y-6">
<p className="text-base text-gray-500 leading-relaxed font-normal">A collection of 12 luxury clusters blending modern architectural lines with the rugged beauty of the Mashonaland landscape.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">Residential</span>
<span className="px-3 py-1 bg-[#b19777]/10 border border-[#b19777]/20 rounded-full text-[10px] uppercase tracking-wider font-medium text-[#b19777]">Selling</span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="The Ridge" className="card-img" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item cursor-hover">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-[#b19777]">BORROWDALE</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</div>
<h3 className="display-font text-3xl md:text-4xl tracking-tight mt-6 text-[#1A1A1A]">EQUINOX TOWER</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Mixed Use</p>
</div>
<div className="space-y-6">
<p className="text-base text-gray-500 leading-relaxed font-normal">Redefining the skyline. A joint venture comprising retail, premium office space, and penthouse living in the Golden Triangle.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">Commercial</span>
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">2025</span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Equinox Tower" className="card-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item cursor-hover">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-[#b19777]">MT PLEASANT</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</div>
<h3 className="display-font text-3xl md:text-4xl tracking-tight mt-6 text-[#1A1A1A]">THE WATERFORD</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Bespoke Villas</p>
</div>
<div className="space-y-6">
<p className="text-base text-gray-500 leading-relaxed font-normal">An exclusive enclave of 8 bespoke villas, redefining modern minimalism with floor-to-ceiling glass and sustainable energy integration.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">Residential</span>
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">Private</span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="The Waterford" className="card-img" src="https://images.unsplash.com/photo-1600596542815-e32870110044?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen overflow-hidden bg-[#FAFAFA] border-t border-black/5" id="horiz-scroll">
<div className="horiz-wrap flex h-full w-[300vw]">
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/5 relative group cursor-hover bg-[#FAFAFA]">
<div className="absolute top-12 left-6 md:left-20">
<span className="text-xs font-mono text-[#b19777] tracking-widest bg-[#b19777]/10 px-2 py-1 rounded">01 — MODEL</span>
</div>
<h2 className="display-font text-6xl md:text-8xl tracking-tight text-[#1A1A1A] group-hover:text-[#b19777] transition-colors duration-500">JOINT <br/> VENTURES</h2>
<p className="mt-8 max-w-md text-gray-500 text-xl leading-relaxed font-light">We partner with landowners to unlock the true potential of prime real estate.</p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/5 bg-white relative group cursor-hover">
<div className="absolute top-12 left-6 md:left-20">
<span className="text-xs font-mono text-[#b19777] tracking-widest bg-[#b19777]/10 px-2 py-1 rounded">02 — QUALITY</span>
</div>
<h2 className="display-font text-6xl md:text-8xl tracking-tight text-[#1A1A1A] group-hover:text-[#b19777] transition-colors duration-500">PREMIUM <br/> FINISHES</h2>
<p className="mt-8 max-w-md text-gray-500 text-xl leading-relaxed font-light">Sourcing the finest materials globally while championing local craftsmanship.</p>
</div>
<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-[#f4f4f5] relative group cursor-hover">
<div className="absolute top-12 left-6 md:left-20">
<span className="text-xs font-mono text-[#b19777] tracking-widest bg-[#b19777]/10 px-2 py-1 rounded">03 — GROWTH</span>
</div>
<h2 className="display-font text-6xl md:text-8xl tracking-tight text-[#1A1A1A] group-hover:text-[#b19777] transition-colors duration-500">ASSET <br/> VALUE</h2>
<p className="mt-8 max-w-md text-gray-500 text-xl leading-relaxed font-light">Creating properties that appreciate. We focus on areas with high growth potential.</p>
</div>
</div>
</section>

<section className="py-24 md:py-48 bg-[#1A1A1A] text-white relative z-20">
<div className="px-6 md:px-20 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
<div>
<span className="text-xs font-mono text-[#b19777] block mb-4 md:mb-6 tracking-widest">TRACK RECORD</span>
<h2 className="display-font text-5xl md:text-8xl tracking-tight leading-none text-white">PARTNERSHIP <br/> IMPACT</h2>
</div>
<div className="flex flex-col gap-0 mt-4 md:mt-0">
<div className="flex justify-between items-baseline border-b border-white/10 py-6 group hover:pl-4 transition-all duration-300 cursor-hover">
<span className="text-lg md:text-2xl font-medium text-gray-300 group-hover:text-[#b19777]">Projects Completed</span>
<span className="text-xl md:text-2xl font-display text-white">14</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/10 py-6 group hover:pl-4 transition-all duration-300 cursor-hover">
<span className="text-lg md:text-2xl font-medium text-gray-300 group-hover:text-[#b19777]">Capital Deployed</span>
<span className="text-xl md:text-2xl font-display text-white">$45M+</span>
</div>
</div>
</div>
</section>
</div>

<footer className="footer-sticky">
<div className="relative z-10 text-center w-full max-w-4xl px-6">
<a className="block group cursor-hover" href="mailto:partnerships@equinox.co.zw">
<h2 className="display-font text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter text-white group-hover:text-[#b19777] transition-colors duration-500">LET'S BUILD</h2>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-24 text-left border-t border-white/10 pt-12">
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-[#b19777] font-semibold">Connect</span>
<a className="text-xs text-gray-400 hover:text-white transition-colors cursor-hover" href="#">LinkedIn</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-[#b19777] font-semibold">Visit</span>
<p className="text-xs text-gray-400">Harare, Zimbabwe</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-[#b19777] font-semibold">Inquire</span>
<a className="text-xs text-gray-400 hover:text-white transition-colors cursor-hover break-all" href="mailto:info@equinox.co.zw">info@equinox.co.zw</a>
</div>
<div className="flex flex-col justify-between">
<span className="text-[10px] uppercase tracking-widest text-[#b19777] font-semibold">© 2025</span>
<div className="text-[10px] text-gray-600 uppercase tracking-widest">Equinox Developments</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
