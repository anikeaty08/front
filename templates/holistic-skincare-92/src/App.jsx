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
lime: '#cdff00',
dark: '#1a1a1a',
light: '#f9f9f7',
gray: '#888888'
}
},
fontFamily: {
serif: ['Instrument Serif', 'serif'],
sans: ['Inter', 'sans-serif'],
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="text-3xl font-serif-custom tracking-tight" href="#">eyeam</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-black transition-colors" href="#">Bio-Hacks</a>
<a className="hover:text-black transition-colors" href="#">The 4 Pillars</a>
<a className="hover:text-black transition-colors" href="#">Shop</a>
</div>
<button className="bg-black text-white hover:bg-brand-lime hover:text-black transition-colors px-6 py-2.5 rounded-full text-sm font-medium tracking-wide">
                Start Free Trial
            </button>
</div>
</nav>

<header className="relative pt-32 pb-48 overflow-hidden bg-white hero-curve">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-lime/20 rounded-full blur-3xl -z-10 opacity-50"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-4xl mx-auto text-center px-6 relative z-10">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-serif-custom mb-6">
                Bio-hack your way to<br/>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-green-600">radiant skin.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-12">
                The first holistic skincare system that combines topical ingredients with mind-body bio-hacks to balance hormones and clear acne.
            </p>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[500px] mt-8 flex justify-center items-end">

<div className="absolute left-1/2 -translate-x-[60%] bottom-0 z-10 transform -rotate-6 origin-bottom-right hover:z-30 hover:scale-105 transition-all duration-500">
<div className="w-[280px] h-[550px] bg-black rounded-[2.5rem] phone-mockup overflow-hidden relative">
<img alt="App Interface" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 flex flex-col justify-end p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
<svg className="lucide lucide-play w-4 h-4 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div>
<p className="text-white text-xs font-medium">Hormone Balance</p>
<p className="text-white/60 text-[10px]">10 min • Bio-hack</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-1/2 -translate-x-[40%] bottom-[-40px] z-20 transform rotate-3 hover:scale-105 transition-all duration-500">
<div className="w-[290px] h-[580px] bg-white rounded-[2.5rem] phone-mockup overflow-hidden relative border-gray-200">
<img alt="App User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-10 left-6 right-6">
<div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
<p className="font-serif-custom text-xl italic mb-1">"Cleared my hormonal acne in 3 weeks."</p>
<div className="flex gap-1">
<svg className="lucide lucide-star w-3 h-3 text-brand-lime fill-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-brand-lime fill-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-brand-lime fill-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-brand-lime fill-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-brand-lime fill-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 -bottom-24 z-40 w-[90%] max-w-sm">
<div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 text-center relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-lime/20 rounded-full blur-2xl"></div>
<div className="inline-flex bg-gray-100 rounded-full p-1 mb-6 relative z-10">
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-500">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-black text-white shadow-md">Yearly</button>
<span className="ml-2 text-[10px] text-brand-lime font-bold uppercase tracking-wider self-center bg-black/5 px-2 py-0.5 rounded">Best Value</span>
</div>
<div className="mb-2">
<span className="text-gray-400 line-through text-sm">$359.99</span>
<span className="text-red-500 text-xs font-medium bg-red-50 px-2 py-0.5 rounded-full ml-2">60% OFF</span>
</div>
<div className="flex items-baseline justify-center gap-1 mb-6">
<span className="text-4xl font-serif-custom font-semibold">$132.99</span>
<span className="text-gray-500 text-sm">/ year</span>
</div>
<button className="w-full bg-brand-lime hover:bg-[#bceb00] text-black font-medium py-3 rounded-xl transition-all shadow-lg shadow-brand-lime/20 text-sm tracking-wide">
                    TRY 14 DAY TRIAL
                </button>
<p className="text-[10px] text-gray-400 mt-3 text-center">
                    Billed annually after trial. Cancel anytime.
                </p>
</div>
</div>
</header>

<section className="bg-brand-light pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale mb-20">
<img alt="Vogue" className="h-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Cosmopolitan" className="h-5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Goop" className="h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Harpers Bazaar" className="h-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</section>

<section className="bg-brand-dark text-white py-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-800/50 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-serif-custom mb-4">The Four Pillars</h2>
<p className="text-gray-400 max-w-xl mx-auto">Our holistic process integrates every aspect of your being to achieve lasting transformation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-full bg-brand-lime text-black flex items-center justify-center mb-6 text-xl font-serif-custom">M</div>
<h3 className="text-2xl font-serif-custom mb-2">Mind</h3>
<p className="text-sm text-gray-400 leading-relaxed">Rewire neural pathways to reduce stress cortisol that triggers acne.</p>
</div>

<div className="group border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-6 text-xl font-serif-custom">B</div>
<h3 className="text-2xl font-serif-custom mb-2">Body</h3>
<p className="text-sm text-gray-400 leading-relaxed">Bio-hacks and somatic exercises to release stored trauma and tension.</p>
</div>

<div className="group border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-full bg-brand-lime text-black flex items-center justify-center mb-6 text-xl font-serif-custom">S</div>
<h3 className="text-2xl font-serif-custom mb-2">Spirit</h3>
<p className="text-sm text-gray-400 leading-relaxed">Connect to your higher self and manifest your dream reality and confidence.</p>
</div>

<div className="group border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-6 text-xl font-serif-custom">S</div>
<h3 className="text-2xl font-serif-custom mb-2">Skin</h3>
<p className="text-sm text-gray-400 leading-relaxed">Topical solutions and ingredients working in harmony with your internal state.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-serif-custom mb-4">Bio-hack your <span className="text-green-600">routine</span></h2>
<p className="text-gray-500">Simple steps to integrate eyeam into your daily life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center mb-6">
<span className="font-bold text-sm">01</span>
</div>
<h3 className="text-xl font-serif-custom mb-2">Apply Skincare</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Use our hormone-safe topical products as the foundation of your routine.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center mb-6">
<span className="font-bold text-sm">02</span>
</div>
<h3 className="text-xl font-serif-custom mb-2">Press Play</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Listen to a targeted bio-hack activation while you carry out your regimen.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center mb-6">
<span className="font-bold text-sm">03</span>
</div>
<h3 className="text-xl font-serif-custom mb-2">Transform</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Watch as your skin clears and your mind calms through consistent practice.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111] text-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-serif-custom mb-2">How much does eyeam cost?</h2>
<p className="text-gray-400 mb-12">Let's compare to some other everyday purchases.</p>
<div className="mb-12">
<span className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Only</span>
<div className="text-7xl font-serif-custom text-brand-lime mb-2">36¢</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">Per Day</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
<div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-4">
<svg className="lucide lucide-flower w-8 h-8 text-white" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path></svg>
</div>
<div className="text-sm font-medium mb-1">$1.50/day</div>
<div className="text-xs text-gray-500">Skincare</div>
</div>
<div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-4">
<svg className="lucide lucide-coffee w-8 h-8 text-white" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path></svg>
</div>
<div className="text-sm font-medium mb-1">$5/cup</div>
<div className="text-xs text-gray-500">Coffee</div>
</div>

<div className="flex flex-col items-center relative transform -translate-y-4">
<div className="absolute -inset-4 bg-gray-800/50 rounded-3xl -z-10"></div>
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-lime to-green-600 flex items-center justify-center mb-4 shadow-lg shadow-green-900/50">
<span className="font-serif-custom text-black text-2xl font-bold">ea</span>
</div>
<div className="text-sm font-medium mb-1 text-brand-lime">$0.36/day</div>
<div className="text-xs text-gray-400">eyeam App</div>
</div>
<div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-4">
<svg className="lucide lucide-pill w-8 h-8 text-white" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path></svg>
</div>
<div className="text-sm font-medium mb-1">$99/btl</div>
<div className="text-xs text-gray-500">Supplements</div>
</div>
<div className="flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-4">
<svg className="lucide lucide-book w-8 h-8 text-white" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
</div>
<div className="text-sm font-medium mb-1">$25/book</div>
<div className="text-xs text-gray-500">Books</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-serif-custom mb-4">We've helped people just like you<br/>become their <span className="text-orange-500">best self</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
<div className="flex gap-1 mb-4">
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        "The bio-hacks have kept me going through many breakdown moments. I listen to them back to back... at work, while cooking, on my daily walks. The pep talks are exactly what I need."
                    </p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="font-semibold text-sm">Leila F.</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 md:mt-12">
<div className="flex gap-1 mb-4">
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-brand-lime fill-brand-lime" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        "Trust me when I tell you I've tried it all. The hormone health pillar was the only thing that ever made a difference. From losing stubborn weight to making way more money."
                    </p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="font-semibold text-sm">Sophia C.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
<div className="flex-1 text-center md:text-left">
<h2 className="text-4xl md:text-6xl font-serif-custom mb-6 leading-tight">
                    Personalize your content and
                    <span className="text-brand-lime bg-black px-2">become your future self</span>
</h2>
<p className="text-lg text-gray-500 mb-8 max-w-lg">
                    Join thousands of others rewriting their stories. Start your 14-day free trial today.
                </p>
<button className="bg-brand-lime hover:bg-[#bceb00] text-black text-lg font-medium px-8 py-4 rounded-full transition-all shadow-xl shadow-brand-lime/30 inline-flex items-center gap-2">
                    Start Your Free Trial
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="relative w-full max-w-sm h-[500px] flex-shrink-0">
<div className="relative z-10 w-[280px] h-[580px] bg-black rounded-[2.5rem] phone-mockup overflow-hidden mx-auto border-gray-800 rotate-6">
<img alt="App UI" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-10 left-6 right-6">
<div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
<p className="text-white text-lg font-serif-custom">"My spirit is calm, my skin is clear."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-lime text-black py-20">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24">

<div>
<h4 className="font-normal text-lg mb-6 tracking-wide">Quick Links</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Bio-Hacks</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Skin Transformations</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Shop All</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Bestsellers</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Sustainability</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Klarna FAQs</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Clearpay FAQs</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Eyeam Loyal</a></li>
</ul>
</div>

<div>
<h4 className="font-normal text-lg mb-6 tracking-wide">About Us</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Who We Are</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Our Female Founders</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">The Four Pillars: Mind.Body.Spirit.Skin</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Hormone Health</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Key ingredients</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Roxy's Hormonal Acne Journey</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Become an eyeambassador</a></li>
</ul>
</div>

<div>
<h4 className="font-normal text-lg mb-6 tracking-wide">Information</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Privacy Policy</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Cookie Policy</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">SMS/Mobile Policy</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="border-t border-black/10 pt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

<div className="flex flex-col gap-1">
<h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none -ml-1">eyeam</h1>
<p className="text-base tracking-widest font-medium pl-1">mind.body.spirit.skin</p>
</div>

<div className="w-full max-w-md">
<p className="font-serif-custom text-3xl mb-6">Join our eyeam-fam and get 15% off your first order with us...</p>
<div className="relative">
<input className="w-full bg-black/5 border border-black/10 px-6 py-4 rounded-full placeholder:text-black/40 focus:outline-none focus:bg-white/20 transition-colors" placeholder="Your email address" type="email"/>
<button className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                            JOIN
                        </button>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
