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
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        function handleFormSubmit(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const business = document.getElementById('business').value;
            const industry = document.getElementById('industry').value;
            const calls = document.getElementById('calls').value;
            const message = document.getElementById('message').value;

            // Construct WhatsApp Message
            const waText = `Hi, I'm interested in SmartReceptionAI.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ABusiness: ${business}%0AIndustry: ${industry}%0ACalls/Day: ${calls}%0ANotes: ${message}`;
            
            const waUrl = `https://wa.me/6591752549?text=${waText}`;

            // Trigger Mailto (fallback for email capture)
            const mailtoUrl = `mailto:hello@smartreception.ai?subject=New Lead: ${business}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ABusiness: ${business}%0D%0AIndustry: ${industry}%0D%0ACalls: ${calls}%0D%0AMessage: ${message}`;

            // Open WhatsApp in new tab (Primary Action)
            window.open(waUrl, '_blank');
            
            // Try to trigger mailto as well (Secondary)
            window.location.href = mailtoUrl;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/10 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/5 rounded-full blur-[100px] opacity-20"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050508]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
<span className="iconify text-sky-400" data-icon="lucide:bot" data-width="18"></span>
</div>
<span className="text-white font-medium tracking-tight">SmartReceptionAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-white text-black hover:bg-zinc-200 text-xs font-semibold px-4 py-2 rounded-full transition-all" href="#contact-form">
                Send Details
            </a>
</div>
</nav>

<section className="relative z-10 pt-24 pb-32 px-6">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-300 text-[11px] font-medium tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                24/7 AI Phone Receptionist
            </div>
<h1 className="text-4xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Never Miss a <br/>
<span className="text-gradient-blue">Customer Call Again</span>
</h1>
<p className="text-zinc-400 text-base md:text-lg max-w-2xl mb-10 font-light leading-relaxed">
                Automate your front desk with an AI that answers calls, handles bookings, answers FAQs, and captures leads—day or night.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="group flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full font-medium transition-all min-w-[160px] justify-center" href="https://smartreception.ai/demo" target="_blank">
<span className="iconify" data-icon="lucide:phone-call" data-width="16"></span>
                    Talk to the AI
                </a>
<a className="flex items-center gap-2 bg-white/5 text-white hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full font-medium transition-all min-w-[160px] justify-center" href="#contact-form">
                    Get Started
                </a>
</div>

<div className="mt-20 w-full max-w-3xl glass-card rounded-2xl p-1 shadow-2xl shadow-sky-900/10 overflow-hidden relative group">

<div className="bg-[#0c0c0e] rounded-xl p-6 md:p-12 border border-white/5 relative overflow-hidden">
<div className="flex flex-col items-center gap-6 relative z-10">

<div className="w-20 h-20 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
<span className="iconify text-zinc-500" data-icon="lucide:user" data-width="32"></span>
<div className="absolute -bottom-1 -right-1 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center border-[3px] border-[#0c0c0e]">
<span className="iconify text-white" data-icon="lucide:mic" data-width="14"></span>
</div>
</div>
<div className="text-center space-y-1">
<div className="text-xs text-sky-400 font-medium tracking-widest uppercase">AI Agent Active</div>
<div className="text-2xl text-white font-medium">00:24</div>
<div className="text-zinc-500 text-sm">Booking Appointment for Sarah</div>
</div>

<div className="flex items-center gap-1 h-8">
<div className="w-1 h-4 bg-sky-500/50 rounded-full animate-pulse"></div>
<div className="w-1 h-6 bg-sky-500/80 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-3 bg-sky-500/40 rounded-full animate-pulse delay-100"></div>
<div className="w-1 h-8 bg-sky-400 rounded-full animate-pulse delay-150"></div>
<div className="w-1 h-5 bg-sky-500/60 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-3 bg-sky-500/30 rounded-full animate-pulse"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-[60px]"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs text-zinc-500 uppercase tracking-widest mb-8">Trusted by service businesses across industries</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6">

<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-sky-500/30 transition-colors">
<span className="iconify" data-icon="lucide:scissors" data-width="18"></span>
</div>
<span className="text-sm text-zinc-400">Salons</span>
</div>

<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-sky-500/30 transition-colors">
<span className="iconify" data-icon="lucide:stethoscope" data-width="18"></span>
</div>
<span className="text-sm text-zinc-400">Clinics</span>
</div>

<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-sky-500/30 transition-colors">
<span className="iconify" data-icon="lucide:utensils" data-width="18"></span>
</div>
<span className="text-sm text-zinc-400">Restaurants</span>
</div>

<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-sky-500/30 transition-colors">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="18"></span>
</div>
<span className="text-sm text-zinc-400">Tuition Centres</span>
</div>

<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-sky-500/30 transition-colors">
<span className="iconify" data-icon="lucide:wrench" data-width="18"></span>
</div>
<span className="text-sm text-zinc-400">Home Services</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Set up in minutes, <br/>runs 24/7 forever.</h2>
<p className="text-zinc-400">No complex coding required. Just tell the AI about your business.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative pt-6">
<div className="w-4 h-4 rounded-full bg-[#050508] border-2 border-sky-500 absolute -top-2 left-0 md:left-1/2 md:-translate-x-1/2 z-10"></div>
<div className="text-5xl font-bold text-white/5 mb-4">01</div>
<h3 className="text-white font-medium mb-2">Share Info</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Upload your service menu, pricing, and business hours directly to the dashboard.</p>
</div>

<div className="relative pt-6">
<div className="w-4 h-4 rounded-full bg-[#050508] border-2 border-zinc-700 absolute -top-2 left-0 md:left-1/2 md:-translate-x-1/2 z-10"></div>
<div className="text-5xl font-bold text-white/5 mb-4">02</div>
<h3 className="text-white font-medium mb-2">Configure AI</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Customize the voice, tone, and specific instructions for handling complex queries.</p>
</div>

<div className="relative pt-6">
<div className="w-4 h-4 rounded-full bg-[#050508] border-2 border-zinc-700 absolute -top-2 left-0 md:left-1/2 md:-translate-x-1/2 z-10"></div>
<div className="text-5xl font-bold text-white/5 mb-4">03</div>
<h3 className="text-white font-medium mb-2">AI Goes Live</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Forward your calls to your dedicated AI number. It starts answering immediately.</p>
</div>

<div className="relative pt-6">
<div className="w-4 h-4 rounded-full bg-[#050508] border-2 border-zinc-700 absolute -top-2 left-0 md:left-1/2 md:-translate-x-1/2 z-10"></div>
<div className="text-5xl font-bold text-white/5 mb-4">04</div>
<h3 className="text-white font-medium mb-2">Review &amp; Grow</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Receive instant call summaries, booked appointments, and captured leads.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#08080a]" id="features">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Everything you need to manage calls</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">24/7 Answering</h3>
<p className="text-sm text-zinc-400">Never let a call go to voicemail. The AI answers promptly, day or night, ensuring 100% response rate.</p>
</div>

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:calendar-check" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Booking Integration</h3>
<p className="text-sm text-zinc-400">Syncs with Google Calendar, Calendly, or your custom CRM to book appointments in real-time.</p>
</div>

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:message-square-text" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Instant Summaries</h3>
<p className="text-sm text-zinc-400">Get a text or email summary immediately after every call with key details and action items.</p>
</div>

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:phone-missed" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Missed Call Recovery</h3>
<p className="text-sm text-zinc-400">The AI can instantly text callers back if they hang up or if the line was busy.</p>
</div>

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:languages" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Multi-Language</h3>
<p className="text-sm text-zinc-400">Support for English, Mandarin, and other major languages to serve a diverse customer base.</p>
</div>

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Spam Filtering</h3>
<p className="text-sm text-zinc-400">Politely screens out robo-callers and spam, so you only deal with genuine customers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">Loved by business owners</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 text-sky-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"We used to miss 5-6 calls a day during peak salon hours. SmartReceptionAI captures those bookings automatically. It paid for itself in week one."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white">JL</div>
<div>
<div className="text-xs font-medium text-white">Jessica Lim</div>
<div className="text-[10px] text-zinc-500">Owner, Glow Studio</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 text-sky-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"The setup was surprisingly easy. I uploaded our clinic's FAQ and now the AI handles all the repetitive questions about pricing and location."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white">DT</div>
<div>
<div className="text-xs font-medium text-white">Dr. Tan</div>
<div className="text-[10px] text-zinc-500">Dental Surgeon</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 text-sky-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-sm text-zinc-300 mb-6 leading-relaxed">"As a tuition centre, parents call us late at night. The AI answers professionally and schedules trial classes for us. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white">MR</div>
<div>
<div className="text-xs font-medium text-white">Michael Raj</div>
<div className="text-[10px] text-zinc-500">Centre Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Simple, Transparent Pricing</h2>
<p className="text-zinc-400">Choose the plan that fits your call volume.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 relative">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-xs text-zinc-400 mb-6">For small businesses just starting out.</p>
<div className="mb-6">
<span className="text-3xl font-medium text-white">$99</span><span className="text-zinc-500 text-sm">/mo</span>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> 100 Call Minutes</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> ~30-50 Calls</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> Email Summaries</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> Standard Voice</div>
</div>
<a className="block w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-center text-sm font-medium text-white transition-colors" href="#contact-form">Get Started</a>
</div>

<div className="p-8 rounded-2xl bg-[#0c0c10] border border-sky-500/30 relative shadow-2xl shadow-sky-900/20 transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sky-600 rounded-full text-[10px] font-semibold text-white tracking-wide uppercase">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Main</h3>
<p className="text-xs text-zinc-400 mb-6">For growing service businesses.</p>
<div className="mb-6">
<span className="text-3xl font-medium text-white">$199</span><span className="text-zinc-500 text-sm">/mo</span>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-sky-400" data-icon="lucide:check" data-width="16"></span> 300 Call Minutes</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-sky-400" data-icon="lucide:check" data-width="16"></span> ~100-150 Calls</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-sky-400" data-icon="lucide:check" data-width="16"></span> Calendar Integration</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-sky-400" data-icon="lucide:check" data-width="16"></span> Priority Support</div>
</div>
<a className="block w-full py-2.5 rounded-lg bg-white text-center text-sm font-semibold text-black hover:bg-zinc-200 transition-colors" href="#contact-form">Get Started</a>
</div>

<div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 relative">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<p className="text-xs text-zinc-400 mb-6">For franchises and high volume.</p>
<div className="mb-6">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> Unlimited Minutes</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> Custom CRM Integration</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> Dedicated Account Manager</div>
<div className="flex items-center gap-3 text-sm text-zinc-300"><span className="iconify text-zinc-500" data-icon="lucide:check" data-width="16"></span> White Labelling</div>
</div>
<a className="block w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-center text-sm font-medium text-white transition-colors" href="#contact-form">Contact Sales</a>
</div>
</div>
<p className="text-center text-xs text-zinc-600 mt-8">Additional minutes charged at standard rates.</p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-300">Does it sound robotic?</span>
<span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        Not at all. We use advanced voice synthesis that sounds natural and conversational. Most callers don't realize they are speaking to an AI initially.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-300">Can I forward calls to a human if needed?</span>
<span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        Yes. You can configure the AI to transfer calls to your personal mobile number for specific situations, or during specific hours if you prefer to take them yourself.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-zinc-300">How long does setup take?</span>
<span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        Most businesses are up and running within 15-20 minutes. You just need to fill out your business profile, upload an FAQ, and set up call forwarding.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="contact-form">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-sky-900/20 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-xl mx-auto glass-card rounded-2xl p-8 border border-white/10 shadow-2xl">
<div className="text-center mb-8">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Get Your AI Receptionist</h2>
<p className="text-sm text-zinc-400">Fill in your details below. We'll send you a tailored demo plan via WhatsApp.</p>
</div>
<form className="space-y-4" id="leadForm" onsubmit="handleFormSubmit(event)">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-[#050508] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder-zinc-700" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-[#050508] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder-zinc-700" id="email" placeholder="john@company.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Phone</label>
<input className="w-full bg-[#050508] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder-zinc-700" id="phone" placeholder="+65 9123 4567" required="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Business Name</label>
<input className="w-full bg-[#050508] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder-zinc-700" id="business" placeholder="My Business Pte Ltd" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Industry</label>
<div className="relative">
<select className="w-full bg-[#050508] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all appearance-none" id="industry">
<option>Salon / Spa</option>
<option>Clinic / Medical</option>
<option>Restaurant / Cafe</option>
<option>Tuition Centre</option>
<option>Home Services</option>
<option>Other</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Est. Calls / Day</label>
<div className="relative">
<select className="w-full bg-[#050508] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all appearance-none" id="calls">
<option>1 - 10</option>
<option>11 - 30</option>
<option>31 - 50</option>
<option>50+</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Message / Notes</label>
<textarea className="w-full bg-[#050508] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder-zinc-700" id="message" placeholder="Any specific requirements?" rows="3"></textarea>
</div>
<button className="w-full bg-white text-black hover:bg-zinc-200 py-3 rounded-lg font-semibold transition-all mt-4 flex items-center justify-center gap-2" type="submit">
                    Send My Details
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="text-[10px] text-zinc-600 text-center">By submitting, you agree to receive a WhatsApp message from our team.</p>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020203] py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-sky-500" data-icon="lucide:bot" data-width="16"></span>
<span className="text-sm font-medium text-zinc-300">SmartReceptionAI</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="mailto:hello@smartreception.ai">hello@smartreception.ai</a>
<a className="hover:text-white transition-colors" href="https://wa.me/6591752549">+65 9175 2549</a>
</div>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
