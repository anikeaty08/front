import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
950: '#020617', // Deepest Navy
900: '#0f172a', // Slate Navy
800: '#1e293b',
accent: '#3b82f6', // Royal Blue
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
}
}
}
}



        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Hero Animation
            const heroTimeline = gsap.timeline();
            heroTimeline.to(".hero-elem", {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });

            // Services Cards Animation
            gsap.utils.toArray('.service-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "power2.out"
                });
            });

            // Section Headers
            gsap.utils.toArray('h2').forEach(header => {
                gsap.from(header, {
                    scrollTrigger: {
                        trigger: header,
                        start: "top 80%",
                    },
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-brand-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex text-white bg-gradient-to-br from-blue-600 to-indigo-700 w-8 h-8 rounded items-center justify-center" style={{visibility: 'hidden'}}>
</div>
<span className="group-hover:text-blue-200 transition-colors text-lg font-medium text-white tracking-tight">AXIOM ZOOM</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#location">Location</a>
<a className="px-5 py-2.5 rounded-full bg-white text-brand-950 hover:bg-slate-200 transition-all font-semibold" href="#contact">Book Consultation</a>
</div>

<button className="md:hidden text-white" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-brand-950 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<button className="absolute top-6 right-6 text-slate-400" id="close-menu">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="text-2xl font-light text-white tracking-tight mobile-link" href="#services">Services</a>
<a className="text-2xl font-light text-white tracking-tight mobile-link" href="#about">About</a>
<a className="text-2xl font-light text-white tracking-tight mobile-link" href="#location">Location</a>
<a className="text-2xl font-light text-blue-400 tracking-tight mobile-link" href="#contact">Contact Us</a>
</div>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
<div className="opacity-[0.03] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs font-medium mb-8 hero-elem opacity-0" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Based in Balanagar, Hyderabad
            </div>
<h1 className="md:text-7xl hero-elem leading-[1.1] text-5xl font-medium text-white tracking-tight opacity-0 mb-6" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
                Precision in Finance.<br/>
<span className="text-gradient">Strategic Growth.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 hero-elem opacity-0 font-light leading-relaxed" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
                Axiom Zoom provides expert accounting, taxation, and compliance solutions for businesses and professionals who value peace of mind.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-elem opacity-0" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<a className="w-full sm:w-auto px-8 py-3.5 rounded bg-white text-brand-950 font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group" href="#contact">
<span>Free Consultation</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded border border-slate-700 text-white hover:bg-slate-800 transition-all font-medium" href="#services">
                    View Services
                </a>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-brand-900/30">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">10+</p>
<p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Years Experience</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">500+</p>
<p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Clients Served</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">100%</p>
<p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Compliance Rate</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight mb-1">24h</p>
<p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Response Time</p>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 20px)'}}>Comprehensive Financial Solutions</h2>
<p className="text-slate-400 max-w-xl font-light">End-to-end accounting and advisory services designed to help Hyderabad businesses scale without compliance hurdles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="service-card glass-panel p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:document-add-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Income Tax Filing</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Expert ITR filing for individuals and corporates. Tax planning strategies to minimize liabilities legally.</p>
</div>

<div className="service-card glass-panel p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:bill-list-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">GST Registration &amp; Returns</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Seamless GST registration, monthly filing, and reconciliation services for hassle-free trade.</p>
</div>

<div className="service-card glass-panel p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:buildings-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Company Registration</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Incorporation of Pvt Ltd, LLP, and OPC in Hyderabad with complete ROC compliance handling.</p>
</div>

<div className="service-card glass-panel p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Bookkeeping</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Accurate day-to-day accounting maintenance using modern software like Tally and Zoho Books.</p>
</div>

<div className="service-card glass-panel p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Audit &amp; Assurance</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Internal audits, statutory audits, and tax audits to ensure financial transparency and accuracy.</p>
</div>

<div className="service-card glass-panel p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:hand-stars-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Startup Advisory</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">Financial modeling, valuation, and fundraising compliance support for Hyderabad's startup ecosystem.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-900 border-y border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<span className="text-blue-400 font-medium tracking-wide uppercase text-xs mb-4 block">About Axiom Zoom</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 20px)'}}>More than just accountants. We are your strategic partners.</h2>
<p className="text-slate-400 font-light mb-6 leading-relaxed">
                    Located in the industrial hub of Balanagar, Hyderabad, Axiom Zoom combines traditional financial ethics with modern technological efficiency. We understand the unique challenges faced by MSMEs and large enterprises alike.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-300 font-light">Proactive compliance alerts to avoid penalties.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-300 font-light">Transparent fee structure with no hidden costs.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-300 font-light">Specialized expertise in Telangana state regulations.</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl blur-2xl"></div>
<div className="relative glass-panel rounded-2xl p-8 border border-white/10">
<div className="space-y-6">
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">1</div>
<div>
<h4 className="text-white font-medium">Analyze</h4>
<p className="text-sm text-slate-500">Deep dive into your current financial health.</p>
</div>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">2</div>
<div>
<h4 className="text-white font-medium">Strategize</h4>
<p className="text-sm text-slate-500">Develop tax-efficient structures.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">3</div>
<div>
<h4 className="text-white font-medium">Execute</h4>
<p className="text-sm text-slate-500">Timely filing and rigorous compliance.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white tracking-tight mb-16" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 20px)'}}>Trusted by Hyderabad Businesses</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">"Axiom Zoom handled our company incorporation in Balanagar seamlessly. Their advice on GST saved us significant time."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">RK</div>
<div>
<p className="text-white text-sm font-medium">Rajesh Kumar</p>
<p className="text-xs text-slate-500">Director, TechNova Solutions</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">"Highly professional team. They manage our monthly bookkeeping and tax returns with zero errors. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">AS</div>
<div>
<p className="text-white text-sm font-medium">Anitha Sharma</p>
<p className="text-xs text-slate-500">Owner, Retail Chains</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">"The best CA firm in Hyderabad for startups. They explained complex tax laws in simple language for us."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">VR</div>
<div>
<p className="text-white text-sm font-medium">Vikram Reddy</p>
<p className="text-xs text-slate-500">Founder, GreenAgro</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-brand-900" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 20px)'}}>Get in Touch</h2>
<p className="text-slate-400 font-light mb-8">Fill out the form below for a free initial consultation.</p>
<form action="https://formspree.io/f/xbjvzqrl" className="space-y-6" method="POST">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Name</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Phone</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Email</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Service Required</label>
<select className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors" name="service">
<option className="bg-brand-900 text-slate-300" value="Consultation">General Consultation</option>
<option className="bg-brand-900 text-slate-300" value="GST">GST Services</option>
<option className="bg-brand-900 text-slate-300" value="Income Tax">Income Tax Filing</option>
<option className="bg-brand-900 text-slate-300" value="Company Reg">Company Registration</option>
</select>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" name="message" placeholder="Brief details about your requirement..." rows="3"></textarea>
</div>
<button className="mt-4 px-8 py-3 w-full md:w-auto bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]" type="submit">
                        Send Message
                    </button>
</form>
</div>

<div className="flex flex-col h-full" id="location">
<div className="mb-8 p-6 glass-panel rounded-xl">
<h3 className="text-white font-medium mb-4">Visit Our Office</h3>
<div className="flex items-start gap-4 mb-4">
<iconify-icon className="text-blue-500 mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<p className="text-slate-400 font-light text-sm">
                            Axiom Zoom Consultancy<br/>
                            Plot No. 45, Industrial Area,<br/>
                            Balanagar, Hyderabad,<br/>
                            Telangana 500037
                        </p>
</div>
<div className="flex items-center gap-4 mb-2">
<iconify-icon className="text-blue-500" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<p className="text-slate-400 font-light text-sm">+91 40 2377 1234</p>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-blue-500" icon="solar:letter-linear" width="20"></iconify-icon>
<p className="text-slate-400 font-light text-sm">contact@axiomzoom.com</p>
</div>
</div>

<div className="flex-grow w-full h-64 lg:h-auto rounded-xl overflow-hidden border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.059293400713!2d78.4416!3d17.4568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c885555555%3A0x123456789abcdef!2sBalanagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<footer className="bg-brand-950 border-white/5 border-t pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight mb-2">AXIOM ZOOM</h3>
<p className="text-slate-500 text-sm font-light">Simplifying finance for a better tomorrow.</p>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:cat-bold" width="24"></iconify-icon></a> 
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="24"></iconify-icon></a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-light">
<p>© 2023 Axiom Zoom Consultancy. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
