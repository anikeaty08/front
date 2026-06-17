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



        document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#27272a]/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-['Georgia',_serif] text-xl tracking-tighter text-[#ededed] font-medium" href="https://emergeusconference.com/" style={{letterSpacing: '-0.05em'}}>WA</a>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="text-[#a1a1aa] hover:text-[#ededed] transition-colors duration-200" href="https://emergeusconference.com/">Home</a>
</div>
</div>
</nav>
<main className="flex-grow">

<header className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 flex flex-col items-center justify-center text-center px-6">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#CC9A18]/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18181b]/50 border border-[#CC9A18]/20 text-[#CC9A18] text-xs font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
<iconify-icon height="16" icon="solar:crown-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Unified Leadership
            </div>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-['Georgia',_serif] text-[#ededed] tracking-tight leading-tight max-w-4xl mx-auto mb-6">
                The <span className="text-[#CC9A18]">WahAngela</span> Kingdom
            </h1>
<p className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
                A powerful partnership of leadership, vision, and purpose dedicated to uplifting Africa and guiding individuals back to the awareness of their predestined identity and purpose given by the divine presence of Life Himself (GOD).
            </p>
</header>

<section className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-['Georgia',_serif] text-[#ededed] tracking-tight mb-4">Sovereign Alignment</h2>
<p className="text-sm text-[#a1a1aa]">The WahAngela Kingdom represents the unified leadership between:</p>
</div>
<div className="grid md:grid-cols-2 gap-6 relative">

<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#27272a] items-center justify-center z-10 text-[#CC9A18]">
<iconify-icon height="20" icon="solar:link-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>

<div className="group relative p-8 sm:p-10 rounded-2xl bg-[#18181b]/30 border border-[#27272a] hover:bg-[#18181b]/60 hover:border-[#CC9A18]/30 transition-all duration-300 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CC9A18]/20 to-transparent border border-[#CC9A18]/30 flex items-center justify-center mb-6 text-[#CC9A18]">
<iconify-icon height="32" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl sm:text-2xl font-['Georgia',_serif] text-[#ededed] tracking-tight mb-2">Prof. Dr. Waheed A. Musah</h3>
<p className="text-[#CC9A18] text-xs font-medium tracking-widest uppercase">Sovereign President</p>
</div>

<div className="group relative p-8 sm:p-10 rounded-2xl bg-[#18181b]/30 border border-[#27272a] hover:bg-[#18181b]/60 hover:border-[#CC9A18]/30 transition-all duration-300 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CC9A18]/20 to-transparent border border-[#CC9A18]/30 flex items-center justify-center mb-6 text-[#CC9A18]">
<iconify-icon height="32" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl sm:text-2xl font-['Georgia',_serif] text-[#ededed] tracking-tight mb-2">Prof. Dr. Angela L. Harris</h3>
<p className="text-[#CC9A18] text-xs font-medium tracking-widest uppercase">Co-President</p>
</div>
</div>
</section>

<section className="border-y border-[#27272a] bg-[#18181b]/10 py-20 sm:py-32 relative overflow-hidden">

<div className="absolute -right-64 -top-64 w-[500px] h-[500px] bg-[#CC9A18]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] text-[#CC9A18] mb-6">
<iconify-icon height="20" icon="solar:flag-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-['Georgia',_serif] text-[#ededed] tracking-tight mb-6 leading-snug">Restoration of the Kingdom Agenda</h2>
<div className="space-y-6 text-[#a1a1aa] text-base leading-relaxed">
<p>
                                This kingdom alignment emphasizes leadership grounded in service, education, humanitarian advancement, and cultural restoration.
                            </p>
<p>
                                The WahAngela Kingdom represents the restoration of the Kingdom Agenda, where individuals develop Christlike character spiritually and use their leadership to transform communities.
                            </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-6 rounded-xl border border-[#27272a]/80 bg-[#0a0a0a]/50 hover:border-[#CC9A18]/40 transition-colors duration-300">
<iconify-icon className="text-[#CC9A18] text-2xl mb-4 block" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-[#ededed] text-base font-medium tracking-tight mb-2">Service</h4>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Leadership grounded in serving others and transforming communities.</p>
</div>
<div className="p-6 rounded-xl border border-[#27272a]/80 bg-[#0a0a0a]/50 hover:border-[#CC9A18]/40 transition-colors duration-300">
<iconify-icon className="text-[#CC9A18] text-2xl mb-4 block" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-[#ededed] text-base font-medium tracking-tight mb-2">Education</h4>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Fostering knowledge and awareness of predestined purpose.</p>
</div>
<div className="p-6 rounded-xl border border-[#27272a]/80 bg-[#0a0a0a]/50 hover:border-[#CC9A18]/40 transition-colors duration-300">
<iconify-icon className="text-[#CC9A18] text-2xl mb-4 block" icon="solar:globe-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-[#ededed] text-base font-medium tracking-tight mb-2">Humanitarian</h4>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Dedicated to uplifting Africa and advancing global well-being.</p>
</div>
<div className="p-6 rounded-xl border border-[#27272a]/80 bg-[#0a0a0a]/50 hover:border-[#CC9A18]/40 transition-colors duration-300">
<iconify-icon className="text-[#CC9A18] text-2xl mb-4 block" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-[#ededed] text-base font-medium tracking-tight mb-2">Restoration</h4>
<p className="text-xs text-[#a1a1aa] leading-relaxed">Reclaiming cultural identity and developing spiritual character.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 sm:py-32 text-center">
<div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-[#CC9A18]/30 via-[#27272a] to-transparent overflow-hidden">
<div className="absolute inset-0 bg-[#0a0a0a] rounded-3xl z-0"></div>
<div className="relative z-10 bg-[#0a0a0a]/60 backdrop-blur-xl rounded-[23px] px-6 py-12 sm:p-16">
<div className="mx-auto w-16 h-16 rounded-full bg-[#18181b] border border-[#CC9A18]/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(204,154,24,0.1)]">
<iconify-icon className="text-[#CC9A18] text-2xl" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl font-['Georgia',_serif] text-[#ededed] tracking-tight mb-6">Official Crowning Ceremony</h2>
<p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
                        During the EMERGE Us Humanity International Conference, the official Crowning of the WahAngela Kingdom will take place as part of the leadership induction ceremony.
                    </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#27272a]/50 bg-[#0a0a0a] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
<p className="font-['Georgia',_serif] text-xl tracking-tighter text-[#ededed] font-medium mb-4" style={{letterSpacing: '-0.05em'}}>WA</p>
<p className="text-xs text-[#71717a]">
                © <span id="year"></span> EMERGE Us Humanity International Conference. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
