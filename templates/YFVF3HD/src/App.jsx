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
            inter: ['Inter', 'sans-serif'],
            geist: ['Geist', 'sans-serif'],
          },
          letterSpacing: {
            tightest: '-.04em',
            tighter: '-.03em',
            tight: '-.02em',
          },
          fontSize: {
            heading: 'clamp(3rem,7vw,4rem)',
            subheading: 'clamp(1rem,2vw,1.25rem)',
            body: 'clamp(0.875rem,1.5vw,1rem)',
          }
        }
      }
    }
  


    class SilkShader {
      constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.clock = new THREE.Clock();
        this.init();
        this.createShaderMaterial();
        this.createMesh();
        this.animate();
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
      }
      init() {
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);
      }
      hexToNormalizedRGB(hex) {
        hex = hex.replace("#", "");
        return new THREE.Vector3(
          parseInt(hex.slice(0, 2), 16) / 255,
          parseInt(hex.slice(2, 4), 16) / 255,
          parseInt(hex.slice(4, 6), 16) / 255
        );
      }
      createShaderMaterial() {
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
            float pattern = 0.6 +
                            0.4 * sin(5.0 * (tex.x + tex.y +
                                            cos(3.0 * tex.x + 5.0 * tex.y) +
                                            0.02 * tOffset) +
                                    sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
            vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
            col.a = 0.8;
            gl_FragColor = col;
          }
        `;
        this.uniforms = {
          uTime: { value: 0 },
          uSpeed: { value: 2 },
          uScale: { value: 1.5 },
          uNoiseIntensity: { value: 1.2 },
          uColor: { value: this.hexToNormalizedRGB("#6366F1") },
          uRotation: { value: 0.5 }
        };
        this.material = new THREE.ShaderMaterial({
          uniforms: this.uniforms,
          vertexShader,
          fragmentShader,
          transparent: true
        });
      }
      createMesh() {
        const geometry = new THREE.PlaneGeometry(2, 2);
        this.mesh = new THREE.Mesh(geometry, this.material);
        this.scene.add(this.mesh);
      }
      handleResize() {
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
      }
      animate() {
        requestAnimationFrame(() => this.animate());
        const delta = this.clock.getDelta();
        this.uniforms.uTime.value += 0.1 * delta;
        this.renderer.render(this.scene, this.camera);
      }
    }
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('shader-canvas');
      if (container) new SilkShader(container);
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
      

<nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="text-lg font-semibold tracking-tight font-geist">YourBrand</div>
<div className="hidden md:flex space-x-8 text-sm font-inter">
<a className="text-gray-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6 flex items-center min-h-[60vh] overflow-hidden">
<div id="shader-canvas"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
<div className="max-w-3xl mx-auto relative z-20 text-center">
<h1 className="text-heading animate-slide-in animate-sequence-1 text-5xl tracking-tight font-geist mb-0">Flexible Pricing for Every Team</h1>
<p className="text-subheading animate-slide-in animate-sequence-2 text-gray-300 font-inter mb-10">Choose the plan that’s right for you and unlock powerful features.</p>
<a className="inline-block font-semibold px-8 py-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white transition-all shadow-lg font-inter text-subheading animate-slide-in animate-sequence-3" href="#plans">See Plans</a>
</div>
</section>

<section className="relative z-10 bg-gray-900 pt-4 pr-6 pb-24 pl-6" id="plans">
<div className="max-w-6xl mx-auto">
<div className="grid gap-8 md:grid-cols-3">

<div className="animate-slide-in animate-sequence-1 flex flex-col gap-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl px-7 py-8 shadow-2xl border border-gray-700">
<div className="">
<span className="font-geist text-lg font-semibold tracking-tight">Free</span>
<div className="mt-2 font-geist font-semibold tracking-tight text-heading">$0</div>
<span className="text-gray-400 text-body mt-1 block font-inter">per month</span>
</div>
<hr className="w-full h-px bg-gray-700 border-none my-1"/>
<ul className="flex flex-col gap-3 font-inter text-body">
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span>Basic Chat Access</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">Limited Daily Messages</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span>Community Support</span>
</li>
</ul>
<div className="mt-3">
<button className="w-full text-body font-medium text-white border border-gray-600 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 font-inter">Get Started</button>
</div>
</div>

<div className="animate-slide-in animate-sequence-2 flex flex-col gap-6 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 rounded-2xl px-9 py-10 shadow-2xl border-2 border-purple-600 scale-105 z-10 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg font-inter">Most Popular</div>
<div className="">
<span className="font-geist text-lg font-semibold tracking-tight">Pro</span>
<div className="mt-2 font-geist font-semibold tracking-tight text-heading">$19</div>
<span className="text-gray-400 text-body mt-1 block font-inter">per month</span>
</div>
<hr className="w-full h-px bg-gray-700 border-none my-1"/>
<ul className="flex flex-col gap-3 font-inter text-body">
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">Unlimited Messages</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">Priority Response</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">Advanced AI Models</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">File Upload &amp; Analysis</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">24/7 Premium Support</span>
</li>
</ul>
<div className="mt-3">
<button className="w-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium text-white px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 via-fuchsia-500 to-purple-600 shadow-lg">Upgrade Now</button>
</div>
</div>

<div className="animate-slide-in animate-sequence-3 flex flex-col gap-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl px-7 py-8 shadow-2xl border border-gray-700">
<div>
<span className="font-geist text-lg font-semibold tracking-tight">Enterprise</span>
<div className="mt-2 font-geist font-semibold tracking-tight text-heading">Custom</div>
<span className="text-gray-400 text-body mt-1 block font-inter">Contact Us</span>
</div>
<hr className="w-full h-px bg-gray-700 border-none my-1"/>
<ul className="flex flex-col gap-3 font-inter text-body">
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">All Pro Features</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span>Team Management</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span className="">Dedicated Success Manager</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span>Custom Integrations</span>
</li>
<li className="flex items-center gap-3">
<span className="flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fill-rule="evenodd"></path></svg>
</span>
<span>SLA &amp; Priority Support</span>
</li>
</ul>
<div className="mt-3">
<button className="w-full text-body font-medium text-white border border-gray-600 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 font-inter">Contact Sales</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-800 py-10 px-6 bg-gray-900 text-center text-gray-400 font-inter text-body">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="font-geist font-semibold mb-4 md:mb-0 tracking-tight">YourBrand</div>
<div className="flex space-x-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>




    </>
  );
}
