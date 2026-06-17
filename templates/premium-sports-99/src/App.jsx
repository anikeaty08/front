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



      document.addEventListener('DOMContentLoaded', () => {
          const wrappers = document.querySelectorAll('.card-perspective');

          wrappers.forEach(wrapper => {
              const card = wrapper.querySelector('.card-3d');
              const shadow = wrapper.querySelector('.card-shadow');
              const glare = wrapper.querySelector('.glare-layer');

              let isDragging = false;
              let startX, startY;
              let currentRotX = 0, currentRotY = 0;

              // Base shadow translation distance depending on card depth
              const shadowDepth = wrapper.parentElement.classList.contains('w-72') ? -90 : -80;

              wrapper.addEventListener('pointerdown', (e) => {
                  isDragging = true;
                  // Offset start positions by current rotation so it doesn't snap
                  startX = e.clientX - currentRotY;
                  startY = e.clientY + currentRotX;

                  wrapper.style.cursor = 'grabbing';

                  // Remove transitions for zero-latency 1:1 drag
                  card.style.transition = 'none';
                  if (shadow) shadow.style.transition = 'none';
                  if (glare) glare.style.transition = 'none';

                  // Prevent image dragging behavior
                  e.preventDefault();
              });

              window.addEventListener('pointermove', (e) => {
                  if (!isDragging) return;

                  // Calculate rotation based on pointer movement (sensitivity: 0.5)
                  currentRotY = (e.clientX - startX) * 0.5;
                  currentRotX = -(e.clientY - startY) * 0.5;

                  // Apply real-time 3D rotation
                  card.style.transform = `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;

                  // Dynamic parallax shadow moving opposite to rotation
                  if (shadow) {
                      shadow.style.transform = `translateZ(${shadowDepth}px) translateX(${currentRotY * 0.6}px) translateY(${-currentRotX * 0.6}px)`;
                  }

                  // Dynamic glare highlights
                  if (glare) {
                      const glareX = 50 + (currentRotY / 2);
                      const glareY = 50 - (currentRotX / 2);
                      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
                  }
              });

              const endDrag = () => {
                  if (!isDragging) return;
                  isDragging = false;
                  wrapper.style.cursor = 'grab';

                  // Premium spring-like ease back to resting position
                  card.style.transition = 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.1)';
                  card.style.transform = `rotateX(0deg) rotateY(0deg)`;

                  if (shadow) {
                      shadow.style.transition = 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.1)';
                      shadow.style.transform = `translateZ(${shadowDepth}px) translateX(0px) translateY(0px)`;
                  }

                  if (glare) {
                      glare.style.transition = 'background 1s ease';
                      glare.style.background = `transparent`;
                  }

                  // Reset internal state
                  currentRotX = 0;
                  currentRotY = 0;
              };

              window.addEventListener('pointerup', endDrag);
              window.addEventListener('pointercancel', endDrag);
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
      

<div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden -z-10" style={{perspective: '1000px'}}>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-slate-200/60 to-transparent rounded-full blur-[100px] opacity-70"></div>

<div className="absolute inset-0 flex items-center justify-center origin-bottom">
<div className="w-[200vw] h-[200vh] bg-grid-3d border-t border-slate-200/50"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfd] via-[#fcfcfd]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#fcfcfd] via-transparent to-transparent h-64"></div>
</div>

<header className="w-full z-50 relative">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase text-slate-900 flex items-center gap-1" href="#" style={{letterSpacing: '-0.05em'}}>
          CRDX
        </a>
<nav className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-slate-900 transition-colors" href="#">
            Fotbalové kartičky
          </a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">
            Hokejové kartičky
          </a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">
            Basketbalové kartičky
          </a>
</nav>
<div className="flex items-center gap-6 text-slate-600">
<button className="hover:text-slate-900 transition-colors flex items-center relative">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-slate-900 text-white flex items-center justify-center rounded-full text-[0.5rem] font-medium">
              2
            </span>
</button>
</div>
</div>
</header>

<main className="flex-1 flex flex-col z-10 pt-16 pr-6 pb-48 pl-6 relative">

<div className="text-center max-w-2xl mr-auto mb-16 ml-auto">
<h1 className="md:text-6xl leading-tight text-5xl font-medium text-slate-900 tracking-tight mb-5">Sportovní kartičky</h1>
<p className="md:text-base leading-relaxed text-sm font-normal text-slate-500 max-w-lg mr-auto ml-auto">Chcete pro svůj tým, kamarády nebo někoho z okolí skvělý dárek?</p>
</div>

<div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-14 mt-4">

<div className="card-float delay-1 w-64 lg:w-72 aspect-[1/1.4] z-10">
<div className="card-perspective w-full h-full relative" style={{perspective: '1500px', cursor: 'grab'}}>

<div className="card-3d [transform-style:preserve-3d] transition-transform duration-1000 ease-out w-full h-full relative" style={{transition: 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.1)'}}>

<div className="card-shadow absolute inset-0 bg-slate-900/15 blur-2xl rounded-2xl [transform:translateZ(-80px)] pointer-events-none transition-transform duration-1000 ease-out" style={{transition: 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.1)'}}>
</div>

<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-1px)] pointer-events-none">
</div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-2px)] pointer-events-none">
</div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-3px)] pointer-events-none">
</div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-4px)] pointer-events-none">
</div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-5px)] pointer-events-none">
</div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-6px)] pointer-events-none">
</div>

<div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(-7px)_rotateY(180deg)] bg-[#111113] rounded-2xl overflow-hidden border border-slate-700 p-6 flex flex-col justify-between shadow-inner pointer-events-none">
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<h3 className="text-sm font-medium tracking-tight text-white">
          V. Anderson
        </h3>
<p className="text-xs text-slate-400 mt-0.5">Linebacker</p>
</div>
<span className="text-[0.65rem] font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                    #014 / 099
                  </span>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-2 py-4">
<div>
<p className="text-[0.65rem] text-slate-500 mb-1 font-medium uppercase tracking-widest">
          Tackles
        </p>
<p className="text-lg font-medium tracking-tight text-slate-100">
          142
        </p>
</div>
<div>
<p className="text-[0.65rem] text-slate-500 mb-1 font-medium uppercase tracking-widest">
          Sacks
        </p>
<p className="text-lg font-medium tracking-tight text-slate-100">
          12.5
        </p>
</div>
</div>
<div className="flex justify-between items-end pt-4 border-t border-white/10">
<span className="text-[0.65rem] font-medium tracking-tighter text-slate-500 uppercase">
                    CRDX Authentic
                  </span>
<div className="w-6 h-6 rounded bg-gradient-to-br from-slate-400 via-slate-200 to-slate-500 opacity-60"></div>
</div>
</div>

<div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(0px)] bg-white rounded-2xl overflow-hidden border border-slate-200 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
<img alt="Player" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3734ddcc-c1d3-4dc2-929f-b785a4cb24b1_800w.webp"/>
<div className="absolute inset-2 border border-white/20 rounded-xl z-10 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
<span className="text-[0.65rem] font-medium tracking-widest text-white/70 mb-1 uppercase">
                    Series 1
                  </span>
<h2 className="text-xl font-medium tracking-tight text-white">
        V. Anderson
      </h2>
</div>

<div className="glare-layer absolute inset-0 z-50 rounded-2xl transition-all duration-300" style={{background: 'transparent', transition: 'background 1s'}}></div>
</div>
</div>
</div>
</div>

<div className="card-float delay-0 w-72 lg:w-80 aspect-[1/1.4] z-20 md:-translate-y-8">
<div className="card-perspective w-full h-full relative" style={{perspective: '1500px', cursor: 'grab'}}>
<div className="card-3d [transform-style:preserve-3d] transition-transform duration-1000 ease-out w-full h-full relative" style={{transition: 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.1)'}}>
<div className="card-shadow absolute inset-0 bg-slate-900/20 blur-2xl rounded-2xl [transform:translateZ(-90px)] pointer-events-none transition-transform duration-1000 ease-out" style={{transition: 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.1)'}}></div>

<div className="absolute inset-0 bg-[#e2e8f0] border border-slate-300 rounded-2xl [transform:translateZ(-1px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[#e2e8f0] border border-slate-300 rounded-2xl [transform:translateZ(-2px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[#e2e8f0] border border-slate-300 rounded-2xl [transform:translateZ(-3px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[#e2e8f0] border border-slate-300 rounded-2xl [transform:translateZ(-4px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[#e2e8f0] border border-slate-300 rounded-2xl [transform:translateZ(-5px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[#e2e8f0] border border-slate-300 rounded-2xl [transform:translateZ(-6px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[#cbd5e1] border border-slate-400 rounded-2xl [transform:translateZ(-7px)] pointer-events-none"></div>

<div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(-8px)_rotateY(180deg)] bg-[#0f1115] rounded-2xl overflow-hidden border border-slate-700 p-7 flex flex-col justify-between shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none">
<div className="flex justify-between items-start border-b border-white/10 pb-5">
<div>
<h3 className="text-base font-medium tracking-tight text-white">
                      J. Sterling
                    </h3>
<p className="text-[0.65rem] text-slate-400 mt-1 uppercase tracking-wider">
                      Quarterback
                    </p>
</div>
<span className="text-[0.65rem] font-medium text-slate-900 bg-slate-100 px-2 py-1 rounded">
                    1 OF 1
                  </span>
</div>
<p className="text-[0.65rem] leading-relaxed text-slate-400 py-2">
                  A generational talent reshaping the offensive meta. Sterling
                  set rookie records across the board, combining elite arm
                  strength with unprecedented processing speed in the pocket.
                </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-2 py-2">
<div>
<p className="text-[0.65rem] text-slate-500 mb-1 font-medium uppercase tracking-widest">
                      Pass Yds
                    </p>
<p className="text-xl font-medium tracking-tight text-slate-50">
                      4,285
                    </p>
</div>
<div>
<p className="text-[0.65rem] text-slate-500 mb-1 font-medium uppercase tracking-widest">
                      Pass TD
                    </p>
<p className="text-xl font-medium tracking-tight text-slate-50">
                      34
                    </p>
</div>
</div>
<div className="flex justify-between items-end pt-5 border-t border-white/10 mt-auto">
<span className="text-[0.65rem] font-medium tracking-tighter text-slate-500 uppercase">
                    Signature Series
                  </span>
<div className="flex gap-0.5 h-5 items-end opacity-40">
<div className="w-[1px] h-full bg-slate-400"></div>
<div className="w-0.5 h-full bg-slate-400"></div>
<div className="w-[1px] h-3 bg-slate-400"></div>
<div className="w-1 h-full bg-slate-400"></div>
<div className="w-[1px] h-4 bg-slate-400"></div>
</div>
</div>
</div>

<div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(0px)] bg-white rounded-2xl overflow-hidden border border-slate-200 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
<img alt="Quarterback" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-2 border border-white/30 rounded-xl z-10 mix-blend-overlay"></div>
<div className="absolute top-4 right-4 z-20">
<span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-[0.65rem] font-medium text-white border border-white/20 tracking-widest uppercase">
                    Rookie
                  </span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-7 flex flex-col justify-end">
<h2 className="text-2xl font-medium tracking-tight text-white">
                    J. Sterling
                  </h2>
<p className="text-xs text-slate-300 mt-1 font-normal">
                    Quarterback / #08
                  </p>
</div>

<div className="glare-layer absolute inset-0 z-50 rounded-2xl transition-all duration-300" style={{transition: 'background 1s', background: 'transparent'}}></div>
</div>
</div>
</div>
</div>

<div className="card-float delay-2 w-64 lg:w-72 aspect-[1/1.4] z-10">
<div className="card-perspective w-full h-full relative" style={{perspective: '1500px', cursor: 'grab'}}>
<div className="card-3d w-full h-full relative [transform-style:preserve-3d] transition-transform duration-1000 ease-out">
<div className="card-shadow absolute inset-0 bg-slate-900/15 blur-2xl rounded-2xl [transform:translateZ(-80px)] pointer-events-none transition-transform duration-1000 ease-out"></div>

<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-1px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-2px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-3px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-4px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-5px)] pointer-events-none"></div>
<div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-2xl [transform:translateZ(-6px)] pointer-events-none"></div>

<div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(-7px)_rotateY(180deg)] bg-[#111113] rounded-2xl overflow-hidden border border-slate-700 p-6 flex flex-col justify-between shadow-inner pointer-events-none">
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<h3 className="text-sm font-medium tracking-tight text-white">
                      D. Hayes
                    </h3>
<p className="text-xs text-slate-400 mt-0.5">Wide Receiver</p>
</div>
<span className="text-[0.65rem] font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                    #088 / 250
                  </span>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-2 py-4">
<div>
<p className="text-[0.65rem] text-slate-500 mb-1 font-medium uppercase tracking-widest">
                      Rec Yds
                    </p>
<p className="text-lg font-medium tracking-tight text-slate-100">
                      1,540
                    </p>
</div>
<div>
<p className="text-[0.65rem] text-slate-500 mb-1 font-medium uppercase tracking-widest">
                      Rec TD
                    </p>
<p className="text-lg font-medium tracking-tight text-slate-100">
                      14
                    </p>
</div>
</div>
<div className="flex justify-between items-end pt-4 border-t border-white/10">
<span className="text-[0.65rem] font-medium tracking-tighter text-slate-500 uppercase">
                    CRDX Authentic
                  </span>
<div className="w-6 h-6 rounded bg-gradient-to-br from-slate-400 via-slate-200 to-slate-500 opacity-60"></div>
</div>
</div>

<div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(0px)] bg-white rounded-2xl overflow-hidden border border-slate-200 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
<img alt="Wide Receiver" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-2 border border-white/20 rounded-xl z-10 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
<span className="text-[0.65rem] font-medium tracking-widest text-white/70 mb-1 uppercase">
                    Series 1
                  </span>
<h2 className="text-xl font-medium tracking-tight text-white">
                    D. Hayes
                  </h2>
</div>

<div className="glare-layer absolute inset-0 z-50 rounded-2xl transition-all duration-300"></div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
