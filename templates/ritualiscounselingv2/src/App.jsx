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
      

<header className="pt-8 pb-12 flex justify-center">
<div className="text-xs uppercase tracking-tighter font-semibold text-[#1C1C1A] flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
            RITUALIS
        </div>
</header>
<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

<section className="text-center mb-16">
<div className="text-xs uppercase tracking-widest text-[#73736E] mb-4">Formation Framework</div>
<h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Two Paths. One Destination.<br/>Men Fully Alive.
            </h1>
<div className="flex items-center justify-center gap-4 my-8 max-w-xs mx-auto">
<div className="h-px bg-[#EBE8E0] flex-1"></div>
<span className="text-xs uppercase tracking-widest text-[#A8894A]">The Practice of Belonging</span>
<div className="h-px bg-[#EBE8E0] flex-1"></div>
</div>
<p className="text-sm sm:text-base text-[#73736E] max-w-2xl mx-auto leading-relaxed mb-12">
                A formation framework for boys crossing into manhood and men finding their way back. Built on ancient wisdom, modern psychology, and the irreplaceable truth that transformation requires witness.
            </p>

<div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden shadow-md">
<img alt="Atmospheric mountain landscape" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/20 to-transparent mix-blend-multiply"></div>
</div>
</section>

<blockquote className="bg-white border border-[#EBE8E0] rounded-2xl p-6 sm:p-8 mb-16 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#A8894A]"></div>
<iconify-icon className="text-3xl text-[#EBE8E0] absolute top-6 right-6" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm sm:text-base text-[#3D3D38] italic leading-relaxed relative z-10 pr-8">
                "If we do not transform our pain, we will most assuredly transmit it. The wound is not the destination. It's the doorway."
            </p>
<footer className="mt-4 text-xs tracking-wider uppercase text-[#73736E] font-normal">
                — Richard Rohr, Adam's Return
            </footer>
</blockquote>

<section className="mb-16">
<div className="mb-6 px-2">
<h2 className="text-xs uppercase tracking-widest text-[#73736E] mb-1">The Two Paths</h2>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight">Who This Is For</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

<div className="bg-[#F2F6F9] border border-[#DCE6EE] rounded-2xl overflow-hidden transition-all hover:shadow-md group flex flex-col">
<div className="h-40 relative overflow-hidden shrink-0">
<img alt="Forest path" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-[#3B5E7A]/20 mix-blend-multiply"></div>
</div>
<div className="p-6 sm:p-8 flex-1">
<div className="flex items-center justify-between mb-4">
<div className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold">Path One</div>
<iconify-icon className="text-xl text-[#3B5E7A]/60" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A] mb-3">The Boy Becoming a Man</h4>
<p className="text-sm text-[#73736E] leading-relaxed">Ages 13–18. A boy at the threshold. Unformed but full of potential. He needs initiation — not accident. Someone to name him and call him forward.</p>
</div>
</div>

<div className="bg-[#F7F4F2] border border-[#EAE0DC] rounded-2xl overflow-hidden transition-all hover:shadow-md group flex flex-col">
<div className="h-40 relative overflow-hidden shrink-0">
<img alt="Rugged mountain landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-[#5C3A2E]/20 mix-blend-multiply"></div>
</div>
<div className="p-6 sm:p-8 flex-1">
<div className="flex items-center justify-between mb-4">
<div className="text-xs uppercase tracking-widest text-[#5C3A2E] font-semibold">Path Two</div>
<iconify-icon className="text-xl text-[#5C3A2E]/60" icon="solar:restart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A] mb-3">The Man Finding His Way Back</h4>
<p className="text-sm text-[#73736E] leading-relaxed">A man stuck — in identity confusion, relational breakdown, career fog, or hollow living. He was never initiated. The wound runs the show. He needs a second initiation.</p>
</div>
</div>
</div>
</section>

<section className="mb-20">
<div className="mb-6 px-2 text-center">
<h2 className="text-xs uppercase tracking-widest text-[#73736E] mb-1">The Universal Architecture</h2>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight">Three Movements in Every Formation</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white border border-[#EBE8E0] rounded-xl p-6 text-center shadow-sm">
<div className="w-8 h-8 mx-auto rounded-full border border-[#EBE8E0] bg-[#FAF8F2] flex items-center justify-center text-xs tracking-widest text-[#73736E] mb-4">I</div>
<h4 className="font-['Playfair_Display'] text-base font-semibold text-[#1C1C1A] mb-2">Separation</h4>
<p className="text-xs text-[#73736E] leading-relaxed">Breaking from the familiar. Identity stripped.</p>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-xl p-6 text-center shadow-sm">
<div className="w-8 h-8 mx-auto rounded-full border border-[#EBE8E0] bg-[#FAF8F2] flex items-center justify-center text-xs tracking-widest text-[#73736E] mb-4">II</div>
<h4 className="font-['Playfair_Display'] text-base font-semibold text-[#1C1C1A] mb-2">Liminality</h4>
<p className="text-xs text-[#73736E] leading-relaxed">The threshold. Suspended. Neither-nor. The crucible.</p>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-xl p-6 text-center shadow-sm">
<div className="w-8 h-8 mx-auto rounded-full border border-[#EBE8E0] bg-[#FAF8F2] flex items-center justify-center text-xs tracking-widest text-[#73736E] mb-4">III</div>
<h4 className="font-['Playfair_Display'] text-base font-semibold text-[#1C1C1A] mb-2">Reintegration</h4>
<p className="text-xs text-[#73736E] leading-relaxed">Welcomed back. New name. New place. New responsibility.</p>
</div>
</div>
<p className="text-xs text-center text-[#73736E] mt-6 max-w-xl mx-auto italic">
                "Almost every society in history has had a clearly designed process for walking young men from adolescence to manhood. This need for initiation is a life and death matter."
                <span className="block not-italic mt-2 tracking-wider uppercase text-[10px]">— Ronald Rolheiser</span>
</p>
</section>

<div className="flex items-center gap-4 my-16">
<div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3B5E7A]/20"></div>
<div className="text-xs uppercase tracking-widest text-[#3B5E7A] px-5 py-2 border border-[#DCE6EE] rounded-full bg-[#F2F6F9] font-semibold flex items-center gap-2">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Path One — The Boy
            </div>
<div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3B5E7A]/20"></div>
</div>
<section className="mb-20">
<div className="mb-8 px-2">
<h2 className="text-xs uppercase tracking-widest text-[#73736E] mb-1">Ages 13–18 · Boyhood to Manhood</h2>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight text-[#1C1C1A]">The Formation of the Boy</h3>
</div>

<div className="mb-12 relative">
<div className="absolute left-6 top-16 bottom-0 w-px bg-[#DCE6EE] hidden md:block"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#DCE6EE] bg-[#F2F6F9] text-[#3B5E7A] flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A]">Separation — The Break</h4>
<p className="text-xs text-[#73736E] mt-1 tracking-wide">Age 13 · The formal beginning · Boyhood acknowledged and ended</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pl-16">
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5 flex items-center gap-2">
<iconify-icon icon="solar:list-check-linear" strokeWidth="1.5"></iconify-icon> What Happens
                        </h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                A formal ceremony marks the threshold — not graduation, something more
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Father speaks over his son, names what he sees, declares the journey beginning
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Letters from men who know him read aloud — this is who you are becoming
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                A symbolic gift given: watch, knife, ring — something that carries weight
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Physical challenge planned: the boy is told he will face something hard
                            </li>
</ul>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5 flex items-center gap-2">
<iconify-icon icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon> The Underlying Psychology
                        </h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Erikson: identity crisis as threshold — he needs elders to help him cross
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Attachment theory: healthy separation from mother's comfort is necessary and good
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Rohr: boys need an outer journey to get to the inner one — task opens the heart
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Gilmore: cross-culturally, separation from childhood world is non-negotiable
                            </li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed">
<span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>
                                Chu: peer approval fills identity vacuums — elders must speak first
                            </li>
</ul>
</div>
<div className="md:col-span-2 bg-[#F2F6F9]/50 border border-[#DCE6EE] rounded-xl p-5 text-sm text-[#73736E] leading-relaxed">
<strong className="block text-[10px] tracking-widest uppercase text-[#3B5E7A] mb-1.5 font-semibold">The Ancient Practice</strong>
                        Maasai. Xhosa. Lakota. Spartan. All varied. All the same at the core: the boy was taken from home into the care of men who held him accountable to becoming someone. The father doesn't do this alone. The community of men does it together.
                    </div>
</div>
</div>

<div className="mb-12 relative">
<div className="absolute left-6 top-16 bottom-0 w-px bg-[#DCE6EE] hidden md:block"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#DCE6EE] bg-[#F2F6F9] text-[#3B5E7A] flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:hourglass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A]">Liminality — The Long Formation</h4>
<p className="text-xs text-[#73736E] mt-1 tracking-wide">Ages 13–18 · The five-year threshold · The Primal Path</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pl-16">
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5 flex items-center gap-2">
<iconify-icon icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon> Five Shifts
                        </h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Ease to Difficulty — he learns to face what is hard rather than avoid it</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Selfishness to Service — he practices giving rather than consuming</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Passivity to Initiative — he begins to act rather than wait</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Isolation to Brotherhood — he enters real community with other men</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Boyhood to Manhood — he owns his identity and story</li>
</ul>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5 flex items-center gap-2">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon> Weekly Formation
                        </h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Daily deposit: father speaks into the day, brief but consistent</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Weekly content: a lesson on strength, courage, mastery, or honor</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Monthly cohort: son and father alongside other pairs</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Sectional challenges: wilderness, service, physical ordeals, silence</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Biographies of men who lived well: Shackleton, Roosevelt</li>
</ul>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5">MBA Principles</h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Gentleman: integrity over appearances</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Scholar: wonder and deep thinking</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Athlete: resilience built through challenge</li>
</ul>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5">Nervous System &amp; Body</h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Teens live in chronic sympathetic activation</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Somatic practices needed: breath, movement</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Teach them the stress cycle closes</li>
</ul>
</div>
</div>
</div>

<div className="mb-12 relative">
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#DCE6EE] bg-[#F2F6F9] text-[#3B5E7A] flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:login-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A]">Reintegration — The Welcome</h4>
<p className="text-xs text-[#73736E] mt-1 tracking-wide">Age 18 · The culminating ceremony · Community reception</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pl-16">
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5 flex items-center gap-2">
<iconify-icon icon="solar:confetti-linear" strokeWidth="1.5"></iconify-icon> The Ceremony
                        </h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Men gather who have watched this boy become a man</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Father makes public declaration: "I see a man in you."</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Elder men speak over him — assigning identity</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Community changes how it relates to him</li>
</ul>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#3B5E7A] font-semibold mb-5 flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> What Research Shows
                        </h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Ubuntu: you become a person through persons</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Initiation without reception is just an experience</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>He needs to know: when did I become a man?</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#3B5E7A] opacity-50"></span>Without this, men spend decades asking</li>
</ul>
</div>
</div>
</div>
</section>

<div className="flex items-center gap-4 my-16">
<div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#5C3A2E]/20"></div>
<div className="text-xs uppercase tracking-widest text-[#5C3A2E] px-5 py-2 border border-[#EAE0DC] rounded-full bg-[#F7F4F2] font-semibold flex items-center gap-2">
<iconify-icon icon="solar:user-broken-linear" strokeWidth="1.5"></iconify-icon>
                Path Two — The Man
            </div>
<div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#5C3A2E]/20"></div>
</div>
<section className="mb-20">
<div className="mb-8 px-2">
<h2 className="text-xs uppercase tracking-widest text-[#73736E] mb-1">The Uninitiated Man · Second Initiation</h2>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight text-[#1C1C1A]">The Healing and Becoming of the Man</h3>
</div>

<div className="mb-12 relative">
<div className="absolute left-6 top-16 bottom-0 w-px bg-[#EAE0DC] hidden md:block"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#EAE0DC] bg-[#F7F4F2] text-[#5C3A2E] flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A]">Separation — The Necessary Fall</h4>
<p className="text-xs text-[#73736E] mt-1 tracking-wide">Acknowledging the wound · The false self dismantled</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pl-16">
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#5C3A2E] font-semibold mb-5">What Brings Men Here</h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Marriage in breakdown or collapse</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Career crisis — achievement is hollow, identity scattered</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Father wound surfacing — rage, passivity inherited</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Depression or numbing — addiction, disappearing to work</li>
</ul>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#5C3A2E] font-semibold mb-5">The First Clinical Task</h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Acknowledge the wound exists — stop denying</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Find a witness: therapist, guide, trusted elder</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Regulate the nervous system (Polyvagal)</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Name the false self and what it cost him</li>
</ul>
</div>
</div>
</div>

<div className="mb-12 relative">
<div className="absolute left-6 top-16 bottom-0 w-px bg-[#EAE0DC] hidden md:block"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#EAE0DC] bg-[#F7F4F2] text-[#5C3A2E] flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A]">Liminality — The Inner Work</h4>
<p className="text-xs text-[#73736E] mt-1 tracking-wide">Shadow integration · Wound as teacher · Brotherhood</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pl-16">
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#5C3A2E] font-semibold mb-5">Shadow Work</h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Map the shadow: what was buried in boyhood?</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Identify the wounds of the masculine &amp; feminine</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>De-couple wound from belief</li>
</ul>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#5C3A2E] font-semibold mb-5">Brotherhood as Medium</h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Identity cannot regulate in isolation</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Wisdom transfers person-to-person</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>The wound is the price of admission</li>
</ul>
</div>
</div>
</div>

<div className="mb-12 relative">
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#EAE0DC] bg-[#F7F4F2] text-[#5C3A2E] flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:shield-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight text-[#1C1C1A]">Reintegration — The Man Returning</h4>
<p className="text-xs text-[#73736E] mt-1 tracking-wide">From wound-driven to love-driven · The eldering call</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pl-16">
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-[#5C3A2E] font-semibold mb-5">Markers of Reintegration</h5>
<ul className="space-y-3">
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Can hold space for others' pain without destabilizing</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Leads from security, not fear</li>
<li className="relative pl-5 text-sm text-[#3D3D38] leading-relaxed"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#5C3A2E] opacity-50"></span>Asks: what can I give? not: what do I get?</li>
</ul>
</div>
<div className="md:col-span-1 bg-[#F7F4F2]/50 border border-[#EAE0DC] rounded-xl p-5 text-sm text-[#73736E] leading-relaxed flex flex-col justify-center">
<strong className="block text-[10px] tracking-widest uppercase text-[#5C3A2E] mb-1.5 font-semibold">The Sacred Wound</strong>
                        "There is a man on the other side of your wound. A man who is more real, more grounded. A man who doesn't need to pretend because he has made peace with his imperfections."
                    </div>
</div>
</div>
</section>

<div className="flex items-center gap-4 my-16">
<div className="h-px flex-1 bg-[#EBE8E0]"></div>
<div className="text-xs uppercase tracking-widest text-[#73736E]">Core Principles</div>
<div className="h-px flex-1 bg-[#EBE8E0]"></div>
</div>
<section className="mb-20">
<div className="mb-8 px-2 text-center">
<h2 className="text-xs uppercase tracking-widest text-[#73736E] mb-1">From Every Tradition</h2>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight text-[#1C1C1A]">Five Non-Negotiables</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<div className="font-['Playfair_Display'] text-3xl font-semibold text-[#EBE8E0] mb-3">01</div>
<h4 className="text-sm font-semibold text-[#1C1C1A] mb-2">Identity Must Be Given</h4>
<p className="text-xs text-[#73736E] leading-relaxed">Children cannot construct a self from scratch. Elders speak identity — not praise. Fills what peer approval cannot.</p>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<div className="font-['Playfair_Display'] text-3xl font-semibold text-[#EBE8E0] mb-3">02</div>
<h4 className="text-sm font-semibold text-[#1C1C1A] mb-2">Difficulty Is the Curriculum</h4>
<p className="text-xs text-[#73736E] leading-relaxed">Every tradition used structured ordeal. A boy untested doesn't know who he is. Neither does a man who never faced the wound.</p>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<div className="font-['Playfair_Display'] text-3xl font-semibold text-[#EBE8E0] mb-3">03</div>
<h4 className="text-sm font-semibold text-[#1C1C1A] mb-2">Virtue Is Embodied</h4>
<p className="text-xs text-[#73736E] leading-relaxed">Character is closer to athletic training than academic learning. Service before self isn't a value — it's a posture to practice.</p>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<div className="font-['Playfair_Display'] text-3xl font-semibold text-[#EBE8E0] mb-3">04</div>
<h4 className="text-sm font-semibold text-[#1C1C1A] mb-2">Relationship Is the Medium</h4>
<p className="text-xs text-[#73736E] leading-relaxed">No tradition formed character through curriculum alone. Embedded in graduated relational accountability.</p>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<div className="font-['Playfair_Display'] text-3xl font-semibold text-[#EBE8E0] mb-3">05</div>
<h4 className="text-sm font-semibold text-[#1C1C1A] mb-2">Community Must Receive</h4>
<p className="text-xs text-[#73736E] leading-relaxed">Initiation without reception is just an experience. The ceremony isn't decoration — it is the mechanism of change.</p>
</div>
<div className="bg-white border border-[#EBE8E0] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<div className="font-['Playfair_Display'] text-3xl font-semibold text-[#A8894A]/40 mb-3">06</div>
<h4 className="text-sm font-semibold text-[#1C1C1A] mb-2">The Wound Is the Door</h4>
<p className="text-xs text-[#73736E] leading-relaxed">Both paths move through pain, not around it. Trauma without witness destroys. Ordeal with witness forms.</p>
</div>
</div>
</section>

<section className="mb-20">
<h3 className="text-xs uppercase tracking-widest text-[#73736E] mb-6 text-center">Synthesis of Voices</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
<div className="border border-[#EBE8E0] bg-white rounded-xl p-4 shadow-sm">
<div className="text-[10px] uppercase tracking-widest text-[#73736E] mb-1.5 font-semibold">Rohr</div>
<p className="text-xs text-[#3D3D38] leading-relaxed">Men need outer journey to reach inner truth. The necessary fall is the architecture.</p>
</div>
<div className="border border-[#EBE8E0] bg-white rounded-xl p-4 shadow-sm">
<div className="text-[10px] uppercase tracking-widest text-[#73736E] mb-1.5 font-semibold">Tyson</div>
<p className="text-xs text-[#3D3D38] leading-relaxed">Five shifts across five years. Consistent rhythm over sporadic heroics.</p>
</div>
<div className="border border-[#EBE8E0] bg-white rounded-xl p-4 shadow-sm">
<div className="text-[10px] uppercase tracking-widest text-[#73736E] mb-1.5 font-semibold">Van der Kolk</div>
<p className="text-xs text-[#3D3D38] leading-relaxed">The body keeps score. Nervous system is the first formation site.</p>
</div>
</div>
</section>

<div className="relative rounded-3xl overflow-hidden shadow-2xl">

<img alt="Campfire sparks in the dark" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-[#1C1C1A]/85 backdrop-blur-sm"></div>

<div className="relative z-10 p-8 sm:p-12 text-center text-[#FAF8F2]">
<iconify-icon className="text-3xl text-[#A8894A] mb-4" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight mb-4">Men Fully Alive</h3>
<p className="text-sm text-[#EBE8E0]/80 max-w-xl mx-auto leading-relaxed mb-10 font-light">
                    Both paths move the same direction: from a self-centered, unformed identity toward a self-giving, purposeful one — by placing a man inside a story bigger than himself.
                </p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#EBE8E0]/10 border-t border-[#EBE8E0]/10 pt-8">
<div className="py-2 sm:px-4">
<span className="block font-['Playfair_Display'] text-base font-semibold tracking-wide text-white mb-1">Love</span>
<span className="block text-[10px] uppercase tracking-wider text-[#EBE8E0]/50">From Strength</span>
</div>
<div className="py-2 sm:px-4">
<span className="block font-['Playfair_Display'] text-base font-semibold tracking-wide text-white mb-1">Strength</span>
<span className="block text-[10px] uppercase tracking-wider text-[#EBE8E0]/50">With Tenderness</span>
</div>
<div className="py-2 sm:px-4">
<span className="block font-['Playfair_Display'] text-base font-semibold tracking-wide text-white mb-1">Honor</span>
<span className="block text-[10px] uppercase tracking-wider text-[#EBE8E0]/50">Daily Posture</span>
</div>
<div className="py-2 sm:px-4">
<span className="block font-['Playfair_Display'] text-base font-semibold tracking-wide text-white mb-1">Integrity</span>
<span className="block text-[10px] uppercase tracking-wider text-[#EBE8E0]/50">Unseen Reality</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
