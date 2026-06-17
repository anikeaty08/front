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



        // Three.js Logic - Adapted for "Calm/Structure"
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            
            // Warm white fog matches background
            scene.fog = new THREE.FogExp2(0xFDFCF8, 0.003);

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 40;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0xFDFCF8, 1);
            container.appendChild(renderer.domElement);

            // 1. Geometry: Simple fluid structure (Torus Knot but very smooth and slow)
            const geometry = new THREE.TorusKnotGeometry(12, 3, 150, 20, 2, 3);
            
            // Material: Very subtle slate wireframe
            const material = new THREE.MeshBasicMaterial({
                color: 0x94A3B8, // Slate 400
                wireframe: true,
                transparent: true,
                opacity: 0.08 // Very faint
            });
            const structure = new THREE.Mesh(geometry, material);
            scene.add(structure);

            // 2. Interaction
            let mouseX = 0, mouseY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX - windowHalfX) * 0.0001; // Reduced sensitivity
                mouseY = (e.clientY - windowHalfY) * 0.0001;
            });

            // 3. Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);

                // Very slow, constant rotation + subtle mouse influence
                structure.rotation.y += 0.0005;
                structure.rotation.x += 0.0002;
                
                // Gentle sway based on mouse
                structure.rotation.y += (mouseX - structure.rotation.y) * 0.01;
                structure.rotation.x += (mouseY - structure.rotation.x) * 0.01;

                renderer.render(scene, camera);
            };

            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        window.addEventListener('DOMContentLoaded', initThreeJS);
    
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
      

<div id="canvas-container"></div>

<header className="relative w-full min-h-[90vh] flex flex-col justify-between p-6 sm:p-12 z-10 pointer-events-none">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pointer-events-auto w-full max-w-[1400px] mx-auto gap-4">
<div className="text-lg font-medium tracking-tight text-slate-800">YesOnUs</div>
<nav className="flex flex-wrap gap-6 text-xs font-medium text-slate-500 uppercase tracking-wide">
<a className="hover:text-slate-800 transition-colors" href="/go">Patients &amp; Families</a>
<a className="hover:text-slate-800 transition-colors" href="/care">Advocates</a>
<a className="hover:text-slate-800 transition-colors" href="/providers">Clinicians</a>
</nav>
</div>

<div className="flex flex-col md:flex-row justify-between items-end gap-12 pointer-events-auto w-full max-w-[1400px] mx-auto mb-12">

<div className="max-w-md space-y-8">
<h2 className="text-xl md:text-2xl font-light leading-relaxed text-slate-700">
                    Healthcare is complicated.<br/>
<span className="text-slate-900 font-normal">You shouldn’t have to navigate it alone.</span>
</h2>
<div className="h-px w-12 bg-slate-300"></div>
<p className="text-sm leading-relaxed text-slate-600 max-w-xs">
                    YesOnUs is a patient-first coordination and planning layer. We help patients, families, and care teams make sense of care, coverage, and next steps — without pressure, upselling, or judgment.
                </p>
</div>

<div className="text-right">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-tighter leading-[0.85] text-slate-800 opacity-90">
                    YesOnUs
                </h1>
<p className="text-xl md:text-2xl text-slate-400 font-light mt-4 tracking-tight">Clarity. Continuity. Context.</p>
</div>
</div>
</header>

<aside className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
<div className="flex flex-col gap-3 bg-[#FDFCF8]/80 backdrop-blur-sm border-slate-200 border rounded-full p-2 shadow-sm items-center">
<button className="group grid place-items-center hover:text-slate-800 hover:bg-stone-100 transition relative text-slate-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.scrollTo(0,0)" title="Home">
<iconify-icon height="20" icon="solar:home-linear" width="20"></iconify-icon>
</button>
<button className="group grid place-items-center hover:text-slate-800 hover:bg-stone-100 transition relative text-slate-400 w-10 h-10 rounded-full cursor-pointer" onclick="document.getElementById('intro').scrollIntoView()" title="Understanding">
<iconify-icon height="20" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</button>
<button className="group grid place-items-center hover:text-slate-800 hover:bg-stone-100 transition relative text-slate-400 w-10 h-10 rounded-full cursor-pointer" onclick="document.getElementById('what-is').scrollIntoView()" title="What We Do">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</button>
<button className="group grid place-items-center hover:text-slate-800 hover:bg-stone-100 transition relative text-slate-400 w-10 h-10 rounded-full cursor-pointer" onclick="document.getElementById('contact').scrollIntoView()" title="Contact">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</button>
</div>
</aside>

<main className="relative z-20 bg-[#FDFCF8]">

<section className="sm:px-8 px-6 pt-24 pb-24 border-t border-slate-200/60" id="intro">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-5 order-2 lg:order-1">
<div className="relative overflow-hidden bg-stone-100 rounded-sm aspect-[4/5] opacity-90">

<img alt="Calm texture" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1628146927650-20c242337722?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-7 order-1 lg:order-2">
<div className="flex flex-col justify-center h-full">
<h2 className="text-3xl font-normal text-slate-800 mb-8 tracking-tight">If You’re Here, It’s Usually Because…</h2>
<ul className="space-y-6 mb-10">
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
<p className="text-lg text-slate-600 font-light">You or someone you love needs care.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
<p className="text-lg text-slate-600 font-light">You’re trying to understand options, bills, or next steps.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
<p className="text-lg text-slate-600 font-light">You want clarity before, during, or after treatment.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
<p className="text-lg text-slate-600 font-light">You’re doing everything you can — and it still feels heavy.</p>
</li>
</ul>
<div className="p-6 bg-stone-50 border border-stone-200 rounded-lg max-w-lg">
<p className="text-slate-800 font-medium mb-1">That’s normal.</p>
<p className="text-slate-500 font-light text-sm">The system wasn’t built to make this easy.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 px-6 bg-white border-t border-slate-200/60" id="what-is">
<div className="py-24 max-w-6xl mx-auto">
<div className="mb-16 max-w-3xl">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4 block">Our Role</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-800 mb-6">What YesOnUs Is</h2>
<p className="text-xl text-slate-500 font-light leading-relaxed">YesOnUs exists to give people back clarity, continuity, and control — without telling them what to do.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 bg-[#FDFCF8] border border-stone-200 rounded-xl">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-4">We help patients</h3>
<ul className="space-y-3 text-sm text-slate-600 font-light leading-relaxed">
<li className="flex gap-2"><span className="text-slate-300">•</span> Understand their care options</li>
<li className="flex gap-2"><span className="text-slate-300">•</span> Document what matters to them</li>
<li className="flex gap-2"><span className="text-slate-300">•</span> Get support when dental and medical care overlap</li>
<li className="flex gap-2"><span className="text-slate-300">•</span> Navigate billing questions</li>
<li className="flex gap-2"><span className="text-slate-300">•</span> Create continuity between visits</li>
</ul>
</div>

<div className="p-8 bg-[#FDFCF8] border border-stone-200 rounded-xl">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-4">Our Boundaries</h3>
<div className="space-y-4 text-sm text-slate-600 font-light leading-relaxed">
<p>We help people think clearly — and be heard.</p>
<ul className="space-y-3 pt-2">
<li className="flex gap-2 items-center"><iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon> We don’t diagnose.</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon> We don’t replace providers.</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon> We don’t push treatments.</li>
</ul>
</div>
</div>

<div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 mb-6 border border-slate-100">
<iconify-icon icon="solar:notebook-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-4">Why This Matters</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                            Most care decisions are made from stress, short visits, and incomplete information.
                        </p>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                            We support the creation of clear records, pre-visit logs, and shared context that follows the patient — not the provider.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-8 bg-[#FDFCF8] border-t border-slate-200/60">
<div className="mx-auto max-w-6xl py-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4 block">For Professionals</span>
<h2 className="text-2xl md:text-3xl font-normal text-slate-800 mb-6">Social Workers, Nurses, &amp; Care Advocates</h2>
<p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                            You carry the hardest parts of care — often without tools, time, or recognition. YesOnUs is built to support your work, not replace it.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 text-slate-400"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-slate-800">A safe place to refer</h4>
<p className="text-sm text-slate-500 font-light mt-1">For patients who need clarity or help navigating care.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-slate-400"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-slate-800">No cost to you or your patients</h4>
<p className="text-sm text-slate-500 font-light mt-1">Resources that reduce your burden instead of adding to it.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-slate-400"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-slate-800">Documentation &amp; Continuity</h4>
<p className="text-sm text-slate-500 font-light mt-1">Context patients can bring with them. You do the human work. We help with the structure.</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-10 border border-slate-200 rounded-xl h-fit">
<h2 className="text-xl font-normal text-slate-800 mb-6">How YesOnUs Is Funded</h2>
<div className="space-y-6">
<div className="p-4 bg-stone-50 rounded-lg border border-stone-100">
<p className="text-slate-800 font-medium text-sm mb-1">Patients never pay us.</p>
<p className="text-slate-500 font-light text-sm">Advocates never pay us.</p>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                                YesOnUs is funded through provider-side services that support prepared, informed patients, and medical–dental billing coordination when appropriate.
                            </p>
<hr className="border-slate-100"/>
<p className="text-sm text-slate-600 font-light italic">
                                "If something isn’t right for a patient, we say so. If we can’t help, we don’t pretend we can. Transparency matters here."
                            </p>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 sm:p-16 text-center border border-slate-200">
<h2 className="text-2xl md:text-3xl font-normal text-slate-800 mb-4">How You Can Start</h2>
<p className="text-slate-500 font-light max-w-xl mx-auto mb-10">There’s no single “right” entry point. Choose what fits your situation.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="/go">
<iconify-icon className="text-slate-400 mb-3 group-hover:text-slate-800 transition-colors" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-800">I’m a patient or family member</span>
<span className="text-xs text-slate-400 mt-2 font-geist-mono">Learn more →</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="/care">
<iconify-icon className="text-slate-400 mb-3 group-hover:text-slate-800 transition-colors" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-800">I’m a social worker or advocate</span>
<span className="text-xs text-slate-400 mt-2 font-geist-mono">See resources →</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="/providers">
<iconify-icon className="text-slate-400 mb-3 group-hover:text-slate-800 transition-colors" icon="solar:stethoscope-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-800">I’m a clinician or practice</span>
<span className="text-xs text-slate-400 mt-2 font-geist-mono">Partner with us →</span>
</a>
</div>
<p className="text-xs text-slate-400 mt-8 font-light">You’ll be guided without pressure.</p>
</div>

<div className="mt-24 max-w-2xl mx-auto text-center">
<div className="w-px h-12 bg-slate-200 mx-auto mb-8"></div>
<h3 className="text-lg font-medium text-slate-800 mb-6">A Note From the Founders</h3>
<p className="text-lg text-slate-600 font-light leading-relaxed mb-6 font-serif italic">
                        "We built YesOnUs because too many people were being asked to make life-altering decisions without clarity, continuity, or support. The level of care coordination usually reserved for the wealthy should be available to everyone."
                    </p>
<p className="text-sm text-slate-500 font-light">
                        This is our way of making that standard — quietly, responsibly, and at scale.
                    </p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 px-6 sm:px-8 mt-auto" id="contact">
<div className="mx-auto max-w-6xl py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-end">
<div>
<div className="font-medium text-slate-800 mb-2">YesOnUs</div>
<p className="text-slate-500 text-xs font-light">Privacy • Transparency • Continuity</p>
</div>
<div className="flex flex-col md:flex-row gap-8 md:justify-end items-start md:items-center text-sm font-medium text-slate-600">
<div className="text-xs text-slate-500 font-geist-mono">
<span className="block mb-1">Contact</span>
<a className="hover:text-slate-900 transition" href="mailto:hello@yesonus.com">hello@yesonus.com</a>
</div>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
