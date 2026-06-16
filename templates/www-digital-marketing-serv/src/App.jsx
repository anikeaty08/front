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
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Simple script to toggle active state visual for checkbox buttons
        document.querySelectorAll('.custom-checkbox').forEach(label => {
            label.addEventListener('change', function() {
                const div = this.querySelector('div');
                const input = this.querySelector('input');
                if(input.checked) {
                    div.classList.remove('bg-zinc-900/50', 'text-zinc-400', 'border-white/10');
                    div.classList.add('bg-white', 'text-black', 'border-white');
                } else {
                    div.classList.add('bg-zinc-900/50', 'text-zinc-400', 'border-white/10');
                    div.classList.remove('bg-white', 'text-black', 'border-white');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg hover:opacity-80 transition-opacity uppercase" href="#">
                GrowthSphere Digital
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Start Project
            </a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 bg-grid" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Scale your vision <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-600">with precision.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                We craft data-driven digital experiences that convert. Combining technical SEO with minimalist aesthetics to elevate brands above the noise.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Let's Talk
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3 border border-white/10 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm" href="#services">
                    View Services
                </a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl rounded-t-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl shadow-indigo-500/10 overflow-hidden">
<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">
<div className="h-40 rounded-lg bg-white/5 border border-white/5"></div>
<div className="h-40 rounded-lg bg-white/5 border border-white/5"></div>
<div className="h-40 rounded-lg bg-white/5 border border-white/5"></div>
<div className="h-64 md:col-span-2 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
</div>
<div className="h-64 rounded-lg bg-white/5 border border-white/5"></div>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-950 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-zinc-500 max-w-md font-light">Comprehensive digital solutions engineered for growth and built on modern infrastructure.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">
                    View full catalog
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">SEO Architecture</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Technical optimization ensuring your platform communicates effectively with search engines through structured data and semantic markup.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Performance Marketing</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Data-centric PPC and social campaigns designed to minimize acquisition costs while maximizing lifetime value.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Content Strategy</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Editorial planning and creation that establishes thought leadership and drives organic engagement across channels.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:devices-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">UI/UX Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Interface design focused on conversion rate optimization (CRO) and seamless user journeys.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Analytics &amp; Insights</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Custom dashboarding and attribution modeling to visualize the true impact of every marketing dollar.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 transition-colors flex flex-col justify-center">
<h3 className="text-xl font-medium text-white mb-3">Need something custom?</h3>
<p className="text-sm text-zinc-400 mb-6 font-light">
                        We build bespoke strategies for unique challenges.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300" href="#contact">
                        Book a consultation <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-zinc-900/20" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Built on transparency,<br/>driven by results.</h2>
<div className="space-y-6 text-zinc-500 font-light text-lg">
<p>
                        GrowthSphere Digital was founded on a simple premise: Digital marketing shouldn't be a black box. We believe in radical transparency, real-time reporting, and strategies that are understandable.
                    </p>
<p>
                        Our team consists of engineers, creatives, and strategists who have scaled products from zero to millions in revenue. We don't just run ads; we build growth engines.
                    </p>
</div>
<div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/5 pt-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">98%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Retention</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">50M+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Ad Spend</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">4.8x</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Avg ROAS</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] w-full bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
<div className="relative z-10 grid grid-cols-6 gap-2 opacity-30 transform -rotate-12 scale-110">

<div className="w-16 h-16 bg-white/10 rounded-lg"></div> <div className="w-16 h-16 bg-white/5 rounded-lg"></div> <div className="w-16 h-16 bg-transparent rounded-lg"></div>
<div className="w-16 h-16 bg-white/5 rounded-lg"></div> <div className="w-16 h-16 bg-white/20 rounded-lg"></div> <div className="w-16 h-16 bg-white/5 rounded-lg"></div>
<div className="w-16 h-16 bg-white/5 rounded-lg"></div> <div className="w-16 h-16 bg-transparent rounded-lg"></div> <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
<div className="w-16 h-16 bg-white/10 rounded-lg"></div> <div className="w-16 h-16 bg-white/5 rounded-lg"></div> <div className="w-16 h-16 bg-white/5 rounded-lg"></div>
<div className="w-16 h-16 bg-transparent rounded-lg"></div> <div className="w-16 h-16 bg-white/20 rounded-lg"></div> <div className="w-16 h-16 bg-white/5 rounded-lg"></div>
<div className="w-16 h-16 bg-white/5 rounded-lg"></div> <div className="w-16 h-16 bg-white/10 rounded-lg"></div> <div className="w-16 h-16 bg-white/5 rounded-lg"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Initialize Growth</h2>
<p className="text-zinc-500 font-light">Tell us about your project. We'll analyze your current footprint and propose a roadmap within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">First Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Last Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Work Email</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Interests</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-zinc-900/50 text-xs font-medium text-zinc-400 hover:border-white/30 transition-all select-none">
                                SEO
                            </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-zinc-900/50 text-xs font-medium text-zinc-400 hover:border-white/30 transition-all select-none">
                                Paid Media
                            </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-zinc-900/50 text-xs font-medium text-zinc-400 hover:border-white/30 transition-all select-none">
                                Content
                            </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-white/10 bg-zinc-900/50 text-xs font-medium text-zinc-400 hover:border-white/30 transition-all select-none">
                                Analytics
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Budget Range</label>
<div className="w-full px-4 py-8 bg-zinc-900/50 border border-white/10 rounded-lg">
<input className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-white" max="100" min="1" type="range" value="50"/>
<div className="flex justify-between text-xs text-zinc-500 mt-2">
<span>$2k</span>
<span>$50k+</span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Message</label>
<textarea className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none" placeholder="Tell us about your goals..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors mt-4" type="button">
                    Send Inquiry
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white font-medium tracking-tighter text-lg uppercase">GrowthSphere Digital</span>
<span className="text-zinc-600">/</span>
<span className="text-xs text-zinc-500">© 2023 Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
