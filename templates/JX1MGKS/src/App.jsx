import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


lucide.createIcons(); document.getElementById('year').textContent = new Date().getFullYear();


    const canvas = document.getElementById('shader-bg');
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `void main(){gl_Position=vec4(position,1.0);}`,
      fragmentShader: `
        uniform vec2 iResolution;
        uniform float iTime;
        float strength(vec2 src, vec2 dir, vec2 c,float a,float b,float s){
          vec2 d=c-src; float cosang=dot(normalize(d),dir);
          return clamp((0.45+0.15*sin(cosang*a+iTime*s))+(0.3+0.2*cos(-cosang*b+iTime*s)),0.,1.)*
                 clamp((iResolution.x-length(d))/iResolution.x,0.5,1.);
        }
        void main(){
          vec2 c=gl_FragCoord.xy, res=iResolution;
          vec2 p1=res*vec2(.7,-.4), d1=normalize(vec2(1.,-.116));
          vec2 p2=res*vec2(.8,-.6), d2=normalize(vec2(1.,.241));
          vec4 col=vec4(0);
          col+=vec4(1)*strength(p1,d1,c,36.22,21.11,1.5)*.5;
          col+=vec4(1)*strength(p2,d2,c,22.39,18.02,1.1)*.4;
          float br=1.-(c.y/res.y);
          col.x*=.1+br*.8; col.y*=.3+br*.6; col.z*=.5+br*.5;
          gl_FragColor=col*.25;
        }
      `
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    function resize() {const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    }

    function animate() {
      uniforms.iTime.value = performance.now() * 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // FAQ Section
    const faqSection = document.createElement('section');
    faqSection.id = 'faq';
    faqSection.className = 'relative z-10 py-24 px-6 lg:px-10 bg-white/5 backdrop-blur-lg border-t border-white/10';
    faqSection.innerHTML = `
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-center fade-in">Frequently Asked Questions</h2>
        <div class="mt-16 space-y-6">
          <div class="bg-black/70 border border-white/10 rounded-2xl p-6 fade-in">
            <h3 class="text-lg font-semibold mb-3">How does the pricing work?</h3>
            <p class="text-gray-400">You pay only for render calls—each time your shader processes a frame. All plans include unlimited team members and projects.</p>
          </div>
          <div class="bg-black/70 border border-white/10 rounded-2xl p-6 fade-in fade-1">
            <h3 class="text-lg font-semibold mb-3">Can I use my own shaders?</h3>
            <p class="text-gray-400">Absolutely! Import GLSL code directly or use our visual editor. We support both approaches seamlessly.</p>
          </div>
          <div class="bg-black/70 border border-white/10 rounded-2xl p-6 fade-in fade-2">
            <h3 class="text-lg font-semibold mb-3">What browsers are supported?</h3>
            <p class="text-gray-400">Nexus works on all modern browsers with WebGL 2.0 support—Chrome, Firefox, Safari, and Edge.</p>
          </div>
        </div>
      </div>
    `;

    // Insert FAQ before CTA section
    const ctaSection = document.querySelector('section:nth-last-child(2)');
    ctaSection.parentNode.insertBefore(faqSection, ctaSection);

    // Re-observe new FAQ elements
    faqSection.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full -z-10" height="1048" id="shader-bg" style={{width: '1211px', height: '1048px'}} width="1211"></canvas>

<nav className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-10 fade-in animate-in">
<div className="flex items-center gap-2 text-2xl font-semibold tracking-tight font-jakarta">
<span className="relative inline-block">
<span className="text-lg font-light tracking-tighter bg-black/50 border-white/10 border rounded-lg pt-1 pr-2 pb-1 pl-2 backdrop-blur-md">Nexus</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="text-gray-300 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#testimonials">Stories</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<button className="hover:bg-gray-100 active:scale-95 transition-all text-sm font-medium text-black tracking-tight bg-white rounded-md pt-2 pr-4 pb-2 pl-4">
      Get Started
    </button>
</nav>

<header className="relative z-10 min-h-[80vh] flex items-center justify-center px-6 pt-20 lg:pt-0 text-center">
<div className="max-w-5xl mx-auto">
<h1 className="md:text-7xl fade-in fade-1 animate-in text-5xl font-medium tracking-tighter font-jakarta">
        Unleash the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">power of real-time</span> shaders
      </h1>
<p className="max-w-3xl md:text-2xl fade-in fade-2 animate-in text-lg font-light text-gray-300 mt-6 mr-auto ml-auto">
        Nexus delivers GPU-accelerated visuals, letting your team prototype, iterate and ship dazzling experiences—without the complexity.
      </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center fade-in fade-3 animate-in">
<button className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all hover:scale-105">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Start Free Trial
        </button>
<button className="border border-white/20 text-white flex items-center gap-2 px-6 py-3 rounded-md font-medium hover:border-white/40 transition-all hover:scale-105">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg> Watch Demo
        </button>
</div>
</div>
</header>

<div className="relative z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-6 lg:mx-10"></div>

<section className="relative z-10 py-24 px-6 lg:px-10" id="features">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center fade-in animate-in">Crafted for developers &amp; designers</h2>
<p className="mt-4 max-w-xl mx-auto text-center text-gray-400 fade-in fade-1 animate-in">
        Nexus abstracts away the math, giving you beautiful visuals through a simple, declarative API.
      </p>
<div className="mt-16 grid md:grid-cols-3 gap-8">

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all fade-in animate-in">
<div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-md mb-6">
<svg className="lucide lucide-zap text-blue-400 w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">60 FPS Guaranteed</h3>
<p className="text-gray-400 leading-relaxed">Our renderer adjusts workloads on-the-fly to keep your scenes butter-smooth—even on integrated GPUs.</p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all fade-in fade-1 animate-in">
<div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-md mb-6">
<svg className="lucide lucide-layers text-purple-400 w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Composable Effects</h3>
<p className="text-gray-400 leading-relaxed">Mix, match and nest effects to create unique looks—no shader knowledge required.</p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all fade-in fade-2 animate-in">
<div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-md mb-6">
<svg className="lucide lucide-cpu text-cyan-400 w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">GPU-Level Control</h3>
<p className="text-gray-400 leading-relaxed">Need more? Drop down to GLSL with live-reloading and advanced profiling built-in.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-10 bg-white/5 backdrop-blur-lg border-y border-white/10" id="pricing">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight fade-in animate-in">Simple, usage-based pricing</h2>
<p className="mt-4 text-gray-300 max-w-xl mx-auto fade-in fade-1 animate-in">
        Pay only for what you render. Unlimited team seats on every plan.
      </p>
<div className="mt-16 grid sm:grid-cols-2 gap-8">

<div className="relative bg-black/70 border border-white/10 rounded-2xl p-8 text-left hover:border-white/20 transition-all fade-in animate-in">
<span className="absolute -top-3 left-4 bg-cyan-600 text-xs px-2 py-1 rounded-md">Popular</span>
<h3 className="text-xl font-semibold tracking-tight mb-2">Growth</h3>
<p className="text-gray-400 mb-6">For growing teams shipping interactive visuals.</p>
<p className="text-4xl font-semibold tracking-tight">$49<span className="text-lg font-medium text-gray-400">/mo</span></p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 500k render calls
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited projects
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Email support
            </li>
</ul>
<button className="w-full mt-8 bg-white text-black py-3 rounded-md font-medium hover:bg-gray-100 transition-all">Start Trial</button>
</div>
<div className="bg-black/70 border border-white/10 rounded-2xl p-8 text-left hover:border-white/20 transition-all fade-in fade-1 animate-in">
<h3 className="text-xl font-semibold tracking-tight mb-2">Enterprise</h3>
<p className="text-gray-400 mb-6">Custom shaders, dedicated GPU clusters &amp; on-prem options.</p>
<p className="text-4xl font-semibold tracking-tight">$199<span className="text-lg font-medium text-gray-400">/mo</span></p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 5M render calls
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated CSM
            </li>
</ul>
<button className="w-full mt-8 bg-white text-black py-3 rounded-md font-medium hover:bg-gray-100 transition-all">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-10" id="testimonials">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight fade-in animate-in">Loved by creative teams</h2>
<p className="mt-4 text-gray-400 max-w-xl mx-auto fade-in fade-1 animate-in">
        Join thousands building immersive web experiences.
      </p>
<div className="mt-16 grid md:grid-cols-3 gap-8">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left fade-in animate-in">
<p className="text-gray-300 italic">“Nexus cut our prototyping time in half. The live shader editing is <span className="text-white">mind-blowing</span>.”</p>
<div className="mt-4 flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div>
<p className="font-semibold text-sm tracking-tight">Ava Moreno</p>
<p className="text-xs text-gray-400">Design Lead, Fuse</p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left fade-in fade-1 animate-in">
<p className="text-gray-300 italic">“The pricing model is transparent, and the docs are stellar. Our devs transitioned in a day.”</p>
<div className="mt-4 flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div>
<p className="font-semibold text-sm tracking-tight">James Kim</p>
<p className="text-xs text-gray-400">CTO, Nova</p>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left fade-in fade-2 animate-in">
<p className="text-gray-300 italic">“We shipped an intricate interactive hero in two days. Our marketing team is ecstatic.”</p>
<div className="mt-4 flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div>
<p className="font-semibold text-sm tracking-tight">Sophia Allen</p>
<p className="text-xs text-gray-400">PM, Horizon</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-10 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-jakarta fade-in animate-in">Ready to render the impossible?</h2>
<p className="mt-6 text-lg md:text-2xl text-gray-300 fade-in fade-1 animate-in">
        Start your free trial—no credit card required.
      </p>
<button className="mt-10 bg-white text-black px-8 py-4 rounded-md font-medium hover:bg-gray-100 active:scale-95 transition-all fade-in fade-2 animate-in">
        Create Account
      </button>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 px-6 py-10 lg:px-10">
<div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-sm">
<div className="space-y-3">
<p className="font-semibold tracking-tight">Nexus</p>
<p className="text-gray-400">© <span id="year">2025</span> Nexus Labs. All rights reserved.</p>
</div>
<div className="flex flex-wrap gap-6">
<a className="text-gray-300 hover:text-white transition-colors" href="#">Status</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>





    </>
  );
}
