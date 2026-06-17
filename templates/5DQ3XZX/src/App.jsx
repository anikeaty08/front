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



    // Three.js Animated Background
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
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        float t = iTime * 0.3;
        
        vec3 color1 = vec3(0.93, 0.28, 0.60); // Pink
        vec3 color2 = vec3(0.39, 0.40, 0.95); // Purple  
        vec3 color3 = vec3(0.02, 0.71, 0.83); // Cyan
        
        // Create flowing waves
        float wave1 = sin(uv.x * 8.0 + t * 2.0) * 0.3;
        float wave2 = sin(uv.y * 6.0 + t * 1.5) * 0.3;
        float wave3 = sin((uv.x + uv.y) * 4.0 + t) * 0.2;
        
        float intensity = wave1 + wave2 + wave3;
        
        vec3 finalColor = mix(color1, color2, uv.y + intensity);
        finalColor = mix(finalColor, color3, uv.x * 0.3 + intensity * 0.5);
        
        // Add some sparkle
        float sparkle = sin(uv.x * 50.0 + t * 3.0) * sin(uv.y * 50.0 + t * 2.0);
        sparkle = smoothstep(0.8, 1.0, sparkle) * 0.3;
        finalColor += sparkle;
        
        // Vignette
        float vignette = smoothstep(0.8, 0.2, length(uv - 0.5));
        finalColor *= vignette * 0.7 + 0.3;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate() {
      requestAnimationFrame(animate);
      uniforms.iTime.value = performance.now() / 1000;
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

<div className="floating-music-note">♪</div>
<div className="floating-music-note">♫</div>
<div className="floating-music-note">♪</div>
<nav className="fixed top-0 left-0 w-full z-30 flex justify-center transition-all duration-300">
<div className="glass-panel rounded-2xl px-6 py-3 flex justify-between items-center gap-8 max-w-5xl w-[95%] md:w-4/5 lg:w-3/4 xl:w-2/3 mt-4 mx-auto">
<div className="flex items-center gap-2">
<div className="beat-indicator">
<div className="beat-bar"></div>
<div className="beat-bar"></div>
<div className="beat-bar"></div>
<div className="beat-bar"></div>
</div>
<span className="text-2xl font-bold text-transparent bg-clip-text ml-2" style={{background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
          AuraTunes
        </span>
</div>
<div className="hidden md:flex gap-6 items-center text-sm font-medium">
<a className="hover:text-purple-400 transition-colors" href="#">Discover</a>
<a className="hover:text-purple-400 transition-colors" href="#">Your Vibe</a>
<a className="hover:text-purple-400 transition-colors" href="#">Playlists</a>
<a className="px-4 py-2 bg-purple-600/20 rounded-lg border border-purple-500/30 hover:bg-purple-600/30 transition-all" href="#">
          Sign In
        </a>
</div>
<button className="md:hidden text-white">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>
<section className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 pt-32 pb-16">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">

<div className="soul-glow mb-8 relative">
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1">
<div className="w-full h-full rounded-full bg-slate-900/80 flex items-center justify-center backdrop-blur-sm">
<svg className="w-16 h-16 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
</svg>
</div>
</div>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-cyan-500/50 blur-xl"></div>
</div>

<h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-6">
<span className="block text-transparent bg-clip-text" style={{background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
          Stream with Soul.
        </span>
<span className="block text-transparent bg-clip-text" style={{background: 'linear-gradient(135deg, var(--gradient-mid), var(--gradient-end))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
          Feel Every Beat.
        </span>
</h1>
<p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed" style={{color: 'var(--text)'}}>
        Experience music that understands your soul. AuraTunes creates personalized soundscapes that move with your emotions, 
        <span className="font-semibold text-transparent bg-clip-text" style={{background: 'linear-gradient(135deg, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>
          making every moment more personal.
        </span>
</p>

<div className="glass-panel join-card-hover rounded-2xl p-8 max-w-md w-full mx-auto relative overflow-hidden">
<h3 className="text-2xl font-bold mb-4 text-center text-white relative z-10">
          Join <span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>AuraTunes</span> Beta
        </h3>
<p className="text-gray-300 mb-6 text-center relative z-10">Be among the first to experience music that truly gets you.</p>
<form className="space-y-4 relative z-10">
<input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm" placeholder="Enter your email" type="email"/>
<button className="cta-button w-full py-3 px-6 rounded-lg font-semibold text-white relative overflow-hidden" type="submit">
            Join AuraTunes Beta →
          </button>
</form>
<p className="text-xs text-gray-400 text-center mt-4 relative z-10">
          Free early access • No spam, ever • Cancel anytime
        </p>
</div>

<div className="flex flex-wrap justify-center gap-4 mt-12 max-w-2xl">

<div className="glass-panel tag-glow tag-glow-1 px-4 py-2 rounded-full text-sm font-medium">
<span className="tag-glow-bg"></span>
<span className="relative z-10">🎵 AI-Powered Playlists</span>
</div>

<div className="glass-panel tag-glow tag-glow-2 px-4 py-2 rounded-full text-sm font-medium">
<span className="tag-glow-bg"></span>
<span className="relative z-10">🎧 Spatial Audio</span>
</div>

<div className="glass-panel tag-glow tag-glow-3 px-4 py-2 rounded-full text-sm font-medium">
<span className="tag-glow-bg"></span>
<span className="relative z-10">💫 Mood Recognition</span>
</div>

<div className="glass-panel tag-glow tag-glow-4 px-4 py-2 rounded-full text-sm font-medium">
<span className="tag-glow-bg"></span>
<span className="relative z-10">🌊 Infinite Discovery</span>
</div>

<div className="glass-panel tag-glow tag-glow-5 px-4 py-2 rounded-full text-sm font-medium">
<span className="tag-glow-bg"></span>
<span className="relative z-10">🔒 Private Listening</span>
</div>

<div className="glass-panel tag-glow tag-glow-6 px-4 py-2 rounded-full text-sm font-medium">
<span className="tag-glow-bg"></span>
<span className="relative z-10">🌙 Night Mode</span>
</div>
</div>
</div>
</section>


    </>
  );
}
