import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Lucide Icons
        lucide.createIcons();

        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });

        // Navbar Blur/Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('bg-white/95', 'bg-white/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="p-2 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors">
<iconify-icon className="text-orange-500 text-3xl" icon="solar:infinity-bold-duotone"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-slate-900">Incredible</span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-medium">
<a className="hover:text-orange-600 transition-colors" href="#features">Features</a>
<a className="hover:text-orange-600 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-orange-600 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-orange-600 transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-medium hover:text-slate-900" href="#">Sign in</a>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-900/20" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/60 via-orange-50/40 to-transparent -z-10 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:border-orange-200 transition-colors cursor-pointer">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-sm font-medium text-slate-600">New: Agentic Workflows 2.0</span>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-slate-900 mb-8 leading-[0.95]">
                Agentic: AI models <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">purpose built</span> for work.
            </h1>
<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                The assistant that actually executes work across all your tools.
                Stop chatting, start automating.
            </p>

<div className="relative max-w-2xl mx-auto bg-white rounded-2xl p-2 shadow-2xl shadow-orange-500/10 border border-slate-100">
<div className="flex items-center gap-3 p-3">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-white shadow-sm">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<input className="w-full bg-transparent border-none outline-none text-lg placeholder:text-slate-400 text-slate-800" placeholder="Ask Incredible to analyze Q3 revenue..." type="text"/>
</div>
<button className="h-10 w-10 bg-orange-500 hover:bg-orange-600 rounded-xl flex items-center justify-center text-white transition-all hover:rotate-90">
<iconify-icon height="20" icon="solar:stars-minimalistic-bold-duotone" width="20"></iconify-icon>
</button>
</div>

<div className="absolute top-full mt-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/50 p-4 rounded-xl shadow-xl shadow-slate-200/50 flex flex-col gap-3 transform translate-y-2">
<div className="flex items-center justify-between text-sm text-slate-500 mb-1">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:bolt-bold-duotone"></iconify-icon>
<span>Analyzing Stripe &amp; Hubspot data...</span>
</div>
<span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Completed</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-orange-400 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="mt-32 max-w-7xl mx-auto reveal">
<p className="text-center text-base font-medium text-slate-400 mb-8 uppercase tracking-widest">Powering industry leaders</p>
<div className="marquee-container overflow-hidden w-full relative">
<div className="flex gap-16 items-center marquee-content opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon height="48" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:grab" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:vercel" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:stripe" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:linear" width="48"></iconify-icon>

<iconify-icon height="48" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:grab" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:vercel" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:stripe" width="48"></iconify-icon>
<iconify-icon height="48" icon="simple-icons:linear" width="48"></iconify-icon>
</div>
</div>
</div>
</main>

<section className="py-24 bg-white relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Why Teams Choose Incredible</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">Build the workflows of the future with tools that understand context, privacy, and speed.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal delay-100">
<div className="h-14 w-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:widget-5-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Context Aware</h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Understands the nuance of your specific business logic without needing constant retraining.
                    </p>
<div className="relative h-32 bg-white rounded-xl border border-slate-100 p-4 shadow-sm overflow-hidden">
<div className="flex flex-col gap-2">
<div className="w-full h-2 bg-slate-100 rounded-full"></div>
<div className="w-2/3 h-2 bg-slate-100 rounded-full"></div>
<div className="w-1/2 h-2 bg-orange-100 rounded-full mt-2"></div>
</div>
</div>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal delay-200">
<div className="h-14 w-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:shield-check-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Enterprise Secure</h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        SOC2 Type II certified. Your data is encrypted at rest and in transit.
                    </p>
<div className="flex items-center justify-center h-32 bg-white rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-4xl text-green-500" icon="solar:lock-keyhole-bold-duotone"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal delay-300">
<div className="h-14 w-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:chart-square-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Real-time Analytics</h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Monitor token usage and model performance in a unified dashboard.
                    </p>
<div className="relative h-32 bg-white rounded-xl border border-slate-100 p-4 shadow-sm flex items-end gap-2 justify-between px-8">
<div className="w-4 h-8 bg-slate-100 rounded-t-md"></div>
<div className="w-4 h-12 bg-slate-100 rounded-t-md"></div>
<div className="w-4 h-16 bg-purple-200 rounded-t-md"></div>
<div className="w-4 h-24 bg-purple-500 rounded-t-md"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden" id="solutions">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                        Built for Scale
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        The infrastructure layer for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">modern AI teams.</span>
</h2>
<p className="text-xl text-slate-400 mb-8 leading-relaxed">
                        Connect your proprietary data sources securely. Train, fine-tune, and deploy models without managing underlying GPU clusters.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg text-slate-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Auto-scaling inference endpoints</span>
</li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>99.99% Uptime SLA</span>
</li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Private VPC Peering</span>
</li>
</ul>
<button className="bg-white text-black px-6 py-3 rounded-full text-base font-medium hover:bg-slate-200 transition-colors">
                        Explore Documentation
                    </button>
</div>

<div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-2 shadow-2xl reveal delay-200">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-20"></div>
<div className="relative bg-[#0f0f11] rounded-xl p-6 h-[400px] flex flex-col">

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-slate-500 text-sm font-mono">dashboard.main.tsx</div>
</div>

<div className="flex-1 flex gap-6">

<div className="w-1/4 border-r border-white/5 pr-4 space-y-3">
<div className="h-2 w-12 bg-slate-700/50 rounded"></div>
<div className="h-2 w-20 bg-slate-800 rounded"></div>
<div className="h-2 w-16 bg-slate-800 rounded"></div>
<div className="h-2 w-24 bg-slate-800 rounded"></div>
</div>

<div className="flex-1 flex flex-col">
<div className="flex items-end justify-between h-40 gap-2 mb-6">
<div className="w-full bg-slate-800/30 rounded-t h-[40%] hover:bg-orange-500/80 transition-all duration-500"></div>
<div className="w-full bg-slate-800/30 rounded-t h-[60%] hover:bg-orange-500/80 transition-all duration-500"></div>
<div className="w-full bg-slate-800/30 rounded-t h-[30%] hover:bg-orange-500/80 transition-all duration-500"></div>
<div className="w-full bg-slate-800/30 rounded-t h-[80%] hover:bg-orange-500/80 transition-all duration-500"></div>
<div className="w-full bg-slate-800/30 rounded-t h-[50%] hover:bg-orange-500/80 transition-all duration-500"></div>
</div>
<div className="flex items-center justify-between">
<div className="h-8 w-24 bg-slate-800/50 rounded"></div>
<button className="px-3 py-1 bg-orange-600 rounded text-xs text-white">Generate</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Core Capabilities</h2>
<p className="text-xl text-slate-500 max-w-lg">Everything you need to orchestrate complex AI workflows.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-orange-600 font-medium hover:gap-3 transition-all" href="#">
                    View all services <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group reveal">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:code-file-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Code Generation</h3>
<p className="text-base text-slate-500">Generate boilerplate and complex logic.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group reveal delay-100">
<div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:gallery-wide-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Image Processing</h3>
<p className="text-base text-slate-500">Vision models for analysis and generation.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group reveal delay-200">
<div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:chat-line-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Natural Language</h3>
<p className="text-base text-slate-500">Advanced sentiment and context analysis.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group reveal delay-300">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:database-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Data Structuring</h3>
<p className="text-base text-slate-500">Convert unstructured inputs to JSON.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden reveal">

<div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl"></div>
<div className="relative z-10">
<iconify-icon className="text-5xl text-orange-500 mb-8 opacity-80" icon="solar:quote-up-bold"></iconify-icon>
<h3 className="text-3xl md:text-5xl font-medium text-white mb-10 leading-tight max-w-4xl mx-auto tracking-tight">
                        "Incredible has completely transformed how our engineering team interacts with production data. It's like having a senior engineer on call 24/7."
                    </h3>
<div className="flex items-center justify-center gap-4">
<img alt="CTO" className="w-14 h-14 rounded-full border-2 border-orange-500 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=150&amp;h=150"/>
<div className="text-left">
<div className="text-white font-semibold text-lg">David Chen</div>
<div className="text-slate-400 text-base">CTO at TechFlow</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
                Start building for <br/>
<span className="text-orange-500">the future of work.</span>
</h2>
<p className="text-xl text-slate-500 mb-10">
                Join 10,000+ teams automating their workflows today.
            </p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-8">
<input className="px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 flex-1 text-lg" placeholder="Enter your work email" type="email"/>
<button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/25 text-lg whitespace-nowrap" type="button">
                    Get Access
                </button>
</form>
<p className="text-sm text-slate-400">No credit card required. 14-day free trial.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:infinity-bold-duotone"></iconify-icon>
<span className="text-xl font-bold tracking-tighter text-slate-900">Incredible</span>
</a>
<p className="text-slate-500 mb-6 max-w-xs text-base">
                        The AI platform for ambitious teams. Based in San Francisco.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-lg">Product</h4>
<ul className="space-y-3 text-base text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-lg">Company</h4>
<ul className="space-y-3 text-base text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-lg">Resources</h4>
<ul className="space-y-3 text-base text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">API Status</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-lg">Legal</h4>
<ul className="space-y-3 text-base text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2024 Incredible AI Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
