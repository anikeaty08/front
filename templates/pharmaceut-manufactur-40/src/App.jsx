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



      lucide.createIcons();

      const initThreeJS = () => {
          const container = document.getElementById('canvas-container');
          if(!container) return;
          const scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0xf8fafc, 0.002);

          const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
          camera.position.z = 20;

          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          container.appendChild(renderer.domElement);

          const capGeo = new THREE.CapsuleGeometry(0.15, 0.5, 4, 8);
          const capMat = new THREE.MeshPhysicalMaterial({
              color: 0x3b82f6,
              metalness: 0.1,
              roughness: 0.1,
              transparent: true,
              opacity: 0.8,
              transmission: 0.5
          });

          const count = 200;
          const mesh = new THREE.InstancedMesh(capGeo, capMat, count);
          const dummy = new THREE.Object3D();
          const particles = [];

          for(let i=0; i<count; i++){
              const x = (Math.random()-0.5)*50;
              const y = (Math.random()-0.5)*50;
              const z = (Math.random()-0.5)*30;
              dummy.position.set(x,y,z);
              dummy.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
              dummy.updateMatrix();
              mesh.setMatrixAt(i, dummy.matrix);
              particles.push({x,y,z, speed: Math.random()*0.02 + 0.01, rot: Math.random()*0.02});
          }
          scene.add(mesh);

          const amb = new THREE.AmbientLight(0xffffff, 0.8);
          scene.add(amb);
          const pLight = new THREE.PointLight(0x3b82f6, 2, 50);
          pLight.position.set(10,10,10);
          scene.add(pLight);

          let mouseX = 0;
          let mouseY = 0;
          window.addEventListener('mousemove', e => {
              mouseX = (e.clientX - window.innerWidth/2) * 0.0005;
              mouseY = (e.clientY - window.innerHeight/2) * 0.0005;
          });

          const animate = () => {
              requestAnimationFrame(animate);
              for(let i=0; i<count; i++){
                  const p = particles[i];
                  p.y += p.speed;
                  if(p.y > 25) p.y = -25;
                  dummy.position.set(p.x, p.y, p.z);
                  dummy.rotation.x += p.rot;
                  dummy.rotation.y += p.rot;
                  dummy.updateMatrix();
                  mesh.setMatrixAt(i, dummy.matrix);
              }
              mesh.instanceMatrix.needsUpdate = true;
              camera.position.x += (mouseX * 10 - camera.position.x) * 0.05;
              camera.position.y += (-mouseY * 10 - camera.position.y) * 0.05;
              camera.lookAt(0,0,0);
              renderer.render(scene, camera);
          };
          animate();
          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });
      };
      initThreeJS();

      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('section').forEach(section => {
          gsap.from(section.children, {
              y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
              scrollTrigger: { trigger: section, start: 'top 85%' }
          });
      });

      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) navbar.classList.add('shadow-sm');
          else navbar.classList.remove('shadow-sm');
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"></div>
<div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<i className="w-5 h-5" data-lucide="dna"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900 leading-none">
              MEGHA
            </span>
<span className="text-[0.65rem] tracking-widest text-slate-500 uppercase mt-0.5">
              Life Science Pvt. Ltd.
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#about">
            Innovation
          </a>
<a className="hover:text-blue-600 transition-colors" href="#process">
            Process
          </a>
<a className="hover:text-blue-600 transition-colors" href="#products">
            Products
          </a>
<a className="hover:text-blue-600 transition-colors" href="#global">
            Global Reach
          </a>
</div>
<div className="hidden md:flex items-center gap-6">
<button className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors tracking-wide" onclick="document.getElementById('login-modal').classList.remove('hidden')">
            Partner Login
          </button>
<button className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-600/30 group">
<span>Global Enquiries</span>
<i className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/30 pt-20">

<div id="canvas-container"></div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl pt-10 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium tracking-wide mb-6 animate-fade-in shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md border-blue-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            ISO 9001:2015 &amp; WHO-GMP Certified
          </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
            Precision Manufacturing.
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Trusted Worldwide.
            </span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg font-light">
            Megha Life Science combines advanced Indian manufacturing with
            global compliance (WHO-GMP, ISO) to deliver pure, effective
            healthcare solutions. Experience the future of sterile production.
          </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-8 py-3.5 bg-blue-600 text-white rounded-lg text-sm font-medium tracking-tight shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30 transition-all flex items-center gap-2 group">
              Explore Facility
              <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="scan-face"></i>
</button>
<button className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg text-sm font-medium tracking-tight hover:bg-slate-50 transition-all flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="play-circle"></i>
              Watch Production
            </button>
</div>
<div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200/60 pt-8">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">
                25+
              </div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Export Countries
              </div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">
                500+
              </div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Formulations
              </div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">
                100%
              </div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Quality Compliant
              </div>
</div>
</div>
</div>

<div className="hidden lg:block relative h-[600px] w-full perspective-1000">
<div className="absolute inset-0 flex items-center justify-center float-anim">

<div className="relative w-80 h-96 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl shadow-blue-900/10 flex flex-col p-6 z-20 transform rotate-y-12 rotate-x-6 transition-transform hover:rotate-0 duration-700">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="pill"></i>
</div>
<div className="px-2 py-1 bg-green-500 text-white rounded shadow-[0_0_10px_rgba(34,197,94,0.5)] text-[10px] font-bold tracking-wider">
                  100% PURE
                </div>
</div>
<div className="mt-auto">
<div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden mb-2">
<div className="h-full bg-blue-500 w-[85%]"></div>
</div>
<div className="flex justify-between text-xs font-medium text-slate-600">
<span>Batch Analysis</span>
<span>99.9% Purity</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex gap-4">
<div className="text-[10px] text-slate-400">
<span className="block text-slate-900 font-semibold text-lg">
                      0.02%
                    </span>
                    Deviation
                  </div>
<div className="text-[10px] text-slate-400">
<span className="block text-slate-900 font-semibold text-lg">
                      1.4s
                    </span>
                    Cycle Time
                  </div>
</div>
</div>
</div>

<div className="absolute -right-10 top-20 w-48 h-32 bg-white/60 backdrop-blur-md border border-white/50 rounded-xl shadow-xl shadow-blue-500/10 z-30 p-4 float-anim" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-slate-700">
                  Reactors Active
                </span>
</div>
<div className="flex gap-1 h-8 items-end">
<div className="w-2 h-4 bg-blue-400 rounded-sm"></div>
<div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
<div className="w-2 h-8 bg-blue-600 rounded-sm"></div>
<div className="w-2 h-5 bg-blue-400 rounded-sm"></div>
<div className="w-2 h-7 bg-blue-500 rounded-sm"></div>
</div>
</div>

<div className="absolute inset-0 m-auto w-[500px] h-[500px] border border-blue-100 rounded-full z-0 opacity-50"></div>
<div className="absolute inset-0 m-auto w-[350px] h-[350px] border border-dashed border-blue-200 rounded-full z-0 opacity-50 animate-spin-slow" style={{animationDuration: '30s'}}></div>
</div>
<div className="absolute top-8 right-8 z-50 flex items-center gap-2 px-3 py-1.5 bg-white/40 backdrop-blur-md rounded-full border border-white/60 shadow-lg shadow-blue-500/5 hover:bg-white/60 transition-colors cursor-help" title="Real-time 3D Rendering">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-[10px] font-bold text-slate-800 tracking-widest uppercase">
              3D Live
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="process">
<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-2">
              The Megha Standard
            </h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
              Precision Manufacturing
            </h3>
</div>
<p className="text-slate-500 text-sm max-w-md font-light">
            Our state-of-the-art facility in India utilizes automated robotics
            and closed-loop systems to ensure zero-contamination production.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
<div className="absolute top-6 right-6 text-slate-200 text-5xl font-bold tracking-tighter group-hover:text-blue-100 transition-colors">
              01
            </div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="flask-conical"></i>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Raw Material Analysis
            </h4>
<p className="text-xs text-slate-500 leading-relaxed">
              Stringent spectroscopy and chromatography testing on all incoming
              active pharmaceutical ingredients (API).
            </p>
</div>

<div className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
<div className="absolute top-6 right-6 text-slate-200 text-5xl font-bold tracking-tighter group-hover:text-blue-100 transition-colors">
              02
            </div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="settings-2"></i>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Automated Processing
            </h4>
<p className="text-xs text-slate-500 leading-relaxed">
              Granulation, compression, and coating executed by
              computer-controlled systems for exact dosage uniformity.
            </p>
</div>

<div className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
<div className="absolute top-6 right-6 text-slate-200 text-5xl font-bold tracking-tighter group-hover:text-blue-100 transition-colors">
              03
            </div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="microscope"></i>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Quality Assurance
            </h4>
<p className="text-xs text-slate-500 leading-relaxed">
              In-process checks and final lab verification to meet IP/BP/USP
              pharmacopeial standards.
            </p>
</div>

<div className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
<div className="absolute top-6 right-6 text-slate-200 text-5xl font-bold tracking-tighter group-hover:text-blue-100 transition-colors">
              04
            </div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="package-check"></i>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
              Sterile Packaging
            </h4>
<p className="text-xs text-slate-500 leading-relaxed">
              Advanced blister and bottle lines with automated optical
              inspection systems for defect-free dispatch.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative" id="products">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
            Portfolio
          </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-3">
            Therapeutic Solutions
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="card-3d-wrapper h-[400px] w-full group">
<div className="card-3d relative w-full h-full bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent z-0"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="flex justify-between items-start">
<div className="px-2 py-1 bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-500/30">
                    Tablets
                  </div>
<i className="text-slate-400 group-hover:text-white transition-colors" data-lucide="tablets"></i>
</div>
<div className="mt-8 flex justify-center py-6">

<div className="relative w-32 h-12 rounded-full bg-gradient-to-r from-blue-400 to-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transform group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center">
<div className="w-[1px] h-full bg-black/10"></div>
<span className="absolute text-[8px] text-blue-900 font-bold tracking-widest opacity-50">
                      MEGHA
                    </span>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-semibold mb-2">Solid Orals</h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4">
                    High-efficacy immediate and sustained release formulations.
                    Antibiotics, cardiovascular, and analgesics.
                  </p>
<div className="flex items-center gap-4 text-[10px] text-slate-500">
<span>• Film Coated</span>
<span>• Enteric</span>
<span>• Dispersible</span>
</div>
</div>
</div>
</div>
</div>

<div className="card-3d-wrapper h-[400px] w-full group">
<div className="card-3d relative w-full h-full bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-500/10 to-transparent z-0"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="flex justify-between items-start">
<div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-500/30">
                    Liquid
                  </div>
<i className="text-slate-400 group-hover:text-white transition-colors" data-lucide="droplets"></i>
</div>
<div className="mt-8 flex justify-center py-6">

<div className="w-16 h-28 bg-gradient-to-br from-emerald-400/80 to-emerald-600/80 rounded-t-lg rounded-b-2xl backdrop-blur-md relative transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-8 h-4 bg-white rounded-t-sm"></div>
<div className="absolute inset-x-2 top-8 h-12 bg-white/90 rounded text-[6px] flex flex-col items-center justify-center text-center p-1">
<div className="w-8 h-1 bg-slate-200 mb-1"></div>
<div className="w-6 h-1 bg-slate-200"></div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-semibold mb-2">
                    Syrups &amp; Suspensions
                  </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Pediatric and adult liquid formulations with enhanced
                    stability and palatable flavors.
                  </p>
<div className="flex items-center gap-4 text-[10px] text-slate-500">
<span>• Dry Syrups</span>
<span>• Solutions</span>
<span>• Drops</span>
</div>
</div>
</div>
</div>
</div>

<div className="card-3d-wrapper h-[400px] w-full group">
<div className="card-3d relative w-full h-full bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent z-0"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="flex justify-between items-start">
<div className="px-2 py-1 bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider rounded border border-purple-500/30">
                    Injectable
                  </div>
<i className="text-slate-400 group-hover:text-white transition-colors" data-lucide="syringe"></i>
</div>
<div className="mt-8 flex justify-center py-6">

<div className="w-12 h-24 border border-white/30 rounded-lg relative flex items-end overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
<div className="w-full h-3/4 bg-purple-500/30 backdrop-blur-sm"></div>
<div className="absolute top-0 w-full h-6 bg-slate-700 border-b border-white/20"></div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-semibold mb-2">
                    Sterile Injectables
                  </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Critical care injections manufactured in Grade A/B cleanroom
                    environments.
                  </p>
<div className="flex items-center gap-4 text-[10px] text-slate-500">
<span>• Vials</span>
<span>• Ampoules</span>
<span>• Lyophilized</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="global">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[450px] w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-8 flex items-center justify-center group">
<div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center opacity-20 invert"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

<div className="relative w-64 h-64 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite] opacity-50">
<div className="absolute inset-2 rounded-full border border-dashed border-cyan-400/30 rotate-45"></div>
</div>

<div className="absolute top-[45%] left-[68%] flex flex-col items-center z-10">
<div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] animate-pulse"></div>
<div className="mt-2 px-3 py-1 bg-slate-800/90 backdrop-blur border border-slate-700 text-white text-[10px] rounded shadow-xl">
                India HQ
              </div>
</div>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              Global Reach.
              <br/>
<span className="text-blue-500">Universal Care.</span>
</h2>
<p className="text-sm text-slate-500 leading-relaxed mb-8 font-light">
              From our headquarters in India, Megha Life Science exports
              high-quality formulations to emerging and regulated markets. Our
              commitment to compliance ensures every pill meets international
              safety norms.
            </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-4 border border-slate-200 rounded-xl bg-white">
<div className="font-semibold text-slate-900 text-sm mb-1">
                  WHO-GMP
                </div>
<div className="text-[10px] text-slate-400">Certified Facility</div>
</div>
<div className="p-4 border border-slate-200 rounded-xl bg-white">
<div className="font-semibold text-slate-900 text-sm mb-1">
                  ISO 9001:2015
                </div>
<div className="text-[10px] text-slate-400">Quality Management</div>
</div>
<div className="p-4 border border-slate-200 rounded-xl bg-white">
<div className="font-semibold text-slate-900 text-sm mb-1">
                  DCGI Approved
                </div>
<div className="text-[10px] text-slate-400">
                  Regulatory Compliance
                </div>
</div>
<div className="p-4 border border-slate-200 rounded-xl bg-white">
<div className="font-semibold text-slate-900 text-sm mb-1">
                  Export House
                </div>
<div className="text-[10px] text-slate-400">
                  Govt. of India Recognized
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-900 z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="glass-dark rounded-3xl p-10 md:p-16 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">
            Partner for a Healthier Tomorrow
          </h2>
<p className="text-slate-300 text-sm mb-10 max-w-lg mx-auto">
            Looking for contract manufacturing or distribution partnership?
            Connect with our corporate team.
          </p>
<form className="max-w-md mx-auto space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500" placeholder="Name" type="text"/>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500" placeholder="Company" type="text"/>
</div>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500" placeholder="Email Address" type="email"/>
<textarea className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500" placeholder="Message" rows="3"></textarea>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2" type="button">
              Submit Enquiry
              <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
<div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-xs">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-400" data-lucide="map-pin"></i>
<span>Industrial Area, Himachal Pradesh, India</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-400" data-lucide="mail"></i>
<span>export@meghalifescience.com</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-blue-500">
<i className="w-4 h-4" data-lucide="dna"></i>
</div>
<span className="text-sm font-semibold text-slate-200">
            Megha Life Science
          </span>
</div>
<div className="text-xs">
          © 2024 Megha Life Science Pvt. Ltd. All rights reserved.
        </div>
<div className="flex gap-6 text-xs font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>


<div className="hidden fixed inset-0 z-[100] flex items-center justify-center" id="login-modal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="this.parentElement.classList.add('hidden')"></div>
<div className="relative bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/50 animate-fade-in-up">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="document.getElementById('login-modal').classList.add('hidden')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="text-center mb-8">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4 shadow-lg shadow-blue-100">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">
            Partner Access
          </h3>
<p className="text-xs text-slate-500 mt-2">
            Secure login for distributors &amp; healthcare professionals.
          </p>
</div>
<form className="space-y-4">
<div>
<label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Business Email
            </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" type="email"/>
</div>
<div>
<label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Access Code
            </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" type="password"/>
</div>
<button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all mt-2" type="button">
            Authenticate
          </button>
</form>
<div className="mt-6 text-center pt-6 border-t border-slate-100">
<a className="text-xs text-slate-400 hover:text-blue-600 transition-colors" href="#">
            Apply for Partnership
          </a>
</div>
</div>
</div>

    </>
  );
}
