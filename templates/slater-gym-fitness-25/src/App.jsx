import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('mobile-close-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = mobileMenu.classList.contains('invisible');
            if (isHidden) {
                mobileMenu.classList.remove('invisible', 'opacity-0');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('invisible', 'opacity-0');
                document.body.style.overflow = '';
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full z-50 top-0 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-3 group" href="/">
<div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-[0_0_15px_rgba(29,78,216,0.5)]">
<img alt="Slater Gym Logo" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10b60f9a-c1fd-4ddc-831e-3ad411c362c3_3840w.png"/>
</div>
<span className="text-xl font-bold tracking-tight text-white uppercase group-hover:text-blue-500 transition-colors">
                        Slater<span className="text-blue-600">Gym</span>
</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#method">The Method</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#success">Success Stories</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-full hover:bg-blue-600 focus:outline-none shadow-[0_0_20px_rgba(29,78,216,0.3)] hover:shadow-[0_0_30px_rgba(29,78,216,0.5)]" href="#join">
                        Book Assessment
                    </a>
</nav>

<button aria-label="Toggle menu" className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="lg:hidden fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-50 opacity-0 invisible transition-all duration-300" id="mobile-menu">
<div className="flex flex-col h-full p-6">
<div className="flex justify-between items-center mb-8">
<a className="flex items-center gap-3" href="/">
<div className="relative w-8 h-8 rounded-full overflow-hidden border border-white">
<img alt="Slater Gym Logo" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10b60f9a-c1fd-4ddc-831e-3ad411c362c3_3840w.png"/>
</div>
<span className="text-lg font-bold text-white uppercase">Slater<span className="text-blue-600">Gym</span></span>
</a>
<button className="p-2 text-white/60 hover:text-white" id="mobile-close-btn">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<nav className="flex-1 flex flex-col justify-center space-y-8 text-center">
<a className="mobile-link text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#method">The Method</a>
<a className="mobile-link text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#programs">Programs</a>
<a className="mobile-link text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#success">Success Stories</a>
<a className="mobile-link text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#contact">Contact</a>
<a className="mobile-link mt-8 px-8 py-4 text-lg font-bold bg-blue-700 rounded-full text-white shadow-lg shadow-blue-900/50" href="#join">Start Now</a>
</nav>
</div>
</div>
</header>

<main>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40 z-10"></div>
<img alt="Gym Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 relative z-10">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm mb-8 animate-on-scroll" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-blue-200">South Africa's Premier Coaching Facility</span>
</div>

<h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.95] animate-on-scroll" style={{animationDelay: '0.2s'}}>
                        STOP GUESSING.<br/>
<span className="text-gradient">START TRAINING.</span>
</h1>

<p className="text-xl sm:text-2xl text-white/70 max-w-2xl leading-relaxed mb-10 animate-on-scroll" style={{animationDelay: '0.3s'}}>
                        Slater Gym isn't a room full of machines where you're left alone. It's a coached environment built on structure, accountability, and real results.
                    </p>

<div className="flex flex-wrap items-center gap-5 animate-on-scroll" style={{animationDelay: '0.4s'}}>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-700 rounded-full hover:bg-blue-600 hover:scale-105 shadow-[0_0_20px_rgba(29,78,216,0.4)]" href="#join">
                            Book Free Assessment
                            <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-white transition-colors border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40" href="#method">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                            How We Train
                        </a>
</div>

<div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll" style={{animationDelay: '0.6s'}}>
<div>
<p className="text-3xl font-bold text-white tracking-tight">100%</p>
<p className="text-xs text-white/50 uppercase tracking-widest mt-1">Coached Sessions</p>
</div>
<div>
<p className="text-3xl font-bold text-white tracking-tight">3k+</p>
<p className="text-xs text-white/50 uppercase tracking-widest mt-1">Transformations</p>
</div>
<div>
<p className="text-3xl font-bold text-white tracking-tight">4.9</p>
<p className="text-xs text-white/50 uppercase tracking-widest mt-1">Member Rating</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="method">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Most gyms rent you equipment. <span className="text-blue-500">We give you a roadmap.</span></h2>
<p className="text-lg text-white/60 mb-8 leading-relaxed">
                            If you've ever felt lost in a commercial gym, wandered from machine to machine without a plan, or quit because you didn't see results — you're not alone.
                        </p>
<p className="text-lg text-white/80 font-medium mb-8 leading-relaxed border-l-4 border-blue-600 pl-6">
                            At Slater Gym, we remove the guesswork. Every workout is structured. Every movement is coached. Every milestone is tracked.
                        </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 p-2 rounded bg-blue-900/30 text-blue-400 border border-blue-500/20">
<i className="w-5 h-5" data-lucide="clipboard-check"></i>
</div>
<div>
<h4 className="text-white font-semibold text-base mb-1">Structured Programming</h4>
<p className="text-sm text-white/60">No random workouts. Follow a proven periodized plan designed for specific goals.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 p-2 rounded bg-blue-900/30 text-blue-400 border border-blue-500/20">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<h4 className="text-white font-semibold text-base mb-1">Active Coaching</h4>
<p className="text-sm text-white/60">Our coaches are on the floor, correcting form and pushing you, not sitting in an office.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 p-2 rounded bg-blue-900/30 text-blue-400 border border-blue-500/20">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div>
<h4 className="text-white font-semibold text-base mb-1">Data Driven</h4>
<p className="text-sm text-white/60">We track body composition and strength metrics so you know exactly how you're progressing.</p>
</div>
</li>
</ul>
</div>
<div className="relative animate-on-scroll">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
<div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
<img alt="Coach helping client" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-white/10 p-6 rounded-xl shadow-xl z-20 max-w-xs">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-blue-600 rounded-lg text-white">
<i className="w-6 h-6" data-lucide="dumbbell"></i>
</div>
<div>
<p className="font-bold text-white">No Intimidation</p>
<p className="text-xs text-white/50">Beginner Friendly</p>
</div>
</div>
<p className="text-xs text-white/70">"I was scared to lift weights until I joined Slater. Now it's the best part of my day."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5" id="programs">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
<h2 className="text-4xl font-bold text-white mb-4">Training Built for <span className="text-blue-500">Real People</span></h2>
<p className="text-white/60 text-lg">Whether you want to lose fat, build muscle, or just move better, we have a structured pathway for you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-6 inline-flex p-3 bg-neutral-900 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Fast Track Shape-Up</h3>
<p className="text-white/60 mb-6 text-sm leading-relaxed">Our signature program for rapid, sustainable fat loss. Perfect for beginners or those returning to fitness.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Nutritional Guidance</li>
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> High Energy Workouts</li>
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Weekly Check-ins</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors" href="#join">Get Started</a>
</div>

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-6 inline-flex p-3 bg-neutral-900 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="biceps-flexed"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Strength &amp; Muscle</h3>
<p className="text-white/60 mb-6 text-sm leading-relaxed">Hypertrophy and strength focused programming for those looking to build a physique.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Progressive Overload</li>
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Form Correction</li>
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Strength Benchmarks</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors" href="#join">Get Started</a>
</div>

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-6 inline-flex p-3 bg-neutral-900 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Health &amp; Longevity</h3>
<p className="text-white/60 mb-6 text-sm leading-relaxed">Functional fitness designed to improve movement, stamina, and overall health markers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Cardiovascular Health</li>
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Mobility Work</li>
<li className="flex items-center text-sm text-white/80"><i className="w-4 h-4 text-blue-500 mr-2" data-lucide="check"></i> Injury Prevention</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors" href="#join">Get Started</a>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden" id="success">

<div className="absolute inset-0 bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&amp;w=2874&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="animate-on-scroll">
<div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest">Success Stories</div>
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Real People.<br/>Real Results.</h2>
<p className="text-xl text-white/70 mb-8 max-w-md">
                            We don't sell memberships. We sell the result of hard work and good guidance. Join a community of people dedicated to bettering themselves.
                        </p>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-700 rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-900/50" href="#join">
                                Start Your Transformation
                            </a>
</div>
</div>
<div className="animate-on-scroll relative">

<div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative">
<i className="absolute top-6 right-6 text-blue-700/20 w-16 h-16" data-lucide="quote"></i>
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-neutral-800 overflow-hidden border-2 border-blue-600">
<img alt="Member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-bold text-lg">David M.</p>
<p className="text-blue-400 text-sm">Lost 12kg in 4 months</p>
</div>
</div>
<p className="text-white/80 text-lg leading-relaxed italic">
                                "I wasted years at commercial gyms doing random exercises. The structure at Slater changed everything. The coaches actually care if you show up and do the work properly."
                            </p>
<div className="mt-6 flex items-center gap-1 text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/10 bg-neutral-950" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center animate-on-scroll" id="join">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to stop spinning your wheels?</h2>
<p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
                    Book a free assessment with one of our coaches. We'll discuss your goals, check your movement, and map out a plan for you. No pressure, just clarity.
                </p>
<form className="max-w-md mx-auto space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Phone" type="tel"/>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Email Address" type="email"/>
<button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-900/40" type="button">
                        Book My Free Assessment
                    </button>
<p className="text-xs text-white/40 mt-4">By booking, you agree to our terms. We respect your privacy.</p>
</form>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-3 mb-6" href="/">
<div className="relative w-8 h-8 rounded-full overflow-hidden border border-white">
<img alt="Slater Gym Logo" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10b60f9a-c1fd-4ddc-831e-3ad411c362c3_3840w.png"/>
</div>
<span className="text-xl font-bold text-white uppercase">Slater<span className="text-blue-600">Gym</span></span>
</a>
<p className="text-white/50 text-sm max-w-sm mb-6">
                        South Africa's premier results-based training facility. We bridge the gap between personal training and commercial gyms with structured coaching and accountability.
                    </p>
<div className="flex gap-4">
<a aria-label="Instagram" className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a aria-label="Facebook" className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a aria-label="Twitter" className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Programs</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-blue-500 transition-colors" href="#">Fast Track Shape-Up</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Strength &amp; Conditioning</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Functional Fitness</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-blue-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/30">© 2024 Slater Health &amp; Fitness Club. All rights reserved.</p>
<p className="text-xs text-white/30 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open today: 05:00 - 21:00
                </p>
</div>
</div>
</footer>



    </>
  );
}
