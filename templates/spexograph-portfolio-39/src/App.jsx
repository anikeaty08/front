import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#0a0a0a',
surface: '#121212',
primary: '#8a2be2', // Blue Violet
secondary: '#9b59b6', // Amethyst
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Montserrat', 'sans-serif'], // Used for Headings (Gotham alt)
}
}
}
}



        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });

        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-0');
            } else {
                navbar.classList.remove('py-0');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-white/5"></div>
<div className="relative container mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-primary h-8 w-8" data-lucide="hexagon"></i>
<span className="font-display font-semibold text-xl tracking-tight text-white">SPEXOGRAPH</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#about">Why Us</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">Stories</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 bg-primary/20 border border-primary/50 rounded-lg hover:bg-primary hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:-translate-y-0.5 font-display" href="#contact">
                Get Started
            </a>
<button className="md:hidden text-white">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-float-delayed"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm" data-aos="fade-down">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Now accepting new projects</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.1]" data-aos="fade-up" data-aos-delay="100">
                Your Professional <br/>
<span className="text-gradient">Website, Your Way</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light" data-aos="fade-up" data-aos-delay="200">
                We design sleek, futuristic portfolios for students, freelancers, and professionals. Stand out with a digital identity that speaks volumes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black font-display font-semibold rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group" href="#pricing">
                    Explore Websites
                    <i className="h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-display font-medium rounded-lg hover:bg-white/5 transition-all" href="#services">
                    View Services
                </a>
</div>

<div className="mt-20 relative mx-auto max-w-4xl h-64 md:h-96 border border-white/10 rounded-xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
<div className="absolute inset-0 grid grid-cols-6 gap-4 p-8 opacity-30">

<div className="col-span-2 h-32 bg-primary/40 rounded-lg animate-pulse"></div>
<div className="col-span-4 h-32 border border-white/20 rounded-lg"></div>
<div className="col-span-3 h-40 border border-white/20 rounded-lg"></div>
<div className="col-span-3 h-40 bg-secondary/20 rounded-lg"></div>
</div>
<div className="z-10 text-center">
<i className="mx-auto h-16 w-16 text-primary mb-4" data-lucide="code-2"></i>
<p className="font-display text-xl tracking-tight text-white">SPEXOGRAPH Engine v.2.0</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-background" id="services">
<div className="container mx-auto px-6">
<div className="text-center mb-16" data-aos="fade-up">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-white mb-4">Crafted for Excellence</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Hover over the cards to discover our specialized services tailored for your growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group h-80 w-full perspective-1000" data-aos="fade-up" data-aos-delay="100">
<div className="relative h-full w-full shadow-xl transition-all duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">

<div className="absolute inset-0 h-full w-full bg-surface border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 backface-hidden">
<div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
<i className="h-8 w-8" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-2xl font-display font-semibold text-white tracking-tight">Student Portfolios</h3>
<p className="text-neutral-500 mt-2 text-center text-sm">For interns &amp; graduates</p>
</div>

<div className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary/20 to-surface border border-primary/50 rounded-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center">
<h3 className="text-xl font-display font-semibold text-white mb-4">Showcase Your Potential</h3>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-primary" data-lucide="check"></i> Resume Integration</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-primary" data-lucide="check"></i> Project Gallery</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-primary" data-lucide="check"></i> Discounted Rates</li>
</ul>
<a className="mt-6 text-primary hover:text-white text-sm font-semibold flex items-center gap-1" href="#">Learn More <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>

<div className="group h-80 w-full perspective-1000" data-aos="fade-up" data-aos-delay="200">
<div className="relative h-full w-full shadow-xl transition-all duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">

<div className="absolute inset-0 h-full w-full bg-surface border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 backface-hidden">
<div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
<i className="h-8 w-8" data-lucide="briefcase"></i>
</div>
<h3 className="text-2xl font-display font-semibold text-white tracking-tight">Freelancer Hub</h3>
<p className="text-neutral-500 mt-2 text-center text-sm">For independent creators</p>
</div>

<div className="absolute inset-0 h-full w-full bg-gradient-to-br from-secondary/20 to-surface border border-secondary/50 rounded-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center">
<h3 className="text-xl font-display font-semibold text-white mb-4">Win More Clients</h3>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-secondary" data-lucide="check"></i> Case Studies Layout</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-secondary" data-lucide="check"></i> Service Listings</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-secondary" data-lucide="check"></i> Booking Integration</li>
</ul>
<a className="mt-6 text-secondary hover:text-white text-sm font-semibold flex items-center gap-1" href="#">Learn More <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>

<div className="group h-80 w-full perspective-1000" data-aos="fade-up" data-aos-delay="300">
<div className="relative h-full w-full shadow-xl transition-all duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">

<div className="absolute inset-0 h-full w-full bg-surface border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 backface-hidden">
<div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
<i className="h-8 w-8" data-lucide="building-2"></i>
</div>
<h3 className="text-2xl font-display font-semibold text-white tracking-tight">Corporate</h3>
<p className="text-neutral-500 mt-2 text-center text-sm">For established businesses</p>
</div>

<div className="absolute inset-0 h-full w-full bg-gradient-to-br from-white/10 to-surface border border-white/30 rounded-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center">
<h3 className="text-xl font-display font-semibold text-white mb-4">Scale Your Brand</h3>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-white" data-lucide="check"></i> High Performance</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-white" data-lucide="check"></i> SEO Optimization</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-white" data-lucide="check"></i> Analytics Dashboard</li>
</ul>
<a className="mt-6 text-white hover:text-primary text-sm font-semibold flex items-center gap-1" href="#">Learn More <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface/30 border-y border-white/5" id="about">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3" data-aos="fade-right">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-white mb-6">Why <br/>SPEXOGRAPH?</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        We don't just build websites; we architect digital experiences. Our proprietary design system ensures your site is faster, sleeker, and more effective than the competition.
                    </p>
<div className="flex items-center gap-4">
<div className="h-12 w-px bg-gradient-to-b from-primary to-transparent"></div>
<div>
<p className="text-2xl font-display font-bold text-white">99.9%</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Uptime Guarantee</p>
</div>
</div>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer" data-aos="fade-up">
<i className="text-primary mb-4 h-6 w-6 group-hover:scale-110 transition-transform" data-lucide="zap"></i>
<h3 className="text-lg font-display font-medium text-white mb-2">Lightning Fast</h3>
<p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">Optimized code ensuring sub-second load times for better SEO.</p>
</div>

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-secondary/50 transition-colors group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
<i className="text-secondary mb-4 h-6 w-6 group-hover:scale-110 transition-transform" data-lucide="smartphone"></i>
<h3 className="text-lg font-display font-medium text-white mb-2">Mobile First</h3>
<p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">Responsive designs that look flawless on any device size.</p>
</div>

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-blue-500/50 transition-colors group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
<i className="text-blue-500 mb-4 h-6 w-6 group-hover:scale-110 transition-transform" data-lucide="shield-check"></i>
<h3 className="text-lg font-display font-medium text-white mb-2">Secure &amp; Safe</h3>
<p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">Enterprise-grade security protocols included in every package.</p>
</div>

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-pink-500/50 transition-colors group cursor-pointer" data-aos="fade-up" data-aos-delay="300">
<i className="text-pink-500 mb-4 h-6 w-6 group-hover:scale-110 transition-transform" data-lucide="palette"></i>
<h3 className="text-lg font-display font-medium text-white mb-2">Dark Mode Native</h3>
<p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">Designed with eye-comfort and battery saving aesthetics in mind.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-16" data-aos="fade-up">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-white mb-4">Transparent Pricing</h2>
<p className="text-neutral-400">Choose the plan that fits your career stage.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="group h-[450px] w-full perspective-1000" data-aos="flip-left">
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 bg-surface border border-white/10 rounded-2xl p-8 flex flex-col backface-hidden">
<div className="mb-4">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-neutral-400">Student ID Required</span>
</div>
<h3 className="text-xl font-display text-white mb-2">Starter</h3>
<div className="text-4xl font-display font-semibold text-white mb-6">$20<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<div className="flex-grow">
<p className="text-neutral-400 text-sm">Essential tools for students to showcase academic projects.</p>
</div>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors">See Details</button>
</div>

<div className="absolute inset-0 bg-neutral-900 border border-white/20 rounded-2xl p-8 flex flex-col rotate-y-180 backface-hidden">
<h3 className="text-lg font-display font-semibold text-white mb-6">Plan Details</h3>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> 5 Portfolio Pages</li>
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> Free .site Domain</li>
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> Mobile Responsive</li>
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> Basic Analytics</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-semibold mt-auto hover:bg-neutral-200 transition-colors">Get Started</button>
</div>
</div>
</div>

<div className="group h-[450px] w-full perspective-1000" data-aos="flip-left" data-aos-delay="100">
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 bg-[#1a1a1a] border border-primary/50 rounded-2xl p-8 flex flex-col backface-hidden shadow-[0_0_30px_rgba(138,43,226,0.15)]">
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-medium text-primary">Popular</span>
</div>
<h3 className="text-xl font-display text-white mb-2">Professional</h3>
<div className="text-4xl font-display font-semibold text-white mb-6">$45<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<div className="flex-grow">
<p className="text-neutral-400 text-sm">Advanced features for freelancers ready to scale their business.</p>
</div>
<button className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">See Details</button>
</div>

<div className="absolute inset-0 bg-primary/10 border border-primary rounded-2xl p-8 flex flex-col rotate-y-180 backface-hidden backdrop-blur-xl">
<h3 className="text-lg font-display font-semibold text-white mb-6">Pro Features</h3>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex items-center gap-3"><i className="text-primary h-4 w-4" data-lucide="check"></i> Unlimited Pages</li>
<li className="flex items-center gap-3"><i className="text-primary h-4 w-4" data-lucide="check"></i> Custom .com Domain</li>
<li className="flex items-center gap-3"><i className="text-primary h-4 w-4" data-lucide="check"></i> SEO Booster Pack</li>
<li className="flex items-center gap-3"><i className="text-primary h-4 w-4" data-lucide="check"></i> Priority 24/7 Support</li>
</ul>
<button className="w-full py-3 rounded-lg bg-primary text-white font-semibold mt-auto shadow-lg hover:shadow-primary/50 transition-all">Go Professional</button>
</div>
</div>
</div>

<div className="group h-[450px] w-full perspective-1000" data-aos="flip-left" data-aos-delay="200">
<div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute inset-0 bg-surface border border-white/10 rounded-2xl p-8 flex flex-col backface-hidden">
<div className="mb-4">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-neutral-400">Business</span>
</div>
<h3 className="text-xl font-display text-white mb-2">Agency</h3>
<div className="text-4xl font-display font-semibold text-white mb-6">$99<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<div className="flex-grow">
<p className="text-neutral-400 text-sm">Full-scale digital infrastructure for agencies and small firms.</p>
</div>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors">See Details</button>
</div>

<div className="absolute inset-0 bg-neutral-900 border border-white/20 rounded-2xl p-8 flex flex-col rotate-y-180 backface-hidden">
<h3 className="text-lg font-display font-semibold text-white mb-6">Agency Power</h3>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> Dedicated Account Mgr</li>
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> E-commerce Ready</li>
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> Advanced Security</li>
<li className="flex items-center gap-3"><i className="text-green-500 h-4 w-4" data-lucide="check"></i> Weekly Backups</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-semibold mt-auto hover:bg-neutral-200 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="testimonials">
<div className="container mx-auto px-6">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-white mb-12 text-center">User Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-white/10 transition-colors" data-aos="fade-up">
<i className="text-primary h-8 w-8 mb-6 opacity-50" data-lucide="quote"></i>
<p className="text-neutral-300 mb-6 leading-relaxed">"The dark mode aesthetic matches my design style perfectly. SPEXOGRAPH made my portfolio look like it belongs in 2030."</p>
<div>
<p className="text-white font-display font-semibold">Alex Chen</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide">UX Designer</p>
</div>
</div>

<div className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="100">
<i className="text-secondary h-8 w-8 mb-6 opacity-50" data-lucide="quote"></i>
<p className="text-neutral-300 mb-6 leading-relaxed">"As a student, the discount was a lifesaver. But the quality? It's better than agencies charging 10x more."</p>
<div>
<p className="text-white font-display font-semibold">Sarah Jenkins</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide">CS Student</p>
</div>
</div>

<div className="p-8 bg-surface border border-white/5 rounded-2xl hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="200">
<i className="text-white h-8 w-8 mb-6 opacity-50" data-lucide="quote"></i>
<p className="text-neutral-300 mb-6 leading-relaxed">"Client acquisition went up 40% after I switched to the Professional Plan. The site speed is incredible."</p>
<div>
<p className="text-white font-display font-semibold">Marcus V.</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Freelance Architect</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-surface to-background relative overflow-hidden">
<div className="container mx-auto px-6 relative z-10">
<div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-up">
<div className="md:w-1/2">
<h2 className="font-display font-semibold text-3xl tracking-tight text-white mb-4">Need Assistance?</h2>
<p className="text-neutral-400 mb-6">Our support team is online 24/7. Access guides, FAQs, or chat with a specialist instantly.</p>
<div className="flex gap-4">
<button className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-sm font-medium">
<i className="h-4 w-4" data-lucide="book-open"></i> Read Guides
                        </button>
<button className="flex items-center gap-2 px-6 py-3 text-primary hover:text-white transition-colors text-sm font-medium">
<i className="h-4 w-4" data-lucide="message-square"></i> Start Chat
                        </button>
</div>
</div>
<div className="md:w-1/2 flex justify-center">
<div className="relative w-full max-w-sm">

<div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
<div className="p-6 bg-black border border-white/10 rounded-xl relative">
<div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="text-xs text-neutral-500 ml-auto">Support_Bot.exe</span>
</div>
<div className="space-y-3">
<div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-neutral-300 w-3/4">How can I help you elevate your portfolio today?</div>
<div className="bg-primary/20 p-3 rounded-lg rounded-tr-none text-xs text-white w-3/4 ml-auto">I need to upgrade my plan.</div>
<div className="flex gap-1 mt-2">
<span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce"></span>
<span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce delay-100"></span>
<span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce delay-200"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-white/5" id="contact">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
<div className="lg:w-1/2">
<h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-white mb-8">LET'S TALK.</h2>
<p className="text-neutral-400 max-w-md mb-8">Ready to launch your digital presence? Join thousands of professionals using SPEXOGRAPH.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md">
<input className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-primary flex-grow" placeholder="Enter e-mail" type="email"/>
<button className="bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/80 transition-colors">Subscribe</button>
</form>
</div>
<div className="lg:w-1/2 flex flex-wrap gap-12 lg:gap-24">
<div>
<h4 className="text-white font-display font-semibold mb-6">Platform</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-primary transition-colors" href="#">Home</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Work</a></li>
<li><a className="hover:text-primary transition-colors" href="#">About</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-display font-semibold mb-6">Resources</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-primary transition-colors" href="#">Style Guide</a></li>
<li><a className="hover:text-primary transition-colors" href="#">404 Page</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Licenses</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-display font-semibold mb-6">Socials</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-primary transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Twitter X</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<i className="text-white/20 h-5 w-5" data-lucide="hexagon"></i>
<span className="text-neutral-600 text-sm">© 2024 SPEXOGRAPH. All rights reserved.</span>
</div>
<div className="text-neutral-700 font-display font-bold text-6xl md:text-8xl opacity-10 select-none tracking-tighter">
                    FLAUNT.
                </div>
</div>
</div>
</footer>




    </>
  );
}
