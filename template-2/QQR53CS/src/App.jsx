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



    // Setup
    const canvas = document.getElementById('cubes-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    function resizeCanvas() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x171717, 15, 30);

    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 15;

    // Particle background
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const posArr = new Float32Array(particleCount * 3);
    const velocities = [];
    for(let i = 0; i < particleCount; i++) {
      posArr[i*3] = (Math.random()-0.5)*30;
      posArr[i*3+1] = (Math.random()-0.5)*30;
      posArr[i*3+2] = (Math.random()-0.5)*30;
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      });
    }
    particles.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0x88ccff, size:0.06, transparent:true, opacity:0.4 });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Grid of Cubes - monochrome
    const cubes = [];
    const gridSize = 5, spacing = 2;
    for(let x=0;x<gridSize;x++) for(let y=0;y<gridSize;y++) for(let z=0;z<gridSize;z++) {
      const geo = new THREE.BoxGeometry(1,1,1);
      // Calculate lightness for subtle difference
      const l = 0.2 + 0.6 * ((x + y + z) / (gridSize*3-3)); // between 0.2 and 0.8
      const gray = new THREE.Color().setHSL(0, 0, l);
      const mat = new THREE.MeshPhongMaterial({
        color: gray,
        shininess: 90,
        transparent: true,
        opacity: 0.82
      });
      const cube = new THREE.Mesh(geo, mat);
      cube.position.x = (x-gridSize/2)*spacing;
      cube.position.y = (y-gridSize/2)*spacing;
      cube.position.z = (z-gridSize/2)*spacing;
      cube.userData = {
        initialScale: 1,
        targetScale: 1,
        initialColor: mat.color.clone(),
        isSelected: false,
        initialX: cube.position.x,
        initialY: cube.position.y,
        initialZ: cube.position.z,
        rotationSpeed: 0.012,
        pulsePhase: Math.random()*Math.PI*2
      };
      scene.add(cube);
      cubes.push(cube);
    }

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.95);
    light1.position.set(1,1,1); scene.add(light1);
    const light2 = new THREE.DirectionalLight(0xffffff, 0.35);
    light2.position.set(-1,-1,-1); scene.add(light2);
    scene.add(new THREE.AmbientLight(0x404040, 0.9));

    // Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredCube = null, isPaused = false;

    // Responsive resize for canvas
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 150);

    // Mouse event handlers
    function getPointer(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((event.clientX-rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY-rect.top) / rect.height) * 2 + 1
      };
    }
    canvas.addEventListener('mousemove', (event) => {
      const p = getPointer(event);
      mouse.x = p.x; mouse.y = p.y;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);

      if (hoveredCube && (!intersects.length || intersects[0].object !== hoveredCube)) {
        if (!hoveredCube.userData.isSelected) {
          hoveredCube.material.opacity = 0.82;
          hoveredCube.material.emissive.setHex(0x000000);
        }
        hoveredCube = null;
      }
      if (intersects.length) {
        const cube = intersects[0].object;
        if (cube !== hoveredCube) {
          hoveredCube = cube;
          if (!cube.userData.isSelected) {
            cube.material.opacity = 1;
            cube.material.emissive.setHex(0x232323);
          }
        }
      }
    });
    canvas.addEventListener('click', (event) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);
      if (intersects.length > 0) {
        const cube = intersects[0].object;
        cube.userData.isSelected = !cube.userData.isSelected;
        if (cube.userData.isSelected) {
          cube.userData.targetScale = 1.47;
          cube.userData.rotationSpeed = 0.07;
          cube.material.color.setHSL(0, 0, 0.95);
          cube.material.opacity = 1;
        } else {
          cube.userData.targetScale = 1;
          cube.userData.rotationSpeed = 0.012;
          cube.material.color.copy(cube.userData.initialColor);
          cube.material.opacity = 0.82;
        }
      }
    });
    canvas.addEventListener('wheel', (event) => {
      camera.position.z = Math.max(5, Math.min(30, camera.position.z + event.deltaY*0.001));
    });
    window.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        isPaused = !isPaused;
        if (!isPaused) animate();
      }
    });

    // Animation Loop
    function animate() {
      if (isPaused) return;
      requestAnimationFrame(animate);

      const t = Date.now()*0.001;
      // Particle movement
      const positions = particleSystem.geometry.attributes.position.array;
      for(let i=0;i<particleCount;i++) {
        positions[i*3] += velocities[i].x;
        positions[i*3+1] += velocities[i].y;
        positions[i*3+2] += velocities[i].z;
        if (Math.abs(positions[i*3]) > 15) positions[i*3] = -positions[i*3];
        if (Math.abs(positions[i*3+1]) > 15) positions[i*3+1] = -positions[i*3+1];
        if (Math.abs(positions[i*3+2]) > 15) positions[i*3+2] = -positions[i*3+2];
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      cubes.forEach((cube, i) => {
        const offset = i*0.1;
        cube.position.x = cube.userData.initialX + Math.sin(t + offset)*0.52;
        cube.position.y = cube.userData.initialY + Math.cos(t + offset)*0.52;
        const pulse = Math.sin(t*2 + cube.userData.pulsePhase)*0.09;
        const targetScale = cube.userData.targetScale + pulse;
        cube.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.13);
        cube.rotation.x += cube.userData.rotationSpeed;
        cube.rotation.y += cube.userData.rotationSpeed;
      });

      camera.position.x = Math.sin(t*0.5) * 15;
      camera.position.z = Math.cos(t*0.5) * 15;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    animate();
  
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
      

<nav className="w-full flex items-center justify-between px-10 py-6 bg-transparent absolute top-0 left-0 z-20">
<div className="flex items-center space-x-2">
<span className="block w-7 h-7 rounded-[7px] bg-blue-600 mr-2"></span>
<span className="jakarta text-white text-2xl tracking-tight">Cubify</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-neutral-300 hover:text-white transition" href="#">Features</a>
<a className="text-neutral-300 hover:text-white transition" href="#">Pricing</a>
<a className="text-neutral-300 hover:text-white transition" href="#">Docs</a>
<a className="text-neutral-300 hover:text-white transition" href="#">Contact</a>
</div>
<div className="flex items-center space-x-2">
<a className="hidden md:inline-block px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition" href="#">Sign In</a>
<a className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition" href="#">Get Started</a>
</div>
</nav>

<section className="flex-1 flex flex-col md:flex-row items-stretch justify-center max-w-7xl w-full mx-auto pt-32 pb-12 px-6 md:px-12 relative z-10">

<div className="flex-1 flex flex-col justify-center">
<h1 className="jakarta text-[2.8rem] md:text-6xl leading-tight text-white mb-6 tight-tracking">
        Experience 3D Interactivity<br />in Your Web Projects
      </h1>
<p className="text-neutral-300 text-xl md:text-2xl max-w-xl mb-8 font-normal" style={{fontFamily: `'Inter',sans-serif`}}>
        Engage your audience with stunning, interactive 3D visuals. Elevate your product, site, or brand with immersive scenes—no installation required.
      </p>
<div className="flex flex-col md:flex-row gap-4">
<a className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold transition shadow-lg" href="#">Try Demo</a>
<a className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-lg font-semibold transition border border-white/10" href="#">Learn More</a>
</div>
</div>

<div className="flex-1 flex items-center justify-center relative min-h-[350px] md:min-h-[550px] mt-12 md:mt-0">
<canvas className="w-full h-[350px] md:h-[550px] rounded-xl shadow-2xl ring-1 ring-white/10" id="cubes-canvas"></canvas>
</div>
</section>



    </>
  );
}
