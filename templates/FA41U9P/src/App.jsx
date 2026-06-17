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



document.addEventListener('DOMContentLoaded',()=>{lucide.createIcons({strokeWidth:1.5});});

/* THREE.JS SETUP */
let scene=new THREE.Scene();scene.background=new THREE.Color(0xf9fafb);
let camera=new THREE.PerspectiveCamera(60,1,0.1,1000);camera.position.set(3,2,4);camera.lookAt(0,0,0);
let renderer=new THREE.WebGLRenderer({canvas:document.getElementById('scene'),antialias:true});
renderer.setPixelRatio(devicePixelRatio);resize();window.addEventListener('resize',resize);
function resize(){
  const rect=renderer.domElement.parentElement.getBoundingClientRect();
  renderer.setSize(rect.width,rect.height);
  camera.aspect=rect.width/rect.height;
  camera.updateProjectionMatrix();
}

/* Cube */
let geometry=new THREE.BoxGeometry();let material=new THREE.MeshStandardMaterial({color:0x00aaff});
let cube=new THREE.Mesh(geometry,material);scene.add(cube);

/* Lights */
scene.add(new THREE.AmbientLight(0xffffff,.6));let dir=new THREE.DirectionalLight(0xffffff,.6);dir.position.set(5,10,7);scene.add(dir);

/* Simple Drag Rotation */
let dragging=false,prev={x:0,y:0};
renderer.domElement.addEventListener('mousedown',e=>{dragging=true;prev.x=e.clientX;prev.y=e.clientY;});
window.addEventListener('mouseup',()=>dragging=false);
window.addEventListener('mousemove',e=>{if(!dragging)return;let dx=(e.clientX-prev.x)/200,dy=(e.clientY-prev.y)/200;prev.x=e.clientX;prev.y=e.clientY;cube.rotation.y+=dx;cube.rotation.x+=dy;});

/* Loop & FPS */
let last=performance.now(),fps=0,frames=[];
function animate(){requestAnimationFrame(animate);let now=performance.now(),delta=now-last;if(delta>0){fps=1000/delta;frames.push(fps);if(frames.length>40)frames.shift();}last=now;cube.rotation.y+=0.005;renderer.render(scene,camera);document.getElementById('fps').textContent=fps.toFixed(0);}animate();

/* FPS CHART */
const perfChart=new Chart(document.getElementById('fpsChart'),{type:'line',data:{labels:new Array(40).fill(''),datasets:[{data:new Array(40).fill(0),borderColor:'#2563eb',borderWidth:1,tension:.3,pointRadius:0}]},options:{animation:false,plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}});
setInterval(()=>{perfChart.data.datasets[0].data=frames.slice();perfChart.update('none');},500);

/* MEMORY MOCK */
setInterval(()=>{document.getElementById('memory').textContent=(Math.random()*400+200).toFixed(0);},1500);

/* PROPERTY BINDING */
function syncPosInputs(){const p=cube.position;posX.value=p.x.toFixed(2);posY.value=p.y.toFixed(2);posZ.value=p.z.toFixed(2);}
syncPosInputs();
['posX','posY','posZ'].forEach(id=>document.getElementById(id).addEventListener('input',()=>cube.position.set(+posX.value||0,+posY.value||0,+posZ.value||0)));
propColor.addEventListener('input',e=>material.color.set(e.target.value));
document.querySelector('[data-object="part"]').addEventListener('click',syncPosInputs);

/* SIMPLE TAB SWITCH */
document.querySelectorAll('.tabBtn').forEach(btn=>btn.addEventListener('click',e=>{
  document.querySelectorAll('.tabBtn').forEach(b=>{b.classList.remove('border-blue-600','text-gray-900');b.classList.add('text-gray-600');});
  e.currentTarget.classList.add('border-blue-600','text-gray-900');
}));

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
      

<div className="h-10 flex items-center px-4 border-b border-gray-200 bg-white select-none fade-in">
<span className="font-semibold tracking-tight text-base text-blue-600 mr-6">Roblox Studio</span>
<span className="text-sm text-gray-500">[GameName].rbxl</span>
</div>

<div className="border-b border-gray-200 bg-gray-50 fade-in" style={{animationDelay: '.05s'}}>

<div className="flex space-x-2 px-4 h-9 items-end">
<button className="tabBtn px-3 pb-1 text-sm border-b-2 border-blue-600 font-medium text-gray-900" data-tab="home">Home</button>
<button className="tabBtn px-3 pb-1 text-sm text-gray-600 hover:text-gray-900" data-tab="model">Model</button>
<button className="tabBtn px-3 pb-1 text-sm text-gray-600 hover:text-gray-900" data-tab="test">Test</button>
<button className="tabBtn px-3 pb-1 text-sm text-gray-600 hover:text-gray-900" data-tab="view">View</button>
</div>

<div className="ribbon-panel px-4 py-2 grid grid-cols-3 gap-6 text-xs">

<div>
<div className="flex space-x-2">
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Select">
<i className="w-5 h-5 text-gray-700" data-lucide="mouse-pointer"></i><span>Select</span>
</button>
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Move">
<i className="w-5 h-5 text-gray-700" data-lucide="move"></i><span>Move</span>
</button>
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Scale">
<i className="w-5 h-5 text-gray-700" data-lucide="expand"></i><span>Scale</span>
</button>
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Rotate">
<i className="w-5 h-5 text-gray-700" data-lucide="rotate-ccw"></i><span>Rotate</span>
</button>
</div>
<p className="mt-1 text-gray-500 text-center">Tools</p>
</div>

<div>
<div className="flex space-x-2">
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Part">
<i className="w-5 h-5 text-gray-700" data-lucide="square"></i><span>Part</span>
</button>
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Model">
<i className="w-5 h-5 text-gray-700" data-lucide="package"></i><span>Model</span>
</button>
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="UI">
<i className="w-5 h-5 text-gray-700" data-lucide="layout"></i><span>UI</span>
</button>
</div>
<p className="mt-1 text-gray-500 text-center">Insert</p>
</div>

<div>
<div className="flex space-x-2">
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Cut">
<i className="w-5 h-5 text-gray-700" data-lucide="scissors"></i><span>Cut</span>
</button>
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Copy">
<i className="w-5 h-5 text-gray-700" data-lucide="copy"></i><span>Copy</span>
</button>
<button className="flex flex-col items-center w-16 py-1 hover:bg-gray-200 rounded" title="Paste">
<i className="w-5 h-5 text-gray-700" data-lucide="clipboard"></i><span>Paste</span>
</button>
</div>
<p className="mt-1 text-gray-500 text-center">Clipboard</p>
</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<aside className="bg-white w-64 border-r border-gray-200 flex-col hidden md:flex fade-in" style={{animationDelay: '.1s'}}>
<div className="h-9 flex items-center px-3 border-b border-gray-200">
<span className="uppercase text-xs tracking-wide text-gray-500">Explorer</span>
</div>
<nav className="flex-1 overflow-y-auto text-sm py-2">
<details className="px-2" open="">
<summary className="flex items-center gap-1 cursor-pointer py-1">
<i className="w-3 h-3" data-lucide="chevron-right"></i><span>Game</span>
</summary>
<div className="pl-4">
<details open="">
<summary className="flex items-center gap-1 cursor-pointer py-1">
<i className="w-3 h-3" data-lucide="chevron-right"></i><span>Workspace</span>
</summary>
<div className="pl-4">
<button className="flex items-center gap-1 py-1 w-full text-left hover:bg-blue-50 rounded" data-object="part">
<i className="w-3 h-3" data-lucide="square"></i><span>Part</span>
</button>
<button className="flex items-center gap-1 py-1 w-full text-left hover:bg-blue-50 rounded">
<i className="w-3 h-3" data-lucide="camera"></i><span>Camera</span>
</button>
</div>
</details>
<button className="flex items-center gap-1 py-1 w-full text-left hover:bg-blue-50 rounded">
<i className="w-3 h-3" data-lucide="users"></i><span>Players</span>
</button>
<button className="flex items-center gap-1 py-1 w-full text-left hover:bg-blue-50 rounded">
<i className="w-3 h-3" data-lucide="monitor"></i><span>StarterGui</span>
</button>
<button className="flex items-center gap-1 py-1 w-full text-left hover:bg-blue-50 rounded">
<i className="w-3 h-3" data-lucide="archive"></i><span>ReplicatedStorage</span>
</button>
</div>
</details>
</nav>
</aside>

<main className="flex-1 relative">
<canvas className="w-full h-full bg-white" id="scene"></canvas>

<div className="absolute bottom-0 inset-x-0 h-8 bg-gray-50 border-t border-gray-200 flex items-center text-xs px-4">
<span className="mr-4">Memory: <span id="memory">0</span> MB</span>
<span>FPS: <span id="fps">0</span></span>
</div>
</main>

<aside className="bg-white w-80 border-l border-gray-200 flex-col hidden lg:flex fade-in" style={{animationDelay: '.1s'}}>
<div className="h-9 flex items-center px-3 border-b border-gray-200">
<span className="uppercase text-xs tracking-wide text-gray-500">Properties</span>
</div>
<div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 text-sm">
<div>
<label className="block text-xs mb-1 text-gray-500">Name</label>
<input className="w-full bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500" id="propName" value="Part"/>
</div>
<div>
<label className="block text-xs mb-1 text-gray-500">Color</label>
<input className="w-full h-10 p-0 bg-white border border-gray-300 rounded" id="propColor" type="color"/>
</div>
<div>
<label className="block text-xs mb-1 text-gray-500">Position (X, Y, Z)</label>
<div className="grid grid-cols-3 gap-2">
<input className="bg-white border border-gray-300 rounded px-2 py-1" id="posX" step=".1" type="number"/>
<input className="bg-white border border-gray-300 rounded px-2 py-1" id="posY" step=".1" type="number"/>
<input className="bg-white border border-gray-300 rounded px-2 py-1" id="posZ" step=".1" type="number"/>
</div>
</div>
<div>
<h2 className="text-sm font-semibold tracking-tight text-gray-700 mb-2">Performance</h2>
<div className="bg-gray-50 border border-gray-200 rounded p-3">
<canvas id="fpsChart"></canvas>
</div>
</div>
</div>
</aside>
</div>



    </>
  );
}
