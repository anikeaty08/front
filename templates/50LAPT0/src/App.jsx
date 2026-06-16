import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({attrs:{'stroke-width':1.5}});
    /* Aurora */
    let scene,camera,renderer,particles;
    function initAurora(){
      scene=new THREE.Scene();
      camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,1000);
      renderer=new THREE.WebGLRenderer({canvas:document.getElementById('aurora-canvas'),alpha:true});
      renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0x000000,0);
      const count=700,positions=new Float32Array(count*3),colors=new Float32Array(count*3),sizes=new Float32Array(count);
      for(let i=0;i<count;i++){
        const i3=i*3;
        positions[i3]=(Math.random()-.5)*2000;
        positions[i3+1]=(Math.random()-.5)*1000;
        positions[i3+2]=(Math.random()-.5)*1000;
        colors[i3]=colors[i3+1]=colors[i3+2]=1;
        sizes[i]=Math.random()*7+2;
      }
      const geo=new THREE.BufferGeometry();
      geo.setAttribute('position',new THREE.BufferAttribute(positions,3));
      geo.setAttribute('color',new THREE.BufferAttribute(colors,3));
      geo.setAttribute('size',new THREE.BufferAttribute(sizes,1));
      const mat=new THREE.ShaderMaterial({
        vertexShader:`attribute float size;attribute vec3 color;varying vec3 vColor;varying float vA;uniform float time;
          void main(){vColor=color;vec3 p=position;p.x+=sin(time*.001+position.y*.01)*50.;p.y+=cos(time*.0015+position.x*.008)*30.;
          float d=length(p);vA=1.-d/1000.;vA=clamp(vA,0.,.8);vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=size*(300./-mv.z);
          gl_Position=projectionMatrix*mv;}`,
        fragmentShader:`varying vec3 vColor;varying float vA;
          void main(){float d=length(gl_PointCoord-vec2(.5));if(d>.5)discard;float a=(1.-d*2.)*vA;gl_FragColor=vec4(vColor,a);}`,
        uniforms:{time:{value:0}},transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
      particles=new THREE.Points(geo,mat);scene.add(particles);camera.position.z=500;animate();}
    function animate(){requestAnimationFrame(animate);particles.material.uniforms.time.value=Date.now();particles.rotation.y+=.0005;particles.rotation.x+=.0002;renderer.render(scene,camera);}
    addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});

    /* Card logic */
    const container=document.getElementById('cards-container'),dots=[...document.querySelectorAll('[id^=dot-]')];
    let current=1,locked=false;
    function updateDots(){dots.forEach((d,i)=>d.className=i+1===current?'w-2 h-2 rounded-full bg-cyan-400 scale-125':'w-2 h-2 rounded-full bg-white/30 hover:bg-white/50');}
    function setCard(n){if(locked||n===current)return;locked=true;container.className=`card-${n}-active`;current=n;updateDots();setTimeout(()=>locked=false,500);}
    dots.forEach((d,i)=>d.addEventListener('click',()=>setCard(i+1)));
    setInterval(()=>!locked&&setCard(current===4?1:current+1),6000);

    initAurora();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10 hue-rotate-15"><iframe frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div>

<canvas className="" height="953" id="aurora-canvas" style={{width: '1308px', height: '953px'}} width="1308"></canvas>

<nav className="fixed top-0 inset-x-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl lg:px-8 h-16 flex mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center space-x-2 opacity-0 animate-fade-in" style={{animationDelay: '.1s'}}>
<div className="w-8 h-8 flex bg-gradient-to-r from-indigo-400 to-blue-400 rounded-lg items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Quantum Forge</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm opacity-0 animate-slide-in" style={{animationDelay: '.2s'}}>
<a className="text-white/60 hover:text-white transition-colors" href="#">Collective</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Vision</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Connect</a>
</div>
</div>
</nav>

<main className="relative z-10 min-h-screen flex pt-16 px-6 items-center justify-center">
<div className="max-w-7xl w-full mr-auto ml-auto pt-8 pr-8 pl-8">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

<div className="flex-1 max-w-xl lg:pr-8">
<div className="flex items-center space-x-2 mb-6 opacity-0 animate-fade-in" style={{animationDelay: '.3s'}}>
<div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
<p className="text-sm uppercase tracking-widest text-white/60 font-medium">
              Quantum Forge • Est 2017 • 61 Exits
            </p>
</div>
<div className="mb-8 opacity-0 animate-slide-in" style={{animationDelay: '.4s'}}>
<h1 className="text-4xl lg:text-5xl xl:text-8xl font-medium leading-tight tracking-tighter mb-4">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Catalyzing Frontier
              </span>
<span className="block bg-clip-text italic text-transparent font-instrument-serif bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400">
                Technology Ventures
              </span>
</h1>
<p className="text-lg text-white/70 leading-relaxed">
              72 startups propelled to raise $3.1 B+ from globally renowned investors.
            </p>
</div>

<div className="space-y-4 text-sm text-white/60 opacity-0 animate-blur-in" style={{animationDelay: '.6s'}}>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-indigo-400 rounded-full"></div><span>Direct line to 60+ tier-1 funds</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span>93 % funding efficiency</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div><span>15 unicorns born</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div><span>Median 4.5× ROI</span>
</div>
</div>
</div>

<div className="flex flex-col space-y-8 items-center">

<section className="card-4-active" id="cards-container" style={{animationDelay: '.7s', cursor: 'grab'}}>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-up w-5 h-5 text-amber-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Series A-C</span>
</div>
<span className="text-sm font-semibold text-neutral-400">$11.6 B AUM</span>
</div>
<div className="flex-1 flex flex-col items-center text-center justify-center">
<div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<span className="text-3xl font-bold text-white">A</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Aurora Capital</h3>
<p className="text-sm text-white/60 mb-8">London, UK</p>

<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Startups Backed</span><span className="font-semibold">10</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Hit Ratio</span><span className="font-semibold text-neutral-400">88 %</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-indigo-500 to-red-600 h-2 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 glass rounded-xl text-white hover:bg-white/10 transition-all font-medium">
                  Portfolio Insight
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-rocket w-5 h-5 text-violet-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Seed-B</span>
</div>
<span className="text-sm font-semibold text-neutral-400">$14.9 B AUM</span>
</div>
<div className="flex-1 flex flex-col items-center text-center justify-center">
<div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<span className="text-lg font-bold text-white">N V</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-1">Nebula</h3>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Ventures</h3>
<p className="text-sm text-white/60 mb-8">New York, NY</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Startups Backed</span><span className="font-semibold">16</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Hit Ratio</span><span className="font-semibold text-neutral-400">91 %</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-violet-600 to-indigo-600 h-2 rounded-full" style={{width: '91%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 glass rounded-xl text-white hover:bg-white/10 transition-all font-medium">
                  Explore Deals
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-target w-5 h-5 text-emerald-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Series A-D</span>
</div>
<span className="text-sm font-semibold text-neutral-400">$7.8 B AUM</span>
</div>
<div className="flex-1 flex flex-col items-center text-center justify-center">
<div className="w-20 h-20 bg-gradient-to-br from-neutral-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-hexagon w-10 h-10 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Cosmos Fund</h3>
<p className="text-sm text-white/60 mb-8">Berlin, DE</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Startups Backed</span><span className="font-semibold">8</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Hit Ratio</span><span className="font-semibold text-neutral-400">84 %</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-neutral-500 to-blue-600 h-2 rounded-full" style={{width: '84%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 glass rounded-xl text-white hover:bg-white/10 transition-all font-medium">
                  View Thesis
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-zap w-5 h-5 text-orange-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Pre-Seed</span>
</div>
<span className="text-sm font-semibold text-neutral-400">$5.3 B AUM</span>
</div>
<div className="flex-1 flex flex-col items-center text-center justify-center">
<div className="w-20 h-20 bg-gradient-to-br from-neutral-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<span className="text-3xl font-bold text-white">S</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Stellar Launchpad</h3>
<p className="text-sm text-white/60 mb-8">Singapore</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Startups Backed</span><span className="font-semibold">26</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Hit Ratio</span><span className="font-semibold text-neutral-400">79 %</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-neutral-500 to-blue-500 h-2 rounded-full" style={{width: '79%'}}></div>
</div>
</div>
</div>
<button className="w-full py-3 glass rounded-xl text-white hover:bg-white/10 transition-all font-medium">
                  Accelerator Path
                </button>
</div>
</article>
</section>

<div className="flex space-x-3 opacity-0 animate-fade-in" style={{animationDelay: '.8s'}}>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50" id="dot-1"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50" id="dot-2"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50" id="dot-3"></button>
<button className="w-2 h-2 rounded-full bg-indigo-400 scale-125" id="dot-4"></button>
</div>
</div>
</div>

<div className="opacity-0 animate-slide-in text-center mt-16" style={{animationDelay: '.9s'}}>
<div className="space-y-6">
<h2 className="text-2xl font-medium">Shape the Quantum Future with Us</h2>
<p className="text-white/70 max-w-2xl mx-auto">
            Link arms with our syndicate of deep-tech believers and secure the capital your breakthrough deserves.
          </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-xl text-white font-medium hover:from-indigo-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl">
              Pitch Your Startup
            </button>
<button className="px-8 py-3 glass rounded-xl text-white hover:bg-white/10 transition-all font-medium">
              Download Overview
            </button>
</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 mt-24 py-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-md flex items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="font-medium">Quantum Forge</span>
</div>
<p className="text-sm text-white/50">© 2024 Quantum Forge LLC. Empowering next-gen innovators.</p>
<div className="flex space-x-6 text-sm text-white/60">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
