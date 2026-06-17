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



    // Silk shader implementation
    const canvas = document.getElementById('silk-canvas');
    const parent = canvas.parentElement;
    
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    
    function resizeCanvas() {
      const rect = parent.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    resizeCanvas();
    
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uSpeed;
      uniform float uScale;
      uniform float uRotation;
      uniform float uNoiseIntensity;
      
      const float e = 2.71828182845904523536;
      
      float noise(vec2 texCoord) {
        float G = e;
        vec2 r = (G * sin(G * texCoord));
        return fract(r.x * r.y * (1.0 + texCoord.x));
      }
      
      vec2 rotateUvs(vec2 uv, float angle) {
        float c = cos(angle);
        float s = sin(angle);
        mat2 rot = mat2(c, -s, s, c);
        return rot * uv;
      }
      
      void main() {
        float rnd = noise(gl_FragCoord.xy);
        vec2 uv = rotateUvs(vUv * uScale, uRotation);
        vec2 tex = uv * uScale;
        float tOffset = uSpeed * uTime;
        
        tex.y += 0.03 * sin(8.0 * tex.x - tOffset);
        
        float pattern = 0.6 + 0.4 * sin(5.0 * (tex.x + tex.y + cos(3.0 * tex.x + 5.0 * tex.y) + 0.02 * tOffset) + sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
        
        vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
        col.a = 1.0;
        gl_FragColor = col;
      }
    `;

    const uniforms = {
      uSpeed: { value: 8 },
      uScale: { value: 1 },
      uNoiseIntensity: { value: 1.5 },
      uColor: { value: new THREE.Color(0.267, 0.267, 0.267) },
      uRotation: { value: 2.74 },
      uTime: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    
    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      uniforms.uTime.value += 0.1 * delta;
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', resizeCanvas);
    animate();

    // Multi-step form logic
    let currentStep = 1;
    const totalSteps = 4;

    function updateStepIndicators() {
      for (let i = 1; i <= totalSteps; i++) {
        const indicator = document.querySelectorAll('.step-indicator')[i-1];
        indicator.classList.remove('active', 'completed');
        
        if (i < currentStep) {
          indicator.classList.add('completed');
          indicator.innerHTML = '✓';
        } else if (i === currentStep) {
          indicator.classList.add('active');
          indicator.innerHTML = i;
        } else {
          indicator.innerHTML = i;
        }
      }
    }

    function showStep(step) {
      document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(`step-${step}`).classList.add('active');
      
      // Update button visibility
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      
      prevBtn.style.display = step === 1 ? 'none' : 'block';
      nextBtn.textContent = step === totalSteps ? 'Complete Profile' : 'Continue →';
      
      updateStepIndicators();
    }

    document.getElementById('next-btn').addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      } else {
        alert('Profile completed successfully!');
      }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    });

    // Avatar upload functionality
    document.querySelector('.avatar-upload').addEventListener('click', () => {
      document.getElementById('avatar').click();
    });

    document.getElementById('avatar').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.className = 'w-full h-full object-cover rounded-full';
          document.querySelector('.avatar-upload').innerHTML = '';
          document.querySelector('.avatar-upload').appendChild(img);
        };
        reader.readAsDataURL(file);
      }
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
      
<div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
<div className="flex">

<div className="w-1/2 relative text-white p-10 flex flex-col justify-center overflow-hidden">

<canvas id="silk-canvas"></canvas>
<div className="relative z-10 max-w-md space-y-8">
<div className="mb-8">
<h1 className="leading-tight text-4xl font-light tracking-tight mb-4">Complete Your Profile</h1>
<p className="leading-relaxed text-base text-gray-300 mb-6">Tell us about yourself to personalize your experience and help others discover you.</p>
</div>

<div className="space-y-4">
<div className="flex items-center space-x-4">
<div className="step-indicator active w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center text-sm font-medium">1</div>
<span className="text-sm">Basic Information</span>
</div>
<div className="flex items-center space-x-4">
<div className="step-indicator w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center text-sm font-medium">2</div>
<span className="text-sm">Profile Details</span>
</div>
<div className="flex items-center space-x-4">
<div className="step-indicator w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center text-sm font-medium">3</div>
<span className="text-sm">Preferences</span>
</div>
<div className="flex items-center space-x-4">
<div className="step-indicator w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center text-sm font-medium">4</div>
<span className="text-sm">Privacy &amp; Notifications</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 text-center mt-8">
<div>
<div className="text-xl font-semibold">2 min</div>
<div className="text-xs text-gray-400">Setup Time</div>
</div>
<div>
<div className="text-xl font-semibold">100%</div>
<div className="text-xs text-gray-400">Customizable</div>
</div>
</div>
</div>
</div>

<div className="w-1/2 px-10 py-10">
<div className="max-w-2xl">

<div className="form-section active" id="step-1">
<div className="mb-8">
<h2 className="text-2xl font-normal text-gray-900 tracking-tight mb-2">Basic Information</h2>
<p className="text-sm text-gray-600">Let's start with the essentials</p>
</div>
<div className="space-y-8">

<div className="flex flex-col items-center">
<div className="avatar-upload mb-3">
<input accept="image/*" className="hidden" id="avatar" type="file"/>
<div className="text-center flex flex-col items-center justify-center h-full">
<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<p className="text-xs text-gray-500">Upload Photo (JPG, PNG up to 5MB)</p>
</div>

<div className="border-t border-gray-200"></div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">First Name</label>
<input className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">Last Name</label>
<input className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="Doe" type="text"/>
</div>
</div>

<div className="border-t border-gray-200"></div>
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">Bio</label>
<textarea className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none" placeholder="Tell us about yourself..." rows="3"></textarea>
<p className="text-xs text-gray-500 mt-1">0/200 characters</p>
</div>
</div>
</div>

<div className="form-section" id="step-2">
<div className="mb-8">
<h2 className="text-2xl font-normal text-gray-900 tracking-tight mb-2">Profile Details</h2>
<p className="text-sm text-gray-600">Tell us more about yourself</p>
</div>
<div className="space-y-8">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">Location</label>
<input className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="New York, NY" type="text"/>
</div>
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">Website</label>
<input className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="https://yourwebsite.com" type="url"/>
</div>
</div>

<div className="border-t border-gray-200"></div>
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">Interests</label>
<div className="flex flex-wrap gap-2 mb-3">
<span className="px-3 py-1 bg-black text-white text-xs rounded-full">Technology</span>
<span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full cursor-pointer hover:bg-gray-300">Design</span>
<span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full cursor-pointer hover:bg-gray-300">Photography</span>
<span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full cursor-pointer hover:bg-gray-300">Travel</span>
<span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full cursor-pointer hover:bg-gray-300">Music</span>
</div>
<input className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="Add custom interest..." type="text"/>
</div>
</div>
</div>

<div className="form-section" id="step-3">
<div className="mb-8">
<h2 className="text-2xl font-normal text-gray-900 tracking-tight mb-2">Preferences</h2>
<p className="text-sm text-gray-600">Customize your experience</p>
</div>
<div className="space-y-8">
<div>
<label className="block text-gray-700 font-medium mb-3 text-sm">Theme</label>
<div className="grid grid-cols-3 gap-3">
<div className="border-2 border-black rounded-xl p-4 cursor-pointer bg-white">
<div className="w-full h-8 bg-white border rounded mb-2"></div>
<div className="text-xs text-center font-medium">Light</div>
</div>
<div className="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-black">
<div className="w-full h-8 bg-gray-900 rounded mb-2"></div>
<div className="text-xs text-center">Dark</div>
</div>
<div className="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-black">
<div className="w-full h-8 bg-gradient-to-r from-white to-gray-900 rounded mb-2"></div>
<div className="text-xs text-center">Auto</div>
</div>
</div>
</div>

<div className="border-t border-gray-200"></div>
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">Language</label>
<select className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition">
<option>English</option>
<option>Spanish</option>
<option>French</option>
<option>German</option>
</select>
</div>

<div className="border-t border-gray-200"></div>
<div>
<label className="block text-gray-700 font-medium mb-1.5 text-sm">Time Zone</label>
<select className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition">
<option>UTC-5 (Eastern Time)</option>
<option>UTC-6 (Central Time)</option>
<option>UTC-7 (Mountain Time)</option>
<option>UTC-8 (Pacific Time)</option>
</select>
</div>
</div>
</div>

<div className="form-section" id="step-4">
<div className="mb-8">
<h2 className="text-2xl font-normal text-gray-900 tracking-tight mb-2">Privacy &amp; Notifications</h2>
<p className="text-sm text-gray-600">Control your privacy and how we communicate with you</p>
</div>
<div className="space-y-8">
<div className="bg-gray-50 rounded-xl p-4">
<h3 className="font-medium text-gray-900 mb-3">Profile Visibility</h3>
<div className="space-y-3">
<label className="flex items-center">
<input className="mr-3 text-black focus:ring-black" name="visibility" type="radio" value="public"/>
<div>
<div className="text-sm font-medium">Public</div>
<div className="text-xs text-gray-600">Anyone can see your profile</div>
</div>
</label>
<label className="flex items-center">
<input checked="" className="mr-3 text-black focus:ring-black" name="visibility" type="radio" value="friends"/>
<div>
<div className="text-sm font-medium">Friends only</div>
<div className="text-xs text-gray-600">Only your connections can see your profile</div>
</div>
</label>
<label className="flex items-center">
<input className="mr-3 text-black focus:ring-black" name="visibility" type="radio" value="private"/>
<div>
<div className="text-sm font-medium">Private</div>
<div className="text-xs text-gray-600">Only you can see your profile</div>
</div>
</label>
</div>
</div>

<div className="border-t border-gray-200"></div>
<div className="bg-gray-50 rounded-xl p-4">
<h3 className="font-medium text-gray-900 mb-3">Email Notifications</h3>
<div className="space-y-3">
<label className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">New messages</div>
<div className="text-xs text-gray-600">Get notified when someone sends you a message</div>
</div>
<input checked="" className="ml-3 rounded border-gray-300 text-black focus:ring-black" type="checkbox"/>
</label>
<label className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Weekly digest</div>
<div className="text-xs text-gray-600">Summary of your weekly activity</div>
</div>
<input checked="" className="ml-3 rounded border-gray-300 text-black focus:ring-black" type="checkbox"/>
</label>
<label className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Product updates</div>
<div className="text-xs text-gray-600">News about new features and improvements</div>
</div>
<input className="ml-3 rounded border-gray-300 text-black focus:ring-black" type="checkbox"/>
</label>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-8">
<button className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition" id="prev-btn" style={{display: 'none'}}>
              ← Previous
            </button>
<div className="flex space-x-3">
<button className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition" id="skip-btn">
                Skip for now
              </button>
<button className="custom-btn rounded-xl" id="next-btn">
                Continue →
              </button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
