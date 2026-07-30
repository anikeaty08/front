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



    // Theme switching functionality
    const themeButtons = document.querySelectorAll('.theme-option');
    
    themeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        
        // Remove active class from all buttons
        themeButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Apply theme
        if (theme === 'rhythmic-heat') {
          document.body.setAttribute('data-theme', 'rhythmic-heat');
        } else {
          document.body.removeAttribute('data-theme');
        }
      });
    });

    // Three.js Shader Background
    const container = document.getElementById('canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec2 iResolution;
      uniform float iTime;
      uniform int iGlobalFrame;
      varying vec2 vUv;

      const vec3 color1 = vec3(0.66,0.33,0.97);
      const vec3 color2 = vec3(0.06,0.65,0.89);
      const vec3 color3 = vec3(0.93,0.28,0.60);
      const vec3 color4 = vec3(0.39,0.40,0.95);
      const vec3 color5 = vec3(0.02,0.71,0.83);

      float hash(float n) { return fract(sin(n)*753.5453123); }

      float wave(vec2 uv, float t) {
        return sin(uv.x*12.0 + sin(uv.y*2.3 + t*0.7)*1.2 + t*2.3)*0.45 + 0.5;
      }

      void main() {
        vec2 uv = vUv;
        float t = iTime;
        
        vec3 base = mix(color1, color2, uv.y);
        base = mix(base, color3, 0.2 + 0.3*sin(t*0.2));
        base = mix(base, color4, 0.3 + 0.2*cos(t*0.18));

        float w1 = wave(uv, t*0.8);
        float w2 = wave(uv*1.5 + 0.2, -t*1.1 + 0.7);
        float w3 = wave(uv*2.0 + 0.7, t*0.5 - 0.8);
        
        float waveform = w1*0.45 + w2*0.32 + w3*0.23;
        float glow = smoothstep(0.6, 0.83, waveform);

        float pulse = 0.35 + 0.15*sin(t*1.7 + uv.x*8.0 + uv.y*3.0);
        vec3 neon = mix(color5, color3, pulse);

        vec3 color = mix(base, neon, glow*0.85);

        float vignette = smoothstep(0.8,0.35, length(uv-0.5));
        color *= vignette*0.83 + 0.17;

        gl_FragColor = vec4(color,1.0);
      }
    `;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      iGlobalFrame: { value: 0 }
    };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frame = 0;
    function animate() {
      requestAnimationFrame(animate);
      uniforms.iTime.value = performance.now() / 1000;
      uniforms.iGlobalFrame.value = frame++;
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);
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
      
<div id="canvas"></div>
<div className="hero-overlay"></div>
<nav className="fixed top-0 left-0 w-full z-30 flex justify-center transition-all duration-300">
<div className="glass-glow rounded-3xl px-8 py-4 flex justify-between items-center gap-8 max-w-5xl w-[95%] md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-lg mt-5 mx-auto transition-all duration-200 backdrop-blur-md">
<div className="flex items-center gap-3">
<span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r drop-shadow-md tracking-tight" style={{background: `linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))`, webkitBackgroundClip: `text`, backgroundClip: `text`}}>AuraTunes</span>
</div>
<div className="hidden md:flex gap-6 items-center font-medium">
<a className="menu-animated-link transition" href="#">How It Works</a>
<a className="menu-animated-link transition" href="#">AI Music Engine</a>
<a className="menu-animated-link transition" href="#">Plans & Perks</a>
<a className="menu-animated-link transition" href="#">For Creators</a>
<a className="ml-3 px-4 py-1.5 rounded-xl bg-white/10 border font-semibold text-sm shadow-sm transition-all duration-150" href="#" style={{borderColor: `var(--primary)20`, background: `var(--primary)10`, color: `var(--primary)`}}>
          Join Beta
        </a>
</div>
<button className="md:hidden" style={{color: `var(--text-bright)`}}>
<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<div className="fixed top-24 left-0 w-full z-20 flex justify-center">
<div className="theme-selector rounded-2xl px-6 py-3 flex items-center gap-4 shadow-lg">
<span className="text-sm font-medium" style={{color: `var(--text)`}}>Theme:</span>
<div className="flex gap-3">
<button className="theme-option active px-4 py-2 rounded-lg text-sm font-medium transition-all" data-theme="default" style={{color: `var(--text)`}}>
<span className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500"></div>
            Neon Pulse
          </span>
</button>
<button className="theme-option px-4 py-2 rounded-lg text-sm font-medium transition-all" data-theme="rhythmic-heat" style={{color: `var(--text)`}}>
<span className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-500 via-amber-500 to-yellow-400"></div>
            Rhythmic Heat
          </span>
</button>
</div>
</div>
</div>
<section className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 pt-40 pb-16">
<div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
<div className="mt-10"></div>
<div className="flex flex-col items-center gap-6 relative select-none">
<div className="relative">
<img alt="Album Art" className="album-art-glow rounded-2xl w-36 h-36 object-cover border-4 shadow-2xl" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=320&h=320" style={{borderColor: `var(--primary)`}} />
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1 items-end z-10">
<div className="wave-bar w-2 rounded"></div>
<div className="wave-bar w-2 rounded"></div>
<div className="wave-bar w-2 rounded"></div>
<div className="wave-bar w-2 rounded"></div>
<div className="wave-bar w-2 rounded"></div>
</div>
</div>
<div className="uppercase text-xs tracking-widest font-semibold mt-2" style={{color: `var(--primary)`}}>
          Now Playing: <span style={{color: `var(--accent)`}}>AI Soundscape</span>
</div>
</div>
<h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter bg-clip-text text-transparent drop-shadow-lg" style={{background: `linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))`, webkitBackgroundClip: `text`, backgroundClip: `text`}}>
        Feel the Beat.<br />Hear Your Story.
      </h1>
<p className="max-w-2xl text-lg md:text-2xl font-medium mx-auto drop-shadow" style={{color: `var(--text)`}}>
        Discover a new kind of music experience powered by AI.<br />
<span className="font-semibold" style={{color: `var(--primary)`}}>AuraTunes</span> adapts to your mood, style, and rhythm — <span style={{color: `var(--accent)`}}>like it was made just for you</span>.
      </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
<a className="start-listening-btn inline-flex items-center gap-2 font-semibold text-lg px-6 py-3 rounded-xl shadow-xl text-white transition-all duration-200 border-0 outline-none" href="#" style={{background: `linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))`}}>
          Start Listening
        </a>
<a className="how-it-works-btn inline-flex items-center gap-2 font-semibold text-lg px-6 py-3 rounded-xl border-2 bg-white/5 transition-all duration-200 outline-none" href="#" style={{borderColor: `var(--accent)60`, color: `var(--text)`, background: `var(--primary)05`}}>
          How It Works
        </a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-4xl w-full mx-auto">

<div className="bg-white/5 rounded-xl p-6 shadow-lg transition-all duration-300 flex flex-col items-center transform hover:scale-105 focus:scale-105 cursor-pointer" style={{border: `1px solid var(--primary)20`, background: `var(--primary)05`}}>
<div className="rotating-glow glow-1 mb-4" style={{width: `70px`, height: `70px`}}>
<div className="relative flex items-center justify-center w-12 h-12 z-10">
<span className="relative flex items-center justify-center w-12 h-12 rounded-lg" style={{background: `linear-gradient(to bottom right, var(--primary), var(--accent))`}}>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19V6l12-2v13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
<h3 className="font-semibold text-lg mb-2 text-center" style={{color: `var(--text-bright)`}}>AI-Generated Playlists</h3>
<p className="text-sm text-center" style={{color: `var(--text)`}}>Music crafted to match your every mood and moment — always fresh, always you.</p>
</div>

<div className="bg-white/5 rounded-xl p-6 shadow-lg transition-all duration-300 flex flex-col items-center transform hover:scale-105 focus:scale-105 cursor-pointer" style={{border: `1px solid var(--accent)20`, background: `var(--accent)05`}}>
<div className="rotating-glow glow-2 mb-4" style={{width: `70px`, height: `70px`}}>
<div className="relative flex items-center justify-center w-12 h-12 z-10">
<span className="relative flex items-center justify-center w-12 h-12 rounded-lg" style={{background: `linear-gradient(to bottom right, var(--accent), var(--gradient-end))`}}>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
<path d="M9 8h6v8H9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
<h3 className="font-semibold text-lg mb-2 text-center" style={{color: `var(--text-bright)`}}>Immersive Sound</h3>
<p className="text-sm text-center" style={{color: `var(--text)`}}>Studio-quality streaming with spatial audio — hear music like never before.</p>
</div>

<div className="bg-white/5 rounded-xl p-6 shadow-lg transition-all duration-300 flex flex-col items-center transform hover:scale-105 focus:scale-105 cursor-pointer" style={{border: `1px solid var(--gradient-start)20`, background: `var(--gradient-start)05`}}>
<div className="rotating-glow glow-3 mb-4" style={{width: `70px`, height: `70px`}}>
<div className="relative flex items-center justify-center w-12 h-12 z-10">
<span className="relative flex items-center justify-center w-12 h-12 rounded-lg" style={{background: `linear-gradient(to bottom right, var(--gradient-start), var(--primary))`}}>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
</svg>
</span>
</div>
</div>
<h3 className="font-semibold text-lg mb-2 text-center" style={{color: `var(--text-bright)`}}>Personal Sound Journeys</h3>
<p className="text-sm text-center" style={{color: `var(--text)`}}>Your own soundtrack, evolving with you — unique every time you press play.</p>
</div>
</div>
</div>
</section>


    </>
  );
}
