import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';

        const canvas = document.getElementById('webgl-canvas');
        const scene = new THREE.Scene();
        
        // Add subtle fog to blend into background
        scene.fog = new THREE.FogExp2(0x09090b, 0.02);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create abstract network sphere
        const geometry = new THREE.IcosahedronGeometry(15, 3);
        
        // Wireframe material for tech look
        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x3f3f46, // zinc-700
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const mesh = new THREE.Mesh(geometry, wireframeMaterial);
        scene.add(mesh);

        // Points at vertices
        const pointsMaterial = new THREE.PointsMaterial({
            color: 0xa1a1aa, // zinc-400
            size: 0.08,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        const points = new THREE.Points(geometry, pointsMaterial);
        scene.add(points);

        // Mouse interaction logic
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.001;
            mouseY = (event.clientY - windowHalfY) * 0.001;
        });

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            targetX = mouseX * 2;
            targetY = mouseY * 2;

            // Base rotation
            mesh.rotation.y += 0.001;
            mesh.rotation.x += 0.0005;
            points.rotation.y += 0.001;
            points.rotation.x += 0.0005;

            // Mouse parallax effect
            mesh.rotation.y += 0.05 * (targetX - mesh.rotation.y);
            mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);
            points.rotation.y += 0.05 * (targetX - points.rotation.y);
            points.rotation.x += 0.05 * (targetY - points.rotation.x);

            renderer.render(scene, camera);
        }
        
        animate();

        // Handle window resize
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
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none z-0" id="webgl-canvas"></canvas>
<div className="relative z-10 flex flex-col min-h-screen">

<header className="fixed top-0 inset-x-0 w-full backdrop-blur-md bg-zinc-950/50 border-b border-white/5 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-display tracking-tighter font-medium text-lg uppercase text-white">Payza</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors" href="#">Security</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors" href="#">Company</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">Log in</a>
<button className="bg-white text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        Get App
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-start pt-40 md:pt-52 px-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/40 text-xs font-medium text-zinc-300 backdrop-blur-md mb-8 ring-1 ring-white/5">
<iconify-icon className="text-sm text-cyan-400" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon> 
                Payza v2.0 is now live
            </div>
<h1 className="font-display text-7xl md:text-9xl lg:text-[11rem] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 w-full max-w-[100rem] text-center mx-auto leading-[0.9] pb-4">
                Money, unchained.
            </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-400 font-normal max-w-2xl text-center mx-auto tracking-tight leading-relaxed">
                The most secure, blazingly fast, and beautifully designed self-custodial wallet for the modern web3 citizen. Take control of your digital wealth.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<button className="w-full sm:w-auto bg-white text-zinc-950 px-6 py-3 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Download for iOS
                    <iconify-icon className="text-xl" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-zinc-900/50 text-white border border-white/10 px-6 py-3 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
                    Explore Features
                </button>
</div>

<div className="relative w-full max-w-sm mx-auto mt-24 mb-32 group perspective-1000">

<div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-3xl rounded-full z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

<div className="relative z-10 rounded-[2.5rem] border border-white/10 bg-zinc-950/60 backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-8 ring-1 ring-white/5 transform transition-transform duration-700 hover:-translate-y-2">

<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
<span className="font-display text-xs font-semibold text-white tracking-tighter uppercase">P</span>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-100">Main Wallet</span>
<iconify-icon className="text-zinc-500 text-sm" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 font-medium">Hide</span>
<div className="w-9 h-5 rounded-full bg-zinc-800 relative cursor-pointer ring-1 ring-white/10 transition-colors hover:bg-zinc-700">
<div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-zinc-400 transition-transform"></div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-2 py-4">
<span className="text-sm text-zinc-400 font-normal">Total Balance</span>
<h2 className="font-display text-5xl font-semibold tracking-tighter text-white tabular-nums">$14,234.50</h2>
<div className="flex items-center gap-1.5 bg-cyan-400/10 text-cyan-400 px-2.5 py-1 rounded-full mt-1">
<iconify-icon className="text-sm" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">+2.4% today</span>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<button className="flex flex-col items-center gap-2 group/btn">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover/btn:bg-zinc-800 group-hover/btn:border-white/10 transition-all">
<iconify-icon className="text-xl text-zinc-300 group-hover/btn:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 group-hover/btn:text-zinc-300 transition-colors">Send</span>
</button>
<button className="flex flex-col items-center gap-2 group/btn">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover/btn:bg-zinc-800 group-hover/btn:border-white/10 transition-all">
<iconify-icon className="text-xl text-zinc-300 group-hover/btn:text-white transition-colors" icon="solar:arrow-left-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 group-hover/btn:text-zinc-300 transition-colors">Receive</span>
</button>
<button className="flex flex-col items-center gap-2 group/btn">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover/btn:bg-zinc-800 group-hover/btn:border-white/10 transition-all">
<iconify-icon className="text-xl text-zinc-300 group-hover/btn:text-white transition-colors" icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 group-hover/btn:text-zinc-300 transition-colors">Swap</span>
</button>
</div>

<div className="flex flex-col gap-4 mt-4">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-semibold tracking-tight text-zinc-300">Assets</span>
<iconify-icon className="text-zinc-600 text-lg hover:text-zinc-400 cursor-pointer transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>

<div className="flex justify-between items-center group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 group-hover/item:border-white/10 transition-colors">
<iconify-icon className="text-lg text-zinc-300" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-zinc-100">Ethereum</span>
<span className="text-xs text-zinc-500 font-normal">ETH</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold tracking-tight text-zinc-100 tabular-nums">4.205</span>
<span className="text-xs text-zinc-500 font-normal tabular-nums">$8,410.00</span>
</div>
</div>

<div className="flex justify-between items-center group/item cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 group-hover/item:border-white/10 transition-colors">
<iconify-icon className="text-lg text-zinc-300" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-zinc-100">Solana</span>
<span className="text-xs text-zinc-500 font-normal">SOL</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold tracking-tight text-zinc-100 tabular-nums">142.5</span>
<span className="text-xs text-zinc-500 font-normal tabular-nums">$4,845.00</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full bg-zinc-950/80 border-t border-white/5 backdrop-blur-xl py-32 relative z-20">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-4">Engineered for the future.</h2>
<p className="text-base text-zinc-400 font-normal max-w-xl mx-auto tracking-tight">Everything you need to manage your digital assets securely and efficiently, packed into one beautiful interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors backdrop-blur-sm group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight text-white mb-2">Bank-grade Security</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Your keys, your crypto. Advanced encryption ensures your assets remain safe from any threats.</p>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors backdrop-blur-sm group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight text-white mb-2">Lightning Fast</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Optimized routing and dedicated nodes ensure your transactions are confirmed in milliseconds.</p>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors backdrop-blur-sm group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-2xl text-white" icon="solar:planet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight text-white mb-2">Multi-chain Native</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Seamlessly bridge and swap across Ethereum, Solana, Polygon, and 20+ other networks natively.</p>
</div>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 bg-zinc-950 py-12 z-20 relative">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-display tracking-tighter font-medium text-lg uppercase text-zinc-400">Payza</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Discord</a>
</div>
<p className="text-xs text-zinc-600 font-normal">© 2024 Payza Inc. All rights reserved.</p>
</div>
</footer>
</div>



    </>
  );
}
