import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-[#30365c] flex items-center justify-center text-[#f8d922] transition-transform group-hover:scale-105" style={{boxShadow: '0 2px 10px rgba(48, 54, 92, 0.2)'}}>
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tighter text-[#30365c]">M-ENG</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#30365c] transition-colors" href="#home">Home</a>
<a className="hover:text-[#30365c] transition-colors" href="#about">About</a>
<a className="hover:text-[#30365c] transition-colors" href="#services">Services</a>
<a className="hover:text-[#30365c] transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-[#30365c] transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-[#f8d922] text-[#30365c] hover:bg-[#e5c81f] transition-all shadow-sm" href="#contact">
                    Consultation
                </a>
<button className="md:hidden text-gray-600 hover:text-[#30365c]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="flex-grow pt-16">

<section className="relative w-full overflow-hidden bg-[#30365c] min-h-[90vh] flex items-center" id="home">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #fcfcfc 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f8d922] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full py-20">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit text-xs font-medium text-[#fcfcfc]">
<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                        Operational Excellence Delivered
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#fcfcfc] leading-[1.1]">
                        Advancing Industrial <br/>
<span className="text-[#f8d922]">Performance</span>.
                    </h1>
<p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        We provide professional training and technical consultation for industrial sectors. Bridging academic expertise with practical industry solutions.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-[#f8d922] text-[#30365c] hover:bg-[#e5c81f] transition-all shadow-[0_0_20px_rgba(248,217,34,0.3)]" href="#services">
                            Explore Services
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border border-gray-400/30 text-[#fcfcfc] hover:bg-white/5 transition-all" href="#about">
                            Learn More
                        </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1e2340]">
<img alt="Engineering Dashboard" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-gray-300 font-medium tracking-wide uppercase">System Analysis</span>
<span className="text-[#fcfcfc] font-semibold tracking-tight">Status: Optimal</span>
</div>
<iconify-icon className="text-3xl text-[#f8d922]" icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-200/50 bg-[#fcfcfc]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by industrial leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tighter text-[#30365c]">NEXUS.IND</span>
<span className="text-xl font-semibold tracking-tighter text-[#30365c]">AERO-DYN</span>
<span className="text-xl font-semibold tracking-tighter text-[#30365c]">SYS.CORE</span>
<span className="text-xl font-semibold tracking-tighter text-[#30365c]">MECH.WORKS</span>
</div>
</div>
</section>

<section className="py-24 bg-[#fcfcfc]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#30365c] mb-4">Core Competencies</h2>
<p className="text-gray-500 max-w-2xl">Comprehensive technical solutions designed to elevate operational metrics and workforce capabilities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#fcfcfc] p-8 shadow-sm hover:shadow-md transition-all">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f8d922]/10 to-transparent rounded-bl-full opacity-50"></div>
<div className="w-12 h-12 rounded-xl bg-[#30365c]/5 flex items-center justify-center text-[#30365c] mb-6 group-hover:bg-[#30365c] group-hover:text-[#f8d922] transition-colors">
<iconify-icon className="text-2xl" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">Professional Training Programs</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-md">
                            Tailored workforce development initiatives. We translate academic principles into actionable, industry-ready skills for your engineering teams.
                        </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#fcfcfc] p-8 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-[#f8d922]/10 flex items-center justify-center text-[#f8d922] mb-6">
<iconify-icon className="text-2xl" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">Technical Consultation</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Expert advisory for complex industrial challenges, process optimization, and technology integration.
                        </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#fcfcfc] p-8 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-[#30365c] mb-6">
<iconify-icon className="text-2xl" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">Engineering Assessment</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Rigorous evaluation of mechanical structures, material viability, and safety protocols to ensure compliance and durability.
                        </p>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#30365c] text-[#fcfcfc] p-8 shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#f8d922] mb-6">
<iconify-icon className="text-2xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="relative z-10 text-xl font-semibold tracking-tight mb-3">System Analysis &amp; Simulation</h3>
<p className="relative z-10 text-sm text-gray-300 leading-relaxed max-w-md">
                            Advanced computational modeling and analysis to predict system behavior, identify bottlenecks, and drive technical excellence before implementation.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f5f7]" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
<img alt="Engineering Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-[#fcfcfc] p-6 rounded-2xl border border-gray-200 shadow-xl max-w-[200px]">
<div className="text-[#f8d922] mb-2">
<iconify-icon className="text-3xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h4 className="text-3xl font-semibold tracking-tighter text-[#30365c]">15+</h4>
<p className="text-xs text-gray-500 font-medium">Years of Academic &amp; Industry Synergy</p>
</div>
</div>
<div className="flex flex-col gap-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#30365c]">
                        Bridging Theory with <span className="relative inline-block"><span className="relative z-10">Industrial Reality</span><span className="absolute bottom-1 left-0 w-full h-3 bg-[#f8d922]/30 -z-0"></span></span>
</h2>
<p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        As a specialized service unit rooted in a mechanical engineering department, we possess a unique vantage point. We understand the rigorous academic foundations required for innovation, while intimately knowing the practical constraints of the factory floor.
                    </p>
<ul className="space-y-4 mt-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#10b981] text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Backed by Ph.D. level academic expertise.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#10b981] text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Decades of combined practical industry experience.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#10b981] text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">State-of-the-art lab and analysis facilities.</span>
</li>
</ul>
<div className="pt-6">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#30365c] hover:text-[#f8d922] transition-colors group" href="#contact">
                            Read our full methodology
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fcfcfc]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-[#30365c] mb-2">Featured Projects</h2>
<p className="text-gray-500 text-sm">Recent implementation of our engineering assessments.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#30365c]" href="#">
                        View all case studies
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] border border-gray-200" href="#">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-[#f8d922] text-xs font-semibold tracking-wide mb-1 uppercase">Workforce Dev</p>
<h3 className="text-[#fcfcfc] font-medium tracking-tight">Automated Assembly Line Training</h3>
</div>
</a>

<a className="group block relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] border border-gray-200" href="#">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-[#f8d922] text-xs font-semibold tracking-wide mb-1 uppercase">System Analysis</p>
<h3 className="text-[#fcfcfc] font-medium tracking-tight">HVAC Fluid Dynamics Optimization</h3>
</div>
</a>

<a className="group block relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] border border-gray-200" href="#">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&amp;w=2136&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<p className="text-[#f8d922] text-xs font-semibold tracking-wide mb-1 uppercase">Consultation</p>
<h3 className="text-[#fcfcfc] font-medium tracking-tight">Material Stress Testing Protocol</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#fcfcfc]" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden bg-[#30365c] border border-[#f8d922]/20 p-10 md:p-16 text-center shadow-2xl">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fcfcfc 10px, #fcfcfc 11px)'}}></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-[#f8d922] flex items-center justify-center text-[#30365c] mb-8 shadow-lg">
<iconify-icon className="text-3xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#fcfcfc] mb-4">Ready to upgrade your operational performance?</h2>
<p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
                            Get in touch with our experts to discuss custom training programs or specialized engineering assessments for your facility.
                        </p>
<form className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-grow px-4 py-3 rounded-full bg-white/10 border border-white/20 text-[#fcfcfc] placeholder-gray-400 focus:outline-none focus:border-[#f8d922] focus:ring-1 focus:ring-[#f8d922] text-sm transition-all" placeholder="Enter your work email" type="email"/>
<button className="whitespace-nowrap px-6 py-3 rounded-full bg-[#f8d922] text-[#30365c] font-medium text-sm hover:bg-[#e5c81f] transition-all shadow-md" type="button">
                                Request Contact
                            </button>
</form>
<p className="text-[#10b981] text-xs font-medium mt-4 flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Usually replies within 24 hours.
                        </p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#121422] text-gray-400 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-[#f8d922] flex items-center justify-center text-[#30365c]">
<iconify-icon className="text-sm" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tighter text-[#fcfcfc]">M-ENG</span>
</a>
<p className="text-sm max-w-xs leading-relaxed mb-6">
                    A dedicated mechanical engineering service unit providing industry-leading technical consultation and workforce development.
                </p>
</div>
<div>
<h4 className="text-[#fcfcfc] font-medium text-sm mb-4 tracking-tight">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#f8d922] transition-colors" href="#">Training Programs</a></li>
<li><a className="hover:text-[#f8d922] transition-colors" href="#">Consultation</a></li>
<li><a className="hover:text-[#f8d922] transition-colors" href="#">Assessments</a></li>
<li><a className="hover:text-[#f8d922] transition-colors" href="#">System Analysis</a></li>
</ul>
</div>
<div>
<h4 className="text-[#fcfcfc] font-medium text-sm mb-4 tracking-tight">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#f8d922] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#f8d922] transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-[#f8d922] transition-colors" href="#">Academic Hub</a></li>
<li><a className="hover:text-[#f8d922] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p>© 2024 M-ENG Service Unit. All rights reserved.</p>
<div className="flex items-center gap-1 text-gray-500">
<span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                Systems Operational
            </div>
</div>
</footer>

    </>
  );
}
