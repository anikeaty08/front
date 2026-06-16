import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
    const totalSteps = 3;

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
      
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      
      prevBtn.style.display = step === 1 ? 'none' : 'block';
      nextBtn.textContent = step === totalSteps ? 'Complete Payment' : 'Continue →';
      
      updateStepIndicators();
    }

    document.getElementById('next-btn').addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      } else {
        alert('Payment processed successfully!');
      }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
<div className="flex min-h-[700px]">

<div className="w-1/2 relative text-white flex flex-col overflow-hidden">

<canvas height="1412" id="silk-canvas" style={{width: '448px', height: '706px'}} width="896"></canvas>
<div className="relative z-10 flex flex-col h-full p-8">

<div className="mb-8">
<h1 className="text-3xl font-light tracking-tight mb-2">Order Summary</h1>
<p className="text-sm text-gray-300">Review your purchase details</p>
</div>
<div className="flex-1 flex flex-col justify-between">

<div className="space-y-4 mb-8">
<div className="flex items-center space-x-3">
<div className="step-indicator active w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs font-medium">1</div>
<span className="text-sm">Payment Method</span>
</div>
<div className="flex items-center space-x-3">
<div className="step-indicator w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs font-medium">2</div>
<span className="text-sm">Billing Information</span>
</div>
<div className="flex items-center space-x-3">
<div className="step-indicator w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs font-medium">3</div>
<span className="text-sm">Review &amp; Confirm</span>
</div>
</div>

<div className="bg-black bg-opacity-20 rounded-xl p-6 backdrop-blur-sm mb-6">
<h3 className="font-medium mb-4 text-lg">Premium Plan</h3>
<div className="space-y-3 text-sm">
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Unlimited access to all features</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Priority customer support</span>
</div>
<div className="flex items-center space-x-2">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-300">Advanced analytics dashboard</span>
</div>
</div>
</div>

<div className="bg-black bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
<h3 className="font-medium mb-4">Payment Details</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between">
<span className="text-gray-300">Premium Plan (1 year)</span>
<span>$99.00</span>
</div>
<div className="flex justify-between">
<span className="text-gray-300">Tax</span>
<span className="">$8.91</span>
</div>
<div className="border-t border-white/10 pt-3 flex justify-between font-medium text-lg">
<span>Total</span>
<span>$107.91</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-1/2 bg-gray-50 flex flex-col">

<div className="border-b border-gray-200 bg-white p-8">
<h2 className="text-3xl font-light tracking-tight text-gray-900 mb-2">Secure Payment</h2>
<p className="text-sm text-gray-600">Complete your purchase safely and securely</p>
</div>
<div className="flex-1 p-8">
<div className="max-w-xl">

<div className="form-section active" id="step-1">
<div className="mb-8">
<h3 className="text-xl font-medium text-gray-900 mb-2">Payment Method</h3>
<p className="text-sm text-gray-600">Choose how you'd like to pay</p>
</div>
<div className="space-y-6">

<div className="space-y-3">
<label className="flex items-center p-4 border-2 border-black rounded-xl cursor-pointer bg-white">
<input checked="" className="mr-3 text-black focus:ring-black" name="payment" type="radio" value="card"/>
<div className="flex items-center">
<span className="font-medium">Credit/Debit Card</span>
</div>
</label>
<label className="flex items-center cursor-pointer hover:border-black bg-white border-gray-200 border-2 rounded-xl pt-4 pr-4 pb-4 pl-4">
<input className="focus:ring-black text-black mr-3" name="payment" type="radio" value="paypal"/>
<div className="flex items-center">
<span className="font-medium">PayPal</span>
</div>
</label>
</div>

<div className="card-preview bg-gradient-to-r from-indigo-500 to-purple-600">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-8 bg-slate-50/20 rounded"></div>
<span className="text-xs opacity-75">VISA</span>
</div>
<div className="space-y-4">
<div className="text-lg font-mono tracking-wider">•••• •••• •••• 1234</div>
<div className="flex justify-between">
<div className="">
<div className="text-xs opacity-75">CARDHOLDER</div>
<div className="text-sm">JOHN DOE</div>
</div>
<div>
<div className="text-xs opacity-75">EXPIRES</div>
<div className="text-sm">12/28</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="form-section" id="step-2">
<div className="mb-8">
<h3 className="text-xl font-medium text-gray-900 mb-2">Card Details</h3>
<p className="text-sm text-gray-600">Enter your payment information</p>
</div>
<div className="space-y-6">
<div>
<label className="block text-gray-700 font-medium mb-2 text-sm">Card Number</label>
<input className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="1234 5678 9012 3456" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-gray-700 font-medium mb-2 text-sm">Expiry Date</label>
<input className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="MM/YY" type="text"/>
</div>
<div>
<label className="block text-gray-700 font-medium mb-2 text-sm">CVV</label>
<input className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="123" type="text"/>
</div>
</div>
<div>
<label className="block text-gray-700 font-medium mb-2 text-sm">Cardholder Name</label>
<input className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="John Doe" type="text"/>
</div>
<div className="border-t pt-6">
<h4 className="font-medium text-gray-900 mb-4">Billing Address</h4>
<div className="space-y-4">
<input className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="Street Address" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="City" type="text"/>
<input className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition" placeholder="ZIP Code" type="text"/>
</div>
</div>
</div>
</div>
</div>

<div className="form-section" id="step-3">
<div className="mb-8">
<h3 className="text-xl font-medium text-gray-900 mb-2">Review &amp; Confirm</h3>
<p className="text-sm text-gray-600">Please review your order before completing</p>
</div>
<div className="space-y-6">
<div className="bg-white rounded-xl p-6 border border-gray-200">
<h4 className="font-medium text-gray-900 mb-4">Payment Summary</h4>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span>Card ending in 1234</span>
<span className="font-medium">$107.91</span>
</div>
<div className="flex justify-between text-sm">
<span>Billing to: John Doe</span>
</div>
</div>
</div>
<div className="bg-blue-50 rounded-xl p-4">
<div className="flex items-start">
<div className="text-sm">
<p className="font-medium text-blue-900">Secure Payment</p>
<p className="text-blue-700">Your payment information is encrypted and secure.</p>
</div>
</div>
</div>
<label className="flex items-center">
<input className="mr-3 rounded border-gray-300 text-black focus:ring-black" type="checkbox"/>
<span className="text-sm text-gray-600">I agree to the Terms of Service and Privacy Policy</span>
</label>
</div>
</div>

<div className="flex justify-between items-center mt-8">
<button className="px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition" id="prev-btn" style={{display: 'none'}}>
                ← Back
              </button>
<div className="flex space-x-3">
<button className="custom-btn rounded-xl px-8 py-3" id="next-btn">
                  Continue →
                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
