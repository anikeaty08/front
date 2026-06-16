import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add slight delay to outline for fluid feel
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Interactive Elements Hover Effect for Cursor
        const interactiveElements = document.querySelectorAll('a, button, .glass-card, .cursor-pointer');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(30, 41, 59, 0.05)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'border-slate-200');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-slate-200');
                navbar.classList.add('border-transparent');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<nav className="fixed w-full z-50 transition-all duration-300 py-6 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="text-2xl tracking-tighter text-slate-800 z-50 font-light" href="#">
                THE LIFE <span className="font-medium">DIVINE</span>
</a>
<div className="hidden md:flex items-center gap-8 glass-panel px-8 py-3 rounded-full">
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#philosophy">Philosophy</a>
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#spaces">Spaces</a>
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#amenities">Amenities</a>
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#community">Community</a>
</div>

<a className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors shadow-lg shadow-slate-200" href="tel:0970-3254321">
                Inquire Now
            </a>
<button className="md:hidden text-slate-800">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="aurora-bg"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfbf7]/20 to-[#fdfbf7]"></div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
<div className="mb-6 flex justify-center reveal">
<span className="px-4 py-1 rounded-full border border-slate-200 bg-white/50 text-xs tracking-widest uppercase text-slate-500 backdrop-blur-md shadow-sm">
                    Collective Living Reimagined
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-slate-800 font-normal tracking-tight leading-[1.1] mb-8 reveal" style={{transitionDelay: '100ms'}}>
                Where Community <br/> Meets <span className="italic text-purple-400">Consciousness</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                A sanctuary for the modern soul. Experience a new paradigm of living that blends private luxury with profound connection in the heart of nature.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal" style={{transitionDelay: '300ms'}}>
<button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 shadow-xl shadow-purple-200">
<span className="relative z-10 flex items-center gap-2">
                        Explore Spaces
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</span>
<div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<button className="group px-8 py-4 rounded-full border border-slate-300 text-slate-600 font-medium hover:bg-white hover:border-slate-400 transition-all bg-white/30 backdrop-blur-sm">
                    View Membership
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-slate-400" icon="lucide:chevron-down" width="24"></iconify-icon>
</div>
</header>

<section className="py-32 px-6 relative overflow-hidden" id="philosophy">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">

<div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200/40 rounded-full blur-[80px]"></div>
<h2 className="text-4xl md:text-6xl text-slate-800 mb-8 tracking-tight leading-tight">
                    Designed for <br/> <span className="text-gradient-pastel italic serif">Soulful Connection</span>
</h2>
<div className="space-y-6 text-lg text-slate-500 font-light">
<p>
                        We believe that the environment shapes the spirit. The Life Divine is more than a residence; it is a curated ecosystem designed to elevate your daily experience.
                    </p>
<p>
                        By merging biophilic design with communal intention, we've created spaces that breathe. Here, privacy is respected, but isolation is obsolete. Engage when you wish, retreat when you need.
                    </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8">
<div className="border-l border-slate-200 pl-6">
<span className="block text-3xl font-serif text-slate-800 mb-1">45%</span>
<span className="text-sm text-slate-400 uppercase tracking-widest">Green Space</span>
</div>
<div className="border-l border-slate-200 pl-6">
<span className="block text-3xl font-serif text-slate-800 mb-1">100+</span>
<span className="text-sm text-slate-400 uppercase tracking-widest">Curated Events</span>
</div>
</div>
</div>
<div className="relative reveal h-[600px] w-full group" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-orange-100 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/40 shadow-2xl shadow-purple-900/5">
<img alt="Philosophy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>

<div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/80">
<p className="text-slate-800 font-serif italic text-lg">"Architecture is the art of how to waste space."</p>
<p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">- Philip Johnson</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 relative" id="spaces">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-blue-50 to-purple-50 opacity-50"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<span className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2 block">The Architecture</span>
<h2 className="text-3xl md:text-5xl text-slate-800 tracking-tight serif">Sanctuaries for Every Mood</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-md transition-all">
<iconify-icon icon="lucide:arrow-left"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-md transition-all">
<iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer md:col-span-1 reveal shadow-lg shadow-slate-200/50">
<img className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<h3 className="text-2xl text-white font-serif mb-1">Private Suites</h3>
<p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 max-w-xs">Minimalist havens featuring sustainable materials and sound-isolated meditation corners.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer md:col-span-1 reveal shadow-lg shadow-slate-200/50" style={{transitionDelay: '100ms'}}>
<img className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<h3 className="text-2xl text-white font-serif mb-1">The Great Hall</h3>
<p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 max-w-xs">A communal living room bathed in natural light, perfect for evening gatherings.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer md:col-span-1 reveal shadow-lg shadow-slate-200/50" style={{transitionDelay: '200ms'}}>
<img className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<h3 className="text-2xl text-white font-serif mb-1">Wellness Atrium</h3>
<p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 max-w-xs">Hydrotherapy pools and yoga decks surrounded by indoor vertical gardens.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="amenities">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl text-slate-800 serif mb-4">Curated Amenities</h2>
<p className="text-slate-500 font-light">Everything you need to thrive, right at your doorstep.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-8 rounded-2xl reveal group cursor-pointer bg-white/60">
<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-200 group-hover:text-purple-600 transition-colors">
<iconify-icon icon="lucide:flower-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-slate-800 font-medium mb-2">Organic Gardens</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Permaculture gardens providing fresh produce for our community kitchen.</p>
</div>

<div className="glass-card p-8 rounded-2xl reveal group cursor-pointer bg-white/60" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-200 group-hover:text-orange-600 transition-colors">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-slate-800 font-medium mb-2">Chef's Kitchen</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Professional grade equipment for communal feasts and cooking workshops.</p>
</div>

<div className="glass-card p-8 rounded-2xl reveal group cursor-pointer bg-white/60" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-200 group-hover:text-emerald-700 transition-colors">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-slate-800 font-medium mb-2">Focus Pods</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Soundproofed co-working spaces with ergonomic design and fiber internet.</p>
</div>

<div className="glass-card p-8 rounded-2xl reveal group cursor-pointer bg-white/60" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-200 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-slate-800 font-medium mb-2">Sensory Deprivation</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Float tanks and meditation rooms designed for deep restoration.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-200 bg-white/50" id="community">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-4 reveal">
<h2 className="text-4xl text-slate-800 serif mb-6">Voices of the <br/> <span className="text-purple-400">Collective</span></h2>
<p className="text-slate-500 mb-8 font-light">Living here isn't just about sharing a roof—it's about sharing a life, dreams, and growth.</p>
<div className="flex gap-4">
<div className="flex -space-x-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-slate-800 font-medium">150+ Residents</span>
<span className="text-xs text-slate-500">Global Community</span>
</div>
</div>
</div>
<div className="lg:col-span-8 overflow-x-auto no-scrollbar flex gap-6 snap-x snap-mandatory pb-8 reveal" style={{transitionDelay: '200ms'}}>

<div className="min-w-[350px] md:min-w-[400px] glass-panel p-8 rounded-2xl snap-center relative bg-white/80">
<iconify-icon className="text-purple-200 absolute top-6 right-6" icon="lucide:quote" width="48"></iconify-icon>
<div className="flex items-center gap-4 mb-6">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-slate-800 font-serif">Elena R.</h4>
<span className="text-xs text-purple-400 uppercase tracking-wider">Digital Nomad</span>
</div>
</div>
<p className="text-slate-600 font-light italic">"I came for the aesthetics, but stayed for the soul. The Life Divine has completely transformed how I view productivity and rest. It's magic."</p>
</div>

<div className="min-w-[350px] md:min-w-[400px] glass-panel p-8 rounded-2xl snap-center relative bg-white/80">
<iconify-icon className="text-purple-200 absolute top-6 right-6" icon="lucide:quote" width="48"></iconify-icon>
<div className="flex items-center gap-4 mb-6">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-slate-800 font-serif">Marcus T.</h4>
<span className="text-xs text-emerald-400 uppercase tracking-wider">Architect</span>
</div>
</div>
<p className="text-slate-600 font-light italic">"The attention to detail in the shared spaces is unparalleled. It fosters interaction without forcing it. A masterpiece of social design."</p>
</div>

<div className="min-w-[350px] md:min-w-[400px] glass-panel p-8 rounded-2xl snap-center relative bg-white/80">
<iconify-icon className="text-purple-200 absolute top-6 right-6" icon="lucide:quote" width="48"></iconify-icon>
<div className="flex items-center gap-4 mb-6">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-slate-800 font-serif">Sarah L.</h4>
<span className="text-xs text-orange-400 uppercase tracking-wider">Wellness Coach</span>
</div>
</div>
<p className="text-slate-600 font-light italic">"Finding a place that values silence as much as celebration is rare. This community holds space for everything."</p>
</div>
</div>
</div>
</div>
</section>

<section className="h-[500px] w-full relative overflow-hidden transition-all duration-700 group border-y border-slate-200">

<div className="absolute inset-0 bg-[#f1f5f9] flex items-center justify-center overflow-hidden">

<svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64748b" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>

<div className="relative z-10 flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-4 h-4 bg-purple-400 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-purple-400 rounded-full relative z-10 shadow-[0_0_20px_rgba(168,85,247,0.4)]"></div>
<div className="mt-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-xs font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl border border-slate-100">
                    THE LOCATION
                </div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none map-overlay"></div>
<div className="absolute bottom-10 left-10 z-10 max-w-sm pointer-events-none">
<h3 className="text-slate-800 text-2xl serif mb-2">Connected to Nature &amp; City</h3>
<p className="text-slate-500 text-sm">Nestled between the Redwoods and the Urban Core. 15 mins to downtown, 0 mins to peace.</p>
</div>
</section>

<section className="py-32 px-6" id="membership">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl text-slate-800 serif tracking-tight">Join the Collective</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-10 rounded-3xl border border-white/60 bg-white/60 relative group reveal">
<h3 className="text-xl text-slate-800 serif mb-2">The Seeker</h3>
<div className="text-3xl font-light text-slate-600 mb-6">$150<span className="text-sm text-slate-400">/mo</span></div>
<p className="text-sm text-slate-500 mb-8 border-b border-slate-200 pb-8">Access to communal areas, events, and day-use of coworking spaces.</p>
<ul className="space-y-4 mb-10 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-purple-400" icon="lucide:check"></iconify-icon> Wellness Center Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-400" icon="lucide:check"></iconify-icon> Community Events</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-400" icon="lucide:check"></iconify-icon> High-Speed WiFi</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-300 text-slate-600 text-sm hover:bg-slate-800 hover:text-white transition-all">Select Plan</button>
</div>

<div className="glass-card p-10 rounded-3xl border border-purple-200 bg-gradient-to-b from-purple-50 to-white relative group reveal scale-105 z-10 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)]" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-300 to-indigo-300 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-lg">Most Popular</div>
<h3 className="text-xl text-slate-900 serif mb-2">The Resident</h3>
<div className="text-3xl font-light text-slate-900 mb-6">$2,400<span className="text-sm text-slate-500">/mo</span></div>
<p className="text-sm text-slate-500 mb-8 border-b border-purple-100 pb-8">Private suite living with full access to all amenities and services.</p>
<ul className="space-y-4 mb-10 text-sm text-slate-700">
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="lucide:check"></iconify-icon> Private Furnished Suite</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="lucide:check"></iconify-icon> Weekly Housekeeping</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="lucide:check"></iconify-icon> Chef-Prepared Dinners</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="lucide:check"></iconify-icon> 24/7 Concierge</li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-purple-600 transition-all shadow-lg shadow-purple-200">Apply for Residency</button>
</div>

<div className="glass-card p-10 rounded-3xl border border-white/60 bg-white/60 relative group reveal" style={{transitionDelay: '200ms'}}>
<h3 className="text-xl text-slate-800 serif mb-2">The Visionary</h3>
<div className="text-3xl font-light text-slate-600 mb-6">$450<span className="text-sm text-slate-400">/mo</span></div>
<p className="text-sm text-slate-500 mb-8 border-b border-slate-200 pb-8">For creators who need a dedicated studio and deep focus environment.</p>
<ul className="space-y-4 mb-10 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-purple-400" icon="lucide:check"></iconify-icon> Dedicated Studio Desk</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-400" icon="lucide:check"></iconify-icon> Meeting Room Credits</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-400" icon="lucide:check"></iconify-icon> Storage Lockers</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-300 text-slate-600 text-sm hover:bg-slate-800 hover:text-white transition-all">Select Plan</button>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-2">
<a className="text-3xl tracking-tighter text-slate-800 font-serif mb-6 block" href="#">THE LIFE DIVINE</a>
<p className="text-slate-500 max-w-sm mb-8 font-light">
                        Reimagining modern existence through the power of conscious community and intentional design.
                    </p>
<div className="relative max-w-xs">
<input className="w-full bg-white border border-slate-200 rounded-full px-6 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-purple-300 transition-colors shadow-sm" placeholder="Join our newsletter" type="email"/>
<button className="absolute right-2 top-2 p-1.5 bg-slate-900 rounded-full text-white hover:bg-purple-400 transition-colors">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>
<div>
<h4 className="text-slate-800 font-medium mb-6">Explore</h4>
<ul className="space-y-4 text-slate-500 text-sm">
<li><a className="hover:text-purple-500 transition-colors" href="#">Our Philosophy</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">Residences</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">Amenities</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">Events Calendar</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-800 font-medium mb-6">Connect</h4>
<ul className="space-y-4 text-slate-500 text-sm">
<li><a className="hover:text-purple-500 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-purple-500 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-xs text-slate-500">
<p>© 2024 The Life Divine. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-800" href="#">Privacy Policy</a>
<a className="hover:text-slate-800" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
