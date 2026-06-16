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



    (function initWebGL() {
        if (typeof THREE === 'undefined') {
            setTimeout(initWebGL, 100);
            return;
        }
        const container = document.getElementById('webgl-container-header');
        if (!container || container.children.length > 0) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x030305, 0.035);

        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 16;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const tubeRadius = 1.1;
        const baseGeometry = new THREE.TorusKnotGeometry(4.0, tubeRadius, 150, 4);
        baseGeometry.computeVertexNormals();
        
        const count = baseGeometry.attributes.position.count;
        const originalPositions = new Float32Array(baseGeometry.attributes.position.array);
        const normals = baseGeometry.attributes.normal.array;
        
        const colors = new Float32Array(count * 3);
        const linePositions = new Float32Array(count * 6);
        const lineColors = new Float32Array(count * 6);
        
        const colorHighlight = new THREE.Color('#00F0FF');
        const colorLight = new THREE.Color('#E0E7FF');
        const colorShadow = new THREE.Color('#020205'); 

        for (let i = 0; i < count; i++) {
            const ix = i * 3;
            const x = originalPositions[ix];
            const y = originalPositions[ix+1];
            const z = originalPositions[ix+2];

            const angle = Math.atan2(y, x);
            const normalizedAngle = (angle + Math.PI) / (Math.PI * 2);

            let vertexColor = colorLight.clone();

            if (normalizedAngle > 0.15 && normalizedAngle < 0.45) {
                vertexColor = colorHighlight.clone();
                const depth = (z + tubeRadius) / (tubeRadius * 2);
                vertexColor.lerp(new THREE.Color('#7928CA'), 1 - depth * 0.7);
            } else {
                const depth = Math.max(0, Math.min(1, (z + tubeRadius) / (tubeRadius * 2)));
                vertexColor.lerp(colorShadow, (1 - depth) * 0.88);
            }

            colors[ix] = vertexColor.r;
            colors[ix+1] = vertexColor.g;
            colors[ix+2] = vertexColor.b;

            const lix = i * 6;
            lineColors[lix] = vertexColor.r;
            lineColors[lix+1] = vertexColor.g;
            lineColors[lix+2] = vertexColor.b;
            
            lineColors[lix+3] = colorShadow.r;
            lineColors[lix+4] = colorShadow.g;
            lineColors[lix+5] = colorShadow.b;
        }

        baseGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.04,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            sizeAttenuation: true
        });
        const particles = new THREE.Points(baseGeometry, particleMaterial);

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

        const lineMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.3
        });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

        const webglGroup = new THREE.Group();
        webglGroup.add(particles);
        webglGroup.add(lines);
        
        webglGroup.rotation.x = Math.PI * 0.1;
        webglGroup.rotation.y = -Math.PI * 0.15;
        scene.add(webglGroup);

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const mouse = new THREE.Vector2(-100, -100);

        window.addEventListener('mousemove', (event) => {
            const rect = container.getBoundingClientRect();
            const containerCenterX = rect.left + rect.width / 2;
            const containerCenterY = rect.top + rect.height / 2;
            
            mouseX = (event.clientX - containerCenterX) * 0.0004;
            mouseY = (event.clientY - containerCenterY) * 0.0004;
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        });

        const clock = new THREE.Clock();
        const raycaster = new THREE.Raycaster();
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const targetMouse3D = new THREE.Vector3();
        const currentMouse3D = new THREE.Vector3(0, 0, 1000);

        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX;
            targetY = mouseY;
            webglGroup.rotation.y += 0.04 * (targetX - webglGroup.rotation.y - Math.PI * 0.15);
            webglGroup.rotation.x += 0.04 * (targetY - webglGroup.rotation.x + Math.PI * 0.1);
            webglGroup.rotation.z = elapsedTime * 0.12;
            webglGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.2;

            raycaster.setFromCamera(mouse, camera);
            if (raycaster.ray.intersectPlane(plane, targetMouse3D)) {
                currentMouse3D.lerp(targetMouse3D, 0.08);
                
                const localMouse = currentMouse3D.clone();
                webglGroup.worldToLocal(localMouse);

                const posArray = baseGeometry.attributes.position.array;
                const linePosArray = lineGeometry.attributes.position.array;
                
                const lx = localMouse.x;
                const ly = localMouse.y;
                const lz = localMouse.z;
                
                const maxDist = 3.0;
                const maxDistSq = maxDist * maxDist;
                const lineLen = 0.5;

                for (let i = 0; i < count; i++) {
                    const ix = i * 3;
                    const ox = originalPositions[ix];
                    const oy = originalPositions[ix+1];
                    const oz = originalPositions[ix+2];

                    const dx = ox - lx;
                    const dy = oy - ly;
                    const dz = oz - lz;
                    const distSq = dx*dx + dy*dy + dz*dz;

                    let nx = ox, ny = oy, nz = oz;

                    if (distSq < maxDistSq && distSq > 0.0001) {
                        const dist = Math.sqrt(distSq);
                        const force = Math.pow((maxDist - dist) / maxDist, 2) * 2.0;
                        const invDist = 1.0 / dist;
                        
                        nx += dx * invDist * force;
                        ny += dy * invDist * force;
                        nz += dz * invDist * force;
                    }

                    posArray[ix] = nx;
                    posArray[ix+1] = ny;
                    posArray[ix+2] = nz;

                    const lix = i * 6;
                    linePosArray[lix] = nx;
                    linePosArray[lix+1] = ny;
                    linePosArray[lix+2] = nz;
                    
                    linePosArray[lix+3] = nx + normals[ix] * lineLen;
                    linePosArray[lix+4] = ny + normals[ix+1] * lineLen;
                    linePosArray[lix+5] = nz + normals[ix+2] * lineLen;
                }
                
                baseGeometry.attributes.position.needsUpdate = true;
                lineGeometry.attributes.position.needsUpdate = true;
            }

            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
            if(!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 opacity-40 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0f0f11 60%)'}}></div>
<div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise"></div>

<header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1200px]">
<nav className="flex overflow-hidden w-full pt-3 pr-6 pb-3 pl-6 relative items-center justify-between">

<div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#0f0f11] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center opacity-50"><div className="w-1 h-px bg-[#27272a] rotate-45"></div></div>
<div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#0f0f11] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center opacity-50"><div className="w-1 h-px bg-[#27272a] rotate-45"></div></div>
<div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#0f0f11] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center opacity-50"><div className="w-1 h-px bg-[#27272a] rotate-45"></div></div>
<div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#0f0f11] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center opacity-50"><div className="w-1 h-px bg-[#27272a] rotate-45"></div></div>
<div className="flex items-center gap-4 relative z-10 pl-2">
<div className="flex flex-col">
<span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-medium">SYS_STATUS</span>
<div className="flex items-center gap-2">
<div className="relative w-2 h-2 rounded-full shadow-[0_0_10px_1px_rgba(6,182,212,0.5)] animate-pulse bg-amber-500"></div>
<span className="font-mono text-xs font-medium text-slate-200 tracking-wide flex items-center gap-1.5">
<iconify-icon className="text-amber-400" icon="solar:stars-linear"></iconify-icon>
                            DREAMSTORY
                        </span>
</div>
</div>
</div>
<div className="hidden md:flex items-center gap-8 bg-[#131315] px-6 py-1.5 rounded border border-[#27272a] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6),0_1px_0_0_rgba(255,255,255,0.05)]">
<a className="uppercase transition-colors hover:text-amber-400 text-xs text-slate-500 tracking-widest font-mono" href="#">Feature</a>
<a className="text-xs font-mono uppercase tracking-widest text-slate-500 transition-colors hover:text-amber-400" href="#">Pricing</a>
<a className="text-xs font-mono uppercase tracking-widest text-slate-500 transition-colors hover:text-amber-400" href="#">Gallery</a>
</div>
<div className="flex items-center gap-4 relative z-10 pr-2">
<a className="text-xs font-mono uppercase tracking-widest text-slate-500 transition-colors hidden sm:block hover:text-amber-400" href="#">Log in</a>
<button className="bg-gradient-to-b border-t shadow-[0_2px_10px_-2px_rgba(6,182,212,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] active:translate-y-[1px] text-white px-5 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 border-amber-400/20">
<iconify-icon className="" icon="solar:bolt-linear" width="16"></iconify-icon>
                    Initialize
                </button>
</div>
</nav>
</header>

<div className="fixed -translate-x-1/2 w-[calc(100%-2rem)] overflow-hidden flex flex-col bg-[#18181b] max-w-[1200px] z-40 border-[#27272a] border rounded-xl top-[120px] bottom-4 left-1/2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_2px_0_rgba(0,0,0,0.5),0_12px_24px_0_rgba(0,0,0,0.8)]">
<div className="flex-1 overflow-y-auto custom-scrollbar relative scroll-smooth w-full flex flex-col h-full">
<div className="flex-none z-10 bg-[#18181b] w-full relative">

<section className="min-h-[50vh] flex flex-col bg-[#131315] border-[#000] border-b relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)]">

<div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px] z-20"></div>
<header className="flex flex-col z-10 text-center border-[#27272a] border-b pt-24 pr-6 pb-24 pl-6 relative items-center justify-center bg-[#030305] overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" id="webgl-container-header"></div>

<div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-amber-500/50"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-amber-500/50"></div>
<div className="flex items-center gap-2 mb-6 bg-[#18181b] px-3 py-1 rounded border border-[#3f3f46] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] relative z-10">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse bg-amber-400"></div>
<span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
            ENGINE v2.0 ACTIVE
        </span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-100 mb-6 max-w-4xl mx-auto leading-tight drop-shadow-md relative z-10">
        Turn imagination into <br className="hidden md:block"/>
<span className="text-amber-400">computational narratives</span>
</h1>
<div className="h-px w-24 bg-gradient-to-r from-transparent to-transparent mt-4 mb-8 relative z-10 via-amber-500/50"></div>
<p className="text-base text-slate-400 mb-10 max-w-2xl mx-auto font-normal leading-relaxed relative z-10">
        Generate deterministic bedtime stories, epic fairy tales, and procedural adventures with neural-rendered illustrations in sub-second latency.
    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="bg-gradient-to-b border-t shadow-[0_2px_10px_-2px_rgba(6,182,212,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] active:translate-y-[1px] text-white px-8 py-3.5 rounded text-xs font-mono uppercase tracking-wider transition-all from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 border-amber-400/20">
            Execute Generation
        </button>
<button className="bg-[#18181b] hover:bg-[#27272a] border border-[#3f3f46] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-slate-200 px-8 py-3.5 rounded text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
            View Telemetry
        </button>
</div>


</header>
</section>

<div className="md:p-10 bg-[#18181b] pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 mb-6">
<span className="px-2 py-0.5 rounded bg-[#27272a] border border-[#3f3f46] text-[10px] font-mono shadow-sm uppercase tracking-wider text-amber-400">
                            SYS_INTERFACE
                        </span>
<div className="h-px flex-1 bg-gradient-to-r from-[#27272a] to-transparent"></div>
</div>
<div className="max-w-6xl mx-auto relative text-left">

<div className="relative z-10 rounded-xl border border-[#27272a] bg-[#09090b] shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_12px_24px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col h-[750px] md:h-[700px]">

<div className="bg-[#131315] border-b border-[#27272a] flex flex-col shrink-0 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_2px] z-0"></div>
<div className="flex items-center px-4 h-11 gap-2 relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mr-4">WORKSPACE_01</span>

<div className="flex-1 flex h-full overflow-x-auto no-scrollbar mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)">
<div className="flex h-full min-w-max items-end px-2 gap-1 pt-2">

<div className="h-full px-4 flex items-center gap-2 bg-[#09090b] border border-[#27272a] border-b-0 rounded-t text-[11px] font-mono min-w-[180px] relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] text-amber-400">
<iconify-icon className="" icon="solar:folder-open-linear" width="14"></iconify-icon>
<span className="truncate">Rabbit_Adventure.md</span>
<iconify-icon className="text-slate-500 cursor-pointer ml-auto hover:text-amber-400" icon="solar:close-circle-linear" width="14"></iconify-icon>
<div className="absolute top-0 left-0 w-full h-[1px] shadow-[0_0_4px_rgba(6,182,212,0.8)] bg-amber-500"></div>
</div>

<div className="h-[calc(100%-4px)] px-4 flex items-center gap-2 bg-[#18181b] border border-[#27272a] border-b-0 rounded-t text-slate-500 hover:text-slate-300 text-[11px] font-mono min-w-[160px] transition-colors cursor-pointer">
<span className="truncate">untitled_hash_9a</span>
<iconify-icon className="ml-auto opacity-50" icon="solar:close-circle-linear" width="14"></iconify-icon>
</div>

<div className="h-[calc(100%-4px)] px-4 flex items-center gap-2 bg-[#18181b] border border-[#27272a] border-b-0 rounded-t text-slate-500 hover:text-slate-300 text-[11px] font-mono min-w-[160px] transition-colors cursor-pointer">
<span className="truncate">Fairy_Dust_v2</span>
<iconify-icon className="ml-auto opacity-50" icon="solar:close-circle-linear" width="14"></iconify-icon>
</div>
<button className="px-2 h-[calc(100%-4px)] text-slate-500 transition-colors flex items-center hover:text-amber-400"><iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon></button>
</div>
</div>
</div>

<div className="py-1 text-center text-[10px] font-mono tracking-widest border-t border-[#27272a] bg-amber-950/30 text-amber-500">
                                    SYSTEM_NOTICE: COMPUTE CREDITS DISCOUNTED FOR BLACK FRIDAY
                                </div>
</div>

<div className="flex flex-1 overflow-hidden relative">

<div className="w-[88px] border-r border-[#27272a] bg-[#131315] flex flex-col items-center py-6 gap-6 shrink-0 z-20 shadow-[inset_-2px_0_8px_rgba(0,0,0,0.5)]">

<div className="flex flex-col items-center gap-1.5 cursor-pointer group w-full relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r shadow-[0_0_8px_rgba(6,182,212,0.8)] bg-amber-500"></div>
<div className="w-10 h-10 rounded border flex items-center justify-center transition-all shadow-[inset_0_2px_4px_rgba(6,182,212,0.1)] border-amber-500/30 bg-amber-950/20 text-amber-400">
<iconify-icon className="" icon="solar:compass-linear" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-amber-400">Explore</span>
</div>

<div className="flex flex-col items-center gap-1.5 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity w-full">
<div className="w-10 h-10 rounded border border-[#3f3f46] bg-[#18181b] flex items-center justify-center text-slate-400 group-hover:border-slate-500 transition-all">
<iconify-icon className="" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest text-center">Memory</span>
</div>
<div className="flex flex-col items-center gap-1.5 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity w-full">
<div className="w-10 h-10 rounded border border-[#3f3f46] bg-[#18181b] flex items-center justify-center text-slate-400 group-hover:border-slate-500 transition-all">
<iconify-icon className="" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Compile</span>
</div>
<div className="flex flex-col items-center gap-1.5 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity mt-auto w-full">
<div className="w-10 h-10 rounded border border-[#3f3f46] bg-[#18181b] flex items-center justify-center text-slate-400 group-hover:border-slate-500 transition-all">
<iconify-icon className="" icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Config</span>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden bg-[#0f0f11] relative">

<div className="h-16 flex items-center justify-between px-8 shrink-0 relative z-20 bg-[#131315]/95 backdrop-blur border-b border-[#27272a]">
<div className="relative w-full max-w-md">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-[#18181b] border border-[#3f3f46] rounded py-1.5 pl-9 pr-9 text-xs font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all focus:border-amber-500/50 focus:ring-amber-500/50" placeholder="QUERY_DATABASE..." type="text"/>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer transition-colors hover:text-amber-400" icon="solar:microphone-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-3 cursor-pointer p-1.5 rounded border border-transparent hover:border-[#27272a] hover:bg-[#18181b] transition-colors">
<div className="w-7 h-7 rounded border border-[#3f3f46] overflow-hidden grayscale mix-blend-luminosity">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="hidden lg:block text-left mr-2">
<div className="text-[10px] font-mono text-slate-300 leading-tight uppercase tracking-wider">OP: J.Maxcel</div>
<div className="text-[9px] font-mono text-amber-500/70">LVL 4 CLEARANCE</div>
</div>
<iconify-icon className="text-slate-500 hidden lg:block" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar pt-8 pr-8 pb-12 pl-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#18181b] p-1 rounded-xl border border-[#27272a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_8px_0_rgba(0,0,0,0.4)] group cursor-pointer h-48 flex flex-col transition-transform hover:-translate-y-0.5">
<div className="h-full bg-[#131315] rounded-lg p-5 border border-white/5 relative overflow-hidden flex flex-col justify-end">
<img alt="Fairy Tale" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-30 group-hover:opacity-60 transition-all duration-700 z-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e651bbc0-187e-4601-ae9a-5bccbe370cb3_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent z-0"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono mb-1 tracking-widest uppercase text-amber-500">GENRE_01</div>
<h3 className="text-xl font-medium text-slate-100 mb-1 tracking-tight">Fairy Tale</h3>
<p className="text-[11px] font-mono text-slate-500 leading-snug">Mythical entities mapped.</p>
</div>
</div>
</div>

<div className="bg-[#18181b] p-1 rounded-xl border border-[#27272a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_8px_0_rgba(0,0,0,0.4)] group cursor-pointer h-48 flex flex-col transition-transform hover:-translate-y-0.5">
<div className="h-full bg-[#131315] rounded-lg p-5 border border-white/5 relative overflow-hidden flex flex-col justify-end">
<img alt="Bedtime" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-20 group-hover:opacity-50 transition-all duration-700 z-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2490a40f-e879-47e0-8a69-d421f1bbc28c_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent z-0"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono text-emerald-500 mb-1 tracking-widest uppercase">GENRE_02</div>
<h3 className="text-xl font-medium text-slate-100 mb-1 tracking-tight">Bedtime Protocol</h3>
<p className="text-[11px] font-mono text-slate-500 leading-snug">Low-frequency ambient narratives.</p>
</div>
</div>
</div>

<div className="bg-[#18181b] p-1 rounded-xl border border-[#27272a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_8px_0_rgba(0,0,0,0.4)] group cursor-pointer h-48 flex flex-col transition-transform hover:-translate-y-0.5">
<div className="h-full bg-[#131315] rounded-lg p-5 border border-white/5 relative overflow-hidden flex flex-col justify-end">
<img alt="Adventure" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-30 group-hover:opacity-60 transition-all duration-700 z-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/790fe54d-cf59-42f9-b91f-033edfb292f0_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent z-0"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono text-amber-500 mb-1 tracking-widest uppercase">GENRE_03</div>
<h3 className="text-xl font-medium text-slate-100 mb-1 tracking-tight">Kinetic Quest</h3>
<p className="text-[11px] font-mono text-slate-500 leading-snug">High-variance discovery logic.</p>
</div>
</div>
</div>
</div>

<div className="mb-4 flex items-center justify-between border-b border-[#27272a] pb-2">
<h2 className="text-sm font-mono uppercase tracking-widest text-slate-300">Active Allocations</h2>
<button className="p-1 text-slate-500 transition-colors hover:text-amber-400">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex gap-4 overflow-x-auto custom-scrollbar pb-6">

<div className="flex bg-[#18181b] rounded-xl overflow-hidden min-w-[360px] max-w-[360px] border border-[#27272a] shrink-0 group hover:border-[#3f3f46] transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)] p-1">
<div className="flex w-full bg-[#131315] rounded-lg overflow-hidden border border-white/5">
<div className="w-[40%] relative overflow-hidden border-r border-[#27272a]">
<img alt="Snowman" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ff85824-809e-450b-8fe9-e423c837ff26_320w.webp"/>
<div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#09090b]/80 border border-[#27272a] text-[8px] font-mono uppercase text-amber-400">IN_PROGRESS</div>
</div>
<div className="w-[60%] p-4 flex flex-col justify-between">
<div className="">
<h4 className="text-sm font-medium text-slate-200 mb-1 leading-snug tracking-tight">Snowman Topology</h4>
<p className="text-[10px] font-mono text-slate-500 line-clamp-3 leading-relaxed">Winter climate variable established. Empathy subroutine initiated for visitor entities.</p>
</div>
<div className="flex items-center justify-between mt-4 border-t border-[#27272a] pt-2">
<button className="text-[10px] font-mono uppercase transition-colors flex items-center gap-1 text-amber-400 hover:text-amber-300">
<iconify-icon className="" icon="solar:play-circle-linear"></iconify-icon> Mount
                                                            </button>
<button className="text-slate-500 hover:text-amber-400 transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="w-[140px] shrink-0 group cursor-pointer relative rounded-xl overflow-hidden border border-[#27272a] shadow-[0_2px_8px_rgba(0,0,0,0.4)] p-1 bg-[#18181b] hover:border-[#3f3f46]">
<div className="w-full h-full rounded-lg overflow-hidden relative border border-white/5">
<img alt="Cover 1" className="w-full h-[180px] object-cover grayscale mix-blend-luminosity opacity-60 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent"></div>
<div className="absolute bottom-3 left-0 w-full px-2 text-center">
<h5 className="text-[11px] font-mono uppercase text-slate-200 tracking-wider">Aquatic_01</h5>
</div>
</div>
</div>
<div className="w-[140px] shrink-0 group cursor-pointer relative rounded-xl overflow-hidden border border-[#27272a] shadow-[0_2px_8px_rgba(0,0,0,0.4)] p-1 bg-[#18181b] hover:border-[#3f3f46]">
<div className="w-full h-full rounded-lg overflow-hidden relative border border-white/5">
<img alt="Cover 2" className="w-full h-[180px] object-cover grayscale mix-blend-luminosity opacity-60 group-hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent"></div>
<div className="absolute bottom-3 left-0 w-full px-2 text-center">
<h5 className="text-[11px] font-mono uppercase text-slate-200 tracking-wider">Forest_Node</h5>
</div>
</div>
</div>
<div className="w-[140px] shrink-0 group cursor-pointer relative rounded-xl overflow-hidden border border-[#27272a] shadow-[0_2px_8px_rgba(0,0,0,0.4)] p-1 bg-[#18181b] hover:border-[#3f3f46]">
<div className="w-full h-full rounded-lg overflow-hidden relative border border-white/5">
<img alt="Cover 3" className="w-full h-[180px] object-cover grayscale mix-blend-luminosity opacity-60 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent"></div>
<div className="absolute bottom-3 left-0 w-full px-2 text-center">
<h5 className="text-[11px] font-mono uppercase text-slate-200 tracking-wider">Future_Sys</h5>
</div>
</div>
</div>
</div>

<div className="mt-8 mb-4 flex items-center justify-between border-b border-[#27272a] pb-2">
<h2 className="text-sm font-mono uppercase tracking-widest text-slate-300">Archived Matrices</h2>
<button className="p-1 text-slate-500 transition-colors hover:text-amber-400">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex gap-4 overflow-x-auto custom-scrollbar pb-8">

<div className="flex bg-[#18181b] rounded-xl overflow-hidden min-w-[340px] max-w-[340px] border border-[#27272a] shrink-0 group hover:border-[#3f3f46] transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)] p-1 relative">
<div className="flex w-full bg-[#131315] rounded-lg overflow-hidden border border-white/5 relative z-10">
<div className="w-1/3 relative overflow-hidden border-r border-[#27272a]">
<img alt="Little Prince" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/eab5f70a-a33a-42e8-97c8-c6bb2e493f73/320w.png"/>
</div>
<div className="w-2/3 p-4 flex flex-col justify-between bg-[#131315]">
<div className="">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-slate-200 tracking-tight">Stellar Prince</h4>
<span className="text-[8px] font-mono text-slate-600 border border-[#3f3f46] rounded px-1">COMPRESSED</span>
</div>
<p className="text-[10px] font-mono text-slate-500 line-clamp-2 leading-relaxed">Interplanetary traversal logs of juvenile entity.</p>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#27272a]">
<span className="text-[9px] font-mono text-slate-600">SIZE: 1.2MB</span>
<button className="text-slate-500 transition-colors hover:text-amber-400">
<iconify-icon icon="solar:download-square-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="flex bg-[#18181b] rounded-xl overflow-hidden min-w-[340px] max-w-[340px] border border-[#27272a] shrink-0 group hover:border-[#3f3f46] transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)] p-1 relative">
<div className="flex w-full bg-[#131315] rounded-lg overflow-hidden border border-white/5 relative z-10">
<div className="w-1/3 relative overflow-hidden border-r border-[#27272a]">
<img alt="Bedtime" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4129cc10-dd73-46c7-bb3d-cfbca2a1fad5_320w.webp"/>
</div>
<div className="w-2/3 p-4 flex flex-col justify-between bg-[#131315]">
<div className="">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-slate-200 tracking-tight">Sleep Cycle</h4>
<span className="text-[8px] font-mono text-slate-600 border border-[#3f3f46] rounded px-1">COMPRESSED</span>
</div>
<p className="text-[10px] font-mono text-slate-500 line-clamp-2 leading-relaxed">Algorithms for inducing restorative rest phases.</p>
</div>
<div className="flex items-center justify-between mt-3 pt-2 border-t border-[#27272a]">
<span className="text-[9px] font-mono text-slate-600">SIZE: 840KB</span>
<button className="text-slate-500 transition-colors hover:text-amber-400">
<iconify-icon icon="solar:download-square-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="md:px-10 bg-[#131315] border-[#000] border-t pt-20 pr-6 pb-20 pl-6">
<div className="mb-12 flex flex-col items-center text-center border-b border-[#27272a] pb-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded bg-[#27272a] border border-[#3f3f46] text-[10px] font-mono shadow-sm uppercase tracking-wider text-amber-400">
                                AI_AUTHOR_SYSTEM
                            </span>
</div>
<h2 className="text-2xl md:text-3xl font-normal text-slate-100 tracking-tight">Intelligent Book Generation</h2>
<p className="text-sm text-slate-500 max-w-lg mx-auto mt-2 leading-relaxed font-mono">Powerful neural modules designed to draft, illustrate, and publish complete books.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="group relative bg-[#18181b] rounded-xl border border-[#27272a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_8px_0_rgba(0,0,0,0.4)] p-1 flex flex-col hover:-translate-y-0.5 transition-transform">
<div className="h-full bg-gradient-to-b from-[#202023] to-[#18181b] rounded-lg p-6 flex flex-col border border-white/5 relative overflow-hidden">
<div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#0f0f11] flex items-center justify-center opacity-50"><div className="w-1 h-px bg-[#27272a] rotate-45"></div></div>
<div className="w-10 h-10 rounded bg-[#131315] border border-[#3f3f46] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 text-amber-400">
<svg className="lucide lucide-brain" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path></svg>
</div>
<h3 className="text-base font-normal text-slate-200 mb-3 tracking-tight">Narrative Synthesis</h3>
<p className="text-[11px] font-mono text-slate-500 leading-relaxed">Instantly generate compelling plots, rich character arcs, and full-length chapters using fine-tuned transformer models.</p>
<div className="mt-auto pt-4 flex justify-between items-center text-[9px] font-mono text-slate-600 border-t border-[#27272a] mt-6">
<span className="">MOD_DRAFTING</span>
<svg className="lucide lucide-check-circle text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
</div>

<div className="group relative bg-[#18181b] rounded-xl border border-[#27272a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_8px_0_rgba(0,0,0,0.4)] p-1 flex flex-col hover:-translate-y-0.5 transition-transform">
<div className="h-full bg-gradient-to-b from-[#202023] to-[#18181b] rounded-lg p-6 flex flex-col border border-white/5 relative overflow-hidden">
<div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#0f0f11] flex items-center justify-center opacity-50"><div className="w-1 h-px bg-[#27272a] rotate-45"></div></div>
<div className="w-10 h-10 rounded bg-[#131315] border border-[#3f3f46] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 text-amber-400">
<svg className="lucide lucide-image" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<h3 className="text-base font-normal text-slate-200 mb-3 tracking-tight">Automated Illustration</h3>
<p className="text-[11px] font-mono text-slate-500 leading-relaxed">Create stunning, style-consistent illustrations that automatically synchronize with your story's characters and environments.</p>
<div className="mt-auto pt-4 flex justify-between items-center text-[9px] font-mono text-slate-600 border-t border-[#27272a] mt-6">
<span>MOD_ART_GEN</span>
<svg className="lucide lucide-check-circle text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
</div>

<div className="group relative bg-[#18181b] rounded-xl border border-[#27272a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_8px_0_rgba(0,0,0,0.4)] p-1 flex flex-col hover:-translate-y-0.5 transition-transform">
<div className="h-full bg-gradient-to-b from-[#202023] to-[#18181b] rounded-lg p-6 flex flex-col border border-white/5 relative overflow-hidden">
<div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#0f0f11] flex items-center justify-center opacity-50"><div className="w-1 h-px bg-[#27272a] rotate-45"></div></div>
<div className="w-10 h-10 rounded bg-[#131315] border border-[#3f3f46] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.6)] flex items-center justify-center mb-6 text-amber-400">
<svg className="lucide lucide-book-open-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"></path><path d="m16 12 2 2 4-4"></path><path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"></path></svg>
</div>
<h3 className="text-base font-normal text-slate-200 mb-3 tracking-tight">Dynamic Formatting</h3>
<p className="text-[11px] font-mono text-slate-500 leading-relaxed">Export print-ready manuscripts instantly. Automatically format typography, margins, and chapters for EPUB and PDF.</p>
<div className="mt-auto pt-4 flex justify-between items-center text-[9px] font-mono text-slate-600 border-t border-[#27272a] mt-6">
<span className="">MOD_PUBLISH</span>
<svg className="lucide lucide-check-circle text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
</div>
</div>
</section><section className="flex flex-col lg:py-32 overflow-hidden text-neutral-200 font-sans bg-[#050505] w-full z-10 border-[#111] border-t pt-24 pr-4 pb-24 pl-4 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 50% -10%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)'}}></div>
<div className="absolute inset-0 pointer-events-none z-0 opacity-30" style={{background: 'linear-gradient(180deg, transparent 20%, rgba(255, 255, 255, 0.01) 50%, transparent 80%)'}}></div>

<div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'}}></div>

<div className="absolute top-1/4 left-0 w-full flex items-center justify-center pointer-events-none z-0 select-none">
<h1 className="text-[11vw] sm:text-[14vw] leading-[0.85] tracking-tighter font-normal text-center flex flex-wrap justify-center gap-x-4 sm:gap-x-6 opacity-10 text-[#e5e5e5]" style={{textShadow: '0 0 60px rgba(255, 255, 255, 0.1)'}}>
<span>NOVEL</span>
<span className="text-[#737373]">ENGINE</span>
</h1>
</div>

<div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-8 w-full max-w-7xl relative z-10">

<div className="group relative perspective-normal z-10 hover:z-50 cursor-pointer">
<div className="sm:w-[320px] sm:h-[600px] transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-x-5 group-hover:-rotate-y-5 group-hover:scale-[1.02] w-[300px] h-[580px] rounded-[2rem] pt-[1px] pr-[1px] pb-[1px] pl-[1px] shadow-2xl group-hover:shadow-[0_0_60px_-15px_rgba(6,182,212,0.4)]" style={{background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.2) 0%, rgba(255,255,255,0.03) 100%)'}}>
<div className="overflow-hidden flex flex-col bg-neutral-950/90 w-full h-full border-white/5 border group-hover:border-cyan-500/30 transition-colors duration-700 rounded-[calc(2rem-1px)] relative backdrop-blur-md">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none bg-amber-500/5 group-hover:bg-amber-500/20 group-hover:scale-150 transition-all duration-1000"></div>

<div className="flex justify-between items-center px-6 py-5 border-b border-white/5 group-hover:border-cyan-500/20 transition-colors duration-700 font-mono text-xs uppercase tracking-widest text-neutral-500">
<span className="group-hover:text-cyan-500/70 transition-colors duration-700">CH-01</span>
<div className="flex gap-2 items-center text-amber-500/70">
<svg className="lucide lucide-arrow-right-left group-hover:animate-pulse" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
<span>Reading</span>
</div>
</div>

<div className="flex-1 flex flex-col text-center pt-10 pr-6 pl-6 items-center">
<h2 className="text-xl sm:text-2xl tracking-tight font-normal text-white mb-3 group-hover:text-cyan-400 transition-colors duration-700">Context Parsing</h2>
<p className="text-[13px] text-neutral-400 max-w-[200px] leading-relaxed group-hover:text-neutral-300 transition-colors duration-700">Analyzing character arcs, tone, and world-building constraints.</p>

<div className="relative w-full aspect-square mt-10 flex items-center justify-center">

<div className="absolute inset-8 border rounded-full border-dashed border-amber-500/10 group-hover:border-cyan-500/30 transition-colors duration-700" style={{animation: 'spin 40s linear infinite'}}></div>
<div className="absolute inset-14 border rounded-full border-amber-500/20 group-hover:border-cyan-500/40 transition-colors duration-700"></div>
<div className="absolute inset-20 border rounded-full border-dashed border-amber-500/10 group-hover:border-cyan-500/20 transition-colors duration-700" style={{animation: 'spin 25s linear infinite reverse'}}></div>

<div className="relative z-10 w-12 h-12 bg-neutral-900 border rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)] border-amber-500/30 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/50">
<svg className="lucide lucide-book-open text-amber-400 group-hover:text-cyan-400 transition-colors duration-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path className="" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>

<div className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse bg-amber-400 group-hover:bg-cyan-400 transition-colors duration-700"></div>
<div className="absolute bottom-[25%] right-[20%] w-1.5 h-1.5 rounded-full bg-amber-500/60 group-hover:bg-cyan-500/60 transition-colors duration-700 group-hover:scale-150"></div>
<div className="absolute top-[40%] right-[15%] w-2 h-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse bg-amber-400 group-hover:bg-cyan-400 transition-colors duration-700" style={{animationDelay: '1s'}}></div>
</div>
</div>

<div className="p-6">
<div className="w-full py-3 px-4 rounded-xl border flex justify-between items-center font-mono text-xs border-amber-500/10 bg-amber-500/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-700 relative overflow-hidden">
<div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-in-out"></div>
<span className="text-neutral-500 group-hover:text-neutral-300 transition-colors duration-700 relative z-10">TOKEN_RATE</span>
<span className="font-normal text-amber-400 group-hover:text-cyan-400 transition-colors duration-700 flex items-center gap-2 relative z-10">
                                8.4K/s
                                <svg className="lucide lucide-activity opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative group xl:-translate-y-6 z-20 perspective-normal">
<div className="p-[1px] rounded-[2rem] w-[310px] h-[600px] sm:w-[340px] sm:h-[620px] shadow-[0_0_60px_rgba(99,102,241,0.08)] transition-transform duration-500 hover:-translate-y-2" style={{background: 'linear-gradient(180deg, rgba(168, 168, 255, 0.3) 0%, rgba(255,255,255,0.05) 100%)'}}>
<div className="w-full h-full bg-[#0a0a0c] rounded-[calc(2rem-1px)] relative overflow-hidden flex flex-col border border-white/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

<div className="flex justify-between items-center px-6 py-5 border-b border-white/5 font-mono text-xs uppercase tracking-widest text-neutral-500">
<span>LLM-CORE</span>
<div className="flex gap-2 items-center text-indigo-400">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse"></div>
<span className="">Drafting</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center pt-10 px-6 text-center">
<h2 className="text-xl sm:text-2xl tracking-tight font-normal text-white mb-3">Narrative Synthesis</h2>
<p className="text-[13px] text-neutral-400 max-w-[220px] leading-relaxed">Deep neural rendering of plot structures and chapter generation.</p>

<div className="relative w-full aspect-square mt-10 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full opacity-40" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M 100 20 L 100 60 M 100 140 L 100 180 M 40 100 L 70 100 M 130 100 L 160 100" fill="none" stroke="#818cf8" stroke-dasharray="4 4" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="20s" linear="" repeatcount="indefinite" values="0;-100"></animate>
</path>
<path d="M 50 50 L 80 80 M 150 50 L 120 80 M 50 150 L 80 120 M 150 150 L 120 120" fill="none" stroke="#818cf8" strokeWidth="1"></path>
</svg>

<div className="relative z-10 w-24 h-24 bg-neutral-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.15)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
<div className="w-12 h-12 bg-neutral-950 border border-indigo-500/40 rounded-xl flex items-center justify-center shadow-inner relative z-10">
<svg className="lucide lucide-sparkles text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
</div>
</div>

<svg className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-40" height="40" viewbox="0 0 60 40" width="60" xmlns="http://www.w3.org/2000/svg">
<rect fill="#6366f1" height="10" rx="3" width="6" x="0" y="30">
<animate attributename="y" begin="0.1s" dur="1s" repeatcount="indefinite" values="30;0;30"></animate>
<animate attributename="height" begin="0.1s" dur="1s" repeatcount="indefinite" values="10;40;10"></animate>
</rect>
<rect fill="#6366f1" height="10" rx="3" width="6" x="12" y="30">
<animate attributename="y" begin="0.3s" dur="1s" repeatcount="indefinite" values="30;0;30"></animate>
<animate attributename="height" begin="0.3s" dur="1s" repeatcount="indefinite" values="10;40;10"></animate>
</rect>
<rect className="" fill="#6366f1" height="10" rx="3" width="6" x="24" y="30">
<animate attributename="y" begin="0.2s" dur="1s" repeatcount="indefinite" values="30;0;30"></animate>
<animate attributename="height" begin="0.2s" dur="1s" repeatcount="indefinite" values="10;40;10"></animate>
</rect>
<rect fill="#6366f1" height="10" rx="3" width="6" x="36" y="30">
<animate attributename="y" begin="0.4s" dur="1s" repeatcount="indefinite" values="30;0;30"></animate>
<animate attributename="height" begin="0.4s" dur="1s" repeatcount="indefinite" values="10;40;10"></animate>
</rect>
<rect className="" fill="#6366f1" height="10" rx="3" width="6" x="48" y="30">
<animate attributename="y" begin="0.1s" dur="1s" repeatcount="indefinite" values="30;0;30"></animate>
<animate attributename="height" begin="0.1s" dur="1s" repeatcount="indefinite" values="10;40;10"></animate>
</rect>
</svg>
</div>
</div>

<div className="p-6">
<button className="w-full py-3.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono uppercase tracking-widest font-normal flex items-center justify-center gap-2 hover:bg-indigo-500/20 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                            Review Manuscript
                            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="group relative perspective-normal z-10 hover:z-50 cursor-pointer">
<div className="sm:w-[320px] sm:h-[600px] transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-x-5 group-hover:-rotate-y-5 group-hover:scale-[1.02] w-[300px] h-[580px] rounded-[2rem] pt-[1px] pr-[1px] pb-[1px] pl-[1px] shadow-2xl group-hover:shadow-[0_0_60px_-15px_rgba(234,179,8,0.4)]" style={{background: 'linear-gradient(180deg, rgba(234, 179, 8, 0.3) 0%, rgba(255,255,255,0.03) 100%)'}}>
<div className="overflow-hidden flex flex-col bg-neutral-950/90 w-full h-full border-white/5 border group-hover:border-yellow-500/30 transition-colors duration-700 rounded-[calc(2rem-1px)] relative backdrop-blur-md">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none bg-yellow-500/5 group-hover:bg-yellow-500/20 group-hover:scale-150 transition-all duration-1000"></div>

<div className="flex justify-between items-center px-6 py-5 border-b border-white/5 group-hover:border-yellow-500/20 transition-colors duration-700 font-mono text-xs uppercase tracking-widest text-neutral-500">
<span className="group-hover:text-yellow-500/70 transition-colors duration-700">LIB-VOL</span>
<div className="flex gap-2 items-center text-yellow-500/70">
<svg className="lucide lucide-library group-hover:animate-pulse" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
<span>Archived</span>
</div>
</div>

<div className="flex-1 flex flex-col text-center pt-10 pr-6 pl-6 items-center">
<h2 className="text-xl sm:text-2xl tracking-tight font-normal text-white mb-3 group-hover:text-yellow-400 transition-colors duration-700">Volume Binding</h2>
<p className="text-[13px] text-neutral-400 max-w-[200px] leading-relaxed group-hover:text-neutral-300 transition-colors duration-700">Finalizing typography and compiling immutable EPUB/PDF layers.</p>

<div className="relative w-full flex-1 mt-10 flex items-center justify-center perspective-normal">

<div className="absolute w-48 h-16 rounded-lg bg-neutral-900 border -translate-y-16 scale-90 opacity-40 flex items-center px-4 transition-all duration-700 group-hover:-translate-y-24 group-hover:scale-95 group-hover:opacity-50 group-hover:border-yellow-500/30 border-yellow-500/10">
<div className="w-2 h-2 rounded-full bg-yellow-500/30 group-hover:bg-yellow-500/80 group-hover:shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-all duration-700"></div>
</div>

<div className="absolute w-48 h-16 rounded-lg bg-neutral-900 border -translate-y-8 scale-95 opacity-60 flex items-center px-4 transition-all duration-700 group-hover:-translate-y-14 group-hover:scale-100 group-hover:opacity-80 group-hover:border-yellow-500/40 border-yellow-500/20">
<div className="w-2 h-2 rounded-full bg-yellow-500/50 group-hover:bg-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.8)] transition-all duration-700"></div>
</div>

<div className="relative z-10 w-52 h-24 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden border bg-neutral-900 flex flex-col justify-between p-4 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_30px_60px_rgba(234,179,8,0.25)] group-hover:border-yellow-400/50 border-yellow-500/30">
<div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700" style={{backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(234,179,8,0.2) 50%)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 flex justify-between items-center w-full">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.8)] animate-pulse bg-yellow-400"></div>
<span className="text-xs font-mono text-white/80 group-hover:text-white transition-colors duration-700">TALE-884-912</span>
</div>
<svg className="lucide lucide-lock text-yellow-500/60 group-hover:text-yellow-400 transition-colors duration-700" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="relative z-10 flex justify-between items-end w-full font-mono text-[10px] text-neutral-500 group-hover:text-neutral-400 transition-colors duration-700">
<div className="text-left">
<div className="mb-0.5 uppercase tracking-wider">Word Count</div>
<div className="text-xs text-yellow-100/90 group-hover:text-white transition-colors duration-700">142,850</div>
</div>
<div className="text-right">
<div className="mb-0.5 uppercase tracking-wider">Format</div>
<div className="text-xs text-yellow-100/90 group-hover:text-white transition-colors duration-700">EPUB3</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-6">
<div className="w-full py-3 px-4 rounded-xl border flex justify-between items-center font-mono text-xs border-yellow-500/10 bg-yellow-500/5 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-700 relative overflow-hidden">
<div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-in-out"></div>
<span className="text-neutral-500 group-hover:text-neutral-400 transition-colors duration-700 relative z-10">TYPESETTING</span>
<span className="font-normal text-yellow-400 flex items-center gap-2 relative z-10">
                        COMPLETE
                        <svg className="lucide lucide-check opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 mt-16 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs text-neutral-600 border border-white/5 bg-[#0a0a0c]/60 backdrop-blur-md rounded-xl shadow-lg">
<div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
<span className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-book" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                ENGINE_READY
            </span>
<span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span className="uppercase tracking-widest text-[10px]">Outline</span>
<span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span className="uppercase tracking-widest text-[10px]">Draft</span>
<span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span className="uppercase tracking-widest text-[10px]">Format</span>
</div>
<div className="tracking-widest uppercase text-[10px] opacity-60">
            Build: <span className="text-neutral-400">NOVEL-AI-v4</span>
</div>
</div>
</section><section className="md:px-10 bg-[#131315] border-[#000] border-t pt-20 pr-6 pb-20 pl-6">

<div className="w-full max-w-7xl relative mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-[#3f3f46] via-[#18181b] to-[#000] shadow-[0_0_80px_rgba(0,0,0,0.8)]">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#27272a] rounded-[23px] overflow-hidden relative z-10">

<div className="md:col-span-2 lg:col-span-2 md:row-span-2 bg-[#09090b] p-8 lg:p-14 flex flex-col justify-between relative group hover:bg-[#131315] transition-colors duration-700 overflow-hidden min-h-[400px]">

<svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-20 mix-blend-screen" preserveaspectratio="none" xmlns="http://www.w3.org/2000/svg">
<path d="M -50,50 L 100,50 L 150,150 L 350,150 L 400,250 L 800,250" fill="none" stroke="#f59e0b" stroke-dasharray="150 850" stroke-dashoffset="1000" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="8s" linear="" repeatcount="indefinite" values="1000;0"></animate>
</path>
<path d="M 800,300 L 600,300 L 550,200 L 200,200 L 150,300 L -50,300" fill="none" stroke="#3f3f46" stroke-dasharray="100 900" stroke-dashoffset="-1000" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="12s" linear="" repeatcount="indefinite" values="-1000;0"></animate>
</path>
</svg>
<header className="flex items-center justify-between font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-16 relative z-10">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)] animate-pulse"></div>
<span className="text-amber-400">BOOK_GENERATOR // Active</span>
</div>
<span className="">Vol 4.0</span>
</header>
<div className="relative z-10 mt-auto">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-100 mb-6 leading-[1.1]">
                        Authorship <br/>Automated
                    </h2>
<p className="font-mono text-[11px] text-slate-400 max-w-sm leading-relaxed tracking-wide">
                        Advanced neural models designed to weave intricate plots, develop dynamic characters, and format print-ready manuscripts instantly.
                    </p>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 md:row-span-2 bg-[#09090b] relative overflow-hidden min-h-[350px] lg:min-h-[400px] flex flex-col group p-[1px]" style={{boxShadow: 'inset 0 0 100px rgba(0,0,0,0.95)'}}>

<div className="absolute inset-[1px] z-10 pointer-events-none rounded-2xl transition-opacity duration-700" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(255,255,255,0.02) 100%)'}}>
</div>
<img alt="Abstract Environment" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-transform duration-1000 group-hover:scale-105 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c22e979-2bb3-48d4-ac00-3b5c0e0c38e4_1600w.jpg"/>

<div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#3f3f46] z-10 opacity-70"></div>
<div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-[#3f3f46] z-10 opacity-70"></div>
<div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-[#3f3f46] z-10 opacity-70"></div>
<div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#3f3f46] z-10 opacity-70"></div>
<div className="absolute bottom-6 right-6 z-10 text-right font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                    Narrative Arc Engine<br/>
<span className="text-amber-500/80">Status: Plotting</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="100%" opacity="0.4" stroke="url(#border-gradient)" stroke-dasharray="200 1800" stroke-dashoffset="0" strokeWidth="1.5" width="100%" x="0" y="0">
<animate attributename="stroke-dashoffset" dur="12s" linear="" repeatcount="indefinite" values="2000; 0"></animate>
</rect>
<defs>
<lineargradient id="border-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f59e0b"></stop>
<stop offset="50%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#3b82f6"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="bg-[#09090b] p-6 lg:p-8 flex flex-col justify-between group hover:bg-[#131315] transition-colors duration-500 relative overflow-hidden min-h-[160px]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Chap_01</span>
<svg className="text-slate-600 group-hover:text-amber-400 transition-colors duration-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<div className="group-hover:-translate-y-1 transition-transform duration-500 relative z-10">
<h3 className="text-sm font-medium text-slate-200 mb-2 tracking-tight">Plot Generation</h3>
<p className="text-[11px] font-mono text-slate-500 leading-relaxed">Instantly draft compelling story arcs.</p>
</div>
</div>

<div className="bg-[#09090b] p-6 lg:p-8 flex flex-col justify-between group hover:bg-[#131315] transition-colors duration-500 relative overflow-hidden min-h-[160px]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Chap_02</span>
<svg className="text-slate-600 group-hover:text-amber-400 transition-colors duration-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="group-hover:-translate-y-1 transition-transform duration-500 relative z-10">
<h3 className="text-sm font-medium text-slate-200 mb-2 tracking-tight">Character Dev</h3>
<p className="text-[11px] font-mono text-slate-500 leading-relaxed">Create deep, consistent personas.</p>
</div>
</div>

<div className="bg-[#09090b] p-6 lg:p-8 flex flex-col justify-between group hover:bg-[#131315] transition-colors duration-500 relative overflow-hidden min-h-[160px]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Chap_03</span>
<svg className="text-slate-600 group-hover:text-amber-400 transition-colors duration-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
</div>
<div className="group-hover:-translate-y-1 transition-transform duration-500 relative z-10">
<h3 className="text-sm font-medium text-slate-200 mb-2 tracking-tight">World Building</h3>
<p className="text-[11px] font-mono text-slate-500 leading-relaxed">Establish immersive settings.</p>
</div>
</div>

<div className="bg-[#09090b] p-6 lg:p-8 flex flex-col justify-between group hover:bg-[#131315] transition-colors duration-500 relative overflow-hidden min-h-[160px]">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Chap_04</span>
<svg className="text-slate-600 group-hover:text-amber-400 transition-colors duration-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect height="8" width="12" x="6" y="14"></rect></svg>
</div>
<div className="group-hover:-translate-y-1 transition-transform duration-500 relative z-10">
<h3 className="text-sm font-medium text-slate-200 mb-2 tracking-tight">Export &amp; Publish</h3>
<p className="text-[11px] font-mono text-slate-500 leading-relaxed">Format for EPUB, PDF &amp; Print.</p>
</div>
</div>
</div>
</div>
</section><section className="py-24 md:py-32 bg-[#050505] w-full border-t border-white/5 relative flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 font-sans">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-zinc-900/20 blur-[120px] rounded-full opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[150px] rounded-full opacity-50"></div>
</div>
<div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center">

<div className="flex flex-col items-center text-center mb-16 md:mb-20">
<div className="flex items-center gap-2 mb-6 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"></div>
<span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">SYS_FAQ // Parameters</span>
</div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-6 max-w-2xl leading-[1.1]">
                System Queries &amp; Specifications
            </h2>
<p className="text-sm text-zinc-500 max-w-lg font-normal leading-relaxed">
                Detailed technical and operational parameters regarding narrative rights, generation architecture, and intellectual property protection.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">

<div className="bg-[#0a0a0c] border border-white/5 rounded-[20px] p-8 hover:bg-[#0c0c0e] hover:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-colors duration-500 shadow-inner">
<svg className="lucide lucide-shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">Who owns the copyright?</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-1">
                    You retain 100% commercial rights and full copyright to any manuscript generated using the Pro or Publisher tiers. Your creative intellectual property remains entirely yours.
                </p>
</div>

<div className="bg-[#0a0a0c] border border-white/5 rounded-[20px] p-8 hover:bg-[#0c0c0e] hover:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors duration-500 shadow-inner">
<svg className="lucide lucide-lock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">Is my data used for training?</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-1">
                    Never. We enforce a strict zero-retention policy on our production nodes. Your input prompts and generated manuscripts are encrypted at rest and explicitly omitted from all future model training datasets.
                </p>
</div>

<div className="bg-[#0a0a0c] border border-white/5 rounded-[20px] p-8 hover:bg-[#0c0c0e] hover:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors duration-500 shadow-inner">
<svg className="lucide lucide-cpu" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">Which models power the engine?</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-1">
                    Our pipeline utilizes a proprietary Mixture of Experts (MoE) architecture. We integrate fine-tuned transformer instances for long-context narrative cohesion and specialized diffusers for high-fidelity cover art.
                </p>
</div>

<div className="bg-[#0a0a0c] border border-white/5 rounded-[20px] p-8 hover:bg-[#0c0c0e] hover:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors duration-500 shadow-inner">
<svg className="lucide lucide-file-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">Can I export to Amazon KDP?</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-1">
                    Yes. The publishing module compiles your manuscript into validated EPUB3 and print-ready PDF formats, explicitly formatted to meet strict Kindle Direct Publishing and IngramSpark specifications.
                </p>
</div>

<div className="bg-[#0a0a0c] border border-white/5 rounded-[20px] p-8 hover:bg-[#0c0c0e] hover:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors duration-500 shadow-inner">
<svg className="lucide lucide-infinity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">How does unlimited generation work?</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-1">
                    Pro users have unbounded generation capabilities subject to our fair usage threshold. Compute priority is dynamically allocated based on active cluster load to ensure stable sub-second latency for all authors.
                </p>
</div>

<div className="bg-[#0a0a0c] border border-white/5 rounded-[20px] p-8 hover:bg-[#0c0c0e] hover:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/30 transition-colors duration-500 shadow-inner">
<svg className="lucide lucide-history" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-200 mb-3 group-hover:text-white transition-colors">Does the AI maintain character memory?</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed flex-1">
                    Yes. Our persistent vector database stores your story bible, ensuring character traits, settings, and narrative rules remain highly consistent across chapters, even in 100,000+ word epics.
                </p>
</div>
</div>

<div className="mt-16 flex items-center gap-4 border-t border-white/5 pt-8 w-full justify-center">
<span className="text-sm text-zinc-500 font-normal">Need detailed API documentation?</span>
<a className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 group" href="#">
                View the Docs
                <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section><section className="md:py-24 flex md:p-12 overflow-x-hidden text-zinc-100 bg-[#050505] w-full pt-12 pr-4 pb-12 pl-4 items-center justify-center" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

<div className="text-center mb-16 relative w-full flex flex-col items-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-8 text-white max-w-4xl mx-auto leading-[1.1]">
                Next-generation engine for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">AI publishing</span>
</h1>

<div className="inline-flex items-center p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm relative">
<button className="px-6 py-2 rounded-full text-xs font-medium tracking-wide text-zinc-100 bg-white/10 shadow-sm transition-all duration-300 border border-white/5">
                    MONTHLY
                </button>
<button className="px-6 py-2 rounded-full text-xs font-normal tracking-wide text-zinc-400 hover:text-zinc-200 transition-colors duration-300">
                    ANNUALLY
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch relative z-10">

<div className="relative group p-[1px] rounded-[24px] bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500 h-full flex shadow-2xl mt-6 md:mt-0">
<div className="relative h-full w-full bg-[#0a0a0a] rounded-[23px] p-8 md:p-10 flex flex-col items-start z-10 overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/20 blur-3xl rounded-full pointer-events-none group-hover:bg-zinc-700/30 transition-colors"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-white/20 transition-colors shadow-inner text-zinc-400 group-hover:text-zinc-300">
<svg className="lucide lucide-book-open" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<span className="text-zinc-300 text-sm font-medium tracking-wide">Novelist Base</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl font-normal tracking-tight text-white">$19</span>
<span className="text-sm text-zinc-500 font-normal">/ mo</span>
</div>
<p className="text-sm text-zinc-400 mb-8 font-normal">Ideal for short stories &amp; drafting</p>
<div className="w-full h-px mb-8 bg-gradient-to-r from-white/10 to-transparent"></div>
<ul className="flex flex-col gap-4 w-full text-left mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Up to 50,000 words per month
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Basic genre templates
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Standard AI drafting engine
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Export to PDF &amp; TXT
                        </li>
</ul>
<button className="w-full py-3 rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-medium tracking-wide text-zinc-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white">
                        START WRITING
                    </button>
</div>
</div>

<div className="relative group p-[1px] rounded-[24px] bg-gradient-to-b from-amber-500/50 via-amber-500/10 to-transparent hover:from-amber-400/60 transition-all duration-500 h-full flex md:-mt-4 md:-mb-4 shadow-[0_0_40px_rgba(245,158,11,0.15)] z-20">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 rounded-full flex items-center shadow-[0_0_20px_rgba(245,158,11,0.4)] z-30">
<span className="text-[10px] text-white font-medium tracking-widest uppercase">Recommended Tier</span>
</div>
<div className="relative h-full w-full bg-[#0a0a0f] rounded-[23px] p-8 md:p-10 flex flex-col items-start z-10 overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/15 blur-3xl rounded-full pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-700"></div>
<div className="flex items-center gap-3 mb-6 relative">
<div className="w-10 h-10 rounded-xl flex items-center justify-center border border-amber-500/30 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.1)] text-amber-400">
<svg className="lucide lucide-sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
</div>
<span className="text-amber-300 text-sm font-medium tracking-wide">Pro Author</span>
</div>
<div className="flex items-baseline gap-1 mb-2 relative">
<span className="text-5xl font-normal tracking-tight text-white drop-shadow-md">$79</span>
<span className="text-sm text-amber-200/50 font-normal">/ mo</span>
</div>
<p className="text-sm text-amber-200/60 mb-8 font-normal relative">Optimized for full-length novels</p>
<div className="w-full h-px mb-8 bg-gradient-to-r from-amber-500/30 to-transparent relative"></div>
<ul className="flex flex-col gap-4 w-full text-left mb-10 flex-1 relative z-10">
<li className="flex items-start gap-3 text-sm text-white font-normal">
<div className="mt-0.5 text-amber-400 shrink-0">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Everything in Novelist Base
                        </li>
<li className="flex items-start gap-3 text-sm text-white font-normal">
<div className="mt-0.5 text-amber-400 shrink-0">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Unlimited word generation
                        </li>
<li className="flex items-start gap-3 text-sm text-white font-normal">
<div className="mt-0.5 text-amber-400 shrink-0">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Advanced narrative consistency
                        </li>
<li className="flex items-start gap-3 text-sm text-white font-normal">
<div className="mt-0.5 text-amber-400 shrink-0">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            EPUB &amp; Print-ready formatting
                        </li>
</ul>
<button className="w-full py-3 rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-medium tracking-wide text-[#050505] bg-white hover:bg-zinc-200">
                        START PRO TRIAL
                    </button>
</div>
</div>

<div className="relative group p-[1px] rounded-[24px] bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500 h-full flex mt-6 md:mt-0 shadow-2xl">
<div className="relative h-full w-full bg-[#0a0a0a] rounded-[23px] p-8 md:p-10 flex flex-col items-start z-10 overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/20 blur-3xl rounded-full pointer-events-none group-hover:bg-zinc-700/30 transition-colors"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-white/20 transition-colors shadow-inner text-zinc-400 group-hover:text-zinc-300">
<svg className="lucide lucide-library" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
</div>
<span className="text-zinc-300 text-sm font-medium tracking-wide">Publisher Suite</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl font-normal tracking-tight text-white">$299</span>
<span className="text-sm text-zinc-500 font-normal">/ mo</span>
</div>
<p className="text-sm text-zinc-400 mb-8 font-normal">For publishing houses &amp; agencies</p>
<div className="w-full h-px mb-8 bg-gradient-to-r from-white/10 to-transparent"></div>
<ul className="flex flex-col gap-4 w-full text-left mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Everything in Pro Author
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Custom model fine-tuning
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            Automated cover illustrations
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
<div className="mt-0.5 text-zinc-500 shrink-0 group-hover:text-zinc-400 transition-colors">
<svg className="lucide lucide-check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
                            API access &amp; bulk generation
                        </li>
</ul>
<button className="w-full py-3 rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-medium tracking-wide text-zinc-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white">
                        CONTACT SALES
                    </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0f0f11] bg-noise relative z-20 w-full border-t border-[#000] shadow-[inset_0_16px_24px_-16px_rgba(0,0,0,0.9)] mt-auto shrink-0 flex flex-col">

<div className="border-b border-[#27272a] bg-[#09090b]/80 backdrop-blur-sm">
<div className="px-6 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600 text-[10px]" icon="solar:terminal-linear"></iconify-icon>
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">SYS_TERMINAL</span>
</div>
<div className="flex gap-1.5 opacity-50">
<div className="w-1 h-1 bg-slate-600 rounded-full"></div>
<div className="w-1 h-1 bg-slate-600 rounded-full"></div>
<div className="w-1 h-1 bg-slate-600 rounded-full"></div>
</div>
</div>
</div>
<div className="border-t border-[#000] px-6 py-6 bg-[#0c0c0e]">
<div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono">
<div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
<span className="flex items-center gap-1.5 text-slate-400"><iconify-icon icon="solar:stars-linear"></iconify-icon> DreamStory Matrix</span>
<span className="hidden md:inline text-[#27272a]">|</span>
<span>© 2024 Systems Inc.</span>
</div>
<div className="flex items-center gap-6">
<a className="transition-colors uppercase tracking-widest text-[10px] hover:text-amber-400" href="#">Terms_Policy</a>
<a className="transition-colors uppercase tracking-widest text-[10px] hover:text-amber-400" href="#">Privacy_Log</a>
<a className="transition-colors uppercase tracking-widest text-[10px] hover:text-amber-400" href="#">Contact_Ops</a>
</div>
</div>
</div>
</footer>
</div>
</div>
</div>

    </>
  );
}
