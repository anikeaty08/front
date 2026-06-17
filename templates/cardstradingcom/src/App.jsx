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



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['var(--font-display)', 'sans-serif'],
body: ['var(--font-body)', 'sans-serif'],
},
colors: {
base: 'var(--bg-base)',
card: 'var(--bg-card)',
border: 'var(--border-card)',
text: 'var(--text-main)',
muted: 'var(--text-muted)',
accent1: 'var(--accent-1)',
accent2: 'var(--accent-2)',
},
boxShadow: {
glow1: '0 0 20px var(--accent-1)',
glow2: '0 0 20px var(--accent-2)',
soft: '0 4px 24px -8px rgba(0,0,0,0.1)',
},
animation: {
'grid-move': 'gridMove 20s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
gridMove: {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '0 80px' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Form Tabs Logic
        function switchTab(type) {
            const btnBuyer = document.getElementById('tab-buyer');
            const btnSeller = document.getElementById('tab-seller');
            const indicator = document.getElementById('tab-indicator');
            const sellerExtra = document.getElementById('seller-extra');

            if (type === 'buyer') {
                btnBuyer.classList.replace('text-muted', 'text-text');
                btnBuyer.classList.replace('font-medium', 'font-semibold');
                btnSeller.classList.replace('text-text', 'text-muted');
                btnSeller.classList.replace('font-semibold', 'font-medium');
                indicator.style.transform = 'translateX(0)';
                
                sellerExtra.classList.add('hidden', 'opacity-0');
            } else {
                btnSeller.classList.replace('text-muted', 'text-text');
                btnSeller.classList.replace('font-medium', 'font-semibold');
                btnBuyer.classList.replace('text-text', 'text-muted');
                btnBuyer.classList.replace('font-semibold', 'font-medium');
                indicator.style.transform = 'translateX(100%)';
                
                sellerExtra.classList.remove('hidden');
                // Small delay for smooth fade in
                setTimeout(() => sellerExtra.classList.remove('opacity-0'), 10);
            }
        }

        // Form Submit Simulation
        function handleFormSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('waitlist-form');
            const success = document.getElementById('success-state');
            
            form.style.display = 'none';
            success.classList.remove('hidden');
        }

        // Theme Switcher Logic
        function changeTheme(themeName) {
            document.body.setAttribute('data-theme', themeName);
        }
    


        import * as THREE from 'three';

        const container = document.getElementById('booster-container');
        
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Group for rotation
        const group = new THREE.Group();
        scene.add(group);

        // Create a programmatic "Holographic Foil" material for the booster
        const boosterGeometry = new THREE.BoxGeometry(2.4, 3.4, 0.15, 32, 32, 2);
        
        // Base metallic material
        const foilMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x111111,
            metalness: 0.9,
            roughness: 0.2,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
        });

        const boosterMesh = new THREE.Mesh(boosterGeometry, foilMaterial);
        group.add(boosterMesh);

        // Create a canvas texture for the text/design on the booster
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        
        // Draw background gradient
        const grd = ctx.createLinearGradient(0, 0, 0, 1024);
        grd.addColorStop(0, "#0a0a0f");
        grd.addColorStop(0.5, "#1a1a2e");
        grd.addColorStop(1, "#0a0a0f");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 512, 1024);
        
        // Draw text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 60px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('CARDS', 256, 300);
        ctx.fillText('TRADING', 256, 380);
        
        ctx.fillStyle = '#00f5ff';
        ctx.font = 'bold 40px sans-serif';
        ctx.fillText('TCG BOOSTER', 256, 600);
        ctx.font = '24px sans-serif';
        ctx.fillText('10 CARDS • PREMIUM EDITION', 256, 850);

        // Border
        ctx.strokeStyle = '#ff00ff';
        ctx.lineWidth = 10;
        ctx.strokeRect(20, 20, 472, 984);

        const canvasTexture = new THREE.CanvasTexture(canvas);
        const artMaterial = new THREE.MeshBasicMaterial({ map: canvasTexture, transparent: true, opacity: 0.9 });
        const artGeometry = new THREE.PlaneGeometry(2.3, 3.3);
        const artMesh = new THREE.Mesh(artGeometry, artMaterial);
        artMesh.position.z = 0.08;
        group.add(artMesh);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const light1 = new THREE.PointLight(0x00f5ff, 50, 20); // Cyan
        light1.position.set(-3, 2, 2);
        scene.add(light1);

        const light2 = new THREE.PointLight(0xff00ff, 50, 20); // Magenta
        light2.position.set(3, -2, 2);
        scene.add(light2);

        // Floating particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 100;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffffff,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        // Animation Loop
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            // Smooth mouse follow
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;
            
            group.rotation.y += 0.05 * (targetX - group.rotation.y);
            group.rotation.x += 0.05 * (targetY - group.rotation.x);
            
            // Auto float
            group.position.y = Math.sin(time) * 0.2;
            
            // Rotate particles
            particlesMesh.rotation.y = time * 0.1;

            renderer.render(scene, camera);
        }
        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
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
      

<header className="fixed top-0 w-full z-50 glass-panel !border-t-0 !border-l-0 !border-r-0 !rounded-none !shadow-none border-b border-border transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-xl text-accent1 group-hover:text-accent2 transition-colors duration-300" icon="solar:cards-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-display tracking-tighter text-lg font-semibold uppercase">CardsTrading</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-text transition-colors" href="#vendeurs">Vendeurs</a>
<a className="hover:text-text transition-colors" href="#acheteurs">Acheteurs</a>
<a className="hover:text-text transition-colors" href="#fonctionnement">Concept</a>
<a className="hover:text-text transition-colors" href="#faq">FAQ</a>
</nav>
<a className="hidden md:inline-flex btn-base items-center justify-center px-4 py-2 text-xs font-semibold bg-text text-base hover:opacity-90 transition-opacity" href="#inscription">
                Rejoindre la bêta
            </a>
<button aria-label="Menu" className="md:hidden text-text p-2">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
<div className="absolute inset-0 bg-grid perspective-grid animate-grid-move opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/80 to-base z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start gap-6 text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-medium text-muted">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent1"></span>
</span>
                    Bêta privée - Places limitées
                </div>
<h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1]">
<span className="text-gradient block pb-1">COLLECT.</span>
<span className="text-gradient block pb-1">TRADE.</span>
<span className="text-gradient block">DOMINATE.</span>
</h1>
<p className="text-base md:text-lg text-muted max-w-xl font-normal leading-relaxed">
                    La marketplace TCG nouvelle génération.<br/>
<span className="text-text font-medium mt-1 block">Pokémon • One Piece • Magic • Yu-Gi-Oh! • Lorcana</span>
</p>
<p className="text-sm text-muted max-w-lg leading-relaxed">
                    Achetez et vendez vos cartes en toute confiance avec paiement sécurisé, vendeurs vérifiés et une interface pensée pour les collectionneurs exigeants.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
<a className="btn-base group flex items-center justify-center gap-2 px-6 py-3 bg-text text-base font-semibold text-sm transition-all hover:scale-[1.02]" href="#inscription">
                        Je veux acheter
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="btn-base group flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card hover:bg-border/50 text-text font-semibold text-sm transition-all hover:scale-[1.02]" href="#inscription">
                        Je veux vendre
                    </a>
</div>
<div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50 w-full mt-4">
<div>
<p className="font-display text-2xl font-semibold text-text tracking-tighter">2.8k+</p>
<p className="text-xs text-muted font-medium mt-1">Inscrits</p>
</div>
<div>
<p className="font-display text-2xl font-semibold text-text tracking-tighter">0%</p>
<p className="text-xs text-muted font-medium mt-1">Frais vendeurs</p>
</div>
<div>
<p className="font-display text-2xl font-semibold text-text tracking-tighter">100%</p>
<p className="text-xs text-muted font-medium mt-1">Sécurisé</p>
</div>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center" id="booster-container">

<div className="absolute inset-0 bg-accent1/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
</div>
</div>
</section>

<section className="py-24 relative" id="problemes">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<p className="text-xs font-semibold tracking-widest text-accent2 uppercase mb-3">Le problème</p>
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-text">Marre des galères actuelles ?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-6 group-hover:border-accent1 transition-colors">
<iconify-icon className="text-xl text-muted group-hover:text-accent1" icon="solar:ghost-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold tracking-tight mb-4">Plateformes Datées</h3>
<ul className="space-y-3 text-sm text-muted">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Interfaces complexes des années 2000</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Expérience mobile catastrophique</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Navigation lente et peu intuitive</li>
</ul>
</div>

<div className="glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-6 group-hover:border-accent2 transition-colors">
<iconify-icon className="text-xl text-muted group-hover:text-accent2" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold tracking-tight mb-4">Généralistes Risqués</h3>
<ul className="space-y-3 text-sm text-muted">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Arnaques fréquentes (Vinted/LBC)</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Pas de filtres d'état certifiés</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Vendeurs anonymes non vérifiés</li>
</ul>
</div>

<div className="glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center mb-6 group-hover:border-accent1 transition-colors">
<iconify-icon className="text-xl text-muted group-hover:text-accent1" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold tracking-tight mb-4">Frais Abusifs</h3>
<ul className="space-y-3 text-sm text-muted">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Commissions exorbitantes (~13% eBay)</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Protections vendeurs arbitraires</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 opacity-50" icon="solar:close-circle-linear"></iconify-icon> Frais cachés au retrait</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-card/20 border-y border-border/50 relative" id="vendeurs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-xl">
<p className="text-xs font-semibold tracking-widest text-accent2 uppercase mb-3 flex items-center gap-2">
<iconify-icon icon="solar:shop-linear"></iconify-icon> Pour les vendeurs
                    </p>
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-text">Vendez plus, stressez moins.</h2>
<p className="text-sm text-muted mt-4">Boutiques professionnelles ou power sellers : on a conçu des outils pour scaler votre activité sans frictions.</p>
</div>
<div className="glass-panel p-4 flex items-center gap-4 border-accent2/30">
<div className="w-12 h-12 rounded bg-accent2/10 flex items-center justify-center text-accent2">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-muted font-medium">Offre Lancement</p>
<p className="font-display font-semibold text-lg tracking-tight">0% Commission</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel p-6 flex flex-col gap-3">
<iconify-icon className="text-2xl text-text" icon="solar:file-download-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-text">Import Massif</h3>
<p className="text-xs text-muted leading-relaxed">Synchronisez votre stock via CSV ou API en quelques clics.</p>
</div>
<div className="glass-panel p-6 flex flex-col gap-3">
<iconify-icon className="text-2xl text-text" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-text">Anti-Litiges</h3>
<p className="text-xs text-muted leading-relaxed">Process strict exigeant des photos claires pour éviter la mauvaise foi.</p>
</div>
<div className="glass-panel p-6 flex flex-col gap-3">
<iconify-icon className="text-2xl text-text" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-text">Paiement Garanti</h3>
<p className="text-xs text-muted leading-relaxed">Système escrow. Vous êtes payé dès confirmation de réception.</p>
</div>
<div className="glass-panel p-6 flex flex-col gap-3 border-accent2/20 bg-accent2/5">
<iconify-icon className="text-2xl text-accent2" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-text">Frais Mini</h3>
<p className="text-xs text-muted leading-relaxed">Seulement 5% après l'offre de lancement. Laissez plus de marge.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="acheteurs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-xs font-semibold tracking-widest text-accent1 uppercase mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:gamepad-linear"></iconify-icon> Pour les collectionneurs
                </p>
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter text-text">Trouvez la pépite. En toute sécurité.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-border/50 rounded-2xl p-6 hover:bg-card/30 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-accent1" icon="solar:filters-linear"></iconify-icon>
<h3 className="text-sm font-semibold">Filtres TCG Chirurgicaux</h3>
</div>
<p className="text-xs text-muted leading-relaxed">Extension, rareté, langue, gradation (PSA/PCA/BGS). Trouvez exactement ce qu'il manque à votre binder.</p>
</div>

<div className="group border border-border/50 rounded-2xl p-6 hover:bg-card/30 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-accent1" icon="solar:camera-linear"></iconify-icon>
<h3 className="text-sm font-semibold">Photos Obligatoires</h3>
</div>
<p className="text-xs text-muted leading-relaxed">Fini les mauvaises surprises. Le vendeur doit uploader recto/verso pour chaque carte listée au-dessus de 10€.</p>
</div>

<div className="group border border-border/50 rounded-2xl p-6 hover:bg-card/30 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-accent1" icon="solar:safe-square-linear"></iconify-icon>
<h3 className="text-sm font-semibold">Paiement Séquestré</h3>
</div>
<p className="text-xs text-muted leading-relaxed">Votre argent reste bloqué chez nous. Le vendeur n'est payé que lorsque vous validez la réception conforme.</p>
</div>

<div className="group border border-border/50 rounded-2xl p-6 hover:bg-card/30 transition-colors">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-accent1" icon="solar:user-check-linear"></iconify-icon>
<h3 className="text-sm font-semibold">Vendeurs Notés</h3>
</div>
<p className="text-xs text-muted leading-relaxed">Historique transparent, badges de confiance progressifs et algorithme pénalisant les annulations.</p>
</div>

<div className="group border border-border/50 rounded-2xl p-6 hover:bg-card/30 transition-colors lg:col-span-2">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-accent1" icon="solar:smartphone-linear"></iconify-icon>
<h3 className="text-sm font-semibold">Expérience Mobile Native</h3>
</div>
<p className="text-xs text-muted leading-relaxed">Une interface rapide, fluide, pensée pour être utilisée à une main pendant une brocante ou un tournoi.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-card/10">
<div className="max-w-4xl mx-auto px-6">
<h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tighter text-center mb-12">Pourquoi changer ?</h2>
<div className="glass-panel overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
<th className="p-4 font-medium"></th>
<th className="p-4 font-semibold text-text bg-card/50">Cards-Trading</th>
<th className="p-4 font-medium">Cardmarket</th>
<th className="p-4 font-medium">Vinted</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-border/50">
<tr>
<td className="p-4 font-medium text-muted">Commissions</td>
<td className="p-4 font-semibold text-text bg-card/50">5% (0% Lancement)</td>
<td className="p-4">~5-8%</td>
<td className="p-4">~5% (Acheteur)</td>
</tr>
<tr>
<td className="p-4 font-medium text-muted">Filtres TCG</td>
<td className="p-4 text-accent1 bg-card/50"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-muted"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-border"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 font-medium text-muted">UX Mobile</td>
<td className="p-4 text-accent1 bg-card/50"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> Native</td>
<td className="p-4 text-border"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon> Datée</td>
<td className="p-4 text-muted"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> Bonne</td>
</tr>
<tr>
<td className="p-4 font-medium text-muted">Photos exigées</td>
<td className="p-4 text-accent1 bg-card/50"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4 text-border"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4 text-muted"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-32 relative flex items-center justify-center" id="inscription">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent1/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-md w-full px-6">
<div className="glass-panel p-8 md:p-10 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent1 to-accent2"></div>
<div className="text-center mb-8">
<h2 className="font-display text-2xl font-semibold tracking-tighter mb-2">Rejoindre la liste</h2>
<p className="text-xs text-muted">Sécurisez votre place pour la bêta fermée.</p>
</div>

<div className="flex p-1 bg-base border border-border rounded-lg mb-6 relative">
<button className="flex-1 py-2 text-xs font-semibold rounded relative z-10 transition-colors text-text" id="tab-buyer" onclick="switchTab('buyer')">Acheteur</button>
<button className="flex-1 py-2 text-xs font-medium rounded relative z-10 transition-colors text-muted hover:text-text" id="tab-seller" onclick="switchTab('seller')">Vendeur</button>

<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-card border border-border rounded shadow-sm transition-transform duration-300 z-0" id="tab-indicator"></div>
</div>
<form className="space-y-5" id="waitlist-form" onsubmit="handleFormSubmit(event)">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-muted" htmlFor="email">Adresse Email</label>
<input className="w-full px-4 py-3 text-sm transition-all bg-base border-border focus:border-accent1 focus:ring-1 focus:ring-accent1/50" id="email" placeholder="vous@email.com" required="" type="email"/>
</div>
<div className="space-y-1.5 hidden opacity-0 transition-opacity duration-300" id="seller-extra">
<label className="block text-xs font-medium text-muted" htmlFor="shop">Nom de boutique / Pseudo (Optionnel)</label>
<input className="w-full px-4 py-3 text-sm transition-all bg-base border-border focus:border-accent2 focus:ring-1 focus:ring-accent2/50" id="shop" placeholder="PokeShop99" type="text"/>
</div>
<div className="space-y-3 pt-2">
<label className="block text-xs font-medium text-muted">TCG de prédilection</label>
<div className="grid grid-cols-2 gap-3">

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-border bg-base group-hover:border-accent1 transition-colors">
<input checked="" className="peer sr-only" type="checkbox"/>
<iconify-icon className="absolute text-base opacity-0 peer-checked:opacity-100 peer-checked:text-text transition-all scale-50 peer-checked:scale-100" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs font-medium text-muted group-hover:text-text transition-colors">Pokémon</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-border bg-base group-hover:border-accent1 transition-colors">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="absolute text-base opacity-0 peer-checked:opacity-100 peer-checked:text-text transition-all scale-50 peer-checked:scale-100" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs font-medium text-muted group-hover:text-text transition-colors">One Piece</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-border bg-base group-hover:border-accent1 transition-colors">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="absolute text-base opacity-0 peer-checked:opacity-100 peer-checked:text-text transition-all scale-50 peer-checked:scale-100" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs font-medium text-muted group-hover:text-text transition-colors">Magic</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-border bg-base group-hover:border-accent1 transition-colors">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="absolute text-base opacity-0 peer-checked:opacity-100 peer-checked:text-text transition-all scale-50 peer-checked:scale-100" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs font-medium text-muted group-hover:text-text transition-colors">Lorcana</span>
</label>
</div>
</div>
<button className="w-full btn-base py-3 px-4 bg-text text-base font-semibold text-sm hover:opacity-90 mt-4 flex justify-center items-center gap-2 group" type="submit">
                        Rejoindre l'accès anticipé
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-muted text-center mt-4 uppercase tracking-wider">0 spam. Désinscription en 1 clic.</p>
</form>

<div className="hidden text-center py-8" id="success-state">
<div className="w-16 h-16 rounded-full bg-accent1/10 text-accent1 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-3xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold mb-2">Vous êtes sur la liste !</h3>
<p className="text-sm text-muted">Position estimée : <span className="text-text font-semibold">#2848</span></p>
<p className="text-xs text-muted mt-4">Surveillez vos emails, on vous contacte bientôt.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-border/50 bg-card/20 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-xl text-accent1" icon="solar:cards-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-display tracking-tighter text-lg font-semibold uppercase">CardsTrading</span>
</a>
<p className="text-xs text-muted max-w-xs leading-relaxed">
                        La plateforme pensée par des joueurs et collectionneurs, pour ramener la confiance dans l'achat/revente de TCG en Europe.
                    </p>
</div>
<div>
<h4 className="font-semibold text-sm mb-4">Navigation</h4>
<ul className="space-y-2 text-xs text-muted">
<li><a className="hover:text-text transition-colors" href="#vendeurs">Espace Vendeurs</a></li>
<li><a className="hover:text-text transition-colors" href="#acheteurs">Espace Acheteurs</a></li>
<li><a className="hover:text-text transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4">Légal</h4>
<ul className="space-y-2 text-xs text-muted">
<li><a className="hover:text-text transition-colors" href="#">CGU / CGV</a></li>
<li><a className="hover:text-text transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-text transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50 text-[10px] text-muted uppercase tracking-widest">
<p>© 2024 CardsTrading. Tous droits réservés.</p>
<div className="flex gap-4 text-lg">
<a className="hover:text-text transition-colors" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-text transition-colors" href="#"><iconify-icon icon="solar:hashtag-square-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<div className="glass-panel p-2 flex items-center gap-2 rounded-full shadow-lg">
<iconify-icon className="text-muted ml-2" icon="solar:palette-linear"></iconify-icon>
<select className="bg-transparent text-xs text-text border-none outline-none cursor-pointer pr-2 appearance-none font-medium" id="theme-selector" onchange="changeTheme(this.value)">
<option value="neon">Neon Arcade</option>
<option value="premium">Premium Minimal</option>
<option value="tcg">TCG Master</option>
<option value="manga">Manga Ink</option>
<option value="street">Street Hype</option>
<option value="dopamine">Dopamine</option>
<option value="data">Cyber Data</option>
</select>
<iconify-icon className="text-muted mr-2 pointer-events-none -ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>





    </>
  );
}
