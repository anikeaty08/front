import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FAFAFA',
surface: '#FFFFFF',
obsidian: '#0F172A', // Slightly bluer black for medical/tech feel
subtle: '#64748B',
border: '#E2E8F0',
accent: '#0F172A',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}



          (function(){const section=document.getElementById('process');const header=document.getElementById('lifecycle-header');const line=document.getElementById('lifecycle-line');const steps=section.querySelectorAll('.lifecycle-step');function handleScroll(){if(!section)return;const rect=section.getBoundingClientRect();const viewH=window.innerHeight;const travelDistance=rect.height-viewH;const scrolled=-rect.top;let progress=scrolled/travelDistance;progress=Math.max(0,Math.min(1,progress));if(progress>0.02)header.style.opacity='1';else header.style.opacity='0';line.style.height=(progress*100)+'%';steps.forEach(step=>{const t=parseFloat(step.dataset.threshold);if(progress>=t){if(progress<t+0.15){step.classList.add('active');step.classList.replace('opacity-30','opacity-100');step.style.transform='scale(1.05)';}else{step.classList.add('active');step.classList.replace('opacity-30','opacity-50');step.style.transform='scale(1)';}}else{step.classList.remove('active');step.classList.replace('opacity-100','opacity-30');step.classList.replace('opacity-50','opacity-30');step.style.transform='scale(1)';}});};window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();})();
        


      uniform float uTime;
      uniform vec2 uMouse;
      varying float vNoise;
      void main() {
          vec3 pos = position;
          // Simple wave movement
          pos.z += sin(pos.x * 0.5 + uTime) * 0.5;
          pos.y += cos(pos.y * 0.5 + uTime) * 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = 2.0 * (10.0 / -mvPosition.z);
      }
    


      void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          gl_FragColor = vec4(0.05, 0.09, 0.16, 0.2); // Very subtle dark blue dot
      }
    


      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 20;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const geometry = new THREE.BufferGeometry();
      const count = 800;
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count*3; i++) {
        positions[i] = (Math.random() - 0.5) * 40;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.ShaderMaterial({
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
        uniforms: { uTime: { value: 0 } },
        transparent: true
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let time = 0;
      function animate() {
        requestAnimationFrame(animate);
        time += 0.005;
        material.uniforms.uTime.value = time;
        points.rotation.y = time * 0.05;
        renderer.render(scene, camera);
      }
      animate();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
<div className="fixed inset-0 z-0 opacity-40" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-canvas/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-obsidian text-white flex items-center justify-center rounded-sm">
<iconify-icon height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<span className="font-sans text-sm font-bold tracking-tight text-obsidian uppercase">
          PreCare
        </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#problem">The Problem</a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#solution">Protection Layer</a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#process">Installation</a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" href="#cohort">Pricing</a>
</nav>
<div className="flex items-center gap-5">
<button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-5 py-2.5 rounded shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
<div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
<span className="relative z-20">Book Readiness Overview</span>
</button>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
<div className="max-w-2xl space-y-10 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="font-sans text-[11px] font-medium text-subtle tracking-tight uppercase">
                System: Operational
              </span>
</div>
<h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-obsidian leading-[1.05]">
              Protect Your Entire
              <br/>
<span className="text-subtle/80">Practice System.</span>
</h1>
<p className="max-w-md font-sans text-lg text-subtle leading-relaxed">
              Most implant practices optimize surgery. Few optimize what happens before the visit. 
              <span className="text-obsidian font-medium">PreCare</span> structures the 24 hours before every consult to eliminate correction burden.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-lg shadow-obsidian/10 transition-all duration-300 hover:translate-y-[-1px] flex items-center gap-2">
<span>See Pre-Consult Snapshot</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-obsidian/20">
              15-Min Readiness Overview
            </button>
</div>
</div>

<div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-white to-canvas opacity-60 blur-3xl"></div>

<div className="relative w-full h-full p-8 perspective-[1000px]">

<div className="absolute bottom-10 left-10 right-10 h-24 bg-white border border-border rounded-lg shadow-sm flex items-center justify-center opacity-40 scale-95 z-0">
<span className="text-xs font-mono text-subtle uppercase tracking-widest">Your EHR / Workflow</span>
</div>


<div className="absolute bottom-20 left-10 right-10 top-10 bg-white border border-border rounded-xl shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden z-20 floating">

<div className="h-12 border-b border-border bg-slate-50/50 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-obsidian" icon="solar:clipboard-check-linear"></iconify-icon>
<span className="text-xs font-semibold text-obsidian">Pre-Visit Readiness</span>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-border"></div>
<div className="w-2 h-2 rounded-full bg-border"></div>
</div>
</div>

<div className="p-6 space-y-4">

<div className="flex items-center gap-4 p-3 bg-canvas border border-border/50 rounded-lg">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-subtle">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-obsidian/80 rounded mb-1.5"></div>
<div className="h-1.5 w-16 bg-subtle/30 rounded"></div>
</div>
<div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-medium rounded border border-green-100">
                      INTAKE 100%
                    </div>
</div>

<div className="flex items-center gap-4 p-3 bg-canvas border border-border/50 rounded-lg">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-subtle">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-32 bg-obsidian/60 rounded mb-1.5"></div>
<div className="h-1.5 w-20 bg-subtle/30 rounded"></div>
</div>
<div className="px-2 py-1 bg-slate-50 text-subtle text-[10px] font-medium rounded border border-border">
                      ALIGNED
                    </div>
</div>

<div className="flex items-center gap-4 p-3 bg-canvas border border-border/50 rounded-lg">
<div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-subtle">
<iconify-icon icon="solar:bone-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-28 bg-obsidian/60 rounded mb-1.5"></div>
<div className="h-1.5 w-12 bg-subtle/30 rounded"></div>
</div>
<div className="w-6 h-6 rounded-full bg-obsidian text-white flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="mt-auto p-4 bg-obsidian/5 border-t border-border flex items-center justify-between">
<span className="text-[10px] font-mono text-subtle uppercase">Correction Burden</span>
<span className="text-[10px] font-bold text-obsidian">0m 0s</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border/60 py-20 bg-white" id="problem">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-obsidian mb-6">
                    You’ve Built a Strong Practice.
                 </h2>
<p className="text-subtle text-base leading-relaxed mb-8">
                    You have invested heavily in clinical training, marketing, and technology. Yet, the 24 hours before an implant consult are often held together by invisible friction.
                 </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-obsidian flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-obsidian">Clinical Excellence</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-obsidian flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-obsidian">Marketing Volume</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-obsidian flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-obsidian">Staff Development</span>
</li>
</ul>
</div>
<div className="bg-canvas border border-border p-8 rounded-xl relative overflow-hidden group hover:border-obsidian/20 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:danger-triangle-linear" width="120"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-obsidian mb-4">The Structural Gap</h3>
<p className="text-sm text-subtle mb-6">
                    This isn't a skill issue. It's a structure issue.
                 </p>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-white border border-border rounded shadow-sm">
<iconify-icon className="text-subtle" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm text-obsidian">Manual intake review</span>
</div>
<div className="flex items-center gap-3 p-3 bg-white border border-border rounded shadow-sm">
<iconify-icon className="text-subtle" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm text-obsidian">Referral clarification calls</span>
</div>
<div className="flex items-center gap-3 p-3 bg-white border border-border rounded shadow-sm">
<iconify-icon className="text-subtle" icon="solar:wad-of-money-linear"></iconify-icon>
<span className="text-sm text-obsidian">Live financial alignment</span>
</div>
<div className="flex items-center gap-3 p-3 bg-white border border-border rounded shadow-sm">
<iconify-icon className="text-subtle" icon="solar:file-corrupted-linear"></iconify-icon>
<span className="text-sm text-obsidian">In-room chart corrections</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas" id="solution">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
              Pre-Consult Operating Layer
            </h2>
<p className="text-subtle text-base">
               We don’t replace your EHR. We don’t disrupt your workflow. We structure the layer before it.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-4 text-obsidian group-hover:bg-obsidian group-hover:text-white transition-colors">
<iconify-icon icon="solar:round-transfer-horizontal-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-obsidian mb-2">Consult Flow</h3>
<p className="text-sm text-subtle leading-relaxed">
                No last-minute clarification inside the room. Information flows linearly.
              </p>
</div>

<div className="bg-white border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-4 text-obsidian group-hover:bg-obsidian group-hover:text-white transition-colors">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-obsidian mb-2">Team Energy</h3>
<p className="text-sm text-subtle leading-relaxed">
                Less scrambling. Less reactive correction. Staff operates with calm precision.
              </p>
</div>

<div className="bg-white border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-4 text-obsidian group-hover:bg-obsidian group-hover:text-white transition-colors">
<iconify-icon icon="solar:scalpel-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-obsidian mb-2">Surgical Focus</h3>
<p className="text-sm text-subtle leading-relaxed">
                Doctor walks in with structured context, ready to diagnose, not investigate.
              </p>
</div>

<div className="bg-white border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-4 text-obsidian group-hover:bg-obsidian group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-obsidian mb-2">Practice Stability</h3>
<p className="text-sm text-subtle leading-relaxed">
                Reduced invisible friction across the entire practice system.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-border/60 bg-white relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-30" style={{backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<h2 className="text-3xl font-semibold text-obsidian mb-6">Correction Burden</h2>
<p className="text-subtle text-base mb-8 leading-relaxed">
                     Most practices do not track the invisible tax on their system. Minutes spent correcting intake, chasing referrals, and clarifying financials add up to a massive operational drag.
                  </p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-canvas border border-border rounded-lg">
<span className="text-sm font-medium text-obsidian">Intake Correction</span>
<div className="w-32 h-2 bg-border/40 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-[80%]"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-canvas border border-border rounded-lg">
<span className="text-sm font-medium text-obsidian">Referral Chase</span>
<div className="w-32 h-2 bg-border/40 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-[60%]"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-canvas border border-border rounded-lg">
<span className="text-sm font-medium text-obsidian">Admin Follow-up</span>
<div className="w-32 h-2 bg-border/40 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-[40%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-border">
<p className="text-sm font-semibold text-obsidian">We measure it. We reduce it. We protect against it.</p>
</div>
</div>
<div className="flex-1 w-full flex justify-center">
<div className="relative w-72 h-72">

<svg className="w-full h-full transform -rotate-90">
<circle cx="144" cy="144" fill="none" r="120" stroke="#E2E8F0" strokeWidth="24"></circle>
<circle className="animate-[dash_3s_ease-out_forwards]" cx="144" cy="144" fill="none" r="120" stroke="#0F172A" stroke-dasharray="750" stroke-dashoffset="200" strokeWidth="24"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="text-4xl font-bold text-obsidian tracking-tighter">24h</span>
<span className="text-xs font-medium text-subtle uppercase mt-1">Protection<br/>Zone</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-canvas border-b border-border/60" id="process" style={{height: '350vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
<div className="text-center mb-12 shrink-0 opacity-0 transition-opacity duration-700" id="lifecycle-header">
<h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
                Founding Surgical Install
              </h2>
<p className="text-subtle text-sm max-w-md mx-auto">
                30 Days to System Stability. No long-term contract to start.
              </p>
</div>
<div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
<div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
<div className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" id="lifecycle-line"></div>
<div className="space-y-16 py-8 relative">

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">Step 01</span>
<h3 className="font-sans text-base font-semibold text-obsidian">Baseline Measurement</h3>
<p className="text-xs text-subtle mt-1 hidden md:block">We measure correction time &amp; friction.</p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-2 rounded shadow-sm inline-block">
<iconify-icon className="text-obsidian" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.25">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-2 rounded shadow-sm inline-block">
<iconify-icon className="text-obsidian" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">Step 02</span>
<h3 className="font-sans text-base font-semibold text-obsidian">Intake Normalization</h3>
<p className="text-xs text-subtle mt-1 hidden md:block">Intake complete 24h before consult.</p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.45">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">Step 03</span>
<h3 className="font-sans text-base font-semibold text-obsidian">Referral Intelligence</h3>
<p className="text-xs text-subtle mt-1 hidden md:block">Clear context packaged before visit.</p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-2 rounded shadow-sm inline-block">
<iconify-icon className="text-obsidian" icon="solar:documents-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.65">
<div className="w-[42%] text-right pr-8">
<div className="bg-white border border-border p-2 rounded shadow-sm inline-block">
<iconify-icon className="text-obsidian" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">Step 04</span>
<h3 className="font-sans text-base font-semibold text-obsidian">Readiness Snapshot</h3>
<p className="text-xs text-subtle mt-1 hidden md:block">Doctor sees structured summary.</p>
</div>
</div>

<div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
<div className="w-[42%] text-right pr-8">
<span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">Step 05</span>
<h3 className="font-sans text-base font-semibold text-obsidian">Burden Tracking</h3>
<p className="text-xs text-subtle mt-1 hidden md:block">Measurable reduction or we stop.</p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-obsidian group-[.active]:bg-obsidian transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-8">
<div className="bg-white border border-border p-2 rounded shadow-sm inline-block">
<iconify-icon className="text-obsidian" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-obsidian text-center mb-12">After Structure Is Installed</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 border border-border rounded-lg bg-canvas text-center hover:border-obsidian/30 transition-colors">
<div className="text-3xl font-bold text-obsidian mb-2">▼</div>
<h3 className="font-medium text-obsidian">Consult Interruptions</h3>
</div>
<div className="p-6 border border-border rounded-lg bg-canvas text-center hover:border-obsidian/30 transition-colors">
<div className="text-3xl font-bold text-obsidian mb-2">▼</div>
<h3 className="font-medium text-obsidian">Staff Correction Time</h3>
</div>
<div className="p-6 border border-border rounded-lg bg-canvas text-center hover:border-obsidian/30 transition-colors">
<div className="text-3xl font-bold text-obsidian mb-2">▲</div>
<h3 className="font-medium text-obsidian">Room Calmness</h3>
</div>
</div>
<div className="mt-12 text-center text-subtle text-sm max-w-xl mx-auto">
               We do not promise revenue. We remove the structural friction that suppresses performance.
            </div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-canvas border-t border-border/60" id="cohort">
<div className="max-w-xl mx-auto">
<div className="bg-obsidian text-white rounded-2xl p-10 shadow-2xl shadow-obsidian/20 relative overflow-hidden group">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 text-center">
<div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase mb-6">
                    Limited Availability
                 </div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Founding Surgical Cohort</h2>
<p className="text-white/60 text-sm mb-8">Installing in select implant-focused practices this quarter.</p>
<div className="flex items-baseline justify-center gap-1 mb-8">
<span className="text-5xl font-bold tracking-tight">$1,500</span>
<span className="text-white/50">/ month per location</span>
</div>
<ul className="text-left space-y-3 mb-10 max-w-xs mx-auto">
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                       Direct integration support
                    </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                       Founder-level access
                    </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                       Locked founding pricing
                    </li>
</ul>
<button className="w-full bg-white text-obsidian font-semibold py-4 rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
                    Schedule Readiness Overview
                 </button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-border text-center px-6">
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-2xl font-medium text-obsidian">
               Elite practices protect precision.<br/>
               Precision applies to process — not just surgery.
            </h2>
<p className="text-subtle">
               If your team deserves a calmer, more structured consult environment,<br/>let’s review your Pre-Consult Flow.
            </p>
<div className="flex justify-center gap-4">
<button className="px-6 py-3 bg-obsidian text-white rounded text-sm font-medium hover:bg-slate-800 transition-colors">
                  See Snapshot
               </button>
<button className="px-6 py-3 border border-border text-obsidian rounded text-sm font-medium hover:bg-canvas transition-colors">
                  Book 15-Min Overview
               </button>
</div>
</div>
</section>

<footer className="bg-canvas py-16 px-6 md:px-12 border-t border-border/60">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center md:items-start">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<iconify-icon className="text-obsidian" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-bold text-sm tracking-tight text-obsidian uppercase">PreCare</span>
</div>
<p className="text-xs text-subtle">
              Systematizing the 24 hours before surgery.
            </p>
</div>
<div className="text-xs text-border">
            © 2024 PreCare Systems.
          </div>
</div>
</footer>
</div>





    </>
  );
}
