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
background: '#030303',
surface: '#0A0A0A',
border: '#1F1F1F',
},
backgroundImage: {
'glow': 'radial-gradient(circle at 50% 0%, rgba(120, 119, 198, 0.1) 0%, transparent 60%)',
'grid': 'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



                        const icons = ['github', 'slack', 'figma', 'notion', 'linear', 'docker', 'aws', 'gitlab', 'jira'];
                        icons.forEach(icon => {
                            document.write(`
                            <div class="w-40 h-24 rounded-lg border border-white/5 bg-[#0A0A0A] flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group">
                                <span class="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:${icon}" data-width="24"></span>
                            </div>
                            `);
                        });
                        // Repeat for seamless loop
                        icons.forEach(icon => {
                            document.write(`
                            <div class="w-40 h-24 rounded-lg border border-white/5 bg-[#0A0A0A] flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group">
                                <span class="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:${icon}" data-width="24"></span>
                            </div>
                            `);
                        });
                    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030303] to-[#030303] opacity-60 blur-3xl"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:box" data-width="12"></span>
</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-white/80 transition-colors">Structura</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#">Platform</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#">Enterprise</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-200" href="#">Changelog</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs bg-white text-black px-3 py-1.5 rounded-full font-medium hover:bg-neutral-200 transition-colors" href="#">
                    Get Started
                </a>
</div>
</div>
</header>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-6xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-neutral-300 mb-8 hover:border-white/20 transition-colors cursor-default backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span>v2.4 is now available</span>
<span className="text-neutral-500 mx-1">|</span>
<span className="text-white hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1">
                        Read more <span className="iconify" data-icon="lucide:arrow-right" data-width="10"></span>
</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 mb-6 pb-2 text-glow max-w-4xl">
                    Engineering intelligence <br className="hidden md:block"/> for modern infrastructure.
                </h1>
<p className="text-lg text-neutral-400 max-w-2xl font-light leading-relaxed mb-10 tracking-tight">
                    Structura provides the primitives to build, scale, and monitor distributed engineering systems with micron-level precision and real-time analytics.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                        Start Building
                        <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
</button>
<button className="w-full sm:w-auto h-10 px-6 rounded-full border border-white/10 bg-transparent text-neutral-300 text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
<span className="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:terminal" data-width="14"></span>
                        Documentation
                        <span className="bg-neutral-800 text-[10px] text-neutral-400 px-1.5 py-0.5 rounded border border-white/5 ml-2">K</span>
</button>
</div>

<div className="mt-20 w-full relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0A0A0A]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/5"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/5"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/5"></div>
</div>
<div className="flex-1 text-center text-[10px] text-neutral-600 font-mono">dashboard.structura.app</div>
</div>

<div className="p-1 grid grid-cols-12 gap-[1px] bg-neutral-900 h-[300px] md:h-[500px] overflow-hidden">

<div className="hidden md:block col-span-2 bg-[#0A0A0A] p-4 flex flex-col gap-4">
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
<div className="space-y-2 mt-4">
<div className="h-2 w-full bg-neutral-800/50 rounded"></div>
<div className="h-2 w-3/4 bg-neutral-800/50 rounded"></div>
<div className="h-2 w-5/6 bg-neutral-800/50 rounded"></div>
</div>
</div>

<div className="col-span-12 md:col-span-10 bg-[#0A0A0A] p-6 relative">
<div className="bg-[size:20px_20px] bg-grid opacity-[0.03] absolute inset-0"></div>
<div className="flex justify-between items-end mb-8 relative z-10">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Total Requests</div>
<div className="text-3xl font-medium text-white">2,405,192</div>
</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded border border-white/10 text-[10px] text-neutral-400">24h</div>
<div className="px-2 py-1 rounded border border-white/10 text-[10px] text-neutral-400 bg-white/5">7d</div>
<div className="px-2 py-1 rounded border border-white/10 text-[10px] text-neutral-400">30d</div>
</div>
</div>

<div className="h-48 flex items-end justify-between gap-1 relative z-10">
<div className="w-full bg-neutral-800/30 rounded-t-sm hover:bg-indigo-500/50 transition-colors h-[40%]"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm hover:bg-indigo-500/50 transition-colors h-[65%]"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm hover:bg-indigo-500/50 transition-colors h-[45%]"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm hover:bg-indigo-500/50 transition-colors h-[80%]"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm hover:bg-indigo-500/50 transition-colors h-[55%]"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm hover:bg-indigo-500/50 transition-colors h-[90%]"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm hover:bg-indigo-500/50 transition-colors h-[70%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.5)] h-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-lg font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 rounded-full border-2 border-white"></span> GLOBEX</span>
<span className="text-lg font-bold tracking-tighter text-white italic">soylent</span>
<span className="text-lg font-medium tracking-tighter text-white">UMBRELLA</span>
<span className="text-lg font-bold tracking-tight text-white">MASSIVE</span>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Unlike any tool <br/><span className="text-neutral-500">you've used before.</span></h2>
<p className="text-neutral-400 max-w-xl">Designed for speed and reliability, Structura provides the essential building blocks for modern development teams.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 rounded-xl border border-white/10 bg-[#0A0A0A] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Synchronization</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">Changes propagate instantly across your entire infrastructure. No deployment queues, no waiting time. Just instant feedback.</p>
</div>

<div className="absolute bottom-0 right-0 w-full h-32 mask-linear-fade opacity-50">
<div className="w-full h-full border-t border-l border-white/5 bg-white/[0.02] rounded-tl-xl ml-12 mt-12"></div>
</div>
</div>

<div className="md:row-span-2 rounded-xl border border-white/10 bg-[#0A0A0A] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">SOC2 Type II certified. End-to-end encryption for all data in transit and at rest.</p>

<div className="mt-auto rounded bg-black border border-white/10 p-4 font-mono text-[10px] text-neutral-400">
<div className="flex gap-2 mb-2 text-neutral-600">
<span>1</span> <span className="text-purple-400">const</span> <span className="text-white">secure</span> = <span className="text-yellow-300">true</span>;
                            </div>
<div className="flex gap-2 mb-2 text-neutral-600">
<span>2</span> <span className="text-purple-400">await</span> <span className="text-blue-300">encrypt</span>(data);
                            </div>
<div className="flex gap-2 text-neutral-600">
<span>3</span> <span className="text-green-400">// Data secured</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-blue-400">
<span className="iconify" data-icon="lucide:git-branch" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Branch Previews</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Visualize changes before they merge.</p>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-pink-400">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">99.99% Uptime</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Global edge network ensures availability.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 mb-10 flex justify-between items-end">
<h3 className="text-xl font-medium text-white">Seamless Integrations</h3>
<a className="text-xs text-neutral-500 hover:text-white flex items-center gap-1 transition-colors" href="#">View all <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span></a>
</div>
<div className="relative w-full">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="flex gap-4 w-max animate-[slide_30s_linear_infinite] hover:pause">


</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-12 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale?</h2>
<p className="text-neutral-400 mb-8 max-w-lg mx-auto">Join thousands of developers building the future of infrastructure with Structura today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                            Start for free
                        </button>
<button className="h-10 px-8 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5 text-xs">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:box" data-width="10"></span>
</div>
<span className="font-medium text-white">Structura</span>
</div>
<p className="text-neutral-500 mb-4 max-w-xs">High-performance infrastructure primitives for the modern web.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-neutral-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:discord" data-width="16"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-3">Product</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-3">Resources</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-3">Company</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-3">Legal</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600">
<p>© 2024 Structura Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>All systems operational</span>
</div>
</div>
</footer>
</main>

    </>
  );
}
