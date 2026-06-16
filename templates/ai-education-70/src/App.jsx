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
display: ['Plus Jakarta Sans', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151e2e',
},
brand: {
500: '#3b82f6', // Use a classic distinct blue
600: '#2563eb',
}
},
backgroundImage: {
'grid-slate': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
'grid-slate-dark': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%231e293b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
},
animation: {
'scan': 'scan 4s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2.5s linear infinite',
},
keyframes: {
scan: {
'0%': { top: '0%' },
'100%': { top: '100%' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' },
}
}
}
}
}



        gsap.registerPlugin(ScrollTrigger);

        // Hero 3D Tilt Effect
        const heroInterface = document.getElementById('hero-interface');
        document.addEventListener('mousemove', (e) => {
            if(window.innerWidth > 768) {
                const x = (window.innerWidth / 2 - e.clientX) / 40;
                const y = (window.innerHeight / 2 - e.clientY) / 40;
                gsap.to(heroInterface, {
                    rotationY: -10 + x, // Base rotation + mouse interaction
                    rotationX: 20 - y,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });

        // Scroll Reveal Animations
        gsap.utils.toArray('.animate-fade-in-up').forEach(element => {
            gsap.from(element, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Interface Elements Pop-in
        const tl = gsap.timeline({defaults: {ease: "back.out(1.7)", duration: 0.6}});
        tl.from(".hero-interface", {y: 100, opacity: 0, duration: 1})
          .from(".hero-interface .flex-1", {opacity: 0}, "-=0.5")
          .from(".animate-scan", {scaleY: 0}, "-=0.3")
          .from(".hero-interface .absolute.bg-white", {scale: 0, opacity: 0, stagger: 0.2});

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
<div className="glass rounded-full px-4 py-3 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-between">
<div className="flex items-center gap-3 pl-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<iconify-icon icon="solar:atom-linear" width="18"></iconify-icon>
</div>
<span className="font-display font-medium text-sm tracking-tight text-slate-900">BrainInk</span>
<span className="hidden sm:inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-medium text-slate-500 uppercase tracking-wide ml-2">Beta 2.0</span>
</div>
<div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#product">Product</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#engine">Engine</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#security">Security</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3 pr-1">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 px-2 transition-colors" href="#">Sign In</a>
<a className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:ring-2 hover:ring-offset-1 hover:ring-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 overflow-hidden" href="#">
<span className="relative z-10">Get Started</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 ease-in-out"></div>
</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-48 overflow-hidden">

<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10 bg-[size:40px_40px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white -z-10"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">Introducing BrainInk 2.0</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.05]">
                Grading, <br/>
<span className="text-slate-400">reimagined by AI.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                Turn handwritten assessments into actionable data points. 
                Zero friction, instant feedback, enterprise-grade accuracy.
            </p>

<div className="flex items-center justify-center gap-4 mb-20">
<button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-800 transition-all shadow-[0_0_0_1px_rgba(0,0,0,1),0_4px_12px_rgba(0,0,0,0.1)] flex items-center gap-2">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                    Start Pilot
                </button>
<div className="h-8 w-[1px] bg-slate-200"></div>
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
</div>
<span className="text-xs text-slate-500 font-medium">Used by 200+ schools</span>
</div>
</div>

<div className="relative max-w-5xl mx-auto h-[600px] perspective-2000 pointer-events-none md:pointer-events-auto">

<div className="hero-interface relative w-full h-full bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-2xl" id="hero-interface">

<div className="h-12 border-b border-slate-100 flex items-center justify-between px-4 bg-slate-50/50">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-1.5 w-24 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-brand-500 rounded-full"></div>
</div>
<span className="text-[10px] font-mono text-slate-400">PROCESSING_BATCH_04</span>
</div>
</div>

<div className="flex h-full">

<div className="w-16 border-r border-slate-100 bg-slate-50/30 flex flex-col items-center py-6 gap-6">
<div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
<iconify-icon icon="solar:home-angle-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-slate-400 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all">
<iconify-icon icon="solar:file-text-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-slate-400 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="mt-auto w-8 h-8 rounded-full bg-slate-200"></div>
</div>

<div className="flex-1 grid grid-cols-2 bg-slate-50/20">

<div className="p-6 border-r border-slate-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

<div className="relative h-full w-full bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden transform transition-transform duration-700 group-hover:scale-[1.02]">
<img alt="Math Paper" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute left-0 w-full h-1 bg-brand-500/50 shadow-[0_0_15px_2px_rgba(59,130,246,0.3)] animate-scan z-10"></div>

<div className="absolute top-1/4 left-1/4 px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-[10px] font-mono text-green-700 backdrop-blur-sm flex items-center gap-1">
<iconify-icon icon="solar:check-circle-bold" width="10"></iconify-icon> Correct
                                </div>
<div className="absolute bottom-1/3 right-1/4 px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] font-mono text-amber-700 backdrop-blur-sm flex items-center gap-1">
<iconify-icon icon="solar:info-circle-bold" width="10"></iconify-icon> Syntax Error
                                </div>
</div>
</div>

<div className="p-6 flex flex-col gap-4">

<div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Calculus 101</p>
<h3 className="text-xl font-semibold text-slate-900 mt-1">Grade: A-</h3>
</div>
<div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-green-500 flex items-center justify-center text-xs font-bold text-slate-700">92%</div>
</div>

<div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-brand-500" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-700">AI Feedback</span>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-100 rounded-full animate-pulse"></div>
<div className="h-2 w-3/4 bg-slate-100 rounded-full animate-pulse delay-75"></div>
<div className="h-2 w-5/6 bg-slate-100 rounded-full animate-pulse delay-150"></div>
</div>
<div className="mt-auto pt-4 border-t border-slate-50">
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-mono">Derivatives</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-mono">Chain Rule</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-pulse-slow">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-900">Grading Complete</p>
<p className="text-[10px] text-slate-400">Just now</p>
</div>
</div>
<div className="absolute -left-8 bottom-32 bg-slate-900 p-3 rounded-lg shadow-xl border border-slate-700 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 text-brand-400 flex items-center justify-center">
<iconify-icon icon="solar:code-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-white">API Sync</p>
<p className="text-[10px] text-slate-400 font-mono">POST /v1/grades</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest shrink-0">Integrated with</p>
<div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:canvas" width="20"></iconify-icon> <span className="text-sm font-semibold">Canvas</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:googleclassroom" width="20"></iconify-icon> <span className="text-sm font-semibold">Classroom</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:blackboard" width="20"></iconify-icon> <span className="text-sm font-semibold">Blackboard</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:moodle" width="20"></iconify-icon> <span className="text-sm font-semibold">Moodle</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-white" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                    Everything you need <br/>to scale assessment.
                </h2>
<p className="text-lg text-slate-500 max-w-2xl font-light">
                    Built for high-volume academic environments. Designed for clarity.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[340px]">

<div className="md:col-span-3 lg:col-span-8 group relative rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="absolute inset-0 bg-grid-slate opacity-40"></div>
<div className="relative p-8 z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900 text-xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">Handwriting Recognition Engine</h3>
<p className="text-sm text-slate-500 mt-2 max-w-md">Our proprietary OCR model is trained on 10M+ student samples, handling cursive, diagrams, and complex mathematical notation with 99.8% accuracy.</p>
</div>

<div className="relative h-32 w-full mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-4 overflow-hidden flex items-center gap-4">

<div className="flex-1 border-r border-slate-100 pr-4">
<span className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 block">Input</span>
<div className="font-handwriting text-slate-600 text-lg italic opacity-80" style={{fontFamily: 'cursive'}}>
                                    x = (-b ± √(b² - 4ac)) / 2a
                                </div>
</div>

<div className="flex-1 pl-4 relative">
<span className="text-[10px] text-brand-500 uppercase tracking-wider mb-2 block font-semibold flex items-center gap-1">
<iconify-icon icon="solar:bolt-bold"></iconify-icon> Processed
                                </span>
<code className="text-xs font-mono text-slate-800 bg-slate-50 p-2 rounded block">
                                    x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
                                </code>
<div className="absolute top-1/2 left-0 -translate-x-1/2 w-6 h-6 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-sm z-10">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 group relative rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="p-8 h-full flex flex-col">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900 text-xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">Lightning Fast</h3>
<p className="text-sm text-slate-500 mt-2">Process entire exam batches in minutes, not weekends.</p>
<div className="mt-auto flex items-end gap-2">
<span className="text-6xl font-display font-semibold text-slate-900 tracking-tighter">1.2</span>
<span className="text-sm text-slate-500 font-medium mb-2">seconds / page</span>
</div>

<div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-0 group-hover:w-full transition-all duration-[2000ms] ease-out rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-4 group relative rounded-3xl border border-slate-200 bg-slate-900 overflow-hidden hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-32 bg-brand-500/20 rounded-full blur-[80px] -z-0"></div>
<div className="relative p-8 z-10 h-full flex flex-col">
<div className="w-10 h-10 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
<iconify-icon className="text-white text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Insight Engine</h3>
<p className="text-sm text-slate-400 mt-2">Identify knowledge gaps at the granular level.</p>

<div className="mt-auto pt-8">
<div className="flex items-end gap-2 h-32 w-full justify-between px-2">
<div className="w-full bg-slate-800/50 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-700 delay-100 relative"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[70%] group-hover:h-[50%] transition-all duration-700 delay-200 relative"></div>
<div className="w-full bg-brand-500 rounded-t-sm h-[50%] group-hover:h-[85%] transition-all duration-700 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[30%] group-hover:h-[45%] transition-all duration-700 delay-300 relative"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[80%] group-hover:h-[90%] transition-all duration-700 delay-150 relative"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 lg:col-span-8 group relative rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="flex flex-col md:flex-row h-full">
<div className="p-8 md:w-1/2 flex flex-col justify-center">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-slate-900 text-xl" icon="solar:code-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">Developer First</h3>
<p className="text-sm text-slate-500 mt-2">Full REST API access to integrate grading into your existing LMS or custom dashboard.</p>
<div className="mt-6 flex gap-3">
<span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">Webhooks</span>
<span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">JSON Export</span>
</div>
</div>
<div className="md:w-1/2 bg-slate-50 border-l border-slate-100 p-6 font-mono text-xs overflow-hidden relative">

<div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-slate-50 to-transparent z-10"></div>
<div className="space-y-1 text-slate-500">
<div className="flex"><span className="text-brand-600 mr-2">1</span> <span className="text-purple-600">const</span> grade <span className="text-brand-600">=</span> <span className="text-purple-600">await</span> brainInk.<span className="text-blue-600">evaluate</span>({</div>
<div className="flex"><span className="text-slate-300 mr-2">2</span>   image: <span className="text-green-600">"scan_01.jpg"</span>,</div>
<div className="flex"><span className="text-slate-300 mr-2">3</span>   rubricId: <span className="text-green-600">"math_v2"</span></div>
<div className="flex"><span className="text-slate-300 mr-2">4</span> });</div>
<div className="flex"><span className="text-slate-300 mr-2">5</span> </div>
<div className="flex"><span className="text-slate-300 mr-2">6</span> console.<span className="text-blue-600">log</span>(grade.score); <span className="text-slate-400">// 95</span></div>
<div className="flex"><span className="text-slate-300 mr-2">7</span> <span className="text-slate-400">// Automate your workflow...</span></div>
</div>

<div className="absolute top-4 right-4 p-2 bg-white border border-slate-200 rounded shadow-sm hover:scale-105 transition-transform cursor-pointer">
<iconify-icon className="text-slate-400" icon="solar:copy-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-display text-3xl font-medium text-slate-900 mb-12">Fair pricing for every stage.</h2>
<div className="grid md:grid-cols-2 gap-8 text-left">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-slate-200"></div>
<h3 className="font-medium text-slate-900 mb-2">Pilot</h3>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">$0 <span className="text-base text-slate-500 font-normal">/ month</span></div>
<p className="text-sm text-slate-500 mb-8">Up to 5 teachers and 500 scans. Ideal for testing feasibility.</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors">Start for free</button>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Basic OCR</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Email Support</li>
</ul>
</div>

<div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-purple-500"></div>

<div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-700"></div>
<h3 className="font-medium text-white mb-2">Institution</h3>
<div className="text-4xl font-semibold tracking-tight text-white mb-4">Custom</div>
<p className="text-sm text-slate-400 mb-8">Full access for entire departments. Volume discounts available.</p>
<button className="w-full py-2.5 rounded-lg bg-white text-slate-900 font-medium text-sm hover:bg-slate-100 transition-colors">Contact Sales</button>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> Advanced Handwriting AI</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> LMS Integration (Canvas, etc)</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> SLA &amp; Priority Support</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-10">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:atom-bold" width="14"></iconify-icon>
</div>
<span className="font-display font-semibold text-slate-900">BrainInk</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">Building the intelligence layer for modern education.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Overview</a></li>
<li><a className="hover:text-slate-900" href="#">Integrations</a></li>
<li><a className="hover:text-slate-900" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
<p>© 2024 BrainInk Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
