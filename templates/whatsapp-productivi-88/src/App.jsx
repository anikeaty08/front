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
lavender: '#6A7AFE',
'lavender-dark': '#5666E5',
whatsapp: '#25D366',
'whatsapp-dark': '#128C7E',
surface: '#FAFAFA',
'fur': '#C88A58',
'fur-light': '#EBCDAD',
'fur-dark': '#8B5E3C'
},
boxShadow: {
'soft': '0 4px 40px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 40px rgba(106, 122, 254, 0.2)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'wiggle': 'wiggle 3s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
wiggle: {
'0%, 100%': { transform: 'rotate(-3deg)' },
'50%': { transform: 'rotate(3deg)' },
},
fadeInUp: {
'from': { opacity: '0', transform: 'translateY(20px)' },
'to': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-10"></div>
<div className="fixed inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none -z-10"></div>

<div className="fixed top-0 right-0 w-[50vw] h-[50vh] bg-fur-light/10 rounded-full blur-[120px] -z-10"></div>
<div className="fixed bottom-0 left-0 w-[50vw] h-[50vh] bg-lavender/10 rounded-full blur-[120px] -z-10"></div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden relative border border-zinc-700">

<img alt="Mascot" className="w-6 h-6 object-contain hover:scale-110 transition-transform" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
</div>
<span className="font-semibold text-sm tracking-tight text-zinc-900">Assistant</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 hidden sm:block" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="#">
                        Get started
                    </a>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden">
<div className="max-w-6xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm mb-8 animate-fade-in-up hover:border-fur-light/50 transition-colors cursor-default">
<span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600">Online and ready to help</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.05] animate-fade-in-up delay-100">
                Your personal assistant <br className="hidden md:block"/>
<span className="text-zinc-400">is finally</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-fur to-fur-dark">human-ish.</span>
</h1>

<p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Just chat with Barney in WhatsApp. He organizes your calendar, sets reminders, and summarizes emails so you don't have to.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-fade-in-up delay-300 relative z-20">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-whatsapp hover:bg-whatsapp-dark rounded-full transition-all shadow-glow hover:shadow-xl transform hover:-translate-y-0.5" href="#">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                    Chat with Barney
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-300 rounded-full transition-all shadow-sm hover:bg-zinc-50" href="#">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                    Watch demo
                </a>
</div>

<div className="relative max-w-4xl mx-auto animate-fade-in-up delay-300 h-[600px] sm:h-[700px]">

<div className="hidden lg:block absolute bottom-0 left-0 w-64 h-80 z-20 animate-float-delayed transform -translate-x-12 translate-y-12">

<img alt="Character Looking" className="w-full h-full object-contain drop-shadow-2xl opacity-90 scale-x-[-1]" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>

<div className="absolute top-24 left-6 bg-white p-3 rounded-2xl rounded-bl-none shadow-lg border border-zinc-100 animate-wiggle">
<p className="text-xs font-medium text-zinc-800">Need help?</p>
</div>
</div>

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[360px] md:max-w-[400px] z-10">
<div className="relative bg-white rounded-[2.5rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden aspect-[9/19]">

<div className="h-14 bg-zinc-50 border-b border-zinc-100 flex items-center px-6 justify-between pt-2">
<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-fur-light/20 flex items-center justify-center overflow-hidden border border-fur/10">
<img alt="Avatar" className="w-8 h-8 object-contain" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
</div>
<div>
<div className="text-sm font-semibold text-zinc-800">Barney</div>
<div className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        Online
                                    </div>
</div>
</div>
<iconify-icon className="text-zinc-300" icon="lucide:video" width="20"></iconify-icon>
</div>

<div className="p-5 flex flex-col gap-6 bg-[#F2F0ED] h-full relative">
<div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')]"></div>
<div className="flex justify-center z-10">
<span className="text-[10px] font-medium bg-zinc-200/60 text-zinc-500 px-3 py-1 rounded-full backdrop-blur-sm">Today</span>
</div>

<div className="flex justify-start items-end gap-2 z-10">
<div className="w-8 h-8 rounded-full overflow-hidden bg-fur-light/30 border border-white shadow-sm mb-1 flex items-center justify-center">
<img alt="Bot" className="w-6 h-6 object-contain" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
</div>
<div className="bg-white text-zinc-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-zinc-100 max-w-[85%]">
<p className="text-sm leading-relaxed">Good morning! ☀️ You have 3 meetings today. Want me to block focus time for the project?</p>
<span className="text-[9px] text-zinc-400 block mt-1">9:01 AM</span>
</div>
</div>

<div className="flex justify-end z-10">
<div className="bg-emerald-100/80 text-emerald-900 px-4 py-3 rounded-2xl rounded-br-none shadow-sm border border-emerald-200/50 max-w-[85%]">
<p className="text-sm leading-relaxed">Yes please. Also remind me to call Sarah at 5pm.</p>
<span className="text-[9px] text-emerald-700/60 block mt-1 text-right">9:02 AM</span>
</div>
</div>

<div className="flex justify-start items-end gap-2 z-10">
<div className="w-8 h-8 rounded-full overflow-hidden bg-fur-light/30 border border-white shadow-sm mb-1 flex items-center justify-center">
<img alt="Bot" className="w-6 h-6 object-contain" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
</div>
<div className="bg-white text-zinc-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-zinc-100">
<div className="flex gap-1.5 py-1">
<span className="w-1.5 h-1.5 bg-fur rounded-full animate-bounce"></span>
<span className="w-1.5 h-1.5 bg-fur rounded-full animate-bounce delay-100"></span>
<span className="w-1.5 h-1.5 bg-fur rounded-full animate-bounce delay-200"></span>
</div>
</div>
</div>

<div className="absolute bottom-24 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-zinc-200/50 animate-float z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-lavender/10 text-lavender flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-zinc-800 truncate">Added to Calendar</p>
<p className="text-[10px] text-zinc-500 truncate">Call Sarah • Today, 5:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute top-20 right-0 w-72 h-80 z-0 animate-float">

<img alt="Character Floating" className="w-full h-full object-contain drop-shadow-2xl" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">He handles the boring stuff.</h2>
<p className="text-zinc-500">So you can focus on being creative.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-surface border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-fur-light/20 rounded-full blur-xl group-hover:bg-fur-light/40 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm text-fur-dark">
<iconify-icon icon="lucide:bell-ring" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Smart Reminders</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Don't fill forms. Just tell Barney "Remind me to buy milk" and he'll nudge you later.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-surface border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-lavender/20 rounded-full blur-xl group-hover:bg-lavender/40 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm text-lavender-dark">
<iconify-icon icon="lucide:calendar-clock" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Calendar Blocking</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Need focus? Barney negotiates with your calendar to find and block deep work slots.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-surface border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-100 rounded-full blur-xl group-hover:bg-emerald-200 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm text-emerald-600">
<iconify-icon icon="lucide:mail-search" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Email Triage</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Forward messy threads. Barney reads them and gives you a 1-sentence summary and action items.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-surface border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-pink-100 rounded-full blur-xl group-hover:bg-pink-200 transition-colors"></div>
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm text-pink-500">
<iconify-icon icon="lucide:coffee" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Morning Briefing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Wake up to a friendly message outlining your day, weather, and top priorities.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fur-light/20 text-fur-dark text-xs font-semibold mb-4 border border-fur-light/30">
                    Simple as chatting
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">How Barney works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-[2px] bg-zinc-100 -z-10">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-48 h-48 relative mb-6 transition-transform duration-500 group-hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100/50 rounded-full -z-10 blur-2xl"></div>

<img alt="Step 1" className="w-full h-full object-contain" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
<div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold border-4 border-surface shadow-lg">1</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Connect</h3>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Link your Calendar and Email once. Secure and private.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-48 h-48 relative mb-6 transition-transform duration-500 group-hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100/50 rounded-full -z-10 blur-2xl"></div>

<img alt="Step 2" className="w-full h-full object-contain scale-x-[-1]" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
<div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold border-4 border-surface shadow-lg">2</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Chat Naturally</h3>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Text him like a friend. Voice notes work too!</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-48 h-48 relative mb-6 transition-transform duration-500 group-hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100/50 rounded-full -z-10 blur-2xl"></div>

<img alt="Step 3" className="w-full h-full object-contain -rotate-12" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
<div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold border-4 border-surface shadow-lg">3</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Relax</h3>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">Barney updates everything in the background. You just show up.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-xl font-semibold text-zinc-900">Loved by freelancers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-soft">
<div className="flex gap-1 text-fur mb-3">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-4 leading-relaxed">"Barney is cuter than Siri and smarter than my old assistant. The voice note feature is a lifesaver when I'm driving."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div className="text-xs">
<div className="font-semibold text-zinc-900">Sarah Jenkins</div>
<div className="text-zinc-400">Designer</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-soft">
<div className="flex gap-1 text-fur mb-3">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-4 leading-relaxed">"Finally an AI that feels friendly. I actually look forward to my morning briefing now."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div className="text-xs">
<div className="font-semibold text-zinc-900">Mark T.</div>
<div className="text-zinc-400">Developer</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-soft">
<div className="flex gap-1 text-fur mb-3">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-4 leading-relaxed">"It just works. No app to install, just a contact in WhatsApp. Pure genius."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div className="text-xs">
<div className="font-semibold text-zinc-900">Jessica L.</div>
<div className="text-zinc-400">Consultant</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="p-8 bg-white border border-zinc-200 rounded-3xl relative hover:border-zinc-300 transition-colors">
<h3 className="text-base font-semibold text-zinc-900">Basic</h3>
<div className="mt-4 flex items-baseline text-zinc-900">
<span className="text-4xl font-bold tracking-tight">$0</span>
<span className="ml-1 text-base font-medium text-zinc-500">/mo</span>
</div>
<p className="mt-4 text-sm text-zinc-500">Get to know Barney.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-zinc-600">Daily briefing</span>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-zinc-600">10 Reminders / day</span>
</li>
</ul>
<a className="mt-8 block w-full bg-zinc-100 border border-transparent rounded-full py-2.5 text-sm font-medium text-zinc-900 text-center hover:bg-zinc-200 transition-colors" href="#">Start Free</a>
</div>

<div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl relative shadow-2xl ring-4 ring-zinc-50 transform md:-translate-y-4">
<div className="absolute top-0 right-0 p-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-gradient-to-r from-fur to-fur-light text-white shadow-sm">
                          Most Popular
                        </span>
</div>
<h3 className="text-base font-semibold text-white">Pro Friend</h3>
<div className="mt-4 flex items-baseline text-white">
<span className="text-4xl font-bold tracking-tight">$9</span>
<span className="ml-1 text-base font-medium text-zinc-400">/mo</span>
</div>
<p className="mt-4 text-sm text-zinc-400">Barney handles everything.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-fur flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-zinc-300">Unlimited reminders</span>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-fur flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-zinc-300">Complex Calendar management</span>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-fur flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-zinc-300">Email summary &amp; drafting</span>
</li>
</ul>
<a className="mt-8 block w-full bg-white border border-transparent rounded-full py-2.5 text-sm font-medium text-zinc-900 text-center hover:bg-zinc-100 transition-colors" href="#">Upgrade</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8 relative overflow-hidden">

<div className="absolute bottom-0 right-10 w-32 h-32 opacity-20 pointer-events-none">
<img alt="Footer Mascot" className="w-full h-full object-contain grayscale" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"/>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-white text-[10px] font-bold">B</div>
<span className="font-semibold text-sm text-zinc-900">Barney.ai</span>
</div>
<p className="text-xs text-zinc-500 max-w-xs">Your friendly neighborhood productivity mascot.<br/>Making work less work.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Features</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Privacy</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex justify-between items-center">
<p className="text-[10px] text-zinc-400">© 2023 Barney AI Inc.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
