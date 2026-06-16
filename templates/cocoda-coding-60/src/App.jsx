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
black: '#1d1d1f',
gray: '#86868b',
bg: '#fbfbfd',
accent: '#0071e3',
}
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
'apple': '0 10px 40px -10px rgba(0,0,0,0.08)',
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
      

<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-nav rounded-full border border-white/40 shadow-sm px-6 py-3 flex items-center justify-between gap-12 max-w-3xl w-full transition-all hover:scale-[1.01]">
<a className="flex items-center gap-2 cursor-pointer group" href="#">
<iconify-icon className="text-slate-900 group-hover:rotate-12 transition-transform" icon="solar:code-square-linear" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">cocoda</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-slate-900 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<button className="bg-slate-900 text-white rounded-full px-5 py-1.5 text-xs font-medium hover:bg-slate-800 transition-colors tracking-wide">
                Get Started
            </button>
</div>
</nav>

<section className="relative pt-40 pb-20 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Version 2.0 Available Now</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-brand-black mb-6 leading-[1.05]">
                Coding, <br className="hidden md:block"/>
<span className="text-slate-400">simplified.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                Master the fundamentals of computer science through an intuitive, visual interface. Designed for the logic-obsessed.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
<button className="group bg-blue-600 text-white rounded-full px-8 py-4 text-base font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                    Start Learning Free
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="text-blue-600 font-medium px-8 py-4 hover:bg-blue-50 rounded-full transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch the Film
                </button>
</div>

<div className="mt-20 relative w-full max-w-4xl mx-auto">
<div className="bg-white rounded-[2rem] shadow-apple border border-slate-200/60 overflow-hidden relative z-10">

<div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
</div>
<div className="text-xs font-medium text-slate-400">main.coco — Edited</div>
<div className="w-10"></div>
</div>

<div className="p-8 md:p-12 text-left font-mono text-sm md:text-base leading-loose overflow-hidden bg-white">
<div className="flex gap-4">
<div className="text-slate-300 select-none text-right flex flex-col">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
</div>
<div className="flex-1">
<p><span className="text-purple-600 font-semibold">func</span> <span className="text-blue-600">learnToCode</span>() {</p>
<p className="pl-8"><span className="text-purple-600">let</span> skills = [<span className="text-green-600">"Logic"</span>, <span className="text-green-600">"Syntax"</span>, <span className="text-green-600">"Creativity"</span>]</p>
<p className="pl-8"><span className="text-purple-600">for</span> skill <span className="text-purple-600">in</span> skills {</p>
<p className="pl-16"><span className="text-orange-500">print</span>(<span className="text-green-600">"Mastering \(skill)..."</span>)</p>
<p className="pl-8">}</p>
<p>}</p>
</div>
</div>

<div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur border border-green-100 shadow-lg rounded-2xl p-4 flex items-center gap-4 animate-bounce">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-slate-800">Code Compiled</div>
<div className="text-xs text-slate-500">0 errors, 0.4s build time</div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-purple-50 to-pink-50 rounded-[3rem] blur-2xl -z-10 opacity-60"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white scroll-mt-24" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Powerful. By design.</h2>
<p className="text-xl text-slate-500">Everything you need to go from zero to hero.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-6 lg:col-span-8 bg-slate-50 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:bg-[#f2f2f5] transition-colors border border-slate-100">
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<iconify-icon className="text-blue-600 mb-6" icon="solar:programming-linear" width="40"></iconify-icon>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Interactive Sandboxes.</h3>
<p className="text-slate-500 text-lg max-w-sm">Write code and see the results instantly in a safe, isolated environment designed for experimentation.</p>
</div>
<div className="mt-8">
<span className="text-blue-600 font-medium text-sm flex items-center gap-1 cursor-pointer group-hover:gap-2 transition-all">
                                Try the playground <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="absolute right-[-40px] bottom-[-40px] md:bottom-10 md:right-[-20px] w-64 h-64 bg-white rounded-2xl shadow-xl border border-slate-100 rotate-[-6deg] flex items-center justify-center opacity-80 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
<div className="text-center">
<div className="w-16 h-16 bg-blue-50 rounded-2xl mx-auto flex items-center justify-center mb-4">
<iconify-icon className="text-blue-500" icon="solar:code-scan-linear" width="32"></iconify-icon>
</div>
<div className="w-32 h-2 bg-slate-100 rounded-full mx-auto mb-2"></div>
<div className="w-20 h-2 bg-slate-100 rounded-full mx-auto"></div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 bg-slate-900 rounded-[2rem] p-8 md:p-10 relative overflow-hidden text-white flex flex-col justify-between group">
<div>
<iconify-icon className="text-blue-400 mb-6" icon="solar:chart-square-linear" width="40"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Detailed Analytics.</h3>
<p className="text-slate-400 text-base">Track your logic improvements over time.</p>
</div>
<div className="mt-8 flex items-end justify-between h-32 w-full gap-2">
<div className="w-full bg-slate-800 rounded-t-lg h-[40%] group-hover:h-[60%] transition-all duration-500"></div>
<div className="w-full bg-slate-700 rounded-t-lg h-[60%] group-hover:h-[40%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-blue-600 rounded-t-lg h-[80%] group-hover:h-[90%] transition-all duration-500 delay-100 relative shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
<div className="w-full bg-slate-700 rounded-t-lg h-[50%] group-hover:h-[70%] transition-all duration-500 delay-150"></div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 bg-white border border-slate-100 shadow-sm rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
<iconify-icon className="text-purple-500 mb-4" icon="solar:users-group-rounded-linear" width="36"></iconify-icon>
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Community.</h3>
<p className="text-slate-500 text-sm mt-2">Join 100k+ learners worldwide.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] p-8 flex items-center justify-between relative overflow-hidden">
<div className="relative z-10 max-w-md">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Certification Included.</h3>
<p className="text-slate-600 text-sm mb-6">Earn industry-recognized certificates as you complete modules.</p>
<button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">View Certificates</button>
</div>
<iconify-icon className="text-blue-200 absolute -right-6 -bottom-6 w-48 h-48 rotate-12" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5f5f7] scroll-mt-24" id="curriculum">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900">Your Path to Mastery</h2>
</div>
<div className="flex flex-col md:flex-row gap-6 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl p-8 snap-center hover:scale-[1.02] transition-transform duration-300 shadow-sm">
<div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Module 01</div>
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Variables &amp; Types</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Understanding how computers store information. The building blocks of everything.</p>
<div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-blue-600 h-full w-full rounded-full"></div>
</div>
<span className="text-xs text-slate-400 font-medium">Completed</span>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl p-8 snap-center hover:scale-[1.02] transition-transform duration-300 shadow-sm">
<div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Module 02</div>
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Loops &amp; Logic</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Controlling the flow of your program. Making decisions and repeating tasks efficiently.</p>
<div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-orange-500 h-full w-[45%] rounded-full"></div>
</div>
<span className="text-xs text-slate-400 font-medium">In Progress • 45%</span>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl p-8 snap-center hover:scale-[1.02] transition-transform duration-300 shadow-sm opacity-60">
<div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Module 03</div>
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mb-6">
<iconify-icon icon="solar:structure-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Data Structures</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Organizing complex data. Arrays, dictionaries, and beyond.</p>
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium bg-slate-50 w-fit px-3 py-1 rounded-full">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Locked
                    </div>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl p-8 snap-center hover:scale-[1.02] transition-transform duration-300 shadow-sm opacity-60">
<div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Module 04</div>
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mb-6">
<iconify-icon icon="solar:widget-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Algorithms</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Solving problems with elegance and speed. The art of computer science.</p>
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium bg-slate-50 w-fit px-3 py-1 rounded-full">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Locked
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200 scroll-mt-20" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Simple, transparent pricing.</h2>
<p className="text-xl text-slate-500">Invest in your logic. Cancel anytime.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col transition-transform hover:scale-[1.02]">
<div className="mb-4">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Hobby</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-slate-500 text-sm mb-8 leading-relaxed">Perfect for beginners just starting their coding journey.</p>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Access to first 3 modules</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Basic web sandbox</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Community support</span>
</li>
</ul>
<button className="mt-auto w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-900 font-medium text-sm hover:bg-slate-50 transition-colors">Start for Free</button>
</div>

<div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl flex flex-col relative overflow-hidden md:-mt-8 md:mb-4 transform scale-100 md:scale-105 z-10">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-blue-400 opacity-20" icon="solar:star-fall-linear" width="120"></iconify-icon>
</div>
<div className="mb-4 relative">
<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/30">Most Popular</span>
</div>
<div className="flex items-baseline gap-1 mb-6 relative">
<span className="text-5xl font-bold text-white">$19</span>
<span className="text-slate-400">/mo</span>
</div>
<p className="text-slate-300 text-sm mb-8 leading-relaxed relative">For dedicated learners ready to master professional skills.</p>
<ul className="space-y-4 mb-8 text-sm text-slate-200 relative">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span>Unlimited access to all modules</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span>Pro sandbox with API access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span>Industry Certificates</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span>Priority support</span>
</li>
</ul>
<button className="mt-auto w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 relative">Get Pro Access</button>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col transition-transform hover:scale-[1.02]">
<div className="mb-4">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Team</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$49</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-slate-500 text-sm mb-8 leading-relaxed">Admin tools and analytics for schools and bootcamps.</p>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Everything in Pro</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Team management dashboard</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Bulk billing &amp; invoicing</span>
</li>
</ul>
<button className="mt-auto w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-900 font-medium text-sm hover:bg-slate-50 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-8">Ready to compile?</h2>
<div className="flex flex-col items-center gap-6">
<p className="text-lg text-slate-500 max-w-lg mx-auto">Join today and start building the future. No credit card required for the intro course.</p>
<button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-medium hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/10">
                    Get Started for Free
                </button>
</div>
</div>
</section>

<footer className="bg-[#f5f5f7] py-12 px-6 border-t border-slate-200">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-slate-600" icon="solar:code-square-linear" width="20"></iconify-icon>
<span className="font-semibold text-slate-700">cocoda</span>
</div>
<div className="text-xs text-slate-400">Copyright © 2024 Cocoda Inc. <br/>All rights reserved.</div>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Use</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sales and Refunds</a>
<a className="hover:text-slate-900 transition-colors" href="#">Legal</a>
<a className="hover:text-slate-900 transition-colors" href="#">Site Map</a>
</div>
<div className="text-xs text-slate-400">United States</div>
</div>
</footer>

    </>
  );
}
