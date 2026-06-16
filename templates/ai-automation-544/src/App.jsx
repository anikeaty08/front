import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-indigo-950/80" x-data="{ mobileMenuOpen: false }">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-tr rounded-lg flex items-center justify-center border group-hover:border-white/20 transition-colors from-indigo-800 to-indigo-600 border-white/10">
<span className="font-semibold tracking-tighter text-sm text-white font-sans" style={{}}>M</span>
</div>
<span className="font-medium tracking-tight text-lg text-white font-sans" style={{}}>MEGA<span className="text-indigo-500 font-sans" style={{}}>AI</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors hover:text-white text-violet-400 font-sans" href="#services" style={{}}>Solutions</a>
<a className="text-sm transition-colors hover:text-white text-violet-400 font-sans" href="#process" style={{}}>Process</a>
<a className="text-sm transition-colors hover:text-white text-violet-400 font-sans" href="#about" style={{}}>About</a>
<a className="text-sm transition-colors hover:text-white text-violet-400 font-sans" href="#faq" style={{}}>FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-colors bg-white text-black hover:bg-indigo-200 font-sans" href="#contact" style={{}}>
                    Book a Call
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button @click="mobileMenuOpen = !mobileMenuOpen" className="md:hidden hover:text-white text-violet-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div @click.away="mobileMenuOpen = false" className="md:hidden border-t p-6 flex flex-col gap-4 border-white/5 bg-indigo-950" style={{display: 'none'}} x-show="mobileMenuOpen" x-transition="">
<a className="text-violet-400 font-sans" href="#services">Solutions</a>
<a className="text-violet-400 font-sans" href="#process">Process</a>
<a className="font-medium text-white font-sans" href="#contact">Book a Call</a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[100px] -z-10 pointer-events-none bg-white/5"></div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 backdrop-blur-sm border-white/10 bg-white/5 text-indigo-300 font-sans">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6 text-white font-google-sans-flex font-normal" style={{}}>
                Scale your business with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 font-google-sans-flex font-normal" style={{}}>intelligent automation.</span>
</h1>
<p className="text-lg max-w-2xl mb-10 font-light leading-relaxed text-violet-400 font-sans">
                We build custom AI infrastructures that automate repetitive tasks, enhance customer support, and streamline workflows so you can focus on growth.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3 text-sm font-medium rounded-full transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-indigo-200 font-sans" href="#contact">
                    Start Automating
                    <iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border text-sm font-medium rounded-full transition-colors flex items-center justify-center gap-2 border-indigo-800 bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800 font-sans" href="#services">
                    View Solutions
                </a>
</div>

<div className="mt-16 pt-8 border-t w-full flex flex-col items-center border-white/5">
<p className="text-xs text-indigo-500 uppercase tracking-widest mb-6 font-sans">Empowering modern businesses</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<span className="text-lg font-semibold tracking-tight font-sans">ACME<span className="font-light font-sans">CORP</span></span>
<span className="text-lg font-semibold tracking-tight font-sans">Vortex</span>
<span className="text-lg font-semibold tracking-tight font-sans">Stratos</span>
<span className="text-lg font-semibold tracking-tight font-sans">Hyper<span className="font-light font-sans">Link</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-white font-google-sans-flex font-normal">Comprehensive AI Solutions</h2>
<p className="max-w-xl text-violet-400 font-sans">Tailored systems designed to replace manual operational bottlenecks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border transition-all duration-300 border-white/10 bg-indigo-900/20 hover:bg-indigo-900/40 hover:border-white/20">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-indigo-800 text-white">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>AI Chatbots</h3>
<p className="text-sm leading-relaxed text-violet-400 font-sans">
                        Intelligent 24/7 customer support agents that handle inquiries, book appointments, and qualify leads seamlessly without human intervention.
                    </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 border-white/10 bg-indigo-900/20 hover:bg-indigo-900/40 hover:border-white/20">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-indigo-800 text-white">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Workflow Automation</h3>
<p className="text-sm leading-relaxed text-violet-400 font-sans">
                        Connect your favorite apps (Slack, Notion, CRM) to automate data entry, outreach, and reporting. Reclaim 20+ hours per week.
                    </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 border-white/10 bg-indigo-900/20 hover:bg-indigo-900/40 hover:border-white/20">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-indigo-800 text-white">
<iconify-icon icon="solar:graph-new-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-white font-sans" style={{}}>Growth Consulting</h3>
<p className="text-sm leading-relaxed text-violet-400 font-sans">
                        Strategic implementation of AI tools tailored to your specific niche to maximize ROI and operational efficiency.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-indigo-900/10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border bg-white/5 text-indigo-300 border-white/5 font-sans">
                    Why Mega AI?
                </div>
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 text-white font-google-sans-flex font-normal">
                    Designed for efficiency.
                    Built for scale.
                </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 text-white">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1 text-white font-sans">Tailored Development</h4>
<p className="text-sm text-violet-400 font-sans">We don't use cookie-cutter templates. Every solution is architected around your specific business logic.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1 text-white font-sans">Data Privacy First</h4>
<p className="text-sm text-violet-400 font-sans">Enterprise-grade security measures ensure your proprietary data and customer information remain isolated and safe.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-white">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1 text-white font-sans">Rapid Deployment</h4>
<p className="text-sm text-violet-400 font-sans">Go from discovery call to live automation in weeks, not months. We value speed of execution.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full rounded-2xl border overflow-hidden group bg-indigo-900 border-white/10">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-indigo-900 to-indigo-950"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 space-y-3">
<div className="p-4 rounded-lg backdrop-blur border flex items-center justify-between transform translate-y-4 opacity-50 scale-95 bg-indigo-800/50 border-white/5">
<div className="h-2 w-1/3 rounded bg-white/10"></div>
<div className="h-2 w-8 bg-blue-500/20 rounded"></div>
</div>
<div className="p-4 rounded-lg backdrop-blur border flex items-center justify-between shadow-2xl z-10 bg-indigo-800/80 border-white/10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
<iconify-icon className="text-white" icon="solar:magic-stick-linear"></iconify-icon>
</div>
<div className="space-y-1">
<div className="h-2 w-24 rounded bg-white/20"></div>
<div className="h-2 w-16 rounded bg-white/10"></div>
</div>
</div>
<div className="px-2 py-1 text-[10px] font-bold rounded bg-white text-black font-sans">AUTOMATED</div>
</div>
<div className="p-4 rounded-lg backdrop-blur border flex items-center justify-between transform -translate-y-4 opacity-50 scale-95 bg-indigo-800/50 border-white/5">
<div className="h-2 w-1/2 rounded bg-white/10"></div>
<div className="h-2 w-8 bg-cyan-500/20 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="process">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-white font-google-sans-flex font-normal">How we work</h2>
<p className="text-violet-400 font-sans">A simple, transparent process to get you automated.</p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative pl-8 md:pl-0 md:pt-8 border-l md:border-l-0 md:border-t border-white/10">
<span className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-[9px] h-[9px] bg-indigo-500 rounded-full ring-4 ring-indigo-950"></span>
<span className="text-xs font-mono text-indigo-500 mb-2 block font-sans">01</span>
<h3 className="text-lg font-medium mb-2 text-white font-sans">Discovery</h3>
<p className="text-sm text-violet-400 font-sans">We audit your current workflow to identify bottlenecks and high-impact automation opportunities.</p>
</div>

<div className="relative pl-8 md:pl-0 md:pt-8 border-l md:border-l-0 md:border-t border-white/10">
<span className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-[9px] h-[9px] rounded-full ring-4 shadow-[0_0_10px_rgba(255,255,255,0.5)] bg-white ring-indigo-950"></span>
<span className="text-xs font-mono text-indigo-500 mb-2 block font-sans">02</span>
<h3 className="text-lg font-medium mb-2 text-white font-sans">Build &amp; Integrate</h3>
<p className="text-sm text-violet-400 font-sans">Our engineers build your custom agents and connect your software stack using robust APIs.</p>
</div>

<div className="relative pl-8 md:pl-0 md:pt-8 border-l md:border-l-0 md:border-t border-white/10">
<span className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-[9px] h-[9px] bg-indigo-500 rounded-full ring-4 ring-indigo-950"></span>
<span className="text-xs font-mono text-indigo-500 mb-2 block font-sans">03</span>
<h3 className="text-lg font-medium mb-2 text-white font-sans">Launch &amp; Scale</h3>
<p className="text-sm text-violet-400 font-sans">We deploy the solution, train your team, and provide ongoing maintenance to ensure peak performance.</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-indigo-950 via-indigo-900/50 to-indigo-950"></div>
<div className="max-w-lg mx-auto relative z-10 border rounded-2xl p-8 backdrop-blur-sm bg-indigo-900/40 border-white/10">
<div className="text-center mb-8">
<h2 className="text-2xl mb-2 text-white font-google-sans-flex font-normal" style={{}}>Ready to automate?</h2>
<p className="text-sm text-violet-400 font-sans">Fill out the form below to book a discovery call.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs ml-1 text-violet-400 font-sans">First Name</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors bg-indigo-950 border-white/10 text-white" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs ml-1 text-violet-400 font-sans">Last Name</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors bg-indigo-950 border-white/10 text-white" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs ml-1 text-violet-400 font-sans">Work Email</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors bg-indigo-950 border-white/10 text-white" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs ml-1 text-violet-400 font-sans">Company Website</label>
<input className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors bg-indigo-950 border-white/10 text-white" placeholder="https://" type="url"/>
</div>
<div className="space-y-1">
<label className="text-xs ml-1 text-violet-400 font-sans">What are you looking to automate?</label>
<textarea className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none bg-indigo-950 border-white/10 text-white" placeholder="Describe your current bottlenecks..." rows="3"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer custom-checkbox group">
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded transition-colors group-hover:border-white/40 flex items-center justify-center border-white/20 bg-indigo-950">
<svg className="w-2.5 h-2.5 hidden pointer-events-none text-black" fill="none" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-xs text-indigo-500 leading-tight font-sans">I agree to the privacy policy and terms of service.</span>
</label>
<button className="w-full font-medium text-sm py-2.5 rounded-lg transition-colors mt-2 bg-white text-black hover:bg-indigo-200 font-sans" type="button">
                    Submit Request
                </button>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 border-white/5 bg-indigo-950">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded flex items-center justify-center border bg-indigo-800 border-white/10">
<span className="font-semibold text-xs text-white font-sans">M</span>
</div>
<span className="font-medium tracking-tight text-white font-sans">MEGA<span className="text-indigo-500 font-sans">AI</span></span>
</a>
<p className="text-sm text-indigo-500 max-w-xs font-sans">
                        Empowering businesses through the strategic implementation of artificial intelligence and automation.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white font-sans">Solutions</h4>
<ul className="space-y-2 text-sm text-indigo-500">
<li><a className="transition-colors hover:text-white font-sans" href="#">Chatbots</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Workflow Automation</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white font-sans">Company</h4>
<ul className="space-y-2 text-sm text-indigo-500">
<li><a className="transition-colors hover:text-white font-sans" href="#">About</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Contact</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4 border-white/5">
<p className="text-xs text-indigo-600 font-sans">© 2023 Mega AI Solutions. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-indigo-500 transition-colors hover:text-white" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon>
</a>
<a className="text-indigo-500 transition-colors hover:text-white" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
