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
      

<div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 50% -20%, rgba(0,0,0,0.04) 0%, transparent 70%)'}}></div>

<nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-neutral-200/60">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter text-neutral-900 uppercase hover:opacity-70 transition-opacity" href="#">OMNICHAT</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#benefits">Benefits</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#audience">Use Cases</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 active:shadow-none" href="#">Get Started</a>
</div>
</nav>
<main className="flex-grow relative z-10">

<section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white shadow-sm mb-8 hover:shadow-md hover:border-neutral-300 transition-all cursor-default group">
<div className="relative flex items-center justify-center">
<div className="absolute w-2 h-2 bg-neutral-900 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
<iconify-icon className="text-neutral-900" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">Smart Wakidoki System</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Collaborate without <br className="hidden md:block"/> breaking focus.
            </h1>
<p className="text-lg md:text-xl font-normal text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                The AI-powered voice operating system for teams. Communicate through wireless earbuds using only voice commands. No phones, no screens, zero distractions.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto text-sm font-medium bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" href="#">
                    Start your workspace
                    <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group w-full sm:w-auto text-sm font-medium text-neutral-900 bg-white px-6 py-3 rounded-full border border-neutral-200 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg transition-transform duration-300 group-hover:scale-110" icon="solar:play-circle-linear"></iconify-icon>
                    Watch demo
                </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-200/60">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-neutral-900 mb-4">The cost of connection.</h2>
<p className="text-base font-normal text-neutral-500 mb-6 leading-relaxed">
                        In a fast-paced team environment, getting a quick update often means picking up a phone or switching to a messaging app. This breaks concentration, slows down workflows, and makes quick coordination surprisingly difficult.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group cursor-default">
<iconify-icon className="text-neutral-400 mt-1 transition-colors group-hover:text-red-500" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600 transition-colors group-hover:text-neutral-900">Constant screen distractions break deep work states.</span>
</li>
<li className="flex items-start gap-3 group cursor-default">
<iconify-icon className="text-neutral-400 mt-1 transition-colors group-hover:text-red-500" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600 transition-colors group-hover:text-neutral-900">Time wasted switching between tools and tasks.</span>
</li>
<li className="flex items-start gap-3 group cursor-default">
<iconify-icon className="text-neutral-400 mt-1 transition-colors group-hover:text-red-500" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600 transition-colors group-hover:text-neutral-900">Clunky coordination for teams sharing physical spaces.</span>
</li>
</ul>
</div>

<div className="relative h-[400px] rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col items-center justify-center group cursor-pointer transition-shadow hover:shadow-md">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLCAwLCAwLCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50 transition-opacity duration-700 group-hover:opacity-100"></div>

<div className="bg-neutral-100 rounded-full p-1 flex items-center mb-10 relative z-20 border border-neutral-200/50">
<div className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow transition-transform duration-500 ease-in-out group-hover:translate-x-full border border-neutral-200/50"></div>
<div className="px-6 py-2 text-xs font-medium text-neutral-900 relative z-10 transition-colors duration-500 group-hover:text-neutral-500">Visual UI</div>
<div className="px-6 py-2 text-xs font-medium text-neutral-500 relative z-10 transition-colors duration-500 group-hover:text-neutral-900">Voice UI</div>
</div>

<div className="relative z-10 transition-all duration-500 transform group-hover:-translate-y-8 group-hover:opacity-0 group-hover:scale-95 flex flex-col items-center gap-3">
<div className="w-56 h-36 border border-neutral-200 rounded-xl bg-white flex flex-col p-3 gap-3 shadow-lg">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-100"></div>
<div className="w-16 h-3 bg-neutral-200 rounded-sm"></div>
</div>
<div className="w-full h-12 bg-neutral-50 rounded-lg border border-neutral-100 mt-2"></div>
<div className="flex gap-2 mt-auto">
<div className="w-8 h-6 bg-neutral-100 rounded"></div>
<div className="w-8 h-6 bg-neutral-100 rounded"></div>
</div>
</div>
<div className="text-xs font-medium text-neutral-400 mt-2">Distracting &amp; Cluttered</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-500 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none mt-16">
<div className="w-24 h-24 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-xl relative">
<div className="absolute inset-0 rounded-full bg-neutral-900 animate-ping opacity-20" style={{animationDuration: '2s'}}></div>
<div className="absolute inset-0 rounded-full bg-neutral-900 animate-ping opacity-20" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
<iconify-icon className="text-4xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<div className="mt-8 text-sm font-medium text-neutral-900 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-neutral-200 shadow-sm">Seamless &amp; Invisible</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-200/60" id="how-it-works">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-neutral-900 mb-4">Seamless, invisible communication.</h2>
<p className="text-base font-normal text-neutral-500 max-w-2xl mx-auto">
                    Omnichat operates as a background audio environment. By default, it's completely silent. You only hear what you need to, when you need to.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-start gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 transition-colors duration-300 group-hover:bg-neutral-900">
<iconify-icon className="text-neutral-600 text-xl transition-colors duration-300 group-hover:text-white" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tighter mb-2 transition-colors duration-300">1. Connect</h3>
<p className="text-sm font-normal text-neutral-500">Your team joins a shared workspace audio environment. Everyone has a unique voice ID.</p>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-start gap-4" style={{transitionDelay: '50ms'}}>
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 transition-colors duration-300 group-hover:bg-neutral-900">
<iconify-icon className="text-neutral-600 text-xl transition-colors duration-300 group-hover:text-white" icon="solar:user-speak-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tighter mb-2 transition-colors duration-300">2. Initiate</h3>
<p className="text-sm font-normal text-neutral-500">Simply say a teammate's name. They receive a subtle voice prompt in their ear.</p>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-start gap-4" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 transition-colors duration-300 group-hover:bg-neutral-900">
<iconify-icon className="text-neutral-600 text-xl transition-colors duration-300 group-hover:text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tighter mb-2 transition-colors duration-300">3. Accept</h3>
<p className="text-sm font-normal text-neutral-500">The receiver says "Yes" to instantly open a private, isolated communication channel.</p>
</div>
</div>

<div className="group p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-start gap-4" style={{transitionDelay: '150ms'}}>
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 transition-colors duration-300 group-hover:bg-neutral-900">
<iconify-icon className="text-neutral-600 text-xl transition-colors duration-300 group-hover:text-white" icon="solar:stop-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tighter mb-2 transition-colors duration-300">4. Conclude</h3>
<p className="text-sm font-normal text-neutral-500">Say "Stop" to close the channel. Everyone instantly returns to their distraction-free silent mode.</p>
</div>
</div>
</div>

<div className="mt-8 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 cursor-default group">
<div className="flex items-center gap-5 w-full">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center shrink-0 border border-neutral-100 group-hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-xl text-neutral-900 transition-transform duration-500 group-hover:rotate-180" icon="solar:infinity-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 tracking-tighter">Multi-Person Capabilities</h4>
<p className="text-sm font-normal text-neutral-500">Call multiple teammates at once by naming them consecutively to create ad-hoc group channels.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-200/60 bg-neutral-50" id="benefits">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-neutral-900 mb-12 text-center">Engineered for deep work.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors duration-300" icon="solar:hands-drop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tighter mb-3">Hands-Free</h3>
<p className="text-sm font-normal text-neutral-500 leading-relaxed">Keep your hands on the keyboard, tools, or task. Never pick up a device to communicate again.</p>
</div>
<div className="group bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors duration-300" icon="solar:smartphone-rotate-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tighter mb-3">Zero Distractions</h3>
<p className="text-sm font-normal text-neutral-500 leading-relaxed">By removing visual interfaces, you eliminate the temptation to check notifications or social media.</p>
</div>
<div className="group bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors duration-300" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tighter mb-3">Rapid Coordination</h3>
<p className="text-sm font-normal text-neutral-500 leading-relaxed">Resolve blockers in seconds rather than waiting for someone to see your text message.</p>
</div>
<div className="group bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors duration-300" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tighter mb-3">Increased Output</h3>
<p className="text-sm font-normal text-neutral-500 leading-relaxed">Teams stay in flow states longer, directly resulting in higher quality work and greater productivity.</p>
</div>
<div className="group bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors duration-300" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tighter mb-3">Real-Time Sync</h3>
<p className="text-sm font-normal text-neutral-500 leading-relaxed">Get answers exactly when you need them without scheduling a call or walking across the office.</p>
</div>
<div className="group bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors duration-300" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tighter mb-3">AI-Managed Routing</h3>
<p className="text-sm font-normal text-neutral-500 leading-relaxed">Our smart voice OS handles the routing, connections, and permissions seamlessly in the background.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-200/60" id="audience">
<div className="flex flex-col md:flex-row gap-12 items-start justify-between">
<div className="md:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-neutral-900 mb-4">Built for teams that move fast.</h2>
<p className="text-base font-normal text-neutral-500">Perfect for dynamic environments of 5-20 people where continuous, frictionless collaboration is essential for success.</p>
</div>
<div className="md:w-2/3 grid grid-cols-2 gap-x-4 gap-y-2">
<div className="group flex items-center gap-3 py-3 px-4 -mx-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer border border-transparent hover:border-neutral-200/60">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">Software Development</span>
</div>
<div className="group flex items-center gap-3 py-3 px-4 -mx-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer border border-transparent hover:border-neutral-200/60">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" icon="solar:rocket-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">Startup Workspaces</span>
</div>
<div className="group flex items-center gap-3 py-3 px-4 -mx-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer border border-transparent hover:border-neutral-200/60">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" icon="solar:calendar-date-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">Event Planning</span>
</div>
<div className="group flex items-center gap-3 py-3 px-4 -mx-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer border border-transparent hover:border-neutral-200/60">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" icon="solar:clapperboard-play-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">Production Crews</span>
</div>
<div className="group flex items-center gap-3 py-3 px-4 -mx-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer border border-transparent hover:border-neutral-200/60">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" icon="solar:diploma-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">School Faculty</span>
</div>
<div className="group flex items-center gap-3 py-3 px-4 -mx-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer border border-transparent hover:border-neutral-200/60">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" icon="solar:earth-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300">Remote Collaborators</span>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-900 mb-6">
                The future voice OS <br/> for your team.
            </h2>
<p className="text-base text-neutral-500 mb-10 max-w-xl mx-auto">
                Transform how your team communicates. Experience the clarity and focus of a screen-free collaborative environment today.
            </p>
<a className="group inline-flex text-sm font-medium bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-2" href="#">
                Deploy Omnichat
                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</section>
</main>

<footer className="border-t border-neutral-200 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-neutral-900 uppercase mb-4 block hover:opacity-70 transition-opacity" href="#">OMNICHAT</a>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                    Smart Wakidoki AI Voice Collaboration System. Elevating team focus and productivity.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 tracking-wide uppercase mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Features</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Integrations</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Hardware</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 tracking-wide uppercase mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">About Us</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Blog</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 tracking-wide uppercase mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Terms of Service</a></li>
<li><a className="hover:text-neutral-900 hover:translate-x-1 inline-block transition-transform" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-200/60 pt-8">
<p className="text-xs text-neutral-400">© 2023 Omnichat Inc. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 sm:mt-0">
<a className="text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5 transition-all" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5 transition-all" href="#"><iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5 transition-all" href="#"><iconify-icon className="text-lg" icon="solar:discord-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
