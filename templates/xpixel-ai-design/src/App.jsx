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



        // Mouse Move Glow Effect
        document.addEventListener('mousemove', (e) => {
            const glow = document.getElementById('mouse-glow');
            if(glow) {
                const x = e.clientX;
                const y = e.clientY;
                // Use translate3d for better performance
                glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
                glow.style.opacity = "1";
            }
        });

        // Modal Logic
        function toggleModal(show) {
            const overlay = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');
            
            if (show) {
                // Reset to form state when opening
                form.classList.remove('hidden', 'opacity-0');
                form.classList.add('flex', 'opacity-100');
                
                success.classList.add('hidden', 'opacity-0');
                success.classList.remove('flex', 'opacity-100');

                overlay.classList.remove('overlay-enter');
                overlay.classList.add('overlay-active');
                content.classList.remove('modal-enter');
                content.classList.add('modal-active');
            } else {
                overlay.classList.remove('overlay-active');
                overlay.classList.add('overlay-enter');
                content.classList.remove('modal-active');
                content.classList.add('modal-enter');
            }
        }

        function submitForm() {
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');

            // Fade out form
            form.classList.remove('opacity-100');
            form.classList.add('opacity-0');

            setTimeout(() => {
                // Hide form, show success container
                form.classList.remove('flex');
                form.classList.add('hidden');
                
                success.classList.remove('hidden');
                success.classList.add('flex');
                
                // Trigger reflow
                void success.offsetWidth;

                // Fade in success
                success.classList.remove('opacity-0');
                success.classList.add('opacity-100');
            }, 300); // Wait for fade out
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
      

<div className="bg-glow-top"></div>

<div id="mouse-glow"></div>
<div className="fixed inset-0 bg-grid pointer-events-none -z-10 h-screen w-full"></div>

<nav className="flex sticky z-40 transition-all duration-300 w-full max-w-7xl pt-4 pr-6 pb-4 pl-6 top-0 items-center justify-between glass-nav mt-4 rounded-2xl border border-white/5">

<a className="block opacity-90 hover:opacity-100 transition-opacity" href="#">
<img alt="7K Mobile" className="filter w-auto h-8 object-cover invert saturate-100 brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9787fa3a-40b5-4f18-9e3c-666ac2cfcee2_320w.png"/>
</a>

<button className="transition-all duration-300 active:scale-95 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm font-medium text-white bg-transparent border-white/20 border rounded-full pt-2 pr-5 pb-2 pl-5 shadow-none" onclick="toggleModal(true)">
            Join Waitlist
        </button>
</nav>

<main className="md:space-y-24 z-10 w-full max-w-7xl pt-12 pr-6 pb-20 pl-6 relative space-y-16">

<section className="relative">
<div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-20 gap-x-8 gap-y-8 justify-between">

<div className="lg:w-[60%] space-y-6">
<span className="inline-block text-[10px] uppercase text-xs font-semibold text-blue-300 tracking-wide bg-blue-500/10 border-blue-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3 shadow-[0_0_15px_rgba(59,130,246,0.1)]">For ealry product or influancer</span>
<h1 className="leading-[1.1] md:text-7xl bg-clip-text text-5xl font-semibold text-white tracking-tighter bg-gradient-to-br from-white via-white to-gray-500">
                        Build the insights your business needs to grow
                    </h1>
</div>

<div className="lg:w-[35%] flex flex-col lg:items-end lg:text-right text-left py-2 space-y-6 items-center lg:pt-16">
<p className="leading-relaxed text-lg text-gray-400 tracking-tight max-w-sm">We create scroll-stopping content so your ad spend actually performs</p>
<button className="bg-white text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 border border-transparent" onclick="toggleModal(true)">
                        Get Started
                    </button>
</div>
</div>

<div className="flex w-full pb-8 relative backdrop-blur-none scale-100 justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[70%] bg-blue-600/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<img alt="7K Mobile App Interface" className="md:max-w-[500px] lg:max-w-[540px] transform hover:scale-[1.01] transition-transform duration-500 z-10 w-full max-w-[340px] object-contain relative shadow-2xl scale-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27df7da9-6123-458c-872a-e516c5d63356_1600w.png" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}/>

<div className="absolute top-[40%] left-[24%] z-50 animate-bounce duration-[3000ms] hidden md:block">
<div className="bg-[#0A0A0A] border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 flex !scale-[1.75] origin-right transform-gpu gap-x-2 gap-y-2 items-center shadow-2xl">
<div className="text-green-400 bg-green-500/10 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 flex border border-green-500/20">
<iconify-icon className="" height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] leading-tight font-medium text-gray-500">Latency</div>
<div className="leading-tight text-xs font-semibold text-white">Grow faster</div>
</div>
</div>
</div>

<div className="absolute top-[62%] right-[24%] z-50 animate-bounce duration-[3000ms] delay-500 hidden md:block">
<div className="bg-[#0A0A0A] border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 flex !scale-[1.75] origin-left transform-gpu gap-x-2 gap-y-2 items-center shadow-2xl">
<div className="text-blue-400 bg-blue-500/10 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 flex border border-blue-500/20">
<iconify-icon className="" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] leading-tight font-medium text-gray-500">Security</div>
<div className="leading-tight text-xs font-semibold text-white">Audited</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full items-center">
<div className="text-center mb-10">
</div>
<h2 className="md:text-6xl -translate-y-16 text-3xl font-semibold text-white tracking-tighter">Our experties</h2><section className="flex flex-col w-full pt-12 pr-4 pb-12 pl-4 items-center">
<div className="text-center mb-16">
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-7xl auto-rows-[220px]">
<div className="group relative overflow-hidden md:col-span-2 md:row-span-2 rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="Social Media" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-8 flex flex-col justify-end h-full">
<iconify-icon className="text-blue-300 mb-4" height="40" icon="solar:smartphone-2-linear" width="40"></iconify-icon>
<h3 className="text-2xl font-bold text-white">Social Media Campaigns</h3>
<p className="text-gray-300 text-sm mt-2 max-w-sm">Strategic content creation and community management <br/> that turns followers into brand ambassadors.</p>
</div>
</div>
<div className="group relative overflow-hidden md:row-span-2 rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="Video Editing" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 flex flex-col justify-end h-full">
<iconify-icon className="text-purple-300 mb-4" height="32" icon="solar:clapperboard-edit-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold text-white">Video Editing</h3>
<p className="text-gray-300 text-xs mt-2">Professional post-production <br/> tailored for high-impact storytelling.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="Photo Editing" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute inset-0 bg-slate-950/40 p-6 flex flex-col justify-center gap-2">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Photo Editing</h3>
<p className="text-gray-200 text-[10px] leading-tight">Pixel-perfect retouching <br/> and color grading services.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="Branding" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute inset-0 bg-slate-950/40 p-6 flex flex-col justify-center gap-2">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">Branding</h3>
<p className="text-gray-200 text-[10px] leading-tight">Visual identities designed <br/> to stand out in a crowded market.</p>
</div>
</div>
<div className="group relative overflow-hidden sm:col-span-2 rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="Web Dev" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent p-8 flex flex-col justify-center">
<h3 className="text-xl font-bold text-white">Website Development</h3>
<p className="text-gray-300 text-xs mt-1">High-performance digital experiences <br/> built for speed and conversion.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="E-commerce" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute inset-0 bg-slate-950/60 p-6 flex flex-col justify-end">
<h3 className="text-sm font-bold text-white">E-commerce</h3>
<p className="text-gray-400 text-[10px]">Scalable online stores <br/> for modern retail.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="SEO" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20e?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute inset-0 bg-slate-950/60 p-6 flex flex-col justify-end">
<h3 className="text-sm font-bold text-white">SEO</h3>
<p className="text-gray-400 text-[10px]">Dominating search results <br/> with expert optimization.</p>
</div>
</div>
<div className="group relative overflow-hidden sm:col-span-2 rounded-3xl border border-white/10 bg-slate-900 transition-all duration-500">
<img alt="AI" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent p-8 flex flex-col justify-center">
<h3 className="text-xl font-bold text-white">AI Agents</h3>
<p className="text-gray-300 text-xs mt-1">Intelligent automation to streamline <br/> your business workflows and growth.</p>
</div>
</div>
</div>
</section>
</section>

<section className="flex flex-col items-center">
<div className="text-center max-w-2xl mb-16 space-y-4">
<h2 className="md:text-6xl text-3xl font-semibold text-white tracking-tighter">Why XPixel?</h2>
<p className="text-base text-gray-400">
                    Built different. Built native. Built for power users who demand speed.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="flex flex-col group hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 glass-card rounded-[2rem] pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 transition-opacity group-hover:bg-blue-500/10"></div>
<div className="space-y-4">
<div className="flex group-hover:scale-110 transition-transform duration-300 text-blue-300 bg-blue-500/10 w-12 h-12 rounded-xl items-center justify-center border border-blue-500/20">
<iconify-icon className="" height="22" icon="solar:cpu-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">AI content</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            Infrastructure built with Sui tech stack. Proud to be a builder on the fastest chain.
                        </p>
</div>
<div className="mt-8 h-16 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg relative overflow-hidden opacity-50 border border-blue-500/10">
<div className="flex opacity-60 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-blue-400 w-full h-[1px]"></div>
<div className="absolute w-[1px] h-full bg-blue-400"></div>
</div>
</div>
</div>

<div className="flex flex-col group hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 glass-card rounded-[2rem] pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -z-10 transition-opacity group-hover:bg-indigo-500/10"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20">
<iconify-icon height="22" icon="solar:layers-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">DeFi Suite Built-in</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            Swap, LP, Staking &amp; Lending, Margin, Perps, Portfolio Tracking... All included.
                        </p>
</div>
<div className="flex gap-2 opacity-95 mt-8 gap-x-2 gap-y-2">
<div className="border-x bg-indigo-500/10 w-full h-12 border-indigo-500/20 rounded-t-lg border-t"></div>
<div className="border-x bg-indigo-500/20 w-full h-8 border-indigo-500/30 rounded-t-lg border-t mt-auto"></div>
<div className="border-x bg-indigo-500/10 w-full h-10 border-indigo-500/20 rounded-t-lg border-t mt-auto"></div>
</div>
</div>

<div className="flex flex-col group hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 glass-card rounded-[2rem] pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -z-10 transition-opacity group-hover:bg-orange-500/10"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-300 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
<iconify-icon className="" height="22" icon="solar:link-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Deep Integration</h3>
<p className="leading-relaxed text-sm text-gray-400">
                            We never walk alone. 7K Mobile integrates partner SDKs directly for seamless use.
                        </p>
</div>
<div className="overflow-hidden h-16 mt-8 relative opacity-70">
<svg className="absolute bottom-0 text-orange-500/30 w-full" height="50" preserveaspectratio="none" viewbox="0 0 100 40">
<path className="" d="M0 40 Q 25 10 50 25 T 100 20" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex flex-col group hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 glass-card rounded-[2rem] pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -z-10 transition-opacity group-hover:bg-cyan-500/10"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
<iconify-icon height="22" icon="solar:lock-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Ika MPC Network</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            Non-custodial settlement across chains with secure distributed signing infrastructure (2PC-MPC).
                        </p>
</div>
<div className="mt-8 flex justify-center opacity-80">
<div className="relative w-24 h-12 overflow-hidden">
<div className="absolute w-20 h-20 border-[8px] border-cyan-900/30 rounded-full top-0 left-2"></div>
<div className="absolute w-20 h-20 border-[8px] border-transparent border-t-cyan-400 border-l-cyan-400 rounded-full top-0 left-2 rotate-45 transition-all duration-1000 group-hover:rotate-90 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
</div>
</div>
</div>

<div className="flex flex-col group hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 glass-card rounded-[2rem] pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl -z-10 transition-opacity group-hover:bg-teal-500/10"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform duration-300 border border-teal-500/20">
<iconify-icon height="22" icon="solar:shield-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Non-custodial exchange</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            Retain users's custody of assets on native chains while trading with the speed and UX of a centralized platform.
                        </p>
</div>
<div className="mt-8 flex justify-center opacity-80">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-teal-500/30"></div>
<div className="w-3 h-3 rounded-full bg-teal-500/50"></div>
<div className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
</div>
</div>
</div>

<div className="flex flex-col group hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 glass-card rounded-[2rem] pt-8 pr-8 pb-8 pl-8 justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl -z-10 transition-opacity group-hover:bg-pink-500/10"></div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-300 group-hover:scale-110 transition-transform duration-300 border border-pink-500/20">
<iconify-icon height="22" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Hand-on Features</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            zkLogin, Address Book, Magic Links, Private Transfer...
                        </p>
</div>
<div className="mt-8 flex justify-end">
<div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center animate-pulse border border-pink-500/20">
<span className="text-[10px] font-bold text-pink-300 uppercase">New</span>
</div>
</div>
</div>
</div>
</section>

<section className="glass-card w-full rounded-[2.5rem] pt-12 pr-12 pb-12 pl-12 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5 text-center gap-x-8 gap-y-8">
<div className="md:pt-0 pt-4">
<div className="leading-[1.1] md:text-7xl text-5xl font-semibold text-white tracking-tighter mb-2">$17B+</div>
<div className="uppercase text-sm font-medium text-gray-500 tracking-wider">Content views</div>
</div>
<div className="pt-4 md:pt-0">
<div className="leading-[1.1] md:text-7xl text-5xl font-semibold tracking-tighter text-white mb-2">5.9M</div>
<div className="uppercase text-sm font-medium text-gray-500 tracking-wider">Provided followers</div>
</div>
<div className="md:pt-0 pt-4">
<div className="leading-[1.1] md:text-7xl text-5xl font-semibold text-white tracking-tighter mb-2">#2</div>
<div className="uppercase text-sm font-medium text-gray-500 tracking-wider">DEX Aggregator on Sui</div>
</div>
</div>
</section>

<section className="text-center pt-8 space-y-8">
<div className="space-y-4">
<div className="inline-flex text-[10px] uppercase text-xs font-bold text-blue-300 tracking-wide bg-blue-500/10 border-blue-500/20 border rounded-full mb-2 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_10px_rgba(59,130,246,0.15)] items-center">Start growing</div>
<h2 className="md:text-6xl bg-clip-text text-3xl font-semibold text-white tracking-tighter bg-gradient-to-b from-white to-gray-400">Be First in line!</h2>
<p className="text-base text-gray-400 max-w-md mx-auto">
                    Join the waitlist and get early access when we launch. Limited spots available.
                </p>
</div>
<button className="bg-white text-black px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:scale-95" onclick="toggleModal(true)">
                Join Waitlist
            </button>
</section>
</main>

<footer className="w-full border-t border-white/5 bg-[#030303] py-12 mt-auto relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-sm text-gray-600 font-medium">
                © 2026 7K DeFi. Building the future of DeFi on Sui.
            </div>
<div className="flex gap-8 items-center">

<a className="text-gray-600 hover:text-white transition-colors duration-300" href="#">
<div className="w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full object-contain scale-[0.8] origin-center" fill="currentColor" viewbox="0 0 1226.37 1226.37">
<path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z"></path>
</svg>
</div>
</a>

<a className="text-gray-600 hover:text-white transition-colors duration-300" href="#">
<div className="w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full object-contain" fill="currentColor" version="1.1" viewbox="0 0 512 512">
<path d="M433.43,93.222c-32.633-14.973-67.627-26.005-104.216-32.324c-0.666-0.122-1.332,0.183-1.675,0.792   c-4.501,8.005-9.486,18.447-12.977,26.655c-39.353-5.892-78.505-5.892-117.051,0c-3.492-8.39-8.658-18.65-13.179-26.655   c-0.343-0.589-1.009-0.894-1.675-0.792c-36.568,6.298-71.562,17.33-104.216,32.324c-0.283,0.122-0.525,0.325-0.686,0.589   c-66.376,99.165-84.56,195.893-75.64,291.421c0.04,0.467,0.303,0.914,0.666,1.198c43.793,32.161,86.215,51.685,127.848,64.627   c0.666,0.203,1.372-0.04,1.796-0.589c9.848-13.449,18.627-27.63,26.154-42.543c0.444-0.873,0.02-1.909-0.888-2.255   c-13.925-5.282-27.184-11.723-39.939-19.036c-1.009-0.589-1.09-2.032-0.161-2.723c2.684-2.011,5.369-4.104,7.932-6.217   c0.464-0.386,1.11-0.467,1.655-0.224c83.792,38.257,174.507,38.257,257.31,0c0.545-0.264,1.191-0.182,1.675,0.203   c2.564,2.113,5.248,4.226,7.952,6.237c0.928,0.691,0.867,2.134-0.141,2.723c-12.755,7.456-26.014,13.754-39.959,19.016   c-0.908,0.345-1.312,1.402-0.867,2.275c7.689,14.892,16.468,29.073,26.134,42.523c0.404,0.569,1.13,0.813,1.796,0.609   c41.835-12.941,84.257-32.466,128.05-64.627c0.384-0.284,0.626-0.711,0.666-1.178c10.676-110.441-17.881-206.376-75.7-291.421   C433.954,93.547,433.712,93.344,433.43,93.222z M171.094,327.065c-25.227,0-46.014-23.16-46.014-51.604   s20.383-51.604,46.014-51.604c25.831,0,46.417,23.364,46.013,51.604C217.107,303.905,196.723,327.065,171.094,327.065z    M341.221,327.065c-25.226,0-46.013-23.16-46.013-51.604s20.383-51.604,46.013-51.604c25.832,0,46.417,23.364,46.014,51.604   C387.235,303.905,367.054,327.065,341.221,327.065z"></path>
</svg>
</div>
</a>

<a className="text-gray-600 hover:text-white transition-colors duration-300" href="#">
<div className="w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full object-contain" fill="currentColor" viewbox="0 0 112 122">
<path d="M76.4132 0.19725C77.9165 -0.52845 79.5689 0.863691 79.1363 2.49141L66.9239 48.4398C67.1021 48.5292 67.2673 48.6464 67.4129 48.7888L68.5459 49.8966L87.5923 31.5057C87.9551 31.1554 88.4372 30.96 88.9386 30.96H110.046C111.805 30.96 112.665 33.1325 111.392 34.3618L81.8413 62.8956L110.07 90.4953C111.331 91.7285 110.469 93.8886 108.715 93.8886H88.3514C87.8507 93.8886 87.3691 93.6937 87.0065 93.3442L61.5074 68.7688L51.5812 105.776C51.4602 106.227 51.1849 106.62 50.8044 106.885L29.604 121.645C28.1116 122.684 26.1477 121.282 26.6141 119.511L55.1188 11.246C55.2659 10.6871 55.6478 10.2217 56.1636 9.97272L76.4132 0.19725Z" fill="currentColor"></path>
<path d="M27.0095 94.3579C27.8931 94.3579 28.6663 93.7567 28.894 92.8927L44.1065 35.159C44.4367 33.906 43.5035 32.6767 42.2221 32.6767H5.27432C4.39743 32.6767 3.62836 33.2689 3.3946 34.1243L0.0717075 46.2824C-0.271892 47.5396 0.666538 48.7823 1.95143 48.7823H20.2218C21.5006 48.7823 22.4333 50.0069 22.1079 51.2584L11.5447 91.8818C11.2192 93.1333 12.152 94.3579 13.4307 94.3579H27.0095Z" fill="currentColor"></path>
</svg>
</div>
</a>
</div>
</div>
</footer>


<div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-all duration-300 overlay-enter" id="modal-overlay" onclick="toggleModal(false)"></div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-sm px-4 transition-all duration-300 modal-enter" id="modal-content">
<div className="bg-[#0A0A0A] rounded-[2rem] shadow-2xl p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden border border-white/10 min-h-[420px] justify-center">

<div className="w-full flex flex-col items-center transition-opacity duration-300 opacity-100" id="modal-form">

<div className="mb-6">
<img alt="7K" className="h-10 w-auto object-contain invert brightness-0 saturate-100 filter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b2e12d6-456f-4c10-9db1-e243c0d82ac6_320w.png"/>
</div>

<h3 className="text-3xl font-bold tracking-tight text-white mb-2">mobile.7k.ag/you</h3>

<p className="font-quicksand text-base text-gray-400 font-medium mb-8 leading-snug max-w-[260px]">
                    Enter your info &amp; we'll contact you the instant we launch
                </p>

<div className="w-full space-y-4">
<input className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 font-medium focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="Enter your Email" type="email"/>
<div className="relative w-full">
<input className="w-full pl-5 pr-14 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 font-medium focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="Your Username" type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition-colors" onclick="submitForm()">
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="2.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full flex-col items-center hidden opacity-0 transition-opacity duration-300 absolute inset-0 justify-center p-8 text-center" id="modal-success">

<div className="mb-8">
<img alt="7K" className="h-10 w-auto object-contain invert brightness-0 saturate-100 filter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b2e12d6-456f-4c10-9db1-e243c0d82ac6_320w.png"/>
</div>

<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">Thank you!</h3>

<p className="font-quicksand text-base text-gray-400 font-medium mb-10 leading-snug max-w-[280px] mx-auto">
                    Your spot in the future of Sui is reserved. We'll send an invite to your inbox as soon as we're ready for you.
                </p>

<button className="transition-all duration-300 active:scale-95 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm font-semibold text-white bg-transparent border-white/20 border-2 rounded-full px-10 py-2.5 shadow-none" onclick="toggleModal(false)">
                    Close
                </button>
</div>
</div>
</div>


    </>
  );
}
