import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: '#0ea5e9',
brandDark: '#0284c7',
void: '#050505',
paper: '#ffffff',
slate: { 850: '#1e293b' }
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Syne', 'sans-serif'],
},
backgroundImage: {
'glow-gradient': 'radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
},
boxShadow: {
'soft-light': '0 10px 40px -10px rgba(0,0,0,0.08)',
}
}
}
}



      {
          "imports": {
              "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
              "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
          }
      }
    


      import * as THREE from 'three';
      import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
      import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
      import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

      // --- Three.js Setup (Global Background) ---
      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      
      const fogColorDark = 0x050505;
      const fogColorLight = 0xffffff;
      
      // Initialize fog
      scene.fog = new THREE.FogExp2(fogColorDark, 0.02);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.setClearColor(0x000000, 0); 
      container.appendChild(renderer.domElement);

      const renderScene = new RenderPass(scene, camera);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.threshold = 0;
      bloomPass.strength = 1.8;
      bloomPass.radius = 0.5;

      const composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight);

      // Particle Field
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 3500; 
      const posArray = new Float32Array(particlesCount * 3);

      for(let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 30; // X
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      // Check for dark mode initially
      const isDarkInit = document.documentElement.classList.contains('dark');
      
      const particlesMaterial = new THREE.PointsMaterial({
          size: 0.04,
          color: isDarkInit ? 0x0ea5e9 : 0x0284c7, // Brand cyan in dark, Dark blue in light
          transparent: true,
          opacity: 0.8,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      particlesMesh.position.y = -3; 
      scene.add(particlesMesh);

      // Initial Fog Color
      scene.fog.color.setHex(isDarkInit ? fogColorDark : fogColorLight);

      function animate() {
          requestAnimationFrame(animate);

          const positions = particlesGeometry.attributes.position.array;
          const time = Date.now() * 0.0005;
          
          for(let i = 0; i < particlesCount; i++) {
              const x = positions[i * 3];
              positions[i * 3 + 1] = Math.sin(time + x * 0.3) * 0.8 + (Math.sin(time * 0.5 + x * 0.8) * 0.4);
          }
          particlesGeometry.attributes.position.needsUpdate = true;
          composer.render();
      }
      animate();

      // --- GSAP Animations ---
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 1
          }
      });

      tl.to(camera.position, { z: 2, y: -2, duration: 5 }, 0)
        .to(particlesMesh.rotation, { x: 0.1, duration: 5 }, 0);


      // --- Card Interactions ---
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
          card.addEventListener('mouseenter', () => {
              const colorHex = card.getAttribute('data-color');
              const color = new THREE.Color(colorHex);
              gsap.to(particlesMaterial.color, { r: color.r, g: color.g, b: color.b, duration: 0.5 });
              gsap.to(bloomPass, { strength: 3, duration: 0.2 });
          });
          card.addEventListener('mouseleave', () => {
             const isDark = document.documentElement.classList.contains('dark');
             const resetColor = isDark ? 0x0ea5e9 : 0x0284c7; 
             const c = new THREE.Color(resetColor);
              gsap.to(particlesMaterial.color, { r: c.r, g: c.g, b: c.b, duration: 0.5 }); 
              gsap.to(bloomPass, { strength: 1.8, duration: 0.5 });
          });
      });

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          composer.setSize(window.innerWidth, window.innerHeight);
      });

      window.toggleTheme = function() {
        const html = document.documentElement;
        const isDark = html.classList.toggle('dark');
        const icon = document.getElementById('theme-icon');
        const iconMobile = document.getElementById('theme-icon-mobile');
        
        const iconName = isDark ? "solar:moon-linear" : "solar:sun-2-linear";
        icon.setAttribute("icon", iconName);
        iconMobile.setAttribute("icon", iconName);

        if(scene) {
            const targetFogColor = new THREE.Color(isDark ? fogColorDark : fogColorLight);
            const targetParticleColor = new THREE.Color(isDark ? 0x0ea5e9 : 0x0284c7); 
            
            gsap.to(scene.fog.color, {
                r: targetFogColor.r,
                g: targetFogColor.g,
                b: targetFogColor.b,
                duration: 0.5
            });

            gsap.to(particlesMaterial.color, {
                r: targetParticleColor.r,
                g: targetParticleColor.g,
                b: targetParticleColor.b,
                duration: 0.5
            });
        }
      }
    


    async function submitJBSyncForm() {
      const btn = document.getElementById('submit-btn');
      const errorDiv = document.getElementById('form-error');
      errorDiv.classList.add('hidden');

      // Get values
      const voornaam = document.getElementById('voornaam').value.trim();
      const achternaam = document.getElementById('achternaam').value.trim();
      const telefoon = document.getElementById('telefoon').value.trim();
      const email = document.getElementById('email').value.trim();
      const bedrijfsnaam = document.getElementById('bedrijfsnaam').value.trim();
      const intresse = document.getElementById('intresse').value;
      const voorwaarden = document.getElementById('voorwaarden').checked;

      // Validation
      if (!voornaam || !achternaam || !telefoon || !email) {
        errorDiv.textContent = 'Vul alle verplichte velden in.';
        errorDiv.classList.remove('hidden');
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        errorDiv.textContent = 'Vul een geldig e-mailadres in.';
        errorDiv.classList.remove('hidden');
        return;
      }

      if (!voorwaarden) {
        errorDiv.textContent = 'U moet akkoord gaan met de voorwaarden.';
        errorDiv.classList.remove('hidden');
        return;
      }

      // Disable button
      btn.textContent = 'Verzenden...';
      btn.disabled = true;
      btn.classList.add('opacity-70');

      try {
        const response = await fetch('https://jvancronenburg.app.n8n.cloud/webhook/website-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            voornaam,
            achternaam,
            telefoon,
            email,
            bedrijfsnaam,
            intresse
          })
        });

        if (response.ok) {
          document.getElementById('jbsync-form-content').style.display = 'none';
          document.getElementById('form-success').classList.remove('hidden');
        } else {
          throw new Error('Server error');
        }
      } catch (error) {
        errorDiv.textContent = 'Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op.';
        errorDiv.classList.remove('hidden');
        btn.textContent = 'Verstuur Aanvraag';
        btn.disabled = false;
        btn.classList.remove('opacity-70');
      }
    }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 w-full h-[120vh] bg-transparent bg-cover bg-center z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea650c0a-e4a6-4c52-885e-182f8c46450c_3840w.png\')', backgroundPosition: 'center top'}}>
<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-black/30 dark:via-black/50 dark:to-transparent"></div>
</div>

<div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40 dark:opacity-80 transition-opacity duration-500" id="canvas-container"></div>

<div className="fixed inset-0 z-20 pointer-events-none dark:hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-100/40 via-transparent to-transparent transition-opacity duration-500"></div>

<nav className="fixed z-50 flex w-full pr-4 pl-4 top-6 left-0 justify-center">
<div className="bg-white/90 border-slate-200 dark:bg-[rgba(10,10,10,0.8)] dark:border-[rgba(255,255,255,0.08)] backdrop-blur-xl border flex flex-col md:flex-row gap-0 md:gap-12 rounded-full pt-0 pr-0 pb-0 pl-0 md:pt-3 md:pr-6 md:pb-3 md:pl-6 shadow-soft-light dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] items-stretch md:items-center justify-between transition-all duration-300">
<div className="flex items-center justify-between px-6 py-3 md:p-0 w-full md:w-auto">
<div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
<span className="uppercase text-sm font-bold tracking-tight text-slate-900 dark:text-white"><span className="text-brand">JB</span>Sync</span>
</div>
<button aria-label="Toggle Menu" className="md:hidden text-slate-900 dark:text-white/70 hover:text-brand dark:hover:text-white flex items-center p-1 transition-transform active:scale-95" onclick="const m=document.getElementById('mobile-menu-aura');const c=this.closest('nav &gt; div');m.classList.toggle('hidden');m.classList.toggle('flex');if(m.classList.contains('hidden')){c.classList.add('rounded-full');c.classList.remove('rounded-[2rem]')}else{c.classList.remove('rounded-full');c.classList.add('rounded-[2rem]')}">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-[11px] transition-colors font-medium text-slate-600 hover:text-brand dark:text-white/60 dark:hover:text-white" href="#how-it-works">Lead Recovery</a>
<a className="text-[11px] transition-colors font-medium text-slate-600 hover:text-brand dark:text-white/60 dark:hover:text-white" href="#meet-lisa">Echo Connect</a>
<a className="text-[11px] transition-colors font-medium text-slate-600 hover:text-brand dark:text-white/60 dark:hover:text-white" href="#pricing">Prijzen</a>
</div>
<div className="hidden md:flex items-center gap-3">
<button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80 transition-all duration-300" id="theme-toggle" onclick="toggleTheme()">
<iconify-icon className="text-lg" icon="solar:moon-linear" id="theme-icon"></iconify-icon>
</button>

<a className="text-[10px] hover:brightness-110 transition-all font-bold text-white bg-gradient-to-r from-brand to-brandDark rounded-full pt-2 pr-5 pb-2 pl-5 shadow-[0_0_15px_rgba(14,165,233,0.3)]" href="https://login.jbsync.com/">Login</a>
</div>
<div className="hidden md:hidden flex-col gap-4 px-6 pb-6 pt-2 animate-fade-in-up border-t border-slate-100 dark:border-white/5 mt-1" id="mobile-menu-aura">
<div className="flex flex-col gap-3">
<a className="text-sm transition-colors font-medium text-slate-600 dark:text-white/60" href="#how-it-works">Lead Recovery</a>
<a className="text-sm transition-colors font-medium text-slate-600 dark:text-white/60" href="#meet-lisa">Echo Connect</a>
<a className="text-sm transition-colors font-medium text-slate-600 dark:text-white/60" href="#pricing">Prijzen</a>
</div>
<div className="flex items-center justify-between gap-4 mt-2">
<button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white" onclick="toggleTheme()">
<iconify-icon className="text-lg" icon="solar:moon-linear" id="theme-icon-mobile"></iconify-icon>
</button>

<a className="flex-1 text-center text-xs hover:brightness-110 transition-all font-bold text-white bg-gradient-to-r from-brand to-brandDark rounded-full py-3 shadow-[0_0_15px_rgba(14,165,233,0.3)]" href="https://login.jbsync.com/">Login</a>
</div>
</div>
</div>
</nav>

<main className="flex flex-col w-full z-30 relative items-center">

<section className="min-h-screen flex flex-col md:flex-row w-full max-w-7xl mr-auto ml-auto pt-28 pr-6 pb-12 pl-6 relative gap-x-12 gap-y-12 items-center justify-center">
<div className="flex-1 w-full space-y-8 relative z-10 text-left">
<div className="inline-flex border-sky-500/20 animate-fade-in-up opacity-0 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm gap-x-2 gap-y-2 items-center bg-white shadow-sm dark:shadow-none dark:bg-white/5">
<iconify-icon className="text-sky-500 text-sm" icon="solar:bolt-linear"></iconify-icon>
<span className="text-[10px] uppercase text-sky-600 dark:text-sky-400 font-semibold tracking-widest">Nieuw: Echo Connect</span>
</div>
<div className="space-y-2 animate-fade-in-up opacity-0">
<p className="text-sm font-medium text-sky-600 dark:text-sky-500 tracking-wide">Gemaakt voor groei</p>
<h1 className="md:text-7xl leading-[0.95] text-5xl font-semibold text-slate-900 dark:text-white tracking-tighter font-display">Stop het verlies van <span className="bg-clip-text text-transparent bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-sky-500 to-blue-700">potentiële klanten</span> </h1>
</div>
<div className="space-y-6 max-w-lg animate-fade-in-up opacity-0">
<p className="text-xl font-medium text-slate-800 dark:text-white">Zet gemiste oproepen direct om in <span className="text-sky-600 dark:text-sky-500">nieuwe</span> reserveringen en bestellingen.</p>
<p className="md:text-[15px] leading-relaxed text-sm font-light text-slate-600 dark:text-white/50">In de spits telt elke seconde. Als u de telefoon niet opneemt, belt de hongerige klant de concurrent. Onze AI-assistenten en WhatsApp Back-service vangen elke beller direct op, beantwoorden vragen en plannen afspraken in. Zo bent u 24/7 bereikbaar zonder extra personeel.</p>
</div>
</div>
<div className="flex-1 w-full flex justify-center md:justify-end relative z-10 pointer-events-none animate-fade-in-up opacity-0">
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 relative" id="how-it-works">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b pb-8 border-slate-200 dark:border-white/5">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 dark:text-white tracking-tight font-display mb-3">Lead Recovery</h2>
<p className="text-sm text-slate-600 dark:text-white/50 max-w-md">Nooit meer klanten verliezen door de bereikbaarheid van uw bedrijf.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="service-card group relative p-1 rounded-2xl bg-white dark:bg-transparent shadow-soft-light dark:shadow-none border border-slate-100 dark:border-none transition-all duration-300 hover:shadow-lg dark:hover:shadow-none" data-color="#0ea5e9">
<div className="bg-transparent dark:bg-gradient-to-b dark:from-white/10 dark:to-transparent rounded-xl h-full p-0">
<div className="relative h-full bg-white dark:bg-void/80 backdrop-blur-sm rounded-xl p-6 overflow-hidden border-0 dark:border border-slate-100 dark:border-white/5 group-hover:border-sky-500/20 transition-colors">
<div className="absolute inset-0 bg-glow-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2 rounded-lg border text-sky-600 dark:text-sky-500 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="font-mono text-xs text-slate-400 dark:text-white/30">01</span>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight mb-2">De Opvang</h3>
<p className="leading-relaxed flex-grow text-xs text-slate-500 dark:text-white/50 mb-6">Onze systemen herkennen onmiddellijk wanneer u een oproep niet kunt aannemen, waardoor het "lek" in uw verkoop direct wordt gedicht.</p>
<div className="h-32 w-full rounded-lg overflow-hidden border relative grayscale group-hover:grayscale-0 transition-all duration-500 border-slate-200 dark:border-white/10">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7eedc1f-1ea0-4783-8068-833f373669f3_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-void to-transparent opacity-80"></div>
</div>
</div>
</div>
</div>
</div>

<div className="service-card group relative p-1 rounded-2xl bg-white dark:bg-transparent shadow-soft-light dark:shadow-none border border-slate-100 dark:border-none transition-all duration-300 hover:shadow-lg dark:hover:shadow-none" data-color="#FFFFFF">
<div className="bg-transparent dark:bg-gradient-to-b dark:from-white/10 dark:to-transparent rounded-xl h-full p-0">
<div className="relative h-full bg-white dark:bg-void/80 backdrop-blur-sm rounded-xl p-6 overflow-hidden border-0 dark:border border-slate-100 dark:border-white/5 group-hover:border-slate-300 dark:group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2 rounded-lg border bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white flex items-center justify-center">
<iconify-icon className="text-xl" height="20" icon="solar:clipboard-check-linear" style={{color: 'rgb(14, 165, 233)'}} width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-slate-400 dark:text-white/30">02</span>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight mb-2">De Directe Actie</h3>
<p className="leading-relaxed flex-grow text-xs text-slate-500 dark:text-white/50 mb-6">Terwijl uw team de handen vol heeft, neemt onze AI-assistent professioneel de telefoon op of sturen we razendsnel een WhatsApp-bericht.</p>
<div className="h-32 w-full rounded-lg overflow-hidden border relative grayscale group-hover:grayscale-0 transition-all duration-500 border-slate-200 dark:border-white/10">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2fe529e-2b62-439c-97d3-e4d96d638c9c_800w.png"/>
<div className="bg-gradient-to-t from-white dark:from-void to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</div>

<div className="service-card group relative p-1 rounded-2xl bg-white dark:bg-transparent shadow-soft-light dark:shadow-none border border-slate-100 dark:border-none transition-all duration-300 hover:shadow-lg dark:hover:shadow-none" data-color="#0ea5e9">
<div className="bg-transparent dark:bg-gradient-to-b dark:from-white/10 dark:to-transparent rounded-xl h-full p-0">
<div className="relative h-full bg-white dark:bg-void/80 backdrop-blur-sm rounded-xl p-6 overflow-hidden border-0 dark:border border-slate-100 dark:border-white/5 group-hover:border-sky-500/20 transition-colors">
<div className="absolute top-6 left-6 z-20 p-2 rounded-lg border text-sky-600 dark:text-sky-500 bg-white dark:bg-void border-slate-200 dark:border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl" height="20" icon="solar:graph-up-outline" style={{color: 'rgb(14, 165, 233)'}} width="20"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2 rounded-lg border text-sky-600 dark:text-sky-500 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:calendar-check-linear"></iconify-icon>
</div>
<span className="font-mono text-xs text-slate-400 dark:text-white/30">03</span>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Het Resultaat</h3>
<p className="leading-relaxed flex-grow text-xs text-slate-500 dark:text-white/50 mb-6">U ziet uw agenda vollopen en uw orderaantal stijgen, terwijl de rust bewaard blijft. U focust op de kwaliteit van uw werk.</p>
<div className="h-32 w-full rounded-lg overflow-hidden border relative grayscale group-hover:grayscale-0 transition-all duration-500 border-slate-200 dark:border-white/10">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f48f66d3-a6e1-4220-bea9-8ec2544b005f_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-void to-transparent opacity-80"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-5xl z-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative items-center" id="meet-lisa">
<div className="text-center mb-16 space-y-3 animate-fade-in-up opacity-0">
<h2 className="md:text-7xl text-5xl font-medium text-slate-900 dark:text-white tracking-tight font-display">Echo Connect</h2>
<p className="md:text-2xl text-xl font-light text-slate-500 dark:text-white/50 tracking-tight">Zet elke oproep om in een afspraak</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-16 animate-fade-in-up opacity-0">
<div className="group hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.1)] transition-all duration-300 border-slate-200 dark:border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 bg-white dark:bg-white/[0.02] backdrop-blur-md shadow-soft-light dark:shadow-black/20">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Slimme Afspraakplanning</h3>
<p className="text-sm font-light text-slate-600 dark:text-white/60">Integreert boekingen direct en <span className="text-sky-600 dark:text-sky-500">foutloos</span> in jouw digitale agenda.</p>
</div>
<div className="group hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.1)] transition-all duration-300 border-slate-200 dark:border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 bg-white dark:bg-white/[0.02] backdrop-blur-md shadow-soft-light dark:shadow-black/20">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Altijd bereikbaar</h3>
<p className="text-sm font-light text-slate-600 dark:text-white/60">Uw bedrijf is <span className="text-sky-600 dark:text-sky-500">24/7</span> bereikbaar.</p>
</div>
<div className="group hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.1)] transition-all duration-300 border-slate-200 dark:border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 bg-white dark:bg-white/[0.02] backdrop-blur-md shadow-soft-light dark:shadow-black/20">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Lead Kwalificatie</h3>
<p className="text-sm font-light text-slate-600 dark:text-white/60">Verstuurt <span className="text-sky-600 dark:text-sky-500">direct</span> bevestigingen en follow-ups via SMS en e-mail.</p>
</div>
<div className="group hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.1)] transition-all duration-300 border-slate-200 dark:border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 bg-white dark:bg-white/[0.02] backdrop-blur-md shadow-soft-light dark:shadow-black/20">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Meertalig</h3>
<p className="text-sm font-light text-slate-600 dark:text-white/60">Spreekt meer dan <span className="text-sky-600 dark:text-sky-500">40 talen</span>.</p>
</div>
<div className="group hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.1)] transition-all duration-300 border-slate-200 dark:border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 bg-white dark:bg-white/[0.02] backdrop-blur-md shadow-soft-light dark:shadow-black/20">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Directe Opvolging</h3>
<p className="text-sm font-light text-slate-600 dark:text-white/60">Controleert <span className="text-sky-600 dark:text-sky-500">live</span> de beschikbaarheid om dubbele boekingen te vermijden.</p>
</div>
<div className="group hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.1)] transition-all duration-300 border-slate-200 dark:border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 bg-white dark:bg-white/[0.02] backdrop-blur-md shadow-soft-light dark:shadow-black/20">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Op maat gemaakt</h3>
<p className="text-sm font-light text-slate-600 dark:text-white/60"><span className="text-sky-600 dark:text-sky-500">Volledig aangepast</span> naar uw bedrijf en diensten.</p>
</div>
</div>
<div className="flex flex-col md:flex-row animate-fade-in-up opacity-0 w-full mt-4 gap-x-12 gap-y-12 items-center justify-between">
<div className="flex flex-col-reverse lg:flex-row w-full items-center justify-between gap-8 p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] backdrop-blur-sm group/panel hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 shadow-soft-light dark:shadow-none">
<div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-lg w-full">
<div className="space-y-3">
<h3 className="text-xl font-medium text-slate-900 dark:text-white tracking-tight flex items-center gap-3 justify-center lg:justify-start">
                                Live Demonstratie
                                <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
</h3>
<p className="text-sm font-light text-slate-600 dark:text-white/60 leading-relaxed">
                                Bel gratis met onze AI-assistent om het product te testen. Ervaar direct hoe natuurlijk en efficiënt Echo Connect uw gesprekken afhandelt.
                            </p>
</div>
<button className="hover:bg-sky-500 transition-all duration-300 hover:text-white text-sm font-medium text-sky-600 dark:text-sky-500 tracking-wide border-sky-600 dark:border-sky-500 border rounded-full pt-3 pr-10 pb-3 pl-10 w-fit">
                            Binnenkort Beschikbaar
                        </button>
</div>
<div className="relative group cursor-pointer shrink-0 mb-4 lg:mb-0">
<div className="absolute inset-0 bg-sky-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-28 h-28 rounded-full border bg-gradient-to-b flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105 border-slate-200 dark:border-white/10 from-slate-50 dark:from-white/5 to-white dark:to-black shadow-2xl">
<iconify-icon className="text-3xl text-sky-600 dark:text-white" height="30" icon="solar:phone-calling-outline" width="30"></iconify-icon>
</div>
<div className="-bottom-8 text-[10px] uppercase font-medium text-slate-400 dark:text-white/40 tracking-widest text-center w-full absolute">Ai Assistent</div>
</div>
</div>
</div>
</section>

<section className="z-10 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="pricing">
<div className="text-center mb-16 space-y-4">
<h2 className="md:text-5xl text-4xl font-semibold text-slate-900 dark:text-white tracking-tight font-display">Kies uw Connectie Niveau</h2>
<p className="md:text-base text-sm font-light text-slate-500 dark:text-white/50">Stop met het verliezen van leads en start met schalen. </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="flex flex-col border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl bg-white dark:bg-transparent shadow-soft-light dark:shadow-none">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2 tracking-wide">Starter</h3>
<p className="text-xs text-slate-500 dark:text-white/40 h-8">Altijd bereikbaar met AI-voice</p>
</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold text-slate-900 dark:text-white font-display tracking-tight">€295</span>
<span className="text-sm text-slate-500 dark:text-white/40">/maand</span>
</div>
<p className="text-[11px] font-medium text-slate-400 dark:text-white/30 mb-8 uppercase tracking-wider">€750 Installatie</p>
<div className="w-full h-px bg-slate-200 dark:bg-white/10 mb-8"></div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-light text-slate-700 dark:text-white/80">AI Voice Assistant (basis)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">24/7 telefonische bereikbaarheid</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Beantwoorden van basisvragen</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Vastleggen van contactgegevens</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Merk-specifieke tone of voice</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 text-lg text-red-500/50 dark:text-white/20 mt-0.5" height="18" icon="solar:close-circle-linear" style={{color: 'rgb(220, 38, 38)'}} width="18"></iconify-icon>
<span className="text-sm font-light text-red-500">Geen sales flow</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 text-lg text-red-500/50 dark:text-white/20 mt-0.5" height="18" icon="solar:close-circle-linear" style={{color: 'rgb(220, 38, 38)'}} width="18"></iconify-icon>
<span className="text-sm font-light text-red-500">Geen agenda-integratie</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 text-lg text-red-500/50 dark:text-white/20 mt-0.5" height="18" icon="solar:close-circle-linear" style={{color: 'rgb(220, 38, 38)'}} width="18"></iconify-icon>
<span className="text-sm font-light text-red-500">Geen actieve conversie</span>
</li>
</ul>
<a className="hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300 text-sm font-medium text-slate-900 dark:text-white w-full border-slate-300 dark:border-white/10 border rounded-xl pt-4 pb-4 block text-center" href="#contact">Kies Starter</a>
</div>

<div className="flex flex-col relative rounded-2xl bg-white dark:bg-black/40 backdrop-blur-xl border border-sky-500 p-8 shadow-xl dark:shadow-[0_0_40px_rgba(14,165,233,0.15)] transform md:-translate-y-4 z-10">

<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<div className="bg-sky-500 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_4px_20px_rgba(14,165,233,0.4)] flex items-center gap-1.5">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
                    Meest Gekozen
                </div>
</div>
<div className="mb-6 pt-2">
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 tracking-wide flex items-center gap-2">
                    Professional
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_10px_#0ea5e9]"></span>
</h3>
<p className="text-xs text-slate-500 dark:text-white/40 h-8">Professionele AI-voice voor service &amp; rust</p>
</div>

<div className="mb-8">
<div className="text-[10px] font-bold text-sky-600 dark:text-sky-500/90 uppercase tracking-widest mb-1">Basis Investering</div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-bold text-slate-900 dark:text-white font-display tracking-tighter">€495</span>
<span className="text-sm text-slate-500 dark:text-white/40">/maand</span>
</div>
<p className="text-[11px] font-medium text-slate-400 dark:text-white/30 mt-3 uppercase tracking-wider">€1.500 Installatie</p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mb-8"></div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-sky-500 mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-800 dark:text-white font-light">Alles in Starter</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-sky-500 mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-800 dark:text-white font-light">Uitgebreidere gesprekken en intake</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-sky-500 mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-800 dark:text-white font-light">Slim routeren en doorverbinden</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-sky-500 mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-800 dark:text-white font-light">500 AI-belminuten per maand inbegrepen</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-sky-500 mt-0.5 shrink-0 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-800 dark:text-white font-light">Betere klantervaring en minder druk op je team</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 text-lg text-red-500/50 dark:text-white/20 mt-0.5" height="18" icon="solar:close-circle-linear" style={{color: 'rgb(220, 38, 38)'}} width="18"></iconify-icon>
<span className="text-sm font-light text-red-500">Geen sales flow</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 text-lg text-red-500/50 dark:text-white/20 mt-0.5" height="18" icon="solar:close-circle-linear" style={{color: 'rgb(220, 38, 38)'}} width="18"></iconify-icon>
<span className="text-sm font-light text-red-500">Geen actieve leadconversie</span>
</li>
</ul>
<div className="bg-sky-50 border border-sky-100 dark:bg-sky-500/[0.03] dark:border-sky-500/10 rounded-lg p-3 mb-6">
<p className="text-[11px] leading-relaxed text-sky-700 dark:text-sky-200/60 font-light text-center">
                    Extra belminuten worden gefactureerd tegen €0,55 per gebelde minuut.
                </p>
</div>
<a className="hover:bg-sky-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] text-sm font-semibold text-white bg-sky-500 w-full rounded-xl pt-4 pb-4 shadow-[0_0_20px_rgba(14,165,233,0.3)] block text-center" href="#contact">Start met schalen</a>
</div>

<div className="flex flex-col border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl bg-white dark:bg-transparent shadow-soft-light dark:shadow-none">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2 tracking-wide">Premium</h3>
<p className="text-xs text-slate-500 dark:text-white/40 h-8">AI Voice Sales Assistant</p>
</div>
<div className="text-[10px] font-bold text-slate-400 dark:text-white/50 uppercase tracking-widest mb-1">Vanaf</div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold text-slate-900 dark:text-white font-display tracking-tight">€1.295</span>
<span className="text-sm text-slate-500 dark:text-white/40">/maand</span>
</div>
<p className="text-[11px] font-medium text-slate-400 dark:text-white/30 mb-8 uppercase tracking-wider">€2.500 Installatie</p>
<div className="w-full h-px bg-slate-200 dark:bg-white/10 mb-8"></div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Alles in Professional</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Volledige sales flow</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Leadkwalificatie en pijnladder</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Automatisch afspraken inplannen</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Slim omgaan met twijfel en bezwaren</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Hoge / onbeperkte AI-minuten (fair use)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-800 dark:text-white mt-0.5 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700 dark:text-white/80 font-light">Prioriteit support en uitgebreide analytics</span>
</li>
</ul>
<a className="hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300 text-sm font-medium text-slate-900 dark:text-white w-full border-slate-300 dark:border-white/10 border rounded-xl pt-4 pb-4 block text-center" href="#contact">Plan een gesprek</a>
</div>
</div>
</section>

<section className="dark:border-white/5 z-10 overflow-hidden bg-transparent w-full border-slate-200 border-t pt-24 pr-6 pb-24 pl-6 relative" id="contact">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -left-64 w-96 h-96 bg-sky-200/40 dark:bg-sky-500/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-200/40 dark:bg-blue-600/10 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="flex flex-col justify-center h-full pt-4">
<div className="mb-10">
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-900 dark:text-white tracking-tight font-display mb-6">
                                Klaar voor de 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Volgende Stap</span> in Groei?
                            </h2>
<p className="text-base md:text-lg text-slate-600 dark:text-white/50 leading-relaxed font-light max-w-lg">
                                Ontdek hoe onze AI-oplossingen uw bereikbaarheid transformeren en uw agenda vullen. Vul het formulier in en we nemen binnen 24 uur contact met u op voor een strategiegesprek op maat.
                            </p>
</div>
<details className="group w-full max-w-md">
<summary className="list-none cursor-pointer">
<div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:border-sky-500/30 text-slate-900 dark:text-white transition-all duration-300 shadow-sm dark:shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] group-open:bg-slate-50 dark:group-open:bg-white/[0.08] group-open:border-sky-500/30">
<span className="text-sm font-medium tracking-wide">Maak kennis met onze Specialisten</span>
<div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center group-open:rotate-180 transition-transform duration-300 group-open:bg-sky-500 group-open:text-white">
<iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</summary>
<div className="mt-6 space-y-4 animate-fade-in-up origin-top">
<div className="hover:border-sky-500/20 transition-colors flex gap-5 group/card bg-white dark:bg-[#0A0A0A] border-slate-200 dark:border-white/5 border rounded-2xl pt-5 pr-5 pb-5 pl-5 gap-x-5 gap-y-5 items-center shadow-soft-light dark:shadow-none">
<div className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-100 to-blue-50 dark:from-sky-500/20 dark:to-blue-900/20 flex items-center justify-center border border-sky-200 dark:border-sky-500/30 text-sky-600 dark:text-sky-400 shrink-0">
<span className="font-display font-bold text-lg">JC</span>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-slate-900 dark:text-white font-medium text-sm">Joey van Cronenburg</h4>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 uppercase tracking-wider font-bold">Sales</span>
</div>
<div className="flex flex-col gap-1">
<a className="text-xs text-slate-500 dark:text-white/40 hover:text-sky-500 transition-colors flex items-center gap-2" href="mailto:j.vancronenburg@jbsync.com">
<iconify-icon className="text-sky-500/70" icon="solar:letter-linear"></iconify-icon>
                                                j.vancronenburg@jbsync.com
                                            </a>
<a className="text-xs text-slate-500 dark:text-white/40 hover:text-sky-500 transition-colors flex items-center gap-2" href="tel:0612219233">
<iconify-icon className="text-sky-500/70" icon="solar:phone-linear"></iconify-icon>
                                                06 1221 9233
                                            </a>
</div>
</div>
</div>
<div className="hover:border-sky-500/20 transition-colors flex gap-5 group/card bg-white dark:bg-[#0A0A0A] border-slate-200 dark:border-white/5 border rounded-2xl pt-5 pr-5 pb-5 pl-5 gap-x-5 gap-y-5 items-center shadow-soft-light dark:shadow-none">
<div className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-100 to-blue-50 dark:from-sky-500/20 dark:to-blue-900/20 flex items-center justify-center border border-sky-200 dark:border-sky-500/30 text-sky-600 dark:text-sky-400 shrink-0">
<span className="text-lg font-bold font-display">BH</span>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-slate-900 dark:text-white font-medium text-sm">Brad van Halm</h4>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 uppercase tracking-wider font-bold">Tech</span>
</div>
<div className="flex flex-col gap-1">
<a className="text-xs text-slate-500 dark:text-white/40 hover:text-sky-500 transition-colors flex items-center gap-2" href="mailto:b.vanhalm@jbsync.com">
<iconify-icon className="text-sky-500/70" icon="solar:letter-linear"></iconify-icon>
                                                b.vanhalm@jbsync.com
                                            </a>
<a className="text-xs text-slate-500 dark:text-white/40 hover:text-sky-500 transition-colors flex items-center gap-2" href="tel:0612298039">
<iconify-icon className="text-sky-500/70" icon="solar:phone-linear"></iconify-icon>
                                                06 1229 8039
                                            </a>
</div>
</div>
</div>

<div className="hover:border-sky-500/20 transition-colors flex gap-5 group/card bg-white dark:bg-[#0A0A0A] border-slate-200 dark:border-white/5 border rounded-2xl pt-5 pr-5 pb-5 pl-5 gap-x-5 gap-y-5 items-center shadow-soft-light dark:shadow-none">
<div className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-100 to-blue-50 dark:from-sky-500/20 dark:to-blue-900/20 flex items-center justify-center border border-sky-200 dark:border-sky-500/30 text-sky-600 dark:text-sky-400 shrink-0">
<span className="text-lg font-bold font-display">D</span>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-slate-900 dark:text-white font-medium text-sm">Dave</h4>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 uppercase tracking-wider font-bold">AI Voice</span>
</div>
<div className="flex flex-col gap-1">
<a className="text-xs text-slate-500 dark:text-white/40 hover:text-sky-500 transition-colors flex items-center gap-2" href="tel:0612345678">
<iconify-icon className="text-sky-500/70" icon="solar:phone-linear"></iconify-icon>
                                                06 1234 5678
                                            </a>
</div>
</div>
</div>
</div>
</details>
</div>
<div className="relative w-full">
<div className="absolute -inset-1 bg-gradient-to-r from-sky-200/50 to-blue-200/50 dark:from-sky-500/30 dark:to-blue-600/30 rounded-[2rem] blur-2xl opacity-40 pointer-events-none"></div>
<div className="w-full bg-white dark:bg-[#050505] border-slate-200 dark:border-white/10 border rounded-[2rem] relative shadow-2xl dark:shadow-2xl backdrop-blur-xl overflow-hidden p-8 md:p-10 flex flex-col justify-center" id="jbsync-form-container">
<div className="" id="jbsync-form-content">
<h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 font-display">Start uw Aanvraag</h2>
<p className="text-slate-500 dark:text-white/60 mb-8 text-sm md:text-base font-light">Vul uw gegevens in voor een vrijblijvend advies gesprek.</p>
<form className="space-y-5" id="jbsync-form" onsubmit="event.preventDefault(); submitJBSyncForm();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-500 ml-1" htmlFor="voornaam">Voornaam *</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300" id="voornaam" placeholder="Voornaam" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-500 ml-1" htmlFor="achternaam">Achternaam *</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300" id="achternaam" placeholder="Achternaam" required="" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-500 ml-1" htmlFor="telefoon">Telefoonnummer *</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300" id="telefoon" placeholder="06 1234 5678" required="" type="tel"/>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-500 ml-1" htmlFor="email">Email *</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300" id="email" placeholder="naam@bedrijf.nl" required="" type="email"/>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-500 ml-1" htmlFor="bedrijfsnaam">Bedrijfsnaam</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300" id="bedrijfsnaam" placeholder="Uw Bedrijfsnaam" type="text"/>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-500 ml-1" htmlFor="intresse">Interesse</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300 appearance-none cursor-pointer" id="intresse">
<option className="bg-white dark:bg-slate-900" value="">Selecteer uw Pakket</option>
<option className="bg-white dark:bg-slate-900" value="Starter">Starter</option>
<option className="bg-white dark:bg-slate-900" value="Professional">Professional</option>
<option className="bg-white dark:bg-slate-900" value="Premium">Premium</option>
<option className="bg-white dark:bg-slate-900" value="Weet ik nog niet">Weet ik nog niet</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-start gap-3 mt-2">
<input className="mt-1 w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer accent-sky-500" id="voorwaarden" required="" type="checkbox"/>
<label className="text-xs text-slate-500 dark:text-white/50 leading-relaxed cursor-pointer select-none" htmlFor="voorwaarden">
                                            Ik ga akkoord met de <a className="text-sky-600 dark:text-sky-500 hover:underline" href="https://docs.google.com/document/d/1KNvbvZ6-M70S1sWg-NmRxikvNhE5YQ6a_pGPSzoT4sQ/edit?usp=sharing" target="_blank">Voorwaarden</a> van JBSync en geef toestemming voor contact via de AI Voice Assistent en SMS. Afmelden kan via 'STOP'.
                                        </label>
</div>

<div className="hidden text-sm text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-3 rounded-lg" id="form-error"></div>

<button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transform transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed" id="submit-btn" type="submit">
                                        Verstuur Aanvraag
                                    </button>
</form>
</div>

<div className="hidden flex flex-col items-center justify-center text-center py-10 animate-fade-in-up" id="form-success">
<div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20">
<iconify-icon className="text-4xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">Bedankt voor uw aanvraag!</h3>
<p className="text-slate-600 dark:text-white/60">We nemen zo snel mogelijk contact met u op.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-transparent border-t border-slate-200 dark:border-white/10 py-12 px-6 relative z-30">
<div className="flex flex-col md:flex-row gap-6 max-w-6xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-between">
<div className="dark:text-white/30 md:text-left order-2 md:order-1 text-xs font-light text-slate-400 tracking-wide text-center">
<p>© 2026 JBSync | Nicolaas Tulplaan 140g, Amstelveen</p>
<p className="mt-0.5">Kvk-Nummer: 99705907</p>
</div>
<nav className="flex flex-wrap justify-center md:justify-end items-center gap-x-8 gap-y-4 order-1 md:order-2">
<a className="text-sm font-medium text-slate-600 dark:text-white transition-colors hover:text-sky-500" href="https://docs.google.com/document/d/1KNvbvZ6-M70S1sWg-NmRxikvNhE5YQ6a_pGPSzoT4sQ/edit?usp=sharing" target="_blank">Privacy verklaring</a>
<a className="text-sm font-medium text-slate-600 dark:text-white transition-colors hover:text-sky-500" href="https://docs.google.com/document/d/1KNvbvZ6-M70S1sWg-NmRxikvNhE5YQ6a_pGPSzoT4sQ/edit?usp=sharing" target="_blank">Algemene voorwaarden</a>
<a className="text-sm font-medium text-slate-600 dark:text-white transition-colors hover:text-sky-500" href="https://docs.google.com/document/d/1KNvbvZ6-M70S1sWg-NmRxikvNhE5YQ6a_pGPSzoT4sQ/edit?usp=sharing" target="_blank">Ai Disclaimer</a>
</nav>
</div>
</footer>
</main>







    </>
  );
}
