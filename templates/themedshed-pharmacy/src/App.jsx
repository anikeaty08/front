import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Intersection Observer for scroll animations
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        entry.target.style.opacity = '1';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-fade-in-up').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
            
            // Header scroll effect
            const navContainer = document.getElementById('nav-container');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navContainer.classList.add('bg-white/80', 'shadow-[0_8px_30px_rgb(0,0,0,0.06)]');
                    navContainer.classList.remove('bg-white/40', 'shadow-[0_8px_30px_rgb(0,0,0,0.02)]');
                } else {
                    navContainer.classList.remove('bg-white/80', 'shadow-[0_8px_30px_rgb(0,0,0,0.06)]');
                    navContainer.classList.add('bg-white/40', 'shadow-[0_8px_30px_rgb(0,0,0,0.02)]');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 h-full w-full bg-[#fcfcfc]">
<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[1000px] h-[1000px] rounded-full bg-[#B88A44]/[0.03] blur-[150px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] rounded-full bg-[#4A2B14]/[0.02] blur-[120px] pointer-events-none"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
</div>

<header className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 transition-all duration-500">
<div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-200/50 bg-white/40 px-5 py-3 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all" id="nav-container">

<a className="flex items-center gap-2 px-2 transition-opacity hover:opacity-70" href="#home">
<span className="text-lg font-medium tracking-tighter text-slate-900">THE MED SHED</span>
</a>

<nav className="hidden md:flex items-center gap-2 rounded-full bg-white/40 p-1.5 ring-1 ring-slate-900/5 backdrop-blur-md">
<a className="rounded-full px-5 py-1.5 text-sm font-normal text-slate-900 bg-white shadow-sm ring-1 ring-slate-900/5 transition-all" href="#home">Home</a>
<a className="rounded-full px-5 py-1.5 text-sm font-normal text-slate-500 hover:text-slate-900 hover:bg-white/60 transition-all" href="#services">Services</a>
<a className="rounded-full px-5 py-1.5 text-sm font-normal text-slate-500 hover:text-slate-900 hover:bg-white/60 transition-all" href="#packages">Packages</a>
</nav>

<div className="flex items-center gap-5 pl-2">
<a className="hidden lg:flex items-center gap-2 text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="tel:7078074466">
<iconify-icon className="text-base" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    7078074466
                </a>
<a className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-normal text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">
                    Book Now
                    <iconify-icon className="ml-2 text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden" id="home">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="max-w-2xl text-left animate-fade-in-up">

<div className="inline-flex items-center gap-3 rounded-full border border-slate-200/60 bg-white/50 px-4 py-2 text-xs font-medium text-slate-500 backdrop-blur-md shadow-[0_2px_10px_rgb(0,0,0,0.02)] mb-10 tracking-wide uppercase">
<span className="flex items-center gap-0.5 text-[#B88A44]">
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="h-3 w-px bg-slate-300"></span>
                        Trusted by 5,000+ in Dehradun
                    </div>
<h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tighter text-slate-900 leading-[1.05]">
                        Healthcare <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-[#B88A44]">at your door.</span>
</h1>
<p className="mt-8 text-xl sm:text-2xl text-slate-500 leading-relaxed font-light max-w-xl">
                        Experience clinical excellence without leaving home. Precision sample collection, rapid diagnostics, and unparalleled care.
                    </p>
<div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
<a className="group w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-normal text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">
                            Schedule Home Visit
                            <iconify-icon className="ml-2 text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex items-center gap-3 px-4 py-2 text-sm text-slate-500 font-normal">
<iconify-icon className="text-xl text-[#B88A44]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                            ISO Certified Lab
                        </div>
</div>
</div>

<div className="hidden sm:block relative h-[550px] w-full animate-fade-in-up delay-200">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-100/50 to-white/40 rounded-[2.5rem] border border-white/80 backdrop-blur-3xl shadow-[0_20px_60px_rgb(0,0,0,0.03)] overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent"></div>
</div>

<div className="absolute top-16 -left-6 lg:-left-10 rounded-2xl border border-white bg-white/70 p-5 shadow-[0_20px_40px_rgb(0,0,0,0.04)] backdrop-blur-2xl animate-float w-72">
<div className="flex items-center gap-4 mb-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-700">
<iconify-icon className="text-2xl" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-normal tracking-tight text-slate-900">Report Ready</p>
<p className="text-xs text-slate-500 font-normal mt-0.5">Delivered securely</p>
</div>
</div>
<div className="space-y-2.5">
<div className="h-1.5 w-full rounded-full bg-slate-100"><div className="h-1.5 w-full rounded-full bg-slate-800"></div></div>
<p className="text-[10px] text-slate-400 text-right uppercase tracking-wider">Just now</p>
</div>
</div>

<div className="absolute bottom-24 -right-4 lg:-right-8 rounded-2xl border border-white bg-white/70 p-5 shadow-[0_20px_40px_rgb(0,0,0,0.04)] backdrop-blur-2xl animate-float-delayed w-64">
<div className="flex items-center justify-between mb-5">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm text-slate-700">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="rounded-full border border-slate-200 bg-white/50 px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium text-slate-600">En Route</span>
</div>
<p className="text-sm font-normal tracking-tight text-slate-900">Phlebotomist Assigned</p>
<p className="text-xs text-slate-500 mt-1">Arriving in 15 mins</p>
<div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="h-8 w-8 rounded-full bg-slate-100 border border-white shadow-sm overflow-hidden flex items-center justify-center">
<iconify-icon className="text-base text-slate-400" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs"><span className="font-normal text-slate-900">Rahul K.</span> <span className="text-slate-400 font-light">is arriving</span></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-white">
<iconify-icon className="text-5xl text-slate-800" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-slate-200 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
</div>
</div>
</div>

<div className="mt-32 pt-12 border-t border-slate-200/50 animate-fade-in-up delay-300">
<p className="text-center text-xs font-normal text-slate-400 uppercase tracking-widest mb-10">Accredited &amp; Certified Medical Standards</p>
<div className="flex flex-wrap justify-center gap-12 sm:gap-24 opacity-50 transition-all duration-700 hover:opacity-100">
<div className="flex items-center gap-2 text-lg font-light tracking-tight text-slate-800"><iconify-icon className="text-2xl text-slate-400" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon> NABL Compliant</div>
<div className="flex items-center gap-2 text-lg font-light tracking-tight text-slate-800"><iconify-icon className="text-2xl text-slate-400" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon> ISO 9001:2015</div>
<div className="flex items-center gap-2 text-lg font-light tracking-tight text-slate-800"><iconify-icon className="text-2xl text-slate-400" icon="solar:shield-plus-linear" strokeWidth="1.5"></iconify-icon> ICMR Approved</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl mb-20 animate-fade-in-up">
<h2 className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4">Our Expertise</h2>
<h3 className="text-4xl sm:text-6xl font-normal tracking-tighter text-slate-900 leading-[1.1]">Everything you need, <br/><span className="text-slate-400">delivered with precision.</span></h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr animate-fade-in-up delay-100">

<div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-12 h-full flex flex-col justify-between relative z-10">
<div>
<div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-100 transition-transform group-hover:scale-105 duration-500">
<iconify-icon className="text-3xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-normal tracking-tighter text-slate-900 mb-4">Free Home Collection</h3>
<p className="text-lg text-slate-500 leading-relaxed font-light max-w-md">
                                Eliminate clinic wait times. Our certified professionals arrive at your doorstep, offering painless and hygienic collection across Dehradun, completely free of charge.
                            </p>
</div>
<div className="mt-12">
<a className="inline-flex items-center text-sm font-normal uppercase tracking-wider text-slate-900 hover:text-slate-500 transition-colors" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">
                                Book a slot <iconify-icon className="ml-2 text-lg transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] hover:-translate-y-1">
<div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-100 transition-transform group-hover:scale-105 duration-500">
<iconify-icon className="text-3xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tighter text-slate-900 mb-3">ECG Testing</h3>
<p className="text-base text-slate-500 font-light leading-relaxed">Accurate electrocardiogram testing with instant reporting for vital cardiac monitoring.</p>
</div>

<div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] hover:-translate-y-1">
<div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-100 transition-transform group-hover:scale-105 duration-500">
<iconify-icon className="text-3xl" icon="solar:pill-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tighter text-slate-900 mb-3">Pharmacy</h3>
<p className="text-base text-slate-500 font-light leading-relaxed">Authentic medicines delivered directly to you. Swift prescription refills at optimal rates.</p>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white p-10 lg:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] hover:-translate-y-1 flex flex-col sm:flex-row gap-10 items-center">
<div className="flex-1">
<div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-100 transition-transform group-hover:scale-105 duration-500">
<iconify-icon className="text-3xl" icon="solar:test-tube-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tighter text-slate-900 mb-3">Comprehensive Blood Tests</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-6">From routine diagnostics to specialized pathology profiles including Thyroid, Glucose, Liver &amp; Kidney analysis.</p>
</div>
<div className="w-full sm:w-auto bg-slate-50/50 rounded-2xl p-8 ring-1 ring-slate-100/50">
<ul className="space-y-4 text-sm text-slate-600 font-normal">
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-slate-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Thyroid Profile</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-slate-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Lipid Profile</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-slate-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Liver Function</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-slate-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Kidney Function</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0b] text-white relative overflow-hidden" id="packages">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-24 animate-fade-in-up">
<h2 className="text-5xl sm:text-6xl font-normal tracking-tighter mb-6">Transparent pricing.<br/><span className="text-slate-500">Complete health profiles.</span></h2>
<p className="text-xl text-slate-400 font-light">Elegantly structured packages designed to deliver a comprehensive understanding of your health.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in-up delay-100">

<div className="group flex flex-col justify-between rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10">
<div>
<h3 className="text-xl font-normal tracking-tighter text-white mb-2">Minor Profile</h3>
<p className="text-sm text-slate-500 font-light">Essential baseline check</p>
<div className="mt-8 flex items-baseline gap-3 mb-8">
<span className="text-5xl font-normal tracking-tighter text-white">₹850</span>
<span className="text-sm text-slate-600 line-through">₹1250</span>
</div>
<div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider font-normal text-slate-400">
                            44 Tests Included
                        </div>
<ul className="space-y-4 text-sm font-light text-slate-400">
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> CBC (15)</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> LFT (10) &amp; KFT (11)</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> TFT (3)</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Lipid (7)</li>
</ul>
</div>
<a className="mt-12 block w-full rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-center text-sm font-normal text-white transition-all duration-300 hover:bg-white/10" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">Book Now</a>
</div>

<div className="group flex flex-col justify-between rounded-[2rem] border border-slate-700 bg-white/5 p-8 shadow-[0_20px_40px_rgb(0,0,0,0.2)] relative transform transition-all duration-500 hover:-translate-y-2 z-10 backdrop-blur-2xl">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-[10px] uppercase tracking-widest font-normal text-slate-300 shadow-sm">
                        Most Popular
                    </div>
<div>
<h3 className="text-xl font-normal tracking-tighter text-white mb-2">Basic Profile</h3>
<p className="text-sm text-slate-400 font-light">Comprehensive overview</p>
<div className="mt-8 flex items-baseline gap-3 mb-8">
<span className="text-5xl font-normal tracking-tighter text-white">₹950</span>
<span className="text-sm text-slate-600 line-through">₹2440</span>
</div>
<div className="mb-8 inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-[10px] uppercase tracking-wider font-normal text-slate-300">
                            48 Tests Included
                        </div>
<ul className="space-y-4 text-sm font-light text-slate-300">
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-lg shrink-0 text-white" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> F (2), PP</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-lg shrink-0 text-white" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> CBC (15)</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-lg shrink-0 text-white" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> LFT (10) &amp; KFT (11)</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-lg shrink-0 text-white" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> TFT (3)</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-lg shrink-0 text-white" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Vit B12 (1) &amp; D3 (1)</li>
</ul>
</div>
<a className="mt-12 block w-full rounded-full bg-white px-6 py-3.5 text-center text-sm font-normal text-slate-900 transition-all duration-300 hover:bg-slate-200" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">Book Now</a>
</div>

<div className="group flex flex-col justify-between rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10">
<div>
<h3 className="text-xl font-normal tracking-tighter text-white mb-2">Diabetic Profile</h3>
<p className="text-sm text-slate-500 font-light">Specialized monitoring</p>
<div className="mt-8 flex items-baseline gap-3 mb-8">
<span className="text-5xl font-normal tracking-tighter text-white">₹950</span>
<span className="text-sm text-slate-600 line-through">₹1250</span>
</div>
<div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider font-normal text-slate-400">
                            37 Tests Included
                        </div>
<ul className="space-y-4 text-sm font-light text-slate-400">
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> F (2), PP</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> LFT (10) &amp; KFT (11)</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> TFT (3)</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> HBA1C &amp; Micro Alb</li>
</ul>
</div>
<a className="mt-12 block w-full rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-center text-sm font-normal text-white transition-all duration-300 hover:bg-white/10" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">Book Now</a>
</div>

<div className="group flex flex-col justify-between rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10">
<div>
<h3 className="text-xl font-normal tracking-tighter text-white mb-2">Major Profile</h3>
<p className="text-sm text-slate-500 font-light">Deep health analysis</p>
<div className="mt-8 flex items-baseline gap-3 mb-8">
<span className="text-5xl font-normal tracking-tighter text-white">₹1950</span>
<span className="text-sm text-slate-600 line-through">₹2440</span>
</div>
<div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider font-normal text-slate-400">
                            63 Tests Included
                        </div>
<ul className="space-y-4 text-sm font-light text-slate-400">
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> All Basic Tests</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Iron Profile</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Advanced Lipid</li>
<li className="flex items-start gap-3 transition-colors group-hover:text-slate-300"><iconify-icon className="mt-0.5 text-lg shrink-0 text-slate-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Complete Vitamins</li>
</ul>
</div>
<a className="mt-12 block w-full rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-center text-sm font-normal text-white transition-all duration-300 hover:bg-white/10" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">Book Now</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#fcfcfc] pt-28 pb-12 border-t border-slate-200/50" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

<div className="lg:col-span-2 space-y-8">
<span className="text-xl font-normal tracking-tighter text-slate-900 opacity-90 transition-opacity hover:opacity-100">THE MED SHED</span>
<p className="text-lg text-slate-500 max-w-sm font-light leading-relaxed">
                        Elevating medical care in Dehradun. Precision reporting, absolute convenience, seamlessly integrated into your routine.
                    </p>
<div className="flex items-center gap-4">
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200/60 text-slate-500 transition-all hover:border-slate-300 hover:text-slate-900" href="https://instagram.com/THE_MEDSHED" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200/60 text-slate-500 transition-all hover:border-slate-300 hover:text-slate-900" href="mailto:contact@themedshed.com">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div>
<h3 className="text-[10px] font-medium tracking-widest text-slate-400 uppercase mb-6">Contact</h3>
<ul className="space-y-4 text-sm font-light text-slate-600">
<li>
<a className="flex items-center gap-3 hover:text-slate-900 transition-colors group" href="tel:7078074466">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                                7078074466
                            </a>
</li>
<li>
<a className="flex items-center gap-3 hover:text-slate-900 transition-colors group" href="tel:9837263475">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                                9837263475
                            </a>
</li>
<li className="flex items-start gap-3 pt-2">
<iconify-icon className="text-lg text-slate-400 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="leading-relaxed">Laxman Chowk,<br/>Dehradun, UK</span>
</li>
</ul>
</div>

<div>
<h3 className="text-[10px] font-medium tracking-widest text-slate-400 uppercase mb-6">Early Booking</h3>
<div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/50">
<div className="flex items-center gap-2 mb-3 text-slate-800">
<iconify-icon className="text-lg" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Morning Slots</span>
</div>
<p className="text-xs text-slate-500 mb-5 font-light leading-relaxed">Require early fasting collection? Secure your priority slot.</p>
<a className="inline-flex w-full items-center justify-center rounded-xl bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-900 transition-colors hover:bg-slate-100 border border-slate-200/50" href="https://wa.me/917078074466" rel="noopener noreferrer" target="_blank">
                            Schedule Now
                        </a>
</div>
</div>
</div>
<div className="mt-28 flex flex-col md:flex-row items-center justify-between border-t border-slate-200/50 pt-8">
<p className="text-xs text-slate-400 font-light">© 2026 The Med Shed. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0 text-xs text-slate-400 font-light">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
