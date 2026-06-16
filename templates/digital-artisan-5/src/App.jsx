import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({
          attrs: {
              strokeWidth: 1.5
          }
      });

      // Clock Function
      function updateTime() {
          const now = new Date();
          const timeString = new Intl.DateTimeFormat('en-US', {
              timeZone: 'Asia/Hong_Kong',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
          }).format(now);
          document.getElementById('clock').textContent = timeString + " HKT";
      }
      setInterval(updateTime, 1000);
      updateTime();

      // Three.js Implementation
      function initThreeJS() {
          const container = document.getElementById('canvas-container');

          // Scene setup
          const scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0x050505, 0.002);

          // Camera setup
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          camera.position.z = 30;

          // Renderer setup
          const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(window.devicePixelRatio);
          container.appendChild(renderer.domElement);

          // Geometry: Torus Knot
          const tubularSegments = 120;
          const radialSegments = 16;
          const geometry = new THREE.TorusKnotGeometry(9, 2.5, tubularSegments, radialSegments);

          // Material: Wireframe
          const material = new THREE.MeshPhysicalMaterial({
              color: 0x888888,
              emissive: 0x111111,
              metalness: 0.9,
              roughness: 0.1,
              wireframe: true,
              clearcoat: 1.0,
              clearcoatRoughness: 0.1
          });

          const torusKnot = new THREE.Mesh(geometry, material);
          scene.add(torusKnot);

          // --- Sparks Effect ---
          const sparkCount = 100;
          const sparkGeo = new THREE.CircleGeometry(0.15, 3);
          sparkGeo.rotateY(-Math.PI / 2); // Rotate so tip (+X) points along +Z (tangent)

          const sparkMat = new THREE.MeshBasicMaterial({
              color: 0xD4AF37,
              side: THREE.DoubleSide,
              blending: THREE.AdditiveBlending,
              transparent: true,
              opacity: 0.8,
              depthTest: false // Visible through wires
          });

          const sparks = new THREE.InstancedMesh(sparkGeo, sparkMat, sparkCount);
          torusKnot.add(sparks); // Bind to knot rotation

          // Instance Data
          const dummy = new THREE.Object3D();
          const sparkData = [];
          for (let i = 0; i < sparkCount; i++) {
              sparkData.push({
                  speed: 0.001 + Math.random() * 0.002,
                  progress: Math.random(),
                  pathIndex: Math.floor(Math.random() * radialSegments)
              });
          }

          // Helper variables for path following
          const posAttribute = geometry.attributes.position;
          const stride = radialSegments + 1;
          const v1 = new THREE.Vector3();
          const v2 = new THREE.Vector3();

          function updateSparks() {
              sparkData.forEach((spark, i) => {
                  spark.progress += spark.speed;
                  if (spark.progress >= 1) spark.progress = 0;

                  // Calculate grid indices for interpolation
                  const exactInd = spark.progress * tubularSegments;
                  const u = Math.floor(exactInd);
                  const nextU = (u + 1) % tubularSegments;
                  const v = spark.pathIndex;

                  const idx1 = (u * stride + v) * 3;
                  const idx2 = (nextU * stride + v) * 3;

                  // Fetch vertices
                  v1.fromArray(posAttribute.array, idx1);
                  v2.fromArray(posAttribute.array, idx2);

                  // Interpolate position
                  v1.lerp(v2, exactInd - u);

                  dummy.position.copy(v1);
                  dummy.lookAt(v2); // Look forward along path
                  dummy.updateMatrix();
                  sparks.setMatrixAt(i, dummy.matrix);
              });
              sparks.instanceMatrix.needsUpdate = true;
          }

          // Lighting
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
          scene.add(ambientLight);

          const pointLight1 = new THREE.PointLight(0xD4AF37, 2, 50);
          pointLight1.position.set(10, 10, 10);
          scene.add(pointLight1);

          const pointLight2 = new THREE.PointLight(0xC0C0C0, 2, 50);
          pointLight2.position.set(-10, -10, 10);
          scene.add(pointLight2);

          // Interaction
          let mouseX = 0;
          let mouseY = 0;
          let targetRotationX = 0;
          let targetRotationY = 0;

          const windowHalfX = window.innerWidth / 2;
          const windowHalfY = window.innerHeight / 2;

          document.addEventListener('mousemove', (event) => {
              mouseX = (event.clientX - windowHalfX) * 0.001;
              mouseY = (event.clientY - windowHalfY) * 0.001;
          });

          function animate() {
              requestAnimationFrame(animate);

              torusKnot.rotation.y += 0.003;
              torusKnot.rotation.x += 0.001;

              targetRotationY = mouseX * 0.5;
              targetRotationX = mouseY * 0.5;

              torusKnot.rotation.y += 0.05 * (targetRotationY - torusKnot.rotation.y);
              torusKnot.rotation.x += 0.05 * (targetRotationX - torusKnot.rotation.x);

              updateSparks();
              renderer.render(scene, camera);
          }

          animate();

          // Resize
          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });

          setTimeout(() => {
              container.style.opacity = '1';
          }, 500);
      }

      window.addEventListener('DOMContentLoaded', initThreeJS);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<header className="w-full max-w-[1800px] mx-auto p-6 md:p-12 grid grid-cols-2 md:grid-cols-12 gap-6 items-start z-50 relative border-b border-white/5 pb-6">

<div className="md:col-span-3 flex flex-col fade-up">
<a className="font-serif-heading text-xl md:text-2xl tracking-tight text-white hover:text-[#D4AF37] transition-colors duration-500 font-semibold" href="#">
          FRANKY HUNG
        </a>
<span className="font-serif-body text-xs text-neutral-500 italic mt-1">
          Est. 2015
        </span>
</div>

<div className="hidden md:flex md:col-span-3 flex-col gap-2 fade-up delay-100">
<span className="font-serif-heading text-xs uppercase tracking-widest text-neutral-400">
          Current Status
        </span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
<span className="font-serif-body text-xs text-white">
            Accepting Commissions
          </span>
</div>
</div>

<div className="hidden md:flex md:col-span-3 flex-col gap-2 fade-up delay-200">
<span className="font-serif-heading text-xs uppercase tracking-widest text-neutral-400">
          Location
        </span>
<span className="font-serif-body text-xs text-white">
          Hong Kong
          <span className="text-neutral-500 ml-2 font-light" id="clock">--:--</span>
</span>
</div>

<div className="col-span-1 md:col-span-3 flex justify-end items-start gap-8 fade-up delay-300">
<nav className="flex flex-col items-end gap-1">
<a className="group flex items-center gap-2 font-serif-heading text-sm text-white hover-gold" href="#">
<span className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#D4AF37] text-xs">
              01
            </span>
            Work
          </a>
<a className="group flex items-center gap-2 font-serif-heading text-sm text-white hover-gold" href="#">
<span className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#D4AF37] text-xs">
              02
            </span>
            Expertise
          </a>
<a className="group flex items-center gap-2 font-serif-heading text-sm text-white hover-gold" href="#">
<span className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#D4AF37] text-xs">
              03
            </span>
            Contact
          </a>
</nav>
</div>
</header>

<main className="flex-grow flex flex-col justify-center items-center relative w-full px-6 z-10 pointer-events-none">

<div className="relative flex flex-col items-center text-center mix-blend-overlay opacity-80">
<h1 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white leading-[0.9] fade-up delay-100">
          Digital
        </h1>
<div className="h-4 md:h-12"></div>

<h1 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white leading-[0.9] italic fade-up delay-200">
          Alchemist
        </h1>
</div>

<div className="mt-12 md:mt-24 pointer-events-auto fade-up delay-300">
<a className="group relative inline-flex items-center gap-4 px-8 py-4 border border-neutral-800 hover:border-[#D4AF37]/50 rounded-full bg-black/20 backdrop-blur-sm transition-all duration-500 overflow-hidden" href="mailto:franky@arkon.digital">
<span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
<span className="font-serif-body text-xs md:text-sm text-neutral-300 group-hover:text-white relative z-10 tracking-wide">
            Explore Selected Works
          </span>
<i className="w-4 h-4 text-neutral-400 group-hover:text-[#D4AF37] relative z-10 transition-colors" data-lucide="arrow-down"></i>
</a>
</div>
</main>

<footer className="w-full max-w-[1800px] mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-xs z-20 relative border-t border-white/5 pt-8">

<div className="flex flex-col gap-4">
<p className="font-serif-body text-neutral-400 leading-relaxed max-w-xs">
          Crafting immersive digital experiences through code and design.
          Specializing in WebGL, React, and interactive storytelling.
        </p>
</div>

<div className="flex flex-col gap-4">
<h3 className="font-serif-heading text-white text-sm">Tech Stack</h3>
<div className="grid grid-cols-2 gap-2 text-neutral-500 font-serif-body">
<span>Three.js</span>
<span>React</span>
<span>TypeScript</span>
<span>Node.js</span>
<span>Tailwind</span>
<span>Next.js</span>
</div>
</div>

<div className="flex flex-col gap-4">
<h3 className="font-serif-heading text-white text-sm">Connect</h3>
<div className="flex flex-col gap-2 font-serif-body">
<a className="text-neutral-500 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" href="#">
            LinkedIn
            <i className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</a>
<a className="text-neutral-500 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" href="#">
            Instagram
            <i className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</a>
<a className="text-neutral-500 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" href="#">
            GitHub
            <i className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="flex flex-col justify-end items-start md:items-end gap-1 text-neutral-600">
<span className="font-serif-heading text-lg text-white">© 2025</span>
<span className="font-serif-body text-[10px] uppercase tracking-wider">
          Arkon Digital Ltd.
        </span>
</div>
</footer>


    </>
  );
}
