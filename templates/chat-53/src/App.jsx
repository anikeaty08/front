import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'float-slow': 'float 8s ease-in-out 1s infinite',
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Intersection Observer for scroll animations if needed beyond CSS
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, { threshold: 0.1 });

            // Apply to elements with animate-fade-in-up that we want to trigger on scroll
            // Note: Currently handled mostly by CSS delay and initial view, 
            // but this is the hook for a more robust scroll-reveal setup.
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b-white/50 border-t-0 border-x-0">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl md:text-2xl font-semibold tracking-tighter text-brand-600 flex items-center gap-2" href="#">
                    AURA
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#plans">Plans</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#benefits">Benefits</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#how-it-works">How it works</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all hover:shadow-md hover:shadow-brand-900/10" href="#plans">
                    Get a quote
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">

<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-100/60 blur-[120px] -z-10 mix-blend-multiply"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-50/80 blur-[120px] -z-10 mix-blend-multiply"></div>
<div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-50/60 blur-[100px] -z-10 mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative z-10 max-w-2xl opacity-0 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 shadow-sm mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-brand-600 uppercase tracking-wide">Next-gen coverage available</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.05] text-balance mb-6">
                    Health insurance,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">brilliantly simple.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed mb-8 max-w-lg">
                    Premium coverage designed for modern life. Zero paperwork, instant approvals, and care that actually cares.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-brand-500/25 hover:bg-brand-500 transition-all hover:scale-[1.02]" href="#plans">
                        Find your plan
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-6 py-3.5 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-all hover:border-slate-300" href="#how-it-works">
                        See how it works
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-brand-100 flex items-center justify-center text-xs text-brand-700">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-blue-100 flex items-center justify-center text-xs text-blue-700">SM</div>
<div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-200 flex items-center justify-center text-xs text-slate-700">AW</div>
</div>
<span>Trusted by 10,000+ members</span>
</div>
</div>

<div className="relative z-10 h-[500px] md:h-[600px] w-full hidden sm:block opacity-0 animate-fade-in-up delay-200">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-brand-200/50 border-dashed animate-[spin_60s_linear_infinite]"></div>

<div className="absolute top-[15%] left-[5%] w-64 glass-card rounded-2xl p-5 animate-float">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
<iconify-icon className="text-brand-600" icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Coverage Status</p>
<p className="text-xs text-emerald-500 font-medium">Active &amp; Protected</p>
</div>
</div>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
<div className="bg-brand-500 h-1.5 rounded-full w-full"></div>
</div>
<p className="text-xs text-slate-500 text-right">Premium Plan</p>
</div>

<div className="absolute top-[45%] right-[0%] w-72 glass-card rounded-2xl p-5 animate-float-delayed z-20">
<div className="flex items-start gap-4">
<img alt="Doctor" className="w-12 h-12 rounded-xl object-cover border border-white" src="https://i.pravatar.cc/100?img=32"/>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Dr. Sarah Jenkins</p>
<p className="text-xs text-slate-500 mb-2">Primary Care Physician</p>
<div className="flex items-center gap-2 bg-brand-50 rounded-lg px-3 py-2 border border-brand-100">
<iconify-icon className="text-brand-600" icon="solar:calendar-date-linear" width="16"></iconify-icon>
<p className="text-xs font-medium text-brand-700">Tomorrow, 10:00 AM</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[20%] left-[15%] w-56 glass-card rounded-2xl p-4 animate-float-slow">
<p className="text-xs font-medium text-slate-500 mb-3 uppercase tracking-wider">Quick Actions</p>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-blue-600" icon="solar:file-text-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Submit Claim</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-500" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
<iconify-icon className="text-emerald-600" icon="solar:pills-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Refill Rx</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-500" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/50 bg-white/50 backdrop-blur-sm py-10">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Recognized by top healthcare providers</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-800">MAYO</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-slate-800">Kaiser</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-slate-800">CEDARS</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-slate-800">Cleveland</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-800">STANFORD</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="benefits">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Reimagined for human beings</h2>
<p className="text-base md:text-lg text-slate-500 font-normal">We stripped away the complexity, hidden fees, and hold music to build an insurance experience that actually feels like care.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12">

<div className="relative group">
<div className="absolute inset-0 bg-brand-50 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
<div className="p-8 h-full rounded-3xl border border-transparent group-hover:border-white/60 transition-colors glass-card">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100">
<iconify-icon className="text-brand-500" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Lightning fast claims</h3>
<p className="text-sm text-slate-500 leading-relaxed">Take a photo, tap submit, get approved. Over 80% of our claims are processed and paid within 24 hours.</p>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-blue-50 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
<div className="p-8 h-full rounded-3xl border border-transparent group-hover:border-white/60 transition-colors glass-card">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100">
<iconify-icon className="text-blue-500" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">$0 Virtual Primary Care</h3>
<p className="text-sm text-slate-500 leading-relaxed">Text, call, or video chat with your dedicated care team 24/7. No copays for preventive virtual care.</p>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-slate-100 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
<div className="p-8 h-full rounded-3xl border border-transparent group-hover:border-white/60 transition-colors glass-card">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100">
<iconify-icon className="text-slate-600" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Radical transparency</h3>
<p className="text-sm text-slate-500 leading-relaxed">Know exactly what you'll pay before you book an appointment. No surprise bills, just clear upfront pricing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden" id="how-it-works">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-brand-50/50 to-transparent -z-10"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Getting covered is as easy as ordering dinner.</h2>
<p className="text-base text-slate-500 mb-10 max-w-md">We've automated the tedious parts of insurance so you can focus on staying healthy.</p>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-200 before:via-brand-100 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-500 text-white shadow shadow-brand-500/20 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">
<span className="text-sm font-medium">1</span>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-brand-100 ml-4 md:ml-0 md:group-odd:mr-8 md:group-even:ml-8">
<h4 className="text-base font-medium text-slate-900 mb-1">Answer 4 questions</h4>
<p className="text-sm text-slate-500">Tell us your age, location, and basic needs to see personalized plans.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-100 text-brand-600 shadow-sm md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0 transition-colors group-hover:bg-brand-200">
<span className="text-sm font-medium">2</span>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-brand-100 ml-4 md:ml-0 md:group-odd:mr-8 md:group-even:ml-8">
<h4 className="text-base font-medium text-slate-900 mb-1">Choose your coverage</h4>
<p className="text-sm text-slate-500">Compare clear, jargon-free plans side-by-side.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-100 text-brand-600 shadow-sm md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0 transition-colors group-hover:bg-brand-200">
<span className="text-sm font-medium">3</span>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-brand-100 ml-4 md:ml-0 md:group-odd:mr-8 md:group-even:ml-8">
<h4 className="text-base font-medium text-slate-900 mb-1">Instant activation</h4>
<p className="text-sm text-slate-500">Get your digital ID card immediately. No waiting periods.</p>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex justify-center relative">
<div className="w-full max-w-md aspect-square relative">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-white rounded-full blur-2xl opacity-60"></div>
<div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] border border-white shadow-xl overflow-hidden flex flex-col">

<div className="h-16 bg-white border-b border-slate-100 flex items-center px-6 gap-4">
<div className="w-8 h-8 rounded-full bg-brand-100"></div>
<div className="flex-1 space-y-2">
<div className="h-2 bg-slate-100 rounded w-1/3"></div>
<div className="h-2 bg-slate-50 rounded w-1/4"></div>
</div>
</div>

<div className="flex-1 p-6 space-y-6 bg-slate-50/50">
<div className="w-full h-32 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-brand-50 rounded-bl-full opacity-50"></div>
<div className="w-1/2 h-4 bg-slate-100 rounded mb-4"></div>
<div className="w-3/4 h-8 bg-brand-50 rounded mb-2"></div>
</div>
<div className="flex gap-4">
<div className="flex-1 h-24 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
<div className="w-8 h-8 rounded-full bg-blue-50 mb-3"></div>
<div className="w-2/3 h-2 bg-slate-100 rounded"></div>
</div>
<div className="flex-1 h-24 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
<div className="w-8 h-8 rounded-full bg-emerald-50 mb-3"></div>
<div className="w-2/3 h-2 bg-slate-100 rounded"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-brand-600 text-white py-3 rounded-xl shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 text-sm font-medium backdrop-blur-md bg-brand-600/90">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Coverage Active
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="plans">
<div className="absolute top-0 w-full h-[500px] bg-slate-900 rounded-b-[3rem] md:rounded-b-[5rem] -z-20"></div>
<div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-brand-900/50 to-transparent mix-blend-overlay rounded-b-[3rem] md:rounded-b-[5rem] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Plans that fit your life</h2>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm font-medium text-white/80">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
</label>
<span className="text-sm font-medium text-white flex items-center gap-2">
                        Annually <span className="px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-200 text-xs border border-brand-400/30">Save 15%</span>
</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full opacity-0 animate-fade-in-up delay-100">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900">Essential</h3>
<p className="text-sm text-slate-500 mt-1">Perfect for healthy individuals.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$149</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            $0 preventive care
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Unlimited 24/7 virtual care
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            $3,000 deductible
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="shrink-0" icon="solar:minus-circle-linear" width="20"></iconify-icon>
                            Specialist visits (after deductible)
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">Select Essential</button>
</div>

<div className="bg-gradient-to-b from-white to-brand-50 rounded-3xl p-8 shadow-2xl shadow-brand-900/10 border-2 border-brand-200 relative flex flex-col h-full transform md:-translate-y-4 z-10 opacity-0 animate-fade-in-up delay-200">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900">Premium</h3>
<p className="text-sm text-slate-500 mt-1">Comprehensive coverage for peace of mind.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$289</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Everything in Essential
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            $20 copay for specialists
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            $500 deductible
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Mental health coverage included
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Free vision &amp; dental exams
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-full bg-brand-600 text-sm font-medium text-white hover:bg-brand-500 shadow-md shadow-brand-500/20 transition-all hover:scale-[1.02]">Select Premium</button>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full opacity-0 animate-fade-in-up delay-300">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900">Family</h3>
<p className="text-sm text-slate-500 mt-1">Built for you and your dependents.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$599</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Covers up to 5 members
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Pediatric care included
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            $1,500 family deductible
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-brand-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Maternity &amp; newborn care
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">Select Family</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Members who love us</h2>
<div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 font-medium leading-relaxed">"I submitted a claim from my phone while leaving the doctor's office. It was approved before I got home. Unheard of in this industry."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-medium text-sm">MR</div>
<div>
<p className="text-sm font-medium text-slate-900">Michael R.</p>
<p className="text-xs text-slate-500">Premium Member</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 font-medium leading-relaxed">"The virtual primary care is a game changer. I texted a doctor at 9 PM on a Sunday and got a prescription sent to my pharmacy instantly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-medium text-sm">SL</div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah L.</p>
<p className="text-xs text-slate-500">Essential Member</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 font-medium leading-relaxed">"For the first time, I actually understand my insurance plan. The app is beautiful, transparent, and actually helpful."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-medium text-sm">DT</div>
<div>
<p className="text-sm font-medium text-slate-900">David T.</p>
<p className="text-xs text-slate-500">Family Member</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto px-6 md:px-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Common questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-2xl border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
                        Can I keep my current doctor?
                        <span className="relative ml-1.5 h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes. We have a massive nationwide network of over 1.2 million healthcare professionals. You can easily search our directory in the app before joining to ensure your doctor is in-network.
                    </div>
</details>
<details className="group bg-slate-50 rounded-2xl border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
                        How does virtual care work?
                        <span className="relative ml-1.5 h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        All plans include 24/7 access to our virtual care team. You can text, call, or video chat with a doctor in minutes directly through our app for $0. They can diagnose, treat, and prescribe medications for common issues.
                    </div>
</details>
<details className="group bg-slate-50 rounded-2xl border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
                        Are there any hidden fees?
                        <span className="relative ml-1.5 h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        No. We believe in radical transparency. You pay your monthly premium, and your copays or coinsurance as clearly stated in your plan. You can always see exactly what a procedure or visit will cost in the app before you book.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 md:px-12 bg-white">
<div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-50 to-blue-50 rounded-[2.5rem] p-10 md:p-16 text-center border border-brand-100 relative overflow-hidden shadow-sm">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/60 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-200/30 blur-3xl rounded-full"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Ready for better health insurance?</h2>
<p className="text-base md:text-lg text-slate-600 mb-10 max-w-xl mx-auto">Join thousands of members who have switched to a simpler, more transparent healthcare experience. Get a personalized quote in 2 minutes.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-slate-800 transition-all hover:scale-[1.02]" href="#plans">
                        Get your free quote
                    </a>
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                        Talk to an advisor
                    </a>
</div>
<p className="mt-6 text-xs text-slate-400">No commitment required. Cancel anytime.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-brand-600 mb-4 block" href="#">AURA</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">Modern health insurance designed for humans. Simple, transparent, and always there when you need it.</p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Products</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Individual Plans</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Family Plans</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Small Business</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Dental &amp; Vision</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Find a Doctor</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Member Login</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2024 Aura Insurance Inc. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-600 transition-colors" href="#">Legal</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
