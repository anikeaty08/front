import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Blur Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#0A0A0A]/80', 'backdrop-blur-xl', 'border-white/10', 'py-4');
                navbar.classList.remove('bg-transparent', 'border-transparent', 'py-6');
            } else {
                navbar.classList.add('bg-transparent', 'border-transparent', 'py-6');
                navbar.classList.remove('bg-[#0A0A0A]/80', 'backdrop-blur-xl', 'border-white/10', 'py-4');
            }
        }, { passive: true });

        // Hero Parallax Effect
        const parallaxBg = document.getElementById('parallax-bg');
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if(scrolled < window.innerHeight) {
                parallaxBg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
            }
        }, { passive: true });

        // Advanced Scroll Reveal Animation (Observer)
        const revealElements = document.querySelectorAll('.reveal');
        const revealImages = document.querySelectorAll('.reveal-image');
        
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => revealOnScroll.observe(el));
        revealImages.forEach(el => revealOnScroll.observe(el));

        // Repaired Magnetic Buttons Effect
        const magneticWraps = document.querySelectorAll('.magnetic-wrap');
        
        magneticWraps.forEach(wrap => {
            const btn = wrap.querySelector('.magnetic-btn');
            if(!btn) return;
            
            wrap.addEventListener('mousemove', (e) => {
                const position = wrap.getBoundingClientRect();
                // Fix: Uses clientX/clientY instead of pageX/pageY to prevent scrolling offset bugs
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
            });
            
            wrap.addEventListener('mouseout', () => {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#D9281C]/10 blur-[120px] rounded-full mix-blend-screen animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#D9281C]/5 blur-[120px] rounded-full mix-blend-screen animate-blob animation-delay-2000"></div>
<div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[#D9281C]/5 blur-[100px] rounded-full mix-blend-screen animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 top-0 transition-all duration-500 py-6 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-12">

<a className="flex items-center gap-3 group reveal" href="#">
<div className="flex flex-col justify-center">
<span className="text-2xl font-medium tracking-tight leading-none text-[#FAFAFA] group-hover:text-[#D9281C] transition-colors duration-300">MARUTAMA</span>
<span className="text-base font-normal tracking-tight leading-none text-[#FAFAFA] mt-1 pl-6 group-hover:text-[#D9281C] transition-colors duration-300">RA-MEN</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 reveal delay-100">
<a className="text-base font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="#about">Our Story</a>
<a className="text-base font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="#menu">Menu</a>
<a className="text-base font-normal text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors duration-300" href="#contact">Locations</a>
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center justify-center px-6 py-2.5 text-base font-normal text-[#0A0A0A] bg-[#FAFAFA] hover:bg-[#D9281C] hover:text-[#FAFAFA] rounded-full transition-colors duration-300" href="#contact">
                            Book a Table
                        </a>
</div>
</div>

<div className="md:hidden flex items-center reveal delay-100">
<button className="text-[#FAFAFA] hover:text-[#D9281C] transition-colors duration-300">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat scale-[1.05] will-change-transform z-[-1]" id="parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&amp'}}>

<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
</div>
<div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20">
<div className="max-w-3xl">
<div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/80 border border-white/10 text-[#FAFAFA] mb-8 backdrop-blur-md hover:bg-[#1A1A1A] transition-colors duration-300 cursor-default">
<i className="text-[#D9281C] w-4 h-4" data-lucide="flame" strokeWidth="1.5"></i>
<span className="text-xs font-normal tracking-wide uppercase">100% Pure Chicken Broth</span>
</div>
<h1 className="reveal delay-100 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-[#FAFAFA] mb-6 leading-[1.05]">
                    The Authentic <br/>
                    Taste of <span className="text-[#D9281C] inline-block relative">
                        Toripaitan.
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D9281C] to-transparent rounded-full opacity-50 blur-[2px]"></div>
</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-[#A3A3A3] mb-10 max-w-xl font-normal leading-relaxed">
                    Experience our signature rich, creamy chicken broth simmered to perfection. Served with handmade noodles and fresh Aosa seaweed straight from Japan.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-5 inline-block">
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-[#FAFAFA] bg-[#D9281C] hover:bg-[#b01e14] rounded-full transition-all duration-300 hover:shadow-[0_10px_40px_rgba(217,40,28,0.3)] group" href="#menu">
                            View Menu
                            <i className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal delay-400">
<span className="text-xs font-normal tracking-widest uppercase text-[#A3A3A3]">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-[#A3A3A3] to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[#FAFAFA] animate-[scroll_2s_cubic-bezier(0.16,1,0.3,1)_infinite] origin-top" style={{transform: 'translateY(-100%)', animation: 'scrollDown 2s infinite'}}></div>
</div>
</div>
<style>
            @keyframes scrollDown {
                0% { transform: translateY(-100%); }
                50% { transform: translateY(0); }
                100% { transform: translateY(100%); }
            }
        </style>
</section>

<section className="py-24 lg:py-32 relative bg-transparent" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 relative z-10">
<h2 className="text-[#D9281C] text-xs font-medium tracking-widest uppercase mb-4 reveal">Our Philosophy</h2>
<h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#FAFAFA] mb-8 reveal delay-100">Mastering the Art <br/>of Japanese Ramen.</h3>
<div className="space-y-6 reveal delay-200">
<p className="text-lg text-[#A3A3A3] leading-relaxed">
                            Unlike traditional pork-based tonkotsu, Marutama specializes in Toripaitan—a rich, cloudy chicken broth. We simmer pure chicken bones for over 8 hours to extract a deep, savory umami flavor that is highly satisfying yet remarkably delicate.
                        </p>
<p className="text-lg text-[#A3A3A3] leading-relaxed">
                            Every bowl is a testament to our dedication to authentic Japanese culinary traditions. We utilize only the finest ingredients, freshly crafted hakata-style thin noodles, and our signature Aosa seaweed.
                        </p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 reveal delay-300">
<div className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-[#202020]/80 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#D9281C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D9281C]/20 transition-colors duration-300">
<i className="text-[#D9281C] w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#FAFAFA] font-normal">Zero MSG Added</span>
</div>
<div className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-[#202020]/80 transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#D9281C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D9281C]/20 transition-colors duration-300">
<i className="text-[#D9281C] w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#FAFAFA] font-normal">Handmade Noodles</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative group reveal-image-container">

<div className="absolute -inset-4 bg-[#D9281C]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-screen"></div>
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1A1A1A] border border-white/10 z-10">
<img alt="Marutama Ramen Storefront" className="reveal-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&amp;w=2640&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-80"></div>

<div className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div>
<p className="text-xs text-[#A3A3A3] font-normal uppercase tracking-wider mb-1">Atmosphere</p>
<p className="text-xl font-medium text-[#FAFAFA] tracking-tight">Authentic Setting</p>
</div>
<div className="w-10 h-10 rounded-full bg-[#D9281C] flex items-center justify-center shadow-[0_0_20px_rgba(217,40,28,0.4)]">
<i className="text-[#FAFAFA] w-5 h-5" data-lucide="store" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-transparent relative border-t border-white/5" id="menu">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-[#D9281C] text-xs font-medium tracking-widest uppercase mb-4">Signature Menu</h2>
<h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#FAFAFA] mb-6">Crafted for the Soul</h3>
<p className="text-lg text-[#A3A3A3]">Discover our selection of meticulously prepared ramen bowls and authentic Japanese side dishes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-glow reveal delay-100">
<div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
<img alt="Signature Marutama Ramen" className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
</div>
<div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
<span className="inline-block px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[#FAFAFA] text-xs font-normal rounded-full self-start mb-4 shadow-xl">Signature</span>
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-1">Marutama Ramen</h4>
<p className="text-base font-normal text-[#F5C518] mb-4">Our undeniable classic.</p>
<p className="text-base text-[#A3A3A3] mb-6 flex-grow leading-relaxed">A rich, collagen-packed Toripaitan (chicken) broth simmered for hours, served with our delicate handmade noodles, fresh Aosa seaweed, and tender chicken chashu.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">$15.00</span>
<button className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#FAFAFA] group-hover:bg-[#D9281C] group-hover:border-[#D9281C] transition-all duration-300 transform group-hover:scale-110">
<i className="w-4 h-4" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-glow reveal delay-200">
<div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
<img alt="Aka Ramen" className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
</div>
<div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
<span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[#D9281C] text-xs font-normal rounded-full self-start mb-4 shadow-xl">
<i className="w-3 h-3" data-lucide="flame" strokeWidth="1.5"></i>
                            Spicy
                        </span>
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-1">Aka Ramen</h4>
<p className="text-base font-normal text-[#F5C518] mb-4">A fiery kick of flavor.</p>
<p className="text-base text-[#A3A3A3] mb-6 flex-grow leading-relaxed">Our signature chicken broth infused with a complex blend of seven chili nuts and spices, topped with an exquisitely soft-boiled Ajitama egg.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">$16.50</span>
<button className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#FAFAFA] group-hover:bg-[#D9281C] group-hover:border-[#D9281C] transition-all duration-300 transform group-hover:scale-110">
<i className="w-4 h-4" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-glow reveal delay-300">
<div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
<img alt="Dashimaki Tamago" className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
</div>
<div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
<span className="inline-block px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[#A3A3A3] text-xs font-normal rounded-full self-start mb-4 shadow-xl">Side Dish</span>
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-1">Dashimaki Tamago</h4>
<p className="text-base font-normal text-[#F5C518] mb-4">The perfect side.</p>
<p className="text-base text-[#A3A3A3] mb-6 flex-grow leading-relaxed">A traditional Japanese rolled omelet, expertly crafted with savory dashi stock for a fluffy, melt-in-your-mouth texture.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">$8.00</span>
<button className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#FAFAFA] group-hover:bg-[#D9281C] group-hover:border-[#D9281C] transition-all duration-300 transform group-hover:scale-110">
<i className="w-4 h-4" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-glow reveal delay-400">
<div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
<img alt="Crispy Yaki Gyoza" className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
</div>
<div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
<span className="inline-block px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[#A3A3A3] text-xs font-normal rounded-full self-start mb-4 shadow-xl">Appetizer</span>
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-1">Crispy Yaki Gyoza</h4>
<p className="text-base font-normal text-[#F5C518] mb-4">Golden and savory.</p>
<p className="text-base text-[#A3A3A3] mb-6 flex-grow leading-relaxed">Pan-fried chicken dumplings with a perfectly crisp bottom and a juicy, flavorful center. Served with our house-made dipping sauce.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xl font-medium tracking-tight text-[#FAFAFA]">$9.50</span>
<button className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#FAFAFA] group-hover:bg-[#D9281C] group-hover:border-[#D9281C] transition-all duration-300 transform group-hover:scale-110">
<i className="w-4 h-4" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal inline-block w-full">
<div className="magnetic-wrap inline-block">
<a className="magnetic-btn inline-flex items-center justify-center px-8 py-3.5 text-base font-normal text-[#0A0A0A] bg-[#FAFAFA] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-full transition-all duration-300" href="#">
                        Explore Full Menu
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-transparent pt-24 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">

<div className="relative z-10">
<h2 className="text-[#D9281C] text-xs font-medium tracking-widest uppercase mb-4 reveal">Visit Us</h2>
<h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#FAFAFA] mb-10 reveal delay-100">Reserve a Table or <br/>Get in Touch.</h3>
<div className="space-y-8">
<div className="flex items-start gap-5 reveal delay-200 group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#202020]/80 group-hover:border-[#D9281C]/30 transition-colors duration-300">
<i className="text-[#D9281C] w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight text-[#FAFAFA] mb-1 group-hover:text-[#D9281C] transition-colors duration-300">Downtown Flagship</h4>
<p className="text-base text-[#A3A3A3] leading-relaxed">780 Bidwell St,<br/>Vancouver, BC V6G 2J6</p>
</div>
</div>
<div className="flex items-start gap-5 reveal delay-300 group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#202020]/80 group-hover:border-[#D9281C]/30 transition-colors duration-300">
<i className="text-[#D9281C] w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight text-[#FAFAFA] mb-1 group-hover:text-[#D9281C] transition-colors duration-300">Opening Hours</h4>
<p className="text-base text-[#A3A3A3] leading-relaxed">Mon - Sun<br/>11:30 AM - 10:00 PM</p>
</div>
</div>
<div className="flex items-start gap-5 reveal delay-400 group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#202020]/80 group-hover:border-[#D9281C]/30 transition-colors duration-300">
<i className="text-[#D9281C] w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight text-[#FAFAFA] mb-1 group-hover:text-[#D9281C] transition-colors duration-300">Contact</h4>
<p className="text-base text-[#A3A3A3] leading-relaxed">(604) 688-8837<br/>hello@marutama.ca</p>
</div>
</div>
</div>
</div>

<div className="bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/5 p-8 lg:p-10 rounded-3xl reveal delay-200 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
<h4 className="text-2xl font-medium tracking-tight text-[#FAFAFA] mb-6 relative z-10">Make a Reservation</h4>
<form className="space-y-5 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-normal text-[#A3A3A3]">First Name</label>
<input className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-[#FAFAFA] focus:outline-none focus:border-[#D9281C] focus:ring-1 focus:ring-[#D9281C] transition-all duration-300 placeholder:text-[#A3A3A3]/50 hover:border-white/20" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-normal text-[#A3A3A3]">Last Name</label>
<input className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-[#FAFAFA] focus:outline-none focus:border-[#D9281C] focus:ring-1 focus:ring-[#D9281C] transition-all duration-300 placeholder:text-[#A3A3A3]/50 hover:border-white/20" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-normal text-[#A3A3A3]">Email Address</label>
<input className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-[#FAFAFA] focus:outline-none focus:border-[#D9281C] focus:ring-1 focus:ring-[#D9281C] transition-all duration-300 placeholder:text-[#A3A3A3]/50 hover:border-white/20" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-normal text-[#A3A3A3]">Message / Special Requests</label>
<textarea className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-[#FAFAFA] focus:outline-none focus:border-[#D9281C] focus:ring-1 focus:ring-[#D9281C] transition-all duration-300 placeholder:text-[#A3A3A3]/50 resize-none hover:border-white/20" placeholder="Table for 2, outside seating if possible..." rows="3"></textarea>
</div>

<div className="flex items-start gap-3 pt-2 group/check">
<div className="relative flex items-center mt-0.5">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-[#0A0A0A]/50 checked:border-[#D9281C] checked:bg-[#D9281C] transition-all duration-300 group-hover/check:border-[#D9281C]/50" id="newsletter" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-300 w-3 h-3" data-lucide="check" strokeWidth="2"></i>
</div>
<label className="text-xs text-[#A3A3A3] cursor-pointer select-none leading-relaxed group-hover/check:text-[#FAFAFA] transition-colors duration-300" htmlFor="newsletter">Subscribe to our newsletter for seasonal menu updates and exclusive event invitations.</label>
</div>
<button className="w-full mt-2 bg-[#D9281C] hover:bg-[#b01e14] text-[#FAFAFA] font-normal text-base py-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(217,40,28,0.2)] hover:shadow-[0_6px_20px_rgba(217,40,28,0.4)] hover:-translate-y-0.5 relative overflow-hidden group/btn" type="button">
<span className="relative z-10">Confirm Reservation</span>
<div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1s_forwards]"></div>
</button>
</form>
</div>
</div>

<footer className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 reveal">
<div className="flex items-center gap-3">
<span className="text-base font-medium tracking-tight text-[#FAFAFA]">MARUTAMA</span>
<span className="text-xs text-[#A3A3A3]">© 2024 All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-[#A3A3A3] hover:text-[#FAFAFA] hover:scale-110 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-[#A3A3A3] hover:text-[#FAFAFA] hover:scale-110 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-[#A3A3A3] hover:text-[#FAFAFA] hover:scale-110 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</footer>
</div>
<style>
            @keyframes shimmer {
                100% { transform: skewX(-12deg) translateX(200%); }
            }
        </style>
</section>



    </>
  );
}
