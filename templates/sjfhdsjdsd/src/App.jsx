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



// Select product from mini-products
function selectProduct(productName, price) {
setTimeout(() => {
const select = document.querySelector('select[name="task_type"]');
const textarea = document.querySelector('textarea[name="message"]');
if (select) select.value = 'Мини-услуга для стартапа';
if (textarea) textarea.value = `Интересует: ${productName} (${price})`;
textarea.focus();
}, 100);
}
// Form submission handler
document.getElementById('contact-form').addEventListener('submit', async function(e) {
e.preventDefault();
const form = e.target;
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoader = document.getElementById('btn-loader');
const formStatus = document.getElementById('form-status');
// Show loading state
submitBtn.disabled = true;
btnText.textContent = 'Отправка...';
btnLoader.classList.remove('hidden');
formStatus.classList.add('hidden');
try {
const response = await fetch(form.action, {
method: 'POST',
body: new FormData(form),
headers: {
'Accept': 'application/json'
}
});
if (response.ok) {
// Success
formStatus.textContent = '✓ Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.';
formStatus.className = 'text-center py-3 rounded text-sm bg-green-500/20 text-green-300 border border-green-500/30';
formStatus.classList.remove('hidden');
form.reset();
} else {
throw new Error('Ошибка отправки');
}
} catch (error) {
// Error
formStatus.textContent = '✗ Произошла ошибка. Попробуйте еще раз или напишите нам в Telegram.';
formStatus.className = 'text-center py-3 rounded text-sm bg-red-500/20 text-red-300 border border-red-500/30';
formStatus.classList.remove('hidden');
} finally {
// Reset button state
submitBtn.disabled = false;
btnText.textContent = 'Отправить заявку';
btnLoader.classList.add('hidden');
}
});



// Select product from mini-products
function selectProduct(productName, price) {
setTimeout(() => {
const select = document.querySelector('select[name="task_type"]');
const textarea = document.querySelector('textarea[name="message"]');
if (select) select.value = 'Мини-услуга для стартапа';
if (textarea) textarea.value = `Интересует: ${productName} (${price})`;
textarea.focus();
}, 100);
}
// Form submission handler
document.getElementById('contact-form').addEventListener('submit', async function(e) {
e.preventDefault();
const form = e.target;
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoader = document.getElementById('btn-loader');
const formStatus = document.getElementById('form-status');
// Show loading state
submitBtn.disabled = true;
btnText.textContent = 'Отправка...';
btnLoader.classList.remove('hidden');
formStatus.classList.add('hidden');
try {
const response = await fetch(form.action, {
method: 'POST',
body: new FormData(form),
headers: {
'Accept': 'application/json'
}
});
if (response.ok) {
// Success
formStatus.textContent = '✓ Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.';
formStatus.className = 'text-center py-3 rounded text-sm bg-green-500/20 text-green-300 border border-green-500/30';
formStatus.classList.remove('hidden');
form.reset();
} else {
throw new Error('Ошибка отправки');
}
} catch (error) {
// Error
formStatus.textContent = '✗ Произошла ошибка. Попробуйте еще раз или напишите нам в Telegram.';
formStatus.className = 'text-center py-3 rounded text-sm bg-red-500/20 text-red-300 border border-red-500/30';
formStatus.classList.remove('hidden');
} finally {
// Reset button state
submitBtn.disabled = false;
btnText.textContent = 'Отправить заявку';
btnLoader.classList.add('hidden');
}
});



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
              if (typeof THREE === 'undefined') return;

              const container = document.getElementById('hero-3d');
              if (!container) return;

              const scene = new THREE.Scene();
              scene.fog = new THREE.FogExp2(0x0b061d, 0.002);

              const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
              camera.position.z = 5;

              const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
              renderer.setSize(container.clientWidth, container.clientHeight);
              renderer.setPixelRatio(window.devicePixelRatio);
              container.appendChild(renderer.domElement);

              // Group to rotate
              const group = new THREE.Group();
              scene.add(group);

              // Main Shape
              const geometry = new THREE.IcosahedronGeometry(2.2, 0);
              const material = new THREE.MeshBasicMaterial({
                color: 0x6366f1,
                wireframe: true,
                transparent: true,
                opacity: 0.2
              });
              const sphere = new THREE.Mesh(geometry, material);
              group.add(sphere);

              // Inner Core
              const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
              const coreMat = new THREE.MeshBasicMaterial({
                 color: 0x818cf8,
                 wireframe: true,
                 transparent: true,
                 opacity: 0.4
              });
              const core = new THREE.Mesh(coreGeo, coreMat);
              group.add(core);

              // Particles
              const particlesGeometry = new THREE.BufferGeometry();
              const particlesCount = 1000;
              const posArray = new Float32Array(particlesCount * 3);
              for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 15;
              }
              particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
              const particlesMaterial = new THREE.PointsMaterial({
                size: 0.03,
                color: 0xa5b4fc,
                transparent: true,
                opacity: 0.6
              });
              const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
              scene.add(particlesMesh);

              // Animation
              function animate() {
                requestAnimationFrame(animate);
                group.rotation.x += 0.001;
                group.rotation.y += 0.002;

                core.rotation.x -= 0.002;
                core.rotation.y -= 0.004;

                particlesMesh.rotation.y = Date.now() * 0.0001;

                renderer.render(scene, camera);
              }
              animate();

              // Resize
              window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
              });
            });
    


      // Select product from mini-products
      function selectProduct(productName, price) {
        setTimeout(() => {
          const select = document.querySelector('select[name="task_type"]');
          const textarea = document.querySelector('textarea[name="message"]');
          if (select) select.value = 'Мини-услуга для стартапа';
          if (textarea) textarea.value = `Интересует: ${productName} (${price})`;
          textarea.focus();
        }, 100);
      }

      // Form submission handler
      document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
          e.preventDefault();

          const submitBtn = document.getElementById('submit-btn');
          const btnText = document.getElementById('btn-text');
          const btnLoader = document.getElementById('btn-loader');
          const formStatus = document.getElementById('form-status');

          // Show loading state
          submitBtn.disabled = true;
          btnText.textContent = 'Отправка...';
          btnLoader.classList.remove('hidden');
          formStatus.classList.add('hidden');

          try {
            const response = await fetch(form.action, {
              method: 'POST',
              body: new FormData(form),
              headers: {
                'Accept': 'application/json'
              }
            });

            if (response.ok) {
              // Success
              formStatus.textContent = '✓ Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.';
              formStatus.className = 'text-center py-3 rounded text-sm bg-green-500/20 text-green-300 border border-green-500/30';
              formStatus.classList.remove('hidden');
              form.reset();
            } else {
              throw new Error('Ошибка отправки');
            }
          } catch (error) {
            // Error
            formStatus.textContent = '✗ Произошла ошибка. Попробуйте еще раз или напишите нам в Telegram.';
            formStatus.className = 'text-center py-3 rounded text-sm bg-red-500/20 text-red-300 border border-red-500/30';
            formStatus.classList.remove('hidden');
          } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.textContent = 'Отправить заявку';
            btnLoader.classList.add('hidden');
          }
        });
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
      
<div className="fixed top-0 w-full h-10 z-[60] bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 border-b border-white/10 flex items-center justify-center gap-3 px-4 text-xs font-medium text-white shadow-lg backdrop-blur-md">
<span className="px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold tracking-wider uppercase text-white shadow-[0_0_10px_rgba(255,255,255,0.25)] backdrop-blur-sm">
        New
      </span>
<span className="text-indigo-50 tracking-tight">
        Анализ 5 конкурентов —
        <span className="font-bold text-white">10 000 ₽</span>
</span>
<a className="flex items-center gap-1.5 bg-white text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-50 transition-all shadow-lg shadow-indigo-900/20 text-[11px] font-bold uppercase tracking-wide" href="#contact">
        Заказать
        <svg className="w-3 h-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<nav className="fixed w-full z-50 border-b border-white/5 bg-[#0b061d]/80 backdrop-blur-md top-10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="relative flex-shrink-0 h-14 w-14 drop-shadow-[0_0_15px_rgba(91,137,247,0.6)]">
<svg className="w-full h-full" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">

<rect fill="#5B89F7" height="24" width="24" x="4" y="12"></rect>

<path d="M12 4H30L36 10V28H12V4Z" fill="#1E3A8A"></path>

<path d="M30 4V10H36" fill="#8AB4F8"></path>

<text fill="white" fontFamily="Inter, sans-serif" fontSize="16" font-weight="700" x="15" y="22">
                R
              </text>
<text fill="white" fontFamily="Inter, sans-serif" fontSize="11" font-weight="500" x="26" y="22">
                c
              </text>
</svg>
</div>

<div className="flex flex-col">
<span className="text-base font-bold text-white leading-none tracking-tight">
              REGENTA
            </span>
<span className="text-[10px] text-gray-300 uppercase tracking-[0.25em] leading-none mt-1">
              consulting
            </span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#services">
            Услуги
          </a>
<a className="hover:text-white transition-colors" href="#cases">Кейсы</a>
<a className="text-indigo-300 hover:text-indigo-100 transition-colors flex items-center gap-1" href="#startups">
            Микро-продукты
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
</a>
<a className="hover:text-white transition-colors" href="#company">
            О компании
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded transition-all" href="#contact">
            Связаться
          </a>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen" id="hero-3d"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="uppercase text-xs font-medium text-indigo-200 tracking-wide">
            Strategic Consulting Group
          </span>
</div>
<h1 className="font-semibold tracking-tighter text-white leading-[1.1] mb-6 text-3xl md:text-5xl lg:text-6xl">
          Regenta Consulting —
          <br className="hidden md:block"/>
<span className="text-gradient">
            стратегическая консалтинговая группа
          </span>
</h1>
<p className="text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-10 text-sm md:text-base">
          Создаём прикладные стратегии роста, развиваем маркетинг и усиливаем
          бизнес-модели компаний в конкурентных рынках.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="shiny-cta w-full sm:w-auto flex items-center justify-center gap-2 group" href="#contact">
<span>Получить консультацию</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-white/5 text-white border border-white/10 font-medium text-sm rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#startups">
            Микро продукты
            <svg className="lucide lucide-zap w-4 h-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 md:mt-32 pt-10 border-t border-white/5">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">
              100+
            </div>
<div className="text-xs text-gray-500 uppercase tracking-widest">
              Проектов
            </div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">
              12
            </div>
<div className="text-xs text-gray-500 uppercase tracking-widest">
              Рынков
            </div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">
              x3
            </div>
<div className="text-xs text-gray-500 uppercase tracking-widest">
              Рост клиентов
            </div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">
              24/7
            </div>
<div className="text-xs text-gray-500 uppercase tracking-widest">
              Поддержка
            </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-secondary border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:mb-16">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Компетенции
          </h2>
<p className="text-gray-400 max-w-xl text-sm md:text-base font-light">
            Мы фокусируемся на ключевых драйверах роста. Каждая услуга — это
            глубокая аналитика и прикладные решения.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-lg">

<div className="bg-[#0A1A3F] p-8 hover:bg-[#0f2352] transition-colors group relative">
<div className="w-10 h-10 bg-indigo-500/10 rounded flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Стратегия роста
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Разработка долгосрочных планов развития, поиск точек кратного
              роста и масштабирования.
            </p>
</div>

<div className="bg-[#0A1A3F] p-8 hover:bg-[#0f2352] transition-colors group relative">
<div className="w-10 h-10 bg-indigo-500/10 rounded flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg className="lucide lucide-megaphone w-5 h-5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
<path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
<path d="M8 6v8"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              GTM и Маркетинг
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Go-to-Market стратегии, позиционирование и построение эффективных
              каналов привлечения.
            </p>
</div>

<div className="bg-[#0A1A3F] p-8 hover:bg-[#0f2352] transition-colors group relative">
<div className="w-10 h-10 bg-indigo-500/10 rounded flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x1="8" x2="16" y1="6" y2="6"></line>
<line x1="16" x2="16" y1="14" y2="18"></line>
<path d="M16 10h.01"></path>
<path d="M12 10h.01"></path>
<path d="M8 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M8 14h.01"></path>
<path d="M12 18h.01"></path>
<path d="M8 18h.01"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Юнит-экономика и бизнес-модель
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Расчет и оптимизация бизнес-модели, поиск прибыльных сегментов и
              когорт.
            </p>
</div>

<div className="bg-[#0A1A3F] p-8 hover:bg-[#0f2352] transition-colors group relative">
<div className="w-10 h-10 bg-indigo-500/10 rounded flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6"></path>
<path d="M12 21V3"></path>
<path d="M19 21V9"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Аналитика и исследования рынков
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Глубокие исследования конкурентов, трендов и потребительского
              поведения.
            </p>
</div>

<div className="bg-[#0A1A3F] p-8 hover:bg-[#0f2352] transition-colors group relative">
<div className="w-10 h-10 bg-indigo-500/10 rounded flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg className="lucide lucide-git-merge w-5 h-5" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M6 21V9a9 9 0 0 0 9 9"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Организационное развитие и процессы
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Настройка операционной эффективности и структурных изменений
              внутри компании.
            </p>
</div>

<div className="bg-[#0A1A3F] p-8 hover:bg-[#0f2352] transition-colors group relative">
<div className="w-10 h-10 bg-indigo-500/10 rounded flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Продуктовая стратегия
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Поиск Product-Market Fit, формирование ценностного предложения и
              роадмапа.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="startups">
<div className="absolute inset-0 bg-[#02040a]"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-900/10 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<div className="text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2">
              Fixed Price / Fast Delivery
            </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
              Микро-продукты для бизнеса
            </h2>
<p className="text-gray-400 text-sm md:text-base font-light">
              Точечные решения с фиксированной ценой: аудит, аналитика,
              стратегии и исследования. Результат за несколько дней.
            </p>
</div>
<div>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded transition-all" href="#contact">
              Обсудить проект
            </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-sm font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                10 000 ₽
              </span>
</div>
<h4 className="text-white font-medium mb-2">Анализ 5 конкурентов</h4>
<p className="text-xs text-gray-400 mb-6 h-10">
              Детальный разбор сильных и слабых сторон, продукта и каналов
              продаж.
            </p>
<a className="w-full py-2 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors text-left px-4 flex justify-between items-center group-hover:border-indigo-500/30" href="#contact" onclick="selectProduct('Анализ 5 конкурентов', '10 000 ₽')">
              Заказать
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<span className="text-sm font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                12 000 ₽
              </span>
</div>
<h4 className="text-white font-medium mb-2">Unit-экономика (Light)</h4>
<p className="text-xs text-gray-400 mb-6 h-10">
              Расчет сходимости экономики, CAC/LTV, поиск точек безубыточности.
            </p>
<a className="w-full py-2 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors text-left px-4 flex justify-between items-center group-hover:border-indigo-500/30" href="#contact" onclick="selectProduct('Unit-экономика (Light)', '12 000 ₽')">
              Заказать
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
<path d="M15 5.764v15"></path>
<path d="M9 3.236v15"></path>
</svg>
</div>
<span className="text-sm font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                15 000 ₽
              </span>
</div>
<h4 className="text-white font-medium mb-2">Быстрый GTM-roadmap</h4>
<p className="text-xs text-gray-400 mb-6 h-10">
              Пошаговый план выхода на рынок на ближайшие 3-6 месяцев.
            </p>
<a className="w-full py-2 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors text-left px-4 flex justify-between items-center group-hover:border-indigo-500/30" href="#contact" onclick="selectProduct('Быстрый GTM-roadmap', '15 000 ₽')">
              Заказать
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</div>
<span className="text-sm font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                18 000 ₽
              </span>
</div>
<h4 className="text-white font-medium mb-2">Мини-исследование</h4>
<p className="text-xs text-gray-400 mb-6 h-10">
              Оценка объема рынка (TAM/SAM/SOM) и ключевых трендов.
            </p>
<a className="w-full py-2 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors text-left px-4 flex justify-between items-center group-hover:border-indigo-500/30" href="#contact" onclick="selectProduct('Мини-исследование', '18 000 ₽')">
              Заказать
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>
<span className="text-sm font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                10 000 ₽
              </span>
</div>
<h4 className="text-white font-medium mb-2">Аудит маркетинга</h4>
<p className="text-xs text-gray-400 mb-6 h-10">
              Экспресс-анализ текущих воронок, креативов и конверсий.
            </p>
<a className="w-full py-2 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors text-left px-4 flex justify-between items-center group-hover:border-indigo-500/30" href="#contact" onclick="selectProduct('Аудит маркетинга', '10 000 ₽')">
              Заказать
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0b061d]" id="cases">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-2">
              Избранные кейсы
            </h2>
<p className="text-gray-400 text-sm">
              Реальные задачи и измеримые результаты.
            </p>
</div>

<div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-[#1C0F3A]">
              Все
            </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 hover:text-white transition-colors">
              FinTech
            </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 hover:text-white transition-colors">
              E-com
            </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 hover:text-white transition-colors">
              SaaS
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md text-xs font-medium rounded text-white border border-white/10">
                  EdTech
                </span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-indigo-300 transition-colors">
              Стратегия масштабирования на рынок LATAM
            </h3>
<div className="flex items-center gap-4 text-xs text-gray-500">
<span>Рост выручки x2.5</span>
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
<span>3 месяца</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md text-xs font-medium rounded text-white border border-white/10">
                  Logistics
                </span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-indigo-300 transition-colors">
              Оптимизация юнит-экономики сервиса доставки
            </h3>
<div className="flex items-center gap-4 text-xs text-gray-500">
<span>Сокращение burn rate на 40%</span>
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
<span>2 месяца</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-secondary" id="company">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Доказательная методология
          </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full border border-indigo-500/50 flex items-center justify-center text-indigo-400 text-xs">
                  1
                </div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">
                  Данные превыше мнений
                </h4>
<p className="text-gray-400 text-sm leading-relaxed">
                  Мы не используем абстрактные теории. Каждое решение базируется
                  на цифрах, исследованиях и бенчмарках рынка.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full border border-indigo-500/50 flex items-center justify-center text-indigo-400 text-xs">
                  2
                </div>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-1">
                  Фокус на внедрение
                </h4>
<p className="text-gray-400 text-sm leading-relaxed">
                  Стратегия без реализации бесполезна. Мы сопровождаем клиента
                  до получения измеримого финансового результата.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full border border-indigo-500/50 flex items-center justify-center text-indigo-400 text-xs">
                  3
                </div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">
                  Прозрачность процессов
                </h4>
<p className="text-gray-400 text-sm leading-relaxed">
                  Еженедельные спринты, понятная отчетность и прямой контакт с
                  ключевыми консультантами.
                </p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full"></div>
<div className="relative glass-card p-8 rounded-2xl border border-white/10">
<blockquote className="text-lg md:text-xl font-light text-white leading-relaxed mb-6">
              "Reg Cons помогли нам полностью пересобрать GTM-стратегию. Вместо
              хаотичных тестов мы получили четкую систему, которая начала
              приносить лиды уже через 3 недели."
            </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-sm font-medium text-white">Александр В.</div>
<div className="text-xs text-gray-500">CEO, TechStartup Inc.</div>
</div>
</div>
</div>
</div>
</div>
</section>


<footer className="bg-secondary pt-20 pb-10 border-t border-white/5" id="contact">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
              Готовы усилить
              <br/>
              ваш бизнес?
            </h2>
<p className="text-gray-400 text-sm mb-8 font-light">
              Оставьте заявку на первичную консультацию или выберите
              мини-услугу. Мы свяжемся с вами в течение 24 часов.
            </p>
<div className="space-y-4 text-sm text-gray-300">
<div className="flex items-center gap-3">
<svg className="lucide lucide-mail w-4 h-4 text-indigo-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<a className="hover:text-white transition-colors" href="mailto:hello@regcons.com">
                  hello@regcons.com
                </a>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-phone w-4 h-4 text-indigo-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<a className="hover:text-white transition-colors" href="https://wa.me/message/VKJRG7Q2WFO6D1">
                  WhatsApp
                </a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-send w-4 h-4 text-indigo-400" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
<a className="hover:text-white transition-colors" href="https://t.me/Regenta_consulting">
                  Telegram
                </a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center"></div>
</div>
</div>

<div className="bg-white/5 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<form action="https://formspree.io/f/xwpkvqjn" className="space-y-4" id="contact-form" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Имя
                  </label>
<input className="w-full bg-[#1C0F3A] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" name="name" placeholder="Иван Иванов" required="required" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Компания
                  </label>
<input className="w-full bg-[#1C0F3A] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" name="company" placeholder="Название" type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Контакты
                </label>
<input className="w-full bg-[#1C0F3A] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" name="contact" placeholder="Email или Telegram" required="required" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Тип задачи
                </label>
<div className="relative">
<select className="w-full bg-[#1C0F3A] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none" name="task_type">
<option value="Консультация (Стратегия)">
                      Консультация (Стратегия)
                    </option>
<option selected="selected" value="Мини-услуга для стартапа">
                      Мини-услуга для стартапа
                    </option>
<option value="Маркетинговый аудит">
                      Маркетинговый аудит
                    </option>
<option value="Другое">Другое</option>
</select>
<svg className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Сообщение
                </label>
<textarea className="w-full bg-[#1C0F3A] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" name="message" placeholder="Кратко о задаче..." rows="3"></textarea>
</div>
<input name="_subject" type="hidden" value="Новая заявка с сайта Regenta Consulting"/>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded text-sm transition-all flex justify-center items-center gap-2" id="submit-btn" type="submit">
<span id="btn-text">Отправить заявку</span>
<svg className="hidden animate-spin w-4 h-4" fill="none" id="btn-loader" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</button>
<div className="hidden text-center py-3 rounded text-sm" id="form-status"></div>
<p className="text-[10px] text-gray-500 text-center mt-2">
                Нажимаю кнопку, вы соглашаетесь с политикой конфиденциальности.
              </p>
<input name="_subject" type="hidden" value="Новая заявка с сайта Regenta Consulting"/>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 text-xs text-gray-600 border-white/5 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="">ИП Амбарцумян Е.С ИНН 772577794810</p>
<div className="flex gap-6">
<a className="hover:text-gray-400 transition-colors" href="#">
              Политика конфиденциальности
            </a>
<a className="hover:text-gray-400 transition-colors" href="#">
              Договор оферты
            </a>
</div>
</div>
</div>
</footer>





    </>
  );
}
