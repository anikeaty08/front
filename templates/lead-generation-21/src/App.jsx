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
zinc: {
850: '#1f1f22',
950: '#09090b', // Deep dark background
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Icon Initialization
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Alpine.js Data logic
        document.addEventListener('alpine:init', () => {
            Alpine.data('leadForm', () => ({
                mobileMenuOpen: false,
                isModalOpen: false,
                modalType: 'General',
                loading: false,
                success: false,

                openModal(type) {
                    this.modalType = type;
                    this.isModalOpen = true;
                    this.success = false;
                },

                closeModal() {
                    this.isModalOpen = false;
                },

                async submitForm(e) {
                    this.loading = true;
                    const formData = new FormData(e.target);
                    const data = Object.fromEntries(formData.entries());
                    
                    // Add timestamp
                    const now = new Date();
                    data.submittedAt = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
                    
                    try {
                        // Webhook URL provided
                        const webhookUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzNjA0MzI1MjZlNTUzMzUxMzci_pc";
                        
                        // Use fetch with no-cors if Pabbly doesn't support CORS headers for direct browser fetch
                        // Note: no-cors mode limits response access, but request is sent. 
                        // For production, a backend proxy is better, but this fits the single-file request.
                        await fetch(webhookUrl, {
                            method: 'POST',
                            body: new URLSearchParams(data) // Send as form encoded
                        });

                        // Simulate success delay
                        setTimeout(() => {
                            this.loading = false;
                            this.success = true;
                            e.target.reset();
                            setTimeout(() => this.closeModal(), 2000);
                        }, 1000);

                    } catch (error) {
                        console.error('Error:', error);
                        this.loading = false;
                        alert('Submission failed. Please try contacting us via Phone.');
                    }
                }
            }));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-1/3 h-1/3 bg-indigo-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
                    L
                </div>
<div className="flex flex-col">
<span className="text-white font-medium tracking-tight text-lg leading-none">LeadBig</span>
<span className="text-zinc-500 text-xs tracking-wide">Solutions Pvt Ltd</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#industries">Industries</a>
<a className="hover:text-white transition-colors" href="#vision">Vision</a>
<button @click="openModal('Partner')" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-full transition-all">
                    Partner With Us
                </button>
</div>

<button @click="mobileMenuOpen = !mobileMenuOpen" className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Next-Gen Growth Engine
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Your Growth Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital &amp; Demand</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-lg font-light leading-relaxed">
                    We bridge the gap between businesses, investors, and verified buyers. Free digital marketing meets elite lead intelligence.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-4 rounded-lg font-medium transition-all group" href="tel:9962845666">
<i className="w-4 h-4 text-zinc-600 group-hover:text-black" data-lucide="phone-call"></i>
                        Get Free Digital Marketing
                    </a>
<button @click="openModal('Buyer/Seller')" className="flex items-center justify-center gap-2 glass-panel text-white hover:bg-white/5 px-6 py-4 rounded-lg font-medium transition-all group border-white/10">
                        Register as Buyer/Seller
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center reveal-on-scroll">

<div className="relative w-full h-full max-w-md animate-float">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
<div className="glass-panel p-8 rounded-2xl relative z-10 w-full h-full flex flex-col justify-between border-white/10 shadow-2xl">
<div className="flex justify-between items-start">
<div className="space-y-1">
<div className="h-2 w-20 bg-zinc-700 rounded-full"></div>
<div className="h-2 w-12 bg-zinc-800 rounded-full"></div>
</div>
<div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<div className="text-sm text-zinc-300 font-medium">Verified Buyers</div>
<div className="text-xs text-zinc-500">Active &amp; High Intent</div>
</div>
</div>
<div className="w-full h-[1px] bg-zinc-800"></div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<div>
<div className="text-sm text-zinc-300 font-medium">Business Sellers</div>
<div className="text-xs text-zinc-500">Ready to Deal</div>
</div>
</div>
</div>
<div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-indigo-500/20 to-blue-500/10 border border-indigo-500/20">
<div className="text-2xl font-medium text-white tracking-tight">Elite Database</div>
<div className="text-xs text-zinc-400 mt-1">Huge network of premium leads across India</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Why LeadBig?</h2>
<p className="text-zinc-400 font-light">Most agencies focus on reach. We focus on results, intent, and closed deals.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 reveal-on-scroll">

<div className="p-8 rounded-2xl border border-dashed border-zinc-800 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<h3 className="text-xl font-medium text-zinc-500 mb-6">Traditional Agencies</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-500">
<i className="w-5 h-5" data-lucide="x"></i> Focus on generic reach
                        </li>
<li className="flex items-center gap-3 text-zinc-500">
<i className="w-5 h-5" data-lucide="x"></i> Upfront marketing costs
                        </li>
<li className="flex items-center gap-3 text-zinc-500">
<i className="w-5 h-5" data-lucide="x"></i> Random, unverified inquiries
                        </li>
<li className="flex items-center gap-3 text-zinc-500">
<i className="w-5 h-5" data-lucide="x"></i> Service provider mentality
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<span className="text-indigo-400">LeadBig Solutions</span>
</h3>
<ul className="space-y-4 relative z-10">
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="check-circle-2"></i> Free digital promotion for businesses
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="check-circle-2"></i> High-quality elite buyer &amp; seller leads
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="check-circle-2"></i> Verified, data-driven opportunities
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="check-circle-2"></i> Growth partner model (Commission based)
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16 reveal-on-scroll">
<span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">What We Do</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mt-2">Core Services</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-default group reveal-on-scroll">
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="megaphone"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Free Digital Marketing</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Zero upfront cost. We build your online visibility through search, social, and brand positioning first. Our goal is to help you grow before we earn.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-default group reveal-on-scroll">
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Elite Lead Generation</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    We generate exclusive, high-intent leads. Whether you need buyers, investors, or sellers, every lead is filtered and verified before it reaches you.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-default group reveal-on-scroll">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="network"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Multi-Industry Network</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    From Real Estate and Manufacturing to IT and Hospitality. If there is a buyer and a seller, our ecosystem connects them seamlessly.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-default group reveal-on-scroll">
<div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Lead Intelligence</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Access to verified elite customer profiles and buying intent data. We provide the intelligence needed for faster closures and higher success rates.
                </p>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-black/50" id="industries">
<div className="max-w-7xl mx-auto px-6 text-center reveal-on-scroll">
<h3 className="text-white text-lg font-medium mb-10">Trusted Across Industries</h3>
<div className="flex flex-wrap justify-center gap-4 md:gap-8">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="building-2"></i> Real Estate
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="shopping-bag"></i> Retail &amp; FMCG
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="factory"></i> Manufacturing
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="monitor"></i> IT &amp; SaaS
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="heart-pulse"></i> Healthcare
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="plane"></i> Travel &amp; Lifestyle
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="briefcase"></i> Business Sales
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-12 reveal-on-scroll">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">How It Works</h2>
<p className="text-zinc-400 mt-2">Simple. Transparent. Result-oriented.</p>
</div>
<div className="relative pl-8 border-l border-white/10 space-y-10">
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600"></div>
<h4 className="text-white font-medium">1. Onboarding &amp; Profiling</h4>
<p className="text-sm text-zinc-500 mt-1">We understand your business goals.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600"></div>
<h4 className="text-white font-medium">2. Digital Visibility &amp; Demand</h4>
<p className="text-sm text-zinc-500 mt-1">Strategic promotion to attract interest.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600"></div>
<h4 className="text-white font-medium">3. Matching &amp; Verification</h4>
<p className="text-sm text-zinc-500 mt-1">Filtering for intent and quality.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<h4 className="text-white font-medium">4. Growth &amp; Closure</h4>
<p className="text-sm text-zinc-500 mt-1">Connecting verified parties for deals.</p>
</div>
</div>
</div>

<div className="reveal-on-scroll">
<div className="h-full glass-panel rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">Partnership Model</div>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">10% - 15%</h3>
<p className="text-xl text-zinc-300 font-light mb-8">Commission on successful conversion.</p>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
                            We don't charge for marketing efforts. We collect our margin only from the overall business value after a successful deal. No risk, pure value.
                        </p>
<button @click="openModal('Elite Leads')" className="w-full bg-white text-black hover:bg-zinc-200 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                            Access Elite Leads <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-white/5" id="vision">
<div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Our Vision</h2>
<p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                To become India’s most trusted <span className="text-white">elite lead ecosystem</span>, empowering businesses with quality customers, strong digital presence, and real revenue opportunities.
            </p>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale?</h2>
<p className="text-zinc-400 mb-10 text-lg">Join business owners, startups, and investors growing with LeadBig.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button @click="openModal('Partner')" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/25">
                    Partner With LeadBig
                </button>
<a className="glass-panel text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2" href="https://wa.me/919962845666" target="_blank">
<i className="w-4 h-4 text-green-400" data-lucide="message-circle"></i> Chat on WhatsApp
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">L</div>
<span className="text-white font-medium text-lg">LeadBig</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                        Connecting verified buyers and sellers through advanced digital strategies.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-1 text-zinc-600" data-lucide="map-pin"></i>
<span>No. 110/2, Paper Mills Road, Agaram, Perambur Purasawalkam, Chennai - 600 082.</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:9962845666">9962845666</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:deveshleadbigsolutions@gmail.com">deveshleadbigsolutions@gmail.com</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Links</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><button @click="openModal('Buyer/Seller')" className="hover:text-white transition-colors text-left">Register</button></li>
<li><button @click="openModal('Partner')" className="hover:text-white transition-colors text-left">Partner Program</button></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
                © 2024 LeadBig Solutions Private Limited. All rights reserved.
            </div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" style={{display: 'none'}} x-show="isModalOpen">
<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

<div @click="closeModal()" className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" x-show="isModalOpen" x-transition:enter="ease-out duration-300" x-transition:enter-end="opacity-100" x-transition:enter-start="opacity-0" x-transition:leave="ease-in duration-200" x-transition:leave-end="opacity-0" x-transition:leave-start="opacity-100"></div>
<span aria-hidden="true" className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>

<div className="relative inline-block align-bottom bg-zinc-900 border border-white/10 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full" x-show="isModalOpen" x-transition:enter="ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:leave="ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100">
<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
<div className="sm:flex sm:items-start">
<div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
<h3 className="text-lg leading-6 font-medium text-white" id="modal-title">
<span x-text="modalType"></span> Registration
                            </h3>
<div className="mt-2">
<p className="text-sm text-zinc-400 mb-6">Fill in your details to get started with LeadBig.</p>
<form @submit.prevent="submitForm">
<input name="type" type="hidden" x-model="modalType"/>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Name</label>
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-zinc-700" name="name" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Phone</label>
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-zinc-700" name="phone" placeholder="Mobile Number" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Email</label>
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-zinc-700" name="email" placeholder="Email Address" required="" type="email"/>
</div>

<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wide">Industry / Interest</label>
<select className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" name="industry">
<option>Real Estate</option>
<option>Manufacturing</option>
<option>Retail/FMCG</option>
<option>IT/Services</option>
<option>Investment</option>
<option>Other</option>
</select>
</div>
</div>
<div className="mt-8 sm:flex sm:flex-row-reverse">
<button className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors" type="submit">
<span x-show="!loading">Submit Details</span>
<span className="animate-pulse" x-show="loading">Processing...</span>
</button>
<button @click="closeModal()" className="mt-3 w-full inline-flex justify-center rounded-lg border border-zinc-700 shadow-sm px-4 py-2 bg-transparent text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors" type="button">
                                            Cancel
                                        </button>
</div>
<p className="mt-4 text-green-400 text-sm text-center" x-show="success">Successfully submitted! We will contact you shortly.</p>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
