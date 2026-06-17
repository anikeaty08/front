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



        // --- Icon System & Motion Logic ---
        
        const icons = {
            note: document.getElementById('icon-note'),
            disc: document.getElementById('icon-disc'),
            phones: document.getElementById('icon-phones'),
            mic: document.getElementById('icon-mic'),
            drum: document.getElementById('icon-drum'),
            wave: document.getElementById('icon-wave')
        };

        // Logic: [top%, left%, scale, opacity]
        // Goal: Start wide, move towards center (50% 50%) with each step.
        // Final step forms a "Totem" or single cluster in the center.
        
        const scenes = [
            // Scene 0: Hero - Very Wide, corners
            {
                note: [10, 10, 1, 0.05],
                disc: [85, 85, 1, 0.05],
                phones: [15, 85, 1, 0.05],
                mic: [80, 15, 1, 0.05],
                drum: [50, 5, 1, 0.05],
                wave: [50, 95, 1, 0.05]
            },
            // Scene 1: What - Moving inward (25/75 zones)
            {
                note: [20, 25, 1, 0.08],
                disc: [75, 75, 1, 0.08],
                phones: [25, 75, 1, 0.08],
                mic: [75, 25, 1, 0.08],
                drum: [50, 20, 1, 0.08],
                wave: [50, 80, 1, 0.08]
            },
            // Scene 2: Values - Closer (35/65 zones)
            {
                note: [35, 35, 0.9, 0.1],
                disc: [65, 65, 0.9, 0.1],
                phones: [35, 65, 0.9, 0.1],
                mic: [65, 35, 0.9, 0.1],
                drum: [50, 30, 0.9, 0.1],
                wave: [50, 70, 0.9, 0.1]
            },
            // Scene 3: Process - Very Close Orbit
            {
                note: [45, 40, 0.8, 0.12],
                disc: [55, 60, 0.8, 0.12],
                phones: [40, 55, 0.8, 0.12],
                mic: [60, 45, 0.8, 0.12],
                drum: [50, 38, 0.8, 0.12],
                wave: [50, 62, 0.8, 0.12]
            },
            // Scene 4: CTA - THE CONVERGENCE (Center Cluster)
            // They stack almost on top of each other to form a complex shape
            {
                note: [48, 49, 0.7, 0.15],
                disc: [50, 50, 0.6, 0.15], // Center anchor
                phones: [49, 51, 0.7, 0.15],
                mic: [51, 49, 0.7, 0.15],
                drum: [52, 50, 0.7, 0.15],
                wave: [47, 50, 0.7, 0.15]
            }
        ];

        function updateIcons(sceneIndex) {
            const scene = scenes[sceneIndex];
            if (!scene) return;

            Object.keys(icons).forEach(key => {
                const iconEl = icons[key];
                const [top, left, scale, opacity] = scene[key];
                
                // Centering adjustment: The positions are roughly centers, but CSS positions top-left
                // We use transform translate to center the icon on the coordinate
                iconEl.style.top = `${top}%`;
                iconEl.style.left = `${left}%`;
                iconEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
                iconEl.style.opacity = opacity;
            });
        }

        // --- Intersection Observer ---
        const observerOptions = {
            threshold: 0.55 // Trigger when section is mostly visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sceneIndex = parseInt(entry.target.dataset.scene);
                    updateIcons(sceneIndex);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // --- Fade In Animation ---
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

        // Initial call
        updateIcons(0);

    
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
      

<div className="vertical-guide left-6 md:left-12"></div>
<div className="vertical-guide right-6 md:right-12"></div>
<div className="vertical-guide left-1/2 -translate-x-1/2 hidden md:block opacity-50"></div>

<div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" id="icon-layer">

<span className="floating-icon iconify" data-height="80" data-icon="lucide:music" data-width="80" id="icon-note" style={{strokeWidth: '1'}}></span>
<span className="floating-icon iconify" data-height="140" data-icon="lucide:disc-3" data-width="140" id="icon-disc" style={{strokeWidth: '1'}}></span>
<span className="floating-icon iconify" data-height="100" data-icon="lucide:headphones" data-width="100" id="icon-phones" style={{strokeWidth: '1'}}></span>
<span className="floating-icon iconify" data-height="90" data-icon="lucide:mic" data-width="90" id="icon-mic" style={{strokeWidth: '1'}}></span>
<span className="floating-icon iconify" data-height="110" data-icon="lucide:drum" data-width="110" id="icon-drum" style={{strokeWidth: '1'}}></span>
<span className="floating-icon iconify" data-height="160" data-icon="lucide:audio-waveform" data-width="160" id="icon-wave" style={{strokeWidth: '1'}}></span>
</div>

<nav className="fixed top-0 w-full px-6 md:px-12 py-6 z-50 flex justify-between items-center bg-[#F3F2F0]/80 backdrop-blur-sm border-b border-[#E0E0E0]">
<div className="font-sans text-sm font-bold tracking-tight text-[#1A1A1A]">CC / S04</div>
<div className="flex gap-6 items-center">
<div className="font-sans text-[10px] uppercase tracking-widest text-[#555555] hidden sm:block">Status: Dormant</div>
<div className="w-2 h-2 rounded-full bg-[#A85236]"></div>
</div>
</nav>

<main className="relative z-10 w-full max-w-4xl border-x border-[#E0E0E0] bg-[#F3F2F0]/40 min-h-screen mt-16 shadow-[0_0_50px_rgba(0,0,0,0.02)]">

<section className="py-24 md:py-32 px-8 md:px-16 flex flex-col justify-center items-center text-center border-b border-[#E0E0E0]" data-scene="0" id="s-hero">
<div className="fade-in space-y-6">
<span className="inline-block py-1 px-3 border border-[#1A1A1A] rounded-full text-[10px] uppercase tracking-widest font-medium mb-4">
                    Season 04
                </span>
<h1 className="text-6xl md:text-8xl tracking-tighter-custom text-[#1A1A1A] font-medium leading-[0.9]">
                    Rhythm of<br/><span className="italic text-[#555555]">intention</span>.
                </h1>
<p className="text-base md:text-lg text-[#555555] font-normal max-w-md mx-auto pt-4 leading-relaxed">
                    Not noise. Frequency. We gather to listen, align, and construct a coherent body of work.
                </p>
</div>
</section>

<section className="py-20 px-8 md:px-16 border-b border-[#E0E0E0]" data-scene="1" id="s-what">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center fade-in">
<div>
<h2 className="text-4xl md:text-5xl tracking-tight-custom text-[#1A1A1A] mb-6 leading-tight">
                        A temporary <br/>autonomous zone.
                    </h2>
</div>
<div className="space-y-4 text-sm md:text-base text-[#555555] leading-loose">
<p>
<strong className="text-[#1A1A1A]">CC is not an agency.</strong> It is a seasonal unit. We assemble twice a year, lock in for five days, build one project, and disperse.
                    </p>
<p>
                        No portfolios. No open calls. Only resonance.
                    </p>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 border-b border-[#E0E0E0] bg-[#EAE9E6]" data-scene="2" id="s-mission">
<div className="fade-in">
<div className="flex justify-between items-end mb-12 border-b border-[#D1D1D1] pb-4">
<h2 className="text-3xl md:text-4xl italic serif text-[#1A1A1A]">The Protocol</h2>
<span className="text-xs font-mono text-[#555555]">v.4.0</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-[#2A4435] font-semibold">Select</span>
<p className="text-sm text-[#555555] leading-relaxed">Membership is by invitation or successful signal interpretation only.</p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-[#2B3555] font-semibold">Sync</span>
<p className="text-sm text-[#555555] leading-relaxed">Individual ego is surrendered for collective coherence.</p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-[#A85236] font-semibold">Release</span>
<p className="text-sm text-[#555555] leading-relaxed">The artifact is the only metric. If it isn't felt, it didn't happen.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 border-b border-[#E0E0E0]" data-scene="3" id="s-process">
<div className="max-w-2xl mx-auto fade-in">
<span className="block text-center text-xs uppercase tracking-widest text-[#555555] mb-8">Methodology</span>
<div className="space-y-0">

<div className="flex gap-6 py-6 border-b border-[#E0E0E0] items-start">
<span className="text-lg font-serif italic text-[#1A1A1A] w-8">01</span>
<div>
<h4 className="text-lg font-medium text-[#1A1A1A] mb-1">The Signal</h4>
<p className="text-sm text-[#555555]">A theme is broadcast. Interpretation determines entry.</p>
</div>
</div>

<div className="flex gap-6 py-6 border-b border-[#E0E0E0] items-start">
<span className="text-lg font-serif italic text-[#1A1A1A] w-8">02</span>
<div>
<h4 className="text-lg font-medium text-[#1A1A1A] mb-1">The Session</h4>
<p className="text-sm text-[#555555]">Five days. No phones. Analog and digital synthesis.</p>
</div>
</div>

<div className="flex gap-6 py-6 items-start">
<span className="text-lg font-serif italic text-[#1A1A1A] w-8">03</span>
<div>
<h4 className="text-lg font-medium text-[#1A1A1A] mb-1">The Artifact</h4>
<p className="text-sm text-[#555555]">One cohesive release. Vinyl &amp; Web.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 md:px-16 flex flex-col items-center justify-center text-center relative overflow-hidden" data-scene="4" id="s-contact">
<div className="relative z-10 w-full max-w-sm fade-in bg-[#F3F2F0]/90 p-8 rounded-sm backdrop-blur-md border border-[#E0E0E0] shadow-sm">
<h4 className="text-2xl font-normal text-[#1A1A1A] serif mb-2">Request Dialogue</h4>
<p className="text-xs text-[#555555] mb-8 font-sans">SEASON 05 WAITLIST</p>
<form className="space-y-6" onsubmit="event.preventDefault()">
<div className="text-left">
<label className="block text-[10px] uppercase tracking-widest text-[#555555] mb-1">Identity</label>
<input className="custom-input" placeholder="Name or Alias" type="text"/>
</div>
<div className="text-left">
<label className="block text-[10px] uppercase tracking-widest text-[#555555] mb-1">Frequency</label>
<input className="custom-input" placeholder="Email" type="email"/>
</div>
<button className="w-full mt-4 bg-[#1A1A1A] text-[#F3F2F0] py-3 text-xs uppercase tracking-widest hover:bg-[#333] transition-colors">
                        Transmit
                    </button>
</form>
</div>
<div className="mt-12 space-y-2 fade-in">
<div className="h-px w-12 bg-[#1A1A1A] mx-auto"></div>
<p className="text-[10px] text-[#888] uppercase tracking-widest">London — New York</p>
</div>
</section>
</main>
<footer className="w-full max-w-4xl px-8 py-6 flex justify-between items-center text-[10px] text-[#999] uppercase tracking-wider">
<span>© 2024 CC</span>
<span>Sound on</span>
</footer>


    </>
  );
}
