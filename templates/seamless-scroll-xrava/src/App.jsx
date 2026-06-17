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

        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        
        document.addEventListener('mousemove', (e) => {
            // Simple follow with slight delay handled by CSS transition
            const x = e.clientX;
            const y = e.clientY;
            
            cursorDot.style.left = `${x}px`;
            cursorDot.style.top = `${y}px`;
            
            // Request animation frame for smoother ring movement if desired, 
            // but CSS transition works well for "floating" feel
            cursorRing.style.left = `${x}px`;
            cursorRing.style.top = `${y}px`;

            // Hover State
            const target = e.target;
            if (target.closest('.interactable') || target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.glass-card')) {
                document.body.classList.add('hovering');
            } else {
                document.body.classList.remove('hovering');
            }
        });

        // --- Seamless Horizontal Scroll Logic ---
        // We use the scroll position of the window relative to the sticky container
        // to transform the horizontal track.
        
        const scrollSection = document.getElementById('scroll-section');
        const track = document.getElementById('horizontal-track');
        const progressBar = document.getElementById('progress-bar');
        
        function handleScroll() {
            const stickyTop = scrollSection.offsetTop;
            const stickyHeight = scrollSection.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            
            // Calculate how far we are into the section
            // Start when top of section hits top of viewport
            const start = stickyTop;
            // End when bottom of section hits bottom of viewport
            const end = stickyTop + stickyHeight - windowHeight;
            
            let progress = (scrollY - start) / (end - start);
            
            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));
            
            // Calculate maximum horizontal scroll distance
            // Width of track minus width of viewport
            const trackWidth = track.scrollWidth;
            const viewportWidth = window.innerWidth;
            const maxTranslate = trackWidth - viewportWidth;
            
            // Apply transform
            // We scroll to the left, so negative translateX
            const translateX = -(progress * maxTranslate);
            
            track.style.transform = `translateX(${translateX}px)`;
            
            // Update visual progress bar
            if(progressBar) progressBar.style.width = `${progress * 100}%`;
        }

        // Listen to scroll
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial calculation in case of refresh
        handleScroll();
        
        // Handle resize to recalculate widths
        window.addEventListener('resize', handleScroll);

    
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
      

<div className="cursor-dot" id="cursor-dot"></div>
<div className="cursor-ring" id="cursor-ring"></div>

<div className="fixed inset-0 pointer-events-none -z-10">
<div className="absolute inset-0 bg-grid-pattern"></div>
<div className="blob bg-orange-600/20 w-96 h-96 top-[-10%] left-[-10%]"></div>
<div className="blob bg-blue-600/20 w-96 h-96 bottom-[-10%] right-[-10%] animation-delay-2000"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
</div>

<header className="fixed top-0 left-0 w-full p-6 lg:px-12 lg:py-8 flex justify-between items-center z-50 mix-blend-screen">
<div className="flex items-center gap-3 interactable cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
<svg className="stroke-current" fill="none" height="18" stroke="white" strokeWidth="2.5" viewbox="0 0 24 24" width="18"><path d="M12 2v20M2 12h20"></path></svg>
</div>
<span className="font-manrope font-bold text-lg tracking-tight text-white">Nomad<span className="text-orange-500">.ai</span></span>
</div>
<nav className="hidden md:flex space-x-8 text-xs font-mono text-gray-400 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
<a className="hover:text-white transition-colors interactable" href="#">AUTOMATION</a>
<a className="hover:text-white transition-colors interactable" href="#">FLEET</a>
<a className="hover:text-white transition-colors interactable" href="#">PRICING</a>
</nav>
<button className="glass-card px-5 py-2.5 rounded-full text-xs font-semibold text-white hover:bg-white/10 transition-all interactable border border-white/10 hover:border-orange-500/50">
            Sign In
        </button>
</header>
<main>

<section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24">
<div className="max-w-5xl w-full mx-auto z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono mb-8 fade-in-up interactable">
<span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span></span>
                    V4.0 Neural Fleet Live
                </div>

<h1 className="text-5xl md:text-8xl font-manrope font-semibold text-white tracking-tight mb-8 fade-in-up delay-100 leading-[1.1]">
                    Autonomous <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-glow">Exploration.</span>
</h1>

<div className="grid md:grid-cols-2 gap-12 items-start fade-in-up delay-200">
<p className="text-gray-400 text-lg leading-relaxed">
                        The operating system for modern adventure. Solar-powered, Starlink-connected, and fully autonomous mobile basecamps that traverse the globe while you work.
                    </p>

<div className="relative w-full interactable group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-lg p-1.5">
<i className="w-4 h-4 text-gray-500 ml-3" data-lucide="search"></i>
<input className="w-full bg-transparent border-none text-white px-4 py-2 focus:outline-none placeholder-gray-600 text-sm font-mono" placeholder="Where is your next waypoint?" type="text"/>
<button className="bg-white text-black px-5 py-2 rounded-md font-semibold text-xs tracking-wide uppercase hover:bg-gray-200 transition-colors">
                                Launch
                            </button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Explore Fleet</span>
<i className="w-4 h-4 text-gray-500" data-lucide="arrow-down"></i>
</div>
</section>


<section className="relative h-[400vh]" id="scroll-section">

<div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#050505]">

<div className="absolute top-0 left-0 w-full h-0.5 bg-white/5 z-20">
<div className="h-full bg-orange-500 w-0 transition-all duration-75 ease-linear" id="progress-bar"></div>
</div>
<div className="absolute top-8 left-6 lg:left-12 z-20 flex items-center gap-3 mix-blend-difference">
<div className="w-12 h-[1px] bg-white/30"></div>
<span className="text-xs font-mono text-white/50 uppercase tracking-widest">Fleet 2024</span>
</div>

<div className="flex items-center gap-8 px-6 lg:px-24 w-max will-change-transform" id="horizontal-track">

<div className="w-[80vw] md:w-[40vw] flex flex-col justify-center pr-12">
<h2 className="text-4xl md:text-6xl font-manrope font-semibold text-white tracking-tight mb-6">
                            Engineered for <br/> <span className="text-gray-500">Disconnection.</span>
</h2>
<p className="text-gray-400 max-w-md text-sm leading-relaxed">
                            Our fleet is equipped with Level 4 autonomy, military-grade solar arrays, and redundant satellite uplinks. Scroll to inspect the units.
                        </p>
</div>

<div className="w-[85vw] md:w-[600px] h-[60vh] relative group interactable rounded-2xl overflow-hidden shrink-0 border border-white/10">
<img alt="Sprinter" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92f32f69-d505-41b4-bd51-c76bdf6f5997_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="relative z-10 p-8 flex flex-col h-full justify-between">
<div className="flex justify-end">
<div className="glass-card px-3 py-1 rounded-full text-[10px] font-mono text-orange-400 uppercase tracking-wider border-orange-500/20">
                                    Most Popular
                                </div>
</div>
<div>
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
<div>
<h3 className="text-3xl font-semibold text-white font-manrope">Sprinter X1</h3>
<p className="text-xs text-gray-400 font-mono mt-1">AUTONOMOUS READY • 2 PAX</p>
</div>
<div className="text-right">
<span className="text-2xl font-semibold text-white">$189</span>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300 border border-white/5 backdrop-blur-sm">Starlink High-Perf</span>
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300 border border-white/5 backdrop-blur-sm">800W Solar</span>
</div>
</div>
</div>
</div>

<div className="w-[70vw] md:w-[400px] h-[60vh] glass-card rounded-2xl p-10 relative overflow-hidden flex flex-col justify-center items-center text-center shrink-0 interactable">
<div className="border-shine"></div>
<div className="absolute top-6 right-6 text-orange-500">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div className="text-7xl font-semibold text-white mb-2 font-manrope tracking-tighter">Zero</div>
<div className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-6">Emissions while idle</div>
<p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                            Advanced LiFePO4 battery banks allow for silent HVAC operation for up to 48 hours without engine start.
                        </p>
</div>

<div className="w-[85vw] md:w-[600px] h-[60vh] relative group interactable rounded-2xl overflow-hidden shrink-0 border border-white/10">
<img alt="Rover" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="relative z-10 p-8 flex flex-col h-full justify-between">
<div className="flex justify-end">
<div className="glass-card px-3 py-1 rounded-full text-[10px] font-mono text-purple-400 uppercase tracking-wider border-purple-500/20">
                                    Off-Grid Beast
                                </div>
</div>
<div>
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
<div>
<h3 className="text-3xl font-semibold text-white font-manrope">Terra Rover</h3>
<p className="text-xs text-gray-400 font-mono mt-1">EXTREME TERRAIN • 4 PAX</p>
</div>
<div className="text-right">
<span className="text-2xl font-semibold text-white">$249</span>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300 border border-white/5 backdrop-blur-sm">35" Tires</span>
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300 border border-white/5 backdrop-blur-sm">Water Filtration</span>
</div>
</div>
</div>
</div>

<div className="w-[80vw] md:w-[500px] h-[60vh] glass-card rounded-2xl p-10 relative overflow-hidden flex flex-col justify-between shrink-0 interactable">
<div className="border-shine"></div>
<i className="w-10 h-10 text-orange-500 opacity-50" data-lucide="quote"></i>
<p className="text-2xl text-white font-manrope font-medium leading-snug tracking-tight">
                            "The AI route planning was seamless. We found campsites that weren't even on the map. It felt like cheating."
                        </p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9306e964-743f-4746-b85b-870737f72f8f_320w.jpg"/>
</div>
<div>
<div className="text-sm font-semibold text-white">Sarah Jenkins</div>
<div className="text-xs text-gray-500 font-mono">Verified User • Oct 2023</div>
</div>
</div>
</div>

<div className="w-[10vw] shrink-0"></div>
</div>
</div>
</section>

<section className="relative py-32 px-6 lg:px-12 bg-[#050505] border-t border-white/5 z-30">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-manrope font-semibold text-white tracking-tight mb-6">
                    Ready to disconnect?
                </h2>
<p className="text-gray-400 mb-10">
                    Join 14,000+ explorers waiting for their autonomous delivery.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="interactable bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-200 transition-all transform hover:scale-105">
                        Start Reservation
                    </button>
<button className="interactable text-gray-400 hover:text-white text-sm px-8 py-4 font-mono transition-colors flex items-center gap-2">
                        View Fleet Details <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
<div>© 2024 Nomad Ventures Inc.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy</a>
<a className="hover:text-gray-400" href="#">Terms</a>
<a className="hover:text-gray-400" href="#">Map</a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
