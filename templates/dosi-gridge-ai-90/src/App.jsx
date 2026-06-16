import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
primary: '#2563EB', // Blue 600
accent: '#06B6D4',  // Cyan 500
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 20px rgba(6, 182, 212, 0.15)'
}
}
}
}



        // Icons
        lucide.createIcons();

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
<span className="font-bold text-lg tracking-tighter">D</span>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">Dosi Gridge</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#blog">Blog</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium hover:text-slate-900" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg" href="#contact">Get Started</a>
</div>

<button className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 p-6 shadow-xl flex-col gap-4" id="mobile-menu">
<a className="text-base font-medium block py-2" href="#solutions" onclick="toggleMobileMenu()">Solutions</a>
<a className="text-base font-medium block py-2" href="#blog" onclick="toggleMobileMenu()">Blog</a>
<a className="text-base font-medium block py-2" href="#about" onclick="toggleMobileMenu()">About</a>
<a className="text-base font-medium block py-2" href="#pricing" onclick="toggleMobileMenu()">Pricing</a>
<a className="text-base font-medium block py-2" href="#contact" onclick="toggleMobileMenu()">Contact</a>
<div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
<a className="text-center text-sm font-medium py-2" href="#">Log in</a>
<a className="text-center text-sm font-medium bg-slate-900 text-white py-3 rounded-xl" href="#">Get Started</a>
</div>
</div>
</header>
<main className="flex-grow pt-24">

<section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto" id="landing">

<div className="absolute inset-0 -z-10 overflow-hidden">
<div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        AI V2.0 Live
                    </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] gradient-text pb-2">
                        Design with AI.<br/>Ship real code.
                    </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
                        Dosi Gridge turns natural language prompts into production-ready HTML, Tailwind CSS, and Figma designs instantly.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#contact">
                            Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="play-circle"></i> See Demo
                        </button>
</div>
</div>

<div className="relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] flex flex-col transform group-hover:rotate-1 transition-transform duration-500">

<div className="h-10 border-b border-slate-100 bg-slate-50 flex items-center px-4 gap-2 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
<div className="bg-white border border-slate-200 px-3 py-1 rounded text-[10px] text-slate-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i> dosigridge.com/dashboard
                            </div>
</div>

<div className="flex-1 p-6 bg-slate-50/30 grid grid-cols-12 gap-4">
<div className="col-span-3 space-y-3 hidden sm:block">
<div className="h-8 w-full bg-slate-100 rounded"></div>
<div className="h-4 w-3/4 bg-slate-100 rounded"></div>
<div className="h-4 w-1/2 bg-slate-100 rounded"></div>
<div className="h-4 w-2/3 bg-slate-100 rounded"></div>
</div>
<div className="col-span-12 sm:col-span-9 space-y-4">
<div className="flex justify-between items-center">
<div className="h-8 w-1/3 bg-slate-200 rounded animate-pulse"></div>
<div className="h-8 w-24 bg-blue-100 rounded"></div>
</div>
<div className="grid grid-cols-2 gap-4 h-32">
<div className="bg-white border border-slate-100 rounded-xl shadow-sm p-4">
<div className="w-8 h-8 bg-blue-50 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="bg-white border border-slate-100 rounded-xl shadow-sm p-4">
<div className="w-8 h-8 bg-cyan-50 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
</div>
<div className="h-24 bg-white border border-slate-100 rounded-xl shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-24">
<div className="gradient-border-card group">
<div className="gradient-border-inner p-8">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 gradient-text">AI to HTML</h3>
<p className="text-slate-500 leading-relaxed text-sm">Describe your interface in natural language. We write clean, semantic HTML instantly.</p>
</div>
</div>
<div className="gradient-border-card group">
<div className="gradient-border-inner p-8">
<div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-6 h-6" data-lucide="figma"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 gradient-text">Figma Export</h3>
<p className="text-slate-500 leading-relaxed text-sm">One click exports your generated UI to a fully layered, editable Figma file.</p>
</div>
</div>
<div className="gradient-border-card group">
<div className="gradient-border-inner p-8">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 gradient-text">Image → HTML</h3>
<p className="text-slate-500 leading-relaxed text-sm">Upload a screenshot. Our vision model converts pixels into pixel-perfect Tailwind code.</p>
</div>
</div>
</div>

<div className="mb-24 relative">
<div className="flex justify-between items-end mb-8 px-2">
<h3 className="text-2xl font-bold text-slate-900 tracking-tight">Generated Examples</h3>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
<div className="snap-center shrink-0 w-[85vw] md:w-[500px] aspect-video bg-slate-900 rounded-xl border border-slate-800 relative group overflow-hidden">
<img alt="E-commerce UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://placehold.co/600x400/1e293b/475569?text=E-Commerce+Dashboard"/>
<div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded backdrop-blur">Dashboard UI</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[500px] aspect-video bg-slate-900 rounded-xl border border-slate-800 relative group overflow-hidden">
<img alt="Landing Page UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://placehold.co/600x400/1e293b/475569?text=Landing+Page"/>
<div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded backdrop-blur">Landing Page</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[500px] aspect-video bg-slate-900 rounded-xl border border-slate-800 relative group overflow-hidden">
<img alt="Mobile App UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://placehold.co/600x400/1e293b/475569?text=Mobile+App"/>
<div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded backdrop-blur">Mobile App</div>
</div>
</div>
</div>

<div className="mb-24">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">Trusted by innovators at</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="font-bold text-xl flex items-center gap-1"><i className="fill-slate-800 w-6 h-6" data-lucide="hexagon"></i> ACME</div>
<div className="font-serif font-bold text-xl italic">Vertex</div>
<div className="font-bold text-xl tracking-tighter">FOCAL</div>
<div className="font-mono font-bold text-xl">Orbit</div>
<div className="font-bold text-xl flex items-center gap-1"><i className="fill-slate-800 w-5 h-5" data-lucide="triangle"></i> Kyber</div>
<div className="font-bold text-xl tracking-wide">SPHERE</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-24">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 text-blue-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-800 font-medium mb-6 leading-relaxed">"Dosi Gridge cut our frontend cycle by 50%. The Tailwind code is surprisingly clean and semantic."</p>
<div className="flex items-center gap-3">
<img alt="Sarah Jenkins" className="rounded-full w-10 h-10" src="https://placehold.co/40x40/2563EB/ffffff?text=SJ"/>
<div>
<div className="font-bold text-slate-900 text-sm">Sarah Jenkins</div>
<div className="text-xs text-slate-500">CTO, TechFlow</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 text-blue-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-800 font-medium mb-6 leading-relaxed">"I can finally prototype complex interactions without needing a developer for every tweak."</p>
<div className="flex items-center gap-3">
<img alt="Mike Keal" className="rounded-full w-10 h-10" src="https://placehold.co/40x40/06B6D4/ffffff?text=MK"/>
<div>
<div className="font-bold text-slate-900 text-sm">Mike Keal</div>
<div className="text-xs text-slate-500">Product Designer</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-16 text-center">
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">Build your next UI with AI.</h2>
<p className="text-slate-300 mb-8">Join thousands of developers shipping faster.</p>
<a className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors" href="#contact">Start Building Free</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50 border-y border-slate-100" id="blog">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text mb-4">Latest Insights</h2>
<p className="text-slate-500 max-w-md">Deep dives into generative UI, design systems, and frontend engineering.</p>
</div>
<div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" data-lucide="search"></i>
<input className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-sm w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Search..." type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto hide-scrollbar">
<button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold whitespace-nowrap">All</button>
<button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 whitespace-nowrap">Engineering</button>
<button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 whitespace-nowrap">Design</button>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

<article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
<div className="aspect-video bg-slate-100 overflow-hidden relative">
<img alt="LLM Design" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/2563EB/FFFFFF?text=LLM+Design"/>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3">
<span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded">Engineering</span>
<span className="text-xs text-slate-400">Oct 24, 2024</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">The State of AI-Generated UI</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Exploring the limitations and breakthroughs in large language models when tasked with visual design systems.</p>
<a className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</article>

<article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
<div className="aspect-video bg-slate-100 overflow-hidden relative">
<img alt="Figma Sync" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/06B6D4/FFFFFF?text=Figma+Sync"/>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3">
<span className="bg-cyan-50 text-cyan-700 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded">Product</span>
<span className="text-xs text-slate-400">Oct 12, 2024</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">From Figma to React in Seconds</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">How we optimized our export engine to handle complex auto-layout constraints properly.</p>
<a className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</article>

<article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
<div className="aspect-video bg-slate-100 overflow-hidden relative">
<img alt="Tutorial" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/475569/FFFFFF?text=Tutorial"/>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3">
<span className="bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded">Tutorial</span>
<span className="text-xs text-slate-400">Sep 28, 2024</span>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Mastering Custom Tokens</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">A guide to setting up global color and spacing tokens for consistent branding across projects.</p>
<a className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</article>
</div>
<div className="flex justify-center gap-2">
<button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50" disabled=""><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">1</button>
<button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50">2</button>
<button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50">3</button>
<button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="solutions">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text mb-6">Solutions for every team</h2>
<p className="text-lg text-slate-500">Dosi Gridge adapts to your workflow, whether you're prototyping an MVP or scaling an enterprise design system.</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">

<div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="rocket"></i></div>
<h3 className="font-bold text-slate-900 mb-2">For Startups</h3>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Problem</p>
<p className="text-sm text-slate-600 mb-4">Limited engineering resources to build custom UI.</p>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Solution</p>
<p className="text-sm text-slate-600 mb-6">Generate full landing pages in minutes.</p>
<div className="mt-auto">
<a className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="pen-tool"></i></div>
<h3 className="font-bold text-slate-900 mb-2">For Designers</h3>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Problem</p>
<p className="text-sm text-slate-600 mb-4">Handing off designs often leads to implementation errors.</p>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Solution</p>
<p className="text-sm text-slate-600 mb-6">Export pixel-perfect code directly from your vision.</p>
<div className="mt-auto">
<a className="text-cyan-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="briefcase"></i></div>
<h3 className="font-bold text-slate-900 mb-2">For Agencies</h3>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Problem</p>
<p className="text-sm text-slate-600 mb-4">Tight deadlines and repetitive boilerplate coding.</p>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Solution</p>
<p className="text-sm text-slate-600 mb-6">Scale output 3x without increasing headcount.</p>
<div className="mt-auto">
<a className="text-purple-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all flex flex-col h-full">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="terminal"></i></div>
<h3 className="font-bold text-slate-900 mb-2">For Developers</h3>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Problem</p>
<p className="text-sm text-slate-600 mb-4">Wasting time centering divs instead of building logic.</p>
<p className="text-xs text-slate-500 mb-2 font-medium uppercase">Solution</p>
<p className="text-sm text-slate-600 mb-6">Automate the UI layer completely.</p>
<div className="mt-auto">
<a className="text-green-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>

<div className="mb-24 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
<table className="w-full min-w-[700px] text-left border-collapse bg-white">
<thead>
<tr className="bg-slate-50 border-b border-slate-200">
<th className="py-4 px-6 font-semibold text-slate-600">Metric</th>
<th className="py-4 px-6 font-semibold text-slate-500">Manual Coding</th>
<th className="py-4 px-6 font-semibold text-slate-500">Design Tools</th>
<th className="py-4 px-6 font-bold text-blue-600">Dosi Gridge</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-slate-100 hover:bg-slate-50/50">
<td className="py-4 px-6 font-medium text-slate-900">Speed</td>
<td className="py-4 px-6 text-slate-500">Slow (Days)</td>
<td className="py-4 px-6 text-slate-500">N/A (Static)</td>
<td className="py-4 px-6 font-bold text-blue-600">Instant</td>
</tr>
<tr className="border-b border-slate-100 hover:bg-slate-50/50">
<td className="py-4 px-6 font-medium text-slate-900">Export</td>
<td className="py-4 px-6 text-slate-500">Manual</td>
<td className="py-4 px-6 text-slate-500">Bloated Plugins</td>
<td className="py-4 px-6 font-bold text-blue-600">Clean Semantic HTML</td>
</tr>
<tr className="border-b border-slate-100 hover:bg-slate-50/50">
<td className="py-4 px-6 font-medium text-slate-900">Automation</td>
<td className="py-4 px-6 text-slate-500">None</td>
<td className="py-4 px-6 text-slate-500">Limited</td>
<td className="py-4 px-6 font-bold text-blue-600">Full AI Pipeline</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="py-4 px-6 font-medium text-slate-900">Cost</td>
<td className="py-4 px-6 text-slate-500">$$$ (Dev Hours)</td>
<td className="py-4 px-6 text-slate-500">$$ (Subscriptions)</td>
<td className="py-4 px-6 font-bold text-blue-600">$ (Fixed)</td>
</tr>
</tbody>
</table>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-24">
<div className="group relative rounded-2xl overflow-hidden border border-slate-200">
<img alt="Case Study 1" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/800x400/1e293b/FFFFFF?text=Case+Study+1"/>
<div className="p-6 bg-white relative z-10">
<h4 className="font-bold text-lg mb-2">Fintech Dashboard Revamp</h4>
<div className="flex gap-4 text-sm font-medium text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 2 Days</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-green-500" data-lucide="trending-up"></i> +40% Speed</span>
</div>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden border border-slate-200">
<img alt="Case Study 2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/800x400/1e293b/FFFFFF?text=Case+Study+2"/>
<div className="p-6 bg-white relative z-10">
<h4 className="font-bold text-lg mb-2">SaaS Landing Page</h4>
<div className="flex gap-4 text-sm font-medium text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 4 Hours</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> 0 Bugs</span>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto space-y-4 mb-12">
<h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-slate-200 transition-all open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        Is the code production ready?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-slate-500 mt-3 text-sm leading-relaxed">Yes. Dosi Gridge generates semantic HTML5 and standard Tailwind CSS classes. No weird custom classes.</p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-slate-200 transition-all open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        Can I export to React?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-slate-500 mt-3 text-sm leading-relaxed">Yes, we support JSX, Vue, and Svelte exports in the Pro plan.</p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-slate-200 transition-all open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        Do I own the designs?
                        <span className="transition-transform group-open:rotate-180"><i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-slate-500 mt-3 text-sm leading-relaxed">Absolutely. Everything you generate is 100% yours to use commercially.</p>
</details>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all" href="#contact">Get Started Now <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-3xl mb-16">
<h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">About Dosi Gridge</h1>
<p className="text-xl text-slate-400 leading-relaxed">Our mission is to democratize software creation by removing the friction between an idea and its implementation.</p>
</div>

<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
<div className="group">
<img alt="Elena Rostova" className="rounded-xl mb-4 w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://placehold.co/300x300/334155/FFFFFF?text=Elena"/>
<h3 className="font-bold text-white">Elena Rostova</h3>
<p className="text-sm text-slate-400 mb-2">CEO &amp; Founder</p>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
<div className="group">
<img alt="Marcus Chen" className="rounded-xl mb-4 w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://placehold.co/300x300/334155/FFFFFF?text=Marcus"/>
<h3 className="font-bold text-white">Marcus Chen</h3>
<p className="text-sm text-slate-400 mb-2">Head of AI</p>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
<div className="group">
<img alt="Sarah O'Neil" className="rounded-xl mb-4 w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://placehold.co/300x300/334155/FFFFFF?text=Sarah"/>
<h3 className="font-bold text-white">Sarah O'Neil</h3>
<p className="text-sm text-slate-400 mb-2">Lead Designer</p>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
<div className="group">
<img alt="Join Team" className="rounded-xl mb-4 w-full aspect-square object-cover border-2 border-dashed border-slate-700 flex items-center justify-center bg-transparent group-hover:border-blue-500 transition-colors" src="https://placehold.co/300x300/334155/FFFFFF?text=Join+Us"/>
<h3 className="font-bold text-white">You?</h3>
<p className="text-sm text-slate-400 mb-2">We're hiring</p>
<a className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium" href="#">View Careers →</a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-bold mb-8">Our Journey</h2>
<div className="pl-4 border-l-2 border-slate-700 space-y-10">
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900"></div>
<div className="text-sm font-semibold text-blue-400 mb-1">2024</div>
<h3 className="text-lg font-medium text-white">Series A Funding</h3>
<p className="text-slate-400 text-sm">Scaling our vision model capabilities.</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-600 ring-4 ring-slate-900"></div>
<div className="text-sm font-semibold text-slate-500 mb-1">2023</div>
<h3 className="text-lg font-medium text-white">Public Beta</h3>
<p className="text-slate-400 text-sm">Opened access to 10k developers.</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-600 ring-4 ring-slate-900"></div>
<div className="text-sm font-semibold text-slate-500 mb-1">2022</div>
<h3 className="text-lg font-medium text-white">Founded</h3>
<p className="text-slate-400 text-sm">Research project in San Francisco.</p>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-bold mb-8">Values</h2>
<div className="space-y-6">
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<h4 className="font-bold text-white mb-2">Innovation</h4>
<p className="text-sm text-slate-400">We push the boundaries of what generative AI can do for UI.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<h4 className="font-bold text-white mb-2">Openness</h4>
<p className="text-sm text-slate-400">We contribute to the open source community that powers us.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<h4 className="font-bold text-white mb-2">Quality</h4>
<p className="text-sm text-slate-400">We don't ship hallucinations. Code must work.</p>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<h3 className="font-bold text-xl text-white mb-1">Open Source</h3>
<p className="text-slate-400 text-sm">We maintain several core libraries.</p>
</div>
<a className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="github"></i> View on GitHub
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
<h2 className="text-4xl font-bold tracking-tight gradient-text mb-12 text-center">Get in touch</h2>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Name</label>
<input className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all p-3 text-sm bg-slate-50 focus:bg-white" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Email</label>
<input className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all p-3 text-sm bg-slate-50 focus:bg-white" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Company (Optional)</label>
<input className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all p-3 text-sm bg-slate-50 focus:bg-white" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Reason</label>
<div className="relative">
<select className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all p-3 text-sm bg-slate-50 focus:bg-white appearance-none">
<option>Sales Inquiry</option>
<option>Support Request</option>
<option>Partnership</option>
</select>
<i className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">Message</label>
<textarea className="w-full rounded-xl border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all p-3 text-sm bg-slate-50 focus:bg-white" required="" rows="4"></textarea>
</div>

<input className="hidden" name="honey_pot" tabindex="-1" type="text"/>
<button className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25" type="submit">Send Message</button>
</form>
</div>

<div className="space-y-10">
<div>
<h3 className="font-bold text-slate-900 text-lg mb-6">Contact Information</h3>
<div className="space-y-5">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Email</p>
<a className="text-sm text-slate-500 hover:text-blue-600" href="mailto:support@dosigridge.com">support@dosigridge.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Phone</p>
<p className="text-sm text-slate-500">+1 (555) 123-4567</p>
<p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm PST</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Office</p>
<p className="text-sm text-slate-500">101 AI Valley, Suite 400<br/>San Francisco, CA 94103</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-100 rounded-xl h-48 w-full flex items-center justify-center text-slate-400 border border-slate-200">
<span className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="map"></i> Map Embed</span>
</div>
<div className="flex gap-4">
<a className="text-sm font-medium text-blue-600 hover:underline" href="#">Documentation</a>
<span className="text-slate-300">|</span>
<a className="text-sm font-medium text-blue-600 hover:underline" href="#">Help Center</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text mb-4">Simple, transparent pricing</h2>
<p className="text-lg text-slate-500">Start for free, upgrade when you need more power.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="gradient-border-card group">
<div className="gradient-border-inner p-8 flex flex-col h-full">
<div className="font-bold text-slate-900 mb-2">Starter</div>
<div className="text-4xl font-bold text-slate-900 mb-6">$0</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> 10 Generations/mo</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> HTML Export</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Community Support</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors">Get Started</button>
</div>
</div>

<div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Popular</div>
<div className="bg-white rounded-[14px] p-8 h-full flex flex-col">
<div className="font-bold text-slate-900 mb-2">Pro</div>
<div className="text-4xl font-bold text-slate-900 mb-6">$29<span className="text-base font-normal text-slate-400">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Unlimited Generations</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Figma &amp; React Export</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Priority Support</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-blue-600" data-lucide="check"></i> Private Projects</li>
</ul>
<button className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">Start Free Trial</button>
</div>
</div>

<div className="gradient-border-card group">
<div className="gradient-border-inner p-8 flex flex-col h-full bg-slate-50/50">
<div className="font-bold text-slate-900 mb-2">Enterprise</div>
<div className="text-4xl font-bold text-slate-900 mb-6">Custom</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Custom Model Tuning</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> SSO &amp; Security</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Dedicated Manager</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-slate-900 font-bold hover:bg-white transition-colors">Contact Sales</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-5 gap-12 mb-12">
<div className="md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">D</div>
<span className="font-bold text-slate-900">Dosi Gridge</span>
</a>
<p className="text-sm text-slate-500 mb-6 max-w-sm">Empowering developers and designers to build better UI, faster. The future of frontend is here.</p>

<div className="flex gap-2 max-w-xs">
<input className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter email" type="email"/>
<button className="bg-slate-900 text-white rounded-lg px-3 py-2 text-sm hover:bg-slate-800 transition-colors"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">API API</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-400">© 2024 Dosi Gridge Inc. All rights reserved.</p>

<div className="flex gap-4">
<a aria-label="Twitter" className="icon-3d w-10 h-10 rounded-xl bg-slate-50 border-b-4 border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a aria-label="GitHub" className="icon-3d w-10 h-10 rounded-xl bg-slate-50 border-b-4 border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a aria-label="LinkedIn" className="icon-3d w-10 h-10 rounded-xl bg-slate-50 border-b-4 border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
