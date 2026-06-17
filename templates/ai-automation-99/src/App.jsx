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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:bot" data-width="20"></span>
                AURA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Book Consultation
                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                AI Operations V2.0 is live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                Scale faster with <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">intelligent agents.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                We build custom AI infrastructures that automate complex workflows, reduce operational costs, and unlock 24/7 productivity for enterprise teams.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="shine-effect h-12 px-8 rounded-full bg-white text-black text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors w-full md:w-auto" href="#audit">
                    Start Transformation
                    <span className="iconify" data-icon="lucide:zap" data-width="16"></span>
</a>
<a className="h-12 px-8 rounded-full border border-neutral-800 bg-neutral-900/50 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-900 transition-colors w-full md:w-auto" href="#demo">
                    View Demo
                    <span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="border-y border-white/5 py-12 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-8">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tight text-white">ACME<span className="font-light text-neutral-400">CORP</span></span>
<span className="text-xl font-semibold tracking-tight text-white">VORTEX</span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-full"></span>KINETIC</span>
<span className="text-xl font-semibold tracking-tight text-white">STRATOS</span>
<span className="text-xl font-semibold tracking-tight text-white">PULSE</span>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Architecture of efficiency.</h2>
<p className="text-neutral-500 text-lg max-w-xl font-light">Modular AI components designed to integrate seamlessly into your existing stack.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass glass-border rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 bg-indigo-500/10 w-64 h-64 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:workflow" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Autonomous Workflows</h3>
<p className="text-sm text-neutral-500 font-light mb-8 max-w-sm">Connect your CRM, Email, and Project Management tools into a single, self-driving ecosystem.</p>

<div className="w-full bg-neutral-950 rounded-xl border border-neutral-800 p-4 font-mono text-xs text-neutral-400 shadow-2xl">
<div className="flex items-center gap-2 mb-3 border-b border-neutral-800 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-2 text-neutral-600">agent_config.json</span>
</div>
<div className="space-y-1">
<p><span className="text-purple-400">const</span> <span className="text-blue-400">agent</span> = <span className="text-purple-400">new</span> Agent({</p>
<p className="pl-4">role: <span className="text-green-400">'Lead Qualifier'</span>,</p>
<p className="pl-4">model: <span className="text-green-400">'gpt-4-turbo'</span>,</p>
<p className="pl-4">tools: [<span className="text-green-400">'Salesforce'</span>, <span className="text-green-400">'Gmail'</span>],</p>
<p className="pl-4">autonomy: <span className="text-orange-400">true</span></p>
<p>});</p>
</div>
</div>
</div>
</div>

<div className="glass glass-border rounded-3xl p-8 relative overflow-hidden group md:row-span-2">
<div className="absolute bottom-0 left-0 p-12 -ml-12 -mb-12 bg-emerald-500/10 w-64 h-64 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:message-square-code" data-width="24"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Support Bots</h3>
<p className="text-sm text-neutral-500 font-light mb-8">24/7 Customer resolution with human-like empathy and instant database retrieval.</p>
<div className="mt-auto space-y-3">
<div className="bg-neutral-900/80 border border-neutral-800 rounded-lg rounded-tl-none p-3 text-xs text-neutral-300 max-w-[85%]">
                                How can I integrate the API key?
                            </div>
<div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg rounded-tr-none p-3 text-xs text-indigo-200 ml-auto max-w-[85%]">
                                Navigate to Settings &gt; Developers. Here is a direct link...
                            </div>
<div className="bg-neutral-900/80 border border-neutral-800 rounded-lg rounded-tl-none p-3 text-xs text-neutral-300 max-w-[85%]">
                                Perfect, thanks!
                            </div>
</div>
</div>
</div>

<div className="glass glass-border rounded-3xl p-8 group hover:bg-neutral-900/40 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="24"></span>
</div>
<h3 className="text-lg text-white font-medium mb-2">Predictive Analytics</h3>
<p className="text-xs text-neutral-500 font-light">Turn raw data into actionable growth strategies automatically.</p>
</div>

<div className="glass glass-border rounded-3xl p-8 group hover:bg-neutral-900/40 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-lg text-white font-medium mb-2">Enterprise Security</h3>
<p className="text-xs text-neutral-500 font-light">SOC2 compliant data handling with private LLM deployment options.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="process">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">From Audit to Autonomy.</h2>
<p className="text-neutral-500 font-light mb-12">We don't just hand you a tool. We architect a complete operational overhaul tailored to your specific bottlenecks.</p>
<div className="space-y-8">

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center text-xs font-medium">01</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium mb-2">Workflow Audit</h4>
<p className="text-sm text-neutral-500">We analyze your current processes to identify high-value automation opportunities.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center text-xs font-medium">02</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium mb-2">Custom Development</h4>
<p className="text-sm text-neutral-500">Our engineers build bespoke agents tailored to your software stack and goals.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-indigo-600 border border-indigo-500 text-white flex items-center justify-center text-xs font-medium">03</div>
</div>
<div>
<h4 className="text-white font-medium mb-2">Deployment &amp; Scaling</h4>
<p className="text-sm text-neutral-500">Seamless integration with monitoring to ensure 99.9% uptime and continuous learning.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
<div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-neutral-500 font-mono">system_monitor.js</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400">Agent Status</span>
<span className="text-green-400 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>Active</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[92%]"></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-neutral-400">Tasks Automating</span>
<span className="text-white font-mono">1,240/hr</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-purple-500 h-full w-[78%]"></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-neutral-400">Cost Saved</span>
<span className="text-white font-mono">$4,200</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[65%]"></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
<div className="bg-black/40 rounded-lg p-3">
<div className="text-xs text-neutral-500 mb-1">Response Time</div>
<div className="text-lg text-white font-medium">45ms</div>
</div>
<div className="bg-black/40 rounded-lg p-3">
<div className="text-xs text-neutral-500 mb-1">Accuracy</div>
<div className="text-lg text-white font-medium">99.8%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Flexible Engagement</h2>
<p className="text-neutral-500 text-lg">Choose the model that fits your scaling needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass glass-border rounded-2xl p-8 flex flex-col">
<h3 className="text-white font-medium text-lg mb-2">Starter</h3>
<div className="text-3xl font-medium text-white mb-6 tracking-tight">$2,500<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8 text-sm text-neutral-400 flex-1">
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> 2 Custom Workflows</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Basic Support Bot</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Weekly Maintenance</li>
</ul>
<a className="w-full py-3 rounded-lg border border-neutral-700 text-white text-sm font-medium hover:bg-neutral-800 transition-colors text-center" href="#">Get Started</a>
</div>

<div className="relative rounded-2xl p-8 flex flex-col bg-neutral-900 border border-indigo-500/50 shadow-[0_0_50px_-15px_rgba(99,102,241,0.2)]">
<div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-2xl"></div>
<h3 className="text-white font-medium text-lg mb-2">Growth</h3>
<div className="text-3xl font-medium text-white mb-6 tracking-tight">$5,000<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8 text-sm text-neutral-300 flex-1">
<li className="flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> 5 Custom Workflows</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Advanced Omni-channel Bot</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Data Analytics Dashboard</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Priority Support</li>
</ul>
<a className="w-full py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors text-center shadow-lg shadow-indigo-900/20" href="#">Scale Now</a>
</div>

<div className="glass glass-border rounded-2xl p-8 flex flex-col">
<h3 className="text-white font-medium text-lg mb-2">Enterprise</h3>
<div className="text-3xl font-medium text-white mb-6 tracking-tight">Custom</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-400 flex-1">
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Unlimited Workflows</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Private LLM Hosting</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Dedicated Engineer</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> SLA Guarantee</li>
</ul>
<a className="w-full py-3 rounded-lg border border-neutral-700 text-white text-sm font-medium hover:bg-neutral-800 transition-colors text-center" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden bg-indigo-900/10 border border-indigo-500/20 px-8 py-16 md:px-16 md:py-20 text-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
<h2 className="relative text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to automate the boring stuff?</h2>
<p className="relative text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">Book a free 15-minute discovery call. We'll outline exactly how much time and money AI can save your business.</p>
<div className="relative flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors">Book Discovery Call</button>
<button className="px-8 py-4 bg-transparent border border-neutral-700 text-white rounded-full font-medium text-sm hover:bg-neutral-900 transition-colors">Email Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:bot"></span>
                        AURA
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Building the autonomous workforce of tomorrow, today. San Francisco, CA.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8">
<p className="text-xs text-neutral-600">© 2024 Aura Automation Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
