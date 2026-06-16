import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
<span className="font-semibold text-sm tracking-tighter">SK</span>
</div>
<span className="text-slate-100 font-medium tracking-tight text-sm group-hover:text-cyan-400 transition-colors">Sai Krupa Agency</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#products">Catalog</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#network">Network</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-white px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 group" href="#contact">
<span className="">Partner With Us</span>
<i className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-cyan-400" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-slate-100">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
<div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center reveal active">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-xs font-medium mb-10 shadow-xl shadow-cyan-900/10 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Trusted by 150+ Hospitals in Mumbai
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1] mb-8">
                The Backbone of <br/>
<span className="text-gradient">Medical Supply.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                Ensuring the flow of critical surgical and pharmaceutical essentials across the Metropolitan Region with precision logistics.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full text-sm font-semibold hover:bg-cyan-50 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 group" href="#products">
                    Explore Inventory
                    <i className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" data-lucide="box"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2" href="#contact">
                    Request Quote
                </a>
</div>
</div>

<div className="absolute top-1/3 left-10 w-24 h-24 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite] hidden lg:block"></div>
<div className="absolute bottom-1/4 right-10 w-16 h-16 border border-blue-500/20 rotate-45 hidden lg:block animate-pulse"></div>
</main>

<section className="border-y border-slate-800 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">25+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Years Active</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">12hr</span>
<span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Avg. Delivery Time</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">1k+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide font-medium">SKUs Managed</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Cold Chain Integrity</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020617] relative" id="products">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-20 md:flex md:items-end md:justify-between reveal">
<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="text-4xl sticker-shadow grayscale hover:grayscale-0 transition-all cursor-default">📦</span>
<h2 className="text-3xl font-medium text-white tracking-tight">Essential Supplies</h2>
</div>
<p className="text-slate-400 max-w-md text-sm leading-relaxed">High-grade medical inventory sourced from certified global manufacturers.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium mt-4 md:mt-0 group" href="#">
                    View Full Catalog <i className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-1 rounded-3xl relative overflow-hidden group border border-slate-800 hover:border-cyan-500/30 transition-colors reveal">

<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&amp'}}></div>

<div className="group-hover:opacity-80 transition-opacity bg-center bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to top, #020617, rgba(2, 6, 23, 0.8), transparent), url(\'https://unsplash.com/photos/a-hand-in-a-glove-holds-a-syringe-4-mGRdpO6Ac\')'}}>
</div>
<div className="z-10 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<div className="w-10 h-10 bg-cyan-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-cyan-300 border border-cyan-500/30">
<i className="w-5 h-5" data-lucide="scissors"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Surgical Instruments</h3>
<p className="text-slate-300 text-sm max-w-lg">Precision scalpels, forceps, and retractors. ISO certified stainless steel
    equipment for operating theaters.</p>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white/10 backdrop-blur rounded-full p-2">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 rounded-3xl relative overflow-hidden group border border-slate-800 hover:border-purple-500/30 transition-colors reveal">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&amp'}}></div>
<div className="group-hover:opacity-80 transition-opacity bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950 opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<div className="w-10 h-10 bg-purple-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-purple-300 border border-purple-500/30">
<i className="w-5 h-5" data-lucide="pill"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Pharmaceuticals</h3>
<p className="text-slate-300 text-sm mb-6">Vaccines, antibiotics, and critical care medicines stored in temperature-controlled environments.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-900/50 p-2 rounded-lg backdrop-blur-sm border border-slate-800">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Cold Chain Storage
                            </div>
<div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-900/50 p-2 rounded-lg backdrop-blur-sm border border-slate-800">
<span className="w-2 h-2 rounded-full bg-blue-500"></span> Bulk Availability
                            </div>
</div>
</div>
</div>

<div className="rounded-3xl relative overflow-hidden group border border-slate-800 hover:border-teal-500/30 transition-colors reveal">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<div className="w-10 h-10 bg-teal-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-teal-300 border border-teal-500/30">
<i className="w-5 h-5" data-lucide="stethoscope"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Medical Disposables</h3>
<p className="text-slate-300 text-sm">Nitrile gloves, N95 masks, syringes, and sterilization kits.</p>
</div>
</div>

<div className="rounded-3xl relative overflow-hidden group border border-slate-800 hover:border-orange-500/30 transition-colors reveal">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<div className="w-10 h-10 bg-orange-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-orange-300 border border-orange-500/30">
<i className="w-5 h-5" data-lucide="monitor-dot"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Hospital Equipment</h3>
<p className="text-slate-300 text-sm">Patient monitors, wheelchairs, and recovery aids.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900/20 border-slate-800 border-t pt-24 pb-24 relative" id="network">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<div className="flex items-center gap-3 mb-6">
<span className="text-4xl sticker-shadow grayscale hover:grayscale-0 transition-all cursor-default">🚚</span>
<h2 className="text-3xl font-medium text-white tracking-tight">Distribution Network</h2>
</div>
<p className="text-slate-400 mb-10 leading-relaxed font-light text-lg">
                        Headquartered in Kalyan East, our logistics are optimized for the dense urban landscape of Mumbai. We guarantee delivery within 12 hours for emergency orders.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="mt-1 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors border border-slate-700">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm">Headquarters</h4>
<p className="text-slate-500 text-sm mt-1">Kalyan East, Maharashtra 421306</p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="mt-1 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors border border-slate-700">
<i className="w-5 h-5" data-lucide="navigation"></i>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">Coverage Area</h4>
<p className="text-slate-500 text-sm mt-1">Thane, Dombivli, Ulhasnagar, Ambernath, Badlapur, Bhiwandi, Panvel, Navi Mumbai.</p>
</div>
</div>
</div>
</div>

<div className="reveal delay-200">
<div className="relative bg-slate-900 rounded-3xl aspect-square border border-slate-800 overflow-hidden shadow-2xl shadow-black/50">

<div className="absolute inset-0 opacity-[0.1]" style={{backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[80%] h-[80%] border border-cyan-900/30 rounded-full animate-pulse"></div>
<div className="absolute w-[60%] h-[60%] border border-cyan-900/40 rounded-full"></div>
<div className="absolute w-[40%] h-[40%] border border-cyan-800/50 rounded-full"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
<div className="relative">
<div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_2px_rgba(34,211,238,0.5)]"></div>
<div className="absolute inset-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
</div>
<span className="mt-3 bg-slate-900/90 border border-slate-700 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium text-cyan-400">HQ: Kalyan</span>
</div>

<div className="absolute top-1/3 left-1/4 w-2 h-2 bg-slate-500 rounded-full"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-slate-500 rounded-full"></div>
<div className="absolute top-1/4 right-1/3 w-2 h-2 bg-slate-500 rounded-full"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-cyan-500/20" style={{strokeDasharray: '4'}}>
<line strokeWidth="1" x1="50%" x2="25%" y1="50%" y2="33%"></line>
<line strokeWidth="1" x1="50%" x2="75%" y1="50%" y2="66%"></line>
<line strokeWidth="1" x1="50%" x2="66%" y1="50%" y2="25%"></line>
</svg>

<div className="absolute bottom-6 left-6 right-6 bg-slate-800/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="truck"></i>
</div>
<div>
<p className="text-xs text-slate-400">Live Status</p>
<p className="text-xs text-white font-medium">8 Vehicles Active</p>
</div>
</div>
<div className="h-2 w-20 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-green-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#020617] pt-24 pb-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="text-center mb-12">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-4xl sticker-shadow grayscale hover:grayscale-0 transition-all cursor-default">✍️</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Partner with Sai Krupa</h2>
<p className="text-slate-400">Request a quote for bulk surgical supplies or pharmaceutical distribution.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</label>
<div className="rounded-lg border border-slate-800 bg-slate-900/50 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all overflow-hidden">
<input className="w-full bg-transparent border-none px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:ring-0" placeholder="Dr. Rajesh Kumar" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</label>
<div className="rounded-lg border border-slate-800 bg-slate-900/50 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all overflow-hidden">
<input className="w-full bg-transparent border-none px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:ring-0" placeholder="clinic@hospital.com" type="email"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Department</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="rounded-lg border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-center text-xs font-medium text-slate-400 transition-all peer-checked:border-cyan-500 peer-checked:bg-cyan-950/30 peer-checked:text-cyan-400 hover:bg-slate-800">
                                Surgical
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="rounded-lg border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-center text-xs font-medium text-slate-400 transition-all peer-checked:border-cyan-500 peer-checked:bg-cyan-950/30 peer-checked:text-cyan-400 hover:bg-slate-800">
                                Pharma
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="rounded-lg border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-center text-xs font-medium text-slate-400 transition-all peer-checked:border-cyan-500 peer-checked:bg-cyan-950/30 peer-checked:text-cyan-400 hover:bg-slate-800">
                                Logistics
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="rounded-lg border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-center text-xs font-medium text-slate-400 transition-all peer-checked:border-cyan-500 peer-checked:bg-cyan-950/30 peer-checked:text-cyan-400 hover:bg-slate-800">
                                Other
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Requirements</label>
<div className="rounded-lg border border-slate-800 bg-slate-900/50 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all overflow-hidden">
<textarea className="w-full bg-transparent border-none px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:ring-0 resize-none" placeholder="Details about product quantity and delivery timeline..." rows="4"></textarea>
</div>
</div>
<button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg py-4 text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2" type="button">
                    Send Inquiry
                    <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</section>

<footer className="bg-slate-950 border-slate-900 border-t pt-16 pb-8 relative">

<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-cyan-400 border border-slate-700">
<span className="font-bold text-xs tracking-tighter">SK</span>
</div>
<span className="text-slate-200 font-medium tracking-tight text-sm">Sai Krupa Agency</span>
</div>
<p className="leading-relaxed text-xs text-slate-500 max-w-xs">Delivering healthcare excellence since 1995. Your partner in medical supply chain management.</p>
</div>
<div className="">
<h4 className="text-slate-200 font-medium text-sm mb-4">Inventory</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Surgical Instruments</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Critical Pharma</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Medical Disposables</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Patient Care</a></li>
</ul>
</div>
<div className="">
<h4 className="text-slate-200 font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Distribution Map</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Quality Policy</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-slate-200 font-medium text-sm mb-4">Connect</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" data-lucide="phone"></i>
<span className="">+91 8767770770</span>
</li>
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" data-lucide="mail"></i>
<span className="">saikrupa_agencies95@yahoo.com</span>
</li>
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" data-lucide="map-pin"></i>
<span className="">Kalyan East, Mumbai</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row border-slate-900 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-[10px] text-slate-600 uppercase tracking-wider">© 2024 Sai Krupa Agency. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
