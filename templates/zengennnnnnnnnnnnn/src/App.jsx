import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
lemon: {
300: '#FDE047',
400: '#FACC15',
500: '#EAB308',
},
dark: {
900: '#0a0a0a',
800: '#171717',
}
}
}
}
}



        lucide.createIcons();
        
        // Simple scroll effect for navbar
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('bg-white/80', 'backdrop-blur-md', 'border-gray-200');
                nav.classList.remove('border-transparent');
            } else {
                nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-gray-200');
                nav.classList.add('border-transparent');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] bg-yellow-200/40 rounded-full blur-[120px] opacity-60 mix-blend-multiply"></div>
<div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-white rounded-full blur-[100px] opacity-80"></div>
<div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-gray-100 rounded-full blur-[100px] opacity-80"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-transparent transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="bg-black text-yellow-300 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-black">ZenGen</span>
</div>

<div className="flex items-center gap-4">
<button className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg flex items-center gap-2 group">
                    Get Started
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-0 px-6">

<div className="max-w-4xl mx-auto text-center mb-16">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 animate-fade-in leading-[1.1] text-balance">
                Smarter AI <br className="hidden md:block"/> lead generation growth
            </h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in delay-100 text-balance">
                Stop juggling marketing tasks. ZenGen automates lead capture and outreach, freeing you to strategize, close, and focus on what drives revenue.
            </p>
<div className="flex flex-col items-center justify-center gap-4 animate-fade-in delay-200">
<button className="bg-black text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-yellow-900/10">
                    Start free trial
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
<div className="flex items-center gap-2 text-xs text-gray-500 font-medium tracking-wide mt-2">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-gray-200 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-gray-300 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-gray-400 border border-white"></div>
</div>
                    Trusted by 10,000+ Innovators
                </div>
</div>
</div>

<div className="max-w-[1000px] mx-auto animate-fade-in delay-300 animate-float perspective-[2000px] mb-32 relative z-20">
<div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-x-12">

<div className="bg-[#0f0f0f] text-gray-400 px-4 py-3 flex items-center justify-between border-b border-gray-800">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-white">
<i className="w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="zap"></i>
</div>
<div className="h-4 w-[1px] bg-gray-700"></div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>
<div className="text-xs font-mono text-gray-500">dashboard.zengen.ai</div>
</div>

<div className="p-6 bg-gray-50/50">
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="text-xs text-gray-400 mb-1">Total Revenue</div>
<div className="text-2xl font-semibold text-slate-900">$124,500</div>
<div className="text-xs text-green-600 flex items-center mt-2">+12.5% <i className="w-3 h-3 ml-1" data-lucide="trending-up"></i></div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="text-xs text-gray-400 mb-1">Active Leads</div>
<div className="text-2xl font-semibold text-slate-900">1,284</div>
<div className="text-xs text-green-600 flex items-center mt-2">+4.2% <i className="w-3 h-3 ml-1" data-lucide="trending-up"></i></div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="text-xs text-gray-400 mb-1">Conversion Rate</div>
<div className="text-2xl font-semibold text-slate-900">3.8%</div>
<div className="text-xs text-gray-400 flex items-center mt-2">Target: 4.0%</div>
</div>
</div>
<div className="bg-white h-48 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-end justify-between px-6 pb-0 pt-10">

<div className="w-full h-full flex items-end justify-between gap-2">
<div className="w-full bg-gray-100 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-black rounded-t-sm h-[85%] relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Record High</div>
</div>
<div className="w-full bg-gray-100 rounded-t-sm h-[65%]"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[75%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-3xl mx-auto pb-32 relative">

<div className="absolute left-1/2 top-[-100px] h-24 w-[1px] bg-gradient-to-b from-transparent to-gray-300 -translate-x-1/2"></div>
<div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-yellow-50/30 opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-[1px] bg-slate-900"></div>
<h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900">A Message to Founders</h3>
</div>
<h2 className="font-serif italic text-3xl text-slate-800 mb-8">Dear Builder and Innovator,</h2>
<div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-700 font-normal">
<p>
<span className="font-semibold text-slate-900 bg-yellow-100/50 px-1">Ads run and fuel a business.</span> It's what breathes life into a corporation regardless of the stage or industry it is situated within.
                        </p>
<p>
                            As a result, you have to stop utilizing techniques and creatives from half a decade ago. It's time to adapt, utilize penetrating creatives, and <span className="border-b-2 border-yellow-300 text-slate-900 font-medium">AI nurture</span>.
                        </p>
<p>
                            Spend less time completing mundane and unnecessary tasks, and start acting like a <span className="font-semibold text-slate-900">true owner</span>. Someone who has freedom and time to indulge in the fruits and harvests of life.
                        </p>
<div className="pt-6">
<p className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                                Let ZenGen do the heavy lifting.
                            </p>
</div>
</div>

<div className="mt-12 flex items-center gap-4 pt-8 border-t border-gray-200/60">
<div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
<i className="w-6 h-6 fill-black text-black" data-lucide="zap"></i>
</div>
<div>
<div className="font-semibold text-slate-900 text-sm"> The ZenGen Team</div>
<div className="text-xs text-gray-500">Automating Growth</div>
</div>
<button className="ml-auto text-sm font-medium text-slate-900 flex items-center gap-2 hover:gap-3 transition-all">
                            Start Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-gray-200 bg-white py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 fill-black text-black" data-lucide="zap"></i>
<span className="font-semibold tracking-tight">ZenGen</span>
</div>
<div className="text-sm text-gray-500">
                © 2024 ZenGen Intelligence. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
