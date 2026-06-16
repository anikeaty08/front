import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#FF5F00', // Vibrant Orange (Jeton-inspired)
light: '#FF8540',
dark: '#CC4C00',
50: '#FFF2EB',
},
navy: {
900: '#020617',
800: '#0F172A',
700: '#1E293B',
light: '#334155'
},
surface: '#F8FAFC',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'card': '0 10px 40px -10px rgba(0,0,0,0.08)',
'glow': '0 0 40px -10px rgba(255, 95, 0, 0.3)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
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
      

<nav className="fixed w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-9 h-9 rounded-lg bg-brand text-white flex items-center justify-center shadow-lg shadow-brand/20">
<svg className="iconify" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<span className="text-navy-900 font-display font-bold text-xl tracking-tight">Velora</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-navy-light hover:text-brand transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-navy-light hover:text-brand transition-colors" href="#personal">Personal</a>
<a className="text-sm font-medium text-navy-light hover:text-brand transition-colors" href="#business">Business</a>
<a className="text-sm font-medium text-navy-light hover:text-brand transition-colors" href="#security">Security</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-semibold text-navy-900 hover:text-brand transition-colors" href="#">Log In</a>
<button className="bg-navy-900 hover:bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-navy-900/10 hover:shadow-brand/25 transform hover:-translate-y-0.5">
                    Open Account
                </button>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-32 overflow-hidden bg-white pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[50%] h-[80%] bg-gradient-to-bl from-brand-50 to-transparent rounded-bl-[100px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-gray-50 to-transparent rounded-tr-[100px] -z-10"></div>
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">

<div className="reveal max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand/20 mb-8">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-semibold text-brand tracking-wide uppercase">New: Virtual Cards Now Live</span>
</div>
<h1 className="md:text-7xl text-navy-900 leading-[1.1] text-5xl font-semibold tracking-tighter mb-6">
                    One Wallet for Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Global Money.</span>
</h1>
<p className="text-lg text-navy-light mb-10 leading-relaxed max-w-lg font-light">
                    Send, receive, and spend in 50+ currencies. The secure digital wallet trusted by millions to move money without borders.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<div className="relative group">
<input className="custom-input w-full sm:w-72 pl-4 pr-12 py-4 rounded-xl text-navy-900 placeholder:text-gray-400" placeholder="Enter your email" type="email"/>
</div>
<button className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl text-base font-medium transition-all shadow-glow flex items-center justify-center gap-2 group">
                        Get Started
                        <svg aria-hidden="true" className="" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-navy-light/80">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                        Bank-grade Security
                    </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                        FCA Regulated
                    </div>
</div>
</div>

<div className="reveal reveal-delay-2 relative perspective-[2000px]">

<div className="relative z-10 w-[300px] md:w-[340px] mx-auto bg-navy-900 rounded-[3rem] border-8 border-navy-900 shadow-2xl overflow-hidden aspect-[9/19] animate-float">

<div className="bg-white h-full w-full flex flex-col relative">

<div className="bg-navy-900 p-6 pb-8 pt-10 rounded-b-[2rem] text-white">
<div className="flex justify-between items-center mb-6">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">JD</div>
<svg aria-hidden="true" data-icon="lucide:bell" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-sm text-white/60 mb-1 font-medium">Total Balance</div>
<div className="text-3xl font-bold tracking-tight">$24,593.00</div>
</div>

<div className="flex justify-around py-6 px-4">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors cursor-pointer">
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-medium text-navy-light">Send</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors cursor-pointer">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-medium text-navy-light">Top Up</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors cursor-pointer">
<svg aria-hidden="true" data-icon="lucide:arrow-left-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-medium text-navy-light">Exchange</span>
</div>
</div>

<div className="flex-1 bg-surface rounded-t-[2rem] p-6 space-y-4">
<div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<div>
<div className="text-sm font-semibold text-navy-900">Apple Store</div>
<div className="text-[10px] text-gray-500">Electronics</div>
</div>
</div>
<div className="text-sm font-bold text-navy-900">-$999.00</div>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:arrow-down-left" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M17 7L7 17m10 0H7V7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-navy-900">Sarah M.</div>
<div className="text-[10px] text-gray-500">Received</div>
</div>
</div>
<div className="text-sm font-bold text-green-600">+$250.00</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] z-20 md:right-0 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-card border border-white flex items-center gap-3 animate-pulse-slow">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-xs text-gray-500 font-medium uppercase">Payment Sent</div>
<div className="text-sm font-bold text-navy-900">Successfully</div>
</div>
</div>

<div className="absolute bottom-[20%] -left-8 md:left-0 z-20 w-64 h-40 bg-gradient-to-br from-brand to-brand-dark rounded-xl shadow-2xl p-5 text-white flex flex-col justify-between transform -rotate-6 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start">
<svg aria-hidden="true" data-icon="lucide:nfc" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 .01 15.8M16.37 2a20.16 20.16 0 0 1 0 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-display font-bold italic opacity-80">Velora</span>
</div>
<div>
<div className="text-sm tracking-widest font-mono opacity-80 mb-1">**** **** **** 4291</div>
<div className="flex justify-between items-end">
<span className="text-xs opacity-70">John Doe</span>
<div className="flex flex-col items-center">
<div className="w-8 h-5 bg-white/20 rounded-sm mb-1"></div>
<div className="text-[8px] opacity-70">VISA</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-gray-100 bg-surface/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-gray-500 mb-8">TRUSTED BY OVER 2 MILLION PEOPLE GLOBALLY</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-navy-900"><span className="w-6 h-6 bg-current rounded-full"></span> AcmeCorp</div>
<div className="flex items-center gap-2 font-bold text-xl text-navy-900"><div className="w-6 h-6 border-2 border-current rotate-45"></div> GlobalPay</div>
<div className="flex items-center gap-2 font-bold text-xl text-navy-900"><span className="w-6 h-6 bg-current rounded-sm"></span> Stripey</div>
<div className="flex items-center gap-2 font-bold text-xl text-navy-900"><span className="w-6 h-1 bg-current"></span><span className="w-6 h-1 bg-current"></span> FinTech</div>
<div className="flex items-center gap-2 font-bold text-xl text-navy-900"><span className="w-6 h-6 border-2 border-current rounded-full"></span> BankO</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4 tracking-tight">Everything you need to manage money.</h2>
<p className="text-navy-light text-lg">A complete financial ecosystem in your pocket. Built for speed, security, and simplicity.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-surface border border-gray-100 hover:border-brand/30 hover:shadow-card transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:globe-2" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Global Transfers</h3>
<p className="text-sm text-navy-light leading-relaxed">Send money to 180+ countries instantly with real exchange rates. No hidden markups or surprise fees.</p>
</div>

<div className="group p-8 rounded-2xl bg-surface border border-gray-100 hover:border-brand/30 hover:shadow-card transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:credit-card" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Virtual &amp; Physical Cards</h3>
<p className="text-sm text-navy-light leading-relaxed">Create disposable virtual cards for safe online shopping or order a premium physical card for travel.</p>
</div>

<div className="group p-8 rounded-2xl bg-surface border border-gray-100 hover:border-brand/30 hover:shadow-card transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:wallet" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Multi-Currency Wallet</h3>
<p className="text-sm text-navy-light leading-relaxed">Hold and exchange 50+ currencies in a single account. Switch between EUR, USD, and GBP in seconds.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 space-y-32">

<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-brand/5 rounded-full blur-3xl transform -translate-x-10"></div>
<div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden aspect-[4/3] group">

<div className="absolute inset-0 bg-surface">
<div className="w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white p-5 rounded-2xl shadow-card border border-gray-100 text-center transform group-hover:scale-105 transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
<svg aria-hidden="true" data-icon="lucide:check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-lg font-bold text-navy-900">$1,250.00</div>
<div className="text-xs text-gray-500 mb-4">Sent to Tokyo, Japan</div>
<div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full"></div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6 tracking-tight">Move money as fast as a message.</h2>
<p className="text-lg text-navy-light mb-8 font-light">
                        Why wait days for bank transfers? With Velora, payments between users are instant and free. International bank transfers land within hours, not days.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-navy-900 font-medium">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Instant internal transfers
                        </li>
<li className="flex items-center gap-3 text-navy-900 font-medium">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Low-cost SEPA &amp; SWIFT
                        </li>
<li className="flex items-center gap-3 text-navy-900 font-medium">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Real-time tracking
                        </li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="">
<div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:lock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6 tracking-tight">Pay securely, anywhere online.</h2>
<p className="text-lg text-navy-light mb-8 font-light">
                        Generate unique virtual cards for every subscription or one-time purchase. Freeze cards instantly if you spot suspicious activity. You are in control.
                    </p>
<button className="text-brand hover:text-brand-dark font-semibold inline-flex items-center gap-2 group">
                        Explore Cards
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="relative">
<div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl transform translate-x-10"></div>

<div className="relative h-[400px] w-full flex items-center justify-center">
<div className="absolute w-72 h-44 bg-navy-800 rounded-xl shadow-xl transform rotate-6 translate-x-4 border border-navy-700"></div>
<div className="absolute w-72 h-44 bg-gray-200 rounded-xl shadow-xl transform -rotate-3 -translate-x-4 border border-gray-300"></div>
<div className="absolute w-72 h-44 bg-gradient-to-br from-brand to-brand-dark rounded-xl shadow-2xl z-10 p-6 flex flex-col justify-between text-white hover:scale-105 transition-transform duration-300">
<div className="flex justify-between items-start">
<svg aria-hidden="true" data-icon="lucide:wifi" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold tracking-widest">VISA</span>
</div>
<div>
<div className="text-lg tracking-widest font-mono mb-2">4921 •••• •••• 9921</div>
<div className="flex justify-between text-xs opacity-80 uppercase">
<span>Card Holder</span>
<span>Expires</span>
</div>
<div className="flex justify-between text-sm font-medium">
<span>Alex Morgan</span>
<span>12/28</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-900 text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Start in minutes, not days.</h2>
<p className="text-gray-400 text-lg">No paperwork, no queues. Just download and go.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent border-t border-dashed border-white/20 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center mb-6 shadow-glow transition-transform hover:scale-110">
<span className="text-3xl font-bold text-brand">1</span>
</div>
<h3 className="text-xl font-semibold mb-3">Register</h3>
<p className="text-sm text-gray-400 max-w-xs">Sign up with your email and phone number. It takes less than 2 minutes.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center mb-6 shadow-glow transition-transform hover:scale-110">
<span className="text-3xl font-bold text-brand">2</span>
</div>
<h3 className="text-xl font-semibold mb-3">Verify Identity</h3>
<p className="text-sm text-gray-400 max-w-xs">Securely verify your ID with a quick photo to unlock all features.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center mb-6 shadow-glow transition-transform hover:scale-110">
<span className="text-3xl font-bold text-brand">3</span>
</div>
<h3 className="text-xl font-semibold mb-3">Send &amp; Spend</h3>
<p className="text-sm text-gray-400 max-w-xs">Top up your account and start using your virtual or physical card immediately.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="security">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6 tracking-tight">Your security is our priority.</h2>
<p className="text-lg text-navy-light mb-10">We use bank-level encryption and cutting-edge fraud detection to keep your money safe 24/7.</p>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:lock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<h4 className="font-bold text-navy-900 mb-2">256-bit Encryption</h4>
<p className="text-xs text-navy-light">All data is encrypted in transit and at rest.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:scan-face" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-bold text-navy-900 mb-2">Biometric Access</h4>
<p className="text-xs text-navy-light">Secure login with FaceID or Fingerprint.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:shield-alert" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-bold text-navy-900 mb-2">Fraud Protection</h4>
<p className="text-xs text-navy-light">AI-driven monitoring of suspicious transactions.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:file-check-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15l2 2l4-4"></path></g></svg>
<h4 className="font-bold text-navy-900 mb-2">Fully Regulated</h4>
<p className="text-xs text-navy-light">Licensed E-Money Institution.</p>
</div>
</div>
</div>
<div className="bg-navy-900 rounded-3xl p-10 text-white flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur">
<svg aria-hidden="true" data-icon="lucide:award" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<h3 className="text-2xl font-semibold mb-4">PCI DSS Compliant</h3>
<p className="text-gray-300 mb-8 leading-relaxed">Velora adheres to the strictest security standards in the payment industry. Your card details are never stored on our servers in plain text.</p>
<a className="text-white border-b border-brand pb-1 hover:text-brand transition-colors inline-block font-medium" href="#">Read our Security Whitepaper</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6 tracking-tight">Fair pricing, transparent fees.</h2>
<p className="text-lg text-navy-light mb-12">Open an account for free. Pay only when you use it.</p>
<div className="bg-surface rounded-3xl p-8 md:p-12 border border-gray-100 shadow-card grid md:grid-cols-2 gap-8 items-center text-left">
<div>
<h3 className="text-2xl font-bold text-navy-900 mb-2">Standard Account</h3>
<div className="text-4xl font-bold text-brand mb-6">$0 <span className="text-sm text-gray-400 font-normal">/ month</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-navy-900"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Free IBAN Account</li>
<li className="flex items-center gap-3 text-sm text-navy-900"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1 Virtual Card Included</li>
<li className="flex items-center gap-3 text-sm text-navy-900"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Instant Free Internal Transfers</li>
</ul>
</div>
<div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Download the App</span>
<div className="flex flex-col gap-3 w-full">
<button className="bg-navy-900 text-white w-full py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-navy-800 transition-colors">
<svg aria-hidden="true" data-icon="lucide:apple" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg>
<span className="text-sm font-medium">App Store</span>
</button>
<button className="bg-white border border-gray-200 text-navy-900 w-full py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:play-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-sm font-medium">Google Play</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-gray-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-navy-900 mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-navy-900">Is Velora a bank?</span>
<span className="transition-transform group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-navy-light leading-relaxed">
                        Velora is an E-Money Institution, not a traditional bank. We safeguard your money in regulated accounts at Tier-1 banks, but we do not lend your money out.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-navy-900">How long do transfers take?</span>
<span className="transition-transform group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-navy-light leading-relaxed">
                        Transfers between Velora users are instant. SEPA transfers (Europe) usually take a few hours. SWIFT (International) transfers can take 1-3 business days.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-navy-900">Is my money safe?</span>
<span className="transition-transform group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-navy-light leading-relaxed">
                        Absolutely. We use 2-factor authentication, biometric login, and real-time fraud monitoring. Your funds are safeguarded according to FCA regulations.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-brand text-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand opacity-90"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Ready to join the future of money?</h2>
<p className="text-lg md:text-xl text-white/90 mb-10">Create your free account today and experience the difference.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-brand px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-gray-50 hover:scale-105 shadow-xl">
                    Get Started Free
                </button>
<button className="bg-brand-dark/30 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl text-base font-medium transition-all hover:bg-brand-dark/50">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="bg-navy-900 pt-20 pb-10 border-t border-white/5 text-slate-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6 text-white" href="#">
<div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:wallet" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<span className="font-display font-bold text-xl tracking-tight">Velora</span>
</a>
<p className="text-sm leading-relaxed max-w-xs mb-8 text-slate-400">
                        The global digital wallet that simplifies how you send, spend, and manage money. Regulated and secure.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all" href="#"><svg aria-hidden="true" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand transition-colors" href="#">Personal</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Business</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2024 Velora Financial Ltd. All rights reserved.</p>
<div className="flex items-center gap-2 text-slate-500">
<span className="text-xs">Velora is a financial technology company, not a bank.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
