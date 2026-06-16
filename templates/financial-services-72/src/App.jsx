import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
dark: '#0B1628',
light: '#132744',
gold: '#C9A44E',
cream: '#FFFDF8',
gray: '#8B95A5',
}
},
backgroundImage: {
'gold-gradient': 'linear-gradient(135deg, #C9A44E 0%, #E4C97A 100%)',
'dark-gradient': 'radial-gradient(circle at 50% 0%, #132744 0%, #0B1628 100%)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // --- Modal Logic ---
        function toggleModal(show) {
            const overlay = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            
            if (show) {
                overlay.classList.remove('hidden');
                content.classList.remove('hidden');
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                    content.classList.remove('opacity-0', 'scale-95');
                }, 10);
                document.body.style.overflow = 'hidden';
            } else {
                overlay.classList.add('opacity-0');
                content.classList.add('opacity-0', 'scale-95');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    content.classList.add('hidden');
                }, 300);
                document.body.style.overflow = '';
            }
        }

        // --- Tab Switching Logic ---
        function switchTab(event, tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-brand-dark', 'text-brand-gold', 'border-brand-dark');
                btn.classList.add('bg-white', 'text-brand-gray', 'border-gray-200');
            });

            event.currentTarget.classList.remove('bg-white', 'text-brand-gray', 'border-gray-200');
            event.currentTarget.classList.add('active', 'bg-brand-dark', 'text-brand-gold', 'border-brand-dark');

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(tabId).classList.add('active');
        }

        // --- Intersection Observer ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });

        // --- Navbar Scroll Effect ---
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 10) {
                nav.classList.add('shadow-lg');
                nav.style.background = 'rgba(11, 22, 40, 0.9)';
            } else {
                nav.classList.remove('shadow-lg');
                nav.style.background = 'rgba(11, 22, 40, 0.8)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-brand-dark/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300" id="modal-overlay" onclick="toggleModal(false)"></div>
<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-full max-w-lg hidden scale-95 opacity-0 transition-all duration-300" id="modal-content">
<div className="bg-white rounded-2xl shadow-2xl overflow-hidden m-4">
<div className="bg-brand-dark p-6 flex justify-between items-center">
<div>
<h3 className="text-white font-serif text-xl tracking-tight">Request Consultation</h3>
<p className="text-brand-gray text-xs mt-1">Start your journey to financial independence.</p>
</div>
<button className="text-brand-gray hover:text-white transition-colors" onclick="toggleModal(false)">
<i data-lucide="x-circle" height="24" width="24"></i>
</button>
</div>
<div className="p-8">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-brand-gray font-semibold">First Name</label>
<input className="w-full bg-brand-cream border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-brand-gold transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-brand-gray font-semibold">Last Name</label>
<input className="w-full bg-brand-cream border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-brand-gold transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-brand-gray font-semibold">Email</label>
<input className="w-full bg-brand-cream border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-brand-gold transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-brand-gray font-semibold">Interest</label>
<div className="relative">
<select className="w-full bg-brand-cream border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-brand-gold transition-colors appearance-none text-brand-dark">
<option>General Financial Review</option>
<option>Retirement Planning</option>
<option>Life Insurance</option>
<option>Business Strategy</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-gold-gradient text-brand-dark font-semibold py-3.5 rounded-lg hover:shadow-lg hover:shadow-brand-gold/20 transition-all mt-2" type="button">
                        Submit Request
                    </button>
</form>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass h-20 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 bg-gold-gradient rounded flex items-center justify-center text-brand-dark shadow-lg shadow-brand-gold/10 group-hover:scale-105 transition-transform">
<span className="font-serif font-semibold text-lg tracking-tighter">PL</span>
</div>
<span className="text-white font-serif text-lg tracking-tight hidden sm:block">Promised Land Leadership Academy</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-brand-gray hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-brand-gray hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-brand-gray hover:text-white transition-colors" href="#team">Team</a>
<a className="text-sm font-medium text-brand-gray hover:text-white transition-colors" href="#why-us">Why Us</a>

<a className="text-sm font-medium text-brand-gold border border-brand-gold/40 px-5 py-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all flex items-center gap-2" href="https://registration.wfglaunch.com/" target="_blank">
                    Join the Movement
                </a>
</div>

<div className="flex items-center gap-4">
<button className="bg-white/10 hover:bg-white/15 border border-white/10 text-white px-5 py-2 rounded text-sm font-medium transition-all flex items-center gap-2" onclick="toggleModal(true)">
<span>Contact Us</span>
<i className="text-brand-gold w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">

<div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-light opacity-40 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 lg:col-start-2 text-center lg:text-left fade-up">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 mb-8 mx-auto lg:mx-0">
<i className="text-brand-gold w-3 h-3" data-lucide="star"></i>
<span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Plano, Texas HQ • Serving All 50 States</span>
</div>

<h1 className="font-serif text-5xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-8">
                    Your financial future <br className="hidden md:block"/>
<span className="text-gradient-gold italic pr-2">deserves more</span> than <br className="hidden md:block"/>
                    a standard template.
                </h1>

<p className="text-brand-gray text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                    From our headquarters in Texas, the Academy empowers families and businesses across America to build lasting wealth through personalized insurance strategies and financial education.
                </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="bg-gold-gradient text-brand-dark px-8 py-3.5 rounded text-base font-semibold hover:shadow-lg hover:shadow-brand-gold/20 transition-all flex items-center justify-center gap-2 group" onclick="toggleModal(true)">
                        Free Consultation
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<a className="px-8 py-3.5 rounded text-base font-medium text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center" href="#services">
                        Explore Services
                    </a>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6">
<div className="text-left">
<div className="text-2xl text-white font-serif">Nationwide</div>
<div className="text-xs text-brand-gray uppercase tracking-wider mt-1">Service Area</div>
</div>
<div className="text-left">
<div className="text-2xl text-white font-serif">$50M+</div>
<div className="text-xs text-brand-gray uppercase tracking-wider mt-1">Coverage Placed</div>
</div>
<div className="text-left">
<div className="text-2xl text-white font-serif">10+</div>
<div className="text-xs text-brand-gray uppercase tracking-wider mt-1">Top Carriers</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-brand-gray uppercase tracking-widest mb-8">Trusted by the Nation's Leading Carriers</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-serif text-xl text-brand-dark">Pacific Life</span>
<span className="font-serif text-xl text-brand-dark">John Hancock</span>
<span className="font-serif text-xl text-brand-dark">Prudential</span>
<span className="font-serif text-xl text-brand-dark">Transamerica</span>
<span className="font-serif text-xl text-brand-dark">Nationwide</span>
<span className="font-serif text-xl text-brand-dark">Aegon</span>
</div>
</div>
</section>

<section className="py-24 bg-brand-cream" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-12 fade-up">
<span className="text-brand-gold text-xs font-semibold uppercase tracking-widest block mb-3">Our Expertise</span>
<h2 className="font-serif text-4xl text-brand-dark tracking-tight leading-tight">Comprehensive strategies for <br/>every stage of life.</h2>
</div>

<div className="flex flex-wrap gap-2 mb-12 fade-up" id="tab-nav">
<button className="tab-btn active px-6 py-2.5 rounded-full text-sm font-medium transition-all border border-brand-dark bg-brand-dark text-brand-gold" onclick="switchTab(event, 'protection')">
                    Protection
                </button>
<button className="tab-btn px-6 py-2.5 rounded-full text-sm font-medium transition-all border border-gray-200 bg-white text-brand-gray hover:border-gray-300" onclick="switchTab(event, 'wealth')">
                    Wealth Building
                </button>
<button className="tab-btn px-6 py-2.5 rounded-full text-sm font-medium transition-all border border-gray-200 bg-white text-brand-gray hover:border-gray-300" onclick="switchTab(event, 'business')">
                    Business Solutions
                </button>
</div>

<div className="tab-content active grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="protection">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Life Insurance</h3>
<p className="text-sm text-brand-gray leading-relaxed">Term and permanent solutions designed to provide tax-free benefits and peace of mind for your loved ones.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Mortgage Protection</h3>
<p className="text-sm text-brand-gray leading-relaxed">Ensure your family can keep their home in the event of death, disability, or critical illness.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Living Benefits</h3>
<p className="text-sm text-brand-gray leading-relaxed">Access your policy's face value while alive to cover costs associated with chronic, critical, or terminal illness.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:umbrella-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Final Expense</h3>
<p className="text-sm text-brand-gray leading-relaxed">Dignified coverage to handle funeral costs and medical bills, removing the financial burden from grieving families.</p>
</div>
</div>

<div className="tab-content grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="wealth">
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Indexed Annuities</h3>
<p className="text-sm text-brand-gray leading-relaxed">Protect your principal while participating in market upside, guaranteeing income for life.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">IUL Strategies</h3>
<p className="text-sm text-brand-gray leading-relaxed">Utilize Indexed Universal Life policies for tax-free retirement income and cash value accumulation.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Debt Elimination</h3>
<p className="text-sm text-brand-gray leading-relaxed">Strategic planning to eliminate bad debt and recapture interest to build personal wealth.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">College Planning</h3>
<p className="text-sm text-brand-gray leading-relaxed">Funding strategies that protect your retirement while preparing for your children's education.</p>
</div>
</div>

<div className="tab-content grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="business">
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Key Person Ins.</h3>
<p className="text-sm text-brand-gray leading-relaxed">Protect your business against the financial loss arising from the death of a key executive.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Buy-Sell Agreements</h3>
<p className="text-sm text-brand-gray leading-relaxed">Funded strategies to ensure smooth business transition and fair compensation for partners.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:crown-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Executive Bonus</h3>
<p className="text-sm text-brand-gray leading-relaxed">Attract and retain top talent with tax-advantaged compensation packages.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
<iconify-icon icon="solar:case-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-brand-dark mb-2">Employee Benefits</h3>
<p className="text-sm text-brand-gray leading-relaxed">Comprehensive voluntary benefit packages at no direct cost to the business owner.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative overflow-hidden" id="why-us">

<div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<span className="text-brand-gold text-xs font-semibold uppercase tracking-widest block mb-3">About The Academy</span>
<h2 className="font-serif text-4xl text-white tracking-tight leading-tight mb-6">More than insurance agents.<br/>We are financial architects.</h2>
<p className="text-brand-gray text-lg leading-relaxed mb-8">
                        Promised Land Leadership Academy was founded on the belief that financial literacy is the key to breaking generational cycles. We don't just sell policies; we educate families on how money works.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<i className="text-brand-gold w-6 h-6 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<strong className="text-white block font-serif">Independent Fiduciary Standard</strong>
<span className="text-sm text-brand-gray">We work for you, not the insurance companies. We shop the top carriers to find the best fit.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-gold w-6 h-6 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<strong className="text-white block font-serif">Holistic Approach</strong>
<span className="text-sm text-brand-gray">We analyze your entire financial picture to ensure protection and growth work in harmony.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-gold w-6 h-6 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<strong className="text-white block font-serif">National Reach, Local Touch</strong>
<span className="text-sm text-brand-gray">Headquartered in Plano, Texas, leveraging digital tools to serve clients in all 50 states.</span>
</div>
</li>
</ul>
<button className="bg-white text-brand-dark px-8 py-3 rounded text-sm font-semibold hover:bg-brand-cream transition-colors" onclick="toggleModal(true)">
                        Schedule an Introduction
                    </button>
</div>
<div className="relative fade-up delay-200">
<div className="absolute -inset-4 bg-gold-gradient opacity-20 blur-2xl rounded-2xl"></div>
<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-serif text-xl font-bold">PL</div>
<div>
<div className="text-white font-serif text-lg">Leadership Academy</div>
<div className="text-brand-gray text-xs uppercase tracking-wide">Excellence in Finance</div>
</div>
</div>
<blockquote className="text-xl text-white/90 italic font-serif leading-relaxed mb-6">
                            "The goal isn't just to be rich. The goal is to be free. We provide the blueprint to get you there."
                        </blockquote>
<div className="h-px w-full bg-white/10 mb-4"></div>
<div className="flex justify-between items-center text-sm text-brand-gray">
<span>Based in Texas</span>
<span>Est. 2024</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-gold-gradient rounded flex items-center justify-center text-brand-dark font-serif font-bold text-sm">PL</div>
<span className="text-white font-serif tracking-tight">Promised Land</span>
</a>
<p className="text-brand-gray text-sm leading-relaxed mb-6">
                        Empowering families and businesses to build, protect, and preserve wealth through innovative financial strategies.
                    </p>
<div className="flex gap-4">
<a className="text-brand-gray hover:text-brand-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-brand-gray hover:text-brand-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-brand-gray hover:text-brand-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-serif mb-4">Services</h4>
<ul className="space-y-2 text-sm text-brand-gray">
<li><a className="hover:text-brand-gold transition-colors" href="#">Life Insurance</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Retirement Planning</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Business Solutions</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Debt Elimination</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-4">Company</h4>
<ul className="space-y-2 text-sm text-brand-gray">
<li><a className="hover:text-brand-gold transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://registration.wfglaunch.com/" target="_blank">Careers</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-brand-gray">
<li className="flex items-start gap-3">
<i className="text-brand-gold w-4 h-4 mt-1" data-lucide="map-pin"></i>
<span>Plano, Texas<br/>Serving All 50 States</span>
</li>
<li className="flex items-center gap-3">
<i className="text-brand-gold w-4 h-4" data-lucide="phone"></i>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<i className="text-brand-gold w-4 h-4" data-lucide="mail"></i>
<span>info@promisedland.academy</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-brand-gray text-center md:text-left">
                    © 2024 Promised Land Leadership Academy. All rights reserved. <br className="md:hidden"/>
<span className="opacity-50 mt-2 block md:inline md:mt-0">Not an offer to sell securities. Products offered through independent carriers.</span>
</p>
</div>
</div>
</footer>



    </>
  );
}
