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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Modal Logic
        const modal = document.getElementById('signup-modal');
        const backdrop = document.getElementById('signup-backdrop');
        const content = document.getElementById('signup-content');
        const formContainer = document.getElementById('signup-form-container');
        const successState = document.getElementById('signup-success');

        function openSignUp() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Allow CSS to register display change before animating opacity
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                backdrop.classList.add('opacity-100');
                
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            });
            
            // Reset to form state
            formContainer.classList.remove('hidden');
            successState.classList.add('hidden');
            successState.classList.remove('flex');
            formContainer.querySelector('form').reset();
        }

        function closeSignUp() {
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }

        function handleSignUp(e) {
            e.preventDefault();
            formContainer.classList.add('hidden');
            successState.classList.remove('hidden');
            successState.classList.add('flex');
        }
    
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
      

<div className="fixed inset-0 z-0 opacity-60 pointer-events-none" id="spline-container">
<iframe className="w-full h-full border-0" frameborder="0" height="100%" src="https://my.spline.design/robotarm-Xyg1nYgb7X6d4FT2mccwqF4G/" width="100%"></iframe>
</div>

<header className="fixed top-0 w-full z-40 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter animate-logo" href="#">Aigentify</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm transition-colors hover:text-zinc-50" href="#services">Services</a>
<a className="text-sm transition-colors hover:text-zinc-50" href="#process">Process</a>
<a className="text-sm transition-colors hover:text-zinc-50" href="#about">About</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm transition-colors hover:text-zinc-50" onclick="openSignUp()">Sign Up</button>
<a className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95" href="#">Book Audit</a>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="signup-modal">

<div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="signup-backdrop" onclick="closeSignUp()"></div>

<div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl scale-95 opacity-0 transition-all duration-300 mx-4" id="signup-content">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors" onclick="closeSignUp()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div id="signup-form-container">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-50 mb-2">Create an account</h3>
<p className="text-sm text-zinc-400 mb-6">Join Aigentify and start automating today.</p>
<form className="space-y-4" onsubmit="handleSignUp(event)">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1">Full Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1">Email Address</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1">Password</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" minlength="8" placeholder="••••••••" required="" type="password"/>
</div>
<label className="flex items-center gap-3 cursor-pointer pt-2 group">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center transition-all group-hover:border-zinc-500">
<iconify-icon className="text-zinc-50 opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-400">I agree to the Terms of Service</span>
</label>
<button className="w-full bg-zinc-50 text-zinc-950 px-4 py-2.5 rounded-lg text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] mt-4 flex items-center justify-center gap-2" type="submit">
                        Create Account
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<p className="text-xs text-zinc-500 text-center mt-6">
                    Already have an account? <a className="text-zinc-300 hover:text-zinc-50 transition-colors" href="#">Sign in</a>
</p>
</div>

<div className="hidden flex-col items-center justify-center py-8 text-center" id="signup-success">
<div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<iconify-icon className="text-3xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-50 mb-2">Welcome aboard!</h3>
<p className="text-sm text-zinc-400 mb-6">Your account has been created successfully. We've sent a verification link to your email.</p>
<button className="w-full bg-zinc-800 text-zinc-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-zinc-700" onclick="closeSignUp()">
                    Close Window
                </button>
</div>
</div>
</div>

<main className="flex-grow relative z-10">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute inset-0 glow pointer-events-none z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                    Now integrating custom LLMs
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-50 leading-tight mb-6">
                    Automate your operations.<br/>
<span className="text-gradient">Scale effortlessly.</span>
</h1>
<p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We build bespoke AI agents and autonomous workflows that handle your repetitive tasks, reduce operational costs, and multiply your team's output.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-zinc-200 flex items-center justify-center gap-2" href="#">
                        Get a Free AI Audit
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-md text-sm font-medium transition-colors hover:bg-zinc-900 hover:text-zinc-50 flex items-center justify-center" href="#services">
                        Explore Services
                    </a>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-900 bg-zinc-950/50 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium tracking-wide text-zinc-500 uppercase mb-8">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="text-xl font-semibold tracking-tighter text-zinc-300">ACME Corp</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-300">GlobalTech</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-300">Nexus</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-300">Synergy</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-300">Vanguard</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50 mb-4">Capabilities</h2>
<p className="text-base text-zinc-400 max-w-2xl">From customer support to complex data analysis, we deploy AI systems that integrate seamlessly into your existing tech stack.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-zinc-700">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-50">
<iconify-icon className="text-xl" icon="solar:bot-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-50 mb-2">Autonomous Agents</h3>
<p className="text-sm leading-relaxed text-zinc-400">Deploy intelligent agents capable of handling complex customer inquiries, qualifying leads, and scheduling meetings 24/7.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-zinc-700">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-50">
<iconify-icon className="text-xl" icon="solar:git-network-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-50 mb-2">Workflow Automation</h3>
<p className="text-sm leading-relaxed text-zinc-400">Connect your disparate tools. We build pipelines that automatically move data, trigger actions, and keep your systems in sync.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all hover:bg-zinc-900 hover:border-zinc-700">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-50">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-50 mb-2">Data Processing</h3>
<p className="text-sm leading-relaxed text-zinc-400">Extract structured data from unstructured documents, emails, and web pages automatically with high accuracy.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/30 backdrop-blur-sm relative z-10" id="process">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50 mb-4">How we work</h2>
<p className="text-base text-zinc-400">A streamlined approach to implementing AI in your business.</p>
</div>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-50 font-medium text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
<h4 className="text-base font-medium tracking-tight text-zinc-50 mb-1">Discovery &amp; Audit</h4>
<p className="text-sm text-zinc-400">We analyze your current operations to identify high-ROI automation opportunities.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-50 font-medium text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
<h4 className="text-base font-medium tracking-tight text-zinc-50 mb-1">Architecture</h4>
<p className="text-sm text-zinc-400">We design a scalable system architecture connecting LLMs to your specific software stack.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-50 font-medium text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
<h4 className="text-base font-medium tracking-tight text-zinc-50 mb-1">Deployment &amp; Optimization</h4>
<p className="text-sm text-zinc-400">We build, test, and deploy the solution, continuously refining it based on real-world performance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-t border-zinc-900 z-10">
<div className="absolute inset-0 bg-zinc-900/20 pointer-events-none backdrop-blur-sm"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-50 mb-6">Ready to work smarter?</h2>
<p className="text-base text-zinc-400 mb-8">Stop wasting human capital on tasks a machine can do. Let's build your automated future.</p>
<a className="inline-flex items-center justify-center gap-2 bg-zinc-50 text-zinc-950 px-8 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95" href="#">
                    Schedule a Consultation
                    <iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-medium tracking-tighter animate-logo inline-block mb-4" href="#">Aigentify</a>
<p className="text-sm text-zinc-500 max-w-sm">Building the next generation of business operations through intelligent, scalable AI automation.</p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-50 mb-4 tracking-tight">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">AI Agents</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Workflow Automation</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Data Extraction</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Custom LLM Integration</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-50 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2024 Aigentify. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
