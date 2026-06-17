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



  /* CURSOR */
  const cdot = document.getElementById('cdot'), cring = document.getElementById('cring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { 
    mx = e.clientX; 
    my = e.clientY; 
    cdot.style.left = mx + 'px'; 
    cdot.style.top = my + 'px'; 
  });
  (function loop(){
    rx += (mx - rx) * 0.12; 
    ry += (my - ry) * 0.12; 
    cring.style.left = rx + 'px'; 
    cring.style.top = ry + 'px'; 
    requestAnimationFrame(loop);
  })();

  /* PROGRESS */
  const prog = document.getElementById('prog');
  window.addEventListener('scroll', () => {
    prog.style.transform = `scaleX(${scrollY / (document.body.scrollHeight - innerHeight)})`;
  });

  /* CLOCK */
  function tick(){
    document.getElementById('navTime').textContent = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false});
  }
  tick(); setInterval(tick, 1000);

  /* BG CANVAS — orbs + grid + scan */
  const bgC = document.getElementById('bg-canvas'), bgX = bgC.getContext('2d');
  let W, H;
  function resizeBg(){ bgC.width = W = innerWidth; bgC.height = H = innerHeight; }
  resizeBg(); window.addEventListener('resize', resizeBg);
  
  const orbs = [
    { x: 0.15, y: 0.25, r: 340, vx: 0.00015, vy: 0.00012, hue: 345 },
    { x: 0.78, y: 0.6,  r: 300, vx: -0.0001, vy: 0.00016, hue: 335 },
    { x: 0.45, y: 0.8,  r: 220, vx: 0.00018, vy: -0.0001, hue: 350 },
    { x: 0.88, y: 0.15, r: 190, vx: -0.00013,vy: 0.00013, hue: 320 },
    { x: 0.3,  y: 0.55, r: 160, vx: 0.00012, vy: 0.00017, hue: 355 },
  ];
  let t = 0;
  function drawBg(){
    bgX.clearRect(0, 0, W, H);
    bgX.strokeStyle = 'rgba(107,0,26,0.035)'; bgX.lineWidth = 0.5;
    const gs = 55;
    for(let x = 0; x < W; x += gs){ bgX.beginPath(); bgX.moveTo(x, 0); bgX.lineTo(x, H); bgX.stroke(); }
    for(let y = 0; y < H; y += gs){ bgX.beginPath(); bgX.moveTo(0, y); bgX.lineTo(W, y); bgX.stroke(); }
    
    orbs.forEach(o => {
      const px = (o.x + Math.sin(t * o.vx * 900) * 0.09) * W;
      const py = (o.y + Math.cos(t * o.vy * 900) * 0.08) * H;
      const g = bgX.createRadialGradient(px, py, 0, px, py, o.r);
      const a = 0.13 + Math.sin(t * 0.008 + o.hue) * 0.05;
      g.addColorStop(0, `hsla(${o.hue}, 100%, 20%, ${a})`);
      g.addColorStop(0.5, `hsla(${o.hue}, 80%, 12%, 0.05)`);
      g.addColorStop(1, 'transparent');
      bgX.beginPath(); bgX.arc(px, py, o.r, 0, Math.PI * 2);
      bgX.fillStyle = g; bgX.fill();
    });
    
    const sy = ((t * 0.4) % (H + 120)) - 60;
    const sg = bgX.createLinearGradient(0, sy - 30, 0, sy + 30);
    sg.addColorStop(0, 'transparent');
    sg.addColorStop(0.5, 'rgba(155,0,40,0.03)');
    sg.addColorStop(1, 'transparent');
    bgX.fillStyle = sg; bgX.fillRect(0, sy - 30, W, 60);
    t++; requestAnimationFrame(drawBg);
  }
  drawBg();

  /* FREQ BARS — bottom of page */
  const fC = document.getElementById('freq-canvas'), fX = fC.getContext('2d');
  function resizeFreq(){ fC.width = innerWidth; fC.height = 220; }
  resizeFreq(); window.addEventListener('resize', resizeFreq);
  const N = 100;
  const ph = Array.from({length: N}, () => Math.random() * Math.PI * 2);
  const sp = Array.from({length: N}, () => 0.011 + Math.random() * 0.019);
  const bh = Array.from({length: N}, () => 0.08 + Math.random() * 0.22);
  let ft = 0;
  function drawFreq(){
    fX.clearRect(0, 0, fC.width, fC.height);
    const bw = fC.width / N;
    for(let i = 0; i < N; i++){
      const w = (Math.sin(ft * sp[i] + ph[i]) * 0.5 + 0.5);
      const w2 = (Math.sin(ft * sp[i] * 0.55 + ph[i] + 1.4) * 0.3 + 0.3);
      const c = w * 0.6 + w2 * 0.4;
      const h = (bh[i] + c * 0.65) * fC.height;
      const x = i * bw;
      const alpha = 0.28 + c * 0.38;
      const g = fX.createLinearGradient(0, fC.height, 0, fC.height - h);
      g.addColorStop(0, `rgba(80,0,18,${alpha})`);
      g.addColorStop(0.45, `rgba(155,0,40,${alpha * 0.95})`);
      g.addColorStop(0.8, `rgba(196,0,58,${alpha * 0.7})`);
      g.addColorStop(1, `rgba(212,84,122,${alpha * 0.3})`);
      fX.fillStyle = g;
      fX.fillRect(x + 1, fC.height - h, bw - 2, h);
    }
    ft += 0.7; requestAnimationFrame(drawFreq);
  }
  drawFreq();

  /* INLINE FREQ WIDGET */
  const iC = document.getElementById('freq-inline'), iX = iC.getContext('2d');
  function resizeInline(){
    const dpr = devicePixelRatio || 1;
    const w = iC.parentElement.offsetWidth || 900;
    iC.width = w * dpr; iC.height = 130 * dpr;
    iC.style.width = w + 'px'; iC.style.height = '130px';
    iX.scale(dpr, dpr);
  }
  resizeInline(); window.addEventListener('resize', () => { iX.setTransform(1, 0, 0, 1, 0, 0); resizeInline(); });
  const IM = 64;
  const ip = Array.from({length: IM}, () => Math.random() * Math.PI * 2);
  const is = Array.from({length: IM}, () => 0.014 + Math.random() * 0.024);
  const ib = Array.from({length: IM}, () => 0.07 + Math.random() * 0.28);
  let itime = 0;
  function drawInline(){
    const W2 = iC.parentElement.offsetWidth || 900, CH = 130;
    iX.clearRect(0, 0, W2, CH);
    const bw = W2 / IM;
    const mid = CH / 2;
    iX.strokeStyle = 'rgba(107,0,26,0.25)'; iX.lineWidth = 0.5;
    iX.beginPath(); iX.moveTo(0, mid); iX.lineTo(W2, mid); iX.stroke();
    for(let i = 0; i < IM; i++){
      const w = Math.sin(itime * is[i] + ip[i]) * 0.5 + 0.5;
      const w2 = Math.sin(itime * is[i] * 0.52 + ip[i] + 1.8) * 0.3 + 0.3;
      const combo = w * 0.62 + w2 * 0.38;
      const h = (ib[i] + combo * 0.58) * CH;
      const x = i * bw;
      const g = iX.createLinearGradient(0, mid - h / 2, 0, mid + h / 2);
      g.addColorStop(0, 'rgba(196,0,58,0.1)');
      g.addColorStop(0.25, `rgba(155,0,40,${0.38 + combo * 0.38})`);
      g.addColorStop(0.5, `rgba(212,84,122,${0.55 + combo * 0.3})`);
      g.addColorStop(0.75, `rgba(155,0,40,${0.38 + combo * 0.38})`);
      g.addColorStop(1, 'rgba(196,0,58,0.1)');
      iX.fillStyle = g;
      iX.fillRect(x + 1, mid - h / 2, bw - 2, h);
      iX.beginPath();
      iX.arc(x + bw / 2, mid - h / 2, 1.4, 0, Math.PI * 2);
      iX.fillStyle = `rgba(232,160,180,${combo * 0.55})`;
      iX.fill();
      iX.beginPath();
      iX.arc(x + bw / 2, mid + h / 2, 1.4, 0, Math.PI * 2);
      iX.fillStyle = `rgba(232,160,180,${combo * 0.55})`;
      iX.fill();
    }
    itime += 0.85; requestAnimationFrame(drawInline);
  }
  drawInline();

  /* REVEAL */
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => { 
      if(e.isIntersecting){ 
        setTimeout(() => e.target.classList.add('in'), i * 75); 
        obs.unobserve(e.target); 
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

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
      

<div className="grain fixed inset-0 z-[2] pointer-events-none opacity-5 mix-blend-overlay"></div>
<div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(4,0,10,0.9)_100%)]"></div>
<canvas className="fixed inset-0 z-0 pointer-events-none" height="948" id="bg-canvas" width="1440"></canvas>
<canvas className="fixed bottom-0 left-0 right-0 z-0 pointer-events-none opacity-50" height="220" id="freq-canvas" width="1440"></canvas>

<div className="cdot fixed w-2 h-2 bg-[#c4003a] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" id="cdot" style={{left: '383px', top: '836px'}}></div>
<div className="cring fixed w-9 h-9 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2" id="cring" style={{left: '0px', top: '0px'}}></div>
<div className="prog fixed top-0 left-0 h-[1.5px] w-full z-[1000] origin-left scale-x-0" id="prog"></div>

<nav className="fixed top-0 left-0 right-0 z-[500] py-6 px-7 md:py-8 md:px-14 flex justify-between items-center bg-gradient-to-b from-[#04000a]/90 to-transparent">
<div className="font-['Cormorant_Garamond',serif] text-xl font-medium tracking-[0.4em] uppercase text-[#f5ece8] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#c4003a] after:to-transparent">
    Velvet
  </div>
<div className="flex items-center gap-6 md:gap-10">
<a className="hidden md:block font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#5c2035] no-underline hover:text-[#e8a0b4] transition-colors duration-300" href="#about">About</a>
<a className="hidden md:block uppercase no-underline hover:text-[#e8a0b4] transition-colors duration-300 text-xs text-[#5c2035] tracking-[0.2em] font-['Tenor_Sans',sans-serif]" href="#cta">Contact</a>
<div className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.15em] text-[#5c2035] tabular-nums" id="navTime">16:38:22</div>
</div>
</nav>

<section className="z-[3] flex flex-col md:px-14 md:pb-0 overflow-hidden h-screen pr-7 pb-16 pl-7 relative items-start justify-center" id="hero">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] font-['Cormorant_Garamond',serif] text-[24vw] leading-none font-semibold tracking-tighter text-transparent whitespace-nowrap pointer-events-none select-none animate-ghost" style={{WebkitTextStroke: '1px rgba(155,0,40,0.12)'}}>
    Velvet
  </div>
<div className="uppercase md:mb-6 flex gap-4 animate-slide-up-1 text-xs text-[#d4547a] tracking-[0.3em] font-['Tenor_Sans',sans-serif] mb-5 gap-x-4 gap-y-4 items-center">
<div className="w-1 h-1 rounded-full bg-[#c4003a] shadow-[0_0_8px_#c4003a] animate-dot"></div>
    Open to Creative Work
  </div>
<h1 className="md:text-[13vw] leading-[0.88] animate-slide-up-2 text-7xl text-[#f5ece8] tracking-tighter font-['Cormorant_Garamond',serif]">Welcome<br/></h1>
<div className="mt-12 flex items-center gap-8 animate-slide-up-4">
<a className="group relative inline-flex items-center gap-3 border border-[#6b001a] py-4 px-8 font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#f5ece8] overflow-hidden" href="#about">
<div className="absolute inset-0 bg-[#9b0028] -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0"></div>
<span className="z-10 relative">Niche jao</span>
<iconify-icon className="relative z-10" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="uppercase transition-colors duration-300 hover:text-[#e8a0b4] text-xs text-[#5c2035] tracking-[0.2em] font-['Tenor_Sans',sans-serif]" href="#cta"></a>
</div>
<div className="hidden md:flex absolute right-14 bottom-16 flex-col items-center gap-3 animate-fade-in">
<div className="w-[1px] h-14 bg-[#2a0812] relative overflow-hidden animate-scroll-bar"></div>
<div className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.25em] uppercase text-[#5c2035] [writing-mode:vertical-lr]">Scroll</div>
</div>
</section>

<div className="h-[1px] bg-[#2a0812] relative z-[3]"></div>

<section className="md:py-36 md:px-14 grid grid-cols-1 md:grid-cols-[1fr_1.7fr] md:gap-32 max-w-[1400px] z-[3] mr-auto ml-auto pt-20 pr-7 pb-20 pl-7 relative gap-x-14 gap-y-14 items-start" id="about">
<div className="md:sticky md:top-36">
<h2 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light leading-[1.02] tracking-tighter text-[#f5ece8] reveal">
      The mind<br/>behind<br/><em className="not-italic text-[#d4547a]">Velvet.</em>
</h2>
<div className="flex flex-col gap-0 mt-12 reveal">
<div className="flex justify-between items-baseline py-4 border-b border-t border-[#2a0812]">
<span className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#5c2035]">Name</span>
<span className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#d4547a]">Velvet</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-[#2a0812]">
<span className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#5c2035]">Based in</span>
<span className="text-xl font-light text-[#d4547a] font-['Cormorant_Garamond',serif]">uttar pradesh</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-[#2a0812]">
<span className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#5c2035]">Discipline</span>
<span className="text-xl font-light text-[#d4547a] font-['Cormorant_Garamond',serif]">Mujhe kuch nhi aata</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-[#2a0812]">
<span className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#5c2035]">Status</span>
<span className="text-xl font-light text-[#d4547a] font-['Cormorant_Garamond',serif]">Sleeping</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-[#2a0812]">
<span className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#5c2035]">Aesthetic</span>
<span className="text-xl font-light text-[#d4547a] font-['Cormorant_Garamond',serif]">hmm..!!</span>
</div>
</div>
</div>
<div className="pt-2">
<p className="md:text-4xl leading-relaxed reveal text-3xl text-[#f5ece8] tracking-tighter font-['Cormorant_Garamond',serif] mb-12">Mai <strong className="font-medium text-[#d4547a]">Velvet</strong> hu orr maine ye site bnai h, <em className="not-italic text-[#e8a0b4]">mujhe ye sab krna psand h pr sabkuch nhi</em> jaise ki 🫵</p>
<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:grid-rows-2 gap-1 my-16 border border-[#2a0812] reveal">
<div className="flex flex-col gap-3 overflow-hidden aspect-[4/3] md:aspect-[3/4] md:row-span-2 bg-[#110008] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdaa3547-e8c6-425d-bfc0-19c7c30bb842_800w.jpg)] bg-cover bg-center relative gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="text-4xl opacity-20 grayscale pointer-events-none" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-[#04000a]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-4 left-5 font-['Tenor_Sans',sans-serif] text-xs tracking-[0.18em] uppercase text-[#5c2035]">Velvet — 2025</div>
<div className="absolute top-4 right-5 font-['Cormorant_Garamond',serif] text-sm italic text-[#2a0812]">01</div>
</div>
<div className="flex flex-col gap-3 overflow-hidden aspect-[4/3] bg-[#110008] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66e55e56-9c23-4c36-a926-77044f27b908_800w.png)] bg-cover bg-center relative gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="text-4xl opacity-20 grayscale pointer-events-none" icon="solar:gallery-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#2a0812]">Studio</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#04000a]/80 to-transparent pointer-events-none"></div>
<div className="uppercase text-xs text-[#5c2035] tracking-[0.18em] font-['Tenor_Sans',sans-serif] absolute bottom-4 left-5">Roblox</div>
<div className="absolute top-4 right-5 font-['Cormorant_Garamond',serif] text-sm italic text-[#2a0812]">02</div>
</div>
<div className="flex flex-col overflow-hidden aspect-[4/3] bg-[#110008] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29592b70-5289-4a61-a3f4-b1e539b4e07b_800w.png)] bg-cover bg-center relative gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="text-4xl opacity-20 grayscale pointer-events-none" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] uppercase text-[#2a0812]">Process</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#04000a]/80 to-transparent pointer-events-none"></div>
<div className="uppercase text-xs text-[#5c2035] tracking-[0.18em] font-['Tenor_Sans',sans-serif] absolute bottom-4 left-5">Roblox</div>
<div className="absolute top-4 right-5 font-['Cormorant_Garamond',serif] text-sm italic text-[#2a0812]">03</div>
</div>
</div>
<div className="flex flex-col gap-0 reveal">
<div className="group flex justify-between items-baseline py-6 border-b border-t border-[#2a0812] transition-all duration-300 hover:pl-4 cursor-default">
<div className="transition-colors duration-300 group-hover:text-[#d4547a] text-2xl font-light text-[#f5ece8] tracking-tight font-['Cormorant_Garamond',serif]">Pyar chahiye?</div>
<div className="uppercase text-xs text-red-500 tracking-[0.15em] font-['Tenor_Sans',sans-serif] text-right max-w-[200px]">NO need</div>
</div>
<div className="group flex transition-all duration-300 hover:pl-4 cursor-default border-[#2a0812] border-b pt-6 pb-6 pl-4 items-baseline justify-between">
<div className="transition-colors duration-300 group-hover:text-[#d4547a] text-2xl font-light text-[#f5ece8] tracking-tight font-['Cormorant_Garamond',serif]">Zindagi?</div>
<div className="uppercase text-xs text-red-500 tracking-[0.15em] font-['Tenor_Sans',sans-serif] text-right max-w-[200px]">lauda</div>
</div>
<div className="group flex justify-between items-baseline py-6 border-b border-[#2a0812] transition-all duration-300 hover:pl-4 cursor-default">
<div className="transition-colors duration-300 group-hover:text-[#d4547a] text-2xl font-light text-[#f5ece8] tracking-tight font-['Cormorant_Garamond',serif]">Kya kya aata h?</div>
<div className="uppercase text-xs text-red-500 tracking-[0.15em] font-['Tenor_Sans',sans-serif] text-right max-w-[200px]">kuch nhi...!!!</div>
</div>
<div className="group flex justify-between items-baseline py-6 border-b border-[#2a0812] transition-all duration-300 hover:pl-4 cursor-default">
<div className="transition-colors duration-300 group-hover:text-[#d4547a] text-2xl font-light text-[#f5ece8] tracking-tight font-['Cormorant_Garamond',serif]">kuch toh aata hoga?</div>
<div className="uppercase text-xs text-red-500 tracking-[0.15em] font-['Tenor_Sans',sans-serif] text-right max-w-[200px]">coding nhi aati</div>
</div>
</div>
<div className="mt-16 flex items-center gap-8 reveal">
<div className="flex-1 h-[1px] bg-[#2a0812]"></div>
<div className="font-['Cormorant_Garamond',serif] text-5xl italic font-extralight text-[#d4547a]">Velvet</div>
</div>
</div>
</section>
<div className="h-[1px] bg-[#2a0812] relative z-[3]"></div>

<section className="relative z-[3] py-24 px-7 md:px-14 text-center bg-gradient-to-b from-transparent via-[#0a0005]/70 to-transparent" id="freq-section">
<div className="md:text-6xl reveal text-4xl text-[#f5ece8] tracking-tighter font-['Cormorant_Garamond',serif] mb-1">ISS IT YOUR BRAIN OR SOUL??</div>
<canvas className="block w-full h-[130px] mt-10" height="130" id="freq-inline" style={{width: '1425px', height: '130px'}} width="1425"></canvas>
</section>
<div className="h-[1px] bg-[#2a0812] relative z-[3]"></div>


<footer className="relative z-[3] border-t border-[#2a0812] py-8 px-7 md:py-10 md:px-14 flex flex-col md:flex-row justify-between items-center bg-[#04000a]/80 gap-5">
<div className="uppercase text-xs text-[#5c2035] tracking-[0.18em] font-['Tenor_Sans',sans-serif]">© 2025 Velvet </div>
<div className="flex gap-8">
</div>
</footer>


    </>
  );
}
