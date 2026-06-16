import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: {
800: '#1e293b',
900: '#0f172a',
950: '#020617',
},
gold: {
500: '#d4af37', // Refined gold accent
600: '#b08d26',
}
}
}
}
}



        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        btn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('translate-x-full');
                btn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>';
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('translate-x-full');
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>';
                document.body.style.overflow = 'auto';
            }
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                menu.classList.add('translate-x-full');
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>';
                document.body.style.overflow = 'auto';
            });
        });

        // FAQ Toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.text-slate-400');
            
            // Close others (optional)
            document.querySelectorAll('#faq .h-0').forEach(el => {
                if(el !== content) {
                    el.style.height = '0px';
                    el.previousElementSibling.querySelector('.text-slate-400').classList.remove('rotate-180');
                }
            });

            if (content.style.height && content.style.height !== '0px') {
                content.style.height = '0px';
                icon.classList.remove('rotate-180');
            } else {
                content.style.height = content.scrollHeight + 'px';
                icon.classList.add('rotate-180');
            }
        }

        // Scroll Reveal Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-200 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-lg font-semibold tracking-widest text-navy-900 uppercase" href="#">
                KENSINGTON<span className="text-slate-400">.</span>SG
            </a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-500">
<a className="hover:text-navy-900 transition-colors" href="#about">About</a>
<a className="hover:text-navy-900 transition-colors" href="#services">Services</a>
<a className="hover:text-navy-900 transition-colors" href="#testimonials">Results</a>
<a className="hover:text-navy-900 transition-colors" href="#faq">FAQ</a>
<a className="px-6 py-2.5 bg-navy-900 text-white rounded text-xs font-medium tracking-wide hover:bg-navy-800 transition-all shadow-md shadow-navy-900/10" href="#contact">
                    Book Strategy Call
                </a>
</div>

<button className="md:hidden p-2 text-navy-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center gap-8" id="mobile-menu">
<a className="text-2xl font-light tracking-tight text-navy-900 mobile-link" href="#about">About</a>
<a className="text-2xl font-light tracking-tight text-navy-900 mobile-link" href="#services">Services</a>
<a className="text-2xl font-light tracking-tight text-navy-900 mobile-link" href="#testimonials">Results</a>
<a className="text-2xl font-light tracking-tight text-navy-900 mobile-link" href="#faq">FAQ</a>
<a className="text-2xl font-light tracking-tight text-navy-900 mobile-link" href="#contact">Contact</a>
</div>
</nav>
<main>

<section className="relative bg-navy-950 min-h-screen flex items-center pt-20 overflow-hidden" id="home">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-navy-800 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-800 rounded-full blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-4xl reveal active">
<div className="inline-flex items-center gap-3 mb-8 pl-1 border-l border-gold-500/50">
<span className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em]">Based in Singapore</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1] mb-8">
                        Precision in Strategy.<br/>
<span className="text-slate-500">Certainty in Growth.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mb-12">
                        We partner with ambitious founders and SMEs to dismantle operational bottlenecks, optimize leadership structures, and execute scalable growth strategies.
                    </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="inline-flex items-center justify-center h-14 px-8 bg-white text-navy-950 text-sm font-medium tracking-wide rounded hover:bg-slate-100 transition-all w-full sm:w-auto" href="#contact">
                            Schedule Consultation
                        </a>
<a className="inline-flex items-center justify-center h-14 px-8 border border-slate-700 text-white text-sm font-medium tracking-wide rounded hover:bg-slate-800 transition-all w-full sm:w-auto" href="#services">
                            Explore Expertise
                        </a>
</div>
</div>

<div className="mt-32 border-t border-slate-800/50 pt-8 reveal">
<p className="text-xs text-slate-500 font-medium mb-6 uppercase tracking-widest">Advising leaders at</p>
<div className="flex flex-wrap gap-10 md:gap-16 opacity-30 grayscale items-center">

<span className="text-white text-lg font-semibold tracking-tighter">VENTURE<span className="font-light">CORP</span></span>
<span className="text-white text-lg font-serif italic">Ascendancy</span>
<span className="text-white text-lg font-bold tracking-widest">PACIFIC<span className="text-gold-500">.</span></span>
<span className="text-white text-lg font-medium tracking-tight">STRATA<span className="font-light">GROUP</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3"> The Challenge</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-navy-900 mb-6 leading-tight">
                            Growth creates complexity.<br/>Complexity kills speed.
                        </h3>
<div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
<p>
                                At a certain scale, the systems that built your business become the anchors holding it back. Decision-making slows, silos form, and profitability leaks through operational inefficiencies.
                            </p>
<p>
                                We don't just offer advice; we engineer the infrastructure required for your next tier of growth. Our methodology bridges the gap between high-level corporate strategy and the gritty reality of SME execution.
                            </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal">

<div className="p-6 bg-slate-50 rounded border border-slate-100">
<iconify-icon className="text-navy-900 mb-4" icon="solar:graph-up-linear" width="32"></iconify-icon>
<div className="text-3xl font-medium text-navy-900 tracking-tight mb-1">2.5x</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Avg. Revenue Growth</div>
</div>

<div className="p-6 bg-slate-50 rounded border border-slate-100">
<iconify-icon className="text-navy-900 mb-4" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<div className="text-3xl font-medium text-navy-900 tracking-tight mb-1">30%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Efficiency Gain</div>
</div>

<div className="p-6 bg-slate-50 rounded border border-slate-100">
<iconify-icon className="text-navy-900 mb-4" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<div className="text-3xl font-medium text-navy-900 tracking-tight mb-1">80+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Singapore Clients</div>
</div>

<div className="p-6 bg-navy-900 rounded border border-navy-800 text-white">
<iconify-icon className="text-white mb-4" icon="solar:verified-check-linear" width="32"></iconify-icon>
<div className="text-3xl font-medium tracking-tight mb-1">100%</div>
<div className="text-xs text-slate-400 uppercase tracking-wide">Commitment</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16 reveal">
<h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">Core Expertise</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-navy-900">Strategic Interventions</h3>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group reveal p-10 bg-white rounded shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-navy-50 rounded flex items-center justify-center text-navy-900 mb-8 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-navy-900 mb-4 tracking-tight">Corporate Strategy</h4>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                            Developing actionable roadmaps for market expansion, M&amp;A preparation, and competitive positioning within the ASEAN region.
                        </p>
</div>

<div className="group reveal p-10 bg-white rounded shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-navy-50 rounded flex items-center justify-center text-navy-900 mb-8 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-navy-900 mb-4 tracking-tight">Operational Design</h4>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                            Eliminating redundancy through process re-engineering. We build lean, resilient operations that can handle scale without breaking.
                        </p>
</div>

<div className="group reveal p-10 bg-white rounded shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-navy-50 rounded flex items-center justify-center text-navy-900 mb-8 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-navy-900 mb-4 tracking-tight">Leadership Advisory</h4>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                            Bridging the gap between founders and C-suite hires. We assist in organizational structuring and executive performance coaching.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-5/12 reveal relative group">

<div className="aspect-[4/5] bg-slate-200 rounded overflow-hidden relative">
<div className="absolute inset-0 bg-navy-900 flex flex-col items-center justify-center p-8 text-center">
<iconify-icon className="text-slate-600 mb-4 opacity-50" icon="solar:user-linear" width="80"></iconify-icon>
<span className="text-slate-500 text-sm tracking-widest uppercase">Principal Consultant</span>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-navy-950 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8 text-white">
<div className="text-2xl font-medium tracking-tight">James Wong</div>
<div className="text-sm text-slate-300 mt-1">MBA, INSEAD</div>
</div>
</div>

<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold-500/30"></div>
</div>
<div className="md:w-7/12 pt-8 reveal">
<h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">About The Principal</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-navy-900 mb-8">
                            A pragmatic approach to<br/>sustainable value creation.
                        </h3>
<div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
<p>
                                With over 15 years advising Singapore's financial and industrial sectors, I established Kensington &amp; Partners to serve the "missing middle"—enterprises too complex for generalist advice but overlooked by the Big Four.
                            </p>
<p>
                                My philosophy is grounded in data but driven by empathy. Strategies fail not because the math is wrong, but because the human execution is flawed. I work directly with your leadership team to ensure alignment, capability, and buy-in.
                            </p>
</div>
<div className="mt-10 pt-10 border-t border-slate-100 flex gap-12">
<div>
<span className="block text-3xl font-medium text-navy-900 tracking-tight">$120M+</span>
<span className="text-sm text-slate-500">Client Revenue Unlocked</span>
</div>
<div>
<span className="block text-3xl font-medium text-navy-900 tracking-tight">15+</span>
<span className="text-sm text-slate-500">Years Experience</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div className="max-w-2xl">
<h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">Client Outcomes</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-navy-900">
                            Trusted by industry leaders.
                        </h3>
</div>
<div className="flex gap-2 mt-6 md:mt-0">
<button className="w-10 h-10 border border-slate-300 rounded hover:bg-white hover:border-navy-900 transition-colors flex items-center justify-center text-navy-900">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 border border-slate-300 rounded hover:bg-white hover:border-navy-900 transition-colors flex items-center justify-center text-navy-900">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 reveal">

<div className="bg-white p-10 rounded border border-slate-100 shadow-sm">
<div className="flex gap-1 text-gold-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-lg text-navy-900 font-light leading-relaxed mb-8">
                            "The clarity Kensington brought to our merger was exceptional. They didn't just give us a slide deck; they sat in our office and helped us restructure the teams. Essential for any CEO facing a transition."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 font-semibold text-xs">DL</div>
<div>
<div className="text-sm font-medium text-navy-900">David Lim</div>
<div className="text-xs text-slate-500">CEO, Apex Logistics SG</div>
</div>
</div>
</div>

<div className="bg-white p-10 rounded border border-slate-100 shadow-sm">
<div className="flex gap-1 text-gold-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-lg text-navy-900 font-light leading-relaxed mb-8">
                            "We were stuck at the $10M revenue mark for three years. The strategic roadmap provided identified key bottlenecks in our sales operations. We broke through that ceiling in 8 months."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 font-semibold text-xs">ST</div>
<div>
<div className="text-sm font-medium text-navy-900">Sarah Tan</div>
<div className="text-xs text-slate-500">Founder, TechSpace Asia</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-sm font-semibold text-center text-gold-600 uppercase tracking-widest mb-3">FAQ</h2>
<h3 className="text-3xl md:text-4xl font-medium text-center tracking-tight text-navy-900 mb-16">Common Questions</h3>
<div className="space-y-4 reveal">

<div className="border border-slate-200 rounded overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-navy-900">What is the typical duration of an engagement?</span>
<span className="text-slate-400 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</button>
<div className="h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white">
<div className="p-6 text-slate-600 font-light leading-relaxed border-t border-slate-100">
                                Typical engagements range from 3 to 6 months. We begin with a 2-week diagnostic phase, followed by strategy formulation, and a supported implementation period to ensure results stick.
                            </div>
</div>
</div>

<div className="border border-slate-200 rounded overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-navy-900">Do you work with startups?</span>
<span className="text-slate-400 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</button>
<div className="h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white">
<div className="p-6 text-slate-600 font-light leading-relaxed border-t border-slate-100">
                                We generally work with Series A+ startups or established SMEs generating SGD 5M+ in revenue. Our methodologies are best suited for organizations facing complexity due to growth, rather than early-stage product-market fit search.
                            </div>
</div>
</div>

<div className="border border-slate-200 rounded overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-navy-900">How do you charge for your services?</span>
<span className="text-slate-400 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</button>
<div className="h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white">
<div className="p-6 text-slate-600 font-light leading-relaxed border-t border-slate-100">
                                We offer project-based fees for defined strategic interventions and retainer models for ongoing advisory. We do not charge hourly, as we focus on value delivered rather than time spent.
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-950 text-white relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-slate-700 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<h2 className="text-sm font-semibold text-gold-500 uppercase tracking-widest mb-3">Contact</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Let's discuss your<br/>next strategic move.</h3>
<p className="text-slate-400 font-light text-lg mb-12 max-w-md">
                            Schedule a preliminary consultation to determine if we are the right fit for your business objectives.
                        </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-navy-800 rounded flex items-center justify-center text-gold-500 shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-1">Email</div>
<a className="text-xl hover:text-gold-500 transition-colors" href="mailto:office@kensington.sg">office@kensington.sg</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-navy-800 rounded flex items-center justify-center text-gold-500 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-1">Office</div>
<div className="text-lg leading-relaxed text-slate-300">
                                        One Raffles Place, Tower 2<br/>
                                        Singapore 048616
                                    </div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded p-8 md:p-10 reveal text-slate-800 shadow-2xl shadow-black/20">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-navy-900 transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-navy-900 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Business Email</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-navy-900 transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Inquiry Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-slate-200 rounded p-3 text-sm text-center hover:bg-slate-50 transition-colors">
                                            Strategy
                                        </div>
</label>
<label className="cursor-pointer relative">
<input className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-slate-200 rounded p-3 text-sm text-center hover:bg-slate-50 transition-colors">
                                            Operations
                                        </div>
</label>
<label className="cursor-pointer relative">
<input className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-slate-200 rounded p-3 text-sm text-center hover:bg-slate-50 transition-colors">
                                            Advisory
                                        </div>
</label>
<label className="cursor-pointer relative">
<input className="custom-radio sr-only" name="type" type="radio"/>
<div className="border border-slate-200 rounded p-3 text-sm text-center hover:bg-slate-50 transition-colors">
                                            Other
                                        </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Context</label>
<textarea className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-navy-900 transition-colors resize-none" placeholder="Brief details about your challenge..." rows="3"></textarea>
</div>
<button className="w-full bg-navy-900 text-white py-4 rounded font-medium tracking-wide hover:bg-navy-800 transition-all flex items-center justify-center gap-2 group" type="button">
                                Request Consultation
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-navy-950 text-slate-500 py-12 border-t border-navy-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
<div className="tracking-wide">
                © 2023 Kensington &amp; Partners. All rights reserved.
            </div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
