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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
}
}
}
}



        // Data for vehicles
        const vehicles = {
            car: {
                name: "Porsche 911 GT3 RS",
                price: "$223,800",
                img: "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990_1280.png"
            },
            bike: {
                name: "Ducati Panigale V4 R",
                price: "$44,995",
                img: "https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.png"
            },
            truck: {
                name: "Ford F-150 Raptor R",
                price: "$109,145",
                img: "https://cdn.pixabay.com/photo/2016/03/30/18/16/pickup-1291244_1280.png"
            },
            plane: {
                name: "Cirrus SR22T G6",
                price: "$989,900",
                img: "https://cdn.pixabay.com/photo/2014/04/03/10/02/plane-309659_1280.png"
            }
        };

        // State
        let currentType = 'car';

        function setType(type) {
            // Update UI buttons
            ['car', 'bike', 'truck', 'plane'].forEach(t => {
                const btn = document.getElementById(`btn-${t}`);
                if (t === type) {
                    btn.className = "nav-btn px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-800 text-white shadow-sm transition-all border border-neutral-700";
                } else {
                    btn.className = "nav-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all hover:bg-neutral-800/50";
                }
            });

            // Update Content
            const data = vehicles[type];
            const imgEl = document.getElementById('vehicle-img');
            const titleEl = document.getElementById('vehicle-title');
            
            // Animate Out
            imgEl.style.opacity = '0';
            imgEl.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                imgEl.src = data.img;
                titleEl.textContent = data.name;
                currentType = type;
                
                // Animate In
                imgEl.onload = () => {
                    imgEl.style.opacity = '1';
                    imgEl.style.transform = 'scale(1)';
                    // Update overlay mask
                    const overlay = document.getElementById('color-overlay');
                    overlay.style.webkitMaskImage = `url('${data.img}')`;
                }
            }, 300);
        }

        function changeColor(color, name) {
            const overlay = document.getElementById('color-overlay');
            const nameLabel = document.getElementById('color-name');
            
            nameLabel.innerText = name;
            
            if (color === 'black') {
                overlay.style.opacity = '0'; // For black, we just show original greyscale
            } else if (color === 'white') {
                overlay.style.backgroundColor = '#ffffff';
                overlay.style.opacity = '0.2';
                overlay.style.mixBlendMode = 'soft-light';
            } else {
                overlay.style.backgroundColor = color;
                overlay.style.opacity = '0.6';
                overlay.style.mixBlendMode = 'overlay';
            }
        }

        function switchTab(tabName) {
            const tabs = ['exterior', 'interior', 'parts'];
            tabs.forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                if (t === tabName) {
                    btn.className = "flex-1 py-4 text-xs font-medium text-white border-b-2 border-white bg-white/5 transition-colors";
                } else {
                    btn.className = "flex-1 py-4 text-xs font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent transition-colors";
                }
            });
            // Ideally load different content here
        }

        function toggle360() {
            const img = document.getElementById('vehicle-img');
            // Simple visual feedback since we don't have a 3D engine
            img.style.transition = "transform 3s ease-in-out";
            img.style.transform = "scaleX(-1)";
            setTimeout(() => {
                img.style.transform = "scaleX(1)";
            }, 3000);
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
      

<div className="md:hidden flex items-center justify-between p-4 border-b border-neutral-800 bg-gray-950/90 backdrop-blur z-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-100 text-black rounded flex items-center justify-center font-bold tracking-tighter">M</div>
<span className="font-medium tracking-tight text-white">MODIFLY</span>
</div>
<button className="text-neutral-400 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<main className="relative flex-1 h-[60vh] md:h-full bg-gray-950 flex flex-col items-center justify-center overflow-hidden group">

<div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

<header className="absolute top-0 left-0 right-0 p-6 hidden md:flex justify-between items-start z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-100 text-black rounded-sm flex items-center justify-center font-semibold tracking-tighter text-lg">M</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-white leading-none">MODIFLY</span>
<span className="text-xs text-neutral-500 tracking-wide mt-1">CONFIGURATOR V2.0</span>
</div>
</div>
<nav className="glass-panel px-1 py-1 rounded-full flex gap-1">
<button className="nav-btn px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-800 text-white shadow-sm transition-all border border-neutral-700" id="btn-car" onclick="setType('car')">Cars</button>
<button className="nav-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all hover:bg-neutral-800/50" id="btn-bike" onclick="setType('bike')">Bikes</button>
<button className="nav-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all hover:bg-neutral-800/50" id="btn-truck" onclick="setType('truck')">Trucks</button>
<button className="nav-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all hover:bg-neutral-800/50" id="btn-plane" onclick="setType('plane')">Aircraft</button>
</nav>
<div className="flex gap-2">
<button className="glass-panel w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="glass-panel px-4 h-10 rounded-full flex items-center gap-2 text-neutral-200 hover:text-white transition-colors border-neutral-700">
<span className="text-xs font-medium">Share Build</span>
<iconify-icon height="16" icon="solar:share-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</header>

<div className="relative w-full max-w-5xl aspect-video flex items-center justify-center transition-all duration-700" id="vehicle-container">

<img alt="Vehicle Base" className="relative z-10 w-[80%] md:w-[65%] object-contain drop-shadow-2xl grayscale transition-all duration-500" id="vehicle-img" src="https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990_1280.png"/>

<div className="absolute inset-0 z-20 w-[80%] md:w-[65%] mx-auto h-auto mix-blend-overlay opacity-0 transition-opacity duration-300 pointer-events-none bg-blue-500" id="color-overlay" style={{WebkitMaskImage: 'url(\'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990_1280.png\')', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center'}}></div>

<div className="absolute bottom-[15%] w-[60%] h-[10%] bg-black blur-2xl opacity-60 rounded-[100%] z-0"></div>

<button className="absolute top-[45%] left-[30%] w-6 h-6 bg-white/10 backdrop-blur border border-white/50 rounded-full flex items-center justify-center text-white z-30 hover:scale-110 transition-transform group/spot">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 backdrop-blur rounded border border-white/10 text-[10px] whitespace-nowrap opacity-0 group-hover/spot:opacity-100 transition-opacity">Carbon Ceramic Brakes</div>
</button>
<button className="absolute top-[35%] right-[32%] w-6 h-6 bg-white/10 backdrop-blur border border-white/50 rounded-full flex items-center justify-center text-white z-30 hover:scale-110 transition-transform group/spot">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 backdrop-blur rounded border border-white/10 text-[10px] whitespace-nowrap opacity-0 group-hover/spot:opacity-100 transition-opacity">Tinted Glass</div>
</button>
</div>

<div className="absolute bottom-8 flex gap-4 z-20">
<button className="glass-panel px-5 py-2 rounded-full flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group" onclick="toggle360()">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-500" height="18" icon="solar:cube-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium tracking-wide">360° View</span>
</button>
<button className="glass-panel px-5 py-2 rounded-full flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:videocamera-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Interior</span>
</button>
</div>
</main>

<aside className="w-full md:w-[400px] h-[40vh] md:h-full bg-neutral-900/50 backdrop-blur-xl border-t md:border-t-0 md:border-l border-neutral-800 flex flex-col z-20 shadow-2xl">

<div className="flex border-b border-neutral-800">
<button className="flex-1 py-4 text-xs font-medium text-white border-b-2 border-white bg-white/5 transition-colors" id="tab-exterior" onclick="switchTab('exterior')">
                Exterior
            </button>
<button className="flex-1 py-4 text-xs font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent transition-colors" id="tab-interior" onclick="switchTab('interior')">
                Interior
            </button>
<button className="flex-1 py-4 text-xs font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent transition-colors" id="tab-parts" onclick="switchTab('parts')">
                Performance
            </button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8" id="panel-content">

<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-1" id="vehicle-title">Porsche 911 GT3 RS</h2>
<div className="flex items-center gap-2 text-neutral-500">
<span className="text-xs border border-neutral-700 rounded px-1.5 py-0.5">2024</span>
<span className="text-xs">Base Price: <span className="text-neutral-300">$223,800</span></span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Paint Finish</label>
<span className="text-xs text-white font-medium" id="color-name">Obsidian Black</span>
</div>
<div className="grid grid-cols-6 gap-3">
<button className="w-full aspect-square rounded-full bg-neutral-900 border border-neutral-700 ring-2 ring-transparent hover:ring-white transition-all focus:ring-white ring-offset-2 ring-offset-neutral-900 outline-none" onclick="changeColor('black', 'Obsidian Black')"></button>
<button className="w-full aspect-square rounded-full bg-white border border-neutral-300 ring-2 ring-transparent hover:ring-white transition-all focus:ring-white ring-offset-2 ring-offset-neutral-900 outline-none" onclick="changeColor('white', 'Alpine White')"></button>
<button className="w-full aspect-square rounded-full bg-red-500 border border-transparent ring-2 ring-transparent hover:ring-white transition-all focus:ring-white ring-offset-2 ring-offset-neutral-900 outline-none" onclick="changeColor('#ef4444', 'Guards Red')"></button>
<button className="w-full aspect-square rounded-full bg-blue-500 border border-transparent ring-2 ring-transparent hover:ring-white transition-all focus:ring-white ring-offset-2 ring-offset-neutral-900 outline-none" onclick="changeColor('#3b82f6', 'Gentian Blue')"></button>
<button className="w-full aspect-square rounded-full bg-green-500 border border-transparent ring-2 ring-transparent hover:ring-white transition-all focus:ring-white ring-offset-2 ring-offset-neutral-900 outline-none" onclick="changeColor('#22c55e', 'Python Green')"></button>
<button className="w-full aspect-square rounded-full bg-yellow-500 border border-transparent ring-2 ring-transparent hover:ring-white transition-all focus:ring-white ring-offset-2 ring-offset-neutral-900 outline-none" onclick="changeColor('#eab308', 'Racing Yellow')"></button>
</div>

<div className="pt-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 border border-white/20 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
</div>
<span className="text-[10px] uppercase text-neutral-500 tracking-wider">Custom</span>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Wheels</label>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/50 border border-white/10 hover:border-white/30 hover:bg-neutral-800 transition-all text-left group">
<iconify-icon className="text-neutral-400 group-hover:text-white" icon="solar:wheel-angle-linear" width="24"></iconify-icon>
<div>
<div className="text-xs text-white font-medium">20/21" GT3 RS</div>
<div className="text-[10px] text-neutral-500">Forged Magnesium</div>
</div>
</button>
<button className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-white/30 hover:bg-neutral-800 transition-all text-left group">
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="solar:wheel-linear" width="24"></iconify-icon>
<div>
<div className="text-xs text-neutral-300 font-medium">20" Turbo S</div>
<div className="text-[10px] text-neutral-500">Aluminum Alloy</div>
</div>
</button>
</div>
</div>

<div className="space-y-6 pt-2">
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-neutral-400 font-medium">Window Tint</span>
<span className="text-white">35%</span>
</div>
<input max="100" min="0" type="range" value="35"/>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-neutral-400 font-medium">Suspension Height</span>
<span className="text-white">-20mm</span>
</div>
<input max="100" min="0" type="range" value="80"/>
</div>
</div>

<div className="pt-4 border-t border-neutral-800">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3 block">Packages</label>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 rounded border border-neutral-800 cursor-pointer hover:bg-neutral-800/30 transition-colors">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-neutral-600 bg-neutral-900 checked:border-white checked:bg-white transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-black opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Weissach Package</div>
<div className="text-[10px] text-neutral-500">Exposed carbon fiber, magnesium wheels</div>
</div>
<span className="text-xs text-white font-medium">+$33,520</span>
</label>
</div>
</div>
</div>

<div className="p-6 border-t border-neutral-800 bg-neutral-900/80 backdrop-blur">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-neutral-400">Total Build Price</span>
<span className="text-lg font-semibold text-white tracking-tight">$257,320</span>
</div>
<button className="w-full py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors tracking-tight flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="18"></iconify-icon>
                Place Order
            </button>
</div>
</aside>


    </>
  );
}
