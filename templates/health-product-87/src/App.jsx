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



        // --- UI Interaction Logic ---
        function giveSyrup() {
            const btn = document.getElementById('syrup-btn');
            const bottle = document.getElementById('bottle');
            const particles = document.getElementById('particles');
            const healthBar = document.getElementById('health-bar');
            const healthPct = document.getElementById('health-pct');
            const childIcon = document.getElementById('child-icon');
            const childBg = document.getElementById('child-bg');

            // Disable button
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
            btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader" data-width="16"></span> Лечим...`;

            // 1. Show Bottle
            bottle.classList.remove('opacity-0', 'translate-y-4');
            bottle.classList.add('opacity-100', 'translate-y-0');

            setTimeout(() => {
                // 2. Rotate Bottle (Pouring)
                bottle.style.transform = "rotate(-45deg) translateY(-5px)";
                
                // 3. Create Particles (Simple DOM manipulation for effect)
                for(let i=0; i<10; i++) {
                    const p = document.createElement('div');
                    p.className = 'absolute bg-orange-400 rounded-full opacity-0';
                    const size = Math.random() * 6 + 4;
                    p.style.width = `${size}px`;
                    p.style.height = `${size}px`;
                    p.style.left = '10%';
                    p.style.top = '50%';
                    p.style.transition = `all ${1 + Math.random()}s cubic-bezier(0.4, 0, 0.2, 1)`;
                    particles.appendChild(p);

                    // Trigger animation frame
                    setTimeout(() => {
                        p.style.opacity = '1';
                        p.style.left = '90%'; // Move to child
                        p.style.top = `${50 + (Math.random()*40 - 20)}%`; // Spread
                    }, 50 + i * 100);

                    // Cleanup
                    setTimeout(() => { p.remove(); }, 2000);
                }

                // 4. Update Health & Child State
                setTimeout(() => {
                    // Update Bar
                    healthBar.style.width = '100%';
                    healthBar.classList.remove('from-red-400', 'to-red-500', 'shadow-[0_0_10px_rgba(239,68,68,0.5)]');
                    healthBar.classList.add('from-green-400', 'to-green-500', 'shadow-[0_0_10px_rgba(34,197,94,0.5)]');
                    
                    // Update Percentage
                    let pct = 35;
                    const interval = setInterval(() => {
                        pct += 5;
                        if(pct >= 100) {
                            pct = 100;
                            clearInterval(interval);
                        }
                        healthPct.innerText = pct + '%';
                    }, 50);

                    // Update Child Visuals
                    childBg.classList.remove('bg-slate-50', 'border-slate-100');
                    childBg.classList.add('bg-green-50', 'border-green-100', 'scale-110');
                    
                    // Change Icon
                    // We need to re-render iconify here strictly speaking, or just swap innerHTML if using raw SVG, 
                    // but since Iconify replaces the span, let's just reset the HTML content.
                    childBg.innerHTML = '<span class="iconify text-green-500" data-icon="lucide:smile" data-width="32"></span>';
                    // Re-scan for new icon
                    if (window.Iconify) { window.Iconify.scan(); }

                }, 800);

                // Reset Bottle
                setTimeout(() => {
                    bottle.style.transform = ""; // Reset rotation
                    bottle.classList.add('opacity-0', 'translate-y-4'); // Hide
                    bottle.classList.remove('opacity-100', 'translate-y-0');
                    
                    // Reset Button Text
                    btn.innerHTML = `<span>Здоров!</span> <span class="iconify" data-icon="lucide:check" data-width="16"></span>`;
                    btn.classList.remove('bg-slate-900', 'hover:bg-orange-500');
                    btn.classList.add('bg-green-600', 'hover:bg-green-700');
                }, 2000);

            }, 500);
        }

        // --- Three.js Background Animation (Breathing Lungs) ---
        // We will create abstract "Lungs" using two blobs (Spheres with noise)
        
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            // Light fog to blend with site background
            scene.fog = new THREE.FogExp2(0xffffff, 0.03); 

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);

            const dirLight = new THREE.DirectionalLight(0xffafcc, 0.8);
            dirLight.position.set(5, 5, 5);
            scene.add(dirLight);

            const pointLight = new THREE.PointLight(0xff9f43, 0.5);
            pointLight.position.set(-5, -5, 2);
            scene.add(pointLight);

            // Geometry - Using a simplified approach for blobs
            // In a real production environment, we'd use shaders for perfect noise. 
            // Here we use built-in geometry distortion.
            const geometry = new THREE.IcosahedronGeometry(1.5, 3); // High detail
            
            // Material - Glossy, organic look
            const material = new THREE.MeshPhysicalMaterial({
                color: 0xffe4e6, // Soft Pink
                roughness: 0.2,
                metalness: 0.1,
                clearcoat: 0.8,
                clearcoatRoughness: 0.1,
                flatShading: false,
            });

            // Create Left Lung Lobe
            const leftLung = new THREE.Mesh(geometry, material);
            leftLung.position.x = -1.6;
            // Scale to look more like a lung lobe (taller)
            leftLung.scale.set(1, 1.4, 1);
            
            // Create Right Lung Lobe
            const rightLung = new THREE.Mesh(geometry, material);
            rightLung.position.x = 1.6;
            rightLung.scale.set(1, 1.4, 1);

            const lungsGroup = new THREE.Group();
            lungsGroup.add(leftLung);
            lungsGroup.add(rightLung);
            scene.add(lungsGroup);

            // Store original positions for vertices for "breathing" animation
            // Note: Accessing vertices directly depends on Three.js version. 
            // For robustness in this single-file, we will animate SCALE which simulates breathing perfectly.

            // Animation Loop
            let time = 0;

            function animate() {
                requestAnimationFrame(animate);
                time += 0.02;

                // Breathing Motion (Sin Wave)
                // Expansion phase is faster, contraction slower? Let's just do a smooth sine.
                const breathScale = 1 + Math.sin(time) * 0.05; // 5% expansion
                const breathY = Math.sin(time) * 0.1;

                lungsGroup.scale.set(breathScale, breathScale, breathScale);
                
                // Slight rotation to show 3D nature
                lungsGroup.rotation.y = Math.sin(time * 0.2) * 0.1;
                lungsGroup.rotation.x = Math.sin(time * 0.1) * 0.05;

                // Subtle floating
                lungsGroup.position.y = Math.sin(time * 0.5) * 0.2;

                renderer.render(scene, camera);
            }

            animate();

            // Resize Handle
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        // Initialize 3D when DOM is ready
        document.addEventListener('DOMContentLoaded', initThreeJS);

    
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
      

<div id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<span className="iconify" data-icon="lucide:wind" data-width="18"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800">ФЛУИФОРТЕ</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-orange-500 transition-colors" href="#">О препарате</a>
<a className="hover:text-orange-500 transition-colors" href="#">Детям</a>
<a className="hover:text-orange-500 transition-colors" href="#">Взрослым</a>
<a className="hover:text-orange-500 transition-colors" href="#">Инструкция</a>
</div>
<button className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10">
                Купить сейчас
            </button>
</div>
</nav>
<main className="pt-24 pb-12 px-6">

<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
<div className="flex flex-col gap-6 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 w-fit">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-orange-600 tracking-wide uppercase">Инновационная формула</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Дышите <br/>
<span className="gradient-text">Свободно</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed font-normal">
                    Флуифорте восстанавливает работу легких и возвращает радость глубокого дыхания. Яркое решение для здоровья всей семьи.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3.5 rounded-xl font-medium shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300">
<span>Для детей и взрослых</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-200 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-all">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
<span>Как это работает?</span>
</button>
</div>
<div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="16"></span>
<span>Быстрое действие</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="16"></span>
<span>Приятный вкус</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="16"></span>
<span>Без сахара</span>
</div>
</div>
</div>

<div className="relative z-10 lg:h-[600px] flex items-center justify-center">

<div className="glass-panel w-full max-w-md p-8 rounded-3xl shadow-2xl shadow-slate-200/50 relative overflow-hidden group lung-float">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-800">Симуляция лечения</h3>
<p className="text-xs text-slate-500 mt-1">Нажмите кнопку, чтобы вылечить</p>
</div>
<div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
<span className="iconify text-pink-500" data-icon="lucide:heart-pulse" data-width="20"></span>
</div>
</div>

<div className="flex justify-between items-end mb-8 relative h-32">

<div className="flex flex-col items-center gap-2 transition-transform duration-500" id="mother-char">
<div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm relative">
<span className="iconify text-blue-600" data-icon="lucide:smile" data-width="32"></span>

<div className="absolute -right-4 top-0 opacity-0 transition-all duration-700 transform translate-y-4" id="bottle">
<div className="w-6 h-8 bg-orange-500 rounded-md shadow-lg flex items-center justify-center">
<span className="text-[8px] text-white font-bold">F</span>
</div>
</div>
</div>
<span className="text-xs font-medium text-slate-500">Мама</span>
</div>

<div className="flex-1 border-b-2 border-dashed border-slate-200 mb-8 mx-4 relative">

<div className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 overflow-hidden pointer-events-none" id="particles"></div>
</div>

<div className="flex flex-col items-center gap-2" id="child-char">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm transition-all duration-500" id="child-bg">
<span className="iconify text-slate-400" data-icon="lucide:frown" data-width="32" id="child-icon"></span>
</div>
<span className="text-xs font-medium text-slate-500">Малыш</span>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between text-xs font-medium text-slate-600">
<span>Здоровье легких</span>
<span id="health-pct">35%</span>
</div>
<div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[35%] bg-gradient-to-r from-red-400 to-red-500 rounded-full health-fill shadow-[0_0_10px_rgba(239,68,68,0.5)]" id="health-bar"></div>
</div>
</div>

<button className="mt-8 w-full bg-slate-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 flex items-center justify-center gap-2" id="syrup-btn" onclick="giveSyrup()">
<span>Дать Флуифорте</span>
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Почему ФЛУИФОРТЕ?</h2>
<p className="text-slate-500 mt-4 max-w-xl mx-auto">Комплексное действие для восстановления естественного дыхания и защиты легких.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:waves" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Разжижение мокроты</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Активная формула эффективно разжижает вязкий секрет, облегчая его выведение из дыхательных путей.
                    </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Восстановление эпителия</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Способствует регенерации слизистой оболочки бронхов, возвращая легким естественную защиту.
                    </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:clock" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Длительное действие</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Эффект сохраняется до 8 дней после окончания приема, обеспечивая стойкое выздоровление.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row gap-8">
<div className="flex-1 bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-semibold mb-4">Для детей</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Сироп 2%</h3>
<p className="text-slate-500 text-sm mb-6">Вкус вишни, который любят дети. Бережное лечение с первых дней кашля.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                            С мерным стаканчиком
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                            100 мл флакон
                        </li>
</ul>
<button className="w-full bg-white border border-slate-200 text-slate-900 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">Подробнее</button>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tl from-pink-400 to-orange-300 rounded-full opacity-20 blur-2xl"></div>
</div>
<div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-semibold mb-4 backdrop-blur-sm border border-white/10">Для взрослых</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Гранулы 5г</h3>
<p className="text-slate-300 text-sm mb-6">Максимальная концентрация для быстрого восстановления рабочего ритма.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-300">
<span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                            Удобные саше
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                            Цитрусовый вкус
                        </li>
</ul>
<button className="w-full bg-orange-500 border border-transparent text-white py-2.5 rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">Подробнее</button>
</div>

<div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-30 blur-3xl"></div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-200 rounded-md flex items-center justify-center text-slate-500">
<span className="iconify" data-icon="lucide:wind" data-width="14"></span>
</div>
<span className="text-sm font-semibold text-slate-700">ФЛУИФОРТЕ</span>
</div>
<p className="text-xs text-slate-400 text-center md:text-right">
                ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. НЕОБХОДИМО ОЗНАКОМИТЬСЯ С ИНСТРУКЦИЕЙ.<br/>
                © 2023 Все права защищены.
            </p>
</div>
</footer>



    </>
  );
}
