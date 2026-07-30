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
      
    const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),renderer=new THREE.WebGLRenderer({canvas:document.getElementById("aurora-canvas")});renderer.setSize(innerWidth,innerHeight);const material=new THREE.ShaderMaterial({uniforms:{iTime:{value:0},iResolution:{value:new THREE.Vector2(innerWidth,innerHeight)}},vertexShader:"void main(){gl_Position=vec4(position,1.0);} ",fragmentShader:`uniform float iTime;uniform vec2 iResolution;float rand(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}float noise(vec2 p){vec2 ip=floor(p),u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res;}float fbm(vec2 x){float v=0.0,a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.5));for(int i=0;i<3;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}void main(){vec2 p=(gl_FragCoord.xy-iResolution.xy*0.5)/iResolution.y;vec4 o=vec4(0.0);for(float i=1.0;i<35.0;i++){vec2 v=p+cos(i*i+iTime*0.025+i*vec2(13.0,11.0))*3.5;float d=length(v);o+=vec4(0.1,0.8,1.0,1.0)*exp(-d*2.0);}gl_FragColor=o/5.0;} `}),geometry=new THREE.PlaneGeometry(2,2),mesh=new THREE.Mesh(geometry,material);scene.add(mesh);function animate(){requestAnimationFrame(animate);material.uniforms.iTime.value+=.016;renderer.render(scene,camera);}addEventListener("resize",()=>{renderer.setSize(innerWidth,innerHeight);material.uniforms.iResolution.value.set(innerWidth,innerHeight)});animate();
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/bganimation-xIKR0ZTWWoifZLAKROH7y9YL" width="100%"></iframe></div>
<canvas height="1018" id="aurora-canvas" style={{width: `1653px`, height: `1018px`}} width="1653"></canvas>

<nav className="fixed top-0 inset-x-0 z-20 p-6 lg:px-16 xl:px-24 2xl:px-32">
<div className="max-w-8xl mx-auto">
<div className="glass rounded-2xl border border-white/10 px-6 py-4">
<div className="flex items-center justify-between">
<span className="text-white font-manrope font-bold text-xl tracking-wider">GREENSTEP</span>
<div className="hidden md:flex space-x-8">
<a className="text-white/80 hover:text-white transition-colors text-sm" href="#">Инструкции</a>
<a className="text-white/80 hover:text-white transition-colors text-sm" href="#">Садоводам</a>
<a className="text-white/80 hover:text-white transition-colors text-sm" href="#">Сообщество</a>
<a className="text-white/80 hover:text-white transition-colors text-sm" href="#">Блог</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden sm:block text-white/80 hover:text-white text-sm" href="#">Войти</a>
<a className="px-4 py-2 bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white rounded-lg font-medium text-sm transition-all" href="#">Регистрация</a>
</div>
<button className="md:hidden text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-screen flex sm:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-24 pr-6 pl-6 items-center justify-center">
<div className="max-w-8xl grid lg:grid-cols-2 gap-16 xl:gap-24 mr-auto ml-auto items-center">

<div className="text-center lg:text-left space-y-8">
<span className="inline-block px-4 py-2 glass text-white/70 eyebrow-stroke rounded-full text-base font-medium border border-green-400/30">Экологический гид</span>
<h1 className="text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] leading-none font-normal text-white tracking-tight font-satoshi">
<span className="schema-gradient text-6xl font-bold tracking-wide">Как посадить дерево</span>
<span className="text-6xl font-medium tracking-wide">пошаговая инструкция</span>
</h1>
<p className="text-base lg:text-lg xl:text-xl text-white/70 leading-relaxed max-w-xl xl:max-w-2xl">
          Узнайте, когда, где и как правильно посадить саженец, подобрать почву и обеспечить здоровый рост.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="hover:from-green-600 hover:to-lime-600 hover:shadow-xl transition-all font-semibold text-white bg-gradient-to-r from-green-500 to-lime-500 rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#">скачать инструкцию</a>
<a className="px-8 py-4 gradient-border glass text-white rounded-xl font-semibold hover:bg-white/10 transition-all" href="#">Узнать больше</a>
</div>

<div className="grid grid-cols-3 gap-8 pt-8">
<div className="text-center">
<div className="text-2xl lg:text-3xl font-light font-manrope text-white tracking-tight">30+</div>
<div className="text-white/60 text-sm">Пород деревьев</div>
</div>
<div className="text-center">
<div className="text-2xl lg:text-3xl font-light font-manrope text-white tracking-tight">5K</div>
<div className="text-white/60 text-sm">Добровольцев</div>
</div>
<div className="text-center">
<div className="text-2xl lg:text-3xl font-light font-manrope text-white tracking-tight">100%</div>
<div className="text-white/60 text-sm">Успех посадки</div>
</div>
</div>
</div>

<div className="flex lg:justify-end justify-center">
<div className="relative w-full max-w-lg xl:max-w-xl">
<div className="hero-glow absolute inset-0 rounded-3xl"></div>
<div className="relative glass overflow-hidden rounded-3xl border border-white/10 backdrop-blur-3xl">
<div className="xl:p-10 pt-8 pr-8 pb-8 pl-8">
<div className="w-full h-80 xl:h-96 rounded-2xl overflow-hidden relative">
<img alt="Дерево" className="w-full h-full object-cover rounded-2xl shadow-inner" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" style={{boxShadow: `inset 0 0 20px rgba(79,70,229,.3), inset 0 0 40px rgba(59,130,246,.2), 0 0 30px rgba(139,92,246,.4)`}} />

<div className="absolute inset-0 w-full h-full bg-[url(https://www.blackforesttrees.com.au/wp-content/uploads/2023/02/Planting-Trees-3.jpg?w=800&q=80)] bg-cover">
<div className="absolute top-6 left-1/2 -translate-x-1/2">
</div>

</div>
</div>
</div>
<div className="px-8 xl:px-10 pb-8 xl:pb-10">
<div className="flex items-center justify-between p-4 glass rounded-xl border border-white/10">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-sm font-medium text-white/90">Советы онлайн</span>
</div>
<span className="text-white/60 text-sm">Обновление в реальном времени</span>
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
