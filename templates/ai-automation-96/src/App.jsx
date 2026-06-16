import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
accent: '#2563EB', // Electric Blue
dark: '#0D0D0D',   // Deep Dark Background
surface: '#171717',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'beam': 'beam-slide 8s cubic-bezier(0.45, 0, 0.55, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
'beam-slide': {
'0%': { transform: 'translateX(-100%)', opacity: '0' },
'10%': { opacity: '0.8' },
'90%': { opacity: '0.8' },
'100%': { transform: 'translateX(100%)', opacity: '0' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[20%] right-0 w-[800px] h-[800px] bg-accent/[0.08] blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"></div>
<div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-purple-900/[0.05] blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-dark/80 border-b border-white/[0.05] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all duration-300">
<iconify-icon icon="solar:infinity-bold" width="18"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tight text-lg group-hover:text-accent transition-colors">Signalloom</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Log in</a>
<button className="group relative overflow-hidden rounded-md text-xs font-medium text-white bg-accent hover:bg-blue-600 transition-all duration-300 py-2 px-4 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
<span className="relative z-10">Free 15-min Audit</span>
</button>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative overflow-hidden border-b border-white/[0.05] min-h-[90vh] flex items-center pt-20 pb-20 lg:pt-0 lg:pb-0">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 w-full max-w-7xl z-10 mx-auto px-6 relative items-center">

<div className="flex flex-col max-w-2xl justify-center">
<div className="flex items-center gap-2 mb-8 reveal-on-scroll">
<div className="pl-1 pr-3 py-1 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2 hover:bg-white/[0.06] transition-colors cursor-default group">
<span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-accent text-[9px] font-bold text-white uppercase tracking-wide group-hover:shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-all">New</span>
<span className="text-white/60 text-[11px] font-medium tracking-wide group-hover:text-white transition-colors">London's #1 Automation Agency</span>
</div>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] reveal-on-scroll mb-6 text-white">
                        Never miss a <br/>
<span className="text-gradient-mask">paying client again.</span>
</h1>
<p className="leading-relaxed reveal-on-scroll delay-100 text-lg font-light text-white/50 max-w-lg mb-10">
                        Stop losing business to slow replies. We automate your bookings, billing, and follow-ups on WhatsApp and Instagram while you focus on your clients.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll delay-200">
<button className="px-8 py-3.5 bg-white text-dark font-semibold rounded hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group text-sm">
                            Get Your Free Audit
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-transparent text-white font-medium rounded border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-sm">
<iconify-icon className="text-white/70" icon="solar:play-circle-linear" width="18"></iconify-icon>
                            See Demo
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-white/30 reveal-on-scroll delay-300">
<div className="flex -space-x-3">
<img className="w-8 h-8 rounded-full border-2 border-dark grayscale opacity-70" src="https://i.pravatar.cc/100?img=5"/>
<img className="w-8 h-8 rounded-full border-2 border-dark grayscale opacity-70" src="https://i.pravatar.cc/100?img=9"/>
<img className="w-8 h-8 rounded-full border-2 border-dark grayscale opacity-70" src="https://i.pravatar.cc/100?img=32"/>
</div>
<p className="font-medium">Trusted by 50+ London businesses</p>
</div>
</div>

<div className="relative perspective-container h-[500px] lg:h-[650px] flex items-center justify-center reveal-on-scroll delay-100 mt-12 lg:mt-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/[0.1] blur-[120px] rounded-full pointer-events-none"></div>

<div className="w-full max-w-[420px] bg-[#121212] border border-white/10 rounded-2xl hero-card-3d relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

<div className="h-12 border-b border-white/5 flex items-center justify-between px-5 bg-[#171717]">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
</div>
<div className="px-3 py-1 bg-black/40 rounded text-[10px] text-white/40 font-mono">Signalloom Dashboard</div>
</div>
<iconify-icon className="text-white/30" icon="solar:bell-linear"></iconify-icon>
</div>

<div className="p-6 relative h-full min-h-[400px] flex flex-col gap-4">

<div className="flex gap-3">
<div className="flex-1 bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-white/40" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-[10px] text-white/40 uppercase tracking-wider">New Leads</span>
</div>
<div className="text-2xl font-medium text-white">24</div>
<div className="text-[10px] text-emerald-400 mt-1">+8 today</div>
</div>
<div className="flex-1 bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-white/40" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Revenue</span>
</div>
<div className="text-2xl font-medium text-white">£3.2k</div>
<div className="text-[10px] text-emerald-400 mt-1">Auto-collected</div>
</div>
</div>

<div className="flex-1 bg-black/20 border border-white/5 rounded-xl p-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121212]/80 z-10"></div>
<div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs text-white/50">Live Auto-Pilot</span>
</div>
<div className="space-y-3 text-xs">

<div className="flex justify-end">
<div className="bg-accent/20 border border-accent/20 text-white/90 p-2.5 rounded-l-lg rounded-tr-lg max-w-[80%]">
                                            Hi, do you have any slots for a Hydrafacial this Friday?
                                        </div>
</div>

<div className="flex justify-start">
<div className="bg-white/5 border border-white/5 text-white/70 p-2.5 rounded-r-lg rounded-tl-lg max-w-[80%] flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:magic-stick-3-linear"></iconify-icon>
                                            Hi Sarah! Yes, we have 2:00 PM and 4:30 PM available. Would you like to book one?
                                        </div>
</div>

<div className="flex justify-end">
<div className="bg-accent/20 border border-accent/20 text-white/90 p-2.5 rounded-l-lg rounded-tr-lg max-w-[80%]">
                                            4:30 PM please.
                                        </div>
</div>

<div className="flex justify-start">
<div className="bg-white/5 border border-white/5 text-white/70 p-2.5 rounded-r-lg rounded-tl-lg max-w-[80%] flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
                                            Done! I've sent a payment link to secure your slot. 
                                        </div>
</div>
</div>
</div>

<div className="absolute -right-6 bottom-12 bg-[#171717] border border-white/10 p-3 rounded-lg shadow-2xl backdrop-blur-md animate-float-delayed w-48 z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</div>
<div>
<div className="text-[11px] text-white font-medium">Appointment Booked</div>
<div className="text-[10px] text-white/40">Sarah J. • Hydrafacial</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark py-8 overflow-hidden relative border-b border-white/[0.05]">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>
<p className="text-center text-[10px] font-mono uppercase tracking-widest text-white/20 mb-6">Empowering Local Businesses in London</p>
<div className="animate-marquee flex items-center gap-16 text-white/30 text-sm font-medium whitespace-nowrap">
<span>LONDON LASH BAR</span>
<span>PURE GYM &amp; FITNESS</span>
<span>CITY CLEANERS</span>
<span>ELITE DENTAL STUDIO</span>
<span>URBAN MASSAGE</span>
<span>THE GROOMING ROOM</span>
<span>LONDON LASH BAR</span>
<span>PURE GYM &amp; FITNESS</span>
<span>CITY CLEANERS</span>
<span>ELITE DENTAL STUDIO</span>
<span>URBAN MASSAGE</span>
<span>THE GROOMING ROOM</span>
</div>
</section>

<section className="py-24 relative border-b border-white/[0.05]" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 reveal-on-scroll text-white">
                        Run your business, <br/> <span className="text-white/40">not your inbox.</span>
</h2>
<p className="text-lg text-white/50 font-light reveal-on-scroll delay-100">
                        Managing clients via WhatsApp and phone calls is chaotic. Signalloom creates a calm, automated system that works 24/7.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="bg-[#121212] p-8 rounded-2xl border border-white/[0.08] group hover:border-accent/30 transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Receptionist</h3>
<p className="text-sm text-white/50 leading-relaxed">
                            Responds to inquiries on WhatsApp, Instagram, and SMS instantly. Handles FAQs, pricing queries, and booking requests in natural language.
                        </p>
</div>

<div className="bg-[#121212] p-8 rounded-2xl border border-white/[0.08] group hover:border-accent/30 transition-all duration-500 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Smart Scheduling</h3>
<p className="text-sm text-white/50 leading-relaxed">
                            Syncs directly with your Google Calendar or booking software. The AI finds open slots and books clients without double-booking.
                        </p>
</div>

<div className="bg-[#121212] p-8 rounded-2xl border border-white/[0.08] group hover:border-accent/30 transition-all duration-500 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-white/[0.03] rounded-xl border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:card-send-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Auto-Billing</h3>
<p className="text-sm text-white/50 leading-relaxed">
                            Stop chasing invoices. Our system automatically sends Stripe payment links to secure deposits or collect full payments upon booking.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-dark to-[#080c10] overflow-hidden relative border-b border-white/[0.05]" id="how-it-works">
<div className="px-6 max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-[10px] text-accent border border-accent/20 uppercase tracking-tight mb-4 font-semibold">
                        Seamless Integration
                    </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Works with the tools <span className="text-white/40">you already use.</span>
</h2>
</div>
<div className="relative mx-auto max-w-4xl reveal-on-scroll">

<div className="flex flex-wrap justify-center gap-6 sm:gap-8 relative z-10">

<div className="group relative">
<span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#121212] border border-white/10 shadow-lg group-hover:border-green-500/50 transition-all duration-300">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" icon="logos:whatsapp-icon" width="32"></iconify-icon>
</span>
</div>

<div className="group relative">
<span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#121212] border border-white/10 shadow-lg group-hover:border-pink-500/50 transition-all duration-300">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" icon="skill-icons:instagram" width="32"></iconify-icon>
</span>
</div>

<div className="group relative">
<span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#121212] border border-white/10 shadow-lg group-hover:border-blue-500/50 transition-all duration-300">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" icon="logos:google-calendar" width="32"></iconify-icon>
</span>
</div>

<div className="group relative">
<span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#121212] border border-white/10 shadow-lg group-hover:border-indigo-500/50 transition-all duration-300">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" icon="logos:stripe" width="32"></iconify-icon>
</span>
</div>

<div className="group relative">
<span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#121212] border border-white/10 shadow-lg group-hover:border-red-500/50 transition-all duration-300">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" icon="logos:google-gmail" width="32"></iconify-icon>
</span>
</div>
</div>

<div className="relative mt-12 h-32 w-full flex justify-center items-center">
<div className="absolute w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent"></div>
<div className="w-2 h-2 bg-accent rounded-full absolute top-0 shadow-[0_0_10px_#2563EB]"></div>
</div>

<div className="flex justify-center -mt-4 relative z-20">
<div className="h-24 w-24 rounded-2xl bg-[#121212] border border-accent/30 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.15)] relative overflow-hidden group">
<div className="absolute inset-0 bg-accent/5 animate-pulse"></div>
<iconify-icon className="text-accent relative z-10" icon="solar:infinity-bold" width="40"></iconify-icon>
</div>
</div>
<p className="text-center mt-8 text-white/40 text-sm">All connected in one central dashboard.</p>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 border border-white/10 border-dashed bg-white/[0.01]">

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 border-dashed p-8 relative overflow-hidden group reveal-on-scroll">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:phone-calling-linear" width="120"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Missed Call Text Back</h3>
<p className="text-sm text-white/50 group-hover:text-white/70 transition-colors mb-6">
                            If you miss a call, our AI instantly sends a friendly SMS: "Sorry I missed you! How can I help?" ensuring you never lose a lead.
                        </p>
</div>

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 border-dashed p-8 flex flex-col reveal-on-scroll delay-100 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Instant Alerts</h3>
<p className="text-sm text-white/50 mb-8 group-hover:text-white/70 transition-colors">
                            Receive notifications only when it matters: a new confirmed booking or a payment received.
                        </p>
<div className="space-y-3 mt-auto">

<div className="flex items-center gap-3 p-3 rounded border border-white/5 bg-[#0F1216] hover:border-accent/20 transition-all cursor-default">
<div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:dollar-minimalistic-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Payment Received</div>
<div className="text-[10px] text-white/40">£85.00 from Michael B.</div>
</div>
<span className="text-[10px] text-white/30">Now</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 p-8 relative reveal-on-scroll delay-200 group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:restart-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Client Reactivation</h3>
<p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                Automatically send offers to clients who haven't visited in 60 days. Fill your empty slots with past customers.
                             </p>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-white/60">
<iconify-icon className="text-accent" icon="solar:graph-up-linear"></iconify-icon>
<span>Increases retention by ~25%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-b border-white/[0.05]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">Pricing</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                        Simple plans for <span className="text-white/40">every stage.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-[#121212] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-all duration-300 reveal-on-scroll">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">£199</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">For solo service providers &amp; freelancers.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                AI Web Chat &amp; SMS
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                Missed Call Text Back
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                Google Calendar Sync
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">Start Free Trial</button>
</div>

<div className="bg-[#0B0F13] border border-accent rounded-2xl p-8 flex flex-col relative reveal-on-scroll delay-100 shadow-[0_0_40px_rgba(37,99,235,0.08)] transform lg:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-[10px] font-bold text-white uppercase tracking-wider rounded-full shadow-lg">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">£499</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">For busy salons and clinics.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon>
                                Everything in Starter
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon>
                                WhatsApp &amp; Instagram AI
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon>
                                Stripe Payment Links
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-accent" icon="solar:check-circle-bold"></iconify-icon>
                                Database Reactivation
                            </li>
</ul>
<button className="w-full py-3 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)]">Get Started</button>
</div>

<div className="bg-[#121212] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-all duration-300 reveal-on-scroll delay-200">
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">Custom</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">For franchises and multi-location.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                Custom CRM Setup
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                Advanced Reporting
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                                Dedicated Account Manager
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-accent/[0.05] to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-8 reveal-on-scroll">
                    Automate your business in <br/> <span className="text-accent relative inline-block">15 minutes.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg></span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll delay-100">
<button className="px-10 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1">
                        Schedule Free Audit
                    </button>
<button className="px-10 py-4 bg-transparent border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transition-all w-full sm:w-auto">
                        View Case Studies
                    </button>
</div>
<p className="mt-6 text-xs text-white/30">No credit card required. Free implementation audit.</p>
</div>
</section>
</main>

<footer className="bg-dark pt-20 pb-10 relative border-t border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center text-white font-bold text-xs">
<iconify-icon icon="solar:infinity-bold"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tight">Signalloom</span>
</div>
<p className="text-sm text-white/50 leading-relaxed">
                        Helping London's small service businesses grow through AI automation.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-accent transition-colors" href="#">AI Receptionist</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Booking System</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Auto-Billing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-xs text-white/50">
<li className=""><a className="hover:text-accent transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">Case Studies</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 border-dashed pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xs text-white/30">© 2024 Signalloom. London, UK.</span>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0" icon="logos:linkedin-icon" width="16"></iconify-icon>
</a>
<a className="text-white/30 hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0" icon="logos:twitter" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
