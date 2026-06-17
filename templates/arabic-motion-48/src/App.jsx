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



        document.addEventListener('DOMContentLoaded', () => {
            if(typeof lucide !== 'undefined') lucide.createIcons();

            /* 1. VELOCITY */
            const velocityTexts = document.querySelectorAll('.velocity-text');
            let currentScroll = 0, targetScroll = 0;
            function updateVelocity() {
                targetScroll = window.scrollY;
                currentScroll += (targetScroll - currentScroll) * 0.1;
                // Reverse skew direction for visual RTL flow preference
                const skew = Math.min(Math.max((targetScroll - currentScroll) * 0.15, -10), 10);
                velocityTexts.forEach((text, i) => text.style.transform = `skewX(${skew * (i % 2 === 0 ? -1 : 1)}deg)`);
                requestAnimationFrame(updateVelocity);
            }
            updateVelocity();

            /* 2. FRACTURE */
            const fractureContainer = document.getElementById('fracture-container');
            if(fractureContainer) {
                const slices = fractureContainer.querySelectorAll('.f-slice');
                fractureContainer.addEventListener('mousemove', (e) => {
                    const rect = fractureContainer.getBoundingClientRect();
                    const yVal = (e.clientY - rect.top - (rect.height / 2)) / (rect.height / 2);
                    slices.forEach(slice => slice.style.transform = `translateY(${yVal * 40 * parseFloat(slice.getAttribute('data-dir'))}px)`);
                });
                fractureContainer.addEventListener('mouseleave', () => slices.forEach(s => s.style.transform = `translateY(0)`));
            }

            /* 3. LIQUID */
            const liquidTrigger = document.getElementById('liquid-trigger');
            const turb = document.getElementById('turb');
            let val = 0.00, target = 0.00;
            if (liquidTrigger && turb) {
                liquidTrigger.onmouseenter = () => target = 0.03;
                liquidTrigger.onmouseleave = () => target = 0.00;
                function loopLiquid() {
                    val += (target - val) * 0.05;
                    turb.setAttribute('baseFrequency', `${val} ${val}`);
                    requestAnimationFrame(loopLiquid);
                }
                loopLiquid();
            }

            /* 4. SPOTLIGHT */
            document.querySelectorAll('.spotlight-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    // Math remains same, visuals handled by CSS
                    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });
            });

            /* 5. PIXEL WAVE */
            const pixelGrid = document.getElementById('pixel-grid');
            if(pixelGrid) {
                for(let i=0; i<200; i++) {
                    const d = document.createElement('div');
                    d.className = 'pixel';
                    pixelGrid.appendChild(d);
                }
                const pixels = document.querySelectorAll('.pixel');
                pixelGrid.addEventListener('mousemove', (e) => {
                    const rect = pixelGrid.getBoundingClientRect();
                    const mx = e.clientX - rect.left;
                    const my = e.clientY - rect.top;
                    pixels.forEach(p => {
                        const pr = p.getBoundingClientRect();
                        const dist = Math.sqrt(Math.pow(mx - ((pr.left - rect.left) + pr.width/2), 2) + Math.pow(my - ((pr.top - rect.top) + pr.height/2), 2));
                        if(dist < 100) {
                            p.classList.add('active');
                            clearTimeout(p.timer);
                            p.timer = setTimeout(() => p.classList.remove('active'), 400);
                        }
                    });
                });
            }

            /* 6. VOXEL ELEVATION */
            const voxelSection = document.getElementById('voxel');
            const voxelGrid = document.getElementById('voxel-grid');
            if(voxelGrid && voxelSection) {
                for(let i=0; i<100; i++) {
                    const v = document.createElement('div');
                    v.className = 'voxel';
                    voxelGrid.appendChild(v);
                }
                const voxels = document.querySelectorAll('.voxel');
                voxelSection.addEventListener('mousemove', (e) => {
                    const rect = voxelGrid.getBoundingClientRect();
                    const mx = e.clientX; const my = e.clientY;
                    voxels.forEach(v => {
                        const r = v.getBoundingClientRect();
                        const d = Math.sqrt(Math.pow(mx - (r.left + r.width/2), 2) + Math.pow(my - (r.top + r.height/2), 2));
                        if(d < 120) {
                            v.classList.add('lift');
                            clearTimeout(v.t);
                            v.t = setTimeout(() => v.classList.remove('lift'), 300);
                        }
                    });
                });
            }

            /* 7. FOCUS LENS */
            const lensSection = document.getElementById('lens');
            const lensHud = document.getElementById('lens-hud');
            if(lensSection) {
                lensSection.addEventListener('mousemove', (e) => {
                    const rect = lensSection.getBoundingClientRect();
                    // e.clientX is from Left even in RTL. This math works for the mask-image logic.
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    lensSection.style.setProperty('--lens-x', x + 'px');
                    lensSection.style.setProperty('--lens-y', y + 'px');
                    if(lensHud) {
                        lensHud.style.left = (x - 125) + 'px';
                        lensHud.style.top = (y - 125) + 'px';
                    }
                });
            }
        });

        /* CODE GEN */
        function copyToClipboard() {
            const code = document.getElementById('code-content').innerText;
            navigator.clipboard.writeText(code).then(() => alert('تم نسخ الكود!'));
        }

        function showCode(type) {
            let code = "";
            if (type === 'lens') code = `<!DOCTYPE html><html><head><style>body{margin:0;height:100vh;background:#000;overflow:hidden;position:relative}.layer{position:absolute;inset:0;background-size:cover;background-position:center}.blur{background-image:url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2600');filter:grayscale(1) blur(8px) brightness(0.4)}.clear{background-image:url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2600');mask-image:radial-gradient(250px circle at var(--x,50%) var(--y,50%),black 0%,transparent 100%);-webkit-mask-image:radial-gradient(250px circle at var(--x,50%) var(--y,50%),black 0%,transparent 100%)}.ui{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:5rem;font-weight:bold;pointer-events:none;mix-blend-mode:overlay}</style></head><body><div class="layer blur"></div><div class="layer clear"></div><div class="ui">FOCUS</div><script>document.body.onmousemove=e=>{document.body.style.setProperty('--x',e.clientX+'px');document.body.style.setProperty('--y',e.clientY+'px')}<\/script></body></html>`;
            else if (type === 'voxel') code = `<!DOCTYPE html><html><head><style>body{background:#000;height:100vh;display:flex;align-items:center;justify-content:center;perspective:1000px;overflow:hidden}.stage{transform-style:preserve-3d;transform:rotateX(60deg) rotateZ(45deg);width:400px;height:400px;display:grid;grid-template-columns:repeat(10,1fr);gap:4px}.v{background:#111;border:1px solid #222;transition:0.2s;position:relative}.v::after{content:'';position:absolute;bottom:-10px;left:0;width:100%;height:10px;background:#000;transform:skewX(45deg);transform-origin:bottom;opacity:0;transition:0.2s}.v.lift{transform:translateZ(60px);background:linear-gradient(135deg,#06b6d4,#3b82f6);box-shadow:0 0 30px rgba(6,182,212,0.4);z-index:50}.v.lift::after{opacity:1}</style></head><body><div class="stage" id="stage"></div><script>const s=document.getElementById('stage');for(let i=0;i<100;i++){const d=document.createElement('div');d.className='v';s.appendChild(d)}const vs=document.querySelectorAll('.v');document.body.onmousemove=e=>{vs.forEach(v=>{const r=v.getBoundingClientRect();const d=Math.sqrt(Math.pow(e.clientX-(r.left+r.width/2),2)+Math.pow(e.clientY-(r.top+r.height/2),2));if(d<100){v.classList.add('lift');clearTimeout(v.t);v.t=setTimeout(()=>v.classList.remove('lift'),300)}})}<\/script></body></html>`;
            else code = `// ${type} example placeholder`;
            
            document.getElementById('code-content').textContent = code;
            document.getElementById('code-modal').classList.add('active');
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
      

<svg aria-hidden="true" className="absolute w-0 h-0 overflow-hidden">
<defs>
<filter id="liquid-filter">
<feturbulence basefrequency="0.0" id="turb" numoctaves="2" result="noise" type="fractalNoise"></feturbulence>
<fedisplacementmap in="SourceGraphic" in2="noise" scale="60" xchannelselector="R" ychannelselector="G"></fedisplacementmap>
</filter>
</defs>
</svg>
<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
<div className="font-bold text-xl tracking-tighter text-white font-display">أثــيــر</div>
<div className="hidden md:flex gap-6 text-xs font-bold text-neutral-500">
<a className="hover:text-white transition-colors" href="#velocity">٠١. سرعة</a>
<a className="hover:text-white transition-colors" href="#fracture">٠٢. تكسير</a>
<a className="hover:text-white transition-colors" href="#liquid">٠٣. سائل</a>
<a className="hover:text-white transition-colors" href="#spotlight">٠٤. تسليط</a>
<a className="hover:text-white transition-colors" href="#pixel">٠٥. بكسل</a>
<a className="hover:text-white transition-colors" href="#voxel">٠٦. فوكسل</a>
<a className="hover:text-white transition-colors text-white" href="#lens">٠٧. عدسة</a>
</div>
<button className="text-xs font-bold border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">القائمة</button>
</nav>
<main className="flex flex-col w-full relative z-10 bg-[#050505] mb-[50vh] shadow-2xl shadow-black">

<section className="h-screen flex flex-col justify-center items-center relative overflow-hidden" id="velocity">
<div className="absolute top-32 text-center"><span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">[ مرر للتشويه ]</span></div>
<div className="text-center space-y-4">
<h1 className="velocity-text text-[12vw] font-black leading-[0.8] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 will-change-transform">محرك</h1>
<h1 className="velocity-text text-[12vw] font-black leading-[0.8] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 will-change-transform">حركي</h1>
</div>
</section>

<section className="fracture-section" id="fracture">
<div className="section-label">[ ٠٢. تكسير مؤشر ]</div>
<div className="absolute top-12 left-12 z-10"><button className="text-xs font-bold bg-white text-black px-3 py-1 rounded hover:scale-105 transition-transform" onclick="showCode('fracture')">الكود</button></div>
<div className="fracture-container" id="fracture-container">
<div className="f-slice" data-dir="1.5"><div className="f-bg"></div></div><div className="f-slice" data-dir="-1.2"><div className="f-bg"></div></div><div className="f-slice" data-dir="2"><div className="f-bg"></div></div><div className="f-slice" data-dir="-1.5"><div className="f-bg"></div></div><div className="f-slice" data-dir="1"><div className="f-bg"></div></div>
</div>
</section>

<section className="liquid-section" id="liquid">
<div className="section-label">[ ٠٣. اضطراب SVG ]</div>
<div className="absolute top-12 left-12 z-10"><button className="text-xs font-bold bg-white text-black px-3 py-1 rounded hover:scale-105 transition-transform" onclick="showCode('liquid')">الكود</button></div>
<div className="flex flex-col md:flex-row gap-20 items-center justify-center w-full px-6">

<div className="text-right max-w-sm order-2 md:order-1">
<h2 className="text-6xl font-bold mb-6 tracking-tight font-display">واقع<br/>سائل</h2>
<p className="text-neutral-400 text-sm leading-relaxed">مرر المؤشر فوق الصورة. خريطة ضجيج مولدة ديناميكياً تقوم بإزاحة البكسلات في الوقت الفعلي.</p>
</div>
<div className="liquid-container order-1 md:order-2" id="liquid-trigger">
<img alt="Liquid" className="liquid-img" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="liquid-overlay"><h3 className="text-9xl font-black text-white opacity-20 tracking-tighter font-display">تدفق</h3></div>
</div>
</div>
</section>

<section className="spotlight-section" id="spotlight">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div><span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">[ ٠٤. إضاءة ذكية ]</span><h2 className="text-5xl font-bold mt-4 tracking-tight font-display">نظام<br/>شبكي</h2></div>
<button className="text-xs font-bold bg-white text-black px-3 py-1 rounded hover:scale-105 transition-transform" onclick="showCode('spotlight')">الكود</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="spotlight-card h-[400px] group cursor-default"><div className="card-content"><i className="text-white w-5 h-5 mb-6" data-lucide="scan-line"></i><h3 className="text-2xl font-bold mb-2 font-display">تتبع الأشعة</h3><p className="text-neutral-400 text-sm leading-relaxed">الضوء يتبع إحداثيات المؤشر بدقة.</p></div></div>
<div className="spotlight-card h-[400px] group cursor-default"><div className="card-content"><i className="text-white w-5 h-5 mb-6" data-lucide="layers"></i><h3 className="text-2xl font-bold mb-2 font-display">خريطة العمق</h3><p className="text-neutral-400 text-sm leading-relaxed">تدرج لوني لإخفاء الحدود.</p></div></div>
<div className="spotlight-card h-[400px] group cursor-default"><div className="card-content"><i className="text-white w-5 h-5 mb-6" data-lucide="zap"></i><h3 className="text-2xl font-bold mb-2 font-display">استجابة فورية</h3><p className="text-neutral-400 text-sm leading-relaxed">تكوين مسرع عبر وحدة المعالجة (GPU).</p></div></div>
</div>
</div>
</section>

<section className="pixel-section" id="pixel">
<div className="section-label">[ ٠٥. حقل رقمي ]</div>
<div className="absolute top-12 left-12 z-10"><button className="text-xs font-bold bg-white text-black px-3 py-1 rounded hover:scale-105 transition-transform" onclick="showCode('pixel')">الكود</button></div>
<div className="pixel-grid" id="pixel-grid"></div>
<div className="absolute bottom-12 w-full text-center pointer-events-none"><p className="text-neutral-500 text-sm">حرك المؤشر لتعطيل الحقل الرقمي</p></div>
</section>

<section className="voxel-section" id="voxel">
<div className="section-label">[ ٠٦. تضاريس ثلاثية الأبعاد ]</div>
<div className="absolute top-12 left-12 z-10"><button className="text-xs font-bold bg-white text-black px-3 py-1 rounded hover:scale-105 transition-transform" onclick="showCode('voxel')">الكود</button></div>
<div className="voxel-stage" id="voxel-grid"></div>
<div className="absolute bottom-12 w-full text-center pointer-events-none"><p className="text-neutral-500 text-sm">مرر لرفع مشهد البيانات</p></div>
</section>

<section className="lens-section" id="lens">
<div className="section-label text-white border-white">[ ٠٧. عدسة التركيز ]</div>
<div className="absolute top-12 left-12 z-20"><button className="text-xs font-bold bg-white text-black px-3 py-1 rounded hover:scale-105 transition-transform" onclick="showCode('lens')">الكود</button></div>

<div className="lens-blur-layer"></div>
<div className="lens-ui dim-text">

<div className="flex flex-col justify-between h-full py-20 border-e border-white/5 ps-10">
<div className="space-y-4">
<div className="data"><span>معرف_نظام</span><span>--</span></div>
<div className="data"><span>الحالة</span><span>غير متصل</span></div>
</div>
</div>

<div className="flex justify-center font-display"><h2>بيانات</h2></div>

<div className="flex flex-col justify-end h-full py-20 border-s border-white/5 pe-10 text-left"><div className="data"><span>مشفر</span></div></div>
</div>

<div className="lens-focus-layer"></div>
<div className="lens-ui bright-text" style={{maskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)', WebkitMaskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)'}}>
<div className="flex flex-col justify-between h-full py-20 border-e border-white/20 ps-10">
<div className="space-y-4">
<div className="data"><span>معرف_نظام</span><span>AE-9000</span></div>
<div className="data"><span>الحالة</span><span className="text-emerald-400">متصل</span></div>
</div>
</div>
<div className="flex justify-center font-display"><h2>بيانات</h2></div>
<div className="flex flex-col justify-end h-full py-20 border-s border-white/20 pe-10 text-left">
<div className="data"><span>حزمة_٠١</span><span>0x44...F2</span></div>
</div>
</div>

<div className="lens-hud" id="lens-hud"></div>
</section>
</main>
<footer className="fixed bottom-0 left-0 w-full h-[50vh] flex flex-col justify-center items-center bg-black text-white z-0">
<h2 className="text-[15vw] font-display font-bold leading-none tracking-tighter text-neutral-800">أثــيــر</h2>
<div className="mt-8 text-neutral-600 text-xs font-sans">© 2024 GEMINI MOTION.</div>
</footer>

<div className="code-modal" id="code-modal">
<div className="flex justify-between items-center mb-4">
<button className="text-neutral-500 hover:text-white" onclick="document.getElementById('code-modal').classList.remove('active')">×</button>
<h3 className="text-white font-bold text-sm">كود مستقل</h3>
</div>
<button className="w-full bg-white text-black py-2 rounded text-xs font-bold mb-4 hover:bg-neutral-200" onclick="copyToClipboard()">نسخ إلى الحافظة</button>
<pre dir="ltr" id="code-content"></pre>
</div>


    </>
  );
}
