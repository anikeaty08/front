import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Custom Cursor Logic
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    // Check if device supports hover (ignore on touch devices)
    const isTouchDevice = () => {
      return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    };

    if (!isTouchDevice()) {
      window.addEventListener('mousemove', e => {
        mx = e.clientX; 
        my = e.clientY;
        dot.style.left = mx - 4 + 'px';
        dot.style.top = my - 4 + 'px';
      });

      function animRing() {
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ring.style.left = rx - 18 + 'px';
        ring.style.top = ry - 18 + 'px';
        requestAnimationFrame(animRing);
      }
      animRing();

      // Expand cursor on interactive elements
      const interactives = document.querySelectorAll('.interactive-el, a, button');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
      });
    } else {
      // Hide custom cursor on mobile/touch
      dot.style.display = 'none';
      ring.style.display = 'none';
      document.body.style.cursor = 'auto';
      document.querySelectorAll('a, button').forEach(el => el.style.cursor = 'pointer');
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot" id="cursorDot"></div>
<div className="cursor-ring" id="cursorRing"></div>

<div className="noise-bg pointer-events-none"></div>
<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex items-center justify-center">
<div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-neutral-200/40 to-white/10 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
</div>

<div className="w-full max-w-[540px] relative z-10 animate-fade-in">
<main className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-neutral-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.02]">

<header className="flex flex-col border-neutral-100/80 border-b mb-8 pb-8 relative gap-x-6 gap-y-6">
<div className="flex items-start justify-between gap-4 flex-col sm:flex-row sm:items-center">
<div className="flex items-center gap-4">

<div className="flex cursor-pointer text-lg font-semibold text-white tracking-tighter bg-neutral-900 w-12 h-12 rounded-full shadow-sm items-center justify-center" onclick="window.location.href='/lodobooth.com'" role="button">[-_-]</div>
<div className="">
<h1 className="sm:text-2xl text-xl font-semibold text-neutral-900 tracking-tight">ROBOT PHOTO</h1>
<p className="text-sm text-neutral-500 mt-0.5">PHOTO BOOTH | PHOTOGRAPHY</p>
</div>
</div>

<div className="flex bg-white/50 border-neutral-200 border rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-sm gap-x-1.5 gap-y-1.5 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
<span className="uppercase text-xs font-medium text-neutral-600 tracking-[0.15em]">SOLOPRENUEr</span><span className="uppercase text-xs font-medium text-neutral-600 tracking-[0.15em]">Artist</span><span className="uppercase text-xs font-medium text-neutral-600 tracking-[0.15em]">ACTIVIST</span>
<span className="w-1.5 h-1.5 bg-neutral-800 rounded-full"></span></div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-[90%]">
          Quick links for your quote: explore galleries, booth options, and the secret menu in one place.
        </p>

<div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Base</span>
<span className="text-xs font-medium text-neutral-800 flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              Denver, CO
            </span>
</div>
<div className="w-px h-6 bg-neutral-200 hidden sm:block"></div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Email</span>
<span className="text-xs font-medium text-neutral-800 flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              info@lodobooth.com
            </span>
</div>
<div className="w-px h-6 bg-neutral-200 hidden sm:block"></div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Text</span>
<span className="text-xs font-medium text-neutral-800 flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              +1 310 993 9791
            </span>
</div>
</div>
</header>

<div className="flex flex-col gap-3.5">

<a className="interactive-el group flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5 shadow-neutral-900/10 animate-fade-in stagger-1 text-white bg-neutral-900 border-neutral-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg" href="https://robotphoto.com" rel="noopener" target="_blank">
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="mt-0.5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="sm:text-sm text-base font-medium tracking-tight">PHOTOGRAPHY SITE</span>
<span className="text-xs text-neutral-400 leading-relaxed">Full galleries and recent work.</span>
</div>
</div>
<div className="flex items-center gap-2 self-start sm:self-auto bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
<span className="text-xs font-medium tracking-wide">Gallery</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</a>

<a className="interactive-el group flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 animate-fade-in stagger-4 bg-white/60 border-neutral-200/80 border rounded-2xl pt-5 pr-5 pb-5 pl-5" href="https://instagram.com/robotphoto" rel="noopener" target="_blank">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-base sm:text-sm font-medium text-neutral-900 tracking-tight">@robotphoto</span>
<span className="text-xs text-neutral-500 leading-relaxed">Umbrella for LoDoBooth &amp; Booty Bouquet.</span>
</div>
</div>
<div className="self-start sm:self-auto bg-neutral-100/80 text-neutral-600 px-3 py-1.5 rounded-full border border-neutral-200/50 text-xs font-medium tracking-wide group-hover:bg-neutral-100 transition-colors">
            Instagram
          </div>
</a><a className="interactive-el group flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5 shadow-neutral-900/10 animate-fade-in stagger-1 text-white bg-neutral-900 border-neutral-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg" href="https://partybooth.aura.build" rel="noopener" target="_blank">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="sm:text-sm text-base font-medium text-slate-200 tracking-tight">BOOTH BOOKINGS</span>
<span className="text-xs text-neutral-500 leading-relaxed">Partybooth, event coverage, and add‑ons.</span>
</div>
</div>
<div className="self-start sm:self-auto bg-neutral-100/80 text-neutral-600 px-3 py-1.5 rounded-full border border-neutral-200/50 text-xs font-medium tracking-wide group-hover:bg-neutral-100 transition-colors">
            Booth details
          </div>
</a>
<a className="interactive-el group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/60 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 animate-fade-in stagger-3" href="https://bootybouquet.com" rel="noopener" target="_blank">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:moon-stars-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-base sm:text-sm font-medium text-neutral-900 tracking-tight">Secret Menu</span>
<span className="text-xs text-neutral-500 leading-relaxed">Booty Bouquet and after‑hours options.</span>
</div>
</div>
<div className="self-start sm:self-auto bg-neutral-100/80 text-neutral-600 px-3 py-1.5 rounded-full border border-neutral-200/50 text-xs font-medium tracking-wide group-hover:bg-neutral-100 transition-colors">
            BootyBouquet.com
          </div>
</a>
<a className="interactive-el group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/60 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 animate-fade-in stagger-5" href="https://robotphoto.com/resume" rel="noopener" target="_blank">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-base sm:text-sm font-medium text-neutral-900 tracking-tight">Resume</span>
<span className="text-xs text-neutral-500 leading-relaxed">Experience, clients, and background.</span>
</div>
</div>
<div className="self-start sm:self-auto bg-neutral-100/80 text-neutral-600 px-3 py-1.5 rounded-full border border-neutral-200/50 text-xs font-medium tracking-wide group-hover:bg-neutral-100 transition-colors">
            PDF / Link
          </div>
</a>
<a className="interactive-el group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/60 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 animate-fade-in stagger-6" href="https://robotphoto.com/couples-guide" rel="noopener" target="_blank">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:hearts-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-base sm:text-sm font-medium text-neutral-900 tracking-tight">Couples Guide</span>
<span className="text-xs text-neutral-500 leading-relaxed">For engagements, weddings, and elopements.</span>
</div>
</div>
<div className="self-start sm:self-auto bg-neutral-100/80 text-neutral-600 px-3 py-1.5 rounded-full border border-neutral-200/50 text-xs font-medium tracking-wide group-hover:bg-neutral-100 transition-colors">
            Guide
          </div>
</a>
</div>

<footer className="mt-10 pt-6 border-t border-neutral-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
<span className="hover:text-neutral-600 transition-colors">Miss Robot</span>
<div className="flex items-center gap-4 flex-wrap">
<span className="hover:text-neutral-600 transition-colors">LoDoBooth - Denver</span>
<span className="hidden sm:inline w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="hover:text-neutral-600 transition-colors">partybooth.aura.build</span>
</div>
</footer>
</main>
</div>


    </>
  );
}
