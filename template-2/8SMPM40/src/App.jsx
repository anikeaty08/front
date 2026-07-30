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



    // Toggle forms
    const toggleBtn = document.getElementById('toggle-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    toggleBtn.addEventListener('click', () => {
      loginForm.classList.toggle('hidden');
      registerForm.classList.toggle('hidden');
      if (loginForm.classList.contains('hidden')) {
        toggleBtn.textContent = 'Switch to Login';
      } else {
        toggleBtn.textContent = 'Switch to Register';
      }
      updateBearEyes();
    });

    // --- Bear 3D Scene setup ---
    const canvas = document.getElementById('three-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, canvas.width / canvas.height, 0.1, 1000);
    camera.position.set(0, 0.2, 7);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.65);
    dirLight.position.set(2, 5, 4);
    scene.add(dirLight);

    // Bear Materials
    const brown = new THREE.MeshPhongMaterial({ color: 0x9d7b5d, flatShading: true });
    const darkBrown = new THREE.MeshPhongMaterial({ color: 0x6d4c2a, flatShading: true });
    const lightBrown = new THREE.MeshPhongMaterial({ color: 0xffefcf, flatShading: true });
    const black = new THREE.MeshPhongMaterial({ color: 0x222222, flatShading: true });
    const pink = new THREE.MeshPhongMaterial({ color: 0xffb6c1, flatShading: true });

    // Bear Head
    const headGeo = new THREE.SphereGeometry(1.45, 32, 32);
    const head = new THREE.Mesh(headGeo, brown);
    head.position.y = 0.15;
    scene.add(head);

    // Bear Ears
    const earGeo = new THREE.SphereGeometry(0.55, 28, 28);
    const earL = new THREE.Mesh(earGeo, brown);
    earL.position.set(-1, 1.25, -0.2);
    scene.add(earL);
    const earR = new THREE.Mesh(earGeo, brown);
    earR.position.set(1, 1.25, -0.2);
    scene.add(earR);

    // Inner Ears
    const earInnerGeo = new THREE.SphereGeometry(0.28, 20, 20);
    const earInnerL = new THREE.Mesh(earInnerGeo, pink);
    earInnerL.position.set(-1, 1.34, 0.15);
    scene.add(earInnerL);
    const earInnerR = new THREE.Mesh(earInnerGeo, pink);
    earInnerR.position.set(1, 1.34, 0.15);
    scene.add(earInnerR);

    // Bear Muzzle
    const muzzleGeo = new THREE.SphereGeometry(0.6, 22, 22);
    const muzzle = new THREE.Mesh(muzzleGeo, lightBrown);
    muzzle.position.set(0, -0.4, 1.05);
    scene.add(muzzle);

    // Bear Nose
    const noseGeo = new THREE.SphereGeometry(0.17, 16, 16);
    const nose = new THREE.Mesh(noseGeo, black);
    nose.position.set(0, -0.5, 1.31);
    scene.add(nose);

    // Bear Eyes (will animate for open/closed)
    const eyeGeo = new THREE.SphereGeometry(0.11, 12, 12);
    const eyeL = new THREE.Mesh(eyeGeo, black);
    const eyeR = new THREE.Mesh(eyeGeo, black);
    eyeL.position.set(-0.45, 0.18, 1.28);
    eyeR.position.set(0.45, 0.18, 1.28);
    scene.add(eyeL);
    scene.add(eyeR);

    // Eye lids (for closed-eye effect)
    const eyelidGeo = new THREE.SphereGeometry(0.11, 12, 8, 0, Math.PI * 2, 0, Math.PI / 1.6);
    const eyelidL = new THREE.Mesh(eyelidGeo, brown);
    const eyelidR = new THREE.Mesh(eyelidGeo, brown);
    eyelidL.position.copy(eyeL.position);
    eyelidR.position.copy(eyeR.position);
    eyelidL.rotation.x = Math.PI / 1.12;
    eyelidR.rotation.x = Math.PI / 1.12;
    eyelidL.visible = false;
    eyelidR.visible = false;
    scene.add(eyelidL);
    scene.add(eyelidR);

    // Optional: Bear's smile (simple cylinder)
    const smileGeo = new THREE.TorusGeometry(0.23, 0.035, 10, 24, Math.PI);
    const smile = new THREE.Mesh(smileGeo, black);
    smile.position.set(0, -0.62, 1.22);
    smile.rotation.x = Math.PI / 2.1;
    scene.add(smile);

    // Animation loop
    let t = 0;
    function animate() {
      requestAnimationFrame(animate);
      t += 0.008;
      // Sway head gently
      head.rotation.y = Math.sin(t) * 0.1;
      head.rotation.x = Math.sin(t / 1.6) * 0.07;
      earL.rotation.z = Math.sin(t) * 0.09;
      earR.rotation.z = -Math.sin(t) * 0.09;
      renderer.render(scene, camera);
    }
    animate();

    // Responsive resizing
    function resizeCanvas() {
      let w = 350, h = 350;
      if (window.innerWidth < 900) { w = 220; h = 220; }
      canvas.width = w;
      canvas.height = h;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // ---- Eye OPEN/CLOSE ANIMATION ----
    function setBearEyes(closed) {
      // If closed, hide eyes and show eyelids
      eyelidL.visible = eyelidR.visible = closed;
      eyeL.visible = eyeR.visible = !closed;
    }

    // --- Form Input Events to Control Bear Eyes ---
    // Bear's eyes close when typing in username or email fields, open otherwise
    const bearInputs = document.querySelectorAll('.bear-input');
    let isBearEyesClosed = false;

    function updateBearEyes() {
      // Only watch visible form's username and email
      let visibleInputs = [];
      if (!loginForm.classList.contains('hidden')) {
        visibleInputs = loginForm.querySelectorAll('.bear-input');
      } else {
        visibleInputs = registerForm.querySelectorAll('.bear-input');
      }
      let focused = false;
      visibleInputs.forEach(input => {
        if (document.activeElement === input) focused = true;
      });
      setBearEyes(focused);
    }

    bearInputs.forEach(input => {
      input.addEventListener('focus', updateBearEyes);
      input.addEventListener('blur', updateBearEyes);
      input.addEventListener('input', updateBearEyes);
    });

    // Also open bear's eyes on form switch
    updateBearEyes();
  
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
      
<div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center bg-white/80 rounded-2xl shadow-2xl p-8 md:p-14">

<div className="flex-shrink-0 flex items-center justify-center">
<canvas height="350" id="three-canvas" tabindex="0" width="350"></canvas>
</div>

<div className="w-full max-w-md relative">
<button className="absolute top-3 right-4 text-pink-700 underline text-sm z-10" id="toggle-form">Switch to Register</button>

<form className="fade-in" id="login-form">
<h2 className="text-2xl font-bold mb-4 text-yellow-700">Login</h2>
<div className="mb-4">
<label className="block text-gray-700 mb-1">Email</label>
<input className="bear-input w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400" required type="email" />
</div>
<div className="mb-6">
<label className="block text-gray-700 mb-1">Password</label>
<input className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400" required type="password" />
</div>
<button className="w-full py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition" type="submit">Login</button>
</form>

<form className="fade-in fade-in-delay hidden" id="register-form">
<h2 className="text-2xl font-bold mb-4 text-pink-700">Register</h2>
<div className="mb-4">
<label className="block text-gray-700 mb-1">Username</label>
<input className="bear-input w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-400" required type="text" />
</div>
<div className="mb-4">
<label className="block text-gray-700 mb-1">Email</label>
<input className="bear-input w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-400" required type="email" />
</div>
<div className="mb-6">
<label className="block text-gray-700 mb-1">Password</label>
<input className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-400" required type="password" />
</div>
<button className="w-full py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition" type="submit">Register</button>
</form>
</div>
</div>


    </>
  );
}
