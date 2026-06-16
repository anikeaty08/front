import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      // Testimonials autoplay
      const stack = document.getElementById('testimonials-stack');
      const dotsWrap = document.getElementById('progress-dots');
      if (stack && dotsWrap) {
        const cards = Array.from(stack.querySelectorAll('.testimonial-card'));
        const dots = Array.from(dotsWrap.children);
        let index = 0;
        let timer;

        const apply = () => {
          cards.forEach((el, i) => {
            el.classList.remove('active', 'next-1', 'next-2', 'hidden');
            const pos = (i - index + cards.length) % cards.length;
            if (pos === 0) el.classList.add('active');
            else if (pos === 1) el.classList.add('next-1');
            else if (pos === 2) el.classList.add('next-2');
            else el.classList.add('hidden');
          });
          dots.forEach((d, i) => {
            d.classList.remove('bg-white', 'bg-white/30');
            d.style.width = '6px';
            if (i === index) { d.classList.add('bg-white'); d.style.width = '16px'; }
            else d.classList.add('bg-white/30');
          });
        };

        const next = () => { index = (index + 1) % cards.length; apply(); };
        const go = (i) => { index = i % cards.length; apply(); };
        const start = () => { stop(); timer = setInterval(next, 3000); };
        const stop = () => timer && clearInterval(timer);

        cards.forEach((c, i) => c.addEventListener('click', () => { go(i); start(); }));
        dots.forEach((d, i) => d.addEventListener('click', () => { go(i); start(); }));

        apply(); start();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="BhoqrigscYbD7NN1fwcp"></div>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="BhoqrigscYbD7NN1fwcp"></div>

</div></div>

<div className="flex items-center justify-center gap-10">

<div className="relative w-[393px] h-[852px] bg-black rounded-[60px] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-10"></div>

<div className="w-full h-full bg-[#0a0a0b] rounded-[48px] overflow-hidden relative">

<div className="absolute top-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="absolute inset-0 -z-20 opacity-[0.45]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-12 -left-12 h-[300px] w-[300px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)'}}></div>
</div>

<div className="h-full overflow-y-auto px-5 py-8 scrollbar-hide" style={{scrollbarWidth: 'none'}}>

<div className="flex items-center justify-between text-white text-xs mb-8">
<span>9:41</span>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="solar:wifi-router-bold"></span>
<span className="iconify" data-icon="solar:battery-charge-bold"></span>
</div>
</div>

<div className="flex justify-center mb-4">
<div className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sky-300" data-icon="solar:atom-bold-duotone"></span>
<span className="text-xs text-sky-200/90">Features</span>
</div>
</div>

<h1 className="text-center text-2xl font-semibold tracking-tight text-white mb-3">
                        Accelerate Your Sales
                    </h1>
<p className="text-center text-sm text-white/70 mb-6">
                        Track, automate, and scale your pipeline
                    </p>

<div className="space-y-4">

<section className="border-gradient before:rounded-2xl overflow-hidden rounded-2xl p-4 relative [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="border-gradient before:rounded-xl rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-white/80 text-xs mb-2">
<span className="iconify h-3.5 w-3.5 text-sky-300" data-icon="solar:chart-bold-duotone"></span>
<span className="font-medium">Realtime KPIs</span>
</div>
<div className="space-y-2">
<div className="border-gradient before:rounded-lg rounded-lg p-2 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2">
<img alt="US" className="h-4 w-4 rounded-full ring-1 ring-white/20" src="https://flagcdn.com/us.svg"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-white/90">United States</p>
<p className="text-[10px] text-white/60">$89k</p>
</div>
<div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500" style={{width: '76%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
<h3 className="mt-3 text-base font-semibold tracking-tight text-white">Real‑Time Tracking</h3>
<p className="mt-1 text-xs text-white/70">
                                See KPIs and revenue trends as they happen
                            </p>
</section>

<section className="border-gradient before:rounded-2xl overflow-hidden rounded-2xl p-4 relative [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="border-gradient before:rounded-xl rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-white/80 text-xs mb-2">
<span className="iconify h-3.5 w-3.5 text-emerald-300" data-icon="solar:widget-bold-duotone"></span>
<span className="font-medium">Integrations</span>
</div>
<div className="grid grid-cols-4 gap-2">
<div className="border-gradient before:rounded-lg flex flex-col items-center gap-1 rounded-lg p-2 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4 text-white/80" data-icon="solar:inbox-bold-duotone"></span>
<span className="text-[9px] text-white/70">Email</span>
</div>
<div className="border-gradient before:rounded-lg flex flex-col items-center gap-1 rounded-lg p-2 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4 text-white/80" data-icon="solar:chat-round-bold-duotone"></span>
<span className="text-[9px] text-white/70">Chat</span>
</div>
<div className="border-gradient before:rounded-lg flex flex-col items-center gap-1 rounded-lg p-2 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4 text-white/80" data-icon="solar:calendar-bold-duotone"></span>
<span className="text-[9px] text-white/70">Cal</span>
</div>
<div className="border-gradient before:rounded-lg flex flex-col items-center gap-1 rounded-lg p-2 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4 text-white/80" data-icon="solar:bolt-bold-duotone"></span>
<span className="text-[9px] text-white/70">Auto</span>
</div>
</div>
</div>
<h3 className="mt-3 text-base font-semibold tracking-tight text-white">Collaborate Seamlessly</h3>
<p className="mt-1 text-xs text-white/70">
                                Connect your entire stack in one place
                            </p>
</section>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] bg-black rounded-[60px] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-10"></div>

<div className="w-full h-full bg-[#0a0a0b] rounded-[48px] overflow-hidden relative">

<div className="absolute top-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="absolute inset-0 -z-20 opacity-[0.45]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(600px 400px at 50% 30%, #000 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(600px 400px at 50% 30%, #000 60%, transparent 100%)'}}></div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-12 -left-12 h-[300px] w-[300px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)'}}></div>
<div className="absolute bottom-0 right-0 h-[250px] w-[300px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)'}}></div>
</div>

<div className="h-full overflow-y-auto px-5 py-8 scrollbar-hide" style={{scrollbarWidth: 'none'}}>

<div className="flex items-center justify-between text-white text-xs mb-6">
<span>9:41</span>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="solar:wifi-router-bold"></span>
<span className="iconify" data-icon="solar:battery-charge-bold"></span>
</div>
</div>

<div className="mb-6">
<span className="bg-center text-sm text-white/60 block w-[120px] h-[32px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d257331d-dbc9-4389-9767-ff5d0e2512eb_1600w.png)] bg-cover"></span>
</div>

<div className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-2.5 py-1.5 mb-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="h-5 w-5 grid place-items-center rounded-lg bg-emerald-500/10 text-emerald-400">
<span className="iconify text-xs" data-icon="solar:shield-user-bold-duotone"></span>
</div>
<span className="text-xs text-white/70">Live interactive hero</span>
</div>

<h1 className="text-4xl font-semibold text-white tracking-tight mb-4 leading-tight">
                        Liquid glass meets
                        <span className="text-transparent bg-clip-text block" style={{backgroundImage: 'linear-gradient(180deg, #fff, rgba(255,255,255,0.65))'}}>dynamic grids</span>
</h1>
<p className="text-sm leading-relaxed text-white/60 mb-5">
                        A responsive hero that blends a hover-reactive icon grid with floating glass panels. Subtle depth, crisp type, and delightful motion.
                    </p>

<div className="flex flex-wrap gap-2 mb-5">
<div className="border-gradient before:rounded-xl inline-flex rounded-xl pt-1.5 pr-2.5 pb-1.5 pl-2.5 gap-1.5 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sm" data-icon="solar:shield-user-bold-duotone"></span>
<span className="text-[10px] text-white/70">GPU-smooth</span>
</div>
<div className="border-gradient before:rounded-xl inline-flex rounded-xl pt-1.5 pr-2.5 pb-1.5 pl-2.5 gap-1.5 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sm" data-icon="solar:target-bold-duotone"></span>
<span className="text-[10px] text-white/70">Glass UI</span>
</div>
<div className="border-gradient before:rounded-xl inline-flex rounded-xl pt-1.5 pr-2.5 pb-1.5 pl-2.5 gap-1.5 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sm" data-icon="solar:magic-stick-3-bold-duotone"></span>
<span className="text-[10px] text-white/70">Hover trails</span>
</div>
</div>

<div className="border-gradient before:rounded-2xl overflow-hidden aspect-[16/12] rounded-2xl p-3 relative mb-5 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">

<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="relative w-full max-w-[240px] h-[280px]" id="testimonials-stack">

<div className="testimonial-card pointer-events-auto active" data-index="0">
<div className="border-gradient before:rounded-xl rounded-xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="p-3">
<div className="inline-flex w-7 h-7 rounded-lg items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sm" data-icon="solar:chat-round-bold-duotone"></span>
</div>
<p className="mt-2 text-[10px] text-white/70 leading-relaxed">
                                                "The hover grid adds a tactile feel without overwhelming the layout."
                                            </p>
<div className="mt-3 flex items-center gap-2 pt-2 border-t border-white/10">
<img alt="Portrait" className="h-6 w-6 rounded-lg ring-2 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/066580a6-c095-413e-9b45-18f0ea77397e_320w.webp"/>
<div>
<div className="text-[10px] font-medium text-white tracking-tight">Avery Lin</div>
<div className="text-[9px] text-white/60">Design Lead</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto next-1" data-index="1">
<div className="border-gradient before:rounded-xl rounded-xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="p-3">
<div className="inline-flex w-7 h-7 rounded-lg items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sm" data-icon="solar:document-text-bold-duotone"></span>
</div>
<p className="leading-relaxed text-[10px] text-white/70 mt-2">
                                                "Glass panels feel premium, and remain readable above the motion."
                                            </p>
<div className="mt-3 flex items-center gap-2 pt-2 border-t border-white/10">
<img alt="Portrait" className="h-6 w-6 rounded-lg ring-2 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31b3e971-6384-4e96-ac8a-6aa0a13d8963_320w.webp"/>
<div>
<div className="text-[10px] font-medium text-white tracking-tight">Jon Vega</div>
<div className="text-[9px] text-white/60">PM, Core</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto next-2" data-index="2">
<div className="border-gradient before:rounded-xl rounded-xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="p-3">
<div className="inline-flex w-7 h-7 rounded-lg items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sm" data-icon="solar:star-bold-duotone"></span>
</div>
<p className="leading-relaxed text-[10px] text-white/70 mt-2">
                                                "Smooth animation timing creates a natural, delightful experience."
                                            </p>
<div className="mt-3 flex items-center gap-2 pt-2 border-t border-white/10">
<img alt="Portrait" className="h-6 w-6 rounded-lg ring-2 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6673cec-22b1-4ee3-b2a4-a816700254c4_320w.webp"/>
<div>
<div className="text-[10px] font-medium text-white tracking-tight">Maya Chen</div>
<div className="text-[9px] text-white/60">Creative Director</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-auto absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" id="progress-dots">
<div className="w-1.5 h-1.5 rounded-full transition-all duration-300 active-dot bg-white" style={{width: '16px'}}></div>
<div className="w-1.5 h-1.5 rounded-full transition-all duration-300 bg-white/30" style={{width: '6px'}}></div>
<div className="w-1.5 h-1.5 rounded-full transition-all duration-300 bg-white/30" style={{width: '6px'}}></div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{background: 'radial-gradient(400px 200px at 50% 40%, rgba(255,255,255,0.07), transparent 60%)'}}></div>
</div>

<div className="flex flex-col gap-2.5 mb-5">
<button className="border-gradient before:rounded-xl group inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white px-4 py-2.5 text-sm font-medium tracking-tight transition-all">
<span className="iconify text-base" data-icon="solar:play-bold-duotone"></span>
<span>See live demo</span>
</button>
<button className="border-gradient before:rounded-xl group inline-flex transition-all text-sm text-white tracking-tight rounded-xl py-2.5 px-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] gap-2 items-center justify-center">
<span className="iconify text-base" data-icon="solar:arrow-right-bold-duotone"></span>
<span>Get started</span>
</button>
</div>

<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"></div>

<div className="grid grid-cols-3 gap-2.5">
<div className="border-gradient before:rounded-2xl rounded-2xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="text-[10px] text-white/60">Latency</div>
<div className="mt-0.5 text-base font-medium tracking-tight text-white">~12ms</div>
</div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="text-[10px] text-white/60">Icons</div>
<div className="mt-0.5 text-base font-medium tracking-tight text-white">700+</div>
</div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="text-[10px] text-white/60">FPS</div>
<div className="mt-0.5 text-base font-medium tracking-tight text-white">60</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] bg-black rounded-[60px] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-10"></div>

<div className="w-full h-full bg-[#0a0a0b] rounded-[48px] overflow-hidden relative">

<div className="absolute top-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="absolute inset-0 -z-20 opacity-[0.45]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)'}}></div>
</div>

<div className="h-full overflow-y-auto px-5 py-8 scrollbar-hide" style={{scrollbarWidth: 'none'}}>

<div className="flex items-center justify-between text-white text-xs mb-8">
<span>9:41</span>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="solar:wifi-router-bold"></span>
<span className="iconify" data-icon="solar:battery-charge-bold"></span>
</div>
</div>

<div className="text-center mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-white">Simple pricing</h2>
<p className="mt-1.5 text-sm text-white/60">Start free. Scale when ready.</p>
</div>

<div className="space-y-3 mb-8">

<div className="border-gradient before:rounded-2xl rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<h3 className="text-base font-medium text-white">Starter</h3>
<p className="mt-0.5 text-xs text-white/60">For individuals</p>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$0</span>
<span className="text-sm text-white/60">/mo</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-white/70">
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    2 pipelines
                                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    Realtime dashboards
                                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    Basic automations
                                </li>
</ul>
<button className="border-gradient before:rounded-xl mt-3 w-full rounded-xl bg-white text-zinc-900 px-3 py-2 text-xs font-medium transition">Get started</button>
</div>

<div className="border-gradient before:rounded-2xl relative rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute -top-2 left-1/2 -translate-x-1/2 border-gradient before:rounded-full inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] text-amber-200 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">Popular</div>
<h3 className="text-base font-medium text-white">Growth</h3>
<p className="mt-0.5 text-xs text-white/60">For growing teams</p>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$29</span>
<span className="text-sm text-white/60">/mo</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-white/70">
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    Unlimited pipelines
                                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    Advanced KPIs
                                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    Priority support
                                </li>
</ul>
<button className="border-gradient before:rounded-xl mt-3 w-full rounded-xl bg-white text-zinc-900 px-3 py-2 text-xs font-medium transition">Start trial</button>
</div>

<div className="border-gradient before:rounded-2xl rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<h3 className="text-base font-medium text-white">Enterprise</h3>
<p className="mt-0.5 text-xs text-white/60">For organizations</p>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">Custom</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-white/70">
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    SSO + SCIM
                                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    Dedicated CSM
                                </li>
<li className="flex items-center gap-2">
<span className="iconify h-3.5 w-3.5 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
                                    Custom SLAs
                                </li>
</ul>
<button className="border-gradient before:rounded-xl mt-3 w-full rounded-xl px-3 py-2 text-xs font-medium transition [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] text-white">Contact sales</button>
</div>
</div>

<div className="space-y-2">
<h3 className="text-sm font-medium text-white mb-3">Common questions</h3>
<details className="border-gradient before:rounded-xl group rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-xs font-medium text-white/90">
                                How does billing work?
                                <span className="border-gradient before:rounded-md grid h-5 w-5 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-3 w-3 transition-transform group-open:rotate-180" data-icon="solar:alt-arrow-down-bold-duotone"></span>
</span>
</summary>
<p className="mt-2 text-[10px] text-white/70">Monthly or annual billing. Cancel anytime.</p>
</details>
<details className="border-gradient before:rounded-xl group rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-xs font-medium text-white/90">
                                Can I change plans?
                                <span className="border-gradient before:rounded-md grid h-5 w-5 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-3 w-3 transition-transform group-open:rotate-180" data-icon="solar:alt-arrow-down-bold-duotone"></span>
</span>
</summary>
<p className="mt-2 text-[10px] text-white/70">Yes, upgrade or downgrade anytime.</p>
</details>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
