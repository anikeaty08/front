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



        // Intersection Observer for Reveal Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            // Simple FAQ Accordion logic
            const faqToggles = document.querySelectorAll('.faq-toggle');
            
            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const answer = toggle.nextElementSibling;
                    const icon = toggle.querySelector('iconify-icon');
                    
                    // Close all others
                    faqToggles.forEach(otherToggle => {
                        if (otherToggle !== toggle) {
                            otherToggle.nextElementSibling.style.maxHeight = null;
                            otherToggle.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                        }
                    });

                    // Toggle current
                    if (answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        icon.style.transform = 'rotate(45deg)';
                    }
                });
            });
        });
    
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
      

<section className="relative max-w-[96rem] mx-auto p-2 md:p-6 min-h-screen flex flex-col" id="hero">
<div className="relative flex-1 rounded-3xl overflow-hidden border border-white/10 bg-[#050505] glow-card flex flex-col justify-center">

<div className="absolute inset-0 z-0">
<img alt="Interior" className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3c8b1b5-0146-4359-99ac-d635afd038d6_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="absolute inset-0 bg-grid-pattern mask-image:linear-gradient(to_bottom,black,transparent)] opacity-30"></div>
</div>

<div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50">
<div className="flex items-center justify-between px-4 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg shadow-black/50">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 text-xs text-white tracking-widest uppercase">SP</span>
<div className="hidden sm:block text-xs uppercase tracking-widest text-white/80">Stillpoint</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#experiences">Therapies</a>
<a className="hover:text-white transition-colors" href="#membership">Membership</a>
<a className="hover:text-white transition-colors" href="#studio">The Studio</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform" href="#">
                        Book Session
                    </a>
<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/80 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Guided Recovery Experiences
                </div>
<h1 className="reveal reveal-delay-1 text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white font-medium leading-[0.95] max-w-5xl">
                    Restore your body with calm, structured recovery.
                </h1>
<p className="reveal reveal-delay-2 mt-8 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
                    A restorative space for mobility, contrast therapy, breathwork, and nervous system reset — designed to help active people recover with more intention.
                </p>
<div className="reveal reveal-delay-3 mt-12 flex items-center gap-4">
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all" href="#experiences">
<iconify-icon height="20" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="sticky top-32">
<p className="text-xs uppercase tracking-widest text-white/40 mb-4 reveal">The Approach</p>
<h2 className="text-3xl md:text-5xl tracking-tight text-white font-medium leading-tight reveal reveal-delay-1">
                    The science of recovery, translated into a premium ritual.
                </h2>
<p className="mt-6 text-base text-white/60 leading-relaxed reveal reveal-delay-2">
                    Recovery is treated as a designed experience, not an afterthought. Each element supports better movement, deeper exhale, and a more restorative transition back into daily life.
                </p>
<div className="mt-10 flex items-center gap-4 reveal reveal-delay-3">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors" href="#">
                        Explore Therapies <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col gap-8">
<p className="text-base text-white/60 leading-relaxed reveal">
                    Every session is structured around restoration, mobility, and nervous system downshift. Contrast, guided movement, and breath are brought together to create a recovery rhythm that feels calm, elevated, and repeatable.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="group relative h-72 rounded-2xl overflow-hidden glow-card reveal reveal-delay-1">
<img alt="Contrast" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d71cc83-2714-4c6c-a432-9d2fd65fbcfe_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
<div>
<span className="text-xs text-white/50 block mb-1">01</span>
<h3 className="text-base text-white font-medium tracking-tight">Contrast Suite</h3>
</div>
<span className="text-xs text-white/50">Heat / Cold</span>
</div>
</div>
<div className="group relative h-72 rounded-2xl overflow-hidden glow-card reveal reveal-delay-2">
<img alt="Mobility" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96c79e30-2e87-4d9e-bf46-84e831415410_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
<div>
<span className="text-xs text-white/50 block mb-1">02</span>
<h3 className="text-base text-white font-medium tracking-tight">Mobility Ritual</h3>
</div>
<span className="text-xs text-white/50">Breath / Restore</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/10" id="experiences">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
<div className="max-w-2xl">
<p className="text-xs uppercase tracking-widest text-white/40 mb-4">Core Experiences</p>
<h2 className="text-4xl md:text-5xl tracking-tight text-white font-medium leading-tight">
                    Designed to be felt,<br/>not just listed.
                </h2>
</div>
<p className="text-base text-white/60 max-w-sm">
                Explore the four core experiences structured to restore capacity and regulate stress.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 max-w-[96rem] mx-auto border-y border-white/10">

<div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a15293f0-97d1-4dc6-b1ce-d5f3cb42fe84_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

<div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
<span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Ritual 01</span>
<h3 className="text-3xl text-white tracking-tight font-medium">Contrast</h3>
</div>

<div className="absolute inset-0 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-end translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<div className="w-full h-px bg-white/20 mb-6"></div>
<h3 className="text-2xl text-white tracking-tight font-medium mb-4">Contrast Suite</h3>
<p className="text-sm text-white/60 mb-6 leading-relaxed">Alternating heat and cold exposure designed to increase circulation, reduce residual fatigue, and restore alertness.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Cold Plunge</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Infrared Heat</span>
</div>
</div>
</div>

<div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19453e4f-9a3f-4b6e-a99d-4abc941bb6e4_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
<div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
<span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Ritual 02</span>
<h3 className="text-3xl text-white tracking-tight font-medium">Mobility</h3>
</div>
<div className="absolute inset-0 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-end translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<div className="w-full h-px bg-white/20 mb-6"></div>
<h3 className="text-2xl text-white tracking-tight font-medium mb-4">Mobility Ritual</h3>
<p className="text-sm text-white/60 mb-6 leading-relaxed">Guided recovery movement focused on opening the body, restoring range, and releasing built-up tension.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Guided Stretch</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Restore Range</span>
</div>
</div>
</div>

<div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0340f36-59a2-4400-bbe4-c1cd0cc179be_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
<div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
<span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Ritual 03</span>
<h3 className="text-3xl text-white tracking-tight font-medium">Breath</h3>
</div>
<div className="absolute inset-0 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-end translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<div className="w-full h-px bg-white/20 mb-6"></div>
<h3 className="text-2xl text-white tracking-tight font-medium mb-4">Breath Reset</h3>
<p className="text-sm text-white/60 mb-6 leading-relaxed">Breath-led downregulation sessions that help quiet mental overload and settle the nervous system.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Breathwork</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Nervous System</span>
</div>
</div>
</div>

<div className="group relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e59849f5-c57a-4903-afaf-4d4965ecda8b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
<div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
<span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Ritual 04</span>
<h3 className="text-3xl text-white tracking-tight font-medium">Membership</h3>
</div>
<div className="absolute inset-0 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-end translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<div className="w-full h-px bg-white/20 mb-6"></div>
<h3 className="text-2xl text-white tracking-tight font-medium mb-4">Recovery Rhythm</h3>
<p className="text-sm text-white/60 mb-6 leading-relaxed">A recurring rhythm of restoration with flexible access to Stillpoint’s core experiences.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Monthly</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 bg-white/5">Flexible</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/10" id="studio">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 flex flex-col gap-6">
<div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden glow-card reveal">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cc45272-bd4e-423d-94e0-2657b8ce7ba8_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
<div className="absolute bottom-6 left-6 inline-flex px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs text-white uppercase tracking-widest">
                        Designed Environment
                    </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-3xl bg-[#050505] border border-white/10 reveal reveal-delay-1">
<span className="text-xs text-white/40 block mb-2">01 / Materiality</span>
<h4 className="text-lg text-white font-medium mb-2 tracking-tight">Warmth &amp; Texture</h4>
<p className="text-sm text-white/60 leading-relaxed">Natural stone, muted details, and soft lighting help the studio feel restorative instantly.</p>
</div>
<div className="p-6 rounded-3xl bg-[#050505] border border-white/10 reveal reveal-delay-2">
<span className="text-xs text-white/40 block mb-2">02 / Flow</span>
<h4 className="text-lg text-white font-medium mb-2 tracking-tight">Calm Sequencing</h4>
<p className="text-sm text-white/60 leading-relaxed">Paced to move from arrival into recovery with less noise and more intention.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<p className="text-xs uppercase tracking-widest text-white/40 mb-4 reveal">The Studio</p>
<h2 className="text-4xl md:text-5xl tracking-tight text-white font-medium leading-tight mb-6 reveal reveal-delay-1">
                    A space designed to slow the body before it restores it.
                </h2>
<p className="text-base text-white/60 leading-relaxed mb-8 reveal reveal-delay-2">
                    Stillpoint is built as a recovery environment, not just a treatment menu. Material warmth, quieter lighting, and intentional pacing are designed to help the nervous system settle before the rituals even begin.
                </p>
<div className="space-y-6 pt-8 border-t border-white/10 reveal reveal-delay-3">
<div className="flex gap-4">
<span className="text-xs text-white/40 mt-1 block w-6">01</span>
<p className="text-sm text-white/70">Quiet materiality and softer light create an immediate downshift in pace.</p>
</div>
<div className="flex gap-4">
<span className="text-xs text-white/40 mt-1 block w-6">02</span>
<p className="text-sm text-white/70">Thermal, movement, and breath rituals are arranged to feel sequential.</p>
</div>
<div className="flex gap-4">
<span className="text-xs text-white/40 mt-1 block w-6">03</span>
<p className="text-sm text-white/70">Structured to feel private, elevated, and calm to support repeat recovery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto" id="membership">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 reveal">
<p className="text-xs uppercase tracking-widest text-white/40 mb-4">Membership</p>
<h2 className="text-4xl md:text-5xl tracking-tight text-white font-medium leading-tight mb-6">
                Choose a recovery rhythm that supports how you live.
            </h2>
<p className="text-base text-white/60 leading-relaxed">
                Memberships are designed to reduce friction and make restoration easier to return to, built around calm access and repeatable recovery.
            </p>

<div className="mt-10 flex items-center p-1 rounded-full bg-white/5 border border-white/10">
<button className="px-6 py-2 rounded-full text-sm font-medium text-white/50 hover:text-white transition-colors">Monthly</button>
<button className="px-6 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/10 text-white shadow-sm flex items-center gap-2">
                    Annually <span className="text-[10px] uppercase tracking-wider text-white/60 bg-white/10 px-2 py-0.5 rounded-full">Save 20%</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="flex flex-col p-8 rounded-3xl bg-[#050505] border border-white/10 glow-card reveal reveal-delay-1">
<div className="flex items-center justify-between mb-8">
<span className="text-xs uppercase tracking-widest text-white/50">Core Membership</span>
<span className="text-[10px] uppercase tracking-widest border border-white/20 bg-white/5 px-3 py-1 rounded-full text-white">Most Chosen</span>
</div>
<h3 className="text-3xl text-white tracking-tight font-medium mb-2">Core Rhythm</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-5xl font-medium text-white tracking-tighter">$149</span>
<span className="text-sm text-white/40">/ month</span>
</div>
<p className="text-sm text-white/60 mb-8 flex-1">
                    A balanced recurring plan designed for members who want a steady weekly recovery rhythm without overcommitting.
                </p>
<a className="w-full py-3.5 rounded-full bg-white text-black text-sm font-medium text-center hover:bg-white/90 transition-colors mb-8" href="#">
                    Choose Core Rhythm
                </a>
<div className="space-y-4 pt-8 border-t border-white/10">
<p className="text-xs uppercase tracking-widest text-white/40">Included Access</p>
<div className="flex items-start gap-3">
<iconify-icon className="text-white/60 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/70">4 recovery sessions per month</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-white/60 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/70">Priority booking windows</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-white/60 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/70">Access to core rituals and reset sessions</span>
</div>
</div>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-[#020202] border border-white/5 reveal reveal-delay-2">
<div className="flex items-center justify-between mb-8">
<span className="text-xs uppercase tracking-widest text-white/50">Unlimited Access</span>
</div>
<h3 className="text-3xl text-white tracking-tight font-medium mb-2">Studio Access</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-5xl font-medium text-white tracking-tighter">$249</span>
<span className="text-sm text-white/40">/ month</span>
</div>
<p className="text-sm text-white/60 mb-8 flex-1">
                    Full access for members who want recovery more deeply integrated into their training and weekly flow.
                </p>
<a className="w-full py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium text-center hover:bg-white/10 transition-colors mb-8" href="#">
                    Start Unlimited
                </a>
<div className="space-y-4 pt-8 border-t border-white/10">
<p className="text-xs uppercase tracking-widest text-white/40">Included Access</p>
<div className="flex items-start gap-3">
<iconify-icon className="text-white/60 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/70">Unlimited monthly access</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-white/60 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/70">Expanded booking priority</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-white/60 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-white/70">Ideal for highly active routines</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-medium mb-4">What recovery feels like when it becomes consistent.</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

<div className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-[#050505] border border-white/10 flex flex-col justify-between glow-card reveal">
<div>
<div className="flex text-white mb-8 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl tracking-tight text-white font-medium leading-snug mb-6">
                        "It made recovery feel easier to return to, instead of one more thing to schedule."
                    </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-xl">
                        I originally came in for contrast therapy, but what kept me coming back was the pacing of the whole experience. The studio feels calm without being sleepy, and I leave feeling clearer, lighter, and more put back together.
                    </p>
</div>
<div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
<div>
<p className="text-sm text-white font-medium">Maya R.</p>
<p className="text-xs text-white/40">Creative Director</p>
</div>
<span className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-1 rounded">Weekly</span>
</div>
</div>

<div className="lg:col-span-2 flex flex-col gap-6">
<div className="p-6 rounded-3xl bg-[#020202] border border-white/5 flex flex-col justify-between h-full reveal reveal-delay-1">
<p className="text-sm text-white/80 leading-relaxed mb-6">"The biggest shift was how quickly I could move from work mode into a calmer state."</p>
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white font-medium">Daniel K.</p>
<p className="text-[10px] text-white/40">Founder</p>
</div>
</div>
</div>
<div className="p-6 rounded-3xl bg-[#020202] border border-white/5 flex flex-col justify-between h-full reveal reveal-delay-2">
<p className="text-sm text-white/80 leading-relaxed mb-6">"It feels structured without being clinical. That balance is what makes it special."</p>
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white font-medium">Sophie T.</p>
<p className="text-[10px] text-white/40">Trainer</p>
</div>
</div>
</div>
<div className="p-6 rounded-3xl bg-[#020202] border border-white/5 flex flex-col justify-between h-full reveal reveal-delay-3">
<p className="text-sm text-white/80 leading-relaxed mb-6">"I started coming for physical recovery, but the nervous system reset is what I notice the most now."</p>
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white font-medium">Ethan L.</p>
<p className="text-[10px] text-white/40">Runner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/10" id="faq">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-medium mb-6">Before you begin.</h2>
<p className="text-sm text-white/60 mb-10 leading-relaxed max-w-md">
                    Stillpoint is designed to feel approachable from the start. Whether you are coming in for recovery, nervous system reset, or a more consistent membership.
                </p>
<div className="flex flex-wrap gap-2 mb-8">
<button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white">All Questions</button>
<button className="px-4 py-2 rounded-full border border-white/5 text-xs text-white/50 hover:bg-white/5 hover:text-white transition-colors">Recovery</button>
<button className="px-4 py-2 rounded-full border border-white/5 text-xs text-white/50 hover:bg-white/5 hover:text-white transition-colors">Membership</button>
</div>
</div>
<div className="lg:col-span-7 space-y-3">

<div className="border border-white/10 rounded-2xl bg-[#030303] overflow-hidden reveal reveal-delay-1">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left text-white text-sm font-medium">
                        Do I need a membership to visit?
                        <iconify-icon className="text-white/40 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="faq-answer">
<div className="px-6 pb-5 text-sm text-white/50 leading-relaxed">
                            No. You can begin with an intro session or book an individual visit. Membership simply makes recovery easier to return to if you want a more consistent rhythm.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-2xl bg-[#030303] overflow-hidden reveal reveal-delay-2">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left text-white text-sm font-medium">
                        Is this only for athletes?
                        <iconify-icon className="text-white/40 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="faq-answer">
<div className="px-6 pb-5 text-sm text-white/50 leading-relaxed">
                            Not at all. Stillpoint is for anyone who wants a calmer, more intentional way to recover — including professionals, creatives, and people dealing with stress or physical tension.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-2xl bg-[#030303] overflow-hidden reveal reveal-delay-3">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left text-white text-sm font-medium">
                        What should I expect during my first visit?
                        <iconify-icon className="text-white/40 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="faq-answer">
<div className="px-6 pb-5 text-sm text-white/50 leading-relaxed">
                            Your first visit is designed to feel guided and clear. You’ll be introduced to the space, the pacing of the rituals, and the recovery flow that best fits your needs.
                        </div>
</div>
</div>
</div>
</div>

<div className="mt-32 p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 glow-card reveal">
<div className="max-w-xl">
<span className="text-xs uppercase tracking-widest text-white/40 mb-3 block">Next Step</span>
<h3 className="text-3xl md:text-4xl tracking-tight text-white font-medium mb-4">Start with one session, then build your rhythm.</h3>
<p className="text-sm text-white/50">Whether you want to explore the studio, try a guided intro, or compare options, Stillpoint is built to feel calm from the first step.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
<a className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium text-center hover:scale-105 transition-transform" href="#">Book Intro</a>
<a className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium text-center hover:bg-white/10 transition-colors" href="#">View Membership</a>
</div>
</div>
</section>

<footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/10 text-sm">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 text-xs text-white tracking-widest uppercase">SP</span>
<span className="text-sm font-medium text-white tracking-tight">Stillpoint Recovery</span>
</div>
<p className="text-white/50 max-w-sm leading-relaxed">
                    A premium recovery environment designed to make restoration feel calm, structured, and easy to return to.
                </p>
</div>
<div>
<p className="text-white font-medium mb-4">Navigate</p>
<div className="flex flex-col gap-3 text-white/50">
<a className="hover:text-white transition-colors w-fit" href="#experiences">Experiences</a>
<a className="hover:text-white transition-colors w-fit" href="#studio">Studio</a>
<a className="hover:text-white transition-colors w-fit" href="#membership">Membership</a>
<a className="hover:text-white transition-colors w-fit" href="#faq">FAQ</a>
</div>
</div>
<div>
<p className="text-white font-medium mb-4">Connect</p>
<div className="flex flex-col gap-3 text-white/50">
<a className="hover:text-white transition-colors w-fit" href="#">Book Session</a>
<a className="hover:text-white transition-colors w-fit" href="#">Contact Us</a>
<a className="hover:text-white transition-colors w-fit" href="#">Instagram</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
<p>© 2026 Stillpoint Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
