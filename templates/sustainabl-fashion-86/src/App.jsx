import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Get the scrollable container
        const macContent = document.getElementById('macContent');

        // Scroll Progress Bar
        macContent.addEventListener('scroll', () => {
            const scrollTop = macContent.scrollTop;
            const scrollHeight = macContent.scrollHeight - macContent.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
            
            // Back to Top Button
            const backToTop = document.getElementById('backToTop');
            if (scrollTop > 500) {
                backToTop.classList.remove('opacity-0', 'translate-y-10');
                backToTop.classList.add('opacity-100', 'translate-y-0');
            } else {
                backToTop.classList.add('opacity-0', 'translate-y-10');
                backToTop.classList.remove('opacity-100', 'translate-y-0');
            }
            
            // Navbar shrink
            const navbar = document.getElementById('navbar');
            if (scrollTop > 50) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
            }
        });

        // Back to Top Click
        document.getElementById('backToTop').addEventListener('click', () => {
            macContent.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Reveal on Scroll
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px', root: macContent });

        revealElements.forEach(el => revealObserver.observe(el));

        // Number Counter Animation
        const counterElements = document.querySelectorAll('.number-counter');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseFloat(entry.target.dataset.target);
                    const duration = 2000;
                    const start = 0;
                    const startTime = performance.now();
                    
                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = start + (target - start) * easeOut;
                        
                        if (target % 1 !== 0) {
                            entry.target.textContent = current.toFixed(1);
                        } else {
                            entry.target.textContent = Math.floor(current);
                        }
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    
                    requestAnimationFrame(animate);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5, root: macContent });

        counterElements.forEach(el => counterObserver.observe(el));

        // Magnetic Button Effect
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });

        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuPanel = document.getElementById('menuPanel');
        const menuBackdrop = document.getElementById('menuBackdrop');

        function openMenu() {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                menuPanel.classList.remove('translate-x-full');
            }, 10);
        }

        function closeMenuFunc() {
            menuPanel.classList.add('translate-x-full');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 500);
        }

        menuBtn?.addEventListener('click', openMenu);
        closeMenu?.addEventListener('click', closeMenuFunc);
        menuBackdrop?.addEventListener('click', closeMenuFunc);

        // Smooth Scroll for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const targetPosition = target.offsetTop - 100;
                    macContent.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    closeMenuFunc();
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mac-window w-full max-w-7xl mx-auto my-4">

<div className="mac-titlebar">
<div className="mac-buttons">
<div className="mac-btn mac-btn-close"></div>
<div className="mac-btn mac-btn-minimize"></div>
<div className="mac-btn mac-btn-maximize"></div>
</div>
<span className="mac-title">Street Turn — Sustainability with Style</span>
<div className="mac-toolbar">
<button className="mac-toolbar-btn">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="mac-toolbar-btn">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="mac-toolbar-btn">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</button>
</div>
</div>

<div className="mac-content" id="macContent">

<div className="sticky top-0 left-0 right-0 z-[100] h-1 bg-[#85AFAF]/20">
<div className="h-full w-0 bg-gradient-to-r from-[#85AFAF] to-[#6d9494] transition-all duration-100" id="progressBar" style={{width: '100%'}}></div>
</div>

<nav className="sticky top-1 w-full z-50 transition-all duration-500" id="navbar">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="glass-card rounded-2xl shadow-lg shadow-[#85AFAF]/10 transition-all duration-300" id="navContainer">
<div className="flex z-20 bg-[#E9FFFE] h-16 border-[#85AFAF]/40 border rounded-2xl pr-6 pl-6 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] items-center justify-between">

<a className="flex items-center gap-3 group" href="#top">
<img alt="Street Turn Logo" className="w-10 h-10 object-contain scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58ea6e62-634b-4959-9b16-3070f995b2c3_320w.jpg"/>
<div className="flex flex-col">
<span className="text-base font-medium text-[#85AFAF] tracking-[0.2em]">STREET TURN</span>
<span className="hidden sm:block text-xs text-[#85AFAF]/70 tracking-wide">Sustainability with Style</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#85AFAF] underline-animation" href="#top">Home</a>
<a className="text-sm font-medium text-[#85AFAF]/70 hover:text-[#85AFAF] underline-animation transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-[#85AFAF]/70 hover:text-[#85AFAF] underline-animation transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-[#85AFAF]/70 hover:text-[#85AFAF] underline-animation transition-colors" href="#impact">Impact</a>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 rounded-full bg-[#85AFAF]/10 text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-all duration-300 magnetic-btn" id="cartBtn">
<svg className="lucide lucide-shopping-bag w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#85AFAF] text-[10px] font-semibold text-[#E9FFFE]">3</span>
</button>
<button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary text-[#E9FFFE] text-sm font-medium magnetic-btn">
                            Sign In
                            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="md:hidden p-2 rounded-full bg-[#85AFAF]/10 text-[#85AFAF]" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] hidden" id="mobileMenu">
<div className="absolute inset-0 bg-[#85AFAF]/20 backdrop-blur-sm" id="menuBackdrop"></div>
<div className="absolute right-0 top-0 h-full w-80 bg-[#E9FFFE] shadow-2xl transform translate-x-full transition-transform duration-500" id="menuPanel">
<div className="p-6">
<button className="absolute top-6 right-6 p-2 rounded-full bg-[#85AFAF]/10 text-[#85AFAF]" id="closeMenu">
<svg className="lucide lucide-x w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="mt-16 space-y-6">
<a className="block text-lg font-medium text-[#85AFAF]" href="#top">Home</a>
<a className="block text-lg font-medium text-[#85AFAF]/70" href="#about">About</a>
<a className="block text-lg font-medium text-[#85AFAF]/70" href="#products">Products</a>
<a className="block text-lg font-medium text-[#85AFAF]/70" href="#impact">Impact</a>
</div>
</div>
</div>
</div>

<main className="" id="top">

<section className="min-h-screen flex overflow-hidden pt-24 pb-16 relative items-center">

<div className="blur-[100px] animate-pulse-slow bg-[#85AFAF]/10 w-[600px] h-[600px] rounded-full absolute top-20 right-0"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#85AFAF]/5 rounded-full blur-[80px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="space-y-8 reveal visible">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#85AFAF]/10 border border-[#85AFAF]/20 text-[#85AFAF] text-xs font-medium uppercase tracking-wider cursor-default hover:bg-[#85AFAF]/20 transition-colors">
<span className="w-2 h-2 rounded-full bg-[#85AFAF] animate-pulse"></span>
                            50% Off Summer Collection
                        </div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-[#85AFAF]">
                            Step into Style
                            <span className="block text-[#85AFAF]/50">Your Ultimate</span>
<span className="gradient-text">Fashion Destination</span>
</h1>

<p className="text-lg text-[#85AFAF]/70 leading-relaxed max-w-lg">
                            We are the premier platform for sustainable fashion in the modern era. Our artisans craft exceptional, eco-friendly designs for those who value style and the planet.
                        </p>

<div className="flex flex-wrap gap-4 pt-4 gap-x-4 gap-y-4 items-center">
<button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary text-[#E9FFFE] text-base font-medium magnetic-btn" style={{}}>
                                Shop Now
                                <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex gap-3 hover:bg-[#85AFAF]/10 transition-all magnetic-btn text-base font-medium text-[#85AFAF] border-[#85AFAF]/30 border-2 rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                                Latest Collection
                            </button>
</div>

<div className="flex items-center gap-6 pt-6 border-t border-[#85AFAF]/10">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-[#85AFAF]/20 border-2 border-[#E9FFFE] flex items-center justify-center text-[#85AFAF] text-xs font-semibold">JD</div>
<div className="w-10 h-10 rounded-full bg-[#85AFAF]/30 border-2 border-[#E9FFFE] flex items-center justify-center text-[#85AFAF] text-xs font-semibold">AM</div>
<div className="w-10 h-10 rounded-full bg-[#85AFAF]/40 border-2 border-[#E9FFFE] flex items-center justify-center text-[#85AFAF] text-xs font-semibold">SK</div>
</div>
<div>
<p className="text-sm font-medium text-[#85AFAF]">12,000+ Happy Customers</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-star w-4 h-4 text-[#85AFAF] fill-[#85AFAF]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm text-[#85AFAF]/70">4.9/5 rating</span>
</div>
</div>
</div>
</div>

<div className="relative reveal visible">
<div className="relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-[3rem] bg-[#85AFAF]/10 rotate-6 transition-transform duration-700 hover:rotate-12"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-[3rem] bg-[#85AFAF]/5 -rotate-3 transition-transform duration-700 hover:-rotate-6"></div>

<div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-[#85AFAF]/20 hover-lift">
<img alt="Sustainable Fashion" className="lg:h-[600px] w-full h-[500px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ee3b1af-8ce1-4506-aaef-f1a92d5a0ef8_1600w.png"/>

<div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card animate-float">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-[#85AFAF]">Cotton Shirt</p>
<p className="text-xs text-[#85AFAF]/60 mt-1">100% Sustainable</p>
</div>
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-[#85AFAF]">$64</span>
<button className="w-10 h-10 rounded-full bg-[#85AFAF] text-[#E9FFFE] flex items-center justify-center hover:scale-110 transition-transform">
<svg className="lucide lucide-plus w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="absolute -top-8 -right-8 w-24 h-24 text-[#85AFAF]/30 animate-float" style={{animationDelay: '1s'}}>
<svg className="lucide lucide-leaf w-full h-full" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#85AFAF]/5 border-[#85AFAF]/10 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-center gap-4 group cursor-default reveal visible">
<div className="p-4 rounded-2xl bg-[#E9FFFE] border border-[#85AFAF]/10 group-hover:bg-[#85AFAF]/10 transition-colors">
<svg className="lucide lucide-truck w-6 h-6 text-[#85AFAF]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div>
<h3 className="text-base font-medium text-[#85AFAF]">Free Shipping</h3>
<p className="text-sm text-[#85AFAF]/60">Orders above $180</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default reveal stagger-1 visible">
<div className="p-4 rounded-2xl bg-[#E9FFFE] border border-[#85AFAF]/10 group-hover:bg-[#85AFAF]/10 transition-colors">
<svg className="lucide lucide-credit-card w-6 h-6 text-[#85AFAF]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<h3 className="text-base font-medium text-[#85AFAF]">Secure Payment</h3>
<p className="text-sm text-[#85AFAF]/60">Multiple options available</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default reveal stagger-2 visible">
<div className="p-4 rounded-2xl bg-[#E9FFFE] border border-[#85AFAF]/10 group-hover:bg-[#85AFAF]/10 transition-colors">
<svg className="lucide lucide-headphones w-6 h-6 text-[#85AFAF]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<div>
<h3 className="text-base font-medium text-[#85AFAF]">24/7 Support</h3>
<p className="text-sm text-[#85AFAF]/60">We're here to help</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid lg:grid-cols-2 lg:gap-24 gap-x-16 gap-y-16 items-center">

<div className="reveal order-2 lg:order-1 relative">
<div className="aspect-square shadow-[#85AFAF]/10 flex hover-lift bg-center bg-[#E9FFFE] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49bb5a5f-b2f9-4d97-be28-2601257eaa34_1600w.jpg)] max-w-[450px] bg-cover border-[#85AFAF]/10 border rounded-[3rem] mr-auto ml-auto pt-16 pr-16 pb-16 pl-16 relative shadow-2xl items-center justify-center">

<div className="absolute -bottom-6 -right-6 lg:-right-12 glass-card p-5 rounded-2xl shadow-lg animate-float">
<div className="flex items-center gap-4">
<div className="p-3 rounded-xl bg-[#85AFAF]/10">
<svg className="lucide lucide-leaf w-5 h-5 text-[#85AFAF]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="">
<p className="text-xs font-medium text-[#85AFAF]/60 uppercase tracking-wider">Certified</p>
<p className="text-sm font-semibold text-[#85AFAF]">100% Organic</p>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 reveal">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#85AFAF]/10 border border-[#85AFAF]/20 text-[#85AFAF] text-xs font-medium uppercase tracking-wider mb-8">
<svg className="lucide lucide-recycle w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
                            Our Commitment
                        </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#85AFAF] mb-6 leading-[1.1]">
                            Redefining fashion with <span className="gradient-text">circular principles</span>
</h2>
<p className="leading-relaxed text-lg text-[#85AFAF]/70 mb-12">
                            We believe style shouldn't come at a cost to our planet. By integrating recycled materials and minimizing water usage, we're creating a closed-loop system for a better tomorrow.
                        </p>

<div className="grid grid-cols-2 gap-8 border-t border-[#85AFAF]/10 pt-10">
<div className="group cursor-default">
<div className="flex items-baseline gap-1">
<span className="text-4xl lg:text-5xl font-semibold text-[#85AFAF] number-counter group-hover:scale-110 transition-transform origin-left" data-target="85">85</span>
<span className="text-2xl font-medium text-[#85AFAF]/60">%</span>
</div>
<p className="text-sm text-[#85AFAF]/60 mt-2">Recycled materials</p>
</div>
<div className="group cursor-default">
<div className="flex items-baseline gap-1">
<span className="text-4xl lg:text-5xl font-semibold text-[#85AFAF] number-counter group-hover:scale-110 transition-transform origin-left" data-target="12">12</span>
<span className="text-2xl font-medium text-[#85AFAF]/60">k</span>
</div>
<p className="text-sm text-[#85AFAF]/60 mt-2">Garments upcycled</p>
</div>
<div className="group cursor-default">
<div className="flex items-baseline gap-1">
<span className="text-4xl lg:text-5xl font-semibold text-[#85AFAF] number-counter group-hover:scale-110 transition-transform origin-left" data-target="2.4">2.4</span>
<span className="text-2xl font-medium text-[#85AFAF]/60">M</span>
</div>
<p className="text-sm text-[#85AFAF]/60 mt-2">Liters of water saved</p>
</div>
<div className="group cursor-default">
<div className="flex items-baseline gap-1">
<span className="text-4xl lg:text-5xl font-semibold text-[#85AFAF] number-counter group-hover:scale-110 transition-transform origin-left" data-target="0">0</span>
<span className="text-2xl font-medium text-[#85AFAF]/60">%</span>
</div>
<p className="text-sm text-[#85AFAF]/60 mt-2">Landfill waste</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#85AFAF]/5" id="products">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal visible">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#85AFAF] mb-4">Featured Collection</h2>
<p className="text-lg text-[#85AFAF]/60">Handpicked essentials crafted for the conscious wardrobe. Choose your perfect fit.</p>
</div>
<div className="flex gap-3">
<button className="group p-4 rounded-full border border-black/10 text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-all duration-300 magnetic-btn" id="prevSlide">
<svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="group p-4 rounded-full border border-black/10 bg-[#85AFAF] text-[#E9FFFE] hover:bg-[#6d9494] transition-all duration-300 magnetic-btn shadow-lg shadow-[#85AFAF]/20" id="nextSlide">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col hover:border-[#85AFAF]/30 hover:shadow-2xl hover:shadow-[#85AFAF]/10 transition-all duration-500 overflow-hidden reveal bg-white/40 border-black/10 border rounded-[2rem] relative backdrop-blur-sm">
<div className="relative aspect-[4/5] overflow-hidden bg-[#85AFAF]/5">
<img alt="Daily Tee" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be28f836-c582-4c9c-b567-02a9fb033703_800w.jpg"/>
<div className="absolute top-4 left-4 z-10">
<span className="px-4 py-1.5 rounded-full bg-[#E9FFFE]/95 backdrop-blur text-[#85AFAF] text-xs font-semibold uppercase tracking-wide border border-black/10 shadow-sm">Best Seller</span>
</div>
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="p-3 rounded-full bg-[#E9FFFE]/95 backdrop-blur text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-colors border border-black/10 shadow-sm">
<svg className="lucide lucide-heart w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>
<div className="flex flex-col flex-1 pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-3 items-start justify-between">
<div className="">
<h3 className="text-xl font-semibold text-[#85AFAF]">The Daily Tee</h3>
<p className="text-sm text-[#85AFAF]/60 mt-1">Organic cotton, boxy fit</p>
</div>
<span className="text-xl font-bold text-[#85AFAF]">$55</span>
</div>
<div className="mt-auto space-y-5">
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-[#85AFAF]/70 uppercase tracking-wider">Select Size</span>
<a className="hover:underline text-xs text-[#85AFAF]" href="#">Size Guide</a>
</div>
<div aria-label="Sizes" className="flex flex-wrap gap-x-2 gap-y-2" role="group">
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">XS</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">S</button>
<button className="w-9 h-9 rounded-full border border-[#85AFAF] flex items-center justify-center text-[11px] font-bold text-[#E9FFFE] bg-[#85AFAF] shadow-md shadow-[#85AFAF]/20 transition-all">M</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">L</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">XL</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">2XL</button>
<button className="flex text-[11px] hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all font-medium text-[#85AFAF]/70 w-9 h-9 border-black/10 border rounded-full items-center justify-center">3XL</button>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-[#85AFAF] text-[#E9FFFE] font-medium text-sm hover:bg-[#6d9494] transition-all shadow-lg shadow-[#85AFAF]/20 flex items-center justify-center gap-2 group-hover:translate-y-0">
<svg className="lucide lucide-shopping-bag w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    Add to Bag
                                </button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white/40 backdrop-blur-sm rounded-[2rem] border border-black/10 hover:border-[#85AFAF]/30 hover:shadow-2xl hover:shadow-[#85AFAF]/10 transition-all duration-500 overflow-hidden reveal stagger-1">
<div className="relative aspect-[4/5] overflow-hidden bg-[#85AFAF]/5">
<img alt="Linen Shirt" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="p-3 rounded-full bg-[#E9FFFE]/95 backdrop-blur text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-colors border border-black/10 shadow-sm">
<svg className="lucide lucide-heart w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-2 bg-[#E9FFFE]/90 backdrop-blur px-3 py-1.5 rounded-full w-fit mx-auto border border-black/10 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
<span className="text-xs font-medium text-[#85AFAF]">Low Stock</span>
</div>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="text-xl font-semibold text-[#85AFAF]">Linen Air Shirt</h3>
<p className="text-sm text-[#85AFAF]/60 mt-1">Breathable, natural dye</p>
</div>
<span className="text-xl font-bold text-[#85AFAF]">$64</span>
</div>
<div className="mt-auto space-y-5">
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-xs font-semibold text-[#85AFAF]/70 uppercase tracking-wider">Select Size</span>
<a className="text-xs text-[#85AFAF] hover:underline" href="#">Size Guide</a>
</div>
<div className="flex flex-wrap gap-2">
<button className="w-9 h-9 rounded-full border border-black/5 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/30 bg-[#85AFAF]/5 cursor-not-allowed relative overflow-hidden" disabled="">XS<div className="absolute inset-0 border-t border-black/10 -rotate-45 top-1/2"></div></button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">S</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">M</button>
<button className="w-9 h-9 rounded-full border border-[#85AFAF] flex items-center justify-center text-[11px] font-bold text-[#E9FFFE] bg-[#85AFAF] shadow-md shadow-[#85AFAF]/20 transition-all">L</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">XL</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">2XL</button>
<button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[11px] font-medium text-[#85AFAF]/70 hover:border-[#85AFAF] hover:text-[#85AFAF] hover:bg-[#85AFAF]/5 transition-all">3XL</button>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-[#85AFAF] text-[#E9FFFE] font-medium text-sm hover:bg-[#6d9494] transition-all shadow-lg shadow-[#85AFAF]/20 flex items-center justify-center gap-2">
<svg className="lucide lucide-shopping-bag w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    Add to Bag
                                </button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white/40 backdrop-blur-sm rounded-[2rem] border border-black/10 hover:border-[#85AFAF]/30 hover:shadow-2xl hover:shadow-[#85AFAF]/10 transition-all duration-500 overflow-hidden reveal stagger-2">
<div className="relative aspect-[4/5] overflow-hidden bg-[#85AFAF]/5">
<img alt="Worker Jacket" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/347780e6-360f-45ad-874b-e851c25fb638_800w.jpg"/>
<div className="absolute top-4 left-4 z-10">
<span className="px-4 py-1.5 rounded-full bg-[#85AFAF] text-[#E9FFFE] text-xs font-semibold uppercase tracking-wide shadow-lg">Limited</span>
</div>
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<button className="p-3 rounded-full bg-[#E9FFFE]/95 backdrop-blur text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-colors border border-black/10 shadow-sm">
<svg className="lucide lucide-heart w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>
<div className="flex flex-col flex-1 pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-3 items-start justify-between">
<div>
<h3 className="text-xl font-semibold text-[#85AFAF]">Utility Casual Cap</h3>
<p className="text-sm text-[#85AFAF]/60 mt-1">100% organic cotton</p>
</div>
<span className="text-xl font-bold text-[#85AFAF]">$28</span>
</div>
<div className="mt-auto space-y-5">
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-[#85AFAF]/70 uppercase tracking-wider">Select Size</span>
<div className="flex items-center gap-1.5 text-xs text-[#85AFAF]/80">
<svg className="lucide lucide-sliders-horizontal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
                                            Adjustable Strap
                                        </div>
</div>
<div className="flex flex-wrap gap-2 gap-x-2 gap-y-2">
<button className="h-9 px-5 rounded-full border border-[#85AFAF] flex items-center justify-center text-[11px] font-semibold text-[#E9FFFE] bg-[#85AFAF] shadow-md shadow-[#85AFAF]/20 transition-all cursor-default">One Size</button>
</div>
</div>
<button className="hover:bg-[#6d9494] transition-all shadow-[#85AFAF]/20 flex gap-2 text-sm font-medium text-[#E9FFFE] bg-[#85AFAF] w-full rounded-xl pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
<svg className="lucide lucide-shopping-bag w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    Add to Bag
                                    <span className="opacity-70 font-normal text-xs uppercase tracking-wide ml-1">· Soft Blue Green</span>
</button>
</div>
</div>
</div>
</div>

<div className="text-center mt-20 reveal">
<button className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-black/10 text-[#85AFAF] text-base font-medium hover:bg-[#85AFAF] hover:text-[#E9FFFE] hover:shadow-xl hover:shadow-[#85AFAF]/20 transition-all magnetic-btn bg-white/30 backdrop-blur-sm">
                        View Complete Collection
                        <svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden pt-24 pb-24 relative" id="impact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#85AFAF] mb-4">Our Impact</h2>
<p className="text-lg text-[#85AFAF]/60 max-w-2xl mx-auto">Every purchase contributes to a more sustainable future</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-[#E9FFFE] rounded-[2rem] p-8 border border-[#85AFAF]/10 hover:border-[#85AFAF]/30 hover:shadow-xl hover:shadow-[#85AFAF]/10 transition-all duration-500 reveal hover-lift">
<div className="w-16 h-16 rounded-2xl bg-[#85AFAF]/10 flex items-center justify-center mb-6 group-hover:bg-[#85AFAF] group-hover:text-[#E9FFFE] transition-colors">
<svg className="lucide lucide-droplets w-8 h-8 text-[#85AFAF] group-hover:text-[#E9FFFE]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#85AFAF] mb-3">Water Conservation</h3>
<p className="text-base text-[#85AFAF]/60 leading-relaxed">We use closed-loop filtration systems saving 90% water compared to traditional dyeing methods.</p>
</div>

<div className="group bg-[#E9FFFE] rounded-[2rem] p-8 border border-[#85AFAF]/10 hover:border-[#85AFAF]/30 hover:shadow-xl hover:shadow-[#85AFAF]/10 transition-all duration-500 reveal hover-lift stagger-1">
<div className="w-16 h-16 rounded-2xl bg-[#85AFAF]/10 flex items-center justify-center mb-6 group-hover:bg-[#85AFAF] group-hover:text-[#E9FFFE] transition-colors">
<svg className="lucide lucide-package w-8 h-8 text-[#85AFAF] group-hover:text-[#E9FFFE]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#85AFAF] mb-3">Plastic-Free Packaging</h3>
<p className="text-base text-[#85AFAF]/60 leading-relaxed">From factory to your door, we use corn-starch bags and recycled paper exclusively.</p>
</div>

<div className="group bg-[#E9FFFE] rounded-[2rem] p-8 border border-[#85AFAF]/10 hover:border-[#85AFAF]/30 hover:shadow-xl hover:shadow-[#85AFAF]/10 transition-all duration-500 reveal hover-lift stagger-2">
<div className="w-16 h-16 rounded-2xl bg-[#85AFAF]/10 flex items-center justify-center mb-6 group-hover:bg-[#85AFAF] group-hover:text-[#E9FFFE] transition-colors">
<svg className="lucide lucide-heart-handshake w-8 h-8 text-[#85AFAF] group-hover:text-[#E9FFFE]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#85AFAF] mb-3">Fair Labor Practices</h3>
<p className="text-base text-[#85AFAF]/60 leading-relaxed">We pay 3x the local minimum wage and ensure safe working conditions for all workers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#85AFAF]/5 relative overflow-hidden">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/487c5fe6-c753-4fc0-9646-2666928b7dc8_1600w.png)] bg-auto absolute top-0 right-0 bottom-0 left-0 opacity-20"></div>
<div className="sm:px-6 lg:px-8 reveal text-center max-w-4xl mr-auto ml-auto pr-4 pl-4 relative">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#85AFAF] mb-6">Join the Movement</h2>
<p className="text-lg text-[#85AFAF]/60 mb-10">Get early access to drops and sustainability reports</p>
<form className="relative max-w-lg mx-auto group">
<input className="w-full h-16 pl-6 pr-40 rounded-full bg-[#E9FFFE] border-2 border-[#85AFAF]/20 text-[#85AFAF] placeholder-[#85AFAF]/40 focus:outline-none focus:border-[#85AFAF] transition-colors text-base" placeholder="Enter your email" type="email"/>
<button className="absolute right-2 top-2 h-12 px-6 rounded-full btn-primary text-[#E9FFFE] font-medium text-sm magnetic-btn">
                        Subscribe
                    </button>
</form>
<div className="flex opacity-0 mix-blend-darken mt-12 gap-x-4 gap-y-4 justify-center">
<a className="p-3 rounded-full border border-[#85AFAF]/20 text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-colors magnetic-btn" href="#">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-3 rounded-full border border-[#85AFAF]/20 text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-colors magnetic-btn" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="p-3 rounded-full border border-[#85AFAF]/20 text-[#85AFAF] hover:bg-[#85AFAF] hover:text-[#E9FFFE] transition-colors magnetic-btn" href="#">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-[#E9FFFE] border-[#85AFAF]/10 border-t pt-16 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{backgroundColor: '#000000'}}>
<div className="pt-16 pb-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex gap-3 mb-6 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-medium text-[#E9FFFE] uppercase tracking-wide">Street Turn</span>
<div className="hidden sm:block h-3 w-px bg-[#85AFAF]/30 mx-3"></div>
<span className="hidden sm:block text-xs font-medium text-[#85AFAF] tracking-widest uppercase opacity-90">Sustainability with Style</span>
<div className="ml-3 relative w-8 h-8 rounded-full overflow-hidden border border-[#85AFAF]/30 bg-[#E9FFFE]">
<img alt="Street Turn Logo" className="object-top w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd960a1f-a813-4c95-8c96-759ba9a5272d_1600w.png"/>
</div>
</div>
<p className="text-[#85AFAF]/60 text-sm mb-8 max-w-sm leading-relaxed">
                            Curating sustainable fashion for the modern conscious consumer. Join our movement towards a
                            zero-waste future.
                        </p>
<div className="flex gap-4">
<a className="text-[#85AFAF]/60 hover:text-[#E9FFFE] transition-colors" href="#">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="text-[#85AFAF]/60 hover:text-[#E9FFFE] transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg>
</a>
<a className="text-[#85AFAF]/60 hover:text-[#E9FFFE] transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
</path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<div>
<h4 className="text-[#E9FFFE] text-xs font-semibold uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-[#85AFAF]/60">
<li><a className="hover:text-[#85AFAF] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#85AFAF] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#85AFAF] transition-colors" href="#">Press</a></li>
<li><a className="hover:text-[#85AFAF] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-[#E9FFFE] text-xs font-semibold uppercase tracking-widest mb-6">Newsletter</h4>
<form className="flex flex-col gap-3">
<input className="bg-white/5 border border-[#85AFAF]/20 rounded px-4 py-2 text-sm text-[#E9FFFE] placeholder-[#85AFAF]/30 focus:outline-none focus:border-[#85AFAF] transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-[#85AFAF] hover:bg-[#6d9494] text-[#E9FFFE] text-xs font-medium uppercase tracking-widest py-2.5 rounded transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-[#85AFAF]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#85AFAF]/50 uppercase tracking-wider">
<p>© 2024 Street Turn. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#85AFAF]/80 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#85AFAF]/80 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</div>
</footer>

<button className="absolute bottom-8 right-8 p-4 rounded-full bg-[#85AFAF] text-[#E9FFFE] shadow-lg shadow-[#85AFAF]/30 transition-all duration-300 z-50 hover:bg-[#6d9494] magnetic-btn" id="backToTop">
<svg className="lucide lucide-arrow-up w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>


    </>
  );
}
