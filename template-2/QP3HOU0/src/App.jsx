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
      {

    // Aurora Comet Background Animation
    let scene, camera, renderer, particles;
    function initAurora(){
      scene=new THREE.Scene();
      camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
      renderer=new THREE.WebGLRenderer({canvas:document.getElementById('aurora-canvas'),alpha:true});
      renderer.setSize(window.innerWidth,window.innerHeight);
      renderer.setClearColor(0x000000,0);
      const particleCount=800;
      const positions=new Float32Array(particleCount*3);
      const colors=new Float32Array(particleCount*3);
      const sizes=new Float32Array(particleCount);
      const auroraColors=[new THREE.Color(0.38,0.67,1),new THREE.Color(0.69,0.41,0.95),new THREE.Color(1,0.42,0.7),new THREE.Color(0.37,0.97,0.56),new THREE.Color(1,0.76,0.29)];
      for(let i=0;i<particleCount;i++){
        const i3=i*3;
        positions[i3]=(Math.random()-0.5)*2000;
        positions[i3+1]=(Math.random()-0.5)*1000;
        positions[i3+2]=(Math.random()-0.5)*1000;
        const color=auroraColors[Math.floor(Math.random()*auroraColors.length)];
        colors[i3]=color.r;colors[i3+1]=color.g;colors[i3+2]=color.b;
        sizes[i]=Math.random()*8+2
      }
      const geometry=new THREE.BufferGeometry();
      geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
      geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
      geometry.setAttribute('size',new THREE.BufferAttribute(sizes,1));
      const material=new THREE.ShaderMaterial({
        vertexShader:`attribute float size;attribute vec3 color;varying vec3 vColor;varying float vAlpha;uniform float time;void main(){vColor=color;vec3 pos=position;pos.x+=sin(time*0.001+position.y*0.01)*50.0;pos.y+=cos(time*0.0015+position.x*0.008)*30.0;float dist=length(pos);vAlpha=1.0-(dist/1000.0);vAlpha=clamp(vAlpha,0.0,0.8);vec4 mvPosition=modelViewMatrix*vec4(pos,1.0);gl_PointSize=size*(300.0/-mvPosition.z);gl_Position=projectionMatrix*mvPosition;}`,
        fragmentShader:`varying vec3 vColor;varying float vAlpha;void main(){float dist=length(gl_PointCoord-vec2(0.5));if(dist>0.5)discard;float alpha=(1.0-dist*2.0)*vAlpha;gl_FragColor=vec4(vColor,alpha);}`,
        uniforms:{time:{value:0}},
        transparent:true,
        blending:THREE.AdditiveBlending,
        depthWrite:false
      });
      particles=new THREE.Points(geometry,material);
      scene.add(particles);
      camera.position.z=500;
      animate();
    }
    function animate(){
      requestAnimationFrame(animate);
      const time=Date.now();
      particles.material.uniforms.time.value=time;
      particles.rotation.y+=0.0005;
      particles.rotation.x+=0.0002;
      renderer.render(scene,camera);
    }
    window.addEventListener('resize',()=>{
      camera.aspect=window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth,window.innerHeight);
    });

    // Card Stack Interaction
    const cardsContainer=document.getElementById('cards-container');
    const dots=[document.getElementById('dot-1'),document.getElementById('dot-2'),document.getElementById('dot-3'),document.getElementById('dot-4')];
    let currentCard=1,isAnimating=false;
    function updateDots(){
      dots.forEach((dot,index)=>{
        if(index===currentCard-1){
          dot.className='w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 scale-125';
        }else{
          dot.className='w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300';
        }
      });
    }
    function setActiveCard(cardNumber){
      if(isAnimating||cardNumber===currentCard)return;
      isAnimating=true;
      cardsContainer.className=`card-${cardNumber}-active`;
      currentCard=cardNumber;
      updateDots();
      setTimeout(()=>{isAnimating=false},500);
    }
    dots.forEach((dot,index)=>{dot.addEventListener('click',()=>setActiveCard(index+1))});
    setInterval(()=>{if(!isAnimating){const nextCard=currentCard===4?1:currentCard+1;setActiveCard(nextCard)}},5000);

    // Initialize
    lucide.createIcons();
    initAurora();
  
}

{

    // Aurora Comet Background Animation
    let scene, camera, renderer, particles;
    function initAurora() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('aurora-canvas'),
        alpha: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      // Create aurora particles
      const particleCount = 800;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const auroraColors = [
        new THREE.Color(0.38, 0.67, 1), // blue-400
        new THREE.Color(0.69, 0.41, 0.95), // purple-400
        new THREE.Color(1, 0.42, 0.7), // pink-400
        new THREE.Color(0.37, 0.97, 0.56), // green-400
        new THREE.Color(1, 0.76, 0.29) // yellow-400
      ];
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 2000;
        positions[i3 + 1] = (Math.random() - 0.5) * 1000;
        positions[i3 + 2] = (Math.random() - 0.5) * 1000;
        const color = auroraColors[Math.floor(Math.random() * auroraColors.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
        sizes[i] = Math.random() * 8 + 2;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      const material = new THREE.ShaderMaterial({
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          varying float vAlpha;
          uniform float time;
          void main() {
            vColor = color;
            vec3 pos = position;
            pos.x += sin(time * 0.001 + position.y * 0.01) * 50.0;
            pos.y += cos(time * 0.0015 + position.x * 0.008) * 30.0;
            float dist = length(pos);
            vAlpha = 1.0 - (dist / 1000.0);
            vAlpha = clamp(vAlpha, 0.0, 0.8);
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float alpha = (1.0 - dist * 2.0) * vAlpha;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        uniforms: {
          time: { value: 0 }
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      camera.position.z = 500;
      animate();
    }
    function animate() {
      requestAnimationFrame(animate);
      const time = Date.now();
      particles.material.uniforms.time.value = time;
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;
      renderer.render(scene, camera);
    }
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    // Card Stack Interaction
    const cardsContainer = document.getElementById('cards-container');
    const dots = [
      document.getElementById('dot-1'),
      document.getElementById('dot-2'),
      document.getElementById('dot-3'),
      document.getElementById('dot-4')
    ];
    let currentCard = 1;
    let isAnimating = false;
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentCard - 1) {
          dot.className = 'w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 scale-125';
        } else {
          dot.className = 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300';
        }
      });
    }
    function setActiveCard(cardNumber) {
      if (isAnimating || cardNumber === currentCard) return;
      isAnimating = true;
      cardsContainer.className = `card-${cardNumber}-active`;
      currentCard = cardNumber;
      updateDots();
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setActiveCard(index + 1);
      });
    });
    // Auto-rotate cards
    setInterval(() => {
      if (!isAnimating) {
        const nextCard = currentCard === 4 ? 1 : currentCard + 1;
        setActiveCard(nextCard);
      }
    }, 5000);
    // Lucide icons
    window.lucide && lucide.createIcons();
    // Initialize
    initAurora();
  
}

{

    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Vanta animations
      VANTA.DOTS({
        el: "#vanta-testimonial-1",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 100,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        color2: 0x4b5563,
        backgroundColor: 0x030712,
        size: 3,
        spacing: 30,
      });
      
      VANTA.DOTS({
        el: "#vanta-testimonial-2",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 100,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe5e7eb,
        color2: 0x9ca3af,
        backgroundColor: 0x030712,
        size: 3.5,
        spacing: 25,
      });
      
      VANTA.DOTS({
        el: "#vanta-testimonial-3",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 100,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        color2: 0x6b7280,
        backgroundColor: 0x030712,
        size: 4,
        spacing: 20,
      });
      
      // Carousel functionality
      const carousel = document.getElementById('carousel-container');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const dots = document.querySelectorAll('.carousel-dot');
      let currentIndex = 0;
      
      function updateCarousel() {
        const slideWidth = document.querySelector('#carousel-container > div').offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('bg-white');
            dot.classList.remove('bg-gray-600');
          } else {
            dot.classList.remove('bg-white');
            dot.classList.add('bg-gray-600');
          }
        });
      }
      
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % 3;
        updateCarousel();
      });
      
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + 3) % 3;
        updateCarousel();
      });
      
      dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          currentIndex = parseInt(dot.dataset.index);
          updateCarousel();
        });
      });
      
      window.addEventListener('resize', updateCarousel);
      updateCarousel();
    });
  
}
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe></div>

<canvas className="" height="656" id="aurora-canvas" style={{width: `989px`, height: `656px`}} width="989"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-2 opacity-0 animate-fade-in" style={{animationDelay: `0.1s`, animationFillMode: `forwards`}}>
<span className="text-lg font-semibold tracking-tight">StillTogether</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm opacity-0 animate-fade-in" style={{animationDelay: `0.2s`, animationFillMode: `forwards`}}>
<a className="text-white/60 hover:text-white transition-colors" href="#">Sessions</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">About</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</nav>
<main className="relative z-10 min-h-screen flex pt-16 px-6 items-center justify-center">
<div className="max-w-7xl w-full mr-auto ml-auto pt-8 pr-8 pl-8">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

<div className="flex-1 max-w-xl lg:pr-8">
<div className="flex items-center space-x-2 mb-6 opacity-0 animate-fade-in" style={{animationDelay: `0.3s`, animationFillMode: `forwards`}}>
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<p className="uppercase text-sm font-medium text-white/60 tracking-widest">Daily Live Meditation</p>
</div>
<div className="mb-8 opacity-0 animate-fade-in" style={{animationDelay: `0.4s`, animationFillMode: `forwards`}}>
<h1 className="text-4xl lg:text-5xl xl:text-8xl font-medium leading-tight tracking-tighter mb-4">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 pb-2">Meditate Together,</span>
<span className="block bg-clip-text italic text-transparent font-instrument-serif bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-200 to-indigo-700 mt-1 mb-1">
                Find Your Calm
              </span>
</h1>
<p className="text-lg text-white/70 leading-relaxed">
              Join our daily sessions to boost focus, reduce stress, and sleep better. Real instructors, real people, real results.
            </p>
</div>

<div className="space-y-4 text-sm text-white/60 opacity-0 animate-fade-in" style={{animationDelay: `0.6s`, animationFillMode: `forwards`}}>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="">Live guided & unguided sessions</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="">Experienced instructors</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
<span className="">Community chat & streaks</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="">Mobile & web access</span>
</div>
</div>
</div>

<div className="flex flex-col space-y-8 items-center">

<section className="card-4-active" id="cards-container" style={{animationDelay: `0.7s`, animationFillMode: `forwards`, cursor: `grab`}}>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-sun w-5 h-5 text-orange-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Guided</span>
</div>
<span className="text-sm font-semibold text-blue-400">10 min</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-mic luc-mic w-10 h-10 text-white" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="13" rx="3" width="6"></rect></svg>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Mindfulness Basics</h3>
<p className="text-sm text-white/60 mb-8">Start your day with guided presence and clarity.</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Participants</span>
<span className="font-semibold">128</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Current Streak</span>
<span className="font-semibold text-green-400">7 days</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{}}></div>
</div>
</div>
</div>
<button className="w-full box-border glass hover:bg-white/10 transition-all duration-300 font-medium text-white rounded-xl pt-3 pr-4 pb-3 pl-4" style={{width: `100%`}}>
                  Join Session
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-moon w-5 h-5 text-purple-400" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Relax</span>
</div>
<span className="text-sm font-semibold text-purple-400">15 min</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-bed-double w-10 h-10 text-white" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Relax & Sleep</h3>
<p className="text-sm text-white/60 mb-8">Wind down for restful sleep with gentle guidance.</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Participants</span>
<span className="font-semibold">92</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Longest Streak</span>
<span className="font-semibold text-green-400">21 days</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500" style={{width: `92%`}}></div>
</div>
</div>
</div>
<button className="w-full glass hover:bg-white/10 transition-all duration-300 font-medium text-white rounded-xl pt-3 pr-4 pb-3 pl-4" style={{width: `100%`}}>
                  Join Session
                </button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-heart w-5 h-5 text-pink-400" data-lucide="heart" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Breathing</span>
</div>
<span className="text-sm font-semibold text-pink-400">8 min</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-wind w-[40px] h-[40px]" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `40px`, height: `40px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Stress Relief</h3>
<p className="text-sm text-white/60 mb-8">Let go of tension with breathwork.</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Participants</span>61
                    </div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Avg. Heart Rate</span>
<span className="font-semibold text-green-400">-10%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-pink-500 to-rose-400 h-2 rounded-full transition-all duration-500" style={{width: `50%`}}></div>
</div>
</div>
</div>
<button className="w-full box-border glass hover:bg-white/10 transition-all duration-300 font-medium text-white rounded-xl mt-auto pt-3 pr-4 pb-3 pl4" style={{width: `100%`}}>
  Join Session
</button>
</div>
</article>

<article className="relative h-[32rem] glass rounded-2xl shadow-2xl">
<div className="h-full flex flex-col pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-zap w-[20px] h-[20px]" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(74, 222, 128)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Unguided</span>
</div>
<span className="text-sm font-semibold text-green-400">20 min</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<svg className="lucide lucide-target w-10 h-10 text-white" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Focus Booster</h3>
<p className="text-sm text-white/60 mb-8">Silence & structure for deep concentration.</p>
<div className="space-y-4 mb-8 w-full max-w-xs">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Participants</span>
<span className="font-semibold">35</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/60">Longest Focus</span>
<span className="font-semibold text-green-400">90 min</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-500" style={{width: `20%`}}></div>
</div>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium box-border" style={{width: `100%`}}>
                  Join Session
                </button>
</div>
</article>
</section>

<div className="flex opacity-0 animate-fade-in space-x-3" style={{animationDelay: `0.8s`, animationFillMode: `forwards`}}>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-1"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
<button className="w-2 h-2 rounded-full bg-blue-400 transition-all duration-300" id="dot-4"></button>
</div>
</div>
</div>

<div className="opacity-0 animate-fade-in text-center mt-16" style={{animationDelay: `0.9s`, animationFillMode: `forwards`}}>
<div className="space-y-6">
<h2 className="text-2xl font-semibold text-white">Ready to Meditate Together?</h2>
<p className="text-white/70 max-w-2xl mx-auto">
            Connect daily, grow your practice, and find community in our live sessions. Start your free journey today.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="hover:from-indigo-500 hover:to-blue-400 transition-all duration-300 hover:shadow-xl-medium text-white bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-lg">Start Free Trial</button><button className="px-8 py-3 glass rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium">
              See Session Calendar
            </button>
</div>
</div>
</div>
</div>
</main>


<meta charset="utf-8" />
<meta content="width=device-width,initial-scale=1" name="viewport" />
<title>StillTogether - Meditate Elite</title>
<link href="https://fonts.googleapis.com" rel="preconnect" />
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />





<canvas className="" id="aurora-canvas"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center space-x-2 opacity-0 animate-fade-in" style={{animationDelay: `0.1s`, animationFillMode: `forwards`}}>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm opacity-0 animate-fade-in" style={{animationDelay: `0.2s`, animationFillMode: `forwards`}}>
</div>
</div>
</nav>


<meta charset="utf-8" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<title>Testimonial Carousel</title>



<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12">
<span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-3 inline-block">TESTIMONIALS</span>
<h2 className="text-3xl font-bold text-white mb-3">What Our Clients Say</h2>
<div className="h-1 w-16 bg-gray-400 mx-auto mt-2 mb-4 rounded-full"></div>
<p className="text-gray-400 max-w-2xl mx-auto">Hear from the developers and companies who have transformed their projects with our platform.</p>
</div>

<div className="relative">

<div className="relative overflow-hidden">
<div className="flex transition-transform duration-300 ease-in-out" id="carousel-container" style={{transform: `translateX(0px)`}}>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col">
<div className="h-24 relative" id="vanta-testimonial-1"><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0`, left: `0`, width: `269px`, height: `100px`, background: `linear-gradient(135deg,#60a5fa 0%,#c084fc 100%)`, opacity: `0.8`, borderRadius: `8px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0`, left: `0`, width: `269px`, height: `100px`, background: `linear-gradient(135deg,#8b5cf6 0%,#78bfa 100%)`, borderRadius: `8px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas></div>
<div className="p-6 bg-gray-900 flex-grow flex flex-col">
<div className="flex items-center mb-4">
<div className="text-yellow-400 flex">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
</svg>
</div>
</div>
<p className="flex-grow text-sm italic text-gray-400 mb-6">"Since introducing this app to our wellness program, employee stress levels have dropped noticeably. The guided sessions are easy to follow, and our participation rates have doubled."</p>
<div className="flex items-center mt-auto">
<div className="h-10 w-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-semibold">JD</div>
<div className="">
<h4 className="text-sm font-medium text-white">Laura Kim</h4>
<p className="text-xs text-gray-400">Head of People & Culture</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col">
<div className="h-24 relative" id="vanta-testimonial-2"><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0`, left: `0`, width: `269px`, height: `100px`, background: `linear-gradient(135deg,#a5fa 0%,#c084fc 100%)`, opacity: `0.8`, borderRadius: `8px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas></div>
<div className="flex-grow flex flex-col bg-gray-900 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center mb-4">
<div className="text-yellow-400 flex">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
</div>
<p className="flex-grow text-sm italic text-gray-400 mb-6">"The daily mindfulness reminders have been a game changer. I’m calmer, more focused, and my productivity has improved by at least 25% since I started using it."</p>
<div className="flex items-center mt-auto">
<div className="h-10 w-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-semibold">MR</div>
<div className="">
<h4 className="text-sm font-medium text-white">Thomas Smith</h4>
<p className="text-xs text-gray-400">Product Manager</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col">
<div className="h-24 relative" id="vanta-testimonial-3"><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `283px`, height: `100px`}} width="566"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0`, left: `0`, width: `269px`, height: `100px`, background: `linear-gradient(135deg,#60a5fa 0%,#c084fc 50%,#a855f7 100%)`, opacity: `0.85`, borderRadius: `8px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `269px`, height: `100px`}} width="538"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `371px`, height: `100px`}} width="742"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas><canvas className="vanta-canvas" height="200" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `280px`, height: `100px`}} width="560"></canvas></div>
<div className="p-6 bg-gray-900 flex-grow flex flex-col">
<div className="flex items-center mb-4">
<div className="text-yellow-400 flex">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
</div>
<p className="flex-grow text-sm italic text-gray-400 mb-6">"We integrated the app into our client wellness offering, and the feedback has been overwhelmingly positive. Over 80% of our clients report better sleep within the first two weeks."</p>
<div className="flex items-center mt-auto">
<div className="h-10 w-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-semibold">SL</div>
<div className="">
<h4 className="text-sm font-medium text-white">Rachel Morgan</h4>
<p className="text-xs text-gray-400">Founder & CEO</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-8 items-center">
<button className="hover:bg-gray-700 hover:text-white transition text-gray-400 bg-gray-800 rounded-full pt-2 pr-2 pb-2 pl-2" id="prev-btn">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" fillRule="evenodd"></path>
</svg>
</button>
<div className="flex items-center space-x-2 mx-4">
<button className="w-3 h-3 rounded-full carousel-dot active bg-white" data-index="0"></button>
<button className="w-3 h-3 carousel-dot rounded-full bg-gray-600" data-index="1"></button>
<button className="w-3 h-3 rounded-full carousel-dot bg-gray-600" data-index="2"></button>
</div>
<button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition" id="next-btn">
<svg className="w-[20px] h-[20px]" fill="currentColor" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div><footer className="relative z-10 border-white/5 border-t mt-24 pt-12 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
<div className="flex items-center space-x-2">
<span className="text-white font-medium">StillTogether</span>
</div>
<div className="text-sm text-white/50">
          © 2024 StillTogether. Meditation community for all.
        </div>
<div className="flex space-x-6 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
