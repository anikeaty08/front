import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icons
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    const glasses = document.getElementById('glasses');
    const panel = document.getElementById('panel');
    const panelToggle = document.getElementById('panelToggle');
    const panelToggleIcon = document.getElementById('panelToggleIcon');
    const brandBase = document.getElementById('brand-base');
    const brandIn   = document.getElementById('brand-in');
    const clarityBadge = document.getElementById('clarityBadge');
    const gradeBadge = document.getElementById('gradeBadge');
    const farPointBadge = document.getElementById('farPointBadge');
    const gradeBadgeMobile = document.getElementById('gradeBadgeMobile');
    const farPointBadgeMobile = document.getElementById('farPointBadgeMobile');

    // Segmented control
    const seg = document.getElementById('seg');
    const btns = seg.querySelectorAll('button');

    // Sliders
    const slidersMyopia = document.getElementById('sliders-miopia');
    const slidersAstig  = document.getElementById('sliders-astig');
    const myopiaRange = document.getElementById('myopiaRange');
    const myopiaValue = document.getElementById('myopiaValue');
    const cylRange = document.getElementById('cylRange');
    const cylValue = document.getElementById('cylValue');
    const axisRange = document.getElementById('axisRange');
    const axisValue = document.getElementById('axisValue');

    let mode = 'miopia'; // 'miopia' | 'astig'

    // Entrance timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        glasses.classList.add('in');
        panel.classList.add('in');
        panelToggle.classList.add('in');
        // Auto-colapse en pantallas pequeñas para no tapar
        if (window.innerWidth < 1024) {
          panel.classList.add('collapsed');
          setPanelToggleIcon(true);
        }
      }, 1100);
      updateVision();
      updateSliderFill(myopiaRange, -10, 0);
      updateSliderFill(cylRange, 0, 4);
      updateSliderFill(axisRange, 0, 180);
    });

    // Toggle panel
    panelToggle.addEventListener('click', () => {
      const toCollapse = !panel.classList.contains('collapsed');
      panel.classList.toggle('collapsed', toCollapse);
      setPanelToggleIcon(toCollapse);
    });

    function setPanelToggleIcon(collapsed){
      panelToggle.setAttribute('aria-label', collapsed ? 'Mostrar simulador' : 'Ocultar simulador');
      panelToggleIcon.setAttribute('data-lucide', collapsed ? 'panel-right-open' : 'panel-right-close');
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Mode toggle
    btns.forEach(b => {
      b.addEventListener('click', () => {
        mode = b.dataset.mode;
        seg.classList.toggle('miopia', mode === 'miopia');
        seg.classList.toggle('astig',  mode === 'astig');
        slidersMyopia.classList.toggle('hidden', mode !== 'miopia');
        slidersAstig.classList.toggle('hidden', mode !== 'astig');
        updateVision();
      });
    });

    // Range listeners
    myopiaRange.addEventListener('input', () => {
      myopiaValue.textContent = Number(myopiaRange.value).toFixed(2);
      updateSliderFill(myopiaRange, -10, 0);
      updateVision();
    });
    cylRange.addEventListener('input', () => {
      cylValue.textContent = Number(cylRange.value).toFixed(2);
      updateSliderFill(cylRange, 0, 4);
      updateVision();
    });
    axisRange.addEventListener('input', () => {
      axisValue.textContent = Number(axisRange.value);
      updateSliderFill(axisRange, 0, 180);
      updateVision();
    });

    function updateSliderFill(el, min, max){
      const v = Number(el.value);
      const pct = ((v - min) / (max - min)) * 100;
      el.style.setProperty('--fill', pct + '%');
      el.style.background = `
        linear-gradient(90deg, rgba(${getComputedStyle(document.documentElement).getPropertyValue('--accent')}) 0%, rgba(${getComputedStyle(document.documentElement).getPropertyValue('--accent2')}) ${pct}%, rgba(255,255,255,0.12) ${pct}%)
      `;
    }

    function updateVision(){
      if(mode === 'miopia'){
        const d = Math.abs(Number(myopiaRange.value)); // 0..10
        const outside = mapRange(d, 0, 10, 0, 18); // px blur outside
        document.documentElement.style.setProperty('--outside-blur', outside.toFixed(2)+'px');
        document.documentElement.style.setProperty('--inside-blur', (outside < 1 ? 0.2 : 0.4)+'px');

        // Clear any astigmatic directional smear
        brandBase.style.textShadow = makeDirectionalShadow(0, 0);
        brandIn.style.textShadow = '0 0 0 rgba(0,0,0,0)';

        // Badge claridad
        if (outside >= 14){
          clarityBadge.textContent = 'Muy borroso';
        } else if (outside <= 2){
          clarityBadge.textContent = 'Muy nítido';
        } else {
          clarityBadge.textContent = 'Equilibrado';
        }

        // Clasificación y distancia nítida
        const grade = d < 3 ? 'Leve' : (d <= 6 ? 'Moderada' : 'Alta (magna)');
        const farStr = d === 0 ? '∞' : formatDistance(1 / d);

        gradeBadge.textContent = `Grado: ${grade}`;
        farPointBadge.textContent = `Foco: ${farStr}`;
        gradeBadgeMobile.textContent = `Grado: ${grade}`;
        farPointBadgeMobile.textContent = `Foco: ${farStr}`;

        // Mostrar en miopía, ocultar en astig
        gradeBadge.classList.remove('hidden');
        farPointBadge.classList.remove('hidden');
      } else {
        const c = Number(cylRange.value); // 0..4
        const a = Number(axisRange.value); // 0..180
        const outside = mapRange(c, 0, 4, 0, 16);
        document.documentElement.style.setProperty('--outside-blur', outside.toFixed(2)+'px');
        document.documentElement.style.setProperty('--axis', a);

        // Directional smear simulating astigmatism axis
        const smearOutside = makeDirectionalShadow(a, mapRange(c, 0, 4, 0, 14));
        brandBase.style.textShadow = smearOutside;

        // Inside lens: corrected (reduced smear + slight micro-contrast)
        const smearInside = makeDirectionalShadow(a, Math.max(0, mapRange(c, 0, 4, 0, 14) - 12));
        brandIn.style.textShadow = smearInside;

        if (outside >= 12){
          clarityBadge.textContent = 'Borroso direccional';
        } else if (outside <= 2){
          clarityBadge.textContent = 'Muy nítido';
        } else {
          clarityBadge.textContent = 'Equilibrado';
        }

        // Ocultar info de miopía
        gradeBadge.classList.add('hidden');
        farPointBadge.classList.add('hidden');
      }
    }

    function formatDistance(meters){
      if (meters >= 1) return `≈ ${meters.toFixed(meters >= 10 ? 0 : 1)} m`;
      const cm = meters * 100;
      return `≈ ${cm.toFixed(cm >= 10 ? 0 : 1)} cm`;
    }

    function mapRange(v, inMin, inMax, outMin, outMax){
      const t = (v - inMin) / (inMax - inMin);
      return outMin + (outMax - outMin) * Math.min(1, Math.max(0, t));
    }

    // Creates a multi-offset text-shadow to emulate directional blur at angle (deg) with length (px)
    function makeDirectionalShadow(angleDeg, lengthPx){
      const steps = 24;
      if(lengthPx <= 0) return '0 0 0 rgba(0,0,0,0)';
      const rad = angleDeg * Math.PI / 180;
      const ux = Math.cos(rad), uy = Math.sin(rad);
      const shadows = [];
      for(let i = -steps; i <= steps; i++){
        const t = i / steps; // -1..1
        const dist = t * lengthPx;
        const dx = (ux * dist).toFixed(2);
        const dy = (uy * dist).toFixed(2);
        const a = (0.06 * (1 - Math.abs(t))).toFixed(3); // fade edges
        shadows.push(`${dx}px ${dy}px 1px rgba(255,255,255,${a})`);
      }
      return shadows.join(', ');
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-[0.22]" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(99,102,241,.18),transparent),linear-gradient(180deg,rgba(0,0,0,.6),rgba(0,0,0,.85))]"></div>
</div>

<button aria-label="Mostrar simulador" className="enter fixed right-4 sm:right-6 top-4 z-50 h-10 w-10 rounded-full border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,.45)] flex items-center justify-center" id="panelToggle">
<i className="h-5 w-5 text-white/90" data-lucide="panel-right-open" id="panelToggleIcon"></i>
</button>
<main className="relative min-h-screen flex items-center justify-center overflow-hidden grain">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] font-semibold tracking-tight leading-[0.95] text-white/95 drop-shadow-[0_1px_0_rgba(0,0,0,.35)]" id="brand-base">
        Óptica Prisma
      </h1>
</div>

<div className="absolute inset-0 mask-lenses flex items-center justify-center pointer-events-none">
<h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] font-semibold tracking-tight leading-[0.95] text-white" id="brand-in">
        Óptica Prisma
      </h1>
</div>

<div className="enter absolute inset-0" id="glasses">
<div className="pointer-events-none">
<div className="lens-ring left-[10%] sm:left-[15%] md:left-[18%]"></div>
<div className="lens-ring right-[10%] sm:right-[15%] md:right-[18%]"></div>
<div className="bridge"></div>
</div>
</div>

<section className="enter fixed right-4 sm:right-6 top-4 bottom-4 w-[min(380px,92vw)] rounded-2xl border border-white/10 bg-[color:var(--panel-bg)] backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,.45)] overflow-y-auto overscroll-contain z-40" id="panel">
<div className="p-4 sm:p-5 md:p-6">
<div className="flex items-center justify-between gap-3 mb-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
<i className="h-5 w-5 text-white/90" data-lucide="scan-eye"></i>
</div>
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Simulador de visión</h2>
<p className="text-sm text-white/60">Ajusta tu graduación y observa el nombre a través de las gafas.</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<span className="badge" id="clarityBadge">Equilibrado</span>
<span className="badge hidden" id="gradeBadge">Grado: Leve</span>
<span className="badge hidden" id="farPointBadge">Foco: ∞</span>
</div>
</div>

<div className="flex items-center justify-between gap-4 flex-wrap">
<div className="seg miopia" id="seg">
<div className="thumb"></div>
<button className="btn-miopia flex items-center gap-2" data-mode="miopia" type="button">
<i className="h-4 w-4" data-lucide="glasses"></i>
              Miopía
            </button>
<button className="btn-astig flex items-center gap-2" data-mode="astig" type="button">
<i className="h-4 w-4" data-lucide="activity"></i>
              Astigmatismo
            </button>
</div>
<div className="flex items-center gap-2 text-sm text-white/60">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Consejo: prueba los extremos</span>
</div>
</div>

<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4" id="sliders-miopia">
<div className="col-span-1 md:col-span-2">
<label className="flex items-center justify-between mb-2 text-sm" htmlFor="myopiaRange">
<span className="flex items-center gap-2 text-white/80"><i className="h-4 w-4" data-lucide="minus"></i> Dioptrías miopía</span>
<span className="text-white/70"><span id="myopiaValue">-2.00</span> D</span>
</label>
<div className="range-wrap">
<input className="vertical" id="myopiaRange" max="0" min="-10" step="0.25" type="range" value="-2"/>
</div>
<div className="flex justify-between text-[11px] text-white/50 mt-1">
<span>Mín: -10D</span><span>0D</span>
</div>

<div className="mt-3 flex md:hidden flex-wrap items-center gap-2 text-xs text-white/70">
<span className="badge" id="gradeBadgeMobile">Grado: Leve</span>
<span className="badge" id="farPointBadgeMobile">Foco: ∞</span>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 hidden" id="sliders-astig">
<div>
<label className="flex items-center justify-between mb-2 text-sm" htmlFor="cylRange">
<span className="flex items-center gap-2 text-white/80"><i className="h-4 w-4" data-lucide="axis-3d"></i> Cilindro</span>
<span className="text-white/70"><span id="cylValue">1.00</span> D</span>
</label>
<div className="range-wrap">
<input className="vertical" id="cylRange" max="4" min="0" step="0.25" type="range" value="1"/>
</div>
<div className="flex justify-between text-[11px] text-white/50 mt-1">
<span>0D</span><span>4D</span>
</div>
</div>
<div>
<label className="flex items-center justify-between mb-2 text-sm" htmlFor="axisRange">
<span className="flex items-center gap-2 text-white/80"><i className="h-4 w-4" data-lucide="compass"></i> Eje</span>
<span className="text-white/70"><span id="axisValue">90</span>°</span>
</label>
<div className="range-wrap">
<input className="vertical" id="axisRange" max="180" min="0" step="5" type="range" value="90"/>
</div>
<div className="flex justify-between text-[11px] text-white/50 mt-1">
<span>0°</span><span>180°</span>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
