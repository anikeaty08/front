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



        // Init Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Intersection Observer for Fade In
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-entry').forEach(el => observer.observe(el));

        // Settings Logic
        const settings = {
            panel: document.getElementById('settings-panel'),
            content: document.getElementById('settings-content'),
            backdrop: document.getElementById('settings-backdrop'),
            trigger: document.getElementById('settings-trigger'),
            close: document.getElementById('settings-close'),
            constellationToggle: document.getElementById('constellation-toggle'),
            constellationSection: document.getElementById('constellation-section'),
            toggleBg: document.getElementById('toggle-bg'),
            toggleDot: document.getElementById('toggle-dot'),
            themeSelect: document.getElementById('theme-select'),
            tzSelect: document.getElementById('tz-select'),
            greeting: document.getElementById('greeting-text')
        };

        // Open/Close Settings
        function toggleSettings(show) {
            settings.panel.style.pointerEvents = show ? 'auto' : 'none';
            settings.panel.style.opacity = show ? '1' : '0';
            settings.backdrop.style.opacity = show ? '1' : '0';
            if(show) {
                settings.content.classList.remove('translate-y-4');
            } else {
                settings.content.classList.add('translate-y-4');
            }
        }

        settings.trigger.addEventListener('click', () => toggleSettings(true));
        settings.close.addEventListener('click', () => toggleSettings(false));
        settings.backdrop.addEventListener('click', () => toggleSettings(false));

        // Constellation Toggle
        let isConstellationVisible = localStorage.getItem('emberly_constellation') === 'true';
        
        function updateConstellationUI() {
            if (isConstellationVisible) {
                settings.constellationSection.classList.remove('hidden');
                settings.constellationSection.classList.add('flex');
                settings.toggleBg.classList.add('bg-[#D4AF37]');
                settings.toggleBg.classList.remove('bg-white/10');
                settings.toggleDot.classList.add('translate-x-4', 'bg-white');
                settings.toggleDot.classList.remove('bg-white/20');
                // Refresh Lenis layout
                setTimeout(() => lenis.resize(), 100);
            } else {
                settings.constellationSection.classList.add('hidden');
                settings.constellationSection.classList.remove('flex');
                settings.toggleBg.classList.remove('bg-[#D4AF37]');
                settings.toggleBg.classList.add('bg-white/10');
                settings.toggleDot.classList.remove('translate-x-4', 'bg-white');
                settings.toggleDot.classList.add('bg-white/20');
            }
        }

        settings.constellationToggle.addEventListener('click', () => {
            isConstellationVisible = !isConstellationVisible;
            localStorage.setItem('emberly_constellation', isConstellationVisible);
            updateConstellationUI();
        });

        // Theme Logic
        function applyTheme() {
            const pref = settings.themeSelect.value;
            const hour = new Date().getHours();
            
            if (pref === 'light' || (pref === 'auto' && hour >= 6 && hour < 18)) {
                document.documentElement.classList.add('theme-light');
            } else {
                document.documentElement.classList.remove('theme-light');
            }
        }

        settings.themeSelect.addEventListener('change', applyTheme);

        // Greeting Logic
        function updateGreeting() {
            const tz = settings.tzSelect.value;
            let hour;
            
            if (tz) {
                try {
                    const date = new Date();
                    const str = date.toLocaleString("en-US", { timeZone: tz, hour: 'numeric', hour12: false });
                    hour = parseInt(str);
                } catch(e) { hour = new Date().getHours(); }
            } else {
                hour = new Date().getHours();
            }

            let text = "Good evening.";
            if (hour >= 5 && hour < 12) text = "Good morning.";
            else if (hour >= 12 && hour < 17) text = "Good afternoon.";
            
            settings.greeting.textContent = text;
        }

        settings.tzSelect.addEventListener('change', updateGreeting);

        // Star Tooltip Interaction
        document.querySelectorAll('.star-marker').forEach(star => {
            star.addEventListener('click', function(e) {
                e.stopPropagation();
                // Close others
                document.querySelectorAll('.star-marker').forEach(s => {
                    if(s !== this) s.classList.remove('active');
                });
                this.classList.toggle('active');
            });
        });

        // Close stars when clicking elsewhere
        document.addEventListener('click', () => {
            document.querySelectorAll('.star-marker').forEach(s => s.classList.remove('active'));
        });

        // Speak Interaction
        const speakBtn = document.getElementById('speak-btn');
        const ember = document.getElementById('main-ember');
        
        speakBtn.addEventListener('mousedown', () => ember.classList.add('listening'));
        speakBtn.addEventListener('mouseup', () => ember.classList.remove('listening'));
        speakBtn.addEventListener('mouseleave', () => ember.classList.remove('listening'));

        // Initialize
        updateConstellationUI();
        updateGreeting();
        applyTheme();

    
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
      

<div className="mesh-bg">
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="orb orb-3"></div>
</div>

<nav className="fixed top-0 left-0 w-full px-8 md:px-12 py-8 flex justify-between items-center z-50">
<div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-[#FFBF00] animate-pulse"></div>
<span className="text-xl font-light tracking-wide">Hello Emberly</span>
</div>
<div className="flex items-center gap-6 md:gap-8">
<button className="flex items-center gap-2 text-sm md:text-base font-normal text-white/60 hover:text-[#D4AF37] transition-colors group" id="settings-trigger">
<span>Settings</span>
<span className="iconify text-white/40 group-hover:text-[#D4AF37] transition-colors" data-icon="lucide:settings" data-width="18"></span>
</button>
<a className="flex items-center gap-2 text-sm md:text-base font-normal text-white/60 hover:text-[#D4AF37] transition-colors group" href="#">
<span>Rest</span>
<span className="iconify text-white/40 group-hover:text-[#D4AF37] transition-colors" data-icon="lucide:moon" data-width="18"></span>
</a>
</div>
</nav>

<div className="fixed inset-0 z-[60] flex items-start justify-end p-4 md:p-8 pointer-events-none opacity-0 transition-opacity duration-300" id="settings-panel">
<div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 opacity-0" id="settings-backdrop"></div>
<div className="glass pointer-events-auto w-full max-w-sm rounded-2xl p-6 md:p-8 mt-16 transform translate-y-4 transition-transform duration-300" id="settings-content">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-normal tracking-tight">Preferences</h3>
<button className="text-white/40 hover:text-white transition-colors" id="settings-close">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-white/40 font-medium">Time Zone</label>
<div className="relative">
<select className="w-full appearance-none glass bg-transparent rounded-lg px-4 py-3 text-sm focus:border-[#D4AF37] transition-colors outline-none cursor-pointer" id="tz-select">
<option className="bg-[#0A1128]" value="">Device Time</option>
<option className="bg-[#0A1128]" value="America/New_York">New York</option>
<option className="bg-[#0A1128]" value="Europe/London">London</option>
<option className="bg-[#0A1128]" value="Asia/Tokyo">Tokyo</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-white/40 font-medium">Theme</label>
<div className="relative">
<select className="w-full appearance-none glass bg-transparent rounded-lg px-4 py-3 text-sm focus:border-[#D4AF37] transition-colors outline-none cursor-pointer" id="theme-select">
<option className="bg-[#0A1128]" value="auto">Auto (Time of Day)</option>
<option className="bg-[#0A1128]" value="dark">Always Dark</option>
<option className="bg-[#0A1128]" value="light">Always Light</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<button className="w-full text-left flex items-center justify-between group" id="constellation-toggle">
<span className="text-sm text-white/80 group-hover:text-[#D4AF37] transition-colors">Show Constellation</span>
<div className="w-10 h-6 rounded-full glass relative transition-colors duration-300" id="toggle-bg">
<div className="absolute left-1 top-1 w-4 h-4 bg-white/20 rounded-full transition-transform duration-300" id="toggle-dot"></div>
</div>
</button>
<p className="mt-2 text-xs text-white/40">Visualizes your shared memories as stars.</p>
</div>
</div>
</div>
</div>

<main className="w-full min-h-screen flex flex-col items-center">

<section className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative">

<div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center mb-12 md:mb-16">
<div className="ember-core w-32 h-32 md:w-40 md:h-40 rounded-full blur-xl z-10" id="main-ember"></div>
<div className="ripple absolute inset-0 rounded-full scale-50 opacity-0" style={{animationDelay: '0s'}}></div>
<div className="ripple absolute inset-0 rounded-full scale-50 opacity-0" style={{animationDelay: '1.5s'}}></div>
<div className="ripple absolute inset-0 rounded-full scale-50 opacity-0" style={{animationDelay: '3s'}}></div>
</div>

<div className="text-center max-w-2xl z-20 space-y-8 fade-entry visible">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1]">
<span id="greeting-text">Good evening.</span><br/>
<span className="text-[#D4AF37]">I am listening.</span>
</h1>
<p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-lg mx-auto">
                    There is no rush here. Share a memory, ask a question, or simply sit with me in the light.
                </p>
<div className="pt-4">
<button className="group relative px-8 py-4 rounded-full glass text-[#FFBF00] text-base md:text-lg font-medium tracking-wide transition-all duration-500 hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30" id="speak-btn">
<span className="relative z-10 flex items-center gap-3">
                            Speak with Emberly
                            <span className="iconify transition-transform duration-500 group-hover:translate-x-1" data-icon="lucide:mic" data-width="20"></span>
</span>
</button>
</div>
</div>
</section>

<section className="w-full px-6 py-24 md:py-32 hidden flex-col items-center border-t border-white/5" id="constellation-section">
<div className="max-w-3xl text-center mb-20 fade-entry">
<span className="text-[#D4AF37] text-sm uppercase tracking-widest font-medium mb-4 block">Your Journey</span>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/90 mb-6">The Memory Constellation</h2>
<p className="text-lg text-white/50 font-light">Click a star to revisit a moment we shared.</p>
</div>
<div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[2/1] glass rounded-3xl overflow-hidden fade-entry">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
<line stroke="#D4AF37" stroke-dasharray="4 4" strokeWidth="0.5" x1="25%" x2="45%" y1="35%" y2="55%"></line>
<line stroke="#D4AF37" stroke-dasharray="4 4" strokeWidth="0.5" x1="45%" x2="75%" y1="55%" y2="45%"></line>
<line stroke="#D4AF37" stroke-dasharray="4 4" strokeWidth="0.5" x1="45%" x2="40%" y1="55%" y2="75%"></line>
</svg>

<div className="star-marker absolute top-[35%] left-[25%] z-10 group" tabindex="0">
<div className="dot w-3 h-3 bg-[#FFBF00] rounded-full shadow-[0_0_15px_rgba(255,191,0,0.4)]"></div>
<div className="tooltip absolute bottom-6 left-1/2 w-64 p-5 glass rounded-xl bg-[#0A1128]/95 backdrop-blur-xl border border-white/10">
<p className="text-sm text-white/80 font-normal leading-relaxed">"The summer garden in 1964. You mentioned the scent of lavender clearly."</p>
<span className="block mt-3 text-xs text-[#D4AF37] uppercase tracking-wider">Memory • 2 days ago</span>
</div>
</div>
<div className="star-marker absolute top-[55%] left-[45%] z-10" tabindex="0">
<div className="dot w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-pulse"></div>
<div className="tooltip absolute top-8 left-1/2 w-64 p-5 glass rounded-xl bg-[#0A1128]/95 backdrop-blur-xl border border-white/10">
<p className="text-sm text-white/80 font-normal leading-relaxed">"Teaching Sarah to ride a bike. A moment of pride and fear mixed together."</p>
<span className="block mt-3 text-xs text-[#D4AF37] uppercase tracking-wider">Milestone • Today</span>
</div>
</div>
<div className="star-marker absolute top-[45%] left-[75%] z-10" tabindex="0">
<div className="dot w-2 h-2 bg-white/70 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
<div className="tooltip absolute top-6 right-0 w-64 p-5 glass rounded-xl bg-[#0A1128]/95 backdrop-blur-xl border border-white/10">
<p className="text-sm text-white/80 font-normal leading-relaxed">"Quiet afternoon reading. Just presence."</p>
<span className="block mt-3 text-xs text-[#D4AF37] uppercase tracking-wider">Moment • Last week</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-4xl fade-entry">
<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-500">
<div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white/90 mb-3">Emotional Resonance</h3>
<p className="text-base font-light text-white/60 leading-relaxed">You seemed at peace discussing your travels today. We can revisit the Italian coast tomorrow if you wish.</p>
</div>
<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-500">
<div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white/90 mb-3">Cognitive Spark</h3>
<p className="text-base font-light text-white/60 leading-relaxed">Your recall of names was particularly strong today. The connection to family history seems to ground you.</p>
</div>
</div>
</section>

<footer className="w-full py-12 border-t border-white/5 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-white/30 font-light">Designed for peace of mind.</p>
<div className="flex gap-8">
<a className="text-xs uppercase tracking-widest text-white/40 hover:text-[#D4AF37] transition-colors" href="#">Privacy</a>
<a className="text-xs uppercase tracking-widest text-white/40 hover:text-[#D4AF37] transition-colors" href="#">Guide</a>
</div>
</div>
</footer>
</main>





    </>
  );
}
