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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Custom Cursor Logic
        const cursor = document.getElementById('custom-cursor');
        const cursorText = document.getElementById('cursor-text');
        const cursorDot = document.getElementById('cursor-dot');

        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        // Add hover effect for elements with data-temp attribute
        document.querySelectorAll('[data-temp]').forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                const temp = el.getAttribute('data-temp');
                cursor.style.width = '8rem'; // w-32
                cursor.style.height = '8rem'; // h-32
                cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                cursorDot.style.opacity = '0';
                cursorText.textContent = temp;
                cursorText.classList.remove('hidden');
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '1.5rem'; // w-6
                cursor.style.height = '1.5rem'; // h-6
                cursor.style.backgroundColor = 'transparent';
                cursorDot.style.opacity = '1';
                cursorText.classList.add('hidden');
                cursorText.textContent = '';
            });
        });

        // Time of Day Slider Logic
        const slider = document.getElementById('solar-slider');
        const overlay = document.getElementById('tod-overlay');
        const glow = document.getElementById('tod-glow');

        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            
            if (val <= 50) {
                // Midday to Blue Hour
                // 0 = no overlay (bright), 50 = deep blue
                const blueOpacity = val / 50 * 0.7; // up to 0.7 opacity
                overlay.className = `absolute inset-0 mix-blend-multiply bg-[#1e3a8a] transition-all duration-75`;
                overlay.style.opacity = blueOpacity;
                glow.style.opacity = '0';
            } else {
                // Blue Hour to Midnight
                // 50 = deep blue, 100 = black + tungsten glow
                const darkOpacity = 0.7 + ((val - 50) / 50 * 0.3); // 0.7 to 1.0
                overlay.className = `absolute inset-0 mix-blend-multiply bg-black transition-all duration-75`;
                overlay.style.opacity = darkOpacity;
                
                const glowOpacity = (val - 50) / 50 * 0.8;
                glow.style.opacity = glowOpacity;
            }
        });

        // Master Toggle Logic
        const toggle = document.getElementById('master-toggle');
        const lever = document.getElementById('switch-lever');
        const body = document.getElementById('main-body');
        const labelOn = document.getElementById('label-on');
        const labelOff = document.getElementById('label-off');
        let isActive = false;

        toggle.addEventListener('click', () => {
            isActive = !isActive;
            if (isActive) {
                lever.classList.replace('translate-y-[-10px]', 'translate-y-[10px]');
                lever.classList.replace('origin-bottom', 'origin-top');
                body.classList.add('global-warmth');
                labelOn.classList.add('text-black', 'font-semibold');
                labelOn.classList.remove('opacity-40');
                labelOff.classList.remove('text-black', 'font-semibold');
                labelOff.classList.add('opacity-40');
            } else {
                lever.classList.replace('translate-y-[10px]', 'translate-y-[-10px]');
                lever.classList.replace('origin-top', 'origin-bottom');
                body.classList.remove('global-warmth');
                labelOff.classList.add('text-black', 'font-semibold');
                labelOff.classList.remove('opacity-40');
                labelOn.classList.remove('text-black', 'font-semibold');
                labelOn.classList.add('opacity-40');
            }
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
      

<div className="film-grain"></div>

<div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm mix-blend-difference" id="custom-cursor">
<span className="text-xs font-mono-custom hidden tracking-tighter text-white" id="cursor-text"></span>
<div className="w-1 h-1 bg-white rounded-full absolute" id="cursor-dot"></div>
</div>

<section className="relative h-screen w-full flex items-center justify-center bg-[#0D0D0F] overflow-hidden" data-temp="NIGHT ARRIVAL">

<div className="relative w-64 md:w-80 h-[70vh] border border-white/10 overflow-hidden z-10">

<img alt="Tunnel of foliage" className="w-full h-full object-cover object-center opacity-60 filter grayscale sepia-[.2]" src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&amp;w=2948&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0F] via-transparent to-[#0D0D0F] opacity-80"></div>
</div>

<div className="absolute inset-0 flex items-center justify-between px-8 md:px-24 pointer-events-none z-20">
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter text-white/5 halation-text uppercase">Caven</h1>
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter text-white/5 halation-text uppercase">Ranch</h1>
</div>

<div className="absolute bottom-12 w-full flex flex-col items-center justify-center z-20 text-center space-y-4">
<p className="font-mono-custom text-sm font-light text-white/60 uppercase tracking-widest max-w-md px-4">
                "Silence is not the absence of sound.<br/>It is a material."
            </p>
<div className="flex flex-col items-center gap-2 mt-8 opacity-50">
<span className="font-mono-custom text-xs uppercase">[Scroll to enter the sequence]</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</div>
</section>

<section className="relative min-h-screen bg-[#EAE7E0] text-[#183a2d] py-24 px-6 md:px-12 lg:px-24 border-t border-[#183a2d]/10" data-temp="DAYLIGHT 5600K">

<div className="flex flex-col md:flex-row justify-between items-start border-b border-[#183a2d]/20 pb-8 mb-16 space-y-8 md:space-y-0 font-mono-custom text-sm font-light">
<div className="space-y-4 max-w-sm">
<p className="uppercase font-medium text-[#183a2d]">Documented Map 01.A</p>
<p>150 acres of engineered solitude. Every vantage point discovered over a century of walking.</p>
<p className="pt-4 border-t border-[#183a2d]/20">LOC: JOHNSON CITY, TX<br/>ELEV: 1,194 FT</p>
</div>
<div className="space-y-4 max-w-sm md:text-right">
<p>ATMOSPHERIC CONDITIONS</p>
<p className="opacity-70">WIND: SSW 12MPH<br/>HUMIDITY: 42%<br/>VISIBILITY: UNLIMITED</p>
</div>
</div>

<div className="relative w-full h-[60vh] md:h-[75vh] bg-[#EAE7E0] rounded-sm border border-[#183a2d]/20 overflow-hidden group">

<div className="absolute inset-0 opacity-80 mix-blend-multiply filter contrast-125 sepia hue-rotate-[130deg] saturate-50" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1629807530511-d0b503387877?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#183a2d10_1px,transparent_1px),linear-gradient(to_bottom,#183a2d10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

<div className="absolute top-1/3 left-1/2 w-4 h-4 bg-[#183a2d] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_4px_rgba(24,58,45,0.2)] animate-pulse cursor-none peer z-10" data-temp="ACOUSTICS: WIND"></div>

<div className="absolute top-1/3 left-1/2 ml-8 mt-8 bg-[#EAE7E0]/95 backdrop-blur-md border border-[#183a2d] p-6 rounded-sm w-80 opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-20 shadow-xl pointer-events-none">
<div className="font-mono-custom text-xs font-light space-y-4 text-[#183a2d]">
<div className="flex justify-between border-b border-[#183a2d]/20 pb-2">
<span>DATA // 04-22</span>
<span>THE BLUFF CABIN</span>
</div>
<div className="space-y-1 uppercase">
<p>LOC: THE BLUFF EDGE</p>
<p>VIBE: TOTAL ISOLATION</p>
<p>LIGHT TEMP: 2400K (WARM)</p>
<p>ACOUSTICS: DISTANT RIVER / WIND IN OAK</p>
</div>
<p className="pt-4 text-[10px] leading-relaxed opacity-80">
                        STRUCTURAL OBSERVATION: Architecture functions not as shelter, but as an optical instrument to view the valley.
                    </p>
</div>
</div>
</div>
<div className="mt-16 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">The Topography of Relief.</h2>
<p className="text-xl font-light leading-relaxed opacity-80">
                We didn't change the land. We just built a place to watch it. The architecture defers to the limestone, wrapping around centuries-old root systems.
            </p>
</div>
</section>

<section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#0a1410] text-[#EFECE6] border-t border-white/10" data-temp="INTERIOR: TUNGSTEN">

<div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative z-10 bg-[#0a1410]">
<div className="space-y-12">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Architecture<br/>in Tension.</h2>
<p className="text-xl font-light leading-relaxed text-white/70 max-w-md">
                        Mass on one side. Void on the other. The cabin doesn't sit on the hill; it projects over it. Twelve feet of steel and cedar between you and the valley floor.
                    </p>
</div>

<div className="font-mono-custom text-sm font-light space-y-6 text-white/50 border-t border-white/10 pt-8 w-full max-w-md">
<div className="flex gap-4 group cursor-none" data-temp="SPEC 01">
<span className="text-[#B87333]">[01]</span>
<div className="flex-1 border-b border-white/10 pb-2 group-hover:border-white/40 transition-colors">
<p className="uppercase text-white/80">Cantilevered Patio</p>
<p className="text-xs mt-1">12FT PROJECTION / I-BEAM SUBSTRUCTURE</p>
</div>
</div>
<div className="flex gap-4 group cursor-none" data-temp="SPEC 02">
<span className="text-[#B87333]">[02]</span>
<div className="flex-1 border-b border-white/10 pb-2 group-hover:border-white/40 transition-colors">
<p className="uppercase text-white/80">Low-Iron Glass</p>
<p className="text-xs mt-1">FLOOR-TO-CEILING / MINIMAL MULLIONS</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-[60vh] md:h-auto overflow-hidden bg-[#111]">
<img alt="Cabin interior macro" className="absolute inset-0 w-full h-full object-cover object-center transform md:translate-x-8 scale-105 opacity-80" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#0a1410] via-transparent to-transparent opacity-60"></div>
</div>
</section>

<section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end" data-temp="ADJUST VIBE">

<div className="absolute inset-0 z-0">
<img alt="Exterior cabin" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 mix-blend-multiply bg-[#8b9bb4] opacity-20 transition-all duration-300" id="tod-overlay"></div>

<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ff8c00] rounded-full mix-blend-screen filter blur-[100px] opacity-0 transition-opacity duration-500 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" id="tod-glow"></div>
</div>

<div className="relative z-10 w-full p-8 md:p-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
<div className="space-y-4">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">The Gradient of a Day.</h2>
<p className="text-xl font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
                        The Hill Country is a different property at 6:00 AM than it is at 6:00 PM. Designed to perform under every light.
                    </p>
</div>

<div className="w-full max-w-2xl space-y-4">
<div className="flex justify-between font-mono-custom text-xs font-light text-white/50 uppercase">
<span>High Noon (Harsh)</span>
<span>Blue Hour (Cool)</span>
<span>Midnight (Tungsten)</span>
</div>
<div className="relative w-full h-8 flex items-center">
<input className="w-full z-20" id="solar-slider" max="100" min="0" type="range" value="50"/>

<div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-30">
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen bg-[#B87333] flex items-center justify-center p-8 md:p-24 overflow-hidden" data-temp="ARCHIVE">

<div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">

<div className="relative w-64 h-80 md:w-80 md:h-96 mb-16 p-4 border-2 border-[#3d2611] outline outline-offset-8 outline-1 outline-[#3d2611]/50 bg-[#c58040] shadow-2xl">

<div className="absolute inset-2 border border-[#3d2611]/30 border-dashed pointer-events-none"></div>

<img alt="Ancestor on horse" className="w-full h-full object-cover filter contrast-150 grayscale sepia hue-rotate-[-30deg] mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute -right-4 -bottom-4 bg-[#3d2611] text-[#B87333] font-mono-custom text-xs p-2 uppercase tracking-widest border border-[#B87333]">
                    FIG. 1870
                </div>
</div>

<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#3d2611] mb-8">A Legacy of Getting Lost.</h2>
<p className="text-xl md:text-2xl font-light leading-relaxed text-[#3d2611]/90 max-w-2xl text-justify hyphens-auto">
                In 1870, our ancestor fell off his horse and wandered into the Blanco Valley. He was lost for three days. When he finally found his way back, he bought the land. He realized that being lost was the most honest he'd felt in years.
            </p>
<p className="mt-8 font-mono-custom text-sm font-light uppercase tracking-widest text-[#3d2611]/70">
                We are still here. We are still lost.
            </p>
</div>
</section>

<footer className="relative bg-[#C1C0B6] text-[#2a2a2a] pt-32 pb-16 px-8 md:px-24 border-t-8 border-[#111]" data-temp="SYSTEM CONTROL">
<div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-24">

<div className="flex flex-col items-center space-y-6">
<span className="font-mono-custom text-sm uppercase tracking-widest opacity-60">Initiate Sequence</span>
<button className="relative w-24 h-40 bg-[#1a1a1a] rounded-sm border-4 border-[#2a2a2a] shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_12px_24px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center p-2 group transition-all duration-300" id="master-toggle">

<div className="absolute top-2 w-2 h-2 rounded-full bg-[#333] shadow-inner"></div>
<div className="absolute bottom-2 w-2 h-2 rounded-full bg-[#333] shadow-inner"></div>

<div className="w-16 h-20 bg-gradient-to-b from-[#d4af37] to-[#aa8022] rounded-sm shadow-[0_8px_16px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-[#8a631b] transform transition-transform duration-300 origin-bottom translate-y-[-10px] group-active:scale-95 flex items-center justify-center" id="switch-lever">
<div className="w-8 h-1 bg-black/20 rounded-full"></div>
</div>
</button>
<div className="flex gap-12 font-mono-custom text-xs uppercase opacity-40">
<span className="text-black font-semibold" id="label-off">Standby</span>
<span id="label-on">Active</span>
</div>
</div>

<div className="w-full pt-16 border-t border-[#2a2a2a]/20 flex flex-col md:flex-row justify-between items-center gap-8 font-mono-custom text-xs uppercase tracking-widest opacity-80">
<span>Caven Ranch © 2024</span>
<div className="flex gap-4 items-center">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Johnson City, TX</span>
</div>
<span>Est. 1858</span>
</div>
</div>
</footer>


    </>
  );
}
