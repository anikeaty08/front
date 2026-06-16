import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Lucide Icons
        lucide.createIcons();

        // Cursor Logic
        const cursor = document.getElementById('cursor');
        const cursorGlow = document.getElementById('cursor-glow');
        
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
            
            // Add a slight delay/lag to the glow for smooth feel
            setTimeout(() => {
                cursorGlow.style.left = x + 'px';
                cursorGlow.style.top = y + 'px';
            }, 50);
        });

        // Hover Effect Logic
        const hoverTargets = document.querySelectorAll('.hover-target, a, button, summary');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        // Intersection Observer for Fade In
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            // Check if hidden (which means it's closed)
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // Open Menu: Remove hidden first so it renders
                mobileMenu.classList.remove('hidden');
                
                // Slight delay to allow CSS to catch the opacity transition
                requestAnimationFrame(() => {
                    mobileMenu.style.opacity = '1';
                    mobileMenu.style.pointerEvents = 'auto';
                });
            } else {
                // Close Menu: Fade out first
                mobileMenu.style.opacity = '0';
                mobileMenu.style.pointerEvents = 'none';
                
                // Wait for transition (300ms) then add hidden class back
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', toggleMenu));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor" style={{left: '54px', top: '5px'}}></div>
<div id="cursor-glow"></div>

<nav className="fixed transition-all duration-300 bg-[#050608]/80 w-full z-50 border-white/5 border-b top-0 left-0 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group hover-target">
<div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<span className="text-[10px] font-bold tracking-widest text-white">RGS</span>
</div>
<span className="text-sm font-semibold tracking-wide text-white uppercase group-hover:text-glow transition-all">Realty Growth</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-[#888] hover:text-white transition-colors uppercase tracking-wide hover-target" href="#method">Method</a>
<a className="text-xs font-medium text-[#888] hover:text-white transition-colors uppercase tracking-wide hover-target" href="#services">Services</a>
<a className="text-xs font-medium text-[#888] hover:text-white transition-colors uppercase tracking-wide hover-target" href="#results">Results</a>
<a className="text-xs font-medium text-[#888] hover:text-white transition-colors uppercase tracking-wide hover-target" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-[#C2C3C7] hover:text-white transition-colors hover-target" href="#">Login</a>
<a className="relative group hover-target" href="#">
<div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative px-5 py-2 bg-white text-black rounded-full text-xs font-semibold uppercase tracking-wide hover:scale-105 transition-transform duration-300">
                        Get Started
                    </div>
</a>
</div>

<button className="md:hidden text-white hover-target" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#050608] z-[60] flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-white/50 hover:text-white hover-target" id="close-menu-btn">
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<a className="text-3xl font-heading font-medium text-white hover-target" href="#method">Method</a>
<a className="text-3xl font-heading font-medium text-white hover-target" href="#services">Services</a>
<a className="text-3xl font-heading font-medium text-white hover-target" href="#results">Results</a>
<a className="text-3xl font-heading font-medium text-white hover-target" href="#faq">FAQ</a>
<a className="mt-4 px-8 py-3 bg-white text-black rounded-full font-semibold text-lg hover-target" href="#">Get Started</a>
</div>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none opacity-40"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7 flex flex-col gap-8 fade-in-section is-visible">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-glow-dot relative"></span>
<span className="text-[10px] uppercase tracking-widest text-[#888] font-medium">Accepting New Agents for Q4</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight font-heading">
                    Stop Chasing Leads.<br/>
<span className="text-white/50">Let Them Chase You.</span>
</h1>
<p className="text-lg text-[#888] max-w-xl leading-relaxed font-light">
                    We build automated client acquisition systems for real estate agents. Meta ads, AI follow-up, and appointments booked directly on your calendar.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="hover-target group relative px-8 py-4 bg-white text-[#050608] rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
<span className="relative z-10 text-sm tracking-wide">Start Your Campaign</span>
</button>
<button className="hover-target px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm">
<svg className="lucide lucide-play-circle w-4 h-4 text-[#888]" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>See The System</span>
</button>
</div>
<div className="flex items-center gap-4 text-xs text-[#666] mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>No Long Contracts</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Exclusive Territories</span>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-5 relative fade-in-section delay-200 is-visible">
<div className="glass-panel p-6 rounded-2xl relative rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
<span className="text-[10px] text-white font-bold">JD</span>
</div>
<div>
<div className="text-xs font-semibold text-white">New Lead Generated</div>
<div className="text-[10px] text-[#666]">Just now via Instagram Ads</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="space-y-3">
<div className="bg-white/5 p-3 rounded-lg border border-white/5">
<div className="text-[10px] text-[#666] mb-1">Name</div>
<div className="text-sm text-white">Sarah Jenkins</div>
</div>
<div className="bg-white/5 p-3 rounded-lg border border-white/5">
<div className="text-[10px] text-[#666] mb-1">Interested In</div>
<div className="text-sm text-white">Buying / Single Family Home / $650k+</div>
</div>
<div className="flex gap-2 mt-4">
<div className="h-8 flex-1 bg-white text-black rounded text-[10px] font-bold flex items-center justify-center uppercase tracking-wider">
                                Call Now
                            </div>
<div className="h-8 flex-1 border border-white/20 text-white rounded text-[10px] font-bold flex items-center justify-center uppercase tracking-wider">
                                AI Follow Up
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left fade-in-section">
<div className="text-2xl font-heading font-semibold text-white mb-1">$45M+</div>
<div className="text-xs text-[#666] uppercase tracking-wider">Volume Generated</div>
</div>
<div className="text-center md:text-left fade-in-section delay-100">
<div className="text-2xl font-heading font-semibold text-white mb-1">12k+</div>
<div className="text-xs text-[#666] uppercase tracking-wider">Leads Delivered</div>
</div>
<div className="text-center md:text-left fade-in-section delay-200">
<div className="text-2xl font-heading font-semibold text-white mb-1">3.4x</div>
<div className="text-xs text-[#666] uppercase tracking-wider">Average ROI</div>
</div>
<div className="text-center md:text-left fade-in-section delay-300">
<div className="text-2xl font-heading font-semibold text-white mb-1">14 Days</div>
<div className="text-xs text-[#666] uppercase tracking-wider">Launch Time</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#050608]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 fade-in-section">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">The "Old Way" is Broken</h2>
<p className="text-[#888] mb-8 leading-relaxed font-light">
                    Most agents rely on Zillow leads (shared with 5 other agents) or boosting random posts on Facebook. The result? Expensive leads, low quality conversations, and wasted time.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-400/70 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-sm text-[#C2C3C7]">Buying shared leads that ghost you.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-400/70 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-sm text-[#C2C3C7]">Manually following up via text/email.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-400/70 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-sm text-[#C2C3C7]">Inconsistent pipeline month-to-month.</span>
</li>
</ul>
</div>
<div className="lg:col-span-7 fade-in-section delay-100">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="glass-panel p-6 rounded-xl hover-target">
<svg className="lucide lucide-users w-8 h-8 text-white/50 mb-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-white font-medium mb-2">Lead Saturation</h3>
<p className="text-xs text-[#666] leading-relaxed">Top portals sell the same contact to every agent in your zipcode. It's a race to the bottom.</p>
</div>
<div className="glass-panel p-6 rounded-xl hover-target translate-y-0 sm:translate-y-8">
<svg className="lucide lucide-dollar-sign w-8 h-8 text-white/50 mb-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<h3 className="text-white font-medium mb-2">Sky High Cost</h3>
<p className="text-xs text-[#666] leading-relaxed">Paying referral fees of 35% on closing kills your margins and prevents scaling.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#050608] border-t border-white/5" id="method">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in-section">
<h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">The RGS Growth Engine</h2>
<p className="text-[#888] font-light">We replace manual prospecting with a machine that runs 24/7.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover-target fade-in-section delay-100 group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-target w-6 h-6 text-white" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-heading font-medium text-white mb-3">1. Targeted Ads</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        We run custom Meta (Facebook/Instagram) ad campaigns targeting high-intent buyers and sellers in your specific micro-market.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover-target fade-in-section delay-200 group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-cpu w-6 h-6 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-heading font-medium text-white mb-3">2. AI Nurture</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        Our AI system texts and emails leads instantly (within 60 seconds). It qualifies them, answers questions, and books calls.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover-target fade-in-section delay-300 group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-calendar-check w-6 h-6 text-white" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-heading font-medium text-white mb-3">3. Appointments</h3>
<p className="text-sm text-[#888] leading-relaxed">
                        You wake up to qualified appointments on your calendar. You simply show up, build rapport, and sign the agreement.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-l from-white/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="glass-panel p-1 rounded-2xl fade-in-section">
<div className="bg-[#0A0A0A] rounded-xl overflow-hidden relative aspect-square md:aspect-auto md:h-[500px]">
<img alt="Professional Agent" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-widest font-bold mb-2">Client Success</div>
<p className="text-white text-lg font-heading leading-tight">"RGS added $2.4M to my pipeline in the first 60 days. The AI follow-up is a game changer."</p>
</div>
</div>
</div>
<div className="fade-in-section delay-100">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">Who We Partner With</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 mt-1 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-lg">Solo Agents</h4>
<p className="text-sm text-[#888] mt-1">Ready to scale beyond sphere of influence and referrals.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 mt-1 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-lg">Team Leaders</h4>
<p className="text-sm text-[#888] mt-1">Need consistent lead flow to feed agents and retain talent.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 mt-1 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-lg">Modern Brokerages</h4>
<p className="text-sm text-[#888] mt-1">Looking for a plug-and-play marketing infrastructure.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050608]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-heading text-3xl font-semibold text-white mb-12 text-center tracking-tight">Common Questions</h2>
<div className="space-y-4">

<details className="group glass-panel rounded-lg hover-target fade-in-section">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-white font-medium">Do you work with new agents?</span>
<span className="text-white/50 transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                        Yes, as long as you have a budget for ad spend and are willing to call leads. Our system works best for agents who treat real estate as a business, not a hobby.
                    </div>
</details>

<details className="group glass-panel rounded-lg hover-target fade-in-section delay-100">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-white font-medium">How much ad spend do I need?</span>
<span className="text-white/50 transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                        We recommend a minimum of $500/month in ad spend paid directly to Facebook/Meta. This ensures enough volume to generate consistent appointments.
                    </div>
</details>

<details className="group glass-panel rounded-lg hover-target fade-in-section delay-200">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-white font-medium">Are the leads exclusive?</span>
<span className="text-white/50 transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                        100%. Unlike Zillow or Realtor.com, we generate leads specifically for YOUR brand. They see your name, your face, and your offer. We never resell data.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative text-center px-6">
<div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10 fade-in-section">
<h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Ready to Scale?</h2>
<p className="text-[#888] text-lg mb-10 font-light">Join the agents who have stopped cold calling and started closing.</p>
<button className="hover-target group relative px-10 py-5 bg-white text-[#050608] rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105">
<div className="absolute inset-0 bg-white/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 text-base tracking-wide uppercase">Book Your Strategy Call</span>
</button>
<p className="mt-6 text-xs text-[#555]">Limited spots available for specific territories.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#020203]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white font-heading font-bold text-lg">RGS</span>
<span className="text-[#555] text-sm">© 2024 Realty Growth Solutions</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-[#555] hover:text-white transition-colors uppercase tracking-wide" href="#">Privacy</a>
<a className="text-xs text-[#555] hover:text-white transition-colors uppercase tracking-wide" href="#">Terms</a>
<a className="text-xs text-[#555] hover:text-white transition-colors uppercase tracking-wide" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
