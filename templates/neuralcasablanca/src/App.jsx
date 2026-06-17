import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="glow-orb top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-900/20"></div>
<div className="glow-orb bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-900/10" style={{animationDelay: '-4s'}}></div>
<div className="absolute inset-0 grid-bg"></div>
</div>

<div className="fixed top-8 left-8 z-50">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
<span className="iconify text-white relative z-10" data-icon="lucide:cpu" data-strokeWidth="1.5"></span>
</div>
<span className="text-white font-medium tracking-tight">NEURAL</span>
</a>
</div>
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-full p-1.5 pl-6 flex items-center gap-2 shadow-2xl shadow-black/50">
<div className="flex items-center gap-6 text-xs font-medium text-zinc-400 mr-2">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#solutions">Work</a>
<a className="hover:text-white transition-colors" href="#global">Global</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="flex items-center gap-2 text-xs font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Book a Call
            </a>
</div>
</nav>

<main className="relative z-10 pt-48 pb-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-[10px] font-medium text-zinc-400 mb-8 uppercase tracking-widest backdrop-blur-md">
<span className="iconify text-indigo-400" data-icon="lucide:globe" data-strokeWidth="1.5"></span>
                    Casablanca • Global Operations
                </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-[0.9] mb-10 text-glow">
                    Sentience <br/>
<span className="text-zinc-600">at Scale.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light">
                    We engineer the cognitive layer for forward-thinking enterprises. From predictive modeling in Morocco to global autonomous agent deployment.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<div className="relative group w-full sm:w-auto">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
<a className="relative w-full sm:w-auto px-8 py-3.5 bg-black border border-zinc-800 text-white rounded-full font-medium hover:text-white flex items-center justify-center gap-2" href="mailto:massificompany55@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5"></span>
                            Inquire Now
                        </a>
</div>
</div>
</div>
</div>
</main>

<div className="w-full overflow-hidden border-y border-white/5 bg-black/50 backdrop-blur-sm py-8 relative z-10">
<div className="flex animate-scroll w-[200%]">
<div className="flex gap-20 items-center whitespace-nowrap px-10">
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:cpu"></span> OMEGA</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:aperture"></span> FLUX</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:triangle"></span> PRISM</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:hexagon"></span> CORE</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:circle-dashed"></span> ORBIT</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:layers"></span> STACK</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:cpu"></span> OMEGA</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:aperture"></span> FLUX</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:triangle"></span> PRISM</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:hexagon"></span> CORE</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:circle-dashed"></span> ORBIT</span>
<span className="text-xl font-semibold tracking-tight text-zinc-600 flex items-center gap-2"><span className="iconify" data-icon="lucide:layers"></span> STACK</span>
</div>
</div>
</div>

<section className="relative z-10 py-32 px-6" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tighter mb-4">Neural Architecture</h2>
<p className="text-zinc-500 max-w-lg">Bespoke systems designed for high-throughput enterprise environments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl bg-zinc-900/20 border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-8 right-8 w-24 h-24 bg-indigo-500/20 blur-[50px] rounded-full"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:brain-circuit"></span>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-2">Autonomous Reasoning</h3>
<p className="text-zinc-400 leading-relaxed">Self-improving agentic workflows that handle complex decision trees without human intervention. Utilizing chain-of-thought prompting and reflective memory.</p>
</div>
<div className="mt-8 space-y-2 font-mono text-[10px] text-zinc-500 border-t border-white/5 pt-4">
<div className="flex justify-between"><span className="text-indigo-400">INPUT</span> <span>Processing unstructured data...</span></div>
<div className="flex justify-between"><span className="text-emerald-400">ANALYSIS</span> <span>98.4% Confidence score</span></div>
<div className="flex justify-between"><span className="text-blue-400">ACTION</span> <span>Executing API Webhook_04</span></div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 rounded-3xl bg-zinc-900/20 border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-auto">
<span className="iconify text-white" data-icon="lucide:server"></span>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium text-white mb-2">Private Compute</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Local LLM deployment on private clouds ensuring 100% data sovereignty.</p>
</div>
<div className="mt-8 flex gap-1 items-end h-32 w-full opacity-50">
<div className="w-1/4 bg-zinc-800 rounded-t h-[40%] group-hover:h-[60%] transition-all duration-700 delay-75"></div>
<div className="w-1/4 bg-zinc-700 rounded-t h-[70%] group-hover:h-[90%] transition-all duration-700 delay-100"></div>
<div className="w-1/4 bg-zinc-600 rounded-t h-[50%] group-hover:h-[40%] transition-all duration-700 delay-150"></div>
<div className="w-1/4 bg-indigo-900 rounded-t h-[80%] group-hover:h-[95%] transition-all duration-700 delay-200"></div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-zinc-900/20 border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<span className="iconify text-white" data-icon="lucide:eye"></span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Vision</h3>
<p className="text-zinc-500 text-xs">Real-time object detection.</p>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-zinc-900/20 border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<span className="iconify text-white" data-icon="lucide:message-square"></span>
</div>
<h3 className="text-lg font-medium text-white mb-1">NLP</h3>
<p className="text-zinc-500 text-xs">Multilingual support (En/Fr/Ar).</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-y border-white/5 bg-zinc-900/10" id="global">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="aspect-square w-full max-w-md mx-auto relative rounded-full border border-white/5 bg-black/40 backdrop-blur-sm flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-white/5 scale-75"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-50"></div>

<div className="absolute top-[35%] left-[45%]">
<div className="w-3 h-3 bg-indigo-500 rounded-full relative z-10"></div>
<div className="absolute inset-0 w-3 h-3 bg-indigo-500 rounded-full marker-pulse z-0"></div>

<div className="absolute top-1.5 left-1.5 w-[100px] h-[1px] bg-gradient-to-r from-indigo-500 to-transparent rotate-[-15deg] origin-left"></div>
<div className="absolute top-1.5 left-1.5 w-[80px] h-[1px] bg-gradient-to-r from-indigo-500 to-transparent rotate-[45deg] origin-left"></div>
<div className="absolute top-1.5 left-1.5 w-[120px] h-[1px] bg-gradient-to-r from-indigo-500 to-transparent rotate-[160deg] origin-left"></div>

<div className="absolute top-6 left-6 whitespace-nowrap bg-zinc-900 border border-white/10 px-3 py-1 rounded text-xs text-white">
                                HQ: Morocco
                            </div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 text-indigo-400 font-mono text-xs mb-4">
<span className="iconify" data-icon="lucide:globe-2"></span>
<span>GLOBAL HUB</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                        From Morocco <br/>to the World.
                    </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Strategically positioned to bridge Europe, Africa, and the Middle East. Our Casablanca operations center delivers 24/7 engineering support with multilingual capabilities.
                    </p>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">GMT+1</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Timezone Optimization</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">3</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Languages Native</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="rounded-[2.5rem] bg-zinc-900/40 border border-white/5 p-10 flex flex-col h-full hover:bg-zinc-900/60 transition-colors duration-300">
<div className="flex items-start gap-6 mb-8">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
<span className="iconify text-white w-8 h-8" data-icon="lucide:sparkles"></span>
</div>
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Sprints</h3>
<p className="text-zinc-500 font-medium">2-Weeks Implementation</p>
</div>
</div>
<div className="mb-10">
<p className="text-zinc-400 text-lg leading-relaxed">
                            For founders or teams who want to move fast — strategy, design, and neural architecture executed in 14 days.
                        </p>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 tracking-tighter">$4,500</span>
<span className="text-zinc-500 font-medium">/ Bi-Weekly</span>
</div>
<p className="text-zinc-600 text-sm mb-10">Pause or cancel anytime</p>
<a className="w-full py-4 rounded-full border border-white/10 bg-transparent text-white font-medium text-center hover:bg-white hover:text-black transition-all mb-12" href="#contact">
                        Book A Call
                    </a>
<div className="mt-auto">
<p className="font-medium text-white mb-6">What's included:</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-400">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<span className="iconify text-white w-3 h-3" data-icon="lucide:check"></span>
</div>
<span>AI developer team</span>
</li>
<li className="flex items-center gap-3 text-zinc-400">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<span className="iconify text-white w-3 h-3" data-icon="lucide:check"></span>
</div>
<span>Unlimited revisions</span>
</li>
<li className="flex items-center gap-3 text-zinc-400">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<span className="iconify text-white w-3 h-3" data-icon="lucide:check"></span>
</div>
<span>Product strategy &amp; roadmap</span>
</li>
</ul>
</div>
</div>

<div className="rounded-[2.5rem] bg-black border border-zinc-800 p-10 flex flex-col h-full relative overflow-hidden group">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex items-start gap-6 mb-8 relative z-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
<span className="iconify text-white w-8 h-8" data-icon="lucide:zap"></span>
</div>
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight">MVP Development</h3>
<p className="text-zinc-500 font-medium">We deliver an MVP in 4 weeks</p>
</div>
</div>
<div className="mb-10 relative z-10">
<p className="text-zinc-400 text-lg leading-relaxed">
                            In 4-weeks you'll have a full working product ready to launch to the world. Complete with database &amp; API integrations.
                        </p>
</div>
<div className="flex items-baseline gap-2 mb-2 relative z-10">
<span className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500 tracking-tighter">$9,500</span>
<span className="text-zinc-500 font-medium">/ One-time</span>
</div>
<p className="text-zinc-600 text-sm mb-10 relative z-10">Pause or cancel anytime</p>
<a className="relative z-10 w-full py-4 rounded-full bg-white text-black font-semibold text-center hover:bg-zinc-200 transition-all mb-12 shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="#contact">
                        Get Started Today
                    </a>
<div className="mt-auto relative z-10">
<p className="font-medium text-white mb-6">What's included:</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-300">
<div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="iconify text-black w-3 h-3" data-icon="lucide:check"></span>
</div>
<span>Functional MVP built with Next.js</span>
</li>
<li className="flex items-center gap-3 text-zinc-300">
<div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="iconify text-black w-3 h-3" data-icon="lucide:check"></span>
</div>
<span>Database &amp; API integrations (Pinecone, OpenAI)</span>
</li>
<li className="flex items-center gap-3 text-zinc-300">
<div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="iconify text-black w-3 h-3" data-icon="lucide:check"></span>
</div>
<span>User authentication &amp; onboarding flow</span>
</li>
<li className="flex items-center gap-3 text-zinc-300">
<div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="iconify text-black w-3 h-3" data-icon="lucide:check"></span>
</div>
<span>Stripe Integration</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 px-6 border-t border-white/5 bg-black" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
<div>
<h2 className="text-5xl font-medium text-white tracking-tighter mb-6">Let's talk.</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-md">Ready to integrate advanced intelligence into your workflow? Reach out directly.</p>
<div className="space-y-6">
<a className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5" href="mailto:massificompany55@gmail.com">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-indigo-500/50 transition-colors">
<span className="iconify" data-icon="lucide:mail"></span>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Email</div>
<div className="font-medium">massificompany55@gmail.com</div>
</div>
</a>
<a className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5" href="tel:+212716892921">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-indigo-500/50 transition-colors">
<span className="iconify" data-icon="lucide:phone"></span>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Phone / WhatsApp</div>
<div className="font-medium">+212 716-892921</div>
</div>
</a>
</div>
</div>
<div className="bg-zinc-900/30 rounded-3xl p-8 border border-white/5">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase font-medium">Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase font-medium">Company</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase font-medium">Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase font-medium">Message</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold rounded-lg py-4 hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" type="button">
                            Send Request
                            <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:cpu"></span>
<span className="text-sm font-medium text-zinc-400">NEURAL</span>
</div>
<div className="text-xs text-zinc-600">
                    © 2024 Neural Inc. All rights reserved. Designed in Morocco.
                </div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
