import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const canvas = document.getElementById('city-canvas');

      // Scene Setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.003);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 20, 60);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Objects
      const cityGroup = new THREE.Group();
      scene.add(cityGroup);

      const boxGeo = new THREE.BoxGeometry(1, 1, 1);
      const edgesGeo = new THREE.EdgesGeometry(boxGeo);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
      const litMat = new THREE.MeshBasicMaterial({ color: 0xaaddff, transparent: true, opacity: 0.5 });

      // Generate City Grid - Extended Strip for Scroll
      const spacing = 5;

      // Generate a long strip of city along Z axis to match scroll depth
      // Camera moves from Z=60 to negative Z. We cover down to Z=-200.
      for(let x = -30; x <= 30; x += 1) {
        for(let z = -200; z <= 40; z += 1) {
           if (Math.random() > 0.25) continue;

           // Height biased towards center line
           const distX = Math.abs(x);
           const h = Math.random() * 50 + 5 + (30 - distX);
           if (h < 5) continue;

           const w = Math.random() * 3 + 1.5;

           const posX = x * spacing + (Math.random() - 0.5);
           const posZ = z * spacing + (Math.random() - 0.5);

           // Building Wireframe
           const building = new THREE.LineSegments(edgesGeo, lineMat);
           building.position.set(posX, h/2, posZ);
           building.scale.set(w, h, w);
           cityGroup.add(building);

           // Random Lights/Windows
           if(Math.random() > 0.75) {
             const light = new THREE.Mesh(boxGeo, litMat);
             light.position.set(posX, Math.random() * h * 0.9 + 2, posZ);
             light.scale.set(w * 0.9, 0.2 + Math.random(), w * 0.9);
             cityGroup.add(light);
           }
        }
      }

      // Ground Grid - Extended
      const grid = new THREE.GridHelper(2000, 400, 0x222222, 0x050505);
      scene.add(grid);

      // Animation
      let scrollY = 0;
      window.addEventListener('scroll', () => scrollY = window.scrollY);

      function resize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener('resize', resize);

      function animate() {
          requestAnimationFrame(animate);

          // Smooth camera movement based on scroll
          const targetZ = 60 - scrollY * 0.1;
          const targetY = 20 + scrollY * 0.03;

          camera.position.z += (targetZ - camera.position.z) * 0.05;
          camera.position.y += (targetY - camera.position.y) * 0.05;

          renderer.render(scene, camera);
      }
      animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none" id="city-canvas"></canvas>

<div className="relative z-10">

<nav className="fixed top-0 w-full z-50 pt-6 transition-all duration-500 backdrop-blur-[2px] border-b border-white/[0.05] bg-black/20">
<div className="max-w-7xl mx-auto px-6 pb-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/90" height="24" icon="solar:code-circle-linear" width="24"></iconify-icon>
<span className="text-xs tracking-tight text-white/80 font-normal">
              dre.mortgage
            </span>
</div>
<div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] text-white/70 font-normal">
<a className="hover:text-white transition-colors duration-300" href="#">
              Mission
            </a>
<a className="hover:text-white transition-colors duration-300" href="#">
              Ecosystem
            </a>
<a className="hover:text-white transition-colors duration-300" href="#">
              Roadmap
            </a>
</div>
<div className="flex items-center gap-6">
<button className="text-white/50 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="w-full">

<section className="flex flex-col justify-start pt-[35vh] relative h-[200vh]">
<div className="max-w-6xl mx-auto px-6 text-center space-y-8">
<h1 className="text-5xl md:text-8xl text-white uppercase font-bold tracking-tight">
              Real Yield. Paid Daily.
            </h1>
<div className="flex justify-center">
<p className="text-[10px] uppercase tracking-[0.3em] mt-6 border-l border-white/10 pl-4 text-left text-white/60">
                The only way to access private property credit yield, onchain
              </p>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 animate-pulse">
<div className="w-px h-24 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="flex items-center relative h-[200vh]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 w-full">
<div className="space-y-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02]">
<iconify-icon className="text-white/80" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-light tracking-tight text-white/90">
                Stablecoin Ecosystem
              </h2>
<p className="text-sm font-light leading-relaxed max-w-sm text-zinc-300">
                A dual-token model: dreUSD for 1:1 stability and dreUSDs for
                yield. Fully collateralized by verifiable real-world assets.
              </p>
<div className="pt-8 flex items-center gap-6">
<div className="h-px flex-1 bg-white/5">
<div className="h-full w-1/3 bg-white/40"></div>
</div>
<span className="text-[10px] text-zinc-600 font-mono">01</span>
</div>
</div>
</div>
</section>

<section className="flex items-center justify-end relative h-[200vh]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 w-full">
<div></div>
<div className="space-y-6 text-right">
<div className="ml-auto inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02]">
<iconify-icon className="text-white/80" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-light tracking-tight text-white/90">
                Radical Transparency
              </h2>
<p className="text-sm font-light leading-relaxed ml-auto max-w-sm text-zinc-300">
                Live asset allocation, weekly proof of reserves, and monthly
                attestations. Financial services without the black box.
              </p>
<div className="pt-8 flex items-center gap-6 justify-end">
<span className="text-[10px] text-zinc-600 font-mono">02</span>
<div className="h-px w-32 bg-white/5">
<div className="h-full w-full bg-white/40 origin-right scale-x-50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-t from-black via-zinc-950 to-transparent">
<div className="flex flex-col md:flex-row gap-12 items-center">
<button className="group px-8 py-3 text-[10px] font-medium tracking-[0.2em] transition-all flex items-center gap-3 uppercase text-white/60 border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20">
<span>Launch App</span>
<iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="solar:restart-linear" width="14"></iconify-icon>
</button>
</div>
</section>
</main>
</div>



    </>
  );
}
