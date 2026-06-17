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
      

<section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Couple sleeping peacefully" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&amp;fit=crop&amp;q=80&amp;w=2560"/>
<div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-white via-white/90 to-transparent z-10"></div>
<div className="relative z-20 max-w-4xl mx-auto mt-[-10vh]">
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-normal text-white tracking-tight">Meet LumiSense<br/> <span className="text-white/80">Adaptive Light Intelligence,<br/>Designed for Sleep</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-white/90 max-w-2xl mt-8 mr-auto ml-auto">A core feature of the Sleepal AI Lamp, LumiSense senses your environment, understands your sleep patterns, and adjusts light in real time — helping you fall asleep naturally, move safely at night, and wake at the right moment.</p>
<div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center hover:bg-black transition-colors sm:w-auto text-base font-medium text-white bg-zinc-900 w-full rounded-full pt-4 pr-8 pb-4 pl-8" href="#">
                    Start Your Sleep Upgrade
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-900 bg-white rounded-full hover:bg-zinc-50 transition-colors w-full sm:w-auto" href="#">
                    Explore How It Works
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative z-20">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-zinc-600 mb-8 tracking-wide">
                Sense <iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Understand <iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Adjust
            </div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-8">Light That Thinks Before You Do</h2>
<div className="text-lg md:text-xl text-zinc-500 max-w-3xl font-light leading-relaxed space-y-6 mb-20">
<p>LumiSense is not just lighting — it’s an intelligent system that continuously adapts to you.</p>
<p>By combining presence detection, circadian rhythm alignment, and precision lighting control, LumiSense creates the right light at the right moment — without requiring constant input.</p>
<p>It works quietly in the background, responding to your body, your environment, and your routines.</p>
</div>
<div className="w-full rounded-[2rem] overflow-hidden bg-zinc-100 aspect-[16/7]">
<img alt="Minimalist bedroom with warm lighting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F9F9F8]">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 lg:pr-8">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-8 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:walking-round-linear"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-6">Light That Responds Instantly</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light">
                    LumiSense detects when you enter, leave, or move around your space — especially during the night. Instead of harsh overhead lighting, the lamp activates soft, low-intensity illumination designed to guide your movement without disrupting your sleep state.
                </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Instant activation when movement is detected
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Low-brightness guidance lighting at night
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Designed to minimize sleep disruption
                    </li>
</ul>
</div>
<div className="flex-1 w-full">
<img alt="Soft ambient room lighting" className="w-full h-auto rounded-[2rem] shadow-xl" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
<div className="flex-1 lg:pl-8">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-8 text-blue-500">
<iconify-icon className="text-2xl" icon="solar:sun-linear"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-6">Wake Up at the Right Moment</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light">
                    Your body doesn’t wake up in a straight line — it cycles through stages. LumiSense works alongside your sleep rhythm, helping initiate your wake-up during lighter sleep phases using gradual light changes that feel natural, not forced.
                </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Supports natural wake timing
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Gradual light transitions
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Reduces abrupt wake stress
                    </li>
</ul>
</div>
<div className="flex-1 w-full relative">
<img alt="Morning sunlight through window" className="w-full h-auto rounded-[2rem] shadow-xl" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#252525] text-white">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 lg:pr-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
<iconify-icon className="text-base" icon="solar:moon-linear"></iconify-icon> Certified Eye Comfort
                </div>
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">Designed for Sleep Onset</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-10 font-light">
                    As your body prepares for sleep, light matters. LumiSense shifts into low blue-light output in the evening, creating a warmer, softer environment that supports your natural wind-down process.
                </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-lg text-zinc-300 font-light">
<iconify-icon className="text-xl text-indigo-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Reduced blue-light exposure at night
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-300 font-light">
<iconify-icon className="text-xl text-indigo-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Warm lighting profiles for relaxation
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-300 font-light">
<iconify-icon className="text-xl text-indigo-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Supports natural sleep preparation
                    </li>
</ul>
</div>
<div className="flex-1 w-full">
<img alt="Warm ambient evening light" className="w-full h-[600px] object-cover rounded-[2rem] shadow-2xl" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
<div className="flex-1 lg:pl-8">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-8 text-emerald-500">
<iconify-icon className="text-2xl" icon="solar:tuning-linear"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-6">Your Light, Your Way</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light">
                    LumiSense gives you complete control when you want it. Switch between white, warm, and RGB lighting — whether through the tactile dial on the lamp or through the Sleepal App.
                </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> White light for clarity and focus
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Warm light for relaxation
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> RGB for ambience and personalization
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Control via lamp dial or Sleepal App
                    </li>
</ul>
</div>
<div className="flex-1 w-full relative">
<img alt="Abstract colorful light adjustment" className="w-full h-auto rounded-[2rem] shadow-xl" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F9F9F8]">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 lg:pr-8">
<div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-8 text-amber-600">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-6">Soft Light, Engineered</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light">
                    Behind every lighting experience is how the light is delivered. LumiSense uses a triple-layer diffusion system to distribute light evenly, reducing glare and creating a smooth, comfortable illumination that feels natural in any environment.
                </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Even, uniform light distribution
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Reduced harshness and glare
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Designed for visual comfort
                    </li>
</ul>
</div>
<div className="flex-1 w-full relative">
<img alt="Soft room illumination" className="w-full h-auto rounded-[2rem] shadow-xl" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white text-center border-t border-zinc-200/50">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-zinc-900 mb-4">Beyond Lighting. Adaptive Intelligence.</h2>
<p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto mb-20">
                LumiSense brings together multiple systems into one seamless experience. It continuously learns from your patterns, responds to your environment, and adjusts lighting conditions automatically — creating a space that feels intuitive without requiring attention.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div className="flex flex-col items-center p-8 bg-black rounded-2xl shadow-xl border border-black text-white">
<iconify-icon className="text-3xl text-white mb-4" icon="solar:radar-linear"></iconify-icon>
<h4 className="text-base font-medium text-white">Presence Awareness</h4>
</div>

<div className="flex flex-col items-center p-8 bg-[#F9F9F8] rounded-2xl shadow-sm border border-zinc-100">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:sun-fog-linear"></iconify-icon>
<h4 className="text-base font-medium text-zinc-900">Circadian Alignment</h4>
</div>

<div className="flex flex-col items-center p-8 bg-[#F9F9F8] rounded-2xl shadow-sm border border-zinc-100">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:tuning-linear"></iconify-icon>
<h4 className="text-base font-medium text-zinc-900">Smart Lighting Control</h4>
</div>

<div className="flex flex-col items-center p-8 bg-[#F9F9F8] rounded-2xl shadow-sm border border-zinc-100">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:magic-stick-3-linear"></iconify-icon>
<h4 className="text-base font-medium text-zinc-900">Ambient Optimization</h4>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F9F9F8]">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
<div className="flex-1 lg:pl-8">
<div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mb-8 text-violet-600">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-6">Control When You Want It</h3>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light">
                    While LumiSense works automatically, you’re always in control. Use the Sleepal App to adjust lighting preferences, fine-tune your environment, or set custom modes that match your lifestyle.
                </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Simple, intuitive interface
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Manual override anytime
                    </li>
<li className="flex items-center gap-4 text-lg text-zinc-600 font-light">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Personalized lighting settings
                    </li>
</ul>
</div>
<div className="flex-1 w-full relative">
<img alt="Smartphone smart home app" className="w-full h-auto rounded-[2rem] shadow-xl" src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="flex-1 lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-6">Built on Sleep Science</h2>
<p className="text-lg text-zinc-500 font-light leading-relaxed mb-10">
                    LumiSense is designed around established principles of light exposure and sleep behavior — helping align your environment with how your body naturally functions.
                </p>
<div className="w-full aspect-[4/5] md:aspect-auto md:h-[480px] rounded-[2rem] overflow-hidden bg-zinc-100">
<img alt="Person sleeping peacefully" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="flex-1 lg:w-1/2 flex flex-col justify-center space-y-6">

<a className="group block p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all bg-white" href="#">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Article</span>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-base text-zinc-600" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<h4 className="text-xl font-medium text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">Stage N1 Sleep</h4>
<p className="text-base text-zinc-500 font-light leading-relaxed">
                        What is Stage N1 sleep? Understanding the transition from wakefulness into the sleep cycle, and how to adapt your environment.
                    </p>
</a>

<a className="group block p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all bg-white" href="#">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Clinical Study</span>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-base text-zinc-600" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<h4 className="text-xl font-medium text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">Circadian Rhythm vs Sleep Cycle</h4>
<p className="text-base text-zinc-500 font-light leading-relaxed">
                        Learn the differences between your biological clock and sleep cycle, how they interact, and why timing impacts rest.
                    </p>
</a>
</div>
</div>
</section>

    </>
  );
}
