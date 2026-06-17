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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-indigo-400 text-2xl group-hover:text-white transition-colors duration-300" data-icon="solar:atom-bold-duotone"></span>
<span className="text-lg font-medium tracking-tight text-white">Aura</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#testimonials">Stories</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-slate-300 transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" href="#">Get Aura</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">

<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[100px] animate-glow"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-fuchsia-600/10 rounded-full blur-[80px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] border border-white/5 rounded-full opacity-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] border border-white/5 rounded-full opacity-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] border border-white/5 rounded-full opacity-5"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-indigo-300">Aura AI 2.0 is live</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Meet Aura.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-white">Focus regained.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Experience the clarity of clutter-free communication. The AI-powered chat interface that filters the noise and highlights what matters.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">

<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-slate-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black" href="#">
<span className="mr-2">Start Chatting</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear"></span>
</a>

<a className="group inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium text-white transition-all duration-300 hover:bg-white/10" href="#">
<span className="mr-2">Watch Demo</span>
<span className="iconify text-indigo-400" data-icon="solar:play-circle-bold-duotone"></span>
</a>
</div>

<div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 mt-8">
<div>
<p className="text-2xl font-medium text-white tracking-tight">100k+</p>
<p className="text-sm text-slate-500">Active Users</p>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div>
<p className="text-2xl font-medium text-white tracking-tight">4.9/5</p>
<p className="text-sm text-slate-500">App Rating</p>
</div>
</div>
</div>

<div className="relative flex justify-center">
<div className="relative w-full max-w-md aspect-square">

<div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_10s_linear_infinite]">
<div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
<div className="absolute inset-8 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_indigo]"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 blur-xl opacity-50"></div>
<div className="relative w-40 h-40 rounded-3xl bg-black border border-white/10 flex items-center justify-center shadow-2xl shadow-indigo-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
<span className="iconify text-6xl text-white" data-icon="solar:chat-round-dots-bold-duotone"></span>
</div>

<div className="absolute -right-4 top-1/4 glass-panel px-4 py-3 rounded-xl animate-bounce [animation-duration:3s]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
<span className="iconify text-white text-sm" data-icon="solar:user-bold"></span>
</div>
<div>
<div className="h-2 w-20 bg-white/20 rounded-full mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute -left-4 bottom-1/4 glass-panel px-4 py-3 rounded-xl animate-bounce [animation-duration:4s]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
<span className="iconify text-white text-sm" data-icon="solar:shield-check-bold"></span>
</div>
<div className="text-xs font-medium text-white">Encrypted</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce text-slate-600">
<span className="iconify text-2xl" data-icon="solar:mouse-minimalistic-linear"></span>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-slate-500 mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="iconify text-3xl text-white" data-icon="logos:stripe"></span>
<span className="iconify text-3xl text-white" data-icon="logos:vercel"></span>
<span className="iconify text-3xl text-white" data-icon="logos:linear"></span>
<span className="iconify text-3xl text-white" data-icon="simple-icons:openai"></span>
<span className="iconify text-3xl text-white" data-icon="logos:discord"></span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Intelligence built in.</h2>
<p className="text-lg text-slate-400">Aura isn't just a chat app. It's an intelligent workspace that organizes your conversations and summarizes what matters.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<span className="iconify text-2xl text-indigo-400" data-icon="solar:magic-stick-3-bold-duotone"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Smart Summaries</h3>
<p className="text-lg text-slate-400 leading-relaxed">Missed 500 messages? Aura condenses them into a 3-bullet point summary instantly.</p>
</div>

<div className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify text-2xl text-purple-400" data-icon="solar:shield-keyhole-bold-duotone"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Zero-Knowledge</h3>
<p className="text-lg text-slate-400 leading-relaxed">Your data is encrypted on your device. We can't read your messages even if we wanted to.</p>
</div>

<div className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<span className="iconify text-2xl text-blue-400" data-icon="solar:bell-bing-bold-duotone"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Quiet Mode</h3>
<p className="text-lg text-slate-400 leading-relaxed">Aura intelligently mutes non-urgent pings, letting only critical updates breakthrough.</p>
</div>
</div>

<div className="mt-6 glass-panel rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-4">Seamless across every device.</h3>
<p className="text-lg text-slate-400 mb-8">Start a conversation on your phone, finish it on your desktop. The state syncs instantly with &lt; 10ms latency.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-green-400" data-icon="solar:check-circle-bold"></span>
<span>Native macOS &amp; Windows apps</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-green-400" data-icon="solar:check-circle-bold"></span>
<span>iOS &amp; Android support</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-green-400" data-icon="solar:check-circle-bold"></span>
<span>Offline-first architecture</span>
</li>
</ul>
</div>
<div className="relative h-64 md:h-full bg-gradient-to-b from-slate-800 to-black rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<span className="iconify text-8xl text-white/20" data-icon="solar:devices-bold-duotone"></span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">Loved by thousands of<br/>product teams.</h2>
<p className="text-lg text-slate-400 mb-8">We built Aura to scratch our own itch. Now it's the daily driver for teams at top tech companies.</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-black"></div>
<div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-black"></div>
<div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-black"></div>
<div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-black flex items-center justify-center text-xs text-black font-bold">+2k</div>
</div>
<span className="text-sm text-slate-400">Join the community</span>
</div>
</div>
<div className="space-y-6">

<div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
</div>
<p className="text-lg text-slate-200 mb-6">"Finally, a chat app that doesn't feel like a casino. The focus features in Aura have doubled my deep work time."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">E</div>
<div>
<div className="text-sm font-medium text-white">Elena R.</div>
<div className="text-xs text-slate-500">Product Designer</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-6 rounded-2xl translate-x-4 md:translate-x-8">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
</div>
<p className="text-lg text-slate-200 mb-6">"The AI summaries are terrifyingly accurate. I come back from vacation and catch up in 5 minutes instead of 5 hours."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white">M</div>
<div>
<div className="text-sm font-medium text-white">Marcus T.</div>
<div className="text-xs text-slate-500">Engineering Lead</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Simple, transparent pricing.</h2>
<p className="text-lg text-slate-400">No hidden fees. No credit card required for the trial.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="glass-panel rounded-3xl p-8 flex flex-col">
<div className="mb-4">
<span className="text-lg font-medium text-slate-300">Starter</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">$0</span>
<span className="text-slate-500">/month</span>
</div>
<p className="text-sm text-slate-400 mb-8">Perfect for individuals and hobbyists.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="solar:check-circle-bold"></span>
                            Message history: 30 days
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="solar:check-circle-bold"></span>
                            Basic encryption
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="solar:check-circle-bold"></span>
                            1 GB File Storage
                        </li>
</ul>
<a className="w-full py-3 rounded-full border border-white/20 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#">Start Free</a>
</div>

<div className="bg-white rounded-3xl p-8 flex flex-col transform md:-translate-y-4 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
<div className="mb-4">
<span className="text-lg font-medium text-black">Pro</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-black">$12</span>
<span className="text-slate-500">/month</span>
</div>
<p className="text-sm text-slate-600 mb-8">For power users who need clarity.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-800">
<span className="iconify text-indigo-500" data-icon="solar:check-circle-bold"></span>
                            Unlimited history
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-800">
<span className="iconify text-indigo-500" data-icon="solar:check-circle-bold"></span>
                            AI Summaries (Unlimited)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-800">
<span className="iconify text-indigo-500" data-icon="solar:check-circle-bold"></span>
                            Priority Support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-800">
<span className="iconify text-indigo-500" data-icon="solar:check-circle-bold"></span>
                            100 GB File Storage
                        </li>
</ul>
<a className="w-full py-3 rounded-full bg-black text-center text-sm font-medium text-white hover:bg-slate-800 transition-colors" href="#">Get Pro</a>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col">
<div className="mb-4">
<span className="text-lg font-medium text-slate-300">Team</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">$29</span>
<span className="text-slate-500">/user</span>
</div>
<p className="text-sm text-slate-400 mb-8">Collaborate with your entire organization.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="solar:check-circle-bold"></span>
                            SSO &amp; Advanced Security
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="solar:check-circle-bold"></span>
                            Admin Dashboard
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-slate-500" data-icon="solar:check-circle-bold"></span>
                            Unlimited Storage
                        </li>
</ul>
<a className="w-full py-3 rounded-full border border-white/20 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-indigo-400 text-xl" data-icon="solar:atom-bold-duotone"></span>
<span className="text-lg font-medium text-white">Aura</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Aura brings clarity to communication. Designed in California, built for the world.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-slate-600">© 2023 Aura Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="solar:brand-twitter-bold"></span></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="solar:brand-github-bold"></span></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="solar:brand-instagram-bold"></span></a>
</div>
</div>
</div>

<div className="w-full overflow-hidden mt-16">
<div className="text-[12vw] font-bold text-white/[0.03] text-center leading-none tracking-widest whitespace-nowrap select-none">
                CUSTOMIZE. DEPLOY. GROW.
            </div>
</div>
</footer>

    </>
  );
}
