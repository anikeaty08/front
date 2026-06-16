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
      

<header className="fixed z-50 bg-white/80 backdrop-blur-md w-full border-slate-200 border-b top-0">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-slate-900" href="#">
<span className="bg-center text-xl font-medium tracking-tight">
<img alt="MTA Training &amp; Licensing Logo" className="md:h-10 w-auto h-30 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d15b30a-c7f7-4dd4-84ad-31837f9a80c7_320w.png"/>
</span>
</a>
<nav className="hidden lg:flex xl:gap-4 text-slate-950 gap-x-2 gap-y-x-2 items-center">
<a className="px-2 py-2 hover:text-slate-900 transition-colors text-base font-normal" href="#">Home</a>
<a className="px-2 py-2 hover:text-slate-900 transition-colors text-base font-normal" href="#courses">Non-Accredited Training</a>
<a className="px-2 py-2 hover:text-slate-900 transition-colors text-base font-normal" href="#signalling">Signalling</a>
<a className="hover:text-slate-900 transition-colors text-base font-normal pt-2 pr-2 pb-2 pl-2" href="#signalling">IRSE</a>
<a className="px-2 py-2 text-base font-normal hover:text-slate-900 transition-colors" href="#about">About MTA Training</a>
<a className="px-2 py-2 text-base font-normal hover:text-slate-900 transition-colors" href="#partners">Industry Partners</a>
<a className="px-2 py-2 text-base font-normal hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex gap-4 items-center">
<a className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 text-base font-normal text-slate-900 bg-white border border-slate-200 shadow-sm rounded-md hover:bg-slate-50 hover:border-slate-300 transition-all" href="#login">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                    Log In
                </a>
<button className="md:hidden text-slate-900" style={{display: 'none'}}>
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 text-white relative overflow-hidden">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
<svg className="absolute inset-0 w-full h-full object-cover" preserveaspectratio="none" viewbox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
<rect fill="#9F2236" height="800" width="1440"></rect>
<path d="M0,600 C400,800 600,850 1000,500 C1250,280 1350,300 1440,450 L1440,800 L0,800 Z" fill="#ffffff"></path>
<path d="M0,0 L1440,0 L1440,250 C1100,500 800,650 400,450 C200,350 0,400 0,400 Z" fill="#581426"></path>
<path d="M0,0 L1000,0 C800,250 600,500 200,350 C100,280 0,350 0,350 Z" fill="#310D1A"></path>
</svg>
</div>

<div className="bg-center bg-slate-950/20 opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f15ec11-3985-4836-ad1e-701c650f71d1_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 mix-blend-multiply z-0"></div>
<div className="z-10 grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl mt-12 mb-0">
<div className="inline-flex gap-2 text-sm font-normal text-slate-100 bg-white/10 border-white/20 border rounded-full mb-6 pt-1.5 pr-3.5 pb-1.5 pl-3.5 gap-x-2 gap-y-2 items-center backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-orange-400"></span>
                    Enterprise Compliance &amp; Safety Training
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6">
                    Train anywhere.<br/>Comply everywhere.
                </h1>
<p className="text-xl text-slate-100 max-w-lg mb-8 leading-relaxed">
                    Real-world safety and compliance training built for modern workforces. Keep your team safe, compliant, and productive with our scalable digital platform.
                </p>
<form className="flex w-full max-w-lg relative items-center group" onsubmit="event.preventDefault();">
<div className="absolute left-5 text-slate-300 group-focus-within:text-orange-500 transition-colors pointer-events-none flex items-center justify-center">
<svg className="lucide lucide-search" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<input className="w-full bg-white/10 border border-white/30 rounded-full py-4 pl-14 pr-36 text-lg text-white placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:bg-white/15 transition-all duration-200 backdrop-blur-md shadow-xl shadow-black/10" placeholder="Search for courses..." type="text"/>
<button className="absolute right-2 top-2 bottom-2 inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-lg font-normal rounded-full px-8 transition-colors shadow-sm" type="submit">
                        Search
                    </button>
</form>
</div>
<div className="hidden lg:block relative">

</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="about">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid lg:grid-cols-12 lg:gap-8 mb-16 gap-x-8 gap-y-10 items-start">
<div className="lg:col-span-4">
<div className="inline-flex text-sm font-normal text-slate-700 bg-white border-slate-200 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="w-3.5 h-3.5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                        About Us
                    </div>
<h2 className="leading-[1.15] lg:text-4xl text-4xl font-normal text-slate-900 tracking-tight">
                        More Than Assurance Training &amp; Licensing
                    </h2>
</div>
<div className="leading-relaxed lg:col-span-8 lg:pb-0 lg:pt-0 text-lg text-slate-950 pt-0 pb-0 space-y-5">
<p className="">More Than Assurance Training &amp; Licensing (MTATL) is an Australian-based training provider delivering predominantly online, real world safety and compliance training built on years of frontline experience in Australia’s most complex, safety critical environments. </p>
<p className="">The MTATL team are experienced in providing industry-leading technology solutions backed by live rail operator expertise. Now offering an exciting catalogue of training, MTA provides support for clients looking to quickly and effectively build capability that keeps their people safe, compliant and productive.</p>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-x-6 gap-y-6">

<div className="lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px] group border border-slate-200 bg-slate-100">
<img alt="Modern Workforce Training" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<img alt="Man working on railway" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8774dac-95c3-47e9-9b70-3f1952d302f4_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-normal mb-5">
<svg className="w-3.5 h-3.5 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="6"></circle>
<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
</svg>
                            Practical Safety &amp; Compliance Training
                        </div>
<p className="md:text-2xl leading-snug text-xl font-normal text-white tracking-tight max-w-lg">"We turn policies, standards and regulatory obligations into practical, job ready behaviours that help organisations keep their people safe, capable and productive."</p>
</div>
</div>

<div className="lg:col-span-5 grid md:grid-cols-2 lg:grid-cols-1 gap-6">

<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-center relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover/card:opacity-5 transition-opacity duration-500 pointer-events-none">
<svg className="text-orange-900" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mb-6 relative z-10">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-3 relative z-10">Built for modern workforces</h3>
<p className="leading-relaxed z-10 text-lg text-slate-950 relative">
                            Flexible, online, scalable and designed to minimise operational downtime. Whether delivering accredited rail training, safety and wellbeing modules, or custom e-learning for large organisations, we focus on practical relevance, audit ready assurance and consistent outcomes.
                        </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-center relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover/card:opacity-5 transition-opacity duration-500 pointer-events-none">
<svg className="text-blue-900" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-6 relative z-10">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="z-10 text-xl font-normal text-slate-900 tracking-tight mb-3 relative">Role-Based Pathways</h3>
<p className="leading-relaxed z-10 text-lg text-slate-950 relative">
                            No matter the size of your workforce, we deliver structured onboarding libraries and role-based learning pathways that provide you with visibility, control and confidence across your teams. Ensure every new starter receives consistent, high-quality training from day one.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-200 pt-24 pb-24" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Why Choose MTA Training &amp; Licensing</h2>
<p className="text-lg text-slate-950">MTATL combines expertise in safety-critical rail operation, construction and infrastructure maintenance industries, with the technical capability of technology solutions provider to deliver the digital scalability and innovation of a modern training organisation. </p>
</div>
<div className="grid md:grid-cols-2 gap-x-6 gap-y-6">

<div className="hover:shadow-md transition-shadow bg-white border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-6 gap-y-6">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4">
<iconify-icon className="text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">100% Online Training</h3>
<p className="leading-relaxed text-lg text-slate-950">With 100% online delivery, we help teams stay compliant without taking people off the job or disrupting critical operations. </p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">RIW Integration</h3>
<p className="leading-relaxed text-lg text-slate-950">We also offer seamless, real-time integration with workforce systems like the Rail Industry Worker (RIW) program.</p>
</div>

<div className="hover:shadow-md transition-shadow bg-white border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Scalable Learning</h3>
<p className="leading-relaxed text-lg text-slate-950">From regulatory alignment to multi year training roadmaps, our solutions are built for organisations where safety, compliance and consistency are non negotiable. </p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Audit-Ready Records</h3>
<p className="leading-relaxed text-lg text-slate-950">We deliver audit ready evidence, reduce administrative burden, and create meaningful learning that drives behaviour change. </p>
</div>
</div>
<div className="mt-16 text-center max-w-3xl mx-auto">
<p className="text-xl font-normal text-slate-900">When you choose MTATL, you’re choosing a partner who helps you meet obligations with confidence — and keeps your workforce moving.</p>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="courses">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<iconify-icon className="text-9xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white mb-8 border border-white/10">
<iconify-icon className="text-2xl" icon="solar:library-linear"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight mb-4">Non-Accredited Courses</h2>
<p className="leading-relaxed flex-grow text-lg text-slate-300 max-w-md mb-8">MTA Training &amp; Licensing delivers real world safety and capability training that helps organisations keep their people safe, compliant, and productive. Our flexible online learning, proven operational expertise, and training solutions seamlessly integrate with workforce systems.</p>
<a className="inline-flex items-center justify-center hover:bg-slate-50 transition-colors text-base font-normal text-slate-900 bg-white w-max border-slate-300 border rounded-md pt-2.5 pr-5 pb-2.5 pl-5" href="#">View Courses</a>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 text-slate-50">
<iconify-icon className="text-9xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<div className="z-10 flex flex-col h-full relative">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-8 border border-blue-100">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-slate-900 tracking-tight mb-4">Signalling Courses</h2>
<div className="leading-relaxed flex-grow text-lg text-slate-950 max-w-md mb-8 space-y-3">
<p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
</div>
<a className="inline-flex items-center justify-center hover:bg-slate-50 transition-colors text-base font-normal text-slate-900 bg-white w-max border-slate-300 border rounded-md pt-2.5 pr-5 pb-2.5 pl-5" href="#">View Courses</a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 border-slate-200 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-normal tracking-tight text-slate-900 mb-3">Featured Courses</h2>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 md:mx-0 md:px-0 [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-6 pb-8 pl-6 gap-x-6 gap-y-6">

<div className="min-w-[85vw] sm:min-w-[340px] md:min-w-[380px] snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
<div className="relative h-48 overflow-hidden">
<img alt="Rail Safety Training" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6e10112-efe9-40b7-a259-5b9d2bc58147_800w.jpg"/>
<div className="text-sm font-normal text-slate-900 bg-white/90 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-sm">Health, Wellbeing &amp; Mental Fitness</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Safeworking Level 1</h3>
<p className="text-base text-slate-500 line-clamp-2 mb-6 flex-grow leading-relaxed">Essential safety training for personnel operating in or around the danger zone. Covers basic safety protocols, hazard identification, and emergency response procedures.</p>
<div className="flex items-center justify-between pt-5 border-t border-slate-100">
<div className="flex items-center gap-4 text-sm font-normal text-slate-500">
<div className="flex gap-1.5 gap-x-1.5 gap-y-1.5 items-center">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    60-90 mins
                                </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-monitor-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                    Online
                                </div>
</div>
<a className="text-orange-600 font-normal text-base flex items-center gap-1 hover:text-orange-700 transition-colors" href="#">
                                View
                                <svg className="lucide lucide-chevron-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[340px] md:min-w-[380px] snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
<div className="relative h-48 overflow-hidden">
<img alt="Track Protection" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56694339-3631-4b34-afa6-07e20da10fa7_800w.png"/>
<div className="text-sm font-normal text-slate-900 bg-white/90 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-sm">Work Health &amp; Safety (WHS) Compliance</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="group-hover:text-orange-600 transition-colors text-xl font-normal text-slate-900 tracking-tight mb-2">Work Health and Safety for Managers</h3>
<p className="line-clamp-2 flex-grow leading-relaxed text-base text-slate-500 mb-6">Equip your organisation’s leaders with a clear understanding of their responsibilities under the Work Health and Safety Act 2011. This knowledge is essential for maintaining a safe working environment and cultivating a workplace culture grounded in safety, accountability, and compliance</p>
<div className="flex border-slate-100 border-t pt-5 items-center justify-between">
<div className="flex items-center gap-4 text-sm font-normal text-slate-500">
<div className="flex gap-x-1.5 gap-y-1.5 items-center">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                                    35-60 mins
                                </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-monitor-play w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(100, 116, 139)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    Online
                                </div>
</div>
<a className="text-orange-600 font-normal text-base flex items-center gap-1 hover:text-orange-700 transition-colors" href="#">
                                View
                                <svg className="lucide lucide-chevron-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[340px] md:min-w-[380px] snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
<div className="relative h-48 overflow-hidden">
<img alt="Signalling Principles" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a578bc0-14e2-4e35-b1ae-021c6e9a3e83_800w.jpg"/>
<div className="text-sm font-normal text-slate-900 bg-white/90 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-sm">Risk Management</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="group-hover:text-orange-600 transition-colors text-xl font-normal text-slate-900 tracking-tight mb-2">Risk Management Awareness</h3>
<p className="text-base text-slate-500 line-clamp-2 mb-6 flex-grow leading-relaxed">Comprehensive introduction to railway signalling systems, fail-safe principles, and interlocking mechanisms used across national networks.</p>
<div className="flex items-center justify-between pt-5 border-t border-slate-100">
<div className="flex items-center gap-4 text-sm font-normal text-slate-500">
<div className="flex gap-1.5 gap-x-1.5 gap-y-1.5 items-center">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    35-40 mins
                                </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-monitor-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line className="" x1="12" x2="12" y1="17" y2="21"></line></svg>
                                    Online
                                </div>
</div>
<a className="text-orange-600 font-normal text-base flex items-center gap-1 hover:text-orange-700 transition-colors" href="#">
                                View
                                <svg className="lucide lucide-chevron-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[340px] md:min-w-[380px] snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
<div className="relative h-48 overflow-hidden bg-slate-900 flex items-center justify-center">
<img alt="Fatigue Management" className="group-hover:scale-105 transition-transform duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c39192a7-f84a-4ab1-9e6a-b1226424c7d6_800w.jpg"/>
<div className="text-sm font-normal text-slate-900 bg-white/90 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-sm">Respectful, Inclusive &amp; Lawful Workplaces</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="group-hover:text-orange-600 transition-colors text-xl font-normal text-slate-900 tracking-tight mb-2">Discrimination Prevention</h3>
<p className="line-clamp-2 flex-grow leading-relaxed text-base text-slate-500 mb-6">Ensure your staff understand what constitutes discriminatory behaviour and what is considered acceptable and unacceptable in the workplace. Through practical examples, this course supports a safe, inclusive and respectful workplace environment for all employees.</p>
<div className="flex items-center justify-between pt-5 border-t border-slate-100">
<div className="flex items-center gap-4 text-sm font-normal text-slate-500">
<div className="flex gap-1.5 gap-x-1.5 gap-y-1.5 items-center">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    35-45 mins
                                </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-monitor-play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                                    Online
                                </div>
</div>
<a className="text-orange-600 font-normal text-base flex items-center gap-1 hover:text-orange-700 transition-colors" href="#">
                                View
                                <svg className="lucide lucide-chevron-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="md:pt-24 md:pb-12 text-white bg-[#9F2236] mt-auto pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 gap-x-12 gap-y-12">

<div className="md:col-span-12 lg:col-span-4 flex flex-col">
<div className="mb-8">
<img alt="MTA Training" className="w-56 max-w-full h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6dcc2b8-9ce3-4b29-8425-461ae2924de3_320w.png"/>
</div>
</div>

<div className="md:col-span-7 lg:col-span-5">
<h4 className="text-lg font-normal mb-6 text-white/90">Quick Links</h4>
<ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-base text-white/80">
<li className=""><a className="hover:text-white transition-colors" href="#">Non-Accredited Training</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Signalling</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">IRSE </a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Industry Partners</a></li>
<li className=""><a className="hover:text-white transition-colors" href="/#">About MTA Training </a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div className="md:col-span-5 lg:col-span-3">
<h4 className="text-lg font-normal mb-6 text-white/90">Contact Info</h4>
<div className="space-y-5 text-base text-white/80">
<a className="hover:text-white transition-colors flex items-start gap-3 group" href="mailto:training@metrotrainsau.com">
<svg className="w-4 h-4 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span>training@metrotrainsau.com</span>
</a>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 mt-0.5 opacity-70 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="space-y-1">
<p className="text-white font-normal">MTA Training</p>
<p className="">Level 16, 700 Collins St</p>
<p>Docklands, VIC</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
<p>Copyright 2025 Metro Trains Australia</p>
<p>ABN: 88 614 061 960</p>
</div>
</div>
</footer>

    </>
  );
}
