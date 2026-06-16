import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Iconify
        lucide.createIcons();

        // Reveal on Scroll Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // Navbar blur effect refinement
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-neutral-950/90');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-neutral-950/80');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[-1]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full opacity-40 mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-teal-900/10 blur-[100px] rounded-full opacity-30"></div>
<div className="absolute inset-0 bg-grid"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-black font-semibold tracking-tighter shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                    PP
                </div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-neutral-200 transition-colors">PavePath Design</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#what-we-do">What We Do</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#pricing">Engagement</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors" href="#contact">
                    Book a Call
                </a>

<button className="md:hidden text-neutral-400 hover:text-white" id="menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-neutral-950 border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-sm text-neutral-400 hover:text-white" href="#what-we-do">What We Do</a>
<a className="text-sm text-neutral-400 hover:text-white" href="#how-it-works">Process</a>
<a className="text-sm text-neutral-400 hover:text-white" href="#services">Services</a>
<a className="text-sm font-semibold text-blue-400" href="#contact">Book a Call</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8 reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting New Engineering Partners
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1] reveal" style={{transitionDelay: '100ms'}}>
                Precision Engineering <br/>
<span className="gradient-text">At The Speed of Code.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                PavePath transforms civil engineering workflows with high-precision CAD design, automated grading analysis, and scalable drafting teams. We bridge the gap between design and permit.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Start Your Project
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-full border border-neutral-800 bg-neutral-900/50 text-white text-sm font-medium hover:bg-neutral-800 transition-all">
                    View Case Studies
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 relative" id="what-we-do">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engineered for Engineers</h2>
<p className="text-neutral-400 max-w-xl">We act as your scalable technical backend, handling the redlines and complex modeling so you can focus on client relationships.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:border-blue-500/30 transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-blue-400" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Civil Design Drafting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        From conceptual site plans to full construction document sets. We adhere strictly to your layer standards and CTB files.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-teal-500/30 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-teal-400" data-lucide="land-plot"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Grading &amp; Stormwater</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Complex surface modeling, cut/fill analysis, and hydraulic calculations delivered in Civil 3D format.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-purple-500/30 transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-purple-400" data-lucide="scroll-text"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Permitting Logistics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        We handle the municipality comment sheets, redline revisions, and package assembly for faster approvals.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/30 border-y border-neutral-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 reveal">
<div className="inline-block text-teal-400 text-xs font-semibold tracking-wider uppercase mb-4">Why PavePath</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Technical Excellence, <br/>Not Just Drawings.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Most outsourcing firms just trace lines. PavePath is built by engineers who understand slope constraints, pipe conflicts, and zoning data. We catch errors before they reach the city reviewer.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-5 h-5 text-teal-500" data-lucide="check-circle"></i>
<span>99.8% Layer Standard Compliance</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-5 h-5 text-teal-500" data-lucide="check-circle"></i>
<span>24-Hour Turnaround on Redlines</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-5 h-5 text-teal-500" data-lucide="check-circle"></i>
<span>Dedicated Project Manager per Account</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/2 reveal">
<div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">

<div className="h-8 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="p-8 grid grid-cols-2 gap-4">
<div className="space-y-2">
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
<div className="h-24 bg-neutral-900/50 rounded border border-neutral-800 border-dashed animate-pulse"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
<div className="h-24 bg-gradient-to-br from-blue-900/20 to-teal-900/20 rounded border border-blue-500/20"></div>
</div>
<div className="col-span-2 space-y-2 mt-2">
<div className="h-2 w-32 bg-neutral-800 rounded"></div>
<div className="h-12 bg-neutral-900/50 rounded border border-neutral-800 flex items-center px-4 justify-between">
<div className="h-2 w-24 bg-neutral-800 rounded"></div>
<div className="h-4 w-12 bg-teal-500/20 rounded text-[10px] text-teal-400 flex items-center justify-center">Done</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">The Workflow</h2>
<p className="text-neutral-400">Seamless integration into your existing CAD standards.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="group text-center reveal">
<div className="w-16 h-16 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
<span className="text-xl font-semibold text-neutral-300 group-hover:text-blue-400">1</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Upload Data</h3>
<p className="text-sm text-neutral-500">Submit survey points, sketches, or redlines via our secure portal.</p>
</div>

<div className="group text-center reveal" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
<span className="text-xl font-semibold text-neutral-300 group-hover:text-cyan-400">2</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Design &amp; Model</h3>
<p className="text-sm text-neutral-500">Our engineers build the Civil 3D surfaces and pipe networks.</p>
</div>

<div className="group text-center reveal" style={{transitionDelay: '200ms'}}>
<div className="w-16 h-16 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 group-hover:border-teal-500 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all">
<span className="text-xl font-semibold text-neutral-300 group-hover:text-teal-400">3</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">QA/QC Review</h3>
<p className="text-sm text-neutral-500">Senior PE review for constructability and code compliance.</p>
</div>

<div className="group text-center reveal" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
<span className="text-xl font-semibold text-neutral-300 group-hover:text-purple-400">4</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Final Delivery</h3>
<p className="text-sm text-neutral-500">Download DWG, PDF, and reports ready for plotting.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-12 reveal">Capabilities</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors reveal">
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="map"></i>
<h3 className="text-white font-medium mb-2">Site Dimension Plans</h3>
<p className="text-sm text-neutral-500">Precision layout for commercial and residential subdivisions.</p>
</div>
<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors reveal">
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="mountain"></i>
<h3 className="text-white font-medium mb-2">Grading Plans</h3>
<p className="text-sm text-neutral-500">ADA compliance, retaining walls, and earthwork balancing.</p>
</div>
<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors reveal">
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="waves"></i>
<h3 className="text-white font-medium mb-2">Stormwater Management</h3>
<p className="text-sm text-neutral-500">Detention pond design and downstream analysis.</p>
</div>
<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors reveal">
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="pipette"></i>
<h3 className="text-white font-medium mb-2">Utility Profiles</h3>
<p className="text-sm text-neutral-500">Water, sanitary sewer, and storm drain profiles with conflict checks.</p>
</div>
<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors reveal">
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="car-front"></i>
<h3 className="text-white font-medium mb-2">Vehicle Tracking</h3>
<p className="text-sm text-neutral-500">Swept path analysis for fire trucks and delivery vehicles.</p>
</div>
<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors reveal">
<i className="w-6 h-6 text-blue-400 mb-4" data-lucide="file-check"></i>
<h3 className="text-white font-medium mb-2">Erosion Control</h3>
<p className="text-sm text-neutral-500">SWPPP narratives and detail sheets.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/20" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 text-center reveal">Engagement Models</h2>
<p className="text-neutral-400 text-center mb-16 reveal">Flexible options to match your firm's workload.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 flex flex-col reveal">
<div className="mb-4">
<span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">Per Project</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Fixed Fee</h3>
<p className="text-sm text-neutral-400 mb-8 flex-grow">Best for firms with fluctuating workloads or specific overflow needs. We quote a fixed price based on scope.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> No monthly commitment</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Clear deliverables list</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Standard 3-day turnaround</li>
</ul>
<a className="w-full py-3 rounded-lg border border-neutral-700 text-white text-sm font-medium text-center hover:bg-neutral-800 transition-colors" href="#contact">Request Quote</a>
</div>

<div className="p-8 rounded-2xl border border-blue-500/30 bg-neutral-900/40 flex flex-col relative reveal">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<div className="mb-4">
<span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">Retainer</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Fractional Team</h3>
<p className="text-sm text-neutral-400 mb-8 flex-grow">Dedicate a team of 1-3 designers to your firm. They work in your Slack/Teams and feel like in-house employees.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300"><i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Priority scheduling</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Real-time communication</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><i className="w-4 h-4 text-teal-500" data-lucide="check"></i> Lower hourly effective rate</li>
</ul>
<a className="w-full py-3 rounded-lg bg-white text-black text-sm font-semibold text-center hover:bg-neutral-200 transition-colors" href="#contact">Book Consultation</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-neutral-900">
<div className="max-w-3xl mx-auto text-center reveal">
<div className="w-12 h-12 mx-auto bg-neutral-900 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-neutral-400" data-lucide="lock"></i>
</div>
<h2 className="text-2xl font-medium text-white mb-4">Enterprise Grade Security</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                We understand the sensitivity of unreleased land development plans. All data is encrypted at rest and in transit. We sign comprehensive NDAs and IP assignment agreements, ensuring you retain 100% ownership of all CAD files created.
            </p>
<div className="flex items-center justify-center gap-4 opacity-50">
<i className="w-6 h-6 text-neutral-600" data-lucide="shield-check"></i>
<i className="w-6 h-6 text-neutral-600" data-lucide="file-key"></i>
<i className="w-6 h-6 text-neutral-600" data-lucide="server"></i>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Case Scenarios</h2>
<p className="text-neutral-400">Real world applications of PavePath design.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-2xl aspect-[16/9] border border-neutral-800 reveal">
<div className="absolute inset-0 bg-neutral-900 transition-transform group-hover:scale-105 duration-700">

<div className="w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-neutral-900 to-neutral-950"></div>
<div className="absolute top-10 left-10 right-10 bottom-10 border border-dashed border-neutral-700 rounded opacity-30"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent">
<span className="text-xs text-blue-400 font-medium uppercase tracking-wider mb-2 block">Residential Subdivision</span>
<h3 className="text-xl font-medium text-white">500-Lot Master Plan, Texas</h3>
<p className="text-sm text-neutral-400 mt-2 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">Delivered grading and utility network design for 120 acres in 4 weeks, saving the client 300+ engineering hours.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[16/9] border border-neutral-800 reveal">
<div className="absolute inset-0 bg-neutral-900 transition-transform group-hover:scale-105 duration-700">
<div className="w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900 via-neutral-900 to-neutral-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-neutral-700 rounded-full opacity-30"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent">
<span className="text-xs text-teal-400 font-medium uppercase tracking-wider mb-2 block">Commercial Site Plan</span>
<h3 className="text-xl font-medium text-white">Mixed-Use Urban Infill, Seattle</h3>
<p className="text-sm text-neutral-400 mt-2 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">Complex stormwater detention vault design utilizing minimal footprint constraints.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-8">Built by P.E.s for P.E.s</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-8">
                PavePath was founded to solve the bottleneck of modern civil engineering: talent shortage. We aren't just drafters; we are a collective of civil designers and engineers leveraging the latest in Civil 3D automation to produce high-quality plan sets faster than traditional methods.
            </p>
<div className="flex items-center justify-center gap-8 pt-8 border-t border-neutral-800">
<div className="text-center">
<div className="text-3xl font-semibold text-white">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Projects Delivered</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white">48h</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Avg Turnaround</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white">50</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Partner Firms</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-8 md:p-16 text-center relative overflow-hidden reveal">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 relative z-10">Ready to scale your production?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto relative z-10">Book a discovery call to discuss your current backlog and how PavePath can integrate into your workflow.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">

<input className="h-12 w-full md:w-80 px-4 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Enter your work email" type="email"/>
<button className="h-12 w-full md:w-auto px-8 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                    Book Discovery Call
                </button>
</div>
<p className="text-xs text-neutral-600 mt-6 relative z-10">No commitment required. Free pilot task for qualified firms.</p>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-[10px] text-white font-bold">PP</div>
<span className="text-sm text-neutral-500">© 2023 PavePath Design. All rights reserved.</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
