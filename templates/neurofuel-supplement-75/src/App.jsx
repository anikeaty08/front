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



        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Special handling for bars
                    const bars = entry.target.querySelectorAll('.ngf-bar');
                    bars.forEach(bar => {
                        bar.style.width = bar.style.getPropertyValue('--w');
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
        // Also observe sections containing charts
        document.querySelectorAll('.ngf-bar').forEach(el => {
            const container = el.closest('section');
            if (container) observer.observe(container);
        });

        // Accordion Logic
        function toggleAccordion(button) {
            const item = button.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Toggle active state
            const isActive = item.classList.contains('active');
            
            // Close all others
            document.querySelectorAll('.accordion-item').forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.accordion-content').style.maxHeight = '0';
            });

            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }

        // Count up numbers
        const stats = document.querySelectorAll('[data-target]');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 100;
            
            const update = () => {
                if (current < target) {
                    current += increment;
                    stat.innerText = Math.ceil(current).toLocaleString() + (target > 100 ? '+' : '');
                    setTimeout(update, 20);
                } else {
                    stat.innerText = target.toLocaleString() + (target > 100 ? '+' : '');
                }
            };
            
            // Trigger when visible
            const statObserver = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    update();
                    statObserver.unobserve(stat);
                }
            });
            statObserver.observe(stat);
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
      

<div className="bg-[#2E2E2E] text-white py-2 text-center overflow-hidden whitespace-nowrap">
<p className="mono text-[10px] tracking-[0.14em] uppercase">
            Limited Time — <span className="text-[#55C478]">First-Time Buyer Discount Active</span>
</p>
</div>
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D0D0D0]/30 py-4 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-2xl font-[900] tracking-[0.12em] uppercase leading-none">Axen</span>
<iconify-icon className="text-[#55C478] text-xl" icon="solar:star-linear"></iconify-icon>
</div>
<nav>
<a className="group relative text-xs mono font-semibold tracking-widest uppercase" href="#pricing">
                    Shop Now
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#55C478] transition-all group-hover:w-full"></span>
</a>
</nav>
</div>
</header>

<section className="py-12 md:py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="fade-up">
<div className="aspect-[3/4] bg-[#F2F2F2] rounded-2xl flex items-center justify-center relative overflow-hidden group">
<span className="mono text-xs text-[#707070] opacity-50 uppercase tracking-tighter">[ NeuroFuel jar - 30 Servings ]</span>

<div className="absolute inset-0 border-[1px] border-black/5 rounded-2xl pointer-events-none"></div>
</div>
<div className="flex gap-4 mt-6 justify-center">
<div className="w-16 h-16 bg-[#F2F2F2] rounded-lg border border-[#55C478]"></div>
<div className="w-16 h-16 bg-[#F2F2F2] rounded-lg"></div>
<div className="w-16 h-16 bg-[#F2F2F2] rounded-lg"></div>
<div className="w-16 h-16 bg-[#F2F2F2] rounded-lg"></div>
</div>
</div>

<div className="fade-up">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">NeuroRestore™ Protocol</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-4">NeuroFuel</h1>
<p className="text-xl md:text-2xl text-[#707070] font-light mb-6">The #1 Cognitive Wellness Protocol for Adults 50+</p>
<div className="flex items-center gap-3 mb-8">
<div className="flex text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm text-[#707070]"><span className="font-semibold text-black">4.9</span> (1,247 reviews)</span>
</div>
<p className="text-lg text-[#3A3A3A] mb-8 leading-relaxed max-w-lg">
                    A science-backed formula that reactivates your brain's natural repair signals. 6 clinical-grade ingredients. One simple daily scoop.
                </p>
<div className="mb-10">
<div className="flex items-baseline gap-4 mb-1">
<span className="text-[#707070] line-through text-lg">$197</span>
<span className="text-4xl font-semibold">$69</span>
<span className="bg-[#55C478]/10 text-[#55C478] px-3 py-1 rounded-full text-[10px] mono font-bold">SAVE 65%</span>
</div>
<p className="text-sm text-[#707070]">or <span className="text-black font-semibold">$39/jar</span> with the 3-Month Protocol →</p>
</div>
<a className="btn-primary inline-flex items-center justify-center w-full md:w-auto bg-[#55C478] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#48a867] transition-all duration-300 cta-pulse gap-2 group" href="#pricing">
                    Begin Your Renewal — $69
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-12 pt-8 border-t border-[#D0D0D0]/50">
<div className="flex items-center gap-2 text-[10px] mono uppercase text-[#707070] tracking-wider">
<iconify-icon className="text-[#55C478] text-lg" icon="solar:shield-check-linear"></iconify-icon>
                        60-Day Guarantee
                    </div>
<div className="flex items-center gap-2 text-[10px] mono uppercase text-[#707070] tracking-wider">
<iconify-icon className="text-[#55C478] text-lg" icon="solar:box-linear"></iconify-icon>
                        Free Shipping
                    </div>
<div className="flex items-center gap-2 text-[10px] mono uppercase text-[#707070] tracking-wider">
<iconify-icon className="text-[#55C478] text-lg" icon="solar:test-tube-linear"></iconify-icon>
                        Third-Party Tested
                    </div>
<div className="flex items-center gap-2 text-[10px] mono uppercase text-[#707070] tracking-wider">
<iconify-icon className="text-[#55C478] text-lg" icon="solar:calendar-linear"></iconify-icon>
                        Cancel Anytime
                    </div>
</div>
<p className="mt-8 text-xs text-[#707070]">
<span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
<span className="font-semibold text-black">1,247</span> people viewed this today
                </p>
</div>
</div>
</section>

<section className="bg-[#2E2E2E] py-12 text-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="fade-up">
<p className="text-3xl md:text-4xl serif font-semibold mb-1" data-target="47000">47,000+</p>
<p className="text-[10px] mono uppercase tracking-widest text-[#707070]">Jars Shipped</p>
</div>
<div className="fade-up delay-100">
<p className="text-3xl md:text-4xl serif font-semibold mb-1">4.9★</p>
<p className="text-[10px] mono uppercase tracking-widest text-[#707070]">Average Rating</p>
</div>
<div className="fade-up delay-200">
<p className="text-3xl md:text-4xl serif font-semibold mb-1">6</p>
<p className="text-[10px] mono uppercase tracking-widest text-[#707070]">Clinical Ingredients</p>
</div>
<div className="fade-up delay-300">
<p className="text-3xl md:text-4xl serif font-semibold mb-1">60</p>
<p className="text-[10px] mono uppercase tracking-widest text-[#707070]">Day Guarantee</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">The Science</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Why Your Brain Feels Like It's Running on Low Power Mode</h2>
<div className="space-y-6 text-lg text-[#3A3A3A] leading-relaxed text-left md:text-center">
<p>After age 40, your brain progressively reduces production of a protein called <strong>NGF — Nerve Growth Factor.</strong> NGF is the biological signal responsible for keeping neurons alive and forming new connections.</p>
<p>Without enough NGF, the brain enters what scientists call <strong>"Low Power Mode."</strong> Memory consolidation slows. Processing speed drops. Focus fades. Not because you are getting old — because the repair signal is weakening.</p>
<p>Coffee and generic vitamins don't address this root cause. They force a worn-out system to work harder without ever fixing what's broken.</p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6">
<div className="bg-[#F2F2F2] rounded-[32px] p-8 md:p-12 relative overflow-hidden">
<p className="mono text-[10px] text-[#707070] uppercase mb-8 text-center tracking-widest">NGF Production Decline by Age</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<span className="mono text-xs w-8">40s</span>
<div className="flex-1 h-8 bg-white rounded-full overflow-hidden">
<div className="h-full bg-[#55C478] transition-all duration-[1.5s] w-0 ngf-bar" style={{'--w': '85%'}}></div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="mono text-xs w-8">50s</span>
<div className="flex-1 h-8 bg-white rounded-full overflow-hidden">
<div className="h-full bg-[#55C478]/80 transition-all duration-[1.5s] w-0 ngf-bar" style={{'--w': '60%'}}></div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="mono text-xs w-8">60s</span>
<div className="flex-1 h-8 bg-white rounded-full overflow-hidden">
<div className="h-full bg-[#55C478]/60 transition-all duration-[1.5s] w-0 ngf-bar" style={{'--w': '40%'}}></div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="mono text-xs w-8">70s</span>
<div className="flex-1 h-8 bg-white rounded-full overflow-hidden">
<div className="h-full bg-[#55C478]/30 transition-all duration-[1.5s] w-0 ngf-bar" style={{'--w': '20%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F2F2F2]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">The Protocol</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Three Fronts. One Formula.<br/>Complete Neural Support.</h2>
<p className="text-[#707070] text-lg max-w-2xl mx-auto">The NeuroRestore™ Protocol doesn't mask symptoms. It provides what a depleted brain needs to repair, protect, and perform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-[24px] shadow-sm border-l-[6px] border-[#55C478] fade-up">
<span className="mono text-xs font-semibold text-[#55C478] mb-4 block">01</span>
<h3 className="text-3xl serif font-semibold mb-2">Reactivate Growth</h3>
<p className="mono text-[10px] text-[#707070] uppercase mb-4 tracking-wider">SIGNAL™</p>
<p className="text-[#3A3A3A] mb-8 leading-relaxed">Triggers NGF production — the signal that tells your brain it's safe to rebuild.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#F2F2F2] px-3 py-1 rounded-full mono text-[9px] font-semibold">Lion's Mane</span>
<span className="bg-[#F2F2F2] px-3 py-1 rounded-full mono text-[9px] font-semibold">B9</span>
<span className="bg-[#F2F2F2] px-3 py-1 rounded-full mono text-[9px] font-semibold">B12</span>
</div>
</div>

<div className="bg-white p-10 rounded-[24px] shadow-sm border-l-[6px] border-[#55C478] fade-up delay-100">
<span className="mono text-xs font-semibold text-[#55C478] mb-4 block">02</span>
<h3 className="text-3xl serif font-semibold mb-2 text-balance">Block Stress Corrosion</h3>
<p className="mono text-[10px] text-[#707070] uppercase mb-4 tracking-wider">SHIELD™</p>
<p className="text-[#3A3A3A] mb-8 leading-relaxed">Protects against the cortisol damage that blocks neural repair and accelerates decline.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#F2F2F2] px-3 py-1 rounded-full mono text-[9px] font-semibold">Rhodiola Rosea</span>
<span className="bg-[#F2F2F2] px-3 py-1 rounded-full mono text-[9px] font-semibold">L-Theanine</span>
</div>
</div>

<div className="bg-white p-10 rounded-[24px] shadow-sm border-l-[6px] border-[#55C478] fade-up delay-200">
<span className="mono text-xs font-semibold text-[#55C478] mb-4 block">03</span>
<h3 className="text-3xl serif font-semibold mb-2">Feel Clarity Now</h3>
<p className="mono text-[10px] text-[#707070] uppercase mb-4 tracking-wider">SUSTAIN™</p>
<p className="text-[#3A3A3A] mb-8 leading-relaxed">Delivers focus and mental clarity today while structural rebuilding happens in the background.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#F2F2F2] px-3 py-1 rounded-full mono text-[9px] font-semibold">Alpha-GPC</span>
<span className="bg-[#F2F2F2] px-3 py-1 rounded-full mono text-[9px] font-semibold">Green Tea</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Why AXEN is Different</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Not All Brain Supplements Are Created Equal</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-[#D0D0D0]">
<th className="py-6 text-sm font-light text-[#707070] uppercase mono tracking-widest">Feature</th>
<th className="py-6 text-sm font-light text-[#707070] uppercase mono tracking-widest text-center">Generic Supplements</th>
<th className="py-6 px-6 bg-[#55C478]/5 text-sm font-semibold text-black uppercase mono tracking-widest text-center rounded-t-2xl">AXEN NeuroFuel</th>
</tr>
</thead>
<tbody className="text-lg">
<tr className="border-b border-[#D0D0D0]/30">
<td className="py-6">NGF Activation</td>
<td className="py-6 text-center text-[#D0D0D0]"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-6 px-6 bg-[#55C478]/5 text-center text-[#55C478]"><iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-[#D0D0D0]/30">
<td className="py-6">Cortisol Protection</td>
<td className="py-6 text-center text-[#D0D0D0]"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-6 px-6 bg-[#55C478]/5 text-center text-[#55C478]"><iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-[#D0D0D0]/30">
<td className="py-6">Fruiting Body Lion's Mane</td>
<td className="py-6 text-center text-[#D0D0D0]"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-6 px-6 bg-[#55C478]/5 text-center text-[#55C478]"><iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-[#D0D0D0]/30">
<td className="py-6">Third-Party Tested</td>
<td className="py-6 text-center text-[#D0D0D0]"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-6 px-6 bg-[#55C478]/5 text-center text-[#55C478]"><iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr>
<td className="py-6">60-Day Guarantee</td>
<td className="py-6 text-center text-[#D0D0D0]"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></td>
<td className="py-6 px-6 bg-[#55C478]/5 text-center text-[#55C478] rounded-b-2xl"><iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-[#F2F2F2]">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">What to Expect</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Your Neural Rebuilding Journey</h2>
</div>
<div className="relative space-y-12">
<div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#D0D0D0]"></div>
<div className="relative pl-12 fade-up">
<div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-[#55C478] flex items-center justify-center text-white ring-8 ring-[#F2F2F2]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-2xl serif font-semibold">Week 1-2: First Signs of Clarity</h3>
<p className="text-[#707070] mt-2 leading-relaxed">Morning fog begins to lift. You notice sharper recall in conversations.</p>
</div>
<div className="relative pl-12 fade-up">
<div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-[#55C478] flex items-center justify-center text-white ring-8 ring-[#F2F2F2]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-2xl serif font-semibold">Week 3-4: Momentum Builds</h3>
<p className="text-[#707070] mt-2 leading-relaxed">Focus improves noticeably. Reading becomes easier. Names come back faster.</p>
</div>
<div className="relative pl-12 fade-up">
<div className="absolute left-0 top-2 w-8 h-8 rounded-full border-2 border-[#55C478] bg-white ring-8 ring-[#F2F2F2]"></div>
<h3 className="text-2xl serif font-semibold">Month 2: Deep Rebuilding</h3>
<p className="text-[#707070] mt-2 leading-relaxed">Sustained mental energy throughout the day. Confidence in your memory returns.</p>
</div>
<div className="relative pl-12 fade-up">
<div className="absolute left-0 top-2 w-8 h-8 rounded-full border-2 border-[#D0D0D0] bg-white ring-8 ring-[#F2F2F2]"></div>
<h3 className="text-2xl serif font-semibold">Month 3+: Full Protocol Benefits</h3>
<p className="text-[#707070] mt-2 leading-relaxed">Neural pathways strengthened. You feel like yourself again — sharp, present, independent.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-[32px] border border-[#D0D0D0]/50 shadow-2xl shadow-black/5 p-12 text-center fade-up">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Clinical Data</span>
<h2 className="text-4xl serif font-semibold mb-12">The Numbers Speak</h2>
<div className="grid grid-cols-2 gap-12">
<div className="space-y-2">
<p className="text-5xl font-semibold text-[#55C478] serif tracking-tight">+41%</p>
<p className="text-xs uppercase mono text-[#707070] tracking-widest">Memory Recall</p>
<div className="h-1 bg-[#F2F2F2] rounded-full overflow-hidden">
<div className="h-full bg-[#55C478] w-[82%]"></div>
</div>
</div>
<div className="space-y-2">
<p className="text-5xl font-semibold text-[#55C478] serif tracking-tight">+38%</p>
<p className="text-xs uppercase mono text-[#707070] tracking-widest">Sustained Focus</p>
<div className="h-1 bg-[#F2F2F2] rounded-full overflow-hidden">
<div className="h-full bg-[#55C478] w-[76%]"></div>
</div>
</div>
<div className="space-y-2">
<p className="text-5xl font-semibold text-[#55C478] serif tracking-tight">+52%</p>
<p className="text-xs uppercase mono text-[#707070] tracking-widest">Mental Clarity</p>
<div className="h-1 bg-[#F2F2F2] rounded-full overflow-hidden">
<div className="h-full bg-[#55C478] w-[90%]"></div>
</div>
</div>
<div className="space-y-2">
<p className="text-5xl font-semibold text-[#55C478] serif tracking-tight">+33%</p>
<p className="text-xs uppercase mono text-[#707070] tracking-widest">Cognitive Stamina</p>
<div className="h-1 bg-[#F2F2F2] rounded-full overflow-hidden">
<div className="h-full bg-[#55C478] w-[66%]"></div>
</div>
</div>
</div>
<p className="mt-12 text-[10px] text-[#707070] italic">Based on participant-reported outcomes over 90 days</p>
</div>
</div>
</section>

<section className="bg-black py-24 text-white text-center">
<div className="max-w-4xl mx-auto px-6 fade-up">
<span className="text-[120px] md:text-[160px] serif font-semibold text-[#55C478] leading-none mb-4 block">60</span>
<h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Day Money-Back Guarantee</h2>
<p className="text-[#D0D0D0] text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Try Axen NeuroFuel for 60 days. If you don't feel a noticeable difference in your clarity, memory, and focus — we'll refund every penny. No questions. No hassle.
            </p>
<a className="inline-flex items-center justify-center bg-[#55C478] text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#48a867] transition-all" href="#pricing">
                Try Risk-Free — Begin Your Renewal
            </a>
</div>
</section>

<section className="py-24 bg-[#F2F2F2]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Real Stories</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">What Our Community Is Saying</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm fade-up">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#55C478]/10 flex items-center justify-center text-[#55C478] font-bold">MT</div>
<div>
<p className="font-semibold text-black">Margaret T., 67</p>
<p className="text-[10px] text-[#707070] uppercase tracking-wider">Portland, OR</p>
</div>
</div>
<div className="flex text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#3A3A3A] leading-relaxed mb-6 italic text-sm">"Within two weeks, I could follow entire conversations without losing my train of thought. My daughter noticed before I did."</p>
<p className="text-[9px] mono uppercase font-bold text-[#55C478]">✓ Verified Buyer</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm fade-up delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#55C478]/10 flex items-center justify-center text-[#55C478] font-bold">RH</div>
<div>
<p className="font-semibold text-black">Robert H., 72</p>
<p className="text-[10px] text-[#707070] uppercase tracking-wider">Austin, TX</p>
</div>
</div>
<div className="flex text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#3A3A3A] leading-relaxed mb-6 italic text-sm">"I was skeptical after trying so many supplements. But this one is different. I'm reading again — three books this month. Haven't done that in years."</p>
<p className="text-[9px] mono uppercase font-bold text-[#55C478]">✓ Verified Buyer</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm fade-up delay-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#55C478]/10 flex items-center justify-center text-[#55C478] font-bold">LS</div>
<div>
<p className="font-semibold text-black">Linda S., 58</p>
<p className="text-[10px] text-[#707070] uppercase tracking-wider">Chicago, IL</p>
</div>
</div>
<div className="flex text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-[#3A3A3A] leading-relaxed mb-6 italic text-sm">"The brain fog that haunted my mornings is gone. I wake up clear. My husband says I seem ten years younger."</p>
<p className="text-[9px] mono uppercase font-bold text-[#55C478]">✓ Verified Buyer</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Your Choice</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">Two Paths Forward</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
<div className="p-10 rounded-[32px] bg-[#F2F2F2]/50 border border-transparent grayscale">
<h3 className="text-2xl font-semibold mb-4">Continue as you are</h3>
<p className="text-[#707070] leading-relaxed">The fog stays. Names keep slipping. Conversations get harder. The frustration compounds daily.</p>
</div>
<div className="p-10 rounded-[32px] border-2 border-[#55C478] bg-white shadow-xl shadow-[#55C478]/5">
<h3 className="text-2xl font-semibold mb-4">Begin your renewal today</h3>
<p className="text-[#3A3A3A] leading-relaxed">Clarity returns. Confidence rebuilds. You feel present, sharp, and independent again.</p>
</div>
</div>
<div className="mt-16">
<a className="inline-flex items-center justify-center bg-[#55C478] text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#48a867] transition-all duration-300" href="#pricing">
                    Choose Clarity — Start Today
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#F2F2F2]">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Simple Ritual</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">Your Morning Clarity Ritual</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="fade-up">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-black/5 relative">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-[#F2F2F2]">01</span>
<iconify-icon className="text-3xl text-[#55C478]" icon="solar:tea-cup-linear"></iconify-icon>
</div>
<p className="text-[#3A3A3A] leading-snug">Add one scoop to your morning coffee or water</p>
</div>
<div className="fade-up delay-100">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-black/5 relative">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-[#F2F2F2]">02</span>
<iconify-icon className="text-3xl text-[#55C478]" icon="solar:spoon-linear"></iconify-icon>
</div>
<p className="text-[#3A3A3A] leading-snug text-balance">Stir until dissolved — no blender needed</p>
</div>
<div className="fade-up delay-200">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-black/5 relative">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-[#F2F2F2]">03</span>
<iconify-icon className="text-3xl text-[#55C478]" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<p className="text-[#3A3A3A] leading-snug">Enjoy. Feel the clarity build day by day.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Clearing the Confusion</span>
<h2 className="text-4xl font-semibold tracking-tight">Common Myths About Brain Fog</h2>
</div>
<div className="space-y-4">
<div className="border border-[#D0D0D0]/50 rounded-2xl overflow-hidden accordion-item group">
<button className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-[#F2F2F2]/50 transition-colors" onclick="toggleAccordion(this)">
<span className="text-lg font-semibold tracking-tight">Myth: Coffee and stimulants help with brain fog</span>
<iconify-icon className="text-xl transition-transform group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 bg-white px-6 accordion-content">
<p className="pb-6 text-[#707070] leading-relaxed">Explanation: Stimulants like coffee raise cortisol and mask symptoms without addressing the underlying repair signal decline. Over time, high cortisol can actually damage neural pathways.</p>
</div>
</div>

<div className="border border-[#D0D0D0]/50 rounded-2xl overflow-hidden accordion-item group">
<button className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-[#F2F2F2]/50 transition-colors" onclick="toggleAccordion(this)">
<span className="text-lg font-semibold tracking-tight">Myth: Memory games restore cognitive function</span>
<iconify-icon className="text-xl transition-transform group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 bg-white px-6 accordion-content">
<p className="pb-6 text-[#707070] leading-relaxed">They don't address the biological root cause. Training a brain without the proper repair proteins (NGF) is like trying to drive a car with no oil — eventually, it stops working regardless of the skill of the driver.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Choose Your Protocol</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Begin Your Neural Renewal</h2>
<p className="text-[#707070]">Select the plan that's right for you. Protected by our 60-Day Guarantee.</p>
</div>
<div className="flex flex-col md:flex-row justify-center gap-8 items-stretch max-w-5xl mx-auto">

<div className="flex-1 p-10 rounded-[32px] border border-[#D0D0D0]/50 bg-white flex flex-col fade-up">
<h3 className="text-3xl serif font-semibold mb-1">Starter Protocol</h3>
<p className="text-[#707070] text-sm mb-8">Try it first (1 Month Supply)</p>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-black serif">$69</span>
</div>
<p className="text-xs text-[#707070] mt-2 line-through">$197 Value</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-[#3A3A3A]">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:check-circle-bold"></iconify-icon>
                            1 full jar of NeuroFuel
                        </li>
<li className="flex items-start gap-3 text-sm text-[#3A3A3A]">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:check-circle-bold"></iconify-icon>
                            Free U.S. Shipping
                        </li>
<li className="flex items-start gap-3 text-sm text-[#3A3A3A]">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:check-circle-bold"></iconify-icon>
                            60-Day Money-Back Guarantee
                        </li>
</ul>
<button className="w-full py-4 rounded-full border border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
                        Try 1 Month — $69
                    </button>
</div>

<div className="flex-1 p-10 rounded-[32px] border-2 border-[#55C478] bg-white flex flex-col relative scale-105 shadow-2xl shadow-[#55C478]/10 fade-up delay-100 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#55C478] text-white px-6 py-1 rounded-full text-[10px] mono font-bold uppercase tracking-widest">Most Popular</div>
<h3 className="text-3xl serif font-semibold mb-1">3-Month Protocol</h3>
<p className="text-[#707070] text-sm mb-8 font-medium">Automatic Refill Program</p>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-6xl font-semibold text-black serif">$39</span>
<span className="text-lg text-[#707070] serif">/jar</span>
</div>
<p className="text-xs text-[#55C478] font-bold mt-2 uppercase tracking-tighter">SAVE $474 OFF RETAIL</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm font-semibold text-black">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:star-bold"></iconify-icon>
                            3 full jars of NeuroFuel
                        </li>
<li className="flex items-start gap-3 text-sm text-[#3A3A3A]">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:check-circle-bold"></iconify-icon>
                            Free Priority Shipping
                        </li>
<li className="flex items-start gap-3 text-sm text-[#3A3A3A]">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:check-circle-bold"></iconify-icon>
                            Axen VIP Guidance (Weekly)
                        </li>
<li className="flex items-start gap-3 text-sm text-[#3A3A3A]">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:check-circle-bold"></iconify-icon>
                            Clarity Guide + Community Access
                        </li>
<li className="flex items-start gap-3 text-sm text-[#3A3A3A]">
<iconify-icon className="text-[#55C478] mt-1" icon="solar:check-circle-bold"></iconify-icon>
                            Cancel anytime — no red tape
                        </li>
</ul>
<button className="w-full py-5 rounded-full bg-[#55C478] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#48a867] transition-all shadow-lg shadow-[#55C478]/20">
                        Start 3-Month Protocol →
                    </button>
<p className="mt-4 text-[10px] text-[#707070] italic text-center uppercase tracking-widest font-semibold">Billed as $117 every 90 days</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F2F2F2]">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="mono text-[11px] text-[#55C478] tracking-[0.14em] uppercase mb-4 block">Questions &amp; Answers</span>
<h2 className="text-4xl font-semibold tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<div className="border border-[#D0D0D0]/50 rounded-2xl overflow-hidden accordion-item group">
<button className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-white/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-semibold">How soon will I see results?</span>
<iconify-icon className="text-xl transition-transform group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 px-6 accordion-content">
<p className="pb-6 text-[#707070] text-sm">Every body responds differently. Some people report greater clarity in the first weeks, while others notice benefits gradually over 60-90 days as neural pathways strengthen.</p>
</div>
</div>

<div className="border border-[#D0D0D0]/50 rounded-2xl overflow-hidden accordion-item group">
<button className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-white/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-semibold">Can I use it with coffee?</span>
<iconify-icon className="text-xl transition-transform group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 px-6 accordion-content">
<p className="pb-6 text-[#707070] text-sm">Yes. In general, NeuroFuel is designed to work synergistically with your morning coffee, helping to mitigate the "crash" while fueling the repair signal.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 text-white text-center">
<div className="max-w-4xl mx-auto px-6 fade-up">
<span className="mono text-[#55C478] text-[11px] tracking-widest uppercase mb-4 block">Don't Wait</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">Your Mind Deserves Better Than Brain Fog</h2>
<p className="text-[#D0D0D0] text-xl mb-12 max-w-2xl mx-auto font-light">
                Thousands of people have already made the decision to support their brain naturally. The only question is — will you be next?
            </p>
<a className="inline-flex items-center justify-center bg-[#55C478] text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#48a867] transition-all" href="#pricing">
                Begin Your Renewal Now
            </a>
<p className="mt-8 text-[10px] mono uppercase tracking-[0.2em] text-[#707070]">
                60-Day Guarantee • Free Shipping • Cancel Anytime
            </p>
</div>
</section>

<footer className="bg-[#2E2E2E] py-16 text-white border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
<div className="flex items-center gap-2">
<span className="text-2xl font-[900] tracking-[0.14em] uppercase">Axen</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-[10px] mono uppercase tracking-widest text-[#707070]">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 space-y-4">
<p className="text-[10px] text-[#707070] leading-relaxed max-w-4xl">
                    Disclaimer: These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary depending on individual biology. Consult your physician before starting any new supplement ritual.
                </p>
<p className="text-[10px] mono text-[#707070] uppercase tracking-widest">
                    © 2026 AXEN Wellness. All rights reserved.
                </p>
</div>
</div>
</footer>


    </>
  );
}
