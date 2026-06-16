import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        
        // Link anchor scrolling with Lenis
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) lenis.scrollTo(target);
                
                // Close mobile menu if open
                if(mobileMenu.classList.contains('translate-x-0')) {
                    toggleMobileMenu();
                }
            });
        });

        // --- GSAP Reveals ---
        gsap.registerPlugin(ScrollTrigger);
        
        // Batch reveal for fade-ups
        ScrollTrigger.batch(".reveal-trigger", {
            onEnter: batch => gsap.to(batch, {
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: "power3.out",
                overwrite: true
            }),
            start: "top 90%",
        });
        
        // Initial state for reveals
        gsap.set(".reveal-trigger", { opacity: 0, y: 30 });

        // --- Active Nav State ---
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 150) {
                    current = "#" + section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("text-slate-900", "font-bold");
                link.classList.add("text-slate-500");
                if (link.getAttribute("href") === current) {
                    link.classList.remove("text-slate-500");
                    link.classList.add("text-slate-900", "font-bold");
                }
            });
        });

        // --- Mobile Menu ---
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        function toggleMobileMenu() {
            menuToggle.classList.toggle('active');
            if (mobileMenu.classList.contains('translate-x-full')) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                document.body.style.overflow = 'hidden'; // Lock scroll
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                document.body.style.overflow = ''; // Unlock scroll
            }
        }
        
        menuToggle.addEventListener('click', toggleMobileMenu);

        // --- Contact Form ---
        const form = document.getElementById('contact-form');
        const successMsg = document.getElementById('success-message');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate submission
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.remove('hidden');
                // In production, here you would POST to your backend
            }, 1000);
        });

        // --- Icons ---
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300" id="main-nav">
<div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">

<a className="text-xl font-serif font-semibold tracking-tight text-slate-900 z-50 relative" href="#top">
                OpalKadia
            </a>

<div className="hidden lg:flex items-center gap-8">
<div className="flex gap-6 text-[13px] font-medium tracking-wide text-slate-500 uppercase" id="nav-links">
<a className="hover:text-slate-900 transition-colors nav-link" href="#what">What We Do</a>
<a className="hover:text-slate-900 transition-colors nav-link" href="#who">Who</a>
<a className="hover:text-slate-900 transition-colors nav-link" href="#portfolio">Portfolio</a>
<a className="hover:text-slate-900 transition-colors nav-link" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors nav-link" href="#founder">Founder</a>
</div>
<div className="h-4 w-px bg-slate-200 mx-2"></div>
<a className="text-[13px] font-bold tracking-widest uppercase bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all hover:scale-[1.02]" href="#contact">
                    Contact
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden z-50 relative group w-10 h-10 flex items-center justify-center" id="menu-toggle">
<div className="flex flex-col gap-1.5 items-end">
<span className="w-6 h-0.5 bg-slate-900 transition-all duration-300 group-[.active]:rotate-45 group-[.active]:translate-y-2"></span>
<span className="w-4 h-0.5 bg-slate-900 transition-all duration-300 group-[.active]:opacity-0"></span>
<span className="w-6 h-0.5 bg-slate-900 transition-all duration-300 group-[.active]:-rotate-45 group-[.active]:-translate-y-2"></span>
</div>
</button>
</div>

<div className="fixed inset-0 bg-[#FDFDFB] translate-x-full z-40 flex flex-col pt-32 px-6" id="mobile-menu">
<div className="flex flex-col gap-6 text-2xl font-serif">
<a className="mobile-link text-slate-900 border-b border-slate-100 pb-4" href="#what">What We Do</a>
<a className="mobile-link text-slate-900 border-b border-slate-100 pb-4" href="#who">Who We Work With</a>
<a className="mobile-link text-slate-900 border-b border-slate-100 pb-4" href="#portfolio">Portfolio</a>
<a className="mobile-link text-slate-900 border-b border-slate-100 pb-4" href="#process">How We Work</a>
<a className="mobile-link text-slate-900 border-b border-slate-100 pb-4" href="#founder">Founder</a>
<a className="mobile-link text-slate-900 pb-4 font-semibold" href="#contact">Start Conversation</a>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center relative overflow-hidden pt-20" id="top">

<div className="absolute inset-0 opal-gradient opacity-60"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
<div className="container mx-auto px-6 max-w-7xl relative z-10 py-20">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<span className="inline-block py-1 px-4 mb-8 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">
                    Founders • Operators • Partners
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-slate-900 leading-[1.1] mb-8 text-balance">
                    A holding company for the <span className="italic text-slate-800">long term.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mb-12 text-balance">
                    OpalKadia builds, holds, and nurtures a focused portfolio of businesses aligned with a long-term vision. We partner with operators to strengthen systems and ensure durable growth.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-slate-200" href="#contact">
                        Pitch a Business
                    </a>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-slate-400 hover:bg-slate-50 transition-all duration-300" href="#portfolio">
                        Explore Portfolio
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M12 5v14M19 12l-7 7-7-7"></path></svg>
</div>
</section>

<section className="section-padding bg-white relative border-b border-slate-100" id="what">
<div className="container mx-auto px-6 max-w-7xl">
<div className="mb-16 md:mb-24 reveal-trigger">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Building durability.</h2>
<div className="h-px w-24 bg-slate-200"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="reveal-trigger group p-8 rounded-2xl bg-[#FAFAF9] border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-xl font-serif font-medium text-slate-900 mb-3">Hold</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                        We practice long-term ownership. We are not a fund with a timeline; we are stewards aiming for permanence and compound growth.
                    </p>
</div>

<div className="reveal-trigger group p-8 rounded-2xl bg-[#FAFAF9] border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.9.9"></path><path d="m3.3 7 8.7 5 5-8.7"></path></svg>
</div>
<h3 className="text-xl font-serif font-medium text-slate-900 mb-3">Build</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                        Capital is just the start. We provide practical operational support, systems architecture, and strategic clarity to strengthen execution.
                    </p>
</div>

<div className="reveal-trigger group p-8 rounded-2xl bg-[#FAFAF9] border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<h3 className="text-xl font-serif font-medium text-slate-900 mb-3">Nurture</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                        We partner deeply with operators. Our role is to remove roadblocks and provide the leadership cadence required for sustainable success.
                    </p>
</div>
</div>
</div>
</section>

<section className="section-padding bg-[#FAFAF9] border-b border-slate-100" id="who">
<div className="container mx-auto px-6 max-w-7xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4 reveal-trigger">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Our ecosystem.</h2>
<p className="text-slate-600 font-light leading-relaxed">
                        We create alignment between three distinct groups, ensuring incentives are shared and the vision is unified.
                    </p>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-trigger">
<div className="h-px w-full bg-slate-200 mb-6"></div>
<h4 className="text-lg font-serif font-medium text-slate-900 mb-4">Founders</h4>
<p className="text-sm text-slate-600 mb-4 font-medium">Seeking a permanent home.</p>
<ul className="text-sm text-slate-500 space-y-3 font-light">
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Legacy preservation</span>
</li>
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Fair, transparent exit</span>
</li>
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Continued advisory role</span>
</li>
</ul>
</div>

<div className="reveal-trigger" style={{transitionDelay: '100ms'}}>
<div className="h-px w-full bg-slate-200 mb-6"></div>
<h4 className="text-lg font-serif font-medium text-slate-900 mb-4">Operators</h4>
<p className="text-sm text-slate-600 mb-4 font-medium">Ready to run &amp; grow.</p>
<ul className="text-sm text-slate-500 space-y-3 font-light">
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Equity participation</span>
</li>
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Operational autonomy</span>
</li>
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Strategic mentorship</span>
</li>
</ul>
</div>

<div className="reveal-trigger" style={{transitionDelay: '200ms'}}>
<div className="h-px w-full bg-slate-200 mb-6"></div>
<h4 className="text-lg font-serif font-medium text-slate-900 mb-4">Partners</h4>
<p className="text-sm text-slate-600 mb-4 font-medium">Strategic allies.</p>
<ul className="text-sm text-slate-500 space-y-3 font-light">
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Deal flow sharing</span>
</li>
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Industry expertise</span>
</li>
<li className="flex items-start gap-2">
<span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
<span>Co-investment opportunity</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding bg-white" id="portfolio">
<div className="container mx-auto px-6 max-w-7xl">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal-trigger">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Our portfolio.</h2>
<p className="text-slate-500 font-light">Selected holdings and active partnerships.</p>
</div>
<a className="hidden md:inline-block text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors border-b border-transparent hover:border-slate-900 pb-0.5" href="#contact">
                    Discuss an opportunity
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-trigger group flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500 min-h-[320px]">
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-xl font-serif font-bold tracking-tight text-slate-900">Capital Collab</span>
<span className="px-3 py-1 bg-stone-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full">Finance</span>
</div>
<p className="text-sm text-slate-600 font-medium mb-3">Investment &amp; Advisory.</p>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Connecting capital with capability. We structure partnerships that fuel growth for lower-middle market businesses.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-50">
<span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-700 transition-colors flex items-center gap-2">
                            Active Holding <svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="reveal-trigger group flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500 min-h-[320px]" style={{transitionDelay: '100ms'}}>
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-xl font-serif font-bold tracking-tight text-slate-900">Respira</span>
<span className="px-3 py-1 bg-stone-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full">Wellness</span>
</div>
<p className="text-sm text-slate-600 font-medium mb-3">Modern Breathwork.</p>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            A science-backed platform for mental resilience and physical performance through guided breathwork protocols.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-50">
<span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-700 transition-colors flex items-center gap-2">
                            Active Holding <svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="reveal-trigger group flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500 min-h-[320px]" style={{transitionDelay: '200ms'}}>
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-xl font-serif font-bold tracking-tight text-slate-900">Feed Your Game</span>
<span className="px-3 py-1 bg-stone-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full">Media</span>
</div>
<p className="text-sm text-slate-600 font-medium mb-3">Digital Sports Media.</p>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Engaging the next generation of sports fans through high-quality content, community building, and brand partnerships.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-50">
<span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-700 transition-colors flex items-center gap-2">
                            Active Holding <svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding bg-[#FAFAF9] border-t border-slate-100" id="process">
<div className="container mx-auto px-6 max-w-7xl">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 text-center reveal-trigger">How we operate.</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-200"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">

<div className="reveal-trigger flex flex-col md:items-center md:text-center bg-[#FAFAF9]">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-serif font-bold text-slate-900 mb-6 shadow-sm">01</div>
<h3 className="text-lg font-serif font-medium text-slate-900 mb-3">Align</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4 max-w-xs mx-auto">
                            We establish shared values and vision before any paperwork is signed.
                        </p>
<ul className="text-xs text-slate-400 uppercase tracking-wider space-y-2">
<li>Strategic Audit</li>
<li>Incentive Design</li>
</ul>
</div>

<div className="reveal-trigger flex flex-col md:items-center md:text-center bg-[#FAFAF9]" style={{transitionDelay: '150ms'}}>
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-serif font-bold text-slate-900 mb-6 shadow-sm">02</div>
<h3 className="text-lg font-serif font-medium text-slate-900 mb-3">Build</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4 max-w-xs mx-auto">
                            We install the operational infrastructure needed for the next stage of growth.
                        </p>
<ul className="text-xs text-slate-400 uppercase tracking-wider space-y-2">
<li>Systems Implementation</li>
<li>Team Augmentation</li>
</ul>
</div>

<div className="reveal-trigger flex flex-col md:items-center md:text-center bg-[#FAFAF9]" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-serif font-bold text-slate-900 mb-6 shadow-sm">03</div>
<h3 className="text-lg font-serif font-medium text-slate-900 mb-3">Nurture</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4 max-w-xs mx-auto">
                            We provide ongoing stewardship and capital allocation discipline.
                        </p>
<ul className="text-xs text-slate-400 uppercase tracking-wider space-y-2">
<li>Quarterly Cadence</li>
<li>Durable Growth</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding bg-slate-900 text-white relative overflow-hidden" id="value">

<div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-slate-900 to-purple-900/20 opacity-40"></div>
<div className="container mx-auto px-6 max-w-7xl relative z-10">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/3 reveal-trigger">
<h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Practical support.<br/><span className="text-slate-500">Not just capital.</span></h2>
<p className="text-slate-400 font-light leading-relaxed">
                        We are active partners. We roll up our sleeves to provide the clarity and systems that founders and operators need to succeed.
                    </p>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 reveal-trigger">
<div>
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Systems &amp; Operations
                        </h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Implementing robust tech stacks, financial controls, and operational workflows that allow the business to scale without breaking.
                        </p>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Strategic Clarity
                        </h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Refining positioning, defining core priorities, and ensuring every resource allocation serves the long-term vision.
                        </p>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Leadership Cadence
                        </h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Establishing the meeting structures, KPIs, and accountability loops that transform good intentions into consistent execution.
                        </p>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Growth Partnership
                        </h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Acting as a sounding board for critical decisions and opening doors through our network of partners and industry experts.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding bg-white" id="founder">
<div className="container mx-auto px-6 max-w-5xl">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
<div className="w-full md:w-5/12 reveal-trigger">
<div className="relative aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden border border-slate-100 grayscale hover:grayscale-0 transition-all duration-700">

<div className="absolute inset-0 flex items-center justify-center bg-stone-200 text-stone-400 font-serif italic text-2xl">
                            AM
                        </div>
<img alt="Austin Moss" className="w-full h-full object-cover opacity-0" src="https://ui-avatars.com/api/?name=Austin+Moss&amp;background=f0f0f0&amp;color=333&amp;size=512"/>
</div>
</div>
<div className="w-full md:w-7/12 reveal-trigger">
<span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Founder</span>
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">Austin Moss</h2>
<div className="space-y-6 text-slate-600 font-light leading-relaxed">
<p>
                            I founded OpalKadia with a simple premise: great businesses deserve a permanent home, and great operators deserve a true partner.
                        </p>
<p>
                            After years of building and scaling ventures, I realized that the traditional "churn and burn" investment model often destroys the very value it seeks to capture.
                        </p>
<p>
                            OpalKadia is built differently. We are patient. We are disciplined. And we are deeply committed to the people who do the work.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100">
<p className="text-lg font-serif italic text-slate-800">
                            "Integrity is the only asset that never depreciates."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding bg-[#FAFAF9] border-t border-slate-100" id="fit">
<div className="container mx-auto px-6 max-w-7xl">
<div className="text-center mb-16 reveal-trigger">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Are we a fit?</h2>
<p className="text-slate-500 font-light">We are selective about where we focus our energy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="reveal-trigger bg-white p-10 rounded-2xl border border-slate-200 border-l-4 border-l-teal-600">
<h3 className="text-xl font-serif font-medium text-slate-900 mb-6">What we look for</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-600 font-light">Enduring profitability &amp; proven business models</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-600 font-light">Founders seeking a respectful transition</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-600 font-light">Operators hungry for autonomy &amp; ownership</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-600 font-light">Aligned values and long-term mindset</span>
</li>
</ul>
</div>

<div className="reveal-trigger bg-stone-50 p-10 rounded-2xl border border-slate-200">
<h3 className="text-xl font-serif font-medium text-slate-900 mb-6">What isn't a fit</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-500 font-light">Pre-revenue or pure R&amp;D startups</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-500 font-light">Turnarounds requiring heavy restructuring</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-500 font-light">Short-term flipping strategies</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-slate-500 font-light">Misaligned incentives or ethical conflicts</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 opal-gradient"></div>
<div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Build something worth holding.</h2>
<p className="text-lg text-slate-600 font-light mb-10 max-w-xl mx-auto">
                Let's discuss how we can partner to create enduring value.
            </p>
<a className="inline-flex items-center justify-center bg-slate-900 text-white rounded-full px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" href="#contact">
                Start a Conversation
            </a>
</div>
</section>

<section className="section-padding bg-white" id="contact">
<div className="container mx-auto px-6 max-w-2xl">
<div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 reveal-trigger">
<h2 className="text-3xl font-serif text-slate-900 mb-8 text-center">Get in touch</h2>
<form className="space-y-6" id="contact-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name</label>
<input className="w-full px-4 py-3 bg-[#FAFAF9] border border-slate-200 rounded-lg text-slate-900 text-sm focus:border-slate-800 focus:bg-white" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-[#FAFAF9] border border-slate-200 rounded-lg text-slate-900 text-sm focus:border-slate-800 focus:bg-white" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Topic</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-[#FAFAF9] border border-slate-200 rounded-lg text-slate-900 text-sm focus:border-slate-800 focus:bg-white appearance-none cursor-pointer" required="">
<option disabled="" selected="" value="">Select an option</option>
<option value="pitch">Pitch a Business</option>
<option value="partner">Partnership / Collaboration</option>
<option value="general">General Inquiry</option>
</select>
<svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Company (Optional)</label>
<input className="w-full px-4 py-3 bg-[#FAFAF9] border border-slate-200 rounded-lg text-slate-900 text-sm focus:border-slate-800 focus:bg-white" placeholder="Acme Inc." type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-[#FAFAF9] border border-slate-200 rounded-lg text-slate-900 text-sm focus:border-slate-800 focus:bg-white resize-none" placeholder="Tell us a bit about your goals..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white rounded-lg py-4 text-sm font-bold uppercase tracking-widest hover:bg-teal-900 transition-colors duration-300" type="submit">
                        Send Message
                    </button>
<p className="text-[10px] text-center text-slate-400 mt-4">
                        We respect your privacy. No spam, ever.
                    </p>
</form>

<div className="hidden text-center py-10" id="success-message">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-2xl font-serif text-slate-900 mb-2">Message Received.</h3>
<p className="text-slate-500 text-sm">Thank you for reaching out. We will be in touch shortly.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-serif font-bold text-slate-900">OpalKadia</span>
<div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#top">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
<span className="cursor-default">© 2024</span>
</div>
</div>
</footer>



    </>
  );
}
