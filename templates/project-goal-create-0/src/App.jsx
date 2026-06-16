import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#0F172A', /* Dark Navy */
accent: '#F97316', /* Vivid Orange */
surface: '#FFFFFF',
subtle: '#F8FAFC',
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
'glow': '0 0 20px rgba(249, 115, 22, 0.15)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white group-hover:bg-accent transition-colors duration-300">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-bold tracking-tighter text-lg text-primary uppercase">Safety<span className="text-slate-400 font-normal">Service</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="hover:text-primary transition-colors" href="#process">Process</a>
<a className="hover:text-primary transition-colors" href="#results">Case Studies</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Log In</a>
<a className="group relative px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5" href="#audit">
<span className="relative z-10 flex items-center gap-2">
                        Get Compliant
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse"></div>
<div className="absolute top-40 left-0 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-[80px] mix-blend-multiply"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 reveal">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                New Compliance Standards 2024 Ready
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-primary tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] reveal delay-100">
                Turn Obligation into <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400 italic font-serif pr-2">Control.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed reveal delay-200">
                We transform complex legal safety requirements into a streamlined peace of mind. Comprehensive audits, PPOŻ, and BHP services for modern enterprise.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-300">
<button className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:-translate-y-1 hover:shadow-orange-500/30 flex items-center justify-center gap-2 group">
                    Start Your Audit
                    <iconify-icon className="text-xl group-hover:rotate-12 transition-transform" icon="solar:scanner-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                    See How It Works
                </button>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-white py-10 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center">Trusted by industry leaders across Europe</p>
</div>
<div className="flex whitespace-nowrap overflow-hidden mask-gradient-x w-full">
<div className="marquee-content flex gap-16 items-center px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter font-serif">ARCHITECT</span>
<span className="text-xl font-bold tracking-tighter">STRUCTURA</span>
<span className="text-xl font-bold tracking-tighter font-mono">LOGISTIX</span>
<span className="text-xl font-bold tracking-tighter">MERCANTILE</span>
<span className="text-xl font-bold tracking-tighter font-serif">VENTURE</span>
<span className="text-xl font-bold tracking-tighter">GLOBAL</span>
<span className="text-xl font-bold tracking-tighter font-mono">NEXUS</span>

<span className="text-xl font-bold tracking-tighter font-serif">ARCHITECT</span>
<span className="text-xl font-bold tracking-tighter">STRUCTURA</span>
<span className="text-xl font-bold tracking-tighter font-mono">LOGISTIX</span>
<span className="text-xl font-bold tracking-tighter">MERCANTILE</span>
<span className="text-xl font-bold tracking-tighter font-serif">VENTURE</span>
<span className="text-xl font-bold tracking-tighter">GLOBAL</span>
<span className="text-xl font-bold tracking-tighter font-mono">NEXUS</span>
<span className="text-xl font-bold tracking-tighter font-serif">ARCHITECT</span>
<span className="text-xl font-bold tracking-tighter">STRUCTURA</span>
<span className="text-xl font-bold tracking-tighter font-mono">LOGISTIX</span>
<span className="text-xl font-bold tracking-tighter">MERCANTILE</span>
<span className="text-xl font-bold tracking-tighter font-serif">VENTURE</span>
<span className="text-xl font-bold tracking-tighter">GLOBAL</span>
<span className="text-xl font-bold tracking-tighter font-mono">NEXUS</span>
</div>
</div>
</div>

<section className="py-24 bg-subtle" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">Complete Safety Ecosystem</h2>
<p className="text-slate-500 text-lg">We cover every angle of compliance so you can focus on growth.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-accent font-semibold hover:gap-2 transition-all" href="#">
                    View all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 reveal">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-primary mb-3">Fire Safety (PPOŻ)</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Expert inspections, evacuation planning, and system maintenance to ensure total facility readiness.</p>
<div className="w-full h-px bg-slate-100 mb-4 group-hover:bg-accent/20 transition-colors"></div>
<span className="text-xs font-semibold text-slate-400 group-hover:text-accent transition-colors flex items-center gap-1">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-primary mb-3">Health &amp; Safety (BHP)</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Comprehensive oversight, risk assessments, and documentation management for legal compliance.</p>
<div className="w-full h-px bg-slate-100 mb-4 group-hover:bg-blue-100 transition-colors"></div>
<span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-primary mb-3">Safety Equipment</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Provision and certification of high-end protective gear and signage for industrial environments.</p>
<div className="w-full h-px bg-slate-100 mb-4 group-hover:bg-emerald-100 transition-colors"></div>
<span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 reveal delay-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-primary mb-3">Cert. Training</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Modern e-learning and on-site workshops designed to engage employees, not just tick boxes.</p>
<div className="w-full h-px bg-slate-100 mb-4 group-hover:bg-purple-100 transition-colors"></div>
<span className="text-xs font-semibold text-slate-400 group-hover:text-purple-600 transition-colors flex items-center gap-1">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-accent"></span>
<span className="text-accent text-sm font-semibold tracking-wide uppercase">Why Choose Us</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold text-primary tracking-tight mb-8">
                        Peace of mind is not a luxury. It's a standard.
                    </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Traditional safety services are reactive. We are proactive. Our digital-first approach ensures you are audit-ready 365 days a year, not just on inspection day.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-primary">Real-time Dashboard Access</h4>
<p className="text-sm text-slate-500 mt-1">Track compliance status across all branches instantly.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-primary">Zero-Paperwork Guarantee</h4>
<p className="text-sm text-slate-500 mt-1">We digitize all protocols. No more dusty binders.</p>
</div>
</li>
</ul>
<a className="inline-flex items-center text-primary font-semibold border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-all" href="#">
                        Explore our methodology
                    </a>
</div>

<div className="relative reveal delay-200">
<div className="relative z-10 bg-slate-50 border border-slate-100 rounded-2xl p-2 shadow-2xl shadow-slate-200">
<div className="bg-white rounded-xl overflow-hidden border border-slate-100 aspect-[4/3] relative">

<div className="absolute top-0 left-0 w-full h-full bg-slate-50 flex flex-col p-6">

<div className="flex items-center justify-between mb-8">
<div className="w-24 h-4 bg-slate-200 rounded-full"></div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
</div>
</div>

<div className="flex gap-6 h-full">
<div className="w-2/3 flex flex-col gap-4">
<div className="h-32 bg-slate-100 rounded-lg w-full relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-16 bg-accent/10 rounded-t-lg"></div>
<div className="absolute bottom-0 left-4 w-8 h-10 bg-accent rounded-t-sm"></div>
<div className="absolute bottom-0 left-16 w-8 h-20 bg-primary/20 rounded-t-sm"></div>
<div className="absolute bottom-0 left-28 w-8 h-14 bg-primary/20 rounded-t-sm"></div>
</div>
<div className="h-4 bg-slate-100 rounded-full w-full"></div>
<div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
</div>
<div className="w-1/3 bg-primary rounded-lg p-4 flex flex-col justify-between">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-3xl font-bold text-white">98%</div>
<div className="text-[10px] text-slate-400 uppercase tracking-wide mt-1">Compliance Score</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary relative overflow-hidden" id="audit">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Is your company compliant?</h2>
<p className="text-slate-400 mb-10 max-w-xl mx-auto">Enter your company details for an instant preliminary safety score and recommendations.</p>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 md:p-4 max-w-2xl mx-auto shadow-2xl">
<form className="flex flex-col md:flex-row gap-2">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon className="text-lg" icon="solar:buildings-linear"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:bg-slate-900/70" placeholder="Company Name / NIP" type="text"/>
</div>
<div className="relative flex-grow md:max-w-[200px] group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<select className="w-full pl-11 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent appearance-none transition-all hover:bg-slate-900/70 cursor-pointer">
<option>1-10 Employees</option>
<option>11-50 Employees</option>
<option>50+ Employees</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="bg-accent hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-orange-900/20 whitespace-nowrap flex items-center justify-center gap-2 hover:shadow-orange-500/20" type="button">
                        Check Status
                        <iconify-icon className="animate-pulse" icon="solar:radar-linear"></iconify-icon>
</button>
</form>
<div className="mt-4 flex items-center justify-between px-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] text-slate-400 uppercase tracking-wider">System Operational</span>
</div>
<span className="text-[10px] text-slate-500 font-mono">SECURE SSL ENCRYPTION</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-subtle" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 reveal">
<h2 className="text-3xl font-semibold text-primary tracking-tight">Proven Results</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">

<div className="md:col-span-1 bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all reveal">
<div className="text-slate-400">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<div className="text-4xl font-bold text-primary mb-1">100%</div>
<p className="text-sm text-slate-500">Inspection Pass Rate for our retained clients.</p>
</div>
</div>

<div className="md:col-span-2 bg-primary p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden group hover:shadow-xl transition-all reveal delay-100">
<div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full group-hover:bg-accent/20 transition-colors"></div>
<div className="relative z-10">
<div className="text-accent text-5xl font-serif mb-4">"</div>
<p className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                            Safety Service transformed our chaotic documentation into a streamlined digital asset. They are indispensable partners.
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold">JD</div>
<div>
<div className="text-white text-sm font-semibold">James Doyle</div>
<div className="text-slate-400 text-xs">COO, Manufacturing Corp</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-center reveal delay-200">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Recent Certifications Awarded</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">

<div className="h-8 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-300">ISO 9001</div>
<div className="h-8 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-300">ISO 45001</div>
<div className="h-8 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-300">HACCP</div>
<div className="h-8 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-300">PN-N</div>
</div>
</div>

<div className="md:col-span-1 bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-accent/30 transition-all reveal delay-300">
<div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<div className="text-4xl font-bold text-primary mb-1">15+</div>
<p className="text-sm text-slate-500">Years of Authority.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
<div>
<h3 className="text-lg font-semibold text-primary">Certified Expertise</h3>
<p className="text-sm text-slate-500">Our inspectors hold the highest accreditations.</p>
</div>
<div className="flex gap-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl text-primary" icon="solar:medal-ribbon-linear"></iconify-icon>
<span className="text-xs font-bold text-primary leading-tight">National<br/>Safety Board</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl text-primary" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs font-bold text-primary leading-tight">EU Compliance<br/>Standard</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl text-primary" icon="solar:diploma-verified-linear"></iconify-icon>
<span className="text-xs font-bold text-primary leading-tight">Technical<br/>Audit Pro</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">Ready to secure your business?</h2>
<p className="text-lg text-slate-500 mb-10">Get a custom quote within 24 hours. No hidden fees, just clarity.</p>
<form className="max-w-md mx-auto space-y-4">
<div className="relative group">
<input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:bg-white" placeholder="Enter your work email" type="email"/>
<div className="absolute right-3 top-3">
<button className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white hover:bg-orange-600 hover:scale-105 transition-all shadow-lg shadow-orange-500/30" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<p className="text-xs text-slate-400">By clicking, you agree to our Terms &amp; Privacy Policy.</p>
</form>
</div>
</section>

<footer className="bg-primary text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6 text-white" href="#">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="font-bold tracking-tighter text-lg">SAFETY SERVICE</span>
</a>
<p className="text-sm leading-relaxed mb-6">Redefining safety compliance for the modern industrial world.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-accent transition-colors" href="#">Fire Safety Audit</a></li>
<li><a className="hover:text-accent transition-colors" href="#">BHP Outsourcing</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Risk Assessment</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Staff Training</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-accent transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> +48 123 456 789</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> hello@safetyservice.com</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Warsaw, Poland</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs flex justify-between items-center">
<span>© 2024 Safety Service. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
