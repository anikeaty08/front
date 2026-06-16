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
orange: {
400: '#fb923c',
500: '#f97316',
600: '#ea580c', // Main brand orange
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'marquee': 'marquee 40s linear infinite',
'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
'card-cycle-1': 'cycleCards1 12s infinite',
'card-cycle-2': 'cycleCards2 12s infinite',
'card-cycle-3': 'cycleCards3 12s infinite',
'border-beam': 'borderBeam 8s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
pulseGlow: {
'0%, 100%': { opacity: '0.4' },
'50%': { opacity: '0.8' },
},
cycleCards1: {
'0%, 28%': { opacity: '1', transform: 'scale(1) translateY(0)', zIndex: '20' },
'33%, 100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)', zIndex: '0' },
},
cycleCards2: {
'0%, 28%': { opacity: '0', transform: 'scale(0.9) translateY(20px)', zIndex: '0' },
'33%, 61%': { opacity: '1', transform: 'scale(1) translateY(0)', zIndex: '20' },
'66%, 100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)', zIndex: '0' },
},
cycleCards3: {
'0%, 61%': { opacity: '0', transform: 'scale(0.9) translateY(20px)', zIndex: '0' },
'66%, 95%': { opacity: '1', transform: 'scale(1) translateY(0)', zIndex: '20' },
'100%': { opacity: '0', transform: 'scale(0.9) translateY(20px)', zIndex: '0' },
},
borderBeam: {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '200% 50%' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 glass-panel-dark border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-end justify-center">

<div className="w-1.5 h-3 bg-orange-600/60 mx-px"></div>
<div className="w-1.5 h-5 bg-orange-600/80 mx-px"></div>
<div className="w-1.5 h-7 bg-white/20 mx-px relative">

<div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-white rounded-full opacity-0"></div> 
<svg className="absolute bottom-0 left-0 w-8 h-8 overflow-visible" viewbox="0 0 24 24">
<path d="M0 24 Q 8 20 20 4" fill="none" stroke="white" strokeWidth="2"></path>
<path d="M18 2 L22 6 L24 2 Z" fill="white"></path> 
</svg>
</div>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-wide text-white">LAUNCHLINE</span>
<span className="text-[10px] font-semibold tracking-wider text-orange-500">DIGITAL</span>
</div>
</div>
<a className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white text-zinc-950 px-4 py-2 rounded hover:bg-zinc-200 transition-colors" href="#booking">
                Book Demo
                <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<section className="relative pt-32 pb-32 md:pt-48 md:pb-40 px-6 overflow-hidden">

<div className="absolute inset-0 grid-pattern mask-image-gradient"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-4xl">

<div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/10 text-zinc-400 text-xs font-medium mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    System Operational v2.0
                </div>

<h1 className="animate-fade-in delay-100 text-5xl md:text-8xl font-medium tracking-tighter text-white leading-[1.05] mb-8">
                    Missed leads = <br/>
<span className="text-zinc-600">lost revenue.</span>
</h1>

<p className="animate-fade-in delay-200 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-12 font-light">
                    LaunchLine installs the infrastructure to fix follow-up, not ads. We instantly contact, qualify, and book leads directly into your calendar.
                </p>

<div className="animate-fade-in delay-300 flex flex-col sm:flex-row gap-4 items-start">
<a className="group relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50" href="#system">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3f3f46_0%,#ea580c_50%,#3f3f46_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-zinc-900">
                            See How the System Works
                            <i className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="chevron-down"></i>
</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</section>

<section className="py-24 bg-white text-zinc-900 border-b border-zinc-100 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4">
<h2 className="text-3xl font-semibold tracking-tight mb-4">The Mathematics of Failure</h2>
<p className="text-zinc-500 font-normal leading-relaxed">
                        Most agencies focus on Cost Per Lead (CPL). We focus on Speed to Lead. The market is saturated; response time is the only remaining edge.
                    </p>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-orange-600 mb-4 group-hover:scale-105 transition-transform duration-500 ease-out origin-left">5 min</div>
<div className="h-px w-full bg-zinc-200 mb-4 group-hover:bg-orange-200 transition-colors"></div>
<h3 className="font-medium text-sm uppercase tracking-wide text-zinc-900 mb-2">Decay Rate</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Wait 5 minutes to call a lead, and your connection probability drops by 900%.</p>
</div>

<div className="group">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-300 mb-4 group-hover:text-zinc-900 transition-colors duration-500">47%</div>
<div className="h-px w-full bg-zinc-200 mb-4 group-hover:bg-zinc-400 transition-colors"></div>
<h3 className="font-medium text-sm uppercase tracking-wide text-zinc-900 mb-2">No Follow-up</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Nearly half of all inbound leads are never contacted by the business owner.</p>
</div>

<div className="group">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-300 mb-4 group-hover:text-zinc-900 transition-colors duration-500">8x</div>
<div className="h-px w-full bg-zinc-200 mb-4 group-hover:bg-zinc-400 transition-colors"></div>
<h3 className="font-medium text-sm uppercase tracking-wide text-zinc-900 mb-2">Touchpoints</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Average attempts needed to reach a prospect. Humans give up after 2.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative overflow-hidden" id="system">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-[shimmer_3s_infinite] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-20">

<div className="md:w-1/3 sticky top-32 h-fit">
<div className="inline-flex items-center gap-2 mb-6">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">The Protocol</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Autonomous<br/>Conversion.</h2>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        We replace human error with code. The moment a lead enters the system, an immutable chain of events executes with zero latency.
                    </p>
<div className="space-y-4 border-t border-white/5 pt-8">
<div className="flex items-center gap-3 text-sm text-zinc-400">
<i className="w-4 h-4 text-orange-500" data-lucide="zap"></i>
<span>0ms Latency</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<i className="w-4 h-4 text-orange-500" data-lucide="server"></i>
<span>24/7 Availability</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle"></i>
<span>Calendar Sync</span>
</div>
</div>
</div>

<div className="md:w-2/3 space-y-24 pt-8 border-l border-white/5 pl-8 md:pl-20 relative">

<div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent opacity-0 md:opacity-100 mask-image-gradient"></div>

<div className="group relative">
<span className="absolute -left-[45px] md:-left-[93px] top-0 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></span>
<div className="text-orange-500 text-xs font-mono mb-2 opacity-60">NODE 01</div>
<h3 className="text-xl font-medium text-white mb-3">Ingestion</h3>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed">Lead submits form via Facebook, Instagram, or Website. Data is parsed and validated instantly.</p>
</div>

<div className="group relative">
<span className="absolute -left-[45px] md:-left-[93px] top-0 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></span>
<div className="text-orange-500 text-xs font-mono mb-2 opacity-60">NODE 02</div>
<h3 className="text-xl font-medium text-white mb-3">Immediate SMS</h3>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed">AI Agent sends a personalized text within 45 seconds using natural language processing to match lead context.</p>
</div>

<div className="group relative">
<span className="absolute -left-[45px] md:-left-[93px] top-0 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></span>
<div className="text-orange-500 text-xs font-mono mb-2 opacity-60">NODE 03</div>
<h3 className="text-xl font-medium text-white mb-3">Qualification Loop</h3>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed">AI engages in conversation to verify intent, budget, and urgency before involving a human.</p>
</div>

<div className="group relative">
<span className="absolute -left-[45px] md:-left-[93px] top-0 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors duration-300"></span>
<div className="text-orange-500 text-xs font-mono mb-2 opacity-60">NODE 04</div>
<h3 className="text-xl font-medium text-white mb-3">Calendar Injection</h3>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed">Appointment is negotiated and booked directly into your CRM. Notification sent to sales team.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-y border-white/5 overflow-hidden">
<div className="text-center mb-20 relative z-10">
<h2 className="text-2xl font-semibold tracking-tight text-white">Visibility at Every Step</h2>
</div>
<div className="relative w-full max-w-md mx-auto h-[450px] perspective-1000">

<div className="absolute inset-0 bg-orange-600/10 blur-3xl rounded-full"></div>

<div className="animate-card-cycle-1 absolute inset-0 bg-zinc-900 rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center shadow-2xl">
<div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-zinc-400">
<i className="w-8 h-8" data-lucide="user-plus"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">New Lead Detected</h3>
<div className="w-full bg-zinc-950 rounded p-4 text-left border border-white/5 mt-4">
<div className="h-2 w-1/3 bg-zinc-800 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
</div>
<div className="mt-8 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
<span className="text-xs font-mono text-zinc-500">STATUS: PENDING</span>
</div>
</div>

<div className="animate-card-cycle-2 absolute inset-0 bg-zinc-900 rounded-2xl border border-white/10 p-8 flex flex-col shadow-2xl">
<div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<span className="text-sm font-medium text-white">AI Assistant</span>
</div>
<div className="flex flex-col gap-3 font-light">
<div className="self-end bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg rounded-tr-sm text-xs max-w-[85%] border border-white/5">
                        Hey Mike, thanks for the inquiry. Ready to schedule your quote?
                    </div>
<div className="self-start bg-zinc-950 text-zinc-400 px-3 py-2 rounded-lg rounded-tl-sm text-xs max-w-[85%] border border-white/5">
                        Yes, do you have openings this Thursday?
                    </div>
<div className="self-end bg-orange-600 text-white px-3 py-2 rounded-lg rounded-tr-sm text-xs max-w-[85%]">
                        We have a 2 PM slot available. Shall I book that?
                    </div>
</div>
<span className="mt-auto mx-auto text-xs font-mono text-orange-500 pt-4">STATUS: ACTIVE</span>
</div>

<div className="animate-card-cycle-3 absolute inset-0 bg-zinc-900 rounded-2xl border border-orange-500/30 p-8 flex flex-col items-center justify-center shadow-2xl shadow-orange-900/20">
<div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Appointment Confirmed</h3>
<p className="text-zinc-500 text-sm mb-8">Thursday, Oct 24 • 2:00 PM</p>
<div className="flex gap-2 text-[10px] font-medium text-zinc-400 uppercase tracking-wide">
<span className="px-2 py-1 bg-zinc-800 rounded border border-white/5">Synced to G-Cal</span>
<span className="px-2 py-1 bg-zinc-800 rounded border border-white/5">CRM Updated</span>
</div>
<span className="mt-8 text-xs font-mono text-green-500">STATUS: BOOKED</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 text-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Conversations, Not Broadcasts</h2>
<p className="text-zinc-500 text-sm">Real interactions generated by our system. Indistinguishable from human staff.</p>
</div>
<div className="max-w-md mx-auto bg-white border border-zinc-200 rounded-[32px] p-8 shadow-xl relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
<div className="flex flex-col gap-5">

<div className="flex flex-col gap-1 items-start group">
<div className="bg-zinc-100 px-5 py-3 rounded-2xl rounded-tl-sm text-sm text-zinc-700 shadow-sm max-w-[90%] hover:bg-zinc-200 transition-colors">
                            Is this for residential junk removal?
                        </div>
<span className="text-[10px] text-zinc-400 pl-2 opacity-0 group-hover:opacity-100 transition-opacity">Lead • 10:42 AM</span>
</div>

<div className="flex flex-col gap-1 items-end group">
<div className="bg-orange-600 px-5 py-3 rounded-2xl rounded-tr-sm text-sm text-white shadow-md shadow-orange-200 max-w-[90%]">
                            Yes it is! We cover all of the Metro area. Did you have a specific pile size in mind, or do you need an estimate?
                        </div>
<span className="text-[10px] text-zinc-400 pr-2 opacity-0 group-hover:opacity-100 transition-opacity">System • 10:42 AM</span>
</div>

<div className="flex flex-col gap-1 items-start group">
<div className="bg-zinc-100 px-5 py-3 rounded-2xl rounded-tl-sm text-sm text-zinc-700 shadow-sm max-w-[90%] hover:bg-zinc-200 transition-colors">
                            Need an estimate. Just a garage cleanout.
                        </div>
<span className="text-[10px] text-zinc-400 pl-2 opacity-0 group-hover:opacity-100 transition-opacity">Lead • 10:43 AM</span>
</div>

<div className="flex flex-col gap-1 items-end group">
<div className="bg-orange-600 px-5 py-3 rounded-2xl rounded-tr-sm text-sm text-white shadow-md shadow-orange-200 max-w-[90%]">
                            Perfect. We can stop by tomorrow at 9AM or 1PM to give a firm price. Which works better for you?
                        </div>
<span className="text-[10px] text-zinc-400 pr-2 opacity-0 group-hover:opacity-100 transition-opacity">System • 10:43 AM</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-0">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="bg-zinc-900 py-24 px-8 md:px-20 border-r border-white/5">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-12">Legacy Model</h3>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-zinc-500 group">
<i className="w-5 h-5 group-hover:text-red-500 transition-colors" data-lucide="x"></i>
<span className="line-through decoration-zinc-700 text-sm">Selling shared leads</span>
</li>
<li className="flex items-center gap-4 text-zinc-500 group">
<i className="w-5 h-5 group-hover:text-red-500 transition-colors" data-lucide="x"></i>
<span className="line-through decoration-zinc-700 text-sm">Spreadsheet delivery</span>
</li>
<li className="flex items-center gap-4 text-zinc-500 group">
<i className="w-5 h-5 group-hover:text-red-500 transition-colors" data-lucide="x"></i>
<span className="line-through decoration-zinc-700 text-sm">Manual cold calling</span>
</li>
<li className="flex items-center gap-4 text-zinc-500 group">
<i className="w-5 h-5 group-hover:text-red-500 transition-colors" data-lucide="x"></i>
<span className="line-through decoration-zinc-700 text-sm">Pay per lead</span>
</li>
</ul>
</div>

<div className="bg-zinc-950 py-24 px-8 md:px-20 relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] pointer-events-none"></div>
<h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-12">LaunchLine Model</h3>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-white">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
<span className="text-sm font-medium">Exclusive Appointment Booking</span>
</li>
<li className="flex items-center gap-4 text-white">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
<span className="text-sm font-medium">Direct Calendar Injection</span>
</li>
<li className="flex items-center gap-4 text-white">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
<span className="text-sm font-medium">AI Automated Nurture</span>
</li>
<li className="flex items-center gap-4 text-white">
<i className="w-5 h-5 text-orange-500" data-lucide="check"></i>
<span className="text-sm font-medium">Infrastructure Retainer</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto border-b border-white/5">
<div className="text-center mb-20">
<h2 className="text-2xl font-semibold tracking-tight text-white">The Architecture</h2>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

<div className="absolute top-1/2 left-10 right-10 h-[1px] bg-zinc-800 -z-10 hidden md:block"></div>

<div className="flex flex-col items-center gap-4 bg-zinc-950 p-4">
<div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-lg hover:border-zinc-700 transition-colors">
<i className="w-8 h-8" data-lucide="target"></i>
</div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Paid Traffic</span>
</div>
<i className="w-6 h-6 text-zinc-700 hidden md:block" data-lucide="arrow-right"></i>

<div className="flex flex-col items-center gap-4 bg-zinc-950 p-4">
<div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-lg hover:border-zinc-700 transition-colors">
<i className="w-8 h-8" data-lucide="layout-template"></i>
</div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Capture</span>
</div>
<i className="w-6 h-6 text-zinc-700 hidden md:block" data-lucide="arrow-right"></i>

<div className="flex flex-col items-center gap-4 bg-zinc-950 p-4">
<div className="relative w-20 h-20 rounded-2xl bg-zinc-900 border border-orange-500/50 flex items-center justify-center text-white shadow-[0_0_30px_-5px_rgba(234,88,12,0.3)]">
<i className="w-8 h-8" data-lucide="cpu"></i>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
</span>
</div>
<span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">AI Logic</span>
</div>
<i className="w-6 h-6 text-zinc-700 hidden md:block" data-lucide="arrow-right"></i>

<div className="flex flex-col items-center gap-4 bg-zinc-950 p-4">
<div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-lg hover:border-zinc-700 transition-colors">
<i className="w-8 h-8" data-lucide="calendar"></i>
</div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Booked Call</span>
</div>
</div>
</section>

<section className="py-16 bg-zinc-950 overflow-hidden relative border-b border-white/5">

<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
<div className="flex animate-marquee whitespace-nowrap gap-24 items-center opacity-50">
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Junk Removal</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Auto Detailing</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Martial Arts</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">HVAC</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Landscaping</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Plumbing</span>

<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Junk Removal</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Auto Detailing</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Martial Arts</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">HVAC</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Landscaping</span>
<span className="text-4xl font-semibold text-zinc-800 uppercase tracking-tight stroke-text">Plumbing</span>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Logic Over Hype</h2>
<div className="space-y-8">
<div className="flex gap-6 group">
<div className="w-1 h-14 bg-orange-600 transition-all duration-300 group-hover:h-20 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Leads don't book themselves.</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed">Intent decays in minutes. Without instant action, ad spend is incinerated.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-1 h-14 bg-zinc-800 transition-all duration-300 group-hover:bg-zinc-600"></div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Humans miss follow-ups.</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed">You are busy working. You cannot text back in 30 seconds, 24/7. Software can.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-1 h-14 bg-zinc-800 transition-all duration-300 group-hover:bg-zinc-600"></div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Systems don't sleep.</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed">Our infrastructure operates continuously, maximizing every single dollar spent.</p>
</div>
</div>
</div>
</div>

<div className="glass-panel-dark p-10 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between mb-10">
<span className="text-xs font-mono text-zinc-500 uppercase">Return on Investment</span>
<i className="w-5 h-5 text-zinc-600" data-lucide="calculator"></i>
</div>
<div className="space-y-6">
<div className="flex justify-between items-center py-4 border-b border-white/5">
<span className="text-zinc-400 text-sm">Raw Leads</span>
<span className="text-zinc-600 text-xs px-2 py-1 bg-zinc-900 rounded">Low Value</span>
</div>
<div className="flex justify-between items-center py-4 border-b border-white/5">
<span className="text-zinc-400 text-sm">SMS Conversations</span>
<span className="text-zinc-500 text-xs px-2 py-1 bg-zinc-900 rounded border border-white/5">Medium Value</span>
</div>
<div className="flex justify-between items-center pt-4">
<span className="text-white font-medium text-sm">Booked Appointments</span>
<span className="text-orange-500 text-xs px-2 py-1 bg-orange-950/30 border border-orange-500/20 rounded font-medium">High Value</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 text-center px-6 relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.08),transparent_70%)] pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">See the system live.</h2>
<p className="text-zinc-500 mb-12 max-w-lg mx-auto font-light leading-relaxed">No sales deck. Just a technical walkthrough of the backend to see how we automate your acquisition infrastructure.</p>
<div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center mx-auto animate-bounce text-zinc-600 bg-zinc-900">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>
</section>

<section className="bg-white py-24 px-6" id="booking">
<div className="max-w-5xl mx-auto">
<div className="border border-zinc-100 shadow-2xl shadow-zinc-200 rounded-2xl overflow-hidden bg-white">

<div className="calendly-inline-widget" data-url="https://calendly.com/launchlinebranding/30min?primary_color=ea580c" style={{minWidth: '320px', height: '750px'}}></div>


</div>
<footer className="text-center mt-16 pb-8 border-t border-zinc-100 pt-8 flex flex-col items-center gap-4">

<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<div className="w-1 h-3 bg-zinc-800 mx-px"></div>
<div className="w-1 h-4 bg-zinc-800 mx-px"></div>
<span className="text-xs font-semibold tracking-wide text-zinc-900">LAUNCHLINE</span>
</div>
<p className="text-[10px] text-zinc-400">© 2024 LaunchLine Digital. All Systems Operational.</p>
</footer>
</div>
</section>



    </>
  );
}
