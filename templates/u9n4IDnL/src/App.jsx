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



    // Космические звезды
    const starsC=document.getElementById('stars');
    for(let i=0;i<70;i++){const s=document.createElement('div');
    s.className='star';const size=Math.random()*2+1;
    s.style.width=size+'px';s.style.height=size+'px';
    s.style.top=Math.random()*100+'%';
    s.style.left=Math.random()*100+'%';
    s.style.opacity=Math.random()*0.8+0.2;
    starsC.appendChild(s);}
    // Данные о туманностях
    const NEBULAS = [
      {name:"Туманность Ориона",img:"https://upload.wikimedia.org/wikipedia/commons/d/db/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",pos:[65,30,0]},
      {name:"Туманность Кошачий Глаз",img:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Cat%27s_Eye_Nebula.jpg",pos:[0,80,60]},
      {name:"Туманность Улитка",img:"https://upload.wikimedia.org/wikipedia/commons/f/f0/NGC7293_%282004%29.jpg",pos:[-60,28,62]},
      {name:"Туманность Кольцо",img:"https://upload.wikimedia.org/wikipedia/commons/9/99/M57_The_Ring_Nebula.jpg",pos:[55,-33,38]},
      {name:"Туманность Розетка",img:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Rosette_Nebula_-_NGC_2237.jpg",pos:[-70,-22,8]},
      {name:"Планетарная Туманность Бабочка",img:"https://upload.wikimedia.org/wikipedia/commons/8/83/NGC_6302_Hubble_2009.full.jpg",pos:[0,0,95]},
    ];
    // Заливка списка
    const ul=document.getElementById('nebula-list');
    NEBULAS.forEach((n,i)=>{
      let li=document.createElement('li');
      li.className="cursor-pointer bg-blue-950/60 hover:bg-sky-900/40 transition rounded-xl px-2 py-2 flex items-center gap-2 border border-sky-900/40";
      li.innerHTML=`<img src="${n.img}" alt="${n.name}" class="w-8 h-8 object-cover rounded mr-2 shadow glow"/><span>${n.name}</span>`;
      li.onclick=()=>selectNebula(i);
      ul.appendChild(li);
    });
    // Выбор туманности
    function selectNebula(idx){
      // Картинка
      document.getElementById('nebula-image').src=NEBULAS[idx].img;
      document.getElementById('nebula-image').alt=NEBULAS[idx].name;
      document.getElementById('nebula-image-title').textContent=NEBULAS[idx].name;
      // Обновить положение туманности в 3D
      if(window._updateNebulaPos) window._updateNebulaPos(NEBULAS[idx].pos);
    }
    // Инициализация 3D
    function launch3d() {
      const canvas=document.getElementById("spaceviewer");
      if(window._lastrenderer){window._lastrenderer.dispose?.();window._lastrenderer.forceContextLoss?.();}
      const scene=new THREE.Scene();
      scene.background=null;
      const directional=new THREE.DirectionalLight(0x9ebcfa,.9);
      directional.position.set(3,2.4,2.2);
      scene.add(directional);
      scene.add(new THREE.AmbientLight(0x18305d,.46));
      // Земля
      const earthG=new THREE.SphereGeometry(65,64,64);
      const earthM=new THREE.MeshPhongMaterial({
        color:0x3282ff,specular:0x51defb,shininess:32,emissive:0x193C74,emissiveIntensity:.26});
      const earth=new THREE.Mesh(earthG,earthM);earth.position.set(-40,0,0);scene.add(earth);
      // Облака
      const cloudG=new THREE.SphereGeometry(66.3,36,36);
      const cloudM=new THREE.MeshPhongMaterial({
        color:0x9edffa,transparent:true,opacity:0.16,emissive:0x8addfa,emissiveIntensity:.12,shininess:7});
      const cloud=new THREE.Mesh(cloudG,cloudM);cloud.position.copy(earth.position);scene.add(cloud);
      // "Туманность"
      function createNebulaMesh(pos) {
        const nG=new THREE.SphereGeometry(18,34,28);
        const nM=new THREE.MeshPhongMaterial({
          color:0x13e6ff,transparent:true,opacity:0.28,emissive:0x37eeff,emissiveIntensity:0.75,shininess:4});
        const n=new THREE.Mesh(nG,nM);n.position.set(...pos);return n;
      }
      let nebula=createNebulaMesh(NEBULAS[0].pos);
      scene.add(nebula);
      // Слабое свечение - halo
      function haloMesh(pos){
        let g=new THREE.SphereGeometry(24,35,33);
        let m=new THREE.MeshPhongMaterial({color:0x9aeafd,transparent:true,opacity:.09,emissive:0x45e2d8,emissiveIntensity:.2});
        let n=new THREE.Mesh(g,m);n.position.set(...pos);return n;
      }
      let halo=haloMesh(NEBULAS[0].pos);scene.add(halo);
      // Солнце-даль
      const sunGeo=new THREE.SphereGeometry(8,30,30);
      const sunMat=new THREE.MeshBasicMaterial({color:0xffedc1,emissive:0xfffb9b,emissiveIntensity:.7});
      const sun=new THREE.Mesh(sunGeo,sunMat);sun.position.set(-210,120,-210);scene.add(sun);
      // Камера и рендерер
      const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
      window._lastrenderer=renderer;
      renderer.setClearColor(0x00000,0);renderer.setPixelRatio(window.devicePixelRatio);renderer.setSize(420,360);
      const camera=new THREE.PerspectiveCamera(27,420/360,1,900);camera.position.set(0,0,210);
      const controls=new THREE.OrbitControls(camera,renderer.domElement);
      controls.enableDamping=true;controls.enablePan=false;controls.minDistance=130;controls.maxDistance=290;
      controls.target.set(0,0,0);
      // Анимация
      function animate(){requestAnimationFrame(animate);controls.update();renderer.render(scene,camera);}
      animate();
      // Смена положения туманности
      window._updateNebulaPos = function(pos){
        scene.remove(nebula);scene.remove(halo);
        nebula=createNebulaMesh(pos);scene.add(nebula);
        halo=haloMesh(pos);scene.add(halo);
      }
    }
    // Первая загрузка — показать первую туманность
    document.addEventListener('DOMContentLoaded',()=>{
      document.getElementById('nebula-image').src=NEBULAS[0].img;
      document.getElementById('nebula-image-title').textContent=NEBULAS[0].name;
      launch3d();
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
      
<div id="stars"></div>
<header className="py-7 text-center">
<h1 className="text-3xl md:text-5xl font-extrabold text-blue-200 drop-shadow">Слежение за туманностями</h1>
<p className="text-sky-200 mt-2 tracking-wide">Смотри на Землю, выбирай туманности, следи за их положением!</p>
</header>
<main className="container mx-auto px-3 flex flex-col md:flex-row gap-9 items-stretch fadein mb-10">
<section className="flex flex-col items-center w-full md:w-[450px] z-10">
<div className="relative flex flex-col items-center">
<div className="bg-black/80 border border-blue-900/40 rounded-xl shadow-xl" style={{width: '420px', height: '360px'}}>
<canvas className="block w-full h-full" height="360" id="spaceviewer" width="420"></canvas>
</div>
<div className="mt-3 max-w-sm text-blue-200 text-center text-sm">
          Вращай планету и наблюдай положение выбранной туманности.
        </div>
</div>
</section>
<section className="flex-1 flex flex-col items-center md:items-start">
<div className="w-full max-w-lg bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-black/90 p-7 rounded-3xl border border-blue-950/70 shadow-2xl mb-7">
<h2 className="text-xl font-bold mb-3 text-blue-100">Список туманностей</h2>
<ul className="grid grid-cols-2 gap-4" id="nebula-list">

</ul>
</div>
<div className="w-full max-w-lg bg-gradient-to-bl from-blue-900/60 via-black/70 to-blue-950/80 rounded-2xl p-5 flex flex-col items-center shadow-inner min-h-[220px]" id="nebula-image-box">
<div className="text-lg font-bold mb-2" id="nebula-image-title"></div>
<img alt="" className="rounded-lg shadow-lg max-h-52 object-contain bg-black/30" id="nebula-image" src=""/>
</div>
</section>
</main>
<footer className="text-xs py-6 text-blue-300/70 opacity-70 font-mono text-center w-full">
    © 2024 Космический монитор туманностей
  </footer>


    </>
  );
}
