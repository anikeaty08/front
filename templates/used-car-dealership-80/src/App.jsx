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
            
            // Initialize Lucide Icons
            lucide.createIcons({
                attrs: {
                    'stroke-width': 1.5
                }
            });

            // --- 1. Navbar Scroll Effect ---
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-neutral-950/80', 'border-white/5');
                    navbar.classList.remove('bg-white/[0.02]', 'border-transparent');
                } else {
                    navbar.classList.add('bg-white/[0.02]', 'border-transparent');
                    navbar.classList.remove('bg-neutral-950/80', 'border-white/5');
                }
            });

            // --- 2. Hero 3D Parallax Effect ---
            const heroSection = document.getElementById('hero-section');
            const carWrapper = document.getElementById('hero-car');
            const elements3D = document.querySelectorAll('#hero-3d-wrapper > div');

            heroSection.addEventListener('mousemove', (e) => {
                if(window.scrollY > 300) return; 

                const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
                
                carWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(50px)`;
                
                elements3D.forEach((el, index) => {
                    if(el.id === 'hero-car') return;
                    const factor = index % 2 === 0 ? 60 : 80;
                    el.style.transform = `rotateY(${xAxis/2}deg) rotateX(${yAxis/2}deg) translateZ(${factor}px)`;
                });
            });

            heroSection.addEventListener('mouseleave', () => {
                carWrapper.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0px)`;
                elements3D.forEach(el => {
                    if(el.id === 'hero-car') return;
                    const z = el.style.transform.match(/translateZ\((.*?)\)/);
                    if(z) el.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(${z[1] || '0px'})`;
                });
            });

            // --- 3. Scroll Reveal & Counters Observer ---
            const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        
                        // Handle counters
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            if(!counter.classList.contains('counted')) {
                                counter.classList.add('counted');
                                const target = +counter.getAttribute('data-target');
                                const duration = 2000;
                                const step = target / (duration / 16);
                                let current = 0;
                                
                                const updateCounter = () => {
                                    current += step;
                                    if(current < target) {
                                        counter.innerText = Math.ceil(current);
                                        requestAnimationFrame(updateCounter);
                                    } else {
                                        counter.innerText = target;
                                    }
                                };
                                updateCounter();
                            }
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-[16px] border-b transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex flex-col items-center justify-center gap-0.5 group" href="#">
<div className="relative">
<span className="text-3xl font-semibold tracking-tighter text-white italic pr-1 leading-none">RPM</span>
<div className="absolute bottom-1 left-0 w-full h-0.5 bg-red-600 transform -skew-x-12 group-hover:bg-red-500 transition-colors shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
</div>
<span className="text-[10px] font-semibold tracking-[0.2em] text-red-500 uppercase leading-none mt-1">Motorz</span>
</a>
<div className="hidden md:flex gap-8 text-base font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#inventory">Inventory</a>
<a className="hover:text-white transition-colors" href="#financing">Financing</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<button className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">
                Book Appointment
            </button>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden bg-neutral-950 flex items-center justify-center [perspective:1000px]" id="hero-section">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
<div className="w-[80vw] h-[80vw] rounded-full bg-red-600/20 blur-[120px]"></div>
<div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)]"></div>
</div>

<div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center h-full [transform-style:preserve-3d]" id="hero-3d-wrapper">
<div className="text-center mb-10 transform translate-z-10" style={{transform: 'translateZ(50px)'}}>

<p className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">Race • Power • Money</p>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight bg-[linear-gradient(to_right,#ffffff,#a3a3a3)] bg-clip-text text-transparent mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
                    Performance. Style.<br/>Trusted Deals.
                </h1>
<p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                    Experience a new standard of automotive excellence. Get approved today and drive your dream car.
                </p>
</div>

<div className="relative w-full max-w-4xl h-64 md:h-[400px] [transform-style:preserve-3d] transition-transform duration-200 ease-out" id="hero-car">
<img alt="Luxury Car" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80" src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'}}/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>

<div className="absolute top-10 left-10 bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-4 py-2 rounded-lg text-sm font-normal flex items-center gap-2" style={{transform: 'translateZ(60px)'}}>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Available Now
                </div>
<div className="absolute bottom-20 right-10 bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-4 py-2 rounded-lg text-sm font-normal" style={{transform: 'translateZ(80px)'}}>
                    0% Financing Available
                </div>
</div>

<div className="mt-12 flex gap-4 transform translate-z-10 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]" style={{transform: 'translateZ(30px)'}}>
<a className="bg-white text-black px-6 py-3 rounded-full text-base font-medium hover:bg-neutral-200 transition-all flex items-center gap-2" href="#gallery">
                    View Gallery <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-white/10 transition-all" href="#financing">
                    Get Approved
                </a>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 animate-bounce">
<span className="text-sm uppercase tracking-widest">Scroll</span>
<i className="w-5 h-5" data-lucide="mouse"></i>
</div>
</header>

<section className="py-24 bg-neutral-950 border-y border-white/5" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="transition-all duration-700 ease-out text-center mb-16" data-reveal="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Our Premium Collection</h2>
<p className="text-neutral-400 text-lg max-w-xl mx-auto">Explore our wide selection of thoroughly inspected, high-quality pre-owned vehicles. Fresh arrivals daily on our Brampton lot.</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 transition-all duration-700 ease-out space-y-4 gap-x-4 gap-y-4" data-reveal="" style={{transitionDelay: '0.2s'}}>

<div className="break-inside-avoid rounded-2xl overflow-hidden group bg-neutral-900 border border-white/5">
<img alt="Blue Sports Car Rear" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="break-inside-avoid rounded-2xl overflow-hidden group bg-neutral-900 border border-white/5">
<img alt="Black Mercedes" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="break-inside-avoid overflow-hidden group bg-neutral-900 border-white/5 border rounded-2xl">
</div>

<div className="break-inside-avoid rounded-2xl overflow-hidden group bg-neutral-900 border border-white/5">
<img alt="White SUV Rear" className="transform group-hover:scale-105 transition-transform duration-700 w-full object-cover" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="break-inside-avoid rounded-2xl overflow-hidden group bg-neutral-900 border border-white/5">
<img alt="Black SUV" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="break-inside-avoid rounded-2xl overflow-hidden group bg-neutral-900 border border-white/5">
<img alt="Blue Sedan" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="break-inside-avoid rounded-2xl overflow-hidden group bg-neutral-900 border border-white/5">
</div>

<div className="break-inside-avoid rounded-2xl overflow-hidden group bg-neutral-900 border border-white/5">
<img alt="Dealership Lot" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="transition-all duration-700 ease-out" data-reveal="">
<h2 className="text-3xl font-medium tracking-tight mb-6">Redefining the Car Buying Experience.</h2>
<p className="text-neutral-400 text-base leading-relaxed mb-8">
                    RPM Motorz is a pre-owned car dealership which provides wide selection of used cars with best deals in GTA no matter what your credit score is we got everyone approved. Visit us today to grab your deal.
                </p>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-[16px] border border-white/5 flex items-center justify-center text-red-500">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-base font-normal mb-1">Trusted Dealership</h3>
<p className="text-sm text-neutral-500">OMVIC Registered &amp; UCDA Member</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 transition-all duration-700 ease-out" data-reveal="" style={{transitionDelay: '0.2s'}}>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
<span className="text-4xl font-medium tracking-tight text-white mb-2 counter" data-target="1500">12</span>
<span className="text-sm text-neutral-400 uppercase tracking-wider">Vehicles Sold</span>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
<span className="text-4xl font-medium tracking-tight text-white mb-2 counter" data-target="98">1</span>
<span className="text-sm text-neutral-400 uppercase tracking-wider">% Approvals</span>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center col-span-2 relative overflow-hidden group">
<div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-4xl font-medium tracking-tight text-white mb-2 counter" data-target="2000">16</span><span className="text-4xl font-medium tracking-tight text-red-500 absolute ml-16 mt-0">+</span>
<span className="text-sm text-neutral-400 uppercase tracking-wider mt-2">Happy Customers</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5" id="inventory">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-reveal="">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Featured Inventory</h2>
<p className="text-neutral-400 text-base">Hand-picked premium vehicles ready for delivery.</p>
</div>
<a className="text-sm font-normal text-white flex items-center gap-1 hover:text-red-500 transition-colors" href="#">
                    View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1000px]">

<div className="group bg-white/[0.02] backdrop-blur-[16px] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer opacity-0 translate-y-8 ease-out [transform-style:preserve-3d]" data-reveal="">
<div className="relative h-48 overflow-hidden bg-neutral-800">
<img alt="Tesla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/[0.02] backdrop-blur-[16px] border border-green-500/20 px-2 py-1 rounded text-xs font-normal text-green-400">Electric</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-normal text-lg mb-1">2024 Tesla Model 3</h3>
<p className="text-sm text-neutral-500">Long Range AWD</p>
</div>
<span className="font-medium text-xl tracking-tight text-white">$45,999</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-sm text-neutral-400 flex items-center gap-1"><i className="w-4 h-4" data-lucide="ruler"></i> 12,000 km</span>
<span className="text-sm text-red-400 font-normal">Financing from $199/bw</span>
</div>
</div>
</div>

<div className="group bg-white/[0.02] backdrop-blur-[16px] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer opacity-0 translate-y-8 ease-out [transform-style:preserve-3d]" data-reveal="" style={{transitionDelay: '0.1s'}}>
<div className="relative h-48 overflow-hidden bg-neutral-800">
<img alt="Porsche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/[0.02] backdrop-blur-[16px] border border-white/20 px-2 py-1 rounded text-xs font-normal text-white">Performance</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-normal text-lg mb-1">2023 Porsche Macan</h3>
<p className="text-sm text-neutral-500">GTS AWD</p>
</div>
<span className="font-medium text-xl tracking-tight text-white">$82,500</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-sm text-neutral-400 flex items-center gap-1"><i className="w-4 h-4" data-lucide="ruler"></i> 24,500 km</span>
<span className="text-sm text-red-400 font-normal">Financing Available</span>
</div>
</div>
</div>

<div className="group bg-white/[0.02] backdrop-blur-[16px] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer opacity-0 translate-y-8 ease-out [transform-style:preserve-3d]" data-reveal="" style={{transitionDelay: '0.2s'}}>
<div className="relative h-48 overflow-hidden bg-neutral-800">
<img alt="Lexus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/[0.02] backdrop-blur-[16px] border border-white/20 px-2 py-1 rounded text-xs font-normal text-white">Luxury</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-normal text-lg mb-1">2025 Lexus IS350</h3>
<p className="text-sm text-neutral-500">F-Sport Series</p>
</div>
<span className="font-medium text-xl tracking-tight text-white">$55,900</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-sm text-neutral-400 flex items-center gap-1"><i className="w-4 h-4" data-lucide="ruler"></i> 5,000 km</span>
<span className="text-sm text-red-400 font-normal">Financing from $249/bw</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative" id="financing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-reveal="">
<h2 className="text-3xl font-medium tracking-tight mb-4">Premium Dealership Services</h2>
<p className="text-neutral-400 text-base max-w-lg mx-auto">Comprehensive solutions to make your vehicle purchase seamless and enjoyable.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1000px]">
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 ease-out" data-reveal="" style={{transform: 'translateZ(20px)'}}>
<i className="w-8 h-8 text-red-500 mb-4" data-lucide="wallet"></i>
<h3 className="font-normal text-lg mb-2">Financing &amp; Loans</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Fast approvals with competitive rates, regardless of your credit history. We work with major banks.</p>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 ease-out" data-reveal="" style={{transitionDelay: '0.1s', transform: 'translateZ(20px)'}}>
<i className="w-8 h-8 text-red-500 mb-4" data-lucide="refresh-cw"></i>
<h3 className="font-normal text-lg mb-2">Trade-Ins Accepted</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Get maximum market value for your current vehicle to put towards your new premium ride.</p>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 ease-out" data-reveal="" style={{transitionDelay: '0.2s', transform: 'translateZ(20px)'}}>
<i className="w-8 h-8 text-red-500 mb-4" data-lucide="shield-check"></i>
<h3 className="font-normal text-lg mb-2">Quality Pre-Owned</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Every vehicle undergoes a rigorous multi-point inspection and detailing process before sale.</p>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 ease-out" data-reveal="" style={{transitionDelay: '0.3s', transform: 'translateZ(20px)'}}>
<i className="w-8 h-8 text-red-500 mb-4" data-lucide="headphones"></i>
<h3 className="font-normal text-lg mb-2">Customer Support</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Dedicated after-sales support to ensure your long-term satisfaction and peace of mind.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-10 opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col md:flex-row justify-between items-start md:items-end gap-4" data-reveal="">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Client Experiences</h2>
<div className="flex items-center gap-2">
<span className="text-yellow-500 flex text-base">
<i className="w-4 h-4 fill-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-500" data-lucide="star"></i>
</span>
<span className="text-base font-normal">4.1 / 5 Google Rating</span>
<span className="text-sm text-neutral-500">(44 Reviews)</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white/[0.02] backdrop-blur-[16px] border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" onclick="document.getElementById('review-track').scrollBy({left: -300, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white/[0.02] backdrop-blur-[16px] border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" onclick="document.getElementById('review-track').scrollBy({left: 300, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-6 max-w-7xl mx-auto [&amp;::-webkit-scrollbar]:h-1 [&amp;::-webkit-scrollbar-thumb]:bg-white/10 [&amp;::-webkit-scrollbar-thumb]:rounded-full" id="review-track">

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl relative hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-shadow">
<i className="w-8 h-8 text-white/10 absolute top-4 right-4" data-lucide="quote"></i>
<div className="flex text-yellow-500 mb-4">
<i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">"Great buying car from them. Good welcoming staff. Very transparent and low price deal."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-normal">NS</div>
<span className="text-sm font-normal text-white">Nishan Singh</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl relative hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-shadow">
<i className="w-8 h-8 text-white/10 absolute top-4 right-4" data-lucide="quote"></i>
<div className="flex text-yellow-500 mb-4">
<i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">"Very good dealership they take customers as their family. Best experience in Brampton."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-normal">JD</div>
<span className="text-sm font-normal text-white">Jaskaran Dhaliwal</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl relative hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-shadow">
<i className="w-8 h-8 text-white/10 absolute top-4 right-4" data-lucide="quote"></i>
<div className="flex text-yellow-500 mb-4">
<i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">"Best loan approval rates in whole GTA. They really work hard to get you approved."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-normal">JS</div>
<span className="text-sm font-normal text-white">Jagmeet Singh</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl relative hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-shadow">
<i className="w-8 h-8 text-white/10 absolute top-4 right-4" data-lucide="quote"></i>
<div className="flex text-yellow-500 mb-4">
<i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">"Got approved within 1 hour. Best dealership experience. Highly recommend to everyone."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-normal">TG</div>
<span className="text-sm font-normal text-white">Tushar Goyal</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-6 rounded-2xl relative hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-shadow">
<i className="w-8 h-8 text-white/10 absolute top-4 right-4" data-lucide="quote"></i>
<div className="flex text-yellow-500 mb-4">
<i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i><i className="w-3 h-3 fill-yellow-500" data-lucide="star"></i>
</div>
<p className="text-base text-neutral-300 leading-relaxed mb-6">"Great deals and honest team. Always recommend this place for used cars."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-normal">AS</div>
<span className="text-sm font-normal text-white">Avtar Singh</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative">
<div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-reveal="">
<h2 className="text-3xl font-medium tracking-tight mb-4">Why Choose RPM Motorz</h2>
</div>
<div className="flex flex-wrap justify-center gap-4 opacity-0 translate-y-8 transition-all duration-700 ease-out" data-reveal="">
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all cursor-default">
<i className="w-4 h-4 text-red-500" data-lucide="tag"></i> <span className="text-base font-normal">Competitive Prices</span>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all cursor-default">
<i className="w-4 h-4 text-red-500" data-lucide="zap"></i> <span className="text-base font-normal">Fast Financing Approvals</span>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all cursor-default">
<i className="w-4 h-4 text-red-500" data-lucide="eye"></i> <span className="text-base font-normal">Transparent Deals</span>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all cursor-default">
<i className="w-4 h-4 text-red-500" data-lucide="users"></i> <span className="text-base font-normal">Friendly Staff</span>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all cursor-default">
<i className="w-4 h-4 text-red-500" data-lucide="map-pin"></i> <span className="text-base font-normal">Trusted by GTA Customers</span>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="opacity-0 translate-y-8 transition-all duration-700 ease-out" data-reveal="">
<h2 className="text-3xl font-medium tracking-tight mb-6">Visit Our Showroom</h2>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 h-[300px] rounded-2xl overflow-hidden relative mb-6">
<img alt="Map" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_40px_-10px_rgba(220,38,38,0.4)] mb-2 animate-bounce">
<i className="w-6 h-6 text-white" data-lucide="map-pin"></i>
</div>
<span className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 px-3 py-1 rounded text-sm font-normal">243 Queen St E, Brampton, ON L6W 2B5</span>
</div>
</div>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-4 group" href="tel:+19053348686">
<div className="w-10 h-10 rounded-full bg-white/[0.02] backdrop-blur-[16px] border border-white/5 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm text-neutral-500">Call Us</p>
<p className="text-base font-normal text-white group-hover:text-red-500 transition-colors">(905) 334-8686</p>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/[0.02] backdrop-blur-[16px] border border-white/5 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<p className="text-sm text-neutral-500">Hours</p>
<p className="text-base font-normal text-white">Opens 9:30 a.m.</p>
</div>
</div>
</div>
</div>
<div className="bg-white/[0.02] backdrop-blur-[16px] border border-white/5 p-8 rounded-2xl opacity-0 translate-y-8 transition-all duration-700 ease-out" data-reveal="" style={{transitionDelay: '0.2s'}}>
<h3 className="text-xl font-normal tracking-tight mb-6">Request Information</h3>
<form className="flex flex-col gap-4 relative">
<div className="grid grid-cols-2 gap-4">
<input className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-neutral-600" placeholder="First Name" type="text"/>
<input className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-neutral-600" placeholder="Last Name" type="text"/>
</div>
<input className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-neutral-600" placeholder="Email Address" type="email"/>
<input className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-neutral-600" placeholder="Phone Number" type="tel"/>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all text-neutral-400 appearance-none">
<option value="">I'm interested in...</option>
<option value="financing">Financing Approval</option>
<option value="inventory">Specific Vehicle</option>
<option value="tradein">Trade-in Valuation</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<button className="mt-2 bg-white text-black font-normal text-base py-3 rounded-lg hover:bg-neutral-200 transition-colors w-full" type="button">
                        Submit Request
                    </button>
<p className="text-xs text-neutral-600 text-center mt-2">By submitting, you agree to our privacy policy and terms.</p>
</form>
</div>
</div>
</section>

<footer className="bg-black py-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

<a className="flex flex-col items-start gap-0.5 opacity-50 hover:opacity-100 transition-opacity" href="#">
<div className="relative">
<span className="text-2xl font-semibold tracking-tighter text-white italic pr-1 leading-none">RPM</span>
<div className="absolute bottom-1 left-0 w-full h-0.5 bg-red-600 transform -skew-x-12"></div>
</div>
<span className="text-[8px] font-semibold tracking-[0.2em] text-red-500 uppercase leading-none mt-1">Motorz</span>
</a>
<p className="text-sm text-neutral-500">© 2024 RPM Motorz. All rights reserved. Brampton, ON.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-neutral-500 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
