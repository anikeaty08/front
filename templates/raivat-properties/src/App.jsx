import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Remove initial loading curtain
            setTimeout(() => {
                document.getElementById('global-curtain').classList.add('loaded');
            }, 300);

            // 2. Prepare Split Text Animation
            const splitElements = document.querySelectorAll('.split-text');
            splitElements.forEach(el => {
                const text = el.innerText;
                // Clear the element and split into words, then chars
                el.innerHTML = text.split(' ').map(word => {
                    if(!word) return '';
                    const chars = word.split('').map(char => {
                        return `<span class="split-char">${char}</span>`;
                    }).join('');
                    return `<span class="split-word">${chars}&nbsp;</span>`;
                }).join('');
                
                // Add staggered delays to characters within this element
                const allChars = el.querySelectorAll('.split-char');
                allChars.forEach((c, i) => {
                    c.style.transitionDelay = `${i * 0.03}s`;
                });
            });

            // 3. Intersection Observer for Reveals (Text, Curtains, Fades)
            const observerOptions = {
                root: null,
                rootMargin: "0px 0px -15% 0px",
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Unobserve after animating once
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe all animation classes
            const animatedElements = document.querySelectorAll('.fade-up, .line-expand, .curtain-wrapper, .split-text');
            animatedElements.forEach(el => {
                // Trigger instant class if element is in initial viewport without scrolling
                if(el.classList.contains('trigger-instant')) {
                    setTimeout(() => el.classList.add('active'), 800);
                } else {
                    observer.observe(el);
                }
            });

            // 4. Smooth Parallax Scrolling Effect
            const parallaxElements = document.querySelectorAll('.js-parallax');
            
            // Use requestAnimationFrame for smooth parallax
            let scrollY = window.scrollY;
            let ticking = false;

            window.addEventListener('scroll', () => {
                scrollY = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        updateParallax(scrollY);
                        updateNav(scrollY);
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            function updateParallax(scrollPos) {
                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
                    // Calculate element position relative to viewport for accurate parallax
                    const rect = el.parentElement.getBoundingClientRect();
                    // Only animate if in viewport
                    if(rect.top < window.innerHeight && rect.bottom > 0) {
                        const yPos = (rect.top * speed);
                        el.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.1)`;
                    }
                });
            }

            // 5. Navbar blur background transition on scroll
            const navbar = document.getElementById('navbar');
            function updateNav(scrollPos) {
                if(scrollPos > 50) {
                    navbar.classList.add('bg-white/80', 'backdrop-blur-xl', 'border-zinc-200');
                    navbar.classList.remove('bg-white/0', 'border-transparent', 'text-white');
                } else {
                    // Transparent state if at top (depends on hero design, currently hero is dark)
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="global-curtain" id="global-curtain"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-zinc-200/50 transition-all duration-700 fade-up" id="navbar">
<div className="max-w-[1920px] mx-auto px-6 lg:px-16 h-24 flex items-center justify-between">
<a className="text-xl lg:text-3xl font-serif tracking-tight uppercase text-zinc-900 font-medium" href="#">Raivat</a>
<div className="hidden md:flex items-center space-x-12 text-xs font-display tracking-[0.2em] uppercase text-zinc-500">
<a className="hover:text-black transition-colors duration-300" href="#about">About</a>
<a className="hover:text-black transition-colors duration-300" href="#services">Expertise</a>
<a className="hover:text-black transition-colors duration-300" href="#portfolio">Portfolio</a>
<a className="hover:text-black transition-colors duration-300" href="#editorial">Editorial</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-flex text-xs font-display tracking-[0.2em] uppercase pb-1 border-b border-zinc-300 hover:text-black hover:border-black transition-all duration-500" href="#contact">Private Client</a>
<button className="md:hidden text-zinc-900 p-2">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex flex-col justify-end pb-24 lg:pb-40 px-6 lg:px-16 bg-zinc-950 overflow-hidden dark-section">
<div className="absolute inset-0 w-full h-full curtain-wrapper trigger-instant">
<div className="curtain-reveal"></div>
<img alt="Luxury Mansion" className="w-full h-full object-cover object-center opacity-70 scale-out js-parallax" data-speed="0.15" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-[1920px] mx-auto w-full">
<div className="max-w-6xl">
<p className="text-white/60 text-xs font-display tracking-[0.4em] uppercase mb-8 fade-up delay-700">Exquisite Real Estate</p>
<h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-serif tracking-tight font-light leading-[0.9] split-text">
                    Curated. Crafted. Elevated.
                </h1>
<div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center mt-16 fade-up delay-1000">
<a className="inline-flex items-center justify-center border border-white/20 text-white px-12 py-5 text-xs font-display tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700 backdrop-blur-sm" href="#portfolio">
                        Enter Portfolio
                    </a>
<a className="group inline-flex items-center gap-4 text-white text-xs font-display tracking-[0.3em] uppercase transition-colors duration-300" href="#contact">
<span className="group-hover:text-white/60 transition-colors duration-500">Inquire</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform duration-500" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="w-full bg-zinc-950 text-white/40 py-10 overflow-hidden border-b border-white/10">
<div className="flex w-[200%] animate-marquee whitespace-nowrap">
<div className="flex-1 flex justify-around items-center text-xs font-display uppercase tracking-[0.5em] font-light">
<span>Worli</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Bandra</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Malabar Hill</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Juhu</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>South Mumbai</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Lower Parel</span>
</div>
<div className="flex-1 flex justify-around items-center text-xs font-display uppercase tracking-[0.5em] font-light">
<span>Worli</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Bandra</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Malabar Hill</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Juhu</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>South Mumbai</span><span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>Lower Parel</span>
</div>
</div>
</div>

<section className="py-32 lg:py-64 px-6 lg:px-16 max-w-[1920px] mx-auto relative" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
<div className="lg:col-span-7 order-2 lg:order-1 relative h-[600px] lg:h-[900px] w-full curtain-wrapper">
<div className="curtain-reveal"></div>
<img alt="Luxury Interior" className="w-full h-full object-cover object-center scale-out js-parallax" data-speed="0.05" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md px-6 py-4 text-xs font-display tracking-[0.3em] uppercase text-zinc-900 hidden md:block fade-up delay-500">
                    Est. 2008
                </div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
<span className="text-xs font-display tracking-[0.4em] uppercase text-zinc-400 mb-10 block fade-up">The Legacy</span>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight font-light text-zinc-900 mb-12 leading-[1.05] split-text">
                    Redefining luxury living through absolute discretion.
                </h2>
<div className="space-y-10 text-zinc-500 font-light text-base lg:text-lg leading-relaxed fade-up">
<p>
                        Raivat Properties operates at the highest echelon of the real estate market. We curate bespoke lifestyles for a discerning clientele, offering unprecedented access to off-market masterpieces.
                    </p>
<p>
                        Our approach is deeply personal, rooted in absolute confidentiality and an unwavering commitment to acquiring properties that transcend the ordinary.
                    </p>
</div>
<div className="mt-20 pt-16 relative fade-up">
<div className="absolute top-0 left-0 h-px bg-zinc-200 line-expand"></div>
<div className="grid grid-cols-2 gap-12">
<div>
<div className="text-5xl lg:text-6xl font-serif tracking-tight text-zinc-900 mb-4 font-light">₹10K<span className="text-3xl">+</span></div>
<div className="text-xs font-display uppercase tracking-[0.2em] text-zinc-400 font-light">Cr Volume</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-serif tracking-tight text-zinc-900 mb-4 font-light">15<span className="text-3xl">+</span></div>
<div className="text-xs font-display uppercase tracking-[0.2em] text-zinc-400 font-light">Years Active</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 text-white relative dark-section border-t border-white/10" id="portfolio">

<div className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden curtain-wrapper">
<div className="curtain-reveal"></div>
<img alt="The Heritage Villa" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-out js-parallax" data-speed="0.2" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
<div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 lg:px-16 flex flex-col justify-end h-full pb-32">
<div className="flex items-center gap-8 mb-10 fade-up">
<span className="px-5 py-2 border border-white/20 text-white text-xs font-display uppercase tracking-[0.3em]">Exclusive Collection</span>
<span className="text-white/60 text-xs font-display tracking-[0.3em] uppercase">Bandra West</span>
</div>
<h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight font-light text-white leading-[0.9] split-text">
                    The Heritage Villa
                </h2>
</div>
</div>

<div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-32 lg:py-48 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-5 relative">
<div className="sticky top-40">
<span className="text-xs font-display tracking-[0.4em] uppercase text-white/40 mb-10 block fade-up">The Vision</span>
<h3 className="text-4xl lg:text-6xl font-serif tracking-tight font-light text-white mb-10 split-text">An architectural masterpiece blending colonial charm with ultra-modern amenities.</h3>
<p className="text-white/50 text-base lg:text-lg font-light leading-relaxed mb-16 fade-up">
                        Situated on the highest vantage point of Bandra, this unparalleled estate offers panoramic sea views, complete privacy, and bespoke finishes sourced from around the globe.
                    </p>
<a className="inline-flex text-xs font-display tracking-[0.3em] uppercase pb-2 border-b border-white/30 hover:border-white hover:text-white text-white/70 transition-all fade-up" href="#contact">Request Floor Plans</a>
</div>
</div>
<div className="lg:col-span-7">

<div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-24 fade-up">
<div className="bg-zinc-950 p-10 lg:p-16">
<span className="block text-4xl lg:text-5xl font-serif mb-4 font-light text-white">₹120 Cr</span>
<span className="text-xs font-display uppercase tracking-[0.2em] text-white/40">Asking Price</span>
</div>
<div className="bg-zinc-950 p-10 lg:p-16">
<span className="block text-4xl lg:text-5xl font-serif mb-4 font-light text-white">12,000</span>
<span className="text-xs font-display uppercase tracking-[0.2em] text-white/40">Sq.Ft Interior</span>
</div>
<div className="bg-zinc-950 p-10 lg:p-16">
<span className="block text-4xl lg:text-5xl font-serif mb-4 font-light text-white">6</span>
<span className="text-xs font-display uppercase tracking-[0.2em] text-white/40">Bedrooms</span>
</div>
<div className="bg-zinc-950 p-10 lg:p-16">
<span className="block text-4xl lg:text-5xl font-serif mb-4 font-light text-white">4.5</span>
<span className="text-xs font-display uppercase tracking-[0.2em] text-white/40">Acres Plot</span>
</div>
</div>

<div className="relative w-full aspect-[3/4] lg:aspect-square curtain-wrapper mt-16">
<div className="curtain-reveal"></div>
<img alt="Interior Detail" className="w-full h-full object-cover scale-out js-parallax" data-speed="0.1" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="w-full py-20 lg:py-32 overflow-hidden bg-[#050505]">
<div className="max-w-[1920px] mx-auto px-6 lg:px-16 mb-16 fade-up">
<span className="text-xs font-display tracking-[0.4em] uppercase text-white/40 block">The Gallery</span>
</div>
<div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-16 pb-20">
<div className="w-full lg:w-[60%] aspect-[16/9] lg:aspect-[21/9] curtain-wrapper relative">
<div className="curtain-reveal"></div>
<img alt="Gallery Image 1" className="w-full h-full object-cover scale-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-[40%] aspect-[4/3] lg:aspect-auto curtain-wrapper relative mt-10 lg:mt-32">
<div className="curtain-reveal"></div>
<img alt="Gallery Image 2" className="w-full h-full object-cover scale-out" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-white py-40 lg:py-64 px-6 lg:px-16 flex flex-col justify-center items-center text-center overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
<h2 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tight font-light text-white/20 hover:text-white transition-colors duration-1000 cursor-default split-text">We don't just sell.</h2>
<h2 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tight font-light text-white/50 hover:text-white transition-colors duration-1000 cursor-default split-text">We curate lifestyles.</h2>
<h2 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tight font-light text-white hover:text-white transition-colors duration-1000 cursor-default split-text">We deliver exclusivity.</h2>
</div>
</section>

<section className="py-32 lg:py-64 px-6 lg:px-16 max-w-[1920px] mx-auto" id="services">
<div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-24 lg:mb-40 gap-10">
<div className="max-w-4xl">
<span className="text-xs font-display tracking-[0.4em] uppercase text-zinc-400 mb-10 block fade-up">Our Expertise</span>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight font-light text-zinc-900 leading-[1.05] split-text">
                    Comprehensive advisory for the ultra-high-net-worth individual.
                </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16 lg:gap-x-32">

<div className="group relative pt-12 fade-up">
<div className="absolute top-0 left-0 h-px bg-zinc-200 line-expand"></div>
<div className="absolute top-0 left-0 h-[2px] bg-zinc-900 w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
<div className="flex justify-between items-start mb-10">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700" height="40" icon="solar:key-minimalistic-linear" width="40"></iconify-icon>
<span className="text-xs font-display tracking-[0.2em] text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700">01</span>
</div>
<h3 className="text-3xl lg:text-4xl font-serif tracking-tight font-light mb-6 text-zinc-900">Private Representation</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed group-hover:text-zinc-900 transition-colors duration-700">Exclusive representation securing premier off-market assets with absolute anonymity and tactical negotiation.</p>
</div>
<div className="group relative pt-12 fade-up delay-100">
<div className="absolute top-0 left-0 h-px bg-zinc-200 line-expand"></div>
<div className="absolute top-0 left-0 h-[2px] bg-zinc-900 w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
<div className="flex justify-between items-start mb-10">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700" height="40" icon="solar:buildings-linear" width="40"></iconify-icon>
<span className="text-xs font-display tracking-[0.2em] text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700">02</span>
</div>
<h3 className="text-3xl lg:text-4xl font-serif tracking-tight font-light mb-6 text-zinc-900">Asset Acquisition</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed group-hover:text-zinc-900 transition-colors duration-700">Sourcing and securing the most coveted residential and commercial spaces globally.</p>
</div>
<div className="group relative pt-12 fade-up">
<div className="absolute top-0 left-0 h-px bg-zinc-200 line-expand"></div>
<div className="absolute top-0 left-0 h-[2px] bg-zinc-900 w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
<div className="flex justify-between items-start mb-10">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700" height="40" icon="solar:shield-check-linear" width="40"></iconify-icon>
<span className="text-xs font-display tracking-[0.2em] text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700">03</span>
</div>
<h3 className="text-3xl lg:text-4xl font-serif tracking-tight font-light mb-6 text-zinc-900">Discreet Sales</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed group-hover:text-zinc-900 transition-colors duration-700">Targeted marketing to pre-qualified buyers ensuring privacy and maximum valuation without public exposure.</p>
</div>
<div className="group relative pt-12 fade-up delay-100">
<div className="absolute top-0 left-0 h-px bg-zinc-200 line-expand"></div>
<div className="absolute top-0 left-0 h-[2px] bg-zinc-900 w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
<div className="flex justify-between items-start mb-10">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700" height="40" icon="solar:chart-square-linear" width="40"></iconify-icon>
<span className="text-xs font-display tracking-[0.2em] text-zinc-300 group-hover:text-zinc-900 transition-colors duration-700">04</span>
</div>
<h3 className="text-3xl lg:text-4xl font-serif tracking-tight font-light mb-6 text-zinc-900">Investment Strategy</h3>
<p className="text-base text-zinc-500 font-light leading-relaxed group-hover:text-zinc-900 transition-colors duration-700">Strategic portfolio building, risk mitigation, and high-yield real estate investment counseling.</p>
</div>
</div>
</section>

<section className="py-32 lg:py-48 px-6 lg:px-16 max-w-[1920px] mx-auto border-t border-zinc-200" id="editorial">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div>
<span className="text-xs font-display tracking-[0.4em] uppercase text-zinc-400 mb-10 block fade-up">Journal</span>
<h2 className="text-5xl lg:text-7xl font-serif tracking-tight font-light text-zinc-900 split-text">Market Perspectives</h2>
</div>
<a className="hidden md:inline-flex text-xs font-display tracking-[0.3em] uppercase pb-2 border-b border-zinc-300 hover:border-black hover:text-black transition-all fade-up delay-200" href="#">Read All Articles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<article className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] mb-8 curtain-wrapper">
<div className="curtain-reveal"></div>
<img alt="Architecture" className="w-full h-full object-cover scale-out group-hover:scale-105 transition-transform duration-[2.5s] ease-out" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-display uppercase tracking-[0.2em] text-zinc-400 mb-5 block fade-up">Market Report</span>
<h3 className="text-3xl font-serif tracking-tight font-light mb-4 text-zinc-900 group-hover:text-zinc-500 transition-colors duration-500 fade-up">The Rise of Branded Residences in South Mumbai</h3>
</article>

<article className="group cursor-pointer lg:mt-24">
<div className="relative overflow-hidden aspect-[4/5] mb-8 curtain-wrapper">
<div className="curtain-reveal"></div>
<img alt="Interior" className="w-full h-full object-cover scale-out group-hover:scale-105 transition-transform duration-[2.5s] ease-out" src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-display uppercase tracking-[0.2em] text-zinc-400 mb-5 block fade-up delay-100">Design Trends</span>
<h3 className="text-3xl font-serif tracking-tight font-light mb-4 text-zinc-900 group-hover:text-zinc-500 transition-colors duration-500 fade-up delay-100">Minimalism &amp; Materiality in Ultra-Luxury Interiors</h3>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] mb-8 curtain-wrapper">
<div className="curtain-reveal"></div>
<img alt="Cityscape" className="w-full h-full object-cover scale-out group-hover:scale-105 transition-transform duration-[2.5s] ease-out" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-display uppercase tracking-[0.2em] text-zinc-400 mb-5 block fade-up delay-200">Investment</span>
<h3 className="text-3xl font-serif tracking-tight font-light mb-4 text-zinc-900 group-hover:text-zinc-500 transition-colors duration-500 fade-up delay-200">Why UHNIs are Expanding their Real Estate Portfolios</h3>
</article>
</div>
</section>

<section className="py-32 lg:py-48 px-6 lg:px-16 bg-[#050505] text-white dark-section" id="contact">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
<div>
<span className="text-xs font-display tracking-[0.4em] uppercase text-white/40 mb-10 block fade-up">Private Access</span>
<h2 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tight font-light mb-16 leading-[0.95] split-text">
                    Initiate a<br/>conversation.
                </h2>
<div className="space-y-16 font-light text-white/60 fade-up delay-200 mt-24">
<div>
<h4 className="text-xs font-display text-white/30 mb-4 uppercase tracking-[0.3em]">Headquarters</h4>
<p className="text-lg leading-relaxed font-serif tracking-wide">Raivat House, Level 42<br/>Lower Parel, Mumbai 400013</p>
</div>
<div>
<h4 className="text-xs font-display text-white/30 mb-4 uppercase tracking-[0.3em]">Direct Desk</h4>
<p className="text-lg font-serif tracking-wide hover:text-white transition-colors cursor-pointer mb-2">+91 98765 43210</p>
<p className="text-lg font-serif tracking-wide hover:text-white transition-colors cursor-pointer">private@raivat.com</p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm p-10 lg:p-20 border border-white/10 fade-up delay-300">
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative group">
<label className="block text-xs font-display uppercase tracking-[0.3em] text-white/40 mb-2 transition-colors group-hover:text-white/70">First Name</label>
<input className="w-full border-b border-white/20 py-4 bg-transparent text-white focus:border-white focus:outline-none transition-colors font-light text-base rounded-none" type="text"/>
</div>
<div className="relative group">
<label className="block text-xs font-display uppercase tracking-[0.3em] text-white/40 mb-2 transition-colors group-hover:text-white/70">Last Name</label>
<input className="w-full border-b border-white/20 py-4 bg-transparent text-white focus:border-white focus:outline-none transition-colors font-light text-base rounded-none" type="text"/>
</div>
</div>
<div className="relative group">
<label className="block text-xs font-display uppercase tracking-[0.3em] text-white/40 mb-2 transition-colors group-hover:text-white/70">Email Address</label>
<input className="w-full border-b border-white/20 py-4 bg-transparent text-white focus:border-white focus:outline-none transition-colors font-light text-base rounded-none" type="email"/>
</div>
<div className="relative group">
<label className="block text-xs font-display uppercase tracking-[0.3em] text-white/40 mb-2 transition-colors group-hover:text-white/70">Nature of Inquiry</label>
<textarea className="w-full border-b border-white/20 py-4 bg-transparent text-white focus:border-white focus:outline-none transition-colors font-light text-base resize-none rounded-none" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black py-6 text-xs font-display font-medium tracking-[0.4em] uppercase hover:bg-zinc-300 transition-colors mt-10" type="button">
                        Submit Confidentially
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#050505] text-white/40 py-20 px-6 lg:px-16 border-t border-white/10 text-xs font-display font-light">
<div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
<div className="text-3xl font-serif tracking-tight uppercase font-medium text-white">
                Raivat
            </div>
<div className="flex gap-12 uppercase tracking-[0.3em] text-xs">
<a className="hover:text-white transition-colors duration-500" href="#">Instagram</a>
<a className="hover:text-white transition-colors duration-500" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors duration-500" href="#">Twitter</a>
</div>
<div className="tracking-[0.2em] text-xs uppercase">
                © 2024 Raivat. Exclusive Rights.
            </div>
</div>
</footer>



    </>
  );
}
