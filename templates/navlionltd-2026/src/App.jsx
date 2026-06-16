import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // 1. Enhanced Parallax Logic
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const parallaxImages = document.querySelectorAll('.parallax-img');
            
            parallaxImages.forEach(img => {
                const rect = img.parentElement.getBoundingClientRect();
                const speed = img.getAttribute('data-speed') || 0.2;
                
                // Only animate if in view
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const distance = (window.innerHeight - rect.top) * speed;
                    img.style.transform = `translateY(${distance}px) scale(1.1)`;
                }
            });
        }

        // 2. Interactive Spotlight Background
        const spotlight = document.getElementById('spotlight');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            spotlight.style.setProperty('--mouse-x', `${x}px`);
            spotlight.style.setProperty('--mouse-y', `${y}px`);
        });

        // 3. Back to Top Logic
        const backToTopBtn = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            updateParallax();
            
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Routing Logic
        function switchPage(pageId) {
            document.querySelectorAll('.page-section').forEach(p => {
                p.classList.remove('active');
            });
            
            const selected = document.getElementById(pageId);
            if(selected) {
                selected.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('mobile-menu').classList.add('hidden');

                // Reset animations
                const animatedElements = selected.querySelectorAll('.fade-in-up');
                animatedElements.forEach(el => {
                    el.classList.remove('visible');
                });
                
                // Re-trigger observer
                setTimeout(() => {
                    observeElements();
                }, 100);
            }
        }

        // Intersection Observer
        function observeElements() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        }

        // Initial Load
        document.addEventListener('DOMContentLoaded', () => {
            observeElements();
            updateParallax();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spotlight-bg" id="spotlight"></div>

<nav className="fixed w-full z-50 top-0 backdrop-blur-xl border-b border-white/[0.08] bg-[#02040a]/80 transition-all duration-300">
<div className="container mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 group select-none cursor-pointer" href="#" onclick="switchPage('home')">
<div className="relative w-10 h-10 flex items-center justify-center bg-[#00284B] border border-white/10 rounded-lg group-hover:border-cyan-400 transition-all duration-500 shadow-lg shadow-black/50">
<i className="w-5 h-5 text-white" data-lucide="ship"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors">NAVLION</span>
<span className="text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-cyan-400 transition-colors font-semibold">Tunisia</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.05]">
<button className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#00284B] transition-all" onclick="switchPage('home')">Home</button>

<div className="relative group">
<button className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 group-hover:text-white group-hover:bg-[#00284B] transition-all flex items-center gap-1">
                        Services <i className="w-3 h-3 mt-0.5" data-lucide="chevron-down"></i>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible transform -translate-y-2 transition-all duration-200 z-50 overflow-hidden">
<button className="block w-full text-left px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-[#00284B] transition-colors border-b border-white/5" onclick="switchPage('general-services')">General Services</button>
<button className="block w-full text-left px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-[#00284B] transition-colors border-b border-white/5" onclick="switchPage('general-ship-agent')">General Ship Agent</button>
<button className="block w-full text-left px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-[#00284B] transition-colors border-b border-white/5" onclick="switchPage('full-owners-protecting')">Owners Protecting Agent</button>
<button className="block w-full text-left px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-[#00284B] transition-colors" onclick="switchPage('chartering')">Chartering &amp; Shipbrokers</button>
</div>
</div>
<button className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#00284B] transition-all" onclick="switchPage('branches')">Ports</button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#00284B] transition-all" onclick="switchPage('contact')">Contact</button>
</div>

<button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#00284B] text-white border border-white/10 rounded-lg hover:bg-cyan-600 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 text-xs font-bold tracking-wide uppercase group" onclick="switchPage('contact')">
<span>Contact</span>
<i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>

<button className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-[#02040a] border-b border-white/10 p-6 md:hidden shadow-2xl max-h-[80vh] overflow-y-auto" id="mobile-menu">
<div className="flex flex-col space-y-4 text-base font-light text-zinc-300">
<button className="text-left hover:text-cyan-400 transition-colors py-2" onclick="switchPage('home')">Home</button>
<div className="pl-4 border-l border-white/10 space-y-3">
<span className="text-xs uppercase text-zinc-500 font-bold tracking-widest">Services</span>
<button className="block text-left hover:text-cyan-400 transition-colors text-sm" onclick="switchPage('general-services')">General Services</button>
<button className="block text-left hover:text-cyan-400 transition-colors text-sm" onclick="switchPage('general-ship-agent')">General Ship Agent</button>
<button className="block text-left hover:text-cyan-400 transition-colors text-sm" onclick="switchPage('full-owners-protecting')">Owners Protecting Agent</button>
<button className="block text-left hover:text-cyan-400 transition-colors text-sm" onclick="switchPage('chartering')">Chartering &amp; Brokers</button>
</div>
<button className="text-left hover:text-cyan-400 transition-colors py-2" onclick="switchPage('branches')">Ports</button>
<button className="text-left hover:text-cyan-400 transition-colors py-2" onclick="switchPage('contact')">Contact</button>
</div>
</div>
</nav>
<main className="relative w-full z-10">

<div className="page-section active" id="home">

<header className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-[#02040a]/90 via-[#02040a]/60 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]/50 z-10"></div>

<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/2882857/2882857-uhd_2560_1440_24fps.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
</div>
<div className="container mx-auto px-6 relative z-20 mt-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-[#00284B]/40 backdrop-blur-md mb-8 fade-in-up hover:border-cyan-400 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs text-cyan-200 font-semibold tracking-widest uppercase">Tunisia's Modern Ship Agency</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.95] fade-in-up" style={{animationDelay: '0.1s'}}>
                            Precision in every <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-zinc-500">port of call.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-200 font-light max-w-2xl mb-12 leading-relaxed fade-in-up shadow-black drop-shadow-lg" style={{animationDelay: '0.2s'}}>
                            Your reliable partner for <strong>Husbandry</strong>, <strong>Chartering</strong>, and <strong>Logistics</strong> across all Tunisian commercial ports. Experience the new standard of maritime agency.
                        </p>
<div className="flex flex-col sm:flex-row gap-5 fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="px-8 py-4 bg-[#00284B] text-white border border-white/10 text-sm font-semibold rounded hover:bg-cyan-600 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,40,75,0.5)]" onclick="switchPage('branches')">
                                View Port Network <i className="w-4 h-4" data-lucide="map-pin"></i>
</button>
<button className="px-8 py-4 bg-white/5 border border-white/20 text-white text-sm font-semibold rounded hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 backdrop-blur-sm" onclick="switchPage('contact')">
                                Agency Details <i className="w-4 h-4" data-lucide="file-text"></i>
</button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 animate-bounce cursor-pointer" onclick="window.scrollBy({top: window.innerHeight, behavior: 'smooth'})">
<span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
<i className="w-4 h-4 text-white" data-lucide="arrow-down"></i>
</div>
</header>

<section className="relative bg-[#02040a]">

<div className="relative h-[80vh] w-full overflow-hidden flex items-center">
<div className="parallax-wrapper absolute inset-0 z-0">
<img alt="Ship Bridge Crew" className="parallax-img" data-speed="0.2" src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#00284B]/90 via-[#02040a]/70 to-transparent z-10"></div>
<div className="container mx-auto px-6 relative z-20">
<div className="max-w-2xl fade-in-up">
<h2 className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Mission</h2>
<h3 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">Global Service,<br/>Local Excellence.</h3>
<p className="text-lg text-zinc-200 leading-relaxed border-l-4 border-cyan-500 pl-6 bg-black/20 backdrop-blur-sm py-4 rounded-r-lg">
                                Navlion Shipping LTD is dedicated to providing excellent services to our clients worldwide. Our reputation is built on transparent vessel transaction records, our extensive network of agency offices throughout Tunisia, and providing critical advice to clients for urgent vessel issues.
                            </p>
</div>
</div>
</div>

<div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-end">
<div className="parallax-wrapper absolute inset-0 z-0">
<img alt="Ship Containers" className="parallax-img" data-speed="0.15" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-l from-[#00284B]/90 via-[#02040a]/70 to-transparent z-10"></div>
<div className="container mx-auto px-6 relative z-20 flex justify-end">
<div className="max-w-2xl text-right fade-in-up">
<h2 className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Values</h2>
<h3 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">Mastery, Trust,<br/>Relationships.</h3>
<p className="text-lg text-zinc-200 leading-relaxed border-r-4 border-cyan-500 pr-6 bg-black/20 backdrop-blur-sm py-4 rounded-l-lg">
                                Our values give clarity about who we are. Each value highlights a different facet of how we build mastery, trust, and positive relationships in the maritime sector. We believe in being the "eyes and ears" for our partners on the ground.
                            </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#02040a]">
<div className="container mx-auto px-6 relative z-10">
<div className="mb-16 text-center fade-in-up">
<h2 className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-2">Capabilities</h2>
<h3 className="text-4xl font-medium text-white">Industries We Proudly Service</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-in-up">

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Steel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Steel Loading</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Heavy lift &amp; specialized handling.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Bunker" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Bunker Supplies</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Fuel &amp; lubricant coordination.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Grain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Grain Handling</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Efficient bulk discharge.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Yacht" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Yacht Services</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Premium marina agency.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Forestry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Forestry</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Timber and wood products.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Hull" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Hull Cleaning</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Underwater maintenance.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Container" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Project Cargo</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Oversized &amp; containerized.</p>
</div>
</div>

<div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
<img alt="Medical" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 img-card-overlay flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Medical &amp; Evac</h4>
<p className="text-xs text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Urgent crew assistance.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="general-services">
<header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div className="parallax-wrapper absolute inset-0 z-0">
<img alt="General Logistics Services" className="parallax-img" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-[#00284B]/70 z-10"></div>
<div className="container mx-auto px-6 relative z-20 text-center">
<span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block fade-in-up">What We Offer</span>
<h1 className="text-5xl md:text-7xl font-medium text-white mb-6 fade-in-up">General Services</h1>
</div>
</header>
<div className="container mx-auto px-6 py-20 relative">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">

<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="ship-wheel"></i>
<h3 className="text-white font-medium mb-2">Ship Agency Services</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="package-search"></i>
<h3 className="text-white font-medium mb-2">Ship Supply Services</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="container"></i>
<h3 className="text-white font-medium mb-2">Project Cargo Handling</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="globe"></i>
<h3 className="text-white font-medium mb-2">Freight Forwarding</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="drill"></i>
<h3 className="text-white font-medium mb-2">Onshore &amp; Offshore Project Support</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="warehouse"></i>
<h3 className="text-white font-medium mb-2">Warehousing &amp; Transportation</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="droplet"></i>
<h3 className="text-white font-medium mb-2">Bunker Coordination &amp; Supplies</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="users"></i>
<h3 className="text-white font-medium mb-2">Crew Visa, Clearance &amp; Transport</h3>
</div>
<div className="p-6 rounded-xl bg-[#00284B]/20 border border-white/10 hover:bg-[#00284B]/40 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
<i className="text-cyan-400 w-6 h-6 mb-4" data-lucide="bed"></i>
<h3 className="text-white font-medium mb-2">Hotel Stay &amp; Air Tickets</h3>
</div>
</div>
</div>
</div>

<div className="page-section" id="general-ship-agent">
<header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div className="parallax-wrapper absolute inset-0 z-0">
<img alt="General Ship Agent Bulk Carrier" className="parallax-img" src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-[#00284B]/70 z-10"></div>
<div className="container mx-auto px-6 relative z-20 text-center">
<span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block fade-in-up">Maritime Expertise</span>
<h1 className="text-5xl md:text-7xl font-medium text-white mb-6 fade-in-up">General Ship Agent</h1>
</div>
</header>
<div className="container mx-auto px-6 py-24 relative">
<div className="max-w-4xl mx-auto fade-in-up">
<p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-8">
                        Our Shipping Agency Department of our firm has extensive experience as ship agents of all types of vessels and traffics, <span className="text-white font-medium">bulk carriers, chemical tankers, general cargo</span>, etc. We have the resources and contacts to provide the vessel with any kind of service or assistance.
                    </p>
<div className="p-8 border-l-4 border-cyan-500 bg-[#00284B]/20 rounded-r-xl">
<p className="text-lg text-white font-medium italic">
                            "Our expertise and track record in dry bulk cargo means our vessel owners and charterers have complete peace of mind that their cargo will be handled professionally and safely."
                        </p>
</div>
</div>
</div>
</div>

<div className="page-section" id="full-owners-protecting">
<header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div className="parallax-wrapper absolute inset-0 z-0">
<img alt="Ship Captain Supervision" className="parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-[#00284B]/70 z-10"></div>
<div className="container mx-auto px-6 relative z-20 text-center">
<span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block fade-in-up">Supervision &amp; Safety</span>
<h1 className="text-5xl md:text-7xl font-medium text-white mb-6 fade-in-up">Full Owners Protecting Agent</h1>
</div>
</header>
<div className="container mx-auto px-6 py-24 relative">
<div className="grid lg:grid-cols-2 gap-16 items-start fade-in-up">
<div className="space-y-6 text-zinc-300 font-light text-lg leading-relaxed">
<p>
                            There are times when you need to rely on a preferred ship agent to act as your eyes and ears on the spot. That’s where <span className="text-white font-medium">Navlion</span> protective agency package come in.
                        </p>
<p className="text-white font-medium">
                            NAVLION protecting agency service delivers peace of mind for your vessel calls at all ports and terminals in TUNISIA.
                        </p>
</div>
<div className="bg-[#00284B]/20 border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-cyan-500/30 transition-colors">
<h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
<i className="text-cyan-400" data-lucide="shield-check"></i> Scope of Services
                        </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-500 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-zinc-300 text-sm">Checking proforma D/A submitted by the head agent.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-500 mt-1 shrink-0" data-lucide="check"></i>
<span className="text-zinc-300 text-sm">Receipt of owners’ funds and payment to head agents.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="page-section" id="chartering">
<header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div className="parallax-wrapper absolute inset-0 z-0">
<img alt="Chartering Business Meeting" className="parallax-img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-[#00284B]/70 z-10"></div>
<div className="container mx-auto px-6 relative z-20 text-center">
<span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block fade-in-up">Commercial Services</span>
<h1 className="text-5xl md:text-7xl font-medium text-white mb-6 fade-in-up">Chartering &amp; Shipbrokers</h1>
</div>
</header>
<div className="container mx-auto px-6 py-24 relative">
<div className="max-w-4xl mx-auto fade-in-up">
<div className="grid md:grid-cols-2 gap-8 mt-12">
<div className="bg-[#00284B]/20 border border-white/10 p-6 rounded-xl hover:bg-[#00284B]/40 transition-colors">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="handshake"></i>
<h3 className="text-white font-bold mb-2">Network</h3>
<p className="text-zinc-300 text-sm">We get support from much of the first class charterers, traders and ship owners.</p>
</div>
<div className="bg-[#00284B]/20 border border-white/10 p-6 rounded-xl hover:bg-[#00284B]/40 transition-colors">
<i className="w-8 h-8 text-cyan-400 mb-4" data-lucide="scale"></i>
<h3 className="text-white font-bold mb-2">Commitment</h3>
<p className="text-zinc-300 text-sm">As a well experienced broker company, we are strongly committed to providing quality services.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="branches">
<div className="h-24 bg-gradient-to-b from-[#02040a] to-transparent"></div>
<section className="container mx-auto px-6 py-16 md:py-24">
<div className="mb-16 fade-in-up">
<h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3">Our Network</h2>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Tunisian Port Coverage</h1>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-6 rounded-xl border border-white/10 bg-[#00284B]/20 hover:bg-[#00284B]/40 transition-all group fade-in-up hover:-translate-y-2">
<div className="flex justify-between items-start mb-6">
<span className="text-3xl font-bold text-white/20 group-hover:text-cyan-500/20 transition-colors">01</span>
<span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-zinc-400">TN RDS</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Radès</h3>
<p className="text-xs text-zinc-300 leading-relaxed mb-4 min-h-[40px]">Main container terminal and Ro-Ro port. The commercial heart of Tunisia.</p>
<div className="w-full h-[1px] bg-white/10 mb-4"></div>
<div className="flex items-center gap-2 text-xs text-cyan-400">
<i className="w-3 h-3" data-lucide="check-circle"></i> <span>Container / RoRo</span>
</div>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-[#00284B]/20 hover:bg-[#00284B]/40 transition-all group fade-in-up hover:-translate-y-2" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start mb-6">
<span className="text-3xl font-bold text-white/20 group-hover:text-cyan-500/20 transition-colors">02</span>
<span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-zinc-400">TN BIZ</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Bizerte</h3>
<p className="text-xs text-zinc-300 leading-relaxed mb-4 min-h-[40px]">Strategic location for bunkers, tankers, cement, and shipyard repairs.</p>
<div className="w-full h-[1px] bg-white/10 mb-4"></div>
<div className="flex items-center gap-2 text-xs text-cyan-400">
<i className="w-3 h-3" data-lucide="check-circle"></i> <span>Tankers / Dry Dock</span>
</div>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-[#00284B]/20 hover:bg-[#00284B]/40 transition-all group fade-in-up hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-start mb-6">
<span className="text-3xl font-bold text-white/20 group-hover:text-cyan-500/20 transition-colors">03</span>
<span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-zinc-400">TN SFA</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Sfax</h3>
<p className="text-xs text-zinc-300 leading-relaxed mb-4 min-h-[40px]">Major hub for grain, olive oil exports, and general cargo operations.</p>
<div className="w-full h-[1px] bg-white/10 mb-4"></div>
<div className="flex items-center gap-2 text-xs text-cyan-400">
<i className="w-3 h-3" data-lucide="check-circle"></i> <span>Bulk / General</span>
</div>
</div>
<div className="p-6 rounded-xl border border-white/10 bg-[#00284B]/20 hover:bg-[#00284B]/40 transition-all group fade-in-up hover:-translate-y-2" style={{animationDelay: '0.3s'}}>
<div className="flex justify-between items-start mb-6">
<span className="text-3xl font-bold text-white/20 group-hover:text-cyan-500/20 transition-colors">04</span>
<span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-zinc-400">TN SUS</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Sousse</h3>
<p className="text-xs text-zinc-300 leading-relaxed mb-4 min-h-[40px]">Versatile port for general cargo and project cargo handling.</p>
<div className="w-full h-[1px] bg-white/10 mb-4"></div>
<div className="flex items-center gap-2 text-xs text-cyan-400">
<i className="w-3 h-3" data-lucide="check-circle"></i> <span>Project / General</span>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="contact">
<div className="h-24 bg-gradient-to-b from-[#02040a] to-transparent"></div>
<section className="container mx-auto px-6 py-16 md:py-24">
<div className="max-w-3xl mb-16 fade-in-up">
<h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3">Get in Touch</h2>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Direct Access</h1>
<p className="text-xl text-zinc-400 font-light leading-relaxed">
                        Connect directly with the department you need.
                    </p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-16">

<a className="group p-8 rounded-2xl border border-white/10 bg-[#00284B]/20 hover:bg-[#00284B]/60 hover:border-cyan-500/50 transition-all fade-in-up hover:-translate-y-1" href="mailto:ops@navlion.tn">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="ship-wheel"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Operations Dept.</h3>
<p className="text-sm text-zinc-400 mb-6">For PDAs, vessel updates, husbandry requests, and immediate port info.</p>
<div className="flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300">
                            ops@navlion.tn <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i>
</div>
</a>

<a className="group p-8 rounded-2xl border border-white/10 bg-[#00284B]/20 hover:bg-[#00284B]/60 hover:border-cyan-500/50 transition-all fade-in-up hover:-translate-y-1" href="mailto:management@navlion.tn" style={{animationDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Management</h3>
<p className="text-sm text-zinc-400 mb-6">For commercial agreements, partnerships, and escalation.</p>
<div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                            management@navlion.tn <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i>
</div>
</a>

<a className="group p-8 rounded-2xl border border-white/10 bg-[#00284B]/20 hover:bg-[#00284B]/60 hover:border-cyan-500/50 transition-all fade-in-up hover:-translate-y-1" href="mailto:finance@navlion.tn" style={{animationDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="receipt"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Finance / DA</h3>
<p className="text-sm text-zinc-400 mb-6">For invoicing, disbursement accounts settling, and remittance details.</p>
<div className="flex items-center text-sm font-medium text-emerald-400 group-hover:text-emerald-300">
                            finance@navlion.tn <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
</section>
</div>
</main>

<button className="back-to-top fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#00284B] border border-white/20 text-white shadow-lg shadow-black/50 hover:bg-cyan-600 hover:scale-110 transition-all" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>

<footer className="border-t border-white/[0.08] bg-[#02040a] pt-20 pb-10 relative z-50">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center bg-[#00284B] border border-white/10 rounded-lg">
<i className="w-6 h-6 text-white" data-lucide="ship"></i>
</div>
<span className="text-2xl font-bold tracking-tight text-white">NAVLION</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                        The modern standard for shipping agency services in Tunisia.
                    </p>
</div>

<div>
<h3 className="text-white font-medium mb-6">Company</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><button className="hover:text-cyan-400 transition-colors" onclick="switchPage('home')">Home</button></li>
<li><button className="hover:text-cyan-400 transition-colors" onclick="switchPage('contact')">Contact</button></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8">
<p className="text-xs text-zinc-600">© 2024 Navlion Shipping Agency.</p>
</div>
</div>
</footer>



    </>
  );
}
