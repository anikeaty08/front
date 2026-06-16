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
emerald: {
DEFAULT: '#10b981',
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981',
600: '#059669',
700: '#047857',
800: '#065f46',
900: '#064e3b',
950: '#022c22',
}
},
animation: {
'float-slow': 'float 6s ease-in-out infinite',
'float-medium': 'float 5s ease-in-out infinite',
'float-fast': 'float 4s ease-in-out infinite',
'flow-right': 'flowRight 1.5s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
flowRight: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-slate-200 md:hidden z-50 flex gap-3">
<a className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100" href="https://wa.me/33699662137">
<iconify-icon height="24" icon="solar:chat-round-line-duotone" width="24"></iconify-icon>
</a>
<a className="flex-1 flex items-center justify-center py-3 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors rounded-lg shadow-lg shadow-emerald-900/10" href="#contact">
            Book Free Call →
        </a>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 hover:opacity-100 transition-opacity opacity-90" href="#">
<img alt="FactoLink" className="bg-center w-auto h-8 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d6f8e97-1980-4a0c-a87c-d24a8b66d737_320w.png"/>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">

<div className="relative group hidden sm:block mr-2">
<button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-600 px-3 py-2 rounded-md hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
<iconify-icon height="18" icon="solar:global-outline" width="18"></iconify-icon>
<span className="uppercase">EN</span>
<iconify-icon className="opacity-50" height="12" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="absolute right-0 top-full pt-2 w-40 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
<div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-1 ring-1 ring-slate-900/5">
<a className="flex items-center justify-between px-4 py-2.5 text-sm text-emerald-600 bg-emerald-50" href="#">
<span>English</span>
<span className="text-xs font-bold">EN</span>
</a>
<a className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors" href="#">
<span>Français</span>
<span className="text-xs text-slate-400">FR</span>
</a>
<a className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors" href="#">
<span>Español</span>
<span className="text-xs text-slate-400">ES</span>
</a>
<a className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors" href="#">
<span>Русский</span>
<span className="text-xs text-slate-400">RU</span>
</a>
<a className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors" href="#">
<span>العربية</span>
<span className="text-xs text-slate-400">AR</span>
</a>
</div>
</div>
</div>
<a className="hidden sm:inline-flex items-center justify-center w-10 h-10 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-full transition-colors" href="https://wa.me/33699662137" target="_blank">
<iconify-icon height="20" icon="solar:chat-round-line-duotone" width="20"></iconify-icon>
</a>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/40" href="#contact">
                    Book a Call
                </a>
<button className="lg:hidden text-slate-900 flex items-center p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-28 pt-32 pb-16">
<div className="max-w-5xl mx-auto px-6 text-center animate-on-scroll" style={{animationPlayState: 'running'}}>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-emerald-600 tracking-tight mb-8" style={{}}>Your jewelry production <br className="hidden md:block"/> partner in Asia.</h1>
<p className="md:text-2xl leading-relaxed text-xl font-light text-slate-500 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Direct access to selected manufacturers. We handle sourcing, quality control, and logistics so you can focus on design.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto hover:bg-emerald-700 transition-all shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 text-base font-medium text-white bg-emerald-600 w-full rounded-lg pt-4 pr-10 pb-4 pl-10 shadow-lg" href="#contact">
                    Start Production
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative border-y border-slate-200 bg-slate-900 overflow-hidden">
<div className="absolute inset-0 opacity-20">
<img alt="Jewelry Factory Background" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1599690947672-cd4d9426f83f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="max-w-7xl mr-auto ml-auto pt-14 pr-6 pb-14 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-on-scroll delay-100" style={{animationPlayState: 'paused'}}>
<div className="text-center md:text-left group cursor-default">
<p className="md:text-5xl group-hover:scale-105 transition-transform duration-300 text-4xl font-medium text-emerald-700 tracking-tight text-center mb-2">17</p>
<p className="text-base font-medium text-slate-600 text-center">Brands Launched</p>
</div>
<div className="text-center md:text-left group cursor-default">
<p className="md:text-5xl group-hover:scale-105 transition-transform duration-300 text-4xl font-medium text-emerald-700 tracking-tight text-center mb-2">20+</p>
<p className="text-base font-medium text-slate-600 text-center">ISO Factories</p>
</div>
<div className="text-center md:text-left group cursor-default">
<p className="md:text-5xl group-hover:scale-105 transition-transform duration-300 text-4xl font-medium text-emerald-700 tracking-tight text-center mb-2">6</p>
<p className="text-base font-medium text-slate-600 text-center">Asian Hubs</p>
</div>
<div className="text-center md:text-left group cursor-default">
<p className="md:text-5xl group-hover:scale-105 transition-transform duration-300 text-4xl font-medium text-emerald-700 tracking-tight text-center mb-2">26%</p>
<p className="text-base font-medium text-slate-600 text-center">Cost Savings</p>
</div>
</div>
</div>

<section className="bg-white border-slate-200 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-on-scroll" style={{animationPlayState: 'running'}}>
<div className="max-w-2xl">
<h2 className="text-3xl font-medium text-emerald-600 tracking-tight mb-4">Inside the Industry</h2>
<p className="text-xl font-light text-slate-500">
                        Transparency is our core value. We share photos from factory visits, QC checks, and client meetings so you know exactly who handles your products.
                    </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors" href="#contact">
                    Start your project
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[500px] animate-on-scroll delay-100" style={{animationPlayState: 'running'}}>

<div className="overflow-hidden group md:h-full h-64 border-slate-200 border rounded-2xl relative shadow-sm">
<img alt="Factory Worker Checking Quality" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dc59658-1526-41ea-9d55-4053e5497e3e_1600w.png"/>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-full">

<div className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden group h-64 md:h-auto border border-slate-200 shadow-sm">

<img alt="Client Meeting &amp; Sourcing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9271b5c-f540-4a6f-833c-ab33419e9734_1600w.jpg"/>

</div>

<div className="relative rounded-2xl overflow-hidden group h-48 md:h-auto border border-slate-200 shadow-sm">

<img alt="Jewelry Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f402120-d2f5-4d30-95f6-59e955dc123c_800w.png"/>

</div>

<div className="flex flex-col md:h-auto bg-slate-50 h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40060226-0d73-45bf-b247-734ca3933bf9_800w.png)] bg-cover bg-center border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-center">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-emerald-600 mb-3 shadow-sm">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold mb-1">Real-time Updates</h4>
<p className="text-xs text-slate-500 leading-relaxed">We send you uncensored photos and videos via WhatsApp throughout the production process.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-white to-slate-50/80 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-8 mb-20 animate-on-scroll delay-100" style={{animationPlayState: 'paused'}}>

<div className="animate-float-slow w-full md:w-80 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative z-10 h-72 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon height="22" icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">Clients</h3>
</div>
<ul className="space-y-3 text-slate-500 text-sm">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>Europe (EU)</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>United States (US)</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>Middle East (UAE)</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>Singapore</li>
</ul>
</div>

<div className="hidden md:flex items-center w-24 -mx-2 relative z-0 flow-line-container h-1 bg-slate-100 rounded-full">
<div className="flow-dot animate-flow-right"></div>
</div>

<div className="animate-float-medium w-full md:w-96 bg-emerald-900 p-10 rounded-3xl shadow-2xl shadow-emerald-900/20 relative z-20 transform md:scale-110 text-center flex flex-col items-center justify-center h-80 border border-emerald-800">
<div className="relative w-16 h-16 mb-6">
<div className="absolute inset-0 bg-emerald-400 rounded-full opacity-20 animate-ping"></div>
<div className="relative w-16 h-16 rounded-full bg-emerald-800/50 border border-emerald-700 flex items-center justify-center text-emerald-300">
<iconify-icon height="32" icon="solar:city-linear" width="32"></iconify-icon>
</div>
</div>
<h2 className="text-3xl font-semibold text-white mb-2">Bangkok HUB</h2>
<p className="text-emerald-200 text-sm font-medium tracking-wide uppercase mb-8">Headquarters + QC Center</p>
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/80 text-emerald-100 text-xs font-medium border border-emerald-700">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active Operations
                    </span>
</div>

<div className="hidden md:flex items-center w-24 -mx-2 relative z-0 flow-line-container h-1 bg-slate-100 rounded-full">
<div className="flow-dot animate-flow-right" style={{animationDelay: '0.75s'}}></div>
</div>

<div className="animate-float-fast w-full md:w-80 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative z-10 h-72 flex flex-col justify-center text-right">
<div className="flex items-center gap-3 mb-6 justify-end">
<h3 className="text-xl font-medium text-slate-900">Factories</h3>
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon height="22" icon="solar:factory-2-linear" width="22"></iconify-icon>
</div>
</div>
<ul className="space-y-3 text-slate-500 text-sm">
<li className="flex items-center gap-2 justify-end">China (Guangzhou)<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div></li>
<li className="flex items-center gap-2 justify-end">Thailand (Bangkok)<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div></li>
<li className="flex items-center gap-2 justify-end">Vietnam (Hanoi)<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div></li>
<li className="flex items-center gap-2 justify-end">Turkey / India<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div></li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 max-w-5xl mx-auto animate-on-scroll delay-200" style={{animationPlayState: 'paused'}}>
<div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Step 1</span>
<p className="text-slate-600 font-medium">Clients send designs to us</p>
</div>
<div>
<span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">Coordination</span>
<p className="text-slate-600 font-medium">We handle manufacturing &amp; QC</p>
</div>
<div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Step 3</span>
<p className="text-slate-600 font-medium">Quality-crafted jewelry, delivered.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto animate-on-scroll" style={{animationPlayState: 'paused'}}>
<h2 className="md:text-4xl text-3xl font-medium text-emerald-600 tracking-tight mb-4">Why work with FactoLink?</h2>
<p className="text-xl font-light text-slate-500" style={{}}>We bridge the gap between your jewelry brand and Asian manufacturing excellence with a modern, transparent approach.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-100 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Eyes in Asia</h3>
<p className="text-base text-slate-500 leading-relaxed">Based in Bangkok, we visit factories, inspect lines, and negotiate in person so you don't have to.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-200 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Double QC</h3>
<p className="leading-relaxed text-base text-slate-500" style={{}}>We inspect at the factory and at our hub before dispatch. Keeping defect rates below industry standards.</p>
</div>

<div className="hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-300 hover:-translate-y-1 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 border border-amber-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Start Small</h3>
<p className="leading-relaxed text-base text-slate-500" style={{}}>Don't over-invest! Our strong relationships allow MOQs as low as 50 pieces per model.</p>
</div>

<div className="hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-300 hover:-translate-y-1 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Full Service</h3>
<p className="leading-relaxed text-base text-slate-500">From 3D modeling and molding to plating and packaging. We handle the messy parts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 animate-on-scroll" style={{animationPlayState: 'paused'}}>
<h2 className="text-3xl font-medium text-emerald-600 tracking-tight mb-4">Crystal Clear Process</h2>
<p className="text-xl text-slate-500 max-w-xl mx-auto font-light">From sketch to showcase in ~4 months.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 animate-on-scroll delay-100" style={{animationPlayState: 'paused'}}>
<span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-xs font-mono font-semibold text-slate-600 uppercase mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">~5-7 days</span>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">1. Sourcing</h3>
<p className="text-base text-slate-500 leading-relaxed">Brief &amp; factory matching. We identify the top 3 specialized manufacturers.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 animate-on-scroll delay-200" style={{animationPlayState: 'paused'}}>
<span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-xs font-mono font-semibold text-slate-600 uppercase mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">~15-20 days</span>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">2. Sampling</h3>
<p className="text-base text-slate-500 leading-relaxed">Prototyping &amp; iterations. We refine samples until they perfectly match your vision.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 animate-on-scroll delay-300" style={{animationPlayState: 'paused'}}>
<span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-xs font-mono font-semibold text-slate-600 uppercase mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">~30-45 days</span>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">3. Production</h3>
<p className="text-base text-slate-500 leading-relaxed">Mass manufacturing with on-site QC. Real-time photo updates during production.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 animate-on-scroll delay-300" style={{animationPlayState: 'paused'}}>
<span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-xs font-mono font-semibold text-slate-600 uppercase mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">~15-20 days</span>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">4. Delivery</h3>
<p className="text-base text-slate-500 leading-relaxed">Secure DDP shipping + customs clearance. Delivered directly to your warehouse.</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-200 pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-3xl mx-auto animate-on-scroll" style={{animationPlayState: 'paused'}}>
<h2 className="text-3xl font-medium text-emerald-600 tracking-tight mb-4">Complete Jewelry Ecosystem</h2>
<p className="text-xl text-slate-500 font-light">A full-stack solution for your brand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col h-full hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-100 hover:-translate-y-1 bg-white border-slate-200 border rounded-2xl p-8" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Manufacturing</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed flex-1">925 silver, brass, stainless steel. High-end finishing and precise stone setting.</p>
<div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto w-full">
<span className="text-xs font-semibold text-emerald-700 text-center bg-emerald-50 rounded px-2 py-1">MOQ: 50pcs</span>
</div>
</div>

<div className="flex flex-col h-full bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-200 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Strategic Sourcing</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed flex-1">We negotiate prices and terms with factories that match your specific niche and quality requirements.</p>
<div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto w-full">
<span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">Tailored</span>
</div>
</div>

<div className="flex flex-col h-full bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-300 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Quality Control</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed flex-1">Rigorous inspection at every stage. We verify materials, weight, plating thickness, and stones.</p>
<div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto w-full">
<span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-1 rounded">Zero Defects</span>
</div>
</div>

<div className="flex flex-col h-full bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 group animate-on-scroll delay-300 hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Logistics (DDP)</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed flex-1">We handle customs, duties, and insurance. Zero headaches, delivered straight to your door.</p>
<div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto w-full">
<span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">Global</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200" id="standards">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="mb-16 text-center max-w-3xl mx-auto animate-on-scroll" style={{animationPlayState: 'paused'}}>
<h2 className="text-3xl font-medium text-emerald-600 tracking-tight mb-4">Quality &amp; Ethics Guaranteed</h2>
<p className="text-xl font-light text-slate-500">At FactoLink, we work with manufactures that meet international standards for quality, safety, and ethical practices.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-on-scroll delay-100" style={{animationPlayState: 'paused'}}>
<div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:border-emerald-200 transition-colors">
<div className="w-14 h-14 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:file-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">ISO 9001 Certified</h3>
<p className="text-base text-slate-500 leading-relaxed">Quality Management Systems for manufacturing excellence</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:border-emerald-200 transition-colors">
<div className="w-14 h-14 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:gem-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">RJC Certified</h3>
<p className="text-base text-slate-500 leading-relaxed">Responsible Jewellery Council for ethical sourcing</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:border-emerald-200 transition-colors">
<div className="w-14 h-14 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">REACH Compliant (EU)</h3>
<p className="text-base text-slate-500 leading-relaxed">Chemical regulations for safe jewelry materials</p>
</div>
</div>
<div className="text-center mb-24 animate-on-scroll" style={{animationPlayState: 'paused'}}>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
<iconify-icon className="text-emerald-500" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon>
                    All certificates provided with each shipment
                </span>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center animate-on-scroll delay-200" style={{animationPlayState: 'paused'}}>
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase mb-6">
                        Sustainability
                    </div>
<h2 className="md:text-4xl text-3xl font-medium text-emerald-600 tracking-tight mb-6">Ethical Production Matters</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        We believe jewelry should be beautiful and responsibly made. That's why we carefully vet every factory partner for ethical practices and sustainable operations.
                    </p>
</div>
<div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg shadow-emerald-900/5">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Our commitments</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
<iconify-icon height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-slate-600 text-base">All factories guarantee fair wages and safe working conditions (ILO standards)</span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
<iconify-icon height="16" icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<span className="text-slate-600 text-base">We prioritize traceable materials: recycled metals, conflict-free gemstones</span>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
<iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<span className="text-slate-600 text-base">Long-term partnerships with manufacturers (5+ years average relationship)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll" style={{animationPlayState: 'paused'}}>
<h2 className="text-3xl font-medium text-emerald-600 tracking-tight mb-4">Trusted by Brands Worldwide</h2>
<p className="text-xl text-slate-500 font-light">See what our partners have to say about working with FactoLink.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll delay-100" style={{animationPlayState: 'paused'}}>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 italic">"FactoLink completely transformed our supply chain. We were struggling with communication barriers in Thailand, but their team handled everything perfectly. Our defect rate dropped to near zero."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">SJ</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Founder, Eclat Paris</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 italic">"The transparency is what I value most. I get photos from the factory floor without having to fly there myself. Shipping to the US was seamless with their DDP service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">MK</div>
<div>
<p className="text-sm font-semibold text-slate-900">Michael K.</p>
<p className="text-xs text-slate-500">Ops Director, Stone &amp; Co.</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 italic">"We were able to lower our MOQs significantly compared to when we sourced directly via Alibaba. The quality consistency is excellent for our gold vermeil line."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">AL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Ana Lopez</p>
<p className="text-xs text-slate-500">CEO, Aurora Jewelry</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-12 animate-on-scroll" style={{animationPlayState: 'paused'}}>
<h2 className="text-3xl font-medium text-emerald-600 tracking-tight mb-2">Let's discuss your project</h2>
<p className="text-slate-500 text-base">Fill out the form below. We usually reply within 2 hours.</p>
</div>
<form action="#" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 space-y-6 animate-on-scroll delay-100" style={{animationPlayState: 'paused'}}>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-base" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="email">Work Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-base" id="email" name="email" placeholder="jane@brand.com" required="" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-base" id="phone" name="phone" placeholder="+33 6..." type="tel"/>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="country">Country</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-base" id="country" name="country" placeholder="Your Country" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="type">Project Type</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-base custom-select" id="type" name="type">
<option>New Collection</option>
<option>Test Project</option>
<option>Brand Expansion</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="budget">Budget</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-base custom-select" id="budget" name="budget">
<option>€5k - €10k</option>
<option>€10k - €25k</option>
<option>€25k+</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-base resize-none" id="message" name="message" placeholder="Briefly describe your vision..." rows="3"></textarea>
</div>
<button className="hover:bg-emerald-700 transition-all shadow-emerald-500/20 hover:shadow-emerald-500/40 flex text-base font-semibold text-white bg-emerald-600 w-full rounded-lg pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" type="submit">
                    Get My Free Consultation
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
<div className="mt-8 text-center pt-6 animate-on-scroll delay-200" style={{animationPlayState: 'paused'}}>
<a className="inline-flex items-center gap-2 hover:text-emerald-700 hover:bg-emerald-50 transition-colors text-sm font-medium text-emerald-600 bg-emerald-50/50 border-emerald-100 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="https://wa.me/33699662137">
<iconify-icon height="18" icon="solar:chat-round-line-duotone" width="18"></iconify-icon>
                    Chat on WhatsApp instead
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-24 md:pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<img alt="FactoLink" className="bg-center w-auto h-8 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d6f8e97-1980-4a0c-a87c-d24a8b66d737_320w.png"/>
</a>
<p className="leading-relaxed text-base text-emerald-600 max-w-xs mb-8">Your local partner in Asia for seamless jewelry production.</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-slate-500 hover:text-emerald-600 transition-colors group" href="mailto:hello@factolink.com">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-all">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</div>
                            hello@factolink.com
                        </a>
<a className="flex items-center gap-3 text-sm text-slate-500 hover:text-emerald-600 transition-colors group" href="https://wa.me/33699662137">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-all">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
</div>
                            +33 6 99 66 21 37 (WhatsApp)
                        </a>
</div>
</div>

<div className="">
<h4 className="uppercase text-sm font-semibold text-emerald-600 tracking-wide mb-6">Services</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#process">Sourcing</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#services">Manufacturing</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#services">Quality Control</a></li>
</ul>
</div>

<div className="">
<h4 className="uppercase text-sm font-semibold text-emerald-600 tracking-wide mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#standards">Standards</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div className="">
<h4 className="uppercase text-sm font-semibold text-emerald-600 tracking-wide mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400" style={{}}>© 2026 FactoLink Jewelry. All rights reserved.</p>
<div className="flex items-center gap-4">

</div>
</div>
</div>
</footer>



    </>
  );
}
