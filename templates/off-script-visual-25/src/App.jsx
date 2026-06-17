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



      lucide.createIcons();

      // Form Handling Logic
      const form = document.getElementById('contact-form');
      const modal = document.getElementById('success-modal');
      const modalContent = document.getElementById('modal-content');
      const closeBtn = document.getElementById('close-modal-btn');

      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const formData = new FormData(form);

          try {
            const response = await fetch(form.action, {
              method: 'POST',
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            });

            if (response.ok) {
              // Reset form
              form.reset();
              
              // Show modal
              modal.classList.remove('hidden');
              // Small timeout to allow display:flex to apply before opacity transition
              setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
              }, 10);
            } else {
              alert('Oops! There was a problem submitting your form. Please try again.');
            }
          } catch (error) {
            alert('Oops! There was a problem submitting your form. Please try again.');
          }
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.classList.add('opacity-0');
          modalContent.classList.remove('scale-100');
          modalContent.classList.add('scale-95');
          
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 300);
        });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md pt-6 md:pt-0 transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
<span className="leading-none text-[9px] font-semibold text-black tracking-tighter text-center">
              OFF
              <br className=""/>
              SCRIPT
            </span>
</div>
<span className="hidden md:block text-sm font-medium tracking-widest text-white uppercase">
            Visual Engineering™
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#work">Portfolio</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#about">About Ryan</a>
</div>
<a className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all" href="#contact">
          Book Now
          <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="relative pt-44 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex gap-2 text-xs font-medium text-zinc-400 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
          Accepting new projects
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.95]">
          Visual Engineering
          <br/>
          for the Modern Era.
        </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Hi, I'm <span className="text-white font-medium">Ryan Day</span>. With over a decade behind the lens, I craft high-end visual content
          for creators, brands, and artists.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg text-base font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#work">
            View Selected Work
          </a>
<a className="w-full sm:w-auto px-8 py-4 border border-zinc-800 hover:border-zinc-600 text-white rounded-lg text-base font-medium transition-colors bg-zinc-950 flex items-center justify-center gap-2" href="#contact">
            Get in Touch
          </a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6">
<p className="text-center text-sm text-zinc-500 mb-8 font-medium uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-500">
<span className="text-xl font-semibold text-white tracking-tight">DAMIEN PRINCE</span>
<span className="text-xl font-semibold text-white tracking-tight">JACK TV</span>
<span className="text-xl font-semibold text-white tracking-tight">THE PRINCE FAMILY</span>
<span className="text-xl font-semibold text-white tracking-tight">OFF_SCRIPT_</span>
<span className="text-xl font-semibold text-white tracking-tight">NETFLIX</span>
</div>
</div>
</div>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative" id="expertise">
<div className="absolute inset-0 -z-10 pointer-events-none">
<div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-[120px] opacity-60" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.22), rgba(16,185,129,0) 70%)'}}></div>
<div className="absolute -top-28 -right-32 h-[520px] w-[520px] rounded-full blur-[130px] opacity-60" style={{background: 'radial-gradient(closest-side, rgba(99,102,241,0.22), rgba(99,102,241,0) 70%)'}}></div>
<div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full blur-[140px] opacity-60" style={{background: 'radial-gradient(closest-side, rgba(59,130,246,0.20), rgba(59,130,246,0) 70%)'}}></div>
<div className="absolute inset-0 opacity-80" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.00) 35%, rgba(255,255,255,0.02) 100%)'}}></div>
</div>
<div className="max-w-7xl mx-auto relative">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Why Off Script?</h2>
<p className="text-lg text-zinc-400 max-w-xl font-light">
            We don't just point and shoot. We engineer visuals that tell compelling stories and drive engagement.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="group hover:bg-zinc-900/40 transition-colors overflow-hidden bg-zinc-900/20 border-zinc-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(1000px 280px at 15% 0%, rgba(16,185,129,0.16), rgba(16,185,129,0) 55%), radial-gradient(900px 260px at 90% 25%, rgba(99,102,241,0.14), rgba(99,102,241,0) 60%)'}}></div>
<div className="absolute inset-0 pointer-events-none opacity-60" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 35%)'}}></div>
<div className="h-12 w-12 rounded-lg bg-white/5 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 relative">
<div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.28), rgba(16,185,129,0) 70%)'}}></div>
<svg className="lucide lucide-video w-6 h-6 relative" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative">Production</h3>
<p className="text-lg text-zinc-400 font-light relative">
              Cinema-grade 4K/8K recording using industry-standard equipment. From run-and-gun to full studio setups.
            </p>
</div>
<div className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors relative overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(1000px 280px at 15% 0%, rgba(59,130,246,0.16), rgba(59,130,246,0) 55%), radial-gradient(900px 260px at 90% 25%, rgba(16,185,129,0.12), rgba(16,185,129,0) 60%)'}}></div>
<div className="absolute inset-0 pointer-events-none opacity-60" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 35%)'}}></div>
<div className="h-12 w-12 rounded-lg bg-white/5 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 relative">
<div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(closest-side, rgba(59,130,246,0.30), rgba(59,130,246,0) 70%)'}}></div>
<svg className="lucide lucide-scissors w-6 h-6 relative" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative">Post-Production</h3>
<p className="text-lg text-zinc-400 font-light relative">
              Advanced editing, color grading, and sound design. 24-hour turnaround capabilities for social content.
            </p>
</div>
<div className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors relative overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(1000px 280px at 15% 0%, rgba(99,102,241,0.18), rgba(99,102,241,0) 55%), radial-gradient(900px 260px at 90% 25%, rgba(59,130,246,0.14), rgba(59,130,246,0) 60%)'}}></div>
<div className="absolute inset-0 pointer-events-none opacity-60" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 35%)'}}></div>
<div className="h-12 w-12 rounded-lg bg-white/5 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 relative">
<div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(closest-side, rgba(99,102,241,0.32), rgba(99,102,241,0) 70%)'}}></div>
<svg className="lucide lucide-zap w-6 h-6 relative" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative">Visual Strategy</h3>
<p className="text-lg text-zinc-400 font-light relative">
              Consulting on visual identity and content rollout strategies to maximize audience retention.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<span className="block uppercase text-sm font-medium text-indigo-500 tracking-wider mb-2">Case Study</span>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight">Business Promo Videos</h2>
<p className="text-lg font-light text-zinc-400 max-w-2xl mt-2">Short, cinematic introductions designed to help business owners tell their story and showcase their unique services.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group block relative">
<div className="aspect-video overflow-hidden bg-zinc-800 border-white/10 border rounded-xl mb-4 relative shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/rAEx5-1cShM?si=SuCe8AbB6QBwc21J" title="YouTube video player"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-indigo-400 transition-colors text-lg font-medium text-white">Romas Pizza</h3>
<p className="text-sm text-zinc-500 mt-1">Business • Food</p>
</div>
</div>
</div>

<div className="group block relative">
<div className="aspect-video overflow-hidden bg-zinc-800 border-white/10 border rounded-xl mb-4 relative shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/ij7TL7D4Ps0?si=O-Y8PFiDyOK1yD4w" title="YouTube video player" width="560"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-indigo-400 transition-colors text-lg font-medium text-white">Royce Barbershop</h3>
<p className="text-sm text-zinc-500 mt-1">Business • Service</p>
</div>
</div>
</div>

<div className="group block relative">
<div className="aspect-video overflow-hidden bg-zinc-800 border-white/10 border rounded-xl mb-4 relative shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/F71iz9DU088?si=FD76D_TJeryQSV7Z" title="YouTube video player" width="560"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-indigo-400 transition-colors text-lg font-medium text-white">Latrail at Montes</h3>
<p className="text-sm text-zinc-500 mt-1">Business • Entertainment</p>
</div>
</div>
</div>

<div className="group block relative">
<div className="aspect-video overflow-hidden bg-zinc-800 border-white/10 border rounded-xl mb-4 relative shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/n23z7cHJ28k?si=rqPNmPx3vGd8uAtx" title="YouTube video player"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-indigo-400 transition-colors text-lg font-medium text-white">Savage Sunday Car Meet</h3>
<p className="text-sm text-zinc-500 mt-1">Business • Exotic Car Meet</p>
</div>
</div>
</div>

<div className="group block relative">
<div className="aspect-video overflow-hidden bg-zinc-800 border-white/10 border rounded-xl mb-4 relative shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/ulOHZCTROsA?si=erQ-yBcfKA--v_zo" title="YouTube video player" width="560"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-indigo-400 transition-colors text-lg font-medium text-white">Ozi Cruz Tattoo Artist</h3>
<p className="text-sm text-zinc-500 mt-1">Business • Tattoo</p>
</div>
</div>
</div>

<div className="group block relative">
<div className="aspect-video overflow-hidden bg-zinc-800 border-white/10 border rounded-xl mb-4 relative shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/eGCfaFeeW6U?si=uxz_yo3G6Zghsvgk" title="YouTube video player" width="560"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-indigo-400 transition-colors text-lg font-medium text-white">Latrail at Montes</h3>
<p className="text-sm text-zinc-500 mt-1">Business • Auto Repair</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<span className="text-blue-500 font-medium text-sm mb-2 block tracking-wider uppercase">Case Study</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Jack TV Originals</h2>
<p className="text-lg text-zinc-400 mt-2 font-light max-w-2xl">
              High-energy viral entertainment and lifestyle content. Precision editing and fast-paced storytelling designed for maximum retention.
            </p>
</div>
<a className="flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-colors" href="https://www.youtube.com/@JackTV" target="_blank">
            View Channel
            <svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group block relative">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 bg-zinc-800 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/TYDkO6JzeJA?si=t-0qsHiLolhWKMMt" title="YouTube video player"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-blue-400 transition-colors text-lg font-medium text-white">
                  Loyalty Test *BACKFIRES* Girlfriend Gets Exposed Instead ?!😳
                </h3>
<p className="text-sm text-zinc-500 mt-1">Lifestyle &amp; Vlog • Edited by Ryan Day</p>
</div>
</div>
</div>
<div className="group block relative">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 bg-zinc-800 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/U6L6kpFQO4c?si=example" title="YouTube video player"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-blue-400 transition-colors text-lg font-medium text-white">
                  Will Her Girlfriend CHEAT… With Her TWIN Sister?! 😳
                </h3>
<p className="text-sm text-zinc-500 mt-1">High Retention • Viral Challenge</p>
</div>
</div>
</div>
<div className="group block relative">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 bg-zinc-800 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/bbqplX8c7UM?si=BmRMxjjOYS_fi5sZ" title="YouTube video player" width="560"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="group-hover:text-blue-400 transition-colors text-lg font-medium text-white">
                  Will His "Hairstylist" Girlfriend CHEAT..… And Do MORE Than Hair?!
                </h3>
<p className="text-sm text-zinc-500 mt-1">Lifestyle Content • Emotional Storytelling</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-zinc-900/10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<span className="text-emerald-500 font-medium text-sm mb-2 block tracking-wider uppercase">Case Study</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The Prince Family Series</h2>
<p className="text-lg text-zinc-400 mt-2 font-light max-w-2xl">
              A collection of high-impact visual content driving over 50 million combined views. Engineering virality through production excellence.
            </p>
</div>
<a className="flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-colors" href="https://www.youtube.com/@TheOfficialPrinceFamily" target="_blank">
            View Channel
            <svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group block relative">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 bg-zinc-800 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/S_SjGegPA7I?si=svOm1ezCrIArBikB" title="YouTube video player"></iframe>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                  Halloween Super Heros Song - The Prince Family Clubhouse
                </h3>
<p className="text-sm text-zinc-500 mt-1">Official Music Video • 146M+ Views</p>
</div>
</div>
</div>
<div className="group block relative">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 bg-zinc-800 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/iVzDwyc-8wo?si=IZ1JrGS5aEORPwNO" title="YouTube video player" width="560"></iframe>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                  THE STRANGER GOT ARRESTED BY THE POLICE, MOM CALLED 911...
                </h3>
<p className="text-sm text-zinc-500 mt-1">The Prince Family Ep.8 • Viral Series</p>
</div>
</div>
</div>
<div className="group block relative">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 bg-zinc-800 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/QzJCGXE4q-M?si=8-lhhm0NgAZuDoMa" title="YouTube video player" width="560"></iframe>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                  STRANGER COMES TO KYRIE &amp; DJ HOUSE Ep.1
                </h3>
<p className="text-sm text-zinc-500 mt-1">The Prince Family • 23M+ Views</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-32 px-6 bg-zinc-900/10 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/2">
<span className="text-white font-medium text-lg mb-4 block">About Ryan Day</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8">
            10+ years of capturing content that commands attention.
          </h2>
<div className="flex gap-4">
<div className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
<span className="block text-2xl font-semibold text-white">10+</span>
<span className="text-sm text-zinc-500">Years Exp.</span>
</div>
<div className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
<span className="block text-2xl font-semibold text-white">50M+</span>
<span className="text-sm text-zinc-500">Views Generated</span>
</div>
</div>
</div>
<div className="md:w-1/2 space-y-6">
<p className="text-xl text-zinc-400 font-light leading-relaxed">
            My name is Ryan Day. I operate under the moniker <span className="text-white">OFF SCRIPT</span>. I've spent the last decade working
            alongside some of the biggest names in the digital space, including Damien Prince and the Prince Family.
          </p>
<p className="text-xl text-zinc-400 font-light leading-relaxed">
            I believe in "Visual Engineering"—a disciplined approach to creativity where every frame serves a purpose. Whether it's a high-energy
            music video, a corporate interview, or social content that needs to hit viral metrics, I bring a technical eye and a storyteller's
            heart.
          </p>
<div className="pt-6">
<span className="font-signature text-5xl text-white opacity-80 rotate-[-5deg] block">Ryan Day</span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900/30 -z-10"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-white/[0.03] blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-2xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Ready to go Off Script?</h2>
<p className="text-lg text-zinc-400 font-light">
            Tell us about your vision. We accept a limited number of projects per quarter.
          </p>
</div>
<form action="https://formspree.io/f/xnjnwnen" className="md:p-8 overflow-hidden bg-zinc-900/90 border-white/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0_50px_-12px_rgba(255,255,255,0.15)] backdrop-blur-xl space-y-8" id="contact-form" method="POST">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Basic Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="name">Full Name</label>
<input className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-zinc-700 text-sm" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="email">Email Address</label>
<input className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-zinc-700 text-sm" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="company">Company / Brand Name <span className="text-zinc-700 normal-case font-normal tracking-normal ml-1">(Optional)</span></label>
<input className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-zinc-700 text-sm" id="company" name="company" placeholder="Acme Inc." type="text"/>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Project Overview</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="project-type">Project Type</label>
<div className="relative">
<select className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors cursor-pointer text-sm appearance-none" id="project-type" name="project-type">
<option disabled="" selected="" value="">Select type</option>
<option value="commercial">Commercial</option>
<option value="social">Social Media Content</option>
<option value="event">Event Coverage</option>
<option value="brand-film">Brand Film</option>
<option value="product">Product Video</option>
<option value="documentary">Documentary</option>
<option value="other">Other</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="primary-goal">Primary Goal</label>
<div className="relative">
<select className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors cursor-pointer text-sm appearance-none" id="primary-goal" name="primary-goal">
<option disabled="" selected="" value="">Select main goal</option>
<option value="sales">Drive Sales/Conversions</option>
<option value="awareness">Brand Awareness</option>
<option value="growth">Social Media Growth</option>
<option value="documentation">Event Documentation</option>
<option value="recruiting">Recruiting</option>
<option value="education">Education</option>
<option value="other">Other</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2 md:col-span-2">
<span className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest block mb-2">Where Will This Video Be Used?</span>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="usage" type="checkbox" value="Instagram/TikTok"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Instagram / TikTok</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="usage" type="checkbox" value="YouTube"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">YouTube</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="usage" type="checkbox" value="Website"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Website</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="usage" type="checkbox" value="PaidAds"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Paid Ads</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="usage" type="checkbox" value="TV"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">TV / Broadcast</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="usage" type="checkbox" value="Other"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Other</span>
</label>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Scope &amp; Deliverables</h3>
<div className="space-y-2 mb-5">
<span className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest block mb-2">Expected Deliverables</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="deliverables" type="checkbox" value="FinalVideo"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Final edited video(s)</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="deliverables" type="checkbox" value="ShortClips"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Short-form clips (Reels/TikTok)</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="deliverables" type="checkbox" value="RawFootage"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Raw footage</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="deliverables" type="checkbox" value="Vertical9:16"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Vertical versions (9:16)</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="deliverables" type="checkbox" value="Horizontal16:9"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Horizontal versions (16:9)</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="deliverables" type="checkbox" value="Thumbnails"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Thumbnails / Stills</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-colors group sm:col-span-2">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none h-4 w-4 border border-zinc-600 rounded-sm bg-transparent checked:bg-white checked:border-white transition-all" name="deliverables" type="checkbox" value="GuidanceNeeded"/>
<svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">Not sure yet — I need guidance</span>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="timeline">Estimated Timeline</label>
<input className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-zinc-700 text-sm" id="timeline" name="timeline" placeholder="e.g. Need final delivery by Oct 15th" type="text"/>
</div>
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="flexibility">Timeline Flexibility</label>
<div className="relative">
<select className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors cursor-pointer text-sm appearance-none" id="flexibility" name="flexibility">
<option disabled="" selected="" value="">Select flexibility</option>
<option value="fixed">Fixed Deadline</option>
<option value="some">Some Flexibility</option>
<option value="flexible">Fully Flexible</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Budget &amp; Decisions</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="budget">Budget Range (USD)</label>
<div className="relative">
<select className="focus:border-zinc-500 outline-none transition-colors cursor-pointer appearance-none text-sm text-white bg-black/40 w-full border-zinc-800 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="budget" name="budget">
<option disabled="" selected="" value="">Select investment level</option>
<option value="1k-5k">$1k - $5k</option>
<option value="5k-10k">$5k - $10k</option>
<option value="10k-25k">$10k - $25k</option>
<option value="25k-50k">$25k - $50k</option>
<option value="50k+">$50k+</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="decision-maker">Are you the final decision maker?</label>
<div className="relative">
<select className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors cursor-pointer text-sm appearance-none" id="decision-maker" name="decision-maker">
<option disabled="" selected="" value="">Select an option</option>
<option value="yes">Yes, I am</option>
<option value="no">No, others are involved</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="investing">Are you comfortable investing within your budget?</label>
<div className="relative">
<select className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors cursor-pointer text-sm appearance-none" id="investing" name="investing">
<option disabled="" selected="" value="">Select an option</option>
<option value="yes">Yes, we are ready</option>
<option value="guidance">I need guidance on pricing</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Logistics &amp; References</h3>
<div className="grid grid-cols-1 gap-5">
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="location">Shoot Location (City/State or Remote)</label>
<input className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-zinc-700 text-sm" id="location" name="location" placeholder="e.g. Los Angeles, CA" type="text"/>
</div>
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="references">Reference Links / Style Inspiration <span className="text-zinc-700 normal-case font-normal tracking-normal ml-1">(Optional)</span></label>
<textarea className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-zinc-700 text-sm resize-none" id="references" name="references" placeholder="Paste links to videos you like..." rows="2"></textarea>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Project Details</h3>
<div className="space-y-1.5">
<label className="uppercase text-[10px] font-semibold text-zinc-500 tracking-widest" htmlFor="details">Tell us about your vision</label>
<textarea className="w-full bg-black/40 border border-zinc-800 focus:border-zinc-500 text-white rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-zinc-700 text-sm resize-none" id="details" name="details" placeholder="Describe your concept, specific requirements, and what success looks like for this project..." rows="5"></textarea>
</div>
</div>

<div className="pt-2 space-y-4">
<button className="w-full bg-white hover:bg-zinc-200 text-black font-semibold rounded-lg py-4 transition-all flex items-center justify-center gap-2 group text-sm tracking-tight" type="submit">
      Submit Inquiry
      <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="text-center space-y-1">
<p className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">Typically responding within 24 hours</p>
<p className="text-[10px] text-zinc-600">Projects with unclear goals or undefined budgets may not be a fit.</p>
</div>
</div>
</form>
</div>
</section>

<footer className="bg-black border-white/5 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
<span className="text-[10px] leading-none font-semibold text-black tracking-tighter text-center scale-75">
              OFF
              <br/>
              SCRIPT
            </span>
</div>
<span className="text-sm text-zinc-500">© 2026 Ryan Day. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="https://www.instagram.com/ryan2dayy/">
<svg className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300" id="success-modal">
<div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl max-w-md w-full text-center relative shadow-2xl transform scale-95 transition-transform duration-300 mx-4" id="modal-content">
<div className="flex justify-center mb-6">
<div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
<svg className="lucide lucide-check w-8 h-8 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17 4 12"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Submission Received</h3>
<p className="text-zinc-400 mb-8 font-light leading-relaxed">
          Thanks for reaching out. We've received your project details and will be in touch shortly.
        </p>
<button className="w-full bg-white hover:bg-zinc-200 text-black font-semibold rounded-lg py-3 transition-colors text-sm" id="close-modal-btn">
          Close
        </button>
</div>
</div>


    </>
  );
}
